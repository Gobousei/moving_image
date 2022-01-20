'use strict';
 
//ゲームのオブジェクトを640×480サイズで作る
let game = new Game( 640, 480 );
 
//ラベルオブジェクトを作る
let label = new Label( 'こんにちは' );
 
//add()を使って、ゲームにラベルを表示
game.add( label, 20, 40 );
 
//ゲームスタート
game.start();
