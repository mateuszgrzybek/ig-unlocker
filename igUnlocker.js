var body = document.getElementsByTagName("body");
var postPrefix = "www.instagram.com/p/";
var gotCleaned = false;
var logInLayer;
var posts;

function unlockIg() {
    if (body[0].style.overflow == "hidden") {
        body[0].style.overflow = "scroll";
        logInLayer = body[0].lastChild;
        body[0].removeChild(logInLayer);
        gotCleaned = true;
    }

    if (gotCleaned) {
        posts = Array.from(document.getElementsByTagName("a"));
        posts.forEach(post => {
            if (post.href.includes("www.instagram.com/p/")) {
                post.onclick = function() {
                    window.open(post.href);
                }
            }
        });
    }
}

window.setInterval(unlockIg, 1000);
