## Jmeter Core element :

テスト計画流れ：
テストプラン
スレッドグループ　→　 → 全体的に親ブランチ
簡単なコントローラ
Http Cookieマネージャー
ウェブページ１
ループコントローラ
ウェブページ２
ウェブデフォルト１
ウェブページ３
ウェブデフォルト

構成項目は使用するために、中から呼びます。例えば：上記のクッキーマネージャーを使ってできるのはウェブページ１とウェブページ２だけです（ウェブページ３とHttp Cookieマネージャーは同じ痩にありますので使えない）。
ツリー構造的にはウェブデフォルト１はウェブページ２しか使えないです。他では、ウェブデフォルトを使用します。

実行順番：
1. 構成項目
2. Httpリクエスト
3. プリープロセサル
4. タイマー
5. サンパラル
6. ポストプロセサル
7. アサーション
8. リスナー

スクリプト順番：
1. Httpリクエスト 
   1. JSR223サムパル
   2. プリープロセサル
   3. ポスープロセサル
   4. JSR223 Assertion　または　アサーション


## テスト構築方法

JMeterでは、

1. テスト計画：
　　</br>テスト計画はデフォルト的に・既に作成されています。ブランチ層的に１目です。
</br> これから色々な項目や機能をテスト計画の下に追加する。

2. スレッドグループ
　　</br>スレッドグループは一番大切な。
    スレッドの構成作成する。
    以下のようにスレッドプロパティがある。
    ->スレッドプロパティ
    ・スレッド名
    ・エラー後のアクション
    ・スレッド数（ユーザー）
    ・Ramp-up時間（秒）
    ・ループ回数
    ・スケジューラ

3. HTTP リクエスト
　　スレッドグループの下にHttpリクエスト追加、
　　Httpで公開されたアプリとか性能テスト可能。
　　![alt text](image.png)
　　※今まで設定したら実行できる（簡単な設定）。

4. プロセサル
　　主に２種類のプロセサルがある：
    * 前処理 
    * 後処理
    ※



### コマンド一覧：
#### 基本コマンド：
```java
jmeter -n -t "path/to/test.jmx" -l "path/to/results.jtl"
```
#### ダッシュボードレポート生成含めてコマンド：
```java
jmeter -n -t "test.jmx" -l "results.jtl" -e -o "path/to/report_folder"
```
#### デフォルトプロポティの上書き
```java
jmeter -n -t "test.jmx" -l "results.jtl" -Jthreads=50 -Jduration=300
```

* -n : CLI モード
* -t : テスト計画へのパス
* -l : ローグファイルへのパス
* -e : レポートを生成
* -o : レポートフォルダへのパス
* -x : テスト終了したら停止


※JSR223 sampler と Http　リクエスト同時に設定された場合、結果（スーリー結果と詳細結果）も二つの計算するので気を付けて。
例えば：二つ件（ロギング可、ロギング不可）のスレッドグループに２スレッドした場合、
2回Httpリクエストと2回JSR223sampler → 
JSR223Sampler → script チェックする（未処理）
Httpリクエスト　→　リクエスト確認する　

```log
timeStamp,elapsed,label,responseCode,responseMessage,threadName,dataType,success,failureMessage,bytes,sentBytes,grpThreads,allThreads,URL,Latency,IdleTime,Connect
1773638597623,114,HTTP リクエスト,500,,OllamaThreadGroup 1-2,text,false,,5362,172,2,2,http://localhost:8080/advisor/login?username=Gol.D&password=some123&message=hi,111,0,58
1773638597878,68,JSR223 Sampler,200,OK,OllamaThreadGroup 1-2,text,true,,0,0,2,2,null,0,0,0
1773638597623,9215,HTTP リクエスト,200,,OllamaThreadGroup 1-1,text,true,,289,172,1,1,http://localhost:8080/advisor/login?username=sudh&password=password&message=hi,9214,0,58
1773638606844,2,JSR223 Sampler,200,OK,OllamaThreadGroup 1-1,text,true,,0,0,1,1,null,0,0,0
```


### Master/Slave ・ Controller/Worker:

JMeterエンジンを実行している
脳→指示を送信する。


Worker/Slave:
Worker	はControllerの指示を待っている。
既に実行中（jmeter-server.sh）→コントローラの指示を待っている。
DockerでController/Workerを作成する手順：
Dockerイメージを作成・プル（justb4/jmeter:latest）
コントローラとWorkerを連絡するためにDockerネットワーク作成するコマンド：
docker network create jmeter-net
削除したい場合：docker network rm  jmeter-net
Workerコンテナー作成や実行コマンド
```java
docker run -d --name worker1 --network jmeter-net justb4/jmeter -s -Jserver.rmi.ssl.disable=true
```
```java
複数Worker作成したい場合、
CMD：docker run --rm --network jmeter-net -v %cd%:/test justb4/jmeter -n -t /test/study_test.jmx -l /test/results.jtl -R worker1,worker2 -Jserver.rmi.ssl.disable=true
```
```java
上記にコマンドの説明：
docker run --rm --network jmeter-net -v %cd%:/test justb4/jmeter -n -t /test/study_test.jmx -l /test/results.jtl -R worker1,worker2 -Jserver.rmi.ssl.disable=true -e -o /test/output
```


```java
docker run --rm --network jmeter-net -v %cd%:/test justb4/jmeter	
```
#### justb4/jmeter まではDockerのコマンドです。その後はJMeterのコマンドです。
  docker run --rm --network jmeter-net 
* --rm :: 実行後削除
* --network jmeter-net :: 同じネットワークに接続
* -v %cd%:/test justb4/jmeter :: %cd%==今のパス(実行しているところのファイルパス)は/testをとして設定します。（Docker側と連絡するため、結果やログを確認するために自分の端末のファイルパスに保存する方法）

```bash
 justb4/jmeter -n -t /test/study_test.jmx -l /test/results.jtl -R worker1,worker2 -Jserver.rmi.ssl.disable=true -e -o /test/output
-n:　未画面・未GUI
-t: 　テストプラン
-l: 　テストログ
-R:  Workerを呼ぶ
-e: Htmlレポート作成フラグ
-o: 出力レポートパスフラグ
```
```YAML
※Dockerに関する、他必要なコマンド：
*docker ps -> コンテナー表示
*docker rm コンテナー名： コンテナー削除したい場合
*docker network create jmeter-net: Dockerでネットワーク作成
*docker network rm jmeter-net: ネットワーク削除したい場合
```
※ローカル端末ではFirewall・Window defenderがインストールされた場合、Controller/Workerは構築できません。まあ、ほぼほぼWorker・Controllerに分かれて使ってときはいつもはAWSや他の環境にあり


