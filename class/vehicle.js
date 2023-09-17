// const Tester = require('./tester.js')
// const Review = require('./review.js')

class Vehicle {
 constructor(modelName, year, price){
        this.modelName=modelName;
        this.year=year;
        this.price=price;
        this.reviews=[];
 }
 validate(){
    if (this.modelName === undefined || this.year === undefined || this.price === undefined){
        return false;
    }
    if (this.year > 2100 || this.year < 1950){
        return false;
    }
return true;
}
update(newmodelName, newYear, newPrice){
    this.modelName=newmodelName;
    if (newYear > 2100 || newYear < 1950){
        throw new Error("Year must be between 1950 and 2100");
    }
    else this.year=newYear;
    if (!(newPrice > 0)) {
        throw new Error("Price must be greater than 0");
    }
    else this.price=newPrice;
    }
getDetails(){
    return (`The ${this.year} ${this.modelName} costs $${this.price} and has 0 reviews.`);
}
findReviewByTester(name){
    // console.log(this.reviews, "line 35")
    for (let i=0; i<this.reviews.length; i++){
        let eachRev= this.reviews[i].tester;
        if (eachRev.name === name){
            return this.reviews[i];
        }

    }

}

}
module.exports= Vehicle;
