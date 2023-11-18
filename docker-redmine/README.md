# dockerでRedmineを使う

## SetUp
``bash
./mkdir.sh
``

## Usage
```powershell
# 開始
docker-compose up -d

# 終了
docker-compose down
```

## テーマのインストール
```bash
cd data/themes
git clone https://github.com/tsi/redmine-theme-flat.git
# Redmineの管理画面でテーマを変更
```

## チケットの追加

- 管理画面に移動
- デフォルト設定のロード
- トラッカー設定

## 参考サイト
- [DockerでRedmineを簡単&スピード構築！ | グローディア株式会社](https://glodia.jp/blog/11799/)
- [テーマを切り替える手順 — Redmine用語解説](https://redmine.jp/glossary/t/theme/change-themes/)
- [テーマ「redmine-theme-flat」をインストール - へっぽこプログラマーの備忘録](https://kuttsun.blogspot.com/2016/08/redmine-theme-flat.html)
- [GitHub - tsi/redmine-theme-flat: Flat theme for Redmine](https://github.com/tsi/redmine-theme-flat)
- [WindowsのdockerでBitnami Redmine のコンテナを作成する【簡単】 | SyachikuLOG](https://syachiku.net/windows%E3%81%AEdocker%E3%81%A7bitnami-redmine-%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B%E3%80%90%E7%B0%A1%E5%8D%98%E3%80%91/#toc9)