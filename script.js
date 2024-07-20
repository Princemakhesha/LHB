// Set the date we're counting down to (30 days from now)
const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 30);

// Update the count down every 1 second
const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerText = "We are live!";
    }
}, 1000);

var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.preventDefault();

    var email = document.getElementById('email').value;

    // Check if the email field is empty
    if (!email) {
        alert("Please enter your email address.");
        return; // Prevent sending the email if the email field is empty
    }

    var body = 'Email: ' + email;

    Email.send({
        SecureToken: "dd2bf18f-09a5-46bb-961d-8dc768301175", //for messages.semtexagecny@outlook.com
        To: 'messages.semtexagency@outlook.com',
        From: "messages.semtexagency@outlook.com",
        Subject: "Urgent: A client is trying to get in touch - From LHB webpage",
        Body: body
    }).then(
        function (message) {
            alert("Thank you, we will be in touch!");
            document.getElementById('email').value = ''; // Clear the email input field
        }
    ).catch(
        function (error) {
            console.log("Email sending error:", error);
            alert("Failed. Please try again later.");
        }
    );
});