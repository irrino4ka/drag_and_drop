function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const x = ev.clientX;
    const y = ev.clientY;
    const data = ev.dataTransfer.getData("text");
    const nodeCopy = document.getElementById(data).cloneNode(true);

    nodeCopy.id = "newId";
    ev.target.appendChild(nodeCopy);
    nodeCopy.setAttribute("style", "position: absolute; top: "+y+"px; left:"+x+"px;");
    // var data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));
}
