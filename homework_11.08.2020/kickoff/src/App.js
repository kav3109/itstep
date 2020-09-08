import React, {useState} from 'react';
import './App.css';

function getBook() {
    return (
        <div>
            <img src="https://img3.labirint.ru/rc/999d63d5ad60aacb9122d894d8187f3a/220x340/books60/592489/cover.jpg?1564028389" alt="Колобок"/>
            <p><b>Название</b>: <span>Колобок</span></p>
            <p><b>Автор</b>: <span>Л. В. Рожникова и И. Б. Гасанова.</span></p>
            <p><b>Жанр</b>: <span> для детей</span></p>
            <p><b>Страниц</b>: <span> 32</span></p>
            <p><b>Описание</b>: <span> Знаменитый непоседа Колобок от студии "Пилот" вновь отправляется в опасное путешествие - теперь по книжным страницам, приглашая с собой читателей всех возрастов. Книга подготовлена по великолепному мультфильму, вышедшему на экраны в 2012 году.</span></p>
        </div>
    );
}

function getBand() {
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Nadieshda-p1040164.jpg/274px-Nadieshda-p1040164.jpg" alt="Колобок"/>
            <p><b>Название</b>: <span>Золотое кольцо</span></p>
            <p><b>Участники</b>: <span>Надежда Кадышева, Александр Костюк, Андрей Куреденко, Валерий Жуков, Дмитрий Иванов, Владимир Пудовкин</span></p>
            <p><b>Жанр</b>: <span> тяжелый русский сонг</span></p>
            <p><b>Альбомы</b>:</p>
            <ul>
                <li>Калинка (Perestroika. GERMANY, 1990)</li>
                <li>Золотое кольцо (Русский Диск, 1991)</li>
                <li>Made In Japan (Build INC. JAPAN, 1993)</li>
                <li>Виновата ли я… (Студия Союз, 1995)</li>
                <li>Течёт ручей (Студия Союз, 1995)</li>
                <li>Печальный ветер (Студия Союз, 1995)</li>
                <li>Очаровательные глазки (Студия Союз, 1996)</li>
                <li>Уходи, горе (Студия Союз, 1997)</li>
                <li>Милая роща (Студия Союз, 1998)</li>
                <li>Зачем это лето… (Студия Союз, 1999)</li>
                <li>Ах, судьба моя, судьба (Студия Союз, 2000)</li>
                <li>Подари, березка (Студия Союз, 2002)</li>
                <li>Плачет дождик (Квадро Диск, 2003)</li>
                <li>Когда-нибудь (Студия Союз, 2003)</li>
                <li>Широка река (Студия Союз, 2004)</li>
                <li>Песни Из Музыкальной Сказки «Тёпа И Его Друзья» (Студия Союз, 2004)</li>
                <li>Моя любовь (Студия Союз, 2006)</li>
                <li>Русский альбом (Квадро Диск, 2006)</li>
                <li>Посвящение земле русской (Квадро Диск, 2007)</li>
                <li>Зажигаем вновь!!! (Студия Союз, 2008)</li>
                <li>И вновь любовь… (Квадро Диск, 2009)</li>
                <li>Сударушка (Квадро Диск, 2010)</li>
                <li>И льется песня… (Квадро диск, 2012)</li>
                <li>Светят звёзды (Квадро диск, 2013)</li>
                <li>Ты рядом (Квадро Диск, 2014)</li>
                <li>Всё как прежде (United Music Group, 2018)</li>
            </ul>
        </div>
    );
}

function getRecipe() {
    return (
        <div>
            <div>
                <img src="https://eda.ru/img/eda/c620x415i/s1.eda.ru/StaticContent/Photos/110811142241/140331123725/p_O.jpg" alt="Колобок"/>
                <p><b>Название</b>: <span>Яичница в хлебе</span></p>
                <p><b>Ингридиенты</b>:</p>
                <ul>
                  <li>Куриное яйцо</li>
                  <li>Белый хлеб</li>
                </ul>
                <p><b>ИНСТРУКЦИЯ ПРИГОТОВЛЕНИЯ</b>: </p>
                <ol>
                  <li>Берем кусочек хлеба (можно взять любой хлеб, главное, чтобы был с корочкой), вырезаем из него сердцевину и полученную корочку обжариваем на сковородке.</li>
                  <li>Затем заливаем туда яйцо и обжариваем с двух сторон. Так же туда можно добавить помидоры, ветчину, зелень и любые угодные вам добавки.</li>
                </ol>
            </div>
        </div>
    );
}

function App() {

  const [count, setCount] = useState('');

  return (
      <div className="content" role="main">
          <div className="card-container">
            <button className="card" onClick={() => setCount(getBook())}>Favorite Book</button>
            <button className="card" onClick={() => setCount(getBand())}>Favorite Band</button>
            <button className="card" onClick={() => setCount(getRecipe())}>Favorite Recipe</button>
          </div>
          <div className="card-content">
              {count}
          </div>
      </div>
  );
}
export default App;