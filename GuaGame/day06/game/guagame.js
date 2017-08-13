var GuaGame = function(images,scene){
	//images 是图片对象 格式 {ball:'ball.png',}
	game = {
		canvas : document.getElementById("canvas"),
		ctx : canvas.getContext("2d"),
		keydowns: {},
		callbacks : {},
		paused : false,
		fps : 30,
		images : {},
		score:0,
		scene:scene,
	}
	game.ctx.font = '14px 微软雅黑'
	window.addEventListener('keydown',function(event){
		game.keydowns[event.key] = true
	},false)
	window.addEventListener('keyup',function(event){
		game.keydowns[event.key] = false
	},false)
	game.registerAction = function(key,callback){
		game.callbacks[key] = callback
	}
	game.unregisterAction = function(key){
		delete game.callbacks[key]
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

	game.init = function(){
		game.scene.init(game)
	}

	game.update = function(){
		game.scene.update()
	}
	game.draw = function(){
		game.scene.draw()
	}
	game.replaceScene = function(scene){
		game.scene = scene
		game.scene.init(game)
	}
	game.loop = function(){
		game.doActions()
		game.update()
		game.clearCanvas()
		game.draw()
		setTimeout(game.loop,1000/game.fps)
	}
	
	game.start = function(){
		game.init()
		game.loop()
	}
	var loads = []
	//加载图片
	var names = Object.keys(images)
	for(var i=0; i<names.length; ++i){
		var name= names[i]
		var path = images[name]
		var img = new Image();
		(function(name,path){
			img.onload = function(){
				loads.push(1)
				game.images[name] = this
				log(path+'加载完毕')
				if(loads.length == names.length){
					log('游戏开始')
					game.start()
				}
			}
		})(name,path)
		img.src = path
	}
	// return game
}