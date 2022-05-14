// stopWatch

const _privat = new WeakMap()
class StopWatch {
    constructor(privat) {
        _privat.set(this, privat)
        this.startTime;
        this.endTime;
        this.running = false
        this.durationTime = 0
    }
    start() {
        if (this.running) {
            throw new Error("stop watch already runing")
        }
        console.log(_privat.get(this))
        this.running = true
        this.startTime = new Date()
    }
    stop() {
        if (!this.running) {
            throw new Error("stop watch already stoped")
        }
        this.running = false
        this.endTime = new Date()
        const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000
        this.durationTime += seconds
    }

    duration() {
        return this.durationTime
    }

    reset() {
        this.startTime = null
        this.endTime = null
        this.running = false
    }

}

// const sw = new StopWatch(1)
// console.log(sw.start())
// console.log(sw.stop())
// console.log(sw.duration())
// console.log(sw)

//Stack

