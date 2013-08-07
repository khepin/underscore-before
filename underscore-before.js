(function(){
    function before(beforeFn, func) {
        return function() {
            beforeFn.apply(this, arguments);
            if (!func) return;
            return func.apply(this, arguments);
        };
    }

    before.after = function(func, after) {
        return function() {
            var ret = func.apply(this, arguments);
            if (!after) return ret;
            after.apply(this, arguments);
            return ret;
        };
    };

    _.mixin({
        before: before
    });

})();
