declare var $:any

import { Observable }   from 'rxjs'

import {
  Component,
  ElementRef,
} from '@angular/core'

import { Store } from '@ngrx/store'

import {
  FormsModule, NgForm, NG_ASYNC_VALIDATORS,
  Validator, FormControl, ValidationErrors
} from '@angular/forms'

import { DataService as AppDataService }   from '@ceo/entity'
import { iEntity, iEntityCollection  }              from '@ceo/entity'

import {
  BasePage,
  PageService,
  DocumentTypeProvider,
} from '../imports'

import { DataService }   from './data.service'

@Component({
  selector: 'sunray-ui-site-state-page',
  templateUrl: './state.page.html',
  styleUrls: ['./state.page.scss'],
  providers: [
    DataService,
    DocumentTypeProvider,
  ],
})
export class StatePage extends BasePage {
  sections: any = {
    requiredStatutoryDocuments: {
      heading: "Statutory Documents",
      subHeading: "Not sure which documents to send? We can help!"
    },
    deadlineCalculator: {
      heading: "Statutory Deadlines",
      subHeading: "Provide Your Project Dates to Calculate Deadlines",
    },
    learningCenter: {
      heading: 'Learning Center',
      subHeading: 'Explore useful resources to help you along the way!',
    },
    statutoryDocumentsSelection: {
      heading: 'Select the document you wish to send',
      subHeading: 'All our documents include Bulletproof Research & Extraordinary Customer Support!',
    },
    faqs: {
      heading: "Frequently Asked Questions",
      subHeading: "Preliminary Notice, Stop Payment Notice, Mechanic's Lien",
    },
    reviews: {
      heading: "Reviews",
      subHeading: "See what some of our amazing customers have to say about SunRay!",
    },
  }

  delegatedProperties: any = {
    dataService: [
      'slug$', 
      'primaryEntity$',
      'appState$',
      'appStates$',
      'appTranslations$',
      'appJobTypes$',
      'appProjectRoles$',
      'appProjectTypes$',
      'appStateRequestTypes$',
      'cmsStatutoryDocuments$',
      'cmsFaqs$',
      'cmsLcCategories$',
      'cmsState$',
      'cmsTestimonials$',
      'cmsWebinars$',
      'statutoryDates$',
      'pageSections$',
      'dateAttrs', 
    ]
  }

  constructor(
    public pageService: PageService,
    public dataService: DataService,
    public elementRef: ElementRef,
    public documentTypeProvider: DocumentTypeProvider
  ) {
    super(pageService, dataService)
  }

  ngOnInit() {
    super.ngOnInit()
    //this.documentTypeProvider.set('state', this.appState$)
  }

  onActionSelected(event) {
    let selector = event.item.selector
    this.scrollToElement(selector)
  }

  scrollToElement(selector: string) {
    var el = this.elementRef.nativeElement.querySelector(selector)
    if(el) {
      let scrollOpts = {
        behavior: 'smooth',
        block: 'start',
      }
      el.scrollIntoView(scrollOpts)
    }
  }

  private goToAnchor(id){
    document.getElementById(id).scrollIntoView()
  }

  private dataLoaded() {
    return this.appState$ && this.cmsState$
  }
}
