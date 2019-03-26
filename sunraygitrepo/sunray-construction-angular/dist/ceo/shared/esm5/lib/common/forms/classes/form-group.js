/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { FormMember } from './form-member';
var FormGroup = /** @class */ (function (_super) {
    tslib_1.__extends(FormGroup, _super);
    function FormGroup(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, props) || this;
        _this.type = 'form-group';
        return _this;
    }
    Object.defineProperty(FormGroup.prototype, "ngControl", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngControl;
        },
        set: /**
         * @param {?} ngControl
         * @return {?}
         */
        function (ngControl) {
            this._ngControl = ngControl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroup.prototype, "memberNames", {
        get: /**
         * @return {?}
         */
        function () {
            return _.keys(this.members);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} memberName
     * @return {?}
     */
    FormGroup.prototype.getMember = /**
     * @param {?} memberName
     * @return {?}
     */
    function (memberName) {
        return this.members[memberName];
    };
    Object.defineProperty(FormGroup.prototype, "members", {
        get: /**
         * @return {?}
         */
        function () {
            return this._members;
        },
        set: /**
         * @param {?} members
         * @return {?}
         */
        function (members) {
            this._members = members;
        },
        enumerable: true,
        configurable: true
    });
    //Marks the control as touched. A control is touched by focus and blur events
    //that do not change the value.
    //Marks the control as touched. A control is touched by focus and blur events
    //that do not change the value.
    /**
     * @return {?}
     */
    FormGroup.prototype.markAsTouched = 
    //Marks the control as touched. A control is touched by focus and blur events
    //that do not change the value.
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var marker = 'markAsTouched';
        this.applyMarker(marker);
    };
    //Marks the control as dirty. A control becomes dirty when the
    //control's value is changed through the UI
    //Marks the control as dirty. A control becomes dirty when the
    //control's value is changed through the UI
    /**
     * @return {?}
     */
    FormGroup.prototype.markAsDirty = 
    //Marks the control as dirty. A control becomes dirty when the
    //control's value is changed through the UI
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var marker = 'markAsDirty';
        this.applyMarker(marker);
    };
    /**
     * @param {?} markerName
     * @return {?}
     */
    FormGroup.prototype.applyMarker = /**
     * @param {?} markerName
     * @return {?}
     */
    function (markerName) {
        this.ngControl[markerName]();
        /** @type {?} */
        var markMember = function (member) {
            member[markerName]();
        };
        _.map(this.members, markMember);
    };
    // Iterator
    // Allows us to use the object in angular directives
    // (i.e. ngFor, etc)
    // Iterator
    // Allows us to use the object in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    FormGroup.prototype[Symbol.iterator] = 
    // Iterator
    // Allows us to use the object in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var current = 0;
        /** @type {?} */
        var members = _.values(this.members);
        return {
            next: function () {
                /** @type {?} */
                var isEmpty = _.isEmpty(members);
                /** @type {?} */
                var value = isEmpty ? null : members[current++];
                /** @type {?} */
                var done = isEmpty ? true : current > members.length;
                return {
                    value: value,
                    done: done
                };
            }
        };
    };
    return FormGroup;
}(FormMember));
export { FormGroup };
if (false) {
    /** @type {?} */
    FormGroup.prototype.type;
    /**
     * @type {?}
     * @private
     */
    FormGroup.prototype._members;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9mb3Jtcy9jbGFzc2VzL2Zvcm0tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQWMzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDO0lBQStCLHFDQUFVO0lBS3ZDLG1CQUFZLEtBQStCO1FBQS9CLHNCQUFBLEVBQUEsVUFBK0I7UUFBM0MsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQU5ELFVBQUksR0FBbUIsWUFBWSxDQUFBOztJQU1uQyxDQUFDO0lBRUQsc0JBQUksZ0NBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtRQUN4QixDQUFDOzs7OztRQWtCRCxVQUFjLFNBQTRCO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFBO1FBQzdCLENBQUM7OztPQXBCQTtJQUVELHNCQUFJLGtDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQzdCLENBQUM7OztPQUFBOzs7OztJQUVELDZCQUFTOzs7O0lBQVQsVUFBVSxVQUFrQjtRQUMxQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELHNCQUFJLDhCQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDdEIsQ0FBQzs7Ozs7UUFFRCxVQUFZLE9BQXVCO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFBO1FBQ3pCLENBQUM7OztPQUpBO0lBVUQsNkVBQTZFO0lBQzdFLCtCQUErQjs7Ozs7O0lBQy9CLGlDQUFhOzs7Ozs7SUFBYjs7WUFDTSxNQUFNLEdBQUcsZUFBZTtRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsMkNBQTJDOzs7Ozs7SUFDM0MsK0JBQVc7Ozs7OztJQUFYOztZQUNNLE1BQU0sR0FBRyxhQUFhO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDMUIsQ0FBQzs7Ozs7SUFFRCwrQkFBVzs7OztJQUFYLFVBQVksVUFBa0I7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFBOztZQUV4QixVQUFVLEdBQUcsVUFBQyxNQUFNO1lBQ3RCLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFBO1FBQ3RCLENBQUM7UUFFRCxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELFdBQVc7SUFDWCxvREFBb0Q7SUFDcEQsb0JBQW9COzs7Ozs7O0lBQ3BCLG9CQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUFBakI7O1lBQ00sT0FBTyxHQUFHLENBQUM7O1lBQ1gsT0FBTyxHQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUVuQyxPQUFRO1lBQ04sSUFBSSxFQUFFOztvQkFDQSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7O29CQUM1QixLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7b0JBQzNDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNO2dCQUNwRCxPQUFPO29CQUNMLEtBQUssRUFBRSxLQUFLO29CQUNaLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUE7WUFDSCxDQUFDO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUE1RUQsQ0FBK0IsVUFBVSxHQTRFeEM7Ozs7SUEzRUMseUJBQW1DOzs7OztJQUVuQyw2QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sIGFzIE5nQWJzdHJhY3RDb250cm9sLFxuICBGb3JtR3JvdXAgYXMgTmdGb3JtR3JvdXAsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5pbXBvcnQge1xuICBGb3JtTWVtYmVyVHlwZSxcbiAgaUZvcm1NZW1iZXJNYXAsXG4gIGlGb3JtTWVtYmVyLFxuICBpRm9ybUdyb3VwLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL2luZGV4J1xuXG5pbXBvcnQgeyBGb3JtTWVtYmVyIH0gZnJvbSAnLi9mb3JtLW1lbWJlcidcblxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cCBleHRlbmRzIEZvcm1NZW1iZXIgaW1wbGVtZW50cyBpRm9ybUdyb3VwIHtcbiAgdHlwZTogRm9ybU1lbWJlclR5cGUgPSAnZm9ybS1ncm91cCdcblxuICBwcml2YXRlIF9tZW1iZXJzOiBpRm9ybU1lbWJlck1hcFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQYXJ0aWFsPGlGb3JtR3JvdXA+ID0ge30pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGdldCBuZ0NvbnRyb2woKTogTmdBYnN0cmFjdENvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLl9uZ0NvbnRyb2xcbiAgfVxuXG4gIGdldCBtZW1iZXJOYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIF8ua2V5cyh0aGlzLm1lbWJlcnMpXG4gIH1cblxuICBnZXRNZW1iZXIobWVtYmVyTmFtZTogc3RyaW5nKTogaUZvcm1NZW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1lbWJlcnNbbWVtYmVyTmFtZV1cbiAgfVxuXG4gIGdldCBtZW1iZXJzKCk6IGlGb3JtTWVtYmVyTWFwIHtcbiAgICByZXR1cm4gdGhpcy5fbWVtYmVyc1xuICB9XG5cbiAgc2V0IG1lbWJlcnMobWVtYmVyczogaUZvcm1NZW1iZXJNYXApIHtcbiAgICB0aGlzLl9tZW1iZXJzID0gbWVtYmVyc1xuICB9XG5cbiAgc2V0IG5nQ29udHJvbChuZ0NvbnRyb2w6IE5nQWJzdHJhY3RDb250cm9sKSB7XG4gICAgdGhpcy5fbmdDb250cm9sID0gbmdDb250cm9sXG4gIH1cbiAgXG4gIC8vTWFya3MgdGhlIGNvbnRyb2wgYXMgdG91Y2hlZC4gQSBjb250cm9sIGlzIHRvdWNoZWQgYnkgZm9jdXMgYW5kIGJsdXIgZXZlbnRzXG4gIC8vdGhhdCBkbyBub3QgY2hhbmdlIHRoZSB2YWx1ZS5cbiAgbWFya0FzVG91Y2hlZCgpIHtcbiAgICBsZXQgbWFya2VyID0gJ21hcmtBc1RvdWNoZWQnXG4gICAgdGhpcy5hcHBseU1hcmtlcihtYXJrZXIpXG4gIH1cblxuICAvL01hcmtzIHRoZSBjb250cm9sIGFzIGRpcnR5LiBBIGNvbnRyb2wgYmVjb21lcyBkaXJ0eSB3aGVuIHRoZVxuICAvL2NvbnRyb2wncyB2YWx1ZSBpcyBjaGFuZ2VkIHRocm91Z2ggdGhlIFVJXG4gIG1hcmtBc0RpcnR5KCkge1xuICAgIGxldCBtYXJrZXIgPSAnbWFya0FzRGlydHknXG4gICAgdGhpcy5hcHBseU1hcmtlcihtYXJrZXIpXG4gIH1cblxuICBhcHBseU1hcmtlcihtYXJrZXJOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5nQ29udHJvbFttYXJrZXJOYW1lXSgpXG5cbiAgICBsZXQgbWFya01lbWJlciA9IChtZW1iZXIpID0+IHtcbiAgICAgIG1lbWJlclttYXJrZXJOYW1lXSgpXG4gICAgfVxuXG4gICAgXy5tYXAodGhpcy5tZW1iZXJzLCBtYXJrTWVtYmVyKVxuICB9XG5cbiAgLy8gSXRlcmF0b3JcbiAgLy8gQWxsb3dzIHVzIHRvIHVzZSB0aGUgb2JqZWN0IGluIGFuZ3VsYXIgZGlyZWN0aXZlc1xuICAvLyAoaS5lLiBuZ0ZvciwgZXRjKVxuICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICBsZXQgY3VycmVudCA9IDBcbiAgICBsZXQgbWVtYmVycz0gXy52YWx1ZXModGhpcy5tZW1iZXJzKVxuXG4gICAgcmV0dXJuICB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBpc0VtcHR5ID0gXy5pc0VtcHR5KG1lbWJlcnMpXG4gICAgICAgIGxldCB2YWx1ZSA9IGlzRW1wdHkgPyBudWxsIDogbWVtYmVyc1tjdXJyZW50KytdXG4gICAgICAgIGxldCBkb25lID0gaXNFbXB0eSA/IHRydWUgOiBjdXJyZW50ID4gbWVtYmVycy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgZG9uZTogZG9uZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=