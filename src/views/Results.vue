<template>
    <div>
        <v-container>
            <v-row>
                <v-col
                    cols="10"
                    offset="1"
                    md="8"
                    offset-md="2"
                    class="text-center"
                >
                    <h1>{{ resultsTitle }}</h1>
                    <p class="body-1">({{ genericName }})</p>
                    <p class="body-1">{{ manufacturerName }}</p>
                    <p>
                        {{ productDescription }}
                    </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="4">
                    <v-card outlined>
                        <v-card-title class="primary--text">
                            Product Type
                        </v-card-title>
                        <v-card-text>
                            <p class="body-1">{{ productType }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-card outlined>
                        <v-card-title class="primary--text">
                            Recall Date
                        </v-card-title>
                        <v-card-text
                            ><p class="body-1">{{ recallDate }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-card outlined>
                        <v-card-title class="primary--text"
                            >Recall Reason</v-card-title
                        >
                        <v-card-text
                            ><p class="body-1">
                                {{ recallReason }}
                            </p></v-card-text
                        >
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <h2>Related Pages</h2>
                </v-col>

                <v-col
                    cols="12"
                    v-for="(page, index) in relatedPages"
                    :key="index"
                >
                    <v-card outlined>
                        <v-card-title
                            ><a :href="page.url">{{
                                page.title
                            }}</a></v-card-title
                        >
                        <v-card-text>Phasellus aliquam ex enim</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            genericName: '',
            manufacturerName: '',
            productDescription: '',
            productType: '',
            recallDate: '',
            recallReason: '',
            relatedPages: [],
        }
    },
    computed: {
        resultsTitle() {
            return (
                this.$route.params.result.charAt(0).toUpperCase() +
                this.$route.params.result.substr(
                    1,
                    this.$route.params.result.length
                )
            )
        },
    },
    mounted() {
        axios
            .get(
                `https://api.fda.gov/drug/enforcement.json?search=openfda.brand_name:"${this.$route.params.result}"&limit=10`
            )
            .then(res => {
                console.log(res.data.results)
                const recallData = res.data.results[0]
                this.genericName = recallData.openfda.generic_name.join(', ')
                this.manufacturerName = recallData.openfda.manufacturer_name.join(
                    ', '
                )
                this.productDescription = recallData.product_description
                this.productType = recallData.openfda.product_type.join(', ')
                this.recallDate = recallData.recall_initiation_date
                this.recallReason = recallData.reason_for_recall
            })
            .catch(err => console.log(err))
        axios
            .get(
                `http://jsamuel:8040/wp-json/wp/v2/search?search=${this.$route.params.result}`
            )
            .then(res => {
                this.relatedPages = [...res.data]
            })
            .catch(err => console.log(err))
    },
}
</script>

<style lang="scss" scoped>
.v-card__title {
    font-family: $heading-font-family;
    font-weight: 600;
}
</style>
