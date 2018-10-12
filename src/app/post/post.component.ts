import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/posts.service';
import {Post} from '../models/Post';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
    id: number;
    post: Post;
    constructor(private pService: PostService, private aRoute: ActivatedRoute) {
    };
    ngOnInit() {
        this.getPost();
    };
    getPost(){
        this.id = this.aRoute.snapshot.params.id;
        this.pService.getPosts().subscribe(posts => {
            this.post = posts.find(p => p.id == this.id);
        })
    }
}