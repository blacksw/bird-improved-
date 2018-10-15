var change = ["yellow","red","green"];
var b = new Bird("yellow");
b.render();
b.fly();
b.div.onclick = shoot;
var shots = 0;
var kills = 0;
var kill = document.querySelector('#kills');
var shot = document.querySelector('#shots');

function shoot(){
var change_bird = Math.round((Math.random()*2));
console.log(Math.round((Math.random()*2)));
b.die();
b = new Bird(change[change_bird]);
b.render();
b.fly();
b.div.onclick = shoot;

kills++;
shots++;
kill.innerHTML = kills + " ";
shot.innerHTML = shots + " ";
console.log(shots);
}

// функцией shoot() при 1) найти птицу 2)setTimeout(function(){}) -> removeChild
// удалитиь со временем
