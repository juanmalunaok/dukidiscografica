import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, X, Play, Disc, Users, TrendingUp, Calendar, Hash, Crown, Skull, Flame, Star } from 'lucide-react';

// ============================================================
// DATA: Discografía completa de Duki (223 temas)
// ============================================================

const DUKI_DATA = [
  // 2016
  { id: 1, year: 2016, date: '2016-11-11', title: 'No Vendo Trap', type: 'single', album: null, collabs: [] },
  // 2017
  { id: 2, year: 2017, date: '2017-01-01', title: 'Ready for the Night', type: 'single', album: null, collabs: ['NahueMC', '808god'] },
  { id: 3, year: 2017, date: '2017-01-01', title: 'Mil Colores', type: 'single', album: null, collabs: [] },
  { id: 4, year: 2017, date: '2017-01-01', title: 'Y Si Te Vas', type: 'single', album: null, collabs: ['Iacho'] },
  { id: 5, year: 2017, date: '2017-09-27', title: 'Hello Cotto', type: 'single', album: null, collabs: [] },
  { id: 6, year: 2017, date: '2017-11-07', title: "She Don't Give a Fo", type: 'single', album: null, collabs: ['Khea'] },
  { id: 7, year: 2017, date: '2017-11-27', title: 'Rockstar', type: 'single', album: null, collabs: [] },
  { id: 8, year: 2017, date: '2017-01-01', title: 'Txdx Violeta', type: 'feat', album: null, collabs: ['Klave'] },
  { id: 9, year: 2017, date: '2017-01-01', title: 'Astral Remix', type: 'feat', album: null, collabs: ['Paulo Londra', 'Wolf', 'Sync'] },
  { id: 10, year: 2017, date: '2017-01-01', title: 'Resaca', type: 'feat', album: null, collabs: ['YSY A', 'Scxlvry'] },
  { id: 11, year: 2017, date: '2017-01-01', title: 'B.U.H.O', type: 'feat', album: null, collabs: ['Midel', 'Khea', 'Arse'] },
  { id: 12, year: 2017, date: '2017-11-20', title: 'Loca', type: 'feat', album: null, collabs: ['Khea', 'Cazzu'] },
  // 2018
  { id: 13, year: 2018, date: '2018-02-23', title: 'Si Te Sentís Sola', type: 'single', album: null, collabs: [] },
  { id: 14, year: 2018, date: '2018-03-15', title: 'Quavo #ModoDiablo', type: 'single', album: null, collabs: [] },
  { id: 15, year: 2018, date: '2018-03-16', title: 'Loca Remix', type: 'feat', album: null, collabs: ['Khea', 'Bad Bunny', 'Cazzu'] },
  { id: 16, year: 2018, date: '2018-01-01', title: 'Machika Remix', type: 'feat', album: null, collabs: ['J Balvin', 'G-Eazy', 'Sfera Ebbasta'] },
  { id: 17, year: 2018, date: '2018-03-29', title: 'Guapo', type: 'single', album: null, collabs: ['YSY A', 'C.R.O', 'Kaktov', 'Neo Pistea'] },
  { id: 18, year: 2018, date: '2018-05-01', title: 'Hijo de la Noche', type: 'single', album: null, collabs: [] },
  { id: 19, year: 2018, date: '2018-01-01', title: 'Mojaa', type: 'feat', album: null, collabs: ['Bhavi'] },
  { id: 20, year: 2018, date: '2018-01-01', title: 'Otro Level', type: 'feat', album: 'Antezana 247 (YSY A)', collabs: ['YSY A'] },
  { id: 21, year: 2018, date: '2018-01-01', title: 'Vuelta a la Luna', type: 'feat', album: 'Antezana 247 (YSY A)', collabs: ['YSY A'] },
  { id: 22, year: 2018, date: '2018-01-01', title: 'Fvck Luv', type: 'single', album: null, collabs: [] },
  { id: 23, year: 2018, date: '2018-01-01', title: 'Alas', type: 'single', album: null, collabs: [] },
  { id: 24, year: 2018, date: '2018-01-01', title: 'Vampiros', type: 'single', album: null, collabs: [] },
  { id: 25, year: 2018, date: '2018-01-01', title: 'Ferrari', type: 'single', album: null, collabs: [] },
  { id: 26, year: 2018, date: '2018-01-01', title: 'Mi Chain de Roque', type: 'single', album: null, collabs: [] },
  { id: 27, year: 2018, date: '2018-01-01', title: 'No Me Llores', type: 'single', album: null, collabs: ['Leby'] },
  { id: 28, year: 2018, date: '2018-12-07', title: 'Sin Culpa', type: 'single', album: null, collabs: ['DrefQuila'] },
  // 2019
  { id: 29, year: 2019, date: '2019-01-01', title: 'LeBron', type: 'single', album: null, collabs: [] },
  { id: 30, year: 2019, date: '2019-01-01', title: "Trap N' Export", type: 'single', album: null, collabs: ['ModoDiablo'] },
  { id: 31, year: 2019, date: '2019-01-01', title: 'Rally', type: 'single', album: null, collabs: ['H Roto', 'GARZI'] },
  { id: 32, year: 2019, date: '2019-01-01', title: "Ballin'", type: 'single', album: null, collabs: [] },
  { id: 33, year: 2019, date: '2019-01-01', title: 'Makina de Armado', type: 'single', album: null, collabs: ['Khea', 'Neo Pistea'] },
  { id: 34, year: 2019, date: '2019-01-01', title: 'Sol y Luna', type: 'single', album: null, collabs: [] },
  { id: 35, year: 2019, date: '2019-01-01', title: 'Mericrisma', type: 'single', album: null, collabs: [] },
  { id: 36, year: 2019, date: '2019-06-05', title: 'Hitboy', type: 'single', album: null, collabs: ['Khea'] },
  { id: 37, year: 2019, date: '2019-01-01', title: 'Entre Cuatro Paredes', type: 'single', album: 'BSO El Marginal 3', collabs: ['Vicentico', 'La Bomba de Tiempo'] },
  { id: 38, year: 2019, date: '2019-08-07', title: 'Goteo', type: 'single', album: null, collabs: [] },
  { id: 39, year: 2019, date: '2019-10-17', title: 'A Punta de Espada', type: 'single', album: null, collabs: ['YSY A'] },
  { id: 40, year: 2019, date: '2019-10-31', title: 'Te Traje Flores', type: 'single', album: null, collabs: [] },
  // Álbum Súper Sangre Joven
  { id: 41, year: 2019, date: '2019-11-01', title: 'Te Traje Flores', type: 'album', album: 'Súper Sangre Joven', collabs: [], trackNum: 1 },
  { id: 42, year: 2019, date: '2019-11-01', title: "It's a Vibe", type: 'album', album: 'Súper Sangre Joven', collabs: ['C. Tangana', 'Khea', 'Leebrian'], trackNum: 2 },
  { id: 43, year: 2019, date: '2019-11-01', title: 'Hitboy', type: 'album', album: 'Súper Sangre Joven', collabs: ['Khea'], trackNum: 3 },
  { id: 44, year: 2019, date: '2019-11-01', title: 'Señorita', type: 'album', album: 'Súper Sangre Joven', collabs: [], trackNum: 4 },
  { id: 45, year: 2019, date: '2019-11-01', title: 'Me Gusta Lo Simple', type: 'album', album: 'Súper Sangre Joven', collabs: ['Alemán'], trackNum: 5 },
  { id: 46, year: 2019, date: '2019-11-01', title: 'Perdón', type: 'album', album: 'Súper Sangre Joven', collabs: [], trackNum: 6 },
  { id: 47, year: 2019, date: '2019-11-01', title: 'A Punta de Espada', type: 'album', album: 'Súper Sangre Joven', collabs: ['YSY A'], trackNum: 7 },
  { id: 48, year: 2019, date: '2019-11-01', title: 'La Jefatura', type: 'album', album: 'Súper Sangre Joven', collabs: ['Marcianos Crew', 'Lucho SSJ'], trackNum: 8 },
  { id: 49, year: 2019, date: '2019-11-01', title: 'One Million Dollar Baby', type: 'album', album: 'Súper Sangre Joven', collabs: ['Eladio Carrión', 'Sfera Ebbasta'], trackNum: 9 },
  { id: 50, year: 2019, date: '2019-11-01', title: 'Goteo', type: 'album', album: 'Súper Sangre Joven', collabs: [], trackNum: 10 },
  // Feats 2019
  { id: 51, year: 2019, date: '2019-01-01', title: 'Tumbando el Club Remix', type: 'feat', album: null, collabs: ['Neo Pistea'] },
  { id: 52, year: 2019, date: '2019-01-01', title: 'Shorty', type: 'feat', album: 'Recuerdos (Nicki Nicole)', collabs: ['Nicki Nicole'] },
  { id: 53, year: 2019, date: '2019-01-01', title: 'La Clase', type: 'feat', album: 'Error 93 (Cazzu)', collabs: ['Cazzu'] },
  { id: 54, year: 2019, date: '2019-01-01', title: '5 Stars', type: 'feat', album: null, collabs: ['C. Tangana', 'Neo Pistea', 'Polima Westcoast'] },
  { id: 55, year: 2019, date: '2019-01-01', title: 'Otro Cheke', type: 'feat', album: null, collabs: ['Rels B'] },
  { id: 56, year: 2019, date: '2019-01-01', title: 'Tengo 30', type: 'feat', album: null, collabs: ['Khea'] },
  { id: 57, year: 2019, date: '2019-01-01', title: 'Ánimo', type: 'feat', album: null, collabs: ['Khea'] },
  { id: 58, year: 2019, date: '2019-01-01', title: 'Verano Hater', type: 'feat', album: null, collabs: ['Dante Spinetta'] },
  { id: 59, year: 2019, date: '2019-01-01', title: 'I.D.K.', type: 'feat', album: null, collabs: ['Zanto'] },
  { id: 60, year: 2019, date: '2019-01-01', title: 'Sigo Fresh', type: 'feat', album: null, collabs: ['Fuego'] },
  { id: 61, year: 2019, date: '2019-01-01', title: 'Cereza', type: 'feat', album: null, collabs: ['Fuego'] },
  { id: 62, year: 2019, date: '2019-01-01', title: 'Trapperz a Mafia Da Sicilia', type: 'feat', album: null, collabs: ['Felp 22', 'Rauw Alejandro'] },
  { id: 63, year: 2019, date: '2019-01-01', title: 'Like Boss Remix', type: 'feat', album: null, collabs: ['Frijo', 'Bizarrap'] },
  { id: 64, year: 2019, date: '2019-01-01', title: 'Bebo Champagne y Lo Tiro Remix', type: 'feat', album: null, collabs: ['Yung Beef', 'Neo Pistea'] },
  // 2020
  { id: 65, year: 2020, date: '2020-01-03', title: 'Perrea', type: 'single', album: null, collabs: ['Frijo', 'We$t Dubai'] },
  { id: 66, year: 2020, date: '2020-01-24', title: 'Goteo Remix', type: 'single', album: null, collabs: ['Capo Plaza', 'Ronny J', 'C.R.O', 'Pablo Chill-E'] },
  { id: 67, year: 2020, date: '2020-02-29', title: 'Hablamos Mañana', type: 'feat', album: 'YHLQMDLG (Bad Bunny)', collabs: ['Bad Bunny', 'Pablo Chill-E'] },
  { id: 68, year: 2020, date: '2020-03-16', title: 'Como Si Na', type: 'single', album: null, collabs: [] },
  { id: 69, year: 2020, date: '2020-04-30', title: 'Fornai', type: 'single', album: null, collabs: ['Orodembow'] },
  { id: 70, year: 2020, date: '2020-05-28', title: 'Café', type: 'single', album: null, collabs: ['Fuego', 'LUYO'] },
  { id: 71, year: 2020, date: '2020-06-10', title: 'Acapella', type: 'single', album: null, collabs: [] },
  // EP 24
  { id: 72, year: 2020, date: '2020-06-24', title: 'Flex Like Trunkz', type: 'album', album: '24', collabs: ['Young Cister'], trackNum: 1 },
  { id: 73, year: 2020, date: '2020-06-24', title: 'Pastillas', type: 'album', album: '24', collabs: ['Asan', 'Zecca'], trackNum: 2 },
  { id: 74, year: 2020, date: '2020-06-24', title: 'Sin Mirar', type: 'album', album: '24', collabs: ['Asan'], trackNum: 3 },
  { id: 75, year: 2020, date: '2020-06-24', title: 'Vida Eterna', type: 'album', album: '24', collabs: ['Negro Dub'], trackNum: 4 },
  { id: 76, year: 2020, date: '2020-06-24', title: 'Deja Vu', type: 'album', album: '24', collabs: ['Big Deiv', 'Club Hats'], trackNum: 5 },
  { id: 77, year: 2020, date: '2020-06-24', title: 'Marca de la Cadena', type: 'album', album: '24', collabs: ['Bymonkid'], trackNum: 6 },
  { id: 78, year: 2020, date: '2020-06-24', title: 'Smoke a Lot', type: 'album', album: '24', collabs: ['Gallagher', 'Orodembow'], trackNum: 7 },
  { id: 79, year: 2020, date: '2020-06-24', title: '24', type: 'album', album: '24', collabs: ['Kidd Keo', 'Juicy J'], trackNum: 8 },
  // Otros 2020
  { id: 80, year: 2020, date: '2020-01-01', title: 'H.I.E.L.O.', type: 'single', album: null, collabs: ['Obie Wanshot'] },
  { id: 81, year: 2020, date: '2020-08-14', title: 'EO EO', type: 'single', album: null, collabs: ['Bles', 'DellaFlame'] },
  { id: 82, year: 2020, date: '2020-08-21', title: 'Por Mi Nombre', type: 'single', album: null, collabs: ['Club Hats'] },
  { id: 83, year: 2020, date: '2020-09-22', title: 'Sold Out Dates', type: 'single', album: null, collabs: [] },
  { id: 84, year: 2020, date: '2020-01-01', title: 'Nota Espacial', type: 'single', album: null, collabs: [] },
  { id: 85, year: 2020, date: '2020-01-01', title: 'Aleluya Remix', type: 'single', album: null, collabs: ['Rels B', 'Alemán'] },
  // Feats 2020
  { id: 86, year: 2020, date: '2020-01-01', title: 'Miami', type: 'feat', album: null, collabs: ['Ronny J', 'Sfera Ebbasta'] },
  { id: 87, year: 2020, date: '2020-01-01', title: 'Jimmy Fallon Remix', type: 'feat', album: null, collabs: ['Lucho SSJ', 'C.R.O', 'Khea'] },
  { id: 88, year: 2020, date: '2020-01-01', title: 'Pininfarina Remix', type: 'feat', album: null, collabs: ['Rei', 'Neo Pistea'] },
  { id: 89, year: 2020, date: '2020-01-01', title: 'Run Run Stop', type: 'feat', album: null, collabs: ['Polima Westcoast'] },
  { id: 90, year: 2020, date: '2020-01-01', title: 'Angelito', type: 'feat', album: null, collabs: ['Obie Wanshot'] },
  { id: 91, year: 2020, date: '2020-12-30', title: 'Hablamos Poco, Hacemos Mucho', type: 'feat', album: null, collabs: ['Seven Kayne'] },
  { id: 92, year: 2020, date: '2020-01-01', title: 'Gelato', type: 'feat', album: null, collabs: ['Eladio Carrión', 'Smokepurpp'] },
  { id: 93, year: 2020, date: '2020-01-01', title: 'Perdiendo el Tiempo', type: 'feat', album: null, collabs: ['Marcianos Crew', 'Homer El Mero Mero'] },
  { id: 94, year: 2020, date: '2020-01-01', title: 'Louis Vuitton', type: 'feat', album: null, collabs: ['44KID', 'Mesita'] },
  { id: 95, year: 2020, date: '2020-01-01', title: 'Perdóname Si Llego Tarde', type: 'feat', album: null, collabs: ['Lucho SSJ'] },
  { id: 96, year: 2020, date: '2020-01-01', title: 'Gelato 44', type: 'feat', album: null, collabs: ['Khea'] },
  { id: 97, year: 2020, date: '2020-01-01', title: 'En el Banco', type: 'feat', album: null, collabs: ['Neutro Shorty', 'Neo Pistea'] },
  // Álbum Desde el Fin del Mundo
  { id: 98, year: 2021, date: '2021-04-22', title: 'Sudor y Trabajo', type: 'album', album: 'Desde el Fin del Mundo', collabs: [], trackNum: 1 },
  { id: 99, year: 2021, date: '2021-04-22', title: 'Pintao', type: 'album', album: 'Desde el Fin del Mundo', collabs: ['YSY A', 'Rei'], trackNum: 2 },
  { id: 100, year: 2021, date: '2021-04-22', title: 'Chico Estrella', type: 'album', album: 'Desde el Fin del Mundo', collabs: [], trackNum: 3 },
  { id: 101, year: 2021, date: '2021-04-22', title: 'Volando Bajito', type: 'album', album: 'Desde el Fin del Mundo', collabs: [], trackNum: 4 },
  { id: 102, year: 2021, date: '2021-04-22', title: 'Cuanto', type: 'album', album: 'Desde el Fin del Mundo', collabs: ['Lucho SSJ', 'Farina'], trackNum: 5 },
  { id: 103, year: 2021, date: '2021-04-22', title: 'Rápido', type: 'album', album: 'Desde el Fin del Mundo', collabs: [], trackNum: 6 },
  { id: 104, year: 2021, date: '2021-04-22', title: "I Don't Know", type: 'album', album: 'Desde el Fin del Mundo', collabs: [], trackNum: 7 },
  { id: 105, year: 2021, date: '2021-04-22', title: 'Sol', type: 'album', album: 'Desde el Fin del Mundo', collabs: ['Lara91k'], trackNum: 8 },
  { id: 106, year: 2021, date: '2021-04-22', title: 'Luna', type: 'album', album: 'Desde el Fin del Mundo', collabs: ['Asan'], trackNum: 9 },
  { id: 107, year: 2021, date: '2021-04-22', title: 'Malbec', type: 'album', album: 'Desde el Fin del Mundo', collabs: ['Bizarrap'], trackNum: 10 },
  { id: 108, year: 2021, date: '2021-04-22', title: 'Mi Diablo', type: 'album', album: 'Desde el Fin del Mundo', collabs: [], trackNum: 11 },
  { id: 109, year: 2021, date: '2021-04-22', title: 'Fifty Fifty', type: 'album', album: 'Desde el Fin del Mundo', collabs: ['Pablo Chill-E', 'Obie Wanshot', 'Julianno Sosa', 'Neo Pistea', 'Young Cister'], trackNum: 12 },
  { id: 110, year: 2021, date: '2021-04-22', title: 'Valentino', type: 'album', album: 'Desde el Fin del Mundo', collabs: ['Tobi'], trackNum: 13 },
  { id: 111, year: 2021, date: '2021-04-22', title: 'Cascada', type: 'album', album: 'Desde el Fin del Mundo', collabs: [], trackNum: 14 },
  { id: 112, year: 2021, date: '2021-04-22', title: 'Ticket', type: 'album', album: 'Desde el Fin del Mundo', collabs: [], trackNum: 15 },
  { id: 113, year: 2021, date: '2021-04-22', title: 'Muriéndome', type: 'album', album: 'Desde el Fin del Mundo', collabs: ['Khea'], trackNum: 16 },
  { id: 114, year: 2021, date: '2021-04-22', title: 'Ella Es Mi Bitch', type: 'album', album: 'Desde el Fin del Mundo', collabs: ['Pekeño 77', 'Mesita', '44 Kid', 'Franux BB'], trackNum: 17 },
  { id: 115, year: 2021, date: '2021-04-22', title: 'Muero de Fiesta Este Finde', type: 'album', album: 'Desde el Fin del Mundo', collabs: ['Ca7riel'], trackNum: 18 },
  // EP Temporada de Reggaetón
  { id: 116, year: 2021, date: '2021-11-25', title: 'En Movimiento', type: 'album', album: 'Temporada de Reggaetón', collabs: [], trackNum: 1 },
  { id: 117, year: 2021, date: '2021-11-25', title: 'Ley de Atracción', type: 'album', album: 'Temporada de Reggaetón', collabs: [], trackNum: 2 },
  { id: 118, year: 2021, date: '2021-11-25', title: 'Bici', type: 'album', album: 'Temporada de Reggaetón', collabs: ['AK4:20', 'Juhn', 'Juanka'], trackNum: 3 },
  { id: 119, year: 2021, date: '2021-11-25', title: 'Midtown', type: 'album', album: 'Temporada de Reggaetón', collabs: [], trackNum: 4 },
  { id: 120, year: 2021, date: '2021-11-25', title: 'Top 5', type: 'album', album: 'Temporada de Reggaetón', collabs: [], trackNum: 5 },
  { id: 121, year: 2021, date: '2021-11-25', title: 'Yin Yan', type: 'album', album: 'Temporada de Reggaetón', collabs: ['Rels B'], trackNum: 6 },
  { id: 122, year: 2021, date: '2021-11-25', title: 'Unfollow', type: 'album', album: 'Temporada de Reggaetón', collabs: ['Justin Quiles', 'Bizarrap'], trackNum: 7 },
  // Otros 2021
  { id: 123, year: 2021, date: '2021-01-01', title: 'Wacha', type: 'single', album: null, collabs: ['Khea'] },
  { id: 124, year: 2021, date: '2021-01-01', title: 'Bailando Te Conocí', type: 'single', album: null, collabs: ['Rusherking'] },
  { id: 125, year: 2021, date: '2021-07-13', title: 'Como Si No Importara', type: 'feat', album: 'Tú Crees en Mí? (Emilia)', collabs: ['Emilia'] },
  { id: 126, year: 2021, date: '2021-01-01', title: 'YaMeFui', type: 'single', album: null, collabs: ['Bizarrap', 'Nicki Nicole'] },
  { id: 127, year: 2021, date: '2021-01-01', title: 'Sin Frenos', type: 'feat', album: 'Sauce Boyz 2 (Eladio Carrión)', collabs: ['Eladio Carrión', 'Bizarrap'] },
  { id: 128, year: 2021, date: '2021-01-01', title: 'Además de Mí Remix', type: 'feat', album: null, collabs: ['Rusherking', 'Khea', 'Tiago PZK', 'Lit Killah', 'María Becerra'] },
  { id: 129, year: 2021, date: '2021-06-04', title: 'Panamá', type: 'feat', album: null, collabs: ['Trueno'] },
  { id: 130, year: 2021, date: '2021-01-01', title: '2:50 Remix', type: 'feat', album: null, collabs: ['MYA', 'Tini'] },
  { id: 131, year: 2021, date: '2021-01-01', title: 'No Me Conocen Remix', type: 'feat', album: null, collabs: ['Bandido', 'Rei', 'Tiago PZK'] },
  { id: 132, year: 2021, date: '2021-01-01', title: 'Una Vaina Loca', type: 'feat', album: null, collabs: ['Fuego', 'Manuel Turizo'] },
  { id: 133, year: 2021, date: '2021-01-01', title: 'Mala Mía', type: 'feat', album: 'MAWZ (Lit Killah)', collabs: ['Lit Killah'] },
  { id: 134, year: 2021, date: '2021-01-01', title: 'Aguacero', type: 'feat', album: null, collabs: ['Tali Goya'] },
  { id: 135, year: 2021, date: '2021-01-01', title: 'Sexy', type: 'feat', album: null, collabs: ['Eich', 'Khea'] },
  { id: 136, year: 2021, date: '2021-01-01', title: 'Trappist-1', type: 'feat', album: null, collabs: ['Neo Pistea'] },
  { id: 137, year: 2021, date: '2021-01-01', title: 'Otra Vez', type: 'feat', album: null, collabs: ['Pekeño 77'] },
  { id: 138, year: 2021, date: '2021-01-01', title: 'Lambo Remix', type: 'feat', album: null, collabs: ['C.R.O', 'Chucky73'] },
  { id: 139, year: 2021, date: '2021-01-01', title: 'Me Enseñaste Remix', type: 'feat', album: null, collabs: ['Sael'] },
  { id: 140, year: 2021, date: '2021-01-01', title: 'Día de Pago', type: 'feat', album: null, collabs: ['Ovi'] },
  { id: 141, year: 2021, date: '2021-01-01', title: 'Carita Morena', type: 'feat', album: null, collabs: ['Omar Montes'] },
  { id: 142, year: 2021, date: '2021-01-01', title: 'Tamo Real', type: 'feat', album: null, collabs: ['Lucho SSJ', 'Pablo Chill-E'] },
  // 2022
  { id: 143, year: 2022, date: '2022-01-27', title: 'Interestelar', type: 'single', album: null, collabs: ['FMK', 'C.R.O'] },
  // EP Temporada de Reggaetón 2
  { id: 144, year: 2022, date: '2022-06-23', title: 'Amor Bipolar', type: 'album', album: 'Temporada de Reggaetón 2', collabs: ['Mora'], trackNum: 1 },
  { id: 145, year: 2022, date: '2022-06-23', title: 'Celosa', type: 'album', album: 'Temporada de Reggaetón 2', collabs: [], trackNum: 2 },
  { id: 146, year: 2022, date: '2022-06-23', title: 'Perreo Bendito', type: 'album', album: 'Temporada de Reggaetón 2', collabs: [], trackNum: 3 },
  { id: 147, year: 2022, date: '2022-06-23', title: 'Si Quieren Frontear', type: 'album', album: 'Temporada de Reggaetón 2', collabs: ['De La Ghetto', 'Quevedo'], trackNum: 4 },
  { id: 148, year: 2022, date: '2022-06-23', title: 'Esto Recién Empieza', type: 'album', album: 'Temporada de Reggaetón 2', collabs: ['Emilia'], trackNum: 5 },
  { id: 149, year: 2022, date: '2022-06-23', title: 'Antes de Perderte', type: 'album', album: 'Temporada de Reggaetón 2', collabs: [], trackNum: 6 },
  { id: 150, year: 2022, date: '2022-06-23', title: 'La Vuelta (interludio)', type: 'album', album: 'Temporada de Reggaetón 2', collabs: [], trackNum: 7 },
  { id: 151, year: 2022, date: '2022-07-20', title: 'Givenchy', type: 'album', album: 'Temporada de Reggaetón 2', collabs: [], trackNum: 8 },
  { id: 152, year: 2022, date: '2022-11-16', title: 'Duki: BZRP Music Sessions, Vol. 50', type: 'feat', album: null, collabs: ['Bizarrap'] },
  { id: 153, year: 2022, date: '2022-12-31', title: '3 Estrellas en el Conjunto', type: 'feat', album: null, collabs: ['Bizarrap', 'La T y La M'] },
  { id: 154, year: 2022, date: '2022-05-20', title: 'París', type: 'feat', album: null, collabs: ['Morat'] },
  { id: 155, year: 2022, date: '2022-01-01', title: 'Pantera', type: 'feat', album: null, collabs: ['Rvfv'] },
  { id: 156, year: 2022, date: '2022-09-15', title: 'Party en el Barrio', type: 'feat', album: 'Back to the Game (Paulo Londra)', collabs: ['Paulo Londra'] },
  { id: 157, year: 2022, date: '2022-01-01', title: 'Marisola Remix', type: 'feat', album: null, collabs: ['Cris MJ', 'Nicki Nicole'] },
  // 2023
  { id: 158, year: 2023, date: '2023-02-16', title: 'Si Me Sobrara el Tiempo', type: 'single', album: null, collabs: [] },
  { id: 159, year: 2023, date: '2023-03-30', title: 'hARAkiRi', type: 'single', album: null, collabs: ['C.R.O'] },
  { id: 160, year: 2023, date: '2023-05-03', title: 'Apollo 13', type: 'single', album: null, collabs: [] },
  { id: 161, year: 2023, date: '2023-06-01', title: 'Los del Espacio', type: 'feat', album: null, collabs: ['Lit Killah', 'Tiago PZK', 'María Becerra', 'Emilia', 'Rusherking', 'FMK', 'Big One'] },
  // Álbum Antes de Ameri
  { id: 162, year: 2023, date: '2023-06-22', title: '01 de enero', type: 'album', album: 'Antes de Ameri', collabs: ['Lucho SSJ'], trackNum: 1 },
  { id: 163, year: 2023, date: '2023-06-22', title: 'Jefes del sudoeste', type: 'album', album: 'Antes de Ameri', collabs: [], trackNum: 2 },
  { id: 164, year: 2023, date: '2023-06-22', title: 'RoCKSTAR 2.0', type: 'album', album: 'Antes de Ameri', collabs: ['Jhayco'], trackNum: 3 },
  { id: 165, year: 2023, date: '2023-06-22', title: 'hARAkiRi', type: 'album', album: 'Antes de Ameri', collabs: ['C.R.O'], trackNum: 4 },
  { id: 166, year: 2023, date: '2023-06-22', title: 'Contra>< mi', type: 'album', album: 'Antes de Ameri', collabs: ['We$t Dubai'], trackNum: 5 },
  { id: 167, year: 2023, date: '2023-06-22', title: 'CSIpher [Audio Latino]', type: 'album', album: 'Antes de Ameri', collabs: ['Akapellah', 'Neutro Shorty', 'Micro TDH'], trackNum: 6 },
  { id: 168, year: 2023, date: '2023-06-22', title: 'GiGi', type: 'album', album: 'Antes de Ameri', collabs: [], trackNum: 7 },
  { id: 169, year: 2023, date: '2023-06-22', title: "Don't Lie", type: 'album', album: 'Antes de Ameri', collabs: ['Quevedo'], trackNum: 8 },
  { id: 170, year: 2023, date: '2023-06-22', title: 'Antes de perderte (OG version)', type: 'album', album: 'Antes de Ameri', collabs: [], trackNum: 9 },
  { id: 171, year: 2023, date: '2023-06-22', title: 'Troya', type: 'album', album: 'Antes de Ameri', collabs: [], trackNum: 10 },
  { id: 172, year: 2023, date: '2023-06-22', title: 'Uno Dos', type: 'album', album: 'Antes de Ameri', collabs: ['Salastkbron'], trackNum: 11 },
  { id: 173, year: 2023, date: '2023-06-22', title: 'N.C.L.C.', type: 'album', album: 'Antes de Ameri', collabs: [], trackNum: 12 },
  { id: 174, year: 2023, date: '2023-06-22', title: 'Apollo 13', type: 'album', album: 'Antes de Ameri', collabs: [], trackNum: 13 },
  { id: 175, year: 2023, date: '2023-06-22', title: 'Último tren a Ameri', type: 'album', album: 'Antes de Ameri', collabs: [], trackNum: 14 },
  { id: 176, year: 2023, date: '2023-06-22', title: 'bUSCANDO Ameri', type: 'album', album: 'Antes de Ameri', collabs: [], trackNum: 15 },
  { id: 177, year: 2023, date: '2023-06-22', title: 'Remember Me', type: 'album', album: 'Antes de Ameri', collabs: ['Khea', 'Bizarrap'], trackNum: 16 },
  { id: 178, year: 2023, date: '2023-07-13', title: 'Remember Me', type: 'single', album: null, collabs: ['Khea', 'Bizarrap'] },
  { id: 179, year: 2023, date: '2023-12-07', title: 'Call Me Maybe', type: 'single', album: null, collabs: [] },
  { id: 180, year: 2023, date: '2023-08-03', title: 'Aeróbico Remix', type: 'feat', album: null, collabs: ['Bhavi', 'Milo J', 'Lit Killah'] },
  { id: 181, year: 2023, date: '2023-01-01', title: 'Vai Sentando', type: 'feat', album: 'BSO Fast X', collabs: ['Ludmilla', 'King Doudou', 'Skrillex'] },
  { id: 182, year: 2023, date: '2023-01-01', title: 'Santo Grial', type: 'feat', album: null, collabs: ['Dano'] },
  // 2024
  { id: 183, year: 2024, date: '2024-01-31', title: 'Cypher MND #16: Duki', type: 'feat', album: null, collabs: ['Mundialista Crew', 'ShiGant-G'] },
  { id: 184, year: 2024, date: '2024-02-22', title: 'NO SON KLLE', type: 'feat', album: null, collabs: ['Santa Fe Klan', 'Peso Pluma'] },
  { id: 185, year: 2024, date: '2024-06-06', title: 'Casablanca', type: 'feat', album: null, collabs: ['Lucho SSJ', 'Awesome Pierre'] },
  { id: 186, year: 2024, date: '2024-06-18', title: 'CEO', type: 'feat', album: 'TSUNAMI (Mesita)', collabs: ['Mesita'] },
  { id: 187, year: 2024, date: '2024-06-24', title: 'Tu Silencio', type: 'feat', album: null, collabs: ['MKS'] },
  { id: 188, year: 2024, date: '2024-01-01', title: 'Todo Lit', type: 'feat', album: 'Sol María (Eladio Carrión)', collabs: ['Eladio Carrión'] },
  { id: 189, year: 2024, date: '2024-10-17', title: 'Barro', type: 'single', album: null, collabs: [] },
  { id: 190, year: 2024, date: '2024-10-29', title: 'Constelación', type: 'single', album: null, collabs: ['Lia Kali'] },
  // Álbum Ameri
  { id: 191, year: 2024, date: '2024-10-31', title: 'Leitmotiv', type: 'album', album: 'Ameri', collabs: [], trackNum: 1 },
  { id: 192, year: 2024, date: '2024-10-31', title: 'Nueva Era', type: 'album', album: 'Ameri', collabs: ['Myke Towers'], trackNum: 2 },
  { id: 193, year: 2024, date: '2024-10-31', title: 'Brindis', type: 'album', album: 'Ameri', collabs: ['Headie One'], trackNum: 3 },
  { id: 194, year: 2024, date: '2024-10-31', title: 'Buscarte Lejos', type: 'album', album: 'Ameri', collabs: ['Bizarrap'], trackNum: 4 },
  { id: 195, year: 2024, date: '2024-10-31', title: 'Imperio', type: 'album', album: 'Ameri', collabs: ['Judeline'], trackNum: 5 },
  { id: 196, year: 2024, date: '2024-10-31', title: 'Hardaway', type: 'album', album: 'Ameri', collabs: ['Eladio Carrión', 'YG'], trackNum: 6 },
  { id: 197, year: 2024, date: '2024-10-31', title: 'Cine', type: 'album', album: 'Ameri', collabs: [], trackNum: 7 },
  { id: 198, year: 2024, date: '2024-10-31', title: 'Vida de Rock', type: 'album', album: 'Ameri', collabs: ['Milo J'], trackNum: 8 },
  { id: 199, year: 2024, date: '2024-10-31', title: 'No Drama', type: 'album', album: 'Ameri', collabs: ['Ovi', 'Lucho SSJ'], trackNum: 9 },
  { id: 200, year: 2024, date: '2024-10-31', title: 'Barro', type: 'album', album: 'Ameri', collabs: [], trackNum: 10 },
  { id: 201, year: 2024, date: '2024-10-31', title: 'Un Día Más', type: 'album', album: 'Ameri', collabs: ['YSY A'], trackNum: 11 },
  { id: 202, year: 2024, date: '2024-10-31', title: 'Trato de Estar Bien', type: 'album', album: 'Ameri', collabs: ['Morad'], trackNum: 12 },
  { id: 203, year: 2024, date: '2024-10-31', title: 'Wake Up & Bake Up', type: 'album', album: 'Ameri', collabs: ['Wiz Khalifa', 'Arcángel'], trackNum: 13 },
  { id: 204, year: 2024, date: '2024-10-31', title: 'Constelación', type: 'album', album: 'Ameri', collabs: ['Lia Kali'], trackNum: 14 },
  { id: 205, year: 2024, date: '2024-10-31', title: 'Ameri', type: 'album', album: 'Ameri', collabs: [], trackNum: 15 },
  { id: 206, year: 2024, date: '2024-12-25', title: 'Ta Te Ti', type: 'single', album: null, collabs: [] },
  // 2025
  { id: 207, year: 2025, date: '2025-03-05', title: 'Starboy Remix', type: 'feat', album: null, collabs: ['Zell', 'Neo Pistea'] },
  { id: 208, year: 2025, date: '2025-04-23', title: 'Nena Sad Remix', type: 'feat', album: null, collabs: ['ORO600', 'Pablo Chill-E', 'Quevedo'] },
  { id: 209, year: 2025, date: '2025-04-29', title: 'Plástico', type: 'feat', album: 'No Vayas a Atender Cuando el Demonio Llama (Lali)', collabs: ['Lali'] },
  { id: 210, year: 2025, date: '2025-05-29', title: 'Golfista', type: 'single', album: null, collabs: [] },
  { id: 211, year: 2025, date: '2025-06-24', title: 'NO ME ALCANZA', type: 'single', album: null, collabs: [] },
  // Mixtape 5202
  { id: 212, year: 2025, date: '2025-07-07', title: '[FREE] 5202 Type Beat', type: 'album', album: '5202', collabs: [], trackNum: 1 },
  { id: 213, year: 2025, date: '2025-07-07', title: 'Golfista', type: 'album', album: '5202', collabs: [], trackNum: 2 },
  { id: 214, year: 2025, date: '2025-07-07', title: 'aGaRRo La PLaTa', type: 'album', album: '5202', collabs: ['Clúster'], trackNum: 3 },
  { id: 215, year: 2025, date: '2025-07-07', title: '2Tonos', type: 'album', album: '5202', collabs: [], trackNum: 4 },
  { id: 216, year: 2025, date: '2025-07-07', title: 'eCLIPSE sOLAR', type: 'album', album: '5202', collabs: [], trackNum: 5 },
  { id: 217, year: 2025, date: '2025-07-07', title: 'Toc Psycho x CRYPTONITA', type: 'album', album: '5202', collabs: [], trackNum: 6 },
  { id: 218, year: 2025, date: '2025-07-07', title: 'Yo-Yo', type: 'album', album: '5202', collabs: [], trackNum: 7 },
  { id: 219, year: 2025, date: '2025-07-07', title: 'En Parte... No lo sé', type: 'album', album: '5202', collabs: [], trackNum: 8 },
  { id: 220, year: 2025, date: '2025-07-07', title: 'Calabasas', type: 'album', album: '5202', collabs: ['Zell'], trackNum: 9 },
  { id: 221, year: 2025, date: '2025-07-07', title: '100pre@Límite', type: 'album', album: '5202', collabs: [], trackNum: 10 },
  { id: 222, year: 2025, date: '2025-07-07', title: 'NO ME ALCANZA', type: 'album', album: '5202', collabs: [], trackNum: 11 },
  // 2026
  { id: 223, year: 2026, date: '2026-04-13', title: 'MALPARIDO', type: 'feat', album: 'Amor Fiado (Zeballos)', collabs: ['Zeballos'] },
];

