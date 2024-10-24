// jquery版本
$("#add").click(function () {
    const value = Number($("#total").text()) + 1
    $("#total").text(value);
  });
  
  // js版本
  //
  // document.querySelector("#add").addEventListener("click", function () {
  //   document.querySelector("#total").innerText = Number(document.querySelector("#total").innerText) + 1
  // });
  