import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import { UsersComponent } from './views/users/users.component';
import { RolesComponent } from './views/roles/roles.component';
import { ApplicationsComponent } from './views/applications/applications.component';
import { RequestsComponent } from './views/requests/requests.component';
import { CertificationsComponent } from './views/certifications/certifications.component';
import { AccessPolicyComponent } from './views/access-policy/access-policy.component';
import { OrganizationsComponent } from './views/organizations/organizations.component';

const routes: Routes = [
  {path: '', pathMatch:'full',redirectTo:'users'},
  {path:'users', component: UsersComponent, data:{routeName: 'Users', animation:'Users'}},
  // {path:'roles', component: RolesComponent, data:{routeName: 'Roles', animation:'Roles'}},
  {path:'applications', component: ApplicationsComponent, data:{routeName: 'Applications', animation:'Applications'}},
  {path:'organizations', component: OrganizationsComponent, data:{routeName: 'Applications', animation:'Applications'}},
  {path:'requests', component: RequestsComponent, data:{routeName: 'Requests', animation:'Requests'}},
  {path:'certifications', component: CertificationsComponent, data:{routeName: 'Certifications', animation:'Certifications'}},
  {path:'access-policy', component: AccessPolicyComponent, data:{routeName: 'Access Policy', animation:'AccessPolicy'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }