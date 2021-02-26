<template>
    <v-row>
        <v-col cols="12">
            <h3>Popular Drug Searches:</h3>
        </v-col>
        <v-col
            v-for="drugName in popularSearches"
            :key="drugName"
            cols="6"
            sm="3"
        >
            <router-link
                :to="{ name: 'Results', params: { result: drugName } }"
                >{{ drugName }}</router-link
            >
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            popularSearches: [
                'Zantac',
                'Risperdal',
                'Valsartan',
                'Elmiron',
                'Uloric',
                'Truvuda',
                'Taxotere',
            ],
        }
    },
}
</script>
