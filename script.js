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

    function createBall(i) {
        const effect = document.createElement("div")
        visual.appendChild(effect)
        effect.style.backgroundColor = colors[i]
        return effect;
    }

    // Effects
    const createEffect = (i) => {

        const effect = createBall(i)

        switch (i) {
            case 1:
                // high auuugh
                effect.style.animation = 'jumpHigh 3s ease'
                break
            case 2:
                // low auuugh
                effect.style.animation = 'jumpLow 3s ease'
                break
            case 3:
                // fast auuugh
                effect.style.animation = 'jump 1.5s ease'
                break
            case 4:
                // slow auuuugh
                effect.style.animation = 'jump 5s ease'
                break
            case 5:
                // echo, create multiple balls
                const effect2 = createBall(5);
                const effect3 = createBall(5);
                const effect4 = createBall(5);

                // put animation for these balls
                effect.style.animation = 'jump 2.1s ease'
                effect2.style.animation = 'jump 2.7s ease'
                effect3.style.animation = 'jump 3.3s ease'
                effect4.style.animation = 'jump 3.9s ease'

                // remove divs after animation ends
                effect2.addEventListener('animationend', function() {
                    visual.removeChild(this);
                })
                effect3.addEventListener('animationend', function() {
                    visual.removeChild(this);
                })
                effect4.addEventListener('animationend', function() {
                    visual.removeChild(this);
                })
                break
            case 6:
                // deep fried
                effect.style.animation = 'jumpDeepFried 3s ease'
                break
            case 7:
                // loud auuugh
                effect.style.animation = 'jumpLoud 3s ease'
                break
            case 8:
                // reverse auuuugh
                effect.style.animation = 'jumpReverse 3s ease'
                break
            case 9:
                // blessed auuuugh
                effect.style.animation = 'jumpBlessed 3s ease'
                break
            case 10:
                // cursed auuuugh
                effect.style.animation = 'jump 3s ease'

                // background change
                const app = document.querySelector('.app')
                app.style.animation = "background 3s ease"

                // removed the css from app
                app.addEventListener('animationend', function() {
                    app.style.animation = null;
                })
                break
            default:
                // default animation
                effect.style.animation = 'jump 3s ease'
        }

        effect.addEventListener('animationend', function() {
            visual.removeChild(this);
        })
    }
})