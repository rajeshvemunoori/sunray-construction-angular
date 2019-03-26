/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { pluralList } from './plural-list';
/**
 * @param {?} value
 * @return {?}
 */
export function pluralize(value) {
    /** @type {?} */
    var pluralWord = pluralList.filter(function (item) { return item.name === value; });
    if (pluralWord.length > 0) {
        return pluralWord[0].value;
    }
    return value.toString().concat('s');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1cmFsaXplLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3N0cmluZy11dGlscy9wbHVyYWxpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7Ozs7O0FBRTFDLE1BQU0sVUFBVSxTQUFTLENBQ3ZCLEtBQWE7O1FBRVQsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBbkIsQ0FBbUIsQ0FBQztJQUMvRCxJQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1FBQ3ZCLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtLQUMzQjtJQUNELE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGx1cmFsTGlzdCB9IGZyb20gJy4vcGx1cmFsLWxpc3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBwbHVyYWxpemUoXG4gIHZhbHVlOiBzdHJpbmdcbik6IHN0cmluZyB7XG4gIGxldCBwbHVyYWxXb3JkID0gcGx1cmFsTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUgPT09IHZhbHVlKVxuICBpZihwbHVyYWxXb3JkLmxlbmd0aCA+IDApe1xuICAgIHJldHVybiBwbHVyYWxXb3JkWzBdLnZhbHVlXG4gIH1cbiAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkuY29uY2F0KCdzJyk7XG59XG4iXX0=