import { HtmlMediaTagAttributes } from '@ceo/shared';
import { WordpressEntity } from './wordpress.entity';
export declare class AttachmentEntity extends WordpressEntity {
    static defaultMediaType: string;
    mimeType: string;
    mediaDetails: any;
    altText: string;
    sourceUrl: string;
    readonly htmlTagAttributes: HtmlMediaTagAttributes;
    readonly htmlMediaType: string;
    private imageTagAttributes;
    private videoTagAttributes;
}
