/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
 	"name" : "Talles",
 	"role" : "Programmer",
 	"contact" : "(28) 9 9981-8077",
 	"picture" : "images/fry.jpg",
 	"message" : "Welcome to my resume",
 	"skills" : ["Awesomeness", "Beauty"]
 };

 var education = { 
 	"schools" : [
 		{
 			"name" : "UFES",
 			"city" : "Alegre",
 			"degree" : "BA",
 			"major" : "CompSci"
 		},
 		{
 			"name" : "LUC",
 			"city" : "Chicago",
 			"degree" : "BA",
 			"major" : "CompSci"
 		}
 	]
 };

var work = {
	"jobs" : [
		{
			"employer" : "UFES",
			"title" : "Student"
		},
		{
			"employer" : "Google",
			"title" : "Developer"
		}
	]
};

var project = {
	"name" : "resume project",
	"year" : 2017
};

var headerName = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(headerName);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	sk = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(sk);
	sk = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(sk);
}

for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",
		work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",
		work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);
}