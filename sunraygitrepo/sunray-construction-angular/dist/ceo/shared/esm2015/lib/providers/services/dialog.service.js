/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as _ from 'lodash';
import { BehaviorSubject, } from 'rxjs';
import { Injectable } from '@angular/core';
import { ModalComponent } from '../../declarables/components/modal/modal.component';
import { MatDialogAdapterService, } from './mat-dialog-adapter.service';
import * as i0 from "@angular/core";
import * as i1 from "./mat-dialog-adapter.service";
export class DialogService {
    /**
     * @param {?} dialogAdapter
     */
    constructor(dialogAdapter) {
        this.dialogAdapter = dialogAdapter;
        this.defaultConfig = {
            actions$: new BehaviorSubject(0),
            config: {
                componentType: ModalComponent,
                width: '500px',
                header: {
                    show: false,
                },
                footer: {
                    show: false,
                },
            }
        };
    }
    /**
     * @param {?} config
     * @return {?}
     */
    open(config) {
        config = this.buildDialogConfig(config);
        let /** @type {?} */ vendorDialog = this.openVendorDialog(config);
        return /** @type {?} */ (vendorDialog.componentInstance);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    buildDialogConfig(config) {
        let /** @type {?} */ contentComponentDialogActions$ = _.get(config, 'component.ngElementStrategy.componentRef.instance.dialogActions$');
        if (contentComponentDialogActions$) {
            let /** @type {?} */ componentActionSubject = {
                actions$: contentComponentDialogActions$
            };
            config = _.defaultsDeep(config, componentActionSubject);
        }
        return _.defaultsDeep(config, this.defaultConfig);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    openVendorDialog(config) {
        return this.dialogAdapter.open(config);
    }
}
DialogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
DialogService.ctorParameters = () => [
    { type: MatDialogAdapterService, },
];
/** @nocollapse */ DialogService.ngInjectableDef = i0.defineInjectable({ factory: function DialogService_Factory() { return new DialogService(i0.inject(i1.MatDialogAdapterService)); }, token: DialogService, providedIn: "root" });
function DialogService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DialogService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DialogService.ctorParameters;
    /** @type {?} */
    DialogService.prototype.defaultConfig;
    /** @type {?} */
    DialogService.prototype.dialogAdapter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2VvL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9wcm92aWRlcnMvc2VydmljZXMvZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBRTNCLE9BQU8sRUFDTCxlQUFlLEdBQ2hCLE1BQU0sTUFBTSxDQUFBO0FBRWIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUxQyxPQUFPLEVBQ0wsY0FBYyxFQUNmLE1BQU0sb0RBQW9ELENBQUE7QUFTM0QsT0FBTyxFQUNMLHVCQUF1QixHQUN4QixNQUFNLDhCQUE4QixDQUFBOzs7QUFLckMsTUFBTTs7OztJQWVKLFlBQ1U7UUFBQSxrQkFBYSxHQUFiLGFBQWE7NkJBZkM7WUFDdEIsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLEVBQUU7Z0JBQ04sYUFBYSxFQUFFLGNBQWM7Z0JBQzdCLEtBQUssRUFBRSxPQUFPO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixJQUFJLEVBQUUsS0FBSztpQkFDWjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLEtBQUs7aUJBQ1o7YUFDRjtTQUNGO0tBSUc7Ozs7O0lBRUosSUFBSSxDQUNGLE1BQXFCO1FBRXJCLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkMscUJBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUVoRCxNQUFNLG1CQUFzQixZQUFZLENBQUMsaUJBQWlCLEVBQUE7S0FDM0Q7Ozs7O0lBRU8saUJBQWlCLENBQ3ZCLE1BQXFCO1FBRXJCLHFCQUFJLDhCQUE4QixHQUNoQyxDQUFDLENBQUMsR0FBRyxDQUNILE1BQU0sRUFDTixrRUFBa0UsQ0FDbkUsQ0FBQTtRQUVILEVBQUUsQ0FBQSxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztZQUNsQyxxQkFBSSxzQkFBc0IsR0FBRztnQkFDM0IsUUFBUSxFQUFFLDhCQUE4QjthQUN6QyxDQUFBO1lBRUQsTUFBTSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLHNCQUFzQixDQUFDLENBQUE7U0FDeEQ7UUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBOzs7Ozs7SUFHM0MsZ0JBQWdCLENBQUMsTUFBTTtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Ozs7WUFwRHpDLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQge1xuICBCZWhhdmlvclN1YmplY3QsXG59IGZyb20gJ3J4anMnXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge1xuICBNb2RhbENvbXBvbmVudFxufSBmcm9tICcuLi8uLi9kZWNsYXJhYmxlcy9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudCdcblxuaW1wb3J0IHtcbiAgaURpYWxvZ0NvbmZpZyxcbiAgaU1hdERpYWxvZ0NvbmZpZyxcbiAgRGlhbG9nQ29tcG9uZW50VHlwZSxcbiAgaURpYWxvZ0NvbXBvbmVudENvbmZpZyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbmRleCdcblxuaW1wb3J0IHtcbiAgTWF0RGlhbG9nQWRhcHRlclNlcnZpY2UsXG59IGZyb20gJy4vbWF0LWRpYWxvZy1hZGFwdGVyLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xuICBwcml2YXRlIGRlZmF1bHRDb25maWcgPSB7XG4gICAgYWN0aW9ucyQ6IG5ldyBCZWhhdmlvclN1YmplY3QoMCksXG4gICAgY29uZmlnOiB7XG4gICAgICBjb21wb25lbnRUeXBlOiBNb2RhbENvbXBvbmVudCxcbiAgICAgIHdpZHRoOiAnNTAwcHgnLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGZvb3Rlcjoge1xuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2dBZGFwdGVyOiBNYXREaWFsb2dBZGFwdGVyU2VydmljZSxcbiAgKSB7fVxuXG4gIG9wZW4oXG4gICAgY29uZmlnOiBpRGlhbG9nQ29uZmlnLFxuICApIHtcbiAgICBjb25maWcgPSB0aGlzLmJ1aWxkRGlhbG9nQ29uZmlnKGNvbmZpZylcbiAgICBsZXQgdmVuZG9yRGlhbG9nID0gdGhpcy5vcGVuVmVuZG9yRGlhbG9nKGNvbmZpZylcblxuICAgIHJldHVybiA8RGlhbG9nQ29tcG9uZW50VHlwZT52ZW5kb3JEaWFsb2cuY29tcG9uZW50SW5zdGFuY2VcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGREaWFsb2dDb25maWcoXG4gICAgY29uZmlnOiBpRGlhbG9nQ29uZmlnLFxuICApOiBpRGlhbG9nQ29uZmlnIHtcbiAgICBsZXQgY29udGVudENvbXBvbmVudERpYWxvZ0FjdGlvbnMkID0gXG4gICAgICBfLmdldChcbiAgICAgICAgY29uZmlnLCBcbiAgICAgICAgJ2NvbXBvbmVudC5uZ0VsZW1lbnRTdHJhdGVneS5jb21wb25lbnRSZWYuaW5zdGFuY2UuZGlhbG9nQWN0aW9ucyQnXG4gICAgICApXG5cbiAgICBpZihjb250ZW50Q29tcG9uZW50RGlhbG9nQWN0aW9ucyQpIHtcbiAgICAgIGxldCBjb21wb25lbnRBY3Rpb25TdWJqZWN0ID0ge1xuICAgICAgICBhY3Rpb25zJDogY29udGVudENvbXBvbmVudERpYWxvZ0FjdGlvbnMkXG4gICAgICB9XG5cbiAgICAgIGNvbmZpZyA9IF8uZGVmYXVsdHNEZWVwKGNvbmZpZywgY29tcG9uZW50QWN0aW9uU3ViamVjdClcbiAgICB9XG5cbiAgICByZXR1cm4gXy5kZWZhdWx0c0RlZXAoY29uZmlnLCB0aGlzLmRlZmF1bHRDb25maWcpXG4gIH1cblxuICBwcml2YXRlIG9wZW5WZW5kb3JEaWFsb2coY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nQWRhcHRlci5vcGVuKGNvbmZpZylcbiAgfVxufVxuIl19