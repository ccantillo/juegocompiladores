
class Escena_B extends Phaser.Scene{
    constructor(){
        super({key: 'escenab'})
    }


    create(){
        var yaper = this.add.image(800,300,"yaper").setScale(0.5);
        this.input.keyboard.on('keydown_LEFT', function (event) {
            yaper.destroy();
            stage2.pausar();
            stage.scene.restart();
        });
    }

    update(time, delta){
    }

    pausar(){
        this.scene.pause();
    }

}
