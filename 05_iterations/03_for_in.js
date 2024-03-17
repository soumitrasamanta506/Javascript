const myObject = {
    js: 'javaScript',
    cpp: 'c++',
    rb: 'ruby'
}

for(const key in myObject)
{
    console.log(`${key} -> ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "cpp", "java"]

for(const key in programming){
    // console.log(key);   // this display index of array
    console.log(programming[key]);
}