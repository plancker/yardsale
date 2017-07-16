document.addEventListener("DOMContentLoaded",
function (event) {
  $ajaxUtils.sendGetRequest("data/desc.txt",
  function (request) {
    var description = request.responseText;
    document.querySelector("#content")
    .innerHTML = description;
  },
  false);
});

//Changes "target" HTML to targetContent when the "trigger" is clicked.
function changeContent(trigger, target, targetContent) {
  document.querySelector(trigger).addEventListener("click", function() {
    document.querySelector(target).innerHTML = content;
  });
}

document.querySelector("#about").addEventListener("click", function()
{
  document.querySelector("#question-content").innerHTML = "Who am I?";
  $ajaxUtils.sendGetRequest("data/desc.txt",
    function (request) {
      var description = request.responseText;
      document.querySelector("#content").innerHTML = description;
    },
    false);
});

document.querySelector("#blog").addEventListener("click", function(){
  document.querySelector("#question-content").innerHTML = "What do I write?";
  document.querySelector("#content").innerHTML = "These are my blog details!";
});



document.querySelector("#projects").addEventListener("click", function()
{
  document.querySelector("#question-content").innerHTML = "What have I worked on?";

  document.querySelector("#content").innerHTML = "";

  $ajaxUtils.sendGetRequest("data/projects.json",

  function (res){
    projects = res.Projects;
    var projectDiv;
    for( i = 0; i<1; i= i+1){
      projectsDiv = document.createElement("div");
      projectsDiv.className = "row project";
      var columnDiv = document.createElement("div");
      columnDiv.className = "col-md-8";
      columnDiv.innerHTML = '<h3 class="text-left project-title">' + projects[i].name +'</h3> <p class="project-desc text-left">'
      + projects[i].description + '</p>';
      var columnDiv2 = document.createElement("div");
      columnDiv2.className = "col-md-4";
      columnDiv2.innerHTML = '<a href="#" class="thumbnail"> <img src="' + projects[i].image + '" alt="Project 1" ></a>'
      projectsDiv.appendChild(columnDiv);
      projectsDiv.appendChild(columnDiv2);
      document.querySelector("#content").appendChild(projectsDiv);
      delete projectsDiv;
    }
  }, true);
});

document.querySelector("#skills").addEventListener("click", function(){
  document.querySelector("#question-content").innerHTML = "What can I do?";
  document.querySelector("#content").innerHTML = "This is my skill set!";
});

document.querySelector("#contact").addEventListener("click", function(){
  document.querySelector("#question-content").innerHTML = "I'm listening...";
  $ajaxUtils.sendGetRequest("data/contact-form.html",
  function(request){
    document.querySelector("#content").innerHTML = request.responseText;

  }, false);
});
