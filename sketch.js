//Global Variables
var banana, banana_img, bananaGrp, rand;
var stones, stones_img, stonesGrp;
var monkey, monkey_anim;
var jungle, jungle_img;
var score;
var ground;

function preload(){
  banana_img = loadImage("banana.png");
  
  stone_img = loadImage("stone.png");
  
  monkey_anim = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  jungle_img("jungle.png");
}

function setup() {
  createCanvas(600, 300);
  
  ground = createSprite(300, 280, 1000, 15);
  
  jungle = createSprite(300, 150, 10, 10);
  jungle.addImage(jungle_img);
  
  
}

function draw() {
  background(225);
}