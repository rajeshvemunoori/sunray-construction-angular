import * as _ from 'lodash'

export const baseIcons = [
  {
    name: 'search',
    url: 'assets/frontend/search.svg'
  },
  {
    name: 'signup',
    url: 'assets/frontend/signup.svg'
  },
  {
    name: 'logout',
    url: 'assets/frontend/logout.svg'
  },
  {
    name: 'document',
    url: 'assets/frontend/document.svg'
  },
  {
    name: 'software',
    url: 'assets/frontend/software.svg'
  },
  {
    name: 'calendar',
    url: 'assets/frontend/icons/calendar.svg'
  },
]

export const sunrayIcons = [
  {
    name: 'sunray/logo',
    url: 'assets/frontend/logo.svg',
  },
  {
    name: 'sunray/document-alert-in-circle',
    url: '/assets/frontend/notice-to-require.svg',
  },
  {
    name: 'sunray/document-alert',
    url: '/assets/frontend/icons/document-alert.svg',
  },
  {
    name: 'sunray/calendar-round',
    url: '/assets/frontend/icons/round/calendar.svg',
  },
  {
    name: 'sunray/document-search',
    url: '/assets/frontend/icons/document-search.svg',
  },
  {
    name: 'sunray/document-multiple',
    url: '/assets/frontend/icons/document-multiple.svg',
  },
  {
    name: 'sunray/calendar-with-stars',
    url: '/assets/frontend/icons/calendar-with-stars.svg',
  },
  {
    name: 'sunray/user',
    url: '/assets/frontend/icons/user.svg',
  },
  {
    name: 'site/login/modal-bg',
    url: '/assets/frontend/login/modal-bg.svg',
  },
]

export const jobTypeIcons = [
  {
    name: 'sunray/job-types/private-commercial',
    url: 'assets/frontend/job-types/private-commercial.svg',
  },
  {
    name: 'sunray/job-types/private-residential',
    url: 'assets/frontend/job-types/private-residential.svg',
  },
  {
    name: 'sunray/job-types/federal',
    url: 'assets/frontend/job-types/federal.svg',
  },
  {
    name: 'sunray/job-types/statecounty',
    url: 'assets/frontend/job-types/statecounty.svg',
  },
]

export const projectRoleIcons = [
  {
    name: 'sunray/project-roles/general-contractor',
    url: '/assets/frontend/states/project-roles/general-contractor.svg',
  },
  {
    name: 'sunray/project-roles/subcontractor',
    url: '/assets/frontend/states/project-roles/subcontractor.svg',
  },
  {
    name: 'sunray/project-roles/supplier',
    url: '/assets/frontend/states/project-roles/supplier.svg',
  },
]

export const statutoryDocumentIcons = [
  {
    name: 'sunray/statutory-documents/partial-satisfaction',
    url: '/assets/frontend/statutory-documents/satisfaction.svg',
  },
  {
    name: 'sunray/statutory-documents/claim-of-mechanics-lien',
    url: '/assets/frontend/statutory-documents/claim-of-mechanics-lien.svg',
  },
  {
    name: 'sunray/statutory-documents/satisfaction',
    url: '/assets/frontend/statutory-documents/satisfaction.svg',
  },
  {
    name: 'sunray/statutory-documents/notice-of-commencement',
    url: '/assets/frontend/statutory-documents/document.svg',
  },
  {
    name: 'sunray/statutory-documents/notice-to-ownernotice-to-contractor',
    url: '/assets/frontend/statutory-documents/notice-to-owner.svg',
  },
  {
    name: 'sunray/statutory-documents/request-a-copy-of-a-lease',
    url: '/assets/frontend/statutory-documents/document.svg',
  },
  {
    name: 'sunray/statutory-documents/notice-of-non-payment-claim-on-bond',
    url: '/assets/frontend/statutory-documents/notice-of-nonpayment.svg',
  },
  {
    name: 'sunray/statutory-documents/waiver-and-release-of-bond-claim-upon-final-payment',
    url: '/assets/frontend/statutory-documents/document.svg',
  },
  {
    name: 'sunray/statutory-documents/waiver-and-release-of-bond-claim-upon-partial-payment',
    url: '/assets/frontend/statutory-documents/document.svg',
  },
  {
    name: 'sunray/statutory-documents/foreclosure',
    url: '/assets/frontend/statutory-documents/foreclosure.svg',
  },
  {
    name: 'sunray/statutory-documents/nto',
    url: '/assets/frontend/statutory-documents/nto.svg',
  },
  {
    name: 'sunray/statutory-documents/lien-request',
    url: '/assets/frontend/statutory-documents/lien-request.svg',
  },
  {
    name: 'sunray/statutory-documents/notice-of-non-payment',
    url: '/assets/frontend/statutory-documents/notice-of-non-payment.svg',
  },
]

let names = [
  '2nd-month-bond-claim-notice',
  '2nd-month-notices',
  '3rd-month-bond-claim-notice',
  '3rd-month-fund-trapping',
]

let addIcon = (name) => {
  let iconName = 'nto'

  let icon = {
    name: `sunray/statutory-documents/${name}`,
    url: `/assets/frontend/statutory-documents/${iconName}.svg`,
  }
  statutoryDocumentIcons.push(icon)
}

_.map(names, addIcon)


export const icons = _.flatten([
  baseIcons, sunrayIcons, statutoryDocumentIcons,
  jobTypeIcons, projectRoleIcons,
])
