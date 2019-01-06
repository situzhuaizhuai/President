/*
@desc: 全局变量
*/

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameInfo {
    public static GameInfo = {
        //执政天数
        Days: 1,
        //民心
        Morale:50,
        //环境
        Environment:50,
        //军事力量
        Troops:50,
        //金钱
        Money:50,
        //健康
        Health:50,
        //单天回合数
        Round:0,
        //事件数量
        EventNum:0,
        //最多事件数量
        MaxEventNum:8,
        //评价
        Evaluate:0,
    }

    // public static GameState = cc.Enum({
    //     None: 0,
    //     Pause: 1,
    //     Play: 2,
    //     Over: 3,
    //     End: 4
    // })
}
