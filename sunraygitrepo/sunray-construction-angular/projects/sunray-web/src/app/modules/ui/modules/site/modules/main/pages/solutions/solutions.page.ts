import { Component } from '@angular/core';

import { NgbModal, NgbActiveModal }   from '@ng-bootstrap/ng-bootstrap';

import { JsonApiEntity } from '@ceo/entity';

import { BasePage }      from '../imports';

import { KnowMoreComponent } from './know-more/know-more.component'

@Component({
  selector: 'sunray-ui-site-solutions-page',
  templateUrl: './solutions.page.html',
  styleUrls: ['./solutions.page.scss']
})
export class SolutionsPage extends BasePage {

  heading: any = 'Our Solutions';
  subHeading: any = 'All documents include bulletproof research & extraordinary customer support!';

  noticeType: any;

  noticeTypes: any = { 
    'Notice to Owner Florida': new JsonApiEntity({ 
      id: 1, 
      type: 'request-types', 
      attributes: { 
        "title": "Notice To Owner Florida", 
        "description": "A Notice to Owner, also know as NTO in the state of Florida, is a notice that secures your right to lien a property. If your are a subcontractor or a  supplier and do not have a direct contract with the owner of the property you must send a Notice to Owner to the General Contractor in order to secure your right to lien a property. Subcontractors and suppliers have 45 days from the first day of furnishing materials and/or labor to a property to send a Notice to Owner",
        "image-path": "/assets/frontend/our-solutions/notice-to-owner-florida-popup.svg"
      }
    }),
    'Preliminary Notice': new JsonApiEntity({ 
      id: 2, 
      type: 'request-types', attributes: {
        "title": "Preliminary Notice",
        "description": "A Preliminary Notice is a construction notice that subcontractors or material suppliers must file at the start of a construction job in order to secure their right to later file a Mechanics Lien – and so to ensure that they are paid for their work.",
        "image-path": "/assets/frontend/our-solutions/preliminary-notice-popup.svg"
      }
    }),
    'Notice of Intent': new JsonApiEntity({ 
      id: 3, 
      type: 'request-types', attributes: {
        "title": "Notice of Intent",
        "description": "A Notice of Intent to Lien is a construction document sent by subcontractors or suppliers on an unpaid project. It is sent immediately before filing a Mechanics Lien, and warns that you will lien the project if payment is not received within a certain number of days.",
        "image-path": "/assets/frontend/our-solutions/notice-of-intent-popup.svg"
      }
    }),
    'Stop Payment Notice': new JsonApiEntity({ 
      id: 4, 
      type: 'request-types', attributes: {
        "title": "Stop Payment Notice",
        "description": "A Stop Payment Notice, is a verified written notice signed by the claimant which formally notifies the property owner that the claimant has not been paid for heir labor, service, equipment, or materials provided to the construction project.",
        "image-path": "/assets/frontend/our-solutions/stop-payment-notice-popup.svg"
      }
    }),
    'Construction Lien': new JsonApiEntity({ 
      id: 5, 
      type: 'request-types', attributes: {
        "title": "Construction Lien",
        "description": "A Construction Lien is a lien that may be recorded against real property in the event of non-payment. Anyone who has worked on a construction project and has not been paid for their material, services, and/or labor should consider filing a Construction Lien.",
        "image-path": "/assets/frontend/our-solutions/construction-lien-popup.svg"
      }
    }),
    'Construction Bond': new JsonApiEntity({ 
      id: 6, 
      type: 'request-types', attributes: {
        "title": "Construction Bond",
        "description": "A Construction Bond claim (or a Bond Claim Notice)  is generally used to claim payment on a state, county or municipal construction project. Private projects can also be bonded. Lien rights do not apply to state-owned property as the state government won’t allow anyone to foreclose on its land.",
        "image-path": "/assets/frontend/our-solutions/construction-bond-popup.svg"
      }
    }),
    'Miller Act Notice': new JsonApiEntity({ 
      id: 7, 
      type: 'request-types', attributes: {
        "title": "Miller Act Notice",
        "description": "A Miller Act Notice (or Miller Act Claim) is used instead of a Mechanics Lien to seek payment for your work on a federal construction project.",
        "image-path": "/assets/frontend/our-solutions/miller-act-notice-popup.svg"
      }
    })
  };

  knowMore(noticeType) {
    this.setNoticeType(noticeType);
    const modalRef = this.modalService.open(KnowMoreComponent);
    modalRef.componentInstance.title = this.getData("title");
    modalRef.componentInstance.description = this.getData("description");
    modalRef.componentInstance.imagePath = this.getData("image-path");
  }

  getData(attr) {
    return this.noticeType.getAttr(attr);
  }

  setNoticeType(noticeType) {
    this.noticeType = this.noticeTypes[noticeType];
  }
}
