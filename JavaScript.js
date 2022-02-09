//Problem 1
// function anaToVori(ana) {
//         let vori = 0;
//         if (typeof (ana) == 'number') {

//                 if (ana >= 0) {
//                         vori = ana / 16;
//                         return vori;
//                 }
//                 else {
//                         return "please enter a positive number";
//                 }

//         }
//         else {

//                 return "please enter a number";
//         }

// }
// let result = anaToVori(16);
// console.log(result);

// Problem 2
// function pandaCost(singara, samucha, jeelapi) {
//         const singaraUnitPrice = 7;
//         const samuchaUnitPrice = 10;
//         const jeelapiUnitPrice = 15;
//         if (typeof (singara) == 'number' && typeof (samucha) == 'number' && typeof (jeelapi) == 'number') {
//                 if (singara >= 0 && samucha >= 0 && jeelapi >= 0) {
//                         let singaraPrice = singara * singaraUnitPrice;
//                         let samuchaPrice = samucha * samuchaUnitPrice;
//                         let jeelapiPrice = jeelapi * jeelapiUnitPrice;
//                         let totalPrice = singaraPrice + samuchaPrice + jeelapiPrice;
//                         return totalPrice;
//                 }
//                 else {
//                         return "please enter singara, samucha, jeelapi positive numbers"
//                 }
//         }
//         else {
//                 return "please enter singara, samucha, jeelapi numbers"
//         }

// }
// let result = pandaCost(1, 1, 1);
// console.log(result);

// Problem 3
function picnicBudget(candidatesNo) {
        const firstQuota = 100;
        const secondQuota = 200;
        const firstQuotaPrice = 5000;
        const secondQuotaPrice = 4000;
        const thirdQuotaPrice = 3000;
        let totalPrice = 0;
        if (typeof (candidatesNo) == 'number') {
                if (candidatesNo > 0) {
                        if (candidatesNo > 0 && candidatesNo <= firstQuota) {
                                totalPrice = candidatesNo * firstQuotaPrice;
                                return totalPrice;
                        }
                        if (candidatesNo > firstQuota && candidatesNo <= secondQuota) {
                                totalPrice = (firstQuota * firstQuotaPrice) + ((candidatesNo - firstQuota) * secondQuotaPrice);
                                return totalPrice;
                        }
                        if (candidatesNo > secondQuota) {
                                totalPrice = (firstQuota * firstQuotaPrice) + ((secondQuota - firstQuota) * secondQuotaPrice) + ((candidatesNo - secondQuota) * thirdQuotaPrice);
                                return totalPrice;
                        }
                }
                else {
                        return "please enter positive number"
                }
        }
        else {
                return "please enter a number"
        }
}

let result = picnicBudget(201);
console.log(result);

// Problem 4
// const friendNames = ['Mrinal', 'Sandip', 'Anu', 'Payel'];
// function oddFriend(friends) {
//         const oddFriendsList = [];
//         for (let i = 0; i < friends.length; i++) {
//                 let friendlength = 0;
//                 let friend = friends[i];
//                 if (typeof (friend) == 'string') {
//                         friendlength = friend.length;
//                         if (friendlength % 2 != 0) {
//                                 oddFriendsList.push(friend);
//                         }
//                 }
//                 else {
//                         return "Please enter name";
//                 }

//         }
//         return oddFriendsList[0];


// }

// let result = oddFriend(friendNames);
// console.log(result);