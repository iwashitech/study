## FLOCSSの構造

|名前|詳細|
|-|-|
|Foundation|リセット系cssの読み込みや、そのサイトの基本となるスタイル。|
|Layout|ヘッダー、フッター、コンテンツエリアなど、サイト全体の共通部分となるもの。|
|Object|サイト内の各パーツのビジュアルに関するもの。<br>Component、Project、Utilityと分類|
|Component|再利用することができる最小単位のモジュール。<br>buttonやtitleなど。|
|Project|ProjectはComponentとかのカタマリで構成されるもの。<br>グローバルナビや問い合わせフォームのスタイリングをする。|
|Utility|一部分だけ微妙にスタイリングが必要になったときに使う。<br>ComponentやProjectを拡張したり装飾する。|

## 読み込む順番

```scss
/*
 * foundation
 */
@use "foundation/_reset";
@use "foundation/_base";

/*
 * layout
 */
@use "layout/_footer";
@use "layout/_header";
@use "layout/_main";
@use "layout/_sidebar";

/*
 * object
 */
// Component
@use "object/component/_button";
@use "object/component/_grid";
@use "object/component/_media";
@use "object/component/_title";

// Project
@use "object/project/_articles";
@use "object/project/_comments";
@use "object/project/_gallery";
@use "object/project/_profile";
@use "object/project/_section";

// Utility
@use "object/utility/_align";
@use "object/utility/_clearfix";
@use "object/utility/_margin";
@use "object/utility/_typography";
```

## FLOCSSの課題感

- projectとcomponentの違いがわかりにくい問題
   - projectはページ単位でCSSを当てるときのみ利用
   - トップページのみで利用するCSSはp-homeのようなCSSクラス名を当ててコーディングする
- 命名を要素ベースか内容ベースか問題
<br>（クラス名をsection,cta,titleのような要素名をベースに命名するか、about,service,faqのような内容をベースに命名するか問題。）
   - componentにあたるクラス名は要素ベースで。
   - projectにあたるクラス名は内容ベースで。
- 運用しているとutilityがカオスになる問題
   - 基本はutilityは使わず、「--」によるバージョン違いで運用
- 複数ページでの運用が難しすぎ問題
   - projectをページ単位で考えてスタイリングする手法を取り入れる

[🔝トップに戻る](../README.md)