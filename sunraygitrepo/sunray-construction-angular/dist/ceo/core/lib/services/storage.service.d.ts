import { IStorage, StorageKey } from '../interfaces';
export declare class StorageService implements IStorage {
    setItem(key: StorageKey, value: any): void;
    getItem(key: StorageKey): any;
    removeItem(key: StorageKey): void;
}
