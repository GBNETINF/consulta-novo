const dictionaries = {
    sistema: () => import('@/dictionaries/sistema.json').then((module) => module.default)
}

export const getDictionary = async (dictonary) => dictionaries[dictonary]()