import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorsService } from './services/interceptor.service';
//Pages
import { UsersComponent } from './views/users/users.component';
import { RolesComponent } from './views/roles/roles.component';
import { EntitlementComponent } from './views/entitlement/entitlement.component';
import { ApplicationsComponent } from './views/applications/applications.component';
import { RequestsComponent } from './views/requests/requests.component';
import { CertificationsComponent } from './views/certifications/certifications.component';
import { AccessPolicyComponent } from './views/access-policy/access-policy.component';
import { HeaderComponent } from './components/header/header.component';
import { RefBarChartComponent } from './components/ref-bar-chart/ref-bar-chart.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DataTableComponent } from './components/data-table/data-table.component';

//Styling
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RolesComponent,
    EntitlementComponent,
    ApplicationsComponent,
    RequestsComponent,
    CertificationsComponent,
    AccessPolicyComponent,
    HeaderComponent,
    RefBarChartComponent,
    SidebarComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
