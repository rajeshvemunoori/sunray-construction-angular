/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DialogComponent } from '../components/index';
import { BehaviorSubject, } from 'rxjs';
import { DIALOGS_CONFIG } from './tokens';
/** @type {?} */
let initAction = {
    name: 'init',
    payload: null,
};
/** @type {?} */
export const defaultDialogsConfig = {
    isDefault: true,
    defaults: {
        actions$: new BehaviorSubject(initAction),
        componentType: DialogComponent,
        width: '500px',
        header: {
            show: false,
        },
        footer: {
            show: false,
        },
    },
    dialogs: {}
};
/** @type {?} */
export const providers = [
    {
        provide: DIALOGS_CONFIG,
        useValue: defaultDialogsConfig,
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNlby9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL2RpYWxvZ3MvdG9rZW5zL3Byb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBRXJELE9BQU8sRUFDTCxlQUFlLEdBQ2hCLE1BQU0sTUFBTSxDQUFBO0FBRWIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQTs7SUFFckMsVUFBVSxHQUFHO0lBQ2YsSUFBSSxFQUFFLE1BQU07SUFDWixPQUFPLEVBQUUsSUFBSTtDQUNkOztBQUVELE1BQU0sT0FBTyxvQkFBb0IsR0FBRztJQUNsQyxTQUFTLEVBQUUsSUFBSTtJQUNmLFFBQVEsRUFBRTtRQUNSLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDekMsYUFBYSxFQUFFLGVBQWU7UUFDOUIsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsS0FBSztTQUNaO1FBQ0QsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLEtBQUs7U0FDWjtLQUNGO0lBQ0QsT0FBTyxFQUFFLEVBQUU7Q0FDWjs7QUFFRCxNQUFNLE9BQU8sU0FBUyxHQUFVO0lBQzlCO1FBQ0UsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4J1xuXG5pbXBvcnQgeyBcbiAgQmVoYXZpb3JTdWJqZWN0LFxufSBmcm9tICdyeGpzJ1xuXG5pbXBvcnQgeyBESUFMT0dTX0NPTkZJRyB9IGZyb20gJy4vdG9rZW5zJ1xuXG5sZXQgaW5pdEFjdGlvbiA9IHtcbiAgbmFtZTogJ2luaXQnLFxuICBwYXlsb2FkOiBudWxsLFxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdERpYWxvZ3NDb25maWcgPSB7XG4gIGlzRGVmYXVsdDogdHJ1ZSxcbiAgZGVmYXVsdHM6IHtcbiAgICBhY3Rpb25zJDogbmV3IEJlaGF2aW9yU3ViamVjdChpbml0QWN0aW9uKSxcbiAgICBjb21wb25lbnRUeXBlOiBEaWFsb2dDb21wb25lbnQsXG4gICAgd2lkdGg6ICc1MDBweCcsXG4gICAgaGVhZGVyOiB7XG4gICAgICBzaG93OiBmYWxzZSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgc2hvdzogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGlhbG9nczoge31cbn1cblxuZXhwb3J0IGNvbnN0IHByb3ZpZGVyczogYW55W10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBESUFMT0dTX0NPTkZJRyxcbiAgICB1c2VWYWx1ZTogZGVmYXVsdERpYWxvZ3NDb25maWcsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dXG4iXX0=