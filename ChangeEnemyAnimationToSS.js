//=============================================================================
// ChangeEnemyAnimationToSS.js
//=============================================================================

/*:
* @plugindesc Replace the enemy's battle animations made by OPTPiX SpriteStudio.
* @author Inaba Byakko
* 
* @param Suffix(walk)
* @desc An suffix of side view battler's image file name which means idling motion. Default value is "walk"
* @default walk
*
* @param Suffix(wait)
* @desc An suffix of side view battler's image file name which means physical ready motion. Default value is "wait"
* @default wait
* 
* @param Suffix(chant)
* @desc An suffix of side view battler's image file name which means magical ready motion. Default value is "chant"
* @default chant
*
* @param Suffix(guard)
* @desc An suffix of side view battler's image file name which means guarding motion. Default value is "guard"
* @default guard
*
* @param Suffix(damage)
* @desc An suffix of side view battler's image file name which means damaged motion. Default value is "damage"
* @default damage
*
* @param Suffix(evade)
* @desc An suffix of side view battler's image file name which means evading motion. Default value is "evade"
* @default evade
*
* @param Suffix(thrust)
* @desc An suffix of side view battler's image file name which means stabbing motion. Default value is "thrust"
* @default thrust
*
* @param Suffix(swing)
* @desc An suffix of side view battler's image file name which means swinging motion. Default value is "swing"
* @default swing
*
* @param Suffix(missile)
* @desc An suffix of side view battler's image file name which means shooting motion. Default value is "missile"
* @default missile
*
* @param Suffix(skill)
* @desc An suffix of side view battler's image file name which means physical skill using motion. Default value is "skill"
* @default skill
*
* @param Suffix(spell)
* @desc An suffix of side view battler's image file name which means magical skill using motion. Default value is "spell"
* @default spell
*
* @param Suffix(item)
* @desc An suffix of side view battler's image file name which means item using motion. Default value is "item"
* @default item
*
* @param Suffix(escape)
* @desc An suffix of side view battler's image file name which means escaping motion. Default value is "escape"
* @default escape
*
* @param Suffix(victory)
* @desc An suffix of side view battler's image file name which means victory motion. Default value is "victory"
* @default victory
*
* @param Suffix(dying)
* @desc An suffix of side view battler's image file name which means idling motion with crisis. Default value is "dying"
* @default dying
*
* @param Suffix(abnormal)
* @desc An suffix of side view battler's image file name which means idling motion with abnormal state. Default value is "abnormal"
* @default abnormal
* 
* @param Suffix(sleep)
* @desc An suffix of side view battler's image file name which means sleeping motion. Default value is "sleep"
* @default sleep
*
* @param Suffix(dead)
* @desc An suffix of side view battler's image file name which means dead motion. Default value is "dead"
* @default dead
*
* @param HideWeaponGraphics
* @desc Select whether you hide battler's weapon animation graphics(ON or OFF). Default value is "OFF"
* @default OFF
* 
* @param Loop(dead)
* @desc Select whether you play dead motion repeatedly(ON or OFF). Default value is "ON"
* @default ON
*
* @param Loop(victory)
* @desc Select whether you play victory motion repeatedly(ON or OFF). Default value is "ON"
* @default ON
*
* @help
* ** INFORMATION **
* This plug-in is depends on other plugins "SsPlayerForRPGMV" and
* one of following external dependency plugins.
* Please download from following URL and install above this plugin.
* https://github.com/InabaByakko/SSPlayerForRPGMV
*
* YEP_AnimatedSVEnemies
*  http://yanfly.moe/2015/12/13/yep-44-animated-sideview-enemies/
* AnimatedSVEnemies (Rexal)
*  https://forums.rpgmakerweb.com/index.php?threads/animated-enemies.47991/
* VisuMZ_1_BattleCore (only on RPG maker MZ)
*  https://visustella.itch.io/visumz-sample
* 
* Plug-in commands:
*   (none)
*/

