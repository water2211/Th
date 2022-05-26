
function setData() {
  var name = req.body.name;
  var phone = req.body.phone;
  var address= req.body.address;
  var district = req.body.district;
  var amphoe = req.body.amphoe;
  var province = req.body.province;
  var zipcode = req.body.zipcode;
  var cusrequire = req.body.cusrequire;

  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem("phone", document.getElementById("phone").value);
  localStorage.setItem("address", document.getElementById("address").value);
  localStorage.setItem("district", document.getElementById("district").value);
  localStorage.setItem("amphoe", document.getElementById("amphoe").value);
  localStorage.setItem("province", document.getElementById("province").value);
  localStorage.setItem("zipcode", document.getElementById("zipcode").value);
  localStorage.setItem("cusrequire", document.getElementById("cusrequire").value);
}


function setHTML() {
  document.getElementById("name").innerHTML = localStorage.getItem("name");

  document.getElementById("phone").innerHTML = localStorage.getItem("phone");

  document.getElementById("address").innerHTML = localStorage.getItem("address");

  document.getElementById("district").innerHTML = localStorage.getItem("district");

  document.getElementById("amphoe").innerHTML = localStorage.getItem("amphoe");

  document.getElementById("province").innerHTML = localStorage.getItem("province");

  document.getElementById("zipcode").innerHTML = localStorage.getItem("zipcode");

  document.getElementById("cusrequire").innerHTML = localStorage.getItem("cusrequire");
}
