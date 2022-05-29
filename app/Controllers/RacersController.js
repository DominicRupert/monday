import { ProxyState } from "../AppState.js";
import { Racer } from "../Models/Racer.js";
import { racersService } from "../Services/RacersService.js";

let position = 0;

function draw() {
  let racers = ProxyState.racers;
  let template = "";
  racers.forEach((r) => (template += r.Template));
  document.getElementById("racers").innerHTML = template;
}

function race() {
  ProxyState.racers.forEach((r) => (r.position += Math.floor(Math.random()*5)));
  draw()
}
function start() {
 setInterval( race, 250);
 console.log('started', start);
 console.log();
}

export class RacersController {
  constructor() {
    console.log("loaded");
    race()
    draw();
    
  }
  racerPosition(name){
      racersService.racerPosition(name)
      draw()
  }

}
