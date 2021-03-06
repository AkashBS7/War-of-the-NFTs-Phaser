import Phaser from 'phaser';

var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 600,
    physics : {
        default: "arcade",
        arcade : {
            debug: true,
        },
    },
    scale: {
        zoom: 1,
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    backgroundColor: '#000000',
    scene: []
}

const game = new Phaser.Game(config);