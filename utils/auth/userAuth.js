import { getSecret, getSessionName } from "@/utils/session";
import Cookies from "universal-cookie";
import * as jwt from "@/utils/jwt";

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