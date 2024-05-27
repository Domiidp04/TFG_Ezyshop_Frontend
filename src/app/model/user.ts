export class User{
  constructor(
    public id:number,
    public username:string,
    public email:string,
    public name:string,
    public lastname:string,
    public zip:string,
    public street:string,
    public number:string,
    public description:string | null,
    public date:string,
    public locked:boolean | null,
    public disabled:boolean | null,
    public role:string | null
  ){ }
}
