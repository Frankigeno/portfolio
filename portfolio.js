let imageMainIndex;
let isViewerShwn = false;

function showImage(imageNumber)
{
    document.getElementById("img-viewer").src = "/display_media/result/" + imageMainIndex[imageNumber]["image"];
    document.getElementById("images-viewer-container").style.scale = "100%";
    document.getElementById("camera-body").innerHTML = imageMainIndex[imageNumber]["camera"];
    document.getElementById("camera-lens").innerHTML = imageMainIndex[imageNumber]["lens"];
}

function hideImage()
{
    document.getElementById("img-viewer").src = "";
    document.getElementById("images-viewer-container").style.scale = "0%";
}

function setLink(imageNumber)
{
    if (!window.location.href.includes("?image="))
    {
        history.replaceState({}, '', window.location.href + '?image=' + imageNumber);
    }
    else
    {
        if (imageNumber == -1)
        {
            history.replaceState({}, '', window.location.href.split("?")[0])
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function appendImages(imageIndex)
{
    imageMainIndex = imageIndex;

    for (let i = imageIndex.length - 1; i >= 0; i--)
    {
        let element = imageIndex[i];
        let imageElement = document.createElement("img");
        
        imageElement.src = "/display_media/result/" + element["image"];
        imageElement.loading = "lazy";

        imageElement.onclick = () => {
            setLink(i);
        };
        
        let imageContainer = document.createElement("div");
        imageContainer.className = "image-element";
        imageContainer.appendChild(imageElement);
        document.getElementById("image-container").appendChild(imageContainer);
        await sleep(100);
    }
}

fetch('./display_media/index.json')
    .then((response) => response.json())
    .then((json) => appendImages(json));

setInterval(() => {
    let url = new URL(window.location.href);
    let imageToShow = url.searchParams.get('image');

    if (!isViewerShwn && imageToShow)
    {
        if (imageMainIndex)
        {
            isViewerShwn = true;
            showImage(imageToShow);
        }
    }
    else if (isViewerShwn && !imageToShow)
    {
        isViewerShwn = false;
        hideImage();
    }
}, 100);