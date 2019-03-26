/**
 *
 * taken from:
 * https://github.com/DylanPiercey/q-flat
 *
 * @description
 * Creates a querystring style object from a nested one.
 *
 * @example
 * var result = flatten({ a: { b: 1 }, c: { d: 1 } })
 * result //-> { "a[b]": 1, "c[d]": 2 }
 *
 * @param obj The object to flatten.
 */
export declare function jsonToQueryParamsObject(json: any): any;
