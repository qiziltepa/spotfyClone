var k=0;
function plusDivs(n,id){
  var x = $(`#${id} .music`),len=x.length;
  if(len<6){
    k=NaN;
  }
  if(n==1){
    k--;
    for(var i=0;i<=len-1;i++){
      x[i].style.transform="translate("+220*n*k+"px,0)";
     }
      if(k<-len+4){
        k=-len+4;
        for(var i=0;i<=len-1;i++){
          x[i].style.transform="translate("+220*n*k+"px,0)";
         }
      }
  }
  if(n==-1){
    k++;
    for(var i=0;i<len;i++){
      x[i].style.transform="translate("+-220*n*k+"px,0)";
      if(k>1){
        k=1;
        for(var i=0;i<len-1;i++){
          x[i].style.transform="translate("+-220*n+"px,0)"; }
      }
  }
}

}

