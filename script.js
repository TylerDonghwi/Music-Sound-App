window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound")
    const pads = document.querySelectorAll(".keyboard div")
    const visual = document.querySelector(".visual")
    const colors = [
        "red",
        "orangered",
        "orange",
        "yellow",
        "greenyellow",
        "yellowgreen ",
        "green ",
        "cornflowerblue ",
        "blue ",
        "navy ",
        "purple"
    ]


    // sound 
    pads.forEach((pad, i) => {
        pad.addEventListener('click', function() {
            sounds[i].currentTime = 0
            sounds[i].play()
            createEffect(i)
        })
    })

    // Effects
    const createEffect = (i) => {
        const effect = document.createElement("div")
        visual.appendChild(effect)
        effect.style.backgroundColor = colors[i]
        effect.style.animation = 'jump 2s ease'
        effect.addEventListener('animationend', function() {
            visual.removeChild(this);
        })
    }
})