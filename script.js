let counterDirection = 4;
let counterWrap = 4;
let counterContent = 3;
let counterAlign = 3;
let counterSandbox = 5;

function addBox(example) {

    const newBox = document.createElement("div");
    const whereBox = document.getElementById("workspace"+example);
    
    if(example===1){
        if(counterDirection===20){
            alert("Po co ci więcej Box-ów ?!");
            console.log("Element +20");
        }else {
            counterDirection++;
            newBox.innerHTML = "Box" + counterDirection;
            newBox.id = "box" + example + counterDirection;
            newBox.className = "box";
            newBox.setAttribute("onclick","boxActive("+example+counterDirection+")");
            whereBox.appendChild(newBox);
            console.log("Dodano Box-a Poprawnie do workspace" + example);
        }
    }else if(example===2){
        if(counterWrap===20){
            alert("Po co ci więcej Box-ów ?!");
            console.log("Element +20");
        }else {
            counterWrap++;
            newBox.innerHTML = "Box" + counterWrap;
            newBox.id = "box" + example + counterWrap;
            newBox.className = "box";
            newBox.setAttribute("onclick","boxActive("+example+counterWrap+")");
            whereBox.appendChild(newBox);
            console.log("Dodano Box-a Poprawnie do workspace"+example);
        }
        
    }else if(example===3){
        if(counterContent===20){
            alert("Po co ci więcej Box-ów ?!");
            console.log("Element +20");
        }else {
            counterContent++;
            newBox.innerHTML = "Box" + counterContent;
            newBox.id = "box" + example + counterContent;
            newBox.className = "box";
            newBox.setAttribute("onclick","boxActive("+example+counterContent+")");
            whereBox.appendChild(newBox);
            console.log("Dodano Box-a Poprawnie do workspace"+example);
        }
        
    }
    else if(example===4){
        if(counterAlign===20){
            alert("Po co ci więcej Box-ów ?!");
            console.log("Element +20");
        }else {
            counterAlign++;
            newBox.innerHTML = "Box" + counterAlign;
            newBox.id = "box" + example + counterAlign;
            newBox.className = "box";
            newBox.setAttribute("onclick","boxActive("+example+""+counterAlign+")");
            whereBox.appendChild(newBox);
            console.log("Dodano Box-a Poprawnie do workspace"+example);
        }
        
    }else if(example===5){
        if(counterSandbox===20){
            alert("Po co ci więcej Box-ów ?!");
            console.log("Element +20");
        }else {
            counterSandbox++;
            newBox.innerHTML = "Box" + counterSandbox;
            newBox.id = "box" + example + counterSandbox;
            newBox.className = "box";
            newBox.setAttribute("onclick","boxActive("+example+""+counterSandbox+")");
            whereBox.appendChild(newBox);
            console.log("Dodano Box-a Poprawnie do workspace"+example);
        }
        
    }

    
   
    
  
    
}
function delBox(example){
    let toDelBox = "";
    if(example===1){
        if(counterDirection===0){
            console.log("Element 0");
        }else {
            toDelBox = document.getElementById("box" + example + counterDirection);
            counterDirection--;
            toDelBox.remove();
            console.log("Usunięto Box-a Poprawnie w workspace" + example)
        }
    }else if(example===2){
        if(counterWrap===0){
            console.log("Element 0");
        }else {
            toDelBox = document.getElementById("box" + example + counterWrap);
            counterWrap--;
            toDelBox.remove();
            console.log("Usunięto Box-a Poprawnie w workspace" + example)
        }
    }else if(example===3){
        if(counterWrap===0){
            console.log("Element 0");
        }else {
            toDelBox = document.getElementById("box" + example + counterContent);
            counterContent--;
            toDelBox.remove();
            console.log("Usunięto Box-a Poprawnie w workspace" + example)
        }
    }else if(example===4){
        if(counterAlign===0){
            console.log("Element 0");
        }else {
            toDelBox = document.getElementById("box" + example + counterAlign);
            counterAlign--;
            toDelBox.remove();
            console.log("Usunięto Box-a Poprawnie w workspace" + example)
        }
    }else if(example===5){
        if(counterSandbox===0){
            console.log("Element 0");
        }else {
            toDelBox = document.getElementById("box" + example + counterSandbox);
            counterSandbox--;
            toDelBox.remove();
            console.log("Usunięto Box-a Poprawnie w workspace" + example)
        }
    }
    
    

}
function direction(x){
    let directionType = "row";
    const directionWorkspace = document.getElementById("workspace1");
    
    if(x===1){
        directionType = "row";
    }else if(x===2){
        directionType = "column";
    }else if(x===3){
        directionType = "row-reverse";
    }else if(x===4){
        directionType = "column-reverse";
    }

    directionWorkspace.style.flexDirection = directionType;

    const directionTypeOpis = document.getElementById("typeDirection");
    directionTypeOpis.innerHTML = "aktualnie flex-direction : " + directionType;
}
function wrap(x){
    
    const wrapWorkspace = document.getElementById("workspace2");
    
    let wrapType = "nowrap";
    
    if(x===1){
        wrapType = "nowrap";
    }else if(x===2){
        wrapType = "wrap";
    }else if(x===3){
        wrapType = "wrap-reverse";
    }

    wrapWorkspace.style.flexWrap = wrapType;
    
    const wrapTypeOpis = document.getElementById("typeWrap");
    wrapTypeOpis.innerHTML = "aktualnie flex-wrap : " + wrapType;
}
function wrapWorkspaceWidth(x){

    const wrapWorkspace = document.getElementById("workspace2");
    
    let typeWorkspace = x;

    wrapWorkspace.style.width = typeWorkspace;

    const wrapWidth = document.getElementById("wrapWidth");
    wrapWidth.innerHTML = "aktualna szerokość  : " + typeWorkspace;
}
function content(x){
    let contentType = "start";
    const contentWorkspace = document.getElementById("workspace3");
    if(x===1){
        contentType = "start";
    }else if(x===2){
        contentType = "center";
    }else if(x===3){
        contentType = "end";
    }else if(x===4){
        contentType = "space-between";
    }else if(x===5){
        contentType = "space-around";
    }else if(x===6){
        contentType = "space-evenly";
    }
    contentWorkspace.style.justifyContent = contentType;
    const contentTypeOpis = document.getElementById("typeContent");
    contentTypeOpis.innerHTML = "aktualnie Justify-content : " + contentType;
}

