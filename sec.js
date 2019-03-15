
			var contacts = [];
			
			function add(){
				var name = document.getElementById("namez").value;
				var Phone_no = document.getElementById("Phone_no").value;
				var newContact = {
					newName : name,
					Phone_no : Phone_no
				}
				contacts.push(newContact);
				
				updateDiv();
				
				document.getElementById("namez").value = "";
				document.getElementById("Phone_no").value = "";
				
			}
			
			function updateDiv(){
				var tempContent = "";
				for(var i = 0; i < contacts.length; i++){
					
					tempContent += "<p>Name : " + contacts[i].newName + "<br>Phone_no : " + contacts[i].newPhone_no + "<br><span onclick='del(" + i +")'>[del]</span></p>";
				}
				
				document.getElementById("contacts").innerHTML = tempContent;
			}
			
			function del(i){
				contacts.splice(i, 1);
				updateDiv();
			}



document.getElementById('namez').addEventListener("keyup", myFunction);

var inputBox = document.getElementById('namez');

function myFunction(){
    document.getElementById('output').innerHTML = inputBox.value;
}
//////////////////////////////////////////////////////////////////////////////
document.getElementById('Phone_no').addEventListener("keyup", myFunction1);

var inputbox = document.getElementById('Phone_no');

function myFunction1(){
    document.getElementById('output1').innerHTML = inputbox.value;
}
	