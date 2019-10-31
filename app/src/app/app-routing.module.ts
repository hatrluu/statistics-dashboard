import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Pages
import { UsersComponent } from './views/users/users.component';
import { RolesComponent } from './views/roles/roles.component';
import { EntitlementComponent } from './views/entitlement/entitlement.component';
import { ApplicationsComponent } from './views/applications/applications.component';
import { RequestsComponent } from './views/requests/requests.component';
import { CertificationsComponent } from './views/certifications/certifications.component';
import { AccessPolicyComponent } from './views/access-policy/access-policy.component';
import { APP_BASE_HREF } from '@angular/common';


const routes: Routes = [
  {path: '', pathMatch:'full',redirectTo:'users'},
  {path:'users', component: UsersComponent, data:{routeName: 'Users'}},
  {path:'roles', component: RolesComponent, data:{routeName: 'Roles'}},
  {path:'entitlement', component: EntitlementComponent, data:{routeName: 'Entitlement'}},
  {path:'applications', component: ApplicationsComponent, data:{routeName: 'Applications'}},
  {path:'requests', component: RequestsComponent, data:{routeName: 'Requests'}},
  {path:'certifications', component: CertificationsComponent, data:{routeName: 'Certifications'}},
  {path:'access-policy', component: AccessPolicyComponent, data:{routeName: 'Access Policy'}}
];

@NgModule({
  providers: [{provide:APP_BASE_HREF,useValue:'/statistics-dashboard'}],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }