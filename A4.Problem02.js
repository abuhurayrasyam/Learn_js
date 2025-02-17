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

const inputEmail = validEmail(["jhankar@hero.com"]);
console.log(inputEmail);
