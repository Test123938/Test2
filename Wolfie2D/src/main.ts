import Game from "./Wolfie2D/Loop/Game";
import default_scene from "./default_scene";

// The main function is your entrypoint into Wolfie2D. Specify your first scene and any options here.
(function main(){
    
    // Set up options for our game
    let options = {
        canvasSize: {x: 900, y: 900},          // The size of the game
        clearColor: {r: 240, g: 240, b: 240},   // The color the game clears to
        inputs: [
            { name: "w", keys: ["w"] },   // Forward is assigned to w
            { name: "s", keys: ["s"] },  // and so on...
            { name: "a", keys: ["a"] },
            { name: "d", keys: ["d"] },
        ],
        useWebGL: false,                        // Tell the game we want to use webgl
        showDebug: false                       // Whether to show debug messages. You can change this to true if you want
    }

    // Create a game with the options specified
    const game = new Game(options);

    // Start our game
    game.start(default_scene, {});
})();


