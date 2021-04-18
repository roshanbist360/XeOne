        

        // js dom for opening and closing side nav in mobile
        function openNav(){
              document.getElementById('sideNavv').style.width="200px";
         }

         function closeNav(){
              document.getElementById('sideNavv').style.width="0px";
         }
       
        // get scroll value so that various changes can be done on scroll
        // for to appear navbar on scroll
         window.addEventListener("scroll",function (event){
             var scroll=scrollY;
             if(scroll>=500){
             	document.getElementById('hdr').style.position="fixed";
             	document.getElementById('hdr').style.background="var(--bg)";
             	document.getElementById('hdr').style.animation="slideInDown ease 0.6s";
             }
             else{
             	document.getElementById('hdr').style.position="absolute";
             	document.getElementById('hdr').style.background="transparent";
             	document.getElementById('hdr').style.animation="slideInUp ease 0s";
             }
         });

          //Below js is for well working of go to top button
           $(document).ready(function(){
              $(window).scroll(function(){
                 if($(this).scrollTop()>500){
                     $('#topButton').fadeIn();
                 }
                 else{
                     $('#topButton').fadeOut(); 
                 }
              });

              $("#topButton").click(function(){
                 $('html','body').animate({scrollTop:0},300);
              });
           });
          













