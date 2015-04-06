var Player = {
    dx: 0,
    dy: 0,
    windowWidth:0,
    windowHeight:0,
    marker: 0,
    worm: [],

    createSprite: function (textureName) {
        // create a texture from an image path
        var texture1 = PIXI.Texture.fromImage("marker.png");
        // create a new Sprite using the texture
        this.marker = new PIXI.Sprite(texture1);
       
        this.worm.push(this.marker);
        
        // center the sprites anchor point
        this.marker.anchor.x = 0.5;
        this.marker.anchor.y = 0.5;
        // move the sprite t the center of the screen
        this.marker.position.x = 200;
        this.marker.position.y = 150;

        texture = PIXI.Texture.fromImage("ball.png");
        
        var ball;
        for( var n = 0; n < 100; ++n ){
            ball =  new PIXI.Sprite(texture);

            // center the sprites anchor point
            ball.anchor.x = 0.5;
            ball.anchor.y = 0.5;
        
            // move the sprite t the center of the screen
            ball.position.x = 200;
            ball.position.y = 150;
            this.worm.push(ball);
        }
        return this.worm;
    },

    updatePos: function ( ) {
        var spriteWidth = this.marker.width / 2 + 5;
        var spriteHeight = this.marker.height / 2 + 5;
        if ((this.marker.position.x + spriteWidth + this.dx) < this.windowWidth && 
            (this.marker.position.x - spriteWidth + this.dx) > 0){
            this.marker.position.x += this.dx;
        }
        if ((this.marker.position.y + spriteHeight + this.dy) < this.windowHeight  && 
            (this.marker.position.y - spriteHeight  + this.dy) > 0){
            this.marker.position.y += this.dy;        
        }
    },
};
