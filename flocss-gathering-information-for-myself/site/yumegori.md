## 分割ファイルの読み込み

```scss
@use "setting/**";
@use "mixin/**";
@use "foundation/ress";
@use "foundation/base";
@use "layout/**";
@use "component/**";
@use "javascript/**";
@use "project/**";
@use "utility/**";
```

## フォルダ構成

|名前|詳細|プレフィックス|
|-|-|-|
|layout|サイトの大枠となるレイアウトを管理。<br>header、footer、main、wrapper、sidebarなど。|l-|
|component|ボタンやリンクなど細かい単位で使いまわせるもの。|c-|
|javascript|JavaScriptによって操作するもの<br>スタイルはつけない。<br>JavaScriptで取得するためだけに使用。|js-|
|project|componentの最小限のパーツと、それ以外の要素が組み合わさってできる塊。<br>レイアウト部分でもなく、componentに含まれないものはprojectフォルダで管理|p-|

## サイト全体のルール

- マルチクラスで指定できる
- 省略を意識しない（基本はクラス名が長くても、複数指定しても気にしない）
- 具体的なクラス名はつけない

[🔝トップに戻る](../README.md)