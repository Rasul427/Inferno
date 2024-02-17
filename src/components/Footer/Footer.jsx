import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-items">
            <div className="footer-column">
              <div className="logo">inferno</div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor fficia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="footer-nav">
              <p>МЕНЮ</p>
              <div className="footer-nav-a">
                <a href="">Главная</a>
                <a href="">АКЦИИ</a>
                <a href="">КАТАЛОГ</a>
                <a href="">КОНТАКТЫ</a>
              </div>
            </div>
            <div className="footer-contact">
              <p>Контакты</p>
              <div className="footer-item">
                <p>
                  Остались вопросы? Напишите нам 
                  <span> infernoshop@gmail.com</span>
                </p>
                <p>
                  Нужна консультация? Позвоните нам 
                  <span> +7 987 405 45 45</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
