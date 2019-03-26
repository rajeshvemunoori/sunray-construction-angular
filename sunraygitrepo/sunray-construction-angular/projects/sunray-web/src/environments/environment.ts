// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  applicationName: "SunRay Construction Solutions",
  production: false,
  name: "sample",
  baseUrl: "http://localhost:4200/",
  site: {
    state: {
      layout: {
        seed: {
          header: {
            menu: {
              feature: 'cms',
              type: 'menus',
              id: 37,
            }
          },
          footer: {
            menu: {
              feature: 'cms',
              type: 'menus',
              id: 36,
            }
          }
        }
      }
    }
  },
  apis: {
    sunray: {
      config: {
        // url: "http://localhost:3000/sunray_app"
        url: "http://sunray-web.getcustomexposure.com/sunray_app"
        //url: "https://00a3411c.ngrok.io/sunray_app"
      }
    },
    cms: {
      config: {
        url: "http://sunray-wordpress.customexposure.tech/wp-json"
      }
    }
  }
}


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
