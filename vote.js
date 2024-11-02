<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Voting System</title>
    <link rel="stylesheet" href="vote.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <style>
        /* Internal CSS to beautify the page */
        body {
            background-color: #f8f9fa;
            font-family: Arial, sans-serif;
        }
        .hidden {
            display: none;
        }
        #registrationContainer, #votingContainer {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: white;
        }
        h1 {
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <h1>Online Voting System</h1>

    <div id="registrationContainer">
        <h2>Voter Registration</h2>
        <form onsubmit="register(event)">
            <input type="text" id="name" placeholder="Name" required class="form-control mb-2">
            <input type="email" id="email" placeholder="Email" required class="form-control mb-2">
            <input type="number" id="age" placeholder="Age" required class="form-control mb-2">
            <input type="text" id="idNumber" placeholder="ID Number" required class="form-control mb-2">
            <input type="text" id="state" placeholder="State" required class="form-control mb-2">
            <input type="text" id="city" placeholder="City" required class="form-control mb-2">
            <input type="text" id="county" placeholder="County" required class="form-control mb-2">
            <input type="text" id="village" placeholder="Village" required class="form-control mb-2">
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>

    <div id="votingContainer" class="hidden">
        <h2>Vote for Your Candidate</h2>
        <div>
            <h3>Candidate 1</h3>
            <button onclick="vote1()" class="btn btn-success">Vote</button>
            <h3>Total Votes: <span id="s1">0</span></h3>
        </div>
        <!-- Add more candidates as needed -->
    </div>

    <script>
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

        // Function to check if the user is eligible to vote
        function isEligibleToVote() {
            const registered = localStorage.getItem("registered");
            return registered === "true";
        }

        // Function to handle voting for Candidate 1
        function vote1() {
            if (isEligibleToVote()) {
                // Retrieve the current number of votes for Candidate 1
                var votes = Number(document.getElementById("s1").innerHTML);
                
                // Increment the vote count and update the display
                document.getElementById("s1").innerHTML = votes + 1;
                console.log("Vote cast for Candidate 1. Total votes: " + (votes + 1));
            } else {
                alert("You must register to vote before casting your vote.");
            }
        }

        // You can add similar functions for other candidates as needed
    </script>

</body>
</html>
