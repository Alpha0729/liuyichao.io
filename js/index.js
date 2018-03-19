window.onload=function () {
    var oImg=document.getElementById('tab_img');
    oImg.onclick=function () {
        alert('小伙子加油吧！');
    }
};
window.addEventListener('scroll', function () {
    var oTop = document.getElementById('return_top');
    var oW = document.documentElement.clientWidth;
    if (oW<970){
        oTop.style.display='none';
    }else {
    var oH = document.documentElement.clientHeight;
    var oS = document.documentElement.scrollTop;
    if (oH + oS > oH+100) {
        oTop.style.display = "block";
    } else {
        oTop.style.display = "none";
    }
    oTop.onclick = function () {
        var timer = null;
        clearInterval(timer);
        timer = setInterval(function () {
            console.log(oS);
            document.documentElement.scrollTop = (oS *= .5);
            if (oS <= 50) {
                oS = 0;
                clearInterval(timer);
                oTop.style.display = "none";
            }
            console.log(oS)
        }, 30)
    };
    };
});











