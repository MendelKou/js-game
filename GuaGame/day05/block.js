var Block = function(g,position){
	// position [0,0] 格式 
	var p = position
	var b = {
		x : p[0],
		y : p[1],
		img: g.images.block,
		alive:true,
		lifes:p[2] || 1,
	}
	b.collide = function(ball){
		// return this.alive && isCollided(this,ball)
		var r = null
		if(this.alive && collideCheck(this,ball)){
			var w = this.img.width
			var bw = ball.img.width
			if(ball.x > this.x-bw && ball.x < this.x+w){
				r = 'x'
			}else{
				r = 'y'
			}
		}
		return r
	}
	b.die = function(){
		this.lifes--
		if(this.lifes < 1){
			this.alive = false
		}
	}
	return b
}