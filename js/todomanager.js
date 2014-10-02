newtask = function() {
	var task = document.getElementById("newtask").value;
	var list = document.getElementById("things");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(task));
	ul.appendChild(li);
}