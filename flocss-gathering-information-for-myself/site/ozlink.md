## FLOCSSの構造

|名前|詳細|
|-|-|
|Foundation|リセットCSS、サイトの基礎となるスタイル|
|Layout|ヘッダーやメインコンテンツ、サイドバー、フッターなどのレイアウト|
|Component|サイト内で再利用できる最小単位のモジュール|
|Project|複数のComponentやその他の要素で構成されるモジュール|
|Utility|ComponentやProjectのModifierで解決できないわずかなスタイルの調整（marginなど）|

## お寿司にFLOCSSを導入してみる

### マグロのお寿司そのものをComponentとして考える

```html
<div class="c-maguro-no-osushi">
  <div class="c-maguro-no-osushi__neta"></div>
  <div class="c-maguro-no-osushi__wasabi"></div>
  <div class="c-maguro-no-osushi__shari"></div>
</div>

<!-- ※サビ抜きの場合は3行目をコメントアウト、もしくは削除 -->
```

### お寿司が複数ある場合（マグロのお寿司の他にエビのお寿司があった場合）

- ワサビとシャリは同じ
- マグロのお寿司とエビのお寿司はネタが異なるだけ
- ワサビとシャリは全く同じものを使用。
- お寿司そのものをProjectとして考えると、ワサビとシャリを使いまわすことができる

### マグロのお寿司のクラス名を命名し直し

```html
<div class="p-osushi">
  <div class="c-maguro p-osushi__neta"></div>
  <div class="c-wasabi p-osushi__wasabi"></div>
  <div class="c-shari p-osushi__shari"></div>
</div>
```

ネタやワサビ、シャリをComponentとして扱うことで<br>
ネタをマグロからエビに変更するだけで、ワサビとシャリを使いまわすことができる

```html
<div class="p-osushi">
  <div class="c-ebi p-osushi__neta"></div>
  <div class="c-wasabi p-osushi__wasabi"></div>
  <div class="c-shari p-osushi__shari"></div>
</div>
```

- クラス名を1つ変更するだけ
- 修正作業も簡単

### ワサビを多くしたい場合（ワサビ多めのお寿司が食べたい場合）

#### .p-osushiのModifierとして.p-osushi__wasabiを多くする場合

```html
<div class="p-osushi p-osushi--wasabi-large">
  <div class="c-maguro p-osushi__neta"></div>
  <div class="c-wasabi p-osushi__wasabi"></div>
  <div class="c-shari p-osushi__shari"></div>
</div>
```

```scss
.p-osushi {
  &--wasabi-large {
    .p-osushi__wasabi {
      width: 150%;
      height: 150%;
    }
  }
}
```

#### .c-wasabiのModifierとして.c-wasabiを多くする場合

```html
<div class="p-osushi">
  <div class="c-maguro p-osushi__neta"></div>
  <div class="c-wasabi c-wasabi--large p-osushi__wasabi"></div>
  <div class="c-shari p-osushi__shari"></div>
</div>
```

```scss
.c-wasabi{
  &--large {
    width: 150%;
    height: 150%;
  }
}
```

- どちらも見た目は同じ
 - .p-osushiのModifierとして.p-osushi__wasabiを多くしている場合
   - .p-osushiにスタイルが依存しているため多めのワサビを単体として使い回すことはできない
   - ワサビ多めのお寿司を作ることは出来ても、多めのワサビそのものを作ることはできない
 - .c-wasabiのModifierとして.c-wasabiを多くした場合
   - .c-wasabi–largeは.c-wasabiのバリエーション違いなので単体で使い回すことができる
   - お寿司とは別にお皿に多めのワサビを盛りたいワサビ好きの方のことを考えると、.c-wasabi–largeとして定義しておくのがベスト

[🔝トップに戻る](../README.md)