import { __awaiter } from '../../_virtual/_tslib.js';

/* eslint-disable  */
class IndexedDBKVStore {
    constructor(_prefix) {
        this._prefix = _prefix;
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const tx = (yield this.getDB()).transaction([this.prefix()], 'readonly');
            const store = tx.objectStore(this.prefix());
            return new Promise((resolve, reject) => {
                const request = store.get(key);
                request.onerror = (event) => {
                    event.stopPropagation();
                    reject(event.target);
                };
                request.onsuccess = () => {
                    if (!request.result) {
                        resolve(undefined);
                    }
                    else {
                        resolve(request.result.data);
                    }
                };
            });
        });
    }
    set(key, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data === null) {
                const tx = (yield this.getDB()).transaction([this.prefix()], 'readwrite');
                const store = tx.objectStore(this.prefix());
                return new Promise((resolve, reject) => {
                    const request = store.delete(key);
                    request.onerror = (event) => {
                        event.stopPropagation();
                        reject(event.target);
                    };
                    request.onsuccess = () => {
                        resolve();
                    };
                });
            }
            else {
                const tx = (yield this.getDB()).transaction([this.prefix()], 'readwrite');
                const store = tx.objectStore(this.prefix());
                return new Promise((resolve, reject) => {
                    const request = store.put({
                        key,
                        data,
                    });
                    request.onerror = (event) => {
                        event.stopPropagation();
                        reject(event.target);
                    };
                    request.onsuccess = () => {
                        resolve();
                    };
                });
            }
        });
    }
    prefix() {
        return this._prefix;
    }
    getDB() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.cachedDB) {
                return this.cachedDB;
            }
            return new Promise((resolve, reject) => {
                const request = window.indexedDB.open(this.prefix());
                request.onerror = (event) => {
                    event.stopPropagation();
                    reject(event.target);
                };
                request.onupgradeneeded = (event) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const db = event.target.result;
                    db.createObjectStore(this.prefix(), { keyPath: 'key' });
                };
                request.onsuccess = () => {
                    this.cachedDB = request.result;
                    resolve(request.result);
                };
            });
        });
    }
}

export { IndexedDBKVStore };
