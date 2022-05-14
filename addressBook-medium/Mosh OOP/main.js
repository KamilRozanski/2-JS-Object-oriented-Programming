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

const _stack = new WeakMap();
class Stack {
    constructor() {
        _stack.set(this, [])
    }

    push(value) {
        _stack.get(this).push(value)
    }
    pop() {
        if (_stack.get(this).length === 0) {
            throw new Error("Stack is empty")
        }
        return _stack.get(this).pop()
    }

    peek() {
        if (_stack.get(this).length === 0) {
            throw new Error("Stack is empty")
        }
        return _stack.get(this)[_stack.get(this) - 1]
    }

    get count() {
        return _stack.get(this).length, _stack.get(this)
    }
}


const stack = new Stack()
stack.push("a")
stack.push("b")
stack.push("c")
stack.pop()
// stack.pop()

stack.peek()
stack.count