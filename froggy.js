class Froggy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.attached = null;
    }

    attach(log) {
        this.attached = log;
    }

    update() {
        if (this.attached != null) {
            this.x += this.attached.speed;
        }
        this.x = constrain(this.x, 0, width - this.width);
    }

    show() {
        noStroke();
        fill(30, 204, 91);

        ellipse(x, y, 30, 10); // face
        ellipse(x - 20, y - 10, 10, 10); // left eye socket
        ellipse(x + 20, y - 10, 10, 10); // right eye socket
        fill(255, 255, 255); // for the whites of eye balls!
        ellipse(x - 20, y - 10, 8, 8); // left eye socket
        ellipse(x + 20, y - 10, 8, 8); // right eye socket
    }

    move(xdir, ydir) {
        this.x += xdir * grid;
        this.y += ydir * grid;
    }
}