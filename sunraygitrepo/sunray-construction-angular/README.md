# Sunray Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Angular Compiler issue relating barrel files and index.ts references:
### https://github.com/angular/angular/issues/23609
### https://github.com/ng-packagr/ng-packagr/issues/727


## Shared Module

### Page Component Architecture:

Every page receives the following services:

PageService
  AppService - provides application-wide functionality the pages.
  UiService - provdes UI-specific functionality to the pages.


DataService -
  EntityService -


## Layout

Using a similar set up as the Clarity Design System with a few modifications:

https://vmware.github.io/clarity/documentation/v1.0/app-layout


Main Container (vertical flexbox):
  Alert (app-level)
  Header
  Subheader (aka Subnav)
  Content Container (horizontal flexbox):
    Content Area
    Sidenav
  Footer
