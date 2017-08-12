var registerEvents = function(game){
	game.registerAction('a',function(){
			game.paddle.moveLeft()
	})
	game.registerAction('d',function(){
		game.paddle.moveRight(game.canvas)
	})
	game.registerAction('f',function(){
		game.ball.fire()
	})
	window.addEventListener('keydown',function(event){
		var k = event.key
		if(k == 'p'){
			game.paused = !game.paused
		}else if("123456789".includes(k)){
			game.blocks = loadLevels(game,parseInt(k))
		}
	},false)
	document.querySelector('#sinput').addEventListener('input',function(event){
		game.fps = parseInt(this.value)
	},false)

	var enableDrag = false
	game.canvas.addEventListener('mousedown',function(event){
		var x = event.offsetX
		var y = event.offsetY
		log('mosuedown:'+x+','+y)
		var point = {x:x,y:y}
		if(game.ball.hasPoint(point)){
			enableDrag = true
		}
	},false)
	game.canvas.addEventListener('mousemove',function(event){
		var x = event.offsetX
		var y = event.offsetY
		if(enableDrag){
			log('drag:'+x+','+y)
			game.ball.x = x
			game.ball.y = y
		}
	},false)
	game.canvas.addEventListener('mouseup',function(event){
		log('mosueup')
		enableDrag = false
	},false)
}