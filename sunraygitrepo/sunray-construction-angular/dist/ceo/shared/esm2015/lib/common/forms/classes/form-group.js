/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { FormMember } from './form-member';
export class FormGroup extends FormMember {
    /**
     * @param {?=} props
     */
    constructor(props = {}) {
        super(props);
        this.type = 'form-group';
    }
    /**
     * @return {?}
     */
    get ngControl() {
        return this._ngControl;
    }
    /**
     * @return {?}
     */
    get memberNames() {
        return _.keys(this.members);
    }
    /**
     * @param {?} memberName
     * @return {?}
     */
    getMember(memberName) {
        return this.members[memberName];
    }
    /**
     * @return {?}
     */
    get members() {
        return this._members;
    }
    /**
     * @param {?} members
     * @return {?}
     */
    set members(members) {
        this._members = members;
    }
    /**
     * @param {?} ngControl
     * @return {?}
     */
    set ngControl(ngControl) {
        this._ngControl = ngControl;
    }
    //Marks the control as touched. A control is touched by focus and blur events
    //that do not change the value.
    /**
     * @return {?}
     */
    markAsTouched() {
        /** @type {?} */
        let marker = 'markAsTouched';
        this.applyMarker(marker);
    }
    //Marks the control as dirty. A control becomes dirty when the
    //control's value is changed through the UI
    /**
     * @return {?}
     */
    markAsDirty() {
        /** @type {?} */
        let marker = 'markAsDirty';
        this.applyMarker(marker);
    }
    /**
     * @param {?} markerName
     * @return {?}
     */
    applyMarker(markerName) {
        this.ngControl[markerName]();
        /** @type {?} */
        let markMember = (member) => {
            member[markerName]();
        };
        _.map(this.members, markMember);
    }
    // Iterator
    // Allows us to use the object in angular directives
    // (i.e. ngFor, etc)
    /**
     * @return {?}
     */
    [Symbol.iterator]() {
        /** @type {?} */
        let current = 0;
        /** @type {?} */
        let members = _.values(this.members);
        return {
            next: function () {
                /** @type {?} */
                let isEmpty = _.isEmpty(members);
                /** @type {?} */
                let value = isEmpty ? null : members[current++];
                /** @type {?} */
                let done = isEmpty ? true : current > members.length;
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
    FormGroup.prototype.type;
    /**
     * @type {?}
     * @private
     */
    FormGroup.prototype._members;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9mb3Jtcy9jbGFzc2VzL2Zvcm0tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBYzNCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUMsTUFBTSxPQUFPLFNBQVUsU0FBUSxVQUFVOzs7O0lBS3ZDLFlBQVksUUFBNkIsRUFBRTtRQUN6QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFMZCxTQUFJLEdBQW1CLFlBQVksQ0FBQTtJQU1uQyxDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzdCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLFVBQWtCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNqQyxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3RCLENBQUM7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsT0FBdUI7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7SUFDekIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFNBQVMsQ0FBQyxTQUE0QjtRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQTtJQUM3QixDQUFDOzs7Ozs7SUFJRCxhQUFhOztZQUNQLE1BQU0sR0FBRyxlQUFlO1FBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDMUIsQ0FBQzs7Ozs7O0lBSUQsV0FBVzs7WUFDTCxNQUFNLEdBQUcsYUFBYTtRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzFCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFVBQWtCO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQTs7WUFFeEIsVUFBVSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDMUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUE7UUFDdEIsQ0FBQztRQUVELENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUNqQyxDQUFDOzs7Ozs7O0lBS0QsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDOztZQUNYLE9BQU8sR0FBRyxDQUFDOztZQUNYLE9BQU8sR0FBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFbkMsT0FBUTtZQUNOLElBQUksRUFBRTs7b0JBQ0EsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDOztvQkFDNUIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7O29CQUMzQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTTtnQkFDcEQsT0FBTztvQkFDTCxLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsSUFBSTtpQkFDWCxDQUFBO1lBQ0gsQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDO0NBQ0Y7OztJQTNFQyx5QkFBbUM7Ozs7O0lBRW5DLDZCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2wgYXMgTmdBYnN0cmFjdENvbnRyb2wsXG4gIEZvcm1Hcm91cCBhcyBOZ0Zvcm1Hcm91cCxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cbmltcG9ydCB7XG4gIEZvcm1NZW1iZXJUeXBlLFxuICBpRm9ybU1lbWJlck1hcCxcbiAgaUZvcm1NZW1iZXIsXG4gIGlGb3JtR3JvdXAsXG59IGZyb20gJy4uL2ludGVyZmFjZXMvaW5kZXgnXG5cbmltcG9ydCB7IEZvcm1NZW1iZXIgfSBmcm9tICcuL2Zvcm0tbWVtYmVyJ1xuXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwIGV4dGVuZHMgRm9ybU1lbWJlciBpbXBsZW1lbnRzIGlGb3JtR3JvdXAge1xuICB0eXBlOiBGb3JtTWVtYmVyVHlwZSA9ICdmb3JtLWdyb3VwJ1xuXG4gIHByaXZhdGUgX21lbWJlcnM6IGlGb3JtTWVtYmVyTWFwXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFBhcnRpYWw8aUZvcm1Hcm91cD4gPSB7fSkge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgZ2V0IG5nQ29udHJvbCgpOiBOZ0Fic3RyYWN0Q29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuX25nQ29udHJvbFxuICB9XG5cbiAgZ2V0IG1lbWJlck5hbWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gXy5rZXlzKHRoaXMubWVtYmVycylcbiAgfVxuXG4gIGdldE1lbWJlcihtZW1iZXJOYW1lOiBzdHJpbmcpOiBpRm9ybU1lbWJlciB7XG4gICAgcmV0dXJuIHRoaXMubWVtYmVyc1ttZW1iZXJOYW1lXVxuICB9XG5cbiAgZ2V0IG1lbWJlcnMoKTogaUZvcm1NZW1iZXJNYXAge1xuICAgIHJldHVybiB0aGlzLl9tZW1iZXJzXG4gIH1cblxuICBzZXQgbWVtYmVycyhtZW1iZXJzOiBpRm9ybU1lbWJlck1hcCkge1xuICAgIHRoaXMuX21lbWJlcnMgPSBtZW1iZXJzXG4gIH1cblxuICBzZXQgbmdDb250cm9sKG5nQ29udHJvbDogTmdBYnN0cmFjdENvbnRyb2wpIHtcbiAgICB0aGlzLl9uZ0NvbnRyb2wgPSBuZ0NvbnRyb2xcbiAgfVxuICBcbiAgLy9NYXJrcyB0aGUgY29udHJvbCBhcyB0b3VjaGVkLiBBIGNvbnRyb2wgaXMgdG91Y2hlZCBieSBmb2N1cyBhbmQgYmx1ciBldmVudHNcbiAgLy90aGF0IGRvIG5vdCBjaGFuZ2UgdGhlIHZhbHVlLlxuICBtYXJrQXNUb3VjaGVkKCkge1xuICAgIGxldCBtYXJrZXIgPSAnbWFya0FzVG91Y2hlZCdcbiAgICB0aGlzLmFwcGx5TWFya2VyKG1hcmtlcilcbiAgfVxuXG4gIC8vTWFya3MgdGhlIGNvbnRyb2wgYXMgZGlydHkuIEEgY29udHJvbCBiZWNvbWVzIGRpcnR5IHdoZW4gdGhlXG4gIC8vY29udHJvbCdzIHZhbHVlIGlzIGNoYW5nZWQgdGhyb3VnaCB0aGUgVUlcbiAgbWFya0FzRGlydHkoKSB7XG4gICAgbGV0IG1hcmtlciA9ICdtYXJrQXNEaXJ0eSdcbiAgICB0aGlzLmFwcGx5TWFya2VyKG1hcmtlcilcbiAgfVxuXG4gIGFwcGx5TWFya2VyKG1hcmtlck5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubmdDb250cm9sW21hcmtlck5hbWVdKClcblxuICAgIGxldCBtYXJrTWVtYmVyID0gKG1lbWJlcikgPT4ge1xuICAgICAgbWVtYmVyW21hcmtlck5hbWVdKClcbiAgICB9XG5cbiAgICBfLm1hcCh0aGlzLm1lbWJlcnMsIG1hcmtNZW1iZXIpXG4gIH1cblxuICAvLyBJdGVyYXRvclxuICAvLyBBbGxvd3MgdXMgdG8gdXNlIHRoZSBvYmplY3QgaW4gYW5ndWxhciBkaXJlY3RpdmVzXG4gIC8vIChpLmUuIG5nRm9yLCBldGMpXG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIGxldCBjdXJyZW50ID0gMFxuICAgIGxldCBtZW1iZXJzPSBfLnZhbHVlcyh0aGlzLm1lbWJlcnMpXG5cbiAgICByZXR1cm4gIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGlzRW1wdHkgPSBfLmlzRW1wdHkobWVtYmVycylcbiAgICAgICAgbGV0IHZhbHVlID0gaXNFbXB0eSA/IG51bGwgOiBtZW1iZXJzW2N1cnJlbnQrK11cbiAgICAgICAgbGV0IGRvbmUgPSBpc0VtcHR5ID8gdHJ1ZSA6IGN1cnJlbnQgPiBtZW1iZXJzLmxlbmd0aFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiBkb25lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==