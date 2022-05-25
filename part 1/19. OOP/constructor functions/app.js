function Color(r,g,b){
    rhis.r =r;
    this.g =g;
    this.b =b;
    console.log(this)
}

Color.prototype.rgb = function(){
    const{r,g,b}=this;
    return`rgb(${r},${g},${b})`;
};

const color1 = new Color(40,50,60);