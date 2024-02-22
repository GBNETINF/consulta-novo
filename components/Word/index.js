import {loadWord} from "@/utils/dictionary";
import {useState, useEffect} from "react";
import {Skeleton} from "@mui/material";

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