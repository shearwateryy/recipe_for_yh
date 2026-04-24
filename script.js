const recipes = [
  {
    title: "鲅鱼饺子",
    sortKey: "ba yu jiao zi",
    provider: "YY",
    avatarImage: "assets/menu2/image1.png",
    accent: "#6d95b8",
    bottomLift: "medium",
    subtitle: "哎呀什么时候来天津吃！",
    blessing:
      "hi宇昊！祝你生日快乐！特别感谢那天晚上你来找我聊天，被惦记和关心让我感觉很温暖，以后也要多多聊天呀！新的一岁希望你天天开心，健健康康！愿我们都能坚持做自己！ps.俺其实根本不会做鲅鱼饺子只是爱吃！更方便一点的话，你可以，来天津吃！嘿嘿、、",
    link: {
      label: "小红书鲅鱼饺子参考链接",
      url: "http://xhslink.com/o/60i7NCRL6rL",
    },
    sections: [
      {
        title: "食材（3-4 人份）",
        items: ["鲅鱼 1 条、五花肉 100g、高汤/水 100ml、嫩韭菜 1 把（我不爱吃要不然别加了）、生姜、葱、花椒。"],
      },
      {
        title: "调料",
        items: ["料酒 2 勺、生抽 1 勺、白胡椒 0.5 勺、盐 1 小勺、白糖 1 小勺、香油 1 勺、玉米淀粉 2 勺。"],
      },
      {
        title: "步骤",
        ordered: true,
        items: [
          "鲅鱼刮鳞，去内脏、去鱼皮，取鱼肉剁泥，小心不要有刺。",
          "五花肉剁泥，和鱼肉混合。花椒水、姜沫沫和葱片片少量多次加入肉泥，再加料酒、白胡椒搅拌。",
          "加入生抽、白糖、盐继续搅拌，再把高汤/水分三次加入，最后加淀粉。",
          "包饺砸！",
        ],
      },
    ],
  },
  {
    title: "锅包肉",
    sortKey: "guo bao rou",
    provider: "玉清",
    avatarImage: "assets/menu2/image2.png",
    accent: "#9a6b3f",
    bottomLift: "medium",
    blessing:
      "之前吃你做的卤牛肉非常好吃，锅包肉这种难度的菜看来只有你能做好了！希望有机会能吃上你做的锅包肉（柠檬口味或者山楂或者凤梨的新派改良锅包肉）！生日快乐！",
    video: {
      title: "锅包肉参考视频",
      url: "https://player.bilibili.com/player.html?isOutside=true&bvid=BV1Q4qPYhEdE&page=1",
    },
    sections: [],
  },
  {
    title: "椒盐九肚鱼",
    sortKey: "jiao yan jiu du yu",
    provider: "希敏",
    avatarImage: "assets/recipes/image2.png",
    noVerticalScroll: true,
    accent: "#44745a",
    bottomLift: "none",
    subtitle: "外酥里嫩，入口即化",
    blessing:
      "宇昊生日快乐！我推荐的是椒盐九肚鱼，外面稣脆，入口即化！本来以为是其它地方的菜，结果一查发现就是广东本地的~ 但是它的制作过程包括了油炸，恰巧前段时间我在饭堂和老外闲聊时提到油炸食物，我一直觉得油炸太费油所以不做相关食物，但他们觉得油可以重用，反而很省资源，比如炸个三四次才换一轮油，不知道你怎么看呢",
    link: {
      label: "小红书自制椒盐九肚鱼教程",
      url: "https://www.xiaohongshu.com/explore/6971f664000000002202da57?xsec_token=ABU3Smxt_zmX1PUjWmeNcEy6yOmx4UuPvZ0tS94b6WoS0=&xsec_source=pc_search&source=unknown",
    },
    sections: [
      {
        title: "准备食材",
        items: ["九肚鱼（豆腐鱼）8 条，处理干净去头去内脏就行。"],
      },
      {
        title: "腌料、裹粉与调味",
        items: [
          "腌料：料酒 1 勺、一点点盐、白胡椒粉半勺，姜黄粉 1 勺（没有直接省，不影响味道）。",
          "裹粉：玉米淀粉和普通面粉 1:1 混，量能裹满鱼柳就好。",
          "调味：椒盐粉（灵魂！）、辣椒粉（爱吃辣加）。",
        ],
      },
      {
        title: "实操步骤",
        ordered: true,
        items: [
          "处理九肚鱼要轻手轻脚，它嫩得跟豆腐似的。用厨房纸把鱼身水分彻底吸干，这步很重要，不然裹粉会掉。",
          "吸干的鱼柳放进碗里，加腌料轻轻抓匀，腌 10 分钟去腥。",
          "腌好的鱼柳挨个放进粉里，两面都裹上粉，再轻轻拍掉多余粉粒，裹薄一点炸出来更酥。",
          "起锅倒油，油温烧到六成热，鱼柳逐条下锅，中小火炸 2-3 分钟，炸到金黄定型后捞出。",
          "开大火把油温拉高，再把鱼柳倒回去复炸 30 秒，这是外酥里嫩的关键。",
          "刚炸好的鱼柳趁热撒椒盐粉，爱吃辣的加勺辣椒粉，翻两下拌匀就可以吃。",
        ],
      },
      {
        title: "小 tips",
        items: ["九肚鱼水分很多，厨房纸一定要多吸几遍。", "复炸千万别省，外壳会立刻变脆。", "除了椒盐，撒甘梅粉也很好吃，酸甜解腻。"],
      },
    ],
  },
  {
    title: "麻酱意大利凉面",
    singleLineTitle: true,
    sortKey: "ma jiang yi da li liang mian",
    provider: "雅畅",
    avatarImage: "assets/recipes/image3.png",
    accent: "#c4913a",
    bottomLift: "large",
    subtitle: "雅畅招牌",
    blessing: "留子友好，可荤可素，反复验证过好吃。祝宇昊生日快乐！",
    sections: [
      {
        title: "原料",
        items: [
          "意大利面一包，推荐 5 号。不要用通心粉之类的异类，不要用扁面。",
          "配菜：西红柿、洋葱（没有会少灵魂）、黄瓜、胡萝卜、彩椒。想吃肉可以自己煮点鸡丝，也可以加脱皮花生米或任何没有皮的坚果。",
          "调料：糖、陈醋、生抽（推荐厨邦）、老干妈、二八芝麻酱。不要盐，因为会有致死量生抽。",
        ],
      },
      {
        title: "步骤",
        items: [
          "意面煮的时间可以略短，硬一些更好吃，然后过凉水。",
          "所有菜剁吧剁吧放一个大盆。",
          "加一平勺糖、适量老干妈。芝麻酱太稠就先用热水搅和一下。",
          "生抽库库加，要到能嚯开芝麻酱的水平。醋多些更爽口开胃，拌好了最后撒花生。",
        ],
      },
    ],
  },
  {
    title: "排骨焖饼",
    sortKey: "pai gu men bing",
    provider: "晓彤",
    avatarImage: "assets/recipes/image4.png",
    accent: "#4f76a6",
    bottomLift: "small",
    subtitle: "曾晨老师赠别名——小猪盖被",
    blessing: "宇昊生日快乐！干啥都顺利，预测毕业的时候会拿到 AEE 辅修厨师证！",
    sections: [
      {
        title: "备料",
        items: ["猪排骨，提前焯水。", "面皮：和面太难，直接买饺子皮擀薄即可。"],
      },
      {
        title: "香料与调味",
        items: ["八角、干辣椒、花椒、葱、姜、蒜。", "老抽、盐。"],
      },
      {
        title: "步骤",
        ordered: true,
        items: [
          "油五成热，下八角、干辣椒、花椒、葱姜蒜炒香。",
          "加入焯水后的猪排，炒到熟色。",
          "加老抽，翻炒上色，放盐。",
          "加水没过排骨，盖锅盖，煮开。",
          "沸腾的时候把擀开的面皮铺在猪排上面，盖锅盖。等面皮鼓起来、蒸熟，开盖捞出，再放下一张。",
          "汤汁快收完，差不多也是最后一张面皮蒸好，把面皮一起放进锅里，翻炒收汁。",
          "可以根据喜好在吃之前加香菜葱花，出锅即可。",
        ],
      },
    ],
  },
  {
    title: "有手就会的花椒鸡腿",
    displayTitle: "有手就会的<br>花椒鸡腿",
    sortKey: "you shou jiu hui de hua jiao ji tui",
    provider: "博雅",
    avatarImage: "assets/recipes/image6.png",
    recipeImage: "assets/recipes/image5.png",
    imageOnly: true,
    accent: "#6a9f3a",
    bottomLift: "large",
    subtitle: "封面图来啦——",
    blessing: "宇昊，生日快乐。又想起来那年你拎着蛋糕一路到排沙，转眼间三年就过去了！祝你永远勇敢，一生与梦相拥。",
    sections: [],
  },
  {
    title: "鱼香肉丝（四川版）",
    displayTitle: "鱼香肉丝<br>（四川版）",
    centeredTitle: true,
    sortKey: "yu xiang rou si si chuan ban",
    provider: "陈青",
    avatarImage: "assets/recipes/image1.png",
    noVerticalScroll: true,
    accent: "#9f2f28",
    subtitle: "下饭神器",
    blessing:
      "宇昊，生日快乐！祝你美食创作没有瓶颈，做饭的同时好好吃饭，享受人生的每一餐，每一道风味，在自己喜欢的领域里收获十分的体验！这道鱼香肉丝是我非常喜欢的川菜之一，它口感十分丰富，极其开胃和下饭，希望你会喜欢！",
    sections: [
      {
        title: "食材",
        items: ["瘦肉（可以是猪里脊部分）、胡萝卜、莴笋、木耳。"],
      },
      {
        title: "调料",
        items: [
          "食用油、生抽、老抽、蚝油、陈醋、白糖、胡椒粉、盐、鸡精。",
          "红泡椒、郫县豆瓣酱、淀粉、大蒜、生姜、大葱、料酒。",
        ],
      },
      {
        title: "步骤",
        ordered: true,
        items: [
          "瘦肉切丝儿，食用油 2 勺、料酒 1 勺、白胡椒粉 1 勺、生抽 1 勺、老抽 1/2 勺、干淀粉 1 勺抓匀，腌制 10 分钟备用。",
          "莴笋、胡萝卜、木耳切丝儿；泡椒切碎儿；大蒜和生姜剁末儿；大葱切段儿备用。",
          "调鱼香汁：2 勺生抽、1/2 勺老抽、1 勺蚝油、1 勺白糖、2 勺陈醋、1 勺淀粉、一点点胡椒粉、适量盐和鸡精、小半碗清水，加入大葱段儿搅拌备用。",
          "起锅烧油，油热放入瘦肉丝儿滑熟，表面发白即可盛出。",
          "锅内留底油，加入泡椒、姜蒜末儿和 1 勺豆瓣酱慢慢炒香。先放胡萝卜炒半分钟，再放莴笋和木耳炒断生。",
          "放入瘦肉翻匀，倒入鱼香汁儿，急炒几下，大火收汁儿，即可出锅。",
        ],
      },
      {
        title: "小贴士",
        items: [
          "豆瓣酱一定要小火炒熟，不然会有一股奇怪的豆子味；不喜欢这个味道可以不加。",
          "不吃辣的话少放点儿泡椒。",
          "喜欢酸甜口的可以适当增加醋和糖的比例。",
          "食材配比大概 1:1:1，喜欢某种食材可自行增加比例。",
          "油的比例决定了这个菜的油腻程度。",
          "以上过程来源于小红书和下厨房 app，从未实操过，做好了是师傅有技术，做不好也是师傅的技术，一切翻车均与本人无关哈哈哈。",
        ],
      },
    ],
  },
].sort((a, b) => a.sortKey.localeCompare(b.sortKey, "en"));

