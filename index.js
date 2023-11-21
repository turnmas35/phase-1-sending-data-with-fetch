function submitData(name, email) {
    const data = {
        name: name,
        email: email
      };
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(json => appendIdToDOM(json))
      .catch(error => document.body.innerHTML = error.message)
    };
function appendIdToDOM(json){
    document.body.innerHTML = json.id
}