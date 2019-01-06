import Globals from "./common/Globals";
import AssetManager from "./common/AssetManager";
import EventList from "./EventList";
const {ccclass, property} = cc._decorator;

@ccclass
export default class EventTemplate extends cc.Component {
    Id:0;
    @property(cc.Label)
    roleNameDisplay: cc.Label = null;
    @property(cc.Label)
    roleTypeDisplay: cc.Label = null;
    @property(cc.Label)
    eventDisplay: cc.Label = null;
    // @property(Event)
    datas=[]; 
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        var GameData=AssetManager.Instance().getJsonData('GameData');
        this.datas=GameData.json;       
    }
    Agree(){
        this.node.destroy(); 
        var data=this.datas[this.Id-1];
        Globals.GameInfo.Environment+=parseInt(data.Environment);
        Globals.GameInfo.Money+=parseInt(data.Money);
        Globals.GameInfo.Morale+=parseInt(data.Morale);
        Globals.GameInfo.Troops+=parseInt(data.Troops);
        Globals.GameInfo.Health+=parseInt(data.Health);
        this.Round();
    }
    Refuse(data){
        this.node.destroy();
        var data=this.datas[this.Id-1];
        Globals.GameInfo.Environment-=parseInt(data.Environment);
        Globals.GameInfo.Money-=parseInt(data.Money);
        Globals.GameInfo.Morale-=parseInt(data.Morale);
        Globals.GameInfo.Troops-=parseInt(data.Troops);
        Globals.GameInfo.Health-=parseInt(data.Health);
        this.Round();
    }
    //初始化事件
    InitEvent(data){
        this.Id=data.Id;
        this.roleNameDisplay.string=data.roleName;
        this.roleTypeDisplay.string=data.roleType;
        this.eventDisplay.string=data.event;
    }
    Round(){
        Globals.GameInfo.Round+=1;
        Globals.GameInfo.EventNum+=1;
        if (Globals.GameInfo.Round==Globals.GameInfo.MaxEventNum) {
            this.FinishEvent();      
            Globals.GameInfo.Round=0;   
        }        
    }
    //处理完当天事件
    FinishEvent(){
        Globals.GameInfo.Days+=1;
        var AA=cc.find("Canvas/MoreDay");
        AA.active=true;
        Globals.GameInfo.Environment-=5;
        Globals.GameInfo.Money-=5;
        Globals.GameInfo.Morale-=5;
        Globals.GameInfo.Troops-=5;
        Globals.GameInfo.Health-=5;      
    }
    
    // update (dt) {}
}
