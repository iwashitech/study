# R, RStudioの設定 in Docker

### Sign in to RStudio

[http://localhost:8787](http://localhost:8787)

```bash
docker exec -it yuki /bin/bash
rstudio-server verify-installation
```

#### R, RStudio

- [DockerでCentOS6にRとRStudio Serverが入ったDockerfileを作ってみる](http://rf00.hatenablog.com/entry/2018/12/31/200709)
- [Install R packages using docker file](https://stackoverflow.com/questions/45289764/install-r-packages-using-docker-file#answer-54305993)
- [Tutorial: install and run RStudio Server with Docker](https://medium.com/@guidoman/tutorial-install-and-run-rstudio-server-with-docker-5e67607811a0)
- [Installers for Supported Platforms（RStudio公式サイト）](https://www.rstudio.com/products/rstudio/download/#download)

#### Dockerの設定

- [Dockerコンテナの設定をやり直す](https://qiita.com/horikeso/items/da5054e67dfb73c0cf54)
- [Dockerコンテナのポートを後から解放する方法](https://www.scriptlife.jp/contents/programming/2016/09/07/docker-port-forward/)
- [Dockerfileの書き方, 利用する命令, 作成手順](https://www.wakuwakubank.com/posts/270-docker-build-image/)
- [Dockerfileで使う命令と書き方まとめ](https://designsupply-web.com/knowledgeside/3327/)
- [Dockerfileを書いてみる](https://qiita.com/nl0_blu/items/1de829288db2670276e8)
- [Dockerfileとdocker-compose.ymlが何を書いてるか読み解こう](http://tech.innovation.co.jp/2018/01/26/read-docker-files.html)
- [Dockerfile のベストプラクティス](http://docs.docker.jp/engine/articles/dockerfile_best-practice.html)
- [RStudio Server Will Not Start](https://support.rstudio.com/hc/en-us/articles/200717193-RStudio-Server-Will-Not-Start)
- [Docker Composeでビルド時に任意のイメージ名を指定する方法](https://amaya382.hatenablog.jp/entry/2017/04/03/034002)
- [Dockerのrestartingが止まらないときに確認すべきこと](https://kana-linux.info/docker/docker%E3%81%AErestarting%E3%81%8C%E6%AD%A2%E3%81%BE%E3%82%89%E3%81%AA%E3%81%84%E3%81%A8%E3%81%8D%E3%81%AB%E7%A2%BA%E8%AA%8D%E3%81%99%E3%81%B9%E3%81%8D%E3%81%93%E3%81%A8)

#### Linux

- [No such file or directory /etc/init.d/functions](https://unix.stackexchange.com/questions/9314/no-such-file-or-directory-etc-init-d-functions#answer-347089)
