import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#304EBB',
                secondary: '#0eb1d2',
                accent: '#1EC7BB',
                dark: '#191B37',
                error: '#d0011b',
            },
        },
    },
})
