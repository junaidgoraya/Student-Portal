// Display date & time
function updateTime() {
  const dt = new Date();
  const el = document.getElementById("datetime");
  if(el) el.textContent = dt.toLocaleString();
}
updateTime();
setInterval(updateTime,1000);

// Registration Form
const form = document.getElementById("registerForm");
if(form){
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const program = document.getElementById("program").value;
    const dob = document.getElementById("dob").value;
    const age = document.getElementById("age").value;
    const favcolor = document.getElementById("favcolor").value;

    if(!name || !email || !password){ alert("Fill required fields."); return; }
    if(password.length<6){ alert("Password min 6 chars."); return; }
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if(!email.match(emailPattern)){ alert("Invalid email."); return; }

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentProgram", program);
    localStorage.setItem("studentDOB", dob);
    localStorage.setItem("studentRegDate", new Date().toLocaleDateString());
    localStorage.setItem("studentAge", age);
    localStorage.setItem("studentFavColor", favcolor);

    alert("Registration successful!");
    window.location.href="profile.html";
  });
}

// Load Profile
document.addEventListener("DOMContentLoaded",()=>{
  const name=localStorage.getItem("studentName");
  const email=localStorage.getItem("studentEmail");
  const program=localStorage.getItem("studentProgram");
  const dob=localStorage.getItem("studentDOB");
  const regDate=localStorage.getItem("studentRegDate");
  const age=localStorage.getItem("studentAge");
  const favcolor=localStorage.getItem("studentFavColor");

  if(document.getElementById("pname")) document.getElementById("pname").textContent = name||"Muhammad Junaid";
  if(document.getElementById("pemail")) document.getElementById("pemail").textContent = email||"junaid@example.com";
  if(document.getElementById("pprogram")) document.getElementById("pprogram").textContent = program||"Computer Science";
  if(document.getElementById("pregdate")) document.getElementById("pregdate").textContent = regDate||"11-01-2025";
  if(document.getElementById("pdob")) document.getElementById("pdob").textContent = dob||"02-02-2004";
  if(document.getElementById("page")) document.getElementById("page").textContent = age||"20";

  // Profile Table
  ["tpname","tpemail","tpprogram","tpregdate","tpdob","tpage"].forEach(id=>{
    if(document.getElementById(id)) document.getElementById(id).textContent = localStorage.getItem(id.replace('t','student')) || document.getElementById(id).textContent;
  });

  // Favorite color
  if(favcolor && document.querySelector(".profile-card")){
    document.querySelector(".profile-card").style.borderColor = favcolor;
  }

  // Hamburger Menu Toggle
  const hamburger=document.querySelector(".hamburger");
  const navLinks=document.querySelector(".nav-links");
  if(hamburger) hamburger.addEventListener("click",()=>{ navLinks.classList.toggle("active"); });
});
