//This object stores brother information
var brotherObj = [
    {
        username : "person1",
        password : "pass"
    }
]

/**
 * Retreives user information from the login page
 */
function getUserInfo(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    brotherExists(username, password)
}

/**
 * Performs a linear search through the brotherhood database to see if the user exists
 * @param {String} name Username of the user
 * @param {String} pass Password of the user
 */
function brotherExists(username, password){
    console.log(brotherObj[0].username)
    for(let i = 0; i < brotherObj.length; i++){
        //console.log("Username: " + brotherObj[i].username + "\n Password: " + brotherObj[i].password)
        if(username == brotherObj[i].username && password == brotherObj[i].password){
            alert("You are now signed in!")
            window.location.href = "http://www.themostamazingwebsiteontheinternet.com"
            return
        }
    }
    alert("User does not exist")
}
