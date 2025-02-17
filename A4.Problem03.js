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

const voteArray = ["mango", "banana", "mango", "banana", "am", "mango"];
const result = electionResult(voteArray);
console.log(result);