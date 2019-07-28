   
    var accordions= document.getElementsByClassName("accordion");

    for( var i=0; i < accordions.length; i++)
    {
        accordions[i].onclick = function() {

            this.classList.toggle('is-open');

            var content=this.nextElementSibling;

        if(content.style.maxHeight)
        {
            content.style.maxHeight=null;

           }
           else
           {
            content.style.maxHeight=content.scrollHeight + "px" ;
           }
         }
    }




$(document).ready(function(){
 $("#search").keyup(function(){
 
 searchHighlight($(this).val());
 });
 
 });
 
 function searchHighlight(searchText){
 if(searchText){
 
 var content =$("p").text();
 var searchExp=new RegExp(searchText, "ig")
 
 var matches= content.match(searchExp);
 
  if(matches){
  
  $("p").html(content.replace(searchExp,function(match){
  
  return "<span class='highlight'>" + match + "</span>";
  }));
  
  }
   else{
 $(".highlight").removeClass("highlight");
 }
 
 }
 else{
 $(".highlight").removeClass("highlight");
 }
 
 }

