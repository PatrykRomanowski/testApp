import TheardType from "./theardType";


class Theards {
    constructor() {
        this.theardsList = {};
    }

    addTheards(theardsName) {
        this.theardsList[theardsName] = new TheardType(theardsName);
    }

    addSize(theardName, size) {
        this.theardsList[theardName].addTheardSize(size);
    }
    addPitch(theardName, size, pitch, hole, dmax, dmin, d2max, d2min, d3max, d3min, D2min, D2max, D1min, d1max, Th) {
        this.theardsList[theardName].addTheardPitch(theardName, size, pitch, hole, dmax, dmin, d2max, d2min, d3max, d3min, D2min, D2max, D1min, d1max, Th);
    }

}

export default Theards;