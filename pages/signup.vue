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
                this.$router.push("/")
            })
            .catch(err=>{
                console.log(err)
            })
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