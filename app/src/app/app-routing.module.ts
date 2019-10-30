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


const routes: Routes = [
  {path: '', pathMatch:'full',redirectTo:'users'},
  {path:'users', component: UsersComponent},
  {path:'roles', component: RolesComponent},
  {path:'entitlement', component: EntitlementComponent},
  {path:'applications', component: ApplicationsComponent},
  {path:'requests', component: RequestsComponent},
  {path:'certifications', component: CertificationsComponent},
  {path:'access-policy', component: AccessPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }