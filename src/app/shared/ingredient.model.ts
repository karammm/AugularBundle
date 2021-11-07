export class Ingredient{
    //no need to create properties as below
    //insted provide public inside the constructoe it will create the same effect
    // public name:string;
    // public amount: number;

    constructor(public name:string,public amount:number){
        //NO NEED
        // this.name=name;
        // this.amount=amount;
    }
}