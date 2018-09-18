function mountLoadingScreen(){
$('#root').html(loadingScreen());

    setTimeout(()=>{
        session();
    },2000);
}


function loadingScreen(){
   let container = document.createElement('div');     //to create an HTML element
   container.id = 'loading-screen';                    //to loading screen
   container.classList.add('Loading-screen') ;
   //to create in center
   container.innerHTML = `
       <div></div>
       <div></div>
       <div></div>
       <div></div>
   `;

   return container;
}