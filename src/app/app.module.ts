import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';
import { TableComponent } from './table/table.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { DetailsViewComponent } from './users/details-view/details-view.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './users/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailviewComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    TableComponent,
    UsersListComponent,
    EditUsersComponent,
    AddUserComponent,
    DetailsViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
