// declare variables that will be used globally
let
  R,
  backgroundColor,
  color_eye_left_1,color_eye_left_2,color_eye_left_3,color_eye_left_4, // left eye colors
  color_eye_right_1,color_eye_right_2,color_eye_right_3,color_eye_right_4, // right eye colors
  color_mouth_1,color_mouth_2,color_mouth_3,color_mouth_4,color_mouth_5,color_mouth_6,color_mouth_7,color_mouth_8, // mouth colors
  color_body_1,color_body_2,color_body_3,color_body_4 // body colors





// // //
// p5.js functions
// // //

function setup() {
  // initial canvas setup
  createCanvas(1970,1970);
  pixelDensity(2);

  // resize canvas element in html
  let canvasElement = document.querySelector("canvas");
  canvasElement.style.cssText = '';
  if (window.innerWidth >= window.innerHeight) {
    canvasElement.style.width = "auto";
    canvasElement.style.height = window.innerHeight+"px"; 
  } else {
    canvasElement.style.width = window.innerWidth+"px";
    canvasElement.style.height = "auto";
  }
  
  // instance of Random class
  R = new Random();

  // left eye colors
  color_eye_left_1 = randomColor();
  color_eye_left_2 = randomColor();
  color_eye_left_3 = randomColor();
  color_eye_left_4 = randomColor();

  // right eye colors
  color_eye_right_1 = randomColor();
  color_eye_right_2 = randomColor();
  color_eye_right_3 = randomColor();
  color_eye_right_4 = randomColor();

  // mouth colors
  color_mouth_1 = randomColor();
  color_mouth_2 = randomColor();
  color_mouth_3 = randomColor();
  color_mouth_4 = randomColor();
  color_mouth_5 = randomColor();
  color_mouth_6 = randomColor();
  color_mouth_7 = randomColor();
  color_mouth_8 = randomColor();

  // body colors
  color_body_1 = randomColor();
  color_body_2 = randomColor();
  color_body_3 = randomColor();
  color_body_4 = randomColor();

  // background color
  backgroundColor = "rgb(13,13,13)";
  background(backgroundColor);
  
  // expand background color full screen, outside of canvas
  document.body.style.backgroundColor = backgroundColor;
  
}

function draw() {
  
  // start opepen
  fill("rgba(0, 0, 0, 0)")
  stroke('rgba(0,0,0,0)')
  strokeCap(PROJECT);
  strokeJoin(MITER);
  
  // left eye
  fill(color_eye_left_1);
  beginShape();
  vertex(734.967,735.086);
  vertex(484.967,735.086);
  vertex(484.967,485.086);
  vertex(734.967,485.086);
  vertex(734.967,735.086);
  endShape();

  fill(color_eye_left_2);
  beginShape();
  vertex(734.967,735.086);
  vertex(984.967,735.086);
  bezierVertex(984.967,597.014,873.036,485.086,734.967,485.086);
  vertex(734.967,735.086);
  endShape();
  
  fill(color_eye_left_3);
  beginShape();
  vertex(484.967,735.086);
  bezierVertex(484.967,873.156,596.894,985.086,734.967,985.086);
  vertex(734.967,735.086);
  vertex(484.967,735.086);
  endShape();

  fill(color_eye_left_4)
  beginShape();
  vertex(984.967,735.086);
  bezierVertex(984.967,873.156,873.039,985.086,734.967,985.086);
  vertex(734.967,735.086);
  vertex(984.967,735.086);
  endShape();
  
  // right eye
  fill(color_eye_right_1);
  beginShape();
  vertex(1234.97,735.086);
  vertex(984.967,735.086);
  bezierVertex(984.967,597.204,1097.09,485.086,1234.97,485.086);
  vertex(1234.97,735.086);
  endShape();

  fill(color_eye_right_2);
  beginShape();
  vertex(1234.97,735.086);
  vertex(1484.97,735.086);
  bezierVertex(1484.97,597.016,1373.04,485.086,1234.97,485.086);
  vertex(1234.97,735.086);
  endShape();
  
  fill(color_eye_right_3);
  beginShape();
  vertex(984.966,735.086);
  bezierVertex(984.966,873.156,1096.89,985.086,1234.97,985.086);
  vertex(1234.97,735.086);
  vertex(984.966,735.086);
  endShape();
  
  fill(color_eye_right_4);
  beginShape();
  vertex(1484.97,735.086);
  bezierVertex(1484.97,873.157,1373.04,985.086,1234.97,985.086);
  vertex(1234.97,735.086);
  vertex(1484.97,735.086);
  endShape();

  // mouth
  fill(color_mouth_1);
  beginShape();
  vertex(734.967,1235.09);
  vertex(484.967,1235.09);
  vertex(484.967,985.086);
  vertex(734.967,985.086);
  vertex(734.967,1235.09);
  endShape();

  fill(color_mouth_2);
  beginShape();
  vertex(984.967,1235.09);
  vertex(734.967,1235.09);
  vertex(734.967,985.086);
  vertex(984.967,985.086);
  vertex(984.967,1235.09);
  endShape();

  fill(color_mouth_3);
  beginShape();
  vertex(1234.97,1235.09);
  vertex(984.967,1235.09);
  vertex(984.967,985.086);
  vertex(1234.97,985.086);
  vertex(1234.97,1235.09);
  endShape();

  fill(color_mouth_4);
  beginShape();
  vertex(1484.97,1235.09);
  vertex(1234.97,1235.09);
  vertex(1234.97,985.086);
  vertex(1484.97,985.086);
  vertex(1484.97,1235.09);
  endShape();
  
  fill(color_mouth_5);
  vertex(734.967,1485.09);
  bezierVertex(596.895,1485.09,484.967,1373.16,484.967,1235.09);
  vertex(484.967,1235.09);
  vertex(734.967,1235.09);
  vertex(734.967,1485.09);
  endShape();

  fill(color_mouth_6);
  beginShape();
  vertex(984.967,1485.09);
  vertex(734.967,1485.09);
  vertex(734.967,1235.09);
  vertex(984.967,1235.09);
  vertex(984.967,1485.09);
  endShape();
  
  fill(color_mouth_7);
  beginShape();
  vertex(1234.97,1485.09);
  vertex(984.967,1485.09);
  vertex(984.967,1235.09);
  vertex(1234.97,1235.09);
  vertex(1234.97,1485.09);
  endShape();

  fill(color_mouth_8);
  beginShape();
  vertex(1484.97,1296.87);
  bezierVertex(1484.97,1400.82,1400.7,1485.09,1296.75,1485.09);
  vertex(1234.97,1485.09);
  vertex(1234.97,1235.09);
  vertex(1484.97,1235.09);
  vertex(1484.97,1296.87);
  endShape();

  // body
  fill(color_body_1);
  beginShape();
  vertex(734.973,1970);
  vertex(485.004,1970);
  bezierVertex(485.004,1831.95,596.919,1720.03,734.973,1720.03);
  vertex(734.973,1720.03);
  vertex(734.973,1970);
  endShape();
  
  fill(color_body_2);
  beginShape();
  vertex(984.941,1970);
  vertex(734.973,1970);
  vertex(734.973,1720.03);
  vertex(984.941,1720.03);
  vertex(984.941,1970);
  endShape();
  
  fill(color_body_3);
  beginShape();
  vertex(1234.91,1970);
  vertex(984.941,1970);
  vertex(984.941,1720.03);
  vertex(1234.91,1720.03);
  vertex(1234.91,1970);
  endShape();
  
  fill(color_body_4);
  beginShape();
  vertex(1484.88,1970);
  vertex(1234.91,1970);
  vertex(1234.91,1720.03);
  bezierVertex(1372.96,1720.03,1484.88,1831.95,1484.88,1970);
  vertex(1484.88,1970);
  endShape();
  // end opepen

  noLoop();

}

