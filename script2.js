document.addEventListener("DOMContentLoaded", function () {
  const translateElement = document.getElementById("translate");
  const bodyElement = document.body;
  translateElement.addEventListener("change", function () {
    const selectedLanguage = translateElement.value;

    const translatableElements = document.querySelectorAll("[data-translate]");

    translatableElements.forEach((element) => {
      const translationKey = element.getAttribute("data-translate");
      const translations = {
        en: {
          home: "home",
          menu: "menu",
          about: "about",
          en: "English",
          ar: "Arabic",
          menu_head1: "BURGER",
          burger1: "KRABBY PATTY",
          burger1_description:
            "It is the best-known item at the restaurant and the most famous food cooked in Bikini Bottom.",
          burger2: "JELLY PATTY",
          burger2_description:
            "A Krabby Patty with jellyfish jelly on it. There was also a jelly patty with a blue jelly made by Friend, the blue jellyfish.",
          burger3: "PRETTY PATTY",
          burger3_description:
            "A colored Krabby Patty. SpongeBob created the colored Krabby Patty to try to draw customers into the Krusty Krab.",
          menu_head2: "APPETIZER",
          appetizer1: "KELP JERKY",
          appetizer1_description: "A spoof of beef jerky.",
          appetizer2: "CORAL BITS",
          appetizer2_description:
            "They are a side dish that consists of small bits of pale pink corals served in a red and yellow paper food tray. There is also a chili variation of the product.",
          appetizer3: "KELP FRIES",
          appetizer3_description:
            "Kelp fries are a common side dish served at the Krusty Krab. They look like normal French fries. However, they somewhat resemble seaweed with the way they are shaped. They have three different appearances.",
          menu_head3: "DRINK",
          drink1: "KELP SHAKE",
          drink1_description:
            "A Kelp Shake is an addictive and potentially toxic soft drink served in the Kelpshake restaurant chain. It comes in a green bottle with a yellow lid and straw, and has a bright yellow label with the drink's name in red text.",
          drink2: "MILKSHAKE",
          drink2_description:
            "It comes in a wide variety of flavors and forms and is usually either served in a generic cardboard cup with a straw or an ice cream sundae glass cup.",
          drink3: "FIZZY FANG",
          drink3_description:
            "'Fizzy Fang' isn't just soda; it's a sparkling sensation in a sleek caramel-brown can. With a bold logo, it nods to classic cola but adds a unique twist for an elevated refreshment experience.",
          menu_head4: "DESSERT",
          dessert1: "JELLY CAKE",
          dessert1_description:
            "A random dessert that SpongeBob takes out of the oven.",
          dessert2: "PIE",
          dessert2_description:
            "It looks just like a regular berry pie, with a golden-brown crust and purple filling inside. However, it is actually a very powerful explosive that detonates when dropped or thrown. It will also explode a few hours after being eaten, killing whoever eats it.",
          dessert3: "DONUT",
          dessert3_description:
            "It looks like a regular donut with chocolate and pink sprinkles.",
        },
        ar: {
          home: "الصفحة الرئيسية",
          menu: "القائمة",
          about: "معلومات عنا",
          en: "الانجليزية",
          ar: "العربية",
          menu_head1: "البرجر",
          burger1: "سلطع برجر",
          burger1_description:
            "وهو أشهر صنف في المطعم وأشهر الأطعمة المطبوخة في قاع الهامور.",
          burger2: "سلطع برجر بمربي القناديل",
          burger2_description:
            "قطعة سلطع برجر وعليها جيلي قنديل البحر. وكان هناك أيضًا قطعة جيلي بها جيلي أزرق من صنع فريند، قنديل البحر الأزرق.",
          burger3: "البرجر الجميل",
          burger3_description:
            "قطعة سلطع برجر ملونة قام سبونج بوب بانشاء سلطع برجر الملون لمحاولة جذب العملاء ال مقرمشات سلطع",
          menu_head2: "مقبلات",
          appetizer1: "عشب مجفف",
          appetizer1_description: "محاكاة ساخرة من اللحم البقري مقدد.",
          appetizer2: "القطع المرجانية",
          appetizer2_description:
            "وهي عبارة عن طبق جانبي يتكون من قطع صغيرة من المرجان الوردي الفاتح يتم تقديمها في صينية طعام ورقية باللونين الأحمر والأصفر. هناك أيضًا نوع مختلف من الفلفل الحار للمنتج.",
          appetizer3: "بطاطس عشب البحر",
          appetizer3_description:
            "تعد بطاطس عشب البحر طبقًا جانبيًا شائعًا يتم تقديمه في مقرمشات سلطع. أنها تبدو مثل البطاطس المقلية العادية. ومع ذلك، فهي تشبه إلى حد ما الأعشاب البحرية في طريقة تشكيلها. لديهم ثلاثة مظاهر مختلفة.",
          menu_head3: "مشروبات",
          drink1: "عشب البحر",
          drink1_description:
            "مشروب عشب البحر هو مشروب غازي يسبب الإدمان وربما يكون سامًا ويتم تقديمه في سلسلة مطاعم مقرمشات سلطع. يأتي في زجاجة خضراء بغطاء أصفر وقش، وله ملصق أصفر ساطع مع اسم المشروب بنص أحمر.",
          drink2: "حليب مخفوق",
          drink2_description:
            "إنه يأتي في مجموعة واسعة من النكهات والأشكال وعادة ما يتم تقديمه إما في كوب من الورق المقوى مع قش أو في كوب زجاجي مثلجات الآيس كريم.",
          drink3: "فيزي فانج",
          drink3_description:
            "فيزي فانج ليست مجرد صودا؛ إنه إحساس متلألئ في علبة بنية كراميل أنيقة. مع شعار جريء، فهو يشير إلى الكولا الكلاسيكية ولكنه يضيف لمسة فريدة لتجربة مرطبة راقية.",
          menu_head4: "حلوي",
          dessert1: "كعكة جيلي",
          dessert1_description: "حلوى عشوائية يخرجها سبونج بوب من الفرن.",
          dessert2: "فطيرة",
          dessert2_description:
            "تبدو مثل فطيرة التوت العادية، مع قشرة بنية ذهبية اللون وحشوة أرجوانية من الداخل. ومع ذلك، فهي في الواقع مادة متفجرة قوية جدًا تنفجر عند سقوطها أو رميها. كما أنها تنفجر بعد ساعات قليلة من تناولها، مما يؤدي إلى مقتل من يأكلها.",
          dessert3: "كعكة محلاة",
          dessert3_description:
            "يبدو وكأنه دونات عادية مع الشوكولاتة والرشات الوردية.",
        },
      };

      if (
        translations[selectedLanguage] &&
        translations[selectedLanguage][translationKey]
      ) {
        element.textContent = translations[selectedLanguage][translationKey];
      }
    });

    if (selectedLanguage === "ar") {
      bodyElement.classList.add("arabic");
    } else {
      bodyElement.classList.remove("arabic");
    }
  });
});
