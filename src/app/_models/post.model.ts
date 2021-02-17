import { Comment } from 'src/app/_models/comment.model';

export class Post {
  public id: number;
  public userId: number;
  public title: string;
  public body: string;
  public comments:Comment[]
}
