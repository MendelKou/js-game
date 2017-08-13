class TitleScene extends Scene{
  init(game){
  	super.init(game)
  	this.game.registerAction('g',function(){
		game.replaceScene(new PlayScene())
		game.unregisterAction('g')
	})
  }
  draw(){
  	this.game.ctx.fillText('按 g 开始游戏', 200, 220);
  }
}
