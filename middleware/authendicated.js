export default function({store,route,redirect}){
    const isUserAuth = store.state.users.user
    //console.log("isauth",isUserAuth)
    
    if(isUserAuth==null && route.path==="/profile"){
        redirect("/login/signin")
    }
}