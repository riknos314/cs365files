newtask = function() {
	var task = document.getElementById("newtask").value;
	var label= document.createElement("label");
	var description = document.createTextNode(task);
	var checkbox = document.createElement("input");
	var br = document.createElement("br");
	var prior = document.getElementById("priority").value;


	checkbox.type = "checkbox";
	checkbox.value = task;

	label.appendChild(checkbox);
	label.appendChild(description);
	label.className = prior;

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
	allEntries = document.querySelectorAll("label");

	for(i=0; i < allEntries.length; i++) {
		if (allEntries[i].className != "done") {
			res.push(allEntries[i].textContent);
		}
	}
	console.log(res);
	localStorage.setItem("todoDatabase",JSON.stringify(res));
}

loadlocal = function() {
	var retrieved = localStorage.getItem("todoDatabase");
	var items = JSON.parse(retrieved);
	alert(items.length);
	for(i=0; i < items.length; i++) {
		var popped = items.pop();
		var label = document.createElement("label");
		var description = document.createTextNode(popped);
		var checkbox = document.createElement("input");
		var br = document.createElement("br");

		checkbox.type = "checkbox";
		checkbox.value = popped;

		label.appendChild(checkbox);
		label.appendChild(description);

		document.getElementById('things').appendChild(label).appendChild(br);
	}
}
