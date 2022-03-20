import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectGalleryComponent } from '../project-gallery/project-gallery.component';
import projects from '../../assets/projects.json';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  @ViewChild("parent", { read: ViewContainerRef, static: true }) 
  vc: ViewContainerRef;

  _id$: any
  project$: Object

  constructor(private route: ActivatedRoute, private resolver: ComponentFactoryResolver) {
    this.route.params.subscribe( params => this._id$ = params.id )
  }

  ngOnInit() {
    this.project$ = projects['projects'].find(project => project.id === this._id$);
  }

  get name(){
    return this.project$['name']
  }

  get start_date(){
    let date = new Date(this.project$['start_date'])
    return date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear()
  }

  get end_date(){
    let date = new Date(this.project$['end_date'])
    return date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear()
  }

  get role(){
    return this.project$['role']
  }

  get short_description(){
    return this.project$['short_description']
  }

  get description(){
    return this.project$['description']
  }

  get images(){
    return this.project$['images']
  }

  get links(){
    return this.project$['links']
  }

  AfterViewInit(){

  }
  showGallery(index){
    console.log(index)
    const factory = this.resolver.resolveComponentFactory(ProjectGalleryComponent);
    console.log(this.vc)
    var expComponent = this.vc.createComponent(factory)
    expComponent.instance._ref = expComponent;
    expComponent.instance.images$ = this.images;
    expComponent.instance.current_image_index$ = index;
  }

}
