function hex(r,g,b){
    return '#' +((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r,g,b){
    return `rgb(${r} ,${g},${b})`
}


hex(255,100,25);
//////////////factory function ////////

function makeColor(r,g,b){
    const color = {};
    color.r=r;
    color.g =g;
    color.b=b;
    color.rgb=function (){
        const {r,g,b}=this;
        return `rgb(${r} ,${g},${b})`
    }
    return color;
}
