
			var contacts = [];
			
			function add(){
				var name = document.getElementById("input").value;
				var Phone_no = document.getElementById("input1").value;
				var newContact = {
					newName : name,
					newPhone_no : Phone_no
				}
				contacts.push(newContact);
				
				updateDiv();
				
				document.getElementById("input").value = "";
				document.getElementById("input1").value = "";
				
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

            document.getElementById('input').addEventListener("keyup", myFunction);

            var inputBox = document.getElementById('input');
            
            function myFunction(){
                document.getElementById('output').innerHTML = inputBox.value;
            }
            ///////////////////////////////////////
            document.getElementById('input1').addEventListener("keyup", myFunction1);
            
            var inputbox = document.getElementById('input1');
            
            function myFunction1(){
                document.getElementById('output1').innerHTML = inputbox.value;
            }
            
            
            
            