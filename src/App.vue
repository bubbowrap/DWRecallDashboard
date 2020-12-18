<template>
    <v-app>
        <v-main>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import Footer from '@/layouts/Footer'

export default {
    name: 'App',

    components: {
        Footer,
    },

    data: () => ({
        //
    }),
}
</script>

<style lang="scss">
h1 {
    font-family: $heading-font-family;
}

.v-main {
    flex: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
