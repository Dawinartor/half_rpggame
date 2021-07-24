/*
Jeder Script beschreibt eine Szene des eigentlichen Spiels
 "- this." bezieht sich immer auf die akutelle Szene.
*/

var config = {
    type: Phaser.AUTO, // Wie das Spiel gerenderd wird: Erst WebGL, sonst Canvas
    width: 320,
    height: 220, // um 40 px erhoet um Dialog hinzuzufuegen
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
    this.load.image('dialog', '../Elemente/Assets/Dialoge/baseDialog.png');
    this.load.image('woman', '../Elemente/Assets/Figurbeispiel/woman.png');
}

// Geladene Materialien anzeigen lassen
function create() 
{
    // Game basics
    this.add.image(0, -1, 'ground').setOrigin(0,0);
    this.add.image(0, 160, 'dialog').setOrigin(0,0);

    // manipulation of images
    npc_Woman = this.add.image(160, 110, 'woman').setOrigin(0,0);
    npc_Woman.setScale(0.1);
}


function update() 
{

}
