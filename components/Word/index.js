import {loadWord} from "@/utils/dictionary";
import {useState, useEffect} from "react";
import {Skeleton} from "@mui/material";

/**
 * Componente de consulta ao dicionario.
 *
 * @param path
 *      Caminho do item que deseja consultar no dicionário.
 * @param width
 *      Tamanho do skeleton de loading enquanto a consulta é realizada.
 * @param height
 *      Altura do skeleton de loading enquanto a consulta é realizada.
 * @returns {JSX.Element}
 */
export default function Word({path, width, height = 16}) {
    const [loading, setLoading] = useState(true)
    const [word, setWord] = useState('')

    useEffect(() => {
        loadWord(path).then((word) => {
            setWord(word)
            setLoading(false)
        })
    }, []);

    return (
        <>{!loading ? word : (<Skeleton variant="rounded" width={width} height={height} animation="wave"></Skeleton>)}</>
    )
}