import { Tag } from "./tag";

export interface project{
    id:number,
    projectName:string,
    description:string,
    summary:string,
    tags: Tag[],
    pictures: string[]
}