function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function toggleFAQ(button) {
    var answer = button.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        // Close all other open answers
        var allAnswers = document.querySelectorAll(".faq-answer");
        allAnswers.forEach(function(ans) {
            ans.style.display = "none";
        });
        answer.style.display = "block";
    }
}


function openPopUp() {
    document.getElementById('contactForm').reset();
    document.getElementById("popup").style.display = "flex";

  }
  function closePopup() {
    document.getElementById('contactForm').reset();
    document.getElementById("popup").style.display = "none";

  }

 function closeNavOpenPopUp(){
    closeNav();
    openPopUp();
  }

const scriptURL = 'https://script.google.com/macros/s/AKfycbxJJNsIQbFSy9BKyccKMi_VTWAfxTEhOXwtyEe0XacHWI_K6sayD71Z1j2qVDLCMBll/exec';


function submitData() {
    const url = 'https://script.google.com/macros/s/AKfycbxJJNsIQbFSy9BKyccKMi_VTWAfxTEhOXwtyEe0XacHWI_K6sayD71Z1j2qVDLCMBll/exec'; // Replace with your Web App URL
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('status').textContent = data;
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
    closePopup();
}

