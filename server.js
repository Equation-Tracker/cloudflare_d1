const out = document.getElementById('out')

let res = DB.prepare("SELECT * FROM user")

out.innerText = res.json()