let getball = document.querySelector(".ball");
let getinput = document.querySelector(".mode");
// let getlight = document.querySelector(".light-btn");
// let getdark  = document.querySelector(".dark-btn");
/*

getlight.addEventListener("click",function(){

    console.log(getball);
    console.log(getball.classList);
    getball.className = "ball active" ;

});
*/
/*

getdark.addEventListener("click",function(){


    console.log(getball);
    console.log(getball.classList);
    getball.className = "ball" ;


});
*/

getball.addEventListener("click",function(e){

    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.classList);
    //
    // console.log(getball.previousElementSibling);
    // console.log(getball.previousElementSibling.checked);

    let modebtn = getball.previousElementSibling;

    // console.log(modebtn);

    // let checkmode = modebtn.checked ;

    // console.log(checkmode);

    // checkmode = !checkmode;


    if( modebtn.checked ){

        modebtn.checked = false ;
        getball.style.backgroundColor = "var(--third-color)";
        getball.parentElement.style.backgroundColor = "var(--primary-color)" ;
    }else{

        modebtn.checked = true ;
        getball.style.backgroundColor = "var(--primary-color)";
        getball.parentElement.style.backgroundColor = "var(--third-color)";
    }

    getball.classList.toggle("active");

});