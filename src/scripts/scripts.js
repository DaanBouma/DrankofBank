
let VisitPage1 = false;
let VisitPage2 = false;
let VisitPage3 = false;
let VisitPage4 = true;
let VisitPage5 = false;
let VisitPage6 = false;
let VisitPage7 = false;
let VisitPage8 = false;
let VisitPage9 = false;
let VisitPage33 = false;


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
/////////////                          Pages                                   /////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

const pages = document.getElementById("pages");
const Page1 = document.getElementById("page1");
const Page2 = document.getElementById("page2");
const Page3 = document.getElementById("page3");
const Page4 = document.getElementById("page4");
const Page5 = document.getElementById("page5");
const Page6 = document.getElementById("page6");
const bar = document.getElementById("moving-bar");
const TotalPages = document.getElementById("totalPages");
const leftButton = document.getElementById("left-side");
const rightButton = document.getElementById("right-side");
let Movement = 0;


leftButton.style.opacity = "0"


function position(element, x){
    element.style.transform = 'translateX(' + x + 'vw)';
    element.style.transition = '0.5s';
}
const bankPath = document.querySelectorAll(".bankpath");
const drankPath = document.querySelectorAll(".drankpath");
const leftOptionButton = document.getElementById("LeftButton");
const rightOptionButton = document.getElementById("RightButton");
let selectedOption = "none";
function selectDrank(){
    if (selectedOption == "none"){
        selectedOption = "Drank";
        console.log(selectedOption);
        rightButton.style.opacity = "1";
        rightOptionButton.style.display = "none";
        rightButton.style.display = "flex";
        bankPath.forEach(element => {
            element.style.display = "none";
        });
    }
}

function selectBank(){
    if (selectedOption == "none"){
    selectedOption = "Bank";
    console.log(selectedOption);
    rightButton.style.opacity = "1";
    rightButton.style.display = "flex";
    leftOptionButton.style.display = "none";
    drankPath.forEach(element => {
        element.style.display = "none";
    });
}
}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
/////////////                          Mute                                    /////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

let muted = false;
const onbutton = document.getElementById("onButton");
const ofbutton = document.getElementById("ofButton");

function Change(){
    if (onbutton.style.display == "none"){
        onbutton.style.display = "block"
        ofbutton.style.display = "none"
    } else {
        onbutton.style.display = "none"
        ofbutton.style.display = "block"
    }
}


function mute() {
    if (muted == false){
        Change()
        muted = true;
        audio.muted = !audio.muted;
    } else if (muted == true){
        Change()
        muted = true;
        audio.muted = !audio.muted;
    }

}
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
/////////////                          Sound                                   /////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

let sound = "";
var audio = new Audio();

function stop() {
    audio.pause();
    audio.currentTime = 0;
}

function play(soundurl) {
    stop();
    console.log(soundurl);
    sound = soundurl;
    audio = new Audio(sound);
    audio.play();
    if (muted == true){
        audio.muted = true
    }
}

