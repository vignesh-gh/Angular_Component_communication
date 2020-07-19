import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Elements } from './shared/element';
import { CockpitComponent } from './cockpit/cockpit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated// Native,None
})
export class AppComponent {
  title = 'TalkingToComponent';

   @ViewChild(CockpitComponent,{static:true}) CockpitComponent:ElementRef;

   elements:Elements[]=[];
   

   onAddServerElement(serverElement:Elements){      
      this.elements.push(serverElement);
   }
   onAddBluePrintElement(bluePrintElement:Elements){
      this.elements.push(bluePrintElement);
   }

}
