import * as React from "react";

const placeTypesObj = {
  accounting: "Accounting",
  airport: "Airport",
  amusement_park: "Amusement Park",
  aquarium: "Aquarium",
  art_gallery: "Art Gallery",
  atm: "ATM",
  bakery: "Bakery",
  bank: "Bank",
  bar: "Bar",
  beauty_salon: "Beauty Salon",
  bicycle_store: "Bicycle Store",
  book_store: "Book Store",
  bowling_alley: "Bowling Alley",
  bus_station: "Bus Station",
  cafe: "Cafe",
  campground: "Campground",
  car_dealer: "Car Dealer",
  car_rental: "Car Rental",
  car_repair: "Car Repair",
  car_wash: "Car Wash",
  casino: "Casino",
  cemetery: "Cemetery",
  church: "Church",
  city_hall: "City Hall",
  clothing_store: "Clothing Store",
  convenience_store: "Convenience Store",
  courthouse: "Courthouse",
  dentist: "Dentist",
  department_store: "Department Store",
  doctor: "Doctor",
  electrician: "Electrician",
  electronics_store: "Electronics Store",
  embassy: "Embassy",
  fire_station: "Fire Station",
  florist: "Florist",
  funeral_home: "Funeral Home",
  furniture_store: "Furniture Store",
  gas_station: "Gas Station",
  gym: "Gym",
  hair_care: "Hair Care",
  hardware_store: "Hardware Store",
  hindu_temple: "Hindu Temple",
  home_goods_store: "Home Goods Store",
  hospital: "Hospital",
  insurance_agency: "Insurance Agency",
  jewelry_store: "Jewelry Store",
  laundry: "Laundry",
  lawyer: "Lawyer",
  library: "Library",
  liquor_store: "Liquor Store",
  local_government_office: "Local Government Office",
  locksmith: "Locksmith",
  lodging: "Lodging",
  meal_delivery: "Meal Delivery",
  meal_takeaway: "Meal Takeaway",
  mosque: "Mosque",
  movie_rental: "Movie Rental",
  movie_theater: "Movie Theater",
  moving_company: "Moving Company",
  museum: "Museum",
  night_club: "Night Club",
  painter: "Painter",
  park: "Park",
  parking: "Parking",
  pet_store: "Pet Store",
  pharmacy: "Pharmacy",
  physiotherapist: "Physiotherapist",
  plumber: "Plumber",
  police: "Police",
  post_office: "Post Office",
  real_estate_agency: "Real Estate Agency",
  restaurant: "Restaurant",
  roofing_contractor: "Roofing Contractor",
  rv_park: "RV Park",
  school: "School",
  shoe_store: "Shoe Store",
  shopping_mall: "Shopping Mall",
  spa: "Spa",
  stadium: "Stadium",
  storage: "Storage",
  store: "Store",
  subway_station: "Subway Station",
  supermarket: "Supermarket",
  synagogue: "Synagogue",
  taxi_stand: "Taxi Stand",
  train_station: "Train Station",
  transit_station: "Transit Station",
  travel_agency: "Travel Agency",
  veterinary_care: "Veterinary Care",
  zoo: "Zoo"
};

export const placeTypesArr = [
  "Accounting",
  "Airport",
  "Amusement Park",
  "Aquarium",
  "Art Gallery",
  "ATM",
  "Bakery",
  "Bank",
  "Bar",
  "Beauty Salon",
  "Bicycle Store",
  "Book Store",
  "Bowling Alley",
  "Bus Station",
  "Cafe",
  "Campground",
  "Car Dealer",
  "Car Rental",
  "Car Repair",
  "Car Wash",
  "Casino",
  "Cemetery",
  "Church",
  "City Hall",
  "Clothing Store",
  "Convenience Store",
  "Courthouse",
  "Dentist",
  "Department Store",
  "Doctor",
  "Electrician",
  "Electronics Store",
  "Embassy",
  "Fire Station",
  "Florist",
  "Funeral Home",
  "Furniture Store",
  "Petrol Station",
  "Gas Station",
  "Gym",
  "Hair Care",
  "Hardware Store",
  "Hindu Temple",
  "Home Goods Store",
  "Hospital",
  "Insurance Agency",
  "Jewelry Store",
  "Laundry",
  "Lawyer",
  "Library",
  "Liquor Store",
  "Local Government Office",
  "Locksmith",
  "Lodging",
  "Meal Delivery",
  "Meal Takeaway",
  "Mosque",
  "Movie Rental",
  "Movie Theater",
  "Moving Company",
  "Museum",
  "Night Club",
  "Painter",
  "Park",
  "Parking",
  "Pet Store",
  "Pharmacy",
  "Physiotherapist",
  "Plumber",
  "Police",
  "Post Office",
  "Real Estate Agency",
  "Restaurant",
  "Roofing Contractor",
  "RV Park",
  "School",
  "Shoe Store",
  "Shopping Mall",
  "Spa",
  "Stadium",
  "Storage",
  "Store",
  "Subway Station",
  "Supermarket",
  "Synagogue",
  "Taxi Stand",
  "Train Station",
  "Transit Station",
  "Travel Agency",
  "Veterinary Care",
  "Zoo"
];

