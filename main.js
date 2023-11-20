//Q1. Create a file with name basics and show all the features that you know about javascript
//Please see the basics.js folder
//------------------------------------------------------------------------------------------------

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
//var user = "Robert";
//console.log(user);
//user = 0.0266;
//console.log(user);
//user = false;
//console.log(user);
//user = {myname : "Test me"};
//console.log(user);
//user = 25166665;
//console.log(user);
//user = undefined;
//console.log(user);
//user = true;
//console.log(user);
//user = "Robert Jr";
//console.log(user);
//user = null;
//console.log(user);
//user = {};
//console.log(user);
//user = -32767;
//console.log(user);

//------------------------------------------------------------------------------------------------------------------------
//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function

//var User = {
//	firstname: "Tylor",
//	lastname: "Swift",
//	age: 30,
//	showUserInfo: function () {
//		return {
//			firstname: this.firstname,
//			lastname: this.lastname,
//			age: this.age,
//		}
//	}
//}
//console.log(User.showUserInfo());
//---------------------------------------------------------------------------------------------------------------------

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind

function doaddition(a, b, c) {
	console.log(a, b, c);
	function add() {
		return a + b + c
	}
	return { add }
}

console.log("sum is ", doaddition(2, 3, 4).add());
//Output is 2 3 4 sum is 9, this a nested function output.

console.log("sum is ", doaddition(2).add());
//Output is 2 undefined undefined sum is NaN, this is function overwriting in nested function,same name function with different number of param

console.log("sum is ", doaddition(2.3, 3).add());
//Output is 2.3 3 undefined sum is NaN, this is function overwriting in nested function,same name function with different number and type of param

console.log("sum is ", doaddition("first", 2, "three").add());
//Output is Output is first 2 three sum is first2three, this is function overwriting, same name function with different type of param
// the output is in string format because string overwrite the integer.
//-----------------------------------------------------------------------------------------------------------------------------------
//Q5. Print the topics you have done so far exporting it from one file and printing in another
//Please see another two folders : exportFile.js & printFile.js
//---------------------------------------------------------------------------------------------------------------------------------------
//Q6. Give me an example of your choice on closure, objects, prototype, each.
//closure example:
function Account(name, university) {
    var AccName = name
    var University = university
    //var AcctType = type
    var UserID = name
    var MathScore = "A" //public
    var JavaScore = "A" //public
    var AccPwd = "annie888$!" //private

    var funcGetDetails = function (userID, pwd) {
        if (userID == name && pwd == AccPwd) {
            return {
                AccName,
                MathScore,
                JavaScore,
            }
        } else {
            return {
                Alert: "Wrong user name or Wrong Passwod"
            }
        }

    }

    return funcGetDetails
}

var closureObj = Account("Annie", "UC")

console.log(closureObj("Annie", "annie888$!"))  //data hiding, only display the function - fungetdetail data.
console.log(closureObj("Annie", "5678abc$%"))   //data hiding, not display the global variable, only function data

//objects, prototype examples

var user = {
    firstname: "Taylor",
    lastname: "Swift",
    age: 30,
    getUserDetails: function () {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            age: this.age,
            address: this.address,
        }
    }
}
user.__proto__.address = "USA";

//2. Object.Create({}) : for inheriting and overriding, add properties for Singer object

var Singer = Object.create(user);

Singer.Specialtiy = "Singing popular songs"
Singer.firstname = "Rihanna" //property Override
Singer.lastname = "Fenty"
Singer.address = "UK"


//override 
Singer.getUserDetails = function () {
    return {
        Speciality: this.Specialtiy,
        address: this.address,
        firstname: this.firstname,
        lastname: this.lastname,
    }
}

//output
console.log(Singer.getUserDetails()); //Singer inherit User, display child data
console.log(user.getUserDetails());  // User display getUserDetail function data
console.log(Singer.__proto__)        //Singer inherit parent's data
console.log(user.__proto__)          //User updated prototype for the address

//Q7. Create an object without prototype chain or i do not want it to be inherited further

var noPrototype = Object.create(null);//constructor with null, it have no prototype
console.log(noPrototype.__proto__)

//Q8. what will the following code output? why?

//const arr = [10, 12, 15, 21];
//for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

// output is
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// Explaination: when execute the 3s delay, var will not hold the i value, it will pop out of the stack, arr[0],arr[1],arr[2],arr[3] update to arr[4]. when i = 4, there is no arr[4] in the array
                //if change to let: for(let i=0; i<....), let will hold the data in stacks, then the output will be index from 0-3, and element will be: 10,12,15,21.


