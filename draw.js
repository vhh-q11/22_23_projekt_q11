class Drawpad {
  constructor(d) {
    this.drawingArea = d;
    var ctx = d.getContext("2d");
    this.#addEventListeners();
  }

  #addEventListeners() {
    // eine private Methode
    this.drawingArea.onmousemove = (evt) => {
      if (this.mousePressed == true) {
        const rect = this.drawingArea.getBoundingClientRect(); // hole die Koordinaten der Drawingarea
        const x = evt.clientX - rect.left;
        const y = evt.clientY - rect.top;
        console.log("x: " + x + " y: " + y);
        this.drawingArea.getContext("2d").lineTo(x, y);
        this.drawingArea.getContext("2d").stroke();
      }
    };

    this.drawingArea.onmousedown = (evt) => {
      const rect = this.drawingArea.getBoundingClientRect(); // hole die Koordinaten der Drawingarea
      const x = evt.clientX - rect.left;
      const y = evt.clientY - rect.top;
      console.log("mouse pressed");
      this.mousePressed = true;
      this.drawingArea.getContext("2d").moveTo(x, y);
    };

    this.drawingArea.onmouseup = (evt) => {
      console.log("mouse released");
      this.mousePressed = false;
    };
  }
}
