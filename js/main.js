const boxes = document.querySelectorAll(".box"), image = document.querySelector(".image");
console.log(boxes, image);

boxes.forEach((box) => {
    box.addEventListener("dragover", (e) => {
        console.log("draggin");
        e.preventDefault();
        box.classList.add("hovered");
    })

    box.addEventListener("dragleave", () => {
        console.log("dragleave");
        box.classList.remove("hovered");
    })

    box.addEventListener("drop", () => {
        console.log("drop");
        box.appendChild(image);
        box.classList.remove("hovered");
    })
})

// List
function slist(target) {
    let items = target.getElementsByTagName("li"), current = null;

    for (let index of items) {
        index.draggable = true;

        index.ondragstart = e => {
            current = index;
        };

        index.ondragover = e => e.preventDefault();

        index.ondrop = e => {
            e.preventDefault();
            if (index != current) {
                let currentpos = 0, droppedpos = 0;
                for (let it = 0; it < items.length; it++) {
                    if (current == items[it]) { currentpos = it; }
                    if (index == items[it]) { droppedpos = it; }
                }
                if (currentpos < droppedpos) {
                    index.parentNode.insertBefore(current, index.nextSibling);
                } else {
                    index.parentNode.insertBefore(current, index);
                }
            }
        }
    }
}

slist(document.querySelector("#sortableList"));