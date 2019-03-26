import * as contactUs       from './contact-us'
import * as deadlineCalculator from './deadline-calculator'
import * as disclosure      from './disclosure'
import * as document        from './document'
import * as enterprise      from './enterprise'
import * as features        from './features'
import * as home            from './home'
import * as integrations    from './integrations'
import * as learningCenter  from './learning-center'
import * as mission         from './mission'
import * as pricing         from './pricing'
import * as privacyPolicy   from './privacy-policy'
import * as search          from './search'
import * as seminar         from './seminar'
import * as signup          from './signup'
import * as solutions       from './solutions'
import * as state           from './state'
import * as team            from './team'
import * as terms           from './terms'
import * as userAccount     from './user-account'
import * as webinars        from './webinars'

export const components: any[] = [
  ...contactUs.components,
  ...deadlineCalculator.components,
  ...disclosure.components,
  ...document.components,
  ...enterprise.components,
  ...features.components,
  ...home.components,
  ...integrations.components,
  ...learningCenter.components,
  ...mission.components,
  ...pricing.components,
  ...privacyPolicy.components,
  ...search.components,
  ...seminar.components,
  ...signup.components,
  ...solutions.components,
  ...state.components,
  ...team.components,
  ...terms.components,
  ...userAccount.components,
  ...webinars.components,
]

export { ContactUsPage } from './contact-us'
export { DeadlineCalculatorPage } from './deadline-calculator'
export { DisclosurePage } from './disclosure'
export { DocumentPage } from './document'
export { EnterprisePage } from './enterprise'
export { FeaturesPage } from './features'
export { HomePage } from './home'
export { IntegrationsPage } from './integrations'
export { MissionPage } from './mission'
export { PricingPage } from './pricing'
export { PrivacyPolicyPage } from './privacy-policy'
export { SearchPage } from './search'
export {
  SeminarIndexPage,
  SeminarSinglePage,
} from './seminar'
export { SignupPage } from './signup'
export { StatePage } from './state'
export { TeamPage } from './team'
export { TermsPage } from './terms'
export * from './webinars'
export * from './learning-center'
export * from './solutions'
export {
  PasswordResetPage,
  UserAccountComponent,
} from './user-account'
