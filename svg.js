
//Main slider
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
    for(let i = 0; i < pages.length; i++)
    {
        let animations = pages[i].getElementsByTagName("animateTransform");
        for(let j = 0; j < animations.length; j++)
        {
            if(animations[j].id == "hideAnimationPrev" || animations[j].id == "hideAnimationNext")
            {
                animations[j].addEventListener("end",function (evt) {
                    console.log("animation hide end");
                    pages[i].style.display = "none";
                })
            }
            else if(animations[j].id == "showAnimationPrev" || animations[j].id == "showAnimationNext")
            {
                animations[j].addEventListener("end",function (evt) {
                    console.log("animation show end");
                    pages[i].style.display = "initial";
                })
            }

        }
    }
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

    oldPageElementHideAnimation.beginElement();
    newPageElementShowAnimation.beginElement();
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

    oldPageElementHideAnimation.beginElement();
    newPageElementShowAnimation.beginElement();
}

function BtnNext_clicked(){
    console.log("BtnNext clicked");
    NextPage();
}

function BtnPrev_clicked(){
    console.log("BtnPrev clicked");
    PrevPage();
}


//GameList
function BtnNextGame_clicked(){
    console.log("BtnNextGame clicked");
}

//On load
window.onload = function(){
    InitializePager();
};