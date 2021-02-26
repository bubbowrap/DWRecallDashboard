<template>
    <v-form @submit.prevent>
        <v-row>
            <v-col cols="12" :sm="full ? 12 : 9" :md="full ? 12 : 10">
                <v-text-field
                    v-model="searchTerm"
                    outlined
                    hide-details
                    placeholder="Search by Drug Name"
                    @keyup.enter="search"
                    required
                ></v-text-field>
            </v-col>
            <v-col cols="12" :sm="full ? 12 : 3" :md="full ? 12 : 2">
                <v-btn block depressed x-large color="primary" @click="search"
                    >Search</v-btn
                >
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            searchTerm: '',
        }
    },
    props: { full: Boolean },
    methods: {
        search() {
            //change route to results page
            this.$router.push(`/results/${this.searchTerm}`)
        },
    },
}
</script>
