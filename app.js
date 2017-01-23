function minusLastItem(array) {
    var minusLast = array.slice(0, (array.length - 1));
    return minusLast;
}


function copyFirstHalf(array) {
    var copyFirst = array.slice(0, (array.length / 2));
    return copyFirst;
}




/* From here down, you are not expected to
   understand.... for now :)

   for (var counter = START-POINT; counter < END-POINT; counter+STEP)

   for (var i=1000; i >= 100; i-100){

   }

   while (var counter >= 100) {
    console.log(counter);
    counter--;
   }


   Nothing to see here!

*/


// tests

function testFunctionWorks(fn, input, expected) {
    var result = fn(input);
    if (
        result && result.length === expected.length &&
        result.every(function (item) {
            return expected.indexOf(item) > -1;
        })) {
        console.log('SUCCESS: `' + fn.name + '` works!');
        return true;
    } else {
        console.error('FAILURE: `' + fn.name + '` is not working');
        return false;
    }
}

function runTests() {

    var list = ["red bull", "monster", "amp", "rockstar", "full throttle", "kickstart"];
    var result1 = ["red bull", "monster", "amp", "rockstar", "full throttle"];
    var result2 = ["red bull", "monster", "amp"];

    var testResults = [
        testFunctionWorks(minusLastItem, list, result1),
        testFunctionWorks(copyFirstHalf, list, result2),
    ];


    var numPassing = testResults.filter(function (result) {
        return result;
    }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();
