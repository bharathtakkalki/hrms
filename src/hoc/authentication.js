import DashboardLayout from "../components/dashboardLayout/DashboardLayout"

function authenticate (component){
    const accessToken = localStorage.getItem('access-token')

    // API - validate the token

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