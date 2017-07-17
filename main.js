let h1 = document.querySelector(".name");
let ul = document.querySelector(".basics")
let story = document.querySelector(".story")
let p = document.createElement("p");

story.appendChild(p);


let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/eman-s");

req.addEventListener("load", function(){
  let obj = JSON.parse(req.response);
  console.log(obj.name);
    h1.innerHTML = `${obj.name}`;

    ul.innerHTML = `Name: ${obj.name}
                    <br>
                    Github URL: <a href="https://github.com/eman-s">${obj.html_url}</a>
                    <br>
                    Email: ${obj.email}
                    <br>
                    Company: ${obj.company}
                    <br>
                    Website: ${obj.blog} `;

    p.innerHTML = `${obj.bio}`;


});

req.send();
