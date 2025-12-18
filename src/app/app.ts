import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><h1>This is inline HTML</h1></div>`,
  standalone: false,
  styles: ['h1{color:blue;}']
})
export class App {
 title ="Santanu Paikaray";
 name = "Checking"

 displayName(){
  return this.name;
 }
}
