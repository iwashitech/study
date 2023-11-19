# XAMPP環境でのXdebugのインストール

## 『私の環境』ではインストールできた設定
- PHP 7.3 VC15 TS (32 bit)がインストールできました。

### php.ini
```ini
[xdebug]
zend_extension = "C:\xampp\php\ext\php_xdebug-3.1.6-7.3-vc15.dll"
; 下記でもOK！
; zend_extension = C:\xampp\php\ext\php_xdebug-3.1.6-7.3-vc15.dll
xdebug.mode = debug
xdebug.start_with_request = yes
```

### launch.json
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Listen for Xdebug",
      "type": "php",
      "request": "launch",
      "port": 9003
    },
  ]
}
```

## phpinfo()の出力結果（一部抜粋）
|設定|内容|
| ---- | ---- |
|Thread Safety|enabled|
|PHP Version|7.3.8|

## 理由はわからないですが・・・
- OSは64bitですが、dllは32bitでないとインストールできませんでした。

## 参考サイト
- [【PHP】Xdebug & VS Codeによるステップ実行 | Points & Lines](https://pointsandlines.jp/server-side/php/vs-code-xdebug-step-debugging)
- [XAMPP に Xdebug を設定する | knooto](https://knooto.info/php-xampp-xdebug/#4-phpini-%E3%82%92%E7%B7%A8%E9%9B%86%E3%81%99%E3%82%8B)
- [Xdebug徹底解説！環境ごとの設定方法から仕組みまでどこよりも詳しく解説します | メンバーズエッジカンパニーブログ](https://www.membersedge.co.jp/blog/php-xdebug/#Xdebug%E3%82%92%E7%94%A8%E3%81%84%E3%81%9F%E3%82%B9%E3%83%86%E3%83%83%E3%83%97%E5%AE%9F%E8%A1%8C%E3%81%AE%E4%BB%95%E7%B5%84%E3%81%BF%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)

## 公式サイト
### 過去のリリース
- [Xdebug: Historical Releases](https://xdebug.org/download/historical)
### すべての設定
- [Xdebug: Documentation » All settings](https://xdebug.org/docs/all_settings)
### string xdebug.mode
- [Xdebug: Documentation » All settings](https://xdebug.org/docs/all_settings#mode)

## 一部設定の和訳（機械翻訳）
- [こちらをご覧ください](./xdebug-setting.md)
