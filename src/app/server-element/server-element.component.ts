import { Component, OnInit, Input } from '@angular/core';
import {Elements} from '../shared/element';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('servElement') element:Elements;

  constructor() { }

  ngOnInit(): void {
  }

}
