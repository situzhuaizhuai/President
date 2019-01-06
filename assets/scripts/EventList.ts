var Event = cc.Class({
    name: 'Event',
    properties: {
        Id:0,
        roleName:'',
        roleType:'',
        event:'',
    }
});
import Globals from "./common/Globals";
import AssetManager from "./common/AssetManager";
const {ccclass, property} = cc._decorator;

@ccclass
export default class EventList extends cc.Component {    
    @property(cc.Prefab)
    EventPrefab: cc.Prefab = null;
    @property(Event)
    events=[]; 
    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    }

    start () {
        AssetManager.Instance().loadJson('GameData',function(){           
            this.init();
        }.bind(this))

    }
    init(){
        var GameData =AssetManager.Instance().getJsonData('GameData'); 
        this.events=GameData.json;
        for (var i = 0; i < Globals.GameInfo.MaxEventNum; ++i) {
            var item = cc.instantiate(this.EventPrefab);
            var j=Math.floor(Math.random()*this.events.length);
            var data = this.events[j];
            this.node.addChild(item);
            item.getComponent('EventTemplate').InitEvent({
                Id: data.Id,
                roleName:data.roleName,
                roleType:data.roleType,
                event:data.eventDes,            
            });
        }
    }
    update () {
        if (Globals.GameInfo.EventNum==Globals.GameInfo.MaxEventNum) {            
          this.start();
          Globals.GameInfo.EventNum=0;
        }
    }

}
