import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Accounting, Admin, business } from 'src/app/models/active-user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  costChart: any[] = [];
  users: any[] = [];
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  fetchData() {
    this.apiService.Get('users')
      .subscribe(data => {
        this.users = data;
        this.users.forEach((user, id) => {
          switch (user.type) {
            case 'admin':
              this.users[id] = new Admin(user);
              break;
            case 'accounting':
              this.users[id] = new Accounting(user);
              break;
            case 'bussiness':
              this.users[id] = new business(user);
              break;
            default:
              break;
          }
        });
      })

    this.apiService.Get('cost-chart')
      .subscribe(data => {
        this.costChart = data;
      })
  }

}
