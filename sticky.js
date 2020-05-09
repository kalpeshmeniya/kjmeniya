window.onscroll = function() 
{myFunction();};
const navbar = document.getElementById("menu-navigation");
const sticky = navbar.offsetTop;
function myFunction() 
{ if (window.pageYOffset >= sticky)
{ navbar.classList.add("sticky");}
else
{
navbar.classList.remove("sticky");
}
}
