const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']



const returnFirstTwoDrivers = function(){
    const copyOfDrivers = drivers.slice(0,2);
    return copyOfDrivers;
}

const returnLastTwoDrivers = function(){
    const copyOfDrivers = drivers.slice(-2);
    return copyOfDrivers;
}

let selectingDrivers =[ returnFirstTwoDrivers, returnLastTwoDrivers]
    
function createFareMultiplier(fare){
    
    return function (num1) {
        return (fare * num1)
    };
}

function fareDoubler(fare2){
    return fare2 * 2
}

function fareTripler(fare3){
    return fare3 * 3
}

function selectDifferentDrivers(arrayOfDrivers, optionalDrivers){
    return optionalDrivers(arrayOfDrivers)


}