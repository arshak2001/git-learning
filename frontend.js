function showMessage() {
    const name = document.getElementById("name").value;
    const output = document.getElementById("output");

    if (name.trim() === "") {
        output.textContent = "Please enter your name";
    } else {
        output.textContent = `Hello, ${name}!`;
    }
}
<html>
<head>
  <title>Simple UI</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 100px;
    }

    .container {
      width: 300px;
      margin: auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 10px;
    }

    input {
      width: 90%;
      padding: 10px;
      margin: 10px 0;
    }

    button {
      padding: 10px 20px;
      cursor: pointer;
    }

    #output {
      margin-top: 20px;
      color: blue;
    }
  </style>
</head>
<body>

  <div class="container">
    <h2>Simple UI</h2>

    <input type="text" id="name" placeholder="Enter your name">

    <button onclick="showMessage()">Submit</button>

    <p id="output"></p>
  </div>

  <script>
    function showMessage() {
      let name = document.getElementById("name").value;

      if (name === "") {
        document.getElementById("output").innerText = "Please enter your name";
      } else {
        document.getElementById("output").innerText = "Hello, " + name + "!";
      }
    }
  </script>

</body>
</html>