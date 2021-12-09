import Phaser from 'phaser';

import map from './assets/maps/map.json'

import dungeonTileSet from './assets/tileset/dungenTileset.png';

export default class World extends Phaser.Scene {
    constructor(){
        super("world");
    }

    init() {}

    preload(){
        this.load.tilemapTiledJSON('worldMap', map);

        this.load.image('tileDungeon', dungeonTileSet);
    }

    create(){
        let map = this.make.tilemap({
            key: 'worldMap',
        })

        let dungeontile = map.addTilesetImage('dungeon', 'tileDungeon')

        let ground = map.createLayer('ground', dungeontile);


    }

    update(){}
}