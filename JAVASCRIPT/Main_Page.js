//USER
function UMO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  hover.play();
}

//SIDEBAR 1
function SB1MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  hover.play();
}
//GLITCH 1
function glitchEnd1() {
  document.getElementById("Glitch1-BG").style.visibility = "hidden";
  document.getElementById("Glitch1-BG").style.opacity = "0";
  //homepage cards
  document.getElementById("welcome_cards").style.visibility = "visible";
  document.getElementById("welcome_cards").style.opacity = "1";
  //documentation cards
  document.getElementById("project_cards").style.visibility = "hidden";
  document.getElementById("project_cards").style.opacity = "0";
  //intern cards
  document.getElementById("intern_cards").style.visibility = "hidden";
  document.getElementById("intern_cards").style.opacity = "0";
}

function M1BTN() {
  const click = new Audio("../RESOURCES/MP3/Hover_Audio2.mp3");
  click.play();
  //GLITCH
  document.getElementById("Glitch1-BG").play();
  document.getElementById("Glitch1-BG").style.visibility = "visible";
  document.getElementById("Glitch1-BG").style.opacity = "1";
  document.getElementById("Glitch1-BG").style.zIndex = "0";
}
//SIDEBAR 2
function SB2MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  hover.play();
}
//GLITCH 2
function glitchEnd2() {
  document.getElementById("Glitch2-BG").style.visibility = "hidden";
  document.getElementById("Glitch2-BG").style.opacity = "0";

  //documentation cards
  document.getElementById("project_cards").style.visibility = "visible";
  document.getElementById("project_cards").style.opacity = "1";
  //homepage cards
  document.getElementById("welcome_cards").style.visibility = "hidden";
  document.getElementById("welcome_cards").style.opacity = "0";

  //intern cards
  document.getElementById("intern_cards").style.visibility = "hidden";
  document.getElementById("intern_cards").style.opacity = "0";
}

function M2BTN() {
  const click = new Audio("../RESOURCES/MP3/Hover_Audio2.mp3");
  click.play();
  //GLITCH
  document.getElementById("Glitch2-BG").play();
  document.getElementById("Glitch2-BG").style.visibility = "visible";
  document.getElementById("Glitch2-BG").style.opacity = "1";
  document.getElementById("Glitch2-BG").style.zIndex = "0";
}

//SIDEBAR 3
function SB3MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  hover.play();
}

function glitchEnd3() {
  document.getElementById("Glitch3-BG").style.visibility = "hidden";
  document.getElementById("Glitch3-BG").style.opacity = "0";
  //intern cards
  document.getElementById("intern_cards").style.visibility = "visible";
  document.getElementById("intern_cards").style.opacity = "1";
  //welcome cards
  document.getElementById("welcome_cards").style.visibility = "hidden";
  document.getElementById("welcome_cards").style.opacity = "0";
  //documentation cards
  document.getElementById("project_cards").style.visibility = "hidden";
  document.getElementById("project_cards").style.opacity = "0";
}

function M3BTN() {
  const click = new Audio("../RESOURCES/MP3/Hover_Audio2.mp3");
  click.play();
  //GLITCH
  document.getElementById("Glitch3-BG").play();
  document.getElementById("Glitch3-BG").style.visibility = "visible";
  document.getElementById("Glitch3-BG").style.opacity = "1";
  document.getElementById("Glitch3-BG").style.zIndex = "0";
}
//SIDEBAR 4
var ishover = false;
var ispaused = false;
function SB4MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  hover.play();
  if (ispaused == false) {
    document.getElementById("menu4").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Sidebar_MusicPlayer_On_Hover.png')";
  } else {
    document.getElementById("menu4").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Sidebar_MusicPlayer_Off_Hover.png')";
  }
  ishover = true;
}

function SB4ML() {
  if (ispaused == false) {
    document.getElementById("menu4").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Sidebar_MusicPlayer_On.png')";
  } else {
    document.getElementById("menu4").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Sidebar_MusicPlayer_Off.png')";
  }
  ishover = false;
}

