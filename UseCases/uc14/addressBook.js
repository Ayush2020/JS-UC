
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;

const empDailyWageArr = new Array();

let totalEmpWage = 0;

//calculating wage for month
let empHrs = 0;

const calcDailyWage = (empHrs) => {
    return empHrs * WAGE_PER_HOUR;
}

const getWorkingHours = (empCheck) => {
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

while(totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck)
        empDailyWageArr.push(calcDailyWage(empHrs));
}


for(let day=0; day<NUM_OF_WORKING_DAYS; day++){
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}


//uc7

let empWage = calcDailyWage(totalEmpHrs);

const sum = (dailyWage) => {
    totalEmpWage += dailyWage
}

empDailyWageArr.forEach(sum)

function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}

let dailyCntr = 0;

function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage)

console.log(mapDayWithWageArr);


let fullDayWageArr = mapDayWithWageArr.filter(dailyWage => dailyWage.includes("160"));

console.log(fullDayWageArr);


console.log(mapDayWithWageArr.find(dailyWage => dailyWage.includes("160")));


console.log(fullDayWageArr.every(dailyWage => dailyWage.includes("160")));


console.log(mapDayWithWageArr.some(dailyWage => dailyWage.includes("80")));


console.log(empDailyWageArr
    .reduce((numOfDays, dailyWage) =>{
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
},0))
