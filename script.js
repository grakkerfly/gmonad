window.onload = () => {
    setTimeout(() => {
        document.querySelector('.sun').style.bottom = "0vh";
        document.querySelector('.sun').style.opacity = "1";

        document.querySelector('.logo').style.top = "10vh";
        document.querySelector('.logo').style.opacity = "1";

        document.querySelector('.buttons').style.top = "25vh";
        document.querySelector('.buttons').style.opacity = "1";
    }, 100);
};