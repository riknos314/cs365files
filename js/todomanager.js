/* start of cleaner MVC implementation

function newTaskModel(task, params) {
	this._task = task;
	this._params = params;


}

function ListModel(items) {
	this._items = items;

	this.itemAdded = new MVCEvent(this);
	this.itemRemoved = new MVCEvent(this);


}

*/


TASKS = []
CHECKEDTASKS = []

// New code using model view controller
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

setDateToToday = function() {
	document.getElementById("dueDate").value = new Date().toDateInputValue();

}

task = function(n,p,d,pro) {
	this.name = n;
	this.priority = p;
	this.duedate = d;
	this.project = pro;
	this.checked = false;
}

taskList = function() {
	//appends a new task to tasks
	this.newTask = function(name, pri, due, proj) {
		var thisTask =  new task(name, pri, due, proj);
		TASKS.push(thisTask);

	};
	//removes checked tasks from TASKS
	this.rmTask = function() {
	};

	//saves tasks to localstorage
	this.saveAll = function() {
		var toSave = [];
		for (var prop in TASKS) {
				toSave[prop] = TASKS[prop];
		};
		localStorage.setItem("todoDatabase",JSON.stringify(toSave));
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


newLiLister = function(item) {
	var newLi = document.createElement("li");
	var check = document.createElement("input");
	var taskText = item;
	var description = document.createTextNode(taskText.name + "  ");
	var project = document.createTextNode(taskText.project);
	var due = document.createTextNode("(due " + taskText.duedate + ")");

	newLi.className += taskText.priority


	check.type = "checkbox";
	check.value = taskText.name;

	newLi.appendChild(check);
	newLi.appendChild(description);
	newLi.appendChild(due);

	document.getElementById(taskText.project).appendChild(newLi);
}

newTaskList = function(item) {
	var newLi = document.createElement("li");
	var projList = document.createElement("ul");
	projList.id = item.project;
	projList.innerHTML = item.project;
	newLi.appendChild(projList);

	document.getElementById("thingslist").appendChild(newLi);

	newLiLister(item);

}

taskLister = function(item) {


	var project = item.project;
	for (vari=0; i < projects.length; i++) {
		if (projects[i] === project) {
			newLiLister(item);
			return true;
		}
	}
	newTaskList(item);
	projects.push(item.project);
	return false;
}

displayTask = function() {
	projects = [];
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
	taskList.saveAll();
}



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
