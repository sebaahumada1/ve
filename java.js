


let boton1= document.getElementById('boton1')

       boton1.addEventListener("click",luz,true)
       uno=0

 function luz(){

       if(uno==0){
       			  

       			  let body=document.getElementById("body")
	              body.style.background="#004953"

	              body.style.color="white"

	              let qso=document.getElementById("qso")
	              qso.style.color="white"
	              let bienve=document.getElementById("bienve")
	              bienve.style.color="white"
	              let tag1t=document.getElementById("tag1t")
	              tag1t.style.color="white"

	               let tagt=document.getElementById("tagt")
	              tagt.style.color="white"

	              let tag2t=document.getElementById("tag2t")
	              tag2t.style.color="white"

	              let sere=document.getElementById("sere")
	              sere.style.color="black"

	              let titt=document.getElementById("titt")
	              titt.style.color="white"
	              uno+=1

	              
	     }else{	
       			qso.style.color="black"
       			 bienve.style.color="black"
       			  tag1t.style.color="black"
       			  tagt.style.color="black"
       			  tag2t.style.color="black"
       			   sere.style.color="black"


       			   titt.style.color="black"
	            

       		 	/*

	             qso.style.color="black"
	             bienve.style.color="black"
				 tag1t.style.color="black"
	             
	             tag2t.style.color="black"
				 tagt.style.color="black"
	             sere.style.color="black"
	             titut.style.color="black"
	             
	           */
				body.style.background="white"
              	body.style.color="black"
              	uno=0
              
             		 
       }

}