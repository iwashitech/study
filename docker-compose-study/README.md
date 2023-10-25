# サイト作成

- [Docker Compose - docker-compose.yml リファレンス](https://qiita.com/zembutsu/items/9e9d80e05e36e882caaa)
- [docker-compose.ymlの書式](https://qiita.com/quzq/items/a603a95cd9e676849e0a)
- [docker-compose.ymlの書き方について解説してみた](https://qiita.com/yuta-ushijima/items/d3d98177e1b28f736f04)
- [docker-composeでPHP,apache,Mysqlの環境構築](https://qiita.com/nikoniko/items/516b95c5944a19d8e16b#docker-compose%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89)
- [起動中のDockerコンテナに入る](https://blue21neo.blogspot.com/2018/04/docker.html)
- [docker-compose up したコンテナを起動させ続ける方法tty: true](https://qiita.com/sekitaka_1214/items/2af73d5dc56c6af8a167)
- [Failed to get D-Bus connection: Operation not permitted ](http://skill-up-engineering.com/2019/07/28/docker-composecentos7%E7%B3%BB%E3%82%84mysql%E3%81%AE%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AA%E3%81%A9/#docker-compose)
- [ポート (コンピュータネットワーク) - Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%9D%E3%83%BC%E3%83%88_(%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF))


## 起動方法

```bash
docker-compose build
docker-compose up -d
vi /etc/httpd/conf/httpd.conf
DocumentRoot "/var/www/html/www" 
systemctl restart httpd.service
```
