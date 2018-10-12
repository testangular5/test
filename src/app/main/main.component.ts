import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/posts.service';
import {Post} from '../models/Post';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
    posts: Post[];
    create_form_open: boolean = false;
    new_post: Post = {'title': '', 'body': ''};
    constructor(private pService: PostService) {
    };
    ngOnInit() {
        this.getPosts();
    };
    getPosts() {
        this.pService.getPosts().subscribe(posts => {
            this.posts = posts;
        })
    }
    openCreateForm() {
        this.create_form_open = true;
    }
    closeCreateForm() {
        this.create_form_open = false;
        this.new_post = {'title': '', 'body': ''}
    }
    onSubmitCreate() {
        this.pService.createPost(this.new_post).subscribe(() => {
                this.new_post = {'title': '', 'body': ''};
                this.getPosts();
            },
            (err) => {
                console.log(err);
            }
        );
    }
    deletePost(id: number) {
        this.pService.deletePost(id).subscribe(() => {
                this.getPosts();
            },
            (err) => {
                console.log(err);
            })
    }
    editPost(post: Post) {
        post['open_form'] = true;
        post['edit_data'] = {'title': post.title, 'body': post.body}
    }
    closeEditForm(post: Post) {
        delete post['open_form'];
        delete post['edit_data'];
    }
    onSubmitEdit(post: Post) {
        post.title = post.edit_data.title;
        post.body = post.edit_data.body;
        delete post['open_form'];
        delete post['edit_data'];
        this.pService.editPost(post).subscribe(() => {
        }, (err) => console.log(err))
    }
}