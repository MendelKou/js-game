var Ball = function(g){
	var x = 245+parseInt(Math.random()*41)-20
	var xspeed  = 4 * (parseInt(Math.random()*2) == 0 ? 1 : -1)
	var ball = {
		x : x,
		y : 100,
		xspeed : xspeed,
		yspeed : 4,
		img: g.images.ball,
		fired : true,
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