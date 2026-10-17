
const button = document.getElementById("buzzer");
const sound = document.getElementById("buzzerSound");

button.addEventListener("click", function () {
    // Play custom buzzer sound
    sound.currentTime = 0;
    sound.play().catch(error => {
        console.log("Audio error:", error);
    });

    // Vibrate phone
    if ("vibrate" in navigator) {
        navigator.vibrate([300, 100, 300]);
    } else {
        console.log("Vibration is not supported.");
    }
});