/*:ja
* @plugindesc サイドビュー戦闘時の敵キャラアニメーションをSpriteStudioアニメーションに差し替えるプラグインです。
* @author Inaba Byakko
* 
* @param Suffix(walk)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、前進時のモーション名。デフォルトは"walk"
* @default walk
*
* @param Suffix(wait)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、通常待機時のモーション名。デフォルトは"wait"
* @default wait
* 
* @param Suffix(chant)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、詠唱待機時のモーション名。デフォルトは"chant"
* @default chant
*
* @param Suffix(guard)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、防御時のモーション名。デフォルトは"guard"
* @default guard
*
* @param Suffix(damage)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、ダメージ時のモーション名。デフォルトは"damage"
* @default damage
*
* @param Suffix(evade)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、回避時のモーション名。デフォルトは"evade"
* @default evade
*
* @param Suffix(thrust)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、突き攻撃時のモーション名。デフォルトは"thrust"
* @default thrust
*
* @param Suffix(swing)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、振り攻撃時のモーション名。デフォルトは"swing"
* @default swing
*
* @param Suffix(missile)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、飛び道具攻撃時のモーション名。デフォルトは"missile"
* @default missile
*
* @param Suffix(skill)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、汎用スキル発動時のモーション名。デフォルトは"skill"
* @default skill
*
* @param Suffix(spell)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、魔法発動時のモーション名。デフォルトは"spell"
* @default spell
*
* @param Suffix(item)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、アイテム使用時のモーション名。デフォルトは"item"
* @default item
*
* @param Suffix(escape)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、逃げる時のモーション名。デフォルトは"escape"
* @default escape
*
* @param Suffix(victory)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、勝利時のモーション名。デフォルトは"victory"
* @default victory
*
* @param Suffix(dying)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、瀕死時のモーション名。デフォルトは"dying"
* @default dying
*
* @param Suffix(abnormal)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、状態異常時のモーション名。デフォルトは"abnormal"
* @default abnormal
* 
* @param Suffix(sleep)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、睡眠時のモーション名。デフォルトは"sleep"
* @default sleep
*
* @param Suffix(dead)
* @desc SV戦闘キャラ画像ファイル名の後ろに付く、戦闘不能時のモーション名。デフォルトは"dead"
* @default dead
* 
* @param HideWeaponGraphics
* @desc 攻撃中の武器アニメーションを非表示にするか（ON/OFF) 。デフォルトはOFF
* @default OFF
*
* @param Loop(dead)
* @desc 戦闘不能モーションを繰り返し再生するか（ON/OFF) 。デフォルトはON
* @default ON
* 
* @param Loop(victory)
* @desc 勝利モーションを繰り返し再生するか（ON/OFF) 。デフォルトはON
* @default ON
* 
* @help
* ※注意
* 本プラグインの動作には、依存プラグイン「SsPlayerForRPGMV」
* および下記の追加プラグインが必要です。下のURLから
* ダウンロードの上、本プラグインより上の位置にインストール
* してください。
* https://github.com/InabaByakko/SSPlayerForRPGMV
*
* YEP_AnimatedSVEnemies
*  http://yanfly.moe/2015/12/13/yep-44-animated-sideview-enemies/
* AnimatedSVEnemies (Rexal)
*  https://forums.rpgmakerweb.com/index.php?threads/animated-enemies.47991/
* VisuMZ_1_BattleCore (RPGツクールMZのみ対応)
*  https://visustella.itch.io/visumz-sample
*
* プラグインコマンド:
*   （なし）
*/

