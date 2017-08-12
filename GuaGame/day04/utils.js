
var log = function(msg){
	if(window.debug){
		console.log(msg)
		// $('#log').value += msg+'\n'
	}
}
var collideCheck = function(a,b){
	var aw = a.img.width
	var ah = a.img.height
	var bw = b.img.width
	var bh = b.img.height
	var checkX = b.x > a.x - bw && b.x < a.x+aw
	var checkY = b.y > a.y -bh && b.y < a.y+ah
	if(checkX && checkY){
		//水平方向重叠宽度
		var intersectionX = Math.abs(Math.min(a.x+aw,b.x+bw)-Math.max(a.x,b.x))
		var intersectionY = Math.abs(Math.min(a.y+ah,b.y+bh)-Math.max(a.y,b.y))
		if(intersectionX < intersectionY){
			return 'x'
		}else{
			return 'y'
		}
	}
	
	return null
}

var loadLevels = function(g,n){
	var i = n - 1
	var blocks = []
	var level = levels[i]
	for(var i = 0; i < level.length; ++i){
		p = level[i]
		b = Block(g,p)
		blocks.push(b)
	}
	return blocks
}

var $ = sel => document.querySelector(sel)
