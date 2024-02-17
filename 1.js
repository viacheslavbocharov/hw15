//Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:

let ladder = {
    step: 0,
    up: function () {
        this.step++; //? не совсем понимаю зачем мы используем this, ведь можно сделать запись ladder.step++? Или это делается для того чтобы этот метод можно юыло применнить к другим объектам через bind/call/apply?
        //ladder.step++; ? ladder.step++; это одно и тоже что и this.step++;?
        return this; //? Я правильно понимаю, что это происходит возврат объекта, посути стартовая площадка котрая обоадает доступом ко всем методам и на ее базе вызывается следующий метод из теудего объекта
    },
    down: function () {
        this.step--;
        return this;
        //return ladder; ? так тоже работает. Нужно использовать this чтобы иметь возможность применить к другим объектам?
    },
    showStep: function () {
        alert(this.step);
        return this
    }
};



ladder.up().up().down().showStep().up().up(); // 1 на alert
console.log(ladder.step)//3 на console