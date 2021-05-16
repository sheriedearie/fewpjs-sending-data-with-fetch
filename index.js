function submitData (userName, userEmail) {
    //try destructuring => name of arguments, the same as name of keys
    //TEST 1 - SEND DATA
    const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        //what will these values be?
        name: userName,
        email: userEmail
    })

} 
//TEST Test 2 - Handle the Response
   return fetch('http://localhost:3000/users', configurationObject)
    .then(function (response) {
        return response.json()
    })
    .then(function (object) {
        console.log(object)
        console.log(object.id)
        document.body.innerHTML = object.id
    }) 
    //Test 3 - Handle Errors
    .catch (function(object){
        console.log(object.message)
        document.body.innerHTML = object.message
    })
}