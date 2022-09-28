const monthComponent = function (nth, name, days) {
  let daysHtml = "";

  for (let i = 1; i <= days; i++) {
    daysHtml += dayComponent(i);
  }
  //+=: a daysHtml-t dayComponent értékkel fogja minden ciklusban módosítani
  //a dayComponent-et i-szer fogja meghívni
  return `
        <div id="${nth}" class="${name}">
            <h2>${name}</h2>
            ${daysHtml}
        </div>
  `;
};
// ${}: kilép a multiline string-ből, vissza a js-be

const dayComponent = function (dayCount) {
  return `
        <div class="day"> ${dayCount}</div>
    `;
};

console.log("loaded");
const rootElement = document.querySelector("#root");

/* rootElement.insertAdjacentHTML("beforeend", "<button>show calendar</button>");
const buttonElement = rootElement.querySelector("button");
buttonElement.addEventListener("click", function () {
  rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "January", 31));
  rootElement.insertAdjacentHTML(
    "beforeend",
    monthComponent(2, "February", 28)
  );
}); 

így van benne DOM manipuláció is: a gomb megnyomására jelenik meg a naptár*/

rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "January", 31));
rootElement.insertAdjacentHTML("beforeend", monthComponent(2, "February", 28));
//behelyezi a html-be, adott helyre (beforebegin pl.), a megnevezett komponenst
/* hely kódok: beforebegin: a megnevezett div elé
                afterbegin: a div-be, de az elejére
                beforeend: a div-be, de a végére
                afterend: a div után
 */
/* rootElement.style.color = "blue";
így is lehet style-ozni, de NE!! erre van a CSS */
