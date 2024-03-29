import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorsService } from './services/interceptor.service';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

//Pages
import { UsersComponent } from './views/users/users.component';
import { RolesComponent } from './views/roles/roles.component';
import { ApplicationsComponent } from './views/applications/applications.component';
import { RequestsComponent } from './views/requests/requests.component';
import { CertificationsComponent } from './views/certifications/certifications.component';
import { AccessPolicyComponent } from './views/access-policy/access-policy.component';
import { HeaderComponent } from './components/header/header.component';
import { RefBarChartComponent } from './components/ref-bar-chart/ref-bar-chart.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

//Styling
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import { OrganizationsComponent } from './views/organizations/organizations.component';
import { SessionsComponent } from './views/sessions/sessions.component';
import { SessionComponent } from './components/session/session.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RolesComponent,
    ApplicationsComponent,
    RequestsComponent,
    CertificationsComponent,
    AccessPolicyComponent,
    HeaderComponent,
    RefBarChartComponent,
    SidebarComponent,
    DataTableComponent,
    OrganizationsComponent,
    SessionsComponent,
    SessionComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi: true},
    { provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
