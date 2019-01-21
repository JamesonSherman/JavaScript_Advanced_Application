async function steamapi() {
let objdata;
  //outside of the awaits its o(n)?
try {
    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamApps/GetServersAtAddress/v1/?addr=0.0.0.0`);
    const ip = await result.json();
    const address = ip.addr;
    console.log(address);
   return  address !== undefined ? address :  error;
  } catch (error){
    alert(`this is the error ${error}`); 
  }
}
//steamapi();
steamapi().then(steamdata => {
objdata = new Object(steamdata);
if(objdata === undefined){
  console.log(`it broke son`);
}
else{
console.log(`values are async parssed`);
console.log(objdata);
}
});
