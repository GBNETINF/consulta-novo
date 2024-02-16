import React, { Component } from "react";
import { withRouter } from 'next/router'
import {getSession} from '@/utils/session'

const API_URL = process.env.NEXT_PUBLIC_API_URL

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
 * Prepara o header para o feach
 * @param init
 * @returns {{}}
 */
function prepareInit(init= {}) {

    if (init.headers === undefined)
        init.headers = {}

    init.headers[`Accept`] = 'application/json';
    init.headers[`Content-Type`] = 'application/json';
    init.headers[`Origin`] = '';

    return init
}

class Fetchs extends Component {
    constructor(props) {
        super(props);
    }

    redirect = (event) => {
        this.props.router.push('/login')
    }

    /**
     * Faz uma requisição incluindo o token de autenticação.
     *  Obs: caso o status for 401, o servidor é redirecionado para o login
     *
     * @param {String} input
     * @param {Object} init
     * @returns {Promise<Response>}
     */
    static async fetchWithCredentials(input, init= {}) {
        init = prepareInit(init)
        init.headers[`Authorization`] = getAuthorization();

        const response = await fetch(API_URL + input, init)

        if (response.status === 401)
            await this.redirect

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
    static async fetchWithoutCredentials(input, init= {}) {
        init = prepareInit(init)

        return await fetch(API_URL + input, init)
    }

}

export default withRouter(Fetchs);