let page = "cover";
let recipeIndex = 0;

const indexList = document.querySelector("#recipeIndex");
const recipeShell = document.querySelector("#recipeShell");
const recipePage = document.querySelector(".page--recipe");
const spread = document.querySelector("#spread");
const pageCount = document.querySelector("#pageCount");
const prevPage = document.querySelector("#prevPage");
const nextPage = document.querySelector("#nextPage");

function setPage(nextPageName) {
  page = nextPageName;
  if (page !== "recipe") {
    spread.classList.remove("page-height-small", "page-height-medium", "page-height-large");
  }
  document.querySelectorAll(".page").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.page === page);
  });
  updateNav();
}

function updateNav() {
  prevPage.disabled = page === "cover";
  nextPage.disabled = page === "recipe" && recipeIndex === recipes.length - 1;
}

function renderSection(section) {
  if (section.paragraphs) {
    return `
      <section class="recipe-section">
        <h4>${section.title}</h4>
        ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </section>
    `;
  }

  const listTag = section.ordered ? "ol" : "ul";
  return `
    <section class="recipe-section">
      <h4>${section.title}</h4>
      <${listTag}>
        ${section.items.map((item) => `<li>${item}</li>`).join("")}
      </${listTag}>
    </section>
  `;
}

function showRecipe(index) {
  recipeIndex = (index + recipes.length) % recipes.length;
  const recipe = recipes[recipeIndex];
  recipePage.classList.toggle("no-vertical-scroll", Boolean(recipe.noVerticalScroll));
  recipePage.classList.toggle("bottom-lift-small", recipe.bottomLift === "small");
  recipePage.classList.toggle("bottom-lift-medium", recipe.bottomLift === "medium");
  recipePage.classList.toggle("bottom-lift-large", recipe.bottomLift === "large");
  spread.classList.toggle("page-height-small", recipe.bottomLift === "small");
  spread.classList.toggle("page-height-medium", recipe.bottomLift === "medium");
  spread.classList.toggle("page-height-large", recipe.bottomLift === "large");
  let recipeContent = recipe.sections.map(renderSection).join("");
  if (recipe.imageOnly) {
    recipeContent = `<figure class="image-page"><img src="${recipe.recipeImage}" alt="${recipe.title}" /></figure>`;
  }
  if (recipe.video) {
    recipeContent = `
      <section class="video-page">
        <iframe
          src="${recipe.video.url}"
          title="${recipe.video.title}"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </section>
    `;
  }

  recipeShell.innerHTML = `
    <aside class="recipe-meta">
      <h3 class="${recipe.singleLineTitle ? "single-line-title" : ""} ${recipe.centeredTitle ? "centered-title" : ""}">${recipe.displayTitle || recipe.title}</h3>
      ${recipe.subtitle ? `<p class="recipe-subtitle">${recipe.subtitle}</p>` : ""}
      <div class="provider-block">
        <img class="provider-photo" src="${recipe.avatarImage}" alt="${recipe.provider} 的头像" style="border-color:${recipe.accent}" />
        <div>
          <span class="provider-label">推荐人</span>
          <strong>${recipe.provider}</strong>
        </div>
      </div>
      <section class="birthday-note">
        <h4>生日祝福</h4>
        <p>${recipe.blessing}</p>
        ${
          recipe.link
            ? `<a class="recipe-link" href="${recipe.link.url}" target="_blank" rel="noreferrer">${recipe.link.label}</a>`
            : ""
        }
      </section>
      ${
        recipe.recipeImage && !recipe.imageOnly
          ? `<img class="recipe-extra-image" src="${recipe.recipeImage}" alt="${recipe.title} 封面图" />`
          : ""
      }
    </aside>
    <div class="recipe-body">
      ${recipeContent}
    </div>
  `;
  pageCount.textContent = `${recipeIndex + 1} / ${recipes.length}`;
  setPage("recipe");
}

