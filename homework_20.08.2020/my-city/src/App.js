import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function City() {
    return(
        <div className="city">
            <h1>Днепр</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Collage_of_Dnipro_city_images.jpg/290px-Collage_of_Dnipro_city_images.jpg" alt="dnipro"/>
            <p>Днепр (Днипро́, укр. Дніпро́) — город, административный центр Днепропетровской области Украины и Днепровского района, а также центр Днепровской агломерации, расположенный на реках Днепр и Самара[7]. Четвёртый город по численности населения Украины после Киева, Харькова и Одессы. И второй по площади после Киева. До 1796 и с 1802 по 1926 год город имел название Екатериносла́в, с 1796 по 1802 год — Новоросси́йск, а с 1926 по 2016 год — Днепропетро́вск.</p>
        </div>
    );
}

function FavoritePlace() {
    return(
        <div className="place">
            <h1>Набережная</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/%D0%92%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D1%83%D1%8E_%D1%81_%D0%BC%D0%BE%D1%81%D1%82%D0%B0.JPG/300px-%D0%92%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D1%83%D1%8E_%D1%81_%D0%BC%D0%BE%D1%81%D1%82%D0%B0.JPG" alt="dnipro"/>
            <p>Набережная города Днепра (Украина) проходит по правому берегу реки Днепр от жилого массива Парус на западе до Южного моста на юге, где переходит в Далёкую улицу. Самая длинная набережная в Европе[источник не указан 1510 дней]. Состоит из трёх последовательных частей: Заводская набережная, Сичеславская набережная и набережная Победы.</p>
        </div>
    );
}

function OtherPlaces() {
    return(
        <div className="place">
            <h1>Богородицкая крепость</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/%D0%A1%D0%B0%D0%BC%D0%B0%D1%80.JPG/274px-%D0%A1%D0%B0%D0%BC%D0%B0%D1%80.JPG" alt="dnipro"/>
            <p>Земляные валы Богородицкой (Новобогородицкой) крепости сохранились в районе современного поселка Шевченко в черте города Днепра, Украина на правом берегу р. Самара. Памятник архитектуры национального значения.

                Архитектор крепости — немец Вильям фон Зален. Его непосредственным начальником был гетман Иван Мазепа.

                В различных источниках упоминаются разные названия крепости — Богородицкая и Новобогородицкая крепость, Богородичное, Богородичаны, Покровское, Самарский, Старосамарский, Богородичанский, Усть-Самарский ретраншемент.</p>
            <h1>Парк Шевченко</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/ParkShevchenkaDnipro.jpg/300px-ParkShevchenkaDnipro.jpg" alt="park"/>
            <p>Парк культуры и отдыха им. Т. Г. Шевченко (с 1790-х до 1925 года — Потёмкинский сад) — центральный и старейший парк города Днепр. Адрес: пл. Шевченко, 1.

                Один из двух главных садово-парковых комплексов Екатеринослава — Днепропетровска — Днепра (наряду с парком Глобы). Насчитывает около 8 тыс. деревьев и более 2 тыс. кустарников, всего 68 видов.

                Площадь парка вместе с Монастырским островом — 36 га. Делится на береговую и островную части.</p>
        </div>
    );
}

