
document.getElementById("mathematical_solution_1").innerText = `Mathematical Solutions :
The total number of possible combinations for two dice is 36:
(1,1), (1,2), (1,3), (1,4), (1,5), (1,6)
(2,2), (2,3), (2,4), (2,5), (2,6)
(3,3), (3,4), (3,5), (3,6)
(4,4), (4,5), (4,6)
(5,5), (5,6)
(6,6) `

document.getElementById("code_1").innerText = `const dieA = [1, 2, 3, 4, 5, 6]; //Define Dice A
const dieB = [1, 2, 3, 4, 5, 6]; //Define Dice B
let possible_combinations = (dieA , dieB)=>{
    return dieA.length*dieB.length
}
console.log(possible_combinations(dieA,dieB))`



document.getElementById("mathematical_solution_2").innerText = `2. //Calculate and display the distribution of all possible combinations that can be
//obtained when rolling both Die A and Die B together. Show the math along with
//the code!
//Hint: A 6 x 6 Matrix.
Mathematical Solutions :
        dice has 6 faces each So n = 6
        distribution of all possible combinations are 
        '(1,1)', '(1,2)', '(1,3)', '(1,4)', '(1,5)', '(1,6)'
        '(2,1)', '(2,2)', '(2,3)', '(2,4)', '(2,5)', '(2,6)'
        '(3,1)', '(3,2)', '(3,3)', '(3,4)', '(3,5)', '(3,6)'
        '(4,1)', '(4,2)', '(4,3)', '(4,4)', '(4,5)', '(4,6)'
        '(5,1)', '(5,2)', '(5,3)', '(5,4)', '(5,5)', '(5,6)'
        '(6,1)', '(6,2)', '(6,3)', '(6,4)', '(6,5)', '(6,6)'`

document.getElementById("code_2").innerText = `const combinationMatrix = []
for (let i = 0; i < dieA.length; i++) {
  const row = [];
  for (let j = 0; j < dieB.length; j++) {
    row.push((dieA[i],dieB[j]));
  }
  combinationMatrix.push(row);
}
console.log("Combination Matrix:\n", combinationMatrix);`



document.getElementById("mathematical_solution_3").innerText = `3. Calculate the Probability of all Possible Sums occurring among the number of
// combinations from (2).
// Example: P(Sum = 2) = 1/X as there is only one combination possible to obtain
// Sum = 2. Die A = Die B = 1.
// Creating the hashmap to keep the track of sums, count`

document.getElementById("code_3").innerText = `let hash = new Map()
//looping through the dieA
for(let i = 0 ; i<dieA.length ; i++){
        //looping through the dieB
        for(let j = 0 ; j<dieB.length ; j++){
                //calculationg the Sum
               let sum = dieA[i]+dieB[j]
               //storing the sum and its count to the map (sum ,count)
                if(hash.get(sum)){
                        hash.set(sum , (hash.get(sum)+1))
                }
                else{
                        hash.set(sum , 1)
                }
        }
}
console.log(hash)
for(const possible_sum of hash.keys()){
        console.log(P(possible_sum)sum = possible_sum = hash.get(possible_sum) / 36)
 }`





document.getElementById("mathematical_solution_4").innerText = `// Loki dooms your dice for his fun removing all the “Spots” off the dice.

// No problem! You have the tools to re-attach the “Spots” back on the Dice.
// However, Loki has doomed your dice with the following conditions:
// ● Die A cannot have more than 4 Spots on a face.
// ● Die A may have multiple faces with the same number of spots.
// ● Die B can have as many spots on a face as necessary i.e. even more than 6.
// But in order to play your game, the probability of obtaining the Sums must remain the
// same!
// So if you could only roll P(Sum = 2) = 1/X, the new dice must have the spots reattached
// such that those probabilities are not changed.
// ● Die_A = [1, 2, 3, 4, 5, 6] & Die B = Die_A = [1, 2, 3, 4, 5, 6]
// Output:
// ● A Transform Function undoom_dice that takes (Die_A, Die_B) as input &
// outputs New_Die_A = [?, ?, ?, ?, ?, ?],New_Die_B = [?, ?,
// ?, ?, ?, ?] where,
// ● No New_Die A[x] > 4`

document.getElementById("code_4").innerText = `
let New_Die_A = [1,2,2,3,3,4]
for(let i = 0 ; i<arr_1.length ; i++){
    let sum = arr_1[i]+arr_1[i]
    let needed_value = sum - New_Die_A[i]
    New_Die_B.push(needed_value)
}
return New_Die_A,New_Die_B
}
console.log(undoomed_dice(dieA , dieB))`

