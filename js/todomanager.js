newtask = function() {
	var task = document.getElementById("newtask").value;
	var label= document.createElement("label");
	var description = document.createTextNode(task);
	var checkbox = document.createElement("input");
	var br = document.createElement("br")

	checkbox.type = "checkbox";
	checkbox.value = task;
	//attempt to make strike on click work
	checkbox.onclick = function() {
		this.innerHTML = "<s>"+this.innerHTML+"</s>";
	};

	label.appendChild(checkbox);
	label.appendChild(description);

	document.getElementById('things').appendChild(label).appendChild(br);
}