function Form() {

    const [link, setLink] = useState('');
    const [tag, setTag] = useState('');
    const [descr, setDescr] = useState('');

    const handleLink = (e) => {
        setLink(e.target.value);
    };
    const handleTag = (e) => {
        setTag(e.target.value);
    };
    const handleDescr = (e) => {
        setDescr(e.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        addImage(link, tag, descr);
    };

    const addImage = (link, tag, descr) => {
        if(link === '') {
            alert('Не тупите, вставте ссылку на фото!!!');
            return;
        }
        if(tag === '') tag = 'photo';
        if(descr === '') descr = 'photo';
        const wrap = document.querySelector(".wrapper");
        let block = document.createElement('div');
        block.className = 'imageBlock';
        block.innerHTML = `
            <img src="${link}" alt="${descr}"/>
            <p>${tag}</p>
        `;
        wrap.appendChild(block);
        alert('Image added successfully');
    };

    return (
        <Popup trigger={<button className="button" style={{marginTop: "15px"}}>Add image</button>} modal>
            {close => (
                <div>
                    <form onSubmit={handleSubmit} style={{width: "300px", margin: "auto" }}>
                        <input type="text" id="nik" placeholder="Логин"/><br/>
                        <input type="password" id="pas" placeholder="Пароль"/><br/>
                        <input type="email" id="email" placeholder="Email"/><br/>
                        <input type="text" id="link" placeholder="Ссылка на фото" onChange={handleLink}/><br/>
                        <input type="text" id="descr" placeholder="Описание фото" onChange={handleDescr}/><br/>
                        <input type="text" id="tag" placeholder="Теги" onChange={handleTag}/><br/>
                        <input className='subm' type="submit" defaultValue="Добавить" />
                    </form>
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                </div>
            )}
        </Popup>
    )
}

function Photos() {

    return(
        <div className="places">
            <Form />
            <h1>Фото Днепра</h1>
            <div className="wrapper">
                <div className="imageBlock">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D0%B2_%D0%9A%D0%BE%D0%B4%D0%B0%D0%BA%D0%B0%D1%85.jpg/266px-%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D0%B2_%D0%9A%D0%BE%D0%B4%D0%B0%D0%BA%D0%B0%D1%85.jpg" alt="sobor"/>
                    <p>#sobor1</p>
                </div>
                <div className="imageBlock">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/%D0%A1%D0%BF%D0%B0%D1%81%D0%BE-%D0%9F%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%2C_%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%2C_%D0%96%D0%BE%D0%B2%D1%82%D0%BD%D0%B5%D0%B2%D0%B0_%D0%BF%D0%BB%D0%BE%D1%89%D0%B0_03.JPG/265px-%D0%A1%D0%BF%D0%B0%D1%81%D0%BE-%D0%9F%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%2C_%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%2C_%D0%96%D0%BE%D0%B2%D1%82%D0%BD%D0%B5%D0%B2%D0%B0_%D0%BF%D0%BB%D0%BE%D1%89%D0%B0_03.JPG" alt="sobor2"/>
                    <p>#sobor2</p>
                </div>
                <div className="imageBlock">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%A2%D1%80%D0%BE%D0%B8%D1%86%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%28%D0%94%D0%BD%D0%B5%D0%BF%D1%80%29_%D0%A7%D1%83%D0%BF%D1%80%D0%B8%D0%BD%D0%B0_%D0%92%D0%B0%D0%B4%D0%B8%D0%BC._%D0%90.jpg/266px-%D0%A1%D0%B2%D1%8F%D1%82%D0%BE-%D0%A2%D1%80%D0%BE%D0%B8%D1%86%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%28%D0%94%D0%BD%D0%B5%D0%BF%D1%80%29_%D0%A7%D1%83%D0%BF%D1%80%D0%B8%D0%BD%D0%B0_%D0%92%D0%B0%D0%B4%D0%B8%D0%BC._%D0%90.jpg" alt="sobor3"/>
                    <p>#sobor3</p>
                </div>
            </div>
        </div>
    );
}

function NavMenu() {
    return(
        <>
            <Link to="/" className="links">Мой город</Link>
            <Link to="/favoritePlace" className="links">Жемчужина города</Link>
            <Link to="/otherPlaces" className="links">Популярные места</Link>
            <Link to="/photos" className="links">Фотографии</Link>
        </>
    );
}

function NotFound() {
    return(
        <div className="notFound">
            <h1>Not Found</h1>
        </div>
    );
}

export default function App() {
    return(
        <div className="App">
            <Router>
                <NavMenu />
                <Switch>
                    <Route exact path="/" component={City} />
                    <Route path="/favoritePlace" component={FavoritePlace} />
                    <Route path="/otherPlaces" component={OtherPlaces} />
                    <Route path="/photos" component={Photos} />
                    {/*<Route path="/" component={News} />*/}
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
}