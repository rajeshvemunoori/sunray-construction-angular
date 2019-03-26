import { Angulartics2 } from 'angulartics2';
import { Angulartics2Segment } from 'angulartics2/segment';
export interface iAnalyticsProperties {
    category?: string;
    label?: string;
    value?: number;
}
export interface iAnalytics {
    track(action: string, properties: iAnalyticsProperties): void;
}
/**
 * Wrapper for Angulartics2
 */
export declare class AnalyticsService implements iAnalytics {
    private angulartics2;
    private segment;
    constructor(angulartics2: Angulartics2, segment: Angulartics2Segment);
    /**
     * Track actions, events, etc.
     **/
    track(action: string, properties: iAnalyticsProperties): void;
    /**
     * Called automatically by default with Angular 2 Routing
     * However, that can be turned off and this could be used manually
     **/
    pageTrack(path: string, location: any): void;
    /**
     * Identify authenticated users
     **/
    identify(properties: any): void;
    /**
     * Control whether analytics are tracked
     * true: dev mode on, therefore do not track anything
     * false: dev mode off, track everything
     **/
    devMode(enable?: boolean): boolean;
}
/**
 * Base class
 * Standardizes tracking actions and categorization
 */
export declare class Analytics implements iAnalytics {
    analytics: AnalyticsService;
    category: string;
    constructor(analytics: AnalyticsService);
    /**
     * Track actions, events, etc.
     **/
    track(action: string, properties: iAnalyticsProperties): void;
}
