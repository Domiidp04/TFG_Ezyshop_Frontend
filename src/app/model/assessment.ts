import { ImageAssessment } from "./imageAssessment";
import { User } from "./user";

export class Assessment{

  constructor(
    public id:number,
    public title:string,
    public description:string,
    public date:string,
    public disabled:boolean,
    public user:User,
    public imageAssessment:ImageAssessment[]
  ){ }

}