function align(x){
    let alignType = "stretch";
    const alignWorkspace = document.getElementById("workspace4");
    if(x===1){
        alignType = "flex-start";
    }else if(x===2){
        alignType = "flex-end";
    }else if(x===3){
        alignType = "center";
    }
    alignWorkspace.style.alignItems = alignType;
    const alignTypeOpis = document.getElementById("typeAlignItems");
    alignTypeOpis.innerHTML = "aktualnie Align-items : " + alignType;
}
function alignWorkspaceHeight(x){

    const alignItemsWorkspace = document.getElementById("workspace4");
    
    let typeWorkspace = x;

    alignItemsWorkspace.style.height = typeWorkspace;

    const alignHeight = document.getElementById("typeAlignHeight");
    alignHeight.innerHTML = "aktualna wysokość  : " + typeWorkspace;
}

function sandboxWorkspaceWidth(x){
    const sandboxWorkspace = document.getElementById("workspace5");
    
    let typeWorkspace = x;

    sandboxWorkspace.style.width = typeWorkspace;

    const sandboxWidth = document.getElementById("typeSandboxWidth");
    sandboxWidth.innerHTML = "aktualna szerokość  : " + typeWorkspace;
}

function sandboxWorkspaceHeight(x){
    const sandboxWorkspace = document.getElementById("workspace5");
    
    let typeWorkspace = x;

    sandboxWorkspace.style.height = typeWorkspace;

    const sandboxHeight = document.getElementById("typeSandboxHeight");
    sandboxHeight.innerHTML = "aktualna wysokość  : " + typeWorkspace;
}
const sandboxWorkspace = document.getElementById("workspace5");

function sandboxDirection(x){
    let directionType = "row";
    
    if(x===1){
        directionType = "row";
    }else if(x===2){
        directionType = "column";
    }else if(x===3){
        directionType = "row-reverse";
    }else if(x===4){
        directionType = "column-reverse";
    }

    sandboxWorkspace.style.flexDirection = directionType;

    const directionTypeOpis = document.getElementById("typeSandboxDirection");
    directionTypeOpis.innerHTML = "aktualnie flex-direction : " + directionType;
}
function sandboxWrap(x){
    let wrapType = "nowrap";
    
    if(x===1){
        wrapType = "nowrap";
    }else if(x===2){
        wrapType = "wrap";
    }else if(x===3){
        wrapType = "wrap-reverse";
    }

    sandboxWorkspace.style.flexWrap = wrapType;
    
    const wrapTypeOpis = document.getElementById("typeSandboxWrap");
    wrapTypeOpis.innerHTML = "aktualnie flex-wrap : " + wrapType;
}
function sandboxContent(x){
    let contentType = "start";
    if(x===1){
        contentType = "start";
    }else if(x===2){
        contentType = "center";
    }else if(x===3){
        contentType = "end";
    }else if(x===4){
        contentType = "space-between";
    }else if(x===5){
        contentType = "space-around";
    }else if(x===6){
        contentType = "space-evenly";
    }
    sandboxWorkspace.style.justifyContent = contentType;
    const contentTypeOpis = document.getElementById("typeSandboxContent");
    contentTypeOpis.innerHTML = "aktualnie Justify-content : " + contentType;
}
function sandboxAlign(x) {
let alignType = "stretch";

    if(x===1){
        alignType = "flex-start";
    }else if(x===2){
        alignType = "flex-end";
    }else if(x===3){
        alignType = "center";
    }
sandboxWorkspace.style.alignItems = alignType;
const alignTypeOpis = document.getElementById("typeSandboxItems");
alignTypeOpis.innerHTML = "aktualnie Align-items : " + alignType;
}
function boxActive(x){
    const box = document.getElementById("box"+x);
    box.classList.toggle("active");
}


var w=0;
var i=1;
for (i = 1; i < 50; i++)
{
 if (i%2 == 0)
 w += i;
}
console.log(w)