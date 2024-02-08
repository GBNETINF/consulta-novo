import {fetchWithCredentials} from '@/utils/fetchWithCredentials'

const Home = () => {

    console.log(
        fetchWithCredentials(
            'auth/me',
            {
                method: 'POST',
            }
        )
    )

    return (
        <>
            Can't be accessed page!
        </>
    )
}

export default Home;