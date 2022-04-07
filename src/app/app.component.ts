import { Component } from '@angular/core';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faCartShopping = faCartShopping;
  faUser = faUser;

}
