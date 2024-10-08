const kp = document.getElementById("kp");
const np = document.getElementById("np");
let ka = 0;
let na = 0;


document.getElementById("submit").addEventListener('click', () => {
        let amount = Number(document.getElementById("money").value);
        if(isNaN(amount)){
            alert("please enter valid input")
        }
        else{

            document.getElementById("popup").style.display = "none";
            
            if (document.getElementById("popup").dataset.source === "kp") {
                ka += amount;
                localStorage.setItem('ka', ka);
                document.getElementById("khushi").innerText = `${ka}`;
            } else if (document.getElementById("popup").dataset.source === "np") {
                na += amount;
                localStorage.setItem('na', na);
                document.getElementById("niharika").innerText = `${na}`;
            }
            
            if (ka >= na) {
                ka -= na;
                na = 0;
            } else {
                na -= ka;
                ka = 0;
            }
            document.getElementById("khushi").innerText = ka;
            document.getElementById("niharika").innerText = na;
            localStorage.setItem('ka', ka);
            localStorage.setItem('na', na);
        }
}
);

kp.addEventListener('click', () => {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup").dataset.source = "kp";
});

np.addEventListener('click', () => {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup").dataset.source = "np";
});
window.onload = function() {
    if (localStorage.getItem('ka')) {
        ka = Number(localStorage.getItem('ka'));
        if(isNaN(ka)){
            ;
        }
        else{
            document.getElementById('khushi').innerText = ka;
        }
    }
    if (localStorage.getItem('na')) {
        na = Number(localStorage.getItem('na'));
        if(isNaN(na)){
            ;
        }
        else{
            document.getElementById('niharika').innerText = na; 

        }
    }
};
