
import firebase from "@/services/firebase"
import "firebase/compat/auth"
import Cookie from "js-cookie"


export const state = () =>{
    user : null
}

export const mutations = {
    saveUser(state,userData){
        this.state.users.user = userData
    }
}

export const actions = {

    async createUser({commit},userData){
        try{
            await firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)

            const {email, uid} = firebase.auth().currentUser
            const token = await firebase.auth().currentUser.getIdToken()

            Cookie.set("access_token",token)
            commit("saveUser",{email,uid})

            console.log(token)
        }catch(err){
            throw err
        }
    },

    async signIn({commit},userData){
        try {
            await firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)

            const {email, uid} = firebase.auth().currentUser
            const token = await firebase.auth().currentUser.getIdToken()

            Cookie.set("access_token",token)
            commit("saveUser", {email,uid})

        } catch (error) {
            throw error
        }
    }

}