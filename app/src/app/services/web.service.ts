import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  getUsersData(){
    let totalUsers = this.http.get('/user/total')
    let totalActive = this.http.get('/user/totalActive')
    let averageApplicationsPerActiveUser = this.http.get('/user/averageApplicationsPerActiveUser')
    let averageRolesPerActiveUser = this.http.get('/user/averageRolesPerActiveUser')
    let averageEntitlementsPerActiveUser = this.http.get('/user/averageEntitlementsPerActiveUser')
    return forkJoin([totalUsers,
      totalActive,
      averageApplicationsPerActiveUser,
      averageRolesPerActiveUser,
      averageEntitlementsPerActiveUser]);
  }
  
  getApplicationsData(): Observable<any[]>{
    let totalApplications = this.http.get('/application/total')
    let averageEntitlementsPerApplication = this.http.get('/application/averageEntitlementsPerApplication')
    let maxActiveUsersInTargetApplication = this.http.get('/application/maxActiveUsersInTargetApplication')
    let averageActiveUsersInTargetApplications = this.http.get('/application/averageActiveUsersInTargetApplications')
    let percentChangesPerTargetApplicationPerDay = this.http.get('/application/percentChangesPerTargetApplicationPerDay')
    return forkJoin([totalApplications,
      averageEntitlementsPerApplication,
      maxActiveUsersInTargetApplication,
      averageActiveUsersInTargetApplications,
      percentChangesPerTargetApplicationPerDay]);
  }
  
}
