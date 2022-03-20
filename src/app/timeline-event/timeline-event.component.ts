import { Component, OnInit, Input } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-timeline-event',
  templateUrl: './timeline-event.component.html',
  styleUrls: ['./timeline-event.component.scss']
})
export class TimelineEventComponent implements OnInit {

  @Input()
  event_data$: any
  first_Year$: any = TimelineComponent.firstYear$
  last_Year$: any = TimelineComponent.currentYear$

  start_date$: any
  end_date$: any
  name$: any
  role$: any
  start_year$: any
  end_year$: any
  start_month$: any
  end_month$: any
  
  width$: any
  left$: any
  bottom$: any
  color$: any

  constructor() { }

  ngOnInit() {
    TimelineComponent.numOfEvent++
    this.name$ = this.event_data$['name']
    this.start_date$ = new Date(this.event_data$['start_date'])
    this.start_year$ = this.start_date$.getFullYear()
    this.start_month$ = this.start_date$.getMonth()
    this.end_date$ = new Date(this.event_data$['end_date'])
    this.end_year$ = this.end_date$.getFullYear()
    console.log(this.end_date$)
    this.end_month$ = this.end_date$.getMonth()
    this.role$ = this.event_data$['role']

    if(this.start_year$ < this.first_Year$) {
      this.width$ = ((this.end_year$ - this.first_Year$) * TimelineComponent.gridWidth$) + TimelineComponent.paddingLeft$
      this.left$ = 0
    } else if(this.end_year$ > this.last_Year$) {
      this.width$ = ((this.last_Year$ + 1) - this.start_year$) * TimelineComponent.gridWidth$
      this.left$ = ((this.start_year$ - this.first_Year$) * TimelineComponent.gridWidth$) + ((this.start_month$) * (TimelineComponent.gridWidth$ / 12)) + TimelineComponent.paddingLeft$
    } else {
      this.width$ = ((this.end_year$ - this.start_year$) * TimelineComponent.gridWidth$) + ((this.end_month$ - this.start_month$) * TimelineComponent.gridWidth$ / 12)
      this.left$ = ((this.start_year$ - this.first_Year$) * TimelineComponent.gridWidth$) + ((this.start_month$) * TimelineComponent.gridWidth$ / 12) + TimelineComponent.paddingLeft$
    }
    
    this.bottom$ = TimelineComponent.gridHeight * TimelineComponent.numOfEvent

    this.color$ = TimelineComponent.colorPalette[Math.floor(Math.random() * TimelineComponent.colorPalette.length)];
  }

}
