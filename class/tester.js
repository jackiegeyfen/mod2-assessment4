// const Vehicle = require('./vehicle.js')
const ElectricBicycle = require("./electric-bicycle");
const Bicycle = require("./bicycle");
const Review = require("./review");


class Tester{
    constructor(name){
        this.name=name;
        this.reviews=[];
    }
    submitReview(instance, rating, text){
        if (instance.validate()){
            let newRev= new Review(instance, this, rating, text);
            newRev.addReview();
            if(instance instanceof Bicycle){
                this.bikeTester=true;
            }
            if(instance instanceof ElectricBicycle){
                this.eBikeTester=true
            }
            return newRev;
        }
        else {
            throw new Error("Cannot submit review for invalid vehicle.")
        }

    }
}
module.exports= Tester;
