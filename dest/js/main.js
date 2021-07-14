/*
 We have set a jQuery wrapper for you to write any JS code -- however 
 you are free to use any framework or library you want. Hint: to accomplish 
 the responsive requriement, a bit of JS coding might be needed.
*/

(() => {
    let main = {
        textBlock: document.getElementsByClassName('text-block'),
        imageBlock: document.getElementsByClassName('image-block'),
        init: () => {
            main.setTextBlockHeight();
        },
        setTextBlockHeight: () => {
            // let textBlockRatio = 0.37645448;
            let imageHeight = -1;
            let renderTextBlockHeight = imageHeight => {
                for (let i = 0; i < main.textBlock.length; i++) {
                    main.textBlock[i].style.height = imageHeight + 'px';
                }
            }

            // Renders Text Block height on page load.
            renderTextBlockHeight(main.imageBlock[0].offsetHeight);

            // Rerenders Text Block height during window resize.
            $(window).on('resize', () => {
                imageHeight = main.imageBlock[0].offsetHeight;

                if (imageHeight === -1) {
                    return;
                }

                renderTextBlockHeight(imageHeight);
            });
        }
    };

    $(document).ready(() => {
        main.init();
    });
})();
