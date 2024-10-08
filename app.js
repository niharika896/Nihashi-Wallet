const kp = document.getElementById("kp");
const np = document.getElementById("np");
let ka = 0;
let na = 0;

window.onload = function() {
    if (localStorage.getItem('ka')) {
        ka = Number(localStorage.getItem('ka'));
        document.getElementById('khushi').innerText = ka;
    }
    if (localStorage.getItem('na')) {
        na = Number(localStorage.getItem('na'));
        document.getElementById('niharika').innerText = na; 
    }
};

document.getElementById("submit").addEventListener('click', () => {
    let amount = Number(document.getElementById("money").value);
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
    document.getElementById("money").value=none;
});

kp.addEventListener('click', () => {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup").dataset.source = "kp";
});

np.addEventListener('click', () => {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup").dataset.source = "np";
});
