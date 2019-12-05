import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  getUsersData() {
    const totalUsers = this.http.get('/user/total');
    const totalActive = this.http.get('/user/total-active');
    const averageApplicationsPerActiveUser = this.http.get('/user/average-applications');
    const averageRolesPerActiveUser = this.http.get('/user/average-roles');
    const averageEntitlementsPerActiveUser = this.http.get('/user/average-entitlements');
    return forkJoin([totalUsers,
      totalActive,
      averageApplicationsPerActiveUser,
      averageRolesPerActiveUser,
      averageEntitlementsPerActiveUser]);
  }

  getApplicationsData(): Observable<any[]> {
    const totalApplications = this.http.get('/application/total');
    const averageEntitlementsPerApplication = this.http.get('/application/average-entitlements');
    const maxActiveUsersInTargetApplication = this.http.get('/application/max-active-users');
    const averageActiveUsersInTargetApplications = this.http.get('/application/average-active-users');
    const percentChangesPerTargetApplicationPerDay = this.http.get('/application/percent-changes');
    return forkJoin([totalApplications,
      averageEntitlementsPerApplication,
      maxActiveUsersInTargetApplication,
      averageActiveUsersInTargetApplications,
      percentChangesPerTargetApplicationPerDay]);
  }

  getRequestsData(): Observable<any[]> {
    const selfServiceOperationsPerDay = this.http.get('/request/self-service-operations');
    const adminOperationsPerDay = this.http.get('/request/admin-operations');
    const averageRequestsPerDay = this.http.get('/request/average-requests');
    const averageApprovalsPerDay = this.http.get('/request/average-approvals');
    return forkJoin([selfServiceOperationsPerDay,
      adminOperationsPerDay,
      averageRequestsPerDay,
      averageApprovalsPerDay]);
  }

  getAccessPoliciesData(): Observable<any[]> {
    const totalAccessPolicies = this.http.get('/accessPolicy/total');
    const averageResourcePerAccessPolicy = this.http.get('/accessPolicy/average-resources');
    return forkJoin([totalAccessPolicies,
      averageResourcePerAccessPolicy]);
  }

  getOrganizationsData(): Observable<any> {
    const totalOrganizations = this.http.get('/organization/total');
    return totalOrganizations;
  }

  getSessions(): Observable<any> {
    return this.http.get('/sessions/all-sessions');
  }
  deleteSession(sessionID): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      }),
      body: sessionID
    }
    return this.http.delete('/sessions/delete', options);
  }
}