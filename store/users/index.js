import firebase from "@/services/firebase.js"
import Cookie from "js-cookie"


export const state = () =>{
    user : null
}

export const mutations = {
    saveUser:(state,userData)=>{
        state.user = userData
    }
}

export const actions = {
    async createUser({commit},userData){
        try{
            await firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)

            const {email, uid, getIdToken} = auth.currentUser
            Cookie.set("access-token",getIdToken)
            commit("saveUser",{email,uid})
            console.log(auth)
        }catch(err){
            throw err
        }
    }
}