var PlayScene = function(){
	var o = {}
	o.update = function(game){
		if(game.paused){
			return
		}
		var collideInfo = collideCheck(game.paddle,game.ball)
		if(collideInfo){
			log('paddle ball collided')
			game.ball.rebound(collideInfo)
		}
		game.ball.move(game.canvas)
		if(game.ball.y > game.paddle.y){
			game.replaceScene(OverScene())
		}

		game.blocks.forEach(function(block){
			var collideInfo = block.collide(game.ball)
			if(collideInfo){
				log('ball block collided')
				game.ball.rebound(collideInfo)
				block.die()
				game.score += 10
			}
		})
	}
	o.draw = function(game){
		game.ctx.fillStyle = '#666'
		game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height)
		game.drawImage(game.paddle)
		game.drawImage(game.ball)
		game.blocks.forEach(function(block){
			if(block.alive){
				game.drawImage(block)
			}
		})
		game.ctx.fillStyle = '#0f0'
		game.ctx.fillText('分数：'+game.score, 10, 285);
	}
	return o
}