import TheardSize from "./theardSize";

class TheardType {
    constructor(name) {
        this.name = name;
        this.theardsSize = {}
    }

    addTheardSize(size) {
        this.theardsSize[size] = new TheardSize()
    }

    addTheardPitch(name, size, pitch, hole, dmax, dmin, d2max, d2min, d3max, d3min, D2min, D2max, D1min, d1max, Th) {
        if (this.theardsSize[size]) {
            this.theardsSize[size].addThreadData(name, size, pitch, hole, dmax, dmin, d2max, d2min, d3max, d3min, D2min, D2max, D1min, d1max, Th);
        } else {
            console.error(`Rozmiar ${size} nie został jeszcze dodany.`);
        }
    }
}

export default TheardType;