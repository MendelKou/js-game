function __main(){
	var debug = false
	var images = {
		ball : 'ball.png',
		paddle : 'paddle.png',
		block : 'block.png',
	}
	var game = GuaGame(images)
	var paddle,ball,blocks,score
	game.init = function(){
		paddle = Paddle(game)
		ball = Ball(game)
		blocks = loadLevels(game,1)
		score = 0

		game.registerAction('a',function(){
			paddle.moveLeft()
		})
		game.registerAction('d',function(){
			paddle.moveRight(game.canvas)
		})
		game.registerAction('f',function(){
			ball.fire()
		})
		window.addEventListener('keydown',function(event){
			var k = event.key
			if(k == 'p'){
				game.paused = !game.paused
			}else if("123456789".includes(k)){
				blocks = loadLevels(game,parseInt(k))
			}
		},false)
		document.querySelector('#sinput').addEventListener('input',function(event){
			game.fps = parseInt(sinput.value)
		},false)
	}

	game.update = function(){
		if(game.paused){
			return
		}
		if(isCollided(paddle,ball)){
			log('paddle ball collided')
			ball.rebound()
		}
		ball.move(game.canvas)

		blocks.forEach(function(block){
			if(block.collide(ball)){
				log('ball block collided')
				ball.rebound()
				block.die()
				score += 10
			}
		})

	}
	game.draw = function(){
		game.drawImage(paddle)
		game.drawImage(ball)
		blocks.forEach(function(block){
			if(block.alive){
				game.drawImage(block)
			}
		})
		game.ctx.fillText('分数：'+score, 10, 285);
	}
}
__main()