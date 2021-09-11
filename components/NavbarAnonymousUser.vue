<template>
    <div>
        <b-navbar toggleable="sm" type="light" variant="light">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-navbar-brand>Login</b-navbar-brand>

            <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/login/signin">SignIn</b-nav-item>
                <b-nav-item href="/login/signup">SignUp</b-nav-item>
                <b-nav-item>LogOut</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>