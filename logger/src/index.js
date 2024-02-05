/* eslint-disable @typescript-eslint/no-explicit-any, no-console */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
    LogLevel[LogLevel["MUTE"] = 99] = "MUTE";
})(LogLevel || (LogLevel = {}));
class Logger {
    constructor(name, level) {
        this.name = name;
        if (level === undefined && process.env['NODE_ENV'] !== 'production') {
            this.level = LogLevel.DEBUG;
        }
        else if (level === undefined) {
            this.level = LogLevel.WARN;
        }
        else {
            this.level = level;
        }
    }
    getNameArray(name) {
        return Array.isArray(name) ? name : [name];
    }
    createLogger(name, level) {
        return new Logger([...this.getNameArray(this.name), ...this.getNameArray(name)], level !== null && level !== void 0 ? level : this.level);
    }
    get logLevel() {
        return LogLevel[this.level];
    }
    setLogLevel(level) {
        if (level in LogLevel && typeof level === 'string') {
            this.level = LogLevel[level];
        }
        else if (level in LogLevel && typeof level === 'number') {
            this.level = level;
        }
        else {
            throw new Error(`Invalid log level: ${level}`);
        }
    }
    formatMessage(level, message) {
        if (message instanceof Error) {
            message = message.stack;
        }
        else if (
        // Handle Error-Like Objects
        message instanceof Object &&
            Object.prototype.hasOwnProperty.call(message, 'stack')) {
            message = message.stack;
        }
        else if (message instanceof Object) {
            message = JSON.stringify(message);
        }
        const names = (Array.isArray(this.name) ? this.name : [this.name]).map((name) => `[${name}]`);
        return `${names.join('')} [${LogLevel[level]}]: ${message}`;
    }
    log(level, message, ...args) {
        if (level < this.level || level === LogLevel.MUTE) {
            return;
        }
        const fmtMsg = this.formatMessage(level, message);
        switch (level) {
            case LogLevel.WARN:
                console.warn(fmtMsg, ...args);
                break;
            case LogLevel.ERROR:
                console.error(fmtMsg, ...args);
                break;
            default:
                console.log(fmtMsg, ...args);
        }
    }
    debug(message, ...args) {
        this.log(LogLevel.DEBUG, message, ...args);
    }
    info(message, ...args) {
        this.log(LogLevel.INFO, message, ...args);
    }
    warn(message, ...args) {
        this.log(LogLevel.WARN, message, ...args);
    }
    error(message, ...args) {
        this.log(LogLevel.ERROR, message, ...args);
    }
}

export { LogLevel, Logger };
