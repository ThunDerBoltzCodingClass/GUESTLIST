names=[];

function submit(){
    var namesvar= document.getElementById("nameInput").value;
names.push(namesvar);
console.log(names);
document.getElementById("display_name").innerHTML=names;
}

function sort(){
names.sort()
console.log(names)
document.getElementById("sorted_name").innerHTML=names;
}

function show(){
    console.log(names);
    document.getElementById("unsorted_name").innerHTML=names;
}

function search(){
    var s= document.getElementById("display_name").value;
    var found=0;
    var j;
    for(j=0; j<names.length; j++){

        if(s==names[j]){
            found=found+1;
        }

    }
    document.getElementById("p").innerHTML="Name Found"+found+"Time(s)"
}

//display_name
//unsorted_name
//sorted_name