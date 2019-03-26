/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
export class EntityCollection {
    /**
     * @param {?=} entities
     */
    constructor(entities = []) {
        this.entities = entities;
        this.length = entities.length;
    }
    /**
     * @return {?}
     */
    none() {
        return this.buildCollection([]);
    }
    /**
     * @param {?} attributes
     * @return {?}
     */
    sort(attributes) {
        attributes = _.flatten([attributes]);
        /** @type {?} */
        let entities = _.sortBy(this.entities, attributes);
        return this.buildCollection(entities);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    filter(...args) {
        // @ts-ignore:
        /** @type {?} */
        let entities = this.entities.filter(...args);
        return this.buildCollection(entities);
    }
    /**
     * @param {?} methodName
     * @param {?} attribute
     * @return {?}
     */
    invokeFilter(methodName, attribute) {
        /** @type {?} */
        let filterByMethod = (entity) => {
            if (entity[methodName]) {
                return entity[methodName](attribute);
            }
            else {
                return false;
            }
        }
        //let filterPartial = _.partialRight(filterByMethod, ...args)
        ;
        //let filterPartial = _.partialRight(filterByMethod, ...args)
        /** @type {?} */
        let entities = _.filter(this.entities, filterByMethod);
        return this.buildCollection(entities);
    }
    // TODO: deprecate this method
    /**
     * @param {?} methodName
     * @param {?} attribute
     * @return {?}
     */
    filterByInvoke(methodName, attribute) {
        return this.invokeFilter(methodName, attribute);
    }
    /**
     * @param {?} filters
     * @return {?}
     */
    filterByAttrs(filters) {
        /** @type {?} */
        let runFilter = (entityCollection, filter, attr) => {
            return entityCollection.filterByAttr(attr, filter);
        };
        /** @type {?} */
        let value = _.reduce(filters, runFilter, this);
        return value;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    find(id) {
        /** @type {?} */
        let findEntity = (entity) => {
            /** @type {?} */
            var defaults = ["id"];
            /** @type {?} */
            var idAttributes = _.get(entity.constructor, 'config.primaryKeys', defaults);
            /** @type {?} */
            let hasId = (attr) => {
                return entity[attr] == id;
            };
            return !_.isNil(_.find(idAttributes, hasId));
        };
        return _.find(this.entities, findEntity);
    }
    /**
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    findByAttr(attr, value) {
        /**
         * @param {?} entity
         * @return {?}
         */
        function findEntity(entity) {
            return entity[attr] == value;
        }
        return _.find(this.entities, findEntity);
    }
    /**
     * @param {?} mapFn
     * @return {?}
     */
    map(mapFn) {
        return _.map(this.entities, mapFn);
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    slice(...args) {
        /** @type {?} */
        let entities = this.entities.slice(...args);
        return this.buildCollection(entities);
    }
    /**
     * @param {?} conditions
     * @return {?}
     */
    where(conditions) {
        /** @type {?} */
        var filterByCondition = (entity, value, key) => {
            // When the entity does not have the attribute at all
            if (!_.has(entity, key)) {
                return false;
            }
            /** @type {?} */
            let entityValue = entity[key]
            // Case 1: the attribute in the entity is an array
            ;
            // Case 1: the attribute in the entity is an array
            if (entityValue instanceof Array) {
                return _.includes(_.map(entityValue, _.toString), _.toString(value));
            }
            // Case 2: the condition is an array
            if (value instanceof Array) {
                return _.includes(_.map(value, _.toString), _.toString(entityValue));
            }
            return _.toString(entityValue) == _.toString(value);
        };
        /** @type {?} */
        var filterEntity = (entity) => {
            return _.every(conditions, _.partial(filterByCondition, entity));
        };
        /** @type {?} */
        let entities = _.filter(this.entities, filterEntity);
        return this.buildCollection(entities);
    }
    /**
     * @param {?} conditions
     * @return {?}
     */
    stringSearch(conditions) {
        /** @type {?} */
        let runFilter = (entityCollection, searchTerm, attr) => {
            return entityCollection.stringSearchByAttr(attr, searchTerm);
        };
        return _.reduce(conditions, runFilter, this);
    }
    /**
     * @param {?} conditions
     * @return {?}
     */
    search(conditions) {
        /** @type {?} */
        var filterByCondition = (entity, value, key) => {
            /** @type {?} */
            let entityValue = entity.attributes[key];
            if (value instanceof Array) {
                return _.includes(value, entityValue);
            }
            else {
                return _.includes(entityValue, value);
            }
        };
        /** @type {?} */
        var filterEntity = (entity) => {
            return _.every(conditions, _.partial(filterByCondition, entity));
        };
        /** @type {?} */
        let entities = _.filter(this.entities, filterEntity);
        return this.buildCollection(entities);
    }
    /**
     * @param {?} attr
     * @param {?} searchTerm
     * @return {?}
     */
    stringSearchByAttr(attr, searchTerm) {
        /** @type {?} */
        let attrFilter = (entity) => {
            if (!searchTerm) {
                return true;
            }
            /** @type {?} */
            let entityValue = entity[attr];
            /** @type {?} */
            let entityWildcardValue = _.lowerCase(entityValue);
            /** @type {?} */
            let searchTermWildcardValue = _.lowerCase(searchTerm);
            return _.includes(entityWildcardValue, searchTermWildcardValue);
        };
        return this.filter(attrFilter);
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return _.isEmpty(this.entities);
    }
    /**
     * @return {?}
     */
    isNotEmpty() {
        return !this.isEmpty();
    }
    /**
     * @return {?}
     */
    hasEntities() {
        return this.isNotEmpty();
    }
    /**
     * @private
     * @param {?} attr
     * @param {?} filter
     * @return {?}
     */
    filterByAttr(attr, filter) {
        /** @type {?} */
        let attrFilter = (entity) => {
            /** @type {?} */
            let value = entity.attributes[attr];
            return filter(value);
        };
        return this.filter(attrFilter);
    }
    /**
     * @private
     * @param {?} entities
     * @return {?}
     */
    buildCollection(entities) {
        /** @type {?} */
        let collectionType = this.constructor;
        return new collectionType(entities);
    }
    // Create an iterator for EntityTypeCollection
    // Allows us to use the collections in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    [Symbol.iterator]() {
        /** @type {?} */
        let current = 0;
        /** @type {?} */
        let entities = this.entities;
        return {
            next: function () {
                /** @type {?} */
                let noEntities = _.isEmpty(entities);
                /** @type {?} */
                let value = noEntities ? null : entities[current++];
                /** @type {?} */
                let done = noEntities ? true : current > entities.length;
                return {
                    value: value,
                    done: done
                };
            }
        };
    }
}
if (false) {
    /** @type {?} */
    EntityCollection.prototype.length;
    /** @type {?} */
    EntityCollection.prototype.entities;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvY2xhc3Nlcy9lbnRpdHkvZW50aXR5LmNvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBVzNCLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFHM0IsWUFDUyxXQUFzQixFQUFFO1FBQXhCLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBRS9CLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQTtJQUMvQixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNqQyxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxVQUE2QjtRQUNoQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7O1lBRWhDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN2QyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxHQUFHLElBQUk7OztZQUVSLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLFVBQWtCLEVBQUUsU0FBUzs7WUFDcEMsY0FBYyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDOUIsSUFBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxD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QTtZQUNILENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztDQUNGOzs7SUEzTUMsa0NBQXFCOztJQUduQixvQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIEVudGl0eUlkZW50aWZpZXIsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlDb2xsZWN0aW9uLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlDb2xsZWN0aW9uIGltcGxlbWVudHMgaUVudGl0eUNvbGxlY3Rpb24ge1xuICBwdWJsaWMgbGVuZ3RoOiBudW1iZXJcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZW50aXRpZXM6IGlFbnRpdHlbXSA9IFtdXG4gICkge1xuICAgIHRoaXMubGVuZ3RoID0gZW50aXRpZXMubGVuZ3RoXG4gIH1cblxuICBub25lKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkQ29sbGVjdGlvbihbXSlcbiAgfVxuXG4gIHNvcnQoYXR0cmlidXRlczogc3RyaW5nW10gfCBzdHJpbmcpOiBpRW50aXR5Q29sbGVjdGlvbiB7XG4gICAgYXR0cmlidXRlcyA9IF8uZmxhdHRlbihbYXR0cmlidXRlc10pXG5cbiAgICBsZXQgZW50aXRpZXMgPSBfLnNvcnRCeSh0aGlzLmVudGl0aWVzLCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiB0aGlzLmJ1aWxkQ29sbGVjdGlvbihlbnRpdGllcylcbiAgfVxuXG4gIGZpbHRlciguLi5hcmdzKTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIC8vIEB0cy1pZ25vcmU6XG4gICAgbGV0IGVudGl0aWVzID0gdGhpcy5lbnRpdGllcy5maWx0ZXIoLi4uYXJncylcbiAgICByZXR1cm4gdGhpcy5idWlsZENvbGxlY3Rpb24oZW50aXRpZXMpXG4gIH1cblxuICBpbnZva2VGaWx0ZXIobWV0aG9kTmFtZTogc3RyaW5nLCBhdHRyaWJ1dGUpOiBpRW50aXR5Q29sbGVjdGlvbiB7XG4gICAgbGV0IGZpbHRlckJ5TWV0aG9kID0gKGVudGl0eSkgPT4ge1xuICAgICAgaWYoZW50aXR5W21ldGhvZE5hbWVdKSB7XG4gICAgICAgIHJldHVybiBlbnRpdHlbbWV0aG9kTmFtZV0oYXR0cmlidXRlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICAvL2xldCBmaWx0ZXJQYXJ0aWFsID0gXy5wYXJ0aWFsUmlnaHQoZmlsdGVyQnlNZXRob2QsIC4uLmFyZ3MpXG4gICAgbGV0IGVudGl0aWVzID0gXy5maWx0ZXIodGhpcy5lbnRpdGllcywgZmlsdGVyQnlNZXRob2QpXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRDb2xsZWN0aW9uKGVudGl0aWVzKVxuICB9XG5cbiAgLy8gVE9ETzogZGVwcmVjYXRlIHRoaXMgbWV0aG9kXG4gIGZpbHRlckJ5SW52b2tlKG1ldGhvZE5hbWU6IHN0cmluZywgYXR0cmlidXRlKTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmludm9rZUZpbHRlcihtZXRob2ROYW1lLCBhdHRyaWJ1dGUpXG4gIH1cblxuICBmaWx0ZXJCeUF0dHJzKGZpbHRlcnM6IGFueSk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICBsZXQgcnVuRmlsdGVyID0gKGVudGl0eUNvbGxlY3Rpb24sIGZpbHRlciwgYXR0cikgPT4ge1xuICAgICAgcmV0dXJuIGVudGl0eUNvbGxlY3Rpb24uZmlsdGVyQnlBdHRyKGF0dHIsIGZpbHRlcilcbiAgICB9XG4gICAgbGV0IHZhbHVlID0gXy5yZWR1Y2UoZmlsdGVycywgcnVuRmlsdGVyLCB0aGlzKVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZmluZChpZDogRW50aXR5SWRlbnRpZmllcik6IGlFbnRpdHkge1xuICAgIGxldCBmaW5kRW50aXR5ID0gKGVudGl0eSkgPT4ge1xuICAgICAgdmFyIGRlZmF1bHRzID0gW1wiaWRcIl1cbiAgICAgIHZhciBpZEF0dHJpYnV0ZXMgPVxuICAgICAgICBfLmdldChlbnRpdHkuY29uc3RydWN0b3IsICdjb25maWcucHJpbWFyeUtleXMnLCBkZWZhdWx0cylcbiAgICAgIGxldCBoYXNJZCA9IChhdHRyKSA9PiB7XG4gICAgICAgIHJldHVybiBlbnRpdHlbYXR0cl0gPT0gaWRcbiAgICAgIH1cbiAgICAgIHJldHVybiAhIF8uaXNOaWwoXy5maW5kKGlkQXR0cmlidXRlcywgaGFzSWQpKVxuICAgIH1cblxuICAgIHJldHVybiBfLmZpbmQodGhpcy5lbnRpdGllcywgZmluZEVudGl0eSlcbiAgfVxuXG4gIGZpbmRCeUF0dHIoYXR0cjogc3RyaW5nLCB2YWx1ZTogYW55KTogaUVudGl0eSB7XG4gICAgZnVuY3Rpb24gZmluZEVudGl0eShlbnRpdHkpIHtcbiAgICAgIHJldHVybiBlbnRpdHlbYXR0cl0gPT0gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gXy5maW5kKHRoaXMuZW50aXRpZXMsIGZpbmRFbnRpdHkpXG4gIH1cblxuICBtYXAobWFwRm4pOiBhbnlbXSB7XG4gICAgcmV0dXJuIF8ubWFwKHRoaXMuZW50aXRpZXMsIG1hcEZuKVxuICB9XG5cbiAgc2xpY2UoLi4uYXJncyk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICBsZXQgZW50aXRpZXMgPSB0aGlzLmVudGl0aWVzLnNsaWNlKC4uLmFyZ3MpXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRDb2xsZWN0aW9uKGVudGl0aWVzKVxuICB9XG5cbiAgd2hlcmUoY29uZGl0aW9uczogYW55KTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIHZhciBmaWx0ZXJCeUNvbmRpdGlvbiA9IChlbnRpdHksIHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVudGl0eSBkb2VzIG5vdCBoYXZlIHRoZSBhdHRyaWJ1dGUgYXQgYWxsXG4gICAgICBpZighXy5oYXMoZW50aXR5LCBrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBsZXQgZW50aXR5VmFsdWUgPSBlbnRpdHlba2V5XVxuXG4gICAgICAvLyBDYXNlIDE6IHRoZSBhdHRyaWJ1dGUgaW4gdGhlIGVudGl0eSBpcyBhbiBhcnJheVxuICAgICAgaWYoZW50aXR5VmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyhcbiAgICAgICAgICBfLm1hcChlbnRpdHlWYWx1ZSwgXy50b1N0cmluZyksXG4gICAgICAgICAgXy50b1N0cmluZyh2YWx1ZSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvLyBDYXNlIDI6IHRoZSBjb25kaXRpb24gaXMgYW4gYXJyYXlcbiAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXMoXG4gICAgICAgICAgXy5tYXAodmFsdWUsIF8udG9TdHJpbmcpLFxuICAgICAgICAgIF8udG9TdHJpbmcoZW50aXR5VmFsdWUpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF8udG9TdHJpbmcoZW50aXR5VmFsdWUpID09IF8udG9TdHJpbmcodmFsdWUpXG4gICAgfVxuXG4gICAgdmFyIGZpbHRlckVudGl0eSA9IChlbnRpdHkpID0+IHtcbiAgICAgIHJldHVybiBfLmV2ZXJ5KGNvbmRpdGlvbnMsIF8ucGFydGlhbChmaWx0ZXJCeUNvbmRpdGlvbiwgZW50aXR5KSlcbiAgICB9XG5cbiAgICBsZXQgZW50aXRpZXMgPSBfLmZpbHRlcih0aGlzLmVudGl0aWVzLCBmaWx0ZXJFbnRpdHkpXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRDb2xsZWN0aW9uKGVudGl0aWVzKVxuICB9XG5cbiAgc3RyaW5nU2VhcmNoKGNvbmRpdGlvbnM6IGFueSk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICBsZXQgcnVuRmlsdGVyID0gKGVudGl0eUNvbGxlY3Rpb24sIHNlYXJjaFRlcm0sIGF0dHIpID0+IHtcbiAgICAgIHJldHVybiBlbnRpdHlDb2xsZWN0aW9uLnN0cmluZ1NlYXJjaEJ5QXR0cihhdHRyLCBzZWFyY2hUZXJtKVxuICAgIH1cbiAgICByZXR1cm4gXy5yZWR1Y2UoY29uZGl0aW9ucywgcnVuRmlsdGVyLCB0aGlzKVxuICB9XG5cbiAgc2VhcmNoKGNvbmRpdGlvbnM6IGFueSk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICB2YXIgZmlsdGVyQnlDb25kaXRpb24gPSAoZW50aXR5LCB2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBsZXQgZW50aXR5VmFsdWUgPSBlbnRpdHkuYXR0cmlidXRlc1trZXldXG5cbiAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXModmFsdWUsIGVudGl0eVZhbHVlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBfLmluY2x1ZGVzKGVudGl0eVZhbHVlLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZmlsdGVyRW50aXR5ID0gKGVudGl0eSkgPT4ge1xuICAgICAgcmV0dXJuIF8uZXZlcnkoY29uZGl0aW9ucywgXy5wYXJ0aWFsKGZpbHRlckJ5Q29uZGl0aW9uLCBlbnRpdHkpKVxuICAgIH1cblxuICAgIGxldCBlbnRpdGllcyA9IF8uZmlsdGVyKHRoaXMuZW50aXRpZXMsIGZpbHRlckVudGl0eSlcbiAgICByZXR1cm4gdGhpcy5idWlsZENvbGxlY3Rpb24oZW50aXRpZXMpXG4gIH1cblxuICBzdHJpbmdTZWFyY2hCeUF0dHIoYXR0cjogc3RyaW5nLCBzZWFyY2hUZXJtOiBhbnkpOiBpRW50aXR5Q29sbGVjdGlvbiB7XG4gICAgbGV0IGF0dHJGaWx0ZXIgPSAoZW50aXR5KSA9PiB7XG4gICAgICBpZighIHNlYXJjaFRlcm0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgbGV0IGVudGl0eVZhbHVlID0gZW50aXR5W2F0dHJdXG4gICAgICBsZXQgZW50aXR5V2lsZGNhcmRWYWx1ZSA9IF8ubG93ZXJDYXNlKGVudGl0eVZhbHVlKVxuICAgICAgbGV0IHNlYXJjaFRlcm1XaWxkY2FyZFZhbHVlID0gXy5sb3dlckNhc2Uoc2VhcmNoVGVybSlcbiAgICAgIHJldHVybiBfLmluY2x1ZGVzKGVudGl0eVdpbGRjYXJkVmFsdWUsIHNlYXJjaFRlcm1XaWxkY2FyZFZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maWx0ZXIoYXR0ckZpbHRlcilcbiAgfVxuXG4gIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIF8uaXNFbXB0eSh0aGlzLmVudGl0aWVzKVxuICB9XG5cbiAgaXNOb3RFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNFbXB0eSgpXG4gIH1cblxuICBoYXNFbnRpdGllcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc05vdEVtcHR5KClcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyQnlBdHRyKGF0dHI6IHN0cmluZywgZmlsdGVyOiBhbnkpOiBhbnkge1xuICAgIGxldCBhdHRyRmlsdGVyID0gKGVudGl0eSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZW50aXR5LmF0dHJpYnV0ZXNbYXR0cl1cbiAgICAgIHJldHVybiBmaWx0ZXIodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpbHRlcihhdHRyRmlsdGVyKVxuICB9XG5cbiAgcHJpdmF0ZSBidWlsZENvbGxlY3Rpb24oZW50aXRpZXMpIHtcbiAgICBsZXQgY29sbGVjdGlvblR5cGU6IGFueSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICByZXR1cm4gbmV3IGNvbGxlY3Rpb25UeXBlKGVudGl0aWVzKVxuICB9XG5cbiAgLy8gQ3JlYXRlIGFuIGl0ZXJhdG9yIGZvciBFbnRpdHlUeXBlQ29sbGVjdGlvblxuICAvLyBBbGxvd3MgdXMgdG8gdXNlIHRoZSBjb2xsZWN0aW9ucyBpbiBhbmd1bGFyIGRpcmVjdGl2ZXNcbiAgLy8gKGkuZS4gbmdGb3IsIGV0YylcbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgbGV0IGN1cnJlbnQgPSAwXG4gICAgbGV0IGVudGl0aWVzID0gdGhpcy5lbnRpdGllc1xuICAgIHJldHVybiAge1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbm9FbnRpdGllcyA9IF8uaXNFbXB0eShlbnRpdGllcylcbiAgICAgICAgbGV0IHZhbHVlID0gbm9FbnRpdGllcyA/IG51bGwgOiBlbnRpdGllc1tjdXJyZW50KytdXG4gICAgICAgIGxldCBkb25lID0gbm9FbnRpdGllcyA/IHRydWUgOiBjdXJyZW50ID4gZW50aXRpZXMubGVuZ3RoXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IGRvbmVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19