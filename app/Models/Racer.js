import { Pop } from "../Utils/Pop.js";

export class Racer {
  constructor(name, color, team, position) {
    this.name = name;
    this.color = color;
    this.team = team;
    this.position = position;
  }
  racerPosition() {

    
    if (this.position >= 12) {
      Pop.toast(`${this.name} won`);
    }
  }

  get Template() {
    return `
    <div class="col-12">
                <div class="p-3 border bg-light" style="background-color: ${this.color} !important; padding-left: ${this.position}% !important ">${this.name}</div>
                <button class="btn btn-danger" onclick="app.racersController.start()">START</button>
              </div>
    `;
  }
}
