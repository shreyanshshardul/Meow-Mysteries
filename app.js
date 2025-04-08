let btn=document.querySelector("button");
let p=document.querySelector(".result");
 
btn.addEventListener("click" , async ()=>{
    let fact = await getfact();
    console.log(fact);
    p.innerText =fact;
});





let url = "https://catfact.ninja/fact";

async function getfact(){
    try{
    let res = await axios.get(url);
    return res.data.fact;
    }
    catch(e){
        console.log("ERROR ",e);
        return "No fact found";
    }
}
