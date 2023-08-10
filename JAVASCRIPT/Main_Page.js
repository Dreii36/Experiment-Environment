//LOADING SCREEN
function LScreenClick() {
  document.getElementById("LoadingScreen").style.visibility = "hidden";
  document.getElementById("LoadingScreen").style.opacity = "0";
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio2.mp3");
  hover.play();
  document.getElementById("Glitch0-BG").style.visibility = "visible";
  document.getElementById("Glitch0-BG").style.opacity = "1";
  document.getElementById("Glitch0-BG").style.zIndex = "2";
  document.getElementById("Glitch0-BG").play();
}

//GLITCH 0
function glitchEnd0() {
  document.getElementById("Glitch0-BG").style.visibility = "hidden";
  document.getElementById("Glitch0-BG").style.opacity = "0";
}

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
  //suitecloud steps
  document.getElementById("sc_step").style.visibility = "hidden";
  document.getElementById("sc_step").style.opacity = "0";
  //SUITECLOUD BUTTONS
  document.getElementById("prev").style.visibility = "hidden";
  document.getElementById("prev").style.opacity = "0";
  document.getElementById("next").style.visibility = "hidden";
  document.getElementById("next").style.opacity = "0";
  //m2m steps
  document.getElementById("m2m_step").style.visibility = "hidden";
  document.getElementById("m2m_step").style.opacity = "0";
  //M2M BUTTONS
  document.getElementById("prev2").style.visibility = "hidden";
  document.getElementById("prev2").style.opacity = "0";
  document.getElementById("next2").style.visibility = "hidden";
  document.getElementById("next2").style.opacity = "0";
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
  //CHANGE BACKGROUND
  document.getElementById("vid-BG").style.visibility = "hidden";
  document.getElementById("vid-BG").style.opacity = "0";
  document.getElementById("vid-BG1").style.visibility = "visible";
  document.getElementById("vid-BG1").style.opacity = "1";
  document.getElementById("vid-BG1").play();
  document.getElementById("vid-BG2").style.visibility = "hidden";
  document.getElementById("vid-BG2").style.opacity = "0";
  document.getElementById("vid-BG3").style.visibility = "hidden";
  document.getElementById("vid-BG3").style.opacity = "0";
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
  //suitecloud steps
  document.getElementById("sc_step").style.visibility = "hidden";
  document.getElementById("sc_step").style.opacity = "0";
  //SUITECLOUD BUTTONS
  document.getElementById("prev").style.visibility = "hidden";
  document.getElementById("prev").style.opacity = "0";
  document.getElementById("next").style.visibility = "hidden";
  document.getElementById("next").style.opacity = "0";
  //m2m steps
  document.getElementById("m2m_step").style.visibility = "hidden";
  document.getElementById("m2m_step").style.opacity = "0";
  //M2M BUTTONS
  document.getElementById("prev2").style.visibility = "hidden";
  document.getElementById("prev2").style.opacity = "0";
  document.getElementById("next2").style.visibility = "hidden";
  document.getElementById("next2").style.opacity = "0";
  //homepage cards
  document.getElementById("welcome_cards").style.visibility = "hidden";
  document.getElementById("welcome_cards").style.opacity = "0";

  //intern cards
  document.getElementById("intern_cards").style.visibility = "hidden";
  document.getElementById("intern_cards").style.opacity = "0";
}

//nextprev btn sounds
function prevMO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  hover.play();
}

function nextMO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  hover.play();
}

function prev2MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  hover.play();
}

function next2MO() {
  const hover = new Audio("../RESOURCES/MP3/Hover_Audio4.mp3");
  hover.play();
}

//SUIIECLOUD STEPS TUTORIAL W BUTTONS
var steps = 0;
var steps2 = 0;
function changeStep() {
  if (steps == 0) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Prerequisites.png')";
  } else if (steps == 1) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step1And2.png')";
  } else if (steps == 2) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step3.png')";
  } else if (steps == 3) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step4And5.png')";
  } else if (steps == 4) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step6And7.png')";
  } else if (steps == 5) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step8.png')";
  } else if (steps == 6) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step8.1And8.2.png')";
  } else if (steps == 7) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step8.3And9.png')";
  } else if (steps == 8) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step10And11.png')";
  } else if (steps == 9) {  
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step12And13.png')";
  } else if (steps == 10) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step13.1.png')";
  } else if (steps == 11) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step14And14.1.png')";
  } else if (steps == 12) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step14.2And14.3.png')";
  } else if (steps == 13) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step14.4And14.5.png')";
  } else if (steps == 14) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step14.6.png')";
  } else if (steps == 15) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step14.7.png')";
  } else if (steps == 16) {
    document.getElementById("sc_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_SuiteCloud_Steps/Card_Step14.8.png')";
  }
}

function changeStep2() {
  if (steps2 == 0) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Prerequisites.png')";
  } else if (steps2 == 1) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step1.0.png')";
  } else if (steps2 == 2) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step1.1.png')";
  } else if (steps2 == 3) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step1.2.png')";
  } else if (steps2 == 4) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step2.0.png')";
  } else if (steps2 == 5) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step2.1.png')";
  } else if (steps2 == 6) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step2.2.png')";
  } else if (steps2 == 7) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step2.3.png')";
  } else if (steps2 == 8) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step2.4.png')";
  } else if (steps2 == 9) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step2.5.png')";
  } else if (steps2 == 10) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step3.0.png')";
  } else if (steps2 == 11) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step3.1.png')";
  } else if (steps2 == 12) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step3.2.png')";
  } else if (steps2 == 13) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step4.0.png')";
  } else if (steps2 == 14) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step4.1.png')";
  } else if (steps2 == 15) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step4.2.png')";
  } else if (steps2 == 16) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step4.3.png')";
  } else if (steps2 == 17) {
    document.getElementById("m2m_step").style.background =
      "url('../RESOURCES/ADOBE_PHOTOSHOP/Card_M2M_Steps/Card_Step4.4.png')";
  }
}

