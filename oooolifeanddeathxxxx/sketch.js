var rows = 20;
var cols = 20;

var r;
var b;

var board = [];
var temp = [];

var turn = 2;

var playx;
var playy;

function setup() {
  createCanvas(600,600);
  
  for (var k = 0; k < cols; k++) {
    board[k] = [];
    for (var l = 0; l < rows; l++) {
        board [k][l] = 3;
    }
  }
  
    for (var m =1; m < cols; m++) {
    temp[m] = [];
    for (var n = 1; l < rows; l++) {
        temp [m][n] = 3;
    }
  }
  
  for (var i = 1; i < cols-1; i++) {
    board[i] = [];
    for (var j = 1; j < rows-1; j++) {
      rand = int(random(10));
      if (rand == 1) {
        board [i][j] = 1;
      } else if (rand == 2) {
        board [i][j] = 2;
      } else {
        board [i][j] = 3;
      }
    }
  }
  
}

function draw(){
}

function print()  {
  for (var i = 1; i < cols-1; i++) {
    for (var j = 1; j < rows-1; j++) {
      var x = i * 30;
      var y = j * 30;
      if (board [i][j] == 1) {
        fill(255,0,0);
      } else if (board [i][j] == 2) {
        fill(0,0,255);
      } else {
        fill(0,0,0);
      }
      rect(x,y,30,30);
    }
  }
}
  
function mousePressed() {
  if (turn == 1) {
    turn = 2;
    println("red");
  } else if (turn == 2) {
    turn = 1;
    println("blue");
  }
  
  var playx = int(mouseX/30);
  var playy = int(mouseY/30);
  
  if (turn == 1) {
    board[playx][playy] = 1;
  }
  
  if (turn == 2) {
    board[playx][playy] = 2;
  }
  
  for (var k = 1; k < cols-1; k++) {
    for (var l = 1; l < rows-1; l++) {
      temp[k][l] = 3;
      var r = 0;
      var b = 0;
      
      if (board[k-1][l-1] == 1) {
        r++;
      }
      if (board[k-1][l] == 1) {
        r++;
      }
      if (board[k-1][l+1] == 1) {
        r++;
      }
      if (board[k][l-1] == 1) {
        r++;
      }
      if (board[k][l+1] == 1) {
        r++;
      }
      if (board[k+1][l-1] == 1) {
        r++;
      }
      if (board[k+1][l] == 1) {
        r++;
      }
      if (board[k+1][l+1] == 1) {
        r++;
      }
      
      if (board[k-1][l-1] == 2) {
        b++;
      }
      if (board[k-1][l] == 2) {
        b++;
      }
      if (board[k-1][l+1] == 2) {
        b++;
      }
      if (board[k][l-1] == 2) {
        b++;
      }
      if (board[k][l+1] == 2) {
        b++;
      }
      if (board[k+1][l-1] == 2) {
        b++;
      }
      if (board[k+1][l] == 2) {
        b++;
      }
      if (board[k+1][l+1] == 2) {
        b++;
      }
      
      if (r+b == 2) {
        temp[k][l] = board[k][l];
      }
      if (r+b == 3 && board[k][l] != 3) {
        temp[k][l] = board[k][l];
      }
      if (r+b == 3 && board[k][l] == 3) {
        if (r > b) {
          temp[k][l] = 1;
        }
        if (r < b) {
          temp[k][l] = 2;
        }
      }
    }
  }
  
  for (var o = 1; o < cols-1; o++) {
    for (var p = 1; p < rows-1; p++) {
      board[o][p] = temp[o][p];
    }
  }
  
  print();
}