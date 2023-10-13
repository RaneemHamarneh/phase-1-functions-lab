// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber){
    let distance;
    const hqStreet = 42;
    if (streetNumber >= hqStreet){
        distance = (streetNumber - hqStreet);
        return distance
    }else{
         distance = (hqStreet - streetNumber);
    }return distance
}
function distanceFromHqInFeet(streetNumber){
    let distanceInFeet;
    const hqStreet = 42;
    if (streetNumber >= hqStreet){
        distanceInFeet = (Math.abs(streetNumber - hqStreet))* 264 ;
        return distanceInFeet
    }else{
         distanceInFeet = (Math.abs(hqStreet - streetNumber))* 264 ;
         return distanceInFeet
    }
}

function distanceTravelledInFeet(street1,street2){
    
    let distance = (street2 - street1)*264;
    return Math.abs(distance);
}

function calculatesFarePrice(start, destination){
    
    const calculateTheDistanationInFeet = (Math.abs(start - destination))* 264 ;
    if (calculateTheDistanationInFeet <= 400) {
        return 0;
    } else if (calculateTheDistanationInFeet <= 2000 ){
        return (calculateTheDistanationInFeet - 400)/50;

    } else if (calculateTheDistanationInFeet <= 2500){
        return 25;
    }else {
        return "cannot travel that far";
    }
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);
distanceTravelledInFeet(43,48);
distanceTravelledInFeet(50,60);
distanceTravelledInFeet(34,28);
calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)



