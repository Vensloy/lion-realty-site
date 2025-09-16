
// == Стили
import '../css/header.css'

// == Шрифты
import '../css/fonts/circe.css'

// == Дополнительные функции
import './AddTag' // -- Функция для добавления тегов
import AddTag from './AddTag'

// == Картинки

// -- Для Header
import menu from '/img/pages/desktop/header/header/menu.svg'
import logo from '/img/pages/desktop/header/header/logo.svg'
import telegram from '/img/pages/desktop/header/header/messengers/telegram.svg'
import viber from '/img/pages/desktop/header/header/messengers/viber.svg'
import whatsapp from '/img/pages/desktop/header/header/messengers/whatsapp.svg'

// -- Для Main
import buttonToCatalog from '/img/pages/desktop/header/main/main-left/to-catalog.svg'
import mapToButton from '/img/pages/desktop/header/main/main-left/map-to-button.png'
import buttonAboutObject from '/img/pages/desktop/header/main/main-left/about-object.svg'

export default function Header() {
    return (
        <header>
            <div className='fon-color'>
                <section className='header'>
                    <menu>
                        <a className='menu' href="#">
                            <img src={menu} alt="" />
                            <p>Меню</p>
                        </a>
                    </menu>

                    <a href="#">
                        <img src={logo} alt="" />
                    </a>

                    <nav>
                        <a className='messengers' href="#">
                            <img src={viber} alt="" />
                            <img src={whatsapp} alt="" />
                            <img src={telegram} alt="" />
                        </a>

                        <p>+7 (978) 888-1-654</p>
                    </nav>
                </section>

                <section className='main'>
                    <section className='main-left'>
                        <a href="#">
                            <img src={buttonToCatalog} alt="" />
                        </a>

                        <h2 className='house-name'>Дом 100 м2 под Алуштой <br /> на участке 50 соток</h2>

                        <div className='house-info'>
                            <div className='price-object'>
                                <h2 className='info-header'>100 000 000 ₽</h2>
                                <p>Цена объекта</p>
                            </div>

                            <div className='price-one-meter'>
                                <h2 className='info-header'>1 000 000 ₽</h2>
                                <p>Цена 1 кв. м.</p>
                            </div>

                            <div className='square-house'>
                                <h2 className='info-header'>100 м2</h2>
                                <p>Площадь дома</p>
                            </div>

                            <div className='square-object'>
                                <h2 className='info-header'>50 соток</h2>
                                <p>Площадь участка</p>
                            </div>
                        </div>

                        <div className='tags'>
                            <div className="tags-line-one">
                                <AddTag text='Частное домовладение' />
                                <AddTag text='Современная архитектура' />
                                <AddTag text='Живописный вид на море' />
                            </div>

                            <div className="tags-line-two">
                                <AddTag text='Удобный подъезд' />
                                <AddTag text='Готово для проживания' />
                                <AddTag text='Закрытая территория' />
                            </div>
                        </div>

                        <div className="bottom-header">
                            <button className='view-to-map'>
                                <img className='map-to-button' src={mapToButton} alt="" />
                                <p>Посмотреть на карте</p>
                            </button>

                            <a href="#">
                                <img src={buttonAboutObject} alt="" />
                            </a>
                        </div>
                    </section>
                </section>
            </div>
        </header>
    )
}