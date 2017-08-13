var Block = function(g,position){
	// position [0,0] 格式 
	var p = position
	var lifes = p[2] || 1
	var b = {
		x : p[0],
		y : p[1],
		img: g.images['block'+lifes],
		alive:true,
		lifes:lifes,
	}
	b.collide = function(ball){
		// return this.alive && isCollided(this,ball)
		var r = collideCheck(this,ball)
		if(this.alive && r){
			return r
		}
		return null
	}
	b.die = function(){
		this.lifes--
		if(this.lifes < 1){
			this.alive = false
		}
		this.img = g.images['block'+this.lifes]
	}
	return b
}