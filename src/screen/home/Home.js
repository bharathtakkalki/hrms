import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/header/Header'
import authenticate from '../../hoc/authentication'

function Home(props) {
    const user = useSelector(state => state.user)
    useEffect(()=>{
        console.log(user)
    },[user])
    return (
        <div className="home">
            <Header pageHeader="Dashboard" userName={`${user.firstName} ${user.lastName}`}/>
        </div>
    )
}

export default authenticate(Home)