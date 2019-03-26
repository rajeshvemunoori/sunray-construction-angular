let defaultConfig ={
  width: '800px',
  header: {
    show: true,
    title: 'Please provide some details.'
  },
  footer: {
    show: true,
    className: 'text-center',
    actions: [
      {
        name: 'submit',
        text: 'Submit',
        className: 'btn btn-primary btn-lg btn-rounded',
      },
    ]
  }
}

export const dialogConfigs = {
  'defaultConfig': defaultConfig
}
