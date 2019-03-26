export interface iProviderAttribute {
  name: string
  prompt: string
  options: any[]
  value: any
  step: number
}

export interface iProviderAttributeMap {
  [key: string]: iProviderAttribute
}

export const providerAttributes: iProviderAttributeMap = {
  state: {
    name: 'state',
    step: 1,
    prompt: "What state is your construction project in?",
  },
  jobType: {
    name: 'jobType',
    step: 2,
    prompt: "What type of construction project are you working on?",
  },
  projectRole: {
    name: 'projectRole',
    step: 3,
    prompt: "What is your role on the project?"
  },
}
