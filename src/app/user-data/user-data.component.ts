import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {
@Input()userData:any;
ngOnChanges(){
  console.log(this.userData);
  
}
}
