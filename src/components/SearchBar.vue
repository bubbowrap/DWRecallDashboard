<template>
    <v-form @submit.prevent>
        <v-row>
            <v-col cols="12" sm="9" md="10">
                <v-text-field
                    v-model="searchTerm"
                    outlined
                    hide-details
                    placeholder="Search by Drug Name"
                    @keyup.enter="search"
                    required
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" md="2">
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
    methods: {
        search() {
            //change route to results page
            this.$router.push(`/results/${this.searchTerm}`)
        },
    },
}
</script>
