/*
When any error come in our code, programme exit
To handle the error we can use try and catch
*/

try {
    console.log(a);
} catch (error) {
    // error is a object ({message: "error's message here", name: "Refrence"})
    console.log(`${error.name}: ${error.message}`);
} finally {
    console.log("programe ended!");
}; // finally block always executes

/*
Try Block -> always executes
Catch Block -> if any error on the try block then return that error object on catch block
Finally -> always executes
*/

// correct
try{}catch(error){}finally{}

// this is also correct
try{}finally{}

// this is NOT correct
catch { } finally { }; // order must started from try block