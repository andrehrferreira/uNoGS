/**
 * This API will allow you to pull all Netflix title information for every title in all the Countries Netflix operates in.
 *
 * @see http://unogs.com/
 * @see https://market.mashape.com/unogs/unogs
 */

"use strict";

let uNoGS = require("./index.js"),
    unogs = new uNoGS("token");

/*unogs.listCountries(function(err, docs){
    console.log(docs);
});

unogs.newReleasePerCountry("BR", 10, 1, function(err, docs){
    console.log(docs);
});

unogs.search("Iron Man", 1, function(err, docs){
    console.log(docs);
});

unogs.images(70080038, function(err, docs){
    console.log(docs);
});

unogs.loadEpisodeDetails(70205012, function(err, docs){
    console.log(docs);
});

unogs.loadIMDBInfo(70205012, function(err, docs){
    console.log(docs);
});

unogs.loadTitleDetails(70205012, function(err, docs){
    console.log(docs);
});*/
