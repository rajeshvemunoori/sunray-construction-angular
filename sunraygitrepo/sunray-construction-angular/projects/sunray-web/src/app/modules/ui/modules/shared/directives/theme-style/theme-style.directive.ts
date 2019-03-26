import {of as observableOf,  Observable } from 'rxjs'

import {
  SimpleChanges, Input, Directive,
  ElementRef, Renderer2, OnChanges
} from '@angular/core'

//import { ThemeElementsService }      from '@sunray-web/theme'
import { DataService } from '@ceo/entity'

@Directive({
  selector: '[appDirectiveThemeStyle]'
})
export class ThemeStyleDirective implements OnChanges {
  @Input() config: any

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    //private themeElementsService: ThemeElementsService,
    private dataService: DataService,
  ) {}

  ngOnChanges(changes: SimpleChanges){
    if(changes.config){
      this.setThemeStyle()
    }
  }

  setThemeStyle() {
    let resourceOpts = {
      type: "team-members-new"
    }
    this.dataService
      .get(resourceOpts)

      /*
    this.getThemeStyle$()
      .subscribe((style) => this.renderer.addClass(this.el.nativeElement, style))
      */
  }

  getThemeStyle$() {
    //return this.themeElementsService.getThemeElementStyle$(this.config)
    return observableOf([])
  }
}
