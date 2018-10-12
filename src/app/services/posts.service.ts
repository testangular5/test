import {Injectable} from "@angular/core";
import {Post} from "../models/Post";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {environment} from "../../environments/environment"

@Injectable()
export class PostService {
    private BASE_URL: string = environment.settings.local_backend;
    private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {
    }
    private handleError(error: HttpErrorResponse) {
        return Observable.throw(error.error || 'Server error'); // Observable.throw() is undefined at runtime using Webpack
    }

    getPosts(): Observable<Post[]> {
        const url: string = `${this.BASE_URL}`;
        return this.http.get(url, {headers: this.headers})
            .catch(this.handleError);
    }
    createPost(post: Post): Observable<any> {
        const url: string = `${this.BASE_URL}`;
        return this.http
            .post(url, post, {headers: this.headers})
            .catch(this.handleError);
    }
    deletePost(id: number) {
        const url: string = `${this.BASE_URL}/${id}/`;
        return this.http
            .delete(url, {headers: this.headers})
            .catch(this.handleError)
    }
    editPost(post: Post) {
        const url: string = `${this.BASE_URL}/${post.id}/`;
        return this.http
            .patch(url, post, {headers: this.headers})
            .catch(this.handleError)
    }
}