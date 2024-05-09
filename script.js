const form = document.querySelector("form");

function sendEmail(){
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "anassaitbelagouim@gmail.com",
      Password : "51515AC12F13ACFA7DBF302B67C1EB8EB43F",
      To : 'anassaitbelagouim@gmail.com',
      From : "anassaitbelagouim@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});