function keyTyped() {
  
  if (key === 's') {
    save('p5-opepen.png');
  }
  
}

function windowResized() {
  // resize canvas element in html
  let canvasElement = document.querySelector("canvas");
  canvasElement.style.cssText = '';
  if (window.innerWidth >= window.innerHeight) {
    canvasElement.style.width = "auto";
    canvasElement.style.height = window.innerHeight+"px";
  } else {
    canvasElement.style.width = window.innerWidth+"px";
    canvasElement.style.height = "auto";
  }
}





// // //
// non-p5.js functions
// // //

function randomColor() {
  // rgb
  // return "rgb("+R.random_int(0,255)+","+R.random_int(0,255)+","+R.random_int(0,255)+")";

  // hsl
  return "hsl("+R.random_int(0,360)+","+R.random_int(30,70)+"%,"+R.random_int(30,70)+"%)";
}





// // //
// utility functions
// // //

// generate random hash. In production, use hash from mint tx or somewhere consistent
let tokenHash = new URLSearchParams(window.location.search).has('hash') ? new URLSearchParams(window.location.search).get('hash') : generateRandomHash();
console.log(tokenHash);
console.log("Append ?hash="+tokenHash+" to the url to reload this token.");

// modified random class originally from Prohibition.art
// uses tokenHash variable for 'predicatably random' values
class Random {
  constructor() {
    this.useA = false;
    let sfc32 = function (uint128Hex) {
      let a = parseInt(uint128Hex.substring(0, 8), 16);
      let b = parseInt(uint128Hex.substring(8, 16), 16);
      let c = parseInt(uint128Hex.substring(16, 24), 16);
      let d = parseInt(uint128Hex.substring(24, 32), 16);
      return function () {
        a |= 0;
        b |= 0;
        c |= 0;
        d |= 0;
        let t = (((a + b) | 0) + d) | 0;
        d = (d + 1) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
      };
    };
    // seed prngA with first half of tokenData.hash
    this.prngA = new sfc32(tokenHash.substring(2, 34));
    // seed prngB with second half of tokenData.hash
    this.prngB = new sfc32(tokenHash.substring(34, 66));
    for (let i = 0; i < 1e6; i += 2) {
      this.prngA();
      this.prngB();
    }
  }
  // random number between 0 (inclusive) and 1 (exclusive)
  random_dec() {
    this.useA = !this.useA;
    return this.useA ? this.prngA() : this.prngB();
  }
  // random number between a (inclusive) and b (exclusive)
  random_num(a, b) {
    return a + (b - a) * this.random_dec();
  }
  // random integer between a (inclusive) and b (inclusive)
  // requires a < b for proper probability distribution
  random_int(a, b) {
    return Math.floor(this.random_num(a, b + 1));
  }
  // random boolean with p as percent liklihood of true
  random_bool(p) {
    return this.random_dec() < p;
  }
  // random value in an array of items
  random_choice(list) {
    return list[this.random_int(0, list.length - 1)];
  }
}

function generateRandomHash() {
    const characters = '0123456789abcdef';
    let hash = '0x';

    for (let i = 0; i < 64; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      hash += characters.charAt(randomIndex);
    }

    //console.log(hash);
    return hash;
}

