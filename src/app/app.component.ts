import { Component } from '@angular/core';
interface User{
  name:string;
  age:number

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:string ='';

  const users: User[] = [
        {
           name:'alok',
           age:12
    },
      {
        name:'avinash',
        age:12
    }

  ];


  changeInput(value:string){
    this.data=value
  }

}
