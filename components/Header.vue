<template>
    <header>
        <nav class="container">
            <a href="/">
                <img id="logo" src="../assets/img/logos-1.webp" alt="logo"/>
            </a>
            <img v-on:click="openMenu" alt="Expandir Menu" id="menu-button" src="../assets/img/toogle-btn.png"/>
            
            <div id="menu-overlay" v-on:click="closeMenu" v-if="menuActive"></div>
            <div id="menu-items" :class="{active:menuActive}">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/challenge">Challenge Rules</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            menuActive: false
        }
    },
    methods: {
        openMenu: function(){
            this.menuActive = true;
        },
        closeMenu: function(){
            this.menuActive = false;
        }
    }
 }
</script>  

<style scoped>
    header {
        background-color: var(--color-background-nav);
        width: 100%;
        height: 70px;
        display: flex;
        position: fixed;
        margin-top: -20px;
        justify-content: center;
        align-items: center;
    }
    nav {
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }
    #logo{
        width: 120px;
    }
    #menu-button {
        width: 30px;
    }
    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: #0099;
        opacity: 0.8;
    }
    #menu-logo{
        width: 110px;
        margin-top:30px;
    }
    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    #menu-items.active{
        display: flex;
    }
    ul{
        list-style: none;
        text-align: center;
    }
    ul li {
        margin: 20px 0px;
    }
    ul li a {
        color: var(--color-text-light);
    }
    @media (min-width: 700px){
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display: none;
        }
        #menu-items{
            display: flex;
            position: static;
            height: 50px;
            width: auto;
        }
        ul {
            display: flex;
            height: 60px;
            align-items: center;
        }
        ul li{
            margin: 0;
            margin-left: 20px;
        }
    }
</style>