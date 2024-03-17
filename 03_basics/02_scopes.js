function one(){
    const username = "soumitra"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

// ***********************

addOne(5)
function addOne(num)
{
    return num+1
}


addTwo(5)   // this will occur a error
const addTwo = function(num)    // function expression
{   
    return num+2
}
