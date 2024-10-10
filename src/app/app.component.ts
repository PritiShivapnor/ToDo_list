import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [RouterModule]
})
export class AppComponent {
  title = 'TO-Do_List';
}
