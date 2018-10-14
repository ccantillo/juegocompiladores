/*import Jugador from '../objetos/jugador.js'
import Escena_B from './escena_B.js';
import Client from '../cliente.js'*/
var FlyingStar = new Phaser.Class({

    Extends: Phaser.Physics.Arcade.Sprite,

    initialize:

    function FlyingStar (scene, x, y, width, height, speed)
    {
        Phaser.Physics.Arcade.Sprite.call(this, scene, x, y, 'eggman');

        //  This is the path the sprite will follow
        this.path = new Phaser.Curves.Ellipse(x, y, width, height);
        this.pathIndex = 0;

    
        this.pathSpeed = speed;
        this.pathVector = new Phaser.Math.Vector2();

        this.path.getPoint(0, this.pathVector);

        this.setPosition(this.pathVector.x, this.pathVector.y);
    },

    preUpdate: function (time, delta)
    {
        this.anims.update(time, delta);

        this.path.getPoint(this.pathIndex, this.pathVector);

        this.setPosition(this.pathVector.x, this.pathVector.y);

        this.pathIndex = Phaser.Math.Wrap(this.pathIndex + this.pathSpeed, 0, 1);
    }

});

var cursors;
var platforms;
var platforms2;
var stars;
var score = 0;
var scoreText;
var balas;
var music;

class Escena_A extends Phaser.Scene{
    constructor(key){
        super({key: key, active: true})
    }

    
    
    create(){
        this.add.image(0,300,"fondo");
        var s=0;
        for (var i = 0; i<=10; i++) {
          this.add.image(s+1920,300,"fondo");
          s+=1920;
        }
        this.cameras.main.setBounds(0, 0, 10000, 600).setName('main');
        this.cameras.main.setBackgroundColor('#6bf');
        this.physics.world.setBounds(0, 0, 10000, 1080 * 2);
        this.minimap = this.cameras.add(0, 0, $('body').width(), 100).setZoom(0.15).setName('mini');
        this.minimap.setBounds(0, 0, 500, 600).setName('mini');
        this.minimap.setBackgroundColor(0x002244);


        //balas = this.physics.add.group({ allowGravity: false });
       //balas.add(new FlyingStar(this, 150, 500, 100, 100, 0.005), true);

        this.tick = this.time.now;


        this.ene = this.add.sprite(1200, 180,'mons');



        //puntuacion
        this.playerMap = {};
        scoreText = this.add.text(400, 100, 'score: 0', { fontSize: '32px', fill: '#000' });

        //items

        this.crearitems();
        
        //plataformas

        this.crearplat();

        //this.physics.add.collider(this.player, platforms);

        //fisicas
        this.physics.add.collider(stars, platforms);


        //movimiento
        cursors = this.input.keyboard.createCursorKeys();

        Client.askNewPlayer();

        this.input.keyboard.on('keydown_LEFT', function (event) {
            Client.mover("left");
        });
        this.input.keyboard.on('keydown_RIGHT', function (event) {
            Client.mover("right");
        });
        this.input.keyboard.on('keyup_LEFT', function (event) {
            Client.mover("stop");
        });
        this.input.keyboard.on('keyup_RIGHT', function (event) {
            Client.mover("stop");
        });
        this.input.keyboard.on('keydown_UP', function (event) {
            Client.mover("up");
        });


        this.music = this.sound.add('musica');

    
    }
    
    update(time, delta){
        this.ene.x = this.cameras.main.scrollX+1230;
        this.ene.y = this.cameras.main.scrollY+130;

        if (this.time.now - this.tick > 3000) {
            Client.envDisparo();
             this.tick = this.time.now;
        }

        scoreText.x = this.cameras.main.scrollX;
    }

    collectStar (jugador1, star){
        star.disableBody(true, true);
        scoreText.setText(" ");
        score += 10;
        scoreText.setText('Score: ' + score);
    }
    removeplat (star){
        plat.disableBody(true, true);
    }

    crearplat(){
        var splat1=384;
        var splat2=178;
        //Plataformas1
          platforms = this.physics.add.staticGroup(
              {
                  key: 'ground',
                  repeat: 1,
                  setXY: { x: 200, y: 568, stepX:500 }
              }
          );
  
          platforms.create(900+splat1, 568, 'ground');
          platforms.create(1200+splat1, 450, 'ground');
          platforms.create(1500+splat1, 300, 'ground');
          platforms.create(2000+splat1, 568, 'ground');
          platforms.create(4550+splat1, 568, 'ground');
          platforms.create(5200+splat1, 568, 'ground');
          platforms.create(5200+splat1, 568, 'ground');
          platforms.create(7200+splat1, 568, 'ground');
          platforms.create(7700+splat1, 568, 'ground');
          platforms.create(8300+splat1, 568, 'ground');
          platforms.create(8600+splat1, 568, 'ground');
  
  
          //Plataformas 3
          platforms2 = this.physics.add.staticGroup(
              {
                  key: 'ground3',
                  setXY: { x: 2700+splat2, y: 567, stepX:0 }
              }
          );
  
  
          platforms2.create(2900+splat2, 568, 'ground3');
          platforms2.create(3200+splat2, 530, 'ground3');
          platforms2.create(3600+splat2, 500, 'ground3');
          platforms2.create(4000+splat2, 568, 'ground3');
          platforms2.create(4300+splat2, 568, 'ground3');
          platforms2.create(5900+splat2, 500, 'ground3');
          platforms2.create(6250+splat2, 568, 'ground3');
          platforms2.create(6450+splat2, 460, 'ground3');
          platforms2.create(6650+splat2, 568, 'ground3');
          platforms2.create(6950+splat2, 430, 'ground3');
  
  
          //this.physics.add.overlap(this.platforms, this.cameras.main, this.removeplat, null, this);
          //platforms.create(2550, 450, 'ground');
          //platforms.create(50, 450, 'ground');
  
      }
  
