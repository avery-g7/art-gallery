
let topBtn = document.querySelector('.topBtn');


//button that goes back to the top of the page when clicked
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    };
};

topBtn.addEventListener("click", toTop);

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
