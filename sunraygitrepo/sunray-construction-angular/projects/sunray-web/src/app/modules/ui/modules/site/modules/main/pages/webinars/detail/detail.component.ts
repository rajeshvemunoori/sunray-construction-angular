import { Observable ,  Subscription }                     from 'rxjs';
import { Component, OnInit, OnDestroy }   from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataService }                    from '@ceo/entity';
import * as moment                        from 'moment';
import { DatePipe }                       from '@angular/common';

@Component({
  //moduleId: module.id,
  selector: 'sunray-site-webinar-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  entity$: Observable<any>;
  id;
  subject;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private datePipe: DatePipe,
               private dataService: DataService,
              ) {
    this.route.params.subscribe(params => console.log(params));
  }

  ngOnInit() {
    this.subject = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.entity$ = this.getWebinar(this.id);
    })
  }


 ngOnDestroy() {
    this.subject.unsubscribe();
  }

  dateTimeDisplay(webinar): string {
    var dateFormatter = this.datePipe;
    var date = webinar['event-start-date'];
    var time = webinar['start-time'];
    var result = '';

    var webinarTime = this.timeFormat(time);
    result = dateFormatter.transform(date,"EEEE, \n MMMM d")+ ", " + webinarTime;
    return result;
  }

  timeFormat(time): string{
    var webinarTime = moment.utc(time, 'hh:mm').format('h:mm A');
    return webinarTime;
  }

  getWebinar(id){
    let resourceOpts = {
      feature: 'cms',
      id: id,
      type: "webinars"
    }
    return this.dataService.get$(resourceOpts);
  }

  presenters(event) {
    return event.presenters;
  }

}