//MUSIC PLAYER
function M4BTN() {
  const click = new Audio("../RESOURCES/MP3/Hover_Audio2.mp3");
  click.play();
  const BGMusic = document.getElementById("BGM");
  if (ispaused == true) {
    BGMusic.play();
    if (ishover == true) {
      document.getElementById("menu4").style.background =
        "url('../RESOURCES/ADOBE_PHOTOSHOP/Sidebar_MusicPlayer_On_Hover.png')";
    } else {
      document.getElementById("menu4").style.background =
        "url('../RESOURCES/ADOBE_PHOTOSHOP/Sidebar_MusicPlayer_On.png')";
    }
    ispaused = false;
  } else {
    BGMusic.pause();
    if (ishover == true) {
      document.getElementById("menu4").style.background =
        "url('../RESOURCES/ADOBE_PHOTOSHOP/Sidebar_MusicPlayer_Off_Hover.png')";
    } else {
      document.getElementById("menu4").style.background =
        "url('../RESOURCES/ADOBE_PHOTOSHOP/Sidebar_MusicPlayer_Off.png')";
    }
    ispaused = true;
  }
}

//SIDEBAR 5
function SB5MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  hover.play();
}

//CARDS//

//IMAGE 1
function img1MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  const img2_mOver = document.getElementById("image2");
  const img3_mOver = document.getElementById("image3");
  img2_mOver.style.opacity = "1";
  img3_mOver.style.opacity = "1";
  hover.play();
}

function img1ML() {
  const img2_mLeave = document.getElementById("image2");
  const img3_mLeave = document.getElementById("image3");
  img2_mLeave.style.opacity = "1";
  img3_mLeave.style.opacity = "1";
}

//IMAGE 2
function img2MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  const img1_mOver = document.getElementById("image1");
  const img3_mOver = document.getElementById("image3");
  img1_mOver.style.opacity = "0.16";
  img3_mOver.style.opacity = "1";
  hover.play();
}

function img2ML() {
  const img1_mLeave = document.getElementById("image1");
  const img3_mLeave = document.getElementById("image3");
  img1_mLeave.style.opacity = "1";
  img3_mLeave.style.opacity = "1";
}

//IMAGE 3
function img3MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  const img1_mOver = document.getElementById("image1");
  const img2_mOver = document.getElementById("image2");
  img1_mOver.style.opacity = "0.2";
  img2_mOver.style.opacity = "0.2";
  hover.play();
}

function img3ML() {
  const img1_mLeave = document.getElementById("image1");
  const img2_mLeave = document.getElementById("image2");
  img1_mLeave.style.opacity = "1";
  img2_mLeave.style.opacity = "1";
}

//INTERN CARD 1
function int_1MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  hover.play();
}

function int_1ML() {
  const int2_mLeave = document.getElementById("img_int_2");
  int2_mLeave.style.opacity = "1";
}

//INTERN CARD 2
function int_2MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  const int1_mOver = document.getElementById("img_int_1");
  int1_mOver.style.opacity = "0.16";
  hover.play();
}

function int_2ML() {
  const int1_mLeave = document.getElementById("img_int_1");
  int1_mLeave.style.opacity = "1";
}

//INTERN CARD 3
function int_3MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  const int1_mOver = document.getElementById("img_int_1");
  const int2_mOver = document.getElementById("img_int_2");
  int1_mOver.style.opacity = "0.2";
  int2_mOver.style.opacity = "0.2";
  hover.play();
}

function int_3ML() {
  const int1_mLeave = document.getElementById("img_int_1");
  const int2_mLeave = document.getElementById("img_int_2");
  int1_mLeave.style.opacity = "1";
  int2_mLeave.style.opacity = "1";
}

//HOMEPAGE CARD 1
function w1MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  hover.play();
}

function w1ML() {
  const w1_mLeave = document.getElementById("w1");
  w1_mLeave.style.opacity = "1";
}

//HOMEPAGE CARD 2
function w2MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  const w1_mLeave = document.getElementById("w1");
  w1_mLeave.style.opacity = "0.16";
  hover.play();
}

function w2ML() {
  const w1_mLeave = document.getElementById("w1");
  w1_mLeave.style.opacity = "1";
}

//HOMEPAGE CARD 3
function w3MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  const w1_mOver = document.getElementById("w1");
  const w2_mOver = document.getElementById("w2");
  w1_mOver.style.opacity = "0.2";
  w2_mOver.style.opacity = "0.2";
  hover.play();
}

function w3ML() {
  const w1_mLeave = document.getElementById("w1");
  const w2_mLeave = document.getElementById("w2");
  w1_mLeave.style.opacity = "1";
  w2_mLeave.style.opacity = "1";
}
