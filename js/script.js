function loginUser() { //login function
	let xhr = new XMLHttpRequest(); //loading new request
	url = ("http://127.0.0.1:5000/auth/login")
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	xhr.open("POST", url, true);
	xhr.withCredentials = true;
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(`username=${username}&password=${password}`);

	xhr.onload = function() {
  	if (xhr.status != 200) { // analyze HTTP status of the response
		console.log(xhr.response)// e.g. 404: Not Found

  	} else { // show the result
		login_result = JSON.parse(xhr.response)
    		window.location.href = login_result // response is the server	
		//window.location.replace("home.html")	
	};


	}
}
//function for showing all the workers and values	
function showWorkers(){
	let xhr = new XMLHttpRequest();
	url = ("http://127.0.0.1:5000/home")
	credentials = true
	xhr.open("GET",url, true)
	xhr.withCredentials = true;
	xhr.send()
	xhr.onload = function(){ //analyze the response 
		if (xhr.status != 200){
			window.location.href = ("index.html")// if user not logged in, redirect to login form
		}else { //else dispaly the name and values of the workers
			result = JSON.parse(xhr.response)
			for (let i = 0; i < 1; i++){
				let worker1 = document.querySelector('.worker1');
				let worker1Name = document.createElement("div");
				let worker1Value = document.querySelector('.worker1Value');
				let value1 = document.createElement("div");
				worker1.innerHTML = "<div class=\"card\">"+ result[0][1] +"</div>"
				worker1.appendChild(worker1Name);
				worker1Value.innerHTML = "<div class=\"card\">"+ result[0][2] +"</div>"
				worker1Value.appendChild(value1);

				let worker2 = document.querySelector('.worker2');
				let worker2Name = document.createElement("div");
				let worker2Value = document.querySelector('.worker2Value');
				let value2 = document.createElement("div");
				worker2.innerHTML = "<div class=\"card\">"+ result[1][1] +"</div>"
				worker2.appendChild(worker2Name);
				worker2Value.innerHTML = "<div class=\"card\">"+ result[1][2] +"</div>"
				worker2Value.appendChild(value2);
		 
				let worker3 = document.querySelector('.worker3');
				let worker3Name = document.createElement("div");
				let worker3Value = document.querySelector('.worker3Value');
				let value3 = document.createElement("div");
				worker3.innerHTML = "<div class=\"card\">"+ result[2][1] +"</div>"
				worker3.appendChild(worker3Name);
				worker3Value.innerHTML = "<div class=\"card\">"+ result[2][2] +"</div>"
				worker3Value.appendChild(value3);
			}
		}
	}
}
//logging out the user
function logOut(){
	let xhr = new XMLHttpRequest();
	url = ("http://127.0.0.1:5000/logout")
	credentials = true
	xhr.open("GET",url, true)
	xhr.withCredentials = true;
	xhr.send()

	xhr.onload = function(){
		if (xhr.status != 200){
			alert("Something went wrong")
		
		}else{
			window.location.href = ("index.html")
		}
	}

}
//button to go back to the home screen
function goBack(){
	window.location.href = ("home.html")
}
// opening the add/minus form
function openFormMinus() {
  document.getElementById("minusForm").style.display = "block";
}
// opening the add/minus form
function openFormAdd() {
  document.getElementById("addForm").style.display = "block";
}
// closing the add/minus form
function closeForm() {
  document.getElementById("addForm").style.display = "none";
}

//function to post the worker to have value added to their account
function worker1Add(){
	let xhr = new XMLHttpRequest();
	let worker1 = document.getElementById("worker1").textContent;
	url = ("http://127.0.0.1:5000/home")
	credentials = true
	xhr.open("POST",url, true)
	xhr.withCredentials = true;
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(`worker=${worker1}`)
	xhr.onload = function(){
		if (xhr.status != 200){
			alert("Something went wrong")
		}else{
			worker_result = JSON.parse(xhr.response)
			window.location.href = worker_result // response from the server	
		}

	}
	
}
function worker2Add(){
	let xhr = new XMLHttpRequest();
	let worker2 = document.getElementById("worker2").textContent;
	url = ("http://127.0.0.1:5000/home")
	credentials = true
	xhr.open("POST",url, true)
	xhr.withCredentials = true;
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(`worker=${worker2}`)
	xhr.onload = function(){
		if (xhr.status != 200){
			alert("Something went wrong")
		}else{
			worker_result = JSON.parse(xhr.response)
			window.location.href = worker_result // response from the server	
		}

	}
	
}
function worker3Add(){
	let xhr = new XMLHttpRequest();
	let worker3 = document.getElementById("worker3").textContent;
	url = ("http://127.0.0.1:5000/home")
	credentials = true
	xhr.open("POST",url, true)
	xhr.withCredentials = true;
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(`worker=${worker3}`)
	xhr.onload = function(){
		if (xhr.status != 200){
			alert("Something went wrong")
		}else{
			worker_result = JSON.parse(xhr.response)
			window.location.href = worker_result // response from the server	
		}

	}
	
}

