var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;
    addLine("Wanderer@D1B:~$ " + command.innerHTML, "no-animation", 0);
    commander(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  }
  if (e.keyCode == 38 && git!= 0) {
    git -= 1;
    textarea.value = commands[git];
    command.innerHTML = textarea.value;
  }
  if (e.keyCode == 40 && git!= commands.length) {
    git += 1;
    if (commands[git] === undefined) {
      textarea.value = "";
    } else {
      textarea.value = commands[git];
    }
    command.innerHTML = textarea.value;
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "certifs":
      loopLines(certifs, "color2 margin", 80);
      break;
    case "ls":
      loopLines(ls, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "sudo su":
      addLine("Really?...", "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000); 
      break;
    case "cat secret.txt":
      addLine("Within an image my lovely friend Thewolfcs shared, a secret awaits discovery, carefully concealed. To unveil the hidden message, you","color2", 80)
      addLine("might want to explore tools designed for extracting whispers from shadows. A useful companion for this task is known to reveal","color2", 80)
      addLine("what lies beneath the surface. Good luck on your quest!", "color2", 80);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:oussamafannouch@gmail.com">oussamafannouch@gmail.com</a>...', "color2", 80);
      newTab('mailto:oussamafannouch@gmail.com');
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // socials
    case "twitter":
      addLine("Opening Twitter...", "color2", 0);
      newTab(twitter);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}

function $(elid) {
  return document.getElementById(elid);
}

var cursor;
window.onload = init;

function init() {
cursor = $("cursor");
cursor.style.left = "0px";
}

function nl2br(txt) {
return txt.replace(/\n/g, '');
}

function typeIt(from, e) {
e = e || window.event;
var w = $("typer");
var tw = from.value;
if (!pw){
  w.innerHTML = nl2br(tw);
}
}

function moveIt(count, e) {
e = e || window.event;
var keycode = e.keyCode || e.which;
if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
  cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
} else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
  cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
}
}

function alert(txt) {
console.log(txt);
}
