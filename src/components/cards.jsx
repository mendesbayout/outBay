import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const cards = [
  { id: 1, title: 'Exercise 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Exercise 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 3, title: 'Exercise 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
];

<Slider {...settings}>
  {cards.map(card => (
    <div key={card.id}>
      <Card title={card.title} description={card.description} />
    </div>
  ))}
</Slider>

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};