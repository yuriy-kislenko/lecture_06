describe('Array methods:', function () {
  var ELEMENTS_COUNT = 10;
  var numbersArray = null;
  var mixedArray = null;
  var jestCallback = null;

  var callbacks = {
    isTypeOfString: function (element) {
      return typeof element === 'string';
    },
    isTypeOfNumber: function (element) {
      return typeof element === 'number';
    },
  };

  beforeEach(function () {
    numbersArray = [];
    mixedArray = [];
    jestCallback = jest.fn();

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
      expect(window.every(numbersArray, callbacks.isTypeOfNumber)).toBe(true);
    });

    it('returns false if at least one element doe not satisfy passed condition', function () {
      expect(window.every(mixedArray, callbacks.isTypeOfNumber)).toBe(false);
    });

    it('throws type error exception in case no function passed', function () {
      expect(function () {
        window.every([]);
      }).toThrowError(TypeError);
    });

    it('it stops a loop at first failed check', function () {
      var invalidArray = [1, 2, 3, 4, '20', 30, 40];
      jest.spyOn(callbacks, 'isTypeOfNumber');

      window.every(invalidArray, callbacks.isTypeOfNumber);

      expect(callbacks.isTypeOfNumber).toHaveBeenCalledTimes(5);
    });
  });

  describe('.some(array, callback)', function () {
    it('returns true if at least one element satisfies passed condition', function () {
      expect(window.some(mixedArray, callbacks.isTypeOfNumber)).toBe(true);
    });

    it('returns false if all elements do not satisfy passed condition', function () {
      expect(window.some(numbersArray, callbacks.isTypeOfString)).toBe(false);
    });

    it('throws type error exception in case no function passed', function () {
      expect(function () {
        window.some([]);
      }).toThrowError(TypeError);
    });

    it('it stops a loop at first failed check', function () {
      var invalidArray = [1, 2, 3, 4, '20', 30, 40];
      jest.spyOn(callbacks, 'isTypeOfString');

      window.some(invalidArray, callbacks.isTypeOfString);

      expect(callbacks.isTypeOfString).toHaveBeenCalledTimes(5);
    });
  });

  describe('.forEach(callback)', function () {
    it('executes callback for each element of array', function () {
      window.forEach(numbersArray, jestCallback);
      expect(jestCallback).toHaveBeenCalledTimes(numbersArray.length);
    });

    it('throws type error exception in case no function passed', function () {
      expect(function () {
        window.forEach([]);
      }).toThrowError(TypeError);
    });
  });

  describe('.filter(callback)', function () {
    it('executes callback for each element of array', function () {
      window.filter(numbersArray, jestCallback);
      expect(jestCallback).toHaveBeenCalledTimes(numbersArray.length);
    });

    it('returns new array with filtered values', function () {
      var expectedResult = mixedArray.filter(callbacks.isTypeOfNumber);
      var actualResult = window.filter(mixedArray, callbacks.isTypeOfNumber);
      expect(actualResult).toEqual(expectedResult);
    });

    it('throws type error exception in case no function passed', function () {
      expect(function () {
        window.filter([]);
      }).toThrowError(TypeError);
    });
  });
});
