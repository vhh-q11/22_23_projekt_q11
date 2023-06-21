class Drawpad {
  constructor(d) {
    this.drawingArea = d;
    this.ctx = d.getContext("2d");
    this.#addEventListeners();
  }

  #addEventListeners() {
    // eine private Methode
    this.drawingArea.onmousemove = (evt) => {
      if (this.mousePressed == true) {
        const rect = this.drawingArea.getBoundingClientRect(); // hole die Koordinaten der Drawingarea
        const x = evt.clientX - rect.left;
        const y = evt.clientY - rect.top;
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
      }
    };

    this.drawingArea.onmousedown = (evt) => {
      const rect = this.drawingArea.getBoundingClientRect(); // hole die Koordinaten der Drawingarea
      const x = evt.clientX - rect.left;
      const y = evt.clientY - rect.top;
      this.mousePressed = true;
      this.ctx.moveTo(x, y);
    };

    this.drawingArea.onmouseup = (evt) => {
      const rect = this.drawingArea.getBoundingClientRect(); // hole die Koordinaten der Drawingarea
      const x = evt.clientX - rect.left;
      const y = evt.clientY - rect.top;
      this.mousePressed = false;
    };
  }
}
