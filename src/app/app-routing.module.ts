import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailviewComponent } from './detailview/detailview.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DetailsViewComponent } from './users/details-view/details-view.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: TableComponent,
      },
      {
        path: 'detail-view/:id',
        component: DetailviewComponent
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent
      },
      {
        path: 'template-driven-form',
        component: TemplateDrivenFormComponent
      },
      {
        path: 'users',
        component: UsersListComponent,
      },
      {
        path: 'add-user',
        component: AddUserComponent,
      },
      {
        path: 'edit-users/:id',
        component:EditUsersComponent
      },
      {
        path: 'users-details/:id',
        component: DetailsViewComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
