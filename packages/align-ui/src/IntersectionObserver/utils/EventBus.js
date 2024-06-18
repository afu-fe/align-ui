class EventBus {
    constructor() {
        this.events = {};
    }

    // 注册事件监听器
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    // 触发事件
    emit(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => {
                callback(...args);
            });
        }
    }

    // 移除事件监听器
    off(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
        }
    }
}

// 创建一个EventBus实例
const eventBus = new EventBus();

// 导出以便在其他文件中使用
export default eventBus;
