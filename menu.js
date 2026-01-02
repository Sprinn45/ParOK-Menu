let lang = "ua";

const menuData = {

  /* =========================
     🇺🇦 УКРАЇНСЬКА
  ========================== */
  ua: {

    "Закуски": [
      { name: "Оселедець", desc: "Маринована цибуля, грінки · 250 г", price: "14€" }   
      { name: "Сальна тарілка", desc: "Три види сала, гірчиця, часник, цибуля · 250 г", price: "20€" },
      { name: "Риба тарань", desc: "100 г", price: "8€",  },
      { name: "Снеки", desc: "В асортименті · 100 г", price: "8€",  }
    ],

    "Основні страви": [
      { name: "Котлети", desc: "Свинина, яловичина, індичка, курка · 2 шт", price: "18€", },
      { name: "Котлетки рублені (курячі)", desc: "2 шт · 200 г", price: "16€", },
      { name: "Пельмені", desc: "Три види м’яса · зі сметаною · 250 г", price: "12€",  },
      { name: "Вареники", desc: "Начинки на вибір · 250 г", price: "11€", },
      { name: "Курка гриль", desc: "100 г", price: "30/35€",  },
      { name: "Відбивна (свинина)", desc: "", price: "20€",  },
      { name: "М’ясо по-французьки", desc: "", price: "19€", },
      { name: "Хліб", desc: "", price: "2.50€",  }
    ],

    "Гарніри": [
      { name: "Картопля по-селянськи", desc: "З соусами · 200 г", price: "10€", },
      { name: "Картопля смажена", desc: "З грибами · 200 г", price: "10€",  },
      { name: "Картопляне пюре", desc: "200 г", price: "8€",  },
      { name: "Гречка", desc: "200 г", price: "8€", },
      { name: "Овочі гриль", desc: "350 г", price: "8€",  }
    ],

    "Гаряче": [
      { name: "Борщ (яловичина)", desc: "Зі сметаною · 350 г", price: "15€", },
      { name: "Грибна юшка", desc: "Мікс грибів · 300 г", price: "17€", }
    ],

    "Салати": [
      { name: "Квашена капуста", desc: "250 г", price: "10€",  },
      { name: "Овочевий", desc: "250 г", price: "10€",  },
      { name: "Грецький", desc: "Фета, маслини · 250 г", price: "11€",},
      { name: "Вітамінний", desc: "250 г", price: "10€", },
      { name: "Олівʼє (курка)", desc: "200 г", price: "14€", },
      { name: "Цезар", desc: "250 г", price: "16€",  },
    ] ,

   "Алкогольні напої" : {

  "Пиво": [
    { name: "Corona", desc: "0.3 л", price: "5€", },
    { name: "Wezelnburger", desc: "0.5 л", price: "5€",  },
    { name: "Weizenburger alcoholfrei", desc: "0.5 л", price: "5€",  },
    { name: "Goldbraun", desc: "0.5 л", price: "5€",  }
  ],

  "Горілка": [
    { name: "Nemiroff", desc: "шот 3.5€ · 0.7 л", price: "45€", },
    { name: "Stolichnaya", desc: "шот 4€ · 0.7 л", price: "50€",  },
    { name: "Finlandia", desc: "шот 4€ · 0.7 л", price: "50€",  },
    { name: "Grey Goose", desc: "шот 8.5€ · 0.7 л", price: "120€", }
    { name: "Schnaps", desc: "шот 3.8€ · 1 л", price: "38€", }  ],

  "Віскі": [
    { name: "Jack Daniel’s", desc: "шот 5.5€ · 0.7 л", price: "75€",  },
    { name: "Chivas Regal", desc: "шот 5.5€ · 0.7 л", price: "75€",  }
  ],

  "Просекко": [
    { name: "La Gioiosa", desc: "бокал 0.2 л · пляшка 0.7 л", price: "8€ / 30€",  },
    { name: "Mionetto", desc: "бокал 0.2 л · пляшка 0.7 л", price: "10€ / 35€", }
  ],
  
  "Безалкогольні напої": [
  { name: "Квас (чорний / білий)", desc: "0.5 л", price: "5€" },
  { name: "Borjomi", desc: "0.5 л", price: "5€" },
  { name: "Соки", desc: "томатний / яблучний / апельсиновий · 0.3 л", price: "4€" },
  { name: "Coca-Cola / Zero", desc: "0.3 л", price: "4.50€" },
  { name: "Fanta / Sprite", desc: "0.3 л", price: "4.50€" },
  { name: "Чай", desc: "чорний / зелений · 0.3 л", price: "3€" },
  { name: "Кава", desc: "еспресо / американо", price: "3€" }
];
   };
  },

  /* =========================
     🇬🇧 ENGLISH
  ========================== */
  en: {

    "Starters": [
      { name: "Herring", desc: "Pickled onion, croutons · 250 g", price: "14€", },
      { name: "Lard platter", desc: "Three types of cured lard · 250 g", price: "20€",  },
      { name: "Snacks", desc: "Assortment · 100 g", price: "8€",  } 
      
    ],

    "Main dishes": [
      { name: "Cutlets", desc: "Mixed meat · 2 pcs", price: "18€",  },
      { name: "Chopped chicken cutlets", desc: "2 pcs · 200 g", price: "16€", },
      { name: "Dumplings", desc: "Three kinds of meat · 250 g", price: "12€",  },
      { name: "Varenyky", desc: "Choice of fillings · 250 g", price: "11€", },
      { name: "Grilled chicken", desc: "100 g", price: "30/35€", },
      { name: "Pork schnitzel", desc: "", price: "20€", },
      { name: "French-style meat", desc: "", price: "20€", },
      { name: "Bread", desc: "", price: "2.50€", }
    ]
  },
  "Side dishes" : [
  { name: "Country-style potatoes", desc: "With sauces · 200 g", price: "10€" },
  { name: "Fried potatoes", desc: "With mushrooms · 200 g", price: "10€" },
  { name: "Mashed potatoes", desc: "200 g", price: "8€" },
  { name: "Buckwheat", desc: "200 g", price: "8€" },
  { name: "Grilled vegetables", desc: "350 g", price: "8€" }
];

"Hot dishes" : [
  { name: "Borscht (beef)", desc: "Served with sour cream · 350 g", price: "15€" },
  { name: "Mushroom soup", desc: "Mixed mushrooms · 300 g", price: "17€" }
];

"Salads" : [
  { name: "Sauerkraut", desc: "250 g", price: "10€" },
  { name: "Fresh vegetable salad", desc: "250 g", price: "10€" },
  { name: "Greek salad", desc: "Feta, olives · 250 g", price: "11€" },
  { name: "Vitamin salad", desc: "Cabbage, cucumber, greens · 250 g", price: "10€" },
  { name: "Olivier salad (chicken)", desc: "200 g", price: "14€" },
  { name: "Caesar salad", desc: "250 g", price: "16€" },
];

  "Alcohol" : {

  "Beer": [
    { name: "Corona", desc: "0.3 l", price: "5€",  },
    { name: "Wezelnburger", desc: "0.5 l", price: "5€",  },
    { name: "Weizenburger alcohol-free", desc: "0.5 l", price: "5€", },
    { name: "Goldbraun", desc: "0.5 l", price: "5€",  }
  ],

  "Vodka": [
    { name: "Nemiroff", desc: "shot 3.5€ · bottle 0.7 l", price: "45€", },
    { name: "Stolichnaya", desc: "shot 4€ · bottle 0.7 l", price: "50€", },
    { name: "Finlandia", desc: "shot 4€ · bottle 0.7 l", price: "50€", },
    { name: "Grey Goose", desc: "shot 8.5€ · bottle 0.7 l", price: "120€", }
    { name: "Schnaps", desc: "shot 3.8€ · 1 l", price: "38€", }  ],  ],

  "Whisky": [
    { name: "Jack Daniel’s", desc: "shot 5.5€ · bottle 0.7 l", price: "75€",  },
    { name: "Chivas Regal", desc: "shot 5.5€ · bottle 0.7 l", price: "75€",}
  ],

  "Prosecco": [
    { name: "La Gioiosa", desc: "glass 0.2 l · bottle 0.7 l", price: "8€ / 30€", },
    { name: "Mionetto", desc: "glass 0.2 l · bottle 0.7 l", price: "10€ / 35€", }
  ],

   "Non-alcoholic drinks" : [
  { name: "Kvass (dark / light)", desc: "0.5 l", price: "5€" },
  { name: "Borjomi", desc: "0.5 l", price: "4.50€" },
  { name: "Juices", desc: "tomato / apple / orange · 0.3 l", price: "4€" },
  { name: "Coca-Cola / Zero", desc: "0.3 l", price: "4.50€" },
  { name: "Fanta / Sprite", desc: "0.3 l", price: "4.50€" },
  { name: "Tea", desc: "black / green · 0.3 l", price: "3€" },
  { name: "Coffee", desc: "espresso / americano", price: "3€" }
];
};

  /* =========================
     🇩🇪 DEUTSCH
  ========================== */
  de: {

    "Vorspeisen": [
      { name: "Hering", desc: "Eingelegte Zwiebeln, Croutons · 250 g", price: "14€",  },
      { name: "Speckplatte", desc: "Drei Sorten Speck · 250 g", price: "20€", },
      { name: "Getrockneter Fisch", desc: "100 g", price: "8€", },
      { name: "Snacks", desc: "Sortiment · 100 g", price: "8€", }
    ],

    "Hauptgerichte": [
      { name: "Frikadellen", desc: "Gemischtes Fleisch · 2 Stk", price: "18€", }
      { name: "Gehackte Hähnchenkoteletts", desc: "2 Stk · 200 g", price: "16€",  }
      { name: "Pelmeni", desc: "Drei Fleischsorten · 250 g", price: "12€", },
      { name: "Wareniki", desc: "Füllung nach Wahl · 250 g", price: "11€",  },
      { name: "Gegrilltes Hähnchen", desc: "100 g", price: "30/35€",  },
      { name: "Schweineschnitzel", desc: "", price: "20€",  },
      { name: "Fleisch nach französischer Art", desc: "", price: "19€", },
      { name: "Brot", desc: "", price: "2.50€",  }
    ];
       "Beilagen" : [
  { name: "Bratkartoffeln nach Bauernart", desc: "Mit Soßen · 200 g", price: "10€" },
  { name: "Gebratene Kartoffeln", desc: "Mit Pilzen · 200 g", price: "10€" },
  { name: "Kartoffelpüree", desc: "200 g", price: "8€" },
  { name: "Buchweizen", desc: "200 g", price: "8€" },
  { name: "Gegrilltes Gemüse", desc: "350 g", price: "8€" }
];

"Warme Speisen": [
  { name: "Borschtsch (Rind)", desc: "Mit Sauerrahm · 350 g", price: "15€" },
  { name: "Pilzsuppe", desc: "Pilzmischung · 300 g", price: "17€" }
];

"Salate": [
  { name: "Sauerkraut", desc: "250 g", price: "10€" },
  { name: "Frischer Gemüsesalat", desc: "250 g", price: "10€" },
  { name: "Griechischer Salat", desc: "Feta, Oliven · 250 g", price: "11€" },
  { name: "Vitaminsalat", desc: "Kohl, Gurke, Kräuter · 250 g", price: "10€" },
  { name: "Olivier-Salat (Huhn)", desc: "200 g", price: "14€" },
  { name: "Caesar Salat", desc: "250 g", price: "16€" },
];

"Alkoholische Getränke": {

  "Bier": [
    { name: "Corona", desc: "0.3 l", price: "5€", },
    { name: "Wezelnburger", desc: "0.5 l", price: "5€", },
    { name: "Weizenburger alkoholfrei", desc: "0.5 l", price: "5€",  },
    { name: "Goldbraun", desc: "0.5 l", price: "5€",  }
  ],

  "Wodka": [
    { name: "Nemiroff", desc: "Shot 3.5€ · Flasche 0.7 l", price: "45€", },
    { name: "Stolichnaya", desc: "Shot 4€ · Flasche 0.7 l", price: "50€",},
    { name: "Finlandia", desc: "Shot 4€ · Flasche 0.7 l", price: "50€", },
    { name: "Grey Goose", desc: "Shot 8.5€ · Flasche 0.7 l", price: "120€", }
    { name: "Schnaps", desc: "Shot 3.8€ · 1 l", price: "38€", }  ],  ],
  ],

  "Whisky": [
    { name: "Jack Daniel’s", desc: "Shot 5.5€ · Flasche 0.7 l", price: "75€", },
    { name: "Chivas Regal", desc: "Shot 5.5€ · Flasche 0.7 l", price: "75€",  }
  ],

  "Prosecco": [
    { name: "La Gioiosa", desc: "Glas 0.2 l · Flasche 0.7 l", price: "8€ / 30€", },
    { name: "Mionetto", desc: "Glas 0.2 l · Flasche 0.7 l", price: "10€ / 35€",  }
  ],

   "Alkoholfreie Getränke": [
  { name: "Kwas (dunkel / hell)", desc: "0.5 l", price: "5€" },
  { name: "Borjomi", desc: "0.5 l", price: "5€" },
  { name: "Säfte", desc: "Tomate / Apfel / Orange · 0.3 l", price: "4€" },
  { name: "Coca-Cola / Zero", desc: "0.3 l", price: "4.50€" },
  { name: "Fanta / Sprite", desc: "0.3 l", price: "4.50€" },
  { name: "Tee", desc: "schwarz / grün · 0.3 l", price: "3€" },
  { name: "Kaffee", desc: "Espresso / Americano", price: "3€" }
];
};

  }
};
