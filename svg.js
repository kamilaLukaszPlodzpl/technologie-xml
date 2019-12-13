var page = -1;
function InitializePager() {
    let pages = document.getElementsByClassName("page");
    if(pages.length == 0)
        return;
    else
        page = parseInt(pages.length) - 1;

    for(let i = 0; i < pages.length; i++)
    {
        if(page === i) pages[i].style.display = "initial";
        else pages[i].style.display = "none";

        let animations = pages[i].getElementsByTagName("animate");

    }
    document.getElementById("BtnNext").addEventListener("click",BtnNext_clicked);
    document.getElementById("BtnPrev").addEventListener("click",BtnPrev_clicked);
}

function NextPage() {
    let pages = document.getElementsByClassName("page");
    let oldPageElement = pages[page];
    page++;
    if(page >= pages.length)
        page = 0;
    let newPageElement = pages[page];
    let oldPageElementHideAnimation = oldPageElement.getElementsByTagName("animateTransform");
    for(let i = 0; i < oldPageElementHideAnimation.length; i++)
    {
        if(oldPageElementHideAnimation[i].id == "hideAnimationNext")
        {
            oldPageElementHideAnimation = oldPageElementHideAnimation[i];
            break;
        }
    }
    let newPageElementShowAnimation = newPageElement.getElementsByTagName("animateTransform");
    for(let i = 0; i < newPageElementShowAnimation.length; i++)
    {
        if(newPageElementShowAnimation[i].id == "showAnimationNext")
        {
            newPageElementShowAnimation = newPageElementShowAnimation[i];
            break;
        }
    }
    oldPageElement.style.display = "initial";
    newPageElement.style.display = "initial";
    oldPageElementHideAnimation.onend = function(){
        oldPageElement.style.display = "none";
        oldPageElementHideAnimation.onend = function () {}
    };
    newPageElementShowAnimation.onend = function(){
        newPageElement.style.display = "initial";
        newPageElementShowAnimation.onend = function () {}
    };
    oldPageElementHideAnimation.beginElement();
    console.log(oldPageElementHideAnimation);
    newPageElementShowAnimation.beginElement();
    console.log(newPageElementShowAnimation);
}
function PrevPage() {
    let pages = document.getElementsByClassName("page");
    let oldPageElement = pages[page];
    page--;
    if(page < 0)
        page = parseInt(pages.length) - 1;
    let newPageElement = pages[page];
    let oldPageElementHideAnimation = oldPageElement.getElementsByTagName("animateTransform");
    for(let i = 0; i < oldPageElementHideAnimation.length; i++)
    {
        if(oldPageElementHideAnimation[i].id == "hideAnimationPrev")
        {
            oldPageElementHideAnimation = oldPageElementHideAnimation[i];
            break;
        }
    }
    let newPageElementShowAnimation = newPageElement.getElementsByTagName("animateTransform");
    for(let i = 0; i < newPageElementShowAnimation.length; i++)
    {
        if(newPageElementShowAnimation[i].id == "showAnimationPrev")
        {
            newPageElementShowAnimation = newPageElementShowAnimation[i];
            break;
        }
    }
    oldPageElement.style.display = "initial";
    newPageElement.style.display = "initial";
    oldPageElementHideAnimation.onend = function(){
        oldPageElement.style.display = "none";
        oldPageElementHideAnimation.onend = function () {}
    };
    newPageElementShowAnimation.onend = function(){
        newPageElement.style.display = "initial";
        newPageElementShowAnimation.onend = function () {}
    };
    oldPageElementHideAnimation.beginElement();
    console.log(oldPageElementHideAnimation);
    newPageElementShowAnimation.beginElement();
    console.log(newPageElementShowAnimation);
}

function BtnNext_clicked(){
    console.log("BtnNext clicked");
    NextPage();
}

function BtnPrev_clicked(){
    console.log("BtnPrev clicked");
    PrevPage();
}

window.onload = function(){
    InitializePager();
};
