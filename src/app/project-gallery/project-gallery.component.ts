import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss']
})
export class ProjectGalleryComponent implements OnInit, AfterViewChecked {

  _ref: any
  images$: []
  max_index$: any
  current_image_index$: any
  loaded$: any = false

  constructor() { }

  ngOnInit() {
    this.max_index$ = this.images$.length - 1
    
    let componentReference = this
      $(window).keydown(function(e){
        // left
        if(e.which === 37){
          componentReference.previous_image()
        }
        // right
        else if(e.which === 39){
          componentReference.next_image()
        }
      })
  }

  ngAfterViewChecked(){
    setTimeout(() => {
      this.loaded$ = true
    }, 500)
  }

  removeObject(){
    this._ref.destroy();
  } 

  get images(){
    return this.images$
  }

  get current_image(){
    return this.images$[this.current_image_index$]
  }

  previous_image(){
    if(this.current_image_index$ > 0){
      this.current_image_index$--;
    }
  }

  next_image(){
    if(this.current_image_index$ < this.images.length - 1){
      this.current_image_index$++;
    }
  }

  onClickedOutside(e: Event) {
    console.log(this.loaded$)
    if(this.loaded$){
      console.log('Clicked outside:', e);
      this._ref.destroy();
    }
  }
}
