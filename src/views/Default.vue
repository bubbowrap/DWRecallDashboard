<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="10" offset-md="1" class="text-center">
                <h1>See if my drug or device has been recalled recently.</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="10" offset-md="1" class="text-center">
                <SearchBar />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="8" offset-md="2" class="text-center">
                <PopularSearches />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import PopularSearches from '@/components/PopularSearches'

export default {
    components: {
        SearchBar,
        PopularSearches,
    },
}
</script>
