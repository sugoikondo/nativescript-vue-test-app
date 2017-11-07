"use strict";
var file_system_1 = require("file-system");
var TNSFontIcon = (function () {
    function TNSFontIcon() {
    }
    TNSFontIcon.loadCss = function () {
        var cnt = 0;
        var currentName;
        var fontIconCollections = Object.keys(TNSFontIcon.paths);
        if (TNSFontIcon.debug) {
            console.log("Collections to load: " + fontIconCollections);
        }
        var initCollection = function () {
            currentName = fontIconCollections[cnt];
            TNSFontIcon.css[currentName] = {};
        };
        var mapCss = function (data) {
            var sets = data.split('}');
            var cleanValue = function (val) {
                var v = val.split('content:')[1].replace(/\\f/, '\\uf').trim().replace(/\"/g, '').slice(0, -1);
                return v;
            };
            for (var _i = 0, sets_1 = sets; _i < sets_1.length; _i++) {
                var set = sets_1[_i];
                var pair = set.split(':before {');
                var keyGroups = pair[0];
                var keys = keyGroups.split(',');
                if (pair[1]) {
                    var value = cleanValue(pair[1]);
                    for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                        var key = keys_1[_a];
                        key = key.trim().slice(1).split(':before')[0];
                        TNSFontIcon.css[currentName][key] = String.fromCharCode(parseInt(value.substring(2), 16));
                        if (TNSFontIcon.debug) {
                            console.log(key + ": " + value);
                        }
                    }
                }
            }
        };
        var loadFile = function (path) {
            if (TNSFontIcon.debug) {
                console.log("----------");
                console.log("Loading collection '" + currentName + "' from file: " + path);
            }
            var cssFile = file_system_1.knownFolders.currentApp().getFile(path);
            return new Promise(function (resolve, reject) {
                cssFile.readText().then(function (data) {
                    mapCss(data);
                    resolve();
                }, function (err) {
                    reject(err);
                });
            });
        };
        var loadFiles = function () {
            initCollection();
            if (cnt < fontIconCollections.length) {
                loadFile(TNSFontIcon.paths[currentName]).then(function () {
                    cnt++;
                    loadFiles();
                });
            }
        };
        loadFiles();
    };
    return TNSFontIcon;
}());
TNSFontIcon.css = {};
TNSFontIcon.paths = {};
TNSFontIcon.debug = false;
exports.TNSFontIcon = TNSFontIcon;
function fonticon(value) {
    if (value) {
        if (value.indexOf('-') > -1) {
            var prefix = value.split('-')[0];
            return TNSFontIcon.css[prefix][value];
        }
        else {
            console.log("Fonticon classname did not contain a prefix. i.e., 'fa-bluetooth'");
        }
    }
    return value;
}
exports.fonticon = fonticon;
//# sourceMappingURL=nativescript-fonticon.js.map