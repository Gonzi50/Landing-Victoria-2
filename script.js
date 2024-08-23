

// Iluminar las estrellas
const STAR = document.querySelector('.star');
const delay = 300;
const CB = document.querySelector('.cubrir');
const ROOT = document.documentElement;
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
// Movimiento del logo de steam
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

// Mostrar texto al pasar el mouse sobre "Siglo XIX"
let cargado = false;
function sigloXIX(carg){
    if(carg && !cargado){
        cargado=true;
    }
    if(!carg){
        cargado=false;
        let el = document.querySelector('.msg');
        el.style.transform = 'scale(0) translateY(0px)';

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
// Imagen Victoria 2
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
    
}
function quitarimagen(){
    quitarCB()
    document.querySelector('.cartafulltec').style.display= 'none';
    document.querySelector('.cartafulltec').style.height= '0';
    document.querySelector('.consejocartafull').style.height= '0';
    let img = document.querySelector('.imgpr');
    img.style.zIndex  = '1';
    img.style.width = '500px';
    img.style.height = '500px';
    img.style.top = '180px'; 
    img.style.left = '900px';
    img.style.position = 'absolute';
    ROOT.style.setProperty('--movafter', '-50px');
}

// Movimiento de las letras de Steam
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

// Cartas de las distintas secciones
let texm = ['','','','']
function exocards(n){
    document.querySelector('.cartafulltec').style.height= '0';
    document.querySelector('.consejocartafull').style.height= '0px';
    n--;
    activarCB();
    document.querySelector('.cartafulltec').style.display= 'block';
    let titulo = document.querySelector('.tlcartafull');
    let texto = document.querySelector('.txtcartafull');
    texto.style.height= '0px';
    let imagen = document.querySelector('.imgcartafull');
    imagen.style.height = '0px';
    let consejo = document.querySelector('.txcons');
    let tls = [ "Industria" , "Tecnología" , "Política" , "Diplomacia" ];
    let texs = [ `Victoria 2 tiene un complejo sistema de producción basado en el comercio nacional e internacional. <br>   
                <br>
                   En Victoria 2 la producción de bienes se da en dos formas. <br>
                Todas las provincias producen un recurso básico a través de sus campesinos o mineros. <br>
                Las provincias pueden tener fabricas, que producen recursos de mucho mayor valor. <br>
                 <br>
                Las fabricas pueden ser creadas por el gobierno o por los Capitalistas dependiendo
                del tipo de gobierno. <br>
                 <br>
                Todas las fabricas necesitan una cantidad de trabajadores para operar que tienen que pertenecer a la misma provincia. <br>
                 <br>
                Todas las fabricas necesitan acceso a algunos recursos para producir. <br>
                 <br>
                Si las fabricas pierden mucho dinero cierran y todos sus trabajadores quedan desempleados. <br>
                 <br>
                Una de las claves del éxito de un país en el juego es tener la mayor cantidad posible de fabricas funcionando.  <br>` 
                , ` 
                Victoria 2 acelera el progreso de los países civilizados  mediante un sistema de  investigaciones.br <br><br>
                En todo momento tu país genera una cantidad de puntos de investigación, que se pueden utilizar en cualquier tecnología que este activa en el año en el que estas.<br><br>

                Para aumentar la velocidad de investigación aumenta la cantidad de intelectuales en la población general.<br><br>

                Cada investigación tiene un efecto que ayuda a tu nación  en una forma diferente. 
                <br><br>
                Nunca olvides avanzarlas,  son claves para la eficiencia económica y el poder militar. <br><br>` 
                ,` En Victoria 2 todos los países tienen una forma de gobierno. Las principales son:  <br>
                <ul>
                    <li>Monarquía Absoluta <br></li>
                    <li>Monarquía Parlamentaria <br></li>
                    <li>Dictadura militar <br></li>
                    <li>Republica <br></li>
                    <li>Dictadura comunista <br></li>
                    <li>Dictadura Fascista <br></li>
                </ul>
                En las tres primeras puedes elegir el partido gobernante. <br>
                Cada partido tiene sus políticas, estas otorgan beneficios y limitaciones. <br>
                Por ejemplo un partido liberal te limita mucho la cantidad de impuestos que puedes cobrar, pero aumenta mucho la producción de las fabricas. <br>
                 <br>
                Independientemente del partido gobernante con el tiempo se pueden realizar reformas políticas.  Principalmente sirven para aumentar la atracción de inmigrantes. <br>
                 <br>
                El tipo de gobierno puede cambiar por eventos o por revoluciones. <br>`
                ,   ` 
                En victoria 2 es clave la creación de alianzas militares y la influencia política.  <br>
                 <br>
                Puedes mejorar o empeorar las relaciones diplomáticas con otro país.  <br>
                Si son muy altas tenderán a entrar en una alianza, mientras que si son muy bajas es mayor la probabilidad de que entren en guerra.<br>
                Las relaciones se representan con un numero entre -200 y 200. <br>
                 <br>
                Para entrar en guerra necesitas una justificación, lo mas común es crearla.  <br>
                Al crearla se define que puedes obtener como dinero o territorios.  <br>
                Hay una probabilidad de que sea descubierto. Si eso pasa aumentara la infamia. <br>
                 <br>
                La infamia es un numero que representa la reputación de la nación, mientras menor mejor. <br>
                Si supera los 25 todos tus aliados te abandonaran y las grandes potencias pueden iniciar una guerra para desarmarte. <br>`
            
            ];
    for(i in texs){
        texm[i] = ComLatToComVert(texs[i]);
    }
    let cons = [ 'Nunca subsidies fabricas, se vuelven dependientes y cuestan mas de lo que generan. ' ,
        ' Investiga la rama de filosofía dentro de cultura para investigar mucho mas rápido todo lo demas. ' ,
         'Si reformas el sufragio, el gobierno pasara automáticamente a republica.',
        'Nunca crees justificaciones si  estas cerca del limite de infamia. '];
    let img = ComLatToComVert(` url(img/descimg${n+1}.png) ` );
    titulo.innerHTML=tls[n];
    texto.innerHTML = texm[n];
    consejo.innerHTML = cons[n];
    imagen.style.backgroundImage = img;
    setTimeout(() => {
        document.querySelector('.cartafulltec').style.height= '700px';
        document.querySelector('.consejocartafull').style.height= '150px';
        texto.style.height= '600px';
        imagen.style.height = '600px';  
    }, 10);
}

// Brillo del mapa de europa en 1836
let etapabrillo = 0;
let girandobrillo = false;
let acttimer = 0;
let parar= false;
function brillomapa(n){
    let mapa = document.querySelector('.mapaprl');
    if(n==1){
        parar=true;
        mapa.style.filter = 'drop-shadow(#FFCB74 0px 0px 10px)';
    }
    if(parar && n!=0){
        return;
    }
    parar = false;
    girandobrillo=true;
    switch(etapabrillo){
        case 0:
            mapa.style.filter = 'drop-shadow(#FFCB74 5px 5px 20px)';
            break;
        case 1:
            mapa.style.filter = 'drop-shadow(#FFCB74 5px -5px 20px)';
            break;
        case 2:
            mapa.style.filter = 'drop-shadow(#FFCB74 -5px -5px 20px)';
            break;
        case 3:
            mapa.style.filter = 'drop-shadow(#FFCB74 -5px 5px 20px)';
            break;
    }
    etapabrillo++;
    if(etapabrillo==4){
        etapabrillo=0;
    }
    acttimer = setTimeout( "brillomapa(2)" , 300);
}
localStorage.setItem("NombreUser" , "Iniciar Sesión");
function MostrarNombreEnElNav(){
    let obj = document.querySelector('.textuser');
    obj.textContent = localStorage.getItem("NombreUser");
}

// Agrandar la carta del mapa presionada y achicar la anterior
let cartagrande = -1;

function cartasmapa(n){
    let cont = document.querySelector('.contcartamapa');
    let el = cont.children[n];
    el.style.width = '40%';
    let tlmap = el.querySelector('.tlmapa');
    tlmap.style.transform = 'none';
    tlmap.style.paddingLeft = 'initial';
    let imgmap = el.querySelector('.imgmapan');
    imgmap.style.display = 'block';
    imgmap.style.width = '80%';
    try{
        let exel = cont.children[cartagrande];
        exel.style.width = '5%';
        let extlmap = exel.querySelector('.tlmapa');
        extlmap.style.transform = 'rotateZ(90deg)';
        extlmap.style.paddingLeft = '10vw';
        let eximgmap = exel.querySelector('.imgmapan');
        eximgmap.style.width = '0';
    }catch{};
    if(cartagrande == n){
        cartagrande=-1; 
    } else{
        cartagrande = n;
    }
}






//  Utilitarios;


function inicio(){
    MostrarNombreEnElNav(); 
    brillo(1);
    steam1(true);
    steam2(true);
    letrassteambtn(5);
}
function iniciomapa(){
    MostrarNombreEnElNav(); 
    
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
    CB.style.display = 'grid';
}
function quitarCB(){
    CB.style.opacity = '0';
    CB.style.display = 'none';
}
function ComLatToComVert(str){
    str.replace(/`/g, "'");
    return str;
}
function AdmPestañas(n){
    if(n=="mapa"){
        window.location.replace('mapa.html');
    }
    if(n=="index"){
        window.location.replace('index.html');
    }
}