export const recentList = [
  {
    id: 1,
    avatar: "https://via.placeholder.com/150x150",
    title: "Need a quick support on setting",
    description: [
      <span className="gx-link" key={1}>
        Joy Parish
      </span>,
      "  created ticket 15 mins ago"
    ],
    status: 2
  },
  {
    id: 2,
    avatar: "https://via.placeholder.com/150x150",
    title: "Pre-sale query about the product",
    description: [
      <span className="gx-link" key={2}>
        You
      </span>,
      " replied 2 days ago"
    ],
    status: 1
  },
  {
    id: 3,
    avatar: "https://via.placeholder.com/150x150",
    title: "Regarding customization service",
    description: [
      <span className="gx-link" key={3}>
        Joy Parish
      </span>,
      " replied 2 days ago"
    ],
    status: 4
  }
];

export const popularList = [
  {
    id: 1,
    image: "https://via.placeholder.com/1100x750",
    isFeatured: false,
    title: "Beach side Villah ",
    subTitle: "South Western Ave",
    name: "John Nash",
    date: "2 days ago",
    prize: "$670,500",
    sqft: "$587/sqft",
    bedrooms: 3,
    baths: 3,
    area: "1400 m2",
    more: 1
  },
  {
    id: 2,
    image: "https://via.placeholder.com/1100x750",
    isFeatured: false,
    title: "Luxury family home at beach side",
    subTitle: "South Western Ave",
    name: "John Nash",
    date: "2 days ago",
    prize: "$670,500",
    sqft: "$587/sqft",
    bedrooms: 2,
    baths: 2,
    area: "1100 m2",
    more: 2
  },
  {
    id: 3,
    image: "https://via.placeholder.com/1100x750",
    isFeatured: false,
    title: "CB Jeni Lifestyle Homes",
    subTitle: "South Western Ave",
    name: "John Nash",
    date: "2 days ago",
    prize: "$670,500",
    sqft: "$587/sqft",
    bedrooms: 4,
    baths: 1,
    area: "1300 m2",
    more: 4
  }
];
export const newJersy = [
  {
    id: 1,
    image: "https://via.placeholder.com/1100x750",
    isFeatured: false,
    title: "Luxury family home at beach side",
    subTitle: "South Western Ave",
    name: "John Nash",
    date: "2 days ago",
    prize: "$670,500",
    sqft: "$587/sqft",
    bedrooms: 3,
    baths: 3,
    area: "1400 m2",
    more: 1
  },
  {
    id: 2,
    image: "https://via.placeholder.com/1100x750",
    isFeatured: false,
    title: "CB Jeni Lifestyle Homes",
    subTitle: "South Western Ave",
    name: "John Nash",
    date: "2 days ago",
    prize: "$670,500",
    sqft: "$587/sqft",
    bedrooms: 2,
    baths: 2,
    area: "1100 m2",
    more: 2
  },
  {
    id: 3,
    image: "https://via.placeholder.com/1100x750",
    isFeatured: false,
    title: "Beach side Villah ",
    subTitle: "South Western Ave",
    name: "John Nash",
    date: "2 days ago",
    prize: "$670,500",
    sqft: "$587/sqft",
    bedrooms: 4,
    baths: 1,
    area: "1300 m2",
    more: 4
  }
];
export const colorado = [
  {
    id: 1,
    image: "https://via.placeholder.com/1100x750",
    isFeatured: false,
    title: "Luxury family home at beach side",
    subTitle: "South Western Ave",
    name: "John Nash",
    date: "2 days ago",
    prize: "$670,500",
    sqft: "$587/sqft",
    bedrooms: 3,
    baths: 3,
    area: "1400 m2",
    more: 1
  },
  {
    id: 2,
    image: "https://via.placeholder.com/1100x750",
    isFeatured: false,
    title: "Beach side Villah ",
    subTitle: "South Western Ave",
    name: "John Nash",
    date: "2 days ago",
    prize: "$670,500",
    sqft: "$587/sqft",
    bedrooms: 2,
    baths: 2,
    area: "1100 m2",
    more: 2
  },
  {
    id: 3,
    image: "https://via.placeholder.com/1100x750",
    isFeatured: false,
    title: "CB Jeni Lifestyle Homes",
    subTitle: "South Western Ave",
    name: "John Nash",
    date: "2 days ago",
    prize: "$670,500",
    sqft: "$587/sqft",
    bedrooms: 4,
    baths: 1,
    area: "1300 m2",
    more: 4
  }
];
export const albama = [
  {
    id: 1,
    image: "https://via.placeholder.com/1100x750",
    isFeatured: false,
    title: "Luxury family home at beach side",
    subTitle: "South Western Ave",
    name: "John Nash",
    date: "2 days ago",
    prize: "$670,500",
    sqft: "$587/sqft",
    bedrooms: 3,
    baths: 3,
    area: "1400 m2",
    more: 1
  },
  {
    id: 2,
    image: "https://via.placeholder.com/1100x750",
    isFeatured: false,
    title: "Beach side Villah ",
    subTitle: "South Western Ave",
    name: "John Nash",
    date: "2 days ago",
    prize: "$670,500",
    sqft: "$587/sqft",
    bedrooms: 2,
    baths: 2,
    area: "1100 m2",
    more: 2
  },
  {
    id: 3,
    image: "https://via.placeholder.com/1100x750",
    isFeatured: false,
    title: "CB Jeni Lifestyle Homes",
    subTitle: "South Western Ave",
    name: "John Nash",
    date: "2 days ago",
    prize: "$670,500",
    sqft: "$587/sqft",
    bedrooms: 4,
    baths: 1,
    area: "1300 m2",
    more: 4
  }
];

export const placesData = {
  html_attributions: [],
  next_page_token:
    "CpQEAQIAANBT6SUMQTyZvzzbbPEYu4KirZcdudK6MxjTe2DQ94s0PJ00fvEXVCs6jvbdrNHNJcXIuDb43XX00kDHD_qRYN3YkkB12o5wdpavf8LhYlbZBV9VATb6hXrv2jMksuXWyKKbfz4njV6NGA5MvfG95AROP5dOyD5cOu5HroC3skhCk031T7H_5fHKMDv6ToUnYFagK86TAmiPokzM4culdiuhIMDCVfQxYP1FVnB64UQlhpOZnQKNH06WO2k9gUtNOWgpyubLu60L0Z_HH7fedriQZhDrm1Y2pUgKa_Kk5avYx0KulpHDuail98FRZkUHjhh0AH1MMKlZjHSXqsX6aGgtKRWyf1s9aHoUvc0h8UKXB6RPF3AOGpqmv9UHy8sLvlHytXdY_I9GYv8Yau8SzdQfiAD8wqJ_AHjQ1KfA2jj8YmEPGH9ukmMV6s0-ejCixqUDVKwrK1lcLt80YAjrnStz6kGFFEHJYT84CxYG6nVPm75QBRLWvBJXPO9E9nwDi-qGK0l2nDV3hk92fofWjRZFqMh2RhtHuEjt_VGSmO2iHJfXSPV6qF4j8lMM5cWQPcdAEzKz2kT9efSJcutrJKYBqmZT3rIPHbVoplk3Bmt_0hfNEU0m0g2gg-9J0kMnKWY4n8mVx8Ef76IfaPDlMqLQa2NUVw67H-5xQZbBuIT1u95f1vpBx4hi5r0T_zw9bBIQvskqnrF-WN5Qza-yRH1v0hoU8XElBzhgf62uRSnlOJbbffggdkQ",
  results: [
    {
      geometry: {
        location: {
          lat: 12.9523671,
          lng: 77.6399725
        },
        viewport: {
          northeast: {
            lat: 12.95364057989272,
            lng: 77.64138697989272
          },
          southwest: {
            lat: 12.95094092010728,
            lng: 77.63868732010728
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "83270530c5347f31200b6650fa021adb0863e736",
      name: "Cafe Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 4608,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/102037026257840611819/photos">nitesh sardana</a>'
          ],
          photo_reference:
            "CmRaAAAAmTnlE9fEe4Rz-J0ieL2kywcT3Cxy2yMUAOculgfEhFyLARr3ew4TAEWPP8Hj3iqFIuGF_v_gM8ePrwx9pWluDP4Kivu8TmjFPHdErY8HqjLH99fujCYhQfWXgtT5AiSAEhBQBI9UWuO77yV2fZGosW30GhSEtFXfUjvCexIGqmcu2bHQMbz2mw",
          width: 3456
        }
      ],
      place_id: "ChIJuUfPGPgTrjsRt-vUvmsqUtk",
      plus_code: {
        compound_code: "XJ2Q+WX Bengaluru, Karnataka, India",
        global_code: "7J4VXJ2Q+WX"
      },
      price_level: 2,
      rating: 3.7,
      reference: "ChIJuUfPGPgTrjsRt-vUvmsqUtk",
      scope: "GOOGLE",
      types: [
        "cafe",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 171,
      vicinity:
        "Inner Ring Road, Amarjyothi Layout, Next To Mother Earth, Domlur, Domlur, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9055248,
          lng: 77.6059126
        },
        viewport: {
          northeast: {
            lat: 12.90692312989272,
            lng: 77.60727172989273
          },
          southwest: {
            lat: 12.90422347010728,
            lng: 77.60457207010728
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "2a1aa34a66a33ed1bc359366c0a5efba18351eb1",
      name: "Cafe Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 3120,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/107297114555350475989/photos">jalad kumar srivastava</a>'
          ],
          photo_reference:
            "CmRaAAAAWl1gKGzSadTRb2Ar98Icl2L283fGv5ism-ptA1oI9r1yNIogvfMgmQ_3HIKQepqqvrtWtcrtbURnwkEf32oSvhNEtuvNZn8FycfkrW5VxLlE8PUyftLnMOXAHiD-iarSEhAeb4HJeGt6hRgqX-e6fp44GhSs-sjDDuhcB-ypRvpLIb7w6zm3TQ",
          width: 4160
        }
      ],
      place_id: "ChIJCau9ThoVrjsRoLq01adr1QU",
      plus_code: {
        compound_code: "WJ44+69 Bengaluru, Karnataka, India",
        global_code: "7J4VWJ44+69"
      },
      price_level: 2,
      rating: 3.9,
      reference: "ChIJCau9ThoVrjsRoLq01adr1QU",
      scope: "GOOGLE",
      types: [
        "cafe",
        "store",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 1244,
      vicinity: "590, 445/1, 29Th Main, 2Nd Stage, Btm, BTM Layout, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9125771,
          lng: 77.6003169
        },
        viewport: {
          northeast: {
            lat: 12.91407002989272,
            lng: 77.60148862989271
          },
          southwest: {
            lat: 12.91137037010728,
            lng: 77.59878897010726
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "aa4c054fae531a34c754f282d95673b5dc883ab4",
      name: "Café Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 3456,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/110620467891056969299/photos">Akshay Srivastava</a>'
          ],
          photo_reference:
            "CmRaAAAAiVzbgPTixrXe1d_kawQXyJ6If33MXvpUw2-k8TKpS6YNRSKiD34ce3M-M0-BzhIZRazKtQ1UdLQB-rCv7txGWZ7WBDbE_BTwF02iMPteodNuZLTIaS5GaCQC1JvcSC-mEhAE0wAY4XUYHn9GoQk6hZY5GhRPkcBD1jbxFo2Z7h1YXQ0unWJ-cA",
          width: 4608
        }
      ],
      place_id: "ChIJafXt6AQVrjsRjoou3sADyN0",
      plus_code: {
        compound_code: "WJ72+24 Bengaluru, Karnataka, India",
        global_code: "7J4VWJ72+24"
      },
      price_level: 2,
      rating: 3.9,
      reference: "ChIJafXt6AQVrjsRjoou3sADyN0",
      scope: "GOOGLE",
      types: ["cafe", "store", "point_of_interest", "food", "establishment"],
      user_ratings_total: 82,
      vicinity: "Shoppers Stop, Bannerghatta Main Rd, BTM Layout, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9718324,
          lng: 77.59439909999999
        },
        viewport: {
          northeast: {
            lat: 12.97323787989272,
            lng: 77.59576952989272
          },
          southwest: {
            lat: 12.97053822010728,
            lng: 77.59306987010727
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "74dc60c56d2f33d91b4a52b1e1f6688ef965ae56",
      name: "Cafe Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 720,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/116023862257385611192/photos">vinod kumar</a>'
          ],
          photo_reference:
            "CmRaAAAAfD-wuk8qiSwceaJB1kiBXl79VYQwC8MXSaOnF3V7_bUoz93Z3h0bjh8dsYrKChz_6oloGirFDdWqYHCKYSZJ2kbIRWNaalzhLoPUAfGGjIlUzy-b2U2iSF5EQF7dag1CEhB20MTDlm1kA3VOK3YgE0lrGhRxh_JK6GsWFDjZ4Ft1q-O8ocYCZw",
          width: 1280
        }
      ],
      place_id: "ChIJ-VrecmkWrjsRtN8D7e0Ddcc",
      plus_code: {
        compound_code: "XHCV+PQ Bengaluru, Karnataka, India",
        global_code: "7J4VXHCV+PQ"
      },
      price_level: 2,
      rating: 4.2,
      reference: "ChIJ-VrecmkWrjsRtN8D7e0Ddcc",
      scope: "GOOGLE",
      types: [
        "cafe",
        "store",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 1672,
      vicinity:
        "23/2 Coffee Day Square, Vittal Mallya Rd, Near Cubbon Park, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9310625,
          lng: 77.63259049999999
        },
        viewport: {
          northeast: {
            lat: 12.93244417989272,
            lng: 77.63404442989273
          },
          southwest: {
            lat: 12.92974452010728,
            lng: 77.63134477010728
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "7d33503e895efff863fd993a73f5bbec6478bba5",
      name: "Café Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 2160,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/109864493743670412501/photos">Akshay Jain</a>'
          ],
          photo_reference:
            "CmRaAAAADJWldRJi1Ij2LkbHeeUb8f0SLkzznFqBF1lZZEiyU0HhvfWHrR3KDmgA4XZE-Xz1pAqMp1ZZ-1A4O9dJb6zG2YzUtvI5WOvHY8VNYzkO42LHZYXImZ5EEYwx-fPo7XhrEhBScm3aTWx0UY_bE6EqJhrFGhSmDhG9R0yVH-GTjL_HH2LGxxhMYg",
          width: 1080
        }
      ],
      place_id: "ChIJb61gLmcUrjsRyLoGkQz8dWs",
      plus_code: {
        compound_code: "WJJM+C2 Bengaluru, Karnataka, India",
        global_code: "7J4VWJJM+C2"
      },
      price_level: 2,
      rating: 4,
      reference: "ChIJb61gLmcUrjsRyLoGkQz8dWs",
      scope: "GOOGLE",
      types: [
        "cafe",
        "store",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 354,
      vicinity:
        "777, Jk Ashwath Lakshmi Heritage, 4Th Block Koramangala, Koramangala, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 13.135868,
          lng: 78.0151516
        },
        viewport: {
          northeast: {
            lat: 13.13704282989272,
            lng: 78.01647067989272
          },
          southwest: {
            lat: 13.13434317010728,
            lng: 78.01377102010727
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "78743cbbcc455e6dec2f08e06a6bd903f64d1de6",
      name: "Cafe Coffee Day - Kolar Highway",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 1025,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/114144650450740637311/photos">Rajath Kashyap</a>'
          ],
          photo_reference:
            "CmRaAAAA2wRBQ0AncxYzVE1Pe--vgHH1FeNPY_RZ7_8ttv9OlPwPJORBFdXzBXXUN0c7CDAm3Fw0WoANfJFOb4_7R1OwLiOQx0eS4qyO1Q_kJ167e1rU3affJ1A5Foefp0IFJ3fkEhDkYmXj9RH4kNAE-JhizKV7GhQPUSxgfix1CIfbuzMEUlkHxo7Sng",
          width: 1080
        }
      ],
      place_id: "ChIJPVFdQHf8rTsR2JIeojPGo00",
      plus_code: {
        compound_code: "42P8+83 Kendatti Gollahalli, Karnataka, India",
        global_code: "7J5W42P8+83"
      },
      price_level: 2,
      rating: 4.1,
      reference: "ChIJPVFdQHf8rTsR2JIeojPGo00",
      scope: "GOOGLE",
      types: [
        "cafe",
        "store",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 3636,
      vicinity:
        "Inside Hpcl, Bangalore - Kolar Highway, Kendatti Gollahalli, Kolar"
    },
    {
      geometry: {
        location: {
          lat: 12.9622748,
          lng: 77.70145780000001
        },
        viewport: {
          northeast: {
            lat: 12.96362327989272,
            lng: 77.70282437989273
          },
          southwest: {
            lat: 12.96092362010728,
            lng: 77.70012472010728
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "d1729a367de3f8be2b8d2cff359ab05f5e482ff9",
      name: "The Lounge",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 1152,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/103129047114206153358/photos">A Google User</a>'
          ],
          photo_reference:
            "CmRaAAAAO92gH2RP1p9Onvf-SY765khHi8g7aVJX_SjwkL4rPzIgQtFI-aMS_XP-AhED6Q--B1rE8wW4dOE97eE4zehmmBW9eZiXBaPy1x7Sfiv06yly7p6Wvz2zM3Pd6Z6oYxQ7EhA3CzQOT8um2ChYMu03j4yRGhTdunC-oGMjXod_rwjJOv-9gY4NbQ",
          width: 864
        }
      ],
      place_id: "ChIJ1X2cbi0SrjsRkPD5wIOLGFk",
      plus_code: {
        compound_code: "XP62+WH Bengaluru, Karnataka, India",
        global_code: "7J4VXP62+WH"
      },
      price_level: 2,
      rating: 3.9,
      reference: "ChIJ1X2cbi0SrjsRkPD5wIOLGFk",
      scope: "GOOGLE",
      types: [
        "cafe",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 470,
      vicinity:
        "Marathahalli Bridge, Outer Ring Rd, Near, Anand Nagar, Aswath Nagar, Marathahalli, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9370848,
          lng: 77.6917311
        },
        viewport: {
          northeast: {
            lat: 12.93843032989272,
            lng: 77.69321222989272
          },
          southwest: {
            lat: 12.93573067010728,
            lng: 77.69051257010727
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "ec8fc8594bc3143f0c3a46a4a1933794c040e3d4",
      name: "Cafe Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 4608,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/102037026257840611819/photos">nitesh sardana</a>'
          ],
          photo_reference:
            "CmRaAAAA77f0ojhK9klJPMhnziBqnxqfFAEPFSk-j96ZjUeYPLFV1E6qm1X-T_5oZ870pRCJfo7H_uWBB3zr8FOpwHJn7C040plpV4S6DvTZsw7FUOh77t_c-RfXaPdJngvL22tHEhD9mIGFK99bVmsaIt32cXAYGhRZSNYGtj2K2nqYF2_iojz3DZk8kQ",
          width: 3456
        }
      ],
      place_id: "ChIJU2PW1JMXrjsRY0K-qWHq8ZY",
      plus_code: {
        compound_code: "WMPR+RM Bengaluru, Karnataka, India",
        global_code: "7J4VWMPR+RM"
      },
      price_level: 2,
      rating: 3.8,
      reference: "ChIJU2PW1JMXrjsRY0K-qWHq8ZY",
      scope: "GOOGLE",
      types: [
        "cafe",
        "store",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 47,
      vicinity:
        "Salarpuria Hallmark, Outer Ring Rd, Kadubeesanahalli, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9962087,
          lng: 77.68855020000001
        },
        viewport: {
          northeast: {
            lat: 12.99746447989272,
            lng: 77.69009207989272
          },
          southwest: {
            lat: 12.99476482010728,
            lng: 77.68739242010727
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "a65837e7a382e3b03642315007c96d8839dee5e0",
      name: "Cafe Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 801,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/114144650450740637311/photos">Rajath Kashyap</a>'
          ],
          photo_reference:
            "CmRaAAAAbqlrCK-oWj3AvnFhf6Mu-9lGeZPfsPjddMRzFtYylFRcEp4fGK94junib4f7F9Gu_beCY3xCFoK7YQuBUPU9BZS8Ukq0ChnR-FDhvIFPtbchjzyf4twkgRZrq2_0vi1rEhBqHQm0stt2Uu1QP_fvHqPZGhSjZkQ5Ls2dFsIPAwm63uJ9G1eVeA",
          width: 1080
        }
      ],
      place_id: "ChIJmTE2og0RrjsRuZDKwgl9MLU",
      plus_code: {
        compound_code: "XMWQ+FC Bengaluru, Karnataka, India",
        global_code: "7J4VXMWQ+FC"
      },
      price_level: 2,
      rating: 3.4,
      reference: "ChIJmTE2og0RrjsRuZDKwgl9MLU",
      scope: "GOOGLE",
      types: [
        "cafe",
        "store",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 55,
      vicinity:
        "HP, Swamy Vivekananda Rd, B Narayanapura, Mahadevapura, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9639334,
          lng: 77.7485319
        },
        viewport: {
          northeast: {
            lat: 12.96529962989272,
            lng: 77.74982647989272
          },
          southwest: {
            lat: 12.96259997010728,
            lng: 77.74712682010728
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "623aff528ba4de065534e132b9ffbdb3a3afebb4",
      name: "Cafe Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 4608,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/110164804738902670814/photos">Megha Shetty</a>'
          ],
          photo_reference:
            "CmRaAAAACWN0c3f42fdWRNmODU51LmHRvUnHQk3OYndom8C1CrN6NnT2Q2Beir3rfN5RBL4IaVa7MZfABpNnCMF4GjS0YJaDesmjLunC0t-NgCn7KNcPr272jnDojQw2691vyDoTEhAbm1Pxz8YTOgX_TVvXHVa1GhRzpBr6KbMv-b_Xk3cL9k-oNWaQcQ",
          width: 3456
        }
      ],
      place_id: "ChIJzcbN0fkNrjsRj77Q031lHNA",
      plus_code: {
        compound_code: "XP7X+HC Bengaluru, Karnataka, India",
        global_code: "7J4VXP7X+HC"
      },
      price_level: 2,
      rating: 3.6,
      reference: "ChIJzcbN0fkNrjsRj77Q031lHNA",
      scope: "GOOGLE",
      types: ["cafe", "store", "point_of_interest", "food", "establishment"],
      user_ratings_total: 59,
      vicinity: "Whitefield Main Rd, Ramagondanahalli, Whitefield, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9506639,
          lng: 77.5678358
        },
        viewport: {
          northeast: {
            lat: 12.95201342989272,
            lng: 77.56911387989271
          },
          southwest: {
            lat: 12.94931377010728,
            lng: 77.56641422010726
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "24126051c88ec4cc63b9d360ff1212d2da9daa54",
      name: "Cafe Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 853,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/104021521334966359211/photos">Supreeth M S</a>'
          ],
          photo_reference:
            "CmRaAAAAkcTuomBON2R8c5vLPqvTt8g92RKwXOpiYOqUPTal2MKtIwtHuffmIXrr_xH95pNYac-08MvDB00nPe184pxUcRxQ9eC_1kXADYkFU2QacW_aKIUbufpj8G4K9NnlafI3EhDa60XpRPe1P7muwIACnwLRGhRhd7qrmZC9aiR-08HhP7ou5hchuw",
          width: 1280
        }
      ],
      place_id: "ChIJFw33TPEVrjsRl0g3xHTRdWw",
      plus_code: {
        compound_code: "XH29+74 Bengaluru, Karnataka, India",
        global_code: "7J4VXH29+74"
      },
      price_level: 2,
      rating: 3.6,
      reference: "ChIJFw33TPEVrjsRl0g3xHTRdWw",
      scope: "GOOGLE",
      types: [
        "cafe",
        "store",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 222,
      vicinity:
        "1, Spc Complex, Opp Bsnl Office,, Bull Temple Rd, Shankarapura, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9765944,
          lng: 77.5992708
        },
        viewport: {
          northeast: {
            lat: 12.97794992989272,
            lng: 77.60061887989272
          },
          southwest: {
            lat: 12.97525027010728,
            lng: 77.59791922010729
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "8e4b26d049b5376021e13b9deb395bd844db954a",
      name: "Cafe Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 1836,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/116666447348846516566/photos">Nirmala Kolur</a>'
          ],
          photo_reference:
            "CmRaAAAA6QRNTU219ypc56pQugaUmfrg_ok5IufapCTi68gaeEhaHjCHZngCr1tAQtYrLLYPirrnBgp4fmZISl-J0QbmEuaRok1mWQ1RB5U9Qt4BktFwMW6Pjd71TB2OeF-O3L_AEhAvhty59gVeds26IousqVzxGhTu9NvK3axfeJLPAmJTlZoEX211Ww",
          width: 3264
        }
      ],
      place_id: "ChIJ694PVHwWrjsRZAC3_-suseE",
      plus_code: {
        compound_code: "XHGX+JP Bengaluru, Karnataka, India",
        global_code: "7J4VXHGX+JP"
      },
      price_level: 2,
      rating: 3.7,
      reference: "ChIJ694PVHwWrjsRZAC3_-suseE",
      scope: "GOOGLE",
      types: [
        "cafe",
        "store",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 96,
      vicinity: "Spencer Building, 44, MG Road, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 13.045318,
          lng: 77.62679199999999
        },
        viewport: {
          northeast: {
            lat: 13.04651787989272,
            lng: 77.62823082989273
          },
          southwest: {
            lat: 13.04381822010728,
            lng: 77.62553117010728
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "dbe12a15d71730985d167a5c3861c27159866c99",
      name: "Café Coffee Day - Elements Mall",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 4608,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/106755294147260228153/photos">Abhitej Singh</a>'
          ],
          photo_reference:
            "CmRaAAAALJYiuInpguiPUCO1c6UEJA3qbQsIjbKgZBZraD-Mz0m1UFMBrzuMMXXXnHUCyo1qo-1xPi2GZ0kAaHEoGu9V0Q2zZCPH2xqfW0NbsrY5TlJb9mhQwrOKIkf0rAuKUBisEhC6SGN1vQPOnKfTey2kyQfVGhQXJXZSm2R60MbvqD-ivWl0KbfYtQ",
          width: 3456
        }
      ],
      place_id: "ChIJG5Pd42gXrjsRRqUg7B_8H8E",
      plus_code: {
        compound_code: "2JWG+4P Bengaluru, Karnataka, India",
        global_code: "7J5V2JWG+4P"
      },
      price_level: 2,
      rating: 3.7,
      reference: "ChIJG5Pd42gXrjsRRqUg7B_8H8E",
      scope: "GOOGLE",
      types: [
        "cafe",
        "store",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 180,
      vicinity:
        "Inside Msr Regalia Elements Mall, Ms Ramaiah North City, Thanisandra Main Road, Ms Ramaiah, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9128233,
          lng: 77.68055629999999
        },
        viewport: {
          northeast: {
            lat: 12.91411047989272,
            lng: 77.68186637989271
          },
          southwest: {
            lat: 12.91141082010728,
            lng: 77.67916672010728
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "082e7686a6cd6bf6d23e5c4b552319b03fe8735d",
      name: "Cafe Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 4608,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/101765060427641554920/photos">Amit Yadav</a>'
          ],
          photo_reference:
            "CmRaAAAAtFfjvtTTF0061abTA_MgTnZPh2IaFTG50slSwvykiJzavam22otM_Db7K3zMbaL-FCL1Kze14ExeduYjhYQPCGfJM_rauxX1VIJ9zsR4I7s12flnlSq32-k6bIvuiF2WEhALFhL2QOx-NVbVJuLqg0nsGhSBwxfyWZ25nQtoXUSGUBYWKy-4NQ",
          width: 3456
        }
      ],
      place_id: "ChIJh8HHRBITrjsRg6CdAOo25Gs",
      plus_code: {
        compound_code: "WM7J+46 Bengaluru, Karnataka, India",
        global_code: "7J4VWM7J+46"
      },
      price_level: 2,
      rating: 3.7,
      reference: "ChIJh8HHRBITrjsRg6CdAOo25Gs",
      scope: "GOOGLE",
      types: [
        "cafe",
        "store",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 328,
      vicinity:
        "65/1c, Sarjapur Main Rd, Next To Pragathi Motors, Kaikondrahalli, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9257628,
          lng: 77.5640659
        },
        viewport: {
          northeast: {
            lat: 12.92715987989272,
            lng: 77.56550227989273
          },
          southwest: {
            lat: 12.92446022010728,
            lng: 77.56280262010728
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "608e932b92dfb6dd44c562f37e49e36d58324b8d",
      name: "Cafe Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 4608,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/115521756628872726341/photos">Rocky R</a>'
          ],
          photo_reference:
            "CmRaAAAAOn8QfaFJZFCkmj4jgBcwNOgU2d6CTed49QBNaws5yOdydSdaDBcL_pIuqjBfaf2RbSx0p9nydlMa2TQ_9-7q6T1zGIsCuQUtJhxMbiN9SCjOvgr6o1tvwF-CnVbqQpNZEhCWlkH6hdcbyZEQ-RZVpwNDGhQlNdprjn0_j5I_mF9B1UM6EuQ1RA",
          width: 3456
        }
      ],
      place_id: "ChIJV1TizYAVrjsRzdLW2C5H5us",
      plus_code: {
        compound_code: "WHG7+8J Bengaluru, Karnataka, India",
        global_code: "7J4VWHG7+8J"
      },
      price_level: 2,
      rating: 3.9,
      reference: "ChIJV1TizYAVrjsRzdLW2C5H5us",
      scope: "GOOGLE",
      types: ["cafe", "point_of_interest", "food", "establishment"],
      user_ratings_total: 266,
      vicinity:
        "1431, 22Nd Cross, 2Nd Stage, Banashankari, Near Bda Complex, 22nd Cross Rd, Banashankari, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9705585,
          lng: 77.64728049999999
        },
        viewport: {
          northeast: {
            lat: 12.97200182989272,
            lng: 77.64869247989272
          },
          southwest: {
            lat: 12.96930217010728,
            lng: 77.64599282010727
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "d065a8bb9ec0641180b62eb1091cfac95f882449",
      name: "Café Coffee Day - 12th Main Road",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 2048,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/113490114144489167184/photos">Zakir Ashraf</a>'
          ],
          photo_reference:
            "CmRaAAAATQaUWykeaZIvbv3KY3XHs3f6cM_T7fpEawUK-5xQ8tm7XtgpIJz7y_ZL64JGs9RD4319_IlpOPKaPRBybWrEkKYXG0ZfxwECOjHXJgF9vapJmuP96aGj3M3Ey12qSv34EhDRyFqgy9wG2HT6Vqh4tYUfGhT963MXAGk0n2NBnb2Q25PTVockVQ",
          width: 1152
        }
      ],
      place_id: "ChIJhz6k76kWrjsR8BkBAb163oU",
      plus_code: {
        compound_code: "XJCW+6W Bengaluru, Karnataka, India",
        global_code: "7J4VXJCW+6W"
      },
      price_level: 2,
      rating: 4,
      reference: "ChIJhz6k76kWrjsR8BkBAb163oU",
      scope: "GOOGLE",
      types: [
        "cafe",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 1022,
      vicinity:
        "622, 12th Main Rd, 7th Cross, HAL 2nd Stage, Indiranagar, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9123321,
          lng: 77.6413384
        },
        viewport: {
          northeast: {
            lat: 12.91362502989272,
            lng: 77.64268652989271
          },
          southwest: {
            lat: 12.91092537010728,
            lng: 77.63998687010726
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "3278994117444460e38964ef3e5d7349a0db74d2",
      name: "Café Coffee Day HSR Layout",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 2448,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/106642824215072687204/photos">Balaji Donthi</a>'
          ],
          photo_reference:
            "CmRaAAAA0cxKJErTLeGAKTfJc35UuEF901SSLVep2StGicbCezJyBDoi82ERQSeWjbdsg5wnVLWn7sC5DQR_Q7wn1ZQIaPGHQC3PPn_OHUM4AZMRmL2C2qQbTVI67b-kzG238QvPEhAIzUZ1sgv0So09znY12SPvGhSfQUNgdSUOY8QODKnsrLNZZVy_Rw",
          width: 3264
        }
      ],
      place_id: "ChIJS3DNGpAUrjsRgssDjbqSaPE",
      plus_code: {
        compound_code: "WJ6R+WG Bengaluru, Karnataka, India",
        global_code: "7J4VWJ6R+WG"
      },
      price_level: 2,
      rating: 4.1,
      reference: "ChIJS3DNGpAUrjsRgssDjbqSaPE",
      scope: "GOOGLE",
      types: [
        "cafe",
        "store",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 1340,
      vicinity:
        "Ground Floor, No 451, 17th Cross Road, Sector 4, HSR Layout, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9737352,
          lng: 77.611293
        },
        viewport: {
          northeast: {
            lat: 12.97512627989272,
            lng: 77.61254182989272
          },
          southwest: {
            lat: 12.97242662010728,
            lng: 77.60984217010729
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "72a0c37b2d83fef653126f2c06ea865fc0cc9be6",
      name: "Café Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 3000,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/112917566499313404178/photos">Manu Solomon</a>'
          ],
          photo_reference:
            "CmRaAAAAWofGTxdUyUJRRHjIcIguMjY-yAldLg_WuTtIwjMPxPRVAyent1OVBoQtqC_g9UBBujeENoEmgLGsisl34x-0Nv6aZ2u6O4tbMaioqUM_iqsmGw0H-moaacfDxAbLMVtKEhCsU8M_8ZkZpfEaIFBRwDXtGhTCtYKCZ1HZ3YVF4SXDcqAWA8LSCQ",
          width: 4000
        }
      ],
      place_id: "ChIJq63s1IYWrjsRFRhSVMPHrfA",
      plus_code: {
        compound_code: "XJF6+FG Bengaluru, Karnataka, India",
        global_code: "7J4VXJF6+FG"
      },
      price_level: 2,
      rating: 3.9,
      reference: "ChIJq63s1IYWrjsRFRhSVMPHrfA",
      scope: "GOOGLE",
      types: ["cafe", "store", "point_of_interest", "food", "establishment"],
      user_ratings_total: 130,
      vicinity:
        "Bangalore Central, 47/48, Residency Road, Commissariat Rd, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.9224385,
          lng: 77.66842609999999
        },
        viewport: {
          northeast: {
            lat: 12.92375247989272,
            lng: 77.66979097989271
          },
          southwest: {
            lat: 12.92105282010728,
            lng: 77.66709132010728
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "fd2b854b9d0747456aa1a0708e84679ed691db33",
      name: "Cafe Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 3456,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/105595903961441009172/photos">Ravish Malhotra</a>'
          ],
          photo_reference:
            "CmRaAAAArx-5cYEAN9Gi8Az5is7p_zvimV3ARfmZo09aImm2N5ppt_XyzsvUp71ESnOQviFvQRwkvMSB2hDSwPbZiWiNoTL4t-tSRNfwQ1Wfjh7sZn3KZy_59WL30GNk28A6ObYtEhBUn2Sd2dUwVzF7qx6qXZ1cGhS11qaER2L_auV6UBPU3y0-4fRXVw",
          width: 4608
        }
      ],
      place_id: "ChIJL4x7-XYTrjsRxRkE_UhBuYE",
      plus_code: {
        compound_code: "WMC9+X9 Bengaluru, Karnataka, India",
        global_code: "7J4VWMC9+X9"
      },
      price_level: 2,
      rating: 3.9,
      reference: "ChIJL4x7-XYTrjsRxRkE_UhBuYE",
      scope: "GOOGLE",
      types: ["cafe", "point_of_interest", "food", "establishment"],
      user_ratings_total: 690,
      vicinity:
        "Marathahalli - Sarjapur Outer Ring Rd, Iblur Village, Bellandur, Bengaluru"
    },
    {
      geometry: {
        location: {
          lat: 12.8128962,
          lng: 77.51097229999999
        },
        viewport: {
          northeast: {
            lat: 12.81438262989272,
            lng: 77.51275427989272
          },
          southwest: {
            lat: 12.81168297010728,
            lng: 77.51005462010727
          }
        }
      },
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      id: "8c2514cb95ec2e77cabea8059c1268c19c0c7188",
      name: "Cafe Coffee Day",
      opening_hours: {
        open_now: true
      },
      photos: [
        {
          height: 3480,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/107396985315344181187/photos">Shankar M</a>'
          ],
          photo_reference:
            "CmRaAAAA9Pi_JVtqMSwW62iSctfSFpiV5t2REl-_IKVbw8aKbpSZM8ac-MxRh0GGHhDoBKiRqBdOapdV1HO9H2kLHXqPPuBkskq1HFDGk9vm6eTNtyoUdRuFsoxWaMN0Emf8w1lSEhCMrvMVOVrPRbdtVhjmx0VyGhQ7JyoeVCOQ_8nNHmMGpnXBbotTFg",
          width: 4640
        }
      ],
      place_id: "ChIJj2vEPAlBrjsRzenNxQsRJ_w",
      plus_code: {
        compound_code: "RG76+59 Bengaluru, Karnataka, India",
        global_code: "7J4VRG76+59"
      },
      price_level: 2,
      rating: 4.1,
      reference: "ChIJj2vEPAlBrjsRzenNxQsRJ_w",
      scope: "GOOGLE",
      types: [
        "cafe",
        "store",
        "restaurant",
        "point_of_interest",
        "food",
        "establishment"
      ],
      user_ratings_total: 1068,
      vicinity:
        "122, Brigade Meadows, Kaggalipura, Kanakapura Road, Opp Anjanya Temple, Udayapur Pst Arcade, Bengaluru"
    }
  ],
  status: "OK"
};
