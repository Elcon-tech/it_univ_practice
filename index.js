document.getElementById("infile").addEventListener("change", function(e) {
    let file = e.target.files;

    let reader = new FileReader();

    let mradio = document.getElementsByName("t");
    let mojicode = "";
    for (let i = 0; i < mradio.length; i++) {
        if (mradio[i].checked) {
            mojicode = mradio[i].value;
        }
    }
    // console.log(mojicode);

    if (mojicode == "s") {
        reader.readAsText(file[0], "Shift_JIS");
    } else {
        reader.readAsText(file[0]);
    }

    reader.onload = function(e) {
        document.getElementById("outarea").value = reader.result;
        let outtxt = "";
        let arraytxt = reader.result.split("\n");
        // console.log(arraytxt);
        for (let i = 0; i < arraytxt.length; i++) {
            if (i == 2) {
                outtxt += "<b>" + arraytxt[i] + "</b><br>";
            } else {
                outtxt += arraytxt[i] + "<br>";
            }
        }
        document.getElementById("outtxt").innerHTML = outtxt;
    }
}, false);
