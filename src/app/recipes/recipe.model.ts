import { ingrediants } from "../shared/ingrediants.model";

export class recipe {
  public name: string;
  public description: string;
  public ImagePath: string;
  public Ingredient: ingrediants[] = [];

  constructor(name: string, desc: string, image: string, ingredient: ingrediants[]) {
    this.name = name;
    this.description = desc;
    this.ImagePath = image;
    this.Ingredient = ingredient;
  }
}
