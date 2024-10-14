import {PlayerModel} from "./PlayerModel.js";

export class PlayerListModel {
    idCounter = 0
    playerList = []

    addPlayer(playerRef) {
        let player = this.convertToObject(playerRef)
        player.id = this.idCounter
        player.counter = playerRef.counter
        this.playerList.push(player)
        this.idCounter++
    }

    removePlayer(id) {
        this.playerList = this.playerList.filter((item) => item.id !== parseInt(id))
    }

    convertToObject(user) {
        return Object.assign(new PlayerModel(), JSON.parse(JSON.stringify(user)))
    }
}