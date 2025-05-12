function onDelete() {
    alert("Record will be deleted");
}

// markup doesn't work in alert or confirm
function onConfirm() {
    const isConfirmed = confirm("Record will be deleted");
    if (isConfirmed) {
        alert("Record is deleted");
    } else {
        alert("Do Nothing");
    }
}

// but markup works fine with .write method
document.write(
    `
    <h1>Hello</h1>
    <h2>World </h2>
    `
);

// line break doesn't work, you have to use <br>
document.write(
    "Hello<br>World<br>",
    "Hello \n World"
);

function onConfirm2() {
    let paragraph = document.querySelector("p");
    let isConfirmed = confirm("Do you want to delete?");
    let heading = document.querySelector("h2");

    let inputText = document.querySelector("input[type='text']");
    inputText.value = "Imran Potter";

    if (isConfirmed) {
        paragraph.innerText = "Record has been deleted";
        heading.innerHTML = "<font color=red>Deleted</font>";
    } else {
        paragraph.textContent = "Nothing has been deleted";
    }
}