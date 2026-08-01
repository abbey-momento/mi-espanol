const VOCAB_DATA = [
 {
  "es": "Hola",
  "en": "Hello",
  "ja": "やあ",
  "cat": "Saludos"
 },
 {
  "es": "Buenos días",
  "en": "Good morning",
  "ja": "おはよう",
  "cat": "Saludos"
 },
 {
  "es": "Buenas tardes",
  "en": "Good afternoon",
  "ja": "こんにちは",
  "cat": "Saludos"
 },
 {
  "es": "Buenas noches",
  "en": "Good night",
  "ja": "こんばんは/おやすみ",
  "cat": "Saludos"
 },
 {
  "es": "¿Cómo estás?",
  "en": "How are you?",
  "ja": "元気?",
  "cat": "Saludos"
 },
 {
  "es": "Mucho gusto",
  "en": "Nice to meet you",
  "ja": "はじめまして",
  "cat": "Saludos"
 },
 {
  "es": "Hasta luego",
  "en": "See you later",
  "ja": "またね",
  "cat": "Saludos"
 },
 {
  "es": "Adiós",
  "en": "Goodbye",
  "ja": "さようなら",
  "cat": "Saludos"
 },
 {
  "es": "¿Qué tal?",
  "en": "What's up?",
  "ja": "調子どう?",
  "cat": "Saludos"
 },
 {
  "es": "Por favor",
  "en": "Please",
  "ja": "お願いします",
  "cat": "Frases"
 },
 {
  "es": "Gracias",
  "en": "Thank you",
  "ja": "ありがとう",
  "cat": "Frases"
 },
 {
  "es": "De nada",
  "en": "You're welcome",
  "ja": "どういたしまして",
  "cat": "Frases"
 },
 {
  "es": "Lo siento",
  "en": "I'm sorry",
  "ja": "ごめんなさい",
  "cat": "Frases"
 },
 {
  "es": "¿Cuánto cuesta?",
  "en": "How much does it cost?",
  "ja": "いくらですか",
  "cat": "Frases"
 },
 {
  "es": "No entiendo",
  "en": "I don't understand",
  "ja": "わかりません",
  "cat": "Frases"
 },
 {
  "es": "¿Dónde está...?",
  "en": "Where is...?",
  "ja": "〜はどこ?",
  "cat": "Frases"
 },
 {
  "es": "¿Puedes ayudarme?",
  "en": "Can you help me?",
  "ja": "手伝ってもらえますか",
  "cat": "Frases"
 },
 {
  "es": "Claro que sí",
  "en": "Of course",
  "ja": "もちろん",
  "cat": "Frases"
 },
 {
  "es": "Tal vez",
  "en": "Maybe",
  "ja": "たぶん",
  "cat": "Frases"
 },
 {
  "es": "El aeropuerto",
  "en": "The airport",
  "ja": "空港",
  "cat": "Viajes"
 },
 {
  "es": "La estación",
  "en": "The station",
  "ja": "駅",
  "cat": "Viajes"
 },
 {
  "es": "El billete",
  "en": "The ticket",
  "ja": "切符",
  "cat": "Viajes"
 },
 {
  "es": "El equipaje",
  "en": "The luggage",
  "ja": "荷物",
  "cat": "Viajes"
 },
 {
  "es": "La maleta",
  "en": "The suitcase",
  "ja": "スーツケース",
  "cat": "Viajes"
 },
 {
  "es": "El hotel",
  "en": "The hotel",
  "ja": "ホテル",
  "cat": "Viajes"
 },
 {
  "es": "La reserva",
  "en": "The reservation",
  "ja": "予約",
  "cat": "Viajes"
 },
 {
  "es": "El pasaporte",
  "en": "The passport",
  "ja": "パスポート",
  "cat": "Viajes"
 },
 {
  "es": "¿A qué hora sale?",
  "en": "What time does it leave?",
  "ja": "何時に出発しますか",
  "cat": "Viajes"
 },
 {
  "es": "El pan",
  "en": "Bread",
  "ja": "パン",
  "cat": "Comida"
 },
 {
  "es": "La fruta",
  "en": "Fruit",
  "ja": "果物",
  "cat": "Comida"
 },
 {
  "es": "La cena",
  "en": "Dinner",
  "ja": "夕食",
  "cat": "Comida"
 },
 {
  "es": "El desayuno",
  "en": "Breakfast",
  "ja": "朝食",
  "cat": "Comida"
 },
 {
  "es": "La cuenta",
  "en": "The bill",
  "ja": "お会計",
  "cat": "Comida"
 },
 {
  "es": "Delicioso",
  "en": "Delicious",
  "ja": "美味しい",
  "cat": "Comida"
 },
 {
  "es": "Picante",
  "en": "Spicy",
  "ja": "辛い",
  "cat": "Comida"
 },
 {
  "es": "Uno",
  "en": "One",
  "ja": "1",
  "cat": "Números"
 },
 {
  "es": "Dos",
  "en": "Two",
  "ja": "2",
  "cat": "Números"
 },
 {
  "es": "Tres",
  "en": "Three",
  "ja": "3",
  "cat": "Números"
 },
 {
  "es": "Cuatro",
  "en": "Four",
  "ja": "4",
  "cat": "Números"
 },
 {
  "es": "Cinco",
  "en": "Five",
  "ja": "5",
  "cat": "Números"
 },
 {
  "es": "Diez",
  "en": "Ten",
  "ja": "10",
  "cat": "Números"
 },
 {
  "es": "Veinte",
  "en": "Twenty",
  "ja": "20",
  "cat": "Números"
 },
 {
  "es": "Cien",
  "en": "One hundred",
  "ja": "100",
  "cat": "Números"
 },
 {
  "es": "Mil",
  "en": "One thousand",
  "ja": "1000",
  "cat": "Números"
 },
 {
  "es": "Lunes",
  "en": "Monday",
  "ja": "月曜日",
  "cat": "Días"
 },
 {
  "es": "Martes",
  "en": "Tuesday",
  "ja": "火曜日",
  "cat": "Días"
 },
 {
  "es": "Miércoles",
  "en": "Wednesday",
  "ja": "水曜日",
  "cat": "Días"
 },
 {
  "es": "Jueves",
  "en": "Thursday",
  "ja": "木曜日",
  "cat": "Días"
 },
 {
  "es": "Viernes",
  "en": "Friday",
  "ja": "金曜日",
  "cat": "Días"
 },
 {
  "es": "Sábado",
  "en": "Saturday",
  "ja": "土曜日",
  "cat": "Días"
 },
 {
  "es": "Domingo",
  "en": "Sunday",
  "ja": "日曜日",
  "cat": "Días"
 },
 {
  "es": "La primavera",
  "en": "Spring",
  "ja": "春",
  "cat": "Estaciones"
 },
 {
  "es": "El verano",
  "en": "Summer",
  "ja": "夏",
  "cat": "Estaciones"
 },
 {
  "es": "El otoño",
  "en": "Autumn",
  "ja": "秋",
  "cat": "Estaciones"
 },
 {
  "es": "El invierno",
  "en": "Winter",
  "ja": "冬",
  "cat": "Estaciones"
 },
 {
  "es": "Ser / Estar",
  "en": "To be",
  "ja": "〜である/〜にいる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Tener",
  "en": "To have",
  "ja": "持つ",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Querer",
  "en": "To want",
  "ja": "欲しい",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Poder",
  "en": "To be able to",
  "ja": "〜できる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Ir",
  "en": "To go",
  "ja": "行く",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Comer",
  "en": "To eat",
  "ja": "食べる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Hablar",
  "en": "To speak",
  "ja": "話す",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Necesitar",
  "en": "To need",
  "ja": "必要とする",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Sin embargo",
  "en": "However",
  "ja": "しかしながら",
  "cat": "Frases"
 },
 {
  "es": "Además",
  "en": "Besides / Also",
  "ja": "さらに",
  "cat": "Frases"
 },
 {
  "es": "Aunque",
  "en": "Although",
  "ja": "〜だけれども",
  "cat": "Frases"
 },
 {
  "es": "Me encantaría",
  "en": "I would love to",
  "ja": "ぜひそうしたい",
  "cat": "Frases"
 },
 {
  "es": "Está bien",
  "en": "That's fine / OK",
  "ja": "大丈夫です",
  "cat": "Frases"
 },
 {
  "es": "No importa",
  "en": "It doesn't matter",
  "ja": "気にしないで",
  "cat": "Frases"
 },
 {
  "es": "Depende",
  "en": "It depends",
  "ja": "場合による",
  "cat": "Frases"
 },
 {
  "es": "Estoy de acuerdo",
  "en": "I agree",
  "ja": "賛成です",
  "cat": "Frases"
 },
 {
  "es": "No estoy seguro",
  "en": "I'm not sure",
  "ja": "確信がない",
  "cat": "Frases"
 },
 {
  "es": "¿En serio?",
  "en": "Really?",
  "ja": "本当に?",
  "cat": "Frases"
 },
 {
  "es": "Qué lástima",
  "en": "What a shame",
  "ja": "残念だね",
  "cat": "Frases"
 },
 {
  "es": "Buena suerte",
  "en": "Good luck",
  "ja": "頑張って",
  "cat": "Frases"
 },
 {
  "es": "Felicidades",
  "en": "Congratulations",
  "ja": "おめでとう",
  "cat": "Frases"
 },
 {
  "es": "Te extraño",
  "en": "I miss you",
  "ja": "会いたいよ",
  "cat": "Frases"
 },
 {
  "es": "Nos vemos pronto",
  "en": "See you soon",
  "ja": "またすぐに",
  "cat": "Frases"
 },
 {
  "es": "Rojo",
  "en": "Red",
  "ja": "赤",
  "cat": "Colores"
 },
 {
  "es": "Azul",
  "en": "Blue",
  "ja": "青",
  "cat": "Colores"
 },
 {
  "es": "Verde",
  "en": "Green",
  "ja": "緑",
  "cat": "Colores"
 },
 {
  "es": "Amarillo",
  "en": "Yellow",
  "ja": "黄色",
  "cat": "Colores"
 },
 {
  "es": "Negro",
  "en": "Black",
  "ja": "黒",
  "cat": "Colores"
 },
 {
  "es": "Blanco",
  "en": "White",
  "ja": "白",
  "cat": "Colores"
 },
 {
  "es": "Gris",
  "en": "Gray",
  "ja": "灰色",
  "cat": "Colores"
 },
 {
  "es": "Rosa",
  "en": "Pink",
  "ja": "ピンク",
  "cat": "Colores"
 },
 {
  "es": "Morado",
  "en": "Purple",
  "ja": "紫",
  "cat": "Colores"
 },
 {
  "es": "Naranja",
  "en": "Orange",
  "ja": "オレンジ",
  "cat": "Colores"
 },
 {
  "es": "Marrón",
  "en": "Brown",
  "ja": "茶色",
  "cat": "Colores"
 },
 {
  "es": "Dorado",
  "en": "Golden",
  "ja": "金色",
  "cat": "Colores"
 },
 {
  "es": "Plateado",
  "en": "Silver",
  "ja": "銀色",
  "cat": "Colores"
 },
 {
  "es": "Celeste",
  "en": "Sky blue",
  "ja": "水色",
  "cat": "Colores"
 },
 {
  "es": "Turquesa",
  "en": "Turquoise",
  "ja": "ターコイズ色",
  "cat": "Colores"
 },
 {
  "es": "La madre",
  "en": "Mother",
  "ja": "母",
  "cat": "Familia"
 },
 {
  "es": "El padre",
  "en": "Father",
  "ja": "父",
  "cat": "Familia"
 },
 {
  "es": "El hermano",
  "en": "Brother",
  "ja": "兄/弟",
  "cat": "Familia"
 },
 {
  "es": "La hermana",
  "en": "Sister",
  "ja": "姉/妹",
  "cat": "Familia"
 },
 {
  "es": "El abuelo",
  "en": "Grandfather",
  "ja": "祖父",
  "cat": "Familia"
 },
 {
  "es": "La abuela",
  "en": "Grandmother",
  "ja": "祖母",
  "cat": "Familia"
 },
 {
  "es": "El hijo",
  "en": "Son",
  "ja": "息子",
  "cat": "Familia"
 },
 {
  "es": "La hija",
  "en": "Daughter",
  "ja": "娘",
  "cat": "Familia"
 },
 {
  "es": "El tío",
  "en": "Uncle",
  "ja": "おじ",
  "cat": "Familia"
 },
 {
  "es": "La tía",
  "en": "Aunt",
  "ja": "おば",
  "cat": "Familia"
 },
 {
  "es": "El primo",
  "en": "Cousin (male)",
  "ja": "いとこ(男)",
  "cat": "Familia"
 },
 {
  "es": "La prima",
  "en": "Cousin (female)",
  "ja": "いとこ(女)",
  "cat": "Familia"
 },
 {
  "es": "El esposo",
  "en": "Husband",
  "ja": "夫",
  "cat": "Familia"
 },
 {
  "es": "La esposa",
  "en": "Wife",
  "ja": "妻",
  "cat": "Familia"
 },
 {
  "es": "El nieto",
  "en": "Grandson",
  "ja": "孫息子",
  "cat": "Familia"
 },
 {
  "es": "La nieta",
  "en": "Granddaughter",
  "ja": "孫娘",
  "cat": "Familia"
 },
 {
  "es": "El sobrino",
  "en": "Nephew",
  "ja": "甥",
  "cat": "Familia"
 },
 {
  "es": "La sobrina",
  "en": "Niece",
  "ja": "姪",
  "cat": "Familia"
 },
 {
  "es": "El suegro",
  "en": "Father-in-law",
  "ja": "義父",
  "cat": "Familia"
 },
 {
  "es": "La suegra",
  "en": "Mother-in-law",
  "ja": "義母",
  "cat": "Familia"
 },
 {
  "es": "El cuñado",
  "en": "Brother-in-law",
  "ja": "義兄弟",
  "cat": "Familia"
 },
 {
  "es": "La cabeza",
  "en": "Head",
  "ja": "頭",
  "cat": "Cuerpo"
 },
 {
  "es": "El ojo",
  "en": "Eye",
  "ja": "目",
  "cat": "Cuerpo"
 },
 {
  "es": "La oreja",
  "en": "Ear",
  "ja": "耳",
  "cat": "Cuerpo"
 },
 {
  "es": "La nariz",
  "en": "Nose",
  "ja": "鼻",
  "cat": "Cuerpo"
 },
 {
  "es": "La boca",
  "en": "Mouth",
  "ja": "口",
  "cat": "Cuerpo"
 },
 {
  "es": "La mano",
  "en": "Hand",
  "ja": "手",
  "cat": "Cuerpo"
 },
 {
  "es": "El brazo",
  "en": "Arm",
  "ja": "腕",
  "cat": "Cuerpo"
 },
 {
  "es": "La pierna",
  "en": "Leg",
  "ja": "脚",
  "cat": "Cuerpo"
 },
 {
  "es": "El pie",
  "en": "Foot",
  "ja": "足",
  "cat": "Cuerpo"
 },
 {
  "es": "El dedo",
  "en": "Finger",
  "ja": "指",
  "cat": "Cuerpo"
 },
 {
  "es": "La espalda",
  "en": "Back",
  "ja": "背中",
  "cat": "Cuerpo"
 },
 {
  "es": "El estómago",
  "en": "Stomach",
  "ja": "お腹",
  "cat": "Cuerpo"
 },
 {
  "es": "El corazón",
  "en": "Heart",
  "ja": "心臓",
  "cat": "Cuerpo"
 },
 {
  "es": "El cabello",
  "en": "Hair",
  "ja": "髪",
  "cat": "Cuerpo"
 },
 {
  "es": "El cuello",
  "en": "Neck",
  "ja": "首",
  "cat": "Cuerpo"
 },
 {
  "es": "El hombro",
  "en": "Shoulder",
  "ja": "肩",
  "cat": "Cuerpo"
 },
 {
  "es": "La rodilla",
  "en": "Knee",
  "ja": "ひざ",
  "cat": "Cuerpo"
 },
 {
  "es": "El diente",
  "en": "Tooth",
  "ja": "歯",
  "cat": "Cuerpo"
 },
 {
  "es": "La camisa",
  "en": "Shirt",
  "ja": "シャツ",
  "cat": "Ropa"
 },
 {
  "es": "El pantalón",
  "en": "Pants",
  "ja": "ズボン",
  "cat": "Ropa"
 },
 {
  "es": "El vestido",
  "en": "Dress",
  "ja": "ワンピース",
  "cat": "Ropa"
 },
 {
  "es": "La falda",
  "en": "Skirt",
  "ja": "スカート",
  "cat": "Ropa"
 },
 {
  "es": "El zapato",
  "en": "Shoe",
  "ja": "靴",
  "cat": "Ropa"
 },
 {
  "es": "El calcetín",
  "en": "Sock",
  "ja": "靴下",
  "cat": "Ropa"
 },
 {
  "es": "La chaqueta",
  "en": "Jacket",
  "ja": "ジャケット",
  "cat": "Ropa"
 },
 {
  "es": "El abrigo",
  "en": "Coat",
  "ja": "コート",
  "cat": "Ropa"
 },
 {
  "es": "El sombrero",
  "en": "Hat",
  "ja": "帽子",
  "cat": "Ropa"
 },
 {
  "es": "La bufanda",
  "en": "Scarf",
  "ja": "マフラー",
  "cat": "Ropa"
 },
 {
  "es": "El guante",
  "en": "Glove",
  "ja": "手袋",
  "cat": "Ropa"
 },
 {
  "es": "El cinturón",
  "en": "Belt",
  "ja": "ベルト",
  "cat": "Ropa"
 },
 {
  "es": "La corbata",
  "en": "Tie",
  "ja": "ネクタイ",
  "cat": "Ropa"
 },
 {
  "es": "El pijama",
  "en": "Pajamas",
  "ja": "パジャマ",
  "cat": "Ropa"
 },
 {
  "es": "La casa",
  "en": "House",
  "ja": "家",
  "cat": "Casa"
 },
 {
  "es": "La cocina",
  "en": "Kitchen",
  "ja": "台所",
  "cat": "Casa"
 },
 {
  "es": "El dormitorio",
  "en": "Bedroom",
  "ja": "寝室",
  "cat": "Casa"
 },
 {
  "es": "El baño",
  "en": "Bathroom",
  "ja": "お風呂/トイレ",
  "cat": "Casa"
 },
 {
  "es": "La sala",
  "en": "Living room",
  "ja": "リビング",
  "cat": "Casa"
 },
 {
  "es": "El jardín",
  "en": "Garden",
  "ja": "庭",
  "cat": "Casa"
 },
 {
  "es": "La puerta",
  "en": "Door",
  "ja": "ドア",
  "cat": "Casa"
 },
 {
  "es": "La ventana",
  "en": "Window",
  "ja": "窓",
  "cat": "Casa"
 },
 {
  "es": "La mesa",
  "en": "Table",
  "ja": "テーブル",
  "cat": "Casa"
 },
 {
  "es": "La silla",
  "en": "Chair",
  "ja": "椅子",
  "cat": "Casa"
 },
 {
  "es": "La cama",
  "en": "Bed",
  "ja": "ベッド",
  "cat": "Casa"
 },
 {
  "es": "El sofá",
  "en": "Sofa",
  "ja": "ソファ",
  "cat": "Casa"
 },
 {
  "es": "El techo",
  "en": "Roof / Ceiling",
  "ja": "屋根/天井",
  "cat": "Casa"
 },
 {
  "es": "La pared",
  "en": "Wall",
  "ja": "壁",
  "cat": "Casa"
 },
 {
  "es": "La escalera",
  "en": "Stairs",
  "ja": "階段",
  "cat": "Casa"
 },
 {
  "es": "El garaje",
  "en": "Garage",
  "ja": "ガレージ",
  "cat": "Casa"
 },
 {
  "es": "El trabajo",
  "en": "Work / Job",
  "ja": "仕事",
  "cat": "Trabajo"
 },
 {
  "es": "La oficina",
  "en": "Office",
  "ja": "オフィス",
  "cat": "Trabajo"
 },
 {
  "es": "El jefe",
  "en": "Boss",
  "ja": "上司",
  "cat": "Trabajo"
 },
 {
  "es": "El empleado",
  "en": "Employee",
  "ja": "従業員",
  "cat": "Trabajo"
 },
 {
  "es": "La reunión",
  "en": "Meeting",
  "ja": "会議",
  "cat": "Trabajo"
 },
 {
  "es": "La computadora",
  "en": "Computer",
  "ja": "パソコン",
  "cat": "Trabajo"
 },
 {
  "es": "El correo electrónico",
  "en": "Email",
  "ja": "メール",
  "cat": "Trabajo"
 },
 {
  "es": "El proyecto",
  "en": "Project",
  "ja": "プロジェクト",
  "cat": "Trabajo"
 },
 {
  "es": "El sueldo",
  "en": "Salary",
  "ja": "給料",
  "cat": "Trabajo"
 },
 {
  "es": "La entrevista",
  "en": "Interview",
  "ja": "面接",
  "cat": "Trabajo"
 },
 {
  "es": "El currículum",
  "en": "Resume",
  "ja": "履歴書",
  "cat": "Trabajo"
 },
 {
  "es": "La empresa",
  "en": "Company",
  "ja": "会社",
  "cat": "Trabajo"
 },
 {
  "es": "El cliente",
  "en": "Client",
  "ja": "顧客",
  "cat": "Trabajo"
 },
 {
  "es": "El horario",
  "en": "Schedule",
  "ja": "スケジュール",
  "cat": "Trabajo"
 },
 {
  "es": "Feliz",
  "en": "Happy",
  "ja": "幸せ",
  "cat": "Emociones"
 },
 {
  "es": "Triste",
  "en": "Sad",
  "ja": "悲しい",
  "cat": "Emociones"
 },
 {
  "es": "Enojado",
  "en": "Angry",
  "ja": "怒っている",
  "cat": "Emociones"
 },
 {
  "es": "Cansado",
  "en": "Tired",
  "ja": "疲れた",
  "cat": "Emociones"
 },
 {
  "es": "Nervioso",
  "en": "Nervous",
  "ja": "緊張している",
  "cat": "Emociones"
 },
 {
  "es": "Emocionado",
  "en": "Excited",
  "ja": "わくわくしている",
  "cat": "Emociones"
 },
 {
  "es": "Aburrido",
  "en": "Bored",
  "ja": "退屈している",
  "cat": "Emociones"
 },
 {
  "es": "Sorprendido",
  "en": "Surprised",
  "ja": "驚いている",
  "cat": "Emociones"
 },
 {
  "es": "Asustado",
  "en": "Scared",
  "ja": "怖がっている",
  "cat": "Emociones"
 },
 {
  "es": "Tranquilo",
  "en": "Calm",
  "ja": "落ち着いている",
  "cat": "Emociones"
 },
 {
  "es": "Preocupado",
  "en": "Worried",
  "ja": "心配している",
  "cat": "Emociones"
 },
 {
  "es": "Orgulloso",
  "en": "Proud",
  "ja": "誇りに思う",
  "cat": "Emociones"
 },
 {
  "es": "Celoso",
  "en": "Jealous",
  "ja": "嫉妬している",
  "cat": "Emociones"
 },
 {
  "es": "Avergonzado",
  "en": "Embarrassed",
  "ja": "恥ずかしい",
  "cat": "Emociones"
 },
 {
  "es": "El sol",
  "en": "Sun",
  "ja": "太陽",
  "cat": "Clima"
 },
 {
  "es": "La lluvia",
  "en": "Rain",
  "ja": "雨",
  "cat": "Clima"
 },
 {
  "es": "La nube",
  "en": "Cloud",
  "ja": "雲",
  "cat": "Clima"
 },
 {
  "es": "El viento",
  "en": "Wind",
  "ja": "風",
  "cat": "Clima"
 },
 {
  "es": "La nieve",
  "en": "Snow",
  "ja": "雪",
  "cat": "Clima"
 },
 {
  "es": "La tormenta",
  "en": "Storm",
  "ja": "嵐",
  "cat": "Clima"
 },
 {
  "es": "El calor",
  "en": "Heat",
  "ja": "暑さ",
  "cat": "Clima"
 },
 {
  "es": "El frío",
  "en": "Cold",
  "ja": "寒さ",
  "cat": "Clima"
 },
 {
  "es": "Húmedo",
  "en": "Humid",
  "ja": "湿気がある",
  "cat": "Clima"
 },
 {
  "es": "El arcoíris",
  "en": "Rainbow",
  "ja": "虹",
  "cat": "Clima"
 },
 {
  "es": "La niebla",
  "en": "Fog",
  "ja": "霧",
  "cat": "Clima"
 },
 {
  "es": "La helada",
  "en": "Frost",
  "ja": "霜",
  "cat": "Clima"
 },
 {
  "es": "El perro",
  "en": "Dog",
  "ja": "犬",
  "cat": "Animales"
 },
 {
  "es": "El gato",
  "en": "Cat",
  "ja": "猫",
  "cat": "Animales"
 },
 {
  "es": "El pájaro",
  "en": "Bird",
  "ja": "鳥",
  "cat": "Animales"
 },
 {
  "es": "El pez",
  "en": "Fish",
  "ja": "魚",
  "cat": "Animales"
 },
 {
  "es": "El caballo",
  "en": "Horse",
  "ja": "馬",
  "cat": "Animales"
 },
 {
  "es": "La vaca",
  "en": "Cow",
  "ja": "牛",
  "cat": "Animales"
 },
 {
  "es": "El cerdo",
  "en": "Pig",
  "ja": "豚",
  "cat": "Animales"
 },
 {
  "es": "La oveja",
  "en": "Sheep",
  "ja": "羊",
  "cat": "Animales"
 },
 {
  "es": "El león",
  "en": "Lion",
  "ja": "ライオン",
  "cat": "Animales"
 },
 {
  "es": "El elefante",
  "en": "Elephant",
  "ja": "象",
  "cat": "Animales"
 },
 {
  "es": "El mono",
  "en": "Monkey",
  "ja": "猿",
  "cat": "Animales"
 },
 {
  "es": "El conejo",
  "en": "Rabbit",
  "ja": "うさぎ",
  "cat": "Animales"
 },
 {
  "es": "El ratón",
  "en": "Mouse",
  "ja": "ねずみ",
  "cat": "Animales"
 },
 {
  "es": "El tigre",
  "en": "Tiger",
  "ja": "虎",
  "cat": "Animales"
 },
 {
  "es": "El oso",
  "en": "Bear",
  "ja": "熊",
  "cat": "Animales"
 },
 {
  "es": "La serpiente",
  "en": "Snake",
  "ja": "蛇",
  "cat": "Animales"
 },
 {
  "es": "El coche",
  "en": "Car",
  "ja": "車",
  "cat": "Transporte"
 },
 {
  "es": "El autobús",
  "en": "Bus",
  "ja": "バス",
  "cat": "Transporte"
 },
 {
  "es": "El tren",
  "en": "Train",
  "ja": "電車",
  "cat": "Transporte"
 },
 {
  "es": "El avión",
  "en": "Airplane",
  "ja": "飛行機",
  "cat": "Transporte"
 },
 {
  "es": "La bicicleta",
  "en": "Bicycle",
  "ja": "自転車",
  "cat": "Transporte"
 },
 {
  "es": "El barco",
  "en": "Boat",
  "ja": "船",
  "cat": "Transporte"
 },
 {
  "es": "El taxi",
  "en": "Taxi",
  "ja": "タクシー",
  "cat": "Transporte"
 },
 {
  "es": "El metro",
  "en": "Subway",
  "ja": "地下鉄",
  "cat": "Transporte"
 },
 {
  "es": "La motocicleta",
  "en": "Motorcycle",
  "ja": "バイク",
  "cat": "Transporte"
 },
 {
  "es": "El camión",
  "en": "Truck",
  "ja": "トラック",
  "cat": "Transporte"
 },
 {
  "es": "Grande",
  "en": "Big",
  "ja": "大きい",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Pequeño",
  "en": "Small",
  "ja": "小さい",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Alto",
  "en": "Tall",
  "ja": "高い(背)",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Bajo",
  "en": "Short",
  "ja": "低い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Rápido",
  "en": "Fast",
  "ja": "速い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Lento",
  "en": "Slow",
  "ja": "遅い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Caro",
  "en": "Expensive",
  "ja": "高い(値段)",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Barato",
  "en": "Cheap",
  "ja": "安い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Fácil",
  "en": "Easy",
  "ja": "簡単",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Difícil",
  "en": "Difficult",
  "ja": "難しい",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Nuevo",
  "en": "New",
  "ja": "新しい",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Viejo",
  "en": "Old",
  "ja": "古い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Limpio",
  "en": "Clean",
  "ja": "きれい",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Sucio",
  "en": "Dirty",
  "ja": "汚い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Fuerte",
  "en": "Strong",
  "ja": "強い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Débil",
  "en": "Weak",
  "ja": "弱い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Bonito",
  "en": "Pretty",
  "ja": "きれい/かわいい",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Feo",
  "en": "Ugly",
  "ja": "醜い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Inteligente",
  "en": "Smart",
  "ja": "賢い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Divertido",
  "en": "Fun",
  "ja": "楽しい",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Enero",
  "en": "January",
  "ja": "1月",
  "cat": "Meses"
 },
 {
  "es": "Febrero",
  "en": "February",
  "ja": "2月",
  "cat": "Meses"
 },
 {
  "es": "Marzo",
  "en": "March",
  "ja": "3月",
  "cat": "Meses"
 },
 {
  "es": "Abril",
  "en": "April",
  "ja": "4月",
  "cat": "Meses"
 },
 {
  "es": "Mayo",
  "en": "May",
  "ja": "5月",
  "cat": "Meses"
 },
 {
  "es": "Junio",
  "en": "June",
  "ja": "6月",
  "cat": "Meses"
 },
 {
  "es": "Julio",
  "en": "July",
  "ja": "7月",
  "cat": "Meses"
 },
 {
  "es": "Agosto",
  "en": "August",
  "ja": "8月",
  "cat": "Meses"
 },
 {
  "es": "Septiembre",
  "en": "September",
  "ja": "9月",
  "cat": "Meses"
 },
 {
  "es": "Octubre",
  "en": "October",
  "ja": "10月",
  "cat": "Meses"
 },
 {
  "es": "Noviembre",
  "en": "November",
  "ja": "11月",
  "cat": "Meses"
 },
 {
  "es": "Diciembre",
  "en": "December",
  "ja": "12月",
  "cat": "Meses"
 },
 {
  "es": "El banco",
  "en": "Bank",
  "ja": "銀行",
  "cat": "Lugares"
 },
 {
  "es": "El hospital",
  "en": "Hospital",
  "ja": "病院",
  "cat": "Lugares"
 },
 {
  "es": "La escuela",
  "en": "School",
  "ja": "学校",
  "cat": "Lugares"
 },
 {
  "es": "La iglesia",
  "en": "Church",
  "ja": "教会",
  "cat": "Lugares"
 },
 {
  "es": "El mercado",
  "en": "Market",
  "ja": "市場",
  "cat": "Lugares"
 },
 {
  "es": "El parque",
  "en": "Park",
  "ja": "公園",
  "cat": "Lugares"
 },
 {
  "es": "La biblioteca",
  "en": "Library",
  "ja": "図書館",
  "cat": "Lugares"
 },
 {
  "es": "La farmacia",
  "en": "Pharmacy",
  "ja": "薬局",
  "cat": "Lugares"
 },
 {
  "es": "El supermercado",
  "en": "Supermarket",
  "ja": "スーパー",
  "cat": "Lugares"
 },
 {
  "es": "La playa",
  "en": "Beach",
  "ja": "ビーチ",
  "cat": "Lugares"
 },
 {
  "es": "La montaña",
  "en": "Mountain",
  "ja": "山",
  "cat": "Lugares"
 },
 {
  "es": "La ciudad",
  "en": "City",
  "ja": "都市",
  "cat": "Lugares"
 },
 {
  "es": "El pueblo",
  "en": "Town",
  "ja": "町",
  "cat": "Lugares"
 },
 {
  "es": "El museo",
  "en": "Museum",
  "ja": "美術館/博物館",
  "cat": "Lugares"
 },
 {
  "es": "El teléfono",
  "en": "Phone",
  "ja": "電話",
  "cat": "Tecnología"
 },
 {
  "es": "El internet",
  "en": "Internet",
  "ja": "インターネット",
  "cat": "Tecnología"
 },
 {
  "es": "La aplicación",
  "en": "App",
  "ja": "アプリ",
  "cat": "Tecnología"
 },
 {
  "es": "La contraseña",
  "en": "Password",
  "ja": "パスワード",
  "cat": "Tecnología"
 },
 {
  "es": "La batería",
  "en": "Battery",
  "ja": "バッテリー",
  "cat": "Tecnología"
 },
 {
  "es": "La pantalla",
  "en": "Screen",
  "ja": "画面",
  "cat": "Tecnología"
 },
 {
  "es": "El cargador",
  "en": "Charger",
  "ja": "充電器",
  "cat": "Tecnología"
 },
 {
  "es": "El wifi",
  "en": "Wifi",
  "ja": "Wi-Fi",
  "cat": "Tecnología"
 },
 {
  "es": "El mensaje",
  "en": "Message",
  "ja": "メッセージ",
  "cat": "Tecnología"
 },
 {
  "es": "El fútbol",
  "en": "Soccer",
  "ja": "サッカー",
  "cat": "Deportes"
 },
 {
  "es": "El baloncesto",
  "en": "Basketball",
  "ja": "バスケットボール",
  "cat": "Deportes"
 },
 {
  "es": "El tenis",
  "en": "Tennis",
  "ja": "テニス",
  "cat": "Deportes"
 },
 {
  "es": "La natación",
  "en": "Swimming",
  "ja": "水泳",
  "cat": "Deportes"
 },
 {
  "es": "Correr",
  "en": "To run",
  "ja": "走る",
  "cat": "Deportes"
 },
 {
  "es": "El ciclismo",
  "en": "Cycling",
  "ja": "サイクリング",
  "cat": "Deportes"
 },
 {
  "es": "El béisbol",
  "en": "Baseball",
  "ja": "野球",
  "cat": "Deportes"
 },
 {
  "es": "El boxeo",
  "en": "Boxing",
  "ja": "ボクシング",
  "cat": "Deportes"
 },
 {
  "es": "El yoga",
  "en": "Yoga",
  "ja": "ヨガ",
  "cat": "Deportes"
 },
 {
  "es": "El gimnasio",
  "en": "Gym",
  "ja": "ジム",
  "cat": "Deportes"
 },
 {
  "es": "El árbol",
  "en": "Tree",
  "ja": "木",
  "cat": "Naturaleza"
 },
 {
  "es": "La flor",
  "en": "Flower",
  "ja": "花",
  "cat": "Naturaleza"
 },
 {
  "es": "El río",
  "en": "River",
  "ja": "川",
  "cat": "Naturaleza"
 },
 {
  "es": "El mar",
  "en": "Sea",
  "ja": "海",
  "cat": "Naturaleza"
 },
 {
  "es": "El cielo",
  "en": "Sky",
  "ja": "空",
  "cat": "Naturaleza"
 },
 {
  "es": "La estrella",
  "en": "Star",
  "ja": "星",
  "cat": "Naturaleza"
 },
 {
  "es": "La luna",
  "en": "Moon",
  "ja": "月",
  "cat": "Naturaleza"
 },
 {
  "es": "El bosque",
  "en": "Forest",
  "ja": "森",
  "cat": "Naturaleza"
 },
 {
  "es": "La piedra",
  "en": "Stone",
  "ja": "石",
  "cat": "Naturaleza"
 },
 {
  "es": "Siempre",
  "en": "Always",
  "ja": "いつも",
  "cat": "Frecuencia"
 },
 {
  "es": "Nunca",
  "en": "Never",
  "ja": "決して〜ない",
  "cat": "Frecuencia"
 },
 {
  "es": "A veces",
  "en": "Sometimes",
  "ja": "時々",
  "cat": "Frecuencia"
 },
 {
  "es": "A menudo",
  "en": "Often",
  "ja": "よく",
  "cat": "Frecuencia"
 },
 {
  "es": "Ahora",
  "en": "Now",
  "ja": "今",
  "cat": "Frecuencia"
 },
 {
  "es": "Después",
  "en": "After / Later",
  "ja": "あとで",
  "cat": "Frecuencia"
 },
 {
  "es": "Antes",
  "en": "Before",
  "ja": "前に",
  "cat": "Frecuencia"
 },
 {
  "es": "Todavía",
  "en": "Still / Yet",
  "ja": "まだ",
  "cat": "Frecuencia"
 },
 {
  "es": "Ya",
  "en": "Already",
  "ja": "すでに",
  "cat": "Frecuencia"
 },
 {
  "es": "Pronto",
  "en": "Soon",
  "ja": "すぐに",
  "cat": "Frecuencia"
 },
 {
  "es": "Temprano",
  "en": "Early",
  "ja": "早く",
  "cat": "Frecuencia"
 },
 {
  "es": "Tarde",
  "en": "Late",
  "ja": "遅く",
  "cat": "Frecuencia"
 },
 {
  "es": "Estar en las nubes",
  "en": "To be daydreaming",
  "ja": "上の空である（直訳:雲の中にいる）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Costar un ojo de la cara",
  "en": "To cost an arm and a leg",
  "ja": "非常に高い（直訳:顔の目玉の値段がする）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Tomar el pelo",
  "en": "To pull someone's leg",
  "ja": "からかう（直訳:髪を引っ張る）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Meter la pata",
  "en": "To mess up",
  "ja": "やらかす（直訳:足を突っ込む）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "No tener pelos en la lengua",
  "en": "To speak one's mind bluntly",
  "ja": "歯に衣着せぬ（直訳:舌に毛がない）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Ser pan comido",
  "en": "To be a piece of cake",
  "ja": "朝飯前（直訳:食べたパン）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Estar como agua para chocolate",
  "en": "To be extremely angry",
  "ja": "かんかんに怒っている（メキシコ独特の表現）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Ponerse las pilas",
  "en": "To get one's act together",
  "ja": "気合を入れる（直訳:電池を入れる）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Echar de menos",
  "en": "To miss someone/something",
  "ja": "恋しく思う",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Dar en el clavo",
  "en": "To hit the nail on the head",
  "ja": "図星をつく（直訳:釘に当てる）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Hacer la vista gorda",
  "en": "To turn a blind eye",
  "ja": "見て見ぬふりをする",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Estar hasta las narices",
  "en": "To be fed up",
  "ja": "うんざりしている（直訳:鼻まで達している）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Írsele la mano",
  "en": "To overdo it",
  "ja": "やり過ぎる（直訳:手が行ってしまう）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Quedarse de piedra",
  "en": "To be stunned",
  "ja": "あぜんとする（直訳:石になる）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Ni fu ni fa",
  "en": "So-so / neither here nor there",
  "ja": "どうでもいい、まあまあ",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Fijarse en",
  "en": "To notice / pay attention to",
  "ja": "〜に気づく、注目する",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Darse cuenta de",
  "en": "To realize",
  "ja": "〜に気がつく",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Enterarse de",
  "en": "To find out about",
  "ja": "〜を知る",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Arrepentirse de",
  "en": "To regret",
  "ja": "後悔する",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Acostumbrarse a",
  "en": "To get used to",
  "ja": "〜に慣れる",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Atreverse a",
  "en": "To dare to",
  "ja": "あえて〜する",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Quejarse de",
  "en": "To complain about",
  "ja": "〜に文句を言う",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Sorprenderse de",
  "en": "To be surprised at",
  "ja": "〜に驚く",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Negarse a",
  "en": "To refuse to",
  "ja": "〜することを拒否する",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Empeñarse en",
  "en": "To insist on",
  "ja": "〜に固執する",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Sin duda",
  "en": "Without a doubt",
  "ja": "間違いなく",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Por lo tanto",
  "en": "Therefore",
  "ja": "したがって",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "En cuanto a",
  "en": "As for / regarding",
  "ja": "〜に関しては",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "A pesar de",
  "en": "Despite",
  "ja": "〜にもかかわらず",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "De hecho",
  "en": "In fact",
  "ja": "実は",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Por si acaso",
  "en": "Just in case",
  "ja": "念のため",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Cuanto antes",
  "en": "As soon as possible",
  "ja": "できるだけ早く",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Hoy en día",
  "en": "Nowadays",
  "ja": "最近は",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "La guitarra",
  "en": "Guitar",
  "ja": "ギター",
  "cat": "Música"
 },
 {
  "es": "El piano",
  "en": "Piano",
  "ja": "ピアノ",
  "cat": "Música"
 },
 {
  "es": "El violín",
  "en": "Violin",
  "ja": "バイオリン",
  "cat": "Música"
 },
 {
  "es": "La flauta",
  "en": "Flute",
  "ja": "フルート",
  "cat": "Música"
 },
 {
  "es": "La trompeta",
  "en": "Trumpet",
  "ja": "トランペット",
  "cat": "Música"
 },
 {
  "es": "El saxofón",
  "en": "Saxophone",
  "ja": "サックス",
  "cat": "Música"
 },
 {
  "es": "El arpa",
  "en": "Harp",
  "ja": "ハープ",
  "cat": "Música"
 },
 {
  "es": "El tambor",
  "en": "Drum",
  "ja": "太鼓",
  "cat": "Música"
 },
 {
  "es": "El acordeón",
  "en": "Accordion",
  "ja": "アコーディオン",
  "cat": "Música"
 },
 {
  "es": "El clarinete",
  "en": "Clarinet",
  "ja": "クラリネット",
  "cat": "Música"
 },
 {
  "es": "El contrabajo",
  "en": "Double bass",
  "ja": "コントラバス",
  "cat": "Música"
 },
 {
  "es": "El ukelele",
  "en": "Ukulele",
  "ja": "ウクレレ",
  "cat": "Música"
 },
 {
  "es": "El órgano",
  "en": "Organ",
  "ja": "オルガン",
  "cat": "Música"
 },
 {
  "es": "La pandereta",
  "en": "Tambourine",
  "ja": "タンバリン",
  "cat": "Música"
 },
 {
  "es": "El médico",
  "en": "Doctor",
  "ja": "医者",
  "cat": "Profesiones"
 },
 {
  "es": "La enfermera",
  "en": "Nurse",
  "ja": "看護師",
  "cat": "Profesiones"
 },
 {
  "es": "El maestro",
  "en": "Teacher",
  "ja": "教師",
  "cat": "Profesiones"
 },
 {
  "es": "El abogado",
  "en": "Lawyer",
  "ja": "弁護士",
  "cat": "Profesiones"
 },
 {
  "es": "El ingeniero",
  "en": "Engineer",
  "ja": "エンジニア",
  "cat": "Profesiones"
 },
 {
  "es": "El arquitecto",
  "en": "Architect",
  "ja": "建築家",
  "cat": "Profesiones"
 },
 {
  "es": "El contador",
  "en": "Accountant",
  "ja": "会計士",
  "cat": "Profesiones"
 },
 {
  "es": "El periodista",
  "en": "Journalist",
  "ja": "記者",
  "cat": "Profesiones"
 },
 {
  "es": "El cocinero",
  "en": "Cook",
  "ja": "料理人",
  "cat": "Profesiones"
 },
 {
  "es": "El camarero",
  "en": "Waiter",
  "ja": "ウェイター",
  "cat": "Profesiones"
 },
 {
  "es": "El piloto",
  "en": "Pilot",
  "ja": "パイロット",
  "cat": "Profesiones"
 },
 {
  "es": "El policía",
  "en": "Police officer",
  "ja": "警察官",
  "cat": "Profesiones"
 },
 {
  "es": "El bombero",
  "en": "Firefighter",
  "ja": "消防士",
  "cat": "Profesiones"
 },
 {
  "es": "El electricista",
  "en": "Electrician",
  "ja": "電気技師",
  "cat": "Profesiones"
 },
 {
  "es": "El plomero",
  "en": "Plumber",
  "ja": "配管工",
  "cat": "Profesiones"
 },
 {
  "es": "El carpintero",
  "en": "Carpenter",
  "ja": "大工",
  "cat": "Profesiones"
 },
 {
  "es": "El peluquero",
  "en": "Hairdresser",
  "ja": "美容師",
  "cat": "Profesiones"
 },
 {
  "es": "El dentista",
  "en": "Dentist",
  "ja": "歯科医",
  "cat": "Profesiones"
 },
 {
  "es": "El veterinario",
  "en": "Veterinarian",
  "ja": "獣医",
  "cat": "Profesiones"
 },
 {
  "es": "El científico",
  "en": "Scientist",
  "ja": "科学者",
  "cat": "Profesiones"
 },
 {
  "es": "El escritor",
  "en": "Writer",
  "ja": "作家",
  "cat": "Profesiones"
 },
 {
  "es": "El actor",
  "en": "Actor",
  "ja": "俳優",
  "cat": "Profesiones"
 },
 {
  "es": "La actriz",
  "en": "Actress",
  "ja": "女優",
  "cat": "Profesiones"
 },
 {
  "es": "El cantante",
  "en": "Singer",
  "ja": "歌手",
  "cat": "Profesiones"
 },
 {
  "es": "El pintor",
  "en": "Painter",
  "ja": "画家",
  "cat": "Profesiones"
 },
 {
  "es": "El granjero",
  "en": "Farmer",
  "ja": "農家",
  "cat": "Profesiones"
 },
 {
  "es": "La manzana",
  "en": "Apple",
  "ja": "りんご",
  "cat": "Comida"
 },
 {
  "es": "El plátano",
  "en": "Banana",
  "ja": "バナナ",
  "cat": "Comida"
 },
 {
  "es": "La naranja",
  "en": "Orange (fruit)",
  "ja": "オレンジ(果物)",
  "cat": "Comida"
 },
 {
  "es": "La uva",
  "en": "Grape",
  "ja": "ぶどう",
  "cat": "Comida"
 },
 {
  "es": "La fresa",
  "en": "Strawberry",
  "ja": "いちご",
  "cat": "Comida"
 },
 {
  "es": "La sandía",
  "en": "Watermelon",
  "ja": "スイカ",
  "cat": "Comida"
 },
 {
  "es": "La piña",
  "en": "Pineapple",
  "ja": "パイナップル",
  "cat": "Comida"
 },
 {
  "es": "El mango",
  "en": "Mango",
  "ja": "マンゴー",
  "cat": "Comida"
 },
 {
  "es": "El limón",
  "en": "Lemon",
  "ja": "レモン",
  "cat": "Comida"
 },
 {
  "es": "La pera",
  "en": "Pear",
  "ja": "梨/洋梨",
  "cat": "Comida"
 },
 {
  "es": "La cereza",
  "en": "Cherry",
  "ja": "さくらんぼ",
  "cat": "Comida"
 },
 {
  "es": "El durazno",
  "en": "Peach",
  "ja": "桃",
  "cat": "Comida"
 },
 {
  "es": "La papaya",
  "en": "Papaya",
  "ja": "パパイヤ",
  "cat": "Comida"
 },
 {
  "es": "El coco",
  "en": "Coconut",
  "ja": "ココナッツ",
  "cat": "Comida"
 },
 {
  "es": "La zanahoria",
  "en": "Carrot",
  "ja": "にんじん",
  "cat": "Comida"
 },
 {
  "es": "La papa",
  "en": "Potato",
  "ja": "じゃがいも",
  "cat": "Comida"
 },
 {
  "es": "La cebolla",
  "en": "Onion",
  "ja": "玉ねぎ",
  "cat": "Comida"
 },
 {
  "es": "El ajo",
  "en": "Garlic",
  "ja": "にんにく",
  "cat": "Comida"
 },
 {
  "es": "El tomate",
  "en": "Tomato",
  "ja": "トマト",
  "cat": "Comida"
 },
 {
  "es": "La lechuga",
  "en": "Lettuce",
  "ja": "レタス",
  "cat": "Comida"
 },
 {
  "es": "El pepino",
  "en": "Cucumber",
  "ja": "きゅうり",
  "cat": "Comida"
 },
 {
  "es": "El brócoli",
  "en": "Broccoli",
  "ja": "ブロッコリー",
  "cat": "Comida"
 },
 {
  "es": "La espinaca",
  "en": "Spinach",
  "ja": "ほうれん草",
  "cat": "Comida"
 },
 {
  "es": "La calabaza",
  "en": "Pumpkin",
  "ja": "かぼちゃ",
  "cat": "Comida"
 },
 {
  "es": "El pimiento",
  "en": "Bell pepper",
  "ja": "ピーマン",
  "cat": "Comida"
 },
 {
  "es": "España",
  "en": "Spain",
  "ja": "スペイン",
  "cat": "Geografía"
 },
 {
  "es": "México",
  "en": "Mexico",
  "ja": "メキシコ",
  "cat": "Geografía"
 },
 {
  "es": "Argentina",
  "en": "Argentina",
  "ja": "アルゼンチン",
  "cat": "Geografía"
 },
 {
  "es": "Colombia",
  "en": "Colombia",
  "ja": "コロンビア",
  "cat": "Geografía"
 },
 {
  "es": "Perú",
  "en": "Peru",
  "ja": "ペルー",
  "cat": "Geografía"
 },
 {
  "es": "Chile",
  "en": "Chile",
  "ja": "チリ",
  "cat": "Geografía"
 },
 {
  "es": "Estados Unidos",
  "en": "United States",
  "ja": "アメリカ合衆国",
  "cat": "Geografía"
 },
 {
  "es": "Canadá",
  "en": "Canada",
  "ja": "カナダ",
  "cat": "Geografía"
 },
 {
  "es": "Francia",
  "en": "France",
  "ja": "フランス",
  "cat": "Geografía"
 },
 {
  "es": "Alemania",
  "en": "Germany",
  "ja": "ドイツ",
  "cat": "Geografía"
 },
 {
  "es": "Italia",
  "en": "Italy",
  "ja": "イタリア",
  "cat": "Geografía"
 },
 {
  "es": "Japón",
  "en": "Japan",
  "ja": "日本",
  "cat": "Geografía"
 },
 {
  "es": "China",
  "en": "China",
  "ja": "中国",
  "cat": "Geografía"
 },
 {
  "es": "Brasil",
  "en": "Brazil",
  "ja": "ブラジル",
  "cat": "Geografía"
 },
 {
  "es": "Cuba",
  "en": "Cuba",
  "ja": "キューバ",
  "cat": "Geografía"
 },
 {
  "es": "Guatemala",
  "en": "Guatemala",
  "ja": "グアテマラ",
  "cat": "Geografía"
 },
 {
  "es": "Venezuela",
  "en": "Venezuela",
  "ja": "ベネズエラ",
  "cat": "Geografía"
 },
 {
  "es": "Ecuador",
  "en": "Ecuador",
  "ja": "エクアドル",
  "cat": "Geografía"
 },
 {
  "es": "Bolivia",
  "en": "Bolivia",
  "ja": "ボリビア",
  "cat": "Geografía"
 },
 {
  "es": "Uruguay",
  "en": "Uruguay",
  "ja": "ウルグアイ",
  "cat": "Geografía"
 },
 {
  "es": "América",
  "en": "America",
  "ja": "アメリカ大陸",
  "cat": "Geografía"
 },
 {
  "es": "Europa",
  "en": "Europe",
  "ja": "ヨーロッパ",
  "cat": "Geografía"
 },
 {
  "es": "Asia",
  "en": "Asia",
  "ja": "アジア",
  "cat": "Geografía"
 },
 {
  "es": "África",
  "en": "Africa",
  "ja": "アフリカ",
  "cat": "Geografía"
 },
 {
  "es": "Oceanía",
  "en": "Oceania",
  "ja": "オセアニア",
  "cat": "Geografía"
 },
 {
  "es": "La Antártida",
  "en": "Antarctica",
  "ja": "南極大陸",
  "cat": "Geografía"
 },
 {
  "es": "La física",
  "en": "Physics",
  "ja": "物理学",
  "cat": "Ciencia"
 },
 {
  "es": "La química",
  "en": "Chemistry",
  "ja": "化学",
  "cat": "Ciencia"
 },
 {
  "es": "La biología",
  "en": "Biology",
  "ja": "生物学",
  "cat": "Ciencia"
 },
 {
  "es": "Las matemáticas",
  "en": "Mathematics",
  "ja": "数学",
  "cat": "Ciencia"
 },
 {
  "es": "El experimento",
  "en": "Experiment",
  "ja": "実験",
  "cat": "Ciencia"
 },
 {
  "es": "El átomo",
  "en": "Atom",
  "ja": "原子",
  "cat": "Ciencia"
 },
 {
  "es": "La célula",
  "en": "Cell",
  "ja": "細胞",
  "cat": "Ciencia"
 },
 {
  "es": "El planeta",
  "en": "Planet",
  "ja": "惑星",
  "cat": "Ciencia"
 },
 {
  "es": "La gravedad",
  "en": "Gravity",
  "ja": "重力",
  "cat": "Ciencia"
 },
 {
  "es": "La energía",
  "en": "Energy",
  "ja": "エネルギー",
  "cat": "Ciencia"
 },
 {
  "es": "El microscopio",
  "en": "Microscope",
  "ja": "顕微鏡",
  "cat": "Ciencia"
 },
 {
  "es": "La fórmula",
  "en": "Formula",
  "ja": "公式",
  "cat": "Ciencia"
 },
 {
  "es": "El laboratorio",
  "en": "Laboratory",
  "ja": "研究室",
  "cat": "Ciencia"
 },
 {
  "es": "La teoría",
  "en": "Theory",
  "ja": "理論",
  "cat": "Ciencia"
 },
 {
  "es": "El universo",
  "en": "Universe",
  "ja": "宇宙",
  "cat": "Ciencia"
 },
 {
  "es": "La pintura",
  "en": "Painting",
  "ja": "絵画",
  "cat": "Arte"
 },
 {
  "es": "La escultura",
  "en": "Sculpture",
  "ja": "彫刻",
  "cat": "Arte"
 },
 {
  "es": "La poesía",
  "en": "Poetry",
  "ja": "詩",
  "cat": "Arte"
 },
 {
  "es": "La novela",
  "en": "Novel",
  "ja": "小説",
  "cat": "Arte"
 },
 {
  "es": "El cuento",
  "en": "Short story",
  "ja": "短編小説",
  "cat": "Arte"
 },
 {
  "es": "El autor",
  "en": "Author",
  "ja": "著者",
  "cat": "Arte"
 },
 {
  "es": "El personaje",
  "en": "Character",
  "ja": "登場人物",
  "cat": "Arte"
 },
 {
  "es": "La trama",
  "en": "Plot",
  "ja": "筋書き",
  "cat": "Arte"
 },
 {
  "es": "El poema",
  "en": "Poem",
  "ja": "詩(作品)",
  "cat": "Arte"
 },
 {
  "es": "La obra de teatro",
  "en": "Play (theater)",
  "ja": "演劇作品",
  "cat": "Arte"
 },
 {
  "es": "El escenario",
  "en": "Stage",
  "ja": "舞台",
  "cat": "Arte"
 },
 {
  "es": "La exposición",
  "en": "Exhibition",
  "ja": "展覧会",
  "cat": "Arte"
 },
 {
  "es": "El lienzo",
  "en": "Canvas",
  "ja": "キャンバス",
  "cat": "Arte"
 },
 {
  "es": "El pincel",
  "en": "Paintbrush",
  "ja": "絵筆",
  "cat": "Arte"
 },
 {
  "es": "La galería",
  "en": "Gallery",
  "ja": "ギャラリー",
  "cat": "Arte"
 },
 {
  "es": "Abrir",
  "en": "To open",
  "ja": "開ける",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Cerrar",
  "en": "To close",
  "ja": "閉める",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Empezar",
  "en": "To start",
  "ja": "始める",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Terminar",
  "en": "To finish",
  "ja": "終える",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Entender",
  "en": "To understand",
  "ja": "理解する",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Aprender",
  "en": "To learn",
  "ja": "学ぶ",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Enseñar",
  "en": "To teach",
  "ja": "教える",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Escribir",
  "en": "To write",
  "ja": "書く",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Leer",
  "en": "To read",
  "ja": "読む",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Escuchar",
  "en": "To listen",
  "ja": "聞く",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Mirar",
  "en": "To look at",
  "ja": "見る",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Ver",
  "en": "To see",
  "ja": "見える/見る",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Oír",
  "en": "To hear",
  "ja": "聞こえる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Sentir",
  "en": "To feel",
  "ja": "感じる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Pensar",
  "en": "To think",
  "ja": "考える",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Creer",
  "en": "To believe",
  "ja": "信じる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Saber",
  "en": "To know (a fact)",
  "ja": "知っている",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Conocer",
  "en": "To know (a person/place)",
  "ja": "知り合いである",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Dar",
  "en": "To give",
  "ja": "与える",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Tomar",
  "en": "To take",
  "ja": "取る/飲む",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Llevar",
  "en": "To carry/wear",
  "ja": "運ぶ/身につける",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Traer",
  "en": "To bring",
  "ja": "持ってくる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Buscar",
  "en": "To look for",
  "ja": "探す",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Encontrar",
  "en": "To find",
  "ja": "見つける",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Perder",
  "en": "To lose",
  "ja": "失う",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Ganar",
  "en": "To win/earn",
  "ja": "勝つ/稼ぐ",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Jugar",
  "en": "To play",
  "ja": "遊ぶ/プレーする",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Trabajar",
  "en": "To work",
  "ja": "働く",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Estudiar",
  "en": "To study",
  "ja": "勉強する",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Dormir",
  "en": "To sleep",
  "ja": "眠る",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Soñar",
  "en": "To dream",
  "ja": "夢を見る",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Recordar",
  "en": "To remember",
  "ja": "思い出す",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Olvidar",
  "en": "To forget",
  "ja": "忘れる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Decidir",
  "en": "To decide",
  "ja": "決める",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Cambiar",
  "en": "To change",
  "ja": "変える",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Mejorar",
  "en": "To improve",
  "ja": "改善する",
  "cat": "Verbos"
 },
 {
  "es": "Ayudar",
  "en": "To help",
  "ja": "手伝う",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Permitir",
  "en": "To allow",
  "ja": "許可する",
  "cat": "Verbos"
 },
 {
  "es": "Prohibir",
  "en": "To forbid",
  "ja": "禁止する",
  "cat": "Verbos"
 },
 {
  "es": "Preguntar",
  "en": "To ask",
  "ja": "質問する",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Amable",
  "en": "Kind",
  "ja": "親切な",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Generoso",
  "en": "Generous",
  "ja": "寛大な",
  "cat": "Adjetivos"
 },
 {
  "es": "Egoísta",
  "en": "Selfish",
  "ja": "利己的な",
  "cat": "Adjetivos"
 },
 {
  "es": "Honesto",
  "en": "Honest",
  "ja": "正直な",
  "cat": "Adjetivos"
 },
 {
  "es": "Sincero",
  "en": "Sincere",
  "ja": "誠実な",
  "cat": "Adjetivos"
 },
 {
  "es": "Tímido",
  "en": "Shy",
  "ja": "恥ずかしがりな",
  "cat": "Adjetivos"
 },
 {
  "es": "Valiente",
  "en": "Brave",
  "ja": "勇敢な",
  "cat": "Adjetivos"
 },
 {
  "es": "Paciente",
  "en": "Patient",
  "ja": "忍耐強い",
  "cat": "Adjetivos"
 },
 {
  "es": "Impaciente",
  "en": "Impatient",
  "ja": "せっかちな",
  "cat": "Adjetivos"
 },
 {
  "es": "Curioso",
  "en": "Curious",
  "ja": "好奇心旺盛な",
  "cat": "Adjetivos"
 },
 {
  "es": "Creativo",
  "en": "Creative",
  "ja": "創造的な",
  "cat": "Adjetivos"
 },
 {
  "es": "Responsable",
  "en": "Responsible",
  "ja": "責任感のある",
  "cat": "Adjetivos"
 },
 {
  "es": "Perezoso",
  "en": "Lazy",
  "ja": "怠惰な",
  "cat": "Adjetivos"
 },
 {
  "es": "Trabajador",
  "en": "Hard-working",
  "ja": "勤勉な",
  "cat": "Adjetivos"
 },
 {
  "es": "Optimista",
  "en": "Optimistic",
  "ja": "楽観的な",
  "cat": "Adjetivos"
 },
 {
  "es": "Pesimista",
  "en": "Pessimistic",
  "ja": "悲観的な",
  "cat": "Adjetivos"
 },
 {
  "es": "Gracioso",
  "en": "Funny",
  "ja": "面白い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Serio",
  "en": "Serious",
  "ja": "真面目な",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Educado",
  "en": "Polite",
  "ja": "礼儀正しい",
  "cat": "Adjetivos"
 },
 {
  "es": "Maleducado",
  "en": "Rude",
  "ja": "無礼な",
  "cat": "Adjetivos"
 },
 {
  "es": "La red social",
  "en": "Social network",
  "ja": "SNS",
  "cat": "Tecnología"
 },
 {
  "es": "El usuario",
  "en": "User",
  "ja": "ユーザー",
  "cat": "Tecnología"
 },
 {
  "es": "La publicación",
  "en": "Post",
  "ja": "投稿",
  "cat": "Tecnología"
 },
 {
  "es": "El comentario",
  "en": "Comment",
  "ja": "コメント",
  "cat": "Tecnología"
 },
 {
  "es": "El seguidor",
  "en": "Follower",
  "ja": "フォロワー",
  "cat": "Tecnología"
 },
 {
  "es": "La notificación",
  "en": "Notification",
  "ja": "通知",
  "cat": "Tecnología"
 },
 {
  "es": "El enlace",
  "en": "Link",
  "ja": "リンク",
  "cat": "Tecnología"
 },
 {
  "es": "El archivo",
  "en": "File",
  "ja": "ファイル",
  "cat": "Tecnología"
 },
 {
  "es": "La carpeta",
  "en": "Folder",
  "ja": "フォルダ",
  "cat": "Tecnología"
 },
 {
  "es": "El navegador",
  "en": "Browser",
  "ja": "ブラウザ",
  "cat": "Tecnología"
 },
 {
  "es": "La descarga",
  "en": "Download",
  "ja": "ダウンロード",
  "cat": "Tecnología"
 },
 {
  "es": "La actualización",
  "en": "Update",
  "ja": "アップデート",
  "cat": "Tecnología"
 },
 {
  "es": "El video",
  "en": "Video",
  "ja": "動画",
  "cat": "Tecnología"
 },
 {
  "es": "La foto",
  "en": "Photo",
  "ja": "写真",
  "cat": "Tecnología"
 },
 {
  "es": "La pizza",
  "en": "Pizza",
  "ja": "ピザ",
  "cat": "Comida"
 },
 {
  "es": "La hamburguesa",
  "en": "Hamburger",
  "ja": "ハンバーガー",
  "cat": "Comida"
 },
 {
  "es": "La sopa",
  "en": "Soup",
  "ja": "スープ",
  "cat": "Comida"
 },
 {
  "es": "La ensalada",
  "en": "Salad",
  "ja": "サラダ",
  "cat": "Comida"
 },
 {
  "es": "El postre",
  "en": "Dessert",
  "ja": "デザート",
  "cat": "Comida"
 },
 {
  "es": "El pastel",
  "en": "Cake",
  "ja": "ケーキ",
  "cat": "Comida"
 },
 {
  "es": "El helado",
  "en": "Ice cream",
  "ja": "アイスクリーム",
  "cat": "Comida"
 },
 {
  "es": "El chocolate",
  "en": "Chocolate",
  "ja": "チョコレート",
  "cat": "Comida"
 },
 {
  "es": "La galleta",
  "en": "Cookie",
  "ja": "クッキー",
  "cat": "Comida"
 },
 {
  "es": "El jugo",
  "en": "Juice",
  "ja": "ジュース",
  "cat": "Comida"
 },
 {
  "es": "El refresco",
  "en": "Soda",
  "ja": "炭酸飲料",
  "cat": "Comida"
 },
 {
  "es": "La cerveza",
  "en": "Beer",
  "ja": "ビール",
  "cat": "Comida"
 },
 {
  "es": "El vino",
  "en": "Wine",
  "ja": "ワイン",
  "cat": "Comida"
 },
 {
  "es": "El té",
  "en": "Tea",
  "ja": "お茶",
  "cat": "Comida"
 },
 {
  "es": "La leche",
  "en": "Milk",
  "ja": "牛乳",
  "cat": "Comida"
 },
 {
  "es": "El azúcar",
  "en": "Sugar",
  "ja": "砂糖",
  "cat": "Comida"
 },
 {
  "es": "La sal",
  "en": "Salt",
  "ja": "塩",
  "cat": "Comida"
 },
 {
  "es": "La pimienta",
  "en": "Pepper (spice)",
  "ja": "こしょう",
  "cat": "Comida"
 },
 {
  "es": "El aceite",
  "en": "Oil",
  "ja": "油",
  "cat": "Comida"
 },
 {
  "es": "El vinagre",
  "en": "Vinegar",
  "ja": "酢",
  "cat": "Comida"
 },
 {
  "es": "La mantequilla",
  "en": "Butter",
  "ja": "バター",
  "cat": "Comida"
 },
 {
  "es": "El queso",
  "en": "Cheese",
  "ja": "チーズ",
  "cat": "Comida"
 },
 {
  "es": "El huevo",
  "en": "Egg",
  "ja": "卵",
  "cat": "Comida"
 },
 {
  "es": "El arroz",
  "en": "Rice",
  "ja": "米",
  "cat": "Comida"
 },
 {
  "es": "Los frijoles",
  "en": "Beans",
  "ja": "豆",
  "cat": "Comida"
 },
 {
  "es": "El refrigerador",
  "en": "Refrigerator",
  "ja": "冷蔵庫",
  "cat": "Casa"
 },
 {
  "es": "La estufa",
  "en": "Stove",
  "ja": "コンロ",
  "cat": "Casa"
 },
 {
  "es": "El horno",
  "en": "Oven",
  "ja": "オーブン",
  "cat": "Casa"
 },
 {
  "es": "El microondas",
  "en": "Microwave",
  "ja": "電子レンジ",
  "cat": "Casa"
 },
 {
  "es": "La lavadora",
  "en": "Washing machine",
  "ja": "洗濯機",
  "cat": "Casa"
 },
 {
  "es": "La secadora",
  "en": "Dryer",
  "ja": "乾燥機",
  "cat": "Casa"
 },
 {
  "es": "El lavaplatos",
  "en": "Dishwasher",
  "ja": "食洗機",
  "cat": "Casa"
 },
 {
  "es": "El televisor",
  "en": "TV set",
  "ja": "テレビ",
  "cat": "Casa"
 },
 {
  "es": "El espejo",
  "en": "Mirror",
  "ja": "鏡",
  "cat": "Casa"
 },
 {
  "es": "La lámpara",
  "en": "Lamp",
  "ja": "ランプ",
  "cat": "Casa"
 },
 {
  "es": "La almohada",
  "en": "Pillow",
  "ja": "枕",
  "cat": "Casa"
 },
 {
  "es": "La manta",
  "en": "Blanket",
  "ja": "毛布",
  "cat": "Casa"
 },
 {
  "es": "El armario",
  "en": "Closet",
  "ja": "クローゼット",
  "cat": "Casa"
 },
 {
  "es": "El estante",
  "en": "Shelf",
  "ja": "棚",
  "cat": "Casa"
 },
 {
  "es": "La alfombra",
  "en": "Rug",
  "ja": "じゅうたん",
  "cat": "Casa"
 },
 {
  "es": "El ayuntamiento",
  "en": "City hall",
  "ja": "市役所",
  "cat": "Lugares"
 },
 {
  "es": "La estación de policía",
  "en": "Police station",
  "ja": "警察署",
  "cat": "Lugares"
 },
 {
  "es": "El estadio",
  "en": "Stadium",
  "ja": "スタジアム",
  "cat": "Lugares"
 },
 {
  "es": "El teatro",
  "en": "Theater",
  "ja": "劇場",
  "cat": "Lugares"
 },
 {
  "es": "El cine",
  "en": "Cinema",
  "ja": "映画館",
  "cat": "Lugares"
 },
 {
  "es": "La catedral",
  "en": "Cathedral",
  "ja": "大聖堂",
  "cat": "Lugares"
 },
 {
  "es": "El rascacielos",
  "en": "Skyscraper",
  "ja": "高層ビル",
  "cat": "Lugares"
 },
 {
  "es": "La plaza",
  "en": "Square (plaza)",
  "ja": "広場",
  "cat": "Lugares"
 },
 {
  "es": "La calle",
  "en": "Street",
  "ja": "通り",
  "cat": "Lugares"
 },
 {
  "es": "La avenida",
  "en": "Avenue",
  "ja": "大通り",
  "cat": "Lugares"
 },
 {
  "es": "El puente",
  "en": "Bridge",
  "ja": "橋",
  "cat": "Lugares"
 },
 {
  "es": "La torre",
  "en": "Tower",
  "ja": "タワー",
  "cat": "Lugares"
 },
 {
  "es": "El monumento",
  "en": "Monument",
  "ja": "記念碑",
  "cat": "Lugares"
 },
 {
  "es": "El semáforo",
  "en": "Traffic light",
  "ja": "信号機",
  "cat": "Lugares"
 },
 {
  "es": "La acera",
  "en": "Sidewalk",
  "ja": "歩道",
  "cat": "Lugares"
 },
 {
  "es": "Las gafas",
  "en": "Glasses",
  "ja": "眼鏡",
  "cat": "Ropa"
 },
 {
  "es": "El paraguas",
  "en": "Umbrella",
  "ja": "傘",
  "cat": "Ropa"
 },
 {
  "es": "El bolso",
  "en": "Handbag",
  "ja": "バッグ",
  "cat": "Ropa"
 },
 {
  "es": "La mochila",
  "en": "Backpack",
  "ja": "リュック",
  "cat": "Ropa"
 },
 {
  "es": "El reloj",
  "en": "Watch/clock",
  "ja": "時計",
  "cat": "Ropa"
 },
 {
  "es": "El collar",
  "en": "Necklace",
  "ja": "ネックレス",
  "cat": "Ropa"
 },
 {
  "es": "El anillo",
  "en": "Ring",
  "ja": "指輪",
  "cat": "Ropa"
 },
 {
  "es": "Los aretes",
  "en": "Earrings",
  "ja": "ピアス/イヤリング",
  "cat": "Ropa"
 },
 {
  "es": "La pulsera",
  "en": "Bracelet",
  "ja": "ブレスレット",
  "cat": "Ropa"
 },
 {
  "es": "El pañuelo",
  "en": "Handkerchief",
  "ja": "ハンカチ",
  "cat": "Ropa"
 },
 {
  "es": "Las sandalias",
  "en": "Sandals",
  "ja": "サンダル",
  "cat": "Ropa"
 },
 {
  "es": "Las botas",
  "en": "Boots",
  "ja": "ブーツ",
  "cat": "Ropa"
 },
 {
  "es": "La salud",
  "en": "Health",
  "ja": "健康",
  "cat": "Salud"
 },
 {
  "es": "La enfermedad",
  "en": "Illness",
  "ja": "病気",
  "cat": "Salud"
 },
 {
  "es": "El resfriado",
  "en": "Cold (illness)",
  "ja": "風邪",
  "cat": "Salud"
 },
 {
  "es": "La fiebre",
  "en": "Fever",
  "ja": "発熱",
  "cat": "Salud"
 },
 {
  "es": "El dolor",
  "en": "Pain",
  "ja": "痛み",
  "cat": "Salud"
 },
 {
  "es": "La medicina",
  "en": "Medicine",
  "ja": "薬",
  "cat": "Salud"
 },
 {
  "es": "La pastilla",
  "en": "Pill",
  "ja": "錠剤",
  "cat": "Salud"
 },
 {
  "es": "La vacuna",
  "en": "Vaccine",
  "ja": "ワクチン",
  "cat": "Salud"
 },
 {
  "es": "La receta",
  "en": "Prescription/recipe",
  "ja": "処方箋/レシピ",
  "cat": "Salud"
 },
 {
  "es": "La clínica",
  "en": "Clinic",
  "ja": "クリニック",
  "cat": "Salud"
 },
 {
  "es": "El síntoma",
  "en": "Symptom",
  "ja": "症状",
  "cat": "Salud"
 },
 {
  "es": "La alergia",
  "en": "Allergy",
  "ja": "アレルギー",
  "cat": "Salud"
 },
 {
  "es": "La cirugía",
  "en": "Surgery",
  "ja": "手術",
  "cat": "Salud"
 },
 {
  "es": "El yeso",
  "en": "Cast (medical)",
  "ja": "ギプス",
  "cat": "Salud"
 },
 {
  "es": "La venda",
  "en": "Bandage",
  "ja": "包帯",
  "cat": "Salud"
 },
 {
  "es": "La aduana",
  "en": "Customs",
  "ja": "税関",
  "cat": "Viajes"
 },
 {
  "es": "La visa",
  "en": "Visa",
  "ja": "ビザ",
  "cat": "Viajes"
 },
 {
  "es": "El equipaje de mano",
  "en": "Carry-on luggage",
  "ja": "機内持ち込み荷物",
  "cat": "Viajes"
 },
 {
  "es": "La puerta de embarque",
  "en": "Boarding gate",
  "ja": "搭乗ゲート",
  "cat": "Viajes"
 },
 {
  "es": "La escala",
  "en": "Layover",
  "ja": "乗り継ぎ",
  "cat": "Viajes"
 },
 {
  "es": "El mostrador",
  "en": "Counter",
  "ja": "カウンター",
  "cat": "Viajes"
 },
 {
  "es": "La tarjeta de embarque",
  "en": "Boarding pass",
  "ja": "搭乗券",
  "cat": "Viajes"
 },
 {
  "es": "El destino",
  "en": "Destination",
  "ja": "目的地",
  "cat": "Viajes"
 },
 {
  "es": "El itinerario",
  "en": "Itinerary",
  "ja": "旅程",
  "cat": "Viajes"
 },
 {
  "es": "La excursión",
  "en": "Excursion",
  "ja": "小旅行",
  "cat": "Viajes"
 },
 {
  "es": "El guía turístico",
  "en": "Tour guide",
  "ja": "観光ガイド",
  "cat": "Viajes"
 },
 {
  "es": "El mapa",
  "en": "Map",
  "ja": "地図",
  "cat": "Viajes"
 },
 {
  "es": "La brújula",
  "en": "Compass",
  "ja": "コンパス",
  "cat": "Viajes"
 },
 {
  "es": "El seguro de viaje",
  "en": "Travel insurance",
  "ja": "旅行保険",
  "cat": "Viajes"
 },
 {
  "es": "La embajada",
  "en": "Embassy",
  "ja": "大使館",
  "cat": "Viajes"
 },
 {
  "es": "El volcán",
  "en": "Volcano",
  "ja": "火山",
  "cat": "Naturaleza"
 },
 {
  "es": "El desierto",
  "en": "Desert",
  "ja": "砂漠",
  "cat": "Naturaleza"
 },
 {
  "es": "La isla",
  "en": "Island",
  "ja": "島",
  "cat": "Naturaleza"
 },
 {
  "es": "La costa",
  "en": "Coast",
  "ja": "海岸",
  "cat": "Naturaleza"
 },
 {
  "es": "El valle",
  "en": "Valley",
  "ja": "谷",
  "cat": "Naturaleza"
 },
 {
  "es": "La colina",
  "en": "Hill",
  "ja": "丘",
  "cat": "Naturaleza"
 },
 {
  "es": "La cascada",
  "en": "Waterfall",
  "ja": "滝",
  "cat": "Naturaleza"
 },
 {
  "es": "El lago",
  "en": "Lake",
  "ja": "湖",
  "cat": "Naturaleza"
 },
 {
  "es": "El glaciar",
  "en": "Glacier",
  "ja": "氷河",
  "cat": "Naturaleza"
 },
 {
  "es": "El terremoto",
  "en": "Earthquake",
  "ja": "地震",
  "cat": "Naturaleza"
 },
 {
  "es": "El huracán",
  "en": "Hurricane",
  "ja": "ハリケーン",
  "cat": "Naturaleza"
 },
 {
  "es": "La sequía",
  "en": "Drought",
  "ja": "干ばつ",
  "cat": "Naturaleza"
 },
 {
  "es": "La marea",
  "en": "Tide",
  "ja": "潮",
  "cat": "Naturaleza"
 },
 {
  "es": "El amanecer",
  "en": "Dawn",
  "ja": "夜明け",
  "cat": "Naturaleza"
 },
 {
  "es": "El atardecer",
  "en": "Sunset",
  "ja": "夕暮れ",
  "cat": "Naturaleza"
 },
 {
  "es": "El dinero",
  "en": "Money",
  "ja": "お金",
  "cat": "Finanzas"
 },
 {
  "es": "La moneda",
  "en": "Currency/coin",
  "ja": "通貨/硬貨",
  "cat": "Finanzas"
 },
 {
  "es": "La tarjeta de crédito",
  "en": "Credit card",
  "ja": "クレジットカード",
  "cat": "Finanzas"
 },
 {
  "es": "La cuenta bancaria",
  "en": "Bank account",
  "ja": "銀行口座",
  "cat": "Finanzas"
 },
 {
  "es": "El cajero automático",
  "en": "ATM",
  "ja": "ATM",
  "cat": "Finanzas"
 },
 {
  "es": "El préstamo",
  "en": "Loan",
  "ja": "ローン",
  "cat": "Finanzas"
 },
 {
  "es": "El ahorro",
  "en": "Savings",
  "ja": "貯金",
  "cat": "Finanzas"
 },
 {
  "es": "La inversión",
  "en": "Investment",
  "ja": "投資",
  "cat": "Finanzas"
 },
 {
  "es": "El impuesto",
  "en": "Tax",
  "ja": "税金",
  "cat": "Finanzas"
 },
 {
  "es": "El presupuesto",
  "en": "Budget",
  "ja": "予算",
  "cat": "Finanzas"
 },
 {
  "es": "El efectivo",
  "en": "Cash",
  "ja": "現金",
  "cat": "Finanzas"
 },
 {
  "es": "El cambio",
  "en": "Change (money)",
  "ja": "おつり/両替",
  "cat": "Finanzas"
 },
 {
  "es": "La factura",
  "en": "Invoice",
  "ja": "請求書",
  "cat": "Finanzas"
 },
 {
  "es": "El recibo",
  "en": "Receipt",
  "ja": "領収書",
  "cat": "Finanzas"
 },
 {
  "es": "La universidad",
  "en": "University",
  "ja": "大学",
  "cat": "Educación"
 },
 {
  "es": "La carrera",
  "en": "Degree program",
  "ja": "専攻・学部課程",
  "cat": "Educación"
 },
 {
  "es": "La beca",
  "en": "Scholarship",
  "ja": "奨学金",
  "cat": "Educación"
 },
 {
  "es": "El examen",
  "en": "Exam",
  "ja": "試験",
  "cat": "Educación"
 },
 {
  "es": "La tarea",
  "en": "Homework",
  "ja": "宿題",
  "cat": "Educación"
 },
 {
  "es": "La nota",
  "en": "Grade",
  "ja": "成績",
  "cat": "Educación"
 },
 {
  "es": "El título",
  "en": "Degree/title",
  "ja": "学位",
  "cat": "Educación"
 },
 {
  "es": "La conferencia",
  "en": "Lecture/conference",
  "ja": "講義・会議",
  "cat": "Educación"
 },
 {
  "es": "El semestre",
  "en": "Semester",
  "ja": "学期",
  "cat": "Educación"
 },
 {
  "es": "La matrícula",
  "en": "Tuition/enrollment",
  "ja": "授業料・入学登録",
  "cat": "Educación"
 },
 {
  "es": "El aula",
  "en": "Classroom",
  "ja": "教室",
  "cat": "Educación"
 },
 {
  "es": "El pizarrón",
  "en": "Blackboard",
  "ja": "黒板",
  "cat": "Educación"
 },
 {
  "es": "El cuaderno",
  "en": "Notebook",
  "ja": "ノート",
  "cat": "Educación"
 },
 {
  "es": "El lápiz",
  "en": "Pencil",
  "ja": "鉛筆",
  "cat": "Educación"
 },
 {
  "es": "La regla",
  "en": "Ruler",
  "ja": "定規",
  "cat": "Educación"
 },
 {
  "es": "El golf",
  "en": "Golf",
  "ja": "ゴルフ",
  "cat": "Deportes"
 },
 {
  "es": "El surf",
  "en": "Surfing",
  "ja": "サーフィン",
  "cat": "Deportes"
 },
 {
  "es": "El esquí",
  "en": "Skiing",
  "ja": "スキー",
  "cat": "Deportes"
 },
 {
  "es": "El snowboard",
  "en": "Snowboarding",
  "ja": "スノーボード",
  "cat": "Deportes"
 },
 {
  "es": "La escalada",
  "en": "Climbing",
  "ja": "クライミング",
  "cat": "Deportes"
 },
 {
  "es": "El voleibol",
  "en": "Volleyball",
  "ja": "バレーボール",
  "cat": "Deportes"
 },
 {
  "es": "El rugby",
  "en": "Rugby",
  "ja": "ラグビー",
  "cat": "Deportes"
 },
 {
  "es": "El hockey",
  "en": "Hockey",
  "ja": "ホッケー",
  "cat": "Deportes"
 },
 {
  "es": "Las artes marciales",
  "en": "Martial arts",
  "ja": "格闘技",
  "cat": "Deportes"
 },
 {
  "es": "El atletismo",
  "en": "Athletics/track and field",
  "ja": "陸上競技",
  "cat": "Deportes"
 },
 {
  "es": "El círculo",
  "en": "Circle",
  "ja": "円",
  "cat": "Formas"
 },
 {
  "es": "El cuadrado",
  "en": "Square (shape)",
  "ja": "正方形",
  "cat": "Formas"
 },
 {
  "es": "El triángulo",
  "en": "Triangle",
  "ja": "三角形",
  "cat": "Formas"
 },
 {
  "es": "El rectángulo",
  "en": "Rectangle",
  "ja": "長方形",
  "cat": "Formas"
 },
 {
  "es": "La línea",
  "en": "Line",
  "ja": "線",
  "cat": "Formas"
 },
 {
  "es": "El punto",
  "en": "Point/dot",
  "ja": "点",
  "cat": "Formas"
 },
 {
  "es": "El centímetro",
  "en": "Centimeter",
  "ja": "センチメートル",
  "cat": "Formas"
 },
 {
  "es": "El kilómetro",
  "en": "Kilometer",
  "ja": "キロメートル",
  "cat": "Formas"
 },
 {
  "es": "El litro",
  "en": "Liter",
  "ja": "リットル",
  "cat": "Formas"
 },
 {
  "es": "El kilogramo",
  "en": "Kilogram",
  "ja": "キログラム",
  "cat": "Formas"
 },
 {
  "es": "La docena",
  "en": "Dozen",
  "ja": "1ダース",
  "cat": "Formas"
 },
 {
  "es": "El par",
  "en": "Pair",
  "ja": "一組",
  "cat": "Formas"
 },
 {
  "es": "La mitad",
  "en": "Half",
  "ja": "半分",
  "cat": "Formas"
 },
 {
  "es": "El doble",
  "en": "Double",
  "ja": "二倍",
  "cat": "Formas"
 },
 {
  "es": "¡Qué padre!",
  "en": "How cool! (Mexican)",
  "ja": "かっこいい！（メキシコ表現）",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "¡Ay!",
  "en": "Ouch! / Oh!",
  "ja": "痛っ！/あら",
  "cat": "Frases"
 },
 {
  "es": "¡Uf!",
  "en": "Ugh! / Phew!",
  "ja": "うわ〜/ふう",
  "cat": "Frases"
 },
 {
  "es": "¡Vaya!",
  "en": "Wow! / Well!",
  "ja": "おやおや",
  "cat": "Frases"
 },
 {
  "es": "¡Ojalá!",
  "en": "I hope so!",
  "ja": "そうだといいな！",
  "cat": "Frases"
 },
 {
  "es": "¡Ánimo!",
  "en": "Cheer up! / You can do it!",
  "ja": "頑張れ！",
  "cat": "Frases"
 },
 {
  "es": "¡Cuidado!",
  "en": "Careful!",
  "ja": "気をつけて！",
  "cat": "Frases"
 },
 {
  "es": "¡Salud!",
  "en": "Cheers! / Bless you!",
  "ja": "乾杯！/お大事に",
  "cat": "Frases"
 },
 {
  "es": "¡Auxilio!",
  "en": "Help!",
  "ja": "助けて！",
  "cat": "Frases"
 },
 {
  "es": "Primero",
  "en": "First",
  "ja": "まず",
  "cat": "Frases",
  "nivel": "fácil"
 },
 {
  "es": "Luego",
  "en": "Then",
  "ja": "それから",
  "cat": "Frases",
  "nivel": "fácil"
 },
 {
  "es": "Finalmente",
  "en": "Finally",
  "ja": "最後に",
  "cat": "Frases",
  "nivel": "fácil"
 },
 {
  "es": "Por otro lado",
  "en": "On the other hand",
  "ja": "一方で",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "En resumen",
  "en": "In summary",
  "ja": "要約すると",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Por ejemplo",
  "en": "For example",
  "ja": "例えば",
  "cat": "Frases",
  "nivel": "fácil"
 },
 {
  "es": "Es decir",
  "en": "That is to say",
  "ja": "つまり",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Al contrario",
  "en": "On the contrary",
  "ja": "逆に",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Mientras tanto",
  "en": "Meanwhile",
  "ja": "その間に",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "En conclusión",
  "en": "In conclusion",
  "ja": "結論として",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Agradecido",
  "en": "Grateful",
  "ja": "感謝している",
  "cat": "Emociones"
 },
 {
  "es": "Aliviado",
  "en": "Relieved",
  "ja": "ほっとしている",
  "cat": "Emociones"
 },
 {
  "es": "Confundido",
  "en": "Confused",
  "ja": "混乱している",
  "cat": "Emociones"
 },
 {
  "es": "Decepcionado",
  "en": "Disappointed",
  "ja": "がっかりしている",
  "cat": "Emociones"
 },
 {
  "es": "Esperanzado",
  "en": "Hopeful",
  "ja": "希望を持っている",
  "cat": "Emociones"
 },
 {
  "es": "Satisfecho",
  "en": "Satisfied",
  "ja": "満足している",
  "cat": "Emociones"
 },
 {
  "es": "Inseguro",
  "en": "Insecure/unsure",
  "ja": "自信がない",
  "cat": "Emociones"
 },
 {
  "es": "Seguro de sí mismo",
  "en": "Self-confident",
  "ja": "自信がある",
  "cat": "Emociones"
 },
 {
  "es": "Entusiasmado",
  "en": "Enthusiastic",
  "ja": "意欲的な",
  "cat": "Emociones"
 },
 {
  "es": "Indiferente",
  "en": "Indifferent",
  "ja": "無関心な",
  "cat": "Emociones"
 },
 {
  "es": "Peinarse",
  "en": "To comb one's hair",
  "ja": "髪をとかす",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Maquillarse",
  "en": "To put on makeup",
  "ja": "化粧をする",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Afeitarse",
  "en": "To shave",
  "ja": "ひげを剃る",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Cepillarse los dientes",
  "en": "To brush one's teeth",
  "ja": "歯を磨く",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Vestirse",
  "en": "To get dressed",
  "ja": "服を着る",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Quitarse",
  "en": "To take off (clothes)",
  "ja": "脱ぐ",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Ponerse",
  "en": "To put on (clothes)",
  "ja": "着る/身につける",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Sentarse",
  "en": "To sit down",
  "ja": "座る",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Pararse",
  "en": "To stand up",
  "ja": "立つ",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Quedarse",
  "en": "To stay",
  "ja": "とどまる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Añadir",
  "en": "To add",
  "ja": "加える",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Quitar",
  "en": "To remove",
  "ja": "取り除く",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Mezclar",
  "en": "To mix",
  "ja": "混ぜる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Cortar",
  "en": "To cut",
  "ja": "切る",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Cocinar",
  "en": "To cook",
  "ja": "料理する",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Hervir",
  "en": "To boil",
  "ja": "煮る/沸かす",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Freír",
  "en": "To fry",
  "ja": "揚げる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Hornear",
  "en": "To bake",
  "ja": "オーブンで焼く",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Calentar",
  "en": "To heat",
  "ja": "温める",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Enfriar",
  "en": "To cool",
  "ja": "冷やす",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Limpiar",
  "en": "To clean",
  "ja": "掃除する",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Ordenar",
  "en": "To tidy up / order",
  "ja": "片付ける/注文する",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Reparar",
  "en": "To repair",
  "ja": "修理する",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Construir",
  "en": "To build",
  "ja": "建てる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Destruir",
  "en": "To destroy",
  "ja": "破壊する",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Pintar",
  "en": "To paint",
  "ja": "塗る/絵を描く",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Dibujar",
  "en": "To draw",
  "ja": "絵を描く",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Cantar",
  "en": "To sing",
  "ja": "歌う",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Bailar",
  "en": "To dance",
  "ja": "踊る",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Saltar",
  "en": "To jump",
  "ja": "跳ぶ",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Caminar",
  "en": "To walk",
  "ja": "歩く",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Subir",
  "en": "To go up",
  "ja": "上がる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Bajar",
  "en": "To go down",
  "ja": "下がる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Entrar",
  "en": "To enter",
  "ja": "入る",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Salir",
  "en": "To go out",
  "ja": "出る",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Llegar",
  "en": "To arrive",
  "ja": "到着する",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Regresar",
  "en": "To return",
  "ja": "戻る",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Volver",
  "en": "To come back",
  "ja": "帰ってくる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Redondo",
  "en": "Round",
  "ja": "丸い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Ancho",
  "en": "Wide",
  "ja": "幅広い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Estrecho",
  "en": "Narrow",
  "ja": "狭い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Profundo",
  "en": "Deep",
  "ja": "深い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Plano",
  "en": "Flat",
  "ja": "平らな",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Suave",
  "en": "Soft/smooth",
  "ja": "柔らかい",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Áspero",
  "en": "Rough",
  "ja": "ざらざらした",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Brillante",
  "en": "Bright/shiny",
  "ja": "輝いている",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Oscuro",
  "en": "Dark",
  "ja": "暗い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Claro",
  "en": "Clear/light",
  "ja": "明るい/明確な",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Transparente",
  "en": "Transparent",
  "ja": "透明な",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Ligero",
  "en": "Light (weight)",
  "ja": "軽い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Pesado",
  "en": "Heavy",
  "ja": "重い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Flexible",
  "en": "Flexible",
  "ja": "柔軟な",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Rígido",
  "en": "Rigid",
  "ja": "硬直した",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Seco",
  "en": "Dry",
  "ja": "乾いた",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Caliente",
  "en": "Hot",
  "ja": "熱い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Tibio",
  "en": "Lukewarm",
  "ja": "ぬるい",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Maduro",
  "en": "Ripe/mature",
  "ja": "熟した",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Fresco",
  "en": "Fresh",
  "ja": "新鮮な",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "El delfín",
  "en": "Dolphin",
  "ja": "イルカ",
  "cat": "Animales"
 },
 {
  "es": "La ballena",
  "en": "Whale",
  "ja": "クジラ",
  "cat": "Animales"
 },
 {
  "es": "El tiburón",
  "en": "Shark",
  "ja": "サメ",
  "cat": "Animales"
 },
 {
  "es": "El pulpo",
  "en": "Octopus",
  "ja": "タコ",
  "cat": "Animales"
 },
 {
  "es": "La estrella de mar",
  "en": "Starfish",
  "ja": "ヒトデ",
  "cat": "Animales"
 },
 {
  "es": "El cangrejo",
  "en": "Crab",
  "ja": "カニ",
  "cat": "Animales"
 },
 {
  "es": "La medusa",
  "en": "Jellyfish",
  "ja": "クラゲ",
  "cat": "Animales"
 },
 {
  "es": "La tortuga",
  "en": "Turtle",
  "ja": "カメ",
  "cat": "Animales"
 },
 {
  "es": "La mariposa",
  "en": "Butterfly",
  "ja": "蝶",
  "cat": "Animales"
 },
 {
  "es": "La abeja",
  "en": "Bee",
  "ja": "ハチ",
  "cat": "Animales"
 },
 {
  "es": "La hormiga",
  "en": "Ant",
  "ja": "アリ",
  "cat": "Animales"
 },
 {
  "es": "La araña",
  "en": "Spider",
  "ja": "クモ",
  "cat": "Animales"
 },
 {
  "es": "El mosquito",
  "en": "Mosquito",
  "ja": "蚊",
  "cat": "Animales"
 },
 {
  "es": "La mosca",
  "en": "Fly",
  "ja": "ハエ",
  "cat": "Animales"
 },
 {
  "es": "El caracol",
  "en": "Snail",
  "ja": "かたつむり",
  "cat": "Animales"
 },
 {
  "es": "El águila",
  "en": "Eagle",
  "ja": "ワシ",
  "cat": "Animales"
 },
 {
  "es": "El búho",
  "en": "Owl",
  "ja": "フクロウ",
  "cat": "Animales"
 },
 {
  "es": "El loro",
  "en": "Parrot",
  "ja": "オウム",
  "cat": "Animales"
 },
 {
  "es": "El pingüino",
  "en": "Penguin",
  "ja": "ペンギン",
  "cat": "Animales"
 },
 {
  "es": "El pavo",
  "en": "Turkey",
  "ja": "七面鳥",
  "cat": "Animales"
 },
 {
  "es": "El gallo",
  "en": "Rooster",
  "ja": "おんどり",
  "cat": "Animales"
 },
 {
  "es": "La gallina",
  "en": "Hen",
  "ja": "めんどり",
  "cat": "Animales"
 },
 {
  "es": "El pato",
  "en": "Duck",
  "ja": "アヒル",
  "cat": "Animales"
 },
 {
  "es": "El cisne",
  "en": "Swan",
  "ja": "白鳥",
  "cat": "Animales"
 },
 {
  "es": "La paloma",
  "en": "Pigeon",
  "ja": "ハト",
  "cat": "Animales"
 },
 {
  "es": "El zorro",
  "en": "Fox",
  "ja": "キツネ",
  "cat": "Animales"
 },
 {
  "es": "El lobo",
  "en": "Wolf",
  "ja": "オオカミ",
  "cat": "Animales"
 },
 {
  "es": "El ciervo",
  "en": "Deer",
  "ja": "シカ",
  "cat": "Animales"
 },
 {
  "es": "El canguro",
  "en": "Kangaroo",
  "ja": "カンガルー",
  "cat": "Animales"
 },
 {
  "es": "La jirafa",
  "en": "Giraffe",
  "ja": "キリン",
  "cat": "Animales"
 },
 {
  "es": "El rinoceronte",
  "en": "Rhinoceros",
  "ja": "サイ",
  "cat": "Animales"
 },
 {
  "es": "El hipopótamo",
  "en": "Hippopotamus",
  "ja": "カバ",
  "cat": "Animales"
 },
 {
  "es": "El cocodrilo",
  "en": "Crocodile",
  "ja": "ワニ",
  "cat": "Animales"
 },
 {
  "es": "El camello",
  "en": "Camel",
  "ja": "ラクダ",
  "cat": "Animales"
 },
 {
  "es": "La cebra",
  "en": "Zebra",
  "ja": "シマウマ",
  "cat": "Animales"
 },
 {
  "es": "El panda",
  "en": "Panda",
  "ja": "パンダ",
  "cat": "Animales"
 },
 {
  "es": "El koala",
  "en": "Koala",
  "ja": "コアラ",
  "cat": "Animales"
 },
 {
  "es": "El murciélago",
  "en": "Bat",
  "ja": "コウモリ",
  "cat": "Animales"
 },
 {
  "es": "La ardilla",
  "en": "Squirrel",
  "ja": "リス",
  "cat": "Animales"
 },
 {
  "es": "El algodón",
  "en": "Cotton",
  "ja": "綿",
  "cat": "Ropa"
 },
 {
  "es": "La lana",
  "en": "Wool",
  "ja": "ウール",
  "cat": "Ropa"
 },
 {
  "es": "La seda",
  "en": "Silk",
  "ja": "絹",
  "cat": "Ropa"
 },
 {
  "es": "El cuero",
  "en": "Leather",
  "ja": "革",
  "cat": "Ropa"
 },
 {
  "es": "La tela",
  "en": "Fabric",
  "ja": "生地",
  "cat": "Ropa"
 },
 {
  "es": "El traje formal",
  "en": "Formal suit",
  "ja": "フォーマルスーツ",
  "cat": "Ropa"
 },
 {
  "es": "El uniforme",
  "en": "Uniform",
  "ja": "制服",
  "cat": "Ropa"
 },
 {
  "es": "La bata",
  "en": "Robe",
  "ja": "ガウン",
  "cat": "Ropa"
 },
 {
  "es": "El chaleco",
  "en": "Vest",
  "ja": "ベスト",
  "cat": "Ropa"
 },
 {
  "es": "La inteligencia artificial",
  "en": "Artificial intelligence",
  "ja": "人工知能",
  "cat": "Tecnología"
 },
 {
  "es": "El robot",
  "en": "Robot",
  "ja": "ロボット",
  "cat": "Tecnología"
 },
 {
  "es": "El dron",
  "en": "Drone",
  "ja": "ドローン",
  "cat": "Tecnología"
 },
 {
  "es": "La realidad virtual",
  "en": "Virtual reality",
  "ja": "バーチャルリアリティ",
  "cat": "Tecnología"
 },
 {
  "es": "El satélite",
  "en": "Satellite",
  "ja": "人工衛星",
  "cat": "Tecnología"
 },
 {
  "es": "El servidor",
  "en": "Server",
  "ja": "サーバー",
  "cat": "Tecnología"
 },
 {
  "es": "La base de datos",
  "en": "Database",
  "ja": "データベース",
  "cat": "Tecnología"
 },
 {
  "es": "El código",
  "en": "Code",
  "ja": "コード",
  "cat": "Tecnología"
 },
 {
  "es": "El programador",
  "en": "Programmer",
  "ja": "プログラマー",
  "cat": "Tecnología"
 },
 {
  "es": "La impresora",
  "en": "Printer",
  "ja": "プリンター",
  "cat": "Tecnología"
 },
 {
  "es": "El teclado",
  "en": "Keyboard",
  "ja": "キーボード",
  "cat": "Tecnología"
 },
 {
  "es": "Los auriculares",
  "en": "Headphones",
  "ja": "ヘッドホン",
  "cat": "Tecnología"
 },
 {
  "es": "El gobierno",
  "en": "Government",
  "ja": "政府",
  "cat": "Sociedad"
 },
 {
  "es": "El presidente",
  "en": "President",
  "ja": "大統領",
  "cat": "Sociedad"
 },
 {
  "es": "El ciudadano",
  "en": "Citizen",
  "ja": "市民",
  "cat": "Sociedad"
 },
 {
  "es": "La ley",
  "en": "Law",
  "ja": "法律",
  "cat": "Sociedad"
 },
 {
  "es": "El derecho",
  "en": "Right (legal)",
  "ja": "権利",
  "cat": "Sociedad"
 },
 {
  "es": "La elección",
  "en": "Election",
  "ja": "選挙",
  "cat": "Sociedad"
 },
 {
  "es": "El voto",
  "en": "Vote",
  "ja": "投票",
  "cat": "Sociedad"
 },
 {
  "es": "El congreso",
  "en": "Congress",
  "ja": "議会",
  "cat": "Sociedad"
 },
 {
  "es": "La constitución",
  "en": "Constitution",
  "ja": "憲法",
  "cat": "Sociedad"
 },
 {
  "es": "La comunidad",
  "en": "Community",
  "ja": "地域社会",
  "cat": "Sociedad"
 },
 {
  "es": "La Navidad",
  "en": "Christmas",
  "ja": "クリスマス",
  "cat": "Festividades"
 },
 {
  "es": "La Semana Santa",
  "en": "Holy Week",
  "ja": "聖週間",
  "cat": "Festividades"
 },
 {
  "es": "El Año Nuevo",
  "en": "New Year",
  "ja": "新年",
  "cat": "Festividades"
 },
 {
  "es": "El cumpleaños",
  "en": "Birthday",
  "ja": "誕生日",
  "cat": "Festividades"
 },
 {
  "es": "La boda",
  "en": "Wedding",
  "ja": "結婚式",
  "cat": "Festividades"
 },
 {
  "es": "El carnaval",
  "en": "Carnival",
  "ja": "カーニバル",
  "cat": "Festividades"
 },
 {
  "es": "El circo",
  "en": "Circus",
  "ja": "サーカス",
  "cat": "Festividades"
 },
 {
  "es": "La piel",
  "en": "Skin",
  "ja": "肌",
  "cat": "Cuerpo"
 },
 {
  "es": "La uña",
  "en": "Nail (finger)",
  "ja": "爪",
  "cat": "Cuerpo"
 },
 {
  "es": "El músculo",
  "en": "Muscle",
  "ja": "筋肉",
  "cat": "Cuerpo"
 },
 {
  "es": "El hueso",
  "en": "Bone",
  "ja": "骨",
  "cat": "Cuerpo"
 },
 {
  "es": "La sangre",
  "en": "Blood",
  "ja": "血",
  "cat": "Cuerpo"
 },
 {
  "es": "El pulmón",
  "en": "Lung",
  "ja": "肺",
  "cat": "Cuerpo"
 },
 {
  "es": "El hígado",
  "en": "Liver",
  "ja": "肝臓",
  "cat": "Cuerpo"
 },
 {
  "es": "El cerebro",
  "en": "Brain",
  "ja": "脳",
  "cat": "Cuerpo"
 },
 {
  "es": "La cintura",
  "en": "Waist",
  "ja": "腰",
  "cat": "Cuerpo"
 },
 {
  "es": "El tobillo",
  "en": "Ankle",
  "ja": "足首",
  "cat": "Cuerpo"
 },
 {
  "es": "El consulado",
  "en": "Consulate",
  "ja": "領事館",
  "cat": "Lugares"
 },
 {
  "es": "La oficina de correos",
  "en": "Post office",
  "ja": "郵便局",
  "cat": "Lugares"
 },
 {
  "es": "La estación de bomberos",
  "en": "Fire station",
  "ja": "消防署",
  "cat": "Lugares"
 },
 {
  "es": "El zoológico",
  "en": "Zoo",
  "ja": "動物園",
  "cat": "Lugares"
 },
 {
  "es": "El acuario",
  "en": "Aquarium",
  "ja": "水族館",
  "cat": "Lugares"
 },
 {
  "es": "El planetario",
  "en": "Planetarium",
  "ja": "プラネタリウム",
  "cat": "Lugares"
 },
 {
  "es": "El observatorio",
  "en": "Observatory",
  "ja": "天文台",
  "cat": "Lugares"
 },
 {
  "es": "La olla",
  "en": "Pot",
  "ja": "鍋",
  "cat": "Cocina"
 },
 {
  "es": "La sartén",
  "en": "Frying pan",
  "ja": "フライパン",
  "cat": "Cocina"
 },
 {
  "es": "El cuchillo",
  "en": "Knife",
  "ja": "包丁",
  "cat": "Cocina"
 },
 {
  "es": "La cuchara",
  "en": "Spoon",
  "ja": "スプーン",
  "cat": "Cocina"
 },
 {
  "es": "El tenedor",
  "en": "Fork",
  "ja": "フォーク",
  "cat": "Cocina"
 },
 {
  "es": "El plato",
  "en": "Plate",
  "ja": "皿",
  "cat": "Cocina"
 },
 {
  "es": "El vaso",
  "en": "Glass (cup)",
  "ja": "コップ",
  "cat": "Cocina"
 },
 {
  "es": "La taza",
  "en": "Mug/cup",
  "ja": "マグカップ",
  "cat": "Cocina"
 },
 {
  "es": "La tetera",
  "en": "Teapot/kettle",
  "ja": "ティーポット",
  "cat": "Cocina"
 },
 {
  "es": "La licuadora",
  "en": "Blender",
  "ja": "ミキサー",
  "cat": "Cocina"
 },
 {
  "es": "El abrelatas",
  "en": "Can opener",
  "ja": "缶切り",
  "cat": "Cocina"
 },
 {
  "es": "El colador",
  "en": "Strainer",
  "ja": "ざる",
  "cat": "Cocina"
 },
 {
  "es": "La tabla de cortar",
  "en": "Cutting board",
  "ja": "まな板",
  "cat": "Cocina"
 },
 {
  "es": "El delantal",
  "en": "Apron",
  "ja": "エプロン",
  "cat": "Cocina"
 },
 {
  "es": "La parrilla",
  "en": "Grill",
  "ja": "グリル",
  "cat": "Cocina"
 },
 {
  "es": "La tienda",
  "en": "Store",
  "ja": "店",
  "cat": "Compras"
 },
 {
  "es": "El centro comercial",
  "en": "Mall",
  "ja": "ショッピングモール",
  "cat": "Compras"
 },
 {
  "es": "La caja",
  "en": "Checkout/cashier",
  "ja": "レジ",
  "cat": "Compras"
 },
 {
  "es": "El probador",
  "en": "Fitting room",
  "ja": "試着室",
  "cat": "Compras"
 },
 {
  "es": "La oferta",
  "en": "Sale/offer",
  "ja": "セール",
  "cat": "Compras"
 },
 {
  "es": "El descuento",
  "en": "Discount",
  "ja": "割引",
  "cat": "Compras"
 },
 {
  "es": "La talla",
  "en": "Size (clothes)",
  "ja": "サイズ",
  "cat": "Compras"
 },
 {
  "es": "La etiqueta",
  "en": "Label/tag",
  "ja": "タグ",
  "cat": "Compras"
 },
 {
  "es": "El carrito",
  "en": "Shopping cart",
  "ja": "カート",
  "cat": "Compras"
 },
 {
  "es": "La bolsa",
  "en": "Bag",
  "ja": "袋",
  "cat": "Compras"
 },
 {
  "es": "El siglo",
  "en": "Century",
  "ja": "世紀",
  "cat": "Frecuencia"
 },
 {
  "es": "La década",
  "en": "Decade",
  "ja": "10年間",
  "cat": "Frecuencia"
 },
 {
  "es": "La temporada",
  "en": "Season (period)",
  "ja": "シーズン",
  "cat": "Frecuencia"
 },
 {
  "es": "La medianoche",
  "en": "Midnight",
  "ja": "真夜中",
  "cat": "Frecuencia"
 },
 {
  "es": "El mediodía",
  "en": "Noon",
  "ja": "正午",
  "cat": "Frecuencia"
 },
 {
  "es": "La fecha",
  "en": "Date",
  "ja": "日付",
  "cat": "Frecuencia"
 },
 {
  "es": "El calendario",
  "en": "Calendar",
  "ja": "カレンダー",
  "cat": "Frecuencia"
 },
 {
  "es": "El cronómetro",
  "en": "Stopwatch",
  "ja": "ストップウォッチ",
  "cat": "Frecuencia"
 },
 {
  "es": "El plazo",
  "en": "Deadline",
  "ja": "期限",
  "cat": "Frecuencia"
 },
 {
  "es": "La sombra",
  "en": "Shadow",
  "ja": "影",
  "cat": "General"
 },
 {
  "es": "La luz",
  "en": "Light",
  "ja": "光",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "El ruido",
  "en": "Noise",
  "ja": "騒音",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "El silencio",
  "en": "Silence",
  "ja": "静けさ",
  "cat": "General"
 },
 {
  "es": "La voz",
  "en": "Voice",
  "ja": "声",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "El sonido",
  "en": "Sound",
  "ja": "音",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "La imagen",
  "en": "Image",
  "ja": "画像",
  "cat": "General"
 },
 {
  "es": "El sabor",
  "en": "Flavor",
  "ja": "味",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "El olor",
  "en": "Smell",
  "ja": "匂い",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "La textura",
  "en": "Texture",
  "ja": "質感",
  "cat": "General"
 },
 {
  "es": "La superficie",
  "en": "Surface",
  "ja": "表面",
  "cat": "General"
 },
 {
  "es": "El borde",
  "en": "Edge",
  "ja": "へり・端",
  "cat": "General"
 },
 {
  "es": "El centro",
  "en": "Center",
  "ja": "中心",
  "cat": "Lugares"
 },
 {
  "es": "El principio",
  "en": "Beginning",
  "ja": "始まり",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "El final",
  "en": "End",
  "ja": "終わり",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "El resto",
  "en": "The rest",
  "ja": "残り",
  "cat": "General"
 },
 {
  "es": "El conjunto",
  "en": "Set/group",
  "ja": "集合",
  "cat": "General"
 },
 {
  "es": "El grupo",
  "en": "Group",
  "ja": "グループ",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "La lista",
  "en": "List",
  "ja": "リスト",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "El ejemplo",
  "en": "Example",
  "ja": "例",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "La razón",
  "en": "Reason",
  "ja": "理由",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "El motivo",
  "en": "Motive",
  "ja": "動機",
  "cat": "General"
 },
 {
  "es": "La solución",
  "en": "Solution",
  "ja": "解決策",
  "cat": "General"
 },
 {
  "es": "El problema",
  "en": "Problem",
  "ja": "問題",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "La pregunta",
  "en": "Question",
  "ja": "質問",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "La respuesta",
  "en": "Answer",
  "ja": "答え",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "La duda",
  "en": "Doubt",
  "ja": "疑問",
  "cat": "General"
 },
 {
  "es": "La opinión",
  "en": "Opinion",
  "ja": "意見",
  "cat": "General"
 },
 {
  "es": "La ventaja",
  "en": "Advantage",
  "ja": "利点",
  "cat": "General"
 },
 {
  "es": "La desventaja",
  "en": "Disadvantage",
  "ja": "欠点",
  "cat": "General"
 },
 {
  "es": "El martillo",
  "en": "Hammer",
  "ja": "ハンマー",
  "cat": "Herramientas"
 },
 {
  "es": "El destornillador",
  "en": "Screwdriver",
  "ja": "ドライバー",
  "cat": "Herramientas"
 },
 {
  "es": "La llave inglesa",
  "en": "Wrench",
  "ja": "レンチ",
  "cat": "Herramientas"
 },
 {
  "es": "El taladro",
  "en": "Drill",
  "ja": "ドリル",
  "cat": "Herramientas"
 },
 {
  "es": "La sierra",
  "en": "Saw",
  "ja": "のこぎり",
  "cat": "Herramientas"
 },
 {
  "es": "El clavo",
  "en": "Nail (hardware)",
  "ja": "釘",
  "cat": "Herramientas"
 },
 {
  "es": "El tornillo",
  "en": "Screw",
  "ja": "ねじ",
  "cat": "Herramientas"
 },
 {
  "es": "La cinta métrica",
  "en": "Tape measure",
  "ja": "巻き尺",
  "cat": "Herramientas"
 },
 {
  "es": "El pegamento",
  "en": "Glue",
  "ja": "接着剤",
  "cat": "Herramientas"
 },
 {
  "es": "La cuerda",
  "en": "Rope",
  "ja": "ロープ",
  "cat": "Herramientas"
 },
 {
  "es": "El candado",
  "en": "Padlock",
  "ja": "南京錠",
  "cat": "Herramientas"
 },
 {
  "es": "La llave",
  "en": "Key",
  "ja": "鍵",
  "cat": "Herramientas"
 },
 {
  "es": "El gancho",
  "en": "Hook",
  "ja": "フック",
  "cat": "Herramientas"
 },
 {
  "es": "La manguera",
  "en": "Hose",
  "ja": "ホース",
  "cat": "Herramientas"
 },
 {
  "es": "El bolígrafo",
  "en": "Pen",
  "ja": "ボールペン",
  "cat": "Educación"
 },
 {
  "es": "El marcador",
  "en": "Marker",
  "ja": "マーカー",
  "cat": "Educación"
 },
 {
  "es": "La grapadora",
  "en": "Stapler",
  "ja": "ホッチキス",
  "cat": "Educación"
 },
 {
  "es": "El clip",
  "en": "Paper clip",
  "ja": "クリップ",
  "cat": "Educación"
 },
 {
  "es": "La calculadora",
  "en": "Calculator",
  "ja": "電卓",
  "cat": "Educación"
 },
 {
  "es": "El sobre",
  "en": "Envelope",
  "ja": "封筒",
  "cat": "Educación"
 },
 {
  "es": "El sello",
  "en": "Stamp/seal",
  "ja": "切手・印",
  "cat": "Educación"
 },
 {
  "es": "La agenda",
  "en": "Planner/agenda",
  "ja": "手帳",
  "cat": "Educación"
 },
 {
  "es": "El archivador",
  "en": "Filing cabinet",
  "ja": "書類棚",
  "cat": "Educación"
 },
 {
  "es": "El taco",
  "en": "Taco",
  "ja": "タコス",
  "cat": "Comida"
 },
 {
  "es": "La quesadilla",
  "en": "Quesadilla",
  "ja": "ケサディーヤ",
  "cat": "Comida"
 },
 {
  "es": "El burrito",
  "en": "Burrito",
  "ja": "ブリトー",
  "cat": "Comida"
 },
 {
  "es": "El tamal",
  "en": "Tamale",
  "ja": "タマル",
  "cat": "Comida"
 },
 {
  "es": "El mole",
  "en": "Mole (sauce)",
  "ja": "モーレ（ソース）",
  "cat": "Comida"
 },
 {
  "es": "La tortilla",
  "en": "Tortilla",
  "ja": "トルティーヤ",
  "cat": "Comida"
 },
 {
  "es": "El pozole",
  "en": "Pozole",
  "ja": "ポソレ",
  "cat": "Comida"
 },
 {
  "es": "El guacamole",
  "en": "Guacamole",
  "ja": "ワカモレ",
  "cat": "Comida"
 },
 {
  "es": "La salsa",
  "en": "Sauce/salsa",
  "ja": "サルサ",
  "cat": "Comida"
 },
 {
  "es": "El chile",
  "en": "Chili pepper",
  "ja": "唐辛子",
  "cat": "Comida"
 },
 {
  "es": "La selva",
  "en": "Jungle",
  "ja": "ジャングル",
  "cat": "Naturaleza"
 },
 {
  "es": "El pantano",
  "en": "Swamp",
  "ja": "沼地",
  "cat": "Naturaleza"
 },
 {
  "es": "El arrecife",
  "en": "Reef",
  "ja": "サンゴ礁",
  "cat": "Naturaleza"
 },
 {
  "es": "La cueva",
  "en": "Cave",
  "ja": "洞窟",
  "cat": "Naturaleza"
 },
 {
  "es": "El acantilado",
  "en": "Cliff",
  "ja": "崖",
  "cat": "Naturaleza"
 },
 {
  "es": "La pradera",
  "en": "Prairie",
  "ja": "草原",
  "cat": "Naturaleza"
 },
 {
  "es": "El manantial",
  "en": "Spring (water source)",
  "ja": "泉",
  "cat": "Naturaleza"
 },
 {
  "es": "El oasis",
  "en": "Oasis",
  "ja": "オアシス",
  "cat": "Naturaleza"
 },
 {
  "es": "La cordillera",
  "en": "Mountain range",
  "ja": "山脈",
  "cat": "Naturaleza"
 },
 {
  "es": "La vela",
  "en": "Candle",
  "ja": "ろうそく",
  "cat": "Casa"
 },
 {
  "es": "La linterna",
  "en": "Flashlight",
  "ja": "懐中電灯",
  "cat": "Casa"
 },
 {
  "es": "El fósforo",
  "en": "Match (fire)",
  "ja": "マッチ",
  "cat": "Casa"
 },
 {
  "es": "Sí",
  "en": "Yes",
  "ja": "はい",
  "cat": "Frases"
 },
 {
  "es": "No",
  "en": "No",
  "ja": "いいえ",
  "cat": "Frases"
 },
 {
  "es": "Hacer",
  "en": "To do / To make",
  "ja": "する・作る",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "El día",
  "en": "Day",
  "ja": "日",
  "cat": "Frecuencia"
 },
 {
  "es": "La noche",
  "en": "Night",
  "ja": "夜",
  "cat": "Frecuencia"
 },
 {
  "es": "El café",
  "en": "Coffee / Café",
  "ja": "コーヒー・喫茶店",
  "cat": "Comida"
 },
 {
  "es": "El agua",
  "en": "Water",
  "ja": "水",
  "cat": "Comida"
 },
 {
  "es": "El amor",
  "en": "Love",
  "ja": "愛",
  "cat": "Frases"
 },
 {
  "es": "Bueno",
  "en": "Good",
  "ja": "良い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Malo",
  "en": "Bad",
  "ja": "悪い",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Vivir",
  "en": "To live",
  "ja": "住む・生きる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "El amigo",
  "en": "Friend",
  "ja": "友達",
  "cat": "Frases"
 },
 {
  "es": "El tiempo",
  "en": "Time / Weather",
  "ja": "時間・天気",
  "cat": "Frecuencia"
 },
 {
  "es": "La familia",
  "en": "Family",
  "ja": "家族",
  "cat": "Familia"
 },
 {
  "es": "Estar en la luna",
  "en": "To be daydreaming / spaced out",
  "ja": "ぼーっとしている（直訳：月にいる）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Poner los puntos sobre las íes",
  "en": "To make things crystal clear",
  "ja": "細部まではっきりさせる（直訳：iの上に点を打つ）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Írsele el santo al cielo",
  "en": "To completely forget something",
  "ja": "すっかり忘れる（直訳：聖人が天に行ってしまう）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Tirar la toalla",
  "en": "To throw in the towel",
  "ja": "あきらめる",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Estar hecho polvo",
  "en": "To be exhausted",
  "ja": "くたくたに疲れている（直訳：ほこりになっている）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "No dar pie con bola",
  "en": "To do everything wrong",
  "ja": "何をやってもうまくいかない",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Ser uña y carne",
  "en": "To be inseparable (close friends)",
  "ja": "切っても切れない仲（直訳：爪と肉）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Tomar el toro por los cuernos",
  "en": "To take the bull by the horns",
  "ja": "正面から立ち向かう",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Costar un huevo",
  "en": "To cost a fortune",
  "ja": "ものすごく高い（口語）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Estar pez en algo",
  "en": "To be clueless about something",
  "ja": "まったく知識がない（直訳：魚である）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Írsele la olla",
  "en": "To lose one's mind / go crazy",
  "ja": "頭がおかしくなる（口語）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Dar la lata",
  "en": "To be annoying / bother someone",
  "ja": "うるさく迷惑をかける",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Ponerse las botas",
  "en": "To make the most of something / feast",
  "ja": "思う存分楽しむ・たらふく食べる",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Estar en pañales",
  "en": "To be in its infancy",
  "ja": "まだ始まったばかりである（直訳：おむつをしている）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Salirse con la suya",
  "en": "To get one's own way",
  "ja": "自分の思い通りにする",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Ser el pan de cada día",
  "en": "To be an everyday occurrence",
  "ja": "日常茶飯事である",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Meter la cuchara",
  "en": "To butt into a conversation",
  "ja": "口を挟む（直訳：スプーンを入れる）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Dar en el blanco",
  "en": "To hit the target exactly",
  "ja": "的を射る",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "No tener ni pies ni cabeza",
  "en": "To make no sense at all",
  "ja": "まったく筋が通らない",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "Ser la gota que colma el vaso",
  "en": "To be the last straw",
  "ja": "我慢の限界を超えるきっかけ（直訳：コップを溢れさせる一滴）",
  "cat": "Modismos",
  "nivel": "avanzado"
 },
 {
  "es": "No obstante",
  "en": "Nevertheless",
  "ja": "それにもかかわらず",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Por consiguiente",
  "en": "Consequently",
  "ja": "したがって",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Cabe destacar que",
  "en": "It is worth noting that",
  "ja": "特筆すべきは",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "A grandes rasgos",
  "en": "Broadly speaking",
  "ja": "大まかに言うと",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "En términos generales",
  "en": "Generally speaking",
  "ja": "一般的に言えば",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Dicho de otro modo",
  "en": "In other words",
  "ja": "言い換えると",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "A fin de cuentas",
  "en": "At the end of the day / all things considered",
  "ja": "結局のところ",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Huelga decir que",
  "en": "It goes without saying that",
  "ja": "言うまでもなく",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Ni que decir tiene",
  "en": "Needless to say",
  "ja": "言うまでもなく",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "A raíz de",
  "en": "As a result of / stemming from",
  "ja": "〜がきっかけで",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "En vísperas de",
  "en": "On the eve of",
  "ja": "〜の直前に",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "De ahora en adelante",
  "en": "From now on",
  "ja": "これからは",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "A todas luces",
  "en": "Clearly / evidently",
  "ja": "明らかに",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Bajo ningún concepto",
  "en": "Under no circumstances",
  "ja": "いかなる場合も〜ない",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "Con creces",
  "en": "By far / more than enough",
  "ja": "十分すぎるほど",
  "cat": "Frases",
  "nivel": "avanzado"
 },
 {
  "es": "La incertidumbre",
  "en": "Uncertainty",
  "ja": "不確実性",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "La contradicción",
  "en": "Contradiction",
  "ja": "矛盾",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "La ambigüedad",
  "en": "Ambiguity",
  "ja": "曖昧さ",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "La coherencia",
  "en": "Coherence",
  "ja": "一貫性",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "El matiz",
  "en": "Nuance",
  "ja": "ニュアンス",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "La trascendencia",
  "en": "Significance / transcendence",
  "ja": "重要性・超越性",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "El trasfondo",
  "en": "Background / underlying context",
  "ja": "背景",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "La perspectiva",
  "en": "Perspective",
  "ja": "視点",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "El prejuicio",
  "en": "Prejudice",
  "ja": "偏見",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "La percepción",
  "en": "Perception",
  "ja": "知覚",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "El dilema",
  "en": "Dilemma",
  "ja": "ジレンマ",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "La controversia",
  "en": "Controversy",
  "ja": "論争",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "El consenso",
  "en": "Consensus",
  "ja": "合意",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "La discrepancia",
  "en": "Discrepancy",
  "ja": "食い違い",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "El escepticismo",
  "en": "Skepticism",
  "ja": "懐疑主義",
  "cat": "General",
  "nivel": "avanzado"
 },
 {
  "es": "Profundizar",
  "en": "To delve deeper into",
  "ja": "深く掘り下げる",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Plantear",
  "en": "To raise (an issue) / propose",
  "ja": "提起する",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Abordar",
  "en": "To address / tackle (a topic)",
  "ja": "取り組む",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Constatar",
  "en": "To confirm / verify",
  "ja": "確認する",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Reflexionar",
  "en": "To reflect / ponder",
  "ja": "熟考する",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Suscitar",
  "en": "To provoke / give rise to",
  "ja": "引き起こす",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Prevalecer",
  "en": "To prevail",
  "ja": "優勢である",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Discrepar",
  "en": "To disagree",
  "ja": "意見が食い違う",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Matizar",
  "en": "To qualify / add nuance",
  "ja": "ニュアンスを加える",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "Desencadenar",
  "en": "To trigger / set off",
  "ja": "引き起こす（連鎖的に）",
  "cat": "Verbos",
  "nivel": "avanzado"
 },
 {
  "es": "La rutina",
  "en": "Routine",
  "ja": "日課",
  "cat": "Frecuencia"
 },
 {
  "es": "El despertador",
  "en": "Alarm clock",
  "ja": "目覚まし時計",
  "cat": "Casa"
 },
 {
  "es": "La ducha",
  "en": "Shower",
  "ja": "シャワー",
  "cat": "Casa"
 },
 {
  "es": "El cepillo de dientes",
  "en": "Toothbrush",
  "ja": "歯ブラシ",
  "cat": "Casa"
 },
 {
  "es": "La siesta",
  "en": "Nap",
  "ja": "昼寝",
  "cat": "Frecuencia"
 },
 {
  "es": "El descanso",
  "en": "Rest / break",
  "ja": "休憩",
  "cat": "Frecuencia"
 },
 {
  "es": "La merienda",
  "en": "Afternoon snack",
  "ja": "おやつ",
  "cat": "Comida"
 },
 {
  "es": "El horario de trabajo",
  "en": "Work schedule",
  "ja": "勤務時間",
  "cat": "Trabajo"
 },
 {
  "es": "La lista de tareas",
  "en": "To-do list",
  "ja": "タスクリスト",
  "cat": "Trabajo"
 },
 {
  "es": "El fin de semana",
  "en": "Weekend",
  "ja": "週末",
  "cat": "Frecuencia"
 },
 {
  "es": "El día libre",
  "en": "Day off",
  "ja": "休みの日",
  "cat": "Frecuencia"
 },
 {
  "es": "La costumbre",
  "en": "Habit / custom",
  "ja": "習慣",
  "cat": "Frecuencia"
 },
 {
  "es": "La noticia",
  "en": "News (item)",
  "ja": "ニュース",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "El periódico",
  "en": "Newspaper",
  "ja": "新聞",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "La revista",
  "en": "Magazine",
  "ja": "雑誌",
  "cat": "General"
 },
 {
  "es": "El canal",
  "en": "Channel",
  "ja": "チャンネル",
  "cat": "Tecnología"
 },
 {
  "es": "El anuncio",
  "en": "Advertisement / announcement",
  "ja": "広告・お知らせ",
  "cat": "General"
 },
 {
  "es": "La emisora",
  "en": "Radio station",
  "ja": "放送局",
  "cat": "Tecnología"
 },
 {
  "es": "El titular",
  "en": "Headline",
  "ja": "見出し",
  "cat": "General"
 },
 {
  "es": "La transmisión",
  "en": "Broadcast",
  "ja": "放送",
  "cat": "Tecnología"
 },
 {
  "es": "El podcast",
  "en": "Podcast",
  "ja": "ポッドキャスト",
  "cat": "Tecnología"
 },
 {
  "es": "El vecino",
  "en": "Neighbor",
  "ja": "隣人",
  "cat": "Sociedad"
 },
 {
  "es": "La vecindad",
  "en": "Neighborhood",
  "ja": "近隣",
  "cat": "Sociedad"
 },
 {
  "es": "La costumbre social",
  "en": "Social custom",
  "ja": "社会習慣",
  "cat": "Sociedad"
 },
 {
  "es": "El voluntariado",
  "en": "Volunteering",
  "ja": "ボランティア活動",
  "cat": "Sociedad"
 },
 {
  "es": "La generación",
  "en": "Generation",
  "ja": "世代",
  "cat": "Sociedad"
 },
 {
  "es": "La igualdad",
  "en": "Equality",
  "ja": "平等",
  "cat": "Sociedad"
 },
 {
  "es": "La diversidad",
  "en": "Diversity",
  "ja": "多様性",
  "cat": "Sociedad"
 },
 {
  "es": "La emergencia",
  "en": "Emergency",
  "ja": "緊急事態",
  "cat": "Salud"
 },
 {
  "es": "La ambulancia",
  "en": "Ambulance",
  "ja": "救急車",
  "cat": "Salud"
 },
 {
  "es": "El accidente",
  "en": "Accident",
  "ja": "事故",
  "cat": "Salud"
 },
 {
  "es": "El incendio",
  "en": "Fire (blaze)",
  "ja": "火事",
  "cat": "Salud"
 },
 {
  "es": "La evacuación",
  "en": "Evacuation",
  "ja": "避難",
  "cat": "Salud"
 },
 {
  "es": "El extintor",
  "en": "Fire extinguisher",
  "ja": "消火器",
  "cat": "Herramientas"
 },
 {
  "es": "Los primeros auxilios",
  "en": "First aid",
  "ja": "応急処置",
  "cat": "Salud"
 },
 {
  "es": "La sala de emergencias",
  "en": "Emergency room",
  "ja": "救急外来",
  "cat": "Salud"
 },
 {
  "es": "El peligro",
  "en": "Danger",
  "ja": "危険",
  "cat": "Salud"
 },
 {
  "es": "La seguridad",
  "en": "Safety / security",
  "ja": "安全",
  "cat": "Salud"
 },
 {
  "es": "El gorro",
  "en": "Beanie / winter hat",
  "ja": "ニット帽",
  "cat": "Ropa"
 },
 {
  "es": "Las botas de nieve",
  "en": "Snow boots",
  "ja": "スノーブーツ",
  "cat": "Ropa"
 },
 {
  "es": "El impermeable",
  "en": "Raincoat",
  "ja": "レインコート",
  "cat": "Ropa"
 },
 {
  "es": "La sudadera",
  "en": "Hoodie / sweatshirt",
  "ja": "パーカー",
  "cat": "Ropa"
 },
 {
  "es": "El suéter",
  "en": "Sweater",
  "ja": "セーター",
  "cat": "Ropa"
 },
 {
  "es": "Las medias",
  "en": "Stockings / tights",
  "ja": "タイツ",
  "cat": "Ropa"
 },
 {
  "es": "La gorra",
  "en": "Cap",
  "ja": "キャップ",
  "cat": "Ropa"
 },
 {
  "es": "El chándal",
  "en": "Tracksuit",
  "ja": "ジャージ",
  "cat": "Ropa"
 },
 {
  "es": "La garganta",
  "en": "Throat",
  "ja": "喉",
  "cat": "Cuerpo"
 },
 {
  "es": "El codo",
  "en": "Elbow",
  "ja": "肘",
  "cat": "Cuerpo"
 },
 {
  "es": "La muñeca",
  "en": "Wrist",
  "ja": "手首",
  "cat": "Cuerpo"
 },
 {
  "es": "La ceja",
  "en": "Eyebrow",
  "ja": "眉",
  "cat": "Cuerpo"
 },
 {
  "es": "La pestaña",
  "en": "Eyelash",
  "ja": "まつげ",
  "cat": "Cuerpo"
 },
 {
  "es": "El tratamiento",
  "en": "Treatment",
  "ja": "治療",
  "cat": "Salud"
 },
 {
  "es": "La inyección",
  "en": "Injection",
  "ja": "注射",
  "cat": "Salud"
 },
 {
  "es": "El termómetro",
  "en": "Thermometer",
  "ja": "体温計",
  "cat": "Salud"
 },
 {
  "es": "La presión arterial",
  "en": "Blood pressure",
  "ja": "血圧",
  "cat": "Salud"
 },
 {
  "es": "La cicatriz",
  "en": "Scar",
  "ja": "傷跡",
  "cat": "Salud"
 },
 {
  "es": "El helicóptero",
  "en": "Helicopter",
  "ja": "ヘリコプター",
  "cat": "Transporte"
 },
 {
  "es": "El barco de vela",
  "en": "Sailboat",
  "ja": "ヨット",
  "cat": "Transporte"
 },
 {
  "es": "El transbordador",
  "en": "Ferry",
  "ja": "フェリー",
  "cat": "Transporte"
 },
 {
  "es": "La furgoneta",
  "en": "Van",
  "ja": "バン",
  "cat": "Transporte"
 },
 {
  "es": "El tranvía",
  "en": "Tram",
  "ja": "路面電車",
  "cat": "Transporte"
 },
 {
  "es": "El casco",
  "en": "Helmet",
  "ja": "ヘルメット",
  "cat": "Transporte"
 },
 {
  "es": "El cinturón de seguridad",
  "en": "Seatbelt",
  "ja": "シートベルト",
  "cat": "Transporte"
 },
 {
  "es": "La licencia de conducir",
  "en": "Driver's license",
  "ja": "運転免許証",
  "cat": "Transporte"
 },
 {
  "es": "El sushi",
  "en": "Sushi",
  "ja": "寿司",
  "cat": "Comida"
 },
 {
  "es": "Los fideos",
  "en": "Noodles",
  "ja": "麺",
  "cat": "Comida"
 },
 {
  "es": "La pasta",
  "en": "Pasta",
  "ja": "パスタ",
  "cat": "Comida"
 },
 {
  "es": "El curry",
  "en": "Curry",
  "ja": "カレー",
  "cat": "Comida"
 },
 {
  "es": "La miel",
  "en": "Honey",
  "ja": "蜂蜜",
  "cat": "Comida"
 },
 {
  "es": "La mermelada",
  "en": "Jam",
  "ja": "ジャム",
  "cat": "Comida"
 },
 {
  "es": "El yogur",
  "en": "Yogurt",
  "ja": "ヨーグルト",
  "cat": "Comida"
 },
 {
  "es": "La avena",
  "en": "Oatmeal",
  "ja": "オートミール",
  "cat": "Comida"
 },
 {
  "es": "El cereal",
  "en": "Cereal",
  "ja": "シリアル",
  "cat": "Comida"
 },
 {
  "es": "La miel de maple",
  "en": "Maple syrup",
  "ja": "メープルシロップ",
  "cat": "Comida"
 },
 {
  "es": "El caldo",
  "en": "Broth",
  "ja": "だし・スープの素",
  "cat": "Comida"
 },
 {
  "es": "La ensalada de frutas",
  "en": "Fruit salad",
  "ja": "フルーツサラダ",
  "cat": "Comida"
 },
 {
  "es": "El museo de arte",
  "en": "Art museum",
  "ja": "美術館",
  "cat": "Arte"
 },
 {
  "es": "La escultura moderna",
  "en": "Modern sculpture",
  "ja": "現代彫刻",
  "cat": "Arte"
 },
 {
  "es": "El festival",
  "en": "Festival",
  "ja": "フェスティバル",
  "cat": "Festividades"
 },
 {
  "es": "La danza",
  "en": "Dance (art form)",
  "ja": "舞踊",
  "cat": "Arte"
 },
 {
  "es": "El folclore",
  "en": "Folklore",
  "ja": "民間伝承",
  "cat": "Arte"
 },
 {
  "es": "La artesanía",
  "en": "Craftsmanship / handicraft",
  "ja": "手工芸",
  "cat": "Arte"
 },
 {
  "es": "El mural",
  "en": "Mural",
  "ja": "壁画",
  "cat": "Arte"
 },
 {
  "es": "La leyenda",
  "en": "Legend",
  "ja": "伝説",
  "cat": "Arte"
 },
 {
  "es": "El patrimonio",
  "en": "Heritage",
  "ja": "遺産",
  "cat": "Arte"
 },
 {
  "es": "La tradición",
  "en": "Tradition",
  "ja": "伝統",
  "cat": "Arte"
 },
 {
  "es": "La actualización de software",
  "en": "Software update",
  "ja": "ソフトウェア更新",
  "cat": "Tecnología"
 },
 {
  "es": "El virus informático",
  "en": "Computer virus",
  "ja": "コンピューターウイルス",
  "cat": "Tecnología"
 },
 {
  "es": "La copia de seguridad",
  "en": "Backup",
  "ja": "バックアップ",
  "cat": "Tecnología"
 },
 {
  "es": "El almacenamiento",
  "en": "Storage",
  "ja": "ストレージ",
  "cat": "Tecnología"
 },
 {
  "es": "La configuración",
  "en": "Settings",
  "ja": "設定",
  "cat": "Tecnología"
 },
 {
  "es": "El chip electrónico",
  "en": "Electronic chip",
  "ja": "電子チップ",
  "cat": "Tecnología"
 },
 {
  "es": "La conexión",
  "en": "Connection",
  "ja": "接続",
  "cat": "Tecnología"
 },
 {
  "es": "El código QR",
  "en": "QR code",
  "ja": "QRコード",
  "cat": "Tecnología"
 },
 {
  "es": "La autenticación",
  "en": "Authentication",
  "ja": "認証",
  "cat": "Tecnología"
 },
 {
  "es": "El asistente virtual",
  "en": "Virtual assistant",
  "ja": "バーチャルアシスタント",
  "cat": "Tecnología"
 },
 {
  "es": "El ecosistema",
  "en": "Ecosystem",
  "ja": "生態系",
  "cat": "Naturaleza"
 },
 {
  "es": "La contaminación",
  "en": "Pollution",
  "ja": "汚染",
  "cat": "Naturaleza"
 },
 {
  "es": "El reciclaje",
  "en": "Recycling",
  "ja": "リサイクル",
  "cat": "Naturaleza"
 },
 {
  "es": "La energía solar",
  "en": "Solar energy",
  "ja": "太陽エネルギー",
  "cat": "Naturaleza"
 },
 {
  "es": "El calentamiento global",
  "en": "Global warming",
  "ja": "地球温暖化",
  "cat": "Naturaleza"
 },
 {
  "es": "La especie",
  "en": "Species",
  "ja": "種",
  "cat": "Naturaleza"
 },
 {
  "es": "El hábitat",
  "en": "Habitat",
  "ja": "生息地",
  "cat": "Naturaleza"
 },
 {
  "es": "La extinción",
  "en": "Extinction",
  "ja": "絶滅",
  "cat": "Naturaleza"
 },
 {
  "es": "La conservación",
  "en": "Conservation",
  "ja": "保全",
  "cat": "Naturaleza"
 },
 {
  "es": "El paisaje",
  "en": "Landscape",
  "ja": "景色",
  "cat": "Naturaleza"
 },
 {
  "es": "Amable y paciente",
  "en": "Kind and patient",
  "ja": "優しくて忍耐強い",
  "cat": "Adjetivos"
 },
 {
  "es": "Cuidadoso",
  "en": "Careful",
  "ja": "注意深い",
  "cat": "Adjetivos"
 },
 {
  "es": "Descuidado",
  "en": "Careless",
  "ja": "不注意な",
  "cat": "Adjetivos"
 },
 {
  "es": "Puntual",
  "en": "Punctual",
  "ja": "時間に正確な",
  "cat": "Adjetivos"
 },
 {
  "es": "Impuntual",
  "en": "Not punctual",
  "ja": "時間にルーズな",
  "cat": "Adjetivos"
 },
 {
  "es": "Flexible（personalidad）",
  "en": "Flexible (personality)",
  "ja": "柔軟な（性格）",
  "cat": "Adjetivos"
 },
 {
  "es": "Estricto",
  "en": "Strict",
  "ja": "厳しい",
  "cat": "Adjetivos"
 },
 {
  "es": "Comprensivo",
  "en": "Understanding",
  "ja": "理解のある",
  "cat": "Adjetivos"
 },
 {
  "es": "Justo",
  "en": "Fair",
  "ja": "公正な",
  "cat": "Adjetivos"
 },
 {
  "es": "Injusto",
  "en": "Unfair",
  "ja": "不公正な",
  "cat": "Adjetivos"
 },
 {
  "es": "Modesto",
  "en": "Modest",
  "ja": "謙虚な",
  "cat": "Adjetivos"
 },
 {
  "es": "Arrogante",
  "en": "Arrogant",
  "ja": "傲慢な",
  "cat": "Adjetivos"
 },
 {
  "es": "Leal",
  "en": "Loyal",
  "ja": "忠実な",
  "cat": "Adjetivos"
 },
 {
  "es": "Confiable",
  "en": "Reliable",
  "ja": "信頼できる",
  "cat": "Adjetivos"
 },
 {
  "es": "Ingenuo",
  "en": "Naive",
  "ja": "世間知らずな",
  "cat": "Adjetivos"
 },
 {
  "es": "Sugerir",
  "en": "To suggest",
  "ja": "提案する",
  "cat": "Verbos"
 },
 {
  "es": "Proponer",
  "en": "To propose",
  "ja": "提案する",
  "cat": "Verbos"
 },
 {
  "es": "Aceptar",
  "en": "To accept",
  "ja": "受け入れる",
  "cat": "Verbos"
 },
 {
  "es": "Rechazar",
  "en": "To reject",
  "ja": "拒否する",
  "cat": "Verbos"
 },
 {
  "es": "Confirmar",
  "en": "To confirm",
  "ja": "確認する",
  "cat": "Verbos"
 },
 {
  "es": "Cancelar",
  "en": "To cancel",
  "ja": "キャンセルする",
  "cat": "Verbos"
 },
 {
  "es": "Reservar",
  "en": "To reserve / book",
  "ja": "予約する",
  "cat": "Verbos"
 },
 {
  "es": "Organizar",
  "en": "To organize",
  "ja": "整理する・企画する",
  "cat": "Verbos"
 },
 {
  "es": "Planear",
  "en": "To plan",
  "ja": "計画する",
  "cat": "Verbos"
 },
 {
  "es": "Lograr",
  "en": "To achieve",
  "ja": "達成する",
  "cat": "Verbos"
 },
 {
  "es": "Fracasar",
  "en": "To fail",
  "ja": "失敗する",
  "cat": "Verbos"
 },
 {
  "es": "Intentar",
  "en": "To try / attempt",
  "ja": "試みる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Evitar",
  "en": "To avoid",
  "ja": "避ける",
  "cat": "Verbos"
 },
 {
  "es": "Impedir",
  "en": "To prevent",
  "ja": "妨げる",
  "cat": "Verbos"
 },
 {
  "es": "Permitir el acceso",
  "en": "To allow access",
  "ja": "アクセスを許可する",
  "cat": "Verbos"
 },
 {
  "es": "Comparar",
  "en": "To compare",
  "ja": "比較する",
  "cat": "Verbos"
 },
 {
  "es": "Combinar",
  "en": "To combine",
  "ja": "組み合わせる",
  "cat": "Verbos"
 },
 {
  "es": "Separar",
  "en": "To separate",
  "ja": "分ける",
  "cat": "Verbos"
 },
 {
  "es": "Reunir",
  "en": "To gather / bring together",
  "ja": "集める",
  "cat": "Verbos"
 },
 {
  "es": "Compartir",
  "en": "To share",
  "ja": "共有する",
  "cat": "Verbos"
 },
 {
  "es": "¿Me puede repetir, por favor?",
  "en": "Could you repeat that, please?",
  "ja": "もう一度言ってもらえますか",
  "cat": "Frases"
 },
 {
  "es": "No pasa nada",
  "en": "It's nothing / no problem",
  "ja": "大丈夫、問題ないよ",
  "cat": "Frases"
 },
 {
  "es": "Vale la pena",
  "en": "It's worth it",
  "ja": "その価値がある",
  "cat": "Frases"
 },
 {
  "es": "Estoy de camino",
  "en": "I'm on my way",
  "ja": "今向かっています",
  "cat": "Frases"
 },
 {
  "es": "Tómalo con calma",
  "en": "Take it easy",
  "ja": "落ち着いて",
  "cat": "Frases"
 },
 {
  "es": "No hay problema",
  "en": "No problem",
  "ja": "問題ないです",
  "cat": "Frases"
 },
 {
  "es": "A ver qué pasa",
  "en": "Let's see what happens",
  "ja": "どうなるか見てみよう",
  "cat": "Frases"
 },
 {
  "es": "Contigo o sin ti",
  "en": "With or without you",
  "ja": "君がいてもいなくても",
  "cat": "Frases"
 },
 {
  "es": "Lo tengo bajo control",
  "en": "I've got it under control",
  "ja": "ちゃんとコントロールできている",
  "cat": "Frases"
 },
 {
  "es": "Estoy a punto de salir",
  "en": "I'm about to leave",
  "ja": "ちょうど出かけるところ",
  "cat": "Frases"
 },
 {
  "es": "Cuenta conmigo",
  "en": "Count me in",
  "ja": "頼ってね・私も参加するよ",
  "cat": "Frases"
 },
 {
  "es": "Ya era hora",
  "en": "It was about time",
  "ja": "やっとだね",
  "cat": "Frases"
 },
 {
  "es": "Me da igual",
  "en": "I don't mind either way",
  "ja": "どっちでもいい",
  "cat": "Frases"
 },
 {
  "es": "Vamos al grano",
  "en": "Let's get to the point",
  "ja": "本題に入ろう",
  "cat": "Frases"
 },
 {
  "es": "Eso tiene sentido",
  "en": "That makes sense",
  "ja": "それは筋が通っている",
  "cat": "Frases"
 },
 {
  "es": "La garantía",
  "en": "Warranty",
  "ja": "保証",
  "cat": "Compras"
 },
 {
  "es": "El reembolso",
  "en": "Refund",
  "ja": "返金",
  "cat": "Compras"
 },
 {
  "es": "El envío",
  "en": "Shipping",
  "ja": "配送",
  "cat": "Compras"
 },
 {
  "es": "La entrega",
  "en": "Delivery",
  "ja": "配達",
  "cat": "Compras"
 },
 {
  "es": "El pedido",
  "en": "Order",
  "ja": "注文",
  "cat": "Compras"
 },
 {
  "es": "La suscripción",
  "en": "Subscription",
  "ja": "サブスクリプション",
  "cat": "Finanzas"
 },
 {
  "es": "La deuda",
  "en": "Debt",
  "ja": "借金",
  "cat": "Finanzas"
 },
 {
  "es": "El interés（financiero）",
  "en": "Interest (financial)",
  "ja": "利子",
  "cat": "Finanzas"
 },
 {
  "es": "El Día de la Independencia",
  "en": "Independence Day",
  "ja": "独立記念日",
  "cat": "Festividades"
 },
 {
  "es": "El Día de las Madres",
  "en": "Mother's Day",
  "ja": "母の日",
  "cat": "Festividades"
 },
 {
  "es": "El Día de los Muertos",
  "en": "Day of the Dead",
  "ja": "死者の日",
  "cat": "Festividades"
 },
 {
  "es": "Las posadas",
  "en": "Posadas (Mexican Christmas tradition)",
  "ja": "ポサーダス（メキシコのクリスマス行事）",
  "cat": "Festividades"
 },
 {
  "es": "El Día de Reyes",
  "en": "Three Kings' Day",
  "ja": "公現祭（三賢者の日）",
  "cat": "Festividades"
 },
 {
  "es": "La quinceañera",
  "en": "15th birthday celebration (girl's coming of age)",
  "ja": "キンセアニェーラ（15歳の成人祝い）",
  "cat": "Festividades"
 },
 {
  "es": "Querer decir",
  "en": "To mean",
  "ja": "〜という意味だ",
  "cat": "Frases"
 },
 {
  "es": "Gustar",
  "en": "To like / to be pleasing to",
  "ja": "好きだ",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Necesario",
  "en": "Necessary",
  "ja": "必要な",
  "cat": "Adjetivos"
 },
 {
  "es": "Importante",
  "en": "Important",
  "ja": "重要な",
  "cat": "Adjetivos"
 },
 {
  "es": "Dejar",
  "en": "To leave (behind) / to let",
  "ja": "置いていく・させる",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Pasar",
  "en": "To pass / to happen / to spend (time)",
  "ja": "通る・起こる・過ごす",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "Seguir",
  "en": "To continue / to follow",
  "ja": "続ける・従う",
  "cat": "Verbos",
  "nivel": "fácil"
 },
 {
  "es": "El mundo",
  "en": "World",
  "ja": "世界",
  "cat": "Geografía"
 },
 {
  "es": "El país",
  "en": "Country",
  "ja": "国",
  "cat": "Geografía"
 },
 {
  "es": "La manera",
  "en": "Way / manner",
  "ja": "方法・やり方",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "El momento",
  "en": "Moment",
  "ja": "瞬間",
  "cat": "Frecuencia"
 },
 {
  "es": "La parte",
  "en": "Part",
  "ja": "部分",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "El lugar",
  "en": "Place",
  "ja": "場所",
  "cat": "Lugares"
 },
 {
  "es": "La vida",
  "en": "Life",
  "ja": "人生・命",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "La verdad",
  "en": "Truth",
  "ja": "真実",
  "cat": "General",
  "nivel": "muy_facil"
 },
 {
  "es": "Hoy",
  "en": "Today",
  "ja": "今日",
  "cat": "Frecuencia"
 },
 {
  "es": "Mañana",
  "en": "Tomorrow / morning",
  "ja": "明日・朝",
  "cat": "Frecuencia"
 },
 {
  "es": "Ayer",
  "en": "Yesterday",
  "ja": "昨日",
  "cat": "Frecuencia"
 },
 {
  "es": "Quizás",
  "en": "Maybe / perhaps",
  "ja": "たぶん",
  "cat": "Frases"
 },
 {
  "es": "Entonces",
  "en": "Then / so",
  "ja": "それなら・その時",
  "cat": "Frases"
 },
 {
  "es": "El libro",
  "en": "Book",
  "ja": "本",
  "cat": "Educación"
 },
 {
  "es": "Qué",
  "en": "What",
  "ja": "何",
  "cat": "Frases"
 },
 {
  "es": "Quién",
  "en": "Who",
  "ja": "誰",
  "cat": "Frases"
 },
 {
  "es": "Cómo",
  "en": "How",
  "ja": "どのように",
  "cat": "Frases"
 },
 {
  "es": "Cuándo",
  "en": "When",
  "ja": "いつ",
  "cat": "Frases"
 },
 {
  "es": "Dónde",
  "en": "Where",
  "ja": "どこ",
  "cat": "Frases"
 },
 {
  "es": "Por qué",
  "en": "Why",
  "ja": "なぜ",
  "cat": "Frases"
 },
 {
  "es": "Sentirse solo",
  "en": "To feel lonely",
  "ja": "孤独を感じる",
  "cat": "Emociones",
  "nivel": "avanzado"
 },
 {
  "es": "La alegría",
  "en": "Joy",
  "ja": "喜び",
  "cat": "Emociones"
 },
 {
  "es": "La tristeza",
  "en": "Sadness",
  "ja": "悲しみ",
  "cat": "Emociones"
 },
 {
  "es": "El miedo",
  "en": "Fear",
  "ja": "恐怖",
  "cat": "Emociones"
 },
 {
  "es": "La esperanza",
  "en": "Hope",
  "ja": "希望",
  "cat": "Emociones"
 },
 {
  "es": "La paciencia",
  "en": "Patience",
  "ja": "忍耐",
  "cat": "Emociones"
 },
 {
  "es": "El pulso",
  "en": "Pulse",
  "ja": "脈拍",
  "cat": "Salud"
 },
 {
  "es": "La respiración",
  "en": "Breathing",
  "ja": "呼吸",
  "cat": "Salud"
 },
 {
  "es": "El estornudo",
  "en": "Sneeze",
  "ja": "くしゃみ",
  "cat": "Salud"
 },
 {
  "es": "La tos",
  "en": "Cough",
  "ja": "咳",
  "cat": "Salud"
 },
 {
  "es": "El mareo",
  "en": "Dizziness",
  "ja": "めまい",
  "cat": "Salud"
 },
 {
  "es": "La aspiradora",
  "en": "Vacuum cleaner",
  "ja": "掃除機",
  "cat": "Casa"
 },
 {
  "es": "La plancha",
  "en": "Iron (for clothes)",
  "ja": "アイロン",
  "cat": "Casa"
 },
 {
  "es": "El basurero",
  "en": "Trash can",
  "ja": "ゴミ箱",
  "cat": "Casa"
 },
 {
  "es": "La escoba",
  "en": "Broom",
  "ja": "ほうき",
  "cat": "Casa"
 },
 {
  "es": "El detergente",
  "en": "Detergent",
  "ja": "洗剤",
  "cat": "Casa"
 },
 {
  "es": "La videollamada",
  "en": "Video call",
  "ja": "ビデオ通話",
  "cat": "Trabajo"
 },
 {
  "es": "El teletrabajo",
  "en": "Remote work",
  "ja": "テレワーク",
  "cat": "Trabajo"
 },
 {
  "es": "El equipo de trabajo",
  "en": "Work team",
  "ja": "仕事のチーム",
  "cat": "Trabajo"
 },
 {
  "es": "La capacitación",
  "en": "Training",
  "ja": "研修",
  "cat": "Trabajo"
 },
 {
  "es": "El ascenso",
  "en": "Promotion (job)",
  "ja": "昇進",
  "cat": "Trabajo"
 },
 {
  "es": "El equipaje facturado",
  "en": "Checked luggage",
  "ja": "預け荷物",
  "cat": "Viajes"
 },
 {
  "es": "El tour",
  "en": "Tour",
  "ja": "ツアー",
  "cat": "Viajes"
 },
 {
  "es": "La propina",
  "en": "Tip (gratuity)",
  "ja": "チップ",
  "cat": "Viajes"
 },
 {
  "es": "El check-in",
  "en": "Check-in",
  "ja": "チェックイン",
  "cat": "Viajes"
 },
 {
  "es": "El taco al pastor",
  "en": "Al pastor taco",
  "ja": "タコス・アル・パストール",
  "cat": "Comida"
 },
 {
  "es": "La horchata",
  "en": "Horchata (rice drink)",
  "ja": "オルチャータ（米の飲み物）",
  "cat": "Comida"
 },
 {
  "es": "El elote",
  "en": "Corn on the cob (Mexican street food)",
  "ja": "メキシコ風とうもろこし",
  "cat": "Comida"
 },
 {
  "es": "La torta",
  "en": "Mexican sandwich",
  "ja": "トルタ（メキシコ風サンドイッチ）",
  "cat": "Comida"
 },
 {
  "es": "El pan dulce",
  "en": "Sweet bread",
  "ja": "甘いパン",
  "cat": "Comida"
 },
 {
  "es": "Sincero y directo",
  "en": "Sincere and direct",
  "ja": "誠実で率直な",
  "cat": "Adjetivos"
 },
 {
  "es": "Tranquilo y paciente",
  "en": "Calm and patient",
  "ja": "穏やかで忍耐強い",
  "cat": "Adjetivos"
 },
 {
  "es": "Curioso por naturaleza",
  "en": "Naturally curious",
  "ja": "生まれつき好奇心旺盛な",
  "cat": "Adjetivos"
 },
 {
  "es": "Práctico",
  "en": "Practical",
  "ja": "実用的な",
  "cat": "Adjetivos"
 },
 {
  "es": "Detallista",
  "en": "Detail-oriented",
  "ja": "細かいところに気がつく",
  "cat": "Adjetivos"
 },
 {
  "es": "Voy para allá",
  "en": "I'm coming / on my way there",
  "ja": "今そっちに向かってるよ",
  "cat": "Frases"
 },
 {
  "es": "Nos mantenemos en contacto",
  "en": "Let's stay in touch",
  "ja": "連絡取り合おうね",
  "cat": "Frases"
 },
 {
  "es": "Eso ya lo sabía",
  "en": "I already knew that",
  "ja": "それはもう知ってたよ",
  "cat": "Frases"
 },
 {
  "es": "No me lo esperaba",
  "en": "I wasn't expecting that",
  "ja": "それは予想してなかった",
  "cat": "Frases"
 },
 {
  "es": "Se me hizo tarde",
  "en": "I ran late",
  "ja": "遅くなってしまった",
  "cat": "Frases"
 },
 {
  "es": "Chamba",
  "en": "Job / work (colloquial)",
  "ja": "仕事（口語）",
  "cat": "Coloquial",
  "nivel": "avanzado"
 },
 {
  "es": "Güey",
  "en": "Dude / mate (very casual, Mexican)",
  "ja": "お前・やつ（親しい間柄限定、メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado"
 },
 {
  "es": "Neta",
  "en": "Really / the truth (colloquial)",
  "ja": "マジで・本当のこと（口語）",
  "cat": "Coloquial",
  "nivel": "avanzado"
 },
 {
  "es": "Chido",
  "en": "Cool / awesome (Mexican)",
  "ja": "かっこいい・いいね（メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado"
 },
 {
  "es": "No manches",
  "en": "No way! (colloquial, Mexican)",
  "ja": "うそでしょ・まさか（メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado"
 },
 {
  "es": "¿Qué onda?",
  "en": "What's up? (Mexican)",
  "ja": "調子どう？（メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado"
 },
 {
  "es": "Lana",
  "en": "Money (colloquial)",
  "ja": "お金（口語）",
  "cat": "Coloquial",
  "nivel": "avanzado"
 },
 {
  "es": "Feria",
  "en": "Money / change (Mexican colloquial)",
  "ja": "お金・小銭（メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado"
 },
 {
  "es": "Crudo",
  "en": "Hungover (colloquial)",
  "ja": "二日酔いの（口語）",
  "cat": "Coloquial",
  "nivel": "avanzado"
 },
 {
  "es": "Echar la hueva",
  "en": "To laze around (Mexican colloquial)",
  "ja": "だらだらする・サボる（メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado"
 },
 {
  "es": "Fresa",
  "en": "Snobbish / preppy (Mexican colloquial)",
  "ja": "気取った・お坊ちゃん風の（メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado"
 },
 {
  "es": "Órale",
  "en": "Wow! / Come on! (Mexican)",
  "ja": "おおっ！さあ！（メキシコの口語）",
  "cat": "Coloquial",
  "nivel": "avanzado"
 },
 {
  "es": "Chistoso",
  "en": "Funny",
  "ja": "面白い、おかしい",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Chismoso",
  "en": "Gossipy",
  "ja": "噂好きな、ゴシップ好きな",
  "cat": "Adjetivos"
 },
 {
  "es": "Mentiroso",
  "en": "Liar / untruthful",
  "ja": "嘘つきな",
  "cat": "Adjetivos"
 },
 {
  "es": "Miedoso",
  "en": "Fearful / easily scared",
  "ja": "怖がりな",
  "cat": "Adjetivos"
 },
 {
  "es": "Envidioso",
  "en": "Envious",
  "ja": "嫉妬深い",
  "cat": "Adjetivos"
 },
 {
  "es": "Famoso",
  "en": "Famous",
  "ja": "有名な",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Ruidoso",
  "en": "Noisy",
  "ja": "うるさい、騒がしい",
  "cat": "Adjetivos"
 },
 {
  "es": "Peligroso",
  "en": "Dangerous",
  "ja": "危険な",
  "cat": "Adjetivos",
  "nivel": "fácil"
 },
 {
  "es": "Estudioso",
  "en": "Studious",
  "ja": "勉強熱心な",
  "cat": "Adjetivos"
 },
 {
  "es": "Ambicioso",
  "en": "Ambitious",
  "ja": "野心的な",
  "cat": "Adjetivos"
 },
 {
  "es": "Religioso",
  "en": "Religious",
  "ja": "信心深い",
  "cat": "Adjetivos"
 },
 {
  "es": "Sospechoso",
  "en": "Suspicious",
  "ja": "怪しい、疑わしい",
  "cat": "Adjetivos"
 },
 {
  "es": "Vergonzoso",
  "en": "Shy / embarrassing",
  "ja": "恥ずかしがりな、恥ずべき",
  "cat": "Adjetivos"
 },
 {
  "es": "El trámite",
  "en": "Procedure / paperwork",
  "ja": "手続き",
  "cat": "Sociedad"
 },
 {
  "es": "El requisito",
  "en": "Requirement",
  "ja": "要件",
  "cat": "Sociedad"
 },
 {
  "es": "El comprobante",
  "en": "Receipt / proof",
  "ja": "領収書・証明書",
  "cat": "Finanzas"
 },
 {
  "es": "Vigente",
  "en": "Valid / in effect",
  "ja": "有効な",
  "cat": "Adjetivos"
 },
 {
  "es": "Encargarse de",
  "en": "To be in charge of",
  "ja": "〜を担当する",
  "cat": "Trabajo"
 },
 {
  "es": "La retroalimentación",
  "en": "Feedback",
  "ja": "フィードバック",
  "cat": "Trabajo"
 },
 {
  "es": "Cumplir con",
  "en": "To fulfill / comply with",
  "ja": "〜を果たす",
  "cat": "Trabajo"
 },
 {
  "es": "El desempeño",
  "en": "Performance",
  "ja": "（仕事の）成果",
  "cat": "Trabajo"
 },
 {
  "es": "El plazo de entrega",
  "en": "Delivery deadline",
  "ja": "納期",
  "cat": "Trabajo"
 },
 {
  "es": "El malentendido",
  "en": "Misunderstanding",
  "ja": "誤解",
  "cat": "Sociedad"
 },
 {
  "es": "Aclarar",
  "en": "To clarify",
  "ja": "明確にする",
  "cat": "Verbos"
 },
 {
  "es": "Insistir",
  "en": "To insist",
  "ja": "主張する",
  "cat": "Verbos"
 },
 {
  "es": "Ceder",
  "en": "To give in / yield",
  "ja": "譲歩する",
  "cat": "Verbos"
 },
 {
  "es": "El reclamo",
  "en": "Complaint / claim",
  "ja": "クレーム",
  "cat": "Compras"
 },
 {
  "es": "La queja",
  "en": "Complaint",
  "ja": "苦情",
  "cat": "Sociedad"
 },
 {
  "es": "El inconveniente",
  "en": "Inconvenience",
  "ja": "不都合",
  "cat": "Sociedad"
 },
 {
  "es": "La avería",
  "en": "Breakdown / malfunction",
  "ja": "故障",
  "cat": "Herramientas"
 },
 {
  "es": "La cita médica",
  "en": "Medical appointment",
  "ja": "診察予約",
  "cat": "Salud"
 },
 {
  "es": "La receta médica",
  "en": "Prescription",
  "ja": "処方箋",
  "cat": "Salud"
 },
 {
  "es": "El diagnóstico",
  "en": "Diagnosis",
  "ja": "診断",
  "cat": "Salud"
 },
 {
  "es": "El formulario",
  "en": "Form",
  "ja": "書式",
  "cat": "Educación"
 },
 {
  "es": "La firma",
  "en": "Signature",
  "ja": "署名",
  "cat": "Sociedad"
 },
 {
  "es": "La identificación oficial",
  "en": "Official ID",
  "ja": "公的身分証明書",
  "cat": "Sociedad"
 },
 {
  "es": "Expedir",
  "en": "To issue",
  "ja": "発行する",
  "cat": "Verbos"
 },
 {
  "es": "Vencer",
  "en": "To expire",
  "ja": "期限切れになる",
  "cat": "Verbos"
 },
 {
  "es": "Renovar",
  "en": "To renew",
  "ja": "更新する",
  "cat": "Verbos"
 },
 {
  "es": "La cotización",
  "en": "Quote / estimate",
  "ja": "見積もり",
  "cat": "Finanzas"
 },
 {
  "es": "El proveedor",
  "en": "Supplier",
  "ja": "供給業者",
  "cat": "Trabajo"
 },
 {
  "es": "La sucursal",
  "en": "Branch (office)",
  "ja": "支店",
  "cat": "Trabajo"
 },
 {
  "es": "El horario de atención",
  "en": "Business hours",
  "ja": "営業時間",
  "cat": "Compras"
 },
 {
  "es": "La disponibilidad",
  "en": "Availability",
  "ja": "空き状況",
  "cat": "Trabajo"
 },
 {
  "es": "Malinterpretar",
  "en": "To misinterpret",
  "ja": "誤解する",
  "cat": "Verbos"
 },
 {
  "es": "Ponerse de acuerdo",
  "en": "To reach an agreement",
  "ja": "合意する",
  "cat": "Verbos"
 },
 {
  "es": "Disculparse",
  "en": "To apologize",
  "ja": "謝る",
  "cat": "Verbos"
 },
 {
  "es": "Justificar",
  "en": "To justify",
  "ja": "正当化する",
  "cat": "Verbos"
 },
 {
  "es": "Postergar",
  "en": "To postpone",
  "ja": "延期する",
  "cat": "Verbos"
 },
 {
  "es": "Coordinar",
  "en": "To coordinate",
  "ja": "調整する",
  "cat": "Trabajo"
 },
 {
  "es": "Negociar",
  "en": "To negotiate",
  "ja": "交渉する",
  "cat": "Verbos"
 },
 {
  "es": "Asumir",
  "en": "To take on / assume",
  "ja": "引き受ける",
  "cat": "Verbos"
 },
 {
  "es": "Delegar",
  "en": "To delegate",
  "ja": "委任する",
  "cat": "Trabajo"
 },
 {
  "es": "Priorizar",
  "en": "To prioritize",
  "ja": "優先させる",
  "cat": "Trabajo"
 },
 {
  "es": "Implementar",
  "en": "To implement",
  "ja": "実施する",
  "cat": "Trabajo"
 },
 {
  "es": "La solicitud",
  "en": "Application / request",
  "ja": "申請",
  "cat": "Sociedad"
 },
 {
  "es": "El acuerdo",
  "en": "Agreement",
  "ja": "合意",
  "cat": "Sociedad"
 },
 {
  "es": "El contrato",
  "en": "Contract",
  "ja": "契約",
  "cat": "Finanzas"
 },
 {
  "es": "La cláusula",
  "en": "Clause",
  "ja": "条項",
  "cat": "Finanzas"
 },
 {
  "es": "El arrendamiento",
  "en": "Lease / rental",
  "ja": "賃貸借",
  "cat": "Casa"
 },
 {
  "es": "El inquilino",
  "en": "Tenant",
  "ja": "賃借人",
  "cat": "Casa"
 },
 {
  "es": "El propietario",
  "en": "Owner / landlord",
  "ja": "所有者・大家",
  "cat": "Casa"
 },
 {
  "es": "La póliza",
  "en": "Insurance policy",
  "ja": "保険証券",
  "cat": "Finanzas"
 },
 {
  "es": "El siniestro",
  "en": "Insurance claim event",
  "ja": "保険事故",
  "cat": "Finanzas"
 },
 {
  "es": "La indemnización",
  "en": "Compensation",
  "ja": "賠償金",
  "cat": "Finanzas"
 },
 {
  "es": "La nómina",
  "en": "Payroll",
  "ja": "給与明細",
  "cat": "Trabajo"
 },
 {
  "es": "El sueldo neto",
  "en": "Net salary",
  "ja": "手取り給与",
  "cat": "Trabajo"
 },
 {
  "es": "Las prestaciones",
  "en": "Benefits",
  "ja": "福利厚生",
  "cat": "Trabajo"
 },
 {
  "es": "La jubilación",
  "en": "Retirement",
  "ja": "退職・年金",
  "cat": "Trabajo"
 },
 {
  "es": "La renuncia",
  "en": "Resignation",
  "ja": "退職・辞職",
  "cat": "Trabajo"
 },
 {
  "es": "El despido",
  "en": "Dismissal / layoff",
  "ja": "解雇",
  "cat": "Trabajo"
 },
 {
  "es": "El desempleo",
  "en": "Unemployment",
  "ja": "失業",
  "cat": "Trabajo"
 },
 {
  "es": "Postularse",
  "en": "To apply (for a job)",
  "ja": "応募する",
  "cat": "Trabajo"
 },
 {
  "es": "La entrevista de trabajo",
  "en": "Job interview",
  "ja": "就職面接",
  "cat": "Trabajo"
 },
 {
  "es": "La tripa",
  "en": "Tripe (taco filling)",
  "ja": "（タコスの）トリッパ・臓物",
  "cat": "Comida"
 },
 {
  "es": "El suadero",
  "en": "Beef flank cut (popular taco filling)",
  "ja": "スアデロ（牛の腹肉、タコスの定番）",
  "cat": "Comida"
 },
 {
  "es": "Las carnitas",
  "en": "Braised pork (taco filling)",
  "ja": "カルニータス（豚肉の煮込み）",
  "cat": "Comida"
 },
 {
  "es": "La birria",
  "en": "Birria (spiced stewed meat)",
  "ja": "ビリア（スパイス煮込み肉料理）",
  "cat": "Comida"
 },
 {
  "es": "La barbacoa",
  "en": "Slow-cooked meat (barbacoa)",
  "ja": "バルバコア（じっくり蒸し焼きにした肉）",
  "cat": "Comida"
 },
 {
  "es": "La cochinita pibil",
  "en": "Yucatan-style slow-roasted pork",
  "ja": "コチニータ・ピビル（ユカタン風豚肉料理）",
  "cat": "Comida"
 },
 {
  "es": "El chicharrón",
  "en": "Fried pork rind",
  "ja": "チチャロン（豚の皮の揚げ物）",
  "cat": "Comida"
 },
 {
  "es": "La lengua",
  "en": "Tongue (taco filling)",
  "ja": "タン（舌、タコスの具）",
  "cat": "Comida"
 },
 {
  "es": "El bistec",
  "en": "Steak",
  "ja": "ビステック（薄切りステーキ肉）",
  "cat": "Comida"
 },
 {
  "es": "El chorizo",
  "en": "Mexican sausage",
  "ja": "チョリソ（メキシコ風ソーセージ）",
  "cat": "Comida"
 },
 {
  "es": "El campechano",
  "en": "Mixed-meat taco",
  "ja": "カンペチャーノ（複数の肉を混ぜたタコス）",
  "cat": "Comida"
 },
 {
  "es": "Los nopales",
  "en": "Cactus paddles (food)",
  "ja": "ノパル（食用サボテン）",
  "cat": "Comida"
 },
 {
  "es": "El cilantro",
  "en": "Cilantro",
  "ja": "パクチー（コリアンダーの葉）",
  "cat": "Comida"
 },
 {
  "es": "Los antojitos",
  "en": "Mexican street snacks",
  "ja": "アントヒート（メキシコの軽食・屋台料理の総称）",
  "cat": "Comida"
 },
 {
  "es": "El comal",
  "en": "Griddle (for tortillas)",
  "ja": "コマル（トルティーヤを焼く鉄板）",
  "cat": "Cocina"
 },
 {
  "es": "El molcajete",
  "en": "Mortar and pestle (also serving dish)",
  "ja": "モルカヘテ（すり鉢、盛り付け皿にも使う）",
  "cat": "Cocina"
 },
 {
  "es": "La combi",
  "en": "Shared minibus / van",
  "ja": "コンビ（乗り合いミニバン）",
  "cat": "Transporte"
 },
 {
  "es": "El pesero",
  "en": "Local minibus (Mexico City)",
  "ja": "ペセロ（メキシコシティの乗り合いバス）",
  "cat": "Transporte"
 },
 {
  "es": "El changarro",
  "en": "Small informal shop",
  "ja": "チャンガロ（小さな個人商店）",
  "cat": "Lugares"
 },
 {
  "es": "El tianguis",
  "en": "Street market",
  "ja": "ティアングイス（青空市・露天市場）",
  "cat": "Lugares"
 },
 {
  "es": "La colonia",
  "en": "Neighborhood (Mexican term)",
  "ja": "コロニア（メキシコでの「地区・町内」の呼び方）",
  "cat": "Lugares"
 },
 {
  "es": "El fraccionamiento",
  "en": "Housing development / gated community",
  "ja": "フラクシオナミエント（住宅開発区・分譲地）",
  "cat": "Lugares"
 },
 {
  "es": "La banqueta",
  "en": "Sidewalk (Mexican term)",
  "ja": "バンケタ（メキシコでの「歩道」の呼び方）",
  "cat": "Lugares"
 },
 {
  "es": "La alberca",
  "en": "Swimming pool (Mexican term)",
  "ja": "アルベルカ（メキシコでの「プール」の呼び方）",
  "cat": "Casa"
 },
 {
  "es": "El popote",
  "en": "Drinking straw (Mexican term)",
  "ja": "ポポテ（メキシコでの「ストロー」の呼び方）",
  "cat": "Cocina"
 },
 {
  "es": "La fonda",
  "en": "Small family-run eatery",
  "ja": "フォンダ（家族経営の小さな食堂）",
  "cat": "Lugares"
 },
 {
  "es": "La credencial para votar",
  "en": "Voter ID (used as general ID in Mexico)",
  "ja": "選挙人証（メキシコで身分証明書として使われる）",
  "cat": "Sociedad"
 },
 {
  "es": "El INE",
  "en": "National Electoral Institute (issues voter ID)",
  "ja": "INE（国立選挙機構、選挙人証の発行元）",
  "cat": "Sociedad"
 },
 {
  "es": "El CURP",
  "en": "Unique Population Registry Code",
  "ja": "CURP（個人識別番号）",
  "cat": "Sociedad"
 },
 {
  "es": "El RFC",
  "en": "Federal Taxpayer Registry number",
  "ja": "RFC（税務者登録番号）",
  "cat": "Finanzas"
 },
 {
  "es": "El IMSS",
  "en": "Mexican Social Security Institute",
  "ja": "IMSS（メキシコ社会保障機構）",
  "cat": "Sociedad"
 },
 {
  "es": "La chela",
  "en": "Beer (colloquial)",
  "ja": "ビール（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "La autopista",
  "en": "Highway / expressway",
  "ja": "高速道路",
  "cat": "Transporte"
 },
 {
  "es": "La carretera",
  "en": "Road / highway",
  "ja": "幹線道路",
  "cat": "Transporte"
 },
 {
  "es": "La caseta de cobro",
  "en": "Toll booth",
  "ja": "料金所",
  "cat": "Transporte"
 },
 {
  "es": "La cuota",
  "en": "Toll fee (Mexican term)",
  "ja": "通行料金",
  "cat": "Transporte"
 },
 {
  "es": "La carretera libre",
  "en": "Toll-free road (Mexican term)",
  "ja": "無料道路",
  "cat": "Transporte"
 },
 {
  "es": "La gasolinera",
  "en": "Gas station",
  "ja": "ガソリンスタンド",
  "cat": "Transporte"
 },
 {
  "es": "La gasolina",
  "en": "Gasoline",
  "ja": "ガソリン",
  "cat": "Transporte"
 },
 {
  "es": "La grúa",
  "en": "Tow truck",
  "ja": "レッカー車",
  "cat": "Transporte"
 },
 {
  "es": "La verificación vehicular",
  "en": "Vehicle emissions inspection",
  "ja": "車検（排ガス検査）",
  "cat": "Transporte"
 },
 {
  "es": "La tenencia",
  "en": "Vehicle tax (Mexican term)",
  "ja": "自動車税",
  "cat": "Transporte"
 },
 {
  "es": "Las placas",
  "en": "License plates",
  "ja": "ナンバープレート",
  "cat": "Transporte"
 },
 {
  "es": "El estacionamiento",
  "en": "Parking lot",
  "ja": "駐車場",
  "cat": "Transporte"
 },
 {
  "es": "El tope",
  "en": "Speed bump (Mexican term)",
  "ja": "減速バンプ",
  "cat": "Transporte"
 },
 {
  "es": "El carril",
  "en": "Lane",
  "ja": "車線",
  "cat": "Transporte"
 },
 {
  "es": "El límite de velocidad",
  "en": "Speed limit",
  "ja": "制限速度",
  "cat": "Transporte"
 },
 {
  "es": "La multa de tránsito",
  "en": "Traffic ticket",
  "ja": "交通違反切符",
  "cat": "Transporte"
 },
 {
  "es": "El seguro de auto",
  "en": "Car insurance",
  "ja": "自動車保険",
  "cat": "Transporte"
 },
 {
  "es": "El taller mecánico",
  "en": "Auto repair shop",
  "ja": "自動車修理工場",
  "cat": "Transporte"
 },
 {
  "es": "La ponchadura",
  "en": "Flat tire (Mexican term)",
  "ja": "パンク",
  "cat": "Transporte"
 },
 {
  "es": "El libramiento",
  "en": "Bypass road",
  "ja": "バイパス道路",
  "cat": "Transporte"
 },
 {
  "es": "El segundo piso",
  "en": "Elevated highway (Mexico City term)",
  "ja": "高架高速道路（メキシコシティの二階建て道路）",
  "cat": "Transporte"
 },
 {
  "es": "Chafa",
  "en": "Cheap / low quality (colloquial)",
  "ja": "安っぽい・質の悪い（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "A huevo",
  "en": "For sure / definitely (colloquial)",
  "ja": "絶対に・当然（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "Simón",
  "en": "Yes (colloquial)",
  "ja": "うん（口語のはい）",
  "cat": "Coloquial"
 },
 {
  "es": "Nel",
  "en": "No (colloquial)",
  "ja": "いや（口語のいいえ）",
  "cat": "Coloquial"
 },
 {
  "es": "Sale",
  "en": "Okay / deal (colloquial)",
  "ja": "オーケー・決まり（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "Híjole",
  "en": "Wow / oh no (exclamation)",
  "ja": "うわあ・げっ（口語の間投詞）",
  "cat": "Coloquial"
 },
 {
  "es": "El chavo",
  "en": "Kid / young guy (colloquial)",
  "ja": "若者・少年（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "La chava",
  "en": "Kid / young girl (colloquial)",
  "ja": "若者・少女（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "El compa",
  "en": "Buddy (colloquial, short for compadre)",
  "ja": "相棒（口語、compadreの略）",
  "cat": "Coloquial"
 },
 {
  "es": "Carnal",
  "en": "Close friend / bro (colloquial)",
  "ja": "親友・兄弟のような仲（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "Al chile",
  "en": "Seriously / honestly (colloquial)",
  "ja": "マジで・正直言うと（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "La troca",
  "en": "Pickup truck (colloquial)",
  "ja": "トラック（口語、英語truckから）",
  "cat": "Coloquial"
 },
 {
  "es": "La banda",
  "en": "The crew / friends (colloquial)",
  "ja": "仲間たち（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "El rollo",
  "en": "The situation / deal (colloquial)",
  "ja": "事情・話（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "El desmadre",
  "en": "Mess / chaos (colloquial)",
  "ja": "めちゃくちゃな状況（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "Apapachar",
  "en": "To pamper / hug affectionately",
  "ja": "愛情を込めて甘やかす・抱きしめる",
  "cat": "Coloquial"
 },
 {
  "es": "Sacar la vuelta",
  "en": "To dodge / avoid someone or something",
  "ja": "避ける・逃げる（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "Ni modo",
  "en": "Oh well / nothing to be done",
  "ja": "仕方ない（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "A poco",
  "en": "Really? / No way (colloquial)",
  "ja": "まさか・本当に？（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "En chinga",
  "en": "In a hurry / quickly (colloquial)",
  "ja": "大急ぎで（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "Fifí",
  "en": "Posh / snobbish (colloquial)",
  "ja": "お高くとまった（口語）",
  "cat": "Coloquial"
 },
 {
  "es": "Amar",
  "en": "To love deeply",
  "ja": "深く愛する",
  "cat": "Verbos"
 }
];
