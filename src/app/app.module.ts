import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MytestComponent } from './views/mytest/mytest.component';
import { ModalService } from './services/modal.service';

import { environment } from '../environments/environment';
import { LogoutComponent } from './shared/logout/logout.component';
import { MessageDialogComponent } from './services/message-dialog/message-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        MytestComponent,
        MessageDialogComponent,
        LogoutComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule, // firestore
        AngularFireAuthModule, // auth
        AngularFireStorageModule, // storage
        ExamplesModule
    ],
    providers: [ModalService],
  entryComponents: [
    MessageDialogComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
