var debug = true
var log = function(msg){
	if(window.debug){
		console.log(msg)
	}
}
var imageFromPath = function(path){
	var img = new Image()
	img.src = path
	return img
}
var isCollided = function(a,b){
	var aw = a.img.width
	var ah = a.img.height
	var bw = b.img.width
	var bh = b.img.height
	if(b.x > a.x - bw && b.x < a.x+aw 
		&& b.y > a.y -bh && b.y < a.y+ah){
		return true
	}
	return false
}

var loadLevels = function(n){
	var i = n - 1
	var blocks = []
	var level = levels[i]
	for(var i = 0; i < level.length; ++i){
		p = level[i]
		b = Block(p)
		blocks.push(b)
	}
	return blocks
}