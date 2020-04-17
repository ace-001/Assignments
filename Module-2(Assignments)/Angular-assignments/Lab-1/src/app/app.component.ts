import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: number;
         name: string;
         salary: number;
         department: string;
  
     onSubmit()
     { alert( this.id+" "+ this.name+" "+this.salary+" "+this.department);
    }
}
