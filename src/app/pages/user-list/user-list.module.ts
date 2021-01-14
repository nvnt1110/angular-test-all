import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveOneDirective } from 'src/app/directives/directive-one/directive-one.directive';

const routes: Routes = [
    {
        path: '',
        component: UserListComponent
    }
];

@NgModule({
    declarations: [
        UserListComponent,
        DirectiveOneDirective
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class UserListModule { }
