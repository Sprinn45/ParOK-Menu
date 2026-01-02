let lang = "ua";

const menuData = {
  ua: {
    Гаряче: [
      {
        name: "Борщ (яловичина)",
        desc: "350 г · подається зі сметаною",
        price: "15€",
        img: "images/borscht.jpg"
      }
    ],
    Салати: [
      {
        name: "Грецький",
        desc: "Помідор, огірок, фета",
        price: "11€",
        img: "images/salad.jpg"
      }
    ]
  },

  en: {
    Hot: [
      {
        name: "Borscht (beef)",
        desc: "350 g · served with sour cream",
        price: "15€",
        img: "images/borscht.jpg"
      }
    ]
  },

  de: {
    Warm: [
      {
        name: "Borschtsch (Rind)",
        desc: "350 g · mit Sauerrahm",
        price: "15€",
        img: "images/borscht.jpg"
      }
    ]
  }
};

function setLang(l) {
  lang = l;
  renderMenu();
}

function renderMenu() {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  for (let category in menuData[lang]) {
    const section = document.createElement("div");
    section.className = "category";
    section.innerHTML = `<h2>${category}</h2>`;

    menuData[lang][category].forEach(item => {
      section.innerHTML += `
        <div class="card">
          <img src="${item.img}">
          <div class="card-content">
            <strong>${item.name}</strong>
            <span class="price">${item.price}</span>
            <p>${item.desc}</p>
          </div>
        </div>
      `;
    });

    menu.appendChild(section);
  }
}

renderMenu();
