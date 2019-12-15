function Browser() {// CHROME
    let regExpMozilla = /Mozilla/;
    let regExpChrome = /Chrome/;
    if (regExpChrome.test(navigator.userAgent) && regExpMozilla.test(navigator.userAgent)) {
        return "Opera";
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'Chrome';
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
        return 'Firefox';
    }
    else if (navigator.userAgent.indexOf("MSIE") != -1 ) {
        return "IE"
    }
    else if (navigator.userAgent.indexOf("Edge") != -1 ) {
        return "Edge";
    }
    else if (navigator.userAgent.indexOf("Safari") != -1 ) {
        return "Safari";
    }
    // OTHERS
    else {
        return "Other";
    }
}
function shouldRunMinimal() {
    return (Browser() == 'Opera');
}
function Hide(element) {
    element.style.display = "none";
}
function Show(element) {
    element.style.display = "initial";
}
//Main slider
var page = -1;
var pagerBtnDisabled = true;
function InitializePager() {
    let pages = document.getElementsByClassName("page");
    if(pages.length == 0)
        return;
    else
        page = parseInt(pages.length) - 1;

    for(let i = 0; i < pages.length; i++)
    {
        if(page === i) Show(pages[i]);
        else Hide(pages[i]);
    }
    document.getElementById("BtnNext").addEventListener("click",BtnNext_clicked);
    document.getElementById("BtnPrev").addEventListener("click",BtnPrev_clicked);
    if(!shouldRunMinimal())
        for(let i = 0; i < pages.length; i++)
        {
            let animations = pages[i].getElementsByTagName("animateTransform");
            for(let j = 0; j < animations.length; j++)
            {
                if(animations[j].id == "hideAnimationPrev" || animations[j].id == "hideAnimationNext")
                {
                    animations[j].addEventListener("end",function (evt) {
                        console.log("animation hide end");
                        Hide(pages[i]);
                        pagerBtnDisabled = false;
                    })
                }
                else if(animations[j].id == "showAnimationPrev" || animations[j].id == "showAnimationNext")
                {
                    animations[j].addEventListener("end",function (evt) {
                        console.log("animation show end");
                        Show(pages[i]);
                        pagerBtnDisabled = false;
                    })
                }

            }
        }
    pagerBtnDisabled = false;
}

function NextPage() {
    if(!shouldRunMinimal())
        pagerBtnDisabled = true;
    let pages = document.getElementsByClassName("page");
    let oldPageElement = pages[page];
    page++;
    if(page >= pages.length)
        page = 0;
    let newPageElement = pages[page];
    if(shouldRunMinimal())
    {
        Hide(oldPageElement);
        Show(newPageElement);
    }
    else
    {
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

        Show(oldPageElement);
        Show(newPageElement);

        oldPageElementHideAnimation.beginElement();
        newPageElementShowAnimation.beginElement();
    }
}
function PrevPage() {
    if(!shouldRunMinimal())
        pagerBtnDisabled = true;
    let pages = document.getElementsByClassName("page");
    let oldPageElement = pages[page];
    page--;
    if(page < 0)
        page = parseInt(pages.length) - 1;
    let newPageElement = pages[page];
    if(shouldRunMinimal())
    {
        Hide(oldPageElement);
        Show(newPageElement);
    }
    else
    {
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
        Show(oldPageElement);
        Show(newPageElement);

        oldPageElementHideAnimation.beginElement();
        newPageElementShowAnimation.beginElement();
    }
}

function BtnNext_clicked(){
    if(pagerBtnDisabled)
        return;
    console.log("BtnNext clicked");
    NextPage();
}

function BtnPrev_clicked(){
    if(pagerBtnDisabled)
        return;
    console.log("BtnPrev clicked");
    PrevPage();
}


//GameList
var game = -1;
function InitializeGamePager() {
    let games = document.getElementsByClassName("game");
    if(games.length < 1)
        return;
    game = parseInt(games.length) - 1;
    document.getElementById("BtnNextGame").addEventListener("click",BtnNextGame_clicked);
    UpdateGame();
}
function BtnNextGame_clicked(){
    let games = document.getElementsByClassName("game");
    if(games.length < 1)
        return;
    game ++;
    if(game >= games.length)
        game = 0;
    UpdateGame();
    console.log("BtnNextGame clicked");
}
function UpdateGame() {
    let games = document.getElementsByClassName("game");
    if(games.length < 1)
        return;
    for(let i = 0; i < game; i++)
        Hide(games[i]);
    Show(games[game]);
    for(let i = game+1; i < games.length; i++)
        Hide(games[i]);
}

//On load
function Window_loaded(){
    console.log("Browser: "+Browser());
    if(shouldRunMinimal())
        console.log("Run minimal mode");
    InitializePager();
    InitializeGamePager();
};
window.addEventListener("load",Window_loaded);