const socket = io();
const username = prompt("Enter your name");

function send() {
    let msg = document.getElementById("msg").value;
    socket.emit("chat", username + ": " + msg);
    document.getElementById("msg").value = "";
}

socket.on("chat", (msg) => {
    let div = document.createElement("div");
    div.innerText = msg;
    document.getElementById("messages").appendChild(div);
});

function typing() {
    socket.emit("typing", username);
}

socket.on("typing", (user) => {
    document.getElementById("typing").innerText = user + " is typing...";
    setTimeout(() => {
        document.getElementById("typing").innerText = "";
    }, 1000);
});
