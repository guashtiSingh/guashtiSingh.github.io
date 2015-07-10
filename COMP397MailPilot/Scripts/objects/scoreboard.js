var objects;
(function (objects) {
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++
        function ScoreBoard(game) {
            // PUBLIC PROPERTIES
            this.score = 0;
            this.lives = 5;
            this.livesLabel = new createjs.BitmapText("LIVES: ", assets.fontAtlas);
            this.livesLabel.scaleX = 0.4;
            this.livesLabel.scaleY = 0.4;
            this.livesLabel.x = 10;
            this.livesLabel.y = 10;
            game.addChild(this.livesLabel);
            this.scoreLabel = new createjs.BitmapText("SCORE: ", assets.fontAtlas);
            this.scoreLabel.scaleX = 0.4;
            this.scoreLabel.scaleY = 0.4;
            this.scoreLabel.x = 350;
            this.scoreLabel.y = 10;
            game.addChild(this.scoreLabel);
        }
        // PUBLIC METHODS +++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this.livesLabel.text = "LIVES: " + this.lives.toString();
            this.scoreLabel.text = "SCORE: " + this.score.toString();
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map