/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
var EntityCollection = /** @class */ (function () {
    function EntityCollection(entities) {
        if (entities === void 0) { entities = []; }
        this.entities = entities;
        this.length = entities.length;
    }
    /**
     * @return {?}
     */
    EntityCollection.prototype.none = /**
     * @return {?}
     */
    function () {
        return this.buildCollection([]);
    };
    /**
     * @param {?} attributes
     * @return {?}
     */
    EntityCollection.prototype.sort = /**
     * @param {?} attributes
     * @return {?}
     */
    function (attributes) {
        attributes = _.flatten([attributes]);
        /** @type {?} */
        var entities = _.sortBy(this.entities, attributes);
        return this.buildCollection(entities);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityCollection.prototype.filter = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        // @ts-ignore:
        /** @type {?} */
        var entities = (_a = this.entities).filter.apply(_a, tslib_1.__spread(args));
        return this.buildCollection(entities);
    };
    /**
     * @param {?} methodName
     * @param {?} attribute
     * @return {?}
     */
    EntityCollection.prototype.invokeFilter = /**
     * @param {?} methodName
     * @param {?} attribute
     * @return {?}
     */
    function (methodName, attribute) {
        /** @type {?} */
        var filterByMethod = function (entity) {
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
        var entities = _.filter(this.entities, filterByMethod);
        return this.buildCollection(entities);
    };
    // TODO: deprecate this method
    // TODO: deprecate this method
    /**
     * @param {?} methodName
     * @param {?} attribute
     * @return {?}
     */
    EntityCollection.prototype.filterByInvoke = 
    // TODO: deprecate this method
    /**
     * @param {?} methodName
     * @param {?} attribute
     * @return {?}
     */
    function (methodName, attribute) {
        return this.invokeFilter(methodName, attribute);
    };
    /**
     * @param {?} filters
     * @return {?}
     */
    EntityCollection.prototype.filterByAttrs = /**
     * @param {?} filters
     * @return {?}
     */
    function (filters) {
        /** @type {?} */
        var runFilter = function (entityCollection, filter, attr) {
            return entityCollection.filterByAttr(attr, filter);
        };
        /** @type {?} */
        var value = _.reduce(filters, runFilter, this);
        return value;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    EntityCollection.prototype.find = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var findEntity = function (entity) {
            /** @type {?} */
            var defaults = ["id"];
            /** @type {?} */
            var idAttributes = _.get(entity.constructor, 'config.primaryKeys', defaults);
            /** @type {?} */
            var hasId = function (attr) {
                return entity[attr] == id;
            };
            return !_.isNil(_.find(idAttributes, hasId));
        };
        return _.find(this.entities, findEntity);
    };
    /**
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    EntityCollection.prototype.findByAttr = /**
     * @param {?} attr
     * @param {?} value
     * @return {?}
     */
    function (attr, value) {
        /**
         * @param {?} entity
         * @return {?}
         */
        function findEntity(entity) {
            return entity[attr] == value;
        }
        return _.find(this.entities, findEntity);
    };
    /**
     * @param {?} mapFn
     * @return {?}
     */
    EntityCollection.prototype.map = /**
     * @param {?} mapFn
     * @return {?}
     */
    function (mapFn) {
        return _.map(this.entities, mapFn);
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    EntityCollection.prototype.slice = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        /** @type {?} */
        var entities = (_a = this.entities).slice.apply(_a, tslib_1.__spread(args));
        return this.buildCollection(entities);
    };
    /**
     * @param {?} conditions
     * @return {?}
     */
    EntityCollection.prototype.where = /**
     * @param {?} conditions
     * @return {?}
     */
    function (conditions) {
        /** @type {?} */
        var filterByCondition = function (entity, value, key) {
            // When the entity does not have the attribute at all
            if (!_.has(entity, key)) {
                return false;
            }
            /** @type {?} */
            var entityValue = entity[key]
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
        var filterEntity = function (entity) {
            return _.every(conditions, _.partial(filterByCondition, entity));
        };
        /** @type {?} */
        var entities = _.filter(this.entities, filterEntity);
        return this.buildCollection(entities);
    };
    /**
     * @param {?} conditions
     * @return {?}
     */
    EntityCollection.prototype.stringSearch = /**
     * @param {?} conditions
     * @return {?}
     */
    function (conditions) {
        /** @type {?} */
        var runFilter = function (entityCollection, searchTerm, attr) {
            return entityCollection.stringSearchByAttr(attr, searchTerm);
        };
        return _.reduce(conditions, runFilter, this);
    };
    /**
     * @param {?} conditions
     * @return {?}
     */
    EntityCollection.prototype.search = /**
     * @param {?} conditions
     * @return {?}
     */
    function (conditions) {
        /** @type {?} */
        var filterByCondition = function (entity, value, key) {
            /** @type {?} */
            var entityValue = entity.attributes[key];
            if (value instanceof Array) {
                return _.includes(value, entityValue);
            }
            else {
                return _.includes(entityValue, value);
            }
        };
        /** @type {?} */
        var filterEntity = function (entity) {
            return _.every(conditions, _.partial(filterByCondition, entity));
        };
        /** @type {?} */
        var entities = _.filter(this.entities, filterEntity);
        return this.buildCollection(entities);
    };
    /**
     * @param {?} attr
     * @param {?} searchTerm
     * @return {?}
     */
    EntityCollection.prototype.stringSearchByAttr = /**
     * @param {?} attr
     * @param {?} searchTerm
     * @return {?}
     */
    function (attr, searchTerm) {
        /** @type {?} */
        var attrFilter = function (entity) {
            if (!searchTerm) {
                return true;
            }
            /** @type {?} */
            var entityValue = entity[attr];
            /** @type {?} */
            var entityWildcardValue = _.lowerCase(entityValue);
            /** @type {?} */
            var searchTermWildcardValue = _.lowerCase(searchTerm);
            return _.includes(entityWildcardValue, searchTermWildcardValue);
        };
        return this.filter(attrFilter);
    };
    /**
     * @return {?}
     */
    EntityCollection.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return _.isEmpty(this.entities);
    };
    /**
     * @private
     * @param {?} attr
     * @param {?} filter
     * @return {?}
     */
    EntityCollection.prototype.filterByAttr = /**
     * @private
     * @param {?} attr
     * @param {?} filter
     * @return {?}
     */
    function (attr, filter) {
        /** @type {?} */
        var attrFilter = function (entity) {
            /** @type {?} */
            var value = entity.attributes[attr];
            return filter(value);
        };
        return this.filter(attrFilter);
    };
    /**
     * @private
     * @param {?} entities
     * @return {?}
     */
    EntityCollection.prototype.buildCollection = /**
     * @private
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        /** @type {?} */
        var collectionType = this.constructor;
        return new collectionType(entities);
    };
    // Create an iterator for EntityTypeCollection
    // Allows us to use the collections in angular directives
    // (i.e. ngFor, etc)
    // Create an iterator for EntityTypeCollection
    // Allows us to use the collections in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    EntityCollection.prototype[Symbol.iterator] = 
    // Create an iterator for EntityTypeCollection
    // Allows us to use the collections in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var current = 0;
        /** @type {?} */
        var entities = this.entities;
        return {
            next: function () {
                /** @type {?} */
                var noEntities = _.isEmpty(entities);
                /** @type {?} */
                var value = noEntities ? null : entities[current++];
                /** @type {?} */
                var done = noEntities ? true : current > entities.length;
                return {
                    value: value,
                    done: done
                };
            }
        };
    };
    return EntityCollection;
}());
export { EntityCollection };
if (false) {
    /** @type {?} */
    EntityCollection.prototype.length;
    /** @type {?} */
    EntityCollection.prototype.entities;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9jbGFzc2VzL2VudGl0eS9lbnRpdHkuY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBVzNCO0lBR0UsMEJBQ1MsUUFBd0I7UUFBeEIseUJBQUEsRUFBQSxhQUF3QjtRQUF4QixhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUUvQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUE7SUFDL0IsQ0FBQzs7OztJQUVELCtCQUFJOzs7SUFBSjtRQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNqQyxDQUFDOzs7OztJQUVELCtCQUFJOzs7O0lBQUosVUFBSyxVQUE2QjtRQUNoQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7O1lBRWhDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN2QyxDQUFDOzs7OztJQUVELGlDQUFNOzs7O0lBQU47UUFBTyxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOzs7OztZQUVSLFFBQVEsR0FBRyxDQUFBLEtBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQSxDQUFDLE1BQU0sNEJBQUksSUFBSSxFQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN2QyxDQUFDOzs7Ozs7SUFFRCx1Q0FBWTs7Ozs7SUFBWixVQUFhLFVBQWtCLEVBQUUsU0FBUzs7WUFDcEMsY0FBYyxHQUFHLFVBQUMsTUFBTTtZ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T0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNO2dCQUN4RCxPQUFPO29CQUNMLEtBQUssRUFBRSxLQUFLO29CQUNaLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUE7WUFDSCxDQUFDO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFwTUQsSUFvTUM7Ozs7SUFuTUMsa0NBQXFCOztJQUduQixvQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7XG4gIEVudGl0eUlkZW50aWZpZXIsXG4gIGlFbnRpdHksXG4gIGlFbnRpdHlDb2xsZWN0aW9uLFxufSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuXG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlDb2xsZWN0aW9uIGltcGxlbWVudHMgaUVudGl0eUNvbGxlY3Rpb24ge1xuICBwdWJsaWMgbGVuZ3RoOiBudW1iZXJcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZW50aXRpZXM6IGlFbnRpdHlbXSA9IFtdXG4gICkge1xuICAgIHRoaXMubGVuZ3RoID0gZW50aXRpZXMubGVuZ3RoXG4gIH1cblxuICBub25lKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkQ29sbGVjdGlvbihbXSlcbiAgfVxuXG4gIHNvcnQoYXR0cmlidXRlczogc3RyaW5nW10gfCBzdHJpbmcpOiBpRW50aXR5Q29sbGVjdGlvbiB7XG4gICAgYXR0cmlidXRlcyA9IF8uZmxhdHRlbihbYXR0cmlidXRlc10pXG5cbiAgICBsZXQgZW50aXRpZXMgPSBfLnNvcnRCeSh0aGlzLmVudGl0aWVzLCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiB0aGlzLmJ1aWxkQ29sbGVjdGlvbihlbnRpdGllcylcbiAgfVxuXG4gIGZpbHRlciguLi5hcmdzKTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIC8vIEB0cy1pZ25vcmU6XG4gICAgbGV0IGVudGl0aWVzID0gdGhpcy5lbnRpdGllcy5maWx0ZXIoLi4uYXJncylcbiAgICByZXR1cm4gdGhpcy5idWlsZENvbGxlY3Rpb24oZW50aXRpZXMpXG4gIH1cblxuICBpbnZva2VGaWx0ZXIobWV0aG9kTmFtZTogc3RyaW5nLCBhdHRyaWJ1dGUpOiBpRW50aXR5Q29sbGVjdGlvbiB7XG4gICAgbGV0IGZpbHRlckJ5TWV0aG9kID0gKGVudGl0eSkgPT4ge1xuICAgICAgaWYoZW50aXR5W21ldGhvZE5hbWVdKSB7XG4gICAgICAgIHJldHVybiBlbnRpdHlbbWV0aG9kTmFtZV0oYXR0cmlidXRlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICAvL2xldCBmaWx0ZXJQYXJ0aWFsID0gXy5wYXJ0aWFsUmlnaHQoZmlsdGVyQnlNZXRob2QsIC4uLmFyZ3MpXG4gICAgbGV0IGVudGl0aWVzID0gXy5maWx0ZXIodGhpcy5lbnRpdGllcywgZmlsdGVyQnlNZXRob2QpXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRDb2xsZWN0aW9uKGVudGl0aWVzKVxuICB9XG5cbiAgLy8gVE9ETzogZGVwcmVjYXRlIHRoaXMgbWV0aG9kXG4gIGZpbHRlckJ5SW52b2tlKG1ldGhvZE5hbWU6IHN0cmluZywgYXR0cmlidXRlKTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmludm9rZUZpbHRlcihtZXRob2ROYW1lLCBhdHRyaWJ1dGUpXG4gIH1cblxuICBmaWx0ZXJCeUF0dHJzKGZpbHRlcnM6IGFueSk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICBsZXQgcnVuRmlsdGVyID0gKGVudGl0eUNvbGxlY3Rpb24sIGZpbHRlciwgYXR0cikgPT4ge1xuICAgICAgcmV0dXJuIGVudGl0eUNvbGxlY3Rpb24uZmlsdGVyQnlBdHRyKGF0dHIsIGZpbHRlcilcbiAgICB9XG4gICAgbGV0IHZhbHVlID0gXy5yZWR1Y2UoZmlsdGVycywgcnVuRmlsdGVyLCB0aGlzKVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZmluZChpZDogRW50aXR5SWRlbnRpZmllcik6IGlFbnRpdHkge1xuICAgIGxldCBmaW5kRW50aXR5ID0gKGVudGl0eSkgPT4ge1xuICAgICAgdmFyIGRlZmF1bHRzID0gW1wiaWRcIl1cbiAgICAgIHZhciBpZEF0dHJpYnV0ZXMgPVxuICAgICAgICBfLmdldChlbnRpdHkuY29uc3RydWN0b3IsICdjb25maWcucHJpbWFyeUtleXMnLCBkZWZhdWx0cylcbiAgICAgIGxldCBoYXNJZCA9IChhdHRyKSA9PiB7XG4gICAgICAgIHJldHVybiBlbnRpdHlbYXR0cl0gPT0gaWRcbiAgICAgIH1cbiAgICAgIHJldHVybiAhIF8uaXNOaWwoXy5maW5kKGlkQXR0cmlidXRlcywgaGFzSWQpKVxuICAgIH1cblxuICAgIHJldHVybiBfLmZpbmQodGhpcy5lbnRpdGllcywgZmluZEVudGl0eSlcbiAgfVxuXG4gIGZpbmRCeUF0dHIoYXR0cjogc3RyaW5nLCB2YWx1ZTogYW55KTogaUVudGl0eSB7XG4gICAgZnVuY3Rpb24gZmluZEVudGl0eShlbnRpdHkpIHtcbiAgICAgIHJldHVybiBlbnRpdHlbYXR0cl0gPT0gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gXy5maW5kKHRoaXMuZW50aXRpZXMsIGZpbmRFbnRpdHkpXG4gIH1cblxuICBtYXAobWFwRm4pOiBhbnlbXSB7XG4gICAgcmV0dXJuIF8ubWFwKHRoaXMuZW50aXRpZXMsIG1hcEZuKVxuICB9XG5cbiAgc2xpY2UoLi4uYXJncyk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICBsZXQgZW50aXRpZXMgPSB0aGlzLmVudGl0aWVzLnNsaWNlKC4uLmFyZ3MpXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRDb2xsZWN0aW9uKGVudGl0aWVzKVxuICB9XG5cbiAgd2hlcmUoY29uZGl0aW9uczogYW55KTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIHZhciBmaWx0ZXJCeUNvbmRpdGlvbiA9IChlbnRpdHksIHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIC8vIFdoZW4gdGhlIGVudGl0eSBkb2VzIG5vdCBoYXZlIHRoZSBhdHRyaWJ1dGUgYXQgYWxsXG4gICAgICBpZighXy5oYXMoZW50aXR5LCBrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBsZXQgZW50aXR5VmFsdWUgPSBlbnRpdHlba2V5XVxuXG4gICAgICAvLyBDYXNlIDE6IHRoZSBhdHRyaWJ1dGUgaW4gdGhlIGVudGl0eSBpcyBhbiBhcnJheVxuICAgICAgaWYoZW50aXR5VmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyhcbiAgICAgICAgICBfLm1hcChlbnRpdHlWYWx1ZSwgXy50b1N0cmluZyksXG4gICAgICAgICAgXy50b1N0cmluZyh2YWx1ZSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvLyBDYXNlIDI6IHRoZSBjb25kaXRpb24gaXMgYW4gYXJyYXlcbiAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXMoXG4gICAgICAgICAgXy5tYXAodmFsdWUsIF8udG9TdHJpbmcpLFxuICAgICAgICAgIF8udG9TdHJpbmcoZW50aXR5VmFsdWUpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF8udG9TdHJpbmcoZW50aXR5VmFsdWUpID09IF8udG9TdHJpbmcodmFsdWUpXG4gICAgfVxuXG4gICAgdmFyIGZpbHRlckVudGl0eSA9IChlbnRpdHkpID0+IHtcbiAgICAgIHJldHVybiBfLmV2ZXJ5KGNvbmRpdGlvbnMsIF8ucGFydGlhbChmaWx0ZXJCeUNvbmRpdGlvbiwgZW50aXR5KSlcbiAgICB9XG5cbiAgICBsZXQgZW50aXRpZXMgPSBfLmZpbHRlcih0aGlzLmVudGl0aWVzLCBmaWx0ZXJFbnRpdHkpXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRDb2xsZWN0aW9uKGVudGl0aWVzKVxuICB9XG5cbiAgc3RyaW5nU2VhcmNoKGNvbmRpdGlvbnM6IGFueSk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICBsZXQgcnVuRmlsdGVyID0gKGVudGl0eUNvbGxlY3Rpb24sIHNlYXJjaFRlcm0sIGF0dHIpID0+IHtcbiAgICAgIHJldHVybiBlbnRpdHlDb2xsZWN0aW9uLnN0cmluZ1NlYXJjaEJ5QXR0cihhdHRyLCBzZWFyY2hUZXJtKVxuICAgIH1cbiAgICByZXR1cm4gXy5yZWR1Y2UoY29uZGl0aW9ucywgcnVuRmlsdGVyLCB0aGlzKVxuICB9XG5cbiAgc2VhcmNoKGNvbmRpdGlvbnM6IGFueSk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICB2YXIgZmlsdGVyQnlDb25kaXRpb24gPSAoZW50aXR5LCB2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBsZXQgZW50aXR5VmFsdWUgPSBlbnRpdHkuYXR0cmlidXRlc1trZXldXG5cbiAgICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXModmFsdWUsIGVudGl0eVZhbHVlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBfLmluY2x1ZGVzKGVudGl0eVZhbHVlLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZmlsdGVyRW50aXR5ID0gKGVudGl0eSkgPT4ge1xuICAgICAgcmV0dXJuIF8uZXZlcnkoY29uZGl0aW9ucywgXy5wYXJ0aWFsKGZpbHRlckJ5Q29uZGl0aW9uLCBlbnRpdHkpKVxuICAgIH1cblxuICAgIGxldCBlbnRpdGllcyA9IF8uZmlsdGVyKHRoaXMuZW50aXRpZXMsIGZpbHRlckVudGl0eSlcbiAgICByZXR1cm4gdGhpcy5idWlsZENvbGxlY3Rpb24oZW50aXRpZXMpXG4gIH1cblxuICBzdHJpbmdTZWFyY2hCeUF0dHIoYXR0cjogc3RyaW5nLCBzZWFyY2hUZXJtOiBhbnkpOiBpRW50aXR5Q29sbGVjdGlvbiB7XG4gICAgbGV0IGF0dHJGaWx0ZXIgPSAoZW50aXR5KSA9PiB7XG4gICAgICBpZighIHNlYXJjaFRlcm0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgbGV0IGVudGl0eVZhbHVlID0gZW50aXR5W2F0dHJdXG4gICAgICBsZXQgZW50aXR5V2lsZGNhcmRWYWx1ZSA9IF8ubG93ZXJDYXNlKGVudGl0eVZhbHVlKVxuICAgICAgbGV0IHNlYXJjaFRlcm1XaWxkY2FyZFZhbHVlID0gXy5sb3dlckNhc2Uoc2VhcmNoVGVybSlcbiAgICAgIHJldHVybiBfLmluY2x1ZGVzKGVudGl0eVdpbGRjYXJkVmFsdWUsIHNlYXJjaFRlcm1XaWxkY2FyZFZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maWx0ZXIoYXR0ckZpbHRlcilcbiAgfVxuXG4gIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIF8uaXNFbXB0eSh0aGlzLmVudGl0aWVzKVxuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJCeUF0dHIoYXR0cjogc3RyaW5nLCBmaWx0ZXI6IGFueSk6IGFueSB7XG4gICAgbGV0IGF0dHJGaWx0ZXIgPSAoZW50aXR5KSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBlbnRpdHkuYXR0cmlidXRlc1thdHRyXVxuICAgICAgcmV0dXJuIGZpbHRlcih2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKGF0dHJGaWx0ZXIpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQ29sbGVjdGlvbihlbnRpdGllcykge1xuICAgIGxldCBjb2xsZWN0aW9uVHlwZTogYW55ID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgIHJldHVybiBuZXcgY29sbGVjdGlvblR5cGUoZW50aXRpZXMpXG4gIH1cblxuICAvLyBDcmVhdGUgYW4gaXRlcmF0b3IgZm9yIEVudGl0eVR5cGVDb2xsZWN0aW9uXG4gIC8vIEFsbG93cyB1cyB0byB1c2UgdGhlIGNvbGxlY3Rpb25zIGluIGFuZ3VsYXIgZGlyZWN0aXZlc1xuICAvLyAoaS5lLiBuZ0ZvciwgZXRjKVxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICBsZXQgY3VycmVudCA9IDBcbiAgICBsZXQgZW50aXRpZXMgPSB0aGlzLmVudGl0aWVzXG4gICAgcmV0dXJuICB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBub0VudGl0aWVzID0gXy5pc0VtcHR5KGVudGl0aWVzKVxuICAgICAgICBsZXQgdmFsdWUgPSBub0VudGl0aWVzID8gbnVsbCA6IGVudGl0aWVzW2N1cnJlbnQrK11cbiAgICAgICAgbGV0IGRvbmUgPSBub0VudGl0aWVzID8gdHJ1ZSA6IGN1cnJlbnQgPiBlbnRpdGllcy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZG9uZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=