export interface IStorage {
    setItem(key: StorageKey, value: any): void;
    getItem(key: StorageKey): any;
    removeItem(key: StorageKey): void;
}
export declare enum StorageKey {
    USERNAME = 0
}
