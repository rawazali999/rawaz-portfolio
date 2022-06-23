function openSideNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("open").style.marginLeft = "250px";
  document.getElementById("open").style.display = "none";
  document.getElementById("content").style.marginLeft = "260px";
  document.getElementById("content").style.marginTop = "20px";



}

function closeSideNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("open").style.marginLeft = "0px";
  document.getElementById("open").style.display = "block";
  document.getElementById("content").style.marginLeft = "10px";
  document.getElementById("content").style.marginTop = "0";


}