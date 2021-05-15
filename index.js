function submitData(name, email){
  const formData = {
      name: "Steve",
      email: "steve@steve.com"
  }
  const configurationObject = {
      method: "Post",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(formData)
  };
  return fetch('http://localhost:3000/users',configurationObject)
  .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
      //object.id
      console.log(object.id)
      document.body.innerHTML = object.id
      //console.log(document.body)
    })
    .catch(function(object){
        document.body.innerHTML = object.message

    })
}

submitData("Steve", "steve@steve.com")