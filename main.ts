basic.forever(function () {
    if (input.lightLevel() > 30) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    }
})
basic.forever(function () {
    if (input.lightLevel() > 30) {
        basic.showString("Egun on")
    }
})
