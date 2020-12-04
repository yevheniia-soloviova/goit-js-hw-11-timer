const refs = {
    daysRef: document.querySelector('[data-value="days"]'),
    hoursRef: document.querySelector('[data-value="hours"]'),
    minsRef: document.querySelector('[data-value="mins"]'),
    secsRef: document.querySelector('[data-value="secs"]'),

};

console.log(refs.daysRef);

class Timer {
    constructor({ onTick }) {
        this.onTick = onTick;
    }

    start() {
        const targetDate = new Date('December 1, 2020');


        setInterval(() => {
            const currentDate = Date.now();

            // const currentTime = Date.now();
            const deltaTime = targetDate - currentDate;
            const time = this.getTimeComponents(deltaTime);
            // const { days, hours, mins, secs } = getTimeComponents(deltaTime);
            // console.log(currentTime);
            console.log(deltaTime);
            // console.log(`Days ${days}, ${hours}::${mins}:${secs}`);
            // updateTimerInterface(time);
            this.onTick(time);
        }, 1000);
    };
        pad(value) {
        return String(value).padStart(2, '0');
    };

        getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    };
};

const timer = new Timer({
    onTick: updateTimerInterface
});

timer.start();

function updateTimerInterface({ days, hours, mins, secs }) {
    refs.daysRef.textContent = `${days}`;
    refs.hoursRef.textContent = `${hours}`;
    refs.minsRef.textContent = `${mins}`;
    refs.secsRef.textContent = `${secs}`;
};