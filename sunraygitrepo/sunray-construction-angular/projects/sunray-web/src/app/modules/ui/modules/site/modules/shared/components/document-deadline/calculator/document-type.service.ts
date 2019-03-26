import * as _ from "lodash";

import { Injectable } from '@angular/core'

import { JsonApiEntity } from '@ceo/entity'

@Injectable()
export class DocumentTypeService {
  getDocumentTypes() {
    return _.map(this.getAttributes(), this.buildDocumentType);
  }

  getAttributes() {
    return [
      {
        "document-type": "notice-to-owner",
        "title": 'Notice to Owner',
        "submissionDate": null,
        "imageUrl": '/assets/frontend/document-types/notice-to-owner.svg',
        "popupContent": 'Your Notice To Owner Florida Deadline is:',
        "cardText": "First Day of Furnishing Labour/Materials"
      },
      {
        "documentType": 'construction-lien',
        "title": 'Construnction Lien',
        "submissionDate": null,
        "imageUrl": '/assets/frontend/document-types/construction-lien.svg',
        "popupContent": 'Your Construction Lien Deadline is:',
        "cardText": "Last Day of Furnishing Labour/Materials"
      },
      {
        "documentType": 'foreclosure',
        "title": 'Foreclosure',
        "submissionDate": null,
        "imageUrl": '/assets/frontend/document-types/foreclosure.svg',
        "popupContent": 'Your Foreclosure Deadline is:',
        "cardText": "Date of Lien Filing with Recording Office"
      },
    ]
  }

  buildDocumentType(attributes) {
    let entityAttrs = {
      id: 1,
      type: 'document-type',
      attributes: attributes
    }
    return new JsonApiEntity(entityAttrs);
  }
}
