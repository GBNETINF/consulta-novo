import {SignJWT, jwtVerify, JWTPayload} from 'jose';

/**
 * Persiste os dados com assinatura JWT.
 *
 * @param payload
 *      Dados a ser salvo.
 * @param secret
 *      Segredo para gerar encryptografar os dados.
 * @returns {Promise<string>}
 */
export async function sign(payload, secret) {
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60* 60;

    return new SignJWT({...payload})
        .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
        .setExpirationTime(exp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(secret));
}

/**
 * Verifica e desencriptografa os dados do token desejado.
 *
 * @param token
 *      Token com dados a ser desencriptografado
 * @param secret
 *      Segredo para desencriptografar dados.
 * @returns {Promise<JWTPayload>}
 */
export async function verify(token, secret) {
    const {payload} = await jwtVerify(token, new TextEncoder().encode(secret));

    return payload;
}