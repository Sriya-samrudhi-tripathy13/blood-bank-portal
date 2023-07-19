document.addEventListener("DOMContentLoaded", function () {
    const name = document.getElementById("name");
    const blood = document.getElementById("blood");
    const button = document.getElementById("signin");
  
    button.addEventListener("click", () => {
      fetch("http://localhost:3000/donors", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          const comparison = data.find(
            (ele) => ele.name === name.value && ele.blood === blood.value
          );
          console.log(comparison);
          if (comparison !== undefined) {
            alert("Logged in successfully");
            localStorage.setItem("token", JSON.stringify(Date.now()));
            localStorage.setItem("id", JSON.stringify(comparison.id));
            window.location.href = "index.html";
          } else {
            alert("Incorrect input");
          }
        });
    });
  });