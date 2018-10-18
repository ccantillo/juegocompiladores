class Cargar extends Phaser.Scene {
    constructor(){
        super({key: "Cargar"});
    }

    preload(){
        this.load.on("complete", () => {
            var config = {
                key: 'right',
                frames: this.anims.generateFrameNumbers('boom', { frames: [0, 1, 2, 3,4,5,6,7] }),
                frameRate: 10,
                repeat: -1
            };

            this.anims.create(config);
            var config2 = {
                key: 'left',
                frames: this.anims.generateFrameNumbers('boom', { frames: [9, 10, 11, 12,13,14,15] }),
                frameRate: 10,
                repeat: -1
            };

            this.anims.create(config2);
            var config3 = {
                key: 'stop',
                frames: this.anims.generateFrameNumbers('boom', { frames: [4] }),
                frameRate: 10,
                repeat: -1
            };

            this.anims.create(config3);

            var config9 = {
                key: 'right2',
                frames: this.anims.generateFrameNumbers('boom2', { frames: [0, 1, 2, 3,4,5,6,7] }),
                frameRate: 10,
                repeat: -1
            };

            this.anims.create(config9);
            var config10 = {
                key: 'left2',
                frames: this.anims.generateFrameNumbers('boom2', { frames: [9, 10, 11, 12,13,14,15] }),
                frameRate: 10,
                repeat: -1
            };

            this.anims.create(config10);
            var config11 = {
                key: 'stop2',
                frames: this.anims.generateFrameNumbers('boom2', { frames: [4] }),
                frameRate: 10,
                repeat: -1
            };

            this.anims.create(config11);

            var config4 = {
                key: 'exp',
                frames: this.anims.generateFrameNumbers('laser', { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }),
                frameRate: 10,
                repeat: -1
            };

            this.anims.create(config4);

            var config5 = {
                key: 'enemigo',
                frames: this.anims.generateFrameNumbers('mons', { frames: [0, 1, 2, 3] }),
                frameRate: 8,
                repeat: -1
            };
            this.anims.create(config5);

            var config6 = {
                key: 'disparo',
                frames: this.anims.generateFrameNumbers('bullet', { frames: [0, 1, 2, 3] }),
                frameRate: 14,
                repeat: -1
            };
            this.anims.create(config6);

            this.scene.start("Stage");
        })
        this.load.image("pok", "./assets/pok.png");
        this.load.image("ground", "./assets/modulo1.png");
        this.load.image("groundA", "./assets/modulo1A.png");
        this.load.image("groundO", "./assets/modulo1O.png");
        this.load.image("ground3", "./assets/modulo3.png");
        this.load.image("ground3A", "./assets/modulo3A.png");
        this.load.image("star", "./assets/star2.png");
        this.load.image('sky', './assets/sky1.png');
        this.load.image('nube2', './assets/Nube4.png');
        this.load.image('nube3', './assets/Nube3.png');
        this.load.image('fondo', './assets/fondo.jpg');
        this.load.image('fondo2', './assets/fondo2.jpg');
        this.load.image('fondo3', './assets/fondo3.jpg');
        this.load.image('eggman', './assets/monster.png');
        this.load.image('yaper', './assets/yaper2.png');
        this.load.spritesheet('boom', './assets/jugador.png',
        { frameWidth: 88, frameHeight: 120, endFrame: 16 });
        this.load.spritesheet('boom2', './assets/jugador2.png',
        { frameWidth: 88, frameHeight: 120, endFrame: 16 });
        this.load.spritesheet('laser', './assets/laser2.png',
        { frameWidth: 128, frameHeight: 511, endFrame: 11 });
        this.load.spritesheet('mons', './assets/monster.png',
        { frameWidth: 64, frameHeight: 64, endFrame: 4 });
        this.load.spritesheet('bullet', './assets/Disparo.png',
        { frameWidth: 64, frameHeight: 64, endFrame: 4 });
        this.load.audio('musica', './assets/Musica jueguito V2.mp3');
    }
}
