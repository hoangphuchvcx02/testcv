var typingText = document.querySelector('.text2');
var myArray = 
["Undergaduate Student","Designer", "Freelancer", "Coder"];
var arrayIndex = 1;

function textReplace(){
	setInterval(timer, 5000);
	function timer(){
		if(arrayIndex < myArray.length){
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
		else{
			arrayIndex = 0;
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
	}
}
textReplace();

var menuBtn = document.querySelector('.navbar .menu-btn');
var menuList = document.querySelector('.navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', addActiveClass);

function addActiveClass(){
	menuList.classList.toggle('active');
}

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuList.classList.remove('active');
}


var homeSection = document.querySelector('.active_navbar');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);



function pageScrollFunction(){
	if(window.scrollY > 80){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}


////Mở một trang phụ

var mainScrollPos;
function openNav(noteId) {
	mainScrollPos = window.pageYOffset || document.documentElement.scrollTop;
	document.getElementById("myNav").style.width = "100%";
	document.getElementById(noteId).style.display = "block";
	document.body.classList.add("no-scroll");
	document.getElementById("fa-solid fa-bars-staggered").style.opacity = "0";
}

function closeNav(noteId) {
	document.getElementById("myNav").style.width = "0%";
	document.getElementById(noteId).style.display = "none";
	document.body.classList.remove("no-scroll");
	window.scrollTo(0, mainScrollPos);

}

var mainScrollPos2;
function openNav2(noteId2) {
	mainScrollPos2 = window.pageYOffset || document.documentElement.scrollTop;
	document.getElementById("myNav2").style.width = "100%";
	document.getElementById(noteId2).style.display = "block";
	document.body.classList.add("no-scroll");
}

function closeNav2(noteId2) {
	document.getElementById("myNav2").style.width = "0%";
	document.getElementById(noteId2).style.display = "none";
	document.body.classList.remove("no-scroll");
	window.scrollTo(0, mainScrollPos2);
}


var mainScrollPos3;
function openNav3(noteId3) {
	mainScrollPos3 = window.pageYOffset || document.documentElement.scrollTop;
	document.getElementById("myNav3").style.width = "100%";
	document.getElementById(noteId3).style.display = "block";
	document.body.classList.add("no-scroll");
}

function closeNav3(noteId3) {
	document.getElementById("myNav3").style.width = "0%";
	document.getElementById(noteId3).style.display = "none";
	document.body.classList.remove("no-scroll");
	window.scrollTo(0, mainScrollPos3);
}
//mở một trang phụ



//Hiệu ứng fade in

window.addEventListener('scroll', fadeIn);
function fadeIn() {
// Lấy phần tử cần thực hiện hiệu ứng
var element = document.querySelector('section');
// Vị trí của phần tử so với cửa sổ trình duyệt
var elementPosition = element.getBoundingClientRect().top;
// Chiều cao của cửa sổ trình duyệt
var windowHeight = window.innerHeight;
// Khi phần tử được lăn đến một phần nào đó của cửa sổ trình duyệt và delay đã kết thúc, thực hiện hiệu ứng
if (elementPosition < windowHeight) {
	setTimeout(function () {
	element.style.opacity = 1;
	element.querySelector('section').style.visibility = 'visible';
	}, 300); // 0.3 giây delay trước khi thực hiện hiệu ứng
}
}


////////////////////////////
// Hiển thị cửa sổ pop-up
function showPopup() {
	var popup = document.getElementById("popup_blog");
	popup.style.display = "block";
  }
  
function closePopup() {
	var popup = document.getElementById("popup_blog");
	popup.style.display = "none";
  	var blogSection = document.getElementById("blog");
  	blogSection.scrollIntoView({ behavior: "smooth" });
}




//Gửi email
   (function(){
      emailjs.init("rUeJu8scg1CQEhqQK");
   })();


	function sendMail(){
		var params = {
			name: document.getElementById("name1").value,
			email: document.getElementById("email1").value,
			message: document.getElementById("message1").value,
		};
	
	const serviceID = "service_z6wfvl8";
	const templateID = "template_bs1a994"
	emailjs.send(serviceID,templateID, params)
	.then(
		(res) =>{
			document.getElementById("name1").value = "";
			document.getElementById("email1").value = "";
			document.getElementById("message1").value = "";
			console.log(res);
			alert("Đã gửi thành công tuy nhiên phần mềm đang phát triển có thể tôi không nhận được thông báo hoặc Anh/chị có thể gửi email trực tiếp hoặc liên lạc messenger qua link bên dưới. Xin cảm ơn.  Successfully submitted, but the software is under development, I may not receive the notification or you can send an email directly or contact messenger via the link below. Thank you "); 
		}
	)
	.catch((err) => console.log(err))
	}

	/*************************************************************************
	 * 
	 * 								NỘI DUNG TRANG 2
	 *
	 * ************************************************************************/
leButton = document.getElementById('toggleButton');
	var contentDiv = document.getElementById('contentDiv');
	var i = 0;
  
	toggleButton.addEventListener('click', function() {
	  i++;
	  if (i % 2 === 1) {
		contentDiv.style.display = 'block';
	  } else {
		contentDiv.style.display = 'none';
	  }
	});
			
	/**********************************************************************
	 * 
	 * 								SOFTSKILL AND ACTIVITIES
	 * 
	 *********************************************************************/
	let slideIndex = 1;

	showSlide(slideIndex);

	function showSlide(n) {
	const slides = document.getElementsByClassName("slide");
	const dots = document.getElementsByClassName("dot");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
	}
	
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].classList.add("active");
	}

	function currentSlide(n) {
	showSlide(slideIndex = n);
	}

	function navigateSlides(n) {
	showSlide(slideIndex += n);
	}
