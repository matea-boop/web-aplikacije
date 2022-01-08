/*gallery*/

let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;
let getLatestOpenedTxt;
if(galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImageUrlPos = getFullImgUrl.split("/Images/");
            let setNewImgUrl = getImageUrlPos[1].replace('")', '');

            let getText1 = getElementCss.getPropertyValue("content");
            let getText = getText1.replace(/"|_/g, '');

            getLatestOpenedImg = index + 1;
            getLatestOpenedTxt = getText;

            let container = document.body;
            let newImgWindow = document.createElement("figure");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "Images/" + setNewImgUrl);
            newImg.setAttribute("id", "current-img");

            let newText = document.createElement("figcaption");
            newText.setAttribute("id", "current-cap");
            newText.setAttribute("class", "img-cap");
            newText.style.width = (newImg.width - 20) + "px";
            newImgWindow.appendChild(newText);
            let txt = document.createTextNode(getText);
            newText.appendChild(txt);

            /*if(getLatestOpenedImg === 2){
                let txt = document.createTextNode("Greece experienced the worst forest fires the country had seen since 2007, after record-breaking temperatures and strong winds caused fires to destroy homes and crops, killing three. The World Meteorological Organisation linked the fires directly with global warming.");
                newText.appendChild(txt);
            } else if(getLatestOpenedImg === 3){
                let txt = document.createTextNode("mjau");
                newText.appendChild(txt);
            }*/
            newImg.onload = function() {
                //let imgWidth = this.width;
                //let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
                
                //console.log(imgWidth);
                //console.log(windowWidth);
                //console.log(calcImgToEdge);

                let newNextBtn = document.createElement("a");
                let btnNextTxt = document.createTextNode(" ❯");
                newNextBtn.appendChild(btnNextTxt);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(1)");
                //newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;"

                let newPrevBtn = document.createElement("a");
                let btnPrevTxt = document.createTextNode("❮ ");
                newPrevBtn.appendChild(btnPrevTxt);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(0)");
                //newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;"
            }
        }
    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-prev").remove();
    document.querySelector(".img-btn-next").remove();
}

function changeImg(changeDir) {
    document.querySelector("#current-img").remove();
    document.querySelector("#current-cap").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);
    
    
    let newText = document.createElement("figcaption");
    getImgWindow.appendChild(newText);

    let calcNewImg;

    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if(calcNewImg > galleryImages.length) {
            calcNewImg = 1;
        }
    } else if(changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if(calcNewImg < 1) {
            calcNewImg = galleryImages.length;
        }
    }
 
    newImg.setAttribute("src", "Images/GALLERY" + calcNewImg + ".webp");
    newImg.setAttribute("id", "current-img");
    newText.setAttribute("id", "current-cap");
    let txt = document.createTextNode(getLatestOpenedTxt);
    newText.appendChild(txt);

    getLatestOpenedImg = calcNewImg;
    /*newImg.onload = function() {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;
        
        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: " + calcImgToEdge + "px;"
        
        let prevBtn = document.querySelector(".img-btn-prev");
        prevBtn.style.cssText = "left: " + calcImgToEdge + "px;"
    }*/
}