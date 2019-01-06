/*
@desc: 资源管理器
*/

const { ccclass, property } = cc._decorator;
@ccclass
export default class AssetManager {
    private static instance: AssetManager;

    spriteList = new Array;
    audioList = new Array;
    spineList = new Array;
    jsonList = new Array;

    public static Instance() {
        if (null == AssetManager.instance) {
            AssetManager.instance = new AssetManager();
        }
        return AssetManager.instance;
    }

    constructor() {

    }    
  
    loadSpriteFrame(name, callback) {
        cc.loader.loadRes(name, cc.SpriteFrame, function (err, mySpriteFrame) {
            if (err) {
                console.log("loadSpriteFrame error", name);
                return;
            }
            this.spriteList[name] = mySpriteFrame;
            if (callback) {
                callback();
            }
        }.bind(this));
    }

    loadAudio(name, callback) {
        cc.loader.loadRes(name, cc.AudioClip, function (err, myAudio) {
            if (err) {
                console.log("loadAudio error", name);
                return;
            }
            this.audioList[name] = myAudio;
            if (callback) {
                callback();
            }
        }.bind(this));
    }

    loadSpine(name, callback) {
        cc.loader.loadRes(name, sp.SkeletonData, function(err, mySpine){
            if (err) {
                console.log("loadSpine error", name);
                return;
            }
            this.spineList[name] = mySpine;
            if(callback) {
                callback();
            }
        }.bind(this));
    }

    /*
    @desc: 加载json文件,在loading或者onLoad的时候要先调用
    @name: json文件名称
    @callback: 回调
    */
   loadJson(name, callback) {
    cc.loader.loadRes(name, function(err, myJson){
        if (err) {
            console.log("loadJson error", name);
            return;
        }
        this.jsonList[name] = myJson;       
        if(callback) {
            callback();
        }    
        return this.jsonList[name];
        
    }.bind(this));
}

    setSpriteFrame(node, name, plistName) {
        let spr = node.getComponent(cc.Sprite);
        if(this.spriteList[name]) {
            spr.spriteFrame = this.spriteList[name];
        } else {
            if(plistName) {
                this.loadSpriteFrameByPlist(plistName, function(){
                    spr.spriteFrame = this.spriteList[name];  
                }.bind(this));
            } else {
                this.loadSpriteFrame(name, function() {
                    spr.spriteFrame = this.spriteList[name];
                }.bind(this));
            }
        }
    }

    loadSpriteFrameByPlist(name, callback) {
        cc.loader.loadRes(name, cc.SpriteAtlas, function(err, mySpriteAtlas){
            if(err) {
                console.log("loadSpriteFrameByPlist error", name);
                return;
            }
            let spriteFrames = mySpriteAtlas.getSpriteFrames();
            for (let i = 0; i < spriteFrames.length; i++) {
                this.spriteList[spriteFrames[i].name] = spriteFrames[i];
            }
            if(callback) {
                callback();
            }
        }.bind(this))
    }


    setRemoteSpriteFrame(node, url) {
        cc.loader.load({url: url, type: 'png'}, function(err, texture) {
            if(err) {
                console.log("setRemoteSpriteFrame error", url);
                return;
            }
            let spriteFrame = new cc.SpriteFrame(texture, new cc.Rect(0, 0, texture.width, texture.height));
            node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        }.bind(this));
    }

    playAudio(name) {
        if(this.audioList[name]) {
            cc.audioEngine.play(this.audioList[name], false, 1);
        } else {
            this.loadAudio(name, function() {
                cc.audioEngine.play(this.audioList[name], false, 1);
            }.bind(this));
        }
    }

    setSpine(node, name) {
        let skeleton = node.getComponent(sp.Skeleton);
        if(this.loadSpine[name]) {
            skeleton.skeletonData = this.loadSpine[name];
        } else {
            this.loadSpine(name, function() {
                skeleton.skeletonData = this.loadSpine[name];
            }.bind(this))
        }
    }
    getJsonData(name) { 
        return this.jsonList[name];        
    }
}