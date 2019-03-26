import * as resourceType from './resource-type/index'

import { BaseComponent          as LearningCenterBaseComponent } from './base/base.component'
import { EBookComponent         as LearningCenterEBookComponent } from './e-book/e-book.component'
import { InfographicComponent   as LearningCenterInfographicComponent } from './infographic/infographic.component'
import { VideoComponent         as LearningCenterVideoComponent } from './video/video.component'
import { WebinarComponent       as LearningCenterWebinarComponent } from './webinar/webinar.component'
import { ContentHeaderComponent as LearningCenterContentHeaderComponent } from './shared/content-header/content-header.component'
import { ContentBodyComponent   as LearningCenterContentBodyComponent } from './shared/content-body/content-body.component'

export const components: any[] = [
  ...resourceType.components,
  LearningCenterBaseComponent,
  LearningCenterContentHeaderComponent,
  LearningCenterContentBodyComponent,
  LearningCenterEBookComponent,
  LearningCenterInfographicComponent,
  LearningCenterVideoComponent,
  LearningCenterWebinarComponent,
]

export { LearningCenterEBookComponent }
export { LearningCenterInfographicComponent }
export { LearningCenterVideoComponent }
export { LearningCenterWebinarComponent }
export { LearningCenterBaseComponent }
