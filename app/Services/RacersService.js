import { ProxyState } from "../AppState.js";
class RacersService{
    racerPosition(name){
        let racer = ProxyState.racers.find(r => r.name == name)
        racer.racerPosition()
    }
}

export const racersService = new RacersService()