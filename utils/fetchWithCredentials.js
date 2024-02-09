import { useRouter } from 'next/router'
import {getSession} from '@/utils/session'

const API_URL = process.env.API_URL

/**
 * Retorna o valor de "Authorization" pronto.
 * @returns {string}
 */
function getAuthorization()
{
    const token = getSession('token')

    if (token === null)
        return ''

    return `${token.token_type} ` + token.access_token
}

/**
 * Faz uma requisição incluindo o token de autenticação.
 *  Obs: caso o status for 401, o servidor é redirecionado para o login
 *
 * @param {String} input
 * @param {Object} init
 * @returns {Promise<Response>}
 */
export async function fetchWithCredentials(input, init= {}) {

    const router = useRouter()

    if (init.headers === undefined)
        init.headers = {}

    init.headers[`Accept`] = 'application/json';
    init.headers[`Content-Type`] = 'application/json';
    init.headers[`Origin`] = '';
    init.headers[`Authorization`] = getAuthorization();

    const response = await fetch(API_URL + input, init)

    if (response.status === 401)
        await router.push('/login')

    return response
}