//import Vue from 'vue'
import axios from 'axios'

const drugApi = axios.create({
    baseURL: 'https://api.fda.gov/drug/event.json?search=patient.drug.openfda',
})

export default { drugApi }
