// Asteroid Collision
// You are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Example 1:

// Input: asteroids = [2,4,-4,-1]

// Output: [2]
// Example 2:

// Input: asteroids = [5,5]

// Output: [5,5]
// Example 3:

// Input: asteroids = [7,-3,9]

// Output: [7,9]
// Constraints:

// 2 <= asteroids.length <= 10,000.
// -1000 <= asteroids[i] <= 1000
// asteroids[i] != 0

function asteroidCollision(asteroids) {
  let stack = [];

  for (let asteroid of asteroids) {
  
    while(stack.length && asteroid < 0 && stack[stack.length-1] > 0) {

      let diff = stack[stack.length-1] + asteroid;

      if(diff > 0 || diff === 0) {
        asteroid = 0;
      } else if (diff < 0) {
        stack.pop();
      } 

    }
    if(asteroid !== 0) {
      stack.push(asteroid);
    }
  }
}
