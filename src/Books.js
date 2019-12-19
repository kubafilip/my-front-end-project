import React, {Component} from "react";
import "./styles/Books.css";



class Books extends Component {
    state = {isActive: false}
    
    render() {
        return (
            <div className="books">
                <p>
                Czytanie książek daje wiele korzyści. Relaksują, poszerzają wiedzę, dają poczucie dobrze wykorzystanego 
                i mile spędzonego czasu. Tak naprawdę pozytywnych czynników podczas obcowania z książką jest cała masa. 
                Wie o tym każdy, kto choć raz w życiu przeczytał jedną, dobrą książkę. To bezcenna czynność, która niestety powoli zanika. 
                Jedną z przyczyn jest szybki rozwój technologii, a co za tym idzie życie w pośpiechu. 
                Niestety ludzie nie zdają sobie sprawy jak ważne jest czytanie i ile może dawać ono pożytku, do wykorzystania w codziennym życiu. 
                <b>Tylko 10% z nas czyta więcej niż 7 książek rocznie.</b> Statystyki przerażają, dlatego podajemy <b>10 powodów</b> dlaczego warto czytać książki.
                </p>
                <br/>
                <div className="booksPicture">
                <img  src="https://trojantimes.net/wp-content/uploads/2019/03/top-10-confidence-books.jpg" alt="Books"/>
                </div>
                <ol>
                    <li>Czytanie poprawia pamięć</li>
                    <li>Czytanie uwalania od stresu i uspokaja</li>
                    <li>Czytanie kształtuje charakter</li>
                    <li>Książki pogłębiają wiedzę</li>
                    <li>Książki wzbogacają słownictwo</li>
                    <li>Czytanie opóźnia demencję i spowalnia rozwój choroby Alzheimera</li>
                    <li>Czytanie poprawia sen</li>
                    <li>Książka rozwija empatię</li>
                    <li>Czytanie poprawia umiejętności komunikacyjne</li>
                    <li>Czytanie poprawia koncentrację</li>
                </ol>
            </div>
        );
    }
}

export default Books;