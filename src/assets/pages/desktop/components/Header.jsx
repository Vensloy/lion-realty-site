
// -- Стили
import '../css/header.css'

// -- Шрифты
import '../css/fonts/circe.css'

export default function Header() {
    return (
        <header>
            <div className='fon-color'>
                <section className='header'>
                    <menu>
                        <img src="/img/pages/desktop/header/header/menu.svg" alt="" />
                        <p>Меню</p>
                    </menu>

                    <img src="/img/pages/desktop/header/header/logo.svg" alt="" />

                    <nav>
                        <img src="/img/pages/desktop/header/header/messengers/viber.svg" alt="" />
                        <img src="/img/pages/desktop/header/header/messengers/whatsapp.svg" alt="" />
                        <img src="/img/pages/desktop/header/header/messengers/telegram.svg" alt="" />
                        <p>+7 (978) 888-1-654</p>
                    </nav>
                </section>
            </div>
        </header>
    )
}