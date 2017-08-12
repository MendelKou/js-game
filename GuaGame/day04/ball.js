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
		rebound:function(direction){
			if(direction === 'x'){
				this.xspeed *= -1
			}else{
				this.yspeed *= -1
			}
			
		},
		hasPoint: function(point){
			var p = point
			var w = this.img.width
			var h = this.img.height
			return p.x > this.x && p.x < this.x+w && p.y > this.y && p.y < this.y+h
		},
	}
	return ball
}