function buildIndex() {
  indexList.innerHTML = recipes
    .map(
      (recipe, index) => `
      <li>
        <button class="index-button" type="button" data-index="${index}">
          <span class="dish-name dish-name--catalog">${recipe.title}</span>
          <span class="provider-name">${recipe.provider} 推荐</span>
        </button>
      </li>
    `,
    )
    .join("");
}

buildIndex();
updateNav();

document.querySelector("#openBook").addEventListener("click", () => setPage("catalog"));

indexList.addEventListener("click", (event) => {
  const button = event.target.closest(".index-button");
  if (button) {
    showRecipe(Number(button.dataset.index));
  }
});

prevPage.addEventListener("click", () => {
  if (page === "catalog") {
    setPage("cover");
  } else if (page === "recipe" && recipeIndex === 0) {
    setPage("catalog");
  } else if (page === "recipe") {
    showRecipe(recipeIndex - 1);
  }
});

nextPage.addEventListener("click", () => {
  if (page === "cover") {
    setPage("catalog");
  } else if (page === "catalog") {
    showRecipe(0);
  } else if (page === "recipe" && recipeIndex < recipes.length - 1) {
    showRecipe(recipeIndex + 1);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" && !nextPage.disabled) {
    nextPage.click();
  }
  if (event.key === "ArrowLeft" && !prevPage.disabled) {
    prevPage.click();
  }
  if (event.key === "Escape" && page === "recipe") {
    setPage("catalog");
  }
});
