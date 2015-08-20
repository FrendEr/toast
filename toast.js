
/* ===============================================
 * @name     toast.js
 * @author   Frend
 * @github   https://github.com/FrendEr/toast
 * ===============================================
 */

;(function(define) {
    define(['jquery'], function($) {
        'use strict';

        var timer;

        // message status
        var status = {
            info    : 'info',
            error   : 'error',
            success : 'success'
        };

        // animation type,
        // use animate.css(https://github.com/daneden/animate.css)
        var animations = {
            shake    : 'shake',
            flipInX  : 'flipInX',
            fadeIn   : 'fade'
        };

        // toast object
        var toast = {
            info: info,
            error: error,
            success: success
        };

        return toast;

        /*
         * @function  info
         * @usage     display normal message
         */
        function info(message, animation) {
            return notify({
                message: message,
                animation: animation,
                status: 'info'
            });
        }

        /*
         * @function  error
         * @usage     display error message
         */
        function error(message, animation) {
            return notify({
                message: message,
                animation: animation,
                status: 'error'
            });
        }

        /*
         * @function  success
         * @usage     display success message
         */
        function success(message, animation) {
            return notify({
                message: message,
                animation: animation,
                status: 'success'
            });
        }

        /*
         * @function  notify
         * @usage     core function
         */
        function notify(options) {
            var target = $('<div class="message"></div>');

            if (timer !== null) {
                $('.message').remove();
                clearTimeout(timer);
                timer = null;
            }

            target
                .addClass(status[options.status] + ' animated ' + options.animation)
                .html(options.message);

            timer = setTimeout(function() {
                target.remove();
            }, options.duration || 2000);

            return target.appendTo(document.body);
        }

    });
}(typeof define === 'function' && define.amd ? define : function(deps, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory(require('jquery'));
    } else {
        window.toast = factory(window.jQuery);
    }
}));
