import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { RoomModule } from './room/room.module';
import { HotelModule } from './hotel/hotel.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { TokenGuard } from './guards/token.guard';
import { RolGuard } from './guards/rol.guard';
import { RegisterModule } from './register/register.module';
import { AuthInterceptorService } from './authinterceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    RoomModule,
    HotelModule,
    HomeModule,
    UserModule,
    LoginModule,
    HttpClientModule,
    RegisterModule
  ], providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
