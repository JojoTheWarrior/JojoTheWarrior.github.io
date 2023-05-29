function addHover(elem, currentActive){
    console.log(elem + ", " + currentActive);
    if (elem == currentActive) return;

    // otherwise, we shove this code in
    let div = document.getElementById(elem + "-nav");

    if (elem == "home"){
        div.innerHTML = (
            <AiFillHome />
        )
    } else if (elem == "projects"){

    } else if (elem == "portfolio"){

    } else if (elem == "photos"){

    }
}