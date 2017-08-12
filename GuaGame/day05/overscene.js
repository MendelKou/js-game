var OverScene = function(){
	var o = {}
	o.update = function(game){
		
	}
	o.draw = function(game){
		game.ctx.fillStyle = '#000'
		game.ctx.fillText('游戏结束', 220, 250);
	}
	return o
}