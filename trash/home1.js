const observer = new IntersectionObserverEntry(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".box1")[0].classList.add("fadeInRight");
        }
    })
})

observer.observe(document.querySelector(".container"));