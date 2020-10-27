# ChangeEnemyAnimationToSS
サイドビュー戦闘時の敵キャラ側アニメーションをSpriteStudioアニメーションに差し替えるプラグインです。  

\*\* [English document is HERE.](README_EN.md) \*\*

### 注意
本プラグインの動作には、依存プラグイン「SsPlayerForRPGMV」が必要です。下のURLからダウンロードの上、本プラグインより上の位置にインストールしてください。  
https://github.com/InabaByakko/SSPlayerForRPGMV

また、アクター側のスプライトとモーション定義を利用する関係上、以下の依存プラグインが追加で必要となります。
ダウンロードの上、本プラグインより上の位置にインストールしてください。

* YEP_AnimatedSVEnemies
    *  http://yanfly.moe/2015/12/13/yep-44-animated-sideview-enemies/
* AnimatedSVEnemies (Rexal)
    *  https://forums.rpgmakerweb.com/index.php?threads/animated-enemies.47991/
* VisuMZ_1_BattleCore (RPGツクールMZのみ対応)
    *  https://visustella.itch.io/visumz-sample

これらのうち、AnimatedSVEnemies (Rexal) および VisuMZ_1_BattleCore を利用する場合は、アクター側プラグイン ChangeActorBattleAnimationToSsPlayer も必要となります。
下のURLからダウンロードの上、本プラグインより上の位置にインストールしてください。  
https://github.com/InabaByakko/ChangeActorBattleAnimationToSsPlayer

このソフトウェアは、MITライセンスのもとで公開されています。詳しくは LICENSE.md をお読み下さい。  

<!--# デモ
こちらのURLで、このプラグインを使用したデモプロジェクトを公開しています。  

http://InabaByakko.github.io/ChangeActorBattleAnimationToSsPlayer/SampleProject/index.html-->

# 使い方

## プロジェクトへの組込み

1. 右部の「Download ZIP」をクリックし、最新版のZIPアーカイブをダウンロードします。   
  
1. ダウンロードしたZIPファイルを解凍して出てきた ChangeEnemyAnimationToSS.js および各種依存プラグインを、組み込みたいゲームプロジェクトのjs/pluginsフォルダへ入れます。  

1. ツクールエディタの「プラグイン管理」より、導入する依存プラグイン、そして「ChangeEnemyAnimationToSS」を追加します。   

## SpriteStudio Starter/Professional (バージョン6) で自作アニメーションを作成する場合

このプラグインは、SpriteStudio **バージョン5** のプロジェクトデータにのみ対応しており、SpriteStudio Starter (バージョン6) で作成されたデータのうち、新機能であるメッシュ・ボーン・デフォームの機能を使用したアニメーションは再生できません。

また、JSONファイル変換ツール Ss5ConverterToSSAJSON を使用する前に、プロジェクトをバージョン「5.8」形式でエクスポートしてから、変換を実行して下さい。

![image](https://user-images.githubusercontent.com/3094590/94986114-ec24cc80-0596-11eb-8373-ccf73cf041b3.png)
![image](https://user-images.githubusercontent.com/3094590/94986118-f050ea00-0596-11eb-979b-b3c9e76fc376.png)


## アニメーションを組み込む方法

使用するSpriteStudioアニメーションデータは、アクター側プラグイン ChangeActorBattleAnimationToSsPlayer と同じ構成で作成してください。

https://github.com/InabaByakko/ChangeActorBattleAnimationToSsPlayer#%E8%87%AA%E4%BD%9C%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E7%B5%84%E3%81%BF%E8%BE%BC%E3%82%80%E6%96%B9%E6%B3%95

1. アニメーションデータを作成します。  
このとき、プロジェクトファイル(sspj)と同じ名前のssaeファイルの中に、以下の名前を持つモーションを作成してください。（このモーション名は、プラグインパラメータで変更できます）
    * walk (前進モーション用データ)
    * wait (通常待機モーション用データ)
    * chant (詠唱待機モーション用データ)
    * guard (防御モーション用データ)
    * damage (ダメージモーション用データ)
    * evade (回避モーション用データ)
    * thrust (突き攻撃モーション用データ)
    * swing (振り攻撃モーション用データ)
    * missile (飛び道具攻撃モーション用データ)
    * skill (汎用スキル発動モーション用データ)
    * spell (魔法発動モーション用データ)
    * item (アイテム使用モーション用データ)
    * escape (逃走モーション用データ)
    * victory (勝利モーション用データ)
    * dying (瀕死モーション用データ)
    * abnormal (状態異常モーション用データ)
    * sleep (睡眠モーション用データ)
    * dead (戦闘不能モーション用データ)

1. Ss5ConverterToSSAJSON ツールを使用して、プロジェクトデータの変換を行います。  
「1モーションを1ファイルに出力する」オプションを使用しないことをおすすめします。使用するモーションを1ファイルにまとめられ、さらにバトルイベントにて戦闘用以外のモーションも再生できるようになるため、便利です。
    ![image](https://user-images.githubusercontent.com/3094590/94986257-35c1e700-0598-11eb-8cf5-82aee436630d.png)


1. 「SsPlayerForRPGMV」のプラグインパラメータで指定したアニメーションフォルダ
(既定では"img/animations/ssas")に、上の手順で変換したJSONファイルと、SpriteStudioプロジェクトのセルマップに使用している画像ファイルを配置します。  
    * 1モーションを1ファイルで出力**しない**場合
        * ![image](https://user-images.githubusercontent.com/3094590/94986298-8afdf880-0598-11eb-80ad-ac9ac4167e65.png)
    * 1モーションを1ファイルで出力**した**場合
        * ![image](https://user-images.githubusercontent.com/3094590/94986284-6e61c080-0598-11eb-9fe9-e3131bc35a13.png)


1. サイドビュー用アクターグラフィックフォルダ「sv_actors」に、上の手順で配置したJSONファイル名の .json を .png に変えたダミー画像を作成します。

1. 「データベース」の「アクター」で、"[SV]戦闘キャラ" を、上の手順で配置したダミー画像に設定します。

2. 「データベース」の「システム」タブで「サイドビュー戦闘を使用」にチェックを入れます。   

3. お楽しみください。  
    
## バグを見つけた場合
 
ご迷惑をお掛けしております。もし問題のある動作を発見された場合は、[GithubのIssue](https://github.com/InabaByakko/ChangeActorBattleAnimationToSsPlayer/issues)でトピックを立ててご報告いただくか、[Twitter@InabaByakko](https://twitter.com/InabaByakko)までご連絡をお願い致します。

Githubのご利用に慣れていらっしゃる方は、直接のPull Requestも歓迎しております。

---

- SpriteStudio, Web Technologyは、株式会社ウェブテクノロジの登録商標です。
- RPGツクールは、株式会社KADOKAWAの登録商標です。
- その他の商品名は各社の登録商標または商標です。
