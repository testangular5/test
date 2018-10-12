export class Post {
    id?: number;
    title: string;
    body: string;
    open_form?: boolean;
    edit_data?: any;
    constructor(post) {
        [
            this.id,
            this.title,
            this.body,
            this.open_form,
            this.edit_data
        ] = post;
    }
}
