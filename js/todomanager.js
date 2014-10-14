

function newTaskModel(task, params) {
	this._task = task;
	this._params = params;
	

}

function ListModel(items) {
	this._items = items;

	this.itemAdded = new MVCEvent(this);
	this.itemRemoved = new MVCEvent(this);


}

/*  now using better coding practices
TASKS = []
// New code using model view controller
task = function(n,p,d,pro) {
	this.name = n;
	this.priority = p;
	this.duedate = d;
	this.project = pro;
}

taskList = function() {
	//appends a new task to tasks
	this.newTask = function(name, pri, due, proj) {
		var thisTask =  new task(name, pri, due, proj);
		TASKS.push(thisTask);

	};
	//removes a tasks from tasks

	this.rmTask = function() {
	};
	//saves tasks to localstorage
	this.saveAll = function() {
		localStorage.setItem("todoDatabase",JSON.stringify(TASKS));
	};
	//restores tasks from localstorage
	this.restoreAll = function() {
		var retrieved = localStorage.getItem("todoDatabase");
		TASKS = JSON.parse(retrieved);
		displayTask();
	};
}


createHtmlFrame = function() {
	var div = document.getElementById("things");
	div.innerHTML = "";
	var newList = document.createElement("ul");
	newList.id = "thingslist";
	div.appendChild(newList);
}


taskLister = function(item) {
	var newLi = document.createElement("li");
	var check = document.createElement("input");
	var taskText = item;
	var description = document.createTextNode(taskText.name);
	var project = document.createTextNode(taskText.project);
	var due = document.createTextNode(taskText.duedate);

	newLi.className += taskText.priority


	check.type = "checkbox";
	check.value = taskText.name;

	newLi.appendChild(check);
	newLi.appendChild(description);
	newLi.appendChild(due);
	newLi.appendChild(project);

	document.getElementById("thingslist").appendChild(newLi);
}

displayTask = function() {
	var tmpTaskList = [];
	for (var prop in TASKS) {
			tmpTaskList[prop] = TASKS[prop];
	}

	createHtmlFrame();
	for (i=0; i<tmpTaskList.length; i=0) {
		var item = tmpTaskList.pop();
		taskLister(item);
	}
}

addTask = function() {
	var name = document.getElementById("newtask").value;
	var priority = document.getElementById("priority").value;
	var due = document.getElementById("dueDate").value;
	var proj = document.getElementById("project").value;

	taskToAdd = new taskList();
	taskToAdd.newTask(name, priority, due, proj);

	displayTask();

}

*/


/*  Old way
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
		localSave();
	}
}
*/
