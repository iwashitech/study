# Dockerでsshの学習
下記ページがわかりやすい
- [Dockerコンテナにssh接続する](https://zenn.dev/akhmgc/articles/52c90fe6100eaf)

## コンテナに入る
```sh
docker compose exec server /bin/bash
```

## ホストから接続
```sh
ssh -i /path/to/foo_rsa -p 20022 root@localhost
```

## 参考サイト
- [Dockerコンテナにssh接続する](https://zenn.dev/akhmgc/articles/52c90fe6100eaf)
- [SSHの基本と、公開鍵を登録してサーバーに入るまでの手順](https://zenn.dev/tekihei2317/articles/4f3944842ed95f)
- [【入門】ssh コマンドとは？接続方法やオプションの使い方 | ほげほげテクノロジー](https://hogetech.info/network/client/ssh)
- [SSH接続可能なDockerコンテナの作成方法](https://zenn.dev/hoshi_ophiuchus/articles/5a96de1a0fbf0f)
- [docker ssh 学習 - Google 検索](https://www.google.com/search?q=docker+ssh+%E5%AD%A6%E7%BF%92&sca_esv=570868123&sxsrf=AM9HkKlnHI3KOQJHZQx7QSwyt-4vlkTWsw%3A1696473101468&ei=DSAeZfWOHJrm2roP6K2fCA&oq=docker+ssh&gs_lp=Egxnd3Mtd2l6LXNlcnAiCmRvY2tlciBzc2gqAggASABQAFgAcAB4AJABAJgBAKABAKoBALgBA8gBAOIDBBgAIEE&sclient=gws-wiz-serp)
- [SSHを使い始めたい開発者のための基本ガイド](https://kinsta.com/jp/blog/how-to-use-ssh/)
- [docker apache ssh - Google 検索](https://www.google.com/search?q=docker+apache+ssh&oq=docker+apache+ssh+&gs_lcrp=EgZjaHJvbWUyCAgAEEUYHhg50gEINTYxOGowajSoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1)
- [docker-composeでSSHコンテナを作ってみた - Qiita](https://qiita.com/A-Kira/items/bde07ecc3303f2fddb5b)
- [【Apache】ローカルに立てたDockerコンテナでHTTPS通信する方法｜Webエンジニア研究室](https://www.engilaboo.com/apache-docker-https/)
- [[Docker入門]コンテナにsshでアクセスするための設定メモ - Qiita](https://qiita.com/kuboshu83/items/f827ad7068550cded72d)
- [ssh接続についてdockerを使って試してみた - aruruchang’s blog](https://aruruchang.hatenablog.com/entry/2023/01/04/043526)
- [いるかのボックス: SSH接続できるDockerコンテナを作成する](https://irukanobox.blogspot.com/2020/06/sshdocker.html)

### エラー対応
- [[Q&A] Permission denied (publickey,gssapi-keyex,gssapi-with-mic).を解決したいです - Qiita](https://qiita.com/seikin123/questions/3211c4d4a6918c756d1a)
- [【AWS】centosへのssh接続エラー Permission denied (publickey,gssapi-keyex,gssapi-with-mic)](https://rurukblog.com/post/centos-ssh-permission-denied/)
### WSL
- [WSLではマウントしたドライブ上のファイルにchmod効かないから気をつけろって話 - Qiita](https://qiita.com/penguinz222/items/8b0f28aade7b3a4e050a)
- [sshしようとしてIt is required that your private key files are NOT accessible by others. This private key will be ignored.が出た時の対応 - Qiita](https://qiita.com/shimajiri/items/5716068da4d3a042b97c)
- [SSH接続しようとしたら秘密鍵のパーミッションエラーがでた - Qiita](https://qiita.com/maikya_gu/items/307cc98ec07c7b8bce72)

### 複数の秘密鍵
- [SSH で複数の秘密鍵を使い分けるいくつかの方法 - Ellinikonblue.com Weblog](http://www.ellinikonblue.com/blosxom/UNIX/20150721SSH.html)
- [サーバーに複数の公開鍵で接続するために authorized_keys を複数設定する方法 | ウェブル](http://weble.org/2011/10/27/authorized-keys)
- [SSH公開鍵認証メモ - Qiita](https://qiita.com/kobake@github/items/d866392c07b03da099bf)

### エラーログ
- [Debian - auth.log missing from /var/log - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/108241/debian-auth-log-missing-from-var-log)

### パーミッションを数字で取得
- [How can I get octal file permissions from command line? - Ask Ubuntu](https://askubuntu.com/questions/152001/how-can-i-get-octal-file-permissions-from-command-line)

### おまけ
- [CentOS 6.5, yum でインストールした Git を 1.7.1 から 2.x にバージョンアップする (※Git2.33.1 まで対応、コメント参照) - Qiita](https://qiita.com/sirone/items/2e233ab9697a030f1335)
