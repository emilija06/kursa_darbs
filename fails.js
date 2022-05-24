function Funkcija()
{
 let x = document.getElementById("cip").value;
 let text;
 if (inNaN(x) || x < 1 || x > 10){
     console.log("Ievadītais skaitlis nav derīgs!");
 } else {
     console.log("Viss ok");
 }
 document.getElementById("demo").innerHTML = text;
}