// variaveis da raquete 
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;
// variaveis da bolinha
let xBolinha=200;
let yBolinha=200;
let diametro=30;
let velocidadeXbolinha=4;
let velocidadeYbolinha=4;
let raio= diametro/2
//Variáveis RaquenteOponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let LarguraRaqueteOponente = 10;
let AlturaRaqueteOponente = 90; 

// Variáveis do placar
let meusPontos = 0;
let PontosOponente = 0;
let pontoMarcado = false;

//function preload() {
// trilha = loadSuond("trilha.mp3");
// ponto = loadSuond("ponto.mp3");
// Raquetada = loadSuond("Raquetada.mp3");
//}

// velocidade da bolinha


function setup(){
  createCanvas(400, 400);
   //trilha.loop();
}

function draw() {
  background(0);
  mostrarbolinha();
  mostraRaquete();
  movimentobolinha();
  verificacaoColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentoMinhaRaquete();
  verificarColisaoRaquete();
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
   // Mostrar o placar 
  textSize(24);
  fill(255);
  text(meusPontos, 20, 30);
  text(PontosOponentes, width - 30, 30);
}
  
function mostrarbolinha(){
   circle (xBolinha, yBolinha, diametro); 
   }
 function mostraRaquete (x,y) {
      rect( x ,y,raqueteLargura,raqueteAltura); 
 }

   
  function movimentobolinha(){
      xBolinha+= velocidadeXbolinha;
      yBolinha+= velocidadeYbolinha;
     
 }
     function verificacaoColisaoBorda(){
 if(xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXbolinha *= - 1;verificacaoColisaoBorda()
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYbolinha *= -1;
}
 }