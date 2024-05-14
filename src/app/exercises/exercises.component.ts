import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule
  ]
})
export class ExercisesComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'McGuill Crunches', cols: 4, rows: 1 },
          { title: 'DNS Side Planks', cols: 4, rows: 1 },
          { title: 'Coppenhages', cols: 4, rows: 1 },
          { title: 'Bird Dogs', cols: 4, rows: 1 }
        ];
      }

      return [
        { title: 'McGuill Crunches', cols: 1, rows: 1 },
        { title: 'DNS Side Planks', cols: 1, rows: 1 },
        { title: 'Coppenhages', cols: 1, rows: 1 },
        { title: 'Bird Dogs', cols: 1, rows: 1 }
      ];
    })
  );
}
