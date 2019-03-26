// libs
declare var $:any;

import * as _ from 'lodash';

import { Observable }     from 'rxjs';

import {
  Component, ElementRef, OnInit,
  ViewChild, AfterViewInit,
  EventEmitter, Output, Input
} from '@angular/core';

import { EntityCollection } from '@ceo/entity';

import { stateCodes } from './state-codes';

@Component({
  selector: 'sunray-site-clickable-map',
  templateUrl: './clickable-map.component.html',
  styleUrls: ['./clickable-map.component.scss']
})
export class ClickableMapComponent implements OnInit, AfterViewInit {
  private allStateCodes: any[]= stateCodes;

  @ViewChild('map') mapElement:ElementRef;

  @Input()
  enabledStates$: Observable<EntityCollection>;

  @Input()
  backgroundColor: any = "#0373bb";
  @Input()
  hoverColor: any = "#fff";
  @Input()
  color: any = "#0373bb";
  @Input()
  borderColor: any = '#fff';
  @Input()
  borderOpacity: any = 1;
  @Input()
  borderWidth: any = 1.2;
  @Input()
  selectedColor: any = "#0373bb";
  @Input()
  disabledColor: any = '#dee2e6';

  @Output()
  regionEmitter: EventEmitter<any> = new EventEmitter<any>();
  
  enabledColor: any = "#ffffff";

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.launchMap();
    this.updateMap();
  }

  launchMap() {
    var self = this;
    $(this.mapElement.nativeElement).vectorMap({
      map: 'usa_en',
      enableZoom: false,
      hoverColor: this.hoverColor,
      borderColor: this.borderColor,
      borderOpacity: this.borderOpacity,
      borderWidth: this.borderWidth,
      color: this.color,
      backgroundColor: this.backgroundColor,
      selectedColor: this.selectedColor
    });
  }

  updateMap() {
    if(this.enabledStates$) {
      this.enabledStates$.subscribe(states => this.renderMap(states))
    }
    else {
      this.regionClickCallback(this.allStateCodes)
    }
  }

  renderMap(enabledStates) {
    var codes = _.map(_.map(enabledStates.entities, 'code'), _.lowerCase)
    if(!_.isEmpty(codes)) {
      this.updateStateColors(codes)
      this.bindMapCallBacks(codes)
    }
  }

  bindMapCallBacks(codes) {
    this.regionClickCallback(codes)
    this.regionMouseOverCallback(codes)
    this.regionMouseOutCallback(codes)
  }

  private regionClickCallback(codes) {
    $(this.mapElement.nativeElement)
      .bind(
        'regionClick.jqvmap',
        _.bind(
          _.partial(this.regionClick, codes),
          this
        )
      )
  }

  private regionMouseOverCallback(codes) {
    $(this.mapElement.nativeElement)
      .bind(
        'regionMouseOver.jqvmap',
        _.bind(
          _.partial(this.regionMouseOver, codes),
          this
        )
      )
  }

  private regionMouseOutCallback(codes) {
    $(this.mapElement.nativeElement)
      .bind(
        'regionMouseOut.jqvmap',
        _.bind(
          _.partial(this.regionMouseOut, codes),
          this
        )
      )
  }

  private regionClick(codes, event, code, region) {
    if(_.includes(codes, code)){
      $(".jqvmap-label").hide();
      this.regionEmitter.emit(region);
    } else {
      event.preventDefault();
    }
  }

  private updateStateColors(codes, event, map) {
    let updateStateColor = (code) => {
      if(!_.includes(codes, code)){
        this.fillStateColor(code, this.disabledColor)
      } else {
        this.fillStateColor(code, this.enabledColor)
      }
    }
    
    _.forEach(this.allStateCodes, updateStateColor)
  }

  private regionMouseOver(codes, event, code, region) {
    if(!_.includes(codes, code)){
      this.disableState(code)
    } else {
      this.selectState(code)
    }
  }

  private regionMouseOut(codes, event, code, region) {
    if(!_.includes(codes, code)){
      this.disableState(code)
    } else {
      this.enableState(code)
    }
  }

  private selectState(code) {
    this.fillStateColor(code, this.selectedColor)
    this.addCursorStyle(code, "pointer")
  }

  private enableState(code) {
    this.fillStateColor(code, this.enabledColor)
    this.addCursorStyle(code, "pointer")
  }

  private disableState(code) {
    this.fillStateColor(code, this.disabledColor)
    this.addCursorStyle(code, "no-drop")
  }

  private fillStateColor(code, color) {
    $("path[id$=" + code + "]").css("fill", color);
  }

  private addCursorStyle(code, cursor) {
    $("path[id$=" + code + "]").css("cursor", cursor);
  }
}
