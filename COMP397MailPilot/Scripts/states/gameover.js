/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/cat.ts" />
/// <reference path="../objects/cheese.ts" />
/// <reference path="../objects/wood.ts" />
/// <reference path="../objects/mouse.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // PLAY STATE
    var GameOver = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GameOver() {
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add wood to game
            this.wood = new objects.Wood();
            this.game.addChild(this.wood);
            //Game over label added to the game
            var gameOverLabel = new objects.Label("GAME OVER", 320, 100);
            gameOverLabel.setSize(60);
            gameOverLabel.regX = gameOverLabel.getBounds().width * 0.5;
            gameOverLabel.regY = gameOverLabel.getBounds().height * 0.5;
            this.game.addChild(gameOverLabel);
            //Final Score label added to the game
            var finalScoreLabel = new objects.Label("FINAL SCORE: " + finalScore, 320, 200);
            this.game.addChild(finalScoreLabel);
            //High Score label added to the game
            var highScoreLabel = new objects.Label("HIGH SCORE: " + highScore, 320, 300);
            this.game.addChild(highScoreLabel);
            //Try again button added to the game
            this.tryAgainButton = new objects.Button("tryAgainButton", 320, 400);
            this.game.addChild(this.tryAgainButton);
            this.tryAgainButton.on("click", this.tryAgainButtonClicked, this);
            stage.addChild(this.game);
        } // constructor end
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        GameOver.prototype.tryAgainButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = 1;
            stateChanged = true;
        };
        // UPDATE METHOD
        GameOver.prototype.update = function () {
            this.wood.update();
        }; // update method end
        return GameOver;
    })();
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map