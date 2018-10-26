"use strict";

var unirest = require('unirest');

module.exports = function(token){
    return {
        /**
         * List of all Netflix Countries includes various Counts
         *
         * @see https://market.mashape.com/unogs/unogs#list-countries
         * @param cb function
         * @return null
         */
        listCountries: function(cb){
            unirest.get("https://unogs-unogs-v1.p.mashape.com/aaapi.cgi?t=lc&q=available")
            .header("X-Mashape-Key", token)
            .header("Accept", "application/json")
            .end(function (result) {
                cb((result.status == 200), result.body);
            });
        },

        /**
         * Get New Releases per Country
         *
         * @see https://market.mashape.com/unogs/unogs#new-release-per-country
         * @param countryid string
         * @param daysback integer
         * @param page integer
         * @param cb function
         * @return null
         */
        newReleasePerCountry: function(countryid, daysback, page, cb){
            unirest.get(`https://unogs-unogs-v1.p.mashape.com/aaapi.cgi?q=get:new${daysback}:${countryid}&p=${page}&t=ns&st=adv`)
            .header("X-Mashape-Key", token)
            .header("Accept", "application/json")
            .end(function (result) {
                cb((result.status == 200), result.body);
            });
        },

        /**
         * This call allows you to add advanced search filter which allow you to pull specific information.
         *
         * @see https://market.mashape.com/unogs/unogs#advanced-search
         * @param term string
         * @param page integer
         * @param cb function
         * @return null
         */
        search: function(term, page, cb){
            term = encodeURI(term);

            unirest.get(`https://unogs-unogs-v1.p.mashape.com/aaapi.cgi?q=${term}-!1900,2018-!0,5-!0,10-!0-!Any-!Any-!Any-!gt100-!{downloadable}&t=ns&cl=all&st=adv&ob=Relevance&p=${page}&sa=and`)
            .header("X-Mashape-Key", token)
            .header("Accept", "application/json")
            .end(function (result) {
                cb((result.status == 200), result.body);
            });
        },

        /**
         * Get list of different variable sized images for this title
         *
         * @see https://market.mashape.com/unogs/unogs#images
         * @param filmid integer
         * @param cb function
         * @return null
         */
        images: function(filmid, cb){
            unirest.get(`https://unogs-unogs-v1.p.mashape.com/aaapi.cgi?t=images&q=${filmid}`)
            .header("X-Mashape-Key", token)
            .header("Accept", "application/json")
            .end(function (result) {
                cb((result.status == 200), result.body);
            });
        },

        /**
         * Load all Season and Episode details for a Netflix Series
         *
         * @see https://market.mashape.com/unogs/unogs#load-episode-details
         * @param netflixid integer
         * @param cb function
         * @return null
         */
        loadEpisodeDetails: function(netflixid, cb){
            unirest.get(`https://unogs-unogs-v1.p.mashape.com/aaapi.cgi?t=episodes&q=${netflixid}`)
            .header("X-Mashape-Key", token)
            .header("Accept", "application/json")
            .end(function (result) {
                cb((result.status == 200), result.body);
            });
        },

        /**
         * Pulls the IMDB info for a specific netflix id
         *
         * @see https://market.mashape.com/unogs/unogs#load-imdb-info
         * @param filmid integer
         * @param cb function
         * @return null
         */
        loadIMDBInfo: function(filmid, cb){
            unirest.get(`https://unogs-unogs-v1.p.mashape.com/aaapi.cgi?t=getimdb&q=${filmid}`)
            .header("X-Mashape-Key", token)
            .header("Accept", "application/json")
            .end(function (result) {
                cb((result.status == 200), result.body);
            });
        },

        /**
         * Load Title Details: Country Information, Audio, Subtitle, and season/episode counts
         *
         * @see https://market.mashape.com/unogs/unogs#load-title-details
         * @param vidid integer
         * @param cb function
         * @return null
         */
        loadTitleDetails: function(vidid, cb){
            unirest.get(`https://unogs-unogs-v1.p.mashape.com/aaapi.cgi?t=loadvideo&q=${vidid}`)
            .header("X-Mashape-Key", token)
            .header("Accept", "application/json")
            .end(function (result) {
                cb((result.status == 200), result.body);
            });
        }
    };
};
