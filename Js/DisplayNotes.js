function displayNotes() {
   
    let date =localStorage.getItem("date");
    console.log(date);
    if(date===null){
        DateObj=[];
    }else{
        DateObj=JSON.parse(date);
    }
    let note = localStorage.getItem("note");
    let titleNote = localStorage.getItem("titleNote");

    if (titleNote === null) {
        titleObj = [];
    } else {
        titleObj = JSON.parse(titleNote);
    }

    if (note === null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(note);
    }
    let html = "";
    for (var index = 0; index < noteObj.length; index++) {
        html += `
        <div class="noteCard my-3 mx-2 card" style="width: 18rem;">
           <div class="m-0 text-center" >Date : ${DateObj[index]}</div>
            <div class="card-body">
                 <h5 class="card-title">${titleObj[index]}</h5>
                 <p class="card-text">${noteObj[index]}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            
            </div>
        </div>
        `;

    }
    let notEle = document.getElementById("notes");
    if (noteObj.length != 0) {
        notEle.innerHTML = html;
    } else {
        notEle.innerHTML = `You dont have any note! please add some`;
    }

}