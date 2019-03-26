/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Service Module for Analytics
// angular
import { NgModule } from '@angular/core';
// vendor
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2Segment } from 'angulartics2/segment';
// module
import { analyticsProviders } from './services/index';
export class AnalyticsModule {
}
AnalyticsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    Angulartics2Module.forRoot([
                        Angulartics2Segment
                    ])
                ],
                providers: [
                    ...analyticsProviders
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjZW8vYW5hbHl0aWNzLyIsInNvdXJjZXMiOlsibGliL2FuYWx5dGljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQVEsY0FBYyxDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFPLHNCQUFzQixDQUFDOztBQUc1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVl0RCxNQUFNLE9BQU8sZUFBZTs7O1lBVjNCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCLENBQUMsT0FBTyxDQUFDO3dCQUN6QixtQkFBbUI7cUJBQ3BCLENBQUM7aUJBQ0g7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULEdBQUcsa0JBQWtCO2lCQUN0QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2VydmljZSBNb2R1bGUgZm9yIEFuYWx5dGljc1xuXG4vLyBhbmd1bGFyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyB2ZW5kb3JcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMk1vZHVsZSB9ICAgZnJvbSAnYW5ndWxhcnRpY3MyJztcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMlNlZ21lbnQgfSAgZnJvbSAnYW5ndWxhcnRpY3MyL3NlZ21lbnQnO1xuXG4vLyBtb2R1bGVcbmltcG9ydCB7IGFuYWx5dGljc1Byb3ZpZGVycyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQW5ndWxhcnRpY3MyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgQW5ndWxhcnRpY3MyU2VnbWVudFxuICAgIF0pXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLmFuYWx5dGljc1Byb3ZpZGVyc1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc01vZHVsZSB7fVxuIl19