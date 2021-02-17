import { Post } from "./post.model";

export class User {
  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public posts: Post[];

  //   constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
  //     this.name = name;
  //     this.description = desc;
  //     this.imagePath = imagePath;
  //     this.ingredients = ingredients;
  //   }
}
