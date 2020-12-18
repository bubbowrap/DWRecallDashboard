<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
                md="10"
                offset-md="1"
                lg="6"
                offset-lg="3"
                class="text-center"
            >
                <h1>Drugwatch Recall Dashboard</h1>
                <p>
                    Phasellus aliquam ex enim, in venenatis leo semper non.
                    Nullam varius in augue ac sollicitudin. Vivamus auctor
                    ligula nec magna molestie, vitae bibendum nisl vehicula.
                    Praesent eget quam lectus.
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="10" offset-md="1" class="text-center">
                <SearchBar />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="8" offset-md="2" class="text-center">
                <LatestRecalls />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import LatestRecalls from '@/components/LatestRecalls'

export default {
    components: {
        SearchBar,
        LatestRecalls,
    },
}
</script>
