import { getSecret, getSessionName } from "@/utils/session";
import Cookies from "universal-cookie";
import * as jwt from "@/utils/jwt";

export default async function userAuth(token = null) {
    if (token != null)
        token = await jwt.verify(token, getSecret())

    if (token == null) {
        let cookies = new Cookies()

        let session = cookies.get(getSessionName())

        if (session)
            token = await jwt.verify(session, getSecret())
    }

    return token;
}