////////////////////////////////////////////////////////////////////////////////////////////
let NFKS = false;
let NDKF = false;
let alreadyActive = false;
function nextButton(){
    if (VisitPage6 == false && selectedOption == "Bank" && VisitPage5 == true) {
        play("../../src/sounds/laatste.mp3");
        
        Page5_TypeWriter()
        VisitPage6 = true;

    }
    if (VisitPage2 == false){
        play("../../src/sounds/Slider2/slide2_mixdown.mp3");
        Page2_TypeWriter()
        VisitPage2 = true;
    } else if (VisitPage2 == true && VisitPage3 == false){
        NDKF = true
        VisitPage3 = true;
        VisitPage4 = false;
        play("../../src/sounds/Slider3/slide3_mixdown.mp3");
    } else if ( VisitPage33 == true && VisitPage4 == false && selectedOption == "Drank"){
        play("../../src/sounds/Slide5.mp3");
        Page3_TypeWriter()
        VisitPage4 = true;
    } else if (VisitPage5 == false && VisitPage3 == true && selectedOption == "Bank"){
        play("../../src/sounds/slideGeldLetten.mp3");
        Page4_TypeWriter()
        VisitPage5 = true;
    } else if (selectedOption == "Bank" && VisitPage5 == true && Movement == -400){
        rightButton.style.opacity = "0";
        rightButton.style.display = "none"
        NFKS = true;
        VisitPage6 = true;
    } else if (selectedOption == "Drank" && VisitPage4 == true && VisitPage7 == false){
        play("../../src/sounds/Slide6.mp3");
        setTimeout(function() {
            if (alreadyActive == false){
                play("../../src/sounds/Slide6.2.mp3");
            }
        }, 9000);

        Page6_TypeWriter()
        VisitPage7 = true;
    } else if (selectedOption == "Drank" && VisitPage7 == true && VisitPage8 == false){
        alreadyActive = true;
        play("../../src/sounds/Slide8.mp3");
        Page7_TypeWriter()
        VisitPage8 = true;
    } else if (selectedOption == "Drank" && VisitPage8 == true && VisitPage9 == false){
        play("../../src/sounds/Slide9.mp3");
        Page10_TypeWriter()
        VisitPage9 = true;
    } 
    if (selectedOption == "Drank" && VisitPage33 == false){
        play("../../src/sounds/soundchoice.mp3");
        Page33_TypeWriter()
        VisitPage33 = true;
    }

    if (Movement == -800){
        rightButton.style.opacity = "0";
    } else {
        rightButton.style.opacity = "1";
        leftButton.style.opacity = "1";
        Movement -= 100
        position(pages, Movement)
        if (Movement == -800){
            rightButton.style.opacity = "0";
            rightButton.style.display = "none"
        }
        if (Movement == -200){
            if (selectedOption == "none"){
                rightButton.style.opacity = "0";
                rightButton.style.display = "none"
            } else {
                rightButton.style.opacity = "1";
                rightButton.style.display = "flex"
            }
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////
function previousButton(){
if (NFKS == true){
    rightButton.style.opacity = "1";
    rightButton.style.display = "flex"
    NFKS = false;
}
    if (Movement == 0){
        leftButton.style.opacity = "0";
    } else {
        leftButton.style.opacity = "1";
        rightButton.style.opacity = "1";
        Movement += 100
        position(pages, Movement)
        if (Movement == -100){
            rightButton.style.display = "flex"
        }
        if (Movement == 0){
            leftButton.style.opacity = "0";
        }
    }
}


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
/////////////                          Cloud page 1                            /////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function Page1_TypeWriter() {
    var i = 0;
    var txt = 'Marie en Kim zijn in het park. Ze zijn zoals elke dag aan het drinken.';
    var speed = 50;
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("cloudText1").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton2()
            }, 1000);
        }
    }

    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////
function cloudbutton2() {
    document.getElementById("cloudText1").innerHTML = "";
    var i = 0;
    var txt = 'Gaan we meer halen?';
    var speed = 50;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText1").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
    typeWriter();
}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
/////////////                          Cloud page 2                            /////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function Page2_TypeWriter() {
    var i = 0;
    var txt = 'Ik heb nog maar 8 euro. Ik moet er ook nog van eten halen he... ';
    var speed = 50;
    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText2").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        }   else {
            setTimeout(function() {
                cloudbutton3()
            }, 1000);
        }}
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////

function cloudbutton3() {
    document.getElementById("cloudText2").innerHTML = "";
    var i = 0;
    var txt = 'Ik leg 2 euro bij, dan kunnen we 2 flessen wijn betalen.';
    var speed = 45;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText2").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
            }, 1000);
        }
    }
    typeWriter();
}


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
/////////////                          Cloud page 4                            /////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function Page3_TypeWriter() {
    var i = 0;
    var txt = '(Ze staan bij de kassa. De Caissière scant de laaste fles)';
    var speed = 50;
    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText3").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        }   else {
            setTimeout(function() {
                cloudbutton4_4()
            }, 1000);
        }}
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////
function cloudbutton4_4() {
    document.getElementById("cloudText3").innerHTML = "";
    var i = 0;
    var txt = ' Zo heeft u alles. Dat word dan €12,50 alstublieft.';
    var speed = 50;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText3").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton4_5();
            }, 400);
        }
    }
    typeWriter();
}


function cloudbutton4_5() {
    document.getElementById("cloudText3").innerHTML = "";
    var i = 0;
    var txt = '(Marie en Kim schrikken allebei van de prijs die ze horen.)';
    var speed = 45;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText3").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton4();
            }, 400);
        }
    }
    typeWriter();
}




function cloudbutton4() {
    document.getElementById("cloudText3").innerHTML = "";
    var i = 0;
    var txt = ' We hebben 2,50 te weinig.. Kim heb jij meer..?';
    var speed = 45;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText3").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton5();
            }, 400);
        }
    }
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////
 
function cloudbutton5() {
    document.getElementById("cloudText3").innerHTML = "";
    var i = 0;
    var txt = '(Kim schudde haar hoofd).';
    var speed = 40;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText3").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton6();
            }, 1000);
        }
    }
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////
 
