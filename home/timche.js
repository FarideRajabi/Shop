{
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 10;
  const ALERT_THRESHOLD = 5;

  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };

  const TIME_LIMIT = 50000;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;

  document.getElementById("timer").innerHTML = `
<div class="base-timer">
      <path
        id="base-timer-path-remaining"
      ></path>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
      timeLeft
  )}</span>
</div>
`;

  startTimer();

  function onTimesUp() {
    clearInterval(timerInterval);
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML = formatTime(
          timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }

  function formatTime(time) {

    const hors = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    let seconds = ((time % 3600) % 60);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${hors}:${minutes}:${seconds}`;

  }

  function setRemainingPathColor(timeLeft) {
    const {alert, warning} = COLOR_CODES;
    if (timeLeft <= warning.threshold) {

      document
          .getElementById("base-timer-path-remaining")
          .classList.add(warning.color);
    }
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
  }
}

var countCorp = 0;
function buy(nameCorp, priceCorp){

  countCorp++;
  document.getElementById("shopping-cart").innerHTML = countCorp;
  priceCorp(nameCorp, priceCorp,countCorp)
}

function priceCorp(nameCorp, priceCorp,countCorp){
  priceCorp = priceCorp * countCorp;
  document.getElementById("price").innerHTML = priceCorp;
}