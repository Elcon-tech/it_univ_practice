let kami = [];
const KAMI_MAX = 100;

class Kami{
    constructor(){
        this.elm = document.createElement("div");
        this.x = rand(0,window.innerWidth);
        this.y = rand(0, window.innerHeight);
        this.vx = rand(-5,5);
        this.vy = rand(2,5);
        this.rx = rand(0,10)/10;
        this.ry = rand(0,10)/10;
        this.rz = rand(0,10)/10;
        this.ag = 0;
        this.sp = rand(5,20);

        this.style = this.elm.style;
        this.style.position = "fixed";
        this.style.width = "20px";
        this.style.height = "10px";
        this.style.backgroundColor = "#fff";

        document.body.appendChild(this.elm);
        this.update();

    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
        if(this.y >= window.innerHeight){
            this.y = -10;
            this.x = rand(0,window.innerWidth);

        }
        this.ag += this.sp;
        this.style.left = this.x + "px";
        this.style.top = this.y + "px";
        this.style.transform = "rotate3D(" + this.rx + ","
        + this.ry + "," + this.rx + "," + this.ag + "deg)";
    }
}

function rand(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function mainloop(){
    for(let i=0;i<KAMI_MAX;i++) kami[i].update();

}

window.onload = function(){
    for(let i=0;i<KAMI_MAX;i++) kami.push(new Kami());
    setInterval(mainloop,1000/60);

}