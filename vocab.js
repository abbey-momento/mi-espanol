const VOCAB_DATA = [
 {
  "es": "Hola",
  "en": "Hello",
  "ja": "やあ",
  "cat": "Saludos",
  "pos": "挨拶"
 },
 {
  "es": "Buenos días",
  "en": "Good morning",
  "ja": "おはよう",
  "cat": "Saludos",
  "pos": "挨拶"
 },
 {
  "es": "Buenas tardes",
  "en": "Good afternoon",
  "ja": "こんにちは",
  "cat": "Saludos",
  "pos": "挨拶"
 },
 {
  "es": "Buenas noches",
  "en": "Good night",
  "ja": "こんばんは/おやすみ",
  "cat": "Saludos",
  "pos": "挨拶"
 },
 {
  "es": "¿Cómo estás?",
  "en": "How are you?",
  "ja": "元気?",
  "cat": "Saludos",
  "pos": "挨拶"
 },
 {
  "es": "Mucho gusto",
  "en": "Nice to meet you",
  "ja": "はじめまして",
  "cat": "Saludos",
  "pos": "挨拶"
 },
 {
  "es": "Hasta luego",
  "en": "See you later",
  "ja": "またね",
  "cat": "Saludos",
  "pos": "挨拶"
 },
 {
  "es": "Adiós",
  "en": "Goodbye",
  "ja": "さようなら",
  "cat": "Saludos",
  "pos": "挨拶"
 },
 {
  "es": "¿Qué tal?",
  "en": "What's up?",
  "ja": "調子どう?",
  "cat": "Saludos",
  "pos": "挨拶"
 },
 {
  "es": "Por favor",
  "en": "Please",
  "ja": "お願いします",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Gracias",
  "en": "Thank you",
  "ja": "ありがとう",
  "cat": "Frases",
  "pos": "感嘆詞"
 },
 {
  "es": "De nada",
  "en": "You're welcome",
  "ja": "どういたしまして",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Lo siento",
  "en": "I'm sorry",
  "ja": "ごめんなさい",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "¿Cuánto cuesta?",
  "en": "How much does it cost?",
  "ja": "いくらですか",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "No entiendo",
  "en": "I don't understand",
  "ja": "わかりません",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "¿Dónde está...?",
  "en": "Where is...?",
  "ja": "〜はどこ?",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "¿Puedes ayudarme?",
  "en": "Can you help me?",
  "ja": "手伝ってもらえますか",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Claro que sí",
  "en": "Of course",
  "ja": "もちろん",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Tal vez",
  "en": "Maybe",
  "ja": "たぶん",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "El aeropuerto",
  "en": "The airport",
  "ja": "空港",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "La estación",
  "en": "The station",
  "ja": "駅",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El billete",
  "en": "The ticket",
  "ja": "切符",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El equipaje",
  "en": "The luggage",
  "ja": "荷物",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "La maleta",
  "en": "The suitcase",
  "ja": "スーツケース",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El hotel",
  "en": "The hotel",
  "ja": "ホテル",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "La reserva",
  "en": "The reservation",
  "ja": "予約",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pasaporte",
  "en": "The passport",
  "ja": "パスポート",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "¿A qué hora sale?",
  "en": "What time does it leave?",
  "ja": "何時に出発しますか",
  "cat": "Viajes",
  "pos": "表現"
 },
 {
  "es": "El pan",
  "en": "Bread",
  "ja": "パン",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La fruta",
  "en": "Fruit",
  "ja": "果物",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cena",
  "en": "Dinner",
  "ja": "夕食",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El desayuno",
  "en": "Breakfast",
  "ja": "朝食",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cuenta",
  "en": "The bill",
  "ja": "お会計",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "Delicioso",
  "en": "Delicious",
  "ja": "美味しい",
  "cat": "Comida",
  "pos": "形容詞"
 },
 {
  "es": "Picante",
  "en": "Spicy",
  "ja": "辛い",
  "cat": "Comida",
  "pos": "形容詞"
 },
 {
  "es": "Uno",
  "en": "One",
  "ja": "1",
  "cat": "Números",
  "pos": "数詞"
 },
 {
  "es": "Dos",
  "en": "Two",
  "ja": "2",
  "cat": "Números",
  "pos": "数詞"
 },
 {
  "es": "Tres",
  "en": "Three",
  "ja": "3",
  "cat": "Números",
  "pos": "数詞"
 },
 {
  "es": "Cuatro",
  "en": "Four",
  "ja": "4",
  "cat": "Números",
  "pos": "数詞"
 },
 {
  "es": "Cinco",
  "en": "Five",
  "ja": "5",
  "cat": "Números",
  "pos": "数詞"
 },
 {
  "es": "Diez",
  "en": "Ten",
  "ja": "10",
  "cat": "Números",
  "pos": "数詞"
 },
 {
  "es": "Veinte",
  "en": "Twenty",
  "ja": "20",
  "cat": "Números",
  "pos": "数詞"
 },
 {
  "es": "Cien",
  "en": "One hundred",
  "ja": "100",
  "cat": "Números",
  "pos": "数詞"
 },
 {
  "es": "Mil",
  "en": "One thousand",
  "ja": "1000",
  "cat": "Números",
  "pos": "数詞"
 },
 {
  "es": "Lunes",
  "en": "Monday",
  "ja": "月曜日",
  "cat": "Días",
  "pos": "名詞"
 },
 {
  "es": "Martes",
  "en": "Tuesday",
  "ja": "火曜日",
  "cat": "Días",
  "pos": "名詞"
 },
 {
  "es": "Miércoles",
  "en": "Wednesday",
  "ja": "水曜日",
  "cat": "Días",
  "pos": "名詞"
 },
 {
  "es": "Jueves",
  "en": "Thursday",
  "ja": "木曜日",
  "cat": "Días",
  "pos": "名詞"
 },
 {
  "es": "Viernes",
  "en": "Friday",
  "ja": "金曜日",
  "cat": "Días",
  "pos": "名詞"
 },
 {
  "es": "Sábado",
  "en": "Saturday",
  "ja": "土曜日",
  "cat": "Días",
  "pos": "名詞"
 },
 {
  "es": "Domingo",
  "en": "Sunday",
  "ja": "日曜日",
  "cat": "Días",
  "pos": "名詞"
 },
 {
  "es": "La primavera",
  "en": "Spring",
  "ja": "春",
  "cat": "Estaciones",
  "pos": "名詞（女性）"
 },
 {
  "es": "El verano",
  "en": "Summer",
  "ja": "夏",
  "cat": "Estaciones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El otoño",
  "en": "Autumn",
  "ja": "秋",
  "cat": "Estaciones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El invierno",
  "en": "Winter",
  "ja": "冬",
  "cat": "Estaciones",
  "pos": "名詞（男性）"
 },
 {
  "es": "Ser / Estar",
  "en": "To be",
  "ja": "〜である/〜にいる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Tener",
  "en": "To have",
  "ja": "持つ",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Querer",
  "en": "To want",
  "ja": "欲しい",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Poder",
  "en": "To be able to",
  "ja": "〜できる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Ir",
  "en": "To go",
  "ja": "行く",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Comer",
  "en": "To eat",
  "ja": "食べる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Hablar",
  "en": "To speak",
  "ja": "話す",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Necesitar",
  "en": "To need",
  "ja": "必要とする",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Sin embargo",
  "en": "However",
  "ja": "しかしながら",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "Además",
  "en": "Besides / Also",
  "ja": "さらに",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "Aunque",
  "en": "Although",
  "ja": "〜だけれども",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "Me encantaría",
  "en": "I would love to",
  "ja": "ぜひそうしたい",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Está bien",
  "en": "That's fine / OK",
  "ja": "大丈夫です",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "No importa",
  "en": "It doesn't matter",
  "ja": "気にしないで",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Depende",
  "en": "It depends",
  "ja": "場合による",
  "cat": "Frases",
  "pos": "動詞"
 },
 {
  "es": "Estoy de acuerdo",
  "en": "I agree",
  "ja": "賛成です",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "No estoy seguro",
  "en": "I'm not sure",
  "ja": "確信がない",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "¿En serio?",
  "en": "Really?",
  "ja": "本当に?",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Qué lástima",
  "en": "What a shame",
  "ja": "残念だね",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Buena suerte",
  "en": "Good luck",
  "ja": "頑張って",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Felicidades",
  "en": "Congratulations",
  "ja": "おめでとう",
  "cat": "Frases",
  "pos": "感嘆詞"
 },
 {
  "es": "Te extraño",
  "en": "I miss you",
  "ja": "会いたいよ",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Nos vemos pronto",
  "en": "See you soon",
  "ja": "またすぐに",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Rojo",
  "en": "Red",
  "ja": "赤",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "Azul",
  "en": "Blue",
  "ja": "青",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "Verde",
  "en": "Green",
  "ja": "緑",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "Amarillo",
  "en": "Yellow",
  "ja": "黄色",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "Negro",
  "en": "Black",
  "ja": "黒",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "Blanco",
  "en": "White",
  "ja": "白",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "Gris",
  "en": "Gray",
  "ja": "灰色",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "Rosa",
  "en": "Pink",
  "ja": "ピンク",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "Morado",
  "en": "Purple",
  "ja": "紫",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "Marrón",
  "en": "Brown",
  "ja": "茶色",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "Dorado",
  "en": "Golden",
  "ja": "金色",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "Plateado",
  "en": "Silver",
  "ja": "銀色",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "Celeste",
  "en": "Sky blue",
  "ja": "水色",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "Turquesa",
  "en": "Turquoise",
  "ja": "ターコイズ色",
  "cat": "Colores",
  "pos": "形容詞"
 },
 {
  "es": "La madre",
  "en": "Mother",
  "ja": "母",
  "cat": "Familia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El padre",
  "en": "Father",
  "ja": "父",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "El hermano",
  "en": "Brother",
  "ja": "兄/弟",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La hermana",
  "en": "Sister",
  "ja": "姉/妹",
  "cat": "Familia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El abuelo",
  "en": "Grandfather",
  "ja": "祖父",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La abuela",
  "en": "Grandmother",
  "ja": "祖母",
  "cat": "Familia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El hijo",
  "en": "Son",
  "ja": "息子",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La hija",
  "en": "Daughter",
  "ja": "娘",
  "cat": "Familia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El tío",
  "en": "Uncle",
  "ja": "おじ",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La tía",
  "en": "Aunt",
  "ja": "おば",
  "cat": "Familia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El primo",
  "en": "Cousin (male)",
  "ja": "いとこ(男)",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La prima",
  "en": "Cousin (female)",
  "ja": "いとこ(女)",
  "cat": "Familia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El esposo",
  "en": "Husband",
  "ja": "夫",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La esposa",
  "en": "Wife",
  "ja": "妻",
  "cat": "Familia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El nieto",
  "en": "Grandson",
  "ja": "孫息子",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La nieta",
  "en": "Granddaughter",
  "ja": "孫娘",
  "cat": "Familia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El sobrino",
  "en": "Nephew",
  "ja": "甥",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La sobrina",
  "en": "Niece",
  "ja": "姪",
  "cat": "Familia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El suegro",
  "en": "Father-in-law",
  "ja": "義父",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La suegra",
  "en": "Mother-in-law",
  "ja": "義母",
  "cat": "Familia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El cuñado",
  "en": "Brother-in-law",
  "ja": "義兄弟",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cabeza",
  "en": "Head",
  "ja": "頭",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El ojo",
  "en": "Eye",
  "ja": "目",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La oreja",
  "en": "Ear",
  "ja": "耳",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "La nariz",
  "en": "Nose",
  "ja": "鼻",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "La boca",
  "en": "Mouth",
  "ja": "口",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "La mano",
  "en": "Hand",
  "ja": "手",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El brazo",
  "en": "Arm",
  "ja": "腕",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La pierna",
  "en": "Leg",
  "ja": "脚",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pie",
  "en": "Foot",
  "ja": "足",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El dedo",
  "en": "Finger",
  "ja": "指",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La espalda",
  "en": "Back",
  "ja": "背中",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El estómago",
  "en": "Stomach",
  "ja": "お腹",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El corazón",
  "en": "Heart",
  "ja": "心臓",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cabello",
  "en": "Hair",
  "ja": "髪",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cuello",
  "en": "Neck",
  "ja": "首",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El hombro",
  "en": "Shoulder",
  "ja": "肩",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La rodilla",
  "en": "Knee",
  "ja": "ひざ",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El diente",
  "en": "Tooth",
  "ja": "歯",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La camisa",
  "en": "Shirt",
  "ja": "シャツ",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pantalón",
  "en": "Pants",
  "ja": "ズボン",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El vestido",
  "en": "Dress",
  "ja": "ワンピース",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La falda",
  "en": "Skirt",
  "ja": "スカート",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El zapato",
  "en": "Shoe",
  "ja": "靴",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El calcetín",
  "en": "Sock",
  "ja": "靴下",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La chaqueta",
  "en": "Jacket",
  "ja": "ジャケット",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El abrigo",
  "en": "Coat",
  "ja": "コート",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El sombrero",
  "en": "Hat",
  "ja": "帽子",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La bufanda",
  "en": "Scarf",
  "ja": "マフラー",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El guante",
  "en": "Glove",
  "ja": "手袋",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cinturón",
  "en": "Belt",
  "ja": "ベルト",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La corbata",
  "en": "Tie",
  "ja": "ネクタイ",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pijama",
  "en": "Pajamas",
  "ja": "パジャマ",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La casa",
  "en": "House",
  "ja": "家",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cocina",
  "en": "Kitchen",
  "ja": "台所",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El dormitorio",
  "en": "Bedroom",
  "ja": "寝室",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El baño",
  "en": "Bathroom",
  "ja": "お風呂/トイレ",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La sala",
  "en": "Living room",
  "ja": "リビング",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El jardín",
  "en": "Garden",
  "ja": "庭",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La puerta",
  "en": "Door",
  "ja": "ドア",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La ventana",
  "en": "Window",
  "ja": "窓",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La mesa",
  "en": "Table",
  "ja": "テーブル",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La silla",
  "en": "Chair",
  "ja": "椅子",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cama",
  "en": "Bed",
  "ja": "ベッド",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El sofá",
  "en": "Sofa",
  "ja": "ソファ",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El techo",
  "en": "Roof / Ceiling",
  "ja": "屋根/天井",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La pared",
  "en": "Wall",
  "ja": "壁",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La escalera",
  "en": "Stairs",
  "ja": "階段",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El garaje",
  "en": "Garage",
  "ja": "ガレージ",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El trabajo",
  "en": "Work / Job",
  "ja": "仕事",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La oficina",
  "en": "Office",
  "ja": "オフィス",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El jefe",
  "en": "Boss",
  "ja": "上司",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El empleado",
  "en": "Employee",
  "ja": "従業員",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La reunión",
  "en": "Meeting",
  "ja": "会議",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "La computadora",
  "en": "Computer",
  "ja": "パソコン",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El correo electrónico",
  "en": "Email",
  "ja": "メール",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El proyecto",
  "en": "Project",
  "ja": "プロジェクト",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El sueldo",
  "en": "Salary",
  "ja": "給料",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La entrevista",
  "en": "Interview",
  "ja": "面接",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El currículum",
  "en": "Resume",
  "ja": "履歴書",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La empresa",
  "en": "Company",
  "ja": "会社",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El cliente",
  "en": "Client",
  "ja": "顧客",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El horario",
  "en": "Schedule",
  "ja": "スケジュール",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "Feliz",
  "en": "Happy",
  "ja": "幸せ",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Triste",
  "en": "Sad",
  "ja": "悲しい",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Enojado",
  "en": "Angry",
  "ja": "怒っている",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Cansado",
  "en": "Tired",
  "ja": "疲れた",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Nervioso",
  "en": "Nervous",
  "ja": "緊張している",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Emocionado",
  "en": "Excited",
  "ja": "わくわくしている",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Aburrido",
  "en": "Bored",
  "ja": "退屈している",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Sorprendido",
  "en": "Surprised",
  "ja": "驚いている",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Asustado",
  "en": "Scared",
  "ja": "怖がっている",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Tranquilo",
  "en": "Calm",
  "ja": "落ち着いている",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Preocupado",
  "en": "Worried",
  "ja": "心配している",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Orgulloso",
  "en": "Proud",
  "ja": "誇りに思う",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Celoso",
  "en": "Jealous",
  "ja": "嫉妬している",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Avergonzado",
  "en": "Embarrassed",
  "ja": "恥ずかしい",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "El sol",
  "en": "Sun",
  "ja": "太陽",
  "cat": "Clima",
  "pos": "名詞（男性）"
 },
 {
  "es": "La lluvia",
  "en": "Rain",
  "ja": "雨",
  "cat": "Clima",
  "pos": "名詞（女性）"
 },
 {
  "es": "La nube",
  "en": "Cloud",
  "ja": "雲",
  "cat": "Clima",
  "pos": "名詞（女性）"
 },
 {
  "es": "El viento",
  "en": "Wind",
  "ja": "風",
  "cat": "Clima",
  "pos": "名詞（男性）"
 },
 {
  "es": "La nieve",
  "en": "Snow",
  "ja": "雪",
  "cat": "Clima",
  "pos": "名詞（女性）"
 },
 {
  "es": "La tormenta",
  "en": "Storm",
  "ja": "嵐",
  "cat": "Clima",
  "pos": "名詞（女性）"
 },
 {
  "es": "El calor",
  "en": "Heat",
  "ja": "暑さ",
  "cat": "Clima",
  "pos": "名詞（男性）"
 },
 {
  "es": "El frío",
  "en": "Cold",
  "ja": "寒さ",
  "cat": "Clima",
  "pos": "名詞（男性）"
 },
 {
  "es": "Húmedo",
  "en": "Humid",
  "ja": "湿気がある",
  "cat": "Clima",
  "pos": "形容詞"
 },
 {
  "es": "El arcoíris",
  "en": "Rainbow",
  "ja": "虹",
  "cat": "Clima",
  "pos": "名詞（男性）"
 },
 {
  "es": "La niebla",
  "en": "Fog",
  "ja": "霧",
  "cat": "Clima",
  "pos": "名詞（女性）"
 },
 {
  "es": "La helada",
  "en": "Frost",
  "ja": "霜",
  "cat": "Clima",
  "pos": "名詞（女性）"
 },
 {
  "es": "El perro",
  "en": "Dog",
  "ja": "犬",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El gato",
  "en": "Cat",
  "ja": "猫",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El pájaro",
  "en": "Bird",
  "ja": "鳥",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El pez",
  "en": "Fish",
  "ja": "魚",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El caballo",
  "en": "Horse",
  "ja": "馬",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "La vaca",
  "en": "Cow",
  "ja": "牛",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "El cerdo",
  "en": "Pig",
  "ja": "豚",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "La oveja",
  "en": "Sheep",
  "ja": "羊",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "El león",
  "en": "Lion",
  "ja": "ライオン",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El elefante",
  "en": "Elephant",
  "ja": "象",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El mono",
  "en": "Monkey",
  "ja": "猿",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El conejo",
  "en": "Rabbit",
  "ja": "うさぎ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El ratón",
  "en": "Mouse",
  "ja": "ねずみ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El tigre",
  "en": "Tiger",
  "ja": "虎",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El oso",
  "en": "Bear",
  "ja": "熊",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "La serpiente",
  "en": "Snake",
  "ja": "蛇",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "El coche",
  "en": "Car",
  "ja": "車",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El autobús",
  "en": "Bus",
  "ja": "バス",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El tren",
  "en": "Train",
  "ja": "電車",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El avión",
  "en": "Airplane",
  "ja": "飛行機",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La bicicleta",
  "en": "Bicycle",
  "ja": "自転車",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El barco",
  "en": "Boat",
  "ja": "船",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El taxi",
  "en": "Taxi",
  "ja": "タクシー",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El metro",
  "en": "Subway",
  "ja": "地下鉄",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La motocicleta",
  "en": "Motorcycle",
  "ja": "バイク",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El camión",
  "en": "Truck",
  "ja": "トラック",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "Grande",
  "en": "Big",
  "ja": "大きい",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Pequeño",
  "en": "Small",
  "ja": "小さい",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Alto",
  "en": "Tall",
  "ja": "高い(背)",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Bajo",
  "en": "Short",
  "ja": "低い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Rápido",
  "en": "Fast",
  "ja": "速い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Lento",
  "en": "Slow",
  "ja": "遅い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Caro",
  "en": "Expensive",
  "ja": "高い(値段)",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Barato",
  "en": "Cheap",
  "ja": "安い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Fácil",
  "en": "Easy",
  "ja": "簡単",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Difícil",
  "en": "Difficult",
  "ja": "難しい",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Nuevo",
  "en": "New",
  "ja": "新しい",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Viejo",
  "en": "Old",
  "ja": "古い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Limpio",
  "en": "Clean",
  "ja": "きれい",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Sucio",
  "en": "Dirty",
  "ja": "汚い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Fuerte",
  "en": "Strong",
  "ja": "強い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Débil",
  "en": "Weak",
  "ja": "弱い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Bonito",
  "en": "Pretty",
  "ja": "きれい/かわいい",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Feo",
  "en": "Ugly",
  "ja": "醜い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Inteligente",
  "en": "Smart",
  "ja": "賢い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Divertido",
  "en": "Fun",
  "ja": "楽しい",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Enero",
  "en": "January",
  "ja": "1月",
  "cat": "Meses",
  "pos": "名詞"
 },
 {
  "es": "Febrero",
  "en": "February",
  "ja": "2月",
  "cat": "Meses",
  "pos": "名詞"
 },
 {
  "es": "Marzo",
  "en": "March",
  "ja": "3月",
  "cat": "Meses",
  "pos": "名詞"
 },
 {
  "es": "Abril",
  "en": "April",
  "ja": "4月",
  "cat": "Meses",
  "pos": "名詞"
 },
 {
  "es": "Mayo",
  "en": "May",
  "ja": "5月",
  "cat": "Meses",
  "pos": "名詞"
 },
 {
  "es": "Junio",
  "en": "June",
  "ja": "6月",
  "cat": "Meses",
  "pos": "名詞"
 },
 {
  "es": "Julio",
  "en": "July",
  "ja": "7月",
  "cat": "Meses",
  "pos": "名詞"
 },
 {
  "es": "Agosto",
  "en": "August",
  "ja": "8月",
  "cat": "Meses",
  "pos": "名詞"
 },
 {
  "es": "Septiembre",
  "en": "September",
  "ja": "9月",
  "cat": "Meses",
  "pos": "名詞"
 },
 {
  "es": "Octubre",
  "en": "October",
  "ja": "10月",
  "cat": "Meses",
  "pos": "名詞"
 },
 {
  "es": "Noviembre",
  "en": "November",
  "ja": "11月",
  "cat": "Meses",
  "pos": "名詞"
 },
 {
  "es": "Diciembre",
  "en": "December",
  "ja": "12月",
  "cat": "Meses",
  "pos": "名詞"
 },
 {
  "es": "El banco",
  "en": "Bank",
  "ja": "銀行",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "El hospital",
  "en": "Hospital",
  "ja": "病院",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "La escuela",
  "en": "School",
  "ja": "学校",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "La iglesia",
  "en": "Church",
  "ja": "教会",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "El mercado",
  "en": "Market",
  "ja": "市場",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "El parque",
  "en": "Park",
  "ja": "公園",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "La biblioteca",
  "en": "Library",
  "ja": "図書館",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "La farmacia",
  "en": "Pharmacy",
  "ja": "薬局",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "El supermercado",
  "en": "Supermarket",
  "ja": "スーパー",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "La playa",
  "en": "Beach",
  "ja": "ビーチ",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "La montaña",
  "en": "Mountain",
  "ja": "山",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "La ciudad",
  "en": "City",
  "ja": "都市",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pueblo",
  "en": "Town",
  "ja": "町",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "El museo",
  "en": "Museum",
  "ja": "美術館/博物館",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "El teléfono",
  "en": "Phone",
  "ja": "電話",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El internet",
  "en": "Internet",
  "ja": "インターネット",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La aplicación",
  "en": "App",
  "ja": "アプリ",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "La contraseña",
  "en": "Password",
  "ja": "パスワード",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "La batería",
  "en": "Battery",
  "ja": "バッテリー",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "La pantalla",
  "en": "Screen",
  "ja": "画面",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El cargador",
  "en": "Charger",
  "ja": "充電器",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El wifi",
  "en": "Wifi",
  "ja": "Wi-Fi",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El mensaje",
  "en": "Message",
  "ja": "メッセージ",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El fútbol",
  "en": "Soccer",
  "ja": "サッカー",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El baloncesto",
  "en": "Basketball",
  "ja": "バスケットボール",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El tenis",
  "en": "Tennis",
  "ja": "テニス",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "La natación",
  "en": "Swimming",
  "ja": "水泳",
  "cat": "Deportes",
  "pos": "名詞（女性）"
 },
 {
  "es": "Correr",
  "en": "To run",
  "ja": "走る",
  "cat": "Deportes",
  "pos": "動詞"
 },
 {
  "es": "El ciclismo",
  "en": "Cycling",
  "ja": "サイクリング",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El béisbol",
  "en": "Baseball",
  "ja": "野球",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El boxeo",
  "en": "Boxing",
  "ja": "ボクシング",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El yoga",
  "en": "Yoga",
  "ja": "ヨガ",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El gimnasio",
  "en": "Gym",
  "ja": "ジム",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El árbol",
  "en": "Tree",
  "ja": "木",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "La flor",
  "en": "Flower",
  "ja": "花",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "El río",
  "en": "River",
  "ja": "川",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "El mar",
  "en": "Sea",
  "ja": "海",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cielo",
  "en": "Sky",
  "ja": "空",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "La estrella",
  "en": "Star",
  "ja": "星",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "La luna",
  "en": "Moon",
  "ja": "月",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "El bosque",
  "en": "Forest",
  "ja": "森",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "La piedra",
  "en": "Stone",
  "ja": "石",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "Siempre",
  "en": "Always",
  "ja": "いつも",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Nunca",
  "en": "Never",
  "ja": "決して〜ない",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "A veces",
  "en": "Sometimes",
  "ja": "時々",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "A menudo",
  "en": "Often",
  "ja": "よく",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Ahora",
  "en": "Now",
  "ja": "今",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Después",
  "en": "After / Later",
  "ja": "あとで",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Antes",
  "en": "Before",
  "ja": "前に",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Todavía",
  "en": "Still / Yet",
  "ja": "まだ",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Ya",
  "en": "Already",
  "ja": "すでに",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Pronto",
  "en": "Soon",
  "ja": "すぐに",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Temprano",
  "en": "Early",
  "ja": "早く",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Tarde",
  "en": "Late",
  "ja": "遅く",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Estar en las nubes",
  "en": "To be daydreaming",
  "ja": "上の空である（直訳:雲の中にいる）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Costar un ojo de la cara",
  "en": "To cost an arm and a leg",
  "ja": "非常に高い（直訳:顔の目玉の値段がする）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Tomar el pelo",
  "en": "To pull someone's leg",
  "ja": "からかう（直訳:髪を引っ張る）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Meter la pata",
  "en": "To mess up",
  "ja": "やらかす（直訳:足を突っ込む）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "No tener pelos en la lengua",
  "en": "To speak one's mind bluntly",
  "ja": "歯にきぬ着せぬ（直訳:舌に毛がない）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Ser pan comido",
  "en": "To be a piece of cake",
  "ja": "朝飯前（直訳:食べたパン）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Estar como agua para chocolate",
  "en": "To be extremely angry",
  "ja": "かんかんに怒っている（メキシコ独特の表現）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Ponerse las pilas",
  "en": "To get one's act together",
  "ja": "気合を入れる（直訳:電池を入れる）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Echar de menos",
  "en": "To miss someone/something",
  "ja": "恋しく思う",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Dar en el clavo",
  "en": "To hit the nail on the head",
  "ja": "図星をつく（直訳:釘に当てる）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Hacer la vista gorda",
  "en": "To turn a blind eye",
  "ja": "見て見ぬふりをする",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Estar hasta las narices",
  "en": "To be fed up",
  "ja": "うんざりしている（直訳:鼻まで達している）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Írsele la mano",
  "en": "To overdo it",
  "ja": "やり過ぎる（直訳:手が行ってしまう）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Quedarse de piedra",
  "en": "To be stunned",
  "ja": "あぜんとする（直訳:石になる）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Ni fu ni fa",
  "en": "So-so / neither here nor there",
  "ja": "どうでもいい、まあまあ",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Fijarse en",
  "en": "To notice / pay attention to",
  "ja": "〜に気づく、注目する",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Darse cuenta de",
  "en": "To realize",
  "ja": "〜に気がつく",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Enterarse de",
  "en": "To find out about",
  "ja": "〜を知る",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Arrepentirse de",
  "en": "To regret",
  "ja": "後悔する",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Acostumbrarse a",
  "en": "To get used to",
  "ja": "〜に慣れる",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Atreverse a",
  "en": "To dare to",
  "ja": "あえて〜する",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Quejarse de",
  "en": "To complain about",
  "ja": "〜に文句を言う",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Sorprenderse de",
  "en": "To be surprised at",
  "ja": "〜に驚く",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Negarse a",
  "en": "To refuse to",
  "ja": "〜することを拒否する",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Empeñarse en",
  "en": "To insist on",
  "ja": "〜に固執する",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Sin duda",
  "en": "Without a doubt",
  "ja": "間違いなく",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "Por lo tanto",
  "en": "Therefore",
  "ja": "したがって",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "En cuanto a",
  "en": "As for / regarding",
  "ja": "〜に関しては",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "A pesar de",
  "en": "Despite",
  "ja": "〜にもかかわらず",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "De hecho",
  "en": "In fact",
  "ja": "実は",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "Por si acaso",
  "en": "Just in case",
  "ja": "念のため",
  "cat": "Frases",
  "nivel": "avanzado",
  "pos": "表現"
 },
 {
  "es": "Cuanto antes",
  "en": "As soon as possible",
  "ja": "できるだけ早く",
  "cat": "Frases",
  "nivel": "avanzado",
  "pos": "表現"
 },
 {
  "es": "Hoy en día",
  "en": "Nowadays",
  "ja": "最近は",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "La guitarra",
  "en": "Guitar",
  "ja": "ギター",
  "cat": "Música",
  "pos": "名詞（女性）"
 },
 {
  "es": "El piano",
  "en": "Piano",
  "ja": "ピアノ",
  "cat": "Música",
  "pos": "名詞（男性）"
 },
 {
  "es": "El violín",
  "en": "Violin",
  "ja": "バイオリン",
  "cat": "Música",
  "pos": "名詞（男性）"
 },
 {
  "es": "La flauta",
  "en": "Flute",
  "ja": "フルート",
  "cat": "Música",
  "pos": "名詞（女性）"
 },
 {
  "es": "La trompeta",
  "en": "Trumpet",
  "ja": "トランペット",
  "cat": "Música",
  "pos": "名詞（女性）"
 },
 {
  "es": "El saxofón",
  "en": "Saxophone",
  "ja": "サックス",
  "cat": "Música",
  "pos": "名詞（男性）"
 },
 {
  "es": "El arpa",
  "en": "Harp",
  "ja": "ハープ",
  "cat": "Música",
  "pos": "名詞（男性）"
 },
 {
  "es": "El tambor",
  "en": "Drum",
  "ja": "太鼓",
  "cat": "Música",
  "pos": "名詞（男性）"
 },
 {
  "es": "El acordeón",
  "en": "Accordion",
  "ja": "アコーディオン",
  "cat": "Música",
  "pos": "名詞（男性）"
 },
 {
  "es": "El clarinete",
  "en": "Clarinet",
  "ja": "クラリネット",
  "cat": "Música",
  "pos": "名詞（男性）"
 },
 {
  "es": "El contrabajo",
  "en": "Double bass",
  "ja": "コントラバス",
  "cat": "Música",
  "pos": "名詞（男性）"
 },
 {
  "es": "El ukelele",
  "en": "Ukulele",
  "ja": "ウクレレ",
  "cat": "Música",
  "pos": "名詞（男性）"
 },
 {
  "es": "El órgano",
  "en": "Organ",
  "ja": "オルガン",
  "cat": "Música",
  "pos": "名詞（男性）"
 },
 {
  "es": "La pandereta",
  "en": "Tambourine",
  "ja": "タンバリン",
  "cat": "Música",
  "pos": "名詞（女性）"
 },
 {
  "es": "El médico",
  "en": "Doctor",
  "ja": "医者",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "La enfermera",
  "en": "Nurse",
  "ja": "看護師",
  "cat": "Profesiones",
  "pos": "名詞（女性）"
 },
 {
  "es": "El maestro",
  "en": "Teacher",
  "ja": "教師",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El abogado",
  "en": "Lawyer",
  "ja": "弁護士",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El ingeniero",
  "en": "Engineer",
  "ja": "エンジニア",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El arquitecto",
  "en": "Architect",
  "ja": "建築家",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El contador",
  "en": "Accountant",
  "ja": "会計士",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El periodista",
  "en": "Journalist",
  "ja": "記者",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cocinero",
  "en": "Cook",
  "ja": "料理人",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El camarero",
  "en": "Waiter",
  "ja": "ウェイター",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El piloto",
  "en": "Pilot",
  "ja": "パイロット",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El policía",
  "en": "Police officer",
  "ja": "警察官",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El bombero",
  "en": "Firefighter",
  "ja": "消防士",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El electricista",
  "en": "Electrician",
  "ja": "電気技師",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El plomero",
  "en": "Plumber",
  "ja": "配管工",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El carpintero",
  "en": "Carpenter",
  "ja": "大工",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El peluquero",
  "en": "Hairdresser",
  "ja": "美容師",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El dentista",
  "en": "Dentist",
  "ja": "歯科医",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El veterinario",
  "en": "Veterinarian",
  "ja": "獣医",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El científico",
  "en": "Scientist",
  "ja": "科学者",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El escritor",
  "en": "Writer",
  "ja": "作家",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El actor",
  "en": "Actor",
  "ja": "俳優",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "La actriz",
  "en": "Actress",
  "ja": "女優",
  "cat": "Profesiones",
  "pos": "名詞（女性）"
 },
 {
  "es": "El cantante",
  "en": "Singer",
  "ja": "歌手",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El pintor",
  "en": "Painter",
  "ja": "画家",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "El granjero",
  "en": "Farmer",
  "ja": "農家",
  "cat": "Profesiones",
  "pos": "名詞（男性）"
 },
 {
  "es": "La manzana",
  "en": "Apple",
  "ja": "りんご",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El plátano",
  "en": "Banana",
  "ja": "バナナ",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La uva",
  "en": "Grape",
  "ja": "ぶどう",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La sandía",
  "en": "Watermelon",
  "ja": "スイカ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La piña",
  "en": "Pineapple",
  "ja": "パイナップル",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El mango",
  "en": "Mango",
  "ja": "マンゴー",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El limón",
  "en": "Lemon",
  "ja": "レモン",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La pera",
  "en": "Pear",
  "ja": "梨/洋梨",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cereza",
  "en": "Cherry",
  "ja": "さくらんぼ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El durazno",
  "en": "Peach",
  "ja": "桃",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La papaya",
  "en": "Papaya",
  "ja": "パパイヤ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El coco",
  "en": "Coconut",
  "ja": "ココナッツ",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La zanahoria",
  "en": "Carrot",
  "ja": "にんじん",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La papa",
  "en": "Potato",
  "ja": "じゃがいも",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cebolla",
  "en": "Onion",
  "ja": "玉ねぎ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El ajo",
  "en": "Garlic",
  "ja": "にんにく",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El tomate",
  "en": "Tomato",
  "ja": "トマト",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La lechuga",
  "en": "Lettuce",
  "ja": "レタス",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pepino",
  "en": "Cucumber",
  "ja": "きゅうり",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El brócoli",
  "en": "Broccoli",
  "ja": "ブロッコリー",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La espinaca",
  "en": "Spinach",
  "ja": "ほうれん草",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La calabaza",
  "en": "Pumpkin",
  "ja": "かぼちゃ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pimiento",
  "en": "Bell pepper",
  "ja": "ピーマン",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "España",
  "en": "Spain",
  "ja": "スペイン",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "México",
  "en": "Mexico",
  "ja": "メキシコ",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Argentina",
  "en": "Argentina",
  "ja": "アルゼンチン",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Colombia",
  "en": "Colombia",
  "ja": "コロンビア",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Perú",
  "en": "Peru",
  "ja": "ペルー",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Estados Unidos",
  "en": "United States",
  "ja": "アメリカ合衆国",
  "cat": "Geografía",
  "pos": "表現"
 },
 {
  "es": "Canadá",
  "en": "Canada",
  "ja": "カナダ",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Francia",
  "en": "France",
  "ja": "フランス",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Alemania",
  "en": "Germany",
  "ja": "ドイツ",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Italia",
  "en": "Italy",
  "ja": "イタリア",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Japón",
  "en": "Japan",
  "ja": "日本",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "China",
  "en": "China",
  "ja": "中国",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Brasil",
  "en": "Brazil",
  "ja": "ブラジル",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Cuba",
  "en": "Cuba",
  "ja": "キューバ",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Guatemala",
  "en": "Guatemala",
  "ja": "グアテマラ",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Venezuela",
  "en": "Venezuela",
  "ja": "ベネズエラ",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Ecuador",
  "en": "Ecuador",
  "ja": "エクアドル",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Bolivia",
  "en": "Bolivia",
  "ja": "ボリビア",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Uruguay",
  "en": "Uruguay",
  "ja": "ウルグアイ",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "América",
  "en": "America",
  "ja": "アメリカ大陸",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Europa",
  "en": "Europe",
  "ja": "ヨーロッパ",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Asia",
  "en": "Asia",
  "ja": "アジア",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "África",
  "en": "Africa",
  "ja": "アフリカ",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "Oceanía",
  "en": "Oceania",
  "ja": "オセアニア",
  "cat": "Geografía",
  "pos": "形容詞"
 },
 {
  "es": "La Antártida",
  "en": "Antarctica",
  "ja": "南極大陸",
  "cat": "Geografía",
  "pos": "名詞（女性）"
 },
 {
  "es": "La física",
  "en": "Physics",
  "ja": "物理学",
  "cat": "Ciencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "La química",
  "en": "Chemistry",
  "ja": "化学",
  "cat": "Ciencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "La biología",
  "en": "Biology",
  "ja": "生物学",
  "cat": "Ciencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "Las matemáticas",
  "en": "Mathematics",
  "ja": "数学",
  "cat": "Ciencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El experimento",
  "en": "Experiment",
  "ja": "実験",
  "cat": "Ciencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "El átomo",
  "en": "Atom",
  "ja": "原子",
  "cat": "Ciencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La célula",
  "en": "Cell",
  "ja": "細胞",
  "cat": "Ciencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El planeta",
  "en": "Planet",
  "ja": "惑星",
  "cat": "Ciencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La gravedad",
  "en": "Gravity",
  "ja": "重力",
  "cat": "Ciencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "La energía",
  "en": "Energy",
  "ja": "エネルギー",
  "cat": "Ciencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El microscopio",
  "en": "Microscope",
  "ja": "顕微鏡",
  "cat": "Ciencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La fórmula",
  "en": "Formula",
  "ja": "公式",
  "cat": "Ciencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El laboratorio",
  "en": "Laboratory",
  "ja": "研究室",
  "cat": "Ciencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La teoría",
  "en": "Theory",
  "ja": "理論",
  "cat": "Ciencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El universo",
  "en": "Universe",
  "ja": "宇宙",
  "cat": "Ciencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La pintura",
  "en": "Painting",
  "ja": "絵画",
  "cat": "Arte",
  "pos": "名詞（女性）"
 },
 {
  "es": "La escultura",
  "en": "Sculpture",
  "ja": "彫刻",
  "cat": "Arte",
  "pos": "名詞（女性）"
 },
 {
  "es": "La poesía",
  "en": "Poetry",
  "ja": "詩",
  "cat": "Arte",
  "pos": "名詞（女性）"
 },
 {
  "es": "La novela",
  "en": "Novel",
  "ja": "小説",
  "cat": "Arte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El cuento",
  "en": "Short story",
  "ja": "短編小説",
  "cat": "Arte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El autor",
  "en": "Author",
  "ja": "著者",
  "cat": "Arte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El personaje",
  "en": "Character",
  "ja": "登場人物",
  "cat": "Arte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La trama",
  "en": "Plot",
  "ja": "筋書き",
  "cat": "Arte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El poema",
  "en": "Poem",
  "ja": "詩(作品)",
  "cat": "Arte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La obra de teatro",
  "en": "Play (theater)",
  "ja": "演劇作品",
  "cat": "Arte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El escenario",
  "en": "Stage",
  "ja": "舞台",
  "cat": "Arte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La exposición",
  "en": "Exhibition",
  "ja": "展覧会",
  "cat": "Arte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El lienzo",
  "en": "Canvas",
  "ja": "キャンバス",
  "cat": "Arte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El pincel",
  "en": "Paintbrush",
  "ja": "絵筆",
  "cat": "Arte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La galería",
  "en": "Gallery",
  "ja": "ギャラリー",
  "cat": "Arte",
  "pos": "名詞（女性）"
 },
 {
  "es": "Abrir",
  "en": "To open",
  "ja": "開ける",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Cerrar",
  "en": "To close",
  "ja": "閉める",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Empezar",
  "en": "To start",
  "ja": "始める",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Terminar",
  "en": "To finish",
  "ja": "終える",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Entender",
  "en": "To understand",
  "ja": "理解する",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Aprender",
  "en": "To learn",
  "ja": "学ぶ",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Enseñar",
  "en": "To teach",
  "ja": "教える",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Escribir",
  "en": "To write",
  "ja": "書く",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Leer",
  "en": "To read",
  "ja": "読む",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Escuchar",
  "en": "To listen",
  "ja": "聞く",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Mirar",
  "en": "To look at",
  "ja": "見る",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Ver",
  "en": "To see",
  "ja": "見える/見る",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Oír",
  "en": "To hear",
  "ja": "聞こえる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Sentir",
  "en": "To feel",
  "ja": "感じる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Pensar",
  "en": "To think",
  "ja": "考える",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Creer",
  "en": "To believe",
  "ja": "信じる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Saber",
  "en": "To know (a fact)",
  "ja": "知っている",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Conocer",
  "en": "To know (a person/place)",
  "ja": "知り合いである",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Dar",
  "en": "To give",
  "ja": "与える",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Tomar",
  "en": "To take",
  "ja": "取る/飲む",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Llevar",
  "en": "To carry/wear",
  "ja": "運ぶ/身につける",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Traer",
  "en": "To bring",
  "ja": "持ってくる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Buscar",
  "en": "To look for",
  "ja": "探す",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Encontrar",
  "en": "To find",
  "ja": "見つける",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Perder",
  "en": "To lose",
  "ja": "失う",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Ganar",
  "en": "To win/earn",
  "ja": "勝つ/稼ぐ",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Jugar",
  "en": "To play",
  "ja": "遊ぶ/プレーする",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Trabajar",
  "en": "To work",
  "ja": "働く",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Estudiar",
  "en": "To study",
  "ja": "勉強する",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Dormir",
  "en": "To sleep",
  "ja": "眠る",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Soñar",
  "en": "To dream",
  "ja": "夢を見る",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Recordar",
  "en": "To remember",
  "ja": "思い出す",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Olvidar",
  "en": "To forget",
  "ja": "忘れる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Decidir",
  "en": "To decide",
  "ja": "決める",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Cambiar",
  "en": "To change",
  "ja": "変える",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Mejorar",
  "en": "To improve",
  "ja": "改善する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Ayudar",
  "en": "To help",
  "ja": "手伝う",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Permitir",
  "en": "To allow",
  "ja": "許可する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Prohibir",
  "en": "To forbid",
  "ja": "禁止する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Preguntar",
  "en": "To ask",
  "ja": "質問する",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Amable",
  "en": "Kind",
  "ja": "親切な",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Generoso",
  "en": "Generous",
  "ja": "寛大な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Egoísta",
  "en": "Selfish",
  "ja": "利己的な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Honesto",
  "en": "Honest",
  "ja": "正直な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Sincero",
  "en": "Sincere",
  "ja": "誠実な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Tímido",
  "en": "Shy",
  "ja": "恥ずかしがりな",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Valiente",
  "en": "Brave",
  "ja": "勇敢な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Paciente",
  "en": "Patient",
  "ja": "忍耐強い",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Impaciente",
  "en": "Impatient",
  "ja": "せっかちな",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Curioso",
  "en": "Curious",
  "ja": "好奇心旺盛な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Creativo",
  "en": "Creative",
  "ja": "創造的な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Responsable",
  "en": "Responsible",
  "ja": "責任感のある",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Perezoso",
  "en": "Lazy",
  "ja": "怠惰な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Trabajador",
  "en": "Hard-working",
  "ja": "勤勉な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Optimista",
  "en": "Optimistic",
  "ja": "楽観的な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Pesimista",
  "en": "Pessimistic",
  "ja": "悲観的な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Gracioso",
  "en": "Funny",
  "ja": "面白い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Serio",
  "en": "Serious",
  "ja": "真面目な",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Educado",
  "en": "Polite",
  "ja": "礼儀正しい",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Maleducado",
  "en": "Rude",
  "ja": "無礼な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "La red social",
  "en": "Social network",
  "ja": "SNS",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El usuario",
  "en": "User",
  "ja": "ユーザー",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La publicación",
  "en": "Post",
  "ja": "投稿",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El comentario",
  "en": "Comment",
  "ja": "コメント",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El seguidor",
  "en": "Follower",
  "ja": "フォロワー",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La notificación",
  "en": "Notification",
  "ja": "通知",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El enlace",
  "en": "Link",
  "ja": "リンク",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El archivo",
  "en": "File",
  "ja": "ファイル",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La carpeta",
  "en": "Folder",
  "ja": "フォルダ",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El navegador",
  "en": "Browser",
  "ja": "ブラウザ",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La descarga",
  "en": "Download",
  "ja": "ダウンロード",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "La actualización",
  "en": "Update",
  "ja": "アップデート",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El video",
  "en": "Video",
  "ja": "動画",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La foto",
  "en": "Photo",
  "ja": "写真",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "La pizza",
  "en": "Pizza",
  "ja": "ピザ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La hamburguesa",
  "en": "Hamburger",
  "ja": "ハンバーガー",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La sopa",
  "en": "Soup",
  "ja": "スープ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La ensalada",
  "en": "Salad",
  "ja": "サラダ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El postre",
  "en": "Dessert",
  "ja": "デザート",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El pastel",
  "en": "Cake",
  "ja": "ケーキ",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El helado",
  "en": "Ice cream",
  "ja": "アイスクリーム",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El chocolate",
  "en": "Chocolate",
  "ja": "チョコレート",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La galleta",
  "en": "Cookie",
  "ja": "クッキー",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El jugo",
  "en": "Juice",
  "ja": "ジュース",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El refresco",
  "en": "Soda",
  "ja": "炭酸飲料",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cerveza",
  "en": "Beer",
  "ja": "ビール",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El vino",
  "en": "Wine",
  "ja": "ワイン",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El té",
  "en": "Tea",
  "ja": "お茶",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La leche",
  "en": "Milk",
  "ja": "牛乳",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El azúcar",
  "en": "Sugar",
  "ja": "砂糖",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La sal",
  "en": "Salt",
  "ja": "塩",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La pimienta",
  "en": "Pepper (spice)",
  "ja": "こしょう",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El aceite",
  "en": "Oil",
  "ja": "油",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El vinagre",
  "en": "Vinegar",
  "ja": "酢",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La mantequilla",
  "en": "Butter",
  "ja": "バター",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El queso",
  "en": "Cheese",
  "ja": "チーズ",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El huevo",
  "en": "Egg",
  "ja": "卵",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El arroz",
  "en": "Rice",
  "ja": "こめ",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "Los frijoles",
  "en": "Beans",
  "ja": "豆",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El refrigerador",
  "en": "Refrigerator",
  "ja": "冷蔵庫",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La estufa",
  "en": "Stove",
  "ja": "コンロ",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El horno",
  "en": "Oven",
  "ja": "オーブン",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El microondas",
  "en": "Microwave",
  "ja": "電子レンジ",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La lavadora",
  "en": "Washing machine",
  "ja": "洗濯機",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La secadora",
  "en": "Dryer",
  "ja": "乾燥機",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El lavaplatos",
  "en": "Dishwasher",
  "ja": "食洗機",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El televisor",
  "en": "TV set",
  "ja": "テレビ",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El espejo",
  "en": "Mirror",
  "ja": "鏡",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La lámpara",
  "en": "Lamp",
  "ja": "ランプ",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La almohada",
  "en": "Pillow",
  "ja": "枕",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La manta",
  "en": "Blanket",
  "ja": "毛布",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El armario",
  "en": "Closet",
  "ja": "クローゼット",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El estante",
  "en": "Shelf",
  "ja": "棚",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La alfombra",
  "en": "Rug",
  "ja": "じゅうたん",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El ayuntamiento",
  "en": "City hall",
  "ja": "市役所",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "La estación de policía",
  "en": "Police station",
  "ja": "警察署",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "El estadio",
  "en": "Stadium",
  "ja": "スタジアム",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "El teatro",
  "en": "Theater",
  "ja": "劇場",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cine",
  "en": "Cinema",
  "ja": "映画館",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "La catedral",
  "en": "Cathedral",
  "ja": "大聖堂",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "El rascacielos",
  "en": "Skyscraper",
  "ja": "高層ビル",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "La plaza",
  "en": "Square (plaza)",
  "ja": "広場",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "La calle",
  "en": "Street",
  "ja": "通り",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "La avenida",
  "en": "Avenue",
  "ja": "大通り",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "El puente",
  "en": "Bridge",
  "ja": "橋",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "La torre",
  "en": "Tower",
  "ja": "タワー",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "El monumento",
  "en": "Monument",
  "ja": "記念碑",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "El semáforo",
  "en": "Traffic light",
  "ja": "信号機",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "La acera",
  "en": "Sidewalk",
  "ja": "歩道",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "Las gafas",
  "en": "Glasses",
  "ja": "眼鏡",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El paraguas",
  "en": "Umbrella",
  "ja": "傘",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El bolso",
  "en": "Handbag",
  "ja": "バッグ",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La mochila",
  "en": "Backpack",
  "ja": "リュック",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El reloj",
  "en": "Watch/clock",
  "ja": "時計",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El collar",
  "en": "Necklace",
  "ja": "ネックレス",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El anillo",
  "en": "Ring",
  "ja": "指輪",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "Los aretes",
  "en": "Earrings",
  "ja": "ピアス/イヤリング",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La pulsera",
  "en": "Bracelet",
  "ja": "ブレスレット",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pañuelo",
  "en": "Handkerchief",
  "ja": "ハンカチ",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "Las sandalias",
  "en": "Sandals",
  "ja": "サンダル",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "Las botas",
  "en": "Boots",
  "ja": "ブーツ",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La salud",
  "en": "Health",
  "ja": "健康",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La enfermedad",
  "en": "Illness",
  "ja": "病気",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El resfriado",
  "en": "Cold (illness)",
  "ja": "風邪",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La fiebre",
  "en": "Fever",
  "ja": "発熱",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El dolor",
  "en": "Pain",
  "ja": "痛み",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La medicina",
  "en": "Medicine",
  "ja": "薬",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La pastilla",
  "en": "Pill",
  "ja": "錠剤",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La vacuna",
  "en": "Vaccine",
  "ja": "ワクチン",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La receta",
  "en": "Prescription/recipe",
  "ja": "処方箋/レシピ",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La clínica",
  "en": "Clinic",
  "ja": "クリニック",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El síntoma",
  "en": "Symptom",
  "ja": "症状",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La alergia",
  "en": "Allergy",
  "ja": "アレルギー",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cirugía",
  "en": "Surgery",
  "ja": "手術",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El yeso",
  "en": "Cast (medical)",
  "ja": "ギプス",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La venda",
  "en": "Bandage",
  "ja": "包帯",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La aduana",
  "en": "Customs",
  "ja": "税関",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "La visa",
  "en": "Visa",
  "ja": "ビザ",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El equipaje de mano",
  "en": "Carry-on luggage",
  "ja": "機内持ち込み荷物",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "La puerta de embarque",
  "en": "Boarding gate",
  "ja": "搭乗ゲート",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "La escala",
  "en": "Layover",
  "ja": "乗り継ぎ",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El mostrador",
  "en": "Counter",
  "ja": "カウンター",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "La tarjeta de embarque",
  "en": "Boarding pass",
  "ja": "搭乗券",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El destino",
  "en": "Destination",
  "ja": "目的地",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El itinerario",
  "en": "Itinerary",
  "ja": "旅程",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "La excursión",
  "en": "Excursion",
  "ja": "小旅行",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El guía turístico",
  "en": "Tour guide",
  "ja": "観光ガイド",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El mapa",
  "en": "Map",
  "ja": "地図",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "La brújula",
  "en": "Compass",
  "ja": "コンパス",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El seguro de viaje",
  "en": "Travel insurance",
  "ja": "旅行保険",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "La embajada",
  "en": "Embassy",
  "ja": "大使館",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El volcán",
  "en": "Volcano",
  "ja": "火山",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "El desierto",
  "en": "Desert",
  "ja": "砂漠",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "La isla",
  "en": "Island",
  "ja": "島",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "La costa",
  "en": "Coast",
  "ja": "海岸",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "El valle",
  "en": "Valley",
  "ja": "谷",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "La colina",
  "en": "Hill",
  "ja": "丘",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cascada",
  "en": "Waterfall",
  "ja": "滝",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "El lago",
  "en": "Lake",
  "ja": "湖",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "El glaciar",
  "en": "Glacier",
  "ja": "氷河",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "El terremoto",
  "en": "Earthquake",
  "ja": "地震",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "El huracán",
  "en": "Hurricane",
  "ja": "ハリケーン",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "La sequía",
  "en": "Drought",
  "ja": "干ばつ",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "La marea",
  "en": "Tide",
  "ja": "潮",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "El amanecer",
  "en": "Dawn",
  "ja": "夜明け",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "El atardecer",
  "en": "Sunset",
  "ja": "夕暮れ",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "El dinero",
  "en": "Money",
  "ja": "お金",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La moneda",
  "en": "Currency/coin",
  "ja": "通貨/硬貨",
  "cat": "Finanzas",
  "pos": "名詞（女性）"
 },
 {
  "es": "La tarjeta de crédito",
  "en": "Credit card",
  "ja": "クレジットカード",
  "cat": "Finanzas",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cuenta bancaria",
  "en": "Bank account",
  "ja": "銀行口座",
  "cat": "Finanzas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El cajero automático",
  "en": "ATM",
  "ja": "ATM",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El préstamo",
  "en": "Loan",
  "ja": "ローン",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El ahorro",
  "en": "Savings",
  "ja": "貯金",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La inversión",
  "en": "Investment",
  "ja": "投資",
  "cat": "Finanzas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El impuesto",
  "en": "Tax",
  "ja": "税金",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El presupuesto",
  "en": "Budget",
  "ja": "予算",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El efectivo",
  "en": "Cash",
  "ja": "現金",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cambio",
  "en": "Change (money)",
  "ja": "おつり/両替",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La factura",
  "en": "Invoice",
  "ja": "請求書",
  "cat": "Finanzas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El recibo",
  "en": "Receipt",
  "ja": "領収書",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La universidad",
  "en": "University",
  "ja": "大学",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "La carrera",
  "en": "Degree program",
  "ja": "専攻・学部課程",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "La beca",
  "en": "Scholarship",
  "ja": "奨学金",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "El examen",
  "en": "Exam",
  "ja": "試験",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "La tarea",
  "en": "Homework",
  "ja": "宿題",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "La nota",
  "en": "Grade",
  "ja": "成績",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "El título",
  "en": "Degree/title",
  "ja": "学位",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "La conferencia",
  "en": "Lecture/conference",
  "ja": "講義・会議",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "El semestre",
  "en": "Semester",
  "ja": "学期",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "La matrícula",
  "en": "Tuition/enrollment",
  "ja": "授業料・入学登録",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "El aula",
  "en": "Classroom",
  "ja": "教室",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "El pizarrón",
  "en": "Blackboard",
  "ja": "黒板",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cuaderno",
  "en": "Notebook",
  "ja": "ノート",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "El lápiz",
  "en": "Pencil",
  "ja": "鉛筆",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "La regla",
  "en": "Ruler",
  "ja": "定規",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "El golf",
  "en": "Golf",
  "ja": "ゴルフ",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El surf",
  "en": "Surfing",
  "ja": "サーフィン",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El esquí",
  "en": "Skiing",
  "ja": "スキー",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El snowboard",
  "en": "Snowboarding",
  "ja": "スノーボード",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "La escalada",
  "en": "Climbing",
  "ja": "クライミング",
  "cat": "Deportes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El voleibol",
  "en": "Volleyball",
  "ja": "バレーボール",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El rugby",
  "en": "Rugby",
  "ja": "ラグビー",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El hockey",
  "en": "Hockey",
  "ja": "ホッケー",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "Las artes marciales",
  "en": "Martial arts",
  "ja": "格闘技",
  "cat": "Deportes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El atletismo",
  "en": "Athletics/track and field",
  "ja": "陸上競技",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El círculo",
  "en": "Circle",
  "ja": "円",
  "cat": "Formas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cuadrado",
  "en": "Square (shape)",
  "ja": "正方形",
  "cat": "Formas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El triángulo",
  "en": "Triangle",
  "ja": "三角形",
  "cat": "Formas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El rectángulo",
  "en": "Rectangle",
  "ja": "長方形",
  "cat": "Formas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La línea",
  "en": "Line",
  "ja": "線",
  "cat": "Formas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El punto",
  "en": "Point/dot",
  "ja": "点",
  "cat": "Formas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El centímetro",
  "en": "Centimeter",
  "ja": "センチメートル",
  "cat": "Formas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El kilómetro",
  "en": "Kilometer",
  "ja": "キロメートル",
  "cat": "Formas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El litro",
  "en": "Liter",
  "ja": "リットル",
  "cat": "Formas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El kilogramo",
  "en": "Kilogram",
  "ja": "キログラム",
  "cat": "Formas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La docena",
  "en": "Dozen",
  "ja": "1ダース",
  "cat": "Formas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El par",
  "en": "Pair",
  "ja": "一組",
  "cat": "Formas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La mitad",
  "en": "Half",
  "ja": "半分",
  "cat": "Formas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El doble",
  "en": "Double",
  "ja": "二倍",
  "cat": "Formas",
  "pos": "名詞（男性）"
 },
 {
  "es": "¡Qué padre!",
  "en": "How cool! (Mexican)",
  "ja": "かっこいい！（メキシコ表現）",
  "cat": "Interjecciones",
  "nivel": "avanzado",
  "pos": "感嘆詞"
 },
 {
  "es": "¡Ay!",
  "en": "Ouch! / Oh!",
  "ja": "痛っ！/あら",
  "cat": "Interjecciones",
  "pos": "感嘆詞"
 },
 {
  "es": "¡Uf!",
  "en": "Ugh! / Phew!",
  "ja": "うわ〜/ふう",
  "cat": "Interjecciones",
  "pos": "感嘆詞"
 },
 {
  "es": "¡Vaya!",
  "en": "Wow! / Well!",
  "ja": "おやおや",
  "cat": "Interjecciones",
  "pos": "感嘆詞"
 },
 {
  "es": "¡Ojalá!",
  "en": "I hope so!",
  "ja": "そうだといいな！",
  "cat": "Interjecciones",
  "pos": "感嘆詞"
 },
 {
  "es": "¡Ánimo!",
  "en": "Cheer up! / You can do it!",
  "ja": "頑張れ！",
  "cat": "Interjecciones",
  "pos": "感嘆詞"
 },
 {
  "es": "¡Cuidado!",
  "en": "Careful!",
  "ja": "気をつけて！",
  "cat": "Interjecciones",
  "pos": "感嘆詞"
 },
 {
  "es": "¡Salud!",
  "en": "Cheers! / Bless you!",
  "ja": "乾杯！/お大事に",
  "cat": "Interjecciones",
  "pos": "感嘆詞"
 },
 {
  "es": "¡Auxilio!",
  "en": "Help!",
  "ja": "助けて！",
  "cat": "Interjecciones",
  "pos": "感嘆詞"
 },
 {
  "es": "Primero",
  "en": "First",
  "ja": "まず",
  "cat": "Conectores",
  "nivel": "fácil",
  "pos": "接続詞"
 },
 {
  "es": "Luego",
  "en": "Then",
  "ja": "それから",
  "cat": "Conectores",
  "nivel": "fácil",
  "pos": "接続詞"
 },
 {
  "es": "Finalmente",
  "en": "Finally",
  "ja": "最後に",
  "cat": "Conectores",
  "nivel": "fácil",
  "pos": "接続詞"
 },
 {
  "es": "Por otro lado",
  "en": "On the other hand",
  "ja": "一方で",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "En resumen",
  "en": "In summary",
  "ja": "要約すると",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "Por ejemplo",
  "en": "For example",
  "ja": "例えば",
  "cat": "Conectores",
  "nivel": "fácil",
  "pos": "接続詞"
 },
 {
  "es": "Es decir",
  "en": "That is to say",
  "ja": "つまり",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "Al contrario",
  "en": "On the contrary",
  "ja": "逆に",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "Mientras tanto",
  "en": "Meanwhile",
  "ja": "その間に",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "En conclusión",
  "en": "In conclusion",
  "ja": "結論として",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "Agradecido",
  "en": "Grateful",
  "ja": "感謝している",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Aliviado",
  "en": "Relieved",
  "ja": "ほっとしている",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Confundido",
  "en": "Confused",
  "ja": "混乱している",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Decepcionado",
  "en": "Disappointed",
  "ja": "がっかりしている",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Esperanzado",
  "en": "Hopeful",
  "ja": "希望を持っている",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Satisfecho",
  "en": "Satisfied",
  "ja": "満足している",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Inseguro",
  "en": "Insecure/unsure",
  "ja": "自信がない",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Seguro de sí mismo",
  "en": "Self-confident",
  "ja": "自信がある",
  "cat": "Emociones",
  "pos": "表現"
 },
 {
  "es": "Entusiasmado",
  "en": "Enthusiastic",
  "ja": "意欲的な",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Indiferente",
  "en": "Indifferent",
  "ja": "無関心な",
  "cat": "Emociones",
  "pos": "形容詞"
 },
 {
  "es": "Peinarse",
  "en": "To comb one's hair",
  "ja": "髪をとかす",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Maquillarse",
  "en": "To put on makeup",
  "ja": "化粧をする",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Afeitarse",
  "en": "To shave",
  "ja": "ひげを剃る",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Cepillarse los dientes",
  "en": "To brush one's teeth",
  "ja": "歯を磨く",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Vestirse",
  "en": "To get dressed",
  "ja": "服を着る",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Quitarse",
  "en": "To take off (clothes)",
  "ja": "脱ぐ",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Ponerse",
  "en": "To put on (clothes)",
  "ja": "着る/身につける",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Sentarse",
  "en": "To sit down",
  "ja": "座る",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Pararse",
  "en": "To stand up",
  "ja": "立つ",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Quedarse",
  "en": "To stay",
  "ja": "とどまる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Añadir",
  "en": "To add",
  "ja": "加える",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Quitar",
  "en": "To remove",
  "ja": "取り除く",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Mezclar",
  "en": "To mix",
  "ja": "混ぜる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Cortar",
  "en": "To cut",
  "ja": "切る",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Cocinar",
  "en": "To cook",
  "ja": "料理する",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Hervir",
  "en": "To boil",
  "ja": "煮る/沸かす",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Freír",
  "en": "To fry",
  "ja": "揚げる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Hornear",
  "en": "To bake",
  "ja": "オーブンで焼く",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Calentar",
  "en": "To heat",
  "ja": "温める",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Enfriar",
  "en": "To cool",
  "ja": "冷やす",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Limpiar",
  "en": "To clean",
  "ja": "掃除する",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Ordenar",
  "en": "To tidy up / order",
  "ja": "片付ける/注文する",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Reparar",
  "en": "To repair",
  "ja": "修理する",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Construir",
  "en": "To build",
  "ja": "建てる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Destruir",
  "en": "To destroy",
  "ja": "破壊する",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Pintar",
  "en": "To paint",
  "ja": "塗る/絵を描く",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Dibujar",
  "en": "To draw",
  "ja": "絵を描く",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Cantar",
  "en": "To sing",
  "ja": "歌う",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Bailar",
  "en": "To dance",
  "ja": "踊る",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Saltar",
  "en": "To jump",
  "ja": "跳ぶ",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Caminar",
  "en": "To walk",
  "ja": "歩く",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Subir",
  "en": "To go up",
  "ja": "上がる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Bajar",
  "en": "To go down",
  "ja": "下がる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Entrar",
  "en": "To enter",
  "ja": "入る",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Salir",
  "en": "To go out",
  "ja": "出る",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Llegar",
  "en": "To arrive",
  "ja": "到着する",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Regresar",
  "en": "To return",
  "ja": "戻る",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Volver",
  "en": "To come back",
  "ja": "帰ってくる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Redondo",
  "en": "Round",
  "ja": "丸い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Ancho",
  "en": "Wide",
  "ja": "幅広い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Estrecho",
  "en": "Narrow",
  "ja": "狭い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Profundo",
  "en": "Deep",
  "ja": "深い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Plano",
  "en": "Flat",
  "ja": "平らな",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Suave",
  "en": "Soft/smooth",
  "ja": "柔らかい",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Áspero",
  "en": "Rough",
  "ja": "ざらざらした",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Brillante",
  "en": "Bright/shiny",
  "ja": "輝いている",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Oscuro",
  "en": "Dark",
  "ja": "暗い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Claro",
  "en": "Clear/light",
  "ja": "明るい/明確な",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Transparente",
  "en": "Transparent",
  "ja": "透明な",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Ligero",
  "en": "Light (weight)",
  "ja": "軽い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Pesado",
  "en": "Heavy",
  "ja": "重い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Flexible",
  "en": "Flexible",
  "ja": "柔軟な",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Rígido",
  "en": "Rigid",
  "ja": "硬直した",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Seco",
  "en": "Dry",
  "ja": "乾いた",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Caliente",
  "en": "Hot",
  "ja": "熱い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Tibio",
  "en": "Lukewarm",
  "ja": "ぬるい",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Maduro",
  "en": "Ripe/mature",
  "ja": "熟した",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Fresco",
  "en": "Fresh",
  "ja": "新鮮な",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "El delfín",
  "en": "Dolphin",
  "ja": "イルカ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "La ballena",
  "en": "Whale",
  "ja": "クジラ",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "El tiburón",
  "en": "Shark",
  "ja": "サメ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El pulpo",
  "en": "Octopus",
  "ja": "タコ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "La estrella de mar",
  "en": "Starfish",
  "ja": "ヒトデ",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "El cangrejo",
  "en": "Crab",
  "ja": "カニ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "La medusa",
  "en": "Jellyfish",
  "ja": "クラゲ",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "La tortuga",
  "en": "Turtle",
  "ja": "カメ",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "La mariposa",
  "en": "Butterfly",
  "ja": "蝶",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "La abeja",
  "en": "Bee",
  "ja": "ハチ",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "La hormiga",
  "en": "Ant",
  "ja": "アリ",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "La araña",
  "en": "Spider",
  "ja": "クモ",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "El mosquito",
  "en": "Mosquito",
  "ja": "蚊",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "La mosca",
  "en": "Fly",
  "ja": "ハエ",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "El caracol",
  "en": "Snail",
  "ja": "かたつむり",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El águila",
  "en": "Eagle",
  "ja": "ワシ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El búho",
  "en": "Owl",
  "ja": "フクロウ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El loro",
  "en": "Parrot",
  "ja": "オウム",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El pingüino",
  "en": "Penguin",
  "ja": "ペンギン",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El pavo",
  "en": "Turkey",
  "ja": "七面鳥",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El gallo",
  "en": "Rooster",
  "ja": "おんどり",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "La gallina",
  "en": "Hen",
  "ja": "めんどり",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pato",
  "en": "Duck",
  "ja": "アヒル",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cisne",
  "en": "Swan",
  "ja": "白鳥",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "La paloma",
  "en": "Pigeon",
  "ja": "ハト",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "El zorro",
  "en": "Fox",
  "ja": "キツネ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El lobo",
  "en": "Wolf",
  "ja": "オオカミ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El ciervo",
  "en": "Deer",
  "ja": "シカ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El canguro",
  "en": "Kangaroo",
  "ja": "カンガルー",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "La jirafa",
  "en": "Giraffe",
  "ja": "キリン",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "El rinoceronte",
  "en": "Rhinoceros",
  "ja": "サイ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El hipopótamo",
  "en": "Hippopotamus",
  "ja": "カバ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cocodrilo",
  "en": "Crocodile",
  "ja": "ワニ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El camello",
  "en": "Camel",
  "ja": "ラクダ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cebra",
  "en": "Zebra",
  "ja": "シマウマ",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "El panda",
  "en": "Panda",
  "ja": "パンダ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El koala",
  "en": "Koala",
  "ja": "コアラ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El murciélago",
  "en": "Bat",
  "ja": "コウモリ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "La ardilla",
  "en": "Squirrel",
  "ja": "リス",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "El algodón",
  "en": "Cotton",
  "ja": "綿",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La seda",
  "en": "Silk",
  "ja": "絹",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El cuero",
  "en": "Leather",
  "ja": "革",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La tela",
  "en": "Fabric",
  "ja": "生地",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El traje formal",
  "en": "Formal suit",
  "ja": "フォーマルスーツ",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El uniforme",
  "en": "Uniform",
  "ja": "制服",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La bata",
  "en": "Robe",
  "ja": "ガウン",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El chaleco",
  "en": "Vest",
  "ja": "ベスト",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La inteligencia artificial",
  "en": "Artificial intelligence",
  "ja": "人工知能",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El robot",
  "en": "Robot",
  "ja": "ロボット",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El dron",
  "en": "Drone",
  "ja": "ドローン",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La realidad virtual",
  "en": "Virtual reality",
  "ja": "バーチャルリアリティ",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El satélite",
  "en": "Satellite",
  "ja": "人工衛星",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El servidor",
  "en": "Server",
  "ja": "サーバー",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La base de datos",
  "en": "Database",
  "ja": "データベース",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El código",
  "en": "Code",
  "ja": "コード",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El programador",
  "en": "Programmer",
  "ja": "プログラマー",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La impresora",
  "en": "Printer",
  "ja": "プリンター",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El teclado",
  "en": "Keyboard",
  "ja": "キーボード",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "Los auriculares",
  "en": "Headphones",
  "ja": "ヘッドホン",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El gobierno",
  "en": "Government",
  "ja": "政府",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "El presidente",
  "en": "President",
  "ja": "大統領",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "El ciudadano",
  "en": "Citizen",
  "ja": "市民",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "La ley",
  "en": "Law",
  "ja": "法律",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El derecho",
  "en": "Right (legal)",
  "ja": "権利",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "La elección",
  "en": "Election",
  "ja": "選挙",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El voto",
  "en": "Vote",
  "ja": "投票",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "El congreso",
  "en": "Congress",
  "ja": "議会",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "La constitución",
  "en": "Constitution",
  "ja": "憲法",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "La comunidad",
  "en": "Community",
  "ja": "地域社会",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "La Navidad",
  "en": "Christmas",
  "ja": "クリスマス",
  "cat": "Festividades",
  "pos": "名詞（女性）"
 },
 {
  "es": "La Semana Santa",
  "en": "Holy Week",
  "ja": "聖週間",
  "cat": "Festividades",
  "pos": "名詞（女性）"
 },
 {
  "es": "El Año Nuevo",
  "en": "New Year",
  "ja": "新年",
  "cat": "Festividades",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cumpleaños",
  "en": "Birthday",
  "ja": "誕生日",
  "cat": "Festividades",
  "pos": "名詞（男性）"
 },
 {
  "es": "La boda",
  "en": "Wedding",
  "ja": "結婚式",
  "cat": "Festividades",
  "pos": "名詞（女性）"
 },
 {
  "es": "El carnaval",
  "en": "Carnival",
  "ja": "カーニバル",
  "cat": "Festividades",
  "pos": "名詞（男性）"
 },
 {
  "es": "El circo",
  "en": "Circus",
  "ja": "サーカス",
  "cat": "Festividades",
  "pos": "名詞（男性）"
 },
 {
  "es": "La piel",
  "en": "Skin",
  "ja": "肌",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "La uña",
  "en": "Nail (finger)",
  "ja": "爪",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El músculo",
  "en": "Muscle",
  "ja": "筋肉",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El hueso",
  "en": "Bone",
  "ja": "骨",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La sangre",
  "en": "Blood",
  "ja": "血",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pulmón",
  "en": "Lung",
  "ja": "肺",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El hígado",
  "en": "Liver",
  "ja": "肝臓",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cerebro",
  "en": "Brain",
  "ja": "脳",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cintura",
  "en": "Waist",
  "ja": "腰",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El tobillo",
  "en": "Ankle",
  "ja": "足首",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El consulado",
  "en": "Consulate",
  "ja": "領事館",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "La oficina de correos",
  "en": "Post office",
  "ja": "郵便局",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "La estación de bomberos",
  "en": "Fire station",
  "ja": "消防署",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "El zoológico",
  "en": "Zoo",
  "ja": "動物園",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "El acuario",
  "en": "Aquarium",
  "ja": "水族館",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "El planetario",
  "en": "Planetarium",
  "ja": "プラネタリウム",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "El observatorio",
  "en": "Observatory",
  "ja": "天文台",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "La olla",
  "en": "Pot",
  "ja": "鍋",
  "cat": "Cocina",
  "pos": "名詞（女性）"
 },
 {
  "es": "El cuchillo",
  "en": "Knife",
  "ja": "包丁",
  "cat": "Cocina",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cuchara",
  "en": "Spoon",
  "ja": "スプーン",
  "cat": "Cocina",
  "pos": "名詞（女性）"
 },
 {
  "es": "El tenedor",
  "en": "Fork",
  "ja": "フォーク",
  "cat": "Cocina",
  "pos": "名詞（男性）"
 },
 {
  "es": "El plato",
  "en": "Plate",
  "ja": "皿",
  "cat": "Cocina",
  "pos": "名詞（男性）"
 },
 {
  "es": "El vaso",
  "en": "Glass (cup)",
  "ja": "コップ",
  "cat": "Cocina",
  "pos": "名詞（男性）"
 },
 {
  "es": "La taza",
  "en": "Mug/cup",
  "ja": "マグカップ",
  "cat": "Cocina",
  "pos": "名詞（女性）"
 },
 {
  "es": "La tetera",
  "en": "Teapot/kettle",
  "ja": "ティーポット",
  "cat": "Cocina",
  "pos": "名詞（女性）"
 },
 {
  "es": "La licuadora",
  "en": "Blender",
  "ja": "ミキサー",
  "cat": "Cocina",
  "pos": "名詞（女性）"
 },
 {
  "es": "El abrelatas",
  "en": "Can opener",
  "ja": "缶切り",
  "cat": "Cocina",
  "pos": "名詞（男性）"
 },
 {
  "es": "El colador",
  "en": "Strainer",
  "ja": "ざる",
  "cat": "Cocina",
  "pos": "名詞（男性）"
 },
 {
  "es": "La tabla de cortar",
  "en": "Cutting board",
  "ja": "まな板",
  "cat": "Cocina",
  "pos": "名詞（女性）"
 },
 {
  "es": "El delantal",
  "en": "Apron",
  "ja": "エプロン",
  "cat": "Cocina",
  "pos": "名詞（男性）"
 },
 {
  "es": "La parrilla",
  "en": "Grill",
  "ja": "グリル",
  "cat": "Cocina",
  "pos": "名詞（女性）"
 },
 {
  "es": "La tienda",
  "en": "Store",
  "ja": "店",
  "cat": "Compras",
  "pos": "名詞（女性）"
 },
 {
  "es": "El centro comercial",
  "en": "Mall",
  "ja": "ショッピングモール",
  "cat": "Compras",
  "pos": "名詞（男性）"
 },
 {
  "es": "La caja",
  "en": "Checkout/cashier",
  "ja": "レジ",
  "cat": "Compras",
  "pos": "名詞（女性）"
 },
 {
  "es": "El probador",
  "en": "Fitting room",
  "ja": "試着室",
  "cat": "Compras",
  "pos": "名詞（男性）"
 },
 {
  "es": "La oferta",
  "en": "Sale/offer",
  "ja": "セール",
  "cat": "Compras",
  "pos": "名詞（女性）"
 },
 {
  "es": "El descuento",
  "en": "Discount",
  "ja": "割引",
  "cat": "Compras",
  "pos": "名詞（男性）"
 },
 {
  "es": "La talla",
  "en": "Size (clothes)",
  "ja": "サイズ",
  "cat": "Compras",
  "pos": "名詞（女性）"
 },
 {
  "es": "La etiqueta",
  "en": "Label/tag",
  "ja": "タグ",
  "cat": "Compras",
  "pos": "名詞（女性）"
 },
 {
  "es": "El carrito",
  "en": "Shopping cart",
  "ja": "カート",
  "cat": "Compras",
  "pos": "名詞（男性）"
 },
 {
  "es": "La bolsa",
  "en": "Bag",
  "ja": "袋",
  "cat": "Compras",
  "pos": "名詞（女性）"
 },
 {
  "es": "El siglo",
  "en": "Century",
  "ja": "世紀",
  "cat": "Frecuencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La década",
  "en": "Decade",
  "ja": "10年間",
  "cat": "Frecuencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "La temporada",
  "en": "Season (period)",
  "ja": "シーズン",
  "cat": "Frecuencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "La medianoche",
  "en": "Midnight",
  "ja": "真夜中",
  "cat": "Frecuencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El mediodía",
  "en": "Noon",
  "ja": "正午",
  "cat": "Frecuencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La fecha",
  "en": "Date",
  "ja": "日付",
  "cat": "Frecuencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El calendario",
  "en": "Calendar",
  "ja": "カレンダー",
  "cat": "Frecuencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cronómetro",
  "en": "Stopwatch",
  "ja": "ストップウォッチ",
  "cat": "Frecuencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "El plazo",
  "en": "Deadline",
  "ja": "期限",
  "cat": "Frecuencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La sombra",
  "en": "Shadow",
  "ja": "影",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "La luz",
  "en": "Light",
  "ja": "光",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（女性）"
 },
 {
  "es": "El ruido",
  "en": "Noise",
  "ja": "騒音",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（男性）"
 },
 {
  "es": "El silencio",
  "en": "Silence",
  "ja": "静けさ",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La voz",
  "en": "Voice",
  "ja": "声",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（女性）"
 },
 {
  "es": "El sonido",
  "en": "Sound",
  "ja": "音",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（男性）"
 },
 {
  "es": "La imagen",
  "en": "Image",
  "ja": "画像",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El sabor",
  "en": "Flavor",
  "ja": "味",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（男性）"
 },
 {
  "es": "El olor",
  "en": "Smell",
  "ja": "匂い",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（男性）"
 },
 {
  "es": "La textura",
  "en": "Texture",
  "ja": "質感",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "La superficie",
  "en": "Surface",
  "ja": "表面",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El borde",
  "en": "Edge",
  "ja": "へり・端",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El centro",
  "en": "Center",
  "ja": "中心",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "El principio",
  "en": "Beginning",
  "ja": "始まり",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（男性）"
 },
 {
  "es": "El final",
  "en": "End",
  "ja": "終わり",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（男性）"
 },
 {
  "es": "El resto",
  "en": "The rest",
  "ja": "残り",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El conjunto",
  "en": "Set/group",
  "ja": "集合",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El grupo",
  "en": "Group",
  "ja": "グループ",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（男性）"
 },
 {
  "es": "La lista",
  "en": "List",
  "ja": "リスト",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（女性）"
 },
 {
  "es": "El ejemplo",
  "en": "Example",
  "ja": "例",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（男性）"
 },
 {
  "es": "La razón",
  "en": "Reason",
  "ja": "理由",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（女性）"
 },
 {
  "es": "El motivo",
  "en": "Motive",
  "ja": "動機",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La solución",
  "en": "Solution",
  "ja": "解決策",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El problema",
  "en": "Problem",
  "ja": "問題",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（男性）"
 },
 {
  "es": "La pregunta",
  "en": "Question",
  "ja": "質問",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（女性）"
 },
 {
  "es": "La respuesta",
  "en": "Answer",
  "ja": "答え",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（女性）"
 },
 {
  "es": "La duda",
  "en": "Doubt",
  "ja": "疑問",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "La opinión",
  "en": "Opinion",
  "ja": "意見",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "La ventaja",
  "en": "Advantage",
  "ja": "利点",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "La desventaja",
  "en": "Disadvantage",
  "ja": "欠点",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El martillo",
  "en": "Hammer",
  "ja": "ハンマー",
  "cat": "Herramientas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El destornillador",
  "en": "Screwdriver",
  "ja": "ドライバー",
  "cat": "Herramientas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La llave inglesa",
  "en": "Wrench",
  "ja": "レンチ",
  "cat": "Herramientas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El taladro",
  "en": "Drill",
  "ja": "ドリル",
  "cat": "Herramientas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La sierra",
  "en": "Saw",
  "ja": "のこぎり",
  "cat": "Herramientas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El clavo",
  "en": "Nail (hardware)",
  "ja": "釘",
  "cat": "Herramientas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El tornillo",
  "en": "Screw",
  "ja": "ねじ",
  "cat": "Herramientas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cinta métrica",
  "en": "Tape measure",
  "ja": "巻き尺",
  "cat": "Herramientas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pegamento",
  "en": "Glue",
  "ja": "接着剤",
  "cat": "Herramientas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cuerda",
  "en": "Rope",
  "ja": "ロープ",
  "cat": "Herramientas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El candado",
  "en": "Padlock",
  "ja": "南京錠",
  "cat": "Herramientas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La llave",
  "en": "Key",
  "ja": "鍵",
  "cat": "Herramientas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El gancho",
  "en": "Hook",
  "ja": "フック",
  "cat": "Herramientas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La manguera",
  "en": "Hose",
  "ja": "ホース",
  "cat": "Herramientas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El bolígrafo",
  "en": "Pen",
  "ja": "ボールペン",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "El marcador",
  "en": "Marker",
  "ja": "マーカー",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "La grapadora",
  "en": "Stapler",
  "ja": "ホッチキス",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "El clip",
  "en": "Paper clip",
  "ja": "クリップ",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "La calculadora",
  "en": "Calculator",
  "ja": "電卓",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "El sobre",
  "en": "Envelope",
  "ja": "封筒",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "El sello",
  "en": "Stamp/seal",
  "ja": "切手・印",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "La agenda",
  "en": "Planner/agenda",
  "ja": "手帳",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "El archivador",
  "en": "Filing cabinet",
  "ja": "書類棚",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "El taco",
  "en": "Taco",
  "ja": "タコス",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La quesadilla",
  "en": "Quesadilla",
  "ja": "ケサディーヤ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El burrito",
  "en": "Burrito",
  "ja": "ブリトー",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El tamal",
  "en": "Tamale",
  "ja": "タマル",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El mole",
  "en": "Mole (sauce)",
  "ja": "モーレ（ソース）",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La tortilla",
  "en": "Tortilla",
  "ja": "トルティーヤ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pozole",
  "en": "Pozole",
  "ja": "ポソレ",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El guacamole",
  "en": "Guacamole",
  "ja": "ワカモレ",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La salsa",
  "en": "Sauce/salsa",
  "ja": "サルサ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La selva",
  "en": "Jungle",
  "ja": "ジャングル",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pantano",
  "en": "Swamp",
  "ja": "沼地",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "El arrecife",
  "en": "Reef",
  "ja": "サンゴ礁",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cueva",
  "en": "Cave",
  "ja": "洞窟",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "El acantilado",
  "en": "Cliff",
  "ja": "崖",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "La pradera",
  "en": "Prairie",
  "ja": "草原",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "El manantial",
  "en": "Spring (water source)",
  "ja": "泉",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "El oasis",
  "en": "Oasis",
  "ja": "オアシス",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cordillera",
  "en": "Mountain range",
  "ja": "山脈",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "La vela",
  "en": "Candle",
  "ja": "ろうそく",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La linterna",
  "en": "Flashlight",
  "ja": "懐中電灯",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El fósforo",
  "en": "Match (fire)",
  "ja": "マッチ",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "Sí",
  "en": "Yes",
  "ja": "はい",
  "cat": "Frases",
  "pos": "副詞"
 },
 {
  "es": "No",
  "en": "No",
  "ja": "いいえ",
  "cat": "Frases",
  "pos": "副詞"
 },
 {
  "es": "Hacer",
  "en": "To do / To make",
  "ja": "する・作る",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "El día",
  "en": "Day",
  "ja": "日",
  "cat": "Frecuencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La noche",
  "en": "Night",
  "ja": "夜",
  "cat": "Frecuencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El café",
  "en": "Coffee / Café",
  "ja": "コーヒー・喫茶店",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El agua",
  "en": "Water",
  "ja": "水",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El amor",
  "en": "Love",
  "ja": "愛",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "Bueno",
  "en": "Good",
  "ja": "良い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Malo",
  "en": "Bad",
  "ja": "悪い",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Vivir",
  "en": "To live",
  "ja": "住む・生きる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "El amigo",
  "en": "Friend",
  "ja": "友達",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El tiempo",
  "en": "Time / Weather",
  "ja": "時間・天気",
  "cat": "Frecuencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La familia",
  "en": "Family",
  "ja": "家族",
  "cat": "Familia",
  "pos": "名詞（女性）"
 },
 {
  "es": "Estar en la luna",
  "en": "To be daydreaming / spaced out",
  "ja": "ぼーっとしている（直訳：月にいる）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Poner los puntos sobre las íes",
  "en": "To make things crystal clear",
  "ja": "細部まではっきりさせる（直訳：iの上に点を打つ）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Írsele el santo al cielo",
  "en": "To completely forget something",
  "ja": "すっかり忘れる（直訳：聖人が天に行ってしまう）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Tirar la toalla",
  "en": "To throw in the towel",
  "ja": "あきらめる",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Estar hecho polvo",
  "en": "To be exhausted",
  "ja": "くたくたに疲れている（直訳：ほこりになっている）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "No dar pie con bola",
  "en": "To do everything wrong",
  "ja": "何をやってもうまくいかない",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Ser uña y carne",
  "en": "To be inseparable (close friends)",
  "ja": "切っても切れない仲（直訳：爪と肉）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Tomar el toro por los cuernos",
  "en": "To take the bull by the horns",
  "ja": "正面から立ち向かう",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Costar un huevo",
  "en": "To cost a fortune",
  "ja": "ものすごく高い（口語）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Estar pez en algo",
  "en": "To be clueless about something",
  "ja": "まったく知識がない（直訳：魚である）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Írsele la olla",
  "en": "To lose one's mind / go crazy",
  "ja": "頭がおかしくなる（口語）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Dar la lata",
  "en": "To be annoying / bother someone",
  "ja": "うるさく迷惑をかける",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Ponerse las botas",
  "en": "To make the most of something / feast",
  "ja": "思う存分楽しむ・たらふく食べる",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Estar en pañales",
  "en": "To be in its infancy",
  "ja": "まだ始まったばかりである（直訳：おむつをしている）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Salirse con la suya",
  "en": "To get one's own way",
  "ja": "自分の思い通りにする",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Ser el pan de cada día",
  "en": "To be an everyday occurrence",
  "ja": "日常茶飯事である",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Meter la cuchara",
  "en": "To butt into a conversation",
  "ja": "口を挟む（直訳：スプーンを入れる）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Dar en el blanco",
  "en": "To hit the target exactly",
  "ja": "的を射る",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "No tener ni pies ni cabeza",
  "en": "To make no sense at all",
  "ja": "まったく筋が通らない",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "Ser la gota que colma el vaso",
  "en": "To be the last straw",
  "ja": "我慢の限界を超えるきっかけ（直訳：コップを溢れさせる一滴）",
  "cat": "Modismos",
  "nivel": "avanzado",
  "pos": "熟語"
 },
 {
  "es": "No obstante",
  "en": "Nevertheless",
  "ja": "それにもかかわらず",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "Por consiguiente",
  "en": "Consequently",
  "ja": "したがって",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "Cabe destacar que",
  "en": "It is worth noting that",
  "ja": "特筆すべきは",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "A grandes rasgos",
  "en": "Broadly speaking",
  "ja": "大まかに言うと",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "En términos generales",
  "en": "Generally speaking",
  "ja": "一般的に言えば",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "Dicho de otro modo",
  "en": "In other words",
  "ja": "言い換えると",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "A fin de cuentas",
  "en": "At the end of the day / all things considered",
  "ja": "結局のところ",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "Huelga decir que",
  "en": "It goes without saying that",
  "ja": "言うまでもなく",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "Ni que decir tiene",
  "en": "Needless to say",
  "ja": "言うまでもなく",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "A raíz de",
  "en": "As a result of / stemming from",
  "ja": "〜がきっかけで",
  "cat": "Preposiciones",
  "nivel": "avanzado",
  "pos": "前置詞"
 },
 {
  "es": "En vísperas de",
  "en": "On the eve of",
  "ja": "〜の直前に",
  "cat": "Preposiciones",
  "nivel": "avanzado",
  "pos": "前置詞"
 },
 {
  "es": "De ahora en adelante",
  "en": "From now on",
  "ja": "これからは",
  "cat": "Conectores",
  "nivel": "avanzado",
  "pos": "接続詞"
 },
 {
  "es": "A todas luces",
  "en": "Clearly / evidently",
  "ja": "明らかに",
  "cat": "Preposiciones",
  "nivel": "avanzado",
  "pos": "前置詞"
 },
 {
  "es": "Bajo ningún concepto",
  "en": "Under no circumstances",
  "ja": "いかなる場合も〜ない",
  "cat": "Preposiciones",
  "nivel": "avanzado",
  "pos": "前置詞"
 },
 {
  "es": "Con creces",
  "en": "By far / more than enough",
  "ja": "十分すぎるほど",
  "cat": "Preposiciones",
  "nivel": "avanzado",
  "pos": "前置詞"
 },
 {
  "es": "La incertidumbre",
  "en": "Uncertainty",
  "ja": "不確実性",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（女性）"
 },
 {
  "es": "La contradicción",
  "en": "Contradiction",
  "ja": "矛盾",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（女性）"
 },
 {
  "es": "La ambigüedad",
  "en": "Ambiguity",
  "ja": "曖昧さ",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（女性）"
 },
 {
  "es": "La coherencia",
  "en": "Coherence",
  "ja": "一貫性",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（女性）"
 },
 {
  "es": "El matiz",
  "en": "Nuance",
  "ja": "ニュアンス",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（男性）"
 },
 {
  "es": "La trascendencia",
  "en": "Significance / transcendence",
  "ja": "重要性・超越性",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（女性）"
 },
 {
  "es": "El trasfondo",
  "en": "Background / underlying context",
  "ja": "背景",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（男性）"
 },
 {
  "es": "La perspectiva",
  "en": "Perspective",
  "ja": "視点",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（女性）"
 },
 {
  "es": "El prejuicio",
  "en": "Prejudice",
  "ja": "偏見",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（男性）"
 },
 {
  "es": "La percepción",
  "en": "Perception",
  "ja": "知覚",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（女性）"
 },
 {
  "es": "El dilema",
  "en": "Dilemma",
  "ja": "ジレンマ",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（男性）"
 },
 {
  "es": "La controversia",
  "en": "Controversy",
  "ja": "論争",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（女性）"
 },
 {
  "es": "El consenso",
  "en": "Consensus",
  "ja": "合意",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（男性）"
 },
 {
  "es": "La discrepancia",
  "en": "Discrepancy",
  "ja": "食い違い",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（女性）"
 },
 {
  "es": "El escepticismo",
  "en": "Skepticism",
  "ja": "懐疑主義",
  "cat": "General",
  "nivel": "avanzado",
  "pos": "名詞（男性）"
 },
 {
  "es": "Profundizar",
  "en": "To delve deeper into",
  "ja": "深く掘り下げる",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Plantear",
  "en": "To raise (an issue) / propose",
  "ja": "提起する",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Abordar",
  "en": "To address / tackle (a topic)",
  "ja": "取り組む",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Constatar",
  "en": "To confirm / verify",
  "ja": "確認する",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Reflexionar",
  "en": "To reflect / ponder",
  "ja": "熟考する",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Suscitar",
  "en": "To provoke / give rise to",
  "ja": "引き起こす",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Prevalecer",
  "en": "To prevail",
  "ja": "優勢である",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Discrepar",
  "en": "To disagree",
  "ja": "意見が食い違う",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Matizar",
  "en": "To qualify / add nuance",
  "ja": "ニュアンスを加える",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "Desencadenar",
  "en": "To trigger / set off",
  "ja": "引き起こす（連鎖的に）",
  "cat": "Verbos",
  "nivel": "avanzado",
  "pos": "動詞"
 },
 {
  "es": "La rutina",
  "en": "Routine",
  "ja": "日課",
  "cat": "Frecuencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El despertador",
  "en": "Alarm clock",
  "ja": "目覚まし時計",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La ducha",
  "en": "Shower",
  "ja": "シャワー",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El cepillo de dientes",
  "en": "Toothbrush",
  "ja": "歯ブラシ",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La siesta",
  "en": "Nap",
  "ja": "昼寝",
  "cat": "Frecuencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El descanso",
  "en": "Rest / break",
  "ja": "休憩",
  "cat": "Frecuencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La merienda",
  "en": "Afternoon snack",
  "ja": "おやつ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El horario de trabajo",
  "en": "Work schedule",
  "ja": "勤務時間",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La lista de tareas",
  "en": "To-do list",
  "ja": "タスクリスト",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El fin de semana",
  "en": "Weekend",
  "ja": "週末",
  "cat": "Frecuencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "El día libre",
  "en": "Day off",
  "ja": "休みの日",
  "cat": "Frecuencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La costumbre",
  "en": "Habit / custom",
  "ja": "習慣",
  "cat": "Frecuencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "La noticia",
  "en": "News (item)",
  "ja": "ニュース",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（女性）"
 },
 {
  "es": "El periódico",
  "en": "Newspaper",
  "ja": "新聞",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（男性）"
 },
 {
  "es": "La revista",
  "en": "Magazine",
  "ja": "雑誌",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El canal",
  "en": "Channel",
  "ja": "チャンネル",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El anuncio",
  "en": "Advertisement / announcement",
  "ja": "広告・お知らせ",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La emisora",
  "en": "Radio station",
  "ja": "放送局",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El titular",
  "en": "Headline",
  "ja": "見出し",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La transmisión",
  "en": "Broadcast",
  "ja": "放送",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El podcast",
  "en": "Podcast",
  "ja": "ポッドキャスト",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El vecino",
  "en": "Neighbor",
  "ja": "隣人",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "La vecindad",
  "en": "Neighborhood",
  "ja": "近隣",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "La costumbre social",
  "en": "Social custom",
  "ja": "社会習慣",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El voluntariado",
  "en": "Volunteering",
  "ja": "ボランティア活動",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "La generación",
  "en": "Generation",
  "ja": "世代",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "La igualdad",
  "en": "Equality",
  "ja": "平等",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "La diversidad",
  "en": "Diversity",
  "ja": "多様性",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "La emergencia",
  "en": "Emergency",
  "ja": "緊急事態",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La ambulancia",
  "en": "Ambulance",
  "ja": "救急車",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El accidente",
  "en": "Accident",
  "ja": "事故",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "El incendio",
  "en": "Fire (blaze)",
  "ja": "火事",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La evacuación",
  "en": "Evacuation",
  "ja": "避難",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El extintor",
  "en": "Fire extinguisher",
  "ja": "消火器",
  "cat": "Herramientas",
  "pos": "名詞（男性）"
 },
 {
  "es": "Los primeros auxilios",
  "en": "First aid",
  "ja": "応急処置",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La sala de emergencias",
  "en": "Emergency room",
  "ja": "救急外来",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El peligro",
  "en": "Danger",
  "ja": "危険",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La seguridad",
  "en": "Safety / security",
  "ja": "安全",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El gorro",
  "en": "Beanie / winter hat",
  "ja": "ニット帽",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "Las botas de nieve",
  "en": "Snow boots",
  "ja": "スノーブーツ",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El impermeable",
  "en": "Raincoat",
  "ja": "レインコート",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La sudadera",
  "en": "Hoodie / sweatshirt",
  "ja": "パーカー",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El suéter",
  "en": "Sweater",
  "ja": "セーター",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "Las medias",
  "en": "Stockings / tights",
  "ja": "タイツ",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La gorra",
  "en": "Cap",
  "ja": "キャップ",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El chándal",
  "en": "Tracksuit",
  "ja": "ジャージ",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La garganta",
  "en": "Throat",
  "ja": "喉",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El codo",
  "en": "Elbow",
  "ja": "肘",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La muñeca",
  "en": "Wrist",
  "ja": "手首",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "La ceja",
  "en": "Eyebrow",
  "ja": "眉",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "La pestaña",
  "en": "Eyelash",
  "ja": "まつげ",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El tratamiento",
  "en": "Treatment",
  "ja": "治療",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La inyección",
  "en": "Injection",
  "ja": "注射",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El termómetro",
  "en": "Thermometer",
  "ja": "体温計",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La presión arterial",
  "en": "Blood pressure",
  "ja": "血圧",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cicatriz",
  "en": "Scar",
  "ja": "傷跡",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El helicóptero",
  "en": "Helicopter",
  "ja": "ヘリコプター",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El barco de vela",
  "en": "Sailboat",
  "ja": "ヨット",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El transbordador",
  "en": "Ferry",
  "ja": "フェリー",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La furgoneta",
  "en": "Van",
  "ja": "バン",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El tranvía",
  "en": "Tram",
  "ja": "路面電車",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El casco",
  "en": "Helmet",
  "ja": "ヘルメット",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cinturón de seguridad",
  "en": "Seatbelt",
  "ja": "シートベルト",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La licencia de conducir",
  "en": "Driver's license",
  "ja": "運転免許証",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El sushi",
  "en": "Sushi",
  "ja": "寿司",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "Los fideos",
  "en": "Noodles",
  "ja": "麺",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La pasta",
  "en": "Pasta",
  "ja": "パスタ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El curry",
  "en": "Curry",
  "ja": "カレー",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La miel",
  "en": "Honey",
  "ja": "蜂蜜",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La mermelada",
  "en": "Jam",
  "ja": "ジャム",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El yogur",
  "en": "Yogurt",
  "ja": "ヨーグルト",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La avena",
  "en": "Oatmeal",
  "ja": "オートミール",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El cereal",
  "en": "Cereal",
  "ja": "シリアル",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La miel de maple",
  "en": "Maple syrup",
  "ja": "メープルシロップ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El caldo",
  "en": "Broth",
  "ja": "だし・スープの素",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La ensalada de frutas",
  "en": "Fruit salad",
  "ja": "フルーツサラダ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El museo de arte",
  "en": "Art museum",
  "ja": "美術館",
  "cat": "Arte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La escultura moderna",
  "en": "Modern sculpture",
  "ja": "現代彫刻",
  "cat": "Arte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El festival",
  "en": "Festival",
  "ja": "フェスティバル",
  "cat": "Festividades",
  "pos": "名詞（男性）"
 },
 {
  "es": "La danza",
  "en": "Dance (art form)",
  "ja": "舞踊",
  "cat": "Arte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El folclore",
  "en": "Folklore",
  "ja": "民間伝承",
  "cat": "Arte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La artesanía",
  "en": "Craftsmanship / handicraft",
  "ja": "手工芸",
  "cat": "Arte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El mural",
  "en": "Mural",
  "ja": "壁画",
  "cat": "Arte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La leyenda",
  "en": "Legend",
  "ja": "伝説",
  "cat": "Arte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El patrimonio",
  "en": "Heritage",
  "ja": "遺産",
  "cat": "Arte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La tradición",
  "en": "Tradition",
  "ja": "伝統",
  "cat": "Arte",
  "pos": "名詞（女性）"
 },
 {
  "es": "La actualización de software",
  "en": "Software update",
  "ja": "ソフトウェア更新",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El virus informático",
  "en": "Computer virus",
  "ja": "コンピューターウイルス",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La copia de seguridad",
  "en": "Backup",
  "ja": "バックアップ",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El almacenamiento",
  "en": "Storage",
  "ja": "ストレージ",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La configuración",
  "en": "Settings",
  "ja": "設定",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El chip electrónico",
  "en": "Electronic chip",
  "ja": "電子チップ",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La conexión",
  "en": "Connection",
  "ja": "接続",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El código QR",
  "en": "QR code",
  "ja": "QRコード",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La autenticación",
  "en": "Authentication",
  "ja": "認証",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El asistente virtual",
  "en": "Virtual assistant",
  "ja": "バーチャルアシスタント",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El ecosistema",
  "en": "Ecosystem",
  "ja": "生態系",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "La contaminación",
  "en": "Pollution",
  "ja": "汚染",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "El reciclaje",
  "en": "Recycling",
  "ja": "リサイクル",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "La energía solar",
  "en": "Solar energy",
  "ja": "太陽エネルギー",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "El calentamiento global",
  "en": "Global warming",
  "ja": "地球温暖化",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "La especie",
  "en": "Species",
  "ja": "種",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "El hábitat",
  "en": "Habitat",
  "ja": "生息地",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "La extinción",
  "en": "Extinction",
  "ja": "絶滅",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "La conservación",
  "en": "Conservation",
  "ja": "保全",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "El paisaje",
  "en": "Landscape",
  "ja": "景色",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "Amable y paciente",
  "en": "Kind and patient",
  "ja": "優しくて忍耐強い",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Cuidadoso",
  "en": "Careful",
  "ja": "注意深い",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Descuidado",
  "en": "Careless",
  "ja": "不注意な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Puntual",
  "en": "Punctual",
  "ja": "時間に正確な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Impuntual",
  "en": "Not punctual",
  "ja": "時間にルーズな",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Flexible（personalidad）",
  "en": "Flexible (personality)",
  "ja": "柔軟な（性格）",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Estricto",
  "en": "Strict",
  "ja": "厳しい",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Comprensivo",
  "en": "Understanding",
  "ja": "理解のある",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Justo",
  "en": "Fair",
  "ja": "公正な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Injusto",
  "en": "Unfair",
  "ja": "不公正な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Modesto",
  "en": "Modest",
  "ja": "謙虚な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Arrogante",
  "en": "Arrogant",
  "ja": "傲慢な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Leal",
  "en": "Loyal",
  "ja": "忠実な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Confiable",
  "en": "Reliable",
  "ja": "信頼できる",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Ingenuo",
  "en": "Naive",
  "ja": "世間知らずな",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Sugerir",
  "en": "To suggest",
  "ja": "提案する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Proponer",
  "en": "To propose",
  "ja": "提案する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Aceptar",
  "en": "To accept",
  "ja": "受け入れる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Rechazar",
  "en": "To reject",
  "ja": "拒否する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Confirmar",
  "en": "To confirm",
  "ja": "確認する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Cancelar",
  "en": "To cancel",
  "ja": "キャンセルする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Reservar",
  "en": "To reserve / book",
  "ja": "予約する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Organizar",
  "en": "To organize",
  "ja": "整理する・企画する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Planear",
  "en": "To plan",
  "ja": "計画する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Lograr",
  "en": "To achieve",
  "ja": "達成する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Fracasar",
  "en": "To fail",
  "ja": "失敗する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Intentar",
  "en": "To try / attempt",
  "ja": "試みる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Evitar",
  "en": "To avoid",
  "ja": "避ける",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Impedir",
  "en": "To prevent",
  "ja": "妨げる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Permitir el acceso",
  "en": "To allow access",
  "ja": "アクセスを許可する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Comparar",
  "en": "To compare",
  "ja": "比較する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Combinar",
  "en": "To combine",
  "ja": "組み合わせる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Separar",
  "en": "To separate",
  "ja": "分ける",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Reunir",
  "en": "To gather / bring together",
  "ja": "集める",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Compartir",
  "en": "To share",
  "ja": "共有する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "¿Me puede repetir, por favor?",
  "en": "Could you repeat that, please?",
  "ja": "もう一度言ってもらえますか",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "No pasa nada",
  "en": "It's nothing / no problem",
  "ja": "大丈夫、問題ないよ",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Vale la pena",
  "en": "It's worth it",
  "ja": "その価値がある",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Estoy de camino",
  "en": "I'm on my way",
  "ja": "今向かっています",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Tómalo con calma",
  "en": "Take it easy",
  "ja": "落ち着いて",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "No hay problema",
  "en": "No problem",
  "ja": "問題ないです",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "A ver qué pasa",
  "en": "Let's see what happens",
  "ja": "どうなるか見てみよう",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Contigo o sin ti",
  "en": "With or without you",
  "ja": "君がいてもいなくても",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Lo tengo bajo control",
  "en": "I've got it under control",
  "ja": "ちゃんとコントロールできている",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Estoy a punto de salir",
  "en": "I'm about to leave",
  "ja": "ちょうど出かけるところ",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Cuenta conmigo",
  "en": "Count me in",
  "ja": "頼ってね・私も参加するよ",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Ya era hora",
  "en": "It was about time",
  "ja": "やっとだね",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Me da igual",
  "en": "I don't mind either way",
  "ja": "どっちでもいい",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Vamos al grano",
  "en": "Let's get to the point",
  "ja": "本題に入ろう",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Eso tiene sentido",
  "en": "That makes sense",
  "ja": "それは筋が通っている",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "La garantía",
  "en": "Warranty",
  "ja": "保証",
  "cat": "Compras",
  "pos": "名詞（女性）"
 },
 {
  "es": "El reembolso",
  "en": "Refund",
  "ja": "返金",
  "cat": "Compras",
  "pos": "名詞（男性）"
 },
 {
  "es": "El envío",
  "en": "Shipping",
  "ja": "配送",
  "cat": "Compras",
  "pos": "名詞（男性）"
 },
 {
  "es": "La entrega",
  "en": "Delivery",
  "ja": "配達",
  "cat": "Compras",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pedido",
  "en": "Order",
  "ja": "注文",
  "cat": "Compras",
  "pos": "名詞（男性）"
 },
 {
  "es": "La suscripción",
  "en": "Subscription",
  "ja": "サブスクリプション",
  "cat": "Finanzas",
  "pos": "名詞（女性）"
 },
 {
  "es": "La deuda",
  "en": "Debt",
  "ja": "借金",
  "cat": "Finanzas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El interés（financiero）",
  "en": "Interest (financial)",
  "ja": "利子",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El Día de la Independencia",
  "en": "Independence Day",
  "ja": "独立記念日",
  "cat": "Festividades",
  "pos": "名詞（男性）"
 },
 {
  "es": "El Día de las Madres",
  "en": "Mother's Day",
  "ja": "母の日",
  "cat": "Festividades",
  "pos": "名詞（男性）"
 },
 {
  "es": "El Día de los Muertos",
  "en": "Day of the Dead",
  "ja": "死者の日",
  "cat": "Festividades",
  "pos": "名詞（男性）"
 },
 {
  "es": "Las posadas",
  "en": "Posadas (Mexican Christmas tradition)",
  "ja": "ポサーダス（メキシコのクリスマス行事）",
  "cat": "Festividades",
  "pos": "名詞（女性）"
 },
 {
  "es": "El Día de Reyes",
  "en": "Three Kings' Day",
  "ja": "公現祭（三賢者の日）",
  "cat": "Festividades",
  "pos": "名詞（男性）"
 },
 {
  "es": "La quinceañera",
  "en": "15th birthday celebration (girl's coming of age)",
  "ja": "キンセアニェーラ（15歳の成人祝い）",
  "cat": "Festividades",
  "pos": "名詞（女性）"
 },
 {
  "es": "Querer decir",
  "en": "To mean",
  "ja": "〜という意味だ",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Gustar",
  "en": "To like / to be pleasing to",
  "ja": "好きだ",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Necesario",
  "en": "Necessary",
  "ja": "必要な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Importante",
  "en": "Important",
  "ja": "重要な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Dejar",
  "en": "To leave (behind) / to let",
  "ja": "置いていく・させる",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Pasar",
  "en": "To pass / to happen / to spend (time)",
  "ja": "通る・起こる・過ごす",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "Seguir",
  "en": "To continue / to follow",
  "ja": "続ける・従う",
  "cat": "Verbos",
  "nivel": "fácil",
  "pos": "動詞"
 },
 {
  "es": "El mundo",
  "en": "World",
  "ja": "世界",
  "cat": "Geografía",
  "pos": "名詞（男性）"
 },
 {
  "es": "El país",
  "en": "Country",
  "ja": "国",
  "cat": "Geografía",
  "pos": "名詞（男性）"
 },
 {
  "es": "La manera",
  "en": "Way / manner",
  "ja": "方法・やり方",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（女性）"
 },
 {
  "es": "El momento",
  "en": "Moment",
  "ja": "瞬間",
  "cat": "Frecuencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La parte",
  "en": "Part",
  "ja": "部分",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（女性）"
 },
 {
  "es": "El lugar",
  "en": "Place",
  "ja": "場所",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "La vida",
  "en": "Life",
  "ja": "人生・命",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（女性）"
 },
 {
  "es": "La verdad",
  "en": "Truth",
  "ja": "真実",
  "cat": "General",
  "nivel": "muy_facil",
  "pos": "名詞（女性）"
 },
 {
  "es": "Hoy",
  "en": "Today",
  "ja": "今日",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Mañana",
  "en": "Tomorrow / morning",
  "ja": "明日・朝",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Ayer",
  "en": "Yesterday",
  "ja": "昨日",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Quizás",
  "en": "Maybe / perhaps",
  "ja": "たぶん",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "Entonces",
  "en": "Then / so",
  "ja": "それなら・その時",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "El libro",
  "en": "Book",
  "ja": "本",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "Qué",
  "en": "What",
  "ja": "何",
  "cat": "Interrogativos",
  "pos": "疑問詞"
 },
 {
  "es": "Quién",
  "en": "Who",
  "ja": "誰",
  "cat": "Interrogativos",
  "pos": "疑問詞"
 },
 {
  "es": "Cómo",
  "en": "How",
  "ja": "どのように",
  "cat": "Interrogativos",
  "pos": "疑問詞"
 },
 {
  "es": "Cuándo",
  "en": "When",
  "ja": "いつ",
  "cat": "Interrogativos",
  "pos": "疑問詞"
 },
 {
  "es": "Dónde",
  "en": "Where",
  "ja": "どこ",
  "cat": "Interrogativos",
  "pos": "疑問詞"
 },
 {
  "es": "Por qué",
  "en": "Why",
  "ja": "なぜ",
  "cat": "Interrogativos",
  "pos": "疑問詞"
 },
 {
  "es": "Sentirse solo",
  "en": "To feel lonely",
  "ja": "孤独を感じる",
  "cat": "Emociones",
  "nivel": "avanzado",
  "pos": "表現"
 },
 {
  "es": "La alegría",
  "en": "Joy",
  "ja": "喜び",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "La tristeza",
  "en": "Sadness",
  "ja": "悲しみ",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "El miedo",
  "en": "Fear",
  "ja": "恐怖",
  "cat": "Emociones",
  "pos": "名詞（男性）"
 },
 {
  "es": "La esperanza",
  "en": "Hope",
  "ja": "希望",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "La paciencia",
  "en": "Patience",
  "ja": "忍耐",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pulso",
  "en": "Pulse",
  "ja": "脈拍",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La respiración",
  "en": "Breathing",
  "ja": "呼吸",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El estornudo",
  "en": "Sneeze",
  "ja": "くしゃみ",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La tos",
  "en": "Cough",
  "ja": "咳",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El mareo",
  "en": "Dizziness",
  "ja": "めまい",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La aspiradora",
  "en": "Vacuum cleaner",
  "ja": "掃除機",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La plancha",
  "en": "Iron (for clothes)",
  "ja": "アイロン",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El basurero",
  "en": "Trash can",
  "ja": "ゴミ箱",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La escoba",
  "en": "Broom",
  "ja": "ほうき",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El detergente",
  "en": "Detergent",
  "ja": "洗剤",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La videollamada",
  "en": "Video call",
  "ja": "ビデオ通話",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El teletrabajo",
  "en": "Remote work",
  "ja": "テレワーク",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El equipo de trabajo",
  "en": "Work team",
  "ja": "仕事のチーム",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La capacitación",
  "en": "Training",
  "ja": "研修",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El ascenso",
  "en": "Promotion (job)",
  "ja": "昇進",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El equipaje facturado",
  "en": "Checked luggage",
  "ja": "預け荷物",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El tour",
  "en": "Tour",
  "ja": "ツアー",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "La propina",
  "en": "Tip (gratuity)",
  "ja": "チップ",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El check-in",
  "en": "Check-in",
  "ja": "チェックイン",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El taco al pastor",
  "en": "Al pastor taco",
  "ja": "タコス・アル・パストール",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La horchata",
  "en": "Horchata (rice drink)",
  "ja": "オルチャータ（こめの飲み物）",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El elote",
  "en": "Corn on the cob (Mexican street food)",
  "ja": "メキシコ風とうもろこし",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La torta",
  "en": "Mexican sandwich",
  "ja": "トルタ（メキシコ風サンドイッチ）",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pan dulce",
  "en": "Sweet bread",
  "ja": "甘いパン",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "Sincero y directo",
  "en": "Sincere and direct",
  "ja": "誠実で率直な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Tranquilo y paciente",
  "en": "Calm and patient",
  "ja": "穏やかで忍耐強い",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Curioso por naturaleza",
  "en": "Naturally curious",
  "ja": "生まれつき好奇心旺盛な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Práctico",
  "en": "Practical",
  "ja": "実用的な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Detallista",
  "en": "Detail-oriented",
  "ja": "細かいところに気がつく",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Voy para allá",
  "en": "I'm coming / on my way there",
  "ja": "今そっちに向かってるよ",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Nos mantenemos en contacto",
  "en": "Let's stay in touch",
  "ja": "連絡取り合おうね",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Eso ya lo sabía",
  "en": "I already knew that",
  "ja": "それはもう知ってたよ",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "No me lo esperaba",
  "en": "I wasn't expecting that",
  "ja": "それは予想してなかった",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Se me hizo tarde",
  "en": "I ran late",
  "ja": "遅くなってしまった",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Chamba",
  "en": "Job / work (colloquial)",
  "ja": "仕事（口語）",
  "cat": "Coloquial",
  "nivel": "avanzado",
  "pos": "俗語"
 },
 {
  "es": "Güey",
  "en": "Dude / mate (very casual, Mexican)",
  "ja": "お前・やつ（親しい間柄限定、メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado",
  "pos": "俗語"
 },
 {
  "es": "Neta",
  "en": "Really / the truth (colloquial)",
  "ja": "マジで・本当のこと（口語）",
  "cat": "Coloquial",
  "nivel": "avanzado",
  "pos": "俗語"
 },
 {
  "es": "Chido",
  "en": "Cool / awesome (Mexican)",
  "ja": "かっこいい・いいね（メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado",
  "pos": "俗語"
 },
 {
  "es": "No manches",
  "en": "No way! (colloquial, Mexican)",
  "ja": "うそでしょ・まさか（メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado",
  "pos": "表現"
 },
 {
  "es": "¿Qué onda?",
  "en": "What's up? (Mexican)",
  "ja": "調子どう？（メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado",
  "pos": "表現"
 },
 {
  "es": "Feria",
  "en": "Money / change (Mexican colloquial)",
  "ja": "お金・小銭（メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado",
  "pos": "俗語"
 },
 {
  "es": "Crudo",
  "en": "Hungover (colloquial)",
  "ja": "二日酔いの（口語）",
  "cat": "Coloquial",
  "nivel": "avanzado",
  "pos": "俗語"
 },
 {
  "es": "Echar la hueva",
  "en": "To laze around (Mexican colloquial)",
  "ja": "だらだらする・サボる（メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado",
  "pos": "表現"
 },
 {
  "es": "Órale",
  "en": "Wow! / Come on! (Mexican)",
  "ja": "おおっ！さあ！（メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado",
  "pos": "俗語"
 },
 {
  "es": "Chistoso",
  "en": "Funny",
  "ja": "面白い、おかしい",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Chismoso",
  "en": "Gossipy",
  "ja": "噂好きな、ゴシップ好きな",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Mentiroso",
  "en": "Liar / untruthful",
  "ja": "嘘つきな",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Miedoso",
  "en": "Fearful / easily scared",
  "ja": "怖がりな",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Envidioso",
  "en": "Envious",
  "ja": "嫉妬深い",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Famoso",
  "en": "Famous",
  "ja": "有名な",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Ruidoso",
  "en": "Noisy",
  "ja": "うるさい、騒がしい",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Peligroso",
  "en": "Dangerous",
  "ja": "危険な",
  "cat": "Adjetivos",
  "nivel": "fácil",
  "pos": "形容詞"
 },
 {
  "es": "Estudioso",
  "en": "Studious",
  "ja": "勉強熱心な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Ambicioso",
  "en": "Ambitious",
  "ja": "野心的な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Religioso",
  "en": "Religious",
  "ja": "信心深い",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Vergonzoso",
  "en": "Shy / embarrassing",
  "ja": "恥ずかしがりな、恥ずべき",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "El trámite",
  "en": "Procedure / paperwork",
  "ja": "手続き",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "El requisito",
  "en": "Requirement",
  "ja": "要件",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "El comprobante",
  "en": "Receipt / proof",
  "ja": "領収書・証明書",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "Vigente",
  "en": "Valid / in effect",
  "ja": "有効な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Encargarse de",
  "en": "To be in charge of",
  "ja": "〜を担当する",
  "cat": "Trabajo",
  "pos": "表現"
 },
 {
  "es": "La retroalimentación",
  "en": "Feedback",
  "ja": "フィードバック",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "Cumplir con",
  "en": "To fulfill / comply with",
  "ja": "〜を果たす",
  "cat": "Trabajo",
  "pos": "表現"
 },
 {
  "es": "El desempeño",
  "en": "Performance",
  "ja": "（仕事の）成果",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El plazo de entrega",
  "en": "Delivery deadline",
  "ja": "納期",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El malentendido",
  "en": "Misunderstanding",
  "ja": "誤解",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "Aclarar",
  "en": "To clarify",
  "ja": "明確にする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Insistir",
  "en": "To insist",
  "ja": "主張する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Ceder",
  "en": "To give in / yield",
  "ja": "譲歩する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El reclamo",
  "en": "Complaint / claim",
  "ja": "クレーム",
  "cat": "Compras",
  "pos": "名詞（男性）"
 },
 {
  "es": "La queja",
  "en": "Complaint",
  "ja": "苦情",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El inconveniente",
  "en": "Inconvenience",
  "ja": "不都合",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "La avería",
  "en": "Breakdown / malfunction",
  "ja": "故障",
  "cat": "Herramientas",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cita médica",
  "en": "Medical appointment",
  "ja": "診察予約",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La receta médica",
  "en": "Prescription",
  "ja": "処方箋",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El diagnóstico",
  "en": "Diagnosis",
  "ja": "診断",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "El formulario",
  "en": "Form",
  "ja": "書式",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "La firma",
  "en": "Signature",
  "ja": "署名",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "La identificación oficial",
  "en": "Official ID",
  "ja": "公的身分証明書",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "Expedir",
  "en": "To issue",
  "ja": "発行する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Vencer",
  "en": "To expire",
  "ja": "期限切れになる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Renovar",
  "en": "To renew",
  "ja": "更新する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La cotización",
  "en": "Quote / estimate",
  "ja": "見積もり",
  "cat": "Finanzas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El proveedor",
  "en": "Supplier",
  "ja": "供給業者",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La sucursal",
  "en": "Branch (office)",
  "ja": "支店",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El horario de atención",
  "en": "Business hours",
  "ja": "営業時間",
  "cat": "Compras",
  "pos": "名詞（男性）"
 },
 {
  "es": "La disponibilidad",
  "en": "Availability",
  "ja": "空き状況",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "Malinterpretar",
  "en": "To misinterpret",
  "ja": "誤解する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Ponerse de acuerdo",
  "en": "To reach an agreement",
  "ja": "合意する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Disculparse",
  "en": "To apologize",
  "ja": "謝る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Justificar",
  "en": "To justify",
  "ja": "正当化する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Postergar",
  "en": "To postpone",
  "ja": "延期する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Coordinar",
  "en": "To coordinate",
  "ja": "調整する",
  "cat": "Trabajo",
  "pos": "動詞"
 },
 {
  "es": "Negociar",
  "en": "To negotiate",
  "ja": "交渉する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Asumir",
  "en": "To take on / assume",
  "ja": "引き受ける",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Delegar",
  "en": "To delegate",
  "ja": "委任する",
  "cat": "Trabajo",
  "pos": "動詞"
 },
 {
  "es": "Priorizar",
  "en": "To prioritize",
  "ja": "優先させる",
  "cat": "Trabajo",
  "pos": "動詞"
 },
 {
  "es": "Implementar",
  "en": "To implement",
  "ja": "実施する",
  "cat": "Trabajo",
  "pos": "動詞"
 },
 {
  "es": "La solicitud",
  "en": "Application / request",
  "ja": "申請",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El acuerdo",
  "en": "Agreement",
  "ja": "合意",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "El contrato",
  "en": "Contract",
  "ja": "契約",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cláusula",
  "en": "Clause",
  "ja": "条項",
  "cat": "Finanzas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El arrendamiento",
  "en": "Lease / rental",
  "ja": "賃貸借",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El inquilino",
  "en": "Tenant",
  "ja": "賃借人",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El propietario",
  "en": "Owner / landlord",
  "ja": "所有者・大家",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La póliza",
  "en": "Insurance policy",
  "ja": "保険証券",
  "cat": "Finanzas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El siniestro",
  "en": "Insurance claim event",
  "ja": "保険事故",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La indemnización",
  "en": "Compensation",
  "ja": "賠償金",
  "cat": "Finanzas",
  "pos": "名詞（女性）"
 },
 {
  "es": "La nómina",
  "en": "Payroll",
  "ja": "給与明細",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El sueldo neto",
  "en": "Net salary",
  "ja": "手取り給与",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "Las prestaciones",
  "en": "Benefits",
  "ja": "福利厚生",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "La jubilación",
  "en": "Retirement",
  "ja": "退職・年金",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "La renuncia",
  "en": "Resignation",
  "ja": "退職・辞職",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El despido",
  "en": "Dismissal / layoff",
  "ja": "解雇",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El desempleo",
  "en": "Unemployment",
  "ja": "失業",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "Postularse",
  "en": "To apply (for a job)",
  "ja": "応募する",
  "cat": "Trabajo",
  "pos": "形容詞"
 },
 {
  "es": "La entrevista de trabajo",
  "en": "Job interview",
  "ja": "就職面接",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "La tripa",
  "en": "Tripe (taco filling)",
  "ja": "（タコスの）トリッパ・臓物",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El suadero",
  "en": "Beef flank cut (popular taco filling)",
  "ja": "スアデロ（牛の腹肉、タコスの定番）",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "Las carnitas",
  "en": "Braised pork (taco filling)",
  "ja": "カルニータス（豚肉の煮込み）",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La birria",
  "en": "Birria (spiced stewed meat)",
  "ja": "ビリア（スパイス煮込み肉料理）",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La barbacoa",
  "en": "Slow-cooked meat (barbacoa)",
  "ja": "バルバコア（じっくり蒸し焼きにした肉）",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cochinita pibil",
  "en": "Yucatan-style slow-roasted pork",
  "ja": "コチニータ・ピビル（ユカタン風豚肉料理）",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El chicharrón",
  "en": "Fried pork rind",
  "ja": "チチャロン（豚の皮の揚げ物）",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La lengua",
  "en": "Tongue (taco filling)",
  "ja": "タン（舌、タコスの具）",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El bistec",
  "en": "Steak",
  "ja": "ビステック（薄切りステーキ肉）",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El chorizo",
  "en": "Mexican sausage",
  "ja": "チョリソ（メキシコ風ソーセージ）",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El campechano",
  "en": "Mixed-meat taco",
  "ja": "カンペチャーノ（複数の肉を混ぜたタコス）",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "Los nopales",
  "en": "Cactus paddles (food)",
  "ja": "ノパル（食用サボテン）",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cilantro",
  "en": "Cilantro",
  "ja": "パクチー（コリアンダーの葉）",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "Los antojitos",
  "en": "Mexican street snacks",
  "ja": "アントヒート（メキシコの軽食・屋台料理の総称）",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El comal",
  "en": "Griddle (for tortillas)",
  "ja": "コマル（トルティーヤを焼く鉄板）",
  "cat": "Cocina",
  "pos": "名詞（男性）"
 },
 {
  "es": "El molcajete",
  "en": "Mortar and pestle (also serving dish)",
  "ja": "モルカヘテ（すり鉢、盛り付け皿にも使う）",
  "cat": "Cocina",
  "pos": "名詞（男性）"
 },
 {
  "es": "La combi",
  "en": "Shared minibus / van",
  "ja": "コンビ（乗り合いミニバン）",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El pesero",
  "en": "Local minibus (Mexico City)",
  "ja": "ペセロ（メキシコシティの乗り合いバス）",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El changarro",
  "en": "Small informal shop",
  "ja": "チャンガロ（小さな個人商店）",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "El tianguis",
  "en": "Street market",
  "ja": "ティアングイス（青空市・露天市場）",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "La colonia",
  "en": "Neighborhood (Mexican term)",
  "ja": "コロニア（メキシコでの「地区・町内」の呼び方）",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "El fraccionamiento",
  "en": "Housing development / gated community",
  "ja": "フラクシオナミエント（住宅開発区・分譲地）",
  "cat": "Lugares",
  "pos": "名詞（男性）"
 },
 {
  "es": "La banqueta",
  "en": "Sidewalk (Mexican term)",
  "ja": "バンケタ（メキシコでの「歩道」の呼び方）",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "La alberca",
  "en": "Swimming pool (Mexican term)",
  "ja": "アルベルカ（メキシコでの「プール」の呼び方）",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El popote",
  "en": "Drinking straw (Mexican term)",
  "ja": "ポポテ（メキシコでの「ストロー」の呼び方）",
  "cat": "Cocina",
  "pos": "名詞（男性）"
 },
 {
  "es": "La fonda",
  "en": "Small family-run eatery",
  "ja": "フォンダ（家族経営の小さな食堂）",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "La credencial para votar",
  "en": "Voter ID (used as general ID in Mexico)",
  "ja": "選挙人証（メキシコで身分証明書として使われる）",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El INE",
  "en": "National Electoral Institute (issues voter ID)",
  "ja": "INE（国立選挙機構、選挙人証の発行元）",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "El CURP",
  "en": "Unique Population Registry Code",
  "ja": "CURP（個人識別番号）",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "El RFC",
  "en": "Federal Taxpayer Registry number",
  "ja": "RFC（税務者登録番号）",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El IMSS",
  "en": "Mexican Social Security Institute",
  "ja": "IMSS（メキシコ社会保障機構）",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "La chela",
  "en": "Beer (colloquial)",
  "ja": "ビール（口語）",
  "cat": "Coloquial",
  "pos": "名詞（女性）"
 },
 {
  "es": "La autopista",
  "en": "Highway / expressway",
  "ja": "高速道路",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "La carretera",
  "en": "Road / highway",
  "ja": "幹線道路",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "La caseta de cobro",
  "en": "Toll booth",
  "ja": "料金所",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cuota",
  "en": "Toll fee (Mexican term)",
  "ja": "通行料金",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "La carretera libre",
  "en": "Toll-free road (Mexican term)",
  "ja": "無料道路",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "La gasolinera",
  "en": "Gas station",
  "ja": "ガソリンスタンド",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "La gasolina",
  "en": "Gasoline",
  "ja": "ガソリン",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "La grúa",
  "en": "Tow truck",
  "ja": "レッカー車",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "La verificación vehicular",
  "en": "Vehicle emissions inspection",
  "ja": "車検（排ガス検査）",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "La tenencia",
  "en": "Vehicle tax (Mexican term)",
  "ja": "自動車税",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "Las placas",
  "en": "License plates",
  "ja": "ナンバープレート",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El estacionamiento",
  "en": "Parking lot",
  "ja": "駐車場",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El tope",
  "en": "Speed bump (Mexican term)",
  "ja": "減速バンプ",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El carril",
  "en": "Lane",
  "ja": "車線",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El límite de velocidad",
  "en": "Speed limit",
  "ja": "制限速度",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La multa de tránsito",
  "en": "Traffic ticket",
  "ja": "交通違反切符",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El seguro de auto",
  "en": "Car insurance",
  "ja": "自動車保険",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El taller mecánico",
  "en": "Auto repair shop",
  "ja": "自動車修理工場",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La ponchadura",
  "en": "Flat tire (Mexican term)",
  "ja": "パンク",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El libramiento",
  "en": "Bypass road",
  "ja": "バイパス道路",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El segundo piso",
  "en": "Elevated highway (Mexico City term)",
  "ja": "高架高速道路（メキシコシティの二階建て道路）",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "Chafa",
  "en": "Cheap / low quality (colloquial)",
  "ja": "安っぽい・質の悪い（口語）",
  "cat": "Coloquial",
  "pos": "俗語"
 },
 {
  "es": "A huevo",
  "en": "For sure / definitely (colloquial)",
  "ja": "絶対に・当然（口語）",
  "cat": "Coloquial",
  "pos": "表現"
 },
 {
  "es": "Simón",
  "en": "Yes (colloquial)",
  "ja": "うん（口語のはい）",
  "cat": "Coloquial",
  "pos": "俗語"
 },
 {
  "es": "Nel",
  "en": "No (colloquial)",
  "ja": "いや（口語のいいえ）",
  "cat": "Coloquial",
  "pos": "俗語"
 },
 {
  "es": "Sale",
  "en": "Okay / deal (colloquial)",
  "ja": "オーケー・決まり（口語）",
  "cat": "Coloquial",
  "pos": "俗語"
 },
 {
  "es": "Híjole",
  "en": "Wow / oh no (exclamation)",
  "ja": "うわあ・げっ（口語の間投詞）",
  "cat": "Coloquial",
  "pos": "俗語"
 },
 {
  "es": "El chavo",
  "en": "Kid / young guy (colloquial)",
  "ja": "若者・少年（口語）",
  "cat": "Coloquial",
  "pos": "名詞（男性）"
 },
 {
  "es": "La chava",
  "en": "Kid / young girl (colloquial)",
  "ja": "若者・少女（口語）",
  "cat": "Coloquial",
  "pos": "名詞（女性）"
 },
 {
  "es": "El compa",
  "en": "Buddy (colloquial, short for compadre)",
  "ja": "相棒（口語、compadreの略）",
  "cat": "Coloquial",
  "pos": "名詞（男性）"
 },
 {
  "es": "Carnal",
  "en": "Close friend / bro (colloquial)",
  "ja": "親友・兄弟のような仲（口語）",
  "cat": "Coloquial",
  "pos": "俗語"
 },
 {
  "es": "Al chile",
  "en": "Seriously / honestly (colloquial)",
  "ja": "マジで・正直言うと（口語）",
  "cat": "Coloquial",
  "pos": "表現"
 },
 {
  "es": "La troca",
  "en": "Pickup truck (colloquial)",
  "ja": "トラック（口語、英語truckから）",
  "cat": "Coloquial",
  "pos": "名詞（女性）"
 },
 {
  "es": "La banda",
  "en": "The crew / friends (colloquial)",
  "ja": "仲間たち（口語）",
  "cat": "Coloquial",
  "pos": "名詞（女性）"
 },
 {
  "es": "El rollo",
  "en": "The situation / deal (colloquial)",
  "ja": "事情・話（口語）",
  "cat": "Coloquial",
  "pos": "名詞（男性）"
 },
 {
  "es": "El desmadre",
  "en": "Mess / chaos (colloquial)",
  "ja": "めちゃくちゃな状況（口語）",
  "cat": "Coloquial",
  "pos": "名詞（男性）"
 },
 {
  "es": "Apapachar",
  "en": "To pamper / hug affectionately",
  "ja": "愛情を込めて甘やかす・抱きしめる",
  "cat": "Coloquial",
  "pos": "動詞"
 },
 {
  "es": "Sacar la vuelta",
  "en": "To dodge / avoid someone or something",
  "ja": "避ける・逃げる（口語）",
  "cat": "Coloquial",
  "pos": "表現"
 },
 {
  "es": "Ni modo",
  "en": "Oh well / nothing to be done",
  "ja": "仕方ない（口語）",
  "cat": "Coloquial",
  "pos": "表現"
 },
 {
  "es": "A poco",
  "en": "Really? / No way (colloquial)",
  "ja": "まさか・本当に？（口語）",
  "cat": "Coloquial",
  "pos": "表現"
 },
 {
  "es": "En chinga",
  "en": "In a hurry / quickly (colloquial)",
  "ja": "大急ぎで（口語）",
  "cat": "Coloquial",
  "pos": "表現"
 },
 {
  "es": "Fifí",
  "en": "Posh / snobbish (colloquial)",
  "ja": "お高くとまった（口語）",
  "cat": "Coloquial",
  "pos": "俗語"
 },
 {
  "es": "Amar",
  "en": "To love deeply",
  "ja": "深く愛する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Borracho",
  "en": "Drunk person",
  "ja": "酔っ払い",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Rumbo a",
  "en": "Heading towards",
  "ja": "〜に向かって",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Afirmar",
  "en": "To affirm, state",
  "ja": "断言する、述べる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Señalar",
  "en": "To point out, note",
  "ja": "指摘する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Destacar",
  "en": "To highlight, stand out",
  "ja": "強調する、際立つ",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Indicar",
  "en": "To indicate",
  "ja": "示す",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Sostener",
  "en": "To maintain, argue",
  "ja": "主張する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Declarar",
  "en": "To declare, state",
  "ja": "表明する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Subrayar",
  "en": "To underline, emphasize",
  "ja": "強調する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Asegurar",
  "en": "To assure, ensure",
  "ja": "保証する、断言する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Revelar",
  "en": "To reveal",
  "ja": "明らかにする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Advertir",
  "en": "To warn, notice",
  "ja": "警告する、気づく",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El fenómeno",
  "en": "Phenomenon",
  "ja": "現象",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El ámbito",
  "en": "Field, sphere",
  "ja": "領域、分野",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El entorno",
  "en": "Environment, surroundings",
  "ja": "環境、周囲",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El panorama",
  "en": "Panorama, overview",
  "ja": "全体像、見通し",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El enfoque",
  "en": "Approach, focus",
  "ja": "アプローチ、視点",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El rasgo",
  "en": "Trait, feature",
  "ja": "特徴",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La medida",
  "en": "Measure, measurement",
  "ja": "対策、措置",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "La consecuencia",
  "en": "Consequence",
  "ja": "結果、影響",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El factor",
  "en": "Factor",
  "ja": "要因",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La repercusión",
  "en": "Repercussion, impact",
  "ja": "影響、反響",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El impacto",
  "en": "Impact",
  "ja": "インパクト、衝撃",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El contraste",
  "en": "Contrast",
  "ja": "対比",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El hallazgo",
  "en": "Finding, discovery",
  "ja": "発見",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El dato",
  "en": "Data, piece of information",
  "ja": "データ、情報",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cifra",
  "en": "Figure, number",
  "ja": "数字",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El porcentaje",
  "en": "Percentage",
  "ja": "割合、パーセンテージ",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La tendencia",
  "en": "Trend",
  "ja": "傾向",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El vínculo",
  "en": "Link, bond",
  "ja": "つながり、関連",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "Llevar a cabo",
  "en": "To carry out",
  "ja": "実行する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Dar lugar a",
  "en": "To give rise to",
  "ja": "〜を引き起こす",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Tener en cuenta",
  "en": "To take into account",
  "ja": "考慮に入れる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Poner de relieve",
  "en": "To highlight, emphasize",
  "ja": "際立たせる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Constituir",
  "en": "To constitute",
  "ja": "〜を構成する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Representar",
  "en": "To represent",
  "ja": "表す、代表する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Abarcar",
  "en": "To encompass",
  "ja": "含む、網羅する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Surgir",
  "en": "To arise, emerge",
  "ja": "生じる、現れる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Carecer de",
  "en": "To lack",
  "ja": "〜が欠けている",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Respecto a",
  "en": "Regarding",
  "ja": "〜に関して",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "De acuerdo con",
  "en": "According to",
  "ja": "〜によれば",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Según",
  "en": "According to",
  "ja": "〜によると",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Cabe señalar",
  "en": "It should be noted",
  "ja": "指摘すべきは",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Cerca de",
  "en": "Near",
  "ja": "〜の近くに",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Lejos de",
  "en": "Far from",
  "ja": "〜から遠くに",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Al lado de",
  "en": "Next to",
  "ja": "〜の隣に",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Enfrente de",
  "en": "In front of, facing",
  "ja": "〜の向かいに",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Detrás de",
  "en": "Behind",
  "ja": "〜の後ろに",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Delante de",
  "en": "In front of",
  "ja": "〜の前に",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Alrededor de",
  "en": "Around",
  "ja": "〜の周りに",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "A través de",
  "en": "Through",
  "ja": "〜を通して",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Junto a",
  "en": "Next to, together with",
  "ja": "〜のそばに",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Frente a",
  "en": "Facing, opposite",
  "ja": "〜に面して",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Dentro de",
  "en": "Inside, within",
  "ja": "〜の中に",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Fuera de",
  "en": "Outside of",
  "ja": "〜の外に",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Encima de",
  "en": "On top of",
  "ja": "〜の上に",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Debajo de",
  "en": "Under, beneath",
  "ja": "〜の下に",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Hacia",
  "en": "Toward",
  "ja": "〜へ向かって",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "A lo largo de",
  "en": "Along, throughout",
  "ja": "〜に沿って、〜の間ずっと",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "En medio de",
  "en": "In the middle of",
  "ja": "〜の真ん中に",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "De repente",
  "en": "Suddenly",
  "ja": "突然",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "De vez en cuando",
  "en": "From time to time",
  "ja": "時々",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Poco a poco",
  "en": "Little by little",
  "ja": "少しずつ",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "De nuevo",
  "en": "Again",
  "ja": "再び",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Al mismo tiempo",
  "en": "At the same time",
  "ja": "同時に",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "De todos modos",
  "en": "Anyway, regardless",
  "ja": "とにかく、いずれにせよ",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "En cambio",
  "en": "On the other hand",
  "ja": "一方で",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "Por lo general",
  "en": "Generally",
  "ja": "一般的に",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "A partir de",
  "en": "Starting from",
  "ja": "〜から（時点）",
  "cat": "Preposiciones",
  "pos": "前置詞"
 },
 {
  "es": "Hasta ahora",
  "en": "Until now",
  "ja": "今のところ",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "De momento",
  "en": "For the moment",
  "ja": "今のところ",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "En seguida",
  "en": "Right away",
  "ja": "すぐに",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "A lo mejor",
  "en": "Maybe, perhaps",
  "ja": "もしかしたら",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "Sobre todo",
  "en": "Above all, especially",
  "ja": "とりわけ",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "En particular",
  "en": "In particular",
  "ja": "特に",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "Al fin y al cabo",
  "en": "After all, in the end",
  "ja": "結局のところ",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "Tarde o temprano",
  "en": "Sooner or later",
  "ja": "遅かれ早かれ",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "Hacer cola",
  "en": "To wait in line",
  "ja": "列に並ぶ",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Estar de acuerdo",
  "en": "To agree",
  "ja": "賛成する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Ponerse de pie",
  "en": "To stand up",
  "ja": "立ち上がる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Dar un paseo",
  "en": "To take a walk",
  "ja": "散歩する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Hacer ejercicio",
  "en": "To exercise",
  "ja": "運動する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Tomar una decisión",
  "en": "To make a decision",
  "ja": "決断する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Pedir prestado",
  "en": "To borrow",
  "ja": "借りる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Prestar atención",
  "en": "To pay attention",
  "ja": "注意を払う",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Hacer caso",
  "en": "To pay attention, to obey",
  "ja": "言うことを聞く",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Tener suerte",
  "en": "To be lucky",
  "ja": "運がいい",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Tener razón",
  "en": "To be right",
  "ja": "正しい（人が）",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Estar equivocado",
  "en": "To be wrong",
  "ja": "間違っている",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Cometer un error",
  "en": "To make a mistake",
  "ja": "ミスをする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Sacar fotos",
  "en": "To take photos",
  "ja": "写真を撮る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Hacer las paces",
  "en": "To make up, reconcile",
  "ja": "仲直りする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Hacer amigos",
  "en": "To make friends",
  "ja": "友達を作る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Cambiar de opinión",
  "en": "To change one's mind",
  "ja": "考えを変える",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Darse prisa",
  "en": "To hurry up",
  "ja": "急ぐ",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Echar un vistazo",
  "en": "To take a look",
  "ja": "ちょっと見る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Perder el tiempo",
  "en": "To waste time",
  "ja": "時間を無駄にする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Valer la pena",
  "en": "To be worth it",
  "ja": "価値がある",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Estar harto",
  "en": "To be fed up",
  "ja": "うんざりしている",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Ponerse nervioso",
  "en": "To get nervous",
  "ja": "緊張する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Quedarse dormido",
  "en": "To fall asleep",
  "ja": "寝落ちする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Hacer una llamada",
  "en": "To make a phone call",
  "ja": "電話をかける",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Dar las gracias",
  "en": "To thank",
  "ja": "感謝を伝える",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Pedir perdón",
  "en": "To ask for forgiveness",
  "ja": "許しを乞う",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Tener cuidado",
  "en": "To be careful",
  "ja": "気をつける",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Hacer trampa",
  "en": "To cheat",
  "ja": "ズルをする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Romper el hielo",
  "en": "To break the ice",
  "ja": "場を和ませる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Hacer planes",
  "en": "To make plans",
  "ja": "計画を立てる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Quedar con alguien",
  "en": "To arrange to meet someone",
  "ja": "誰かと会う約束をする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Dar un consejo",
  "en": "To give advice",
  "ja": "アドバイスする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Tomar nota",
  "en": "To take note",
  "ja": "メモを取る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Hacer una pausa",
  "en": "To take a break",
  "ja": "休憩する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Dar por hecho",
  "en": "To take for granted",
  "ja": "当然だと思う",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Hacer un esfuerzo",
  "en": "To make an effort",
  "ja": "努力する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Tener celos",
  "en": "To be jealous",
  "ja": "嫉妬する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Dar igual",
  "en": "To not matter, be all the same",
  "ja": "どっちでもいい",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Llevarse bien",
  "en": "To get along well",
  "ja": "仲良くやる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Llevarse mal",
  "en": "To not get along",
  "ja": "仲が悪い",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Caer bien",
  "en": "To make a good impression, be likable",
  "ja": "好印象を与える",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Caer mal",
  "en": "To make a bad impression",
  "ja": "悪印象を与える",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Tener ganas de",
  "en": "To feel like doing something",
  "ja": "〜したい気分だ",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Estar dispuesto a",
  "en": "To be willing to",
  "ja": "〜する気がある",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Hacer falta",
  "en": "To be needed",
  "ja": "必要である",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Dar la bienvenida",
  "en": "To welcome",
  "ja": "歓迎する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Tener paciencia",
  "en": "To have patience",
  "ja": "我慢する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Dar vueltas",
  "en": "To go around, to mull over",
  "ja": "ぐるぐる回る、思い悩む",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Pasar de moda",
  "en": "To go out of style",
  "ja": "流行遅れになる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Estar de moda",
  "en": "To be trendy",
  "ja": "流行っている",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Hacer clic",
  "en": "To click",
  "ja": "クリックする",
  "cat": "Tecnología",
  "pos": "表現"
 },
 {
  "es": "Quedarse sin batería",
  "en": "To run out of battery",
  "ja": "バッテリーが切れる",
  "cat": "Tecnología",
  "pos": "表現"
 },
 {
  "es": "Tener señal",
  "en": "To have signal/reception",
  "ja": "電波がある",
  "cat": "Tecnología",
  "pos": "表現"
 },
 {
  "es": "Arreglar",
  "en": "To fix, arrange",
  "ja": "直す、整える",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Revisar",
  "en": "To check, review",
  "ja": "確認する、見直す",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Conseguir",
  "en": "To get, obtain",
  "ja": "手に入れる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Acompañar",
  "en": "To accompany",
  "ja": "同行する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Avisar",
  "en": "To notify, warn",
  "ja": "知らせる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Entregar",
  "en": "To deliver, hand over",
  "ja": "渡す、届ける",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Recoger",
  "en": "To pick up, collect",
  "ja": "拾う、迎えに行く",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Devolver",
  "en": "To return (something)",
  "ja": "返す",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Ahorrar",
  "en": "To save (money)",
  "ja": "貯金する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Gastar",
  "en": "To spend (money)",
  "ja": "使う（お金）",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Invertir",
  "en": "To invest",
  "ja": "投資する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Empeorar",
  "en": "To worsen",
  "ja": "悪化する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Cuidar",
  "en": "To take care of",
  "ja": "世話をする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Proteger",
  "en": "To protect",
  "ja": "守る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Recomendar",
  "en": "To recommend",
  "ja": "勧める",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Notar",
  "en": "To notice",
  "ja": "気づく",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Fijarse",
  "en": "To pay attention, notice",
  "ja": "注意して見る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Imaginar",
  "en": "To imagine",
  "ja": "想像する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Despertar",
  "en": "To wake (someone) up",
  "ja": "起こす",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Descansar",
  "en": "To rest",
  "ja": "休む",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Relajarse",
  "en": "To relax",
  "ja": "リラックスする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Preocuparse",
  "en": "To worry",
  "ja": "心配する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Molestar",
  "en": "To bother, annoy",
  "ja": "邪魔する、悩ませる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Enojarse",
  "en": "To get angry",
  "ja": "怒る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Calmarse",
  "en": "To calm down",
  "ja": "落ち着く",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Sorprender",
  "en": "To surprise",
  "ja": "驚かせる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Asustar",
  "en": "To scare",
  "ja": "怖がらせる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Aburrir",
  "en": "To bore",
  "ja": "退屈させる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Divertirse",
  "en": "To have fun",
  "ja": "楽しむ",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Disfrutar",
  "en": "To enjoy",
  "ja": "満喫する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Sufrir",
  "en": "To suffer",
  "ja": "苦しむ",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Soportar",
  "en": "To tolerate, bear",
  "ja": "我慢する、耐える",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Aguantar",
  "en": "To endure, put up with",
  "ja": "我慢する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Resolver",
  "en": "To resolve, solve",
  "ja": "解決する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Solucionar",
  "en": "To solve",
  "ja": "解決する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Crear",
  "en": "To create",
  "ja": "創造する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Inventar",
  "en": "To invent",
  "ja": "発明する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Descubrir",
  "en": "To discover",
  "ja": "発見する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Investigar",
  "en": "To investigate, research",
  "ja": "調査する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Explicar",
  "en": "To explain",
  "ja": "説明する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Describir",
  "en": "To describe",
  "ja": "描写する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Definir",
  "en": "To define",
  "ja": "定義する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Distinguir",
  "en": "To distinguish",
  "ja": "区別する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Confundir",
  "en": "To confuse",
  "ja": "混同する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Reconocer",
  "en": "To recognize",
  "ja": "認識する、認める",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Elegir",
  "en": "To choose",
  "ja": "選ぶ",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Preferir",
  "en": "To prefer",
  "ja": "〜の方が好きだ",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Odiar",
  "en": "To hate",
  "ja": "嫌う",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Desear",
  "en": "To wish, desire",
  "ja": "望む",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Confiar",
  "en": "To trust",
  "ja": "信頼する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Dudar",
  "en": "To doubt",
  "ja": "疑う",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Sospechar",
  "en": "To suspect",
  "ja": "疑う、勘づく",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Suponer",
  "en": "To suppose, assume",
  "ja": "推測する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Deducir",
  "en": "To deduce",
  "ja": "推理する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Concluir",
  "en": "To conclude",
  "ja": "結論づける",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Negar",
  "en": "To deny",
  "ja": "否定する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Admitir",
  "en": "To admit",
  "ja": "認める",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Rendirse",
  "en": "To give up, surrender",
  "ja": "降参する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Persistir",
  "en": "To persist",
  "ja": "固執する、続ける",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Continuar",
  "en": "To continue",
  "ja": "続ける",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Detener",
  "en": "To stop, halt",
  "ja": "止める",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Parar",
  "en": "To stop",
  "ja": "止まる、止める",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Acabar",
  "en": "To finish",
  "ja": "終える",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Iniciar",
  "en": "To initiate, start",
  "ja": "開始する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Comenzar",
  "en": "To begin",
  "ja": "始める",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Establecer",
  "en": "To establish",
  "ja": "確立する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Fundar",
  "en": "To found",
  "ja": "設立する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Preparar",
  "en": "To prepare",
  "ja": "準備する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Dirigir",
  "en": "To direct, manage",
  "ja": "指揮する、経営する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Liderar",
  "en": "To lead",
  "ja": "率いる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Administrar",
  "en": "To administer, manage",
  "ja": "管理する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Manejar",
  "en": "To handle, drive",
  "ja": "扱う、運転する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Controlar",
  "en": "To control",
  "ja": "制御する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Dominar",
  "en": "To dominate, master",
  "ja": "支配する、習得する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Superar",
  "en": "To overcome, surpass",
  "ja": "乗り越える、上回る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Triunfar",
  "en": "To triumph",
  "ja": "勝利する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Fallar",
  "en": "To fail, malfunction",
  "ja": "失敗する、故障する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Equivocarse",
  "en": "To be mistaken",
  "ja": "間違える",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La aerolínea",
  "en": "Airline",
  "ja": "航空会社",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El abordaje",
  "en": "Boarding",
  "ja": "搭乗",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "La almendra",
  "en": "Almond",
  "ja": "アーモンド",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "Amueblado",
  "en": "Furnished",
  "ja": "家具付きの",
  "cat": "Casa",
  "pos": "形容詞"
 },
 {
  "es": "Apurarse",
  "en": "To hurry",
  "ja": "急ぐ",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Alérgico",
  "en": "Allergic",
  "ja": "アレルギーがある",
  "cat": "Salud",
  "pos": "形容詞"
 },
 {
  "es": "Bancario",
  "en": "Banking (adj.)",
  "ja": "銀行の",
  "cat": "Finanzas",
  "pos": "形容詞"
 },
 {
  "es": "El bolsillo",
  "en": "Pocket",
  "ja": "ポケット",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cacahuate",
  "en": "Peanut",
  "ja": "ピーナッツ",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "El cajero",
  "en": "Cashier / ATM",
  "ja": "レジ係・ATM",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El catálogo",
  "en": "Catalog",
  "ja": "カタログ",
  "cat": "Compras",
  "pos": "名詞（男性）"
 },
 {
  "es": "La comisión",
  "en": "Commission / fee",
  "ja": "手数料",
  "cat": "Finanzas",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cuadra",
  "en": "City block",
  "ja": "街区（道の1ブロック）",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "Deslactosado",
  "en": "Lactose-free",
  "ja": "乳糖不使用の",
  "cat": "Comida",
  "pos": "形容詞"
 },
 {
  "es": "El departamento",
  "en": "Apartment",
  "ja": "アパート",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El depósito",
  "en": "Deposit",
  "ja": "保証金・預金",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "Despejado",
  "en": "Clear (sky)",
  "ja": "快晴の",
  "cat": "Clima",
  "pos": "形容詞"
 },
 {
  "es": "Disponible",
  "en": "Available",
  "ja": "利用可能な",
  "cat": "General",
  "pos": "形容詞"
 },
 {
  "es": "El dólar",
  "en": "Dollar",
  "ja": "ドル",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "Las emergencias",
  "en": "Emergencies",
  "ja": "緊急事態",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "Entero",
  "en": "Whole",
  "ja": "丸ごとの",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "La esquina",
  "en": "Corner",
  "ja": "角",
  "cat": "Lugares",
  "pos": "名詞（女性）"
 },
 {
  "es": "El estilo",
  "en": "Style",
  "ja": "スタイル",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "Facturar",
  "en": "To check in (luggage)",
  "ja": "（荷物を）預ける",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El granizo",
  "en": "Hail",
  "ja": "雹",
  "cat": "Clima",
  "pos": "名詞（男性）"
 },
 {
  "es": "Gratis",
  "en": "Free (of charge)",
  "ja": "無料の",
  "cat": "Compras",
  "pos": "形容詞"
 },
 {
  "es": "Horrible",
  "en": "Horrible",
  "ja": "ひどい",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Incluido",
  "en": "Included",
  "ja": "含まれている",
  "cat": "General",
  "pos": "形容詞"
 },
 {
  "es": "Inscribirse",
  "en": "To enroll",
  "ja": "登録する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Lácteo",
  "en": "Dairy",
  "ja": "乳製品の",
  "cat": "Comida",
  "pos": "形容詞"
 },
 {
  "es": "El límite",
  "en": "Limit",
  "ja": "限度",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La llamada",
  "en": "Phone call",
  "ja": "電話",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "La máquina",
  "en": "Machine",
  "ja": "機械",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "La mascota",
  "en": "Pet",
  "ja": "ペット",
  "cat": "Animales",
  "pos": "名詞（女性）"
 },
 {
  "es": "La membresía",
  "en": "Membership",
  "ja": "会員権",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "Mensual",
  "en": "Monthly",
  "ja": "月々の",
  "cat": "Finanzas",
  "pos": "形容詞"
 },
 {
  "es": "Mudarse",
  "en": "To move (residence)",
  "ja": "引っ越す",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La nuez",
  "en": "Walnut / nut",
  "ja": "クルミ",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El objeto",
  "en": "Object",
  "ja": "物",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La opción",
  "en": "Option",
  "ja": "選択肢",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El peso",
  "en": "Peso (currency) / weight",
  "ja": "ペソ（通貨）・重さ",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "El platillo",
  "en": "Dish (food)",
  "ja": "料理",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "Prohibido",
  "en": "Prohibited",
  "ja": "禁止されている",
  "cat": "General",
  "pos": "形容詞"
 },
 {
  "es": "Pronosticar",
  "en": "To forecast",
  "ja": "予報する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Propio",
  "en": "One's own",
  "ja": "自分自身の",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "El propósito",
  "en": "Purpose",
  "ja": "目的",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "Reagendar",
  "en": "To reschedule",
  "ja": "予定を変更する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Refrescar",
  "en": "To cool down",
  "ja": "涼しくなる",
  "cat": "Clima",
  "pos": "動詞"
 },
 {
  "es": "La renta",
  "en": "Rent",
  "ja": "家賃",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "Reportar",
  "en": "To report",
  "ja": "報告する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La reservación",
  "en": "Reservation",
  "ja": "予約",
  "cat": "Viajes",
  "pos": "名詞（女性）"
 },
 {
  "es": "El retiro",
  "en": "Withdrawal",
  "ja": "引き出し",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "Robar",
  "en": "To steal",
  "ja": "盗む",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La señal",
  "en": "Signal",
  "ja": "電波・信号",
  "cat": "Tecnología",
  "pos": "名詞（女性）"
 },
 {
  "es": "El tamaño",
  "en": "Size",
  "ja": "大きさ",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La temperatura",
  "en": "Temperature",
  "ja": "気温",
  "cat": "Clima",
  "pos": "名詞（女性）"
 },
 {
  "es": "Teñir",
  "en": "To dye",
  "ja": "染める",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Urgentemente",
  "en": "Urgently",
  "ja": "緊急に",
  "cat": "General",
  "pos": "形容詞"
 },
 {
  "es": "Vaciar",
  "en": "To empty",
  "ja": "空にする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Vegetariano",
  "en": "Vegetarian",
  "ja": "ベジタリアンの",
  "cat": "Comida",
  "pos": "形容詞"
 },
 {
  "es": "Vegano",
  "en": "Vegan",
  "ja": "ビーガンの",
  "cat": "Comida",
  "pos": "形容詞"
 },
 {
  "es": "La verdura",
  "en": "Vegetable",
  "ja": "野菜",
  "cat": "Comida",
  "pos": "名詞（女性）"
 },
 {
  "es": "El vestidor",
  "en": "Fitting room",
  "ja": "試着室",
  "cat": "Compras",
  "pos": "名詞（男性）"
 },
 {
  "es": "El vuelo",
  "en": "Flight",
  "ja": "フライト",
  "cat": "Viajes",
  "pos": "名詞（男性）"
 },
 {
  "es": "La nostalgia",
  "en": "Nostalgia",
  "ja": "郷愁",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "El orgullo",
  "en": "Pride",
  "ja": "誇り",
  "cat": "Emociones",
  "pos": "名詞（男性）"
 },
 {
  "es": "La vergüenza",
  "en": "Shame / embarrassment",
  "ja": "恥ずかしさ",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "El alivio",
  "en": "Relief",
  "ja": "安堵",
  "cat": "Emociones",
  "pos": "名詞（男性）"
 },
 {
  "es": "La envidia",
  "en": "Envy",
  "ja": "嫉妬・羨望",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "La culpa",
  "en": "Guilt",
  "ja": "罪悪感",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "La ansiedad",
  "en": "Anxiety",
  "ja": "不安",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "El estrés",
  "en": "Stress",
  "ja": "ストレス",
  "cat": "Emociones",
  "pos": "名詞（男性）"
 },
 {
  "es": "La motivación",
  "en": "Motivation",
  "ja": "モチベーション",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "La autoestima",
  "en": "Self-esteem",
  "ja": "自尊心",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "La empatía",
  "en": "Empathy",
  "ja": "共感",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "Asar",
  "en": "To roast / grill",
  "ja": "焼く（直火・オーブンで）",
  "cat": "Cocina",
  "pos": "動詞"
 },
 {
  "es": "Picar",
  "en": "To chop / mince",
  "ja": "細かく刻む",
  "cat": "Cocina",
  "pos": "動詞"
 },
 {
  "es": "Marinar",
  "en": "To marinate",
  "ja": "漬け込む",
  "cat": "Cocina",
  "pos": "動詞"
 },
 {
  "es": "Sazonar",
  "en": "To season",
  "ja": "味付けする",
  "cat": "Cocina",
  "pos": "動詞"
 },
 {
  "es": "La libertad",
  "en": "Freedom",
  "ja": "自由",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "La justicia",
  "en": "Justice",
  "ja": "正義",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El respeto",
  "en": "Respect",
  "ja": "尊重",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "La confianza",
  "en": "Trust",
  "ja": "信頼",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "La honestidad",
  "en": "Honesty",
  "ja": "誠実さ",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El relámpago",
  "en": "Lightning",
  "ja": "稲妻",
  "cat": "Clima",
  "pos": "名詞（男性）"
 },
 {
  "es": "El trueno",
  "en": "Thunder",
  "ja": "雷鳴",
  "cat": "Clima",
  "pos": "名詞（男性）"
 },
 {
  "es": "La neblina",
  "en": "Mist / light fog",
  "ja": "霧",
  "cat": "Clima",
  "pos": "名詞（女性）"
 },
 {
  "es": "El rocío",
  "en": "Dew",
  "ja": "露",
  "cat": "Naturaleza",
  "pos": "名詞（男性）"
 },
 {
  "es": "El karma",
  "en": "Karma",
  "ja": "カルマ",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La suerte",
  "en": "Luck",
  "ja": "運",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "La coincidencia",
  "en": "Coincidence",
  "ja": "偶然の一致",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El instinto",
  "en": "Instinct",
  "ja": "本能",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El sarcasmo",
  "en": "Sarcasm",
  "ja": "皮肉",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La ironía",
  "en": "Irony",
  "ja": "皮肉・アイロニー",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El humor",
  "en": "Humor",
  "ja": "ユーモア",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La broma",
  "en": "Joke",
  "ja": "冗談",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "La anécdota",
  "en": "Anecdote",
  "ja": "逸話",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "La cómoda",
  "en": "Dresser / chest of drawers",
  "ja": "たんす",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El escritorio",
  "en": "Desk",
  "ja": "机（学習・仕事用）",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "Reproducir",
  "en": "To play (video/audio)",
  "ja": "再生する",
  "cat": "Tecnología",
  "pos": "動詞"
 },
 {
  "es": "Pausar",
  "en": "To pause",
  "ja": "一時停止する",
  "cat": "Tecnología",
  "pos": "動詞"
 },
 {
  "es": "Omitir",
  "en": "To skip",
  "ja": "スキップする",
  "cat": "Tecnología",
  "pos": "動詞"
 },
 {
  "es": "Los subtítulos",
  "en": "Subtitles",
  "ja": "字幕",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El doblaje",
  "en": "Dubbing",
  "ja": "吹き替え",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El control remoto",
  "en": "Remote control",
  "ja": "リモコン",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "El riñón",
  "en": "Kidney",
  "ja": "腎臓",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "El intestino",
  "en": "Intestine",
  "ja": "腸",
  "cat": "Cuerpo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La vejiga",
  "en": "Bladder",
  "ja": "膀胱",
  "cat": "Cuerpo",
  "pos": "名詞（女性）"
 },
 {
  "es": "La gripe",
  "en": "Flu",
  "ja": "インフルエンザ",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La diarrea",
  "en": "Diarrhea",
  "ja": "下痢",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El vómito",
  "en": "Vomit",
  "ja": "嘔吐",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La infección",
  "en": "Infection",
  "ja": "感染症",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La proteína",
  "en": "Protein",
  "ja": "タンパク質",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La vitamina",
  "en": "Vitamin",
  "ja": "ビタミン",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El carbohidrato",
  "en": "Carbohydrate",
  "ja": "炭水化物",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La grasa",
  "en": "Fat",
  "ja": "脂肪",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La fibra",
  "en": "Fiber",
  "ja": "食物繊維",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El calcio",
  "en": "Calcium",
  "ja": "カルシウム",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "El hierro",
  "en": "Iron",
  "ja": "鉄分",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "Pasado mañana",
  "en": "The day after tomorrow",
  "ja": "あさって",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Anteayer",
  "en": "The day before yesterday",
  "ja": "おととい",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Obtener",
  "en": "To obtain, get",
  "ja": "得る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Sacar",
  "en": "To take out, get",
  "ja": "取り出す・得る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Coger",
  "en": "To grab, take (careful: vulgar in some countries)",
  "ja": "つかむ・取る（地域によって卑語になるので注意）",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Agarrar",
  "en": "To grab",
  "ja": "つかむ",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Sentirse mal",
  "en": "To feel unwell",
  "ja": "具合が悪い",
  "cat": "Salud",
  "pos": "表現"
 },
 {
  "es": "Tener náuseas",
  "en": "To feel nauseous",
  "ja": "吐き気がする",
  "cat": "Salud",
  "pos": "表現"
 },
 {
  "es": "Marearse",
  "en": "To feel dizzy",
  "ja": "めまいがする",
  "cat": "Salud",
  "pos": "形容詞"
 },
 {
  "es": "Desmayarse",
  "en": "To faint",
  "ja": "気を失う",
  "cat": "Salud",
  "pos": "形容詞"
 },
 {
  "es": "Apagar",
  "en": "To turn off",
  "ja": "消す・オフにする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Encender",
  "en": "To turn on",
  "ja": "つける・オンにする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El toro",
  "en": "Bull",
  "ja": "雄牛",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El burro",
  "en": "Donkey",
  "ja": "ロバ",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "El pavo real",
  "en": "Peacock",
  "ja": "クジャク",
  "cat": "Animales",
  "pos": "名詞（男性）"
 },
 {
  "es": "Ya voy",
  "en": "I'm coming",
  "ja": "今行くよ",
  "cat": "Coloquial",
  "pos": "表現"
 },
 {
  "es": "Vale",
  "en": "Okay (Spain)",
  "ja": "オーケー（スペインの口語）",
  "cat": "Coloquial",
  "pos": "俗語"
 },
 {
  "es": "Por supuesto",
  "en": "Of course",
  "ja": "もちろん",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "Ni idea",
  "en": "No idea",
  "ja": "全然わからない",
  "cat": "Coloquial",
  "pos": "表現"
 },
 {
  "es": "No sé",
  "en": "I don't know",
  "ja": "わからない",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Ten cuidado",
  "en": "Be careful",
  "ja": "気をつけて",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Buena idea",
  "en": "Good idea",
  "ja": "いい考え",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Mala idea",
  "en": "Bad idea",
  "ja": "よくない考え",
  "cat": "Frases",
  "pos": "表現"
 },
 {
  "es": "Vamos",
  "en": "Let's go / Come on",
  "ja": "行こう・さあ",
  "cat": "Coloquial",
  "pos": "俗語"
 },
 {
  "es": "Ándale",
  "en": "Come on / Hurry up (Mexican)",
  "ja": "さあ行こう・急いで（メキシコの口語）",
  "cat": "Coloquial",
  "pos": "俗語"
 },
 {
  "es": "La carta",
  "en": "Letter / playing card / menu",
  "ja": "手紙・トランプのカード・メニュー",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El capital",
  "en": "Capital (money)",
  "ja": "資本金（お金の意味）",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "La vuelta",
  "en": "Return / change (money) / turn",
  "ja": "帰り・おつり・一周",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El trapo",
  "en": "Rag / cloth",
  "ja": "雑巾",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "Fregar",
  "en": "To scrub",
  "ja": "ゴシゴシ洗う",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Trapear",
  "en": "To mop",
  "ja": "モップがけする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Tender la ropa",
  "en": "To hang laundry to dry",
  "ja": "洗濯物を干す",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Doblar la ropa",
  "en": "To fold laundry",
  "ja": "洗濯物をたたむ",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La goma",
  "en": "Eraser",
  "ja": "消しゴム",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "El sacapuntas",
  "en": "Pencil sharpener",
  "ja": "鉛筆削り",
  "cat": "Educación",
  "pos": "名詞（男性）"
 },
 {
  "es": "La tijera",
  "en": "Scissors",
  "ja": "ハサミ",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "Oler",
  "en": "To smell",
  "ja": "匂いがする・匂いを嗅ぐ",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Tocar",
  "en": "To touch / to play (instrument)",
  "ja": "触る・（楽器を）弾く",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Saborear",
  "en": "To savor",
  "ja": "味わう",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Percibir",
  "en": "To perceive",
  "ja": "知覚する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La galaxia",
  "en": "Galaxy",
  "ja": "銀河",
  "cat": "Ciencia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El cometa",
  "en": "Comet",
  "ja": "彗星",
  "cat": "Ciencia",
  "pos": "名詞（男性）"
 },
 {
  "es": "El turno",
  "en": "Shift",
  "ja": "シフト",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La vacante",
  "en": "Job opening",
  "ja": "求人",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El bisabuelo",
  "en": "Great-grandfather",
  "ja": "曽祖父",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "El padrastro",
  "en": "Stepfather",
  "ja": "継父",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La madrastra",
  "en": "Stepmother",
  "ja": "継母",
  "cat": "Familia",
  "pos": "名詞（女性）"
 },
 {
  "es": "El hermanastro",
  "en": "Stepbrother",
  "ja": "異父・異母兄弟",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "El yerno",
  "en": "Son-in-law",
  "ja": "娘婿",
  "cat": "Familia",
  "pos": "名詞（男性）"
 },
 {
  "es": "La nuera",
  "en": "Daughter-in-law",
  "ja": "息子の嫁",
  "cat": "Familia",
  "pos": "名詞（女性）"
 },
 {
  "es": "Temblar",
  "en": "To tremble",
  "ja": "震える",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Sudar",
  "en": "To sweat",
  "ja": "汗をかく",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Sonrojarse",
  "en": "To blush",
  "ja": "赤面する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Llorar",
  "en": "To cry",
  "ja": "泣く",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Reír",
  "en": "To laugh",
  "ja": "笑う",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Suspirar",
  "en": "To sigh",
  "ja": "ため息をつく",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Regatear",
  "en": "To haggle",
  "ja": "値切る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El precio fijo",
  "en": "Fixed price",
  "ja": "定価",
  "cat": "Compras",
  "pos": "名詞（男性）"
 },
 {
  "es": "Al contado",
  "en": "In cash / lump sum",
  "ja": "一括払いで",
  "cat": "Finanzas",
  "pos": "表現"
 },
 {
  "es": "A plazos",
  "en": "In installments",
  "ja": "分割払いで",
  "cat": "Finanzas",
  "pos": "表現"
 },
 {
  "es": "Publicar",
  "en": "To post",
  "ja": "投稿する",
  "cat": "Tecnología",
  "pos": "動詞"
 },
 {
  "es": "Comentar",
  "en": "To comment",
  "ja": "コメントする",
  "cat": "Tecnología",
  "pos": "動詞"
 },
 {
  "es": "Bloquear",
  "en": "To block",
  "ja": "ブロックする",
  "cat": "Tecnología",
  "pos": "動詞"
 },
 {
  "es": "Esperar",
  "en": "To wait / to hope",
  "ja": "待つ・望む",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Decir",
  "en": "To say / to tell",
  "ja": "言う",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Siguiente",
  "en": "Next",
  "ja": "次の",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "El episodio",
  "en": "Episode",
  "ja": "エピソード",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "Guardar",
  "en": "To put away / to save",
  "ja": "しまう・保存する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Colgar",
  "en": "To hang",
  "ja": "掛ける",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Desconectar",
  "en": "To disconnect / unplug",
  "ja": "電源を抜く・切断する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Conectar",
  "en": "To connect",
  "ja": "接続する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El pronóstico",
  "en": "Forecast",
  "ja": "予報",
  "cat": "Clima",
  "pos": "名詞（男性）"
 },
 {
  "es": "La ola de calor",
  "en": "Heat wave",
  "ja": "熱波",
  "cat": "Clima",
  "pos": "名詞（女性）"
 },
 {
  "es": "El frente frío",
  "en": "Cold front",
  "ja": "寒冷前線",
  "cat": "Clima",
  "pos": "名詞（男性）"
 },
 {
  "es": "La humedad",
  "en": "Humidity",
  "ja": "湿度",
  "cat": "Clima",
  "pos": "名詞（女性）"
 },
 {
  "es": "La herida",
  "en": "Wound",
  "ja": "傷",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El moretón",
  "en": "Bruise",
  "ja": "あざ",
  "cat": "Salud",
  "pos": "名詞（男性）"
 },
 {
  "es": "La quemadura",
  "en": "Burn",
  "ja": "火傷",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "La torcedura",
  "en": "Sprain",
  "ja": "捻挫",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "Las muletas",
  "en": "Crutches",
  "ja": "松葉杖",
  "cat": "Salud",
  "pos": "名詞（女性）"
 },
 {
  "es": "El andén",
  "en": "Platform (train)",
  "ja": "（駅の）ホーム",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La parada",
  "en": "Bus stop",
  "ja": "バス停",
  "cat": "Transporte",
  "pos": "名詞（女性）"
 },
 {
  "es": "El boleto",
  "en": "Ticket",
  "ja": "切符",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "El pasaje",
  "en": "Fare / ticket",
  "ja": "運賃・乗車券",
  "cat": "Transporte",
  "pos": "名詞（男性）"
 },
 {
  "es": "Descender",
  "en": "To get off / descend",
  "ja": "降りる・下る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El menú del día",
  "en": "Today's set menu",
  "ja": "本日の定食",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "Para llevar",
  "en": "To go (takeout)",
  "ja": "テイクアウトで",
  "cat": "Compras",
  "pos": "表現"
 },
 {
  "es": "Para comer aquí",
  "en": "For here (dine-in)",
  "ja": "ここで食べる（イートイン）",
  "cat": "Compras",
  "pos": "表現"
 },
 {
  "es": "Compartir la cuenta",
  "en": "To split the bill",
  "ja": "割り勘にする",
  "cat": "Compras",
  "pos": "表現"
 },
 {
  "es": "La indiferencia",
  "en": "Indifference",
  "ja": "無関心",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "El entusiasmo",
  "en": "Enthusiasm",
  "ja": "熱意",
  "cat": "Emociones",
  "pos": "名詞（男性）"
 },
 {
  "es": "La frustración",
  "en": "Frustration",
  "ja": "苛立ち・欲求不満",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "La incomodidad",
  "en": "Discomfort",
  "ja": "居心地の悪さ",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "La calificación",
  "en": "Grade",
  "ja": "成績",
  "cat": "Educación",
  "pos": "名詞（女性）"
 },
 {
  "es": "Aprobar",
  "en": "To pass (an exam)",
  "ja": "合格する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Reprobar",
  "en": "To fail (an exam)",
  "ja": "不合格になる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Graduarse",
  "en": "To graduate",
  "ja": "卒業する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La junta",
  "en": "Meeting (Mexican term)",
  "ja": "会議（メキシコの言い方）",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "Renunciar",
  "en": "To resign",
  "ja": "辞職する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Contratar",
  "en": "To hire",
  "ja": "雇う",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Despedir",
  "en": "To fire / dismiss",
  "ja": "解雇する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Sacudir",
  "en": "To dust / shake off",
  "ja": "ほこりを払う",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Barrer",
  "en": "To sweep",
  "ja": "掃く",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Tender la cama",
  "en": "To make the bed",
  "ja": "ベッドを整える",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Sacar la basura",
  "en": "To take out the trash",
  "ja": "ゴミを出す",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La tostadora",
  "en": "Toaster",
  "ja": "トースター",
  "cat": "Cocina",
  "pos": "名詞（女性）"
 },
 {
  "es": "El exprimidor",
  "en": "Juicer / squeezer",
  "ja": "絞り器",
  "cat": "Cocina",
  "pos": "名詞（男性）"
 },
 {
  "es": "El molde",
  "en": "Baking mold / pan",
  "ja": "型（お菓子・料理用）",
  "cat": "Cocina",
  "pos": "名詞（男性）"
 },
 {
  "es": "El traje de baño",
  "en": "Swimsuit",
  "ja": "水着",
  "cat": "Ropa",
  "pos": "名詞（男性）"
 },
 {
  "es": "Las chanclas",
  "en": "Flip-flops / sandals",
  "ja": "ビーチサンダル",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "La ropa interior",
  "en": "Underwear",
  "ja": "下着",
  "cat": "Ropa",
  "pos": "名詞（女性）"
 },
 {
  "es": "Liso",
  "en": "Smooth / straight (hair)",
  "ja": "つるつるの・（髪が）ストレートの",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Pegajoso",
  "en": "Sticky",
  "ja": "べたべたする",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Resbaloso",
  "en": "Slippery",
  "ja": "滑りやすい",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Terco",
  "en": "Stubborn",
  "ja": "頑固な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Impulsivo",
  "en": "Impulsive",
  "ja": "衝動的な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Reservado",
  "en": "Reserved",
  "ja": "控えめな",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Extrovertido",
  "en": "Extroverted",
  "ja": "外向的な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Introvertido",
  "en": "Introverted",
  "ja": "内向的な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Nacer",
  "en": "To be born",
  "ja": "生まれる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Crecer",
  "en": "To grow up",
  "ja": "成長する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Envejecer",
  "en": "To age / grow old",
  "ja": "年を取る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Fallecer",
  "en": "To pass away",
  "ja": "亡くなる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El nacimiento",
  "en": "Birth",
  "ja": "誕生",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El archivo adjunto",
  "en": "Attached file",
  "ja": "添付ファイル",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "Saludos",
  "en": "Regards",
  "ja": "よろしくお願いします（結びの挨拶）",
  "cat": "Trabajo",
  "pos": "形容詞"
 },
 {
  "es": "Atentamente",
  "en": "Sincerely",
  "ja": "敬具",
  "cat": "Trabajo",
  "pos": "形容詞"
 },
 {
  "es": "Estimado",
  "en": "Dear (formal letter)",
  "ja": "拝啓・様（フォーマルな手紙の宛名）",
  "cat": "Trabajo",
  "pos": "形容詞"
 },
 {
  "es": "Apenas",
  "en": "Barely / just",
  "ja": "かろうじて・〜したばかり",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Casi",
  "en": "Almost",
  "ja": "ほとんど",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Bastante",
  "en": "Quite / enough",
  "ja": "かなり・十分に",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Demasiado",
  "en": "Too much",
  "ja": "多すぎる",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Ligeramente",
  "en": "Slightly",
  "ja": "わずかに",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "El crimen",
  "en": "Crime",
  "ja": "犯罪",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "El delito",
  "en": "Offense / crime",
  "ja": "犯罪行為",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "El asesinato",
  "en": "Murder",
  "ja": "殺人",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "Asesinar",
  "en": "To murder",
  "ja": "殺害する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El robo",
  "en": "Theft / robbery",
  "ja": "盗み・強盗",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "El asalto",
  "en": "Assault / mugging",
  "ja": "襲撃",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "Asaltar",
  "en": "To assault / mug",
  "ja": "襲う",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El incendio provocado",
  "en": "Arson",
  "ja": "放火",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "El secuestro",
  "en": "Kidnapping",
  "ja": "誘拐",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "Secuestrar",
  "en": "To kidnap",
  "ja": "誘拐する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El fraude",
  "en": "Fraud",
  "ja": "詐欺（法的な）",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "Estafar",
  "en": "To swindle / scam",
  "ja": "だまし取る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La estafa",
  "en": "Scam",
  "ja": "詐欺（手口）",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El chantaje",
  "en": "Blackmail",
  "ja": "恐喝",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "Sobornar",
  "en": "To bribe",
  "ja": "賄賂を渡す",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El soborno",
  "en": "Bribe",
  "ja": "賄賂",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "La extorsión",
  "en": "Extortion",
  "ja": "恐喝・ゆすり",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "La pandilla",
  "en": "Gang",
  "ja": "ギャング",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El criminal",
  "en": "Criminal",
  "ja": "犯罪者",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "El delincuente",
  "en": "Offender",
  "ja": "犯罪者・非行者",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "Arrestar",
  "en": "To arrest",
  "ja": "逮捕する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El arresto",
  "en": "Arrest",
  "ja": "逮捕",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cárcel",
  "en": "Jail",
  "ja": "刑務所",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "Condenar",
  "en": "To convict / sentence",
  "ja": "有罪判決を下す",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La condena",
  "en": "Sentence (legal)",
  "ja": "刑・判決",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El testigo",
  "en": "Witness",
  "ja": "証人",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "La evidencia",
  "en": "Evidence",
  "ja": "証拠",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "La denuncia",
  "en": "Report (to police)",
  "ja": "届け出・告発",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "Denunciar",
  "en": "To report (a crime)",
  "ja": "届け出る・告発する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La víctima",
  "en": "Victim",
  "ja": "被害者",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El ladrón",
  "en": "Thief",
  "ja": "泥棒",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "Bien comunicado",
  "en": "Well-connected (transit)",
  "ja": "交通の便がいい",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Mal comunicado",
  "en": "Poorly connected (transit)",
  "ja": "交通の便が悪い",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Sintético",
  "en": "Synthetic",
  "ja": "合成の",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Pasado de moda",
  "en": "Out of style",
  "ja": "流行遅れの",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "De cuadros",
  "en": "Checkered / plaid",
  "ja": "チェック柄の",
  "cat": "Ropa",
  "pos": "表現"
 },
 {
  "es": "De lunares",
  "en": "Polka-dotted",
  "ja": "水玉模様の",
  "cat": "Ropa",
  "pos": "表現"
 },
 {
  "es": "De rayas",
  "en": "Striped",
  "ja": "ストライプの",
  "cat": "Ropa",
  "pos": "表現"
 },
 {
  "es": "Afortunadamente",
  "en": "Fortunately",
  "ja": "幸いにも",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Desgraciadamente",
  "en": "Unfortunately",
  "ja": "残念ながら",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Precisamente",
  "en": "Precisely",
  "ja": "まさに",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Anteriormente",
  "en": "Previously",
  "ja": "以前に",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Justamente",
  "en": "Exactly / fairly",
  "ja": "ちょうど・公正に",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Particularmente",
  "en": "Particularly",
  "ja": "特に",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Verdaderamente",
  "en": "Truly",
  "ja": "本当に",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Especialmente",
  "en": "Especially",
  "ja": "特別に",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Inmediatamente",
  "en": "Immediately",
  "ja": "直ちに",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Continuamente",
  "en": "Continuously",
  "ja": "絶えず",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Instantáneamente",
  "en": "Instantly",
  "ja": "瞬時に",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Repetidamente",
  "en": "Repeatedly",
  "ja": "繰り返し",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Repentinamente",
  "en": "Suddenly",
  "ja": "突然",
  "cat": "Frecuencia",
  "pos": "副詞"
 },
 {
  "es": "Admirablemente",
  "en": "Admirably",
  "ja": "見事に",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Perfectamente",
  "en": "Perfectly",
  "ja": "完璧に",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Desesperadamente",
  "en": "Desperately",
  "ja": "必死に",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Severamente",
  "en": "Severely",
  "ja": "厳しく",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Probablemente",
  "en": "Probably",
  "ja": "おそらく",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Posiblemente",
  "en": "Possibly",
  "ja": "ひょっとすると",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Indudablemente",
  "en": "Undoubtedly",
  "ja": "間違いなく",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Absolutamente",
  "en": "Absolutely",
  "ja": "絶対に",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Realmente",
  "en": "Really",
  "ja": "本当に・現実に",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Sinceramente",
  "en": "Sincerely",
  "ja": "心から",
  "cat": "Adverbios",
  "pos": "副詞"
 },
 {
  "es": "Tratar de",
  "en": "To try to",
  "ja": "〜しようと試みる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Referirse a",
  "en": "To refer to",
  "ja": "〜について言及する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Dar a luz",
  "en": "To give birth",
  "ja": "出産する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Salirle bien",
  "en": "To turn out well",
  "ja": "うまくいく",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Volver a",
  "en": "To do again",
  "ja": "再び〜する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Dejar de",
  "en": "To stop doing",
  "ja": "〜するのをやめる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Ponerse a",
  "en": "To start doing",
  "ja": "〜し始める",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Estar a punto de",
  "en": "To be about to",
  "ja": "今にも〜するところだ",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Puesto que",
  "en": "Given that / since",
  "ja": "〜だから",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "Ya que",
  "en": "Since / given that",
  "ja": "〜であるからには",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "Debido a",
  "en": "Due to",
  "ja": "〜のせいで",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "En un principio",
  "en": "At first",
  "ja": "最初は",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "En principio",
  "en": "In principle",
  "ja": "原則として",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "De todas maneras",
  "en": "Anyway",
  "ja": "いずれにしても",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "O sea",
  "en": "That is to say",
  "ja": "すなわち",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "Asimismo",
  "en": "Likewise",
  "ja": "同様に",
  "cat": "Conectores",
  "pos": "接続詞"
 },
 {
  "es": "El escultor",
  "en": "Sculptor",
  "ja": "彫刻家",
  "cat": "Arte",
  "pos": "名詞（男性）"
 },
 {
  "es": "La misa",
  "en": "Mass (Catholic service)",
  "ja": "ミサ",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El sacerdote",
  "en": "Priest",
  "ja": "司祭",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "La fe",
  "en": "Faith",
  "ja": "信仰",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "Rezar",
  "en": "To pray",
  "ja": "祈る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La oración",
  "en": "Prayer",
  "ja": "祈り",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "Bautizar",
  "en": "To baptize",
  "ja": "洗礼を施す",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El bautizo",
  "en": "Baptism",
  "ja": "洗礼式",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "Casarse",
  "en": "To get married",
  "ja": "結婚する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Divorciarse",
  "en": "To get divorced",
  "ja": "離婚する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El divorcio",
  "en": "Divorce",
  "ja": "離婚",
  "cat": "Sociedad",
  "pos": "名詞（男性）"
 },
 {
  "es": "Creyente",
  "en": "Believer",
  "ja": "信者",
  "cat": "Sociedad",
  "pos": "形容詞"
 },
 {
  "es": "Sagrado",
  "en": "Sacred",
  "ja": "神聖な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "El arrendador",
  "en": "Landlord",
  "ja": "貸主",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El arrendatario",
  "en": "Tenant",
  "ja": "借主",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La tarifa",
  "en": "Rate / fee",
  "ja": "料金",
  "cat": "Finanzas",
  "pos": "名詞（女性）"
 },
 {
  "es": "El tipo de interés",
  "en": "Interest rate",
  "ja": "金利",
  "cat": "Finanzas",
  "pos": "名詞（男性）"
 },
 {
  "es": "Prestar",
  "en": "To lend",
  "ja": "貸す",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El balcón",
  "en": "Balcony",
  "ja": "バルコニー",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La terraza",
  "en": "Terrace",
  "ja": "テラス",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El ascensor",
  "en": "Elevator",
  "ja": "エレベーター",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El sótano",
  "en": "Basement",
  "ja": "地下室",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La fachada",
  "en": "Facade",
  "ja": "建物の正面",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "Reciclar",
  "en": "To recycle",
  "ja": "リサイクルする",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La energía renovable",
  "en": "Renewable energy",
  "ja": "再生可能エネルギー",
  "cat": "Naturaleza",
  "pos": "名詞（女性）"
 },
 {
  "es": "El plástico",
  "en": "Plastic",
  "ja": "プラスチック",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "Sostenible",
  "en": "Sustainable",
  "ja": "持続可能な",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Votar",
  "en": "To vote",
  "ja": "投票する",
  "cat": "Sociedad",
  "pos": "動詞"
 },
 {
  "es": "Legal",
  "en": "Legal",
  "ja": "合法の",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "Ilegal",
  "en": "Illegal",
  "ja": "違法の",
  "cat": "Adjetivos",
  "pos": "形容詞"
 },
 {
  "es": "La libertad de expresión",
  "en": "Freedom of speech",
  "ja": "表現の自由",
  "cat": "Sociedad",
  "pos": "名詞（女性）"
 },
 {
  "es": "El algoritmo",
  "en": "Algorithm",
  "ja": "アルゴリズム",
  "cat": "Tecnología",
  "pos": "名詞（男性）"
 },
 {
  "es": "La negociación",
  "en": "Negotiation",
  "ja": "交渉",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "El socio",
  "en": "Business partner",
  "ja": "共同経営者",
  "cat": "Trabajo",
  "pos": "名詞（男性）"
 },
 {
  "es": "La sociedad",
  "en": "Company / society",
  "ja": "会社・社会",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "Fusionar",
  "en": "To merge",
  "ja": "合併する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La fusión",
  "en": "Merger",
  "ja": "合併",
  "cat": "Trabajo",
  "pos": "名詞（女性）"
 },
 {
  "es": "Lanzar",
  "en": "To throw",
  "ja": "投げる",
  "cat": "Deportes",
  "pos": "動詞"
 },
 {
  "es": "Atrapar",
  "en": "To catch",
  "ja": "捕まえる",
  "cat": "Deportes",
  "pos": "動詞"
 },
 {
  "es": "Patear",
  "en": "To kick",
  "ja": "蹴る",
  "cat": "Deportes",
  "pos": "動詞"
 },
 {
  "es": "Anotar",
  "en": "To score",
  "ja": "得点する",
  "cat": "Deportes",
  "pos": "動詞"
 },
 {
  "es": "El gol",
  "en": "Goal (score)",
  "ja": "ゴール（得点）",
  "cat": "Deportes",
  "pos": "名詞（男性）"
 },
 {
  "es": "El enchufe",
  "en": "Electrical outlet / plug",
  "ja": "コンセント・プラグ",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "El interruptor",
  "en": "Switch",
  "ja": "スイッチ",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "La cerradura",
  "en": "Lock",
  "ja": "錠前",
  "cat": "Casa",
  "pos": "名詞（女性）"
 },
 {
  "es": "El timbre",
  "en": "Doorbell",
  "ja": "呼び鈴",
  "cat": "Casa",
  "pos": "名詞（男性）"
 },
 {
  "es": "Quejarse",
  "en": "To complain",
  "ja": "不満を言う",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Reclamar",
  "en": "To claim, demand",
  "ja": "苦情を言う・要求する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Perdonar",
  "en": "To forgive",
  "ja": "許す",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La disculpa",
  "en": "Apology",
  "ja": "謝罪",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "El compromiso",
  "en": "Commitment",
  "ja": "約束・コミットメント",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "Comprometerse",
  "en": "To commit oneself",
  "ja": "約束する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La promesa",
  "en": "Promise",
  "ja": "約束",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "Prometer",
  "en": "To promise",
  "ja": "約束する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Cumplir",
  "en": "To fulfill, keep (a promise)",
  "ja": "（約束を）守る・果たす",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Incumplir",
  "en": "To fail to fulfill",
  "ja": "（約束を）破る",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La sorpresa",
  "en": "Surprise",
  "ja": "驚き",
  "cat": "Emociones",
  "pos": "名詞（女性）"
 },
 {
  "es": "Sorprenderse",
  "en": "To be surprised",
  "ja": "驚く",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La certeza",
  "en": "Certainty",
  "ja": "確信",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "Estar seguro",
  "en": "To be sure",
  "ja": "確信している",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El consejo",
  "en": "Advice",
  "ja": "アドバイス",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "Aconsejar",
  "en": "To advise",
  "ja": "助言する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La sugerencia",
  "en": "Suggestion",
  "ja": "提案",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El hábito",
  "en": "Habit",
  "ja": "習慣",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "Acostumbrarse",
  "en": "To get used to",
  "ja": "慣れる",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "Soler",
  "en": "To usually do",
  "ja": "いつも〜する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "La meta",
  "en": "Goal",
  "ja": "目標",
  "cat": "General",
  "pos": "名詞（女性）"
 },
 {
  "es": "El objetivo",
  "en": "Objective",
  "ja": "目的",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "Alcanzar",
  "en": "To reach, achieve",
  "ja": "達成する",
  "cat": "Verbos",
  "pos": "動詞"
 },
 {
  "es": "El logro",
  "en": "Achievement",
  "ja": "達成・成果",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "El fracaso",
  "en": "Failure",
  "ja": "失敗",
  "cat": "General",
  "pos": "名詞（男性）"
 },
 {
  "es": "La naranja",
  "en": "Orange (fruit)",
  "ja": "オレンジ(果物)",
  "cat": "Comida",
  "pos": "名詞（女性）／形容詞"
 },
 {
  "es": "La fresa",
  "en": "Strawberry",
  "ja": "いちご",
  "cat": "Comida",
  "pos": "名詞（女性）／俗語"
 },
 {
  "es": "El chile",
  "en": "Chili pepper",
  "ja": "唐辛子",
  "cat": "Comida",
  "pos": "名詞（男性）"
 },
 {
  "es": "La lana",
  "en": "Wool",
  "ja": "ウール",
  "cat": "Ropa",
  "pos": "名詞（女性）／俗語"
 },
 {
  "es": "La sartén",
  "en": "Frying pan",
  "ja": "フライパン",
  "cat": "Cocina",
  "pos": "名詞（女性/男性）"
 },
 {
  "es": "Sospechoso",
  "en": "Suspicious",
  "ja": "怪しい、疑わしい",
  "cat": "Adjetivos",
  "pos": "形容詞／名詞（男性）"
 },
 {
  "es": "Ahorita",
  "en": "Right now / in a bit (ambiguous timing, colloquial)",
  "ja": "今すぐ／ちょっと後で（文脈次第、口語）",
  "cat": "Coloquial",
  "pos": "副詞",
  "nivel": "avanzado"
 },
 {
  "es": "Onda",
  "en": "Vibe / thing (colloquial)",
  "ja": "雰囲気・感じ・こと（口語）",
  "cat": "Coloquial",
  "pos": "名詞（女性）",
  "nivel": "avanzado"
 },
 {
  "es": "Mande",
  "en": "Pardon? / Yes? (polite response)",
  "ja": "はい？／もう一度言っていただけますか（丁寧な返事・聞き返し）",
  "cat": "Coloquial",
  "pos": "表現",
  "nivel": "intermedio"
 },
 {
  "es": "Antojo",
  "en": "Craving",
  "ja": "（食べ物などへの）欲求・食べたい気持ち",
  "cat": "Comida",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Tocayo",
  "en": "Namesake (person who shares your name)",
  "ja": "同名の人",
  "cat": "Sociedad",
  "pos": "名詞（男性）",
  "nivel": "avanzado"
 },
 {
  "es": "Compadre",
  "en": "Godfather-in-law relationship; close friend (colloquial)",
  "ja": "代父同士の関係、または親しい友人（口語）",
  "cat": "Sociedad",
  "pos": "名詞（男性）",
  "nivel": "avanzado"
 },
 {
  "es": "Chilango",
  "en": "Person from Mexico City (colloquial)",
  "ja": "メキシコシティ出身の人（口語、時にからかい混じり）",
  "cat": "Sociedad",
  "pos": "名詞・形容詞",
  "nivel": "avanzado"
 },
 {
  "es": "Tantito",
  "en": "A little bit (colloquial diminutive)",
  "ja": "ちょっとだけ（口語的な指小形）",
  "cat": "Coloquial",
  "pos": "副詞",
  "nivel": "avanzado"
 },
 {
  "es": "Cuate",
  "en": "Buddy / friend (Mexican colloquial)",
  "ja": "友達・相棒（メキシコの口語）",
  "cat": "Coloquial",
  "pos": "名詞（男性）",
  "nivel": "avanzado"
 },
 {
  "es": "Aguas",
  "en": "Watch out! (Mexican colloquial warning)",
  "ja": "危ない！気をつけて！（メキシコの口語）",
  "cat": "Coloquial",
  "pos": "感嘆詞",
  "nivel": "avanzado"
 },
 {
  "es": "Checar",
  "en": "To check (colloquial)",
  "ja": "確認する・チェックする（口語）",
  "cat": "Coloquial",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Rentar",
  "en": "To rent",
  "ja": "賃借りする・賃貸する",
  "cat": "Casa",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Ratito",
  "en": "A little while (colloquial diminutive)",
  "ja": "ちょっとの間（口語的な指小形）",
  "cat": "Coloquial",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Chamaco",
  "en": "Kid / child (Mexican colloquial)",
  "ja": "子ども・ガキ（メキシコの口語）",
  "cat": "Coloquial",
  "pos": "名詞（男性）",
  "nivel": "avanzado"
 },
 {
  "es": "Al rato",
  "en": "In a bit / see you later",
  "ja": "また後で・ちょっとしたら",
  "cat": "Coloquial",
  "pos": "表現",
  "nivel": "intermedio"
 },
 {
  "es": "Súper",
  "en": "Super- (intensifier prefix, colloquial)",
  "ja": "超〜（強調の接頭辞、口語）",
  "cat": "Coloquial",
  "pos": "副詞",
  "nivel": "intermedio"
 },
 {
  "es": "Fiesta",
  "en": "Party",
  "ja": "パーティー、祭り",
  "cat": "Social",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Platicar",
  "en": "To chat / to talk (Mexican colloquial)",
  "ja": "おしゃべりする・話す（メキシコでよく使う）",
  "cat": "Coloquial",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Chiste",
  "en": "Joke",
  "ja": "冗談、ジョーク",
  "cat": "Social",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Regalar",
  "en": "To give (as a gift)",
  "ja": "プレゼントする、贈る",
  "cat": "Social",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Extrañar",
  "en": "To miss (someone/something)",
  "ja": "（人・物を）恋しく思う、寂しく思う",
  "cat": "Emociones",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Convivir",
  "en": "To spend time together / socialize",
  "ja": "共に過ごす、交流する",
  "cat": "Social",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Taquería",
  "en": "Taco stand / taco shop",
  "ja": "タコス屋",
  "cat": "Comida",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Madrugar",
  "en": "To wake up early",
  "ja": "早起きする",
  "cat": "Rutina",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Saludar",
  "en": "To greet",
  "ja": "挨拶する",
  "cat": "Social",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Despedirse",
  "en": "To say goodbye",
  "ja": "別れの挨拶をする",
  "cat": "Social",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Abrazar",
  "en": "To hug",
  "ja": "抱きしめる、ハグする",
  "cat": "Social",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Sonreír",
  "en": "To smile",
  "ja": "微笑む",
  "cat": "Emociones",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Agradecer",
  "en": "To thank",
  "ja": "感謝する",
  "cat": "Social",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Felicitar",
  "en": "To congratulate",
  "ja": "祝う、お祝いの言葉をかける",
  "cat": "Social",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Pena",
  "en": "Shame / sorrow / pity (context-dependent)",
  "ja": "恥ずかしさ、悲しみ、気の毒（文脈による）",
  "cat": "Emociones",
  "pos": "名詞（女性）",
  "nivel": "avanzado"
 },
 {
  "es": "Presumir",
  "en": "To show off / to boast",
  "ja": "自慢する、見せびらかす",
  "cat": "Social",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Mientras",
  "en": "While",
  "ja": "〜する間、〜している間に",
  "cat": "Conectores",
  "pos": "接続詞",
  "nivel": "básico"
 },
 {
  "es": "Tampoco",
  "en": "Neither / either (in negative sentences)",
  "ja": "〜も〜ない",
  "cat": "Conectores",
  "pos": "副詞",
  "nivel": "básico"
 },
 {
  "es": "Ojalá",
  "en": "I hope so / if only",
  "ja": "〜だといいな、〜でありますように",
  "cat": "Emociones",
  "pos": "感嘆詞",
  "nivel": "intermedio"
 },
 {
  "es": "Corregir",
  "en": "To correct",
  "ja": "訂正する、直す",
  "cat": "Educación",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Descargar",
  "en": "To download",
  "ja": "ダウンロードする",
  "cat": "Tecnología",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Pelar",
  "en": "To peel",
  "ja": "皮をむく",
  "cat": "Cocina",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Cocer",
  "en": "To boil / to cook (in water)",
  "ja": "（水で）茹でる、煮る",
  "cat": "Cocina",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Suscribirse",
  "en": "To subscribe",
  "ja": "登録する、購読する",
  "cat": "Tecnología",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Pareja",
  "en": "Partner / couple",
  "ja": "パートナー、恋人、カップル",
  "cat": "Familia",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Novio",
  "en": "Boyfriend (also 'groom')",
  "ja": "恋人（彼氏）、または花婿",
  "cat": "Familia",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Soltero",
  "en": "Single (unmarried)",
  "ja": "独身の",
  "cat": "Familia",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Casado",
  "en": "Married",
  "ja": "結婚している",
  "cat": "Familia",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Bebé",
  "en": "Baby",
  "ja": "赤ちゃん",
  "cat": "Familia",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Embarazada",
  "en": "Pregnant",
  "ja": "妊娠している",
  "cat": "Familia",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Adolescente",
  "en": "Teenager / adolescent",
  "ja": "十代の若者、思春期の子",
  "cat": "Familia",
  "pos": "名詞・形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Anciano",
  "en": "Elderly person",
  "ja": "高齢者、お年寄り",
  "cat": "Familia",
  "pos": "名詞・形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Enfrentar",
  "en": "To face / confront",
  "ja": "直面する、立ち向かう",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Aprovechar",
  "en": "To take advantage of / make the most of",
  "ja": "活用する、機会を生かす",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Involucrar",
  "en": "To involve",
  "ja": "関わらせる、巻き込む",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Carecer",
  "en": "To lack",
  "ja": "欠いている、不足している",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Fomentar",
  "en": "To foster / promote",
  "ja": "促進する、育成する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Impulsar",
  "en": "To drive / boost",
  "ja": "後押しする、推進する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Fortalecer",
  "en": "To strengthen",
  "ja": "強化する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Debilitar",
  "en": "To weaken",
  "ja": "弱める",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Arriesgar",
  "en": "To risk",
  "ja": "危険にさらす、賭ける",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Tolerar",
  "en": "To tolerate",
  "ja": "許容する、我慢する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Vacilar",
  "en": "To hesitate; to joke around (Mexican colloquial)",
  "ja": "ためらう；からかう・冗談を言う（メキシコの口語）",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Ponderar",
  "en": "To weigh / consider carefully",
  "ja": "熟考する、慎重に検討する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Útil",
  "en": "Useful",
  "ja": "役に立つ",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Cómodo",
  "en": "Comfortable",
  "ja": "快適な、心地よい",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Incómodo",
  "en": "Uncomfortable",
  "ja": "不快な、気まずい",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Sencillo",
  "en": "Simple",
  "ja": "簡単な、シンプルな",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Complicado",
  "en": "Complicated",
  "ja": "複雑な、ややこしい",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Urgente",
  "en": "Urgent",
  "ja": "緊急の、急を要する",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Pendiente",
  "en": "Pending",
  "ja": "未処理の、保留中の",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Ocupado",
  "en": "Busy / occupied",
  "ja": "忙しい、使用中の",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Suficiente",
  "en": "Enough / sufficient",
  "ja": "十分な",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Adecuado",
  "en": "Appropriate / suitable",
  "ja": "適切な、ふさわしい",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "avanzado"
 },
 {
  "es": "Innecesario",
  "en": "Unnecessary",
  "ja": "不必要な",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "avanzado"
 },
 {
  "es": "Aproximadamente",
  "en": "Approximately",
  "ja": "おおよそ、約",
  "cat": "Adverbios",
  "pos": "副詞",
  "nivel": "intermedio"
 },
 {
  "es": "Exactamente",
  "en": "Exactly",
  "ja": "正確に、まさに",
  "cat": "Adverbios",
  "pos": "副詞",
  "nivel": "intermedio"
 },
 {
  "es": "Definitivamente",
  "en": "Definitely",
  "ja": "間違いなく、絶対に",
  "cat": "Adverbios",
  "pos": "副詞",
  "nivel": "avanzado"
 },
 {
  "es": "Normalmente",
  "en": "Normally / usually",
  "ja": "普段は、通常",
  "cat": "Adverbios",
  "pos": "副詞",
  "nivel": "intermedio"
 },
 {
  "es": "Generalmente",
  "en": "Generally",
  "ja": "一般的に、たいてい",
  "cat": "Adverbios",
  "pos": "副詞",
  "nivel": "intermedio"
 },
 {
  "es": "Actualmente",
  "en": "Currently (false friend: NOT 'actually')",
  "ja": "現在は、今のところ（英語のactuallyとは意味が違う要注意単語）",
  "cat": "Adverbios",
  "pos": "副詞",
  "nivel": "intermedio"
 },
 {
  "es": "Recientemente",
  "en": "Recently",
  "ja": "最近、近頃",
  "cat": "Adverbios",
  "pos": "副詞",
  "nivel": "intermedio"
 },
 {
  "es": "Constantemente",
  "en": "Constantly",
  "ja": "絶えず、常に",
  "cat": "Adverbios",
  "pos": "副詞",
  "nivel": "avanzado"
 },
 {
  "es": "Diferente",
  "en": "Different",
  "ja": "違う、異なる",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Similar",
  "en": "Similar",
  "ja": "似ている",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Parecido",
  "en": "Similar / alike",
  "ja": "似ている",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Igual",
  "en": "Equal / same",
  "ja": "同じ、等しい",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Mismo",
  "en": "Same",
  "ja": "同じ、まさにその",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Último",
  "en": "Last (final)",
  "ja": "最後の",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Anterior",
  "en": "Previous",
  "ja": "以前の、前の",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Contrario",
  "en": "Contrary / opposite",
  "ja": "反対の、逆の",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Distinto",
  "en": "Distinct / different",
  "ja": "異なる、別の",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Cantidad",
  "en": "Quantity / amount",
  "ja": "量、数量",
  "cat": "Sustantivos",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Calidad",
  "en": "Quality",
  "ja": "質、品質",
  "cat": "Sustantivos",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Forma",
  "en": "Shape / form / way",
  "ja": "形、形式、やり方",
  "cat": "Sustantivos",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Color",
  "en": "Color",
  "ja": "色",
  "cat": "Sustantivos",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Distancia",
  "en": "Distance",
  "ja": "距離",
  "cat": "Sustantivos",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Velocidad",
  "en": "Speed",
  "ja": "速度、スピード",
  "cat": "Sustantivos",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Posición",
  "en": "Position",
  "ja": "位置、姿勢、立場",
  "cat": "Sustantivos",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Espacio",
  "en": "Space",
  "ja": "空間、スペース、宇宙",
  "cat": "Sustantivos",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Proceso",
  "en": "Process",
  "ja": "過程、プロセス",
  "cat": "Sustantivos",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Resultado",
  "en": "Result",
  "ja": "結果",
  "cat": "Sustantivos",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Causa",
  "en": "Cause",
  "ja": "原因",
  "cat": "Sustantivos",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Efecto",
  "en": "Effect",
  "ja": "効果、影響",
  "cat": "Sustantivos",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Dirección",
  "en": "Direction; also 'address'",
  "ja": "方向；住所",
  "cat": "Sustantivos",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Altura",
  "en": "Height",
  "ja": "高さ、身長",
  "cat": "Sustantivos",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Desarrollar",
  "en": "To develop",
  "ja": "発展させる、開発する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Aumentar",
  "en": "To increase",
  "ja": "増やす、増加する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Disminuir",
  "en": "To decrease",
  "ja": "減らす、減少する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Reducir",
  "en": "To reduce",
  "ja": "削減する、減らす",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Transformar",
  "en": "To transform",
  "ja": "変える、変容させる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Convertir",
  "en": "To convert / turn into",
  "ja": "変える、〜に変わる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Modificar",
  "en": "To modify",
  "ja": "修正する、変更する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Adaptar",
  "en": "To adapt",
  "ja": "適応させる、順応する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Determinar",
  "en": "To determine",
  "ja": "決定する、突き止める",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Identificar",
  "en": "To identify",
  "ja": "特定する、識別する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Unir",
  "en": "To unite / join",
  "ja": "結びつける、つなげる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Romper",
  "en": "To break",
  "ja": "壊す、割る",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Dividir",
  "en": "To divide",
  "ja": "分ける、割る",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Ajustar",
  "en": "To adjust",
  "ja": "調整する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Pagar",
  "en": "To pay",
  "ja": "支払う",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Cobrar",
  "en": "To charge (money) / to collect payment",
  "ja": "請求する、代金を受け取る",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Deber",
  "en": "To owe; also 'should/must'",
  "ja": "借りがある；〜すべきだ（義務）",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Ingreso",
  "en": "Income",
  "ja": "収入",
  "cat": "Sustantivos",
  "pos": "名詞（男性）",
  "nivel": "avanzado"
 },
 {
  "es": "Económico",
  "en": "Economical / cheap; also 'economic'",
  "ja": "経済的な、割安な",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Lujo",
  "en": "Luxury",
  "ja": "贅沢、豪華さ",
  "cat": "Sustantivos",
  "pos": "名詞（男性）",
  "nivel": "avanzado"
 },
 {
  "es": "Respirar",
  "en": "To breathe",
  "ja": "呼吸する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Toser",
  "en": "To cough",
  "ja": "咳をする",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Estornudar",
  "en": "To sneeze",
  "ja": "くしゃみをする",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Curar",
  "en": "To cure / heal",
  "ja": "治す、治療する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Recuperarse",
  "en": "To recover",
  "ja": "回復する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Riqueza",
  "en": "Wealth",
  "ja": "富、豊かさ",
  "cat": "Sustantivos",
  "pos": "名詞（女性）",
  "nivel": "avanzado"
 },
 {
  "es": "Pobreza",
  "en": "Poverty",
  "ja": "貧困",
  "cat": "Sustantivos",
  "pos": "名詞（女性）",
  "nivel": "avanzado"
 },
 {
  "es": "Sangrar",
  "en": "To bleed",
  "ja": "出血する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Frustrado",
  "en": "Frustrated",
  "ja": "イライラした、欲求不満の",
  "cat": "Emociones",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Frustrar",
  "en": "To frustrate",
  "ja": "挫折させる、失望させる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Agotado",
  "en": "Exhausted",
  "ja": "疲れ果てた、へとへとの",
  "cat": "Emociones",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Abrumado",
  "en": "Overwhelmed",
  "ja": "圧倒された、手一杯の",
  "cat": "Emociones",
  "pos": "形容詞",
  "nivel": "avanzado"
 },
 {
  "es": "Estresado",
  "en": "Stressed",
  "ja": "ストレスを感じている",
  "cat": "Emociones",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Emocionar",
  "en": "To excite / move emotionally",
  "ja": "感動させる、興奮させる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Satisfacer",
  "en": "To satisfy",
  "ja": "満足させる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Curiosidad",
  "en": "Curiosity",
  "ja": "好奇心",
  "cat": "Emociones",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Tranquilidad",
  "en": "Calmness / peace of mind",
  "ja": "落ち着き、平穏",
  "cat": "Emociones",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Dispositivo",
  "en": "Device",
  "ja": "デバイス、機器",
  "cat": "Tecnología",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Perfil",
  "en": "Profile",
  "ja": "プロフィール、横顔",
  "cat": "Tecnología",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Aliviar",
  "en": "To relieve",
  "ja": "和らげる、軽減する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Decepcionar",
  "en": "To disappoint",
  "ja": "失望させる、がっかりさせる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Ansioso",
  "en": "Anxious",
  "ja": "不安な、そわそわした",
  "cat": "Emociones",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Ser",
  "en": "To be (permanent/essential quality)",
  "ja": "〜である（本質的・恒常的な性質）",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Estar",
  "en": "To be (temporary state/location)",
  "ja": "〜である（一時的な状態・場所）",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Mecánico",
  "en": "Mechanic",
  "ja": "整備士、修理工",
  "cat": "Profesiones",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Vendedor",
  "en": "Salesperson",
  "ja": "販売員、営業",
  "cat": "Profesiones",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Gerente",
  "en": "Manager",
  "ja": "マネージャー、支配人",
  "cat": "Profesiones",
  "pos": "名詞（男性/女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Conductor",
  "en": "Driver",
  "ja": "運転手",
  "cat": "Profesiones",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Apoyar",
  "en": "To support",
  "ja": "支援する、支持する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Recibir",
  "en": "To receive",
  "ja": "受け取る",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Enviar",
  "en": "To send",
  "ja": "送る",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Requerir",
  "en": "To require",
  "ja": "必要とする、要求する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Facilitar",
  "en": "To facilitate",
  "ja": "容易にする、円滑にする",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Beneficiar",
  "en": "To benefit",
  "ja": "利益をもたらす、恩恵を与える",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Oponerse",
  "en": "To oppose",
  "ja": "反対する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Exigir",
  "en": "To demand",
  "ja": "要求する、強く求める",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Obligar",
  "en": "To oblige / force",
  "ja": "義務付ける、強制する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Favorecer",
  "en": "To favor",
  "ja": "有利に働く、似合う",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "avanzado"
 },
 {
  "es": "Toalla",
  "en": "Towel",
  "ja": "タオル",
  "cat": "Casa",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Jabón",
  "en": "Soap",
  "ja": "石鹸",
  "cat": "Casa",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Champú",
  "en": "Shampoo",
  "ja": "シャンプー",
  "cat": "Casa",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Pasta de dientes",
  "en": "Toothpaste",
  "ja": "歯磨き粉",
  "cat": "Casa",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Basura",
  "en": "Trash / garbage",
  "ja": "ゴミ",
  "cat": "Casa",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Sábana",
  "en": "Bedsheet",
  "ja": "シーツ",
  "cat": "Casa",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Colchón",
  "en": "Mattress",
  "ja": "マットレス",
  "cat": "Casa",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Cobija",
  "en": "Blanket (Mexican Spanish)",
  "ja": "毛布（メキシコでよく使う言い方）",
  "cat": "Casa",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Cortina",
  "en": "Curtain",
  "ja": "カーテン",
  "cat": "Casa",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Cajón",
  "en": "Drawer",
  "ja": "引き出し",
  "cat": "Casa",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Trapeador",
  "en": "Mop",
  "ja": "モップ",
  "cat": "Casa",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Foco",
  "en": "Lightbulb",
  "ja": "電球",
  "cat": "Casa",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Tijeras",
  "en": "Scissors",
  "ja": "はさみ",
  "cat": "Casa",
  "pos": "名詞（女性・複数）",
  "nivel": "básico"
 },
 {
  "es": "Cepillo",
  "en": "Brush",
  "ja": "ブラシ",
  "cat": "Casa",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Carne",
  "en": "Meat",
  "ja": "肉",
  "cat": "Comida",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Pollo",
  "en": "Chicken",
  "ja": "鶏肉、ニワトリ",
  "cat": "Comida",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Pescado",
  "en": "Fish (as food)",
  "ja": "魚（食材として）",
  "cat": "Comida",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Harina",
  "en": "Flour",
  "ja": "小麦粉",
  "cat": "Comida",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Pecho",
  "en": "Chest",
  "ja": "胸",
  "cat": "Cuerpo",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Carro",
  "en": "Car (Mexican/Latin American Spanish)",
  "ja": "車（メキシコ・中南米での言い方）",
  "cat": "Transporte",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Almuerzo",
  "en": "Lunch",
  "ja": "昼食",
  "cat": "Comida",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Servilleta",
  "en": "Napkin",
  "ja": "ナプキン",
  "cat": "Comida",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Mantel",
  "en": "Tablecloth",
  "ja": "テーブルクロス",
  "cat": "Casa",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Jamón",
  "en": "Ham",
  "ja": "ハム",
  "cat": "Comida",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Tocino",
  "en": "Bacon",
  "ja": "ベーコン",
  "cat": "Comida",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Camarón",
  "en": "Shrimp",
  "ja": "エビ",
  "cat": "Comida",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Atún",
  "en": "Tuna",
  "ja": "マグロ、ツナ",
  "cat": "Comida",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Res",
  "en": "Beef / cattle",
  "ja": "牛（食肉としての牛）",
  "cat": "Comida",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Durar",
  "en": "To last",
  "ja": "続く、持続する",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Tardar",
  "en": "To take time",
  "ja": "時間がかかる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Retrasarse",
  "en": "To be delayed",
  "ja": "遅れる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Moverse",
  "en": "To move (oneself)",
  "ja": "動く",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Mover",
  "en": "To move (something)",
  "ja": "〜を動かす",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Caerse",
  "en": "To fall down",
  "ja": "転ぶ、落ちる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Caer",
  "en": "To fall",
  "ja": "落ちる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Levantarse",
  "en": "To get up",
  "ja": "起きる、立ち上がる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Quedar",
  "en": "To arrange to meet / to have left",
  "ja": "待ち合わせる、残っている",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Acostarse",
  "en": "To go to bed",
  "ja": "寝る、横になる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Bañarse",
  "en": "To bathe",
  "ja": "お風呂に入る、水浴びする",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Ducharse",
  "en": "To shower",
  "ja": "シャワーを浴びる",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "básico"
 },
 {
  "es": "Partir",
  "en": "To depart / to split",
  "ja": "出発する、分ける",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Apresurarse",
  "en": "To hurry",
  "ja": "急ぐ",
  "cat": "Verbos",
  "pos": "動詞",
  "nivel": "intermedio"
 },
 {
  "es": "Precio",
  "en": "Price",
  "ja": "値段、価格",
  "cat": "Finanzas",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Costo",
  "en": "Cost",
  "ja": "コスト、費用",
  "cat": "Finanzas",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Gasto",
  "en": "Expense",
  "ja": "出費、経費",
  "cat": "Finanzas",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Ganancia",
  "en": "Profit",
  "ja": "利益、儲け",
  "cat": "Finanzas",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Pérdida",
  "en": "Loss",
  "ja": "損失",
  "cat": "Finanzas",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Salario",
  "en": "Salary",
  "ja": "給料",
  "cat": "Finanzas",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Océano",
  "en": "Ocean",
  "ja": "大洋、海洋",
  "cat": "Naturaleza",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Tierra",
  "en": "Earth / land / soil",
  "ja": "地球、土地、土",
  "cat": "Naturaleza",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Naturaleza",
  "en": "Nature",
  "ja": "自然",
  "cat": "Naturaleza",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Planta",
  "en": "Plant; also 'floor' of a building",
  "ja": "植物；建物の階（多義語）",
  "cat": "Naturaleza",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Hoja",
  "en": "Leaf; also 'sheet' of paper",
  "ja": "葉っぱ；紙（多義語）",
  "cat": "Naturaleza",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Raíz",
  "en": "Root",
  "ja": "根",
  "cat": "Naturaleza",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Ambiente",
  "en": "Atmosphere / environment / vibe",
  "ja": "雰囲気、環境",
  "cat": "Naturaleza",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Medio ambiente",
  "en": "Environment (ecological)",
  "ja": "環境（自然環境）",
  "cat": "Naturaleza",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Profesor",
  "en": "Professor / teacher",
  "ja": "教授、先生",
  "cat": "Educación",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Estudiante",
  "en": "Student",
  "ja": "学生",
  "cat": "Educación",
  "pos": "名詞（男性/女性）",
  "nivel": "básico"
 },
 {
  "es": "Clase",
  "en": "Class",
  "ja": "授業、クラス",
  "cat": "Educación",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Materia",
  "en": "Subject (school)",
  "ja": "科目",
  "cat": "Educación",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Historia",
  "en": "History; also 'story'",
  "ja": "歴史；物語（多義語）",
  "cat": "Educación",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Ciencia",
  "en": "Science",
  "ja": "科学",
  "cat": "Educación",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Literatura",
  "en": "Literature",
  "ja": "文学",
  "cat": "Educación",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Pluma",
  "en": "Pen",
  "ja": "ペン",
  "cat": "Educación",
  "pos": "名詞（女性）",
  "nivel": "básico"
 },
 {
  "es": "Borrador",
  "en": "Eraser; also 'draft' (of a document)",
  "ja": "消しゴム；下書き（多義語）",
  "cat": "Educación",
  "pos": "名詞（男性）",
  "nivel": "básico"
 },
 {
  "es": "Primaria",
  "en": "Elementary school",
  "ja": "小学校",
  "cat": "Educación",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Secundaria",
  "en": "Middle school / secondary school",
  "ja": "中学校",
  "cat": "Educación",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Preparatoria",
  "en": "High school (Mexican education system)",
  "ja": "高校（メキシコの教育制度）",
  "cat": "Educación",
  "pos": "名詞（女性）",
  "nivel": "intermedio"
 },
 {
  "es": "Licenciatura",
  "en": "Bachelor's degree",
  "ja": "学士号",
  "cat": "Educación",
  "pos": "名詞（女性）",
  "nivel": "avanzado"
 },
 {
  "es": "Curso",
  "en": "Course",
  "ja": "コース、講座",
  "cat": "Educación",
  "pos": "名詞（男性）",
  "nivel": "intermedio"
 },
 {
  "es": "Simpático",
  "en": "Nice / likeable",
  "ja": "感じがいい、感じの良い",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Antipático",
  "en": "Unpleasant / unlikeable",
  "ja": "感じの悪い",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Listo",
  "en": "Clever; also 'ready' (with estar)",
  "ja": "賢い（serの場合）；準備ができた（estarの場合）",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Flojo",
  "en": "Lazy (Mexican colloquial)",
  "ja": "怠け者の（メキシコの口語）",
  "cat": "Coloquial",
  "pos": "形容詞",
  "nivel": "avanzado"
 },
 {
  "es": "Tonto",
  "en": "Silly / dumb",
  "ja": "馬鹿な、間抜けな",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Duro",
  "en": "Hard",
  "ja": "硬い",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Blando",
  "en": "Soft",
  "ja": "柔らかい",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Largo",
  "en": "Long",
  "ja": "長い",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Corto",
  "en": "Short",
  "ja": "短い",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Delgado",
  "en": "Thin / slim",
  "ja": "細い、痩せている",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "básico"
 },
 {
  "es": "Grueso",
  "en": "Thick",
  "ja": "太い、厚い",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Irresponsable",
  "en": "Irresponsible",
  "ja": "無責任な",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "intermedio"
 },
 {
  "es": "Inmaduro",
  "en": "Immature",
  "ja": "未熟な、子供っぽい",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "avanzado"
 },
 {
  "es": "Superficial",
  "en": "Superficial",
  "ja": "表面的な、浅はかな",
  "cat": "Adjetivos",
  "pos": "形容詞",
  "nivel": "avanzado"
 }
];
