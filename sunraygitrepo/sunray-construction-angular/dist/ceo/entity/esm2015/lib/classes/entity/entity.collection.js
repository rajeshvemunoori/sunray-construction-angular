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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2VudGl0eS9lbnRpdHkuY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUE7QUFXM0IsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUczQixZQUNTLFdBQXNCLEVBQUU7UUFBeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFFL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFBO0lBQy9CLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLFVBQTZCO1FBQ2hDLFVBQVUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTs7WUFFaEMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUM7UUFDbEQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQUcsSUFBSTs7O1lBRVIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN2QyxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsVUFBa0IsRUFBRSxTQUFTOztZQUNwQyxjQUFjLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM5QixJQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDckIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsU0FB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cnZhYmxlIH0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgRW50aXR5SWRlbnRpZmllcixcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbGxlY3Rpb24sXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5cblxuZXhwb3J0IGNsYXNzIEVudGl0eUNvbGxlY3Rpb24gaW1wbGVtZW50cyBpRW50aXR5Q29sbGVjdGlvbiB7XG4gIHB1YmxpYyBsZW5ndGg6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbnRpdGllczogaUVudGl0eVtdID0gW11cbiAgKSB7XG4gICAgdGhpcy5sZW5ndGggPSBlbnRpdGllcy5sZW5ndGhcbiAgfVxuXG4gIG5vbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRDb2xsZWN0aW9uKFtdKVxuICB9XG5cbiAgc29ydChhdHRyaWJ1dGVzOiBzdHJpbmdbXSB8IHN0cmluZyk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICBhdHRyaWJ1dGVzID0gXy5mbGF0dGVuKFthdHRyaWJ1dGVzXSlcblxuICAgIGxldCBlbnRpdGllcyA9IF8uc29ydEJ5KHRoaXMuZW50aXRpZXMsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRDb2xsZWN0aW9uKGVudGl0aWVzKVxuICB9XG5cbiAgZmlsdGVyKC4uLmFyZ3MpOiBpRW50aXR5Q29sbGVjdGlvbiB7XG4gICAgLy8gQHRzLWlnbm9yZTpcbiAgICBsZXQgZW50aXRpZXMgPSB0aGlzLmVudGl0aWVzLmZpbHRlciguLi5hcmdzKVxuICAgIHJldHVybiB0aGlzLmJ1aWxkQ29sbGVjdGlvbihlbnRpdGllcylcbiAgfVxuXG4gIGludm9rZUZpbHRlcihtZXRob2ROYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZSk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICBsZXQgZmlsdGVyQnlNZXRob2QgPSAoZW50aXR5KSA9PiB7XG4gICAgICBpZihlbnRpdHlbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIGVudGl0eVttZXRob2ROYW1lXShhdHRyaWJ1dGUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIC8vbGV0IGZpbHRlclBhcnRpYWwgPSBfLnBhcnRpYWxSaWdodChmaWx0ZXJCeU1ldGhvZCwgLi4uYXJncylcbiAgICBsZXQgZW50aXRpZXMgPSBfLmZpbHRlcih0aGlzLmVudGl0aWVzLCBmaWx0ZXJCeU1ldGhvZClcbiAgICByZXR1cm4gdGhpcy5idWlsZENvbGxlY3Rpb24oZW50aXRpZXMpXG4gIH1cblxuICAvLyBUT0RPOiBkZXByZWNhdGUgdGhpcyBtZXRob2RcbiAgZmlsdGVyQnlJbnZva2UobWV0aG9kTmFtZTogc3RyaW5nLCBhdHRyaWJ1dGUpOiBpRW50aXR5Q29sbGVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuaW52b2tlRmlsdGVyKG1ldGhvZE5hbWUsIGF0dHJpYnV0ZSlcbiAgfVxuXG4gIGZpbHRlckJ5QXR0cnMoZmlsdGVyczogYW55KTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIGxldCBydW5GaWx0ZXIgPSAoZW50aXR5Q29sbGVjdGlvbiwgZmlsdGVyLCBhdHRyKSA9PiB7XG4gICAgICByZXR1cm4gZW50aXR5Q29sbGVjdGlvbi5maWx0ZXJCeUF0dHIoYXR0ciwgZmlsdGVyKVxuICAgIH1cbiAgICBsZXQgdmFsdWUgPSBfLnJlZHVjZShmaWx0ZXJzLCBydW5GaWx0ZXIsIHRoaXMpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBmaW5kKGlkOiBFbnRpdHlJZGVudGlmaWVyKTogaUVudGl0eSB7XG4gICAgbGV0IGZpbmRFbnRpdHkgPSAoZW50aXR5KSA9PiB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSBbXCJpZFwiXVxuICAgICAgdmFyIGlkQXR0cmlidXRlcyA9XG4gICAgICAgIF8uZ2V0KGVudGl0eS5jb25zdHJ1Y3RvciwgJ2NvbmZpZy5wcmltYXJ5S2V5cycsIGRlZmF1bHRzKVxuICAgICAgbGV0IGhhc0lkID0gKGF0dHIpID0+IHtcbiAgICAgICAgcmV0dXJuIGVudGl0eVthdHRyXSA9PSBpZFxuICAgICAgfVxuICAgICAgcmV0dXJuICEgXy5pc05pbChfLmZpbmQoaWRBdHRyaWJ1dGVzLCBoYXNJZCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIF8uZmluZCh0aGlzLmVudGl0aWVzLCBmaW5kRW50aXR5KVxuICB9XG5cbiAgZmluZEJ5QXR0cihhdHRyOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBpRW50aXR5IHtcbiAgICBmdW5jdGlvbiBmaW5kRW50aXR5KGVudGl0eSkge1xuICAgICAgcmV0dXJuIGVudGl0eVthdHRyXSA9PSB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBfLmZpbmQodGhpcy5lbnRpdGllcywgZmluZEVudGl0eSlcbiAgfVxuXG4gIG1hcChtYXBGbik6IGFueVtdIHtcbiAgICByZXR1cm4gXy5tYXAodGhpcy5lbnRpdGllcywgbWFwRm4pXG4gIH1cblxuICBzbGljZSguLi5hcmdzKTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIGxldCBlbnRpdGllcyA9IHRoaXMuZW50aXRpZXMuc2xpY2UoLi4uYXJncylcbiAgICByZXR1cm4gdGhpcy5idWlsZENvbGxlY3Rpb24oZW50aXRpZXMpXG4gIH1cblxuICB3aGVyZShjb25kaXRpb25zOiBhbnkpOiBpRW50aXR5Q29sbGVjdGlvbiB7XG4gICAgdmFyIGZpbHRlckJ5Q29uZGl0aW9uID0gKGVudGl0eSwgdmFsdWUsIGtleSkgPT4ge1xuICAgICAgLy8gV2hlbiB0aGUgZW50aXR5IGRvZXMgbm90IGhhdmUgdGhlIGF0dHJpYnV0ZSBhdCBhbGxcbiAgICAgIGlmKCFfLmhhcyhlbnRpdHksIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGxldCBlbnRpdHlWYWx1ZSA9IGVudGl0eVtrZXldXG5cbiAgICAgIC8vIENhc2UgMTogdGhlIGF0dHJpYnV0ZSBpbiB0aGUgZW50aXR5IGlzIGFuIGFycmF5XG4gICAgICBpZihlbnRpdHlWYWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHJldHVybiBfLmluY2x1ZGVzKFxuICAgICAgICAgIF8ubWFwKGVudGl0eVZhbHVlLCBfLnRvU3RyaW5nKSxcbiAgICAgICAgICBfLnRvU3RyaW5nKHZhbHVlKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8vIENhc2UgMjogdGhlIGNvbmRpdGlvbiBpcyBhbiBhcnJheVxuICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyhcbiAgICAgICAgICBfLm1hcCh2YWx1ZSwgXy50b1N0cmluZyksXG4gICAgICAgICAgXy50b1N0cmluZyhlbnRpdHlWYWx1ZSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gXy50b1N0cmluZyhlbnRpdHlWYWx1ZSkgPT0gXy50b1N0cmluZyh2YWx1ZSlcbiAgICB9XG5cbiAgICB2YXIgZmlsdGVyRW50aXR5ID0gKGVudGl0eSkgPT4ge1xuICAgICAgcmV0dXJuIF8uZXZlcnkoY29uZGl0aW9ucywgXy5wYXJ0aWFsKGZpbHRlckJ5Q29uZGl0aW9uLCBlbnRpdHkpKVxuICAgIH1cblxuICAgIGxldCBlbnRpdGllcyA9IF8uZmlsdGVyKHRoaXMuZW50aXRpZXMsIGZpbHRlckVudGl0eSlcbiAgICByZXR1cm4gdGhpcy5idWlsZENvbGxlY3Rpb24oZW50aXRpZXMpXG4gIH1cblxuICBzdHJpbmdTZWFyY2goY29uZGl0aW9uczogYW55KTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIGxldCBydW5GaWx0ZXIgPSAoZW50aXR5Q29sbGVjdGlvbiwgc2VhcmNoVGVybSwgYXR0cikgPT4ge1xuICAgICAgcmV0dXJuIGVudGl0eUNvbGxlY3Rpb24uc3RyaW5nU2VhcmNoQnlBdHRyKGF0dHIsIHNlYXJjaFRlcm0pXG4gICAgfVxuICAgIHJldHVybiBfLnJlZHVjZShjb25kaXRpb25zLCBydW5GaWx0ZXIsIHRoaXMpXG4gIH1cblxuICBzZWFyY2goY29uZGl0aW9uczogYW55KTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIHZhciBmaWx0ZXJCeUNvbmRpdGlvbiA9IChlbnRpdHksIHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGxldCBlbnRpdHlWYWx1ZSA9IGVudGl0eS5hdHRyaWJ1dGVzW2tleV1cblxuICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyh2YWx1ZSwgZW50aXR5VmFsdWUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXMoZW50aXR5VmFsdWUsIHZhbHVlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBmaWx0ZXJFbnRpdHkgPSAoZW50aXR5KSA9PiB7XG4gICAgICByZXR1cm4gXy5ldmVyeShjb25kaXRpb25zLCBfLnBhcnRpYWwoZmlsdGVyQnlDb25kaXRpb24sIGVudGl0eSkpXG4gICAgfVxuXG4gICAgbGV0IGVudGl0aWVzID0gXy5maWx0ZXIodGhpcy5lbnRpdGllcywgZmlsdGVyRW50aXR5KVxuICAgIHJldHVybiB0aGlzLmJ1aWxkQ29sbGVjdGlvbihlbnRpdGllcylcbiAgfVxuXG4gIHN0cmluZ1NlYXJjaEJ5QXR0cihhdHRyOiBzdHJpbmcsIHNlYXJjaFRlcm06IGFueSk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICBsZXQgYXR0ckZpbHRlciA9IChlbnRpdHkpID0+IHtcbiAgICAgIGlmKCEgc2VhcmNoVGVybSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBsZXQgZW50aXR5VmFsdWUgPSBlbnRpdHlbYXR0cl1cbiAgICAgIGxldCBlbnRpdHlXaWxkY2FyZFZhbHVlID0gXy5sb3dlckNhc2UoZW50aXR5VmFsdWUpXG4gICAgICBsZXQgc2VhcmNoVGVybVdpbGRjYXJkVmFsdWUgPSBfLmxvd2VyQ2FzZShzZWFyY2hUZXJtKVxuICAgICAgcmV0dXJuIF8uaW5jbHVkZXMoZW50aXR5V2lsZGNhcmRWYWx1ZSwgc2VhcmNoVGVybVdpbGRjYXJkVmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpbHRlcihhdHRyRmlsdGVyKVxuICB9XG5cbiAgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gXy5pc0VtcHR5KHRoaXMuZW50aXRpZXMpXG4gIH1cblxuICBwcml2YXRlIGZpbHRlckJ5QXR0cihhdHRyOiBzdHJpbmcsIGZpbHRlcjogYW55KTogYW55IHtcbiAgICBsZXQgYXR0ckZpbHRlciA9IChlbnRpdHkpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGVudGl0eS5hdHRyaWJ1dGVzW2F0dHJdXG4gICAgICByZXR1cm4gZmlsdGVyKHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maWx0ZXIoYXR0ckZpbHRlcilcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRDb2xsZWN0aW9uKGVudGl0aWVzKSB7XG4gICAgbGV0IGNvbGxlY3Rpb25UeXBlOiBhbnkgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgcmV0dXJuIG5ldyBjb2xsZWN0aW9uVHlwZShlbnRpdGllcylcbiAgfVxuXG4gIC8vIENyZWF0ZSBhbiBpdGVyYXRvciBmb3IgRW50aXR5VHlwZUNvbGxlY3Rpb25cbiAgLy8gQWxsb3dzIHVzIHRvIHVzZSB0aGUgY29sbGVjdGlvbnMgaW4gYW5ndWxhciBkaXJlY3RpdmVzXG4gIC8vIChpLmUuIG5nRm9yLCBldGMpXG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIGxldCBjdXJyZW50ID0gMFxuICAgIGxldCBlbnRpdGllcyA9IHRoaXMuZW50aXRpZXNcbiAgICByZXR1cm4gIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IG5vRW50aXRpZXMgPSBfLmlzRW1wdHkoZW50aXRpZXMpXG4gICAgICAgIGxldCB2YWx1ZSA9IG5vRW50aXRpZXMgPyBudWxsIDogZW50aXRpZXNbY3VycmVudCsrXVxuICAgICAgICBsZXQgZG9uZSA9IG5vRW50aXRpZXMgPyB0cnVlIDogY3VycmVudCA+IGVudGl0aWVzLmxlbmd0aFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiBkb25lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==