function worker1Minus(){
	let xhr = new XMLHttpRequest();
	let worker1 = document.getElementById("worker1").textContent;
	url = ("http://127.0.0.1:5000/home")
	credentials = true
	xhr.open("POST",url, true)
	xhr.withCredentials = true;
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(`worker=${worker1}`)
	xhr.onload = function(){
		if (xhr.status != 200){
			alert("Something went wrong")
		}else{
    			window.location.href = ('minus.html')	
		}

	}
	
}
function worker2Minus(){
	let xhr = new XMLHttpRequest();
	let worker2 = document.getElementById("worker2").textContent;
	url = ("http://127.0.0.1:5000/home")
	credentials = true
	xhr.open("POST",url, true)
	xhr.withCredentials = true;
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(`worker=${worker2}`)
	xhr.onload = function(){
		if (xhr.status != 200){
			alert("Something went wrong")
		}else{
    			window.location.href = ('minus.html')	
		}

	}
	
}
function worker3Minus(){
	let xhr = new XMLHttpRequest();
	let worker3 = document.getElementById("worker3").textContent;
	url = ("http://127.0.0.1:5000/home")
	credentials = true
	xhr.open("POST",url, true)
	xhr.withCredentials = true;
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(`worker=${worker3}`)
	xhr.onload = function(){
		if (xhr.status != 200){
			alert("Something went wrong")
		}else{
    			window.location.href = ('minus.html')	
		}

	}
	
}
//function to show the balance to be added
function showValue(){
	let xhr = new XMLHttpRequest();
	url = ("http://127.0.0.1:5000/getworker")
	credentials = true
	xhr.open("POST",url, true)
	xhr.withCredentials = true;
	xhr.send()
	xhr.onload = function(){ //analyze the response 
		if (xhr.status != 200){
			addValue_result = JSON.parse(xhr.response)
			alert(addValue_result) // if user not logged in, redirect to login form
		}else { //else dispaly the name and values of the workers
			result = JSON.parse(xhr.response)
			for (let i = 0; i < 1; i++){
				document.getElementById("worker").textContent = result[0];
				document.getElementById("value").textContent = result[1];

				}

			}

		}
	}
	
let addArr = []//setting empty array for numbers to be added in
document.getElementById('result').innerHTML = addArr; //writing the results to the HTML
function addNumbers(result){ //fucntion to get the numbers on click and added to the array
	addArr.push(result.value);
	document.getElementById('result').innerHTML = addArr;
	document.getElementById('add').onclick = function(){
		let total = 0;
		for(let i=0; i< 1 ;  i++){
			total = addArr.reduce(function(a,b){;
				return parseInt(a) + parseInt(b)
			
			},)
			let xhr = new XMLHttpRequest();
			url = ("http://127.0.0.1:5000/addvalue")
			credentials = true
			xhr.open("POST",url,true)
			xhr.withCredentials = true;
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(`total=${total}`)
			if (xhr.status == 200){
				console.log(xhr.response)
			}
		}
	}
}


let minusArr = []//setting empty array for numbers to be minused 
document.getElementById('result').innerHTML = minusArr; //writing the results to the HTML
function minusNumbers(result){ //fucntion to get the numbers on click and added to the array
	minusArr.push(result.value);
	document.getElementById('result').innerHTML = minusArr;
	document.getElementById('minus').onclick = function(){
		let total = 0;
		for(let i=0; i< 1 ;  i++){
			total = minusArr.reduce(function(a,b){;
				return parseInt(a) + parseInt(b)
			
			},)
			let xhr = new XMLHttpRequest();
			url = ("http://127.0.0.1:5000/minusvalue")
			credentials = true
			xhr.open("POST",url,false)
			xhr.withCredentials = true;
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(`total=${total}`)
			if (xhr.status == 200){
				console.log(xhr.response)
			}
		}
	}
}


