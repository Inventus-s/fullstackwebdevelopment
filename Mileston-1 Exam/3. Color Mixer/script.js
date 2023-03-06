let mixColor = document.getElementById("mixColor");
mixColor.addEventListener("click", () => {
    const color1 = document.getElementById("color1").value.toLowerCase();
    const color2 = document.getElementById("color2").value.toLowerCase();
    let result ;

    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    result = "Purple";
                    break;
                case "yellow":
                    result = "Orange";
                    break;
                default:
                    alert("Invalid color combination");
            }
            break;

        case "blue":
            switch (color2) {
                case "red":
                    result = "Purple";
                    break;
                case "yellow":
                    result = "green";
                    break;
                default:
                    result = "Invalid color combination";
            }
            break;

        case "yellow":
            switch (color2) {
                case "red":
                    result = "orange";
                    break;
                case "blue":
                    result = "green";
                    break;
                default:
                    alert("Invalid color combination");
            }
            break;
    
        default:
            alert("Invalid color combination")
            return;
    }
    document.getElementById('result').innerText = result;
});     
