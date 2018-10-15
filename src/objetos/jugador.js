class Jugador extends Phaser.GameObjects.Sprite {
    constructor(scene, x ,y, nombre){
        super(scene, x, y, nombre);
        scene.add.existing(this);
        scene.physics.world.enable(this);
    }
}