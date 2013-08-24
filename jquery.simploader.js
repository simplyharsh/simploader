/**
 * jquery.simploader.js v0.1
 * released under MIT License
 * Author: Harsh Kohli <simplyharsh@gmail.com>
 * http://github.com/simplyharsh/simploader
 *
 * Copyright (c) 2013 Harsh Kohli
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * DESCRIPTION:
 *         jQuery plugin to show a dom node as loading animation, using css opacity
 *
 * USAGE:
 *         // To start
 *         $('span.loadText').simploader();
 *
 *         // To end, again
 *         $('span.loadText').simploader();
 *
 **/

(function ($) {

  $.fn.simploader = function (interval) {
    var sui = $(this.get(0)), n = '_simploader';
    if (!sui.length) return this;
    var o = Number(sui.css('opacity'));
    if (isNaN(o)) return this;

    var l = sui.data(n+'_l');
    if (typeof(l) == 'undefined') {
      sui.data(n+'_l', o);
      var a = 0.08, f = -1 * a, tid = setInterval(mycode, interval || 60);
      function mycode() {
        o = o + f;
        if (o > 1) {
          f = -1 * a;
        } else if ( o < 0.3) {
          f = a;
        }
        sui.css('opacity', o);
      }
      sui.data(n+'_t', tid);
    } else {
      sui.css('opacity', l);
      clearInterval(sui.data(n+'_t'));
      sui.removeData(n+'_t');
      sui.removeData(n+'_l');
    }
    return this;
  };

}(jQuery));
