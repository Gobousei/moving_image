'use strict'

//ブラウザがページを完全に読みこむまで待つ
addEventListener( 'load', () => {

	//変数gameの指定
	const game = new Game();

	//gameにgame startを命令
	game.start();

} );
