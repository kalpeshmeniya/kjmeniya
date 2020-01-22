function myFunction()
{
	var strurl=window.location.href;
	var url = new URL(strurl);
	var qry = url.searchParams.get("q");
	var logo=document.getElementById("logo");
	var ser=document.getElementById("ser");
	var submit=document.getElementById("submit");
	var gsbox=document.getElementById("gsbox");
	var submitl=document.getElementById("submitl");
	var res=document.getElementById("result");
	var queryt=document.getElementById("queryt");
	var container=document.getElementById("container");
	if(qry.length>0)
	{
		queryt.value=qry;
		logo.style="float:left;width:150px !important;margin-top:15px;";
		ser.style="float:none";
		gsbox.style="display:block;float:left;";
		res.style="display:block;margin-top:60px;margin-bottom:20px;margin-left:5px;margin-right:5px;";
		submit.style="display:none;background:#4285f4;color:#fff;";
		submitl.style.display="none";
		container.style="top:0;";
	}
}
