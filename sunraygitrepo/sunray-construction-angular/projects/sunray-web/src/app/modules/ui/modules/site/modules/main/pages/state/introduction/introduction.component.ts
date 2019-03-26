import { Component, OnInit, Input } from '@angular/core';

import { Observable }   from 'rxjs';

import { iEntityCollection  }  from '@ceo/entity';

@Component({
  selector: 'sunray-ui-site-state-page-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  @Input()
  content$: Observable<iEntity>

  @Input()
  translations$: Observable<iEntityCollection>

  translations: iEntityCollection

  private translationPrefix: string = 'site.pages.state.introduction.'

  ngOnInit() {
    this.loadTranslations()
  }

  loadTranslations() {
    this.translations$
      .subscribe((collection) => this.setTranslations(collection))
  }

  setTranslations(collection) {
    this.translations = collection
  }

  translate(key, defaultTranslation = '') {
    if (!this.translations) {
      return defaultTranslation
    }

    let translationKey = `${this.translationPrefix}${key}`
    let entity = this.translations.find(translationKey)

    if(entity) {
      return entity.value
    }
    else {
      return defaultTranslation
    }
  }
}
