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
     * @return {?}
     */
    EntityCollection.prototype.isNotEmpty = /**
     * @return {?}
     */
    function () {
        return !this.isEmpty();
    };
    /**
     * @return {?}
     */
    EntityCollection.prototype.hasEntities = /**
     * @return {?}
     */
    function () {
        return this.isNotEmpty();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL2VudGl0eS8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdHkvY2xhc3Nlcy9lbnRpdHkvZW50aXR5LmNvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQVczQjtJQUdFLDBCQUNTLFFBQXdCO1FBQXhCLHlCQUFBLEVBQUEsYUFBd0I7UUFBeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFFL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFBO0lBQy9CLENBQUM7Ozs7SUFFRCwrQkFBSTs7O0lBQUo7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDakMsQ0FBQzs7Ozs7SUFFRCwrQkFBSTs7OztJQUFKLFVBQUssVUFBNkI7UUFDaEMsVUFBVSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBOztZQUVoQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxpQ0FBTTs7OztJQUFOO1FBQU8sY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7Ozs7WUFFUixRQUFRLEdBQUcsQ0FBQSxLQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsQ0FBQyxNQUFNLDRCQUFJLElBQUksRUFBQztRQUM1QyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7Ozs7O0lBRUQsdUNBQVk7Ozs7O0lBQVosVUFBYSxVQUFrQixFQUFFLFNBQVM7O1lBQ3BDLGNBQWMsR0FBRyxVQUFD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Q0FBQzs7b0JBQ2hDLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDOztvQkFDL0MsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU07Z0JBQ3hELE9BQU87b0JBQ0wsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLElBQUk7aUJBQ1gsQ0FBQTtZQUNILENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQTVNRCxJQTRNQzs7OztJQTNNQyxrQ0FBcUI7O0lBR25CLG9DQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcydcblxuaW1wb3J0IHtcbiAgRW50aXR5SWRlbnRpZmllcixcbiAgaUVudGl0eSxcbiAgaUVudGl0eUNvbGxlY3Rpb24sXG59IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5cblxuZXhwb3J0IGNsYXNzIEVudGl0eUNvbGxlY3Rpb24gaW1wbGVtZW50cyBpRW50aXR5Q29sbGVjdGlvbiB7XG4gIHB1YmxpYyBsZW5ndGg6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbnRpdGllczogaUVudGl0eVtdID0gW11cbiAgKSB7XG4gICAgdGhpcy5sZW5ndGggPSBlbnRpdGllcy5sZW5ndGhcbiAgfVxuXG4gIG5vbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRDb2xsZWN0aW9uKFtdKVxuICB9XG5cbiAgc29ydChhdHRyaWJ1dGVzOiBzdHJpbmdbXSB8IHN0cmluZyk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICBhdHRyaWJ1dGVzID0gXy5mbGF0dGVuKFthdHRyaWJ1dGVzXSlcblxuICAgIGxldCBlbnRpdGllcyA9IF8uc29ydEJ5KHRoaXMuZW50aXRpZXMsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIHRoaXMuYnVpbGRDb2xsZWN0aW9uKGVudGl0aWVzKVxuICB9XG5cbiAgZmlsdGVyKC4uLmFyZ3MpOiBpRW50aXR5Q29sbGVjdGlvbiB7XG4gICAgLy8gQHRzLWlnbm9yZTpcbiAgICBsZXQgZW50aXRpZXMgPSB0aGlzLmVudGl0aWVzLmZpbHRlciguLi5hcmdzKVxuICAgIHJldHVybiB0aGlzLmJ1aWxkQ29sbGVjdGlvbihlbnRpdGllcylcbiAgfVxuXG4gIGludm9rZUZpbHRlcihtZXRob2ROYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZSk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICBsZXQgZmlsdGVyQnlNZXRob2QgPSAoZW50aXR5KSA9PiB7XG4gICAgICBpZihlbnRpdHlbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIGVudGl0eVttZXRob2ROYW1lXShhdHRyaWJ1dGUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIC8vbGV0IGZpbHRlclBhcnRpYWwgPSBfLnBhcnRpYWxSaWdodChmaWx0ZXJCeU1ldGhvZCwgLi4uYXJncylcbiAgICBsZXQgZW50aXRpZXMgPSBfLmZpbHRlcih0aGlzLmVudGl0aWVzLCBmaWx0ZXJCeU1ldGhvZClcbiAgICByZXR1cm4gdGhpcy5idWlsZENvbGxlY3Rpb24oZW50aXRpZXMpXG4gIH1cblxuICAvLyBUT0RPOiBkZXByZWNhdGUgdGhpcyBtZXRob2RcbiAgZmlsdGVyQnlJbnZva2UobWV0aG9kTmFtZTogc3RyaW5nLCBhdHRyaWJ1dGUpOiBpRW50aXR5Q29sbGVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuaW52b2tlRmlsdGVyKG1ldGhvZE5hbWUsIGF0dHJpYnV0ZSlcbiAgfVxuXG4gIGZpbHRlckJ5QXR0cnMoZmlsdGVyczogYW55KTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIGxldCBydW5GaWx0ZXIgPSAoZW50aXR5Q29sbGVjdGlvbiwgZmlsdGVyLCBhdHRyKSA9PiB7XG4gICAgICByZXR1cm4gZW50aXR5Q29sbGVjdGlvbi5maWx0ZXJCeUF0dHIoYXR0ciwgZmlsdGVyKVxuICAgIH1cbiAgICBsZXQgdmFsdWUgPSBfLnJlZHVjZShmaWx0ZXJzLCBydW5GaWx0ZXIsIHRoaXMpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBmaW5kKGlkOiBFbnRpdHlJZGVudGlmaWVyKTogaUVudGl0eSB7XG4gICAgbGV0IGZpbmRFbnRpdHkgPSAoZW50aXR5KSA9PiB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSBbXCJpZFwiXVxuICAgICAgdmFyIGlkQXR0cmlidXRlcyA9XG4gICAgICAgIF8uZ2V0KGVudGl0eS5jb25zdHJ1Y3RvciwgJ2NvbmZpZy5wcmltYXJ5S2V5cycsIGRlZmF1bHRzKVxuICAgICAgbGV0IGhhc0lkID0gKGF0dHIpID0+IHtcbiAgICAgICAgcmV0dXJuIGVudGl0eVthdHRyXSA9PSBpZFxuICAgICAgfVxuICAgICAgcmV0dXJuICEgXy5pc05pbChfLmZpbmQoaWRBdHRyaWJ1dGVzLCBoYXNJZCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIF8uZmluZCh0aGlzLmVudGl0aWVzLCBmaW5kRW50aXR5KVxuICB9XG5cbiAgZmluZEJ5QXR0cihhdHRyOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBpRW50aXR5IHtcbiAgICBmdW5jdGlvbiBmaW5kRW50aXR5KGVudGl0eSkge1xuICAgICAgcmV0dXJuIGVudGl0eVthdHRyXSA9PSB2YWx1ZVxuICAgIH1cblxuICAgIHJldHVybiBfLmZpbmQodGhpcy5lbnRpdGllcywgZmluZEVudGl0eSlcbiAgfVxuXG4gIG1hcChtYXBGbik6IGFueVtdIHtcbiAgICByZXR1cm4gXy5tYXAodGhpcy5lbnRpdGllcywgbWFwRm4pXG4gIH1cblxuICBzbGljZSguLi5hcmdzKTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIGxldCBlbnRpdGllcyA9IHRoaXMuZW50aXRpZXMuc2xpY2UoLi4uYXJncylcbiAgICByZXR1cm4gdGhpcy5idWlsZENvbGxlY3Rpb24oZW50aXRpZXMpXG4gIH1cblxuICB3aGVyZShjb25kaXRpb25zOiBhbnkpOiBpRW50aXR5Q29sbGVjdGlvbiB7XG4gICAgdmFyIGZpbHRlckJ5Q29uZGl0aW9uID0gKGVudGl0eSwgdmFsdWUsIGtleSkgPT4ge1xuICAgICAgLy8gV2hlbiB0aGUgZW50aXR5IGRvZXMgbm90IGhhdmUgdGhlIGF0dHJpYnV0ZSBhdCBhbGxcbiAgICAgIGlmKCFfLmhhcyhlbnRpdHksIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGxldCBlbnRpdHlWYWx1ZSA9IGVudGl0eVtrZXldXG5cbiAgICAgIC8vIENhc2UgMTogdGhlIGF0dHJpYnV0ZSBpbiB0aGUgZW50aXR5IGlzIGFuIGFycmF5XG4gICAgICBpZihlbnRpdHlWYWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHJldHVybiBfLmluY2x1ZGVzKFxuICAgICAgICAgIF8ubWFwKGVudGl0eVZhbHVlLCBfLnRvU3RyaW5nKSxcbiAgICAgICAgICBfLnRvU3RyaW5nKHZhbHVlKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8vIENhc2UgMjogdGhlIGNvbmRpdGlvbiBpcyBhbiBhcnJheVxuICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyhcbiAgICAgICAgICBfLm1hcCh2YWx1ZSwgXy50b1N0cmluZyksXG4gICAgICAgICAgXy50b1N0cmluZyhlbnRpdHlWYWx1ZSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gXy50b1N0cmluZyhlbnRpdHlWYWx1ZSkgPT0gXy50b1N0cmluZyh2YWx1ZSlcbiAgICB9XG5cbiAgICB2YXIgZmlsdGVyRW50aXR5ID0gKGVudGl0eSkgPT4ge1xuICAgICAgcmV0dXJuIF8uZXZlcnkoY29uZGl0aW9ucywgXy5wYXJ0aWFsKGZpbHRlckJ5Q29uZGl0aW9uLCBlbnRpdHkpKVxuICAgIH1cblxuICAgIGxldCBlbnRpdGllcyA9IF8uZmlsdGVyKHRoaXMuZW50aXRpZXMsIGZpbHRlckVudGl0eSlcbiAgICByZXR1cm4gdGhpcy5idWlsZENvbGxlY3Rpb24oZW50aXRpZXMpXG4gIH1cblxuICBzdHJpbmdTZWFyY2goY29uZGl0aW9uczogYW55KTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIGxldCBydW5GaWx0ZXIgPSAoZW50aXR5Q29sbGVjdGlvbiwgc2VhcmNoVGVybSwgYXR0cikgPT4ge1xuICAgICAgcmV0dXJuIGVudGl0eUNvbGxlY3Rpb24uc3RyaW5nU2VhcmNoQnlBdHRyKGF0dHIsIHNlYXJjaFRlcm0pXG4gICAgfVxuICAgIHJldHVybiBfLnJlZHVjZShjb25kaXRpb25zLCBydW5GaWx0ZXIsIHRoaXMpXG4gIH1cblxuICBzZWFyY2goY29uZGl0aW9uczogYW55KTogaUVudGl0eUNvbGxlY3Rpb24ge1xuICAgIHZhciBmaWx0ZXJCeUNvbmRpdGlvbiA9IChlbnRpdHksIHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGxldCBlbnRpdHlWYWx1ZSA9IGVudGl0eS5hdHRyaWJ1dGVzW2tleV1cblxuICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyh2YWx1ZSwgZW50aXR5VmFsdWUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXMoZW50aXR5VmFsdWUsIHZhbHVlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBmaWx0ZXJFbnRpdHkgPSAoZW50aXR5KSA9PiB7XG4gICAgICByZXR1cm4gXy5ldmVyeShjb25kaXRpb25zLCBfLnBhcnRpYWwoZmlsdGVyQnlDb25kaXRpb24sIGVudGl0eSkpXG4gICAgfVxuXG4gICAgbGV0IGVudGl0aWVzID0gXy5maWx0ZXIodGhpcy5lbnRpdGllcywgZmlsdGVyRW50aXR5KVxuICAgIHJldHVybiB0aGlzLmJ1aWxkQ29sbGVjdGlvbihlbnRpdGllcylcbiAgfVxuXG4gIHN0cmluZ1NlYXJjaEJ5QXR0cihhdHRyOiBzdHJpbmcsIHNlYXJjaFRlcm06IGFueSk6IGlFbnRpdHlDb2xsZWN0aW9uIHtcbiAgICBsZXQgYXR0ckZpbHRlciA9IChlbnRpdHkpID0+IHtcbiAgICAgIGlmKCEgc2VhcmNoVGVybSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBsZXQgZW50aXR5VmFsdWUgPSBlbnRpdHlbYXR0cl1cbiAgICAgIGxldCBlbnRpdHlXaWxkY2FyZFZhbHVlID0gXy5sb3dlckNhc2UoZW50aXR5VmFsdWUpXG4gICAgICBsZXQgc2VhcmNoVGVybVdpbGRjYXJkVmFsdWUgPSBfLmxvd2VyQ2FzZShzZWFyY2hUZXJtKVxuICAgICAgcmV0dXJuIF8uaW5jbHVkZXMoZW50aXR5V2lsZGNhcmRWYWx1ZSwgc2VhcmNoVGVybVdpbGRjYXJkVmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpbHRlcihhdHRyRmlsdGVyKVxuICB9XG5cbiAgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gXy5pc0VtcHR5KHRoaXMuZW50aXRpZXMpXG4gIH1cblxuICBpc05vdEVtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0VtcHR5KClcbiAgfVxuXG4gIGhhc0VudGl0aWVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzTm90RW1wdHkoKVxuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJCeUF0dHIoYXR0cjogc3RyaW5nLCBmaWx0ZXI6IGFueSk6IGFueSB7XG4gICAgbGV0IGF0dHJGaWx0ZXIgPSAoZW50aXR5KSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBlbnRpdHkuYXR0cmlidXRlc1thdHRyXVxuICAgICAgcmV0dXJuIGZpbHRlcih2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKGF0dHJGaWx0ZXIpXG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQ29sbGVjdGlvbihlbnRpdGllcykge1xuICAgIGxldCBjb2xsZWN0aW9uVHlwZTogYW55ID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgIHJldHVybiBuZXcgY29sbGVjdGlvblR5cGUoZW50aXRpZXMpXG4gIH1cblxuICAvLyBDcmVhdGUgYW4gaXRlcmF0b3IgZm9yIEVudGl0eVR5cGVDb2xsZWN0aW9uXG4gIC8vIEFsbG93cyB1cyB0byB1c2UgdGhlIGNvbGxlY3Rpb25zIGluIGFuZ3VsYXIgZGlyZWN0aXZlc1xuICAvLyAoaS5lLiBuZ0ZvciwgZXRjKVxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICBsZXQgY3VycmVudCA9IDBcbiAgICBsZXQgZW50aXRpZXMgPSB0aGlzLmVudGl0aWVzXG4gICAgcmV0dXJuICB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBub0VudGl0aWVzID0gXy5pc0VtcHR5KGVudGl0aWVzKVxuICAgICAgICBsZXQgdmFsdWUgPSBub0VudGl0aWVzID8gbnVsbCA6IGVudGl0aWVzW2N1cnJlbnQrK11cbiAgICAgICAgbGV0IGRvbmUgPSBub0VudGl0aWVzID8gdHJ1ZSA6IGN1cnJlbnQgPiBlbnRpdGllcy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZG9uZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=