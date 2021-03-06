'use strict';
 
const str = [
	'吾輩は猫である。',
	'名前はまだ無い。',
	'どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニヤーニヤー泣いていた事だけは記憶して居る。'
];
 
//ゲームのオブジェクトを640×480サイズで作る
let game = new Game( 640, 480 );
 
//ラベルオブジェクトを作る
let label = new Label( str );
label.interval = 5;
label.maxLength = 32;
 
//add()を使って、ゲームにラベルを表示
game.add( label, 0, 0 );
 
//キーボードが押された時
addEventListener( "keydown", () => {
	const key_code = event.keyCode;
	//先ほど登録したスペースキーが押された時、label.next()を実行
	if( key_code === 32) label.next();
	event.preventDefault();		//方向キーでブラウザがスクロールしないようにする
}, false);
 
//ゲームスタート
game.start();
