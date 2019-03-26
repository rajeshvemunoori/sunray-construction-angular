import * as _ from 'lodash'

import {
  Observable,
  BehaviorSubject,
  combineLatest,
} from 'rxjs'

import {
  map,
} from 'rxjs/operators'

import {
  Component, Input,
  ElementRef,
  ViewChild,
} from '@angular/core'

import {
  iEntity,
} from '@ceo/entity'

import {
  FormFactory,
  FormComponent,
} from '@ceo/shared'

import { BaseComponent } from '../../../../imports'

import {
  DataService,
  PageService,
} from '../../../../services'

@Component({
  selector: 'sunray-site-project-deadline-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent extends BaseComponent {
  @ViewChild(FormComponent) formComponent: FormComponent
  @Input() projectTypeResolver: any
  @Input() project$: Observable<iEntity>
  @Input() form$: any

  requestedStep$: BehaviorSubject<any> = new BehaviorSubject('project-type-resolver')
  currentStep$: BehaviorSubject<any> = new BehaviorSubject('')
  defaultStep: string = 'document-type-list'
  form: any
  theForm: any

  delegatedProperties: any = {
    pageService: ['showNotification'],
    projectTypeResolver: [
      'projectType$',
      'documentTypes$',
    ]
  }

  constructor(
    public elementRef: ElementRef,
    public pageService: PageService,
    public dataService: DataService,
    public formFactory: FormFactory,
  ) {
    super()
  }


  ngOnInit() {
    super.ngOnInit()
    this.projectTypeResolver.projectType$.subscribe(entity => console.log(entity))

    this.currentAttributeSteps()
    this.requestedStep$.subscribe(step => this.showStep(step))

    this.form$.subscribe(form => {
      console.log("Set the form")
      this.form = form
    })

    this.theForm = this.formFactory.build()
  }

  private currentAttributeSteps() {
    return this.projectTypeResolver.currentAttribute$
      .subscribe(attribute => this.showStep(this.resolveCurrentStep(attribute)))
  }

  private showStep(step) {
    this.currentStep$.next(step)
    this.scrollToWidgetTop(step)
  }

  private resolveCurrentStep(attribute): string {
    if(attribute) {
      return 'project-type-resolver'
    }

    return this.defaultStep
  }


  breadcrumbStep(event) {
    
    let attributes = this.projectTypeResolver.attributes
    let attributeName = event.item.url
    let index = _.findIndex(attributes, {name: attributeName})

    let attributesToClear = _.drop(attributes, index)


    let clearAttribute = (attribute) => {
      this.projectTypeResolver.setAttribute(attribute.name, null)
    }
    _.map(attributesToClear, clearAttribute)
  }

  onClickCalculate() {
    //return this.formComponent.formData().value
    this.form$.subscribe(form => this.handleSubmission(form))
  }

  handleSubmission(form) {
    console.log("calculate")
    if(!form.valid) {
      this.showInvalidFormNotification()
    }
  }

  showInvalidFormNotification() {
    this.showNotification(
      "Please complete all the fields before submitting."
    )

  }

  private scrollToWidgetTop(step) {
    let selector = '.widget-inner-wrap'
    var el = this.elementRef.nativeElement.querySelector(selector)
    if(el && !this.isElementInViewport(el)) {
      let scrollOpts = {
        block: 'start',
      }
      el.scrollIntoView(scrollOpts)

      let scrollOffset = () => {
        window.scrollBy(0, -100)
      }
      setTimeout(scrollOffset, 0)
    }

  }

  private isElementInViewport(el) {
    var rect = el.getBoundingClientRect()

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    )
  }
}