      crearnubes(){
  
        var xant=100;
        var xP = Math.random() * ((100+xant) - xant) + xant;
        xant=xP;
        var yP = Math.random() * (568 - 250) + 250;
        var step = Math.random() * (500 - 400) + 400;
        var n=0;
  
        nubes = this.physics.add.staticGroup(
          {
            key: 'nube3',
            setXY: { x: 300, y:200, stepX:200},
          }
        );
        for (var k = 0; k<=30; k++) {
          xP = Math.floor(Math.random() * ((xant+400) - (xant+200))) + (xant+200);
          yP = Math.random() * ((150) - (250)) + (250);
          n= Math.floor(Math.random() * (3 - 1)) + 1;
  
          xant=xP;
          if(n==1)nubes.create(xP, yP, 'nube2');
          if(n==2)nubes.create(xP, yP, 'nube3');
            }
  
  
  
        nubes.children.iterate(function (child) {
            //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            child.setScale(0.4);
        });
      }
  
      crearitems(){
          stars = this.physics.add.group({
              key: 'star',
              repeat: 100,
              setXY: { x: 12, y: 100, stepX: 100 }
          });
          stars.children.iterate(function (child) {
              //child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
              child.setScale(0.5);
          });
  
      }

    addNewPlayer(id,x,y){
        this.playerMap[id] = new Jugador(this, x, y, "boom");
        this.playerMap[id].setScale(0.5);
        this.physics.add.collider(this.playerMap[id], platforms);
        this.physics.add.overlap(this.playerMap[id], stars, this.collectStar, null, this);
        this.physics.add.collider(this.playerMap[id], platforms2);
        this.playerMap[id].body.collideWorldBounds = true;
        this.cameras.main.startFollow(this.playerMap[id], true, 0.05, 0.05);
        this.minimap.startFollow(this.playerMap[id], true, 0.05, 0.5);
        this.physics.add.overlap(this.playerMap[id], balas, function(){
        this.scene.launch('escenab');
        this.scene.pause();
        }, null, this)
        

    };

    removePlayer(id){
        //console.log(this.playerMap[id]);
        this.playerMap[id].destroy();
        delete this.playerMap[id];
    };

    mover(direccion, id){

        if (direccion == "left")
        {
            this.playerMap[id].body.setVelocityX(-260);
            //this.add.sprite(400, 300, 'boom').play('explode');
            this.playerMap[id].play('left');
            //location.reload(true);
        }
        else if (direccion == "right")
        {
            
            this.playerMap[id].body.setVelocityX(260); 
            this.playerMap[id].play('right');
            //this.playerMap[id].anims.play('right', true);           
            //this.jugador1.anims.play('right', true);
        }
        else if (direccion == "stop")
        {
            this.playerMap[id].body.setVelocityX(0);
            this.playerMap[id].play('stop');
            //this.jugador1.anims.play('turn');
        }

        if (direccion == "up" && this.playerMap[id].body.touching.down)
        {
            this.playerMap[id].body.setVelocityY(-850);
        }

        if(this.playerMap[id].body.y >= 600){
            this.scene.launch('escenab');
        this.scene.pause();
        }

    }

    disparo(id){

        var BetweenPoints = Phaser.Math.Angle.BetweenPoints;
        var SetToAngle = Phaser.Geom.Line.SetToAngle;
        var velocityFromRotation = this.physics.velocityFromRotation;

    //this.add.image(320, 256, 'backdrop').setScale(2);
    var chick = this.physics.add.sprite(this.ene.x, this.ene.y, 'bullet').setScale(0.8);
    chick.body.allowGravity = false;
    var gfx = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });

    var velocity = new Phaser.Math.Vector2();
    var line = new Phaser.Geom.Line();

    // Disable physics body, deactivate game object, hide game object
    chick.disableBody(true, true);

    //this.anims.create({ key: 'fly', frames: this.anims.generateFrameNumbers('chick', [0, 1, 2, 3]), frameRate: 5, repeat: -1 });

        var angle = BetweenPoints(this.ene, this.playerMap[id]);

        //SetToAngle(line, cannon.x, cannon.y, angle, 128);
        velocityFromRotation(angle, 600, velocity);
        //gfx.clear().strokeLineShape(line);

        // Enable physics body and reset (at position), activate game object, show game object
        chick.enableBody(true, this.ene.x, this.ene.y, true, true).setVelocity(velocity.x, velocity.y);
        chick.play('disparo');

        this.physics.add.overlap(this.playerMap[id], chick, function(){
            //this.scene.add('escenab', new Escena_B('escenab'), true);
        this.scene.launch('escenab');
        this.scene.pause();
        }, null, this);

        this.animaciones();
        this.music.play();

    }

    animaciones(){
        this.ene.play('enemigo');
    }
    yaper(){
        this.scene.add('escenab', new Escena_B('escenab'));
        //this.scene.launch('escenab');
        this.scene.pause();
    }

    musica(){
        ///music.play();
    }
}