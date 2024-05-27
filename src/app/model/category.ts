export class Category {

  constructor(
    public title: string,
    public description: string,
    public id: number | null | undefined,
    public disabled: boolean | null | undefined
  ){ }
}
