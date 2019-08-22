import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/models/user';
import { error } from 'util';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    public users: any ;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.getUsers() ;
    }

    getUsers() {
         this.userService.findAllUsers()
         .subscribe(data => {
             console.log(data);

          this.users = data ;
          console.log('-------' + this.users[0].mail) ;

         });
    }
}
