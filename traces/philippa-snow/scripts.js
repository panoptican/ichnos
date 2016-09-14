! function () {
  "use strict";
  var prev, img,
    particles = 100,
    pos = new Array(particles);
  // particle constructor
  function Particle (x, y) {
    this.x       = x;
    this.px      = x;
    this.y       = y;
    this.py      = y;
    this.dx      = 0;
    this.dy      = 0;
    this.next    = true;
    this.prev    = prev;
    prev         = this;
  }
  Particle.prototype.link = function () {
    if (pointer.hasMoved) {
      var vx = this.x - pointer.x;
      var vy = this.y - pointer.y;
      var d = Math.sqrt(vx * vx + vy * vy);
      if (d < 100) {
        d = (100 - d) / d;
        this.dx += vx * d * .2;
        this.dy += vy * d * .2;
      }
    }
    var vx = this.prev.x - this.x;
    var vy = this.prev.y - this.y;
    var d = Math.sqrt(vx * vx + vy * vy);
    if (d > 0) {
      d = ((5 - d) / d) / 30;
      var dx = vx * d;
      var dy = vy * d;
      this.dx -= dx;
      this.dy -= dy;
      this.prev.dx += dx;
      this.prev.dy += dy;
    }
    return this.next;
  }
  Particle.prototype.update = function () {
    this.x += this.dx;
    this.y += this.dy;
    var w = (img.width || 0) * 0.5;
    ctx.drawImage(img, this.x - w, this.y - w);
    var vx = this.x - this.px;
    var vy = this.y - this.py;
    this.px = this.x;
    this.py = this.y;
    this.x += vx;
    this.y += vy;
    this.dx = 0;
    this.dy = 0;
    if (this.x < 0) this.dx = Math.abs(vx) * .1;
    else if (this.x > canvas.width) this.dx = -Math.abs(vx) * .1;
    if (this.y < 0) this.dy = Math.abs(vy) * .1;
    else if (this.y > canvas.height) this.dy = -Math.abs(vy) * .1;
    return this.next;
  }
  // main loop
  var run = function () {
    requestAnimationFrame(run);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var i;
    // update velocity
    for (
      i = 0;
      pos[i++].update();
    );
    // links
    for (
      i = 1;
      pos[i++].link();
    );
    pointer.hasMoved = false;
    // webgl postprocessing draw call
    postprocessing.render();
  }
  // initialization
  var canvas = ge1doot.canvas("canvas");
  var ctx = canvas.ctx;
  var pointer = canvas.pointer;
  pointer.move = function () {
    pointer.hasMoved = true;
  }
  // particle image
  img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = "http://www.dhteumeuleu.com/images/sphere-monochrome.png";
  // create particles
  for (var i = 0; i < particles; i++ ) {
    pos[i] = new Particle (
      i * canvas.width / particles,
      canvas.height * .5 + Math.sin(i/10) * canvas.height * .25
    );
  }
  pos[particles - 1].next = false;
  // initalize webgl postprocessor
  var postprocessing = new ge1doot.postprocessing({flipY:true});
  run();
}();
