import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../app/top-bar/top-bar.component';
import { SearchComponent } from './search/search.component';
import { SubmissionsListComponent } from './submissions-list/submissions-list.component';
import { MapViewComponent } from './map-view/map-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TopBarComponent,
    SearchComponent,
    SubmissionsListComponent,
    MapViewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'submissions-task';
}
