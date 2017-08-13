function __main(){
	window.debug = true
	var images = {
		ball : 'img/ball.png',
		paddle : 'img/paddle.png',
		block1 : 'img/block-1.png',
		block2 : 'img/block-2.png',
		block3 : 'img/block-3.png',
	}
	GuaGame(images,new TitleScene())
}
__main()