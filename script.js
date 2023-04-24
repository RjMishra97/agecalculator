

function result(){
let dates=document.getElementById("date").value;
let months=document.getElementById("month").value;
let years=document.getElementById("year").value;
let output=document.getElementById("output")
    let todayDate=new Date();
    let dd=todayDate.getDate()
    let mm=todayDate.getMonth()
    let yy=todayDate.getFullYear()
    console.log(dd,mm,yy)
    console.log(dates,months,years)
     if(dates.length===0 || months.length===0 || years.length===0 ){
        alert("please filled all the inputs")
     }
     else if(dates.length>2 || dates.length <1){
        alert("dates cant be more than 2 digit or less than 1")
     }
     else if(months.length>2 || months.length <1){
        alert("months cant be more than 2 digit or less than 1 digit")
     }
     else if(years.length>4 || years.length <4){
        alert("months cant be more than 4 digit or less than 4 digit")
     }
     else{
        let fdd=dd-dates;
        let fmm=mm-months;
        let fyy=yy-years;
        if(fdd<0){
            fdd=-fdd
            
        }
        if(fmm<0){
            fmm=-fmm
            
        }
        
       output.innerHTML=`<p class="results">Your age is  ${fyy} years ${fmm} months and ${fyy} days </p>`
        

    }

}




  
