import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './SuccessAlert/successalert.component';
import { WarningAlertComponent } from './WarningAlert/warningalet.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    ServersComponent//Telling the app that this component is a part of this app
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
