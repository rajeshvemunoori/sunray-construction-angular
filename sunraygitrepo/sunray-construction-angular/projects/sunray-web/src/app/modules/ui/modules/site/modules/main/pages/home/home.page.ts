import { Observable } from 'rxjs'

import {
  Component,
  ElementRef,
} from '@angular/core'

import { Router, ActivatedRoute, NavigationEnd, } from '@angular/router'

import { iEntityCollection }    from '@ceo/entity'

import {
  BasePage,
  LightBoxComponent,
  PageService,
} from '../imports'

import { homePagePublications }        from './publications'
import {
  homePageSections,
  homePageVideos,
  homePageStates,
  homePagePrimaryShortcuts,
} from './home-page-data'
import { DataService } from './data.service'

@Component({
  selector: 'sunray-ui-site-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', './shortcuts.component.scss'],
  providers: [
    DataService,
  ],
})
export class HomePage extends BasePage {
  delegatedProperties: any = {
    dataService: ['appStates$', 'cmsGalleryImages$', 'cmsPublications$']
  }

  sections: any = homePageSections
  publications: any[] = homePagePublications
  states: any[] = homePageStates
  primaryShortcuts : any[] = homePagePrimaryShortcuts

  constructor(
    public pageService: PageService,
    public dataService: DataService,
    public elementRef: ElementRef,
  ) {
    super(pageService, dataService)
  }

  ngOnInit() {
    super.ngOnInit()
    this.dataService.queryParams$.subscribe(params => {
      this.scrollToElement("#"+params.scrollElement)
    })
  }

  onRegionSelect(region) {
    let regionName = this.pageService.kebabCase(region)
    let route = `states/${regionName}`
    this.pageService.navigate([route], { relativeTo: this.pageService.route })
  }

  lightBoxPopup(videoUrl){
    let modalRef = this.pageService.modalService.open(LightBoxComponent)
    modalRef.componentInstance.videoUrl = videoUrl
  }

  scrollToElement(selector: string) {
    var el = this.elementRef.nativeElement.querySelector(selector)
    if(el) {
      let scrollOpts = {
        behavior: 'smooth',
        block: 'end',
      }
      el.scrollIntoView(true)
      el.scrollIntoView(scrollOpts)
    }
  }
}
