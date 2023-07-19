document.addEventListener("DOMContentLoaded", function () {
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const gender = document.getElementById("gender");
    const blood = document.getElementById("blood");
    const button = document.getElementById("signup");
  
    button.addEventListener("click", () => {
      const dataObj = {
        name: name.value,
        age: age.value,
        gender: gender.value,
        blood: blood.value,
      };
  
      fetch("http://localhost:3000/donors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Account created");
          window.location.href = "signin.html";
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });