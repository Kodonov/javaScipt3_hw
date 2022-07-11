// $('.number').live('keydown', function() {
//     const checkingRegExp = new RegExp(/^(\d){1,13}$/g);
//     return $(this).val().match(checkingRegExp) !== null;
// });


const InnInput = document.querySelector(".InnInput")
const InnCheck = document.getElementsByClassName("InnCheck");
const InnResult = document.querySelector(".InnResult");

const InnValidate = /0\d{13}$|1\d{13}$/;

InnCheck[0].addEventListener("click", () => {
    if (InnValidate.test(InnInput.value)){
        InnResult.innerText = "Правильно";
        InnResult.style.color = "green";
    }else{
        InnResult.innerText = "Неправильно";
        InnResult.style.color = "red";
    }
});

const block = document.querySelector(".blockk")

let num = 0;
const plus = function () {
	num++;
	block.style.top = `${num}px`;
	if (num < 150) {
		return plus();
	} else if (num > 1206) {
		num = 0;
	} else {
		num += 150;
	}
	

}
block.addEventListener("click", plus)