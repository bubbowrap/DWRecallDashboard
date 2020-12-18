<template>
    <v-row>
        <v-col cols="12">
            <h3>Popular Drug Searches:</h3>
        </v-col>
        <v-col v-for="n in 4" :key="n" cols="6" md="3">
            <a href="#">Drug Name</a>
        </v-col>
    </v-row>
</template>
