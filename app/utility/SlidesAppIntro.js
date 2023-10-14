
const slidesEnglish = [
    {
      key: 1,
      text: "As a farmer, we provide you with a long-term ownership interest in the country's most advanced grain supply chain at no cost.",
      image: require('../assets/truck-hauling-wheat.jpg'),
    },
    {
      key: 2,
      text: 'We provide sustainable solutions for your grain supply and look to reduce the environmental impact of our operations.',
      image: require('../assets/farmers-grains.jpg'),
    },
    {
      key: 3,
      text: 'We operate a network of grain elevators that is setting new standards for fast and efficient movement of grain, and a state-of-the-art network of port terminals.',
      image: require('../assets/grain-elevator.jpg'),
    }
  ];
  
  
  
  const slidesFrench = [
    {
        key: 1,
        text: "En tant qu'agriculteur, nous vous offrons gratuitement une participation à long terme dans la chaîne d'approvisionnement céréalière la plus avancée du pays.",
        image: require('../assets/truck-hauling-wheat.jpg'),
      },
      {
        key: 2,
        text: 'Nous proposons des solutions durables pour votre approvisionnement en céréales et cherchons à réduire l’impact environnemental de nos opérations.',
        image: require('../assets/farmers-grains.jpg'),
      },
      {
        key: 3,
        text: "Nous exploitons un réseau de silos à grains qui établit de nouvelles normes en matière de mouvement rapide et efficace du grain, ainsi qu'un réseau de terminaux portuaires à la pointe de la technologie.",
        image: require('../assets/grain-elevator.jpg'),
      }
  ];
  


function SlidesAppIntro(language) {
    if(language === 'EN') return slidesEnglish;
    return slidesFrench;
}

export default SlidesAppIntro;