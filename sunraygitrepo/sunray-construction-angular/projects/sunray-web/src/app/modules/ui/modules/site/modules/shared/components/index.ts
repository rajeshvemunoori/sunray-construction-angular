import * as base                from './base'
import * as clickableMap        from './clickable-map'
import * as documentDeadline    from './document-deadline'
import * as documentType        from './document-type'
import * as learningCenter      from './learning-center'
import * as loginForm           from './login-form'
import * as stateSelect         from './state-select'
import * as lightBox            from './light-box'
import * as galleryImage        from './gallery-image'
import * as faq                 from './faq'
import * as app                 from './app'
import * as projectRole         from './project-role'
import * as project             from './project'
import * as jobType             from './job-type'
import * as statutoryDocument   from './statutory-document'
import * as searchForm          from './search-form'
import * as seminar             from './seminar'
import * as testimonial         from './testimonial'

import { ContactUsFormComponent }          from './contact-us-form/contact-us-form.component'
import { ContactUsFormModalComponent }     from './contact-us-form-modal/contact-us-form-modal.component'
import { CongratsPopupComponent }          from './congrats-popup/congrats-popup.component'
import { ContentHeaderComponent }          from './content-header/content-header.component'
import { NewsletterSubscriptionComponent } from './newsletter-subscription/newsletter-subscription.component'

export const components: any[] = [
  ...base.components,
  clickableMap.ClickableMapComponent,
  stateSelect.StateSelectComponent,
  ...learningCenter.components,
  loginForm.LoginFormComponent,
  ContactUsFormComponent,
  ContactUsFormModalComponent,
  CongratsPopupComponent,
  ContentHeaderComponent,
  NewsletterSubscriptionComponent,
  lightBox.LightBoxComponent,
  ...galleryImage.components,
  ...faq.components,
  app.AppComponent,
  projectRole.SelectListComponent,
  ...statutoryDocument.components,
  jobType.SelectListComponent,
  ...documentDeadline.components,
  ...documentType.components,
  ...project.components,
  ...seminar.components,
  ...searchForm.components,
  ...testimonial.components,
]

export { clickableMap }
export { documentDeadline }
export { loginForm }
export { stateSelect }
export { lightBox }
export { galleryImage }
export { faq }
export { app }
export { projectRole }
export { jobType }
export { seminar }

export * from './login-form'
export * from './app'
export * from './learning-center'
export * from './seminar'
export * from './base'

export { ContactUsFormComponent }
export { ContactUsFormModalComponent }
export { CongratsPopupComponent }
export {
  DetailListComponent as DocumentTypeDetailListComponent,
} from './document-type'
export { ContentHeaderComponent }
export * from './light-box'
export { NewsletterSubscriptionComponent }
export { SearchFormComponent } from './search-form'
export { TestimonialListComponent } from './testimonial'
export {
  TypeResolveComponent as ProjectTypeResolveComponent,
} from './project'
