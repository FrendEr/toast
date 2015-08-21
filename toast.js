/* ==============================================
 *
 *  @name     toast.js
 *  @author   Frend
 *  @github   https://github.com/FrendEr/toast.js
 *
 * ==============================================
 */

;(function(define) {
    define(['jquery'], function($) {

        'use strict';

        var timer = null;

        // message status
        var status = {
            info    : 'toast-info',
            error   : 'toast-error',
            success : 'toast-success'
        };

        // animation type,
        // more info in animate.css(https://github.com/daneden/animate.css)
        var animations = {
            shake       : 'shake',
            flipInX     : 'flipInX',
            flipOutX    : 'flipOutX',
            fadeIn      : 'fadeIn',
            fadeInUp    : 'fadeInUp',
            fadeOutDown : 'fadeOutDown',
            fadeOutUp   : 'fadeOutUp'
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
        function info(message, animateIn, duration, animateOut) {
            return notify({
                message: message,
                animateIn: animateIn,
                duration: duration || 2000,
                animateOut: animateOut || 'fadeOut',
                status: 'info'
            });
        }

        /*
         * @function  error
         * @usage     display error message
         */
        function error(message, animateIn, duration, animateOut) {
            return notify({
                message: message,
                animateIn: animateIn,
                duration: duration || 2000,
                animateOut: animateOut || 'fadeOut',
                status: 'error'
            });
        }

        /*
         * @function  success
         * @usage     display success message
         */
        function success(message, animateIn, duration, animateOut) {
            return notify({
                message: message,
                animateIn: animateIn,
                duration: duration || 2000,
                animateOut: animateOut || 'fadeOut',
                status: 'success'
            });
        }

        /*
         * @function  notify
         * @usage     core function
         */
        function notify(options) {
            var target;

            if (timer !== null && $('.toast-message').length) {
                // clear timeout
                clearTimeout(timer);
                timer = null;

                // reset the single object
                target = $('.toast-message').attr('class', 'toast-message').show();
            } else if (!$('.toast-message').length) {
                target = $('<div class="toast-message"></div>');
            }

            target
                .html(options.message)
                .addClass(status[options.status] + ' animated ' + options.animateIn);

            timer = setTimeout(function() {
                target.addClass(options.animateOut);
            }, options.duration);

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
