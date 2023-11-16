document.getElementById("add_todo_button").addEventListener("click", function()
{ 	 
	var new_name = document.getElementById("add_todo_text").value;
	var newParagraph = document.createElement("p");
	var paragraphText = document.createTextNode(new_name);
	var checklist_button = document.createElement("button")
	checklist_button.textContent = "";
	var checklistButtonImage = document.createElement("img");
	checklistButtonImage.src = 'art/blank_check.png';
	checklistButtonImage.style.width = "17px";
	checklistButtonImage.style.length = "17px"; 
	checklist_button.appendChild(checklistButtonImage);
	checklist_button.addEventListener("click", function()
	{
		checklistButtonImage.src = 'art/green_check.png';
		checklistButtonImage.style.width = "17px";
		checklistButtonImage.style.length = "17px"; 
	});
	newParagraph.appendChild(paragraphText);
	newParagraph.appendChild(checklist_button);
	document.body.appendChild(newParagraph);
});