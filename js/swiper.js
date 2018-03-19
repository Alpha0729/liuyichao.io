var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView:6,
    speed:300,
    spaceBetween: 20,//轮播侧边距离  margin-left
    freeMode: true  //  true 自由滑动   false只能滑动一个
    ,grabCursor:true, //小手
    freeModeSticky : true,//自动贴边
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
