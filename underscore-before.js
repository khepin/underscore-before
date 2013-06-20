(function(){
    _.mixin({
        before: function(before, func) {
            return function() {
                before.apply(this, arguments);
                if (!func) return;
                return func.apply(this, arguments);
            };
        },
        after: function(func, after) {
            return function() {
                var ret = func.apply(this, arguments);
                if (!after) return ret;
                after.apply(this, arguments);
                return ret;
            };
        }
    });

})();
