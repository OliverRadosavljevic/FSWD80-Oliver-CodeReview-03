fetch("data.json")
    .then(jason => jason.json())
    .then(jason => {
        for (let i = 0; i < jason.data.length; i++) {
            document.getElementsByClassName("person")[i].src = jason.data[i].image;
            document.getElementsByClassName("name")[i].innerHTML = "Name: <br>" + jason.data[i].name;
            document.getElementsByClassName("email")[i].innerHTML = "Email: " + jason.data[i].email;
        }
    })