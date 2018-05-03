describe('Array methods:', function () {
  var ELEMENTS_COUNT = 10;
  var numbersArray = null;
  var mixedArray = null;


  var isTypeOfString = function (element) {
    return typeof element === 'string';
  };

  var isTypeOfNumber = function (element) {
    return typeof element === 'number';
  };

  beforeEach(function () {
    numbersArray = [];
    mixedArray = [];

    var element;
    for (var i = 0; i < ELEMENTS_COUNT; i++) {
      element = i + 1;
      numbersArray.push(element);
      if (i % 2 === 0) {
        mixedArray.push(element);
      } else {
        mixedArray.push('element number ' + element);
      }
    }
  });

  describe('.every(array, callback)', function () {
    it('returns true if all elements satisfy passed condition', function () {
      expect(window.every(numbersArray, isTypeOfNumber)).toBe(true);
    });

    it('returns false if at least one element doe not satisfy passed condition', function () {
      expect(window.every(mixedArray, isTypeOfNumber)).toBe(false);
    });

    it('throws type error exception in case no function passed', function () {
      expect(function () {
        window.every([]);
      }).toThrowError(TypeError);
    });

    it('it stops a loop at first failed check', function () {
      var invalidArray = [1, 2, 3, 4, '20', 30, 40];
      var iterationsCount = 0;

      window.every(invalidArray, function (element) {
        iterationsCount++;
        return isTypeOfNumber(element);
      });

      expect(iterationsCount).toBe(5);
    });
  });

  describe('.some(array, callback)', function () {
    it('returns true if at least one element satisfies passed condition', function () {
      expect(window.some(mixedArray, isTypeOfNumber)).toBe(true);
    });

    it('returns false if all elements do not satisfy passed condition', function () {
      expect(window.some(numbersArray, isTypeOfString())).toBe(false);
    });

    it('throws type error exception in case no function passed', function () {
      expect(function () {
        window.some([]);
      }).toThrowError(TypeError);
    });

    it('it stops a loop at first failed check', function () {
      var invalidArray = [1, 2, 3, 4, '20', 30, 40];
      var iterationsCount = 0;

      window.some(invalidArray, function (element) {
        iterationsCount++;
        return isTypeOfString(element);
      });

      expect(iterationsCount).toBe(5);
    });
  });
});
