function __main(){
	window.debug = true
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
		var collideInfo = collideCheck(paddle,ball)
		if(collideInfo){
			log('paddle ball collided')
			ball.rebound(collideInfo)
		}
		ball.move(game.canvas)

		blocks.forEach(function(block){
			var collideInfo = block.collide(ball)
			if(collideInfo){
				log('ball block collided')
				ball.rebound(collideInfo)
				block.die()
				score += 10
			}
		})

	}
	game.draw = function(){
		game.ctx.fillStyle = '#666'
		game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height)
		game.drawImage(paddle)
		game.drawImage(ball)
		blocks.forEach(function(block){
			if(block.alive){
				game.drawImage(block)
			}
		})
		game.ctx.fillText('分数：'+score, 10, 285);
	}
	var enableDrag = false
	game.canvas.addEventListener('mousedown',function(event){
		var x = event.offsetX
		var y = event.offsetY
		log('mosuedown:'+x+','+y)
		var point = {x:x,y:y}
		if(ball.hasPoint(point)){
			enableDrag = true
		}
	},false)
	game.canvas.addEventListener('mousemove',function(event){
		var x = event.offsetX
		var y = event.offsetY
		if(enableDrag){
			log('drag:'+x+','+y)
			ball.x = x
			ball.y = y
		}
	},false)
	game.canvas.addEventListener('mouseup',function(event){
		log('mosueup')
		enableDrag = false
	},false)
}
__main()