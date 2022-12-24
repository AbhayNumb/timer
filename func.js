const ele = document.querySelector(".timer");
start = () => {
  let hr=parseInt(ele.innerText.split(":")[0]);
  let min=parseInt(ele.innerText.split(":")[1]);
  let sec=parseInt(ele.innerText.split(":")[2]);
  id=setInterval(()=>{
    sec++
    if(sec==60){
        min++;
        sec=0;
        if(min==59){
            min=0;
            hr++;
        }
    }
    const newsec=String(sec).padStart(2,"0");
    const newmin=String(min).padStart(2,"0");
    const newhr=String(hr).padStart(2,"0");
    ele.innerText=`${newhr}:${newmin}:${newsec}`
  },1000);
};
stop = (start) => {
    clearInterval(id)
};
reset = () => {
    ele.innerText="00:00:00"
};
