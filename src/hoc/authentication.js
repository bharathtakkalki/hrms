import DashboardLayout from "../components/dashboardLayout/DashboardLayout"

const  authenticate =  (component) => {
    const accessToken = localStorage.getItem('access-token')

    const isLoggedIn = accessToken ? true : false 

    if (isLoggedIn){
    return component 
    
    }else{
        return () => {
    
            window.location.replace('/login')
            return(<div>Unauthorised</div>)
        
        }  
    }

}

export default authenticate