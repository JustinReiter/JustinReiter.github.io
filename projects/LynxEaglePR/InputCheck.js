
function returnErrorAlert(errorString) {
    return `<div class="alert alert-danger alert-dismissible">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Error!</strong> ${errorString}
            </div>`;
}

function CreateError(elementId, errorString) {
    var alert = document.createElement("div");
    alert.innerHTML = returnErrorAlert(errorString);
    var divForAppend = document.getElementById(elementId);
    divForAppend.appendChild(alert);
    console.log(errorString);
}

function noInputTextCheck(inputString) {
    return inputString == null || inputString.trim() === "";
}

function noInputFileCheck(fileDoc) {
    return typeof fileDoc === "undefined";
}