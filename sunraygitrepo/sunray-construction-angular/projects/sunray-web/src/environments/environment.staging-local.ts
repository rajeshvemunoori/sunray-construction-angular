export const environment = {
  applicationName: "[STAGING] - SunRay Construction Solutions",
  production: false,
  name: "staging-local",
  baseUrl: "http://localhost:4200",
  site: {
    state: {
      layout: {
        seed: {
          footer: {
            menu: {
              feature: 'cms',
              type: 'menus',
              id: 36,
            }
          },
          header: {
            menu: {
              feature: 'cms',
              type: 'menus',
              id: 37,
            }
          },
        }
      }
    }
  },
  apis: {
    sunray: {
      config: {
        url: "http://sunray-web.getcustomexposure.com/sunray_app"
      }
    },
    cms: {
      config: {
        url: "http://sunray-wordpress.customexposure.tech/wp-json"
      }
    }
  }
}


