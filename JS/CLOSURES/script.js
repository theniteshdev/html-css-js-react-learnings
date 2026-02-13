function outer() {
    const a = "ant";
    debugger
    function inner1() {
        console.log(a)
        const b = "ball"
        function deepInnter1() {
            console.log(b)
        };
        deepInnter1()
    };
    inner1();
}
outer();