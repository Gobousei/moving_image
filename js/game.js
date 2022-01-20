'use strict';
 
class Game {
  constructor( width, height ) {
    this.objs = [];
 
    //追加
    this.frame = 0;
 
    //もしもwidthやheight何も代入されていなければ、320を代入する
    this.width = width || 320;
    this.height = height || 320;
 
    this.canvas = document.getElementById( 'canvas' );
    //canvasの横幅とたて幅
    canvas.width = this.width;
    canvas.height = this.height;
 
    this.ctx = canvas.getContext( '2d' );
  }
 
  //start()を呼び出すことで、メインループが開始される。
  start() {
    this._main();
  }
 
  //メインループ
  _main() {
    //背景を黒く塗りつぶす
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect( 0, 0, this.width, this.height );
		
    //ゲームに登場するものの数だけ繰り返す
    for (let i=0; i<this.objs.length; i++) {
      //ゲームに登場するもののクラスから、render()を呼び出す
      this.objs[i].render( this.ctx, this.frame );
    }
 
    //追加
    this.frame++;
    //もしコンソールで確認したいならば以下を追加
    console.log( this.frame );
 
    //_main()を呼び出す（ループさせる）
    requestAnimationFrame(this._main.bind(this));
  }
 
  //ゲームにテキストなどを表示するための関数
  add( obj, x, y ) {
    obj.x = x || 0;
    obj.y = y || 0;
    this.objs.push( obj );
  }
}
 
class Label {
  //Labelの初期設定
  constructor( label ) {
    this._text = '';
    this._charcnt = 0;
    this.label = label;
    this.font = "24px 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', 'ＭＳ ゴシック', 'MS Gothic', sans-serif";
    this.color = '#fff';
    this.baseline = 'top';
    this.interval = 0;
  }
 
  //Labelを表示するための関数（メインループから呼び出される）
  render( ctx, frame ) {
    ctx.fillStyle = this.color;
    ctx.font = this.font;
    ctx.textBaseline = this.baseline;
    if ( this.interval === 0 ) ctx.fillText( this.label, this.x, this.y );
    else {
      if ( this._charcnt < this.label.length && frame%this.interval === 0 ) {
        this._text += this.label.charAt( this._charcnt );
        this._charcnt++;
      }
      ctx.fillText( this._text, this.x, this.y );
    }
  }
}
