let body = document.querySelector("body");
let main = document.querySelector(".main_content")
let h1 = document.querySelector(".name");
let ul = document.querySelector(".basics");
let story = document.querySelector(".story");
let p = document.createElement("p");



story.appendChild(p);




let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/eman-s");

req.addEventListener("load", function(){
  let obj = JSON.parse(req.response);
  console.log(obj.name);

    h1.innerHTML = `${obj.name}`;

    ul.innerHTML = `<span>Name:</span> ${obj.name}
                    <br>
                    <span>Github URL:</span> <a href="https://github.com/eman-s">${obj.html_url}</a>
                    <br>
                    <span>Email:</span> ${obj.email}
                    <br>
                    <span>Company:</span> ${obj.company}
                    <br>
                    <span>Website:</sapn> ${obj.blog} `;

    p.innerHTML = `${obj.bio}`;

    let img = document.createElement("img");
    img.setAttribute("src", `${obj.avatar_url}`);
    main.appendChild(img);



});

req.send();
