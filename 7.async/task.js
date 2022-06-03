class AlarmClock {
  constructor () {
    this.alarmCollection = [];
    this.timerId = null;
  };

  addClock(date, func, id) {
    if (id === undefined) {
      throw new Error("error text")
    };
    
    this.alarmCollection.some(clock => clock.id === id); 
    console.error("error text");
    this.alarmCollection.push({id, date, func});
  };
  

  removeClock(id) {
    let initialLength = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
    let finalLength = this.alarmCollection.length;
    return finalLength < initialLength;
  };

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"});
  };

  start() {
    let checkClock = (clock) => {
      if (clock.date === this.getCurrentFormattedTime) {
        return clock.func();
      };
    };

    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(clock => checkClock(clock));
      });
    }; 
  };

  stop() {
    if (this.timerId != null) {
      clearInterval(this.timerId);
      this.timerId = null;
    };
  };

  printAlarms() {
    this.alarmCollection.forEach(clock => console.log(clock.id + ': ' + clock.date));
  };

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  };
};

let PhoneAlarmClock = new AlarmClock();
PhoneAlarmClock.addClock('11:10', () => console.log ('Доброе утро!'), 1);
PhoneAlarmClock.addClock('11:11', () => console.log ('Уже менее доброе утро!'), 2);
PhoneAlarmClock.removeClock(2);
PhoneAlarmClock.addClock('11:13', () => console.log ('Совсем недоброе утро!'), 3);
PhoneAlarmClock.start();
PhoneAlarmClock.stop();
PhoneAlarmClock.printAlarms();
