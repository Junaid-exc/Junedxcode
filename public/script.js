
gsap.to(".nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to('.project-h',{
  x:60,
  duration: 1,
  scrollTrigger:{
    trigger: ".project-h",
    scroller: "body",
    start: "top 60%",
    end : "top 70%",

  }

})
gsap.to('.proj-img',{
  x:-30,
  stagger: 0.2,
  duration: 1,
  scrollTrigger:{
    trigger: ".proj-img",
    scroller: "body",
    start: "top 60%",
    end : "top 70%",
  

  }
})
gsap.to('.about-h',{
  x:-60,
  duration: 1,
  scrollTrigger:{
    trigger: ".about-h",
    scroller: "body",
    start: "top 70%",
    end : "top 80%",

  }

})

gsap.from('.prog',{
  x:150,

  stagger:0.4,
  scrollTrigger:{
    start:"10%",
    end:"25%",
  }
})

gsap.to('.mob-nav',{
  height : "60px",
  duration :0.5,
  backgroundColor : 'black',
  scrollTrigger:{
      trigger: ".mob-nav",
      scroller: "body",
      start: "top -10%",
      end : 'top -11%',
      scrub: 1,
  }
})
window.addEventListener('load',()=>{
  gsap.from('.p1',{
    y: "269px",
    scrub: 2,
  
  })

})


gsap.to('.page-cont',{
  backgroundColor : 'black',
  scrollTrigger:{
      trigger: ".nav",
      scroller: "body",
      scrub: 3,
      start: "top -30%",
      end : 'top -130%',
  }
})
let cursor = document.getElementById('cursor');
let blr = document.getElementById('blr');
document.addEventListener('mousemove',function move(dets){
    cursor.style.left = dets.x+ 'px';
    cursor.style.top = dets.y+'px';
    blr.style.left = dets.x - 150 + 'px';
    blr.style.top = dets.y - 150 +'px';
})
let icons =document.querySelectorAll('.icon');
let nav = document.querySelectorAll('.h4');  // Select all elements with class 'h4'
let cnt = 0;  // Initialize count

nav.forEach(function(element) {
  element.addEventListener('mouseover',function click(){
      blr.style.opacity ='0';
      cursor.style.backgroundColor ='transparent';
      cursor.style.border = '2px solid yellow';
      cursor.style.padding = "15px 15px";

      element.addEventListener('mouseleave',function leave(){
          blr.style.opacity = '1';
          cursor.style.backgroundColor ='yellow';
          cursor.style.border = 'none';
          cursor.style.padding = "";
      })
  })
});
icons.forEach(function(element) {
  element.addEventListener('mouseover',function click(){
      blr.style.opacity ='0';
      cursor.style.backgroundColor ='transparent';
      cursor.style.border = '2px solid yellow';
      cursor.style.padding = "15px 15px";

      element.addEventListener('mouseleave',function leave(){
          blr.style.opacity = '1';
          cursor.style.backgroundColor ='yellow';
          cursor.style.border = 'none';
          cursor.style.padding = "";
      })
  })
});
var v1 = $(".i1").attr("data-pg");
$(".i1").animate({
  width: v1
}, 2000);
var v2 = $(".i2").attr("data-pg");
$(".i2").animate({
  width: v2
}, 2000);
var v3 = $(".i3").attr("data-pg");
$(".i3").animate({
  width: v3
}, 2000);
/*var v4 = $(".i4").attr("data-pg");
$(".i4").animate({width:v4},2000);*/
document.querySelector("#contactForm").addEventListener("submit", async (event) => {
  event.preventDefault();
 let permEmail = "jkgamingzome@gmail.com"
  const name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  const message = document.querySelector(".message").value;
  let email2 = document.querySelector(".email").value
  email = permEmail
  

  if (!name || !email || !message) {
      alert("Please fill out all fields!");
      return;
  }

  try {
      // Send form data to the backend API
      const response = await fetch("http://localhost:3000/send-email", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ email2, name, email, message }),
      });

      const result = await response.json();
      if (result.success) {
          alert("Email sent successfully!");
          
          document.querySelector("#contactForm").reset();
      } else {
          alert("Failed to send email. Please try again.");
      }
  } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
  }
});

