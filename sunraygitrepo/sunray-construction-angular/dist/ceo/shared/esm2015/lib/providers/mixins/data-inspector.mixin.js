/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class DataInspector {
    /**
     * @param {?} data
     * @return {?}
     */
    inspectData(data) {
        /** @type {?} */
        var inspect = (data) => {
            console.log(data);
        };
        if (data.subscribe) {
            data.subscribe(data => inspect(data));
        }
        else {
            inspect(data);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1pbnNwZWN0b3IubWl4aW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvbWl4aW5zL2RhdGEtaW5zcGVjdG9yLm1peGluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFDeEIsV0FBVyxDQUFDLElBQVM7O1lBQ2YsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixDQUFDO1FBRUQsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtTQUN0QzthQUNJO1lBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2Q7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGF0YUluc3BlY3RvciB7XG4gIGluc3BlY3REYXRhKGRhdGE6IGFueSkge1xuICAgIHZhciBpbnNwZWN0ID0gKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfVxuXG4gICAgaWYoZGF0YS5zdWJzY3JpYmUpIHtcbiAgICAgIGRhdGEuc3Vic2NyaWJlKGRhdGEgPT4gaW5zcGVjdChkYXRhKSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbnNwZWN0KGRhdGEpXG4gICAgfVxuICB9XG59XG4iXX0=