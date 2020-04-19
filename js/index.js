const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');

const targetDate = new Date(2020, 4, 9, 12, 0, 0, 0);

const timer = () => {
  const currentTime = Date.now();
  const delta = targetDate.getTime() - currentTime;
  updateTime(delta);

  setInterval(() => {
    const currentTime = Date.now();
    const delta = targetDate.getTime() - currentTime;
    updateTime(delta);
  }, 1000);

  function updateTime(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    daysRef.textContent = `${days}`;
    hoursRef.textContent = `${hours}`;
    minsRef.textContent = `${mins}`;
    secsRef.textContent = `${secs}`;
  }

  function pad(value) {
    return String(value).padStart(2, '0');
  }
};

timer();
