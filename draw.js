class Drawpad {

    constructor(d) {
        this.drawingArea = d;
        this.ctx = drawingArea.getContext("2D");
      
        this.ctx.strokeStyle = "black";
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(50, 100);
        this.ctx.stroke();

        this.ctx.moveTo(250, 250);
        this.ctx.lineTo(300, 250);

        this.ctx.stroke();

    }



}