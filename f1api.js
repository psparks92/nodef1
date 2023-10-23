import axios from 'axios';
// api client to get data from ergast f1 api via axios
// https://ergast.com/mrd/
//
export default class F1ApiClient {
    constructor() {
        this.rootUrl = 'https://ergast.com/api/f1';
    }
    async getDrivers() {
        let response = await axios.get(`${this.rootUrl}/drivers.json?limit=100`)
        return response.data;
    }
    async getSeasons() {
        let response = await axios.get(`${this.rootUrl}/seasons.json?limit=100`)
        return response.data.MRData.SeasonTable.Seasons;
    }

    async getSeason(season) {
        let response = await axios.get(`${this.rootUrl}/${season}.json`)
        return response.data.MRData.RaceTable.Races;
    }

    async getSeasonRaces(season) {
        let response = await axios.get(`${this.rootUrl}/${season}/results.json`)
        return response.data;
    }

    async getSeasonRace(season, round) {
        let response = await axios.get(`${this.rootUrl}/${season}/${round}/results.json`)
        return response.data;
    }

    async getSeasonRaceQualifying(season, round) {
        let response = await axios.get(`${this.rootUrl}/${season}/${round}/qualifying.json`)
        return response.data;
    }

    async getDrivers(season) {
        if (season) {
            let response = await axios.get(`${this.rootUrl}/${season}/drivers.json?limit=100`)
            return response.data;
        }
        else {

            let response = await axios.get(`${this.rootUrl}/drivers.json?limit=100`)
            return response.data;
        }
    }

}