import { JsonApiEntity, iEntity, iDataService } from '@ceo/entity';
export declare class WordpressEntity extends JsonApiEntity {
    static _sliceName: string;
    feature: 'cms';
    protected _renderedTitle: string;
    protected _renderedContent: string;
    protected _featuredMediaUrl: string;
    constructor(init?: Partial<iEntity>, dataService?: iDataService);
    readonly featuredMediaUrl: string;
    attachment$(attachmentName: string): import("rxjs").Observable<any>;
    private getFeaturedMediaUrl;
    private createRenderedAttributeGetters;
    private getAttributesWithRenderedFormat;
}
