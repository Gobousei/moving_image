'use strict'

/**
 * ゲームづくりの基本となるクラス
 */
class Game {

	constructor( width, height ) {
		//canvas要素を作成
		this.canvas = document.createElement( 'canvas' );
		//作成したcanvas要素をbodyタグに追加
		document.body.appendChild( this.canvas );
		//canvasを設定。もし横幅が指定されていなければ320を代入
		this.canvas.width = width || 320;
		//canvasを設定。もし縦幅が指定されていなければ320を代入
		this.canvas.height = height || 320;
	} //End constructor

	start() {
		//メインループを呼び出す
		this._mainLoop();
	} //End start

	/**
	 * メインループ
	 */
	_mainLoop() {
		//コンテキストを呼ぶ
		const ctx = this.canvas.getContext( '2d' );
		//塗りつぶしの色に、黒を指定する
		ctx.fillStyle = '#000000';
		//左上から、画面のサイズまでを、塗りつぶす
		ctx.fillRect( 0, 0, this.canvas.width, this.canvas.height );

		//_mainLoopを呼び出して、ループさせる
		requestAnimationFrame( this._mainLoop.bind( this ) );
	} //_mainLoop() 終了
  
}
