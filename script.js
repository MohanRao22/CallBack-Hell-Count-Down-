var i = 10;
var displayCountDown = document.querySelector(".timer");
setTimeout(() => {
    displayCountDown.innerText = "Count Down Starts";
    setTimeout(() => {
        displayCountDown.innerText = i;
        i--;
        setTimeout(() => {
            displayCountDown.innerText = i;
            i--;
            setTimeout(() => {
                displayCountDown.innerText = i;
                i--;
                setTimeout(() => {
                    displayCountDown.innerText = i;
                    i--;
                    setTimeout(() => {
                        displayCountDown.innerText = i;
                        i--;
                        setTimeout(() => {
                            displayCountDown.innerText = i;
                            i--;
                            setTimeout(() => {
                                displayCountDown.innerText = i;
                                i--;
                                setTimeout(() => {
                                    displayCountDown.innerText = i;
                                    i--;
                                    setTimeout(() => {
                                        displayCountDown.innerText = i;
                                        i--;
                                        setTimeout(() => {
                                            displayCountDown.innerText = i;
                                            i--;
                                            setTimeout(() => {
                                                displayCountDown.innerText = "Here We Go..!";
                                                i--;
                                                setTimeout(() => {
                                                    displayCountDown.innerText =
                                                        "Happy New Year 2022🎈🎈";
                                                    i--;
                                                    displayCountDown.innerHTML += `<iframe src="audio.mp3" allow="autoplay" width="0" height="0" style="visibility:hidden";>
                                                      </iframe> `
                                                        // document.querySelector(".audio").innerHTML = `
                                                        // <iframe src="audio.mp3" allow="autoplay" width="12" height="12" >
                                                        // </iframe> 
                                                        // `;

                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);