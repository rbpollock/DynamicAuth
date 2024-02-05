export declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    MUTE = 99
}
type Message = string | Error | unknown;
export declare class Logger {
    private name;
    private level;
    constructor(name: string | string[], level?: LogLevel);
    private getNameArray;
    createLogger(name: string | string[], level?: LogLevel): Logger;
    get logLevel(): string;
    setLogLevel(level: LogLevel | keyof typeof LogLevel): void;
    private formatMessage;
    log(level: LogLevel, message: Message, ...args: any[]): void;
    debug(message: Message, ...args: any[]): void;
    info(message: Message, ...args: any[]): void;
    warn(message: Message, ...args: any[]): void;
    error(message: Message, ...args: any[]): void;
}
export {};
