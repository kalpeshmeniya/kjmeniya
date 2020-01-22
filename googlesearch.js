window.onload = function() {myFunction();};
       function myFunction()
       {
         var strurl=window.location.href;
         var url = new URL(strurl);
         var qry = url.searchParams.get(&quot;q&quot;);
         var logo=document.getElementById(&quot;logo&quot;);
     	 var ser=document.getElementById(&quot;ser&quot;);
         var submit=document.getElementById(&quot;submit&quot;);
     	 var gsbox=document.getElementById(&quot;gsbox&quot;);
     	 var submitl=document.getElementById(&quot;submitl&quot;);
       	 var res=document.getElementById(&quot;result&quot;);
     	 var queryt=document.getElementById(&quot;queryt&quot;);
       	 var container=document.getElementById(&quot;container&quot;);
         if(qry.length&gt;0)
         {
     		queryt.value=qry;
     		logo.style=&quot;float:left;width:150px !important;margin-top:15px;&quot;;
     		ser.style=&quot;float:none&quot;;
     		gsbox.style=&quot;display:block;float:left;&quot;;
         	res.style=&quot;display:block;margin-top:60px;margin-bottom:20px;margin-left:5px;margin-right:5px;&quot;;
     		submit.style=&quot;display:none;background:#4285f4;color:#fff;&quot;;
     		submitl.style.display=&quot;none&quot;;
       		container.style=&quot;top:0;&quot;;
         }
       }
