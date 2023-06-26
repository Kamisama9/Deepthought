const arrow = document.querySelector(".arrow-icon");
const board = document.querySelector(".sidebar");
let value = false;
let imgvalue=true;
const arrowdirection = document.querySelector(".fa-circle-arrow-right");
const boardheading = document.querySelector(".sidebar-heading");
const boardbody=document.querySelector(".sidebar-body")
// journey board open && collapse
arrow.addEventListener("click", () => {
  if (value === false) {
    value = !value;
    board.style.width = "25%";
    arrowdirection.classList.remove("fa-circle-arrow-right");
    arrowdirection.classList.add("fa-circle-arrow-left");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Journey Board";
    boardheading.appendChild(paragraph);
    const list = document.createElement("ul");
    const listheading=document.createElement("li")
    listheading.textContent="Exprole the world of management";
    listheading.className='list-heading'
    list.appendChild(listheading)
    list.classList.add("list-items"); 
    const items = ["Technical Project Management", "Threadbuild", "Structure your pointers", "4SA Method"];
    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    });
    boardbody.appendChild(list);
  } else {
    value = !value;
    board.style.width = "7%";
    arrowdirection.classList.add("fa-circle-arrow-right");
    arrowdirection.classList.remove("fa-circle-arrow-left");
    const paragraph = document.querySelector(".sidebar-heading p");
    const list=document.querySelector(".list-items")
    if (paragraph && list) {
      boardheading.removeChild(paragraph );
      boardbody.removeChild(list);
    }
  }
});
// task container loop for dynamic creation of tasks
const parentContainer = document.getElementById('tasksContainer');

