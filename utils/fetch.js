import Router from 'next/router'
import {getSession} from '@/utils/session'

/**
 * URL para consumo da API
 *
 * @type {String}
 */
const API_URL = process.env.NEXT_PUBLIC_API_URL

/**
 * Retorna o valor de "Authorization" pronto
 *
 * @returns {string}
 */
function getAuthorization()
{
    const token = getSession('token')

    if (token === null)
        return ''

    return `${token.token_type} ${token.access_token}`
}

/**
 * Prepara o header para o feach
 *
 * @param {Object} init
 *      Objeto com as configurações da requisição
 * @returns {Object}
 */
function prepareInit(init= {}) {

    if (init.headers === undefined)
        init.headers = {}

    init.headers[`Accept`] = 'application/json';
    init.headers[`Content-Type`] = 'application/json';
    init.headers[`Origin`] = '';

    return init
}

/**
 * Redireciona o server
 *
 * @param href
 *      Local para onde deve ser feito o redirecionamento.
 */
async function redirect (href) {
    await Router.push(href)
}

/**
 * Faz uma requisição incluindo o token de autenticação.
 *  Obs: caso o status for 401, o servidor é redirecionado para o login
 *
 * @param {String} input
 *      Rota para qual vai ser realizado o consumo.
 * @param {Object} init
 *      Dados da requisição.
 * @returns {Promise<Response>}
 */
export async function fetchWithCredentials(input, init= {}) {
    init = prepareInit(init)
    init.headers[`Authorization`] = getAuthorization();

    const response = await fetch(API_URL + input, init)

    if (response.status === 401)
        await redirect('/login')

    return response
}

/**
 * Faz uma requisição sem token e sem autenticação
 *  Obs: Usar em casos externos do sistema
 *
 * @param {String} input
 * @param {Object} init
 * @returns {Promise<Response>}
 */
export async function fetchWithoutCredentials(input, init= {}) {
    init = prepareInit(init)

    return await fetch(API_URL + input, init)
}
