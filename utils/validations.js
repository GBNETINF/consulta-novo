/**
 * Verifica se o CPF informado é valido.
 *
 * @param {String} cpf
 *      CPF a ser validado.
 * @returns {boolean}
 */
export function validateCpf(cpf)
{
    return !!(cpf.match(/\d{3}.\d{3}.\d{3}-\d{2}/) && cpf.length === 14)
}