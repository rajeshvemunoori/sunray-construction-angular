export interface EnvConfig {
    API?: string;
    ENV?: string;
    WORDPRESS_API_URL?: string;
    SUNRAY_API_URL?: string;
}
export interface iPlatforms {
    WEB: string;
    MOBILE_NATIVE: string;
    MOBILE_HYBRID: string;
    DESKTOP: string;
}
export interface iConfig {
}
export declare class Config implements iConfig {
    PageClass: any;
    static DEBUG: {
        LEVEL_1: boolean;
        LEVEL_2: boolean;
        LEVEL_3: boolean;
        LEVEL_4: boolean;
    };
    static PLATFORMS: iPlatforms;
    static PLATFORM_TARGET: string;
    static IS_WEB(): boolean;
    static IS_MOBILE_NATIVE(): boolean;
    static IS_MOBILE_HYBRID(): boolean;
    static IS_DESKTOP(): boolean;
    static ENVIRONMENT(): EnvConfig;
    static IS_DEBUG_MODE(): boolean;
    static RESET(): void;
}
