function cashOut( money ) {
    if (typeof money !== "number" || money <= 0){
        return "Invalid";
    }
    else{
        const charge = money * 1.75 / 100;
        return charge;
    }
}



function  validEmail( email ) {
    if (typeof email !== "string"){
        return "Invalid"
    }
    else{
        let spacialCharacters = [".", "-", "_", "+", "@"];
        if (!spacialCharacters.includes(email.charAt(0)) && email.includes("@") && !email.includes(" ") && email.endsWith(".com")){
            return true;
        }
        else{
            return false;
        }
    }
}



function  electionResult( votes ) {
    if (!Array.isArray(votes)){
        return "Invalid";
    }
    else{
        let mangoParty = 0;
        let bananaParty = 0;

        for (let vote of votes){
            if (vote === "mango"){
                mangoParty++;
            }
            if (vote === "banana"){
                bananaParty++;
            }
        }

        if (mangoParty > bananaParty){
            return "Mango";
        }
        else if (bananaParty > mangoParty){
            return "Banana";
        }
        else{
            return "Draw";
        }
    }
}



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



function  calculateWatchTime( times ) {
    let fullTimesSum = 0;
    for (let time of times){
        if (typeof time !== "number"){
            return "Invalid";
        }
        else{
            fullTimesSum += time;
        }
    }
    
    let hours = Math.floor(fullTimesSum / 3600);
    let remindingSeconds = fullTimesSum % 3600;
    let minutes = Math.floor(remindingSeconds / 60);
    let seconds = remindingSeconds % 60;

    let totalWatchTimes = {
        hour: hours,
        minute: minutes,
        second: seconds
    };
    return totalWatchTimes;
}