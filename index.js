import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5174;

app.use(cors());
app.use(express.json());

const data = {
  company: 'ООО "ТЕХНОЛОГИЯ"',
  category: 'Категория статей',
  title: 'Дорожно-строительное оборудование',
  content: {
    text1:
      'Наша компания ООО «ТЕХНОЛОГИЯ» рада предложить Вам разумные решения для дорожно-строительных компаний:',
    lists: [
      'оборудование для ремонта дорожного полотна;',
      'оборудование для нагрева жидкого теплоносителя;',
      'линии дозирования адгезионных добавок, флюксанта, активирующей смеси при приготовлении минерального порошка;',
      'плавители битума;',
      'оборудование для изготовления холодных битумоминеральных, песчано-гравийных и песчано-щебеночных смесей заданного гранулированного состава, а так же песчано-солевых смесей для зимнего содержания дорожного полотна;',
      'навесное оборудование на асфальтоукладчик (Новачип);',
      'рециклеры асфальтобетона, оборудование для производства и перевозки литого асфальта.',
    ],
    text2:
      'Оборудование сочетает в себе надежность, простоту в обслуживании и конкурентную цену. Гарантия на оборудование до 18 месяцев.',
    text3: 'Остались вопросы? Обязательно с нами свяжитесь и мы ответим на них. ',
    phones: [
      {
        href: +78462440131,
        number: '+7-(846)-244-01-31',
        view: 'Станционарный',
      },
      {
        href: +79372176222,
        number: '+7-(937)-217-62-22',
        view: 'Отдел продаж',
      },
    ],
    links: ['bitumtechnology.ru', 'office@roadteam.ru'],
    imageUrl: 'https://placehold.it/1000x1000',
  },
};

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
