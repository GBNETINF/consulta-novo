import {Layout} from "@/components"

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {

    const namePage = 'Home'
    const listPage = ['Home', 'Polo', 'Teste', 'Poste', 'Nada']

    return (
        <Layout name={namePage} list={listPage}>

        </Layout>
    )
}