var Paddle = function(){
	var paddle = {
		x : 150,
		y : 240,
		speed : 8,
		img: imageFromPath('paddle.png'),
		moveLeft : function(){
			this.x -= this.speed
			if(this.x < 0){
				this.x = 0
			}
		},
		moveRight : function(canvas){
			this.x += this.speed
			var w = this.img.width
			if(this.x > canvas.width-w){
				this.x = canvas.width-w
			}
		},
	}
	return paddle
} 