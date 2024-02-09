  const btn = document.querySelector("#btn_generate");
  const resume = document.querySelector("#third_field");
  const check = document.querySelector("#domain_check");

  btn.addEventListener("click", () => {
    let field_1 = document.querySelector("#first_field");
    let field_2 = document.querySelector("#second_field");
    let field_1_arr = field_1.value.split("\n");
    let field_2_arr = field_2.value.split("\n");
    if (check.checked) {
      field_1_arr = delateDomain(field_1_arr);
    }

    let y = "";
    for (let i = 0; i < field_1_arr.length; i++) {
      let z =
        "Redirect 301 " +
        field_1_arr[i].trim() +
        " " +
        field_2_arr[i].trim() +
        "\n";
      y += z;
    }
    resume.innerHTML = y;
  });




  function delateDomain(arr) {
    let newArr = [];
    arr.forEach((element) => {
      const regex = /(?<!\/)\/(?!\/)/;
      let index = element.match(regex).index;
      let el = element.slice(index);
      newArr.push(el);
    });
    return newArr;
  }





  