<template>
    <div>
        <b-navbar toggleable="sm" type="light" variant="light">

            <b-navbar-brand>Nuxt</b-navbar-brand>

            <b-navbar-nav>
                <b-nav-item href="/profile">Profile</b-nav-item>
            </b-navbar-nav>
            <b-navbar class="ml-auto">
                <n-nav-text>{{this.$store.state.users.user ? this.$store.state.users.user.email : "Please Login"}}</n-nav-text>
                <b-button :style="{'margin-left':'30px'}" @click="logout" variant="light">LogOut</b-button>
            </b-navbar>
        </b-navbar>
    </div>
</template>

<script>
    
import firebase from "@/services/firebase"
import Cookie from "js-cookie"

export default {
  methods:{

    async logout(){
      this.$router.push("/login/signIn")
      await firebase.auth().signOut()
      await Cookie.remove("access_token")
    }
  }
}
</script>