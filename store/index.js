import JWTDecode from "jwt-decode";
import cookieparser from "cookieparser"

export const actions = {
    nuxtServerInit({commit},{req}){
        if(process.server && process.static) return
        if(!req.headers.cookie) return

        const parsedCookie = cookieparser.parse(req.headers.cookie)

        if(!parsedCookie.access_token) return

        const decoded = JWTDecode(parsedCookie.access_token)

        if(decoded){
            commit("saveUser",{
                email : decoded.email,
                uid : decoded.user_id
            })
        }
    }
}