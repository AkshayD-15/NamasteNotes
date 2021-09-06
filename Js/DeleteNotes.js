
function deleteNote(index) {
    
    let date=localStorage.getItem("date");
    if(date===null){
        DateObj=[];
    }else{
        DateObj=JSON.parse(date);
    }
    DateObj.splice(index,1);
    localStorage.setItem("date",JSON.stringify(DateObj));

    let titleNote = localStorage.getItem("titleNote");
    if (titleNote === null) {
        titleObj = [];
    } else {
        titleObj = JSON.parse(titleNote);
    }

    titleObj.splice(index, 1);
    localStorage.setItem("titleNote", JSON.stringify(titleObj));

    let note = localStorage.getItem("note");
    if (note == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(note);
    }
    noteObj.splice(index, 1);
    localStorage.setItem("note", JSON.stringify(noteObj));
    displayNotes();

}