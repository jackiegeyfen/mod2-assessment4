// const Vehicle = require('./vehicle.js')
// const Tester = require('./tester.js')

class Review{
    constructor(vehicle, tester, starRating, text){
        this.vehicle= vehicle;
        this.tester= tester;
        this.starRating=starRating;
        this.text=text;
    }
    addReview(){
        this.tester.reviews.push(this);
        this.vehicle.reviews.push(this);
    }
    static filterByStars(rating, ...reviews){
        let filtered= reviews.filter((el) => el.starRating === rating)
        return filtered;
    }
}
module.exports=Review;
