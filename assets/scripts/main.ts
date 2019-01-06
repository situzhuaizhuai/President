import Globals from "./common/Globals";
const {ccclass, property} = cc._decorator;

@ccclass
export default class main extends cc.Component {
    @property(cc.Label)
    DaysDisplay: cc.Label = null;
    @property(cc.Label)
    MoraleDisplay: cc.Label = null;
    @property(cc.Label)
    EnvironmentDisplay: cc.Label = null;
    @property(cc.Label)
    TroopsDisplay: cc.Label = null;
    @property(cc.Label)
    MoneyDisplay: cc.Label = null;
    @property(cc.Label)
    TipsDisplay: cc.Label = null;
 
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    }

    start () {
        this.NewInfo();

    }

    update () { 
        this.NewInfo();
    }   
    //更新显示信息
    NewInfo(){
        this.DaysDisplay.string='执政'+Globals.GameInfo.Days+'天';
        this.MoraleDisplay.string='民心：'+Globals.GameInfo.Morale;
        this.EnvironmentDisplay.string='环境：'+Globals.GameInfo.Environment;
        this.TroopsDisplay.string='军事：'+Globals.GameInfo.Troops;
        this.MoneyDisplay.string='财富：'+Globals.GameInfo.Money;       
    }
}
