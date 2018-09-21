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
       <div class="name">W</div>
       <div class="name">E</div>
       <div class="name">L</div>
       <div class="name">C</div>
       <div class="name">O</div>
       <div class="name">M</div>
       <div class="name">E</div>
       `;

   return container;
}