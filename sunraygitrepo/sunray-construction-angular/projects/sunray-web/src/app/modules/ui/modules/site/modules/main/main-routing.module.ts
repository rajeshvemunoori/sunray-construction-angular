import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// SunRay
import {
  SharedModule,
  AppComponent,
  LearningCenterEBookComponent,
  LearningCenterInfographicComponent,
  LearningCenterVideoComponent,
  LearningCenterWebinarComponent,
  SeminarListComponent,
  SeminarDetailComponent,
} from '../shared'

import { LayoutModule, LayoutComponent } from '../layout'

import * as pages from './pages'

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: {
      reuseRoute: false,
    },
    children: [
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'home',
            redirectTo: '',
            pathMatch: 'full',
          },
          {
            path: '',
            component: pages.HomePage,
          },
          {
            path: 'states/:slug',
            component: pages.StatePage,
          },
          {
            path: 'deadline-calculator',
            component: pages.DeadlineCalculatorPage,
          },
          {
            path: 'documents/:slug',
            component: pages.DocumentPage,
          },
          {
            path: 'our-mission',
            component: pages.MissionPage,
          },
          {
            path: 'our-team',
            component: pages.TeamPage,
          },
          {
            path: 'pricing',
            component: pages.PricingPage,
          },
          {
            path: 'enterprise-solutions',
            component: pages.EnterprisePage,
          },
          {
            path: 'contact-us',
            component: pages.ContactUsPage,
          },
          {
            path: 'signup',
            component: pages.SignupPage,
          },
          {
            path: 'integrations',
            component: pages.IntegrationsPage,
          },
          {
            path: 'terms',
            component: pages.TermsPage,
          },
          {
            path: 'privacy-policy',
            component: pages.PrivacyPolicyPage,
          },
          {
            path: 'disclosure',
            component: pages.DisclosurePage,
          },
          {
            path: 'solutions',
            component: pages.SolutionsPage,
          },
          {
            path: 'learning-center',
            redirectTo: 'learning-center/florida',
            pathMatch: 'full',
          },
          {
            path: 'learning-center/:slug',
            component: pages.LearningCenterPage,
            children: [
              {
                path: '',
                redirectTo: 'e-books',
              },
              {
                path: 'e-books',
                component: LearningCenterEBookComponent,
              },
              {
                path: 'infographics',
                component: LearningCenterInfographicComponent,
              },
              {
                path: 'videos',
                component: LearningCenterVideoComponent,
              },
              {
                path: 'webinars',
                component: LearningCenterWebinarComponent,
              },
            ]
          },
          {
            path: 'user-account',
            component: pages.UserAccountComponent,
            children: [
              {
                path: 'password-reset',
                component: pages.PasswordResetPage,
              },
            ]
          },
          {
            path: 'search',
            component: pages.SearchPage,
          },
          {
            path: 'seminars',
            component: pages.SeminarIndexPage,
          },
          {
            path: 'seminars/:id',
            component: pages.SeminarSinglePage,
          },
          {
            path: 'webinars',
            component: pages.WebinarsPage,
            children: [
              {
                path: '',
                component: pages.WebinarListComponent,
              },
              {
                path: ':id',
                component: pages.WebinarDetailComponent,
              },
            ]
          },
          {
            path: 'features',
            component: pages.FeaturesPage
          },
          {
            path: '**',
            redirectTo: '',
            pathMatch: 'full',
          },
        ]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    LayoutModule,
  ],
  exports: [
    RouterModule
  ],
})
export class MainRoutingModule { }

