import Cookie from 'universal-cookie'
import * as jwt from 'jsonwebtoken';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

/**
 * Palavra segredo para encriptografar dados do cookie.
 *
 * @type {string}
 */
const secret = 'password-hash';

/**
 * Classe responsável pelo controle dos cookies.
 * @type {Cookie}
 */
const cookies = new Cookie(null, { path: '/'})

/**
 * Nome da session que será ou está definida.
 *
 * @type {string}
 */
const sessionName = 'session'

/**
 * Configurações padrões da session.
 * @type {{path: string, maxAge: number, sameSite: string, httpOnly: boolean, secure: boolean}}
 */
const defaultSessionConfig = {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
    sameSite: "",
    path: "/",
}

/**
 * Recupera os dados da session para serem alterados, caso não exista
 * é criada a session com os dados.
 *
 * @returns {Object}
 */
function getSessionDataOrCreateIfNotExists() {
    let session = cookies.get(sessionName)

    if (session) {
        session = jwt.verify(session, secret)

        return session
    }

    return {}
}

/**
 * Salva uma nova session.
 *
 * @param {String} name
 *      Nome da session que deseja salvar.
 * @param {*} value
 *      Valor desejado.
 */
export function setSession(name, value) {
    let session = getSessionDataOrCreateIfNotExists()

    session[name] = value

    session = JSON.stringify(session)

    let encryptSession = jwt.sign(session, secret);

    cookies.set(sessionName, encryptSession, defaultSessionConfig);
}

/**
 * Retorna a session caso exista, ou null caso não exista.
 *
 * @param {String} name
 *      Nome da session que deseja recuperar.
 * @returns {*|null}
 */
export function getSession(name) {
    let session = getSessionDataOrCreateIfNotExists()

    if (session[name])
        return session[name];

    return null;
}

/**
 * Destroi a session desejada.
 *
 * @param {String|null}name
 *      Nome da session desejada, case seja informado null ele excluira todas as sessions existentes.
 */
export function destroySession(name) {
    if (name === null) {
        cookies.remove(sessionName);

        return
    }

    let session = getSessionDataOrCreateIfNotExists()

    if (session[name] == null)
        return

    delete session[name]

    session = JSON.stringify(session)

    session = jwt.sign(session, secret)

    cookies.set(sessionName, session, defaultSessionConfig)
}

/**
 * Retorna o nome da session.
 *
 * @returns {string}
 */
export function getSessionName() {
    return sessionName
}

/**
 * Retorna o secredo para desencriptografar a session.
 *
 * @returns {String}
 */
export function getSecret() {
    return secret
}

/**
 * Retorna a configuração da session.
 *
 * @returns {{path: string, maxAge: number, sameSite: string, httpOnly: boolean, secure: boolean}}
 */
export function getSessionConfig() {
    return defaultSessionConfig
}