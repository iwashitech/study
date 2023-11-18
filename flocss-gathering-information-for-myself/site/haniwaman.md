## FLOCSSの構造

|名前|詳細|
|-|-|
|Foundation|要素の初期化やmixinなどのベースを設定。リセットCSSなど。|
|Layout|ヘッダーやフッターなど大枠のレイアウト。<br>装飾はなく枠だけを用意しているイメージ。|
|Component|再利用ができる最小限のパーツ。<br>どの案件でも使える単位でのパーツ。|
|Project|サイト固有のまとまりを定義してパターン化するパーツ。<br>案件に応じて追加していくパーツ。|
|Utility|余白の調整や非表示など。|

## FLOCSSの命名規則

- BEMがベース
- プレフィックスをつける

## 読み込む順番

```scss
@use "foundation/**";
@use "layout/**";
@use "component/**";
@use "project/**";
@use "utility/**";
```

## 疑問点

|疑問|回答|
|-|-|
|「Component」か「Project」か|他の案件でも使えるなら「Component」。<br>この案件でしか使えないなら「Project」|
|mixinやfunction|定義系は全部「Foundation」で管理|
|「Component」の上書き|例外として親の「Project」から上書きはOK|
|JavaScriptと関わる部分|.js-のプレフィックスを付与<br>見栄えに関する記述は一切しない|
|サイト内リンク|#a-プレフィックスのid|

[🔝トップに戻る](../README.md)