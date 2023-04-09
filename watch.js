
        var clock=()=>
        {
        var d=new Date()
        var hh=document.querySelector("#h")
        var mm=document.querySelector("#m")
        var ss=document.querySelector("#s")
        hh.innerText=d.getHours()
        mm.innerText=d.getMinutes()
        ss.innerText=d.getSeconds()
        }
        window.setInterval(clock,1000)
    