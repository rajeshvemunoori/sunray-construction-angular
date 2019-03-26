import { UrlSlug } from './url-slug';
import { MimeType } from './mime-type';
export interface iHtmlVideoTagAttributes {
    src: UrlSlug | iHtmlSourceTagAttributes[];
    controls?: boolean;
    autoplay?: boolean;
    height?: string;
    width?: string;
}
export interface iHtmlSourceTagAttributes {
    src: UrlSlug;
    type: MimeType;
}
export interface iHtmlImageTagAttributes {
    src: UrlSlug;
    alt?: string;
    height?: string | number;
    width?: string | number;
    srcset?: any;
}
export declare type HtmlMediaTagAttributes = iHtmlImageTagAttributes | iHtmlVideoTagAttributes;
