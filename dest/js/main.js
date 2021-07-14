/*
 We have set a jQuery wrapper for you to write any JS code -- however 
 you are free to use any framework or library you want. Hint: to accomplish 
 the responsive requriement, a bit of JS coding might be needed.
*/

(() => {
    let main = {
        init: () => {
            main.start();
        },
        start: () => {
            let textBlockRatio = 0.37645448;
            console.log("Test");
        }
    };

    $(document).ready(() => {
        main.init();
    });
})();
