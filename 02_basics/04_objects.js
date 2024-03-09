// const tinderUser = new Object();    // this create a singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "soumitra"

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "soumitra",
            lastname: "samanta"
        }
    }
}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3);   // first parameter treated as a target and other parameter treater as a source   // first method

const obj4 = {...obj1, ...obj2}
// console.log(obj1);
// console.log(obj4);

// console.log(tinderUser.hasOwnProperty('id'));   // to check -> property present or not

//************* de-structuring */

const course = {
    courseName: "JS",
    coursePrice: 999,
    courseInstructor: "hitesh sir"
}

const {courseInstructor: instructor} = course   // de-structuring

console.log(instructor);