function cloudbutton6() {
    document.getElementById("cloudText3").innerHTML = "";
    var i = 0;
    var txt = 'Doe maar 1 fles minder.'
    var speed = 50;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText3").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
            }, 1000);
        }
    }
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
/////////////                          Cloud page 3.5                           /////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function Page33_TypeWriter() {
    var i = 0;
    var txt = '(Marie blijft even naar haar kleingeld staren. Dan maakt ze de keuze.) ';
    var speed = 50;
    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText23").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        }   else {
            setTimeout(function() {
                cloudbutton333()
            }, 1000);
        }}
    typeWriter();
}
function cloudbutton333() {
    document.getElementById("cloudText23").innerHTML = "";
    var i = 0;
    var txt = 'Naar de Appie dan maar!';
    var speed = 50;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText23").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton334();
            }, 1000);
        }
    }
    typeWriter();
}
function cloudbutton334() {
    document.getElementById("cloudText23").innerHTML = "";
    var i = 0;
    var txt = '(Kim was opgelucht en sleurde haar mee naar de winkel.)';
    var speed = 50;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText23").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
            }, 1000);
        }
    }
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
/////////////                          Cloud page 5                            /////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function Page4_TypeWriter() {
    var i = 0;
    var txt = 'Ik vind het geen goed idee..';
    var speed = 50;
    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText4").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        }   else {
            setTimeout(function() {
                cloudbutton7()
            }, 100);
        }}
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////

function cloudbutton7() {
    document.getElementById("cloudText4").innerHTML = "";
    var i = 0;
    var txt = 'Ik wil gaan denken aan mijn geld. Ik heb het nodig. Ik kies ervoor om naar de Kredietbank te gaan voor hulp.';
    var speed = 40;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText4").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton8();
            }, 1000);
        }
    }
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////
 
function cloudbutton8() {
    document.getElementById("cloudText4").innerHTML = "";
    var i = 0;
    var txt = 'Ik snap het goed idee.';
    var speed = 40;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText4").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton9();
            }, 1000);
        }
    }
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////
 
function cloudbutton9() {
    document.getElementById("cloudText4").innerHTML = "";
    var i = 0;
    var txt = 'Misschien is het ook verstanding om op mijn geld te gaan letten.'
    var speed = 40;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText4").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {

            }, 1000);
        }
    }
    typeWriter();
}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
/////////////                          Cloud page 6                            /////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function Page5_TypeWriter() {
    var i = 0;
    var txt = 'Neem plaats.';
    var speed = 50;
    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText5").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        }   else {
            setTimeout(function() {
                cloudbutton13()
            }, 1000);
        }}
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////

// function cloudbutton12() {
//     document.getElementById("cloudText5").innerHTML = "";
//     var i = 0;
//     var txt = '(Marie en kim gaan zitten)';
//     var speed = 50;

//     function typeWriter() {
//             if (i < txt.length) {
//                 document.getElementById("cloudText5").innerHTML += txt.charAt(i);
//                 i++;
//                 setTimeout(typeWriter, speed);
//         } else {
//             setTimeout(function() {
//                 cloudbutton13();
//             }, 1000);
//         }
//     }
//     typeWriter();
// }
////////////////////////////////////////////////////////////////////////////////////////////
 
function cloudbutton13() {
    document.getElementById("cloudText5").innerHTML = "";
    var i = 0;
    var txt = 'Dus, jullie hebben hulp nodig?';
    var speed = 50;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText5").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton14();
            }, 200);
        }
    }
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////
 
function cloudbutton14() {
    document.getElementById("cloudText5").innerHTML = "";
    var i = 0;
    var txt = 'Ja, wij geven ons geld alleen uit aan onze alcohol en wij willen daar beter op letten.'
    var speed = 50;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText5").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton17()
            }, 200);
        }
    }
    typeWriter();
}
// function cloudbutton15() {
//     document.getElementById("cloudText5").innerHTML = "";
//     var i = 0;
//     var txt = 'En wij willen daar beter op letten.'
//     var speed = 50;

//     function typeWriter() {
//             if (i < txt.length) {
//                 document.getElementById("cloudText5").innerHTML += txt.charAt(i);
//                 i++;
//                 setTimeout(typeWriter, speed);
//         } else {
//             setTimeout(function() {
//                 cloudbutton17()
//             }, 1000);
//         }
//     }
//     typeWriter();
// }
// function cloudbutton16() {
//     document.getElementById("cloudText5").innerHTML = "";
//     var i = 0;
//     var txt = '(Marie) Ik heb nooit iets te eten.'
//     var speed = 50;

//     function typeWriter() {
//             if (i < txt.length) {
//                 document.getElementById("cloudText5").innerHTML += txt.charAt(i);
//                 i++;
//                 setTimeout(typeWriter, speed);
//         } else {
//             setTimeout(function() {
//                 cloudbutton17()
//             }, 1000);
//         }
//     }
//     typeWriter();
// }
function cloudbutton17() {
    document.getElementById("cloudText5").innerHTML = "";
    var i = 0;
    var txt = 'Het komt goed, wij gaan jullie helpen.'
    var speed = 50;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText5").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
            }, 1000);
        }
    }
    typeWriter();
}


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
/////////////                          Cloud page 7                            /////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function Page6_TypeWriter() {
    var i = 0;
    var txt = '(Marie en Kim lopen samen opgelucht uit de winkel. Ze gaan zitten op een bankje langs de weg, en nemen allebei een fles in de hand.)  ';
    var speed = 50;
    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText6").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        }   else {
            setTimeout(function() {
                cloudbutton18()
            }, 1000);
        }}
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////

