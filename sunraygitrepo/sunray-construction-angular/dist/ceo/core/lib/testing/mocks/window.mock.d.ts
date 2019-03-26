export declare class WindowMock {
    navigator: any;
    location: any;
    alert(msg: string): void;
    confirm(msg: string): void;
}
export declare class WindowMockFrench extends WindowMock {
    constructor();
}
export declare class WindowMockNoLanguage extends WindowMock {
    constructor();
}
