
const {ccclass, property} = cc._decorator;

@ccclass
export default class MoreDay extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    show() {
        this.node.active = true;
    }
    hide() {
        this.node.active = false;
    }
    // update (dt) {}
}
