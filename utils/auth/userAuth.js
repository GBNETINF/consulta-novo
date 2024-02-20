import { getSecret, getSessionName } from "@/utils/session";
import Cookies from "universal-cookie";
import * as jwt from "@/utils/jwt";

/**
 * Verifica se o usuário está ou não autenticado.
 *
 * @param {Object|null} session
 *      Session na qual deve-se verificar a autenticação.
 *      (Não informar esse parâmetro resultará na busca pela session padrão do sistema).
 *
 * @returns {Promise<*|boolean>}
 */
export default async function userAuth(session = null) {
    if (session != null)
        session = await jwt.verify(session, getSecret())

    if (session == null) {
        let cookies = new Cookies()

        session = cookies.get(getSessionName())

        if (session)
            session = await jwt.verify(session, getSecret())
    }

    return session?.token ?? false;
}