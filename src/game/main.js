game.module(
    'game.main'
)
.require(
    'engine.scene'
)
.body(function(){

game.Scene.inject({
    backgroundColor: 0xeeeeee,
    
    init: function() {
        var sprite = new game.Graphics();
        sprite.beginFill(0xb9bec7);
        sprite.drawRect(0,0,game.system.width,120);
        this.stage.addChild(sprite);

        sprite = new game.Sprite(10, 0, 'media/panda.png');
        this.stage.addChild(sprite);

        sprite = new game.Sprite(0, 0, game.icon);
        sprite.position.x = game.system.width - sprite.width - 10;
        this.stage.addChild(sprite);
    }
});

});