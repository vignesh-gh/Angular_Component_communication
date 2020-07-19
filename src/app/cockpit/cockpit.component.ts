import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import {Elements} from '../shared/element';
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() isServerCreated=new EventEmitter<Elements>();
  @Output('isBpCreated') isBluePrintCreated=new EventEmitter<Elements>();

  @ViewChild('serverContentInput',{static:true}) serverContentInput:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addServer(serverNameInput){
    this.isServerCreated.emit(new Elements(serverNameInput.value,"server",this.serverContentInput.nativeElement.value));   
    }

  addBluePrint(serverNameInput){
    console.log(this.serverContentInput);
    this.isBluePrintCreated.emit(new Elements(serverNameInput.value,"blueprint",this.serverContentInput.nativeElement.value));   
  }

}
