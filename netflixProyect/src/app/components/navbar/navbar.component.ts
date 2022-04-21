import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Input() navBar!: any;
@Input () changeToDark!: any;
@Input () theme!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
