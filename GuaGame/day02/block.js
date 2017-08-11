var Block = function(position){
	// position [0,0] 格式 
	var p = position
	var b = {
		x : p[0],
		y : p[1],
		img: imageFromPath('block.png'),
		alive:true,
		lifes:p[2] || 1,
	}
	b.collide = function(ball){
		return this.alive && isCollided(this,ball)
	}
	b.die = function(){
		this.lifes--
		if(this.lifes < 1){
			this.alive = false
		}
	}
	return b
}