for (let i = 0; i < 4; i++) {
 
  const assetContainer = document.createElement('div');
  const assetheadingContainer = document.createElement('div');
  const assetHeading = document.createElement('div');
  const assetHeadingDesc = document.createElement('div');
  const imagContainer = document.createElement('div');
  const arrowIcon = document.createElement('img');
  const assetDesc = document.createElement('div');
  const assetBody = document.createElement('div');

  assetContainer.className = 'tasks-container';
  assetheadingContainer.className='asset-heading-container'
  assetHeading.className = 'asset-heading';
  assetHeadingDesc.className = 'asset-heading-desc';
  imagContainer.className = 'img-icon';
  arrowIcon.className = 'arrowicon';
  assetDesc.className = 'asset-desc';
  assetBody.className = 'asset-body';
  imagContainer.addEventListener('click',()=>{
    if(imgvalue==true)
    {
    imgvalue=!imgvalue
    assetheadingContainer.removeChild(assetDesc)
    }
    else
    {
      imgvalue=!imgvalue
      assetheadingContainer.append(assetDesc);

    }
  })

  assetHeading.appendChild(assetHeadingDesc);
  assetHeading.appendChild(imagContainer);
  imagContainer.appendChild(arrowIcon);
  assetContainer.appendChild(assetheadingContainer);
  assetheadingContainer.appendChild(assetHeading);
  assetheadingContainer.appendChild(assetDesc);
  assetContainer.appendChild(assetBody);
  parentContainer.appendChild(assetContainer);
}
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const assetDescElements = document.querySelectorAll('.asset-desc');
    const assetTitleElements = document.querySelectorAll('.asset-heading-desc');
    const arrowIcons = document.querySelectorAll('.arrowicon');

    data.tasks[0].assets.forEach((asset, index) => {
      if (index < 4) {
        assetTitleElements[index].textContent = asset.asset_title;
        assetDescElements[index].innerHTML = '<span class="Description">Description:</span>' +'<span>' +asset.asset_description + '</span>';
        arrowIcons[index].src = './images/Group 1735.png';
      }
      if (asset.asset_type === "display_asset" && asset.asset_content_type === "video") {
        const videoElement = createVideoElement(asset);
        const assetBodyElements = document.querySelectorAll('.asset-body');
        const assetBodyElement = assetBodyElements[index];
        assetBodyElement.appendChild(videoElement);
      }
      if (asset.asset_type === "input_asset" && asset.asset_content_type === "threadbuilder") {
        const threadbuilder = createThreadBuilder(asset);
        const assetBodyElements = document.querySelectorAll('.asset-body');
        const assetBodyElement = assetBodyElements[index];
        assetBodyElement.appendChild(threadbuilder);
      }
      if (asset.asset_type === "display_asset" && asset.asset_content_type === "article") {
        const Article = createArticle(asset);
        const assetBodyElements = document.querySelectorAll('.asset-body');
        const assetBodyElement = assetBodyElements[index];
        assetBodyElement.appendChild(Article);
      }
      if (asset.asset_type === "input_asset" && asset.asset_content_type === "article") {
        const box3Div = createBox3Div(asset);
        const assetBodyElements = document.querySelectorAll('.asset-body');
        const assetBodyElement = assetBodyElements[index];
        assetBodyElement.appendChild(box3Div);
      }
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });
  // Threadbuilder
  function createThreadBuilder(asset) {

    const threadContainer = document.createElement('div');
    threadContainer.className = 'threadcontainer';
 
    const boxContent = document.createElement('div');
    boxContent.className = 'thread-content';
    threadContainer.appendChild(boxContent);
  
    const threadHeading = document.createElement('div');
    threadHeading.id = 'thread-heading';
    boxContent.appendChild(threadHeading);
  
    const collapseIcon = document.createElement('i');
    collapseIcon.className = 'fa-solid fa-angle-up';
    collapseIcon.style.color = '#000000';
    threadHeading.appendChild(collapseIcon);

    const threadTitle = document.createElement('h3');
    threadTitle.textContent = 'Thread A';
    threadHeading.appendChild(threadTitle);
  
    const subThreadContainer = document.createElement('div');
    subThreadContainer.id = 'sub-thread-container';
    boxContent.appendChild(subThreadContainer);
  
    const subThread1 = document.createElement('div');
    subThread1.className = 'sub-thread sub-thread-1';
    subThreadContainer.appendChild(subThread1);
  
    const subThread1Title = document.createElement('p');
    subThread1Title.textContent = 'Sub Thread 1';
    subThread1.appendChild(subThread1Title);
  
    
    const subThread1Textarea = document.createElement('textarea');
    subThread1Textarea.placeholder = 'Enter Text here';
    subThread1.appendChild(subThread1Textarea);
  
   
    const subThread2 = document.createElement('div');
    subThread2.className = 'sub-thread sub-thread-2';
    subThreadContainer.appendChild(subThread2);
  
  
    const subThread2Title = document.createElement('p');
    subThread2Title.textContent = 'Sub Interpretation 1';
    subThread2.appendChild(subThread2Title);

    const subThread2Textarea = document.createElement('textarea');
    subThread2Textarea.placeholder = 'Enter Text here';
    subThread2.appendChild(subThread2Textarea);
   
    const iconsSelect = document.createElement('div');
    iconsSelect.className = 'thread-icons';
    boxContent.appendChild(iconsSelect);
  
    const icons = document.createElement('div');
    icons.className = 'thread-icons-img';
    iconsSelect.appendChild(icons);
  
    const iconImages = [
      'images/bulb.svg',
      'images/message.svg',
      'images/question-mark.svg',
      'images/candle.svg'
    ];
  
    iconImages.forEach(function (imageUrl) {
      const iconImg = document.createElement('img');
      iconImg.src = imageUrl;
      iconImg.alt = '';
      icons.appendChild(iconImg);
    });
  
    const select = document.createElement('div');
    select.className = 'select';
    iconsSelect.appendChild(select);
  
    const categorySelect = document.createElement('select');
    select.appendChild(categorySelect);
  
    const categoryOption = document.createElement('option');
    const optiontextCategory=document.createElement('p')
    categoryOption.value = '';
    optiontextCategory.textContent = 'Select Category';
    categoryOption.appendChild(optiontextCategory);
    categorySelect.appendChild(categoryOption);
  
    const processSelect = document.createElement('select');
    select.appendChild(processSelect);
  
    const processOption = document.createElement('option');
    const optiontextProcess=document.createElement('p')
    processOption.value = '';
    optiontextProcess.textContent = 'Select Process';
    processSelect.appendChild(processOption);
    processOption.appendChild(optiontextProcess)
  
    const addSubThreadBtn = document.createElement('button');
    addSubThreadBtn.className='sub-thread-btn'
    addSubThreadBtn.textContent = '+ Sub-thread';
    boxContent.appendChild(addSubThreadBtn);
  
    const subInterpretation = document.createElement('div');
    subInterpretation.className = 'summary';
    boxContent.appendChild(subInterpretation);
  
    const subThread3 = document.createElement('div');
    subThread3.className = 'sub-thread sub-thread-3';
    subInterpretation.appendChild(subThread3);
  
    const subThread3Title = document.createElement('p');
    subThread3Title.textContent = 'Summary for Thread A'
    subThread3.appendChild(subThread3Title);
  
    const subThread3Textarea = document.createElement('textarea');
    subThread3Textarea.name = '';
    subThread3Textarea.id = '';
    subThread3Textarea.cols = '10';
    subThread3Textarea.rows = '10';
    subThread3Textarea.placeholder = 'Enter Text here';
    subThread3.appendChild(subThread3Textarea);
  
    return threadContainer;
  }
  // Frequently asked Questions 
  
  function createArticle(asset)
  {
    const ArticleElement=document.createElement('iframe');
    ArticleElement.className='FAQ'
    ArticleElement.src=asset.asset_content;
    return ArticleElement;
  }
  // youtube video
