class Drawpad {
  constructor(d) {
    this.drawingArea = d;
    this.ctx = d.getContext("2d");
    this.farbe = "#000000";
    
  }

  addEventListeners() {
    // eine private Methode
    this.drawingArea.onmousemove = (evt) => {
      if (this.mousePressed == true) {
        const mouse = this.#getMouseCoordinates(evt);
        this.ctx.lineTo(mouse.x, mouse.y);
        this.ctx.stroke();
        
        sendMessage("M " + mouse.x + " " + mouse.y, topic);
      }
    };




    this.drawingArea.onmousedown = (evt) => {
      this.ctx.beginPath();
      const mouse = this.#getMouseCoordinates(evt);
      this.mousePressed = true;
      this.ctx.moveTo(mouse.x, mouse.y);
      sendMessage("D", topic);
    };

    this.drawingArea.onmouseup = (evt) => {
      sendMessage("U", topic);
      this.mousePressed = false;
    };
  }

  #getMouseCoordinates(evt) {
    const rect = this.drawingArea.getBoundingClientRect(); // hole die Koordinaten der Drawingarea
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;
    const pos = {
      "x": x,
      "y": y
    }

    return pos;
  }


  move(x, y) {
    if (this.mousePressed == true) {
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  }

  mouseDown(x, y) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.farbe;
    this.ctx.moveTo(x, y);
    this.mousePressed = true;
  }
  

  mouseUp() {
    this.mousePressed = false;
  }

  changeColor(farbe) {
    this.ctx.strokeStyle = farbe;
    this.ctx.beginPath();
    sendMessage("C " + farbe, topic);
  }

  setColor(farbe) {
    this.farbe = farbe;
  }

  fertig() {
    alert("Der Maler hat das Spiel zurückgesetzt");
  }
  clear(){
    this.ctx.clearRect(0,0,500,500);
  }


 

}
