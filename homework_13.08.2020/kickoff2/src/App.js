import React, {useState, useEffect} from 'react';
import './App.css';

function getFilm() {
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Brilruka.jpg/220px-Brilruka.jpg" alt="arm"/>
            <p><b>Title</b>: <span> The Diamond Arm</span></p>
            <p><b>Directed by</b>: <span> Leonid Gaidai</span></p>
            <p><b>Written by</b>: <span> Leonid Gaidai, Yakov Kostyukovsky, Moris Slobodskoy</span></p>
            <p><b>Release date</b>: <span> April 28, 1969</span></p>
            <p><b>Running time</b>: <span> 100 minutes</span></p>
            <p><b>Country</b>: <span> Soviet Union</span></p>
            <p><b>Plot</b>: <span> The boss of a black market ring (known only as "The Chief") wants to smuggle a batch of jewelry from a foreign state into the Soviet Union by hiding it inside the orthopedic cast of a courier. The Chief sends a minor henchman named Gennadiy 'Gesha' Kozodoyev (played by Mironov) to serve as the courier. Kozodoyev travels to Turkey via a tourist cruise ship. The local co-conspirators do not know what the courier looks like; they only know that he is supposed to say a code word to identify himself. Due to a mix-up, they mistake Kozodoyev's fellow passenger from the cruise ship, the "ordinary Soviet citizen" Semyon Gorbunkov (played by Nikulin) for the courier. They place a cast around his arm and put the contraband jewels inside the cast. Upon the cruise ship's return to the Soviet Union, Gorbunkov lets the police know what happened, and the police captain, who is working undercover as a taxi driver, uses Gorbunkov as bait to catch the criminals. Gesha and Lyolik (another of Chief's henchmen, played by Papanov) attempt to lure Gorbunkov into situations where they can quietly, without a wetwork, remove the cast and reclaim the contraband jewels.</span></p>
        </div>
    );
}

function getPersonalPage() {
    return (
        <div>
            <img width={300} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c8ce2b20-8736-40b0-bca8-5e90af4ab625/d7vqkfx-ef7c6793-c588-4a97-bdbc-4a0238a69745.png/v1/fill/w_1024,h_1416,q_80,strp/scorpion_mkx_by_j3_designs_d7vqkfx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNDE2IiwicGF0aCI6IlwvZlwvYzhjZTJiMjAtODczNi00MGIwLWJjYTgtNWU5MGFmNGFiNjI1XC9kN3Zxa2Z4LWVmN2M2NzkzLWM1ODgtNGE5Ny1iZGJjLTRhMDIzOGE2OTc0NS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kGfIj5LVlz4CgA-oX1QNTtOvltCDwQ-aMlCNAkrUdQE" alt="my"/>
            <p><b>Phone</b>: <span> +0001234567</span></p>
            <p><b>Email</b>: <span> kav3109@gmail.com</span></p>
            <p><b>Location</b>: <span> Dnipro City, Ukraine</span></p>
            <p><b>Skills</b>:</p>
            <ul>
                <li>skill one</li>
                <li>skill two</li>
                <li>skill three</li>
            </ul>

            <p><b>About Me</b>: <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci, animi aspernatur autem blanditiis delectus ducimus eaque esse est eum fuga fugit in ipsam iure molestias natus numquam officiis omnis optio, perferendis placeat quasi quibusdam quidem ratione repudiandae saepe sequi sunt temporibus voluptatem. Ipsum iste magnam minus veritatis voluptas.</span></p>
        </div>
    );
}

function getFavoriteAnimal() {
    return (
        <div>
            <img width={300} src="https://scx2.b-cdn.net/gfx/news/hires/2018/2-dog.jpg" alt="my"/>
            <p><b>Name</b>: <span> Dog</span></p>
            <p><b>Info</b>: <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores at autem consectetur cum deserunt dolor dolorem eius ex excepturi explicabo fugiat harum id maxime nisi nobis officia optio possimus quasi quia tenetur vel velit voluptatem voluptates, voluptatibus? Aperiam architecto cupiditate deleniti dolore ducimus fuga magni, minima perferendis quasi quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci, animi aspernatur autem blanditiis delectus ducimus eaque esse est eum fuga fugit in ipsam iure molestias natus numquam officiis omnis optio, perferendis placeat quasi quibusdam quidem ratione repudiandae saepe sequi sunt temporibus voluptatem. Ipsum iste magnam minus veritatis voluptas.</span></p>
        </div>
    );
}

function getTime() {

    const showTime = () => {
            let hh, mm, ss, date = new Date();
            hh = (date.getHours().toString().length < 2)? '0' + date.getHours(): date.getHours();
            mm = (date.getMinutes().toString().length < 2)? '0' + date.getMinutes(): date.getMinutes();
            ss = (date.getSeconds().toString().length < 2)? '0' + date.getSeconds(): date.getSeconds();
            return hh+':'+mm+':'+ss
    };

    return (
        <div>
            {showTime()}
        </div>
    );
}

function App() {

    const [content, setContent] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(getTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="content" role="main">
            <div className="time">{seconds}</div>
            <div className="card-container">
                <button className="card" onClick={() => setContent(getFilm())}>Favorite Film</button>
                <button className="card" onClick={() => setContent(getPersonalPage())}>Personal Page</button>
                <button className="card" onClick={() => setContent(getFavoriteAnimal())}>Favorite Pet</button>
            </div>
            <div className="card-content">
                {content}
            </div>
        </div>
    );
}
export default App;