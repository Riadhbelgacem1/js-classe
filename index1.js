//commentaire
/*commentaier mutiligne*/
// Définition de différents types de données
let typesDonnees = {
    nombre: 123,
    chaine: "Bonjour le monde",
    booleen: true,
    nul: null,
    indefini: undefined,
    objet: {nom: "riadh"},
    tableau: [1, 2, 3],
    fonction: function() { return "Hello!"; }
};
for (const prop in typesDonnees) {
    console.log(`${prop} de type ${typeof typesDonnees[prop]}`);
}

// Affichage des types de données

//les caractéres spéciaux en chaines
console.log("Retour arrière : " + "\b");
console.log("Form feed : " + "\f");
console.log("Saut de ligne : " + "\n");
console.log("Retour chariot : " + "\r");
console.log("Tabulation horizontale : " + "\t");
//conversion de type 
var a=2;
console.log(eval("a*2"))
console.log(eval(123))
console.log(parseInt("FF",16))
console.log(parseInt("12",8))
console.log(parseFloat("52.966"))
console.log(parseFloat("X12"))
console.log(isFinite(+Infinity))
console.log(isNaN("abc"))
a=5;
a*=10;
a+=2;
a=b>3?0:1
console.log(a);


array= new Array();
array[0]= "riadh";
array[1]= false;
array[2]= 24;
array[3]={
    name: "belgacem",
    age: 24
}
// tableaux multidimentienelle 
var tabl1=new Array('beurre','confiture','pain','jus de fruit');
alert(tabl1.length);
var tab2=new Array(10,'jeune',22.5);
var nom_tableau = new Array(10);
//tab multidim
for(i=0;i<nom_tableau.length;i++)
{
    nom_tableau[i]= new Array(10);
}
//tableau associatif 
var preferences =new Array();
preferences['saison']='ete';
preferences['couleur']='bleu';
preferences['jour']='vendredi';
preferences['musique']='jazz';
//if else
var choix=1;
if(choix==1){
    alert("vous avez fait le premier choix")
}

if(choix==1){
    alert('vous avez fait le premier choix')
}

//switch
/*
switch(choi)
{
    case 1:
        alert("vous avez fait le premier choix")
        break;
    case 2:
        alert("vous avez fait le deuxieme choix")
        break;
    case 3:
        alert("vous avez fait le troisieme choix")
        break;
    default:
            alert("vous devez faire un choix entre 1 et 3")
            break;
}
*/
//do while
var compteur=1;
var n=10;
do{
    compteur++;
    alert(compteur);
}
while(compteur<10)
//while

array[4]=function mult(a,b){
    return a*b;
}

for(i=0;i<n;i++)
{
    //suite d'intruction
}

function incrementer(x)
{
    x++;
    console.log(x);
}
 var vTimeout=setTimeout(()=>("alert 30 secondes sont passe"),30000)
 clearTimeout(vTimeout);

 var vtime=setInterval(()=>("ce ceci change tous les 30 secondes"),30000)
 clearTimeout(vTimeout);
var a=10;
incrementer(a);
console.log(a);//passage par valeur;
function carre(idresultat) {
    var valeur = document.getElementById(idresultat).value;
    valeur = valeur * valeur;
    document.getElementById(idresultat).value = valeur;
}

array[10]=6;
console.log(array);
console.log(array[8]);
var ages =[21,1,65,18,29];
ages[1]=8;
ages[10]=6;
console.log(ages);

for(var i of ages){
    console.log(i);
}
for(var key in array[3])
{
    console.log(key + ":" + array[3][key] )
}
function moraba3(cote){
    this.a=cote;
}
moraba3.prototype.getAire=function(){
    return Math.pow(this.a,2);
};
moraba3.prototype.getperimetre= function(){
    return 4*this.a;
}
var test1 =new moraba3(10);
console.log(test1);
console.log(test1.getAire());
console.log(test1.getperimetre());

var test2= new moraba3(5);
console.log(test2);
console.log(test2.getAire());
console.log(test2.getperimetre());
console.log(this)


function incrementer(x)
{
    x++;
    console.log(x);
}
var a=10;
incrementer(a);
console.log(a);//passage par valeur;


function incrementer2(x)
{
    x.age++;
    console.log(x);
}
var a={age:10};
incrementer2(a);
console.log(a);//passage par referece
function f1(){
    var name=document.getElementById("c1").value;
    console.log(name);
    this.document.getElementById("id3")
    .innerHTML= "<h2>asslema " + name+ "</h2>";
    var c = 
    this.document.getElementById("id0")
    textContent = "Marhbe bik";
    textContent = c + "w HTML w CSS"


}

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
console.log('bonjour')
var student = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    courses: ['Math', 'English', 'Computer Science'],
    notes: 'John is a hardworking student.'
};
console.log(student);
console.log(typeof(student));

var b=JSON.stringify(student);
console.log(b);
console.log(typeof(b));

var c=JSON.parse(b);
console.log(c);
console.log(typeof(c));
