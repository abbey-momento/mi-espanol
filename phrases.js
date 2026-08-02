const SCENARIOS = [
 {
  "icon": "☕",
  "title": "カフェで",
  "items": [
   {
    "es": "¿Qué va a tomar?",
    "ja": "何になさいますか？",
    "note": "店員が注文を聞くときの決まり文句"
   },
   {
    "es": "Un café americano, por favor.",
    "ja": "アメリカーノを一つください。",
    "note": ""
   },
   {
    "es": "¿Con leche entera, deslactosada o de almendra?",
    "ja": "牛乳は普通のにしますか、乳糖不使用にしますか、アーモンドミルクにしますか？",
    "note": "ミルクの種類を聞かれる定番の質問"
   },
   {
    "es": "Con leche entera está bien.",
    "ja": "普通の牛乳で大丈夫です。",
    "note": ""
   },
   {
    "es": "¿Para tomar aquí o para llevar?",
    "ja": "店内でお召し上がりですか、お持ち帰りですか？",
    "note": ""
   },
   {
    "es": "Para llevar, por favor.",
    "ja": "持ち帰りでお願いします。",
    "note": ""
   },
   {
    "es": "¿De qué tamaño lo quiere?",
    "ja": "サイズはどうしますか？",
    "note": ""
   },
   {
    "es": "El chico/mediano/grande, por favor.",
    "ja": "小/中/大でお願いします。",
    "note": ""
   },
   {
    "es": "¿Le pongo azúcar?",
    "ja": "お砂糖入れますか？",
    "note": ""
   },
   {
    "es": "Sin azúcar, gracias.",
    "ja": "砂糖なしでお願いします。",
    "note": ""
   }
  ]
 },
 {
  "icon": "🍽️",
  "title": "レストランで",
  "items": [
   {
    "es": "Una mesa para dos, por favor.",
    "ja": "2名でお願いします。",
    "note": "入店時の定番フレーズ"
   },
   {
    "es": "¿Ya sabe qué va a ordenar?",
    "ja": "ご注文はお決まりですか？",
    "note": ""
   },
   {
    "es": "¿Me puede traer la carta/el menú?",
    "ja": "メニューをいただけますか？",
    "note": ""
   },
   {
    "es": "¿Qué me recomienda?",
    "ja": "何かおすすめはありますか？",
    "note": ""
   },
   {
    "es": "Para mí, este.",
    "ja": "私はこれにします。",
    "note": "メニューを指しながら注文するときに便利"
   },
   {
    "es": "¿Está picante este platillo?",
    "ja": "この料理は辛いですか？",
    "note": ""
   },
   {
    "es": "Sin cilantro, por favor.",
    "ja": "パクチー抜きでお願いします。",
    "note": "苦手な食材を伝えるときの例"
   },
   {
    "es": "La cuenta, por favor.",
    "ja": "お会計お願いします。",
    "note": ""
   },
   {
    "es": "¿La cuenta junta o por separado?",
    "ja": "お会計は一緒にしますか、別々にしますか？",
    "note": "割り勘したいときによく聞かれる"
   },
   {
    "es": "Por separado, por favor.",
    "ja": "別々でお願いします。",
    "note": ""
   },
   {
    "es": "¿Aceptan tarjeta?",
    "ja": "カードは使えますか？",
    "note": ""
   },
   {
    "es": "Soy alérgico/a a los cacahuates.",
    "ja": "私はピーナッツアレルギーです。",
    "note": "食材名を入れ替えて使える定番フレーズ（mariscos＝甲殻類、gluten＝グルテンなど）"
   },
   {
    "es": "¿Este platillo tiene nueces o lácteos?",
    "ja": "この料理にナッツや乳製品は入っていますか？",
    "note": ""
   },
   {
    "es": "¿Tienen opciones vegetarianas/veganas?",
    "ja": "ベジタリアン/ヴィーガン向けのメニューはありますか？",
    "note": ""
   },
   {
    "es": "¿La propina está incluida?",
    "ja": "チップは含まれていますか？",
    "note": "メキシコでは通常含まれていない。人数が多いと自動でservicioが加算される店もある"
   },
   {
    "es": "¿El servicio ya está incluido en la cuenta?",
    "ja": "サービス料はもう会計に含まれていますか？",
    "note": "propina（チップ、任意）とservicio/cargo por servicio（サービス料、団体客などで自動加算されることがある）は別物。servicioが入っていれば追加のpropinaは必須ではないが、気持ちで少し足す人も多い"
   },
   {
    "es": "¿Cuánto se deja de propina normalmente?",
    "ja": "普通どれくらいチップを渡すものですか？",
    "note": "目安は10〜15%程度（地域・店による）"
   },
   {
    "es": "Le voy a dejar la propina en efectivo.",
    "ja": "チップは現金で置いていきます。",
    "note": ""
   },
   {
    "es": "Estuvo muy rico, gracias.",
    "ja": "とても美味しかったです、ありがとうございます。",
    "note": "会計時のちょっとした一言"
   }
  ]
 },
 {
  "icon": "🛒",
  "title": "スーパー・買い物で",
  "items": [
   {
    "es": "¿Dónde están las verduras?",
    "ja": "野菜はどこにありますか？",
    "note": ""
   },
   {
    "es": "¿Tiene esto en otro color/talla?",
    "ja": "これの他の色/サイズはありますか？",
    "note": ""
   },
   {
    "es": "¿Me lo puedo probar?",
    "ja": "試着してもいいですか？",
    "note": ""
   },
   {
    "es": "¿Necesita bolsa?",
    "ja": "袋は必要ですか？",
    "note": "メキシコではエコバッグ持参が一般的、聞かれることが多い"
   },
   {
    "es": "No, gracias, traigo mi propia bolsa.",
    "ja": "いいえ、大丈夫です、自分の袋を持ってきました。",
    "note": ""
   },
   {
    "es": "¿Cuánto cuesta esto?",
    "ja": "これはいくらですか？",
    "note": ""
   },
   {
    "es": "¿Tiene algo más barato?",
    "ja": "もっと安いものはありますか？",
    "note": ""
   },
   {
    "es": "¿Puedo pagar con tarjeta?",
    "ja": "カードで払えますか？",
    "note": ""
   },
   {
    "es": "¿Me da un recibo, por favor?",
    "ja": "レシートをいただけますか？",
    "note": ""
   }
  ]
 },
 {
  "icon": "🏨",
  "title": "ホテルで",
  "items": [
   {
    "es": "Tengo una reservación a nombre de...",
    "ja": "〜の名前で予約しています。",
    "note": "チェックイン時の定番フレーズ"
   },
   {
    "es": "¿A qué hora es el check-in/check-out?",
    "ja": "チェックイン/チェックアウトは何時ですか？",
    "note": ""
   },
   {
    "es": "¿El desayuno está incluido?",
    "ja": "朝食は含まれていますか？",
    "note": ""
   },
   {
    "es": "¿Tienen wifi? ¿Cuál es la contraseña?",
    "ja": "Wi-Fiはありますか？パスワードは何ですか？",
    "note": ""
   },
   {
    "es": "¿Me pueden dar otra almohada/toalla?",
    "ja": "枕/タオルをもう一枚もらえますか？",
    "note": ""
   },
   {
    "es": "El aire acondicionado no funciona.",
    "ja": "エアコンが動きません。",
    "note": "トラブル報告の定番表現"
   },
   {
    "es": "¿Pueden guardar mi equipaje después del check-out?",
    "ja": "チェックアウト後に荷物を預かってもらえますか？",
    "note": ""
   },
   {
    "es": "¿Me pueden llamar un taxi?",
    "ja": "タクシーを呼んでもらえますか？",
    "note": ""
   }
  ]
 },
 {
  "icon": "🚕",
  "title": "タクシー・配車で",
  "items": [
   {
    "es": "¿A cuánto me sale a...?",
    "ja": "〜まではいくらくらいですか？",
    "note": ""
   },
   {
    "es": "Lléveme a esta dirección, por favor.",
    "ja": "この住所まで連れて行ってください。",
    "note": "住所を見せながら言うと確実"
   },
   {
    "es": "¿Cuánto tiempo se hace hasta ahí?",
    "ja": "そこまでどれくらい時間がかかりますか？",
    "note": ""
   },
   {
    "es": "¿Puede parar aquí, por favor?",
    "ja": "ここで止めてもらえますか？",
    "note": ""
   },
   {
    "es": "¿Me puede esperar unos minutos?",
    "ja": "数分待ってもらえますか？",
    "note": ""
   },
   {
    "es": "¿Cuánto es?",
    "ja": "おいくらですか？",
    "note": ""
   },
   {
    "es": "Quédese con el cambio.",
    "ja": "おつりは取っておいてください。",
    "note": "チップ代わりによく使う表現"
   }
  ]
 },
 {
  "icon": "🛫",
  "title": "空港で",
  "items": [
   {
    "es": "¿Dónde está el mostrador de la aerolínea...?",
    "ja": "〜航空のカウンターはどこですか？",
    "note": ""
   },
   {
    "es": "Quiero facturar mi equipaje.",
    "ja": "荷物を預けたいです。",
    "note": ""
   },
   {
    "es": "¿Cuál es mi puerta de embarque?",
    "ja": "搭乗ゲートはどこですか？",
    "note": ""
   },
   {
    "es": "¿A qué hora empieza el abordaje?",
    "ja": "搭乗は何時から始まりますか？",
    "note": ""
   },
   {
    "es": "Mi vuelo se retrasó.",
    "ja": "私のフライトが遅延しました。",
    "note": ""
   },
   {
    "es": "¿Dónde recojo mi equipaje?",
    "ja": "荷物はどこで受け取りますか？",
    "note": ""
   },
   {
    "es": "Vengo de vacaciones.",
    "ja": "観光で来ました。",
    "note": "入国審査でよく聞かれる質問への回答例"
   },
   {
    "es": "Me quedo una semana.",
    "ja": "1週間滞在します。",
    "note": "入国審査でよく聞かれる"
   }
  ]
 },
 {
  "icon": "💊",
  "title": "薬局・病院で",
  "items": [
   {
    "es": "¿Tiene algo para el dolor de cabeza?",
    "ja": "頭痛に効くものはありますか？",
    "note": ""
   },
   {
    "es": "Me duele la garganta.",
    "ja": "喉が痛いです。",
    "note": ""
   },
   {
    "es": "¿Necesito receta para esto?",
    "ja": "これには処方箋が必要ですか？",
    "note": ""
   },
   {
    "es": "¿Cómo debo tomar esto?",
    "ja": "これはどう飲めばいいですか？",
    "note": ""
   },
   {
    "es": "Soy alérgico/a a...",
    "ja": "私は〜アレルギーです。",
    "note": "アレルギー申告は重要な一言"
   },
   {
    "es": "Necesito ver a un médico.",
    "ja": "医者に診てもらう必要があります。",
    "note": ""
   },
   {
    "es": "¿Dónde está la sala de emergencias?",
    "ja": "救急外来はどこですか？",
    "note": ""
   },
   {
    "es": "No me siento bien.",
    "ja": "体調が良くないです。",
    "note": ""
   }
  ]
 },
 {
  "icon": "🧭",
  "title": "道を尋ねる・尋ねられる",
  "items": [
   {
    "es": "¿Cómo llego a...?",
    "ja": "〜へはどう行けばいいですか？",
    "note": ""
   },
   {
    "es": "¿Está lejos de aquí?",
    "ja": "ここから遠いですか？",
    "note": ""
   },
   {
    "es": "Está a dos cuadras de aquí.",
    "ja": "ここから2ブロック先です。",
    "note": "道を教えるときの定番表現"
   },
   {
    "es": "Siga derecho y luego dé vuelta a la izquierda.",
    "ja": "まっすぐ行って、それから左に曲がってください。",
    "note": ""
   },
   {
    "es": "¿Se puede ir caminando?",
    "ja": "歩いて行けますか？",
    "note": ""
   },
   {
    "es": "Perdón, ¿me puede ayudar? Estoy perdido/a.",
    "ja": "すみません、助けてもらえますか？道に迷ってしまって。",
    "note": ""
   },
   {
    "es": "¿Qué autobús/línea debo tomar?",
    "ja": "どのバス/路線に乗ればいいですか？",
    "note": ""
   }
  ]
 },
 {
  "icon": "🗣️",
  "title": "よく使う命令形フレーズ",
  "items": [
   {
    "es": "Ven / Venga.",
    "ja": "来て（túに対して）／来てください（ustedに対して）。",
    "note": "venirの命令形。túとustedの2つの形を併記"
   },
   {
    "es": "Espera / Espere un momento.",
    "ja": "ちょっと待って／お待ちください。",
    "note": "esperarの命令形"
   },
   {
    "es": "Mira / Mire esto.",
    "ja": "これ見て／これをご覧ください。",
    "note": "mirarの命令形。相手の注意を引くときによく使う"
   },
   {
    "es": "Escucha / Escuche.",
    "ja": "聞いて／お聞きください。",
    "note": "escucharの命令形"
   },
   {
    "es": "¡Cuidado!",
    "ja": "気をつけて！",
    "note": "動詞ではなく名詞そのものを使う定番の警告表現"
   },
   {
    "es": "Ayúdame, por favor.",
    "ja": "手伝って、お願い。",
    "note": "ayudar+me（代名詞）の命令形"
   },
   {
    "es": "Siéntate / Siéntese, por favor.",
    "ja": "座って／お座りください。",
    "note": "sentarseの再帰命令形"
   },
   {
    "es": "Cállate.",
    "ja": "黙って。",
    "note": "callarseの再帰命令形。かなり直接的な言い方なので使う相手に注意"
   },
   {
    "es": "Apúrate / Apúrese, por favor.",
    "ja": "急いで／お急ぎください。",
    "note": "apurarseの再帰命令形"
   },
   {
    "es": "Dame eso, por favor.",
    "ja": "それをちょうだい。",
    "note": "dar+me（代名詞）の命令形"
   },
   {
    "es": "Ten cuidado.",
    "ja": "気をつけてね。",
    "note": "tenerの命令形、cuidadoとセットでよく使う"
   },
   {
    "es": "Quédate / Quédese aquí.",
    "ja": "ここにいて／ここにいてください。",
    "note": "quedarseの再帰命令形"
   },
   {
    "es": "Sígueme / Sígame, por favor.",
    "ja": "ついてきて／ついてきてください。",
    "note": "seguir+me（代名詞）の命令形"
   },
   {
    "es": "No te preocupes / No se preocupe.",
    "ja": "心配しないで／ご心配なさらず。",
    "note": "preocuparseの否定命令形"
   },
   {
    "es": "No te vayas.",
    "ja": "行かないで。",
    "note": "irseの否定命令形"
   },
   {
    "es": "Pásame la sal, por favor.",
    "ja": "塩取って。",
    "note": "pasar+me（代名詞）の命令形、食卓での定番"
   },
   {
    "es": "Repite, por favor.",
    "ja": "もう一度言って。",
    "note": "repetirの命令形"
   },
   {
    "es": "Vamos.",
    "ja": "行こう。",
    "note": "irのnosotros命令形（勧誘）、日常でとてもよく使う"
   }
  ]
 },
 {
  "icon": "📱",
  "title": "電話・SNSでのやり取り",
  "items": [
   {
    "es": "¿Bueno?",
    "ja": "もしもし？",
    "note": "メキシコでの電話の出方の定番（他地域ではdiga/alóなど）"
   },
   {
    "es": "¿Con quién hablo?",
    "ja": "どちら様ですか？",
    "note": ""
   },
   {
    "es": "¿Está Juan, por favor?",
    "ja": "フアンさんいらっしゃいますか？",
    "note": ""
   },
   {
    "es": "Un momento, por favor, ahora le paso.",
    "ja": "少々お待ちください、今おつなぎします。",
    "note": ""
   },
   {
    "es": "Se cortó la llamada.",
    "ja": "電話が切れちゃった。",
    "note": ""
   },
   {
    "es": "Te mando un mensaje después.",
    "ja": "あとでメッセージ送るね。",
    "note": ""
   },
   {
    "es": "¿Me puedes llamar cuando puedas?",
    "ja": "手が空いたら電話してもらえる？",
    "note": ""
   },
   {
    "es": "No tengo señal aquí.",
    "ja": "ここ電波が入らないんだ。",
    "note": ""
   },
   {
    "es": "Se me acabó la batería.",
    "ja": "バッテリーが切れちゃった。",
    "note": ""
   }
  ]
 },
 {
  "icon": "💬",
  "title": "雑談・スモールトーク",
  "items": [
   {
    "es": "¿A qué te dedicas?",
    "ja": "お仕事は何をされていますか？",
    "note": "初対面でよく聞かれる質問"
   },
   {
    "es": "¿De dónde eres?",
    "ja": "出身はどこですか？",
    "note": ""
   },
   {
    "es": "¿Cuánto tiempo llevas viviendo aquí?",
    "ja": "ここに住んでどれくらいですか？",
    "note": ""
   },
   {
    "es": "¡Qué calor/frío hace hoy!",
    "ja": "今日は暑いね/寒いね！",
    "note": "天気の話は定番の雑談"
   },
   {
    "es": "¿Tienes planes para el fin de semana?",
    "ja": "週末の予定ある？",
    "note": ""
   },
   {
    "es": "¡Cuánto tiempo sin verte!",
    "ja": "久しぶりだね！",
    "note": ""
   },
   {
    "es": "Nos vemos pronto, ¿va?",
    "ja": "また近いうちに会おうね？",
    "note": ""
   },
   {
    "es": "Que te vaya bien.",
    "ja": "うまくいきますように。",
    "note": "別れ際によく使う一言"
   }
  ]
 },
 {
  "icon": "🏠",
  "title": "部屋探し・賃貸で",
  "items": [
   {
    "es": "Estoy buscando un departamento en renta.",
    "ja": "賃貸のアパートを探しています。",
    "note": ""
   },
   {
    "es": "¿Cuánto es la renta mensual?",
    "ja": "月々の家賃はいくらですか？",
    "note": ""
   },
   {
    "es": "¿Los servicios están incluidos?",
    "ja": "光熱費は含まれていますか？",
    "note": ""
   },
   {
    "es": "¿Se necesita depósito?",
    "ja": "敷金は必要ですか？",
    "note": ""
   },
   {
    "es": "¿Se permiten mascotas?",
    "ja": "ペットは飼えますか？",
    "note": ""
   },
   {
    "es": "¿Cuándo puedo mudarme?",
    "ja": "いつ引っ越せますか？",
    "note": ""
   },
   {
    "es": "¿Cuánto tiempo dura el contrato?",
    "ja": "契約期間はどれくらいですか？",
    "note": ""
   },
   {
    "es": "El departamento está amueblado.",
    "ja": "その部屋は家具付きです。",
    "note": ""
   }
  ]
 },
 {
  "icon": "🚨",
  "title": "緊急時のフレーズ",
  "items": [
   {
    "es": "¡Ayuda!",
    "ja": "助けて！",
    "note": "緊急時に一番大事な一言"
   },
   {
    "es": "Llame a la policía, por favor.",
    "ja": "警察を呼んでください。",
    "note": ""
   },
   {
    "es": "Necesito un médico urgentemente.",
    "ja": "至急医者が必要です。",
    "note": ""
   },
   {
    "es": "Me robaron mi cartera.",
    "ja": "財布を盗まれました。",
    "note": ""
   },
   {
    "es": "Perdí mi pasaporte.",
    "ja": "パスポートをなくしました。",
    "note": ""
   },
   {
    "es": "¿Dónde está la embajada japonesa?",
    "ja": "日本大使館はどこですか？",
    "note": ""
   },
   {
    "es": "No me siento bien, necesito ayuda.",
    "ja": "体調が悪いです、助けが必要です。",
    "note": ""
   },
   {
    "es": "Hubo un accidente.",
    "ja": "事故がありました。",
    "note": ""
   }
  ]
 },
 {
  "icon": "💭",
  "title": "相槌・フィラー（会話をつなぐ言葉）",
  "items": [
   {
    "es": "Ajá.",
    "ja": "うんうん。",
    "note": "相手の話を聞いている合図の相槌、最も基本的なもの"
   },
   {
    "es": "Claro.",
    "ja": "もちろん、その通り。",
    "note": "同意の相槌"
   },
   {
    "es": "Sí, sí.",
    "ja": "うんうん、そうそう。",
    "note": "強い同意・相槌"
   },
   {
    "es": "Ya veo.",
    "ja": "なるほど。",
    "note": ""
   },
   {
    "es": "¿En serio?",
    "ja": "本当に？マジで？",
    "note": "驚きの相槌"
   },
   {
    "es": "No puede ser.",
    "ja": "うそでしょ、そんな。",
    "note": "驚きの相槌"
   },
   {
    "es": "Este... / Esto...",
    "ja": "えーと…",
    "note": "言葉に詰まったときのフィラー"
   },
   {
    "es": "O sea...",
    "ja": "つまり…、要するに…",
    "note": "言い換えるときのフィラー"
   },
   {
    "es": "Bueno...",
    "ja": "ええと…、まあ…",
    "note": "話し始めや、話題を変えるときのフィラー"
   },
   {
    "es": "Pues...",
    "ja": "うーん…、まあ…",
    "note": "考えながら話すときのフィラー、非常によく使われる"
   },
   {
    "es": "A ver...",
    "ja": "えーと…（考える）",
    "note": "考えをまとめるときのフィラー"
   },
   {
    "es": "Digo...",
    "ja": "というか…（言い直し）",
    "note": "言い直すときに使う"
   },
   {
    "es": "¿Me explico?",
    "ja": "伝わってる？分かる？",
    "note": "説明の後に確認する一言"
   },
   {
    "es": "¿Sabes?",
    "ja": "でしょ？分かるでしょ？",
    "note": "文末につけて共感を求める相槌"
   },
   {
    "es": "Fíjate que...",
    "ja": "実はさ…、聞いて…",
    "note": "話を切り出すときの前置き"
   },
   {
    "es": "No sé, ¿tú qué crees?",
    "ja": "どうかな、君はどう思う？",
    "note": "相手に意見を振るときの一言"
   }
  ]
 },
 {
  "icon": "💼",
  "title": "職場・仕事で",
  "items": [
   {
    "es": "Buenos días a todos, empecemos la reunión.",
    "ja": "おはようございます、会議を始めましょう。",
    "note": ""
   },
   {
    "es": "¿Me puedes enviar el archivo por correo?",
    "ja": "ファイルをメールで送ってもらえる？",
    "note": ""
   },
   {
    "es": "Voy a estar fuera de la oficina mañana.",
    "ja": "明日はオフィスにいません。",
    "note": ""
   },
   {
    "es": "¿Tienes un momento para revisar esto?",
    "ja": "これを確認する時間ある？",
    "note": ""
   },
   {
    "es": "Necesito pedir un día libre la próxima semana.",
    "ja": "来週、休みを一日いただきたいのですが。",
    "note": ""
   },
   {
    "es": "¿Cuándo es la fecha límite?",
    "ja": "締め切りはいつですか？",
    "note": ""
   },
   {
    "es": "Voy a llegar un poco tarde a la oficina.",
    "ja": "オフィスに少し遅れて着きます。",
    "note": ""
   },
   {
    "es": "¿Podemos reagendar la junta?",
    "ja": "会議の日程を変更できますか？",
    "note": ""
   },
   {
    "es": "Gracias por tu ayuda con el proyecto.",
    "ja": "プロジェクトを手伝ってくれてありがとう。",
    "note": ""
   }
  ]
 },
 {
  "icon": "🏦",
  "title": "銀行・両替で",
  "items": [
   {
    "es": "Quiero abrir una cuenta bancaria.",
    "ja": "銀行口座を開きたいです。",
    "note": ""
   },
   {
    "es": "¿Dónde puedo cambiar dólares a pesos?",
    "ja": "ドルをペソに両替できる場所はどこですか？",
    "note": ""
   },
   {
    "es": "¿Cuál es el tipo de cambio hoy?",
    "ja": "今日の為替レートはいくらですか？",
    "note": ""
   },
   {
    "es": "Quiero hacer un retiro, por favor.",
    "ja": "引き出しをお願いします。",
    "note": ""
   },
   {
    "es": "Mi tarjeta no funciona.",
    "ja": "カードが使えません。",
    "note": ""
   },
   {
    "es": "¿Cuánto cobran de comisión?",
    "ja": "手数料はいくらかかりますか？",
    "note": ""
   },
   {
    "es": "Perdí mi tarjeta, necesito reportarla.",
    "ja": "カードを失くしたので、届け出をしたいです。",
    "note": ""
   },
   {
    "es": "¿Hay un cajero automático cerca?",
    "ja": "近くにATMはありますか？",
    "note": ""
   }
  ]
 },
 {
  "icon": "💪",
  "title": "ジムで",
  "items": [
   {
    "es": "¿Tienen clases de yoga por la mañana?",
    "ja": "朝のヨガクラスはありますか？",
    "note": ""
   },
   {
    "es": "¿Cómo me inscribo en el gimnasio?",
    "ja": "ジムの入会手続きはどうすればいいですか？",
    "note": ""
   },
   {
    "es": "¿Puedo probar una clase gratis?",
    "ja": "無料体験クラスを受けられますか？",
    "note": ""
   },
   {
    "es": "¿Dónde están los vestidores?",
    "ja": "更衣室はどこですか？",
    "note": ""
   },
   {
    "es": "¿Me puede explicar cómo usar esta máquina?",
    "ja": "このマシンの使い方を教えてもらえますか？",
    "note": ""
   },
   {
    "es": "Quiero cancelar mi membresía.",
    "ja": "会員登録を解約したいです。",
    "note": ""
   },
   {
    "es": "¿A qué hora cierran?",
    "ja": "何時に閉まりますか？",
    "note": ""
   }
  ]
 },
 {
  "icon": "💇",
  "title": "美容院・理髪店で",
  "items": [
   {
    "es": "Quiero un corte de cabello, por favor.",
    "ja": "髪を切ってください。",
    "note": ""
   },
   {
    "es": "Solo las puntas, por favor.",
    "ja": "毛先だけお願いします。",
    "note": ""
   },
   {
    "es": "No mucho, solo un poco más corto.",
    "ja": "あまり短くしないで、少しだけ短くしてください。",
    "note": ""
   },
   {
    "es": "¿Me puede hacer un lavado también?",
    "ja": "シャンプーもお願いできますか？",
    "note": ""
   },
   {
    "es": "Quiero teñirme el cabello.",
    "ja": "髪を染めたいです。",
    "note": ""
   },
   {
    "es": "¿Cuánto tiempo va a tomar?",
    "ja": "どれくらい時間がかかりますか？",
    "note": ""
   },
   {
    "es": "Me encanta, muchas gracias.",
    "ja": "とても気に入りました、ありがとうございます。",
    "note": ""
   }
  ]
 },
 {
  "icon": "🤝",
  "title": "意見を言う・賛成/反対する",
  "items": [
   {
    "es": "Estoy de acuerdo contigo.",
    "ja": "あなたに賛成です。",
    "note": ""
   },
   {
    "es": "No estoy muy de acuerdo, la verdad.",
    "ja": "正直、あまり賛成ではありません。",
    "note": ""
   },
   {
    "es": "Tienes razón.",
    "ja": "あなたの言う通りです。",
    "note": ""
   },
   {
    "es": "Creo que no es tan sencillo.",
    "ja": "そんなに単純ではないと思います。",
    "note": ""
   },
   {
    "es": "En mi opinión, deberíamos esperar.",
    "ja": "私の意見では、待つべきだと思います。",
    "note": ""
   },
   {
    "es": "Depende de cómo lo veas.",
    "ja": "見方によりますね。",
    "note": ""
   },
   {
    "es": "Buen punto, no lo había pensado así.",
    "ja": "いい指摘ですね、そう考えていませんでした。",
    "note": ""
   },
   {
    "es": "Prefiero no opinar sobre eso.",
    "ja": "それについては意見を控えたいです。",
    "note": ""
   }
  ]
 },
 {
  "icon": "☀️",
  "title": "天気の話",
  "items": [
   {
    "es": "¿Qué tiempo hace hoy?",
    "ja": "今日の天気はどう？",
    "note": "一番基本的な天気の尋ね方"
   },
   {
    "es": "Hace mucho calor hoy.",
    "ja": "今日はとても暑いね。",
    "note": "天気を表すときはhacerを使う"
   },
   {
    "es": "Hace un frío horrible.",
    "ja": "とんでもなく寒いね。",
    "note": ""
   },
   {
    "es": "Está nublado.",
    "ja": "曇っているね。",
    "note": "一時的な状態にはestarを使う"
   },
   {
    "es": "Está despejado.",
    "ja": "快晴だね。",
    "note": ""
   },
   {
    "es": "Va a llover más tarde.",
    "ja": "後で雨が降るみたいだよ。",
    "note": ""
   },
   {
    "es": "Está lloviendo a cántaros.",
    "ja": "土砂降りだよ。",
    "note": "a cántaros＝直訳「壺いっぱいに」、激しい雨を表す口語表現"
   },
   {
    "es": "Parece que va a haber tormenta.",
    "ja": "嵐が来そうだね。",
    "note": ""
   },
   {
    "es": "Hay mucho viento hoy.",
    "ja": "今日は風が強いね。",
    "note": ""
   },
   {
    "es": "Se siente húmedo hoy.",
    "ja": "今日は湿気を感じるね。",
    "note": ""
   },
   {
    "es": "Hace un día precioso.",
    "ja": "今日は素敵な天気だね。",
    "note": ""
   },
   {
    "es": "Se pronostica lluvia para mañana.",
    "ja": "明日は雨の予報だよ。",
    "note": "pronosticar＝予報する、天気予報でよく使う動詞"
   },
   {
    "es": "¿Llevaste paraguas?",
    "ja": "傘持ってきた？",
    "note": ""
   },
   {
    "es": "No olvides el suéter, va a refrescar por la noche.",
    "ja": "夜は涼しくなるからセーター忘れないでね。",
    "note": "refrescar＝涼しくなる"
   },
   {
    "es": "Con este calor, mejor quedémonos en casa.",
    "ja": "この暑さだから、家にいた方がいいね。",
    "note": ""
   },
   {
    "es": "¿A cuánto está la temperatura?",
    "ja": "今何度くらい？",
    "note": "メキシコでは主に摂氏（centígrados）を使う"
   },
   {
    "es": "Estamos a treinta grados.",
    "ja": "今30度だよ。",
    "note": ""
   },
   {
    "es": "En temporada de lluvias, siempre llueve por la tarde.",
    "ja": "雨季はいつも午後に雨が降るんだ。",
    "note": "メキシコの雨季（temporada de lluvias）は主に5月〜10月頃"
   },
   {
    "es": "Cayó granizo esta mañana.",
    "ja": "今朝は雹が降ったんだ。",
    "note": "granizo＝雹"
   },
   {
    "es": "El clima ha estado muy raro últimamente.",
    "ja": "最近天気がすごく変だね。",
    "note": ""
   }
  ]
 }
];
