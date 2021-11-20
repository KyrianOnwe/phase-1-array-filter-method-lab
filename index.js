const { array } = require("yargs");

// Code your solution here
function findMatching(array, name){
  const driveChecker = array.filter(function(driver){
    if (name.toUpperCase() === driver.toUpperCase()){
      return driver;
    }
  })
  return driveChecker;
}

function fuzzyMatch(array, name){
  const driverCheck = array.filter(function(driver){
    if (name[0].toUpperCase() === driver[0].toUpperCase()){
      return driver;
    }
  })
  return driverCheck;
}

function matchName(array, cabBus){
  var soln = array.filter(function(driver){
    return driver.name == cabBus;
    });
    return soln;
    
}
