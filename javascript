
AOS.init();

new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2000,
    },
});

function gantiWarna(el, warna){
    document.querySelectorAll('.colors span').forEach(c => c.classList.remove('active'));
    el.classList.add('active');

    let img = document.getElementById("imgSepatu");

    if(warna === "hitam"){
        img.src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff";
    } else {
        img.src = "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77";
    }
} 