/****Preloader****/
function loadAnimation(){
    setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("site-wrapper").style.display = "block";
}

/****Image Carousel****/
//This function creates and maintains the automatic image carousel
imageCarousel = (images) => {
    const carousel = document.querySelector(".carousel");
    const preview = document.querySelector(".preview");
    const dotContainer = document.querySelector(".dot-container")
    var index = 1;
    
    //fucntion that initializes image previews and the little dots
    initialzePreview = () => {
        var num = 0;
        images.map((elem) => {
            //create the preview element and give it the appropriate styles and attributes
            let img = document.createElement('div');
            img.style.backgroundImage = `url(${elem})`;
            img.classList.add("preview-img");
            img.setAttribute('id', num);
            img.setAttribute('onclick', `switchFrame(${num})`);

            preview.appendChild(img);

            //create the dots too
            let dot = document.createElement('div');
            dot.classList.add("dot");
            dotContainer.appendChild(dot);

            num++;
        })
        //make sure the first preview and dot is already highlighted
        document.getElementById(0).classList.add("highlighted");
        document.getElementsByClassName('dot')[0].classList.add('dot-highlighted');
    }

    //begin the image carousel, starting at whatever index is
    startCarousel = () => {
        if(index > images.length - 1){
            index = 0;
        }
        //cycle through the images
        carousel.style.backgroundImage = `url(${images[index]})`;
        
        //also change which preview image and dot is highlighted
        for(let i = 0; i < images.length; i++){
            let previewImg = document.getElementById(i);
            let dots = document.getElementsByClassName('dot');

            if(previewImg.id == index){
                previewImg.classList.add("highlighted");
                dots[i].classList.add("dot-highlighted");
            } else {
                previewImg.classList.remove("highlighted");
                dots[i].classList.remove("dot-highlighted");
            }
        } 

        //reset the fade animation so that it happens every switch
        carousel.classList.remove("fade");
        void carousel.offsetWidth;
        carousel.classList.add("fade");

        index++;
    }

    //if a preview is clicked, change index to that and run startCarousel again
    switchFrame = (num) => {
        index = num;
        startCarousel();
    }   

    //set up the preview section and start the automatic image switching
    initialzePreview();
    const interval = setInterval(() => {
        startCarousel();
    }, 5000);

}

//Array that holds image data for the carousel
const images = ["assets/woods1.jpg", "assets/woods2.jpg","assets/woods3.jpg"];
imageCarousel(images);


/****Tabs****/
//This fucton handles the page switching for the "climb" section tabs
selectTab = (tabNum) => {
    const tabs = document.getElementsByClassName('tab');
    const schedule = document.getElementsByClassName('schedule');

    for(let i = 0; i < tabs.length; i++){
        if(tabNum === i){
            tabs[tabNum].classList.add('tab-selected');
            schedule[tabNum].classList.remove('hidden');
        } else {
            tabs[i].classList.remove('tab-selected');
            schedule[i].classList.add('hidden');
        }   
    }
}

/****Accordion Menu****/
//This function handles the accordion menu on mobile
const accordion = document.getElementsByClassName('accordion-element');
accordionSelect = (index) => {
    accordion[index].classList.toggle('active');
    console.log('hi');
}



