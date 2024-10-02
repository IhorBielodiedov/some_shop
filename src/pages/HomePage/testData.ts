import promo1 from "../../assets/img/promo.png";
import story1 from "../../assets/img/stories/story1_1.png";
import story2 from "../../assets/img/stories/story2_1.png";
import story3_1 from "../../assets/img/stories/story3_1.png";
import story3_2 from "../../assets/img/stories/story3_2.png";
import story4_1 from "../../assets/img/stories/story4_1.png";
import story4_2 from "../../assets/img/stories/story4_2.png";

export const oneSlideWithBtn: {
  imageSrc: string;
  title: string;
  description: string;
  button?: {
    text: string;
    url: string;
  };
}[] = [
  {
    imageSrc: promo1,
    title: "Управляйте быстрее",
    description:
      "Включите быстрые команды, чтобы менять громкость, ставить следующий трек или серию и запускать умные устройства, не обращаясь к Алисе по имени: - Громче",
    button: {
      text: "Узнать подробней",
      url: "www.google.com",
    },
  },
];

export const manyDifferentSlidesWithBtn: {
  imageSrc: string;
  title: string;
  description: string;
  button?: {
    text: string;
    url: string;
  };
}[] = [
  {
    imageSrc: promo1,
    title: "Управляйте быстрее",
    description:
      "Включите быстрые команды, чтобы менять громкость, ставить следующий трек или серию и запускать умные устройства, не обращаясь к Алисе по имени: - Громче",
    button: {
      text: "Узнать подробней",
      url: "https://www.google.com",
    },
  },
  {
    imageSrc: "https://via.placeholder.com/500",
    title: "Контролируйте освещение",
    description:
      "Управляйте светом в вашем доме, создавайте уютные сценарии и включайте лампы с помощью голосовых команд.",
    button: {
      text: "Купить сейчас",
      url: "https://www.amazon.com",
    },
  },
  {
    imageSrc: "https://via.placeholder.com/500",
    title: "Безопасность прежде всего",
    description:
      "Получайте мгновенные уведомления на ваш телефон при обнаружении движения или открытии дверей.",
    button: {
      text: "Подробнее",
      url: "https://www.example.com",
    },
  },
  {
    imageSrc: "https://via.placeholder.com/500",
    title: "Комфорт и удобство",
    description:
      "Настраивайте идеальный климат в вашем доме и управляйте температурой с любого устройства.",
    // No button for this slide
  },
  {
    imageSrc: "https://via.placeholder.com/500",
    title: "Сохраните энергию",
    description:
      "Сократите потребление энергии с умными выключателями и приборами, которые работают только тогда, когда это необходимо.",
    button: {
      text: "Посмотреть предложения",
      url: "https://www.energy.com",
    },
  },
  {
    imageSrc: "https://via.placeholder.com/500",
    title: "Полный контроль",
    description:
      "Отслеживайте все устройства в вашем доме и управляйте ими с единого интерфейса.",
    // No button for this slide
  },
];

export const stories1: {
  imageSrc: string;
  title: string;
  description: string;
  button?: {
    text: string;
    url: string;
  };
}[] = [
  {
    imageSrc: story1,
    title: "Управляйте быстрее",
    description:
      "Включите быстрые команды, чтобы менять громкость, ставить следующий трек или серию и запускать умные устройства, не обращаясь к Алисе по имени: - Громче",
  },
];

export const stories2: {
  imageSrc: string;
  title: string;
  description: string;
  button?: {
    text: string;
    url: string;
  };
}[] = [
  {
    imageSrc: story2,
    title: "Можно не говорить Алиса",
    description:
      "Чтобы поскорее переключить песню, не подходящую для семейного ужина, просто озвучьте команду: \n— Дальше",
  },
  {
    imageSrc: story2,
    title: "Сценарии стали ещё более удобными! Что добавили:",
    description:
      "• Условия через «И»\n• Состояние устройств как триггер\n• Шаблоны сценариев\n• Каталог устройств, совместимых с Алисой",
  },
];

export const stories3: {
  imageSrc: string;
  title: string;
  description: string;
  button?: {
    text: string;
    url: string;
  };
}[] = [
  {
    imageSrc: story3_1,
    title: "Алиса с YandexGPT поможет разобраться в сложном",
    description:
      "— Алиса, зачем в компьютере матрица?\n— Алиса, что такое дисперсия?\n— Алиса, как устроен синхрофазотрон?",
  },
  {
    imageSrc: story3_2,
    title: "— Алиса, сохрани",
    description:
      "Когда хотите продолжить работу с ответом, попросите Алису в Станции отправить его в чат - и редактируйте на телефоне или компьютере.",
  },
];
export const stories4: {
  imageSrc: string;
  title: string;
  description: string;
  button?: {
    text: string;
    url: string;
  };
}[] = [
  {
    imageSrc: story4_1,
    title: "Новое в умном доме! Светодиодная лента Яндекса",
    description:
      "С ней дома можно создавать атмосферное освещение для самых разных ситуаций.",
  },
  {
    imageSrc: story4_2,
    title: "16 миллионов цветов",
    description:
      "И гибкие настройки температуры и яркости свечения — управляйте ими через приложение или голосом через Станцию:\n— Алиса, включи фиолетовую подсветку, яркость 40%",
    button: {
      text: "Узнать подробнее",
      url: "https://yandex.com/",
    },
  },
];
