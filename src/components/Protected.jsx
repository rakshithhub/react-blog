import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Protected = ({children, authentication = "true"}) => {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            setLoading(false)
            navigate("/login")
        }else if(!authentication && authStatus !== authentication ){
            setLoading(false)
            navigate("/")
        }
    }, [navigate, authentication, authStatus])
  return (
    loading ? <h1>Loading....</h1> : {children}
  )
}

export default Protected