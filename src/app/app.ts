import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
 templateUrl: './app.html',
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
