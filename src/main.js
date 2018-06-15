(function () {

  function ponsify (lowerLimit, upperLimit, step) {
    var numberSteps = Math.floor((upperLimit - lowerLimit) / step)
    var stepAccum = Math.floor(numberSteps * (numberSteps + 1) / 2)
    var validator = (lowerLimit <= upperLimit)
    var lowerLimitAccum = ((numberSteps + 1) * lowerLimit)
    return (stepAccum * step + lowerLimitAccum) * validator
  }
  // required to export for tests
  // DO NOT TOUCH
  var exports = module.exports
  module.exports = ponsify
})()
