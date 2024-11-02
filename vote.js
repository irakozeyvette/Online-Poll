// Function to handle voter registration
function register(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve the values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = Number(document.getElementById("age").value);
    var idNumber = document.getElementById("idNumber").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;
    var county = document.getElementById("county").value;
    var village = document.getElementById("village").value;

    // Check if age is eligible for voting
    if (age >= 18) {
        // Store user information in localStorage
        localStorage.setItem("registered", "true");
        console.log("Registration Successful!");
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Age: " + age);
        console.log("ID Number: " + idNumber);
        console.log("State: " + state);
        console.log("City: " + city);
        console.log("County: " + county);
        console.log("Village: " + village);

        // Hide the registration form and show the voting section
        document.getElementById("registrationContainer").classList.add("hidden");
        document.getElementById("votingContainer").classList.remove("hidden");
    } else {
        // Alert user if not eligible
        alert("Sorry, you are " + age + " years old and don't qualify to vote.");
    }
}

// Function to handle voting for Candidate 1
function vote1() {
    // Retrieve the current number of votes for Candidate 1
    var votes = Number(document.getElementById("s1").innerHTML);
    
    // Increment the vote count and update the display
    document.getElementById("s1").innerHTML = votes + 1;
}
