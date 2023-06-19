class Drawpad {

    constructor(d) {
        this.drawingArea = d;
        var ctx = d.getContext("2d");
        this.#addEventListeners();
        ctx.moveTo(0, 0);
        ctx.lineTo(100, 100);
        ctx.stroke();


    }


    #addEventListeners() {  // eine private Methode
        this.drawingArea.onmousemove = (evt) => {
            if (this.mousePressed == true) {
                const rect = this.drawingArea.getBoundingClientRect(); // hole die Koordinaten der Drawingarea
                const x = evt.clientX - rect.left;
                const y = evt.clientY - rect.top;
                console.log("x: " + x + " y: " + y);
                this.drawingArea.getContext("2d").lineTo(x, y);
                this.drawingArea.getContext("2d").stroke();
            }
        }

        this.drawingArea.onmousedown = (evt) => {
            console.log("mouse pressed");
            this.mousePressed = true;
        }

        this.drawingArea.onmouseup = (evt) => {
            console.log("mouse released");
            this.mousePressed = false;
        }




    }





}
