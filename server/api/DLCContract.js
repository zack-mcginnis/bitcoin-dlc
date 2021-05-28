export class DLCContract {

    constructor(id) {
        this.id = id;
        this.participants = [];
    }

    addParticipant(participant) {
        this.participants.push(participant);
    }

}