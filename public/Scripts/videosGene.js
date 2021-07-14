function generator1(){
    const links = [
      {
        label: "Title",
        url: "Video URL"
      },
      {
        label: "How to Run C++ on VSCode",
        url: "https://www.youtube.com/embed/2eB-8D3Yj9s"
      },
      {
        label: "My First Program in C++ | Hello World!",
        url: "https://www.youtube.com/embed/aqIt_LFUFns"
      },
      {
        label: "Output in C++",
        url: "https://www.youtube.com/embed/qa8RVM6TolM"
      },
      {
        label: "Input & Variables in C++ - Part 1",
        url: "https://www.youtube.com/embed/t72BD60KyDY"
      },
      {
        label: "Input & Variables in C++ - Part 2",
        url: "https://www.youtube.com/embed/451HMNApQQU"
      },
      {
        label: "Math Expressions in C++",
        url: "https://www.youtube.com/embed/cDqvfelY4eI"
      },
      {
        label: "Functions in C++",
        url: "https://www.youtube.com/embed/DAu8ZIKN2m4"
      },
      {
        label: "Boolean Expressions in C++",
        url: "https://www.youtube.com/embed/uzxIAQswv8o"
      },
      {
        label: "If Statements in C++",
        url: "https://www.youtube.com/embed/3tsvw1XGm34"
      },
      {
        label: "Loop in C++",
        url: "https://www.youtube.com/embed/Mvhd3s-B98o"
      },
      {
        label: "Writing to Files in C++",
        url: "https://www.youtube.com/embed/yQTnSHEi3p8"
      },
      {
        label: "Reading from Files in C++",
        url: "https://www.youtube.com/embed/SOB_2hyNxx4"
      },
      {
        label: "Arrays in C++",
        url: "https://www.youtube.com/embed/MQkeHEY4WkM"
      },
      {
        label: "Types of Arrays in C++",
        url: "https://www.youtube.com/embed/EKbcb8-b5_0"
      },
      {
        label: "Multidimensional Arrays in C++",
        url: "https://www.youtube.com/embed/wR_mpmhq0Kc"
      },
      {
        label: "Pointers in C++",
        url: "https://www.youtube.com/embed/93Joff4EQ40"
      },
      {
        label: "Switch Statements in C++",
        url: "https://www.youtube.com/embed/QOOAI0saFRg"
      },
      {
        label: "Memory Allocation in C++ - NEW, NULL and DELETE",
        url: "https://www.youtube.com/embed/X1weQPNIO9Q"
      },
      {
        label: "Debugging in C++",
        url: "https://www.youtube.com/embed/v3z-WIOey9I"
      },
      {
        label: "Defensive Programming",
        url: "https://www.youtube.com/embed/829NuJ8AIt0"
      },
      {
        label: "Intro to Object Oriented in C++",
        url: "https://www.youtube.com/embed/JJkotGd1_1U"
      },
      {
        label: "Structures in C++",
        url: "https://www.youtube.com/embed/M6cnD6WsKXQ"
      },
      {
        label: "Pointers & Structures in C++",
        url: "https://www.youtube.com/embed/aSGAl-NY1TI"
      },
      {
        label: "MVC Architecture (Model-View-Controller)",
        url: "https://www.youtube.com/embed/LpoG7rhsN7M"
      }    
    ];

    let display = '<div id="videosCont" class="d-flex align-content-center flex-wrap-row rounded">';
    let screenRes = window.screen.width * window.devicePixelRatio; // gets the screen resolution
    console.log(screenRes);
    if(screenRes > 1439){
      videoRow = 3;
      for(let i = 1; i < links.length; i++){
        display += `<div class="d-flex flex-column m-3 embed-responsive embed-responsive-4by3">
                        <iframe src="${links[i].url}" rel="${links[i].label}" class="embed-responsive-item" allowfullscreen></iframe>
                    </div>`;
        if((i % 3) == 0){
          display += `</div><hr>
                      <div  id="videosCont" class="d-flex align-content-center flex-wrap-row rounded">`;
        }
      }   
    }
    else if(screenRes <= 1439){
      for(let i = 1; i < links.length; i++){
        display += `<div class="d-flex flex-column m-3 embed-responsive embed-responsive-4by3">
                        <iframe src="${links[i].url}" rel="${links[i].label}" class="embed-responsive-item" allowfullscreen></iframe>
                    </div>`;
        if((i % 2) == 0){
          display += `</div><hr>
                      <div  id="videosCont" class="d-flex align-content-center flex-wrap-row rounded">`;
        }
      }   
    }

    display += "</div>";
    document.getElementById("dispList").innerHTML = display;
}


// loads videos and checks for screen resizing 
let bd = document.getElementsByTagName("body")[0];
new ResizeObserver(() => generator1()).observe(bd);

