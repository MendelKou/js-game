class OverScene extends Scene{
	init(game){
		super.init(game)
		game.registerAction('r',function(){
				game.replaceScene(new TitleScene())
				game.unregisterAction('r')
		})
	}
	draw(){
		var game = this.game
		game.ctx.fillStyle = '#000'
		game.ctx.fillText('游戏结束,按 r 重启', 220, 250);
	}
}