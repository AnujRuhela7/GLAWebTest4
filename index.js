color = ["lightcoral", "aqua", "green", "black"];

var selected = 0;

var opt1 = document.querySelector(".op1");
opt1.addEventListener('click', function() {
  selected = 0;
});
var opt2 = document.querySelector(".op2");
opt2.addEventListener('click', function() {
  selected = 1;
});
var opt3 = document.querySelector(".op3");
opt3.addEventListener('click', function() {
  selected = 2;
});
var opt4 = document.querySelector(".op4");
opt4.addEventListener('click', function() {
  selected = 3;
});

let count = 0;

var root = document.getElementById('newContainer');

var addBtn = document.getElementById("add");
addBtn.addEventListener('click', function(e) {
  e.preventDefault();
  var divElement = document.createElement('div');
  var hiddenDiv = document.getElementById('hidden');
  divElement.style.height = "250px";
  divElement.style.width = "300px";
  divElement.style.border = "20px solid lightgray";
  divElement.style.display = "flex";
  divElement.style.flexDirection = "row";
  divElement.id = count++;


  var txtArea = document.createElement('textarea');
  txtArea.style.height = "100%";
  txtArea.style.width = "70%";

  var colorDiv = document.createElement('div');
  colorDiv.style.backgroundColor = "lightgray";
  for(let i=0; i<4; i++) {
    var colorOpt = document.createElement('div');
    colorOpt.style.backgroundColor = color[i];
    colorOpt.style.width = "100px";
    colorOpt.style.height = "56px";
    colorOpt.style.margin = "5px";

    colorDiv.appendChild(colorOpt);
  }

  var submitBtn = document.createElement('button');
  submitBtn.innerText = "Add";
  submitBtn.style.width = "50px";

  
  divElement.appendChild(txtArea);
  divElement.appendChild(colorDiv);
  divElement.appendChild(submitBtn);
  hiddenDiv.appendChild(divElement);

  submitBtn.addEventListener('click', function() {
    var ticket = document.createElement('div');
    ticket.style.width = "250px";
    ticket.style.height = "200px";
    ticket.style.border = `5px solid ${color[selected]}`;
    ticket.style.margin = "5px";
    ticket.innerText = txtArea.value;
    root.appendChild(ticket);
    hiddenDiv.removeChild(divElement);
  });

  var deleteBtn = document.getElementById('delete');
  deleteBtn.addEventListener('click', function() {
    hiddenDiv.removeChild(divElement);
  })
});

var deleteBtn = document.getElementById('delete');
  deleteBtn.addEventListener('click', function() {
    
})