import { ValuesController } from "./Controllers/ValuesController.js";
import {RacersController} from "./Controllers/RacersController.js"

class App {
  valuesController = new ValuesController();

  racersController = new RacersController()
}

window["app"] = new App();
