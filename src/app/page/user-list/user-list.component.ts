import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();
phrase="";
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
    
  }

  onDelete(user:User): void {
    if (!confirm("Are you sure?")) {
      return;
    }
    this.userService.remove(user);
      //this.router.navigate(['user']),     
    
  }

}
