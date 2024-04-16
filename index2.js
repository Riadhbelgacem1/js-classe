var employes = new Array("Jean", "Pierre", "Alain", "Sophie", "Ali");
var salaires = new Array(75000, 60000, 80000, 60000, 65000);
var autresEmployes = new Array("Pedro", "Manuel", "Alejandro");

// Concaténation des tableaux d'employés
document.write("<b>Tableau de concaténation : </b>" + employes.concat(autresEmployes) + "<br>");

// Transformation du tableau en chaîne de caractères
var chaineEmployes1 = employes.join(" ");
document.write("<b>Résultat du join : </b>" + chaineEmployes1 + "<br>");

// Inversion du tableau et nouvelle chaîne de caractères
chaineEmployes1 = employes.reverse().join(" ");
document.write("<b>Tableau des salaires : </b>" + salaires.lastIndexOf(60000) + "<br>");

// Modification des salaires
salaires.splice(salaires.lastIndexOf(60000), 2, "750000", "800000");
document.write("<b>Position du dernier 60000 :</b>" + salaires.lastIndexOf(60000) + "<br>");

// Ajout de nouveaux employés
var nouveauxEmployes = ["Michel", "Sophie"];
employes.splice(2, 0, ...nouveauxEmployes);
document.write("<b>Après ajout de nouveaux employés :</b> " + employes + "<br>");

function f2(){
    console.log(this.event)
    console.log("rak nzelt 3al bottun ")
}
function f3(){
    
    console.log("rak hazit sob3ek 3al bottum ")
}
function f5(){
    console.log(this.event)
    console.log("rak dakhalt string")
}
function f6(){
    var a=this.document.getElementById("id3").textContent;
    var b=parseInt(a);
    this.document.getElementById("id3").textContent=b+1;
}
function f7(){
    this.document.getElementsByTagName("img")[0].width=300;
    this.document.getElementsByTagName("img")[0].height=300;
}
function f8(){
    this.document.getElementsByTagName("img")[0].width=120;
    this.document.getElementsByTagName("img")[0].height=120;
}

document.addEventListener("DOMContentLoaded",jawnabehi);
function jawnabehi(event){
    function f1(event){
        console.log(event);
        console.log(this);
        document.getElementById("c1").value="afhh ro7ik";
    }
    function f6(){
        console.log(this.event)
        var a=document.getElementById("id3").textContent;
        var b=parseInt(a);
        document.getElementById("id3").textContent=b+1;
    }
    function f7(){
        document.getElementsByTagName("img")[0].width=300;
        document.getElementsByTagName("img")[0].height=300;
    }
    function f8(){
        document.getElementsByTagName("img")[0].width=120;
        document.getElementsByTagName("img")[0].height=120;
    }
    document.getElementsByTagName("button")[0].addEventListener("click",f1);
    document.getElementsByTagName("img")[0].addEventListener("mouseenter",f7);
    document.getElementsByTagName("img")[0].addEventListener("mouseleave",f8);
    document.getElementById("id3").addEventListener("mouseup",f6);
    document.getElementById("id3").addEventListener("mousedown",f6);
    document.getElementsByTagName("img")[0].addEventListener("mouseup",f6);

}