var palya=document.getElementById('palya')
var maxSor=5
var maxOszlop=6

document.querySelector('form').addEventListener("submit",
(e)=>{
            e.preventDefault();
            
            console.log(e.target.elements)
            maxOszlop=Number(e.target.elements.oszlopSzam.value)
            maxSor=Number(e.target.elements.sorSzam.value)
            console.log(maxSor*maxOszlop)
            if ( ((maxSor*maxOszlop)%2==0) && (maxSor*maxOszlop)<=44) 
                {    
                    document.querySelector('form').style.display='none'
                    init()
                }


            
             console.log('submit')
        }

)




function elemFactory(mit,osztaly,adatok,fuggveny)
{
    vissza=document.createElement(mit)
    vissza.className=osztaly
    if (adatok) vissza.dataset.kep=adatok
    if (fuggveny) vissza.onclick=fuggveny
    return vissza
}
function $(mit){    
    var v=document.getElementsByClassName(mit)    
    if (v.length==1) return v[0]
    else return v
}

function kepetMegjelenit(){
    var latszik=document.getElementsByClassName("latszik")
    var idozito
    if (latszik.length==0){
        idozito=setTimeout(function(){
            console.log("idozítő")
            let l=document.getElementsByClassName("latszik")
            Array.from(l).forEach(
                (e)=>{
                    if (!e.classList.contains('kitalalt')){
                    e.style.backgroundImage=""                    
                }
                e.classList.remove('latszik')
               }
            )         
          
        },1000)
    }
    console.log(latszik.length)
    if ((latszik.length<2)){
        console.log(this.dataset.kep)
        this.style.backgroundImage=`url('${this.dataset.kep}')`
        this.classList.add("latszik")
    }

    if ((latszik.length==2)){
        let l2=document.querySelectorAll(".latszik")
        if (l2[0].dataset.kep==l2[1].dataset.kep){       
            clearTimeout(idozito)
            Array.from(l2).forEach(
                (e)=>{
                    console.log("Oké", e)
                    // 
                    e.style.backgroundImage=`url('${e.dataset.kep}')`
                    e.classList.add("kitalalt") 
                    e.onclick=null
                    e.classList.remove('latszik')
                }
            )
            if ($('kitalalt').length==(maxSor*maxOszlop))
            {   document.querySelector('form').style.display='block'
                $('message').innerHTML='<h2 class="text-center">Gratulálok te egy győztes vagy!</h2>'
            }
        }
    }         
        console.log(this.dataset.kep)
        this.style.backgroundImage=`url('${this.dataset.kep}')`
        this.classList.add("latszik")
    }



    // "url('"+this.dataset.kep+"')"   


function init(){
palya.innerHTML=""    
palya.style.width=(maxOszlop*10)+'vh'
for (let i = 0; i < maxSor; i++) {
    let sor= elemFactory('div','sor')
   
    for (let j = 0; j < maxOszlop; j++) {
        sor.appendChild(elemFactory('div','cella','',kepetMegjelenit))
    }
    palya.appendChild(sor)    
}

for (let i = 1; i <= maxOszlop*maxSor/2; i++) {    
    for (let j = 0; j < 2; j++) {
        let cellaSorSzam=Math.round(Math.random()*(maxOszlop*maxSor-1))  
        if (!$('cella')[ cellaSorSzam].dataset.kep){
            $('cella')[ cellaSorSzam].dataset.kep=`./img/${i}.png`
            console.log("jó cella")
        }
        else j--
    }

   
}


}



// init()












// var query=document.querySelectorAll('.cella')
// var getele=document.getElementsByClassName('cella')

// console.log("query",query)
// console.log("getele",getele)

// query.forEach(
//     (e)=>e.classList.remove('cella')
// )

// console.log("query",query)
// console.log("getele",getele)