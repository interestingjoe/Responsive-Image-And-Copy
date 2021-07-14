/*
 We have set a jQuery wrapper for you to write any JS code -- however 
 you are free to use any framework or library you want. Hint: to accomplish 
 the responsive requriement, a bit of JS coding might be needed.
*/

(() => {
    let main = {
        textBlock: document.getElementsByClassName('text-block'),
        imageBlock: document.getElementsByClassName('image-block'),
        image: document.getElementById('image'),
        init: () => {
            $(window).on('load resize', () => {
                main.setImageHeight();
                main.setTextBlockWidth();
                main.setTextBlockHeight();
            });
        },
        setImageHeight: () => {
            let self = this;
            let naturalHeight = self.image.naturalHeight;
            let windowHeight = window.innerHeight;

            self.image.style.height = (windowHeight <= naturalHeight) ? 
                windowHeight + 'px' : 
                naturalHeight + 'px';
        },
        setTextBlockWidth: () => {
            let self = this;
            let imagePercent = (self.image.offsetWidth / window.innerWidth) * 100;
            let half = (100 - imagePercent) / 2;
            for (let i = 0; i < main.textBlock.length; i++) {
                main.textBlock[i].style.width = half + '%';
            }
        },
        setTextBlockHeight: () => {
            for (let i = 0; i < main.textBlock.length; i++) {
                main.textBlock[i].style.height = main.imageBlock[0].offsetHeight + 'px';
            }
        }
    };

    $(document).ready(() => {
        main.init();
    });
})();
