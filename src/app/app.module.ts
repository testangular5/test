import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {PostService} from './services/posts.service';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MainComponent} from './main/main.component';
import {PostComponent} from './post/post.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [PostService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