function cloudbutton18() {
    document.getElementById("cloudText6").innerHTML = "";
    var i = 0;
    var txt = '(Inmiddels zijn Marie en Kim uitgedronken. Ze komen er achter dat ze helemaal niks meer hebben.)';
    var speed = 50;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText6").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton19()
            }, 200);
        }
    }
    typeWriter();
}


function cloudbutton19() {
    document.getElementById("cloudText6").innerHTML = "";
    var i = 0;
    var txt = 'We hebben echt meer geld nodig.';
    var speed = 50;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText6").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
            }, 1000);
        }
    }
    typeWriter();
}




////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
/////////////                          Cloud page 8                            /////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function Page7_TypeWriter() {
    var i = 0;
    var txt = '(Uiteindelijk waren Marie en Kim het er over eens dat ze echt wat moeten veranderen aan hun financiën.)';
    var speed = 47;
    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText7").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        }   else {
            setTimeout(function() {
                cloudbutton200()
            }, 200);
        }}
    typeWriter();
}


function cloudbutton200() {
    document.getElementById("cloudText7").innerHTML = "";
    var i = 0;
    var txt = '(Ze hebben samen besloten dat ze de kredietbank maar eens een bezoekje moeten brengen.)';
    var speed = 45;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText7").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton19()
            }, 1000);
        }
    }
    typeWriter();
}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
/////////////                          Cloud page 9                            /////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function Page10_TypeWriter() {
    var i = 0;
    var txt = 'Neem plaats.';
    var speed = 50;
    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText8").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        }   else {
            setTimeout(function() {
                cloudbutton120()
            }, 1000);
        }}
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////

// function cloudbutton130() {
//     document.getElementById("cloudText8").innerHTML = "";
//     var i = 0;
//     var txt = '(Marie en kim gaan zitten)';
//     var speed = 50;

//     function typeWriter() {
//             if (i < txt.length) {
//                 document.getElementById("cloudText8").innerHTML += txt.charAt(i);
//                 i++;
//                 setTimeout(typeWriter, speed);
//         } else {
//             setTimeout(function() {
//                 cloudbutton130();
//             }, 1000);
//         }
//     }
//     typeWriter();
// }
////////////////////////////////////////////////////////////////////////////////////////////
 
function cloudbutton120() {
    document.getElementById("cloudText8").innerHTML = "";
    var i = 0;
    var txt = 'Dus, jullie hebben hulp nodig?';
    var speed = 50;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText8").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton140();
            }, 200);
        }
    }
    typeWriter();
}
////////////////////////////////////////////////////////////////////////////////////////////
 
function cloudbutton140() {
    document.getElementById("cloudText8").innerHTML = "";
    var i = 0;
    var txt = 'Ja, wij geven ons geld alleen uit aan onze alcohol en wij willen daar beter op letten.'
    var speed = 50;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText8").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
                cloudbutton170()
            }, 200);
        }
    }
    typeWriter();
}
// function cloudbutton150() {
//     document.getElementById("cloudText8").innerHTML = "";
//     var i = 0;
//     var txt = 'En wij willen daar beter op letten.'
//     var speed = 50;

//     function typeWriter() {
//             if (i < txt.length) {
//                 document.getElementById("cloudText8").innerHTML += txt.charAt(i);
//                 i++;
//                 setTimeout(typeWriter, speed);
//         } else {
//             setTimeout(function() {
//                 cloudbutton170()
//             }, 1000);
//         }
//     }
//     typeWriter();
// }
// function cloudbutton160() {
//     document.getElementById("cloudText8").innerHTML = "";
//     var i = 0;
//     var txt = '(Marie) Ik heb nooit iets te eten.'
//     var speed = 50;

//     function typeWriter() {
//             if (i < txt.length) {
//                 document.getElementById("cloudText8").innerHTML += txt.charAt(i);
//                 i++;
//                 setTimeout(typeWriter, speed);
//         } else {
//             setTimeout(function() {
//                 cloudbutton170()
//             }, 1000);
//         }
//     }
//     typeWriter();
// }
function cloudbutton170() {
    document.getElementById("cloudText8").innerHTML = "";
    var i = 0;
    var txt = 'Het komt goed, wij gaan jullie helpen.'
    var speed = 50;

    function typeWriter() {
            if (i < txt.length) {
                document.getElementById("cloudText8").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        } else {
            setTimeout(function() {
            }, 1000);
        }
    }
    typeWriter();
}play("../../src/sounds/Slider1/sound1.mp3");
Page1_TypeWriter();