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

・-n : CLI モード
・-t : テスト計画へのパス
・-l : ローグファイルへのパス
・-e : レポートを生成
・-o : レポートフォルダへのパス
・-x : テスト終了したら停止


※JSR223 sampler と Http　リクエスト同時に設定された場合、結果（スーリー結果と詳細結果）も二つの計算するので気を付けて。
例えば：二つ件（ロギング可、ロギング不可）のスレッドグループに２スレッドした場合、
2回Httpリクエストと2回JSR223sampler → 
JSR223Sampler → script チェックする（未処理）
Httpリクエスト　→　リクエスト確認する　

timeStamp,elapsed,label,responseCode,responseMessage,threadName,dataType,success,failureMessage,bytes,sentBytes,grpThreads,allThreads,URL,Latency,IdleTime,Connect
1773638597623,114,HTTP リクエスト,500,,OllamaThreadGroup 1-2,text,false,,5362,172,2,2,http://localhost:8080/advisor/login?username=Gol.D&password=some123&message=hi,111,0,58
1773638597878,68,JSR223 Sampler,200,OK,OllamaThreadGroup 1-2,text,true,,0,0,2,2,null,0,0,0
1773638597623,9215,HTTP リクエスト,200,,OllamaThreadGroup 1-1,text,true,,289,172,1,1,http://localhost:8080/advisor/login?username=sudh&password=password&message=hi,9214,0,58
1773638606844,2,JSR223 Sampler,200,OK,OllamaThreadGroup 1-1,text,true,,0,0,1,1,null,0,0,0

