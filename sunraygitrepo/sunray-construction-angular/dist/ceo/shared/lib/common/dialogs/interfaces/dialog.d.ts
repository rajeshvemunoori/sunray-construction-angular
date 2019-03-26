import { TemplateRef } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialogRef } from '@angular/material';
export interface iDialogComponentHeaderConfig {
    show: boolean;
    title?: string;
    [key: string]: any;
}
export interface iDialogComponentFooterConfig {
    show: boolean;
    [key: string]: any;
}
export interface iMatDialogConfig {
    width?: string;
    height?: string;
    data?: any;
}
export interface iDialogComponentConfig {
    componentType?: DialogComponentType;
    width?: string;
    height?: string;
    header: iDialogComponentHeaderConfig;
    footer: iDialogComponentFooterConfig;
}
export interface iDialogComponentInputProperties {
    config: iDialogComponentConfig;
    component: iDialogContentComponent;
    [key: string]: any;
}
export interface iDialogConfig {
    componentType?: DialogComponentType;
    width?: string;
    height?: string;
    header?: iDialogComponentHeaderConfig;
    footer?: iDialogComponentFooterConfig;
}
export interface iDialogContentComponent {
    dialogActions$?: any;
}
export interface iDialogHtmlElement {
    ngElementStrategy: any;
    localName: string;
}
export declare type DialogComponentType = ComponentType<{}> | TemplateRef<{}>;
export interface iDialogComponent {
    dialogRef: MatDialogRef<iDialogComponent>;
    data: iDialogComponentInputProperties;
    contentElementId: string;
    actions$?: any;
}
export interface iDialogAction {
    name: string;
    payload: any;
}
export interface iDialogActionEvent {
    action: iDialogAction;
}
export interface iDialogService {
    open(dialogElement: iDialogHtmlElement, config: iDialogConfig | string): iDialogComponent;
    closeAll(): any;
}
export interface iDialogsConfig {
    isDefault?: boolean;
    defaults: any;
    dialogs: any;
}
