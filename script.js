window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound")
    const pads = document.querySelectorAll(".keyboard div")

    // sound 
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].play();
        })
    })
})