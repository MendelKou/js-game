function __main(){
	window.debug = true
	var images = {
		ball : 'ball.png',
		paddle : 'paddle.png',
		block : 'block.png',
	}
	var scene = PlayScene()
	var game = GuaGame(images,scene)
}
__main()