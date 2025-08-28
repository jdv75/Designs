// Navbar

document.querySelectorAll(".item").forEach((item, index) => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".item").forEach((itemprev, index) => {
            itemprev.classList.remove("selected");
        });
        item.classList.toggle("selected");
    })
})

// Dashboard Navbar

let temp = 0;
let hasSelect = false;
const Items = document.querySelectorAll(".in");

Items.forEach((item, index) => {
    item.addEventListener("click", () => {
        Items.forEach((itemprev, index) => {
            itemprev.classList.remove("select");
        });
        item.classList.toggle("select");
    })
})

document.querySelectorAll(".arr").forEach((item, index) => {
    item.addEventListener("click", () => {

        if (hasSelect) {
            Items.forEach((item2, index) => {
                if (item2.classList.contains("select")) {
                    temp = index;
                    item2.classList.remove("select");
                }
            });


            if (item.id === "left") {
                Items[temp].classList.remove("select");
                if (temp === 0) {
                    Items[Items.length-1].classList.add("select");
                } else {
                    Items[temp-1].classList.add("select")
                }

            } else if (item.id === "right") {
                if (temp === Items.length-1) {
                    Items[0].classList.add("select");
                } else {
                    Items[temp+1].classList.add("select")
                }
            }
        } else {
            Items[0].classList.add("select");
            hasSelect = true;
        }
    })
  
})

