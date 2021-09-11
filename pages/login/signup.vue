<template>
    <div class="container">
        <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
        >
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                :state="validEmail(form.email)"
                required
            ></b-form-input>
        </b-form-group>
        <b-form @submit.stop.prevent>
            <label for="text-password">Password</label>
            <b-form-input 
             v-model="form.password"
             type="password" 
             id="text-password" 
             aria-describedby="password-help-block"
             :state="validPassword(form.password)"
            ></b-form-input>
            <b-form-text id="password-help-block">
                Your password must be 8-20 characters long, contain letters and numbers, and must not
                contain spaces, special characters, or emoji.
            </b-form-text>
            <b-button @click="signUp" variant="outline-primary">Sign Up</b-button>
        </b-form>
    </div>
</template>

<script>
export default {

    layout:"anonymousUser",

    data() {
        return {
            form:{
                email:null,
                password:null
            }
        }
    },

    methods: {

        signUp(){
            this.$store.dispatch("users/createUser",this.form)
            .then(()=>{
                this.$router.push("/profile")
            })
            .catch(err=>{
                console.log(err)
            })
        },

        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        validPassword(password){
            if(password!=null && password.length>=8 && password.length<=20){
                return true
            }else{
                return false
            }
        }
    },
}
</script>

<style scoped>
    .container{
        width: 40%;
        margin: 10px;
    }
    button{
        margin-block: 2vh;
    }
</style>