const ALBUMS_INFO = {
  'Súper Sangre Joven': { year: 2019, date: '01/11/2019', type: 'Álbum Debut', color: '#DC2626' },
  '24': { year: 2020, date: '24/06/2020', type: 'EP', color: '#F59E0B' },
  'Desde el Fin del Mundo': { year: 2021, date: '22/04/2021', type: 'Álbum', color: '#EF4444' },
  'Temporada de Reggaetón': { year: 2021, date: '25/11/2021', type: 'EP', color: '#FBBF24' },
  'Temporada de Reggaetón 2': { year: 2022, date: '23/06/2022', type: 'EP', color: '#F59E0B' },
  'Antes de Ameri': { year: 2023, date: '22/06/2023', type: 'Álbum', color: '#B91C1C' },
  'Ameri': { year: 2024, date: '31/10/2024', type: 'Álbum', color: '#991B1B' },
  '5202': { year: 2025, date: '07/07/2025', type: 'Mixtape', color: '#DC2626' },
};

// ============================================================
// COMPONENTS
// ============================================================

const GrainOverlay = () => (
  <div
    className="pointer-events-none fixed inset-0 opacity-[0.08] mix-blend-overlay z-50"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    }}
  />
);

const TapeStripe = ({ className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div
      className="whitespace-nowrap text-black font-black tracking-widest text-xs py-1"
      style={{
        background: 'repeating-linear-gradient(90deg, #FBBF24 0px, #FBBF24 60px, #000 60px, #000 120px)',
        color: '#000',
      }}
    >
      <span className="inline-block animate-marquee px-4">
        ⚠ DUKI CATALOG ⚠ SSJ RECORDS ⚠ DALE PLAY ⚠ CLASSIFIED ⚠ DUKI CATALOG ⚠ SSJ RECORDS ⚠ DALE PLAY ⚠ CLASSIFIED ⚠ DUKI CATALOG ⚠ SSJ RECORDS ⚠ DALE PLAY ⚠
      </span>
    </div>
  </div>
);

const StatCard = ({ icon: Icon, value, label, accent = false }) => (
  <div className={`relative border-2 ${accent ? 'border-red-600 bg-red-950/30' : 'border-white/20 bg-black/60'} p-4 backdrop-blur`}>
    <div className="absolute top-2 right-2 opacity-40">
      <Icon className="w-4 h-4" />
    </div>
    <div className={`font-black text-4xl md:text-5xl leading-none ${accent ? 'text-red-500' : 'text-white'}`} style={{ fontFamily: 'Archivo Black, sans-serif' }}>
      {value}
    </div>
    <div className="text-[10px] tracking-[0.2em] uppercase mt-2 text-white/60 font-bold">
      {label}
    </div>
    <div className="absolute bottom-0 left-0 h-[2px] w-1/3 bg-red-600" />
  </div>
);

const TypeBadge = ({ type }) => {
  const styles = {
    single: 'bg-red-600 text-white border-red-600',
    album: 'bg-yellow-500 text-black border-yellow-500',
    feat: 'bg-white text-black border-white',
  };
  const labels = {
    single: 'SINGLE',
    album: 'DISCO',
    feat: 'FEAT',
  };
  return (
    <span className={`inline-block px-2 py-0.5 text-[9px] font-black tracking-widest border ${styles[type]}`}>
      {labels[type]}
    </span>
  );
};

const TrackRow = ({ track, index, onClick }) => {
  const dateStr = track.date && !track.date.endsWith('-01-01') 
    ? new Date(track.date).toLocaleDateString('es-AR', { day: '2-digit', month: 'short', year: 'numeric' })
    : track.year;
  
  return (
    <div
      onClick={() => onClick(track)}
      className="group relative grid grid-cols-[auto_1fr_auto] gap-4 items-center p-3 md:p-4 border-b border-white/10 hover:bg-red-950/30 hover:border-red-600/50 transition-all cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div 
            className="font-black text-2xl md:text-3xl text-white/30 group-hover:text-red-500 transition-colors leading-none tabular-nums"
            style={{ fontFamily: 'Archivo Black, sans-serif' }}
          >
            #{String(track.id).padStart(3, '0')}
          </div>
        </div>
      </div>
      
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <TypeBadge type={track.type} />
          {track.album && (
            <span className="text-[10px] tracking-wider uppercase text-yellow-500/80 truncate">
              ◆ {track.album}
            </span>
          )}
        </div>
        <h3 
          className="font-black text-lg md:text-xl text-white group-hover:text-red-400 transition-colors truncate"
          style={{ fontFamily: 'Archivo Black, sans-serif' }}
        >
          {track.title}
        </h3>
        {track.collabs.length > 0 && (
          <div className="text-xs text-white/60 mt-1 truncate">
            <span className="text-red-500 font-bold">feat.</span> {track.collabs.join(' × ')}
          </div>
        )}
      </div>
      
      <div className="text-right">
        <div className="text-[10px] tracking-widest text-white/40 uppercase">{dateStr}</div>
        <div className="flex items-center gap-1 justify-end mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="w-3 h-3 fill-red-500 text-red-500" />
        </div>
      </div>
    </div>
  );
};

const DetailModal = ({ track, onClose }) => {
  if (!track) return null;
  
  const dateStr = track.date && !track.date.endsWith('-01-01') 
    ? new Date(track.date).toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' })
    : track.year.toString();
  
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-zinc-950 border-2 border-red-600 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header estilo expediente */}
        <div className="bg-red-600 px-6 py-3 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <Skull className="w-5 h-5 text-black" />
            <span className="font-black text-black text-xs tracking-[0.3em]">EXPEDIENTE</span>
            <span className="font-black text-black text-xs tracking-[0.2em]">#{String(track.id).padStart(3, '0')}</span>
          </div>
          <button onClick={onClose} className="text-black hover:rotate-90 transition-transform">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="mb-6">
            <TypeBadge type={track.type} />
          </div>
          
          <h2 
            className="font-black text-4xl md:text-6xl text-white leading-[0.9] mb-4 break-words"
            style={{ fontFamily: 'Archivo Black, sans-serif' }}
          >
            {track.title}
          </h2>
          
          <div className="h-[2px] w-24 bg-red-600 mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-[10px] tracking-[0.3em] text-red-500 font-bold mb-1">FECHA DE LANZAMIENTO</div>
              <div className="text-white font-bold text-lg">{dateStr}</div>
            </div>
            
            {track.album && (
              <div>
                <div className="text-[10px] tracking-[0.3em] text-red-500 font-bold mb-1">PROYECTO</div>
                <div className="text-white font-bold text-lg">{track.album}</div>
              </div>
            )}
            
            {track.trackNum && (
              <div>
                <div className="text-[10px] tracking-[0.3em] text-red-500 font-bold mb-1">TRACK #</div>
                <div className="text-white font-bold text-lg">{track.trackNum}</div>
              </div>
            )}
            
            <div>
              <div className="text-[10px] tracking-[0.3em] text-red-500 font-bold mb-1">AÑO</div>
              <div className="text-white font-bold text-lg">{track.year}</div>
            </div>
          </div>
          
          {track.collabs.length > 0 && (
            <div className="mt-6">
              <div className="text-[10px] tracking-[0.3em] text-red-500 font-bold mb-2">COLABORADORES</div>
              <div className="flex flex-wrap gap-2">
                {track.collabs.map((c) => (
                  <span 
                    key={c} 
                    className="px-3 py-1 bg-white text-black text-xs font-black tracking-wider uppercase"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="text-[10px] tracking-[0.3em] text-white/40">
              SSJ RECORDS × DALE PLAY
            </div>
            <div className="text-[10px] tracking-[0.3em] text-white/40">
              CLASIFICADO
            </div>
          </div>
        </div>
        
        <TapeStripe />
      </div>
    </div>
  );
};

const YearTimeline = ({ data, onYearClick, activeYear }) => {
  const years = [...new Set(data.map(t => t.year))].sort();
  const counts = years.map(y => data.filter(t => t.year === y).length);
  const max = Math.max(...counts);
  
  return (
    <div className="bg-black border-2 border-white/20 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-black text-white tracking-widest text-sm" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
          ◆ LÍNEA DE TIEMPO
        </h3>
        <TrendingUp className="w-4 h-4 text-red-500" />
      </div>
      <div className="flex items-end gap-1 md:gap-2 h-40">
        {years.map((year, i) => {
          const count = counts[i];
          const pct = (count / max) * 100;
          const isActive = activeYear === year;
          return (
            <button
              key={year}
              onClick={() => onYearClick(activeYear === year ? null : year)}
              className="flex-1 flex flex-col items-center justify-end group h-full"
            >
              <div className="text-[10px] font-black text-white/60 mb-1 tabular-nums">{count}</div>
              <div 
                className={`w-full transition-all ${isActive ? 'bg-red-500' : 'bg-white/20 group-hover:bg-red-600'}`}
                style={{ height: `${pct}%`, minHeight: '4px' }}
              />
              <div className={`text-[9px] md:text-xs mt-2 font-bold tracking-wider ${isActive ? 'text-red-500' : 'text-white/60'}`}>
                {String(year).slice(-2)}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const AlbumsGrid = ({ onAlbumClick, activeAlbum }) => {
  return (
    <div className="bg-black border-2 border-white/20 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-black text-white tracking-widest text-sm" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
          ◆ DISCOGRAFÍA OFICIAL
        </h3>
        <Disc className="w-4 h-4 text-red-500" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {Object.entries(ALBUMS_INFO).map(([name, info]) => {
          const isActive = activeAlbum === name;
          return (
            <button
              key={name}
              onClick={() => onAlbumClick(isActive ? null : name)}
              className={`relative p-3 text-left border-2 transition-all ${
                isActive 
                  ? 'border-red-500 bg-red-950/50' 
                  : 'border-white/20 hover:border-red-600 bg-black/60'
              }`}
            >
              <div className="text-[9px] tracking-widest text-white/40 font-bold">{info.type}</div>
              <div 
                className="font-black text-white text-sm md:text-base leading-tight mt-1"
                style={{ fontFamily: 'Archivo Black, sans-serif' }}
              >
                {name}
              </div>
              <div className="text-[10px] text-red-500 font-bold mt-1">{info.date}</div>
              <div 
                className="absolute top-0 right-0 w-1 h-full"
                style={{ backgroundColor: info.color }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

const TopCollaborators = ({ data }) => {
  const counts = {};
  data.forEach(t => {
    t.collabs.forEach(c => {
      counts[c] = (counts[c] || 0) + 1;
    });
  });
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const max = top[0]?.[1] || 1;
  
  return (
    <div className="bg-black border-2 border-white/20 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-black text-white tracking-widest text-sm" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
          ◆ TOP COLABORADORES
        </h3>
        <Users className="w-4 h-4 text-red-500" />
      </div>
      <div className="space-y-2">
        {top.map(([name, count], i) => (
          <div key={name} className="flex items-center gap-3">
            <div 
              className="font-black text-lg text-white/40 w-6 tabular-nums"
              style={{ fontFamily: 'Archivo Black, sans-serif' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-white font-bold text-sm truncate">{name}</span>
                <span className="text-red-500 font-black text-sm tabular-nums">×{count}</span>
              </div>
              <div className="h-1 bg-white/10 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-600 to-yellow-500 transition-all"
                  style={{ width: `${(count / max) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// MAIN APP
// ============================================================

export default function App() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState(null);
  const [albumFilter, setAlbumFilter] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [view, setView] = useState('list'); // 'list' | 'stats'

  useEffect(() => {
    // Cargar fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=JetBrains+Mono:wght@400;700&display=swap';
    document.head.appendChild(link);
  }, []);

  const filteredTracks = useMemo(() => {
    return DUKI_DATA.filter(t => {
      if (typeFilter !== 'all' && t.type !== typeFilter) return false;
      if (yearFilter && t.year !== yearFilter) return false;
      if (albumFilter && t.album !== albumFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        const inTitle = t.title.toLowerCase().includes(q);
        const inCollabs = t.collabs.some(c => c.toLowerCase().includes(q));
        const inAlbum = t.album?.toLowerCase().includes(q);
        if (!inTitle && !inCollabs && !inAlbum) return false;
      }
      return true;
    });
  }, [search, typeFilter, yearFilter, albumFilter]);

  const stats = useMemo(() => {
    const total = DUKI_DATA.length;
    const singles = DUKI_DATA.filter(t => t.type === 'single').length;
    const albumTracks = DUKI_DATA.filter(t => t.type === 'album').length;
    const feats = DUKI_DATA.filter(t => t.type === 'feat').length;
    const uniqueCollabs = new Set(DUKI_DATA.flatMap(t => t.collabs)).size;
    const albums = Object.keys(ALBUMS_INFO).length;
    const years = new Set(DUKI_DATA.map(t => t.year)).size;
    return { total, singles, albumTracks, feats, uniqueCollabs, albums, years };
  }, []);

  const hasFilters = search || typeFilter !== 'all' || yearFilter || albumFilter;

  const clearAll = () => {
    setSearch('');
    setTypeFilter('all');
    setYearFilter(null);
    setAlbumFilter(null);
  };

  return (
    <div 
      className="min-h-screen bg-black text-white"
      style={{
        fontFamily: 'JetBrains Mono, monospace',
        backgroundImage: 'radial-gradient(circle at 20% 0%, rgba(220, 38, 38, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 100%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)',
      }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        .glitch:hover { animation: glitch 0.3s; }
        ::selection { background: #DC2626; color: white; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #DC2626; }
      `}</style>
      
      <GrainOverlay />
      
      {/* HEADER */}
      <header className="relative border-b-4 border-red-600">
        <TapeStripe />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-12 relative">
          {/* Metadata tape */}
          <div className="flex items-center justify-between text-[10px] tracking-[0.3em] text-white/40 mb-8 font-bold">
            <span>EST. 2016 ◆ BUENOS AIRES</span>
            <span className="hidden md:block">ARCHIVO OFICIAL ◆ SSJ RECORDS</span>
            <span>REV. 04.2026</span>
          </div>
          
          {/* BIG TITLE */}
          <div className="relative">
            <div className="text-[9vw] md:text-[7vw] leading-[0.85] font-black text-white tracking-tighter glitch" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
              DUKI
            </div>
            <div 
              className="absolute top-0 left-0 text-[9vw] md:text-[7vw] leading-[0.85] font-black tracking-tighter text-red-600 opacity-80 mix-blend-screen pointer-events-none"
              style={{ fontFamily: 'Archivo Black, sans-serif', transform: 'translate(4px, -2px)' }}
            >
              DUKI
            </div>
            <div className="text-2xl md:text-4xl font-black text-yellow-500 tracking-widest mt-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              THE COMPLETE CATALOG ◆ 2016—2026
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            <div className="text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
              Base de datos completa de <span className="text-red-500 font-bold">{stats.total} temas oficiales</span> del rey del trap argentino. 
              Desde <span className="text-yellow-500 font-bold">"No Vendo Trap"</span> (2016) hasta <span className="text-yellow-500 font-bold">"MALPARIDO"</span> con Zeballos (2026). 
              Singles, discos, EPs y todas las colaboraciones.
            </div>
            <div className="flex items-start justify-end gap-2 md:gap-4 flex-wrap">
              <div className="text-right">
                <div className="text-[10px] tracking-[0.3em] text-white/40 font-bold">ENTRADAS</div>
                <div className="font-black text-3xl text-red-500 tabular-nums" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                  {stats.total}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* VIEW TOGGLE */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur border-b-2 border-red-600/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setView('list')}
            className={`px-4 py-2 text-xs font-black tracking-widest whitespace-nowrap transition-all border-2 ${
              view === 'list' 
                ? 'bg-red-600 text-white border-red-600' 
                : 'text-white/60 border-white/10 hover:border-white/40'
            }`}
          >
            ◆ CATÁLOGO
          </button>
          <button
            onClick={() => setView('stats')}
            className={`px-4 py-2 text-xs font-black tracking-widest whitespace-nowrap transition-all border-2 ${
              view === 'stats' 
                ? 'bg-red-600 text-white border-red-600' 
                : 'text-white/60 border-white/10 hover:border-white/40'
            }`}
          >
            ◆ STATS
          </button>
          
          <div className="flex-1" />
          
          <div className="text-[10px] tracking-widest text-white/40 font-bold whitespace-nowrap">
            {filteredTracks.length}/{stats.total}
          </div>
        </div>
      </div>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {view === 'list' ? (
          <>
            {/* STATS CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              <StatCard icon={Hash} value={stats.total} label="Temas Totales" accent />
              <StatCard icon={Disc} value={stats.albums} label="Discos / EPs" />
              <StatCard icon={Users} value={stats.uniqueCollabs} label="Colaboradores" />
              <StatCard icon={Calendar} value={stats.years} label="Años Activos" />
            </div>

            {/* SEARCH + FILTERS */}
            <div className="bg-black border-2 border-white/20 p-4 md:p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Search className="w-5 h-5 text-red-500" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="BUSCAR TEMA, COLABORADOR, ÁLBUM..."
                  className="flex-1 bg-transparent text-white placeholder-white/30 outline-none text-sm md:text-base tracking-wider font-bold"
                />
                {search && (
                  <button onClick={() => setSearch('')}>
                    <X className="w-4 h-4 text-white/40 hover:text-red-500" />
                  </button>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {['all', 'single', 'album', 'feat'].map(t => (
                  <button
                    key={t}
                    onClick={() => setTypeFilter(t)}
                    className={`px-3 py-1.5 text-[10px] font-black tracking-widest border-2 transition-all ${
                      typeFilter === t
                        ? 'bg-white text-black border-white'
                        : 'text-white/60 border-white/20 hover:border-white/50'
                    }`}
                  >
                    {t === 'all' ? 'TODO' : t === 'single' ? 'SINGLES' : t === 'album' ? 'DISCOS' : 'FEATS'}
                  </button>
                ))}
                
                {hasFilters && (
                  <button
                    onClick={clearAll}
                    className="px-3 py-1.5 text-[10px] font-black tracking-widest bg-red-600 text-white border-2 border-red-600 hover:bg-red-700 flex items-center gap-1"
                  >
                    <X className="w-3 h-3" /> LIMPIAR
                  </button>
                )}
              </div>
              
              {(yearFilter || albumFilter) && (
                <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
                  {yearFilter && (
                    <span className="px-2 py-1 bg-red-600 text-white font-black tracking-wider flex items-center gap-1">
                      AÑO: {yearFilter}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setYearFilter(null)} />
                    </span>
                  )}
                  {albumFilter && (
                    <span className="px-2 py-1 bg-yellow-500 text-black font-black tracking-wider flex items-center gap-1">
                      {albumFilter}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => setAlbumFilter(null)} />
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* TRACK LIST */}
            <div className="bg-black border-2 border-white/20">
              <div className="px-4 py-3 border-b-2 border-red-600 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-red-500" />
                  <h2 className="font-black text-sm tracking-[0.3em] text-white" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                    CATÁLOGO COMPLETO
                  </h2>
                </div>
                <div className="text-[10px] tracking-widest text-white/40 font-bold">
                  ORDENADO POR ID
                </div>
              </div>
              
              {filteredTracks.length === 0 ? (
                <div className="p-12 text-center">
                  <Skull className="w-12 h-12 text-white/20 mx-auto mb-4" />
                  <div className="font-black text-white/60 tracking-widest text-sm">SIN RESULTADOS</div>
                  <div className="text-xs text-white/40 mt-2">Probá otra búsqueda, campeón</div>
                </div>
              ) : (
                filteredTracks.map((t, i) => (
                  <TrackRow key={t.id} track={t} index={i} onClick={setSelectedTrack} />
                ))
              )}
            </div>
          </>
        ) : (
          <>
            {/* STATS VIEW */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <StatCard icon={Hash} value={stats.total} label="Total Temas" accent />
              <StatCard icon={Play} value={stats.singles} label="Singles Propios" />
              <StatCard icon={Disc} value={stats.albumTracks} label="Tracks de Discos" />
              <StatCard icon={Star} value={stats.feats} label="Como Invitado" />
            </div>
            
            <div className="space-y-6">
              <YearTimeline 
                data={DUKI_DATA} 
                onYearClick={(y) => { setYearFilter(y); setView('list'); }}
                activeYear={yearFilter}
              />
              
              <AlbumsGrid 
                onAlbumClick={(a) => { setAlbumFilter(a); setView('list'); }}
                activeAlbum={albumFilter}
              />
              
              <TopCollaborators data={DUKI_DATA} />
            </div>
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer className="mt-16 border-t-2 border-red-600">
        <TapeStripe />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[10px] tracking-[0.3em] text-white/40 font-bold">
              ARCHIVO OFICIAL ◆ SSJ RECORDS ◆ DALE PLAY
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-yellow-500" />
              <span className="text-[10px] tracking-[0.3em] text-white/60 font-bold">
                EL REY DEL TRAP ARGENTINO
              </span>
            </div>
            <div className="text-[10px] tracking-[0.3em] text-white/40 font-bold">
              223 TEMAS ◆ 10 AÑOS
            </div>
          </div>
        </div>
      </footer>

      <DetailModal track={selectedTrack} onClose={() => setSelectedTrack(null)} />
    </div>
  );
}
