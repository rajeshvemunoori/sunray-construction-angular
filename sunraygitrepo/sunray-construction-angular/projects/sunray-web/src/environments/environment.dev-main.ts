export const environment = {
  applicationName: "SunRay Construction Solutions",
  production: false,
  name: "dev",
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
        //url: "http://localhost:3000/sunray_app"
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
