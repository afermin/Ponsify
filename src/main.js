(function() {

    function ponsify(lowerLimit, upperLimit, step) {
      if (lowerLimit > upperLimit) {
        return 0
      }
      if (lowerLimit === upperLimit) {
        return lowerLimit
      }
      return ponsify(lowerLimit+step, upperLimit, step)+lowerLimit
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
