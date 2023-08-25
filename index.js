stuff = {
    entryPoint: {
        thingA: require("./lib/thingA"),
        thingB: require("./lib/thingB"),
    }
}

module.exports = stuff

stuff.entryPoint.thingA.thingAB()