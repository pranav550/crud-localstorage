export class Todo{
    id:number;
    title:string;
    date?:any;
    complete=false;
    
    constructor(value:Object={}){
        Object.assign(this, value)
    }
}