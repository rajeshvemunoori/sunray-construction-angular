/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// Service Module for Analytics
// angular
import { NgModule } from '@angular/core';
// vendor
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2Segment } from 'angulartics2/segment';
// module
import { analyticsProviders } from './services/index';
var AnalyticsModule = /** @class */ (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        Angulartics2Module.forRoot([
                            Angulartics2Segment
                        ])
                    ],
                    providers: tslib_1.__spread(analyticsProviders)
                },] }
    ];
    return AnalyticsModule;
}());
export { AnalyticsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vYW5hbHl0aWNzLyIsInNvdXJjZXMiOlsibGliL2FuYWx5dGljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFRLGNBQWMsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTyxzQkFBc0IsQ0FBQzs7QUFHNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdEQ7SUFBQTtJQVU4QixDQUFDOztnQkFWOUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7NEJBQ3pCLG1CQUFtQjt5QkFDcEIsQ0FBQztxQkFDSDtvQkFDRCxTQUFTLG1CQUNKLGtCQUFrQixDQUN0QjtpQkFDRjs7SUFDNkIsc0JBQUM7Q0FBQSxBQVYvQixJQVUrQjtTQUFsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2VydmljZSBNb2R1bGUgZm9yIEFuYWx5dGljc1xuXG4vLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyB2ZW5kb3JcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMk1vZHVsZSB9ICAgZnJvbSAnYW5ndWxhcnRpY3MyJztcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMlNlZ21lbnQgfSAgZnJvbSAnYW5ndWxhcnRpY3MyL3NlZ21lbnQnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IGFuYWx5dGljc1Byb3ZpZGVycyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQW5ndWxhcnRpY3MyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgQW5ndWxhcnRpY3MyU2VnbWVudFxuICAgIF0pXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLmFuYWx5dGljc1Byb3ZpZGVyc1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc01vZHVsZSB7fVxuIl19