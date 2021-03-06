"use strict";
var Joke = /** @class */ (function () {
    function Joke(
    // prettier-ignore
    id, joke) {
        this.id = id;
        this.joke = joke;
        Joke.list.push(this);
    }
    Object.defineProperty(Joke.prototype, "getJoke", {
        // getters
        get: function () {
            return this.joke;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Joke, "getList", {
        get: function () {
            return Joke.list;
        },
        enumerable: false,
        configurable: true
    });
    Joke.list = [];
    return Joke;
}());
