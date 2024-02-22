const dictionaries = {
    sistema: () => import('@/dictionaries/sistema.json').then((module) => module.default),
    governo: () => import('@/dictionaries/governo.json').then((module) => module.default)
}

export const getDictionary = async (dictonary) => dictionaries[dictonary]()

export async function loadWord(path) {
    let dictionary = path.split('.').shift()
    let dict = await getDictionary(dictionary)
    let sections = path.split('.')
    sections.shift()

    let word = dict

    for (let index in sections)
        word = word[sections[index]]

    return word
}