function createVideoElement(asset) {
  const videoElement = document.createElement('iframe');
  videoElement.className='youtube-video'
  videoElement.src = asset.asset_content;
  return videoElement;
}

//paragraph  
  function createBox3Div(asset) {
    const box3Div = document.createElement('div');
    box3Div.classList.add('box');
    box3Div.id = 'box3';
  
    const boxContentDiv = document.createElement('div');
    boxContentDiv.classList.add('box-content');
    boxContentDiv.id = 'box3-content';
  
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
  
    const titleH4 = document.createElement('h4');
    titleH4.textContent = 'Title';
    contentDiv.appendChild(titleH4);
  
    const inputElement = document.createElement('input');
    inputElement.className='text'
    inputElement.type = 'text';
    contentDiv.appendChild(inputElement);
  
    const contentH4 = document.createElement('h4');
    contentH4.textContent = 'Content';
    contentDiv.appendChild(contentH4);
  
    const toolsDiv = document.createElement('div');
    toolsDiv.classList.add('tools');
  
    const tools1Div = document.createElement('div');
    tools1Div.classList.add('tools1');
    toolsDiv.appendChild(tools1Div);
  
    const toolNames = [
      'File', 'Edit', 'Insert', 'Format', 'Tools', 'Table', 'Help'
    ];
  
    toolNames.forEach(toolName => {
      const spanElement = document.createElement('span');
      spanElement.textContent = toolName;
      tools1Div.appendChild(spanElement);
    });
  
    const tools2Div = document.createElement('div');
    tools2Div.classList.add('tools2');
    toolsDiv.appendChild(tools2Div);
  
    const paragraphSmall = document.createElement('small');
    paragraphSmall.textContent = 'Paragraph';
  
    const angleDownIcon = document.createElement('i');
    angleDownIcon.classList.add('fa-solid', 'fa-angle-down');
    angleDownIcon.style.color = '#000000';
    paragraphSmall.appendChild(angleDownIcon);
  
    tools2Div.appendChild(paragraphSmall);
  
    const ellipsisIcon = document.createElement('i');
    ellipsisIcon.classList.add('fa-solid', 'fa-ellipsis');
    tools2Div.appendChild(ellipsisIcon);
  
    contentDiv.appendChild(toolsDiv);
  
    const textareaElement = document.createElement('textarea');
    textareaElement.cols = '30';
    textareaElement.rows = '1000';
    contentDiv.appendChild(textareaElement);
  
    boxContentDiv.appendChild(contentDiv);
    box3Div.appendChild(boxContentDiv);
  
    return box3Div;
  }
  













  

