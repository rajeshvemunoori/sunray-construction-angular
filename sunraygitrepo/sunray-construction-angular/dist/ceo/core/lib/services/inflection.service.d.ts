export declare type InflectionType = string | any[];
export declare class InflectionService {
    inflect(value: string, inflections: InflectionType[]): string;
    camelCase(value: string): string;
    capitalize(value: string): string;
    classify(value: string): string;
    kebabCase(value: string): string;
    pascalCase(value: string): string;
    pluralize(value: string): string;
    removePrefix(value: string, prefix?: string): string;
    singularize(value: string): string;
    slugify(value: string): string;
    words(value: string): string;
    private applyInflection;
}
