const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail(){
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
      SecureToken : "6980137b-90c3-4dba-aa63-9ad5c92e28ee",
      To : 'anassaitbelagouim@gmail.com',
      From : "anassaitbelagouim@gmail.com",
      Subject : subject.value,
      Body : bodyMessage
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      }
    }
  );
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});