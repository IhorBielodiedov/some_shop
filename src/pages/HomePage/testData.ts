import promo1 from "../../assets/img/promo.png";

export const oneSlideWithBtn : {
    imageSrc: string;
    title: string;
    description: string;
    button?: {
        text: string;
        url: string;
    }
}[] = [
    {
        imageSrc: promo1,
        title: "Управляйте быстрее",
        description: "Включите быстрые команды, чтобы менять громкость, ставить следующий трек или серию и запускать умные устройства, не обращаясь к Алисе по имени: - Громче",
        button: {
            text: "Узнать подробней",
            url: "www.google.com"
        }
    },
];

export const manyDifferentSlidesWithBtn: {
    imageSrc: string;
    title: string;
    description: string;
    button?: {
        text: string;
        url: string;
    }
}[] = [
    {
        imageSrc: promo1,
        title: "Управляйте быстрее",
        description: "Включите быстрые команды, чтобы менять громкость, ставить следующий трек или серию и запускать умные устройства, не обращаясь к Алисе по имени: - Громче",
        button: {
            text: "Узнать подробней",
            url: "https://www.google.com"
        }
    },
    {
        imageSrc: "https://via.placeholder.com/500",
        title: "Контролируйте освещение",
        description: "Управляйте светом в вашем доме, создавайте уютные сценарии и включайте лампы с помощью голосовых команд.",
        button: {
            text: "Купить сейчас",
            url: "https://www.amazon.com"
        }
    },
    {
        imageSrc: "https://via.placeholder.com/500",
        title: "Безопасность прежде всего",
        description: "Получайте мгновенные уведомления на ваш телефон при обнаружении движения или открытии дверей.",
        button: {
            text: "Подробнее",
            url: "https://www.example.com"
        }
    },
    {
        imageSrc: "https://via.placeholder.com/500",
        title: "Комфорт и удобство",
        description: "Настраивайте идеальный климат в вашем доме и управляйте температурой с любого устройства.",
        // No button for this slide
    },
    {
        imageSrc: "https://via.placeholder.com/500",
        title: "Сохраните энергию",
        description: "Сократите потребление энергии с умными выключателями и приборами, которые работают только тогда, когда это необходимо.",
        button: {
            text: "Посмотреть предложения",
            url: "https://www.energy.com"
        }
    },
    {
        imageSrc: "https://via.placeholder.com/500",
        title: "Полный контроль",
        description: "Отслеживайте все устройства в вашем доме и управляйте ими с единого интерфейса.",
        // No button for this slide
    }
];