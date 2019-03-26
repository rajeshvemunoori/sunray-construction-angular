/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataInspector = /** @class */ (function () {
    function DataInspector() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    DataInspector.prototype.inspectData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var inspect = function (data) {
            console.log(data);
        };
        if (data.subscribe) {
            data.subscribe(function (data) { return inspect(data); });
        }
        else {
            inspect(data);
        }
    };
    return DataInspector;
}());
export { DataInspector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pbnNwZWN0b3IubWl4aW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvbWl4aW5zL2RhdGEtaW5zcGVjdG9yLm1peGluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUFBO0lBYUEsQ0FBQzs7Ozs7SUFaQyxtQ0FBVzs7OztJQUFYLFVBQVksSUFBUzs7WUFDZixPQUFPLEdBQUcsVUFBQyxJQUFJO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbkIsQ0FBQztRQUVELElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFBO1NBQ3RDO2FBQ0k7WUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDZDtJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFiRCxJQWFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERhdGFJbnNwZWN0b3Ige1xuICBpbnNwZWN0RGF0YShkYXRhOiBhbnkpIHtcbiAgICB2YXIgaW5zcGVjdCA9IChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH1cblxuICAgIGlmKGRhdGEuc3Vic2NyaWJlKSB7XG4gICAgICBkYXRhLnN1YnNjcmliZShkYXRhID0+IGluc3BlY3QoZGF0YSkpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaW5zcGVjdChkYXRhKVxuICAgIH1cbiAgfVxufVxuIl19