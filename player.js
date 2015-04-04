var Player = {
    dx: 0,
    dy: 0,
    windowWidth:0,
    windowHeight:0,
    marker: 0,

    createSprite: function (textureName) {
        // create a texture from an image path
        var texture = PIXI.Texture.fromImage("marker.png");
        // create a new Sprite using the texture
        this.marker = new PIXI.Sprite(texture);
        
        // center the sprites anchor point
        this.marker.anchor.x = 0.5;
        this.marker.anchor.y = 0.5;
        
        // move the sprite t the center of the screen
        this.marker.position.x = 200;
        this.marker.position.y = 150;
        return this.marker;
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
