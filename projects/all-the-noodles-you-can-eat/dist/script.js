// Set the canvas for the visuals
const canvas = document.getElementById("interactive");

// Set window height and width variables
let width = window.innerWidth,
height = window.innerHeight;

// Add Matter modules
const Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Body = Matter.Body,
Mouse = Matter.Mouse,
World = Matter.World,
Bodies = Matter.Bodies,
Composites = Matter.Composites;

// Create an engine
const engine = Engine.create(),
world = engine.world;

// Create a renderer
const render = Render.create({
  engine: engine,
  canvas: canvas,
  options: {
    showAngleIndicator: false,
    wireframes: false,
    background: "#efefe8",
    width: width,
    height: height,
    showAngleIndicator: false,
    showCollisions: false,
    showVelocity: false } });



// Create runner
const runner = Runner.create();
Runner.run(runner, engine);

// Create the ground for the noodles to splatter against but offset it so that the mess is hidden from sight
const ground = Bodies.rectangle(width / 2, height + 100, width, 80, {
  isStatic: true,
  label: "ground",
  render: {
    visible: false } });



// Create a collision event for the noodles that hit the ground
Matter.Events.on(engine, "collisionStart", function (event) {
  let pairs = event.pairs;
  pairs.forEach(function (pair) {
    // Check if the collision is between the noodle and the ground
    if (pair.bodyB.label === "noodle" && pair.bodyA.label === "ground") {
      // Remove the noodle from the world
      Matter.World.remove(world, pair.bodyB, [deep = true]);
      // Run the noodle restrictor function
      noodleRestrictor();
    }
  });
});

// Define how long the noodle should be
const noodleLength = 30;
// Define colours for the noodles
var noodle0 = "#edd683";
var noodle1 = "#f0dd99";
// Count the total number of noodles that have been dropped
let noodlesDropped = 0;
// Count the number of noodles that were initially created
let noodlesCount = 0;
// Define how many noodles will be on screen
let noodlesMax = 16;
// Equal the noodle timeout to the length of the noodles to keep world object totals in balance
let noodleTimeout = noodleLength;

// Add new noodles when all parts of the previous noodle are removed
const noodleRestrictor = function () {
  // Count down the timeout
  noodleTimeout--;
  // When the timeout reaches 0 then it is time to add a new noodle
  if (noodleTimeout <= 0) {
    // Add the new noodle
    World.add(engine.world, noodle());
    // Reset the timeout to the length of the noodle to keep world objects in balance
    noodleTimeout = noodleLength;
  }
};

// Define the function for adding a new noodle
const noodle = function () {
  // Create a random number to vary the position of where the noodle will be dropped from
  let random = Math.floor(Math.random() * 100 - 50);
  // Create a bit of variation in noodle appearance
  let type = noodle0;
  // If the number is divisible by 2 then change the appearance
  if (noodlesDropped % 2 === 0) {
    type = noodle1;
  }
  // Add to the total of noodles dropped
  noodlesDropped++;
  // Define the noodle properties
  const particleOptions = {
    friction: 0.05,
    frictionAir: 0.1,
    label: "noodle",
    render: { visible: false } },

  constraintOptions = {
    stiffness: 0.06,
    render: {
      strokeStyle: type,
      lineWidth: 6 } };


  // Create new noodle
  return Composites.softBody(
  width / 2 + random,
  -400,
  1,
  noodleLength,
  5,
  5,
  false,
  4,
  particleOptions,
  constraintOptions);

};

let chopstickLength = width / 2;
if (chopstickLength > 500) {
  chopstickLength = 500;
}

// Create some chopsticks to interact with the noodles
let chopstick1 = Bodies.rectangle(
width / 2 + chopstickLength / 2,
height / 4,
chopstickLength,
8,
{
  friction: 0,
  isStatic: true,
  render: {
    fillStyle: "#e45655" },

  angle: -Math.PI * 0.07 });



let chopstick2 = Bodies.rectangle(
width / 2 + chopstickLength / 2,
height / 4 + 30,
chopstickLength,
8,
{
  friction: 0,
  isStatic: true,
  render: {
    fillStyle: "#e45655" },

  angle: -Math.PI * 0.06 });



// Add the chopsticks to the world
World.add(world, [chopstick1, chopstick2]);

// Add a mouse controller
const mouse = Mouse.create(render.canvas);

// Define what happens when the mouse moves
Matter.Events.on(engine, "afterUpdate", function () {
  // Early exit condition
  if (!mouse.position.x) {
    return;
  }
  // Limit the x axis positioning of the chopsticks to keep them on the right hand side of the screen
  const limit = width / 2 + chopstickLength / 3;
  let position = mouse.position.x;
  if (mouse.position.x < limit) {
    position = limit;
  }
  // Smoothly move the chopsticks towards the mouse position
  const offset1 = {
    x: 0,
    y: width * 0.02 };

  const offset2 = {
    x: 0,
    y: width * 0.04 + 5 };

  Body.translate(chopstick1, {
    x: (position - chopstick1.position.x - offset1.x) * 0.1,
    y: (mouse.position.y - chopstick1.position.y + offset1.y) * 0.1 });

  Body.translate(chopstick2, {
    x: (position - chopstick2.position.x - offset2.x) * 0.1,
    y: (mouse.position.y - chopstick2.position.y + offset2.y) * 0.1 });

});

// Create starting condition for adding noodles
let addNoodles = true;

// Define a mouse click event
window.addEventListener("mousedown", function () {
  // Move the chopsticks together
  Body.setAngle(chopstick1, -Math.PI * 0.075);
  Body.setAngle(chopstick2, -Math.PI * 0.055);
});

// Define the mouse click release event
window.addEventListener("mouseup", function () {
  // Reset the chopstick position
  Body.setAngle(chopstick1, -Math.PI * 0.07);
  Body.setAngle(chopstick2, -Math.PI * 0.06);
});

// Add the ground to the world
World.add(engine.world, ground);

// Run the engine
Engine.run(engine);

// Run the renderer
Render.run(render);

// When the document has loaded
document.addEventListener("DOMContentLoaded", function (event) {
  // Start an interval for adding noodles
  addNoodles = setInterval(function () {
    // Count whether the maximum number of noodles has been added
    if (noodlesCount > noodlesMax) {
      // If so then clear the interval
      clearInterval(addNoodles);
      // Don't add any more noodles!
      addNoodles = false;
      // Exit the function
      return;
    }
    // If the function is still running then add a new noodle
    World.add(engine.world, noodle());
    // Count the number of noodles added
    noodlesCount++;
  }, 200);
});