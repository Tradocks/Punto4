$(document).ready(function(){
    var a=0, b=0;
    var d="";
    var e="";
    var pj1=0,pj2=0,pj3=0;
    var pg1=0,pg2=0,pg3=0;
    var pp1=0,pp2=0,pp3=0;
    var pe1=0,pe2=0,pe3=0;
    var gf1=0, gf2=0, gf3=0;
    var gc1=0, gc2=0, gc3=0;
    var pt1=0, pt2=0,pt3=0;
    

        //alert("Bienvenido"); 
    $("#for1").submit(function (parametro){
        parametro.preventDefault();

       
        d=$("#listaL").val();
        e=$("#listaV").val();
        if(d === e){
            alert("Error un equipo no puede jugar contra si mismo ");
        }
        else
        {
           puntos (); 
        }      
    });
    
    function puntos()
    {
        
        if(d=== 'A' && e==='B')
        { 
            pj1=pj1+1;
            pj2=pj2+1;
            $("#pja").empty();
            $("#pja").append("<td>" + pj1 + "</td>");
            $("#pjb").empty();
            $("#pjb").append("<td>" + pj2 + "</td>");
            
            a=parseInt($("#txtL").val());
            gf1= gf1 + a;
            $("#gfa").empty();
            $("#gfa").append("<td>" + gf1 + "</td>");            
            b=parseInt($("#txtV").val());
            gf2= gf2 + b;
            $("#gfb").empty();
            $("#gfb").append("<td>" + gf2 + "</td>");            
            
            gc1= gc1 + b;
            $("#gca").empty();
            $("#gca").append("<td>" + gc1 + "</td>");
            gc2= gc2 + a;
            $("#gcb").empty();
            $("#gcb").append("<td>" + gc2 + "</td>");
            
            if(a>b)
            {
                pt1= pt1 +3;
                $("#puna").empty();
                $("#puna").append("<td>" + pt1 + "</td>");
                
                pg1=pg1+1;
                pp2=pp2+1;
                $("#pga").empty();
                $("#pga").append("<td>" + pg1 + "</td>");
                $("#ppb").empty();
                $("#ppb").append("<td>" + pp2 + "</td>");
            }
             if(a<b)
            {
                pt2= pt2 +3;
                $("#punb").empty();
                $("#punb").append("<td>" + pt2 + "</td>");
                
                pp1=pp1+1;
                pg2=pg2+1;
                $("#ppa").empty();
                $("#ppa").append("<td>" + pg1 + "</td>");
                $("#pgb").empty();
                $("#pgb").append("<td>" + pp2 + "</td>");
            }
             if(a===b)
            {
                pt1= pt1 +1;
                $("#puna").empty();
                $("#puna").append("<td>" + pt1 + "</td>");
                pt2= pt2 +1;
                $("#punb").empty();
                $("#punb").append("<td>" + pt2 + "</td>");
                
                pe1=pe1+1;
                pe2=pe2+1;
                $("#pea").empty();
                $("#pea").append("<td>" + pe1 + "</td>");
                $("#peb").empty();
                $("#peb").append("<td>" + pe2 + "</td>");
            }
        }
         if(d=== 'A' && e==='C')
        { 
            pj1=pj1+1;
            pj3=pj3+1;
            $("#pja").empty();
            $("#pja").append("<td>" + pj1 + "</td>");
            $("#pjc").empty();
            $("#pjc").append("<td>" + pj3 + "</td>");
            
            a=parseInt($("#txtL").val());
            gf1= gf1 + a;
            $("#gfa").empty();
            $("#gfa").append("<td>" + gf1 + "</td>");            
            b=parseInt($("#txtV").val());
            gf3= gf3 + b;
            $("#gfc").empty();
            $("#gfc").append("<td>" + gf3 + "</td>");            
            
            gc1= gc1 + b;
            $("#gca").empty();
            $("#gca").append("<td>" + gc1 + "</td>");
            gc3= gc3 + a;
            $("#gcc").empty();
            $("#gcc").append("<td>" + gc3 + "</td>");
            
            if(a>b)
            {
                pt1= pt1 +3;
                $("#puna").empty();
                $("#puna").append("<td>" + pt1 + "</td>");
                
                pg1=pg1+1;
                pp3=pp3+1;
                $("#pga").empty();
                $("#pga").append("<td>" + pg1 + "</td>");
                $("#ppc").empty();
                $("#ppc").append("<td>" + pp3 + "</td>");
            }
             if(a<b)
            {
                pt3= pt3 +3;
                $("#punc").empty();
                $("#punc").append("<td>" + pt3 + "</td>");
                
                pp1=pp1+1;
                pg3=pg3+1;
                $("#ppa").empty();
                $("#ppa").append("<td>" + pg1 + "</td>");
                $("#pgc").empty();
                $("#pgc").append("<td>" + pp3 + "</td>");
            }
             if(a===b)
            {
                pt1= pt1 +1;
                $("#puna").empty();
                $("#puna").append("<td>" + pt1 + "</td>");
                pt3= pt3 +1;
                $("#punc").empty();
                $("#punc").append("<td>" + pt3 + "</td>");
                
                pe1=pe1+1;
                pe3=pe3+1;
                $("#pea").empty();
                $("#pea").append("<td>" + pe1 + "</td>");
                $("#pec").empty();
                $("#pec").append("<td>" + pe3 + "</td>");
            }
        }
         if(d=== 'B' && e==='C')
        { 
            pj2=pj2+1;
            pj3=pj3+1;
            $("#pjb").empty();
            $("#pjb").append("<td>" + pj2 + "</td>");
            $("#pjc").empty();
            $("#pjc").append("<td>" + pj3 + "</td>");
            
            a=parseInt($("#txtL").val());
            gf2= gf2 + a;
            $("#gfb").empty();
            $("#gfb").append("<td>" + gf2 + "</td>");            
            b=parseInt($("#txtV").val());
            gf3= gf3 + b;
            $("#gfc").empty();
            $("#gfc").append("<td>" + gf3 + "</td>");            
            
            gc2= gc2 + b;
            $("#gcb").empty();
            $("#gcb").append("<td>" + gc2 + "</td>");
            gc3= gc3 + a;
            $("#gcc").empty();
            $("#gcc").append("<td>" + gc3 + "</td>");
            
            if(a>b)
            {
                pt2= pt2 +3;
                $("#punb").empty();
                $("#punb").append("<td>" + pt2 + "</td>");
                
                pg2=pg2+1;
                pp3=pp3+1;
                $("#pgb").empty();
                $("#pgb").append("<td>" + pg2 + "</td>");
                $("#ppc").empty();
                $("#ppc").append("<td>" + pp3 + "</td>");
            }
             if(a<b)
            {
                pt3= pt3 +3;
                $("#punc").empty();
                $("#punc").append("<td>" + pt3 + "</td>");
                
                pp2=pp2+1;
                pg3=pg3+1;
                $("#ppb").empty();
                $("#ppb").append("<td>" + pg2 + "</td>");
                $("#pgc").empty();
                $("#pgc").append("<td>" + pp3 + "</td>");
            }
             if(a===b)
            {
                pt2= pt2 +1;
                $("#punb").empty();
                $("#punb").append("<td>" + pt2 + "</td>");
                pt3= pt3 +1;
                $("#punc").empty();
                $("#punc").append("<td>" + pt3 + "</td>");
                
                pe2=pe2+1;
                pe3=pe3+1;
                $("#pea").empty();
                $("#pea").append("<td>" + pe2 + "</td>");
                $("#pec").empty();
                $("#pec").append("<td>" + pe3 + "</td>");
            }
        }
        //---------------------------------------------------------------------------------------------
        if(d=== 'B' && e==='A')
        { 
            pj1=pj1+1;
            pj2=pj2+1;
            $("#pja").empty();
            $("#pja").append("<td>" + pj1 + "</td>");
            $("#pjb").empty();
            $("#pjb").append("<td>" + pj2 + "</td>");
            
            b=parseInt($("#txtL").val());
            gf1= gf1 + b;
            $("#gfa").empty();
            $("#gfa").append("<td>" + gf1 + "</td>");            
            a=parseInt($("#txtV").val());
            gf2= gf2 + a;
            $("#gfb").empty();
            $("#gfb").append("<td>" + gf2 + "</td>");            
            
            gc1= gc1 + a;
            $("#gca").empty();
            $("#gca").append("<td>" + gc1 + "</td>");
            gc2= gc2 + b;
            $("#gcb").empty();
            $("#gcb").append("<td>" + gc2 + "</td>");
            
            if(b>a)
            {
                pt1= pt1 +3;
                $("#puna").empty();
                $("#puna").append("<td>" + pt1 + "</td>");
                
                pg1=pg1+1;
                pp2=pp2+1;
                $("#pga").empty();
                $("#pga").append("<td>" + pg1 + "</td>");
                $("#ppb").empty();
                $("#ppb").append("<td>" + pp2 + "</td>");
            }
             if(b<a)
            {
                pt2= pt2 +3;
                $("#punb").empty();
                $("#punb").append("<td>" + pt2 + "</td>");
                
                pp1=pp1+1;
                pg2=pg2+1;
                $("#ppa").empty();
                $("#ppa").append("<td>" + pg1 + "</td>");
                $("#pgb").empty();
                $("#pgb").append("<td>" + pp2 + "</td>");
            }
             if(a===b)
            {
                pt1= pt1 +1;
                $("#puna").empty();
                $("#puna").append("<td>" + pt1 + "</td>");
                pt2= pt2 +1;
                $("#punb").empty();
                $("#punb").append("<td>" + pt2 + "</td>");
                
                pe1=pe1+1;
                pe2=pe2+1;
                $("#pea").empty();
                $("#pea").append("<td>" + pe1 + "</td>");
                $("#peb").empty();
                $("#peb").append("<td>" + pe2 + "</td>");
            }
        }
         if(d=== 'C' && e==='A')
        { 
            pj1=pj1+1;
            pj3=pj3+1;
            $("#pja").empty();
            $("#pja").append("<td>" + pj1 + "</td>");
            $("#pjc").empty();
            $("#pjc").append("<td>" + pj3 + "</td>");
            
            b=parseInt($("#txtL").val());
            gf1= gf1 + b;
            $("#gfa").empty();
            $("#gfa").append("<td>" + gf1 + "</td>");            
            a=parseInt($("#txtV").val());
            gf3= gf3 + a;
            $("#gfc").empty();
            $("#gfc").append("<td>" + gf3 + "</td>");            
            
            gc1= gc1 + a;
            $("#gca").empty();
            $("#gca").append("<td>" + gc1 + "</td>");
            gc3= gc3 + b;
            $("#gcc").empty();
            $("#gcc").append("<td>" + gc3 + "</td>");
            
            if(b>a)
            {
                pt1= pt1 +3;
                $("#puna").empty();
                $("#puna").append("<td>" + pt1 + "</td>");
                
                pg1=pg1+1;
                pp3=pp3+1;
                $("#pga").empty();
                $("#pga").append("<td>" + pg1 + "</td>");
                $("#ppc").empty();
                $("#ppc").append("<td>" + pp3 + "</td>");
            }
             if(b<a)
            {
                pt3= pt3 +3;
                $("#punc").empty();
                $("#punc").append("<td>" + pt3 + "</td>");
                
                pp1=pp1+1;
                pg3=pg3+1;
                $("#ppa").empty();
                $("#ppa").append("<td>" + pg1 + "</td>");
                $("#pgc").empty();
                $("#pgc").append("<td>" + pp3 + "</td>");
            }
             if(a===b)
            {
                pt1= pt1 +1;
                $("#puna").empty();
                $("#puna").append("<td>" + pt1 + "</td>");
                pt3= pt3 +1;
                $("#punc").empty();
                $("#punc").append("<td>" + pt3 + "</td>");
                
                pe1=pe1+1;
                pe3=pe3+1;
                $("#pea").empty();
                $("#pea").append("<td>" + pe1 + "</td>");
                $("#pec").empty();
                $("#pec").append("<td>" + pe3 + "</td>");
            }
        }      
    }
});


