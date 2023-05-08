const fs = require ('fs');

var myRead = fs.createReadStream(__dirname + '/text.txt' , 'utf-8')

myRead.on('data', function(piece){
    console.log("" + piece)
}
)
