  const name = "Simran"
  const repocount = 8

  console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

  const gamename = new String('Simran');
  
  console.log(gamename[0]);
  console.log(gamename.length);
  console.log(gamename.toLowerCase());
  console.log(gamename.toUpperCase());
  console.log(gamename.charAt(3));
console.log(gamename.indexOf('a'));

const newstring = gamename.substring(0,4);
console.log(newstring);

const anotherstring = gamename.slice(-6,4);
console.log(anotherstring);

const onename = "    simran     "
console.log(onename.trim());      //triming which will output no spaces in the strings like here simran (usually used in console time )
console.log(onename);

const url = "https://simran.com/simran%8shrestha"
console.log(url.replace('%8','-'));                   //replace will help any values we want to be replaced (usually used in console time )   