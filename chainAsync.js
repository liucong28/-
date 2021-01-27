function chainAsync(arrayOfFunctions) {
  let currentFunctionIndex = 0;
  const lastFunction = arrayOfFunctions[arrayOfFunctions.length - 1];
  goToNextFunction();

  function goToNextFunction() {
    const currentFunction = arrayOfFunctions[currentFunctionIndex];
    if (currentFunction == lastFunction) {
      currentFunction();
    } else {
      currentFunction(goToNextFunction);
      currentFunctionIndex += 1;
    }
  }
}

chainAsync([
  goToNextFunction => {
    console.log('0 second');
    setTimeout(() => goToNextFunction(), 3000);
  },
  goToNextFunction => {
    console.log('3 second');
    setTimeout(() => goToNextFunction(), 2000);
  },
  lastFunction => {
    console.log('5 second');
    //
  },
]);
