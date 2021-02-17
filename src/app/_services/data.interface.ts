import { Observable } from "rxjs";
import { Post } from "../_models/post.model";
import { User } from "../_models/user.model";

export interface IData {
    getUsers():Observable<any>;
    getPostsByUserId(userId:number):Observable<any>;
    getCommentsByPostId(postId:number):Observable<any>;
}
