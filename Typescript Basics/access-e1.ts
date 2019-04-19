// defining a class
class MobilePhone {

    private screenSize : string;
    private RAM : string;
    private processor : string;
    private camera:number;
    private battery:number;
    private operatingSystem : string
    
    
    constructor (screenSize : string,RAM : string,processor : string,camera:number,battery:number,operatingSystem : string){
       this.screenSize = screenSize;
       this.RAM = RAM;
       this.processor = processor;
       this.camera = camera;
       this.battery = battery;
       this.operatingSystem = operatingSystem
    }// end constructor
    
    // method.
    getOperatingSystem = ()=>{
        return this.operatingSystem
    }
    getCamera = ()=>{
        return this.camera;
    }

    setCamera = (pixels:number) =>{
        this.camera = pixels;
    }
    
    }// end class 
    
    // Showing you guys the use of accessors(getters & Setters)
    let onePlus5t = new MobilePhone("6 inch","6 GB","Snapdragon",20,3300,"Android")
     
 console.log(onePlus5t.getCamera())
onePlus5t.setCamera(25);
console.log(onePlus5t.getCamera())
