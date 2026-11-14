// JavaScript source code
function showMessage() {
    var name = document.getElementById("customerName").value;
    var quantity = document.getElementById("quantity").value;
    var flower = document.getElementById("flowerType").value;

    if (name == "") {
        window.alert("Please enter your name!");
    }
    else if (quantity == "" || quantity <= 0) {
        window.alert("Please enter a valid quantity!");
    }
    else if (flower == "") {
       window.alert("Please select your flower!");
    }

    else {
        alert("Thank you, " + name + "! Your order has been received.");

        document.getElementById("orderbutton").innerHTML = "Order Received"; /* based on Rubric Requirement: I did Change HTML Elements and CSS Styles.
   We use JavaScript to change the button text to "Order Received"
   and its background color to light pink after a valid order. */

        document.getElementById("orderbutton").style.backgroundColor = "lightpink";
    }
}/* Dynamic Picture and Text:
   Change the flower image and name using JavaScript. */

function changeFlower() {
    document.getElementById("featuredFlower").src = "img/white-rose.jpg";
    document.getElementById("flowerName").innerHTML = "White Rose Bouquet";
}
/* Rubric: Form Validation */
function checkLogin() {
    var name = document.getElementById("loginName").value;
    var password = document.getElementById("loginPassword").value;

    if (name == "") {
       window.alert("Please enter your username!");
    }
    else if (password == "") {
        window.alert("Please enter your password!");
    }
    else {
       window.alert("Login form completed successfully!");
    }
}
/* Rubric: Form Validation */

function checkSignup() {
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("signupPassword").value;

    if (name == "") {
       window.alert("Please enter your full name!");
    }
    else if (email == "") {
       window.alert("Please enter your email!");
    }
    else if (password == "") {
       window.alert("Please enter your password!");
    }
    else {
        window.alert("Sign Up form completed successfully!");
    }
}
