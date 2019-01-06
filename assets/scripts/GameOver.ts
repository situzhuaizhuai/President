import Globals from "./common/Globals";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Gameover extends cc.Component {
    @property(cc.Label)
    overTipsDisplay: cc.Label = null;
    @property(cc.Label)
    EvaluateDisplay: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.OverIips();
    }

    // update (dt) {}
    ResGame(){
        this.node.destroy();  
    }
    OverIips(){
        if(Globals.GameInfo.Evaluate==1){
            this.EvaluateDisplay.string='万民唾弃';
            this.overTipsDisplay.string='水可载舟亦可覆舟！';
        }
        else if (Globals.GameInfo.Evaluate==2){
            this.EvaluateDisplay.string='邋遢大王';
            this.overTipsDisplay.string='绿水青山才是金山银山！';
        }
        else if (Globals.GameInfo.Evaluate==3){
            this.EvaluateDisplay.string='穷鬼转世';
            this.overTipsDisplay.string='有钱能使鬼推磨！';
        }
        else if (Globals.GameInfo.Evaluate==4){
            this.EvaluateDisplay.string='文弱书生';
            this.overTipsDisplay.string='枪杆子里出政权！';
        }
        else if (Globals.GameInfo.Evaluate==5){
            this.EvaluateDisplay.string='讳疾忌医';
            this.overTipsDisplay.string='身体是革命的本钱！';
        }
    }
}
