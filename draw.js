class Drawpad {

    constructor(d) {
        this.drawingArea = d;
        var ctx = d.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.lineTo(100, 100);
        ctx.stroke();


    }



}