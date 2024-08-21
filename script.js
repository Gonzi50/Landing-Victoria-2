const STAR = document.querySelector('.star');
const delay = 300;
const CB = document.querySelector('.cubrir');
const ROOT = document.documentElement;
function inicio(){
    brillo(1);
    steam1(true);
    steam2(true);
    letrassteambtn(5);
}
function brillo(i){
    let pre = i-1;
    if(pre==0){
        pre=5;
    }
    let preiden = `#idenstar${pre}`;
    let iden = `#idenstar${i}`;
    preiden.replace(/`/g, "'");
    iden.replace(/`/g, "'");
    let a = document.querySelector(iden); 
    let b = document.querySelector(preiden); 
    a.style.filter = 'drop-shadow( 1px 1px 10px #FFCB74)'; 
    b.style.filter = 'drop-shadow( 1px 1px 2px #FFCB74)';  
    i++;
    if(i==6) i=1;
    setTimeout( `brillo(${i})`,delay); 

}
function steam1(movd){
    let stm = document.querySelector('.img2s');
    if(movd){
        stm.style.transform = 'rotateZ(-20deg) scale(1.2)';
        setTimeout( `steam1(false)`,500); 
    }else{
        stm.style.transform = 'rotateZ(20deg) scale(1)';  
        setTimeout( `steam1(true)`,500); 
    }
}
function steam2(movd){
    let stm = document.querySelector('.img2s');
    if(movd){
        stm.style.transform = 'scale(1.2)';
        setTimeout( `steam2(false)`,400); 
    }else{
        stm.style.transform = 'scale(1)';  
        setTimeout( `steam2(true)`,400); 
    }
}
let cargado = false;
function sigloXIX(carg){
    if(carg && !cargado){
        cargado=true;
    }
    if(!carg){
        cargado=false;
        let el = document.querySelector('.msg');
        el.style.transform = 'scale(0) translateY(-450px)';

    }
    if(!cargado){
        return;
    }
    setTimeout( ()=>{
        if(cargado){
            let el = document.querySelector('.msg');
            el.style.transform = 'scale(1) translateY(0)';
        }
    },100 )
}

function imagengrande(){
    
        let img = document.querySelector('.imgpr');
        img.style.zIndex  = '1002';
        activarCB();    
        img.style.width = '700px';
        img.style.height = '700px';
        img.style.top = '20px'; 
        img.style.left = 'calc(50% - 300px)';
        img.style.position = 'fixed';
        ROOT.style.setProperty('--movafter', '-250px');
        img.style.boxShadow =  '#FFCB74 1px 1px 50px';
    
}
function admteclas(event){
    if(event.keyCode == 27){
        quitarimagen();
    }
    if(event.keyCode == 13){
        quitarimagen();
    }
}

function activarCB(){
    CB.style.opacity = '1';
    CB.style.display = 'block';
}
function quitarCB(){
    CB.style.opacity = '0';
    CB.style.display = 'none';
}
function quitarimagen(){
    quitarCB()
    let img = document.querySelector('.imgpr');
    img.style.zIndex  = '1';
    img.style.width = '500px';
    img.style.height = '500px';
    img.style.top = '180px'; 
    img.style.left = '900px';
    img.style.position = 'absolute';
    ROOT.style.setProperty('--movafter', '-50px');
    img.style.boxShadow =  '#FFCB74 1px 1px 10px'; 
}
const bstm = "Steam";
let stm = "Steam";
let stmCreciendo = false;
const stmbr = `<span id="btdescry">|</span>`;
function letrassteambtn(n){
    let button = document.querySelector('.btdesctx');
    if(n<0){
        stmCreciendo=true;
    }
    if(n==6){
        n=5;
        stmCreciendo=false;
    }
    if(!stmCreciendo){
        stm = stm.substring(0,n);
        n--;
    }else{
        stm = bstm.substring(0,n);
        n++;
    }

    button.innerHTML = 'Instalar en ' + stm ;
    setTimeout(() => {
        letrassteambtn(n); 
    }, 1000);  
}

function exocards(n){
    let prencar = `#cartas-${n}`;
    let ncar = ComLatToComVert(prencar);
    let obj = document.querySelector(ncar);
    let maxw = `${screen.width}px`;  
    obj.style.position= 'fixed';
    obj.style.top = '0';
    obj.style.left = '15%'
    
    obj.style.maxWidth =  ComLatToComVert(maxw);  
    obj.style.zIndex = '1002'; 
    
}
function ComLatToComVert(str){
    str.replace(/`/g, "'");
    return str;
}
