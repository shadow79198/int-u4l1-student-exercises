let button = document.querySelector("button");
textElem = document.querySelector(".text")
numberElem = document.querySelector(".number")
emailElem = document.querySelector(".email")
dateElem = document.querySelector(".date")

button.addEventListener("click", function() {
    let text = textElem.value
    let number = numberElem.value
    let email = emailElem.value
    let date = dateElem.value
    
    // 1. Update the four variables - text, number, email, and date.
    //  - Save the value of the four different inputs.
    //  - Go to the html to use the class names.
    

    console.log(text + number + email + date)
    
    


    // DO NOT CHANGE THIS CODE
    // so if u add a tag it can make it go down
    let resultsDiv = document.querySelector('#results');
    resultsDiv.innerHTML = "";
    resultsDiv.innerHTML += `<p>Text: ${text}</p>`;
    resultsDiv.innerHTML += `<p>Number: ${number}</p>`;
    resultsDiv.innerHTML += `<p>Email: ${email}</p>`;
    resultsDiv.innerHTML += `<p>Date: ${date}</p>`;

});
