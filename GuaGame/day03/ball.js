var Ball = function(g){
	var ball = {
		x : 160,
		y : 150,
		xspeed : 5,
		yspeed : 5,
		img: g.images.ball,
		fired : false,
		fire : function(){
			this.fired = true
		},
		move:function(canvas){
			if(this.fired){
				// log('ball move')
				if(this.x < 0 || this.x > (canvas.width-this.img.width)){
					this.xspeed *= -1
				}
				if(this.y < 0 || this.y > (canvas.height-this.img.height)){
					this.yspeed *= -1
				}
				this.x += this.xspeed
				this.y += this.yspeed
			}
		},
		rebound:function(){
			this.yspeed *= -1
		},
	}
	return ball
}