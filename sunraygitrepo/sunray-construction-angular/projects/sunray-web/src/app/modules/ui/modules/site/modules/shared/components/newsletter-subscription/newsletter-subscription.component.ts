import {
  Component, OnInit
} from '@angular/core';

import { NotificationService }      from '../../services';

import { DataService }          from '@ceo/entity';

@Component({
  selector: 'sunray-site-shared-newsletter-subscription',
  templateUrl: './newsletter-subscription.component.html',
  styleUrls: ['./newsletter-subscription.component.scss'],
  providers: [NotificationService]

})
export class NewsletterSubscriptionComponent implements OnInit {
  emailAddress: any;

  constructor(
    //private store: Store<RootState>,
    private notificationService: NotificationService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
  }

  submit() {
    if(this.emailAddress) {
      this.subscribeMailchimp(this.mailchimpParams());
      this.notificationService.showNotification(
        "Subscribed successfully for newsletters!", "Dismiss", 5000
      );
    }
    else {
      this.notificationService.showNotification(
        "Enter the Email Address!", "Dismiss", 5000
      );
    }
  }

  subscribeMailchimp(params){
    let resourceOpts = {
      feature: "app",
      type: "contact_list_member",
      data: params
    }
    this.dataService.get$(resourceOpts);
  }

  mailchimpParams() {
    return {
      'email':  this.emailAddress,
      'list-type': 'mailchimp',
      'status': 'subscribed'
    };
  }
}
