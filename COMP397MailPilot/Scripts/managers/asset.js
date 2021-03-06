var managers;
(function (managers) {
    var Asset = (function () {
        // CONSTRUCTOR
        function Asset() {
            //Private Properties
            this.manifest = [
                { id: "wood", src: "assets/images/wood.jpg" },
                { id: "backgroundMusic", src: "assets/audio/backgroundMusic.ogg" },
                { id: "cheesesound", src: "assets/audio/cheesesound.ogg" },
                { id: "meow", src: "assets/audio/meow.ogg" }
            ];
            this.data = {
                "images": [
                    "assets/images/atlas.png"
                ],
                "frames": [
                    [2, 2, 209, 67, 0, 0, 0],
                    [2, 71, 208, 65, 0, 0, 0],
                    [2, 138, 144, 89, 0, -1, -12],
                    [148, 138, 50, 50, 0, 0, 0],
                    [148, 190, 50, 50, 0, 0, 0]
                ],
                "animations": {
                    "playButton": [0],
                    "tryAgainButton": [1],
                    "cat": [2],
                    "cheese": [3],
                    "mouse": [4]
                }
            };
            this.fontData = {
                "images": ["assets/fonts/fontAtlas.png"],
                "frames": [
                    [2, 350, 62, 82],
                    [434, 86, 40, 81],
                    [75, 183, 59, 82],
                    [132, 267, 59, 81],
                    [370, 86, 62, 80],
                    [255, 253, 59, 81],
                    [434, 169, 27, 83],
                    [69, 267, 61, 82],
                    [316, 253, 59, 81],
                    [199, 169, 60, 82],
                    [335, 2, 62, 82],
                    [66, 351, 61, 82],
                    [136, 169, 61, 82],
                    [129, 351, 57, 81],
                    [267, 2, 66, 81],
                    [362, 336, 56, 80],
                    [383, 168, 49, 81],
                    [86, 85, 80, 82],
                    [306, 86, 62, 81],
                    [427, 254, 27, 80],
                    [377, 253, 48, 81],
                    [2, 267, 65, 81],
                    [188, 350, 52, 81],
                    [86, 2, 90, 81],
                    [399, 2, 62, 82],
                    [2, 98, 82, 83],
                    [261, 169, 59, 82],
                    [2, 2, 82, 94],
                    [322, 169, 59, 82],
                    [242, 336, 58, 81],
                    [302, 336, 58, 81],
                    [241, 85, 63, 82],
                    [2, 183, 71, 82],
                    [178, 2, 87, 81],
                    [168, 85, 71, 82],
                    [420, 336, 56, 80],
                    [193, 253, 60, 81]
                ],
                "animations": {
                    "0": [0],
                    "1": [1],
                    "2": [2],
                    "3": [3],
                    "4": [4],
                    "5": [5],
                    ":": [6],
                    "6": [7],
                    "7": [8],
                    "8": [9],
                    "9": [10],
                    "a": [11],
                    "b": [12],
                    "c": [13],
                    "d": [14],
                    "e": [15],
                    "f": [16],
                    "g": [17],
                    "h": [18],
                    "i": [19],
                    "j": [20],
                    "k": [21],
                    "l": [22],
                    "m": [23],
                    "n": [24],
                    "o": [25],
                    "p": [26],
                    "q": [27],
                    "r": [28],
                    "s": [29],
                    "t": [30],
                    "u": [31],
                    "v": [32],
                    "w": [33],
                    "x": [34],
                    "y": [35],
                    "z": [36]
                }
            };
            this.preload();
        }
        Asset.prototype.preload = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
            // create texture atlas
            this.atlas = new createjs.SpriteSheet(this.data);
            this.fontAtlas = new createjs.SpriteSheet(this.fontData);
        };
        return Asset;
    })();
    managers.Asset = Asset;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map