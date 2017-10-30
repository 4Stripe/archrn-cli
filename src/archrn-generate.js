import program from 'commander';
import fs from 'fs';
import newComponent from './content/new-component';
import colors from 'colors';

program
.option('-f, --filename', 'Custom file name')
.parse(process.argv);

var pkgs = program.args;

if (!pkgs.length) {
console.error('command required');
process.exit(1);
}

if(pkgs.length < 2){
console.error('command parameter required');
process.exit(1);
}

if(pkgs[0] == 'component'){
    if(pkgs.length>=2 && pkgs.length<=3){
        
        if(program.filename){
            var stream = fs.createWriteStream(pkgs[2]);
            stream.once('open', (fd) => {
                stream.write(newComponent.comment);            
                stream.write(newComponent.head);
                stream.write(
                    `export default class ${pkgs[1]} extends Component<{}> { 
                    `
                )
                stream.write(newComponent.body);
                stream.write(newComponent.tail);
                
                // Close the stream
                stream.end();
            });
        
            console.log(' ✔ NEW '.green + `react-native component with class name ${pkgs[1].inverse} is generated on ${pkgs[2].italic} file`);
        } else {
            var stream = fs.createWriteStream(pkgs[1] + ".js");  
            stream.once('open', (fd) => {
                stream.write(newComponent.comment);                        
                stream.write(newComponent.head);
                stream.write(
                    `export default class ${pkgs[1]} extends Component<{}> { 
                    `
                )
                stream.write(newComponent.body);            
                stream.write(newComponent.tail);
                
                // Close the stream
                stream.end();
            });
        
            console.log(' ✔ NEW '.green + `react-native component with class name ${pkgs[1].inverse} is generated on ${pkgs[1].italic}.js file`);      
        }
        
    } else {
        console.error('Invalid arguments specified');    
        process.exit(1);    
    }
} else {
    console.error('command parameter not found');
    process.exit(1);
}





