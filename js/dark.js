document.getElementById("btn").addEventListener("click", function() 
    {
      var currentColor = document.body.style.backgroundColor;
      if(currentColor == "white") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.getElementById("btn").innerHTML= " Light mode";
      } 
      else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
        document.getElementById("btn").innerHTML= "Dark mode";
      }
    });