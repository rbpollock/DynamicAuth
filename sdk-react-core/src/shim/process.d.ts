declare function nextTick(fun: any): void;
declare function noop(): void;
declare function binding(name: any): void;
declare function cwd(): string;
declare function chdir(dir: any): void;
declare function umask(): number;
declare function hrtime(previousTimestamp: any): number[];
declare function uptime(): number;
export declare var process: {
    nextTick: typeof nextTick;
    title: string;
    browser: boolean;
    env: {};
    argv: any[];
    version: string;
    versions: {};
    on: typeof noop;
    addListener: typeof noop;
    once: typeof noop;
    off: typeof noop;
    removeListener: typeof noop;
    removeAllListeners: typeof noop;
    emit: typeof noop;
    binding: typeof binding;
    cwd: typeof cwd;
    chdir: typeof chdir;
    umask: typeof umask;
    hrtime: typeof hrtime;
    platform: string;
    release: {};
    config: {};
    uptime: typeof uptime;
};
export {};