//nextprev button functions
function prevOC() {
  const click = new Audio("../RESOURCES/MP3/Hover_Audio2.mp3");
  click.play();
  if (steps < 1) {
    steps = 0;
  } else {
    steps--;
  }
  changeStep();
}
function nextOC() {
  const click = new Audio("../RESOURCES/MP3/Hover_Audio2.mp3");
  click.play();
  if (steps > 15) {
    steps = 16;
  } else {
    steps++;
  }
  changeStep();
}

function prev2OC() {
  const click = new Audio("../RESOURCES/MP3/Hover_Audio2.mp3");
  click.play();
  if (steps2 < 1) {
    steps2 = 0;
  } else {
    steps2--;
  }
  changeStep2();
}
function next2OC() {
  const click = new Audio("../RESOURCES/MP3/Hover_Audio2.mp3");
  click.play();
  if (steps2 > 16) {
    steps2 = 17;
  } else {
    steps2++;
  }
  changeStep2();
}

function M2BTN() {
  const click = new Audio("../RESOURCES/MP3/Hover_Audio2.mp3");
  click.play();
  //GLITCH
  document.getElementById("Glitch2-BG").play();
  document.getElementById("Glitch2-BG").style.visibility = "visible";
  document.getElementById("Glitch2-BG").style.opacity = "1";
  document.getElementById("Glitch2-BG").style.zIndex = "0";
  //CHANGE BACKGROUND
  document.getElementById("vid-BG").style.visibility = "hidden";
  document.getElementById("vid-BG").style.opacity = "0";
  document.getElementById("vid-BG1").style.visibility = "hidden";
  document.getElementById("vid-BG1").style.opacity = "0";
  document.getElementById("vid-BG2").style.visibility = "visible";
  document.getElementById("vid-BG2").style.opacity = "1";
  document.getElementById("vid-BG2").play();
  document.getElementById("vid-BG3").style.visibility = "hidden";
  document.getElementById("vid-BG3").style.opacity = "0";
}
//SUITECLOUD STEPS
function img1OC() {
  const click = new Audio("../RESOURCES/MP3/Hover_Audio2.mp3");
  click.play();
  document.getElementById("project_cards").style.visibility = "hidden";
  document.getElementById("project_cards").style.opacity = "0";
  document.getElementById("sc_step").style.visibility = "visible";
  document.getElementById("sc_step").style.opacity = "1";
  //SUITECLOUD BUTTONS
  document.getElementById("prev").style.visibility = "visible";
  document.getElementById("prev").style.opacity = "1";
  document.getElementById("next").style.visibility = "visible";
  document.getElementById("next").style.opacity = "1";
}

function img2OC() {
  const click = new Audio("../RESOURCES/MP3/Hover_Audio2.mp3");
  click.play();
  document.getElementById("project_cards").style.visibility = "hidden";
  document.getElementById("project_cards").style.opacity = "0";
  document.getElementById("sc_step").style.visibility = "hidden";
  document.getElementById("sc_step").style.opacity = "0";
  document.getElementById("m2m_step").style.visibility = "visible";
  document.getElementById("m2m_step").style.opacity = "1";
  //SUITECLOUD BUTTONS
  document.getElementById("prev2").style.visibility = "visible";
  document.getElementById("prev2").style.opacity = "1";
  document.getElementById("next2").style.visibility = "visible";
  document.getElementById("next2").style.opacity = "1";
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
  //SUITECLOUD BUTTONS
  document.getElementById("prev").style.visibility = "hidden";
  document.getElementById("prev").style.opacity = "0";
  document.getElementById("next").style.visibility = "hidden";
  document.getElementById("next").style.opacity = "0";
  //suitecloud steps
  //m2m steps
  document.getElementById("m2m_step").style.visibility = "hidden";
  document.getElementById("m2m_step").style.opacity = "0";
  //M2M BUTTONS
  document.getElementById("prev2").style.visibility = "hidden";
  document.getElementById("prev2").style.opacity = "0";
  document.getElementById("next2").style.visibility = "hidden";
  document.getElementById("next2").style.opacity = "0";
  document.getElementById("sc_step").style.visibility = "hidden";
  document.getElementById("sc_step").style.opacity = "0";
}

function M3BTN() {
  const click = new Audio("../RESOURCES/MP3/Hover_Audio2.mp3");
  click.play();
  //GLITCH
  document.getElementById("Glitch3-BG").play();
  document.getElementById("Glitch3-BG").style.visibility = "visible";
  document.getElementById("Glitch3-BG").style.opacity = "1";
  document.getElementById("Glitch3-BG").style.zIndex = "0";
  //CHANGE BACKGROUND
  document.getElementById("vid-BG").style.visibility = "hidden";
  document.getElementById("vid-BG").style.opacity = "0";
  document.getElementById("vid-BG1").style.visibility = "hidden";
  document.getElementById("vid-BG1").style.opacity = "0";
  document.getElementById("vid-BG2").style.visibility = "hidden";
  document.getElementById("vid-BG2").style.opacity = "0";
  document.getElementById("vid-BG3").style.visibility = "visible";
  document.getElementById("vid-BG3").style.opacity = "1";
  document.getElementById("vid-BG3").play();
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

function SB5OC(){
  window.close()
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
