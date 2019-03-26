import * as _ from 'lodash'

let defaultConfig = {
  width: '800px',
  footer: {
    show: true,
    className: 'text-center',
    actions: [
      {
        name: 'submit',
        text: 'Submit',
        className: 'btn btn-primary btn-lg btn-rounded',
      },
      {
        name: 'cancel',
        text: 'Cancel',
        className: 'btn btn-primary btn-lg btn-rounded',
      },
    ]
  }
}
export const dialogConfigs = {
  'defaultConfig': defaultConfig,
  'company-division-edit': {
    header: {
      show: true,
      title: 'Division Details' 
    }
  },
  'company-primary-contacts-edit': {
    header: {
      show: true,
      title: 'Primary Conctact' 
    }
  },
  'company-accounts-payable-contacts-edit': {
    header: {
      show: true,
      title: 'Company Accounts Payable Contact' 
    }
  }
}
