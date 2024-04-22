import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { StateService } from '../../services/state.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  providers: [StateService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title!: string;

  constructor(private router: Router, public stateService: StateService) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.stateService.updateTitleAndBreadcrumb(event.url);
      }
    });
  }
}