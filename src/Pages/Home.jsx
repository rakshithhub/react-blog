import {useSelector} from 'react-redux';

const Home = () => {
    const userData = useSelector(state => state.auth.userData)


    return(
        <div className="w-full py-8 mt-4 text-center">            
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            {userData ? ` 😄 Hello ${userData.name} 😄 ` : 'Please Login...'}
                        </h1>
                    </div>
                </div>
        </div>
    )
    }

export default Home