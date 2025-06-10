// 1
let newPara = document.createElement("p");
newPara.innerHTML = "hi how are you";
document.getElementById("msg").appendChild(newPara);

// 2
function clearBackgroundColorsByName(name) {
  const elements = document.getElementsByName(name);
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = '';
  }
}

// 3
const links = document.getElementsByTagName('a');
if (links.length > 0) {
  links[0].href = 'https://new-url.com';
}

// 4
function changeHighlightBackgrounds() {
  const elements = document.getElementsByClassName("highlight");
  for (let i = 0; i < elements.length; i++) {
    const hue = (i * 360) / elements.length;
    elements[i].style.backgroundColor = `hsl(${hue}, 70%, 80%)`;
  }
}

// 5
function highlightFirstActive() {
  const firstActive = document.querySelector(".active");
  if (firstActive) {
    firstActive.style.border = "2px solid blue";
    firstActive.style.padding = "10px";
    firstActive.style.margin = "10px";
  }
}

// 6
function resizeCompletedItems() {
  const completedItems = document.querySelectorAll("li.completed");
  completedItems.forEach(item => {
    item.style.fontSize = "18px";
  });
}

// 7
function changeParentBackground(buttonElement) {
  const parentDiv = buttonElement.parentElement;
  if (parentDiv && parentDiv.tagName === "DIV") {
    parentDiv.style.backgroundColor = "blue";
  }
}

// 8
function addChildToFirst() {
  const parent = document.getElementById("parent");
  const firstChild = parent.firstElementChild;
  if (firstChild) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "New Child Added";
    firstChild.appendChild(newParagraph);
  }
}

// 9
function logSiblings() {
  const target = document.getElementById("target");
  const prevSibling = target.previousElementSibling;
  const nextSibling = target.nextElementSibling;
  console.log("Previous Sibling:", prevSibling ? prevSibling.textContent : "None");
  console.log("Next Sibling:", nextSibling ? nextSibling.textContent : "None");
}

// 10
function addToAllSiblings() {
  const target = document.getElementById("target");
  const parent = target.parentNode;
  const children = parent.children;
  for (let i = 0; i < children.length; i++) {
    if (children[i] !== target) {
      const newPara = document.createElement("p");
      newPara.textContent = "New element added for sibling";
      children[i].appendChild(newPara);
    }
  }
}

// 11
function insertDiv() {
  const newDiv = document.createElement("div");
  newDiv.textContent = "This is a new div inserted before .container";
  newDiv.style.backgroundColor = "lightgreen";
  newDiv.style.padding = "10px";
  newDiv.style.marginBottom = "10px";
  const container = document.querySelector(".container");
  container.parentNode.insertBefore(newDiv, container);
}

// 12
function createList() {
  const ul = document.createElement("ul");
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = "List Item " + i;
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}

// 13
function setContent() {
  const container = document.getElementById("container");
  container.innerHTML = `
    <div style="background-color: lightblue; padding: 10px; margin-bottom: 5px;">
      This is a dynamically added DIV.
    </div>
    <span style="color: red; font-weight: bold;">
      This is a dynamically added SPAN.
    </span>
  `;
}

// 14
function showCurrentDate() {
  const p = document.getElementById("dateParagraph");
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  p.textContent = formattedDate;
}

// 15
function addParagraphAfter() {
  const h1 = document.getElementById("mainHeading");
  const newP = document.createElement("p");
  newP.textContent = "Added After H1";
  h1.after(newP);
}

// 16
function prependImportant() {
  const container = document.getElementById("container");
  const strongElem = document.createElement("strong");
  strongElem.textContent = "Important ";
  container.prepend(strongElem);
}

// 17
function insertSection() {
  const footer = document.querySelector("footer");
  footer.insertAdjacentHTML('beforebegin', `
    <section style="background-color: lightyellow; padding: 15px; border: 1px solid #ccc; margin-bottom: 10px;">
      <h3>New Section</h3>
      <p>This section was inserted before the footer using insertAdjacentHTML().</p>
    </section>
  `);
}

// 18
function replaceImage() {
  const container = document.getElementById("imageContainer");
  const oldImg = document.getElementById("oldImage");
  const newImg = document.createElement("img");
  newImg.src = "https://via.placeholder.com/150?text=New+Image";
  newImg.alt = "New Image";
  container.replaceChild(newImg, oldImg);
}

// 19
function cloneArticle() {
  const original = document.getElementById("originalArticle");
  const clone = original.cloneNode(true);
  const target = document.getElementById("targetContainer");
  target.appendChild(clone);
}

// 20
function removeChildElement() {
  const parent = document.getElementById("parentDiv");
  const child = document.getElementById("childPara");
  if (child) {
    parent.removeChild(child);
  } else {
    alert("Child element already removed!");
  }
}

// 21
function insertBeforeLast() {
  const ul = document.getElementById("myList");
  const lastItem = ul.lastElementChild;
  const newItem = document.createElement("li");
  newItem.textContent = "New Item Before Last";
  ul.insertBefore(newItem, lastItem);
}

// 22
function logImageSrcs() {
  const images = document.querySelectorAll(".gallery img");
  images.forEach((img, index) => {
    const src = img.getAttribute("src");
    console.log(`Image ${index + 1} src: ${src}`);
  });
}

// 23
const link = document.getElementById("myLink");
link.addEventListener("click", function (event) {
  event.preventDefault();
  this.setAttribute("href", "https://openai.com");
  alert("Link URL updated to OpenAI!");
  window.location.href = this.getAttribute("href");
});

// 24
function checkDataId() {
  const element = document.querySelector(".item");
  if (element.hasAttribute("data-id")) {
    alert("The element has the data-id attribute.");
  } else {
    alert("The element does NOT have the data-id attribute.");
  }
}

// 25
document.getElementById("resetBtn").addEventListener("click", function () {
  const form = document.getElementById("myForm");
  const buttons = form.querySelectorAll("button");
  buttons.forEach(button => {
    if (button.hasAttribute("disabled")) {
      button.removeAttribute("disabled");
    }
  });
});

// 26
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function changeBackgroundColor() {
  const box = document.getElementById('colorBox');
  const randomColor = getRandomColor();
  box.style.backgroundColor = randomColor;
  box.textContent = randomColor;
}

// 27
function changeStyles() {
  const element = document.getElementById("myElement");
  element.style.cssText = "font-size: 24px; color: white; background-color: teal; padding: 10px; border-radius: 5px;";
}

// 28
function logSize() {
  const element = document.getElementById('box');
  const styles = window.getComputedStyle(element);
  console.log(`Computed width: ${styles.width}`);
  console.log(`Computed height: ${styles.height}`);
}

// 29
function toggleHighlight() {
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => {
    if (p.classList.contains('highlighted')) {
      p.classList.remove('highlighted');
    } else {
      p.classList.add('highlighted');
    }
  });
}

// 30
function activateElement() {
  const elem = document.getElementById('myElement');
  elem.classList.add('active');
  setTimeout(() => {
    elem.classList.remove('active');
  }, 2000);
}
