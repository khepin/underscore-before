describe("Underscore before", function() {
    it("can execute a function before another", function(){
        var result = '';
        var first = function(){result += 'first';};
        var second = function(){result += 'second';};

        var myFunction = _.before(first, second);

        myFunction();
        expect(result).toBe('firstsecond');
    });

    it("lets both functions access the arguments", function(){
        var argsA, argsB = '';

        var first = function(a, b, c) { argsA = a + b + c;};
        var second = function(a, b, c) { argsB = c + b + a;};

        var myFunction = _.before(first, second);
        myFunction( 'un', 'deux', 'trois');

        expect(argsA).toBe('undeuxtrois');
        expect(argsB).toBe('troisdeuxun');
    });

});

(function() {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 250;

    /**
    Create the `HTMLReporter`, which Jasmine calls to provide results of each spec and each suite. The Reporter is responsible for presenting results to the user.
    */
    var htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);

    /**
    Delegate filtering of specs to the reporter. Allows for clicking on single suites or specs in the results to only run a subset of the suite.
    */
    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    /**
    Run all of the tests when the page finishes loading - and make sure to run any previous `onload` handler

    ### Test Results

    Scroll down to see the results of all of these specs.
    */
    var currentWindowOnload = window.onload;
    window.onload = function() {
        if (currentWindowOnload) {
          currentWindowOnload();
        }

        execJasmine();
    };

    function execJasmine() {
    jasmineEnv.execute();
    }
})();