//陆地类
import { Sprite } from "../base/Sprite.js";


export class Land extends Sprite {

    constructor() {
        const image = Sprite.getImage('land');
        super(image, 0, 0,
            image.width, image.height,
            0, window.innerHeight - image.height,
            // 0, DataStore.getInstance().canvas.height - image.height,
            414*5, image.height);
        //地板的水平变化坐标
        this.landX = 0;
        //地板的移动速度
        this.landSpeed = 2;//Director.getInstance().moveSpeed;
    }

    draw() {
        this.landX = this.landX + this.landSpeed;
        console.log(this.landX);
        if (this.landX > (414)) {
            this.landX = 0;
        }
        super.draw(this.img,
            this.srcX,
            this.srcY,
            this.srcW,
            this.srcH,
            -this.landX,
            this.y,
            this.width,
            this.height)
    }

}