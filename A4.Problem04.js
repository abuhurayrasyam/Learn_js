function  isBestFriend( f1 , f2 ) {
    if(typeof f1 !== "object" || typeof f2 !== "object"){
        return "Invalid";
    }
    else{
        if (!f1.hasOwnProperty("name") || !f1.hasOwnProperty("roll") || !f1.hasOwnProperty("bestFriend") || !f2.hasOwnProperty("name")|| !f2.hasOwnProperty("roll") || !f2.hasOwnProperty("bestFriend")){
            return "Invalid";
        }
        else{
            if(f1.roll === f2.bestFriend && f2.roll === f1.bestFriend){
                return true;
            }
            else{
                return false;
            }
        }
    }
}

const fb1 =  { name: "A", roll: 1, bestFriend: 2};
const fb2 =  { name: "S", roll: 2, bestFriend: 1 };
const bestFriend = isBestFriend(fb1, fb2);
console.log(bestFriend)