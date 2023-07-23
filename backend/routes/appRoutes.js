const { Router } = require('express')
const appController = require('../controller/appController')
const router = Router();

router.get('/trending', appController.getTrending);
router.get('/popular', appController.getPopular)
router.get('/search', appController.getSearch)
router.get('/details/:id', appController.getDetails)

module.exports = router;

/*{
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/xGIeqQunSj5dxGZVKzNNr9W4vps.jpg',     
      id: 298618,
      title: 'The Flash',
      original_language: 'en',
      original_title: 'The Flash',
      overview: "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in 
and return to the future that he knows, Barry's only hope is 
to race for his life. But will making the ultimate sacrifice 
be enough to reset the universe?",
      poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',       
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 4152.617,
      release_date: '2023-06-13',
      video: false,
      vote_average: 6.9,
      vote_count: 1302
    },
    {
      adult: false,
      backdrop_path: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',     
      id: 346698,
      title: 'Barbie',
      original_language: 'en',
      original_title: 'Barbie',
      overview: 'Barbie and Ken are having the time of their 
lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
      poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',       
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 4053.948,
      release_date: '2023-07-19',
      video: false,
      vote_average: 7.9,
      vote_count: 456
    },
    {
      adult: false,
      backdrop_path: '/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg',     
      id: 872585,
      title: 'Oppenheimer',
      original_language: 'en',
      original_title: 'Oppenheimer',
      overview: 'The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.',   
      poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',       
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 1266.238,
      release_date: '2023-07-19',
      video: false,
      vote_average: 8.3,
      vote_count: 254
    },
    {
      adult: false,
      backdrop_path: '/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg',     
      id: 667538,
      title: 'Transformers: Rise of the Beasts',
      original_language: 'en',
      original_title: 'Transformers: Rise of the Beasts',    
      overview: 'When a new threat capable of destroying the 
entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.',
      poster_path: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',       
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 7511.895,
      release_date: '2023-06-06',
      video: false,
      vote_average: 7.407,
      vote_count: 1628
    },
    {
      adult: false,
      backdrop_path: '/3aQb80osBLrUISe6TJ7Y4A0VZJV.jpg',     
      id: 736769,
      title: 'They Cloned Tyrone',
      original_language: 'en',
      original_title: 'They Cloned Tyrone',
      overview: 'A series of eerie events thrusts an unlikely trio onto the trail of a nefarious government conspiracy lurking directly beneath their neighborhood.',
      poster_path: '/hnzXoDaK346U4ByfvQenu2DZnTg.jpg',       
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 33.53,
      release_date: '2023-06-14',
      video: false,
      vote_average: 7.854,
      vote_count: 24
    },
    {
      adult: false,
      backdrop_path: '/uj2duAkn6zUmRSbjyEr7XUeIWsJ.jpg',     
      id: 1083862,
      title: 'Resident Evil: Death Island',
      original_language: 'ja',
      original_title: 'バイオハザード：デスアイランド',      
      overview: 'In San Francisco, Jill Valentine is dealing 
with a zombie outbreak and a new T-Virus, Leon Kennedy is on 
the trail of a kidnapped DARPA scientist, and Claire Redfield is investigating a monstrous fish that is killing whales in 
the bay. Joined by Chris Redfield and Rebecca Chambers, they 
discover the trail of clues from their separate cases all converge on the same location, Alcatraz Island, where a new evil has taken residence and awaits their arrival.',
      poster_path: '/qayga07ICNDswm0cMJ8P3VwklFZ.jpg',       
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 211.83,
      release_date: '2023-06-22',
      video: false,
      vote_average: 8.708,
      vote_count: 48
    },
    {
      adult: false,
      backdrop_path: '/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg',     
      id: 447365,
      title: 'Guardians of the Galaxy Vol. 3',
      original_language: 'en',
      original_title: 'Guardians of the Galaxy Vol. 3',      
      overview: 'Peter Quill, still reeling from the loss of 
Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.',
      poster_path: '/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',       
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 2914.416,
      release_date: '2023-05-03',
      video: false,
      vote_average: 8.1,
      vote_count: 3311
    },
    {
      adult: false,
      backdrop_path: '/628Dep6AxEtDxjZoGP78TsOxYbK.jpg',     
      id: 575264,
      title: 'Mission: Impossible - Dead Reckoning Part One',      original_language: 'en',
      original_title: 'Mission: Impossible - Dead Reckoning Part One',
      overview: "Ethan Hunt and his IMF team embark on their 
most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the 
wrong hands. With control of the future and the world's fate 
at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, 
all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
      poster_path: '/NNxYkU70HPurnNCSiCjYAmacwm.jpg',        
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 668.759,
      release_date: '2023-07-08',
      video: false,
      vote_average: 7.83,
      vote_count: 562
    },
    {
      adult: false,
      backdrop_path: '/gJjSWUYHCulhJS5LBQmEEKmkpyD.jpg',     
      id: 1040148,
      title: 'Ruby Gillman, Teenage Kraken',
      original_language: 'en',
      original_title: 'Ruby Gillman, Teenage Kraken',        
      overview: "Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined 
to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.",
      poster_path: '/lotWiuWuTGlQ94rzBdy6ZmKZnTA.jpg',       
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 722.799,
      release_date: '2023-06-28',
      video: false,
      vote_average: 7.513,
      vote_count: 152
    },
    {
      adult: false,
      backdrop_path: '/uLAkoHYJTw7KVQnT7xhzvx0ewTK.jpg',     
      id: 201304,
      name: 'Justified: City Primeval',
      original_language: 'en',
      original_name: 'Justified: City Primeval',
      overview: 'Having left the hollers of Kentucky 15 years ago, Raylan Givens is now is based in Miami, balancing life 
as a marshal and part-time father of a 15-year-old girl. A chance encounter on a Florida highway sends him to Detroit and 
he crosses paths with Clement Mansell, aka The Oklahoma Wildman, a violent sociopath who’s already slipped through the fingers of Detroit’s finest once and wants to do so again.',    
      poster_path: '/uTp9cMxFMCk5b7alKb2m5wHaGxb.jpg',       
      media_type: 'tv',
      genre_ids: [Array],
      popularity: 133.717,
      first_air_date: '2023-07-18',
      vote_average: 7.429,
      vote_count: 7,
      origin_country: [Array]
    },
    {
      adult: false,
      backdrop_path: '/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',     
      id: 385687,
      title: 'Fast X',
      original_language: 'en',
      original_title: 'Fast X',
      overview: "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",        
      poster_path: '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',       
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 2020.12,
      release_date: '2023-05-17',
      video: false,
      vote_average: 7.3,
      vote_count: 2840
    },
    {
      adult: false,
      backdrop_path: '/gmECX1DvFgdUPjtio2zaL8BPYPu.jpg',     
      id: 95479,
      name: 'Jujutsu Kaisen',
      original_language: 'ja',
      original_name: '呪術廻戦',
      overview: 'Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.',
      poster_path: '/3yFHMtdhriig4sm1w8oMQfA2gFN.jpg',       
      media_type: 'tv',
      genre_ids: [Array],
      popularity: 784.355,
      first_air_date: '2020-10-03',
      vote_average: 8.551,
      vote_count: 2649,
      origin_country: [Array]
    },
    {
      adult: false,
      backdrop_path: '/7NNNXo0qG2SqH4JoG7GPvJ2hzes.jpg',     
      id: 93740,
      name: 'Foundation',
      original_language: 'en',
      original_name: 'Foundation',
      overview: 'Follow a band of exiles on their monumental 
journey to save humanity and rebuild civilization amid the fall of the Galactic Empire.',
      poster_path: '/1AZERr7KEJBpcchQ6vFcbUUC0Zw.jpg',       
    media_type: 'tv',
      genre_ids: [Array],
      popularity: 464.896,
      first_air_date: '2021-09-24',
      vote_average: 7.896,
      vote_count: 842,
      origin_country: [Array]
    },
    {
      adult: false,
      backdrop_path: '/57clBMPX25NNO6nmDw3TV3zQaQE.jpg',     
      id: 114472,
      name: 'Secret Invasion',
      original_language: 'en',
      original_name: 'Secret Invasion',
      overview: 'Nick Fury and Talos discover a faction of shapeshifting Skrulls who have been infiltrating Earth for years.',
      poster_path: '/f5ZMzzCvt2IzVDxr54gHPv9jlC9.jpg',       
      media_type: 'tv',
      genre_ids: [Array],
      popularity: 1950.545,
      first_air_date: '2023-06-21',
      vote_average: 7.8,
      vote_count: 327,
      origin_country: [Array]
    },
    {
      adult: false,
      backdrop_path: '/aQ05QNSEersEdOzaqdjnrkqxZXE.jpg',     
      id: 805320,
      title: 'Bird Box Barcelona',
      original_language: 'es',
      original_title: 'Bird Box Barcelona',
      overview: 'After a mysterious force decimates the world’s population, Sebastian must navigate his own survival journey through the desolate streets of Barcelona. As he forms uneasy alliances with other survivors and they try to escape the city, an unexpected and even more sinister threat grows.',  
      poster_path: '/hOb6ODI7QQFKkOe3eJU2Fdh2fk1.jpg',       
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 1287.482,
      release_date: '2023-07-14',
      video: false,
      vote_average: 6.002,
      vote_count: 221
    },
    {
      adult: false,
      backdrop_path: '/iJ0UZaC7XW7BUpRQ7OLPZSms8Ou.jpg',     
      id: 813477,
      title: 'Shin Kamen Rider',
      original_language: 'ja',
      original_title: 'シン・仮面ライダー',
      overview: 'Hongo Takeshi awakens to discover he has been transformed into a grasshopper-hybrid cyborg. Becoming the 
Masked Rider, he must fight the mysterious evil organization 
SHOCKER to protect all of mankind.',
      poster_path: '/9dTO2RygcDT0cQkawABw4QkDegN.jpg',       
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 40.537,
      release_date: '2023-03-17',
      video: false,
      vote_average: 7.2,
      vote_count: 20
    },
    {
      adult: false,
      backdrop_path: '/u2C8hDXDc6wmgSKIT5sxarNKulY.jpg',     
      id: 609681,
      title: 'The Marvels',
      original_language: 'en',
      original_title: 'The Marvels',
      overview: 'Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge 
on the Supreme Intelligence. But unintended consequences see 
Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.',
      poster_path: '/wP6DQ9LfL1zadoYWsd3NscQ7P9.jpg',        
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 50.841,
      release_date: '2023-11-08',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: '/zcZBlpCeuaFCHHsgGAd6yB5RxZV.jpg',     
      id: 603692,
      title: 'John Wick: Chapter 4',
      original_language: 'en',
      original_title: 'John Wick: Chapter 4',
      overview: 'With the price on his head ever increasing, 
John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
      poster_path: '/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',        
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 1094.935,
      release_date: '2023-03-22',
      video: false,
      vote_average: 7.852,
      vote_count: 3792
    },
    {
      adult: false,
      backdrop_path: '/yBOOto5TcaectXJibpZhVbtCyFY.jpg',     
      id: 1140692,
      title: 'The Channel',
      original_language: 'en',
      original_title: 'The Channel',
      overview: 'After their bank heist goes wrong, a desperate criminal, his out-of-control brother, and their motley crew of ex-marines must escape New Orleans and the determined FBI agent who pursues them.',
      poster_path: '/9Z7TzgY3qcBX7VHaNG3E3t8YP1v.jpg',       
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 28.085,
      release_date: '2023-07-14',
      video: false,
      vote_average: 6.7,
      vote_count: 10
    },
    {
      adult: false,
      backdrop_path: '/ooXeD2XghNOg4JEb7XQPL3YPE5y.jpg',     
      id: 1008102,
      title: 'Rally Road Racers',
      original_language: 'en',
      original_title: 'Rally Road Racers',
      overview: 'Zhi, a rookie race car driver, gets the opportunity to compete against the reigning champion of the rally car circuit. With help from a former driver-turned-mechanic, Zhi must overcome treacherous terrain, rival racers, and unexpected obstacles to prove he has what it takes to be the next great racer.',
      poster_path: '/e9L7N5z3qHHgSNUIUuBSaicQvpT.jpg',       
      media_type: 'movie',
      genre_ids: [Array],
      popularity: 17.448,
      release_date: '2023-05-12',
      video: false,
      vote_average: 7.2,
      vote_count: 5
    }
  ],
  total_pages: 1000,
  total_results: 20000
} */