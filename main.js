var divImages = document.getElementById("images");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var one;
var two;
var three;
var four;
var five;
var resume = document.getElementById("resume");
var button = document.getElementById("button");
button.addEventListener("click", stop);

function stop() {
    clearTimeout(t);
    clearTimeout(one);
    clearTimeout(two);
    clearTimeout(three);
    clearTimeout(four);
    clearTimeout(five);
}
resume.addEventListener("click", finalResult);
window.addEventListener("load", finalResult);
//var wmd = setInterval(finalResult,1000);

var t = setTimeout(function() {
    finalResult()
}, 0);

function finalResult() {

    getFirstImage();

    function getFirstImage() {
        img1.style.display = "block";
        one = setTimeout(getSecondImage, 3000);
    }

    function getSecondImage() {
        img1.style.display = "none";
        img2.style.display = "block";
        two = setTimeout(getThirdImage, 3000);
    }

    function getThirdImage() {
        img3.style.display = "block";
        img2.style.display = "none";
        three = setTimeout(getFourthImage, 3000);
    }

    function getFourthImage() {
        img4.style.display = "block";
        img3.style.display = "none";
        four = setTimeout(loopAgain, 3000);
    }

    function loopAgain() {
        img4.style.display = "none";
        five = setTimeout(getFirstImage, 0);
    }

}



/*var arr=[img1,img2,img3,img4];
for(var i=0; i<arr.length;i++){
  setTimeout(getImage,3000);
   function getImage(){
  arr[i].style.display = "block";
   }
}*/
