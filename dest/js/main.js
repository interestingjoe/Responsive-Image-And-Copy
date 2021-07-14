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
            $(window).off();
            main.setAll();

            $(window).on('load resize', () => {
                main.setAll();
            });
        },
        setAll: () => {
            main.setImageHeight();
            main.setTextBlockWidth();
            main.setTextBlockHeight();
        },
        setImageHeight: () => {
            let self = this;
            let windowHeight = window.innerHeight;

            self.image.style.height = (windowHeight <= self.image.naturalHeight) ? 
                windowHeight + 'px' : 
                'auto';
        },
        setTextBlockWidth: () => {
            let self = this;
            let imageWidthPercent = (self.image.offsetWidth / window.innerWidth) * 100;

            // Cutting the INT down to four digest after the decimal.
            imageWidthPercent = parseFloat(imageWidthPercent.toFixed(4));

            // I'm using 99.9450 instead of 100 because there is a bug where it doesn't
            // always inline-block the right panel of copy if I use 100. This works for
            // now. I would need a lot more time to figure out the bug.
            let half = (99.9450 - imageWidthPercent) / 2;

            // Cutting the INT down to four digest after the decimal.
            half = parseFloat(half.toFixed(4));

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
