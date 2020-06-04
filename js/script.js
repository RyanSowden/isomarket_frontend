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
				let newRow = document.getElementById('table').insertRow();
                  		let newCell = newRow.insertCell();

				//Marisee value
                  		newCell.innerHTML +="<tr><td>" + result[2][2] + "</td></tr>";
				//Destiny value
                  		newCell = newRow.insertCell();
				newCell.innerHTML +="<tr><td>" + result[0][2] + "</td></tr>";
				//Crystal value
                  		newCell = newRow.insertCell();
                  		newCell.innerHTML +="<tr><td>" + result[1][2] + "</td></tr>";
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
function workerAdd(){
	let xhr = new XMLHttpRequest();
	let worker = document.getElementById("workeradd").value;
	for(let i=0; i < 1; i++){
		url = ("http://127.0.0.1:5000/home")
		credentials = true
		xhr.open("POST",url, true)
		xhr.withCredentials = true;
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(`worker=${worker}`)
		xhr.onload = function(){
			if (xhr.status != 200){
				alert("Something went wrong")
			}else{
				worker_result = JSON.parse(xhr.response)
    				window.location.href = worker_result // response from the server	
		}

	}
	}
}

function workerMinus(){
	let xhr = new XMLHttpRequest();
	let worker = document.getElementById("workerminus").value;
	for(let i=0; i < 1; i++){
		url = ("http://127.0.0.1:5000/home")
		credentials = true
		xhr.open("POST",url, true)
		xhr.withCredentials = true;
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(`worker=${worker}`)
		xhr.onload = function(){
			if (xhr.status != 200){
				alert("Something went wrong")
			}else{
    				window.location.href = ('minus.html')	
		}

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


