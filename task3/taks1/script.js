let progress = 0;

function login() {
    let name = document.getElementById("username").value;
    if (name === "") {
        alert("Please enter username");
        return;
    }
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("user").innerText = name;
    document.getElementById("profileName").innerText = name;
}

function completeCourse() {
    progress = 100;
    document.getElementById("progress").innerText = progress + "% Completed";
}

function logout() {
    location.reload();
}
