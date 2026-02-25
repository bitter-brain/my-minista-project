import categoryItems from '@/sections/Categories/categoryItems'

const collectionGroups = [
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },

          {
            title: 'Action 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },

          {
            title: 'Action 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },

          {
            title: 'Action 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'Trending Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Bhai Jaan',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 57min',
            views: '1.5K',
          },
          {
            title: 'Suraj pe Mangal Bhari',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '2h 10min',
            views: '1.8K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '2h 30min',
            views: '2.1K',
          },
          {
            title: 'Ant-Man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 42min',
            views: '6K',
          },

          {
            title: 'Ant-Man',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 42min',
            views: '5K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 30min',
            views: '2K',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 30min',
            views: '2K',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 30min',
            views: '2K',
          },
        ],
      },
      {
        title: 'New Releases',
        movieItems: [
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/6.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'Big Gun',
            imgSrc: '/src/assets/images/movies/7.jpg',
            released: {
              label: '22 April 2023',
              dateTime: '2023-04-22',
            }
          },
          {
            title: 'Sin City',
            imgSrc: '/src/assets/images/movies/8.jpg',
            released: {
              label: '13 April 2023',
              dateTime: '2023-04-13',
            }
          },
          {
            title: 'The Tomorrow War',
            imgSrc: '/src/assets/images/movies/9.jpg',
            released: {
              label: '19 April 2023',
              dateTime: '2023-04-19',
            }
          },
          {
            title: 'Misfire',
            imgSrc: '/src/assets/images/movies/10.jpg',
            released: {
              label: '11 April 2023',
              dateTime: '2023-04-11',
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/5.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/5.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/2.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/3.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/4.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/5.jpg',
            released: {
              label: '14 April 2023',
              dateTime: '2023-04-14',
            }
          },
        ],
      },
      {
        title: 'Must - Watch Movies',
        movieItems: [
          {
            title: 'Kantara',
            imgSrc: '/src/assets/images/movies/11.jpg',
            duration: '1h 57min',
            rating: {
              value: 4,
              label: '30K',
            }
          },
          {
            title: 'Pushpa',
            imgSrc: '/src/assets/images/movies/12.jpg',
            duration: '1h 30min',
            rating: {
              value: 3.6,
              label: '15K',
            }
          },
          {
            title: 'Blade Runner',
            imgSrc: '/src/assets/images/movies/13.jpg',
            duration: '1h 42min',
            rating: {
              value: 4.6,
              label: '50K',
            }
          },
          {
            title: 'Adipurush',
            imgSrc: '/src/assets/images/movies/14.jpg',
            duration: '2h 10min',
            rating: {
              value: 3.5,
              label: '8K',
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
    ],
  },
  {
    title: 'Shows',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },

          {
            title: 'Action 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },

          {
            title: 'Action 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },

          {
            title: 'Action 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ],
          },
          {
            title: 'Adventure 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ],
          },
          {
            title: 'Comedy 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ],
          },
          {
            title: 'Drama 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'Trending Shows Now',
        movieItems: [
          {
            title: 'The Stranger Things',
            imgSrc: '/src/assets/images/shows/1.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/shows/2.jpg',
            duration: '12h 20min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Lucifer',
            imgSrc: '/src/assets/images/shows/3.jpg',
            duration: '14h 30min',
            season: '3 Season',
            href: '/show',
          },
          {
            title: 'The Uncathcable',
            imgSrc: '/src/assets/images/shows/4.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'New Released Shows',
        movieItems: [
          {
            title: 'High Town',
            imgSrc: '/src/assets/images/shows/5.jpg',
            duration: '12h 23min',
            season: '5 Season',
            href: '/show',
          },
          {
            title: 'Mirzapur',
            imgSrc: '/src/assets/images/shows/6.jpg',
            duration: '7h 40min',
            season: '2 Season',
            href: '/show',
          },
          {
            title: 'Breathe',
            imgSrc: '/src/assets/images/shows/7.jpg',
            duration: '8h 20min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Peaky Blinders',
            imgSrc: '/src/assets/images/shows/8.jpg',
            duration: '10h 30min',
            season: '3 Season',
            href: '/show',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            season: '4 Season',
            href: '/show',
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'Must - Watch Movies',
        movieItems: [
          {
            title: 'Duranga',
            imgSrc: '/src/assets/images/shows/9.jpg',
            duration: '7h 40min',
            rating: {
              value: 4.5,
              label: '12K',
            }
          },
          {
            title: 'Money Heist',
            imgSrc: '/src/assets/images/shows/10.jpg',
            duration: '12h 27min',
            rating: {
              value: 4.8,
              label: '28K',
            }
          },
          {
            title: 'Mai',
            imgSrc: '/src/assets/images/shows/11.jpg',
            duration: '10h 30min',
            rating: {
              value: 4,
              label: '2K',
            }
          },
          {
            title: 'The Stranger Things',
            imgSrc: '/src/assets/images/shows/12.jpg',
            duration: '8h 20min',
            rating: {
              value: 4.6,
              label: '32K',
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },

          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 57min',
            rating: {
              value: 4.5,
              label: '20K',
            }
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
    ],
  },
]

export default collectionGroups
