import { iHtmlVideoTagAttributes, iHtmlSourceTagAttributes } from '../../interfaces/index';
import { BaseComponent } from '../../../../declarables/index';
export declare class HtmlVideoComponent extends BaseComponent {
    tagAttributes: iHtmlVideoTagAttributes;
    readonly videoSources: iHtmlSourceTagAttributes[];
}
