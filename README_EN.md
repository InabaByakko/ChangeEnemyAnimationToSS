# ChangeEnemyAnimationToSS
Replace the enemy's battle animations made by OPTPiX SpriteStudio.

\* This is a preliminary document.

\* I'm sorry in poor English. 
I need transrators for this document.

### Attention
This plugin is depends on other plugin "SsPlayerForRPGMV". Please download from following URL and install above this plugin.

https://github.com/InabaByakko/SSPlayerForRPGMV

And, for the reason of using actor side logic and motion definition, one of following dependency plugins is needed. Please download from following URL and install above this plugin.

* YEP_AnimatedSVEnemies
    *  http://yanfly.moe/2015/12/13/yep-44-animated-sideview-enemies/
* AnimatedSVEnemies (Rexal)
    *  https://forums.rpgmakerweb.com/index.php?threads/animated-enemies.47991/
* VisuMZ_1_BattleCore (only on RPG maker MZ)
    *  https://visustella.itch.io/visumz-sample

If you would like to use following dependency plugins, AnimatedSVEnemies (Rexal) or VisuMZ_1_BattleCore, actor side plugin ChangeActorBattleAnimationToSsPlayer is also needed. Please download from following URL and install above this plugin.

https://github.com/InabaByakko/ChangeActorBattleAnimationToSsPlayer

This software is released under the MIT License, see LICENSE.md.

<!--# Demo
I'll show a demo project of this plug-in by the following URL.

http://www.whiterabbit-hutch.net/CABA2SS_Sample/-->

# Usage

### How to install into your project

1. Click "Download ZIP" button on this page to download a latest ZIP archive.  
1. Unzip archive, and copy "ChangeEnemyAnimationToSS.js" and other dependency plugins to "js/plugins" on your project folder.  
1. On a dialog box "Manage Plug-ins", add other dependency plugins,  and "ChangeEnemyAnimationToSS" to the list.

### Include animations that you made

You must make SpriteStudio animation data by same method of actor side.

https://github.com/InabaByakko/ChangeActorBattleAnimationToSsPlayer/blob/master/README_EN.md#include-animations-that-you-made

1. Locate image and JSON files at the folder that you selected plug-in SsPlayerForRPGMV's parameter.  

    If you set an actor's "[SV]Battler" image file name as `Actor1_1.png`, give 
    JSON files' name by following rules:
    
        * `Actor1_1_walk.json`
        * `Actor1_1_wait.json` 
        * `Actor1_1_chant.json` 
        * `Actor1_1_guard.json` 
        * `Actor1_1_damage.json` 
        * `Actor1_1_evade.json` 
        * `Actor1_1_thrust.json` 
        * `Actor1_1_swing.json` 
        * `Actor1_1_missile.json` 
        * `Actor1_1_skill.json` 
        * `Actor1_1_spell.json` 
        * `Actor1_1_item.json` 
        * `Actor1_1_escape.json` 
        * `Actor1_1_victory.json` 
        * `Actor1_1_dying.json` 
        * `Actor1_1_abnormal.json` 
        * `Actor1_1_sleep.json` 
        * `Actor1_1_dead.json` 
    - That motion names can be changed by this plug-in parameters.  
    
2. On a tab "System" of "Database" dialog box, make sure that a check box "Use Side view battle" must be checked.  

3. Enjoy!

## When you found BUGs

I'm sorry for causing you trouble. If you found some probrem, please report to make a topic at [Issue of Github](https://github.com/InabaByakko/ChangeActorBattleAnimationToSsPlayer/issues), or mention to [Twitter@InabaByakko](https://twitter.com/InabaByakko).

If you're an expert of Github, I'm glad to be sent pull requests to fix issue.

Thank you for your cooperation.

---

* SpriteStudio, Web Technology is a Registered trademark of WebTechnology Corp.
* RPG Maker is a Registered trademark of KADOKAWA Corp.
* Other product names are trademarks of these companies.
