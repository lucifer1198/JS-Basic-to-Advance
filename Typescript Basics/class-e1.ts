// defining a class
class Mobile_Phone {

    /*screenSize : string;
    RAM : string;
    processor : string;
    camera:number;
    battery:number;
    operatingSystem : string*/
    
    
    constructor(public screenSize: string, public RAM: string, public processor: string, public camera: number, public battery: number,public operatingSystem : string){
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
    
    }// end class 
    
    
    let onePlus_5t = new Mobile_Phone("6 inch","6 GB","Snapdragon",20,3300,"Android")
    
    let o_s = onePlus_5t.getOperatingSystem()
    alert(o_s)