import 'bootstrap/dist/css/bootstrap.min.css';
import { UncontrolledCarousel } from 'reactstrap';

//TODO Slider'i duzenle
function HeaderSlider() {
  return (
    <div>

    <UncontrolledCarousel
    items={[
      {
        altText: "GROCERIES DELIVERY",
        caption: "GROCERIES DELIVERY",
        key: 1,
        src: './src/assets/header/slider_1.png'
      },
    ]}
    />
    </div>
  )
}

export default HeaderSlider;