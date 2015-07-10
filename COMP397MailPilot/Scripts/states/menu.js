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
    // MENU STATE
    var Menu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add wood(background) to game
            this.wood = new objects.Wood();
            this.game.addChild(this.wood);
            //The Menu label
            var gameScrollerLabel = new objects.Label("TOM AND JERRY", 320, 100);
            gameScrollerLabel.setSize(60);
            gameScrollerLabel.regX = gameScrollerLabel.getBounds().width * 0.5;
            gameScrollerLabel.regY = gameScrollerLabel.getBounds().height * 0.5;
            this.game.addChild(gameScrollerLabel);
            //Add play button to the game screen
            this.playButton = new objects.Button("playButton", 320, 400);
            this.game.addChild(this.playButton);
            this.playButton.on("click", this.playButtonClicked, this);
            stage.addChild(this.game);
        } // constructor end
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu.prototype.playButtonClicked = function () {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = 1;
            stateChanged = true;
        };
        // UPDATE METHOD
        Menu.prototype.update = function () {
            this.wood.update();
        }; // update method end
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map