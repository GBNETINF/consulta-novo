/**
 * Componente de Imagem
 *  Obs: Evita notices no terminal
 *
 * @param {string} src
 *      Caminho da imagem
 * @param {string} alt
 *      Descrição
 * @param {int} width
 *      Largura
 * @param {int} height
 *      Altura
 * @param {string} type
 *      Tipo da imagem. Ex.: 'image/svg'
 * @param {string} loading
 *      Animação de carregamento
 * @param {string} className
 *      Classe
 * @returns {JSX.Element}
 * @constructor
 */
const Image = ({src, alt, width, height, type, loading, className}) => {
    return (
        <picture className={className}>
            <source srcSet={src} type={type}/>
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={loading}
            />
        </picture>
    )
}

export default Image