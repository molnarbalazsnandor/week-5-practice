const year = [
  {
    month: "January",
    id: "jan",
    nth: 1,
    days: 31,
  },
  {
    month: "February",
    id: "febr",
    nth: 2,
    days: 28,
  },
  {
    month: "March",
    id: "marc",
    nth: 3,
    days: 31,
  },
  {
    month: "April",
    id: "apr",
    nth: 4,
    days: 30,
  },
  {
    month: "May",
    id: "may",
    nth: 5,
    days: 31,
  },
  {
    month: "June",
    id: "june",
    nth: 6,
    days: 30,
  },
  {
    month: "July",
    id: "july",
    nth: 7,
    days: 31,
  },
  {
    month: "August",
    id: "aug",
    nth: 8,
    days: 31,
  },
  {
    month: "September",
    id: "sept",
    nth: 9,
    days: 30,
  },
  {
    month: "October",
    id: "oct",
    nth: 10,
    days: 31,
  },
  {
    month: "November",
    id: "nov",
    nth: 11,
    days: 30,
  },
  {
    month: "December",
    id: "dec",
    nth: 12,
    days: 31,
  },
];

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

rootElement.insertAdjacentHTML("beforeend", "<button>Add month</button>");

const buttonElement = rootElement.querySelector("button");

let monthIndex = 0;

buttonElement.addEventListener("click", function () {
  if (monthIndex < 12) {
    rootElement.insertAdjacentHTML(
      "beforeend",
      monthComponent(
        year[monthIndex].nth,
        year[monthIndex].month,
        year[monthIndex].days
      )
    );
    console.log(year[monthIndex]);
    monthIndex++;
  } else {
    buttonElement.setAttribute("disabled", "");
  }
});

/* Magyarázat: 
    eseményfigyelő: mire figyeljen, mit csináljon
      function: nincs argument, vagyis azonnal fut
        ha a monthindex kisebb, mint 12, addig fut (monthIndex:0-11)
          a root ID-jú div-be belehelyezzük a következő HTML képletet
            a a képlet helye: a divben, de a végén
            meghívjuk benne a monthComponent 3 elemét, amelyek száma a year monthIndex-edik nth-ja, hónapja, napja
            monthIndex eggyel nő
            ha vége, else: kikapcsolja a gombot */
