var palya=document.getElementById('palya')


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
    else v
}

function kepetMegjelenit(){
    var latszik=document.getElementsByClassName("latszik")
    if (latszik.length==0){
        setTimeout(function(){
            let l=document.getElementsByClassName("latszik")
            Array.from(l).forEach(
                (e)=>{
                    e.style.backgroundImage=""
                    e.classList.remove('latszik')
                }
            )         
          
        },1000)
    }
    console.log(latszik.length)
    if ((latszik.length<2)){
        this.style.backgroundImage=`url('${this.dataset.kep}')`
        this.classList.add("latszik")
    }
    // "url('"+this.dataset.kep+"')"

    

    
}






palya.appendChild(elemFactory('div','cella','./img/1.png',kepetMegjelenit))
palya.appendChild(elemFactory('div','cella','./img/2.png',kepetMegjelenit))
palya.appendChild(elemFactory('div','cella','./img/3.png',kepetMegjelenit))
palya.appendChild(elemFactory('div','cella','./img/4.png',kepetMegjelenit))
palya.appendChild(elemFactory('div','cella','./img/5.png',kepetMegjelenit))
palya.appendChild(elemFactory('div','cella','./img/6.png',kepetMegjelenit))













// var query=document.querySelectorAll('.cella')
// var getele=document.getElementsByClassName('cella')

// console.log("query",query)
// console.log("getele",getele)

// query.forEach(
//     (e)=>e.classList.remove('cella')
// )

// console.log("query",query)
// console.log("getele",getele)