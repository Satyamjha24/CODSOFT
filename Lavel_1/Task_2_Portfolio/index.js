let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let footer=document.getElementById('footerP')
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("fa-sun")) {
    darkmode.classList.replace("fa-sun", "fa-moon");
    darkmode.style.color='blue'
    document.body.classList.add("active");
    footer.style.color='black';
  } else {
    darkmode.classList.replace("fa-moon", "fa-sun");
    darkmode.style.color='yellow'
    document.body.classList.remove("active");
    footer.style.color='white'
  }
};

const resume = document.getElementById("resume-button-1");
resume.onclick = (e) => {
    window.open("./assets/Satyam_Kumar_Resume.pdf")
}

const containerResume = document.getElementById("resume-button-2");
containerResume.onclick = (e) => {
    window.open("./assets/Satyam_Kumar_Resume.pdf")
}
                          

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");
const contactPhone = document.getElementById("contactPhone");

const contactSubmit = document.getElementById("contactSubmit");
contactSubmit.onclick = async (e) => {
  e.preventDefault();
  console.log([contactName.value, contactEmail.value, contactMessage.value]);

  const data = {
    service_id: 'service_il9bgc9',
    template_id: 'template_nnb9f64',
    user_id:"OIImQEJ0S1tdg2oUF",
    template_params: {
      'from_name': contactName.value,
      'to_name' : 'Satyam',
      'message' : contactMessage.value,
      'from_email' : contactEmail.value
    }
  };

  try {

    let Email = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body : JSON.stringify(data),
      headers : {
        'Content-type' : 'application/json'
      }
    })

    if(Email.ok){
      console.log('Msg received');
      alert('Thanks for reaching out, Your email sent successfully!!')
    }
    
  } catch (err) {
    console.log(err);
  }


  contactName.value = null;
  contactEmail.value = null;
  contactMessage.value = null;
  contactPhone.value=null
};

let slider2 = document.querySelector('.slider2 .list2');
let items2 = document.querySelectorAll('.slider2 .list2 .item2');
let next2 = document.getElementById('next2');
let prev2 = document.getElementById('prev2');
let dots2 = document.querySelectorAll('.slider2 .dots2 li');

let lengthItems2 = items2.length - 1;
let active2 = 0;
next2.onclick = function(){
    active2 = active2 + 1 <= lengthItems2 ? active2 + 1 : 0;
    reloadSlider2();
}
prev2.onclick = function(){
    active2 = active2 - 1 >= 0 ? active2 - 1 : lengthItems2;
    reloadSlider2();
}

function reloadSlider2(){
    slider2.style.left = -items2[active2].offsetLeft + 'px';
    // 
    let last_active2_dot = document.querySelector('.slider2 .dots2 li.active2');
    last_active2_dot.classList.remove('active2');
    dots2[active2].classList.add('active2');

    
}

dots2.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active2 = key;
         reloadSlider2();
    })
})
window.onresize = function(event) {
    reloadSlider2();
};

let slider3 = document.querySelector('.slider3 .list3');
let items3 = document.querySelectorAll('.slider3 .list3 .item3');
let next3 = document.getElementById('next3');
let prev3 = document.getElementById('prev3');
let dots3 = document.querySelectorAll('.slider3 .dots3 li');

let lengthItems3 = items3.length - 1;
let active3 = 0;
next3.onclick = function(){
    active3 = active3 + 1 <= lengthItems3 ? active3 + 1 : 0;
    reloadSlider3();
}
prev3.onclick = function(){
    active3 = active3 - 1 >= 0 ? active3 - 1 : lengthItems3;
    reloadSlider3();
}

function reloadSlider3(){
    slider3.style.left = -items3[active3].offsetLeft + 'px';
    // 
    let last_active3_dot = document.querySelector('.slider3 .dots3 li.active3');
    last_active3_dot.classList.remove('active3');
    dots3[active3].classList.add('active3');

    
}

dots3.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active3 = key;
         reloadSlider3();
    })
})
window.onresize = function(event) {
    reloadSlider3();
};

let slider4 = document.querySelector('.slider4 .list4');
let items4 = document.querySelectorAll('.slider4 .list4 .item4');
let next4 = document.getElementById('next4');
let prev4 = document.getElementById('prev4');
let dots4 = document.querySelectorAll('.slider4 .dots4 li');

let lengthItems4 = items4.length - 1;
let active4 = 0;
next4.onclick = function(){
    active4 = active4 + 1 <= lengthItems4 ? active4 + 1 : 0;
    reloadSlider4();
}
prev4.onclick = function(){
    active4 = active4 - 1 >= 0 ? active4 - 1 : lengthItems4;
    reloadSlider4();
}

function reloadSlider4(){
    slider4.style.left = -items4[active4].offsetLeft + 'px';
    // 
    let last_active4_dot = document.querySelector('.slider4 .dots4 li.active4');
    last_active4_dot.classList.remove('active4');
    dots4[active4].classList.add('active4');

    
}

dots4.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active4 = key;
         reloadSlider4();
    })
})
window.onresize = function(event) {
    reloadSlider4();
};

let slider6 = document.querySelector('.slider6 .list6');
let items6 = document.querySelectorAll('.slider6 .list6 .item6');
let next6 = document.getElementById('next6');
let prev6 = document.getElementById('prev6');
let dots6 = document.querySelectorAll('.slider6 .dots6 li');

let lengthItems6 = items6.length - 1;
let active6 = 0;
next6.onclick = function(){
    active6 = active6 + 1 <= lengthItems6 ? active6 + 1 : 0;
    reloadSlider6();
}
prev6.onclick = function(){
    active6 = active6 - 1 >= 0 ? active6 - 1 : lengthItems6;
    reloadSlider6();
}

function reloadSlider6(){
    slider6.style.left = -items6[active6].offsetLeft + 'px';
    // 
    let last_active6_dot = document.querySelector('.slider6 .dots6 li.active6');
    last_active6_dot.classList.remove('active6');
    dots6[active6].classList.add('active6');

    
}

dots6.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active6 = key;
         reloadSlider6();
    })
})
window.onresize = function(event) {
    reloadSlider6();
};

let slider7 = document.querySelector('.slider7 .list7');
let items7 = document.querySelectorAll('.slider7 .list7 .item7');
let next7 = document.getElementById('next7');
let prev7 = document.getElementById('prev7');
let dots7 = document.querySelectorAll('.slider7 .dots7 li');

let lengthItems7 = items7.length - 1;
let active7 = 0;
next7.onclick = function(){
    active7 = active7 + 1 <= lengthItems7 ? active7 + 1 : 0;
    reloadSlider7();
}
prev7.onclick = function(){
    active7 = active7 - 1 >= 0 ? active7 - 1 : lengthItems7;
    reloadSlider7();
}

function reloadSlider7(){
    slider7.style.left = -items7[active7].offsetLeft + 'px';
    // 
    let last_active7_dot = document.querySelector('.slider7 .dots7 li.active7');
    last_active7_dot.classList.remove('active7');
    dots7[active7].classList.add('active7');

    
}

dots7.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active7 = key;
         reloadSlider7();
    })
})
window.onresize = function(event) {
    reloadSlider7();
};