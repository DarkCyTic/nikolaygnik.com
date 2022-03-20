import { Component, OnInit } from '@angular/core';
import timelineEvents from '../../assets/timeline-events.json';

import 'jquery'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  static numOfEvent: number
  static gridWidth$: any = 30
  static gridHeight: any = 2
  static paddingLeft$: any;
  static firstYear$: any = 2017
  static currentYear$: any
  static years$ = []

  static colorPalette = [
    "#FF3855",
    "#FD3A4A",
    "#FB4D46",
    "#FA5B3D",
    "#FFAA1D",
    "#FFF700",
    "#299617",
    "#A7F432",
    "#2243B6",
    "#5DADEC",
    "#5946B2",
    "#9C51B6",
    "#A83731",
    "#AF6E4D",
    "#1B1B1B",
    "#BFAFB2",
    "#FF5470",
    "#FFDB00",
    "#FF7A00",
    "#FDFF00",
    "#87FF2A",
    "#0048BA",
    "#FF007C",
    "#E936A7",
  ]

  rawEvents$: any
  events$: any

  years$ = []
  num_years$: any
  paddingLeft$: any
  width$: any = TimelineComponent.gridWidth$

  constructor() { }

  ngOnInit() {
    this.rawEvents$ = timelineEvents['events'];
    this.events$ = []
    for (let event in this.rawEvents$) {
      this.events$.push(this.rawEvents$[event])
    }

    TimelineComponent.numOfEvent = 1

    this.paddingLeft$ = TimelineComponent.gridWidth$;
    TimelineComponent.paddingLeft$ = this.paddingLeft$
    
    this.setYears()
  }

  setYears(){
    TimelineComponent.currentYear$ = new Date().getFullYear() + 1
    for(let year = TimelineComponent.firstYear$; year <= TimelineComponent.currentYear$; year++){
      this.years$.push(year)
    }
    TimelineComponent.years$ = this.years$
    this.num_years$ = this.years$.length
  }

}
