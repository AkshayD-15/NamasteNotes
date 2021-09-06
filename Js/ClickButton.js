function click() {

    let date=localStorage.getItem("date");
    if(date===null){
        DateObj=[];
    }else{
        DateObj=JSON.parse(date);
    }
    var today=new Date();
    var day=today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear();
    DateObj.push(day);
    localStorage.setItem("date",JSON.stringify(DateObj));


    let txt = document.getElementById("txtArea");
    let title = document.getElementById("titleArea");

    let titleNote = localStorage.getItem("titleNote");
    if (titleNote === null) {
        titleObj = [];
    } else {
        titleObj = JSON.parse(titleNote);
    }
    titleObj.push(title.value);

    localStorage.setItem("titleNote", JSON.stringify(titleObj));
    title.value = "";
    let note = localStorage.getItem("note");
    if (note === null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(note);
    }
    noteObj.push(txt.value);
    localStorage.setItem("note", JSON.stringify(noteObj));
    txt.value = "";

    displayNotes();
   

}