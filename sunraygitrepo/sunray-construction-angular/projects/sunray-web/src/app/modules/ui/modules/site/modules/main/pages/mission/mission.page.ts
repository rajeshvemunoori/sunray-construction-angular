import { Component } from '@angular/core';

import { BasePage } from '../imports';

import { missionItems } from './mission-items';

@Component({
  selector: 'sunray-ui-site-mission-page',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss']
})
export class MissionPage extends BasePage {
  missionItems: any[] = missionItems;
}
