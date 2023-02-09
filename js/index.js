// define window on scroll function
window.onscroll = function () { scrollFunction() };

// fan open display block
function fan_open() {
    document.getElementById("fanbar").style.display = "block";
}
// fan close display none
function fan_close() {
    document.getElementById("fanbar").style.display = "none";
}
// scroll Function percentage bar
function scrollFunction() {
    fan_close();
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    console.log(scrolled);
    if (scrolled >= 90) {
        document.getElementById("footer").style.display = "block";
    } else {
        document.getElementById("footer").style.display = "none";
    }
}

// on click A style overflow
function onClickA() {
    document.body.style.overflow = "";
}

// on click display hidden
function onClick(element) {
    document.getElementById("profile").src = element.src;
    document.getElementById("profile-a").style.display = "block";
    document.body.style.overflow = "hidden";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
    //console.log('yes');
}

// disableCol (checkbox)
function disableCol() {
    if (document.f1.choice[0].checked == true) {
        document.getElementById("recipe1").disabled = true;
        document.getElementById("recipe2").disabled = true;
        document.getElementById("recipe3").disabled = true;
    } else {
        document.getElementById("recipe1").disabled = false;
        document.getElementById("recipe2").disabled = false;
        document.getElementById("recipe3").disabled = false;
    }
}
// preview image File Reader output image
function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('output_image');
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}
// reset image preview
function resetIMG() {
    var output = document.getElementById('output_image');
    output.src = '';
}
// print result from
function print_result() {
	
	var name = document.f1.Name.value;
	alert("Name = " + name);
	
	var uname = document.f1.Username.value;
	alert("Username = " + uname);
	
	var email = document.f1.Email.value;
	alert("Email = " + email);
	
	var tel = document.f1.Tel.value;
	alert("Phone = " + tel);
	
	var date = document.f1.date.value;
	alert("Date and Time = " + date);
	
	var choice = "";
	var c_length = document.f1.choice.length;
	for(var i=0; i < c_length; i++) {
		if(document.f1.choice[i].checked) {
			choice = document.f1.choice[i].value;
		}
	}
	alert("Choice = " + choice);
	
	var recipe = "";
	var r_length = document.f1.recipe.length;
	for(var i=0; i < r_length; i++) {
		if(document.f1.recipe[i].checked) {
			recipe += document.f1.recipe[i].value + " ";
		}
	}
	alert("Recipe = " + recipe);
}

// weight converter pounds
function weightConverterPounds(valNum) {
	document.getElementById("inputKilograms").value = valNum / 2.2046;
	document.getElementById("inputOunces").value = valNum * 16;
	document.getElementById("inputGrams").value = valNum / 0.0022046;
}

// weight converter ounces
function weightConverterOunces(valNum) {
	document.getElementById("inputPounds").value = valNum * 0.0625;
	document.getElementById("inputKilograms").value = valNum / 35.274;
	document.getElementById("inputGrams").value = valNum / 0.035274;
}

// weight converter kilograms
function weightConverterKIlograms(valNum) {
	document.getElementById("inputPounds").value = valNum * 2.2046;
	document.getElementById("inputOunces").value = valNum * 35.274;
	document.getElementById("inputGrams").value = valNum * 1000;
}
// weight converter grams
function weightConverterGrams(valNum) {
	document.getElementById("inputPounds").value = valNum * 0.0022046;
	document.getElementById("inputKilograms").value = valNum / 1000;
	document.getElementById("inputOunces").value = valNum * 0.035274;
}

// handle the game result
function correctQ() {
	var num = 0;
	
	var q1 = false;
	var q1_length = document.f2.Q1_anw.length;
	for(var i=0; i < q1_length; i++) {
		if(document.f2.Q1_anw[2].checked) {
			q1 = true;
		}
	}
	
	var q2 = false;
	var q2_length = document.f2.Q2_anw.length;
	for(var i=0; i < q2_length; i++) {
		if(document.f2.Q2_anw[2].checked) {
			q2 = true;
		}
	}
	
	var q3 = false;
	var q3_length = document.f2.Q3_anw.length;
	for(var i=0; i < q3_length; i++) {
		if(document.f2.Q3_anw[i].checked) {
			q3 = true;
		}
		else {
			q3 = false;
			break;
		}
	}
		
	var q4 = false;
	var q4_length = document.f2.Q4_anw.length;
	for(var i=0; i < q4_length; i++) {
		if(document.f2.Q4_anw[1].checked) {
			q4 = true;
		}
	}
	
	if(q1 == true) 
		num++;
	if(q2 == true)
		num++;
	if(q3 == true)
		num++;
	if(q4 == true)
		num++;
	
	if(q1 == true && q2 == true && q3 == true && q4 == true) {
		alert("Great Job! All Answers Are Correct!");
	}
	else {
		alert("Try Again! You Got " + num + " Correct!");
	}
}

// start game
function play() {
	 document.getElementById("ff2").style.display = "block";
}

// exit game
function stopGame() {
	document.getElementById("ff2").style.display = "none";
}