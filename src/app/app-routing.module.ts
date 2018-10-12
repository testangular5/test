import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {PostComponent} from "./post/post.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'posts/:id',
        component: PostComponent,
    },
    {
        path: '**',
        redirectTo: '',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
