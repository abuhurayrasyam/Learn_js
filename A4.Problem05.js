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

const sabahTimes = [100, 99, 119, 300, 5000];
const full = calculateWatchTime(sabahTimes);
console.log(full);