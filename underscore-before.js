(function(){

    /**
     * Allow underscore use of partials
     */
    _.mixin({
        before: function(before, func) {
            return function() {
                before.apply(this, arguments);
                if (!func) return;
                return func.apply(this, arguments);
            };
        }
    });

})();