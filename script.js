
const button = document.getElementById("buzzer");
const sound = document.getElementById("buzzerSound");

button.addEventListener("click", function () {
    sound.currentTime = 0;

    sound.play().catch(function (error) {
        console.error("Sound playback failed:", error);
    });
});
