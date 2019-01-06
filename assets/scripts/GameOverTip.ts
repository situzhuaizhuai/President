const {ccclass, property} = cc._decorator;
import Globals from "./common/Globals";
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Prefab)
    GameOverPrefab: cc.Prefab = null;  

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update () {
        if(Globals.GameInfo.Morale<=0||Globals.GameInfo.Environment<=0||Globals.GameInfo.Money<=0||Globals.GameInfo.Troops<=0||Globals.GameInfo.Health<=0){
            this.init();
        }
    }
    init(){
        var over = cc.instantiate(this.GameOverPrefab);
        this.node.addChild(over);
        if (Globals.GameInfo.Morale<=0) {
            Globals.GameInfo.Evaluate=1;
        }
        else if(Globals.GameInfo.Environment<=0){
            Globals.GameInfo.Evaluate=2;
        }
        else if(Globals.GameInfo.Money<=0){
            Globals.GameInfo.Evaluate=3;
        }
        else if(Globals.GameInfo.Troops<=0){
            Globals.GameInfo.Evaluate=4;
        }
        else if(Globals.GameInfo.Troops<=0){
            Globals.GameInfo.Evaluate=5;
        }
        Globals.GameInfo.Days=1;
        Globals.GameInfo.Environment=50;
        Globals.GameInfo.Money=50;
        Globals.GameInfo.Morale=50;
        Globals.GameInfo.Troops=50;
        Globals.GameInfo.Health=50;
    }
}
