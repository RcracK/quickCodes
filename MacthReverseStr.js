function palindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[\W_]/gi,""); 
    const revCleanStr = cleanStr.split('').reverse().join('');
    return cleanStr === revCleanStr ? true : false;
    
  }
palindrome("race CAR");
  console.log();