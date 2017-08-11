var GuaGame = function(){
	game = {
		canvas : document.getElementById("canvas"),
		ctx : canvas.getContext("2d"),
		keydowns: {},
		callbacks : {},
		paused : false,
		fps : 50,
	}
	window.addEventListener('keydown',function(event){
		game.keydowns[event.key] = true
	},false)
	window.addEventListener('keyup',function(event){
		game.keydowns[event.key] = false
	},false)
	game.registerAction = function(key,callback){
		game.callbacks[key] = callback
	}
	game.doActions = function(){
		var keys = Object.keys(game.callbacks)
		for(var i=0; i<keys.length; ++i){
			var key = keys[i]
			if(game.keydowns[key]){
				game.callbacks[key]()
			}
		}	
	}
	game.drawImage = function(obj){
		game.ctx.drawImage(obj.img,obj.x,obj.y)
	}
	game.clearCanvas = function(){
		var canvas = game.canvas
		var ctx = game.ctx
		ctx.clearRect(0,0,canvas.width,canvas.height)
	}
	game.update = function(){}
	game.loop = function(){
		game.doActions()
		game.update()
		game.clearCanvas()
		game.draw()
		setTimeout(game.loop,1000/game.fps)
	}
	game.start = function(){
		game.loop()
	}
	return game
}