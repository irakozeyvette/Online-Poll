<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voting System</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <style>
        body {
            background-color: #f8f9fa;
            color: #343a40;
        }
        h1 {
            margin-bottom: 30px;
            font-weight: bold;
        }
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .form-label {
            font-weight: bold;
        }
        .btn-primary {
            background-color: #007bff;
            border: none;
        }
        .btn-primary:hover {
            background-color: #0056b3;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>

    <h1 class="text-center">Online Voting System</h1>
    
    <!-- Registration Form Section -->
    <div class="container" id="registrationContainer">
        <h2 class="text-center">Voter Registration</h2>
        <form id="registrationForm" class="text-center" onsubmit="register(event)">
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="name" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="age" class="form-label">Age</label>
                <input type="number" class="form-control" id="age" required>
            </div>
            <div class="mb-3">
                <label for="idNumber" class="form-label">ID Number</label>
                <input type="text" class="form-control" id="idNumber" required>
            </div>
            <div class="mb-3">
                <label for="state" class="form-label">State</label>
                <input type="text" class="form-control" id="state" required>
            </div>
            <div class="mb-3">
                <label for="city" class="form-label">City</label>
                <input type="text" class="form-control" id="city" required>
            </div>
            <div class="mb-3">
                <label for="county" class="form-label">County</label>
                <input type="text" class="form-control" id="county" required>
            </div>
            <div class="mb-3">
                <label for="village" class="form-label">Village</label>
                <input type="text" class="form-control" id="village" required>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>

    <!-- Voting Section -->
    <div class="container hidden" id="votingContainer">
        <h2 class="text-center">Candidates</h2>
        <div class="row">
            <div class="col-md-3">
                <h2>CANDIDATE 1</h2>
                <div class="card">
                    <img class="card-img-top" src="img/mag.jpg" alt="Candidate-1">
                    <div class="card-body">
                        <h3 class="card-title">Name: John</h3>
                        <p class="card-text">Position: President</p>
                        <button class="btn btn-primary" id="c1" onclick="vote1()">VOTE</button>
                    </div>
                </div>
            </div>
            <!-- Repeat for more candidates as needed -->
        </div>
        <div class="row pt-5">
            <div class="col-md-6">
                <h2>POLL RESULTS 1</h2>
                <h3> CANDIDATE 1: <span id="s1">0</span></h3>
                <!-- More results as needed -->
            </div>
        </div>
    </div>

    <script src="vote.js"></script>
    <script>
        function register(event) {
            event.preventDefault(); // Prevent form submission
            var age = Number(document.getElementById("age").value);

            // Check age eligibility
            if (age >= 18) {
                document.getElementById("registrationContainer").classList.add("hidden");
                document.getElementById("votingContainer").classList.remove("hidden");
            } else {
                alert("Sorry, you are " + age + " years old and don't qualify to vote.");
            }
        }

        function vote1() {
            var votes = Number(document.getElementById("s1").innerHTML);
            document.getElementById("s1").innerHTML = votes + 1;
        }
    </script>
</body>
</html>
