import Banner from "../components/Banner/Banner";
import Action from "../components/Actions/Action";
import Title from "../components/Title/Title";
import Button from "../components/Buttons/Button";

export default function HomePage() {
  return (
    <>

      <Banner />
      <div className="container">
        <div className="actiontitle">
          <Title>
            <div className="content">
              Акции
              <a href="">Перейти в каталог</a>
            </div>
          </Title>

          <Action />
          <Button>Показать еще</Button>
        </div>
      </div>
    </>
  );
}
