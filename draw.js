class Drawpad {

    constructor(d) {
        this.drawingArea = d;
        this.ctx = d.getContext("2d");
      
        this.ctx.strokeStyle = "black";
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(50, 100);
        this.ctx.stroke();



    }



}