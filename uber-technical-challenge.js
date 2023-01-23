/*Uber is building a Fare Estimator that can tell 
you how much your ride will cost before you request it.
It works by passing approximated ride distance 
and ride time through this formula:
*/

// cost per minute * ride time + cost per mile * ride
// distance

/*
where Cost per minute and cost per mile depend on the 
car type

EXAMPLE:
for 
ride_time = 30
ride_distance = 7
cost_per_minute = [0.2, 0, 0.35, 0.4, 0.45]
cost_per_mile = [1.1, 1.8, 2.3, 3.5]
solution(ride_time, ride_distance, cost_per_minute
    cost_per_mile) = [13.7, 23.1, 28.1, 38]
    
*/

function solution(rideTime, rideDistance, costPerMinute, costPerMile) {
  return costPerMile.map();
}

//https://www.youtube.com/watch?v=Jng49-yFgWw
