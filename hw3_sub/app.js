
const port = 3030;  
const EventEmitter = require('events');  
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
//--------------------------------------------------
//all my requires. Inital tests without path catch fire so its left in for good luck.
const https = require('https');
const fs = require('fs');
const path = require('path');
const http = require('http');
//--------------------------------------------------
// write streams for inital github calls
let CBC_READ, CBA_READ, CBCAP_READ;
let CBC = fs.createWriteStream('Country_by_Continent.json');
let CBA = fs.createWriteStream('Country_by_abbrv.json');
let CBCAP = fs.createWriteStream('Country_by_Capital.json');

//--------------------------------------------------
//writeable streams for all of the continents.
let asia_write = fs.createWriteStream('Asia.json');  
let africa_write = fs.createWriteStream('Toto.json');
let northamerica_write = fs.createWriteStream('NA.json');
let southamerica_write = fs.createWriteStream('SA.json');
let antarctica_write = fs.createWriteStream('Antactica.json');
let europe_write = fs.createWriteStream('EU.json');
let oceania_write = fs.createWriteStream('Oceania.json');
let nullwrite = fs.createWriteStream('NULLCONT.json');
//---------------------------------------------------
//deep copy object used later. Template for holding copies in my for each loopss.
let obj = {
 country: '',
 abbreviation:'',
 continent:'',
 city: ''
}
//---------------------------------------------------
//all my writabe object arrays
let Asia = [];
let Africa = [];
let NA = [];
let SA = [];
let Antarctica = [];
let Europe = [];
let Oceania = [];
let NULLCONT = []; // who knew there was a null continent?
let test = []; // not actually a test array. this is the whole array that gathers all deep copied objeccts fromy my template.
//---------------------------------------------------
//creates a server with 200 header and end's okay.
let app = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('okay');
});

//-------------------------------------------
//all of these are immeiately invoked https.get statments. we emit a secondary async event at the end of the 'close' cycle. this pops these emitters into the
//event loop in JVE
        https.get(`https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-continent.json`,
        (res) =>{
            res.on('data',(jsern) =>{
                CBC.write(jsern);
            })

            .on('close',  () => {
                console.log("ending country by continent");
                myEmitter.emit('CBC');
            });
        
        });

        https.get(`https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-abbreviation.json`,
        (res) =>{
            res.on('data',(jsern) =>{
                CBA.write(jsern);
            })
        
            .on('close',  () => {
                console.log("ending country by abreviation");
                myEmitter.emit('CBA');
            });
        
        });


        https.get(`https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json`,
        (res) =>{
            res.on('data',(jsern) =>{
                CBCAP.write(jsern);
            })

            .on('close', () => {
                console.log("were in close");
                myEmitter.emit('CBCAP');
            });
        
        });

//--------------------------------------------------------
//all my emitter statements:
/*
CBC - country by continent: parses data from cbc json


*/
myEmitter.on('CBC', () =>{
    fs.readFile('Country_by_Continent.json','utf8', (err, data) =>{
        if(err){
            throw err;
        }
        CBC_READ = JSON.parse(data);
        
    });
});

//CBA - Country by Abbreviation: parses data from cba json
myEmitter.on('CBA', () => {
    fs.readFile('Country_by_abbrv.json','utf8', (err, data) =>{
        if(err){
            throw err;
        }
        CBA_READ = JSON.parse(data);
      
        
    });
});
//CBCAP - Country by Capital: parses data from  CBCAP json
myEmitter.on('CBCAP', () => {
       fs.readFile('Country_by_Capital.json','utf8', (err, data) =>{
        if(err){
            throw err;
        }
        CBCAP_READ = JSON.parse(data);   
    });
});

