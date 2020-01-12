import * as tslib_1 from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import * as xml2js from 'xml2js';
import { Game, Date, Pegi, Rating, Filter } from '../model/model';
let GameApiService = class GameApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.filter = new Filter();
        this.gameListUpdate = new EventEmitter(true);
        this.gameListUpdate.subscribe(x => { console.log(x); });
        this.loadGamesList();
    }
    getGenreList() { return this.genreList; }
    getPlatformList() { return this.platformList; }
    getPegiDescriptorList() { return this.pegiDescriptorList; }
    getGameList() {
        let nothing = false;
        nothing = ((this.filter.platforms.length == 0) && (this.filter.other == ""));
        if (nothing)
            return this.gameList;
        //filter gameList
        let list = this.gameList.filter((game) => {
            for (let platform of this.filter.platforms) {
                if (game.relatedPlatforms_id.findIndex((item) => { return item == platform; }) != -1) {
                    return true;
                }
            }
            return false;
        });
        return list.filter((game) => {
            if (this.filter.other != "") {
                let regex = new RegExp(this.filter.other, 'gi');
                if (game.title.search(regex) != -1) {
                    return true;
                }
                if (game.publisher.search(regex) != -1) {
                    return true;
                }
                if (game.developer.search(regex) != -1) {
                    return true;
                }
                if (this.getGenreList().get(game.relatedGenre_id).search(regex) != -1) {
                    return true;
                }
            }
        });
    }
    getGameListUpdate() { return this.gameListUpdate; }
    getFilter() { return this.filter; }
    setFilter(filter) {
        this.filter = filter;
        this.gameListUpdate.next(this.getGameList());
    }
    loadGamesList() {
        this.gameList = [];
        this.genreList = new Map();
        this.platformList = new Map();
        this.pegiDescriptorList = new Map();
        this.gameListUpdate.next(this.getGameList());
        this.httpClient.get("/assets/video_games.xml", { responseType: 'text' }).subscribe((data) => {
            this.parseGamesList(data);
        });
    }
    parseGamesList(data) {
        let parser = new xml2js.Parser();
        parser.parseString(data, (err, result) => {
            let data = result.root.data[0];
            for (let pegiDescriptor of data.pegiDescriptors[0].pegiDescriptor) {
                this.pegiDescriptorList.set(pegiDescriptor.$.id, pegiDescriptor._);
            }
            for (let platform of data.platforms[0].platform) {
                this.platformList.set(platform.$.id, platform._);
            }
            for (let genre of data.genres[0].genre) {
                this.genreList.set(genre.$.id, genre._);
            }
            let games = data.games[0].game;
            for (let game of games) {
                let obj = new Game();
                obj.id = game.$.id;
                obj.title = game.title[0]._;
                obj.language = game.title[0].$.language;
                if ('price' in game) {
                    obj.price = game.price[0]._;
                    obj.price_currency = game.price[0].$.currency;
                }
                else {
                    obj.price = 0;
                    obj.price_currency = "";
                }
                obj.relatedGenre_id = game.relatedGenre[0].$.id;
                obj.releaseDate = new Date(game.releaseDate[0].day[0], game.releaseDate[0].month[0], game.releaseDate[0].year[0]);
                obj.developer = game.developer[0];
                for (let relatedPlatform of game.relatedPlatforms[0].relatedPlatform) {
                    obj.relatedPlatforms_id.push(relatedPlatform.$.id);
                }
                obj.publisher = game.publisher[0];
                obj.rating = new Rating(game.rating[0].$.source, game.rating[0]._, game.rating[0].$.max);
                let relatedPegi = new Array();
                if ('relatedPegi' in game.PEGI[0])
                    for (let r of game.PEGI[0].relatedPegi) {
                        relatedPegi.push(r.$.id);
                    }
                obj.pegi = new Pegi(game.PEGI[0].$.label, relatedPegi);
                obj.coverArt = game.coverArt[0].$.src;
                this.gameList.push(obj);
            }
            this.gameListUpdate.next(this.getGameList());
        });
    }
};
GameApiService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GameApiService);
export { GameApiService };
//# sourceMappingURL=game-api.service.js.map