# CSS設計の学習

## 参考サイト

### ガイドライン
- [coding-guidelines/how-to-ecss.md at master · manabuyasuda/coding-guidelines](https://github.com/manabuyasuda/coding-guidelines/blob/master/css/how-to-ecss.md)
- [ECSSの概要と考え方のまとめ - Qiita](https://qiita.com/manabuyasuda/items/37523e9d0bfbad34211f)
- [coding-guidelines/css-guideline.md at master · manabuyasuda/coding-guidelines](https://github.com/manabuyasuda/coding-guidelines/blob/master/css/css-guideline.md)

### ECSS概要
- [Enduring CSSの設計思想 | 第1回 ECSSが目指す設計](https://www.codegrid.net/articles/2016-ecss-1#toc-4)
- [TAKさんはTwitterを使っています: 「CSS設計はFLOCSSでやってるけど、基本的にp-ばかりだからp-の部分を今後はnamespaceにしようかなと。 グロナビとかのコンポーネント以外の共通部分→st-(structure) トップページ→home- 下層ページ→sub- ブログ記事→post- 無くてもいいと思ったけどクラス名の衝突を防ぐために接頭辞はつけたい。」 / Twitter](https://twitter.com/tak_dcxi/status/1193763435294494720)
- [抽象化を避けるCSS設計方法論「Enduring CSS」 第2回 | HTML5Experts.jp](https://html5experts.jp/takazudo/22123/)

### FLOCSS + ECSS
- [Webサービス開発でのCSS設計を考える - 人類はCSS設計に敗北したのか？ - - Qiita](https://qiita.com/DesignChips/items/408a1b08fdb321e1ca58)
- [堅牢で保守的な最低限度の CSS 設計 - Qiita](https://qiita.com/toshifumiimanishi/items/289ff7a44054bcc39b09)

### DORCSS
- [manabuyasuda/dorcss: DORCSS（ドールシーエスエス）はRole（役割）を分担・分割（Division）することで影響範囲を管理する、CSS設計の構成案です。](https://github.com/manabuyasuda/dorcss)

### 様々なCSS設計手法の紹介
- [開発体制に合わせたCSS設計 | 吉川ウェブ](https://yoshikawaweb.com/css-structure.html)
- [CSSアーキテクチャ（後編）-種類 - スタイルガイド - [SMART]](https://rfs.jp/sb/html-css/html-css-guide/css-architecture2.html)

### 公式サイト（web.archive.org）
<details>
<summary>一覧</summary>

- [ECSS: Chapter 1](https://web.archive.org/web/20160619103638/http://ecss.io/chapter1.html)
- [ECSS: Chapter 2](https://web.archive.org/web/20160619095725/http://ecss.io/chapter2.html)
- [ECSS: Chapter 3](https://web.archive.org/web/20160614035354/http://ecss.io/chapter3.html)
- [ECSS: Chapter 4](https://web.archive.org/web/20160612111016/http://ecss.io/chapter4.html)
- [ECSS: Chapter 5](https://web.archive.org/web/20160620212544/http://ecss.io/chapter5.html)
- [ECSS: Chapter 6](https://web.archive.org/web/20160620225908/http://ecss.io/chapter6.html)
- [ECSS: Chapter 7](https://web.archive.org/web/20160619124709/http://ecss.io/chapter7.html)
- [ECSS: Chapter 8](https://web.archive.org/web/20160619135011/http://ecss.io/chapter8.html)
- [ECSS: Chapter 9](https://web.archive.org/web/20160612111022/http://ecss.io/chapter9.html)
- [ECSS: Close](https://web.archive.org/web/20160614181417/http://ecss.io/close.html)
- [ECSS: Appendix 1](https://web.archive.org/web/20160619105313/http://ecss.io/appendix1.html)
- [ECSS: Appendix 2](https://web.archive.org/web/20160604083412/http://ecss.io/appendix2.html)
</details>

### RSCSS

<details>
<summary>一覧</summary>

- [良い感じにCSS書くために"rscss"という考え方がちょうど良かったので訳しつつまとめとく - Tomcky's blog](https://tomcky.hatenadiary.jp/entry/2018/03/19/000139)
- [CSSアーキテクチャRSCSSの規格解説 - スタイルガイド - [SMART]](https://rfs.jp/sb/html-css/html-css-guide/rscss.html)
- [RSCSSを使用した感想と課題 - Qiita](https://qiita.com/y___k/items/bedd6c2fdc61b4364aa2)
- [短いクラス名で運用できる CSS設計 rscss を CSS Modules 向けにアレンジしてみた](https://zenn.dev/lollipop_onl/articles/eoz-rscss-in-css-modules)
- [RSCSSの使い方と実際に使われているサイト一例 – まめしばweb](https://mameshibaweb.com/rscss/)
- [RSCSSに入門してみた - WESEEK Tips wiki](https://tips.weseek.co.jp/5fc797b2c2953c0048cdd155)
- [シンプル is ベストなCSS記法「RSCSS」 | PAPADAYS.COM](https://papadays.com/post/6gy9wlw7aojkkf74fz21kn/)
- [BEM, SMACCSを受け継いだ書きやすいCSS記法RSCSS | bauhausify](https://www.bauhausify.com/2019-08-30_BEMSMACCS%E3%82%92%E5%8F%97%E3%81%91%E7%B6%99%E3%81%84%E3%81%A0%E6%9B%B8%E3%81%8D%E3%82%84%E3%81%99%E3%81%84CSS%E8%A8%98%E6%B3%95RSCSS/)

</details>

### SUIT CSS
- [SUIT CSS: style tools for UI components](https://suitcss.github.io/)
- [CSSの設計方法をまとめてみた~SUIT CCS編~(Angularによるサンプル付き) - Qiita](https://qiita.com/Sekky0905/items/605d23d8287fd4c160b4)

---

## SCSS

- [Sassで@useと@forwardを使ったサイト設計 - @importから切り替える手順 | 夢みるゴリラ](https://yumegori.com/dart-sass-method#chapter-4)
- [SCSSの@forwardについて基本的な使い方を知る](https://arrown-blog.com/scss-use-forward/#SCSSforward)
- [新しいSassの@use、@forwardを組み合わせて変数を別ファイルに分割する - Qiita](https://qiita.com/sygnas/items/43e6eaef15309a062d96#forward%E3%82%92%E4%BD%BF%E3%81%86)
- [@use と@forwardの違い、使い分けについて(Sass)](https://zenn.dev/taketooon/articles/fa77fcbd3ba4b9#forward%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9-%E4%BA%8C%E6%AE%B5%E9%9A%8E%E3%81%A7%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AE%E5%8F%82%E7%85%A7)
- [【SASS】@useと@forwardとは何か？違いやメリット、使い方を実例で解説。asで名前空間を変更する方法, as * , with, 変数の値を上書きする方法(.scss)｜（初心者向け、わかりやすい）](https://prograshi.com/design/css/use-forward/)
