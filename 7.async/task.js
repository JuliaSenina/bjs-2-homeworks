class AlarmClock {
  constructor (alarmCollection, timerId) {
    this.alarmCollection = [alarmCollection];
    this.timerId = timerId;
  };

  addClock(date, func, id) {
    if (id === undefined) {
      throw new Error("error text")
    };
    
    for (let i = 0; i < this.alarmCollection.length; i++) {
        if (this.alarmCollection[i].id === id) {
          console.error("error text");
        };
    };
  
    return this.alarmCollection.push({id, date, func});
  };
  

  removeClock(id) {
    alarmCollection.filter(clock => clock.id === id);
  }

  getCurrentFormattedTime() {
    new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"});
  };

  start() {
    function checkClock(clock) {
      if (clock.date === this.getCurrentFormattedTime) {
        return clock.func();
      }
    }

    if (this.timerId === null) {

    }  
  }

  stop() {
    if (this.timerId != null) {
      function clearInterval() {

      }     
    }
  }

  printAlarms() {
    return this.alarmCollection.forEach(clock => console.log(clock.id + ': ' + clock.date));
  }

  clearAlarms() {
    this.stop();
    return this.alarmCollection.slice(0, (alarmCollection.length + 1));
  }
}