exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {

    var returnString = '';

    for (var i = 0; i < str.length; i++) {
      if (str[i - 1] !== str[i] && str[i + 1] !== str[i]) {
        returnString += str[i];
      } else if (str[i - 1].repeat(amount)) {
        returnString += str[i].repeat(amount);
      }
    }
  },

  wordWrap: function (str, cols) {

  },
  reverseString: function(str) {
      return str.split('').reverse().join('');
    },
  }
