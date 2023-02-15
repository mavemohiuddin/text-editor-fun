let screen = document.querySelector("textarea");

document.querySelectorAll("[data-button-group]").forEach(item => {
    item.classList.add("cursor-pointer")
    item.addEventListener("click", () => {
        document.querySelector("#blink").classList.add("bg-red-600");
        setTimeout(() => {
            document.querySelector("#blink").classList.remove("bg-red-600");
        }, 300)
    })
})

document.querySelectorAll("[data-button-group='1']").forEach(item => {
    item.addEventListener("click", () => {
        setTimeout(() => {
            document.querySelector("#light1").classList.add("bg-red-600");
        }, 200)
        setTimeout(() => {
            document.querySelector("#light1").classList.remove("bg-red-600");
        }, 800)
    })
})

document.querySelectorAll("[data-button-group='2']").forEach(item => {
    item.addEventListener("click", () => {
        setTimeout(() => {
            document.querySelector("#light2").classList.add("bg-green-600");
        }, 200)
        setTimeout(() => {
            document.querySelector("#light2").classList.remove("bg-green-600");
        }, 800)
    })
})

document.querySelectorAll("[data-button-group='3']").forEach(item => {
    item.addEventListener("click", () => {
        setTimeout(() => {
            document.querySelector("#light3").classList.add("bg-blue-600");
        }, 200)
        setTimeout(() => {
            document.querySelector("#light3").classList.remove("bg-blue-600");
        }, 800)
    })
})

document.querySelectorAll("[data-button-group]").forEach(item => {
    item.addEventListener("click", () => {
        let btn_grp = item.getAttribute("data-button-group");
        let id = item.getAttribute("id");

        if (btn_grp == "2") {
            remove(id, ["text-red-600", "text-green-600", "text-blue-600", "text-orange-600"]);
            document.querySelectorAll("[data-button-group='2']").forEach(item => {
                if (item.getAttribute("id") != id) {
                    item.classList.remove("border-2");
                    item.classList.remove("border-white");
                }
            })
        }
        if (btn_grp == "3") {
            remove(id, ["text-left", "text-right", "text-center", "text-justify"]);
            document.querySelectorAll("[data-button-group='3']").forEach(item => {
                if (item.getAttribute("id") != id) {
                    item.classList.remove("border-2");
                    item.classList.remove("border-white");
                }
            })
        }
        screen.classList.toggle(id);
        item.classList.toggle("border-2");
        item.classList.toggle("border-white");
    })
})

const remove = (id, arr) => {
    for (i in arr) {
        if (arr[i] != id) {
            screen.classList.remove(arr[i]);
            console.log(arr[i]);
        }
    }
}

document.querySelectorAll(".disco").forEach(disco => {
    for (let i = 0; i < 150; i++) {
        let cube = document.createElement("div");
        cube.classList.add("bg-gray-900");
        cube.classList.add("z-10");
        cube.style.cssText = "margin-left: 1px;margin-bottom: 1px;position: relative;height: 92%";
        disco.appendChild(cube);
    }
});

