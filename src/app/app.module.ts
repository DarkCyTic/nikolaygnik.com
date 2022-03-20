import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { ClickOutsideModule } from 'ng-click-outside'

import { AppComponent } from './app.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { SkillsComponent } from './skills/skills.component'
import { MyWorkComponent } from './my-work/my-work.component'
import { ContactComponent } from './contact/contact.component'
import { ProjectComponent } from './project/project.component'
import { ProjectPreviewComponent } from './project-preview/project-preview.component'
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineEventComponent } from './timeline-event/timeline-event.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TeximateModule } from 'ngx-teximate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotographyComponent } from './photography/photography.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer'
import { MatProgressSpinnerModule } from '@angular/material'


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    MyWorkComponent,
    ContactComponent,
    ProjectComponent,
    ProjectPreviewComponent,
    TimelineComponent,
    TimelineEventComponent,
    ProjectGalleryComponent,
    PhotographyComponent,
    WebDevelopmentComponent,
    DataScienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClickOutsideModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    TeximateModule,
    BrowserAnimationsModule,
    NgxDocViewerModule,
    MatProgressSpinnerModule,
  ],
  entryComponents: [
    ProjectGalleryComponent,
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
