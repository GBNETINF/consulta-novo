import {getDictionary} from "@/utils/dictionary";
import {useState} from "react";
import {Skeleton} from "@mui/material";

export default function Word({path, width}) {
    const dictionary = path.split('.').shift()
    const [loading, setLoading] = useState(true)
    const [word, setWord] = useState('')

    async function loadWord() {
        let dict = await getDictionary(dictionary)
        let sections = path.split('.')
        sections.shift()

        let word = ''

        for (let index in sections) {
            word = sections[index]
        }

        setWord(word)
    }

    loadWord().then(() => setLoading(false))

    return (
        <>{!loading ? word : (<Skeleton variant="rounded" width={width} height={16} animation="wave"></Skeleton>)}</>
    )
}