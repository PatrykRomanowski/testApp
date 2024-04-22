// theardSize.js
class TheardSize {
    constructor() {
        this.threadPitch = {};
    }

    addThreadData(theardName, size, pitch, hole, dmax, dmin, d2max, d2min, d3max, d3min, D2min, D2max, D1min, d1max, Th) {
        this.threadPitch[pitch] = {
            theardName,
            size,
            pitch,
            hole,
            dmax,
            dmin,
            d2max,
            d2min,
            d3max,
            d3min,
            D2min,
            D2max,
            D1min,
            d1max,
            Th
        }
    }
}

export default TheardSize;