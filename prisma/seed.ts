import { db } from '~/utils/db.server';

const hotelsData = [
  {
    title: 'Clean and fully furnished apartment. 5 min away from CN Tower',
    description:
      '2 bed, 2 bathroom cozy apartment in the heart of downtown Toronto and only 5 min away from the CN Tower, Scotiabank Arena, and Rogers Center.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-1_exv0tf.jpg',
    host: '5d378db94e84753160e08b57',
    address: '3210 Scotchmere Dr W, Toronto, ON, CA',
    country: 'Canada',
    admin: 'Ontario',
    city: 'Toronto',
    bookings: [],
    price: 12424,
    numOfGuest: 3,
  },
  {
    title: 'Cozy, clean, and affordable studio in midtown',
    description:
      'Cozy, clean, and affordable studio located around midtown. Perfect for a solo traveller on a budget.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641351/mock/Toronto/toronto-listing-2_aeg1rw.jpg',
    host: '5d378db94e84753160e08b55',
    address: '7009 Strawberry Street, Toronto, ON, CA',
    country: 'Canada',
    admin: 'Ontario',
    city: 'Toronto',
    bookings: [],
    price: 15806,
    numOfGuest: 3,
  },
  {
    title: 'Bright comfortable room within a 4 bedroom duplex',
    description:
      'Bright comfortable room within a 4 bedroom duplex. 10 min drive from local airport. Relax, re-charge your batteries, and enjoy the suburbs of the Greater Toronto Area in this comfortable setting.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-3_eyftou.jpg',
    host: '5d378db94e84753160e08b57',

    address: '8110 Rockaway Ave, Toronto, ON, CA',
    country: 'Canada',
    admin: 'Ontario',
    city: 'Toronto',
    bookings: [],
    price: 4055,
    numOfGuest: 2,
  },
  {
    title: 'Luxury condo suite located in the heart of downtown Toronto',
    description:
      'Luxury condo suite located in the heart of the city with building pool/gym/sauna available 24/7. Buses, subway, and all other amenities are available close by. Booking comes with 1 available parking spot in building underground.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-4_ei1ngz.jpg',
    host: '5d378db94e84753160e08b59',
    address: '9531 Prince Road, Toronto, ON, CA',
    country: 'Canada',
    admin: 'Ontario',
    city: 'Toronto',
    bookings: [],
    price: 21292,
    numOfGuest: 4,
  },
  {
    title: 'Cozy 2 bedroom house located within the suburbs',
    description:
      'Cozy 2 bedroom house, located roughly 1 hour from the downtown hub. Close to all transporation systems such as the local bus terminal and subway.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641350/mock/Toronto/toronto-listing-5_vbmepz.jpg',
    host: '5d378db94e84753160e08b57',

    address: '43 Tallwood Drive, Toronto, ON, CA',
    country: 'Canada',
    admin: 'Ontario',
    city: 'Toronto',
    bookings: [],
    price: 20930,
    numOfGuest: 5,
  },
  {
    title: 'Recently renovated and modern townhouse',
    description:
      'Recently renovated and furnished townhouse. 3 beds, 2 baths, and parking available at all times. Townhouse located within the complex of a vibrant community. Booked often, so be sure to book as soon as possible!',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641350/mock/Toronto/toronto-listing-6_oiqiod.jpg',
    host: '5d378db94e84753160e08b57',

    address: '12 Morris Ave, Toronto, ON, CA',
    country: 'Canada',
    admin: 'Ontario',
    city: 'Toronto',
    bookings: [],
    price: 16836,
    numOfGuest: 2,
  },
  {
    title: 'Picturesque 2 Story House - great location',
    description:
      'Beautiful and picturesque 2 story house located only minutes away from the center of Midtown Toronto. Street level parking available at all times. With four beds and three baths, house accomodates up to 6 guests comfortably.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-7_p3a5ms.jpg',
    host: '5d378db94e84753160e08b57',

    address: '12 Morris Ave, Toronto, ON, CA',
    country: 'Canada',
    admin: 'Ontario',
    city: 'Toronto',
    bookings: [],
    price: 2577,
    numOfGuest: 1,
  },
  {
    title: 'Chic downtown condo',
    description:
      'Explore downtown Toronto by staying at this beautiful chic 1 bedroom condo. Access to a lap pool, gym, and sauna at all times.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-8_awkmrj.jpg',
    host: '5d378db94e84753160e08b56',
    address: '20 Overlook St, Toronto, ON, CA',
    country: 'Canada',
    admin: 'Ontario',
    city: 'Toronto',
    bookings: [],
    price: 23903,
    numOfGuest: 4,
  },
  {
    title: 'Beautiful condo in the heart of Dubai Marina',
    description:
      'Beautiful condo suite located within the heart of Dubai Marina. 1 bedroom and 1 bathroom. Perfect for a solo traveller or couples. Designed with high-end furniture and provides a stunning view of the entire marina.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641329/mock/Dubai/dubai-listing-1_znfu2h.jpg',
    host: '5d378db94e84753160e08b56',
    address: '100 Marina Ave, Dubai, United Arab Emirates',
    country: 'United Arab Emirates',
    admin: 'Dubai',
    city: 'Dubai',
    bookings: [],
    price: 21982,
    numOfGuest: 3,
  },
  {
    title: 'Premium apartment in the luxury Emirates Hills',
    description:
      'Premium 4 bedroom apartment located within the majestic Emirates Hills. Perfect getaway for your upcoming Dubai vacation. Accommodation includes 4 separate bedrooms, gym/entertainment area and shared luxury pool. Only a few minutes drive from and to the airport.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641327/mock/Dubai/dubai-listing-2_qc2kos.jpg',
    host: '5d378db94e84753160e08b59',
    address: '55 Emirates Hills Dr, Dubai, United Arab Emirates',
    country: 'United Arab Emirates',
    admin: 'Dubai',
    city: 'Dubai',
    bookings: [],
    price: 18126,
    numOfGuest: 5,
  },
  {
    title: 'Penthouse condo suite by Jumeirah beach',
    description:
      'Large penthouse suite situated minutes away from Jumeirah beach. Beautifully preserved and recently renovated, enjoy floor to ceiling windows, private elevator, on-suite pool, and access to numerous other condo amenities.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641328/mock/Dubai/dubai-listing-3_cumdal.jpg',
    host: '5d378db94e84753160e08b56',
    address: '400 Jumeirah Beach Dr, Dubai, United Arab Emirates',
    country: 'United Arab Emirates',
    admin: 'Dubai',
    city: 'Dubai',
    bookings: [],
    price: 16162,
    numOfGuest: 4,
  },
  {
    title: 'Cosy and fully furnished home',
    description:
      'Cosy and fully furnished home, perfect for a happy holiday to Dubai. Convenient access to nearby local transportation, restaurants, hypermarkets, and malls.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641327/mock/Dubai/dubai-listing-4_olo6kt.jpg',
    host: '5d378db94e84753160e08b56',

    address: '19 Meadows Ave, Dubai, United Arab Emirates',
    country: 'United Arab Emirates',
    admin: 'Dubai',
    city: 'Dubai',
    bookings: [],
    price: 11688,
    numOfGuest: 5,
  },
  {
    title: 'Stylish, 2 bedroom, upscale townhouse',
    description:
      'Freshly painted interiors with marble finished kitchen countertops, this stylish 2 bedroom townhouse serves as the perfect location for a short to medium term trip to Dubai. Located in the outskirts of the city offers a peaceful neighbourhood environment while still being close to the Dubai Metro.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641329/mock/Dubai/dubai-listing-5_r2mxqj.jpg',
    host: '5d378db94e84753160e08b57',

    address: '291 Crescent Rd, Dubai, United Arab Emirates',
    country: 'United Arab Emirates',
    admin: 'Dubai',
    city: 'Dubai',
    bookings: [],
    price: 16843,
    numOfGuest: 4,
  },
  {
    title: 'Comfortable studio in the heart of the city',
    description:
      'Comfortable single bed studio located in the heart of modern day Dubai on a budget.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641329/mock/Dubai/dubai-listing-6_dirave.jpg',
    host: '5d378db94e84753160e08b56',
    address: '19 Araa Street, Dubai, United Arab Emirates',
    country: 'United Arab Emirates',
    admin: 'Dubai',
    city: 'Dubai',
    bookings: [],
    price: 3078,
    numOfGuest: 5,
  },
  {
    title: 'Luxury en suite bedroom condo in Dubai Marina',
    description:
      'A luxury condo residence for those looking to travel in style. Condo includes but not limited to direct access to private parking, 200 sq ft balcony, 2 bathrooms, and incredible views of the marina.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641328/mock/Dubai/dubai-listing-7_vmmeyk.jpg',
    host: '5d378db94e84753160e08b57',
    address: '20 Marina Ave, Dubai, United Arab Emirates',
    country: 'United Arab Emirates',
    admin: 'Dubai',
    city: 'Dubai',
    bookings: [],
    price: 12127,
    numOfGuest: 2,
  },
  {
    title: 'Gorgeous mediterranean inspired villa',
    description:
      'Mediterranean inspired 3 bedroom, 3 bath villa situated in the heart of the Palm Jumeirah. Can accommodate up to 6 guests comfortably within its almost 3000 sq ft interior space.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560641331/mock/Dubai/dubai-listing-8_fg5dtb.jpg',
    host: '5d378db94e84753160e08b58',

    address: '15 Palm Jumeirah St, Dubai, United Arab Emirates',
    country: 'United Arab Emirates',
    admin: 'Dubai',
    city: 'Dubai',
    bookings: [],
    price: 19242,
    numOfGuest: 2,
  },
  {
    title: 'Luxurious home with private pool',
    description:
      'Set on a private, southwest corner of Hollywood Hills; this large modern home includes high-end furnishings, a wine cellar, private pool, extraordinary views of the greater Los Angeles area.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645376/mock/Los%20Angeles/los-angeles-listing-1_aikhx7.jpg',
    host: '5d378db94e84753160e08b58',

    address: '100 Hollywood Hills Dr, Los Angeles, California',
    country: 'United States',
    admin: 'California',
    city: 'Los Angeles',
    bookings: [],
    price: 18127,
    numOfGuest: 2,
  },
  {
    title: 'Beverly Hills mansion',
    description:
      'Private modern mansion situated in the heart of Beverly Hills. Property consists of a huge pool, deck, entertainment area, and is suited to accommodate up to 12 guests.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645375/mock/Los%20Angeles/los-angeles-listing-2_ygm2ai.jpg',
    host: '5d378db94e84753160e08b56',

    address: '999 Beverly Hills Ave, Los Angeles, California',
    country: 'United States',
    admin: 'California',
    city: 'Los Angeles',
    bookings: [],
    price: 22707,
    numOfGuest: 5,
  },
  {
    title: 'Beautiful beachfront condo',
    description: 'Beautiful beachfront condo close to Venice beach.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645376/mock/Los%20Angeles/los-angeles-listing-3_wtzssz.jpg',
    host: '5d378db94e84753160e08b59',
    address: '4262 Rainbow Road, Los Angeles, California',
    country: 'United States',
    admin: 'California',
    city: 'Los Angeles',
    bookings: [],
    price: 11845,
    numOfGuest: 4,
  },
  {
    title: 'Stylish and modern 2 bedroom condo',
    description:
      'Enjoy your stay in sunny Los Angeles with this modern, recently furnished 2 bedroom condo apartment. Located only a few minutes away from local restaurants, supermarkets, and entertainment areas.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645376/mock/Los%20Angeles/los-angeles-listing-4_nytk33.jpg',
    host: '5d378db94e84753160e08b56',
    address: '100 Nickel Rd, Los Angeles, California',
    country: 'United States',
    admin: 'California',
    city: 'Los Angeles',
    bookings: [],
    price: 13623,
    numOfGuest: 4,
  },
  {
    title: 'Spacious home (3 beds/3 baths in Bel Air, Los Angeles',
    description:
      'Fully furnished and spacious home situated in the heart of Bel Air, Los Angeles. Perfect accommodation for a group with a large number of guests.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645375/mock/Los%20Angeles/los-angeles-listing-5_rll8i2.jpg',
    host: '5d378db94e84753160e08b58',

    address: '433 Zimmer Lane, Los Angeles, California',
    country: 'United States',
    admin: 'California',
    city: 'Los Angeles',
    bookings: [],
    price: 6879,
    numOfGuest: 3,
  },
  {
    title: 'Cozy guest house',
    description:
      'Beautiful, contemporary, and single bedroom guest house with en suite bathroom, private patio, and private entrance. Located in a peaceful neighbourhood about an hour away from financial district.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645377/mock/Los%20Angeles/los-angeles-listing-6_unhtji.jpg',
    host: '5d378db94e84753160e08b59',

    address: '200 Copper Rd, Los Angeles, California',
    country: 'United States',
    admin: 'California',
    city: 'Los Angeles',
    bookings: [],
    price: 14879,
    numOfGuest: 5,
  },
  {
    title: 'Stunning luxury home in central LA',
    description:
      'Stunning luxury home with a private garden by the pool, spacious outdoors, and en suite master bedroom. Located in the hub of central Los Angeles.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645376/mock/Los%20Angeles/los-angeles-listing-7_qapmfv.jpg',
    host: '5d378db94e84753160e08b59',

    address: '301 Hillhaven Dr, Los Angeles, California',
    country: 'United States',
    admin: 'California',
    city: 'Los Angeles',
    bookings: [],
    price: 2778,
    numOfGuest: 5,
  },
  {
    title: 'Modern downtown LA condo suite',
    description:
      'Modern one bedroom condo located in the downtown LA core. En suite bedroom with spacious washroom and walk in bedroom closet. Located in the heart of the city!',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645376/mock/Los%20Angeles/los-angeles-listing-8_q01xt6.jpg',
    host: '5d378db94e84753160e08b57',
    address: '100 Aviation Crescent, Los Angeles, California',
    country: 'United States',
    admin: 'California',
    city: 'Los Angeles',
    bookings: [],
    price: 17777,
    numOfGuest: 3,
  },
  {
    title: 'Chic condo in Camden',
    description:
      'Chic, cosy condo situated in Camden. Situated in a secluded and private neighbourhood with easy acces to public transit.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645408/mock/London/london-listing-1_yedylx.jpg',
    host: '5d378db94e84753160e08b57',
    address: '3807 North Bend River Rd, London, United Kingdom',
    country: 'United Kingdom',
    admin: 'England',
    city: 'London',
    bookings: [],
    price: 19462,
    numOfGuest: 1,
  },
  {
    title: 'Beautiful apartment in central London',
    description:
      'Beautiful and modern apartment situated in central London and minutes away from the London Underground (railway system.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645409/mock/London/london-listing-2_mtfogm.jpg',
    host: '5d378db94e84753160e08b59',
    address: '1738 Old House Dr, London, United Kingdom',
    country: 'United Kingdom',
    admin: 'England',
    city: 'London',
    bookings: [],
    price: 9425,
    numOfGuest: 4,
  },
  {
    title: 'Bright furnished home',
    description:
      'Relax in this brightly lit, recently furnished, single bedroom home located in the outskirts of Stratford.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645410/mock/London/london-listing-3_hbqxs1.jpg',
    host: '5d378db94e84753160e08b56',

    address: '82 South Crescent, London, United Kingdom',
    country: 'United Kingdom',
    admin: 'England',
    city: 'London',
    bookings: [],
    price: 1918,
    numOfGuest: 1,
  },
  {
    title: 'Luxurious mansion in Cadogan Square',
    description:
      'Enjoy your stay in London in this beautiful and historic mansion right in the outskirts of Cadogan Square. Accommodation includes a private terrace, spacious entertainment area, seven bedrooms, and a beautiful outdoor garden.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645410/mock/London/london-listing-4_kwnohf.jpg',
    host: '5d378db94e84753160e08b55',

    address: '200 South Bend River Rd, London, United Kingdom',
    country: 'United States',
    admin: 'England',
    city: 'London',
    bookings: [],
    price: 11349,
    numOfGuest: 5,
  },
  {
    title: 'Beautiful 2 bedroom townhouse',
    description:
      'Located on a quiet peaceful residential street, this 2 bedroom townhouse is a perfect accommodation for those wishing to enjoy their stay in London without breaking the bank.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645408/mock/London/london-listing-5_jwyidl.jpg',
    host: '5d378db94e84753160e08b55',

    address: '44  Greyfriars Ave, London, United Kingdom',
    country: 'United Kingdom',
    admin: 'England',
    city: 'London',
    bookings: [],
    price: 23483,
    numOfGuest: 4,
  },
  {
    title: 'Magnificent suburban house in central London',
    description:
      'Large suburban house in central London. Fully furnished with outdoor patio, heating insulation and two spacious decks. Walking distance to everything you might need in your stay in London!',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645409/mock/London/london-listing-6_dolofv.jpg',
    host: '5d378db94e84753160e08b57',

    address: '20 Peachfarm Rd, London, United Kingdom',
    country: 'United Kingdom',
    admin: 'England',
    city: 'London',
    bookings: [],
    price: 8721,
    numOfGuest: 4,
  },
  {
    title: 'Tranquil, spacious condo apartment',
    description:
      'Tranquil, spacious condo apartment with a modern look and feel. Apartment accomodates up to 4 guests with 2 beds and 2 baths.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645409/mock/London/london-listing-7_pejnqb.jpg',
    host: '5d378db94e84753160e08b59',
    address: '20 Windsor St, London, United Kingdom',
    country: 'United Kingdom',
    admin: 'England',
    city: 'London',
    bookings: [],
    price: 5884,
    numOfGuest: 1,
  },
  {
    title: 'Charming spacious flat in Kensington',
    description:
      'Spacious, charming flat located close to the center of Kensington. Consists of a large en suite bedroom, atmospheric lighting and beautiful wall paintings across the flat. A truly picturesque accommodation.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560645409/mock/London/london-listing-8_hpckw4.jpg',
    host: '5d378db94e84753160e08b59',
    address: '15 Whitehorse Av, London, United Kingdom',
    country: 'United Kingdom',
    admin: 'England',
    city: 'London',
    bookings: [],
    price: 19649,
    numOfGuest: 4,
  },
  {
    title: 'Single bedroom located in the heart of downtown San Fransisco',
    description:
      'Furnished and spacious single bedroom location situated minutes away from the nearest Muni train stop. Perfect for the independent traveller.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560646219/mock/San%20Fransisco/san-fransisco-listing-1_qzntl4.jpg',
    host: '5d378db94e84753160e08b56',
    address: '200 Sunnyside Rd, San Fransisco, California',
    country: 'United States',
    admin: 'California',
    city: 'San Francisco',
    bookings: [],
    price: 22501,
    numOfGuest: 5,
  },
  {
    title: 'Downtown and modern San Fransisco studio apartment',
    description:
      'Downtown, modern, fully furnished, and sleek San Fransisco studio apartment.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560646219/mock/San%20Fransisco/san-fransisco-listing-2_tvjygz.jpg',
    host: '5d378db94e84753160e08b56',
    address: '102 Parkdale Av, San Fransisco, California',
    country: 'United States',
    admin: 'California',
    city: 'San Francisco',
    bookings: [],
    price: 4051,
    numOfGuest: 5,
  },
  {
    title: 'Modern apartment steps away from the beach',
    description:
      'Beautiful modern apartment located a few minutes away from the beach. The perfect location for a relaxing and comfortable vacation in San Fransisco!',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560646219/mock/San%20Fransisco/san-fransisco-listing-3_z7w2jh.jpg',
    host: '5d378db94e84753160e08b59',
    address: '2 Bridgewater Rd, San Fransisco, California',
    country: 'United States',
    admin: 'California',
    city: 'San Francisco',
    bookings: [],
    price: 9162,
    numOfGuest: 2,
  },
  {
    title: 'Spacious 2 story beach house',
    description:
      'Spacious 2 story house with extended balcony and magnificent ocean views from every window. Numerous restaurants exist only a walking distance away.',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560646430/mock/Cancun/cancun-listing-1_zihihs.jpg',
    host: '5d378db94e84753160e08b56',

    address: '100 Punta Nizuc Rd., Cancún, Mexico',
    country: 'Mexico',
    admin: 'Quintana Roo',
    city: 'Cancún',
    bookings: [],
    price: 24842,
    numOfGuest: 4,
  },
  {
    title: 'Beachfront suite',
    description:
      'Beautiful beachfront suite located in Cancún hotel. Location consists of a large outdoor pool, parking, hotel convenience store, room service, and parking!',
    image:
      'https://res.cloudinary.com/tiny-house/image/upload/v1560646289/mock/Cancun/cancun-listing-2_bsocu5.jpg',
    host: '5d378db94e84753160e08b56',
    address: '100 Punta Nizuc Rd., Cancún, Mexico',
    country: 'Mexico',
    admin: 'Quintana Roo',
    city: 'Cancún',
    bookings: [],
    price: 23012,
    numOfGuest: 1,
  },
];

const usersData = [
  {
    passwordHash: 'token_************',
    name: 'James J.',
    avatar:
      'https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560648533/mock/users/user-profile-1_mawp12.jpg',
    contact: 'james@tinyhouse.com',
    walletId: 'acct_************',
    income: 723796,
    bookings: [],
  },
  {
    passwordHash: 'token_************',
    name: 'Elizabeth A.',
    avatar:
      'https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560649052/mock/users/user-profile-2_arwtdy.jpg',
    contact: 'elizabeth@tinyhouse.com',
    walletId: 'acct_************',
    income: 256144,
    bookings: [],
  },
  {
    passwordHash: 'token_************',
    name: 'Andrew D.',
    avatar:
      'https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560649280/mock/users/user-profile-3_omxctk.jpg',
    contact: 'andrew@tinyhouse.com',
    walletId: 'acct_************',
    income: 272359,
    bookings: [],
  },
  {
    passwordHash: 'token_************',
    name: 'Danielle C.',
    avatar:
      'https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560650165/mock/users/user-profile-4_wxi6om.jpg',
    contact: 'danielle@tinyhouse.com',
    walletId: 'acct_************',
    income: 465043,
    bookings: [],
  },
  {
    passwordHash: 'token_************',
    name: 'Sarah K.',
    avatar:
      'https://res.cloudinary.com/tiny-house/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1560650436/mock/users/user-profile-5_tm8hhl.jpg',
    contact: 'sarah@tinyhouse.com',
    walletId: 'acct_************',
    income: 104347,
    bookings: [],
  },
];

async function main() {
  hotelsData.forEach(async (hotel) => {
    await db.hotel.create({
      data: {
        title: hotel.title,
        description: hotel.description,
        image: hotel.image,
        host: hotel.host,
        address: hotel.address,
        country: hotel.country,
        admin: hotel.admin,
        city: hotel.city,
        bookings: {},
        price: hotel.price,
        numOfGuest: hotel.numOfGuest,
      },
    });
  });

  usersData.forEach(async (user) => {
    await db.user.create({
      data: {
        avatar: user.avatar,
        name: user.name,
        contact: user.contact,
        income: user.income,
        walletId: user.walletId,
        bookings: {},
        passwordHash: 'token_************',
      },
    });
  });
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
