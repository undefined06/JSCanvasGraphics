const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const particles = [];

class Vector2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Vector2DVelocity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class CanvasElement {
  constructor(x, y, width, height, color) {
    this.position = new Vector2D(x, y);
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

class Particle extends CanvasElement {
  acceleration = new Vector2D(0, 0);
  velocity = new Vector2DVelocity(Math.random() * (3 - -2) + -2, Math.random() * (5 - -2) + -2);
  
  constructor(x, y, radius, color) {
    super(x, y, radius * 2, radius * 2, color);
    this.radius = radius;
  }

  draw() {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
  }

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Detect side walls
    if (this.position.x + this.radius > canvas.width || this.position.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x;
    }

    // Detect top and bottom walls
    if (this.position.y + this.radius > canvas.height || this.position.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y;
    }
  }

  update() {
    this.move();
    this.draw();
  }
}


setup();

function setup() {
  // Set initial canvas size
  resizeCanvas();
  draw();

  // Create particles
  for (let i = 0; i < 200; i++) {
    particles.push(new Particle(Math.random() * (canvas.width - 0) + 0, Math.random() * (canvas.height - 0) + 0, 1, getRandomColor()));
  }

  // Update canvas size whenever the window is resized
  window.addEventListener('resize', resizeCanvas);
}



/* Functions */

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function draw() {
  // Clear the canvas
  context.beginPath();
  context.fillStyle = 'rgba(0, 0, 0, 0.1)';
  context.rect(0, 0, canvas.width, canvas.height);
  context.fill();
  // Draw particles
  particles.forEach(particle => {
    particle.update();
  });

  requestAnimationFrame(draw);
}
