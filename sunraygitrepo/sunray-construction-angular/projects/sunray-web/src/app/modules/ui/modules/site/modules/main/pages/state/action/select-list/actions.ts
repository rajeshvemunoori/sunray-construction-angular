export let actions = [
  {
    title: "Help! I don't know what documents to send.",
    body: "Not to worry. Simply provide us with a few details about your project, and we can tell you exactly which documents you should send.",
    actionText: "View Document Requirements",
    iconThemeColor: 'orange',
    themeClass: 'primary',
    iconName: 'sunray/document-alert',
    selector: "#statutory-documents",
    footerButtonClass: 'btn-primary',
  },
  {
    title: "When do I send these documents?",
    body: "So now you know which documents to send for your project? Great! But it won't do you any good unless you submit them before the deadlines. Our easy-to-use deadline calculator can tell you exactly when your project documents need to be submitted",
    actionText: "Calculate Document Deadlines",
    iconThemeColor: 'green',
    themeClass: 'secondary',
    iconName: 'sunray/calendar-with-stars',
    selector: "#deadline-calculator",
    footerButtonClass: 'btn-secondary',
  },
  {
    title: "Ready to file?",
    body: "Great! Select your document and get started today.",
    actionText: "Select your document now",
    iconThemeColor: 'red',
    themeClass: 'red',
    iconName: 'sunray/document-multiple',
    selector: "#statutory-documents-selection",
    footerButtonClass: 'btn-white-primary',
  },
]

