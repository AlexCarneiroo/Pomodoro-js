var timerInstance = new easytimer.Timer();
console.log(timerInstance)






/* const buttonStart = document.getElementById("start");
let pomodoro;
let pausa;
let endTime;

function startPomodoro() {
  const now = new Date().getTime();
  endTime = now + 0 * 60 * 1000;
  updateTimerDisplay();
  pomodoro = setInterval(updateTimerDisplay);
}

const iniciaPausa = () => {
  const now = new Date().getTime();
  const timeLeft = endTime - now;

  if (timeLeft <= 0) {
    clearInterval(pausa);
    document.getElementById("pomodoro").innerHTML = "Pomodoro concluído!";
    updateTimerDisplay();
  } else {
    const minutes = Math.floor(timeLeft / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const timerDisplay = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    document.getElementById("pausa").innerHTML = timerDisplay;
  }
};

function updateTimerDisplay() {
  const now = new Date().getTime();
  const timeLeft = endTime - now;

  if (timeLeft <= 0) {
    clearInterval(pomodoro);
    document.getElementById("pomodoro").innerHTML = "Pomodoro concluído!";
    iniciaPausa();
  } else {
    const minutes = Math.floor(timeLeft / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const timerDisplay = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    document.getElementById("pomodoro").innerHTML = timerDisplay;
  }
}

buttonStart.addEventListener("click", startPomodoro); */
