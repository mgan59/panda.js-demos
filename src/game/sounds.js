game.module(
    'game.sounds'
)
.require(
    'engine.core',
    'game.main',
    'game.assets'
)
.body(function(){

game.icon = 'media/icons/speaker.png';
game.addAsset(game.icon);

SceneGame = game.Scene.extend({
    init: function() {

        this.super();
    }
})

game.start();

});