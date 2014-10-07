newtask = function() {
	var task = document.getElementById("newtask").value;
	var label= document.createElement("label");
	var description = document.createTextNode(task);
	var checkbox = document.createElement("input");
	var br = document.createElement("br")

	checkbox.type = "checkbox";
	checkbox.value = task;

	label.appendChild(checkbox);
	label.appendChild(description);

	//attempt to make strike on click work
	checkbox.onclick = function() {
		this.parentNode.className += " done";
		localSave();
	};

	document.getElementById('things').appendChild(label).appendChild(br);

	localSave();
}

localSave = function() {
	res = [];
	var i;
	allEntries = document.querySelectorAll('label')

	for(i=0; i < allEntries.length; i++) {
		if (allEntries[i].className != "done") {
			res.push(allEntries[i].innerText);
		}
	}
	console.log(res)
	alert(JSON.stringify(console.log()))
	localStorage.setItem("todoDatabase",JSON.stringify(res))
}