//-------------------------------------------------------
//these are my big boy heavy duty emitters
//killself_notreallyjustconcatenatethisgarbage - uses deep copy of my obj template to create new instance new objects whose __proto__ is not linked to obj.
myEmitter.on('killself_notreallyjustconcatenatethisgarbage', ()=> {

let i = 0;
let j = 0;
CBC_READ.forEach(element => {
    let newObj = JSON.parse(JSON.stringify(obj));

    newObj.country = element.country;
    newObj.continent = element.continent;
    test.push(newObj);
    
});
// adds abbreviations to my test holding array
CBA_READ.forEach(element => {
test[i].abbreviation = element.abbreviation;
i++;
});

// adds capitals to test array
CBCAP_READ.forEach(element => {
test[j].city = element.city;
j++;
});

//calls a secondary async emitter inside
myEmitter.emit('IhateEmitter');
});


//IhateEmitter -  this is our sorting emitter. this pushes data to all continents according to json type casting. 
myEmitter.on('IhateEmitter', () =>{
test.forEach(element => {
    if(element.continent === 'Asia'){
        Asia.push(element);
    }else if (element.continent === 'Africa'){
        Africa.push(element);
    }else if (element.continent === 'North America'){
        NA.push(element);
    }else if (element.continent === 'South America'){
        SA.push(element);
    }else if (element.continent === 'Antarctica'){
        Antarctica.push(element);
    }else if (element.continent === 'Europe'){
        Europe.push(element);
    }else if (element.continent === 'Oceania'){
        Oceania.push(element);
    }else {
        NULLCONT.push(element);
    }
});
//lower function for country emission
countryEmitter();
})

//-----------------------------------------
//all of these emitters designate what continent, stringify the data, and then write file each one
myEmitter.on('Asia', () => {
let asiastring = JSON.stringify(Asia);
fs.writeFile("Asia.json", asiastring, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file Asia was saved!");
}); 

});

myEmitter.on('Africa', () => {
let africastring = JSON.stringify(Africa);
fs.writeFile("Africa.json", africastring, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file Africa was saved!");
}); 

});

myEmitter.on('NA', () => {
let NAstring = JSON.stringify(NA);
fs.writeFile("NA.json", NAstring, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file NA was saved!");
}); 

});

myEmitter.on('SA', () => {
let SAstring = JSON.stringify(SA);
fs.writeFile("SA.json", SAstring, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file SA was saved!");
}); 

});

myEmitter.on('Antarctica', () => {
let antacticastring = JSON.stringify(Antarctica);
fs.writeFile("Antarctica.json", antacticastring, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file Antarctica was saved!");
}); 

});

myEmitter.on('EU', () => {
let europestring = JSON.stringify(Europe);
fs.writeFile("EU.json", europestring, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file EU was saved!");
}); 

});

myEmitter.on('SEA', () => {
let oceaniastring = JSON.stringify(Oceania);
fs.writeFile("Oceania.json", oceaniastring, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file Oceania was saved!");
}); 

});

myEmitter.on('Literally_Fucking_Null_Continent', () => {
let nullstring = JSON.stringify(NULLCONT);
fs.writeFile("NULLCONT.json", nullstring, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file NULL was saved!");
}); 

});

// here is our instance of country emitter. just calls all possible emitters
let countryEmitter = () => {
    myEmitter.emit('Asia');
    myEmitter.emit('Africa');
    myEmitter.emit('NA');
    myEmitter.emit('SA');
    myEmitter.emit('Antarctica');
    myEmitter.emit('EU');
    myEmitter.emit('SEA');
    myEmitter.emit('Literally_Fucking_Null_Continent');
}
//this is kind of a special emitter call. the setTimeout pushes all JVE async events forwards and leaves the set timeout to be the final one to finish.
//this is HEAVILY dependent upon the intial https.get requests going hard and doing their jobs.
setTimeout( () => {
    myEmitter.emit('killself_notreallyjustconcatenatethisgarbage');
},1000);
//listening on port 3030 local host call.
app.listen(port, '127.0.0.1');
console.log('Node server running on port 3030');