(function () {

    // 依存プラグイン導入チェック
    var _dependentPlugins = [
        "YEP_X_AnimatedSVEnemies",
        "AnimatedSVEnemies",
        "VisuMZ_1_BattleCore"
    ];
    if (typeof SsSprite !== "function") {
        throw new Error(
            "Dependency plugin 'SsPlayerForRPGMV' is not installed.");
    }
    if (!_dependentPlugins.some(function (p) { return !!Imported[p]; })) {
        throw new Error(
            "Dependency plugin 'YEP_X_AnimatedSVEnemies' or 'AnimatedSVEnemies' is not installed."
        );
    }
    if (Imported["VisuMZ_1_BattleCore"] && typeof Sprite_Actor.prototype.loadSsMotionSet != "function") {
        throw new Error(
            "Dependency plugin 'VisuMZ_1_BattleCore' must be installed with 'ChangeActorBattleAnimationToSsPlayer'."
        );
    }
    if (Imported["AnimatedSVEnemies"] && typeof Sprite_Actor.prototype.loadSsMotionSet != "function") {
        throw new Error(
            "Dependency plugin 'AnimatedSVEnemies' must be installed with 'ChangeActorBattleAnimationToSsPlayer'."
        );
    }

    var CEBTS = {};

    // 接尾語収集
    var parameters = PluginManager
        .parameters('ChangeEnemyAnimationToSS');
    var motion_suffixes = {
        0: parameters["Suffix(walk)"],
        1: parameters["Suffix(wait)"],
        2: parameters["Suffix(chant)"],
        3: parameters["Suffix(guard)"],
        4: parameters["Suffix(damage)"],
        5: parameters["Suffix(evade)"],
        6: parameters["Suffix(thrust)"],
        7: parameters["Suffix(swing)"],
        8: parameters["Suffix(missile)"],
        9: parameters["Suffix(skill)"],
        10: parameters["Suffix(spell)"],
        11: parameters["Suffix(item)"],
        12: parameters["Suffix(escape)"],
        13: parameters["Suffix(victory)"],
        14: parameters["Suffix(dying)"],
        15: parameters["Suffix(abnormal)"],
        16: parameters["Suffix(sleep)"],
        17: parameters["Suffix(dead)"]
    };

    if (parameters["Loop(dead)"].toUpperCase() == "OFF")
        Sprite_Enemy.MOTIONS["dead"]["loop"] = false;
    if (parameters["Loop(victory)"].toUpperCase() == "OFF")
        Sprite_Enemy.MOTIONS["victory"]["loop"] = false;

    var animationDir = SSP4MV.animationDir;

    CEBTS.battlerNameMethod = '';

    CEBTS.createMainSprite = function () {
        if (this._ssSprite === undefined) {
            this._ssSprite = new SsSprite(null);
            this._mainSprite.addChild(this._ssSprite);
        }
    };

    CEBTS.loadEnemySsMotions = function (battlerName, motions) {
        for (var motion in motions) {
            if (motions.hasOwnProperty(motion)) {
                var value = motions[motion];
                this._ssMotions[motion] = null;
                this.loadSsMotion(battlerName, motion, value);
            }
        }
    };

    CEBTS.loadSsMotion = function (battlerName, motionKey, motionSuffix) {
        var xhr = new XMLHttpRequest();
        var url = animationDir + battlerName + "_" + motionSuffix + ".json";
        xhr.open('GET', url);
        xhr.overrideMimeType('application/json');
        xhr.onload = function (key) {
            if (xhr.status < 400) {
                var jsonData = JSON.parse(xhr.responseText)[0];
                this.setEnemySsMotion(jsonData, key);
                // ロード完了コールバックがあれば実行
                if (typeof this.onSsMotionLoad === "function") {
                    this.onSsMotionLoad();
                }
            }
        }.bind(this, motionKey);
        xhr.send();
    };

    CEBTS.loadSsMotionSet = function (battlerName) {
        var xhr = new XMLHttpRequest();
        var url = animationDir + battlerName + ".json";
        xhr.open('GET', url);
        xhr.overrideMimeType('application/json');
        xhr.onload = function () {
            if (xhr.status < 400) {
                var jsonData = JSON.parse(xhr.responseText);
                this.setEnemySsMotionSet(jsonData, motion_suffixes);
            } else {
                this.loadEnemySsMotions(battlerName, motion_suffixes);
            }
        }.bind(this);
        xhr.onerror = function () {
            this.loadEnemySsMotions(battlerName, motion_suffixes);
        }.bind(this);
        xhr.send();
    };

    CEBTS.setEnemySsMotionSet = function (jsonData, motions) {
        for (var key in motions) {
            if (motions.hasOwnProperty(key)) {
                var motion = motions[key];
                this._ssMotions[key] = null;
                jsonData.some(function (data) {
                    if ((new RegExp("_" + motion + "$", "i")).test(data.name)) {
                        this.setEnemySsMotion(data, key);
                        return true;
                    }
                    return false;
                }, this);
            }
        }
    };

    CEBTS.setEnemySsMotion = function (jsonData, motionKey) {
        var imageList = new SsImageList(jsonData.images, animationDir,
            true);
        var animation = new SsAnimation(jsonData.animation, imageList);
        this._ssMotions[motionKey] = animation;
    };

    // 元スプライトのビットマップを無効化し、SsSpriteのモーション更新を行う
    CEBTS.updateSVBitmap = function (_super) {
        var name = this._enemy[CEBTS.battlerNameMethod]();
        if (!this._svBattlerEnabled) {
            //if (!this._svBattlerEnabled) {
            _super.call(this);
            return;
        }
        if (this._svBattlerName !== name) {
            if (this._svBattlerName === '') {
                _super.call(this);
            }
            this._mainSprite.bitmap = new Bitmap(this._battler.sideviewWidth() * 9, this._battler.sideviewHeight() * 6);
            this._mainSprite._needsTint = function () { return false; };
            this._svBattlerName = name;
        }
        // ssSpriteにblendColor等の情報を継承
        if (this._ssSprite) {
            this._ssSprite.setColorTone(this._mainSprite.getColorTone());
            this._ssSprite.setBlendColor(this._mainSprite.getBlendColor());
            this._ssSprite.blendMode = this._mainSprite.blendMode;
        }
        this.updateSsMotion();
    };



    if (Imported.YEP_X_AnimatedSVEnemies) {
        CEBTS.battlerNameMethod = 'svBattlerName';

        var _Sprite_Enemy_createMainSprite = Sprite_Enemy.prototype.createMainSprite;
        Sprite_Enemy.prototype.createMainSprite = function () {
            _Sprite_Enemy_createMainSprite.call(this);
            CEBTS.createMainSprite.call(this);
        };

        var _Sprite_Enemy_setSVBattler = Sprite_Enemy.prototype.setSVBattler;
        Sprite_Enemy.prototype.setSVBattler = function (battler) {
            _Sprite_Enemy_setSVBattler.call(this, battler);
            this._mainSprite.hue = battler.battlerHue();

            if (!this._enemy) return;
            if (this._enemy.svBattlerName() === undefined) return;
            this._ssMotions = {};
            this._ssSprite.hue = battler.battlerHue();
            this.loadSsMotionSet(this._enemy.svBattlerName());

        };

        Sprite_Enemy.prototype.loadEnemySsMotions = CEBTS.loadEnemySsMotions;
        Sprite_Enemy.prototype.loadSsMotion = CEBTS.loadSsMotion;
        Sprite_Enemy.prototype.loadSsMotionSet = CEBTS.loadSsMotionSet;
        Sprite_Enemy.prototype.setEnemySsMotionSet = CEBTS.setEnemySsMotionSet;
        Sprite_Enemy.prototype.setEnemySsMotion = CEBTS.setEnemySsMotion;


        var _Sprite_Enemy_updateSVBitmap = Sprite_Enemy.prototype.updateSVBitmap;
        Sprite_Enemy.prototype.updateSVBitmap = function () {
            CEBTS.updateSVBitmap.call(this, _Sprite_Enemy_updateSVBitmap, this._enemy);
        };

        // オプションがONのとき、武器アニメーションを非表示に
        var _spriteEnemySetupWeaponAnimation = Sprite_Enemy.prototype.setupWeaponAnimation;
        Sprite_Enemy.prototype.setupWeaponAnimation = function () {
            if (parameters["HideWeaponGraphics"].toUpperCase() !== "ON") {
                _spriteEnemySetupWeaponAnimation.call(this);
            }
        };

        Sprite_Enemy.prototype.updateSsMotion = function () {
            if (typeof this._motion === "object" && this._motion !== null) {
                var motionName = this._motion["index"];
                if (this._ssMotions[motionName] === undefined) return;
                var newMotion = this._ssMotions[motionName];
                if (this._ssSprite.getAnimation() !== newMotion) {
                    if (typeof this._ssMotions === "undefined")
                        return;
                    this._ssSprite.setAnimation(newMotion);
                    this._ssSprite.setLoop(Number(!this._motion["loop"]));
                    if (this._motion["loop"] === false) {
                        this._ssSprite.setEndCallBack(function () {
                            this.refreshMotion();
                        }.bind(this));
                    } else {
                        this._ssSprite.setEndCallBack(function () {
                        });
                    }
                    if (newMotion !== null)
                        this.onSsMotionLoad = null;
                }
            }
        };

        Sprite_Enemy.prototype.updateMotionCount = function () {
            if (!this._svBattlerEnabled) return;
            if (this._motion && this._ssSprite.isPlaying()) {
                this._motionCount = this._ssSprite.getFrameNo();
            } else {
                this.refreshMotion();
            }
        };

    } else if (Imported.AnimatedSVEnemies) {
        CEBTS.battlerNameMethod = 'battlerName';

        var _Sprite_SvEnemy_setBattler = Sprite_EnemyRex.prototype.setBattler;
        Sprite_EnemyRex.prototype.setBattler = function (battler) {
            _Sprite_SvEnemy_setBattler.apply(this, arguments);
            if (this._enemy && this._enemy.battlerName() != "") {
                this._ssMotions = {};
                this._ssSprite.hue = battler.battlerHue();
                this.loadSsMotionSet(this._actor.battlerName());
            }
        };

        var _Sprite_SvEnemy_updateBitmap = Sprite_EnemyRex.prototype.updateBitmap;
        Sprite_EnemyRex.prototype.updateBitmap = function () {
            Sprite_Actor.prototype.updateBitmap.call(this);
            if (this._mainSprite._isReplaced) {
                this.updateEffect();
            } else {
                _Sprite_SvEnemy_updateBitmap.call(this);
            }
        };

    } else if (Imported.VisuMZ_1_BattleCore) {
        CEBTS.battlerNameMethod = 'svBattlerName';

        var _Sprite_SvEnemy_setBattler = Sprite_SvEnemy.prototype.setBattler;
        Sprite_SvEnemy.prototype.setBattler = function (battler) {
            _Sprite_SvEnemy_setBattler.apply(this, arguments);
            this._enemy = this._actor;
            if (this._actor && this._actor.svBattlerName() != "") {
                this._ssMotions = {};
                this._ssSprite.hue = battler.battlerHue();
                this.loadSsMotionSet(this._actor.svBattlerName());
            }
        };

        var _Sprite_SvEnemy_updateBitmap = Sprite_SvEnemy.prototype.updateBitmap;
        Sprite_SvEnemy.prototype.updateBitmap = function () {
            this._svBattlerEnabled = !!this._actor.svBattlerName();
            this._svBattlerName = this._actor.svBattlerName();
            CEBTS.updateSVBitmap.call(this, _Sprite_SvEnemy_updateBitmap);
        };

        var _Sprite_SvEnemy_updateMotionCount = Sprite_SvEnemy.prototype.updateMotionCount;
        Sprite_SvEnemy.prototype.updateMotionCount = function () {
            this._mainSprite._isReplaced = !!this._actor.svBattlerName();
            _Sprite_SvEnemy_updateMotionCount.call(this);
        };
    }

})();
