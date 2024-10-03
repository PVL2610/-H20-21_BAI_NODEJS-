import { hotels as myHotel, misc, promotionPercentCalc } from './hotels.js';

// Gán emoji ngẫu nhiên cho mỗi khách sạn
myHotel.forEach(hotel => {
  const randomEmoji = misc.emojis[Math.floor(Math.random() * misc.emojis.length)];
  hotel.emoji = randomEmoji;
});


// Calculate promotionPercentCalc for all hotels in myHotel
myHotel.forEach(hotel => {
  hotel.promotionPercent = promotionPercentCalc(hotel.price, hotel.promotionPrice);
});

// Assign proper tag for each hotel
const lowestPromotionPrice = Math.min(...myHotel.map(hotel => parseFloat(hotel.promotionPrice.replace(/[$,]/g, ''))));
const lowestPromotionPercent = Math.min(...myHotel.map(hotel => hotel.promotionPercent));
const lowestCleaningFee = Math.min(...myHotel.map(hotel => parseFloat(hotel.cleaningFee.replace(/[$,]/g, ''))));

myHotel.forEach(hotel => {
  const hotelPromotionPrice = parseFloat(hotel.promotionPrice.replace(/[$,]/g, ''));
  const hotelCleaningFee = parseFloat(hotel.cleaningFee.replace(/[$,]/g, ''));
  
  hotel.tags = [];
  
  if (hotelPromotionPrice === lowestPromotionPrice) {
    hotel.tags.push(misc.tags[0]);
  }
  if (hotel.promotionPercent === lowestPromotionPercent) {
    hotel.tags.push(misc.tags[1]);
  }
  if (hotelCleaningFee === lowestCleaningFee) {
    hotel.tags.push(misc.tags[2]);
  }
});

console.log(myHotel);
