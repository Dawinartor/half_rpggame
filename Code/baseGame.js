/*
Jeder Script beschreibt eine Szene des eigentlichen Spiels
 "- this." bezieht sich immer auf die akutelle Szene.
*/

var config = {
    type: Phaser.AUTO, // Wie das Spiel gerenderd wird: Erst WebGL, sonst Canvas
    width: 360,
    heigt: 180,
    scene: { // Funktionen die wir weiter unten verwenden
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);

// Laden der Szene
function preload() 
{
    // Dieses Sprite nennt sich nun "ground"
    this.load.image('ground', '../Elemente/Assets/Mapbeispiel/TestMap.png'); 
}

// Geladene Materialien anzeigen lassen
function create() 
{
    this.add.image(0, 0, 'ground').setOrigin(0,0);
}


function update() {

}
