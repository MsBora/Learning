//Caching or memoization 

//function using global variables
function addTo80(n) {
    return n + 80;
  }
  
  addTo80(5)
  
  let cache = {};
  function memoizeAddTo80(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  }
  
//function using non-global variables

  function memoizeAddTo80(n) { 
    let cache = {};
    return function(n) {
      if (n in cache) {
        return cache[n];
      } else {
        console.log('long time');
        const answer = n + 80;
        cache[n] = answer;
        return answer;
      }
    }
  }
  
  const memoized = memoizeAddTo80();
  console.log(1, memoized(6))

  console.log(2, memoized(6))
  