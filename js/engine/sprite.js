'use strict'

/**
 * スプライトに関してのクラス
 */
class Sprite {

	/**
	 * 引数
	 * img : 画像ファイルまでのパス
	 */
	constructor( img ) {
		this.img = new Image();
		//this.img.srcに画像ファイルまでのパスを代入
		this.img.src = img;
		//画像の初期位置
		this.x = this.y = 0;
	} //constructor() 終了

	/**Gameクラスのメインループからずっと呼び出され続ける
	 *
	 * 引数
	 * canvas : 紙（キャンバス）
	 */
	update( canvas ) {
		//画像などを画面に表示するためのメソッドを呼び出す
		this.render( canvas );
	} //update() 終了

	/**
	 * 画像などを画面に表示するためのメソッド
	 *
	 * 引数
	 * canvas : 紙（キャンバス）
	 */
	render( canvas ) {
		const _ctx = canvas.getContext( '2d' );
		_ctx.drawImage( this.img, this.x, this.y );
	} //render() 終了

}
