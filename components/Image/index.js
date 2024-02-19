/**
 * Imagem
 *  Obs: Evita notices no terminal
 *
 * @param src
 * @param alt
 * @param width
 * @param height
 * @param type
 *      @description Tipo da imagem.
 *      @example 'image/svg'
 * @param loading
 * @param className
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