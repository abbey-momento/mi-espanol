const DICTIONARY_DATA = {
 "hola": {
  "nuance": "最もカジュアルな挨拶で、時間帯を問わず使える万能語。フォーマルな場でも問題なく使われる。",
  "etymology": "ラテン語の感嘆詞に由来するとされるが、諸説あり（アラビア語起源説もある）。",
  "synonyms": [
   "qué tal",
   "buenas"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¡Hola! ¿Cómo estás?\n— Hola, muy bien, ¿y tú?",
   "ja": "「やあ！元気？」「やあ、元気だよ、君は？」"
  }
 },
 "buenos días": {
  "nuance": "正午くらいまで使う朝の挨拶。ビジネスシーンでも標準的。",
  "etymology": "bueno（良い）+ día（日）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "buen día（一部地域で単数形も使われる）"
  ],
  "dialogue": {
   "es": "— Buenos días, ¿cómo amaneció?\n— Buenos días, muy bien, gracias.",
   "ja": "「おはようございます、調子はどうですか」「おはよう、良い調子です、ありがとう」"
  }
 },
 "gracias": {
  "nuance": "感謝を表す基本語。muchas graciasにするとより丁寧・強調になる。",
  "etymology": "ラテン語gratia（恩恵、感謝）に由来。",
  "synonyms": [
   "te lo agradezco",
   "mil gracias"
  ],
  "derived": [
   "agradecer（感謝する、動詞）",
   "agradecido（感謝している、形容詞）"
  ],
  "dialogue": {
   "es": "— Aquí tienes tu café.\n— Gracias.",
   "ja": "「はい、コーヒーどうぞ」「ありがとう」"
  }
 },
 "por favor": {
  "nuance": "依頼につける決まり文句。文末につけることが多いが文頭でも可。",
  "etymology": "por（〜のために）+ favor（好意）で「お願いします」の意。",
  "synonyms": [],
  "derived": [
   "hacer el favor de（〜していただけますか、より丁寧な表現）"
  ],
  "dialogue": {
   "es": "— ¿Me pasas la sal, por favor?\n— Claro, aquí tienes.",
   "ja": "「塩を取ってもらえますか」「もちろん、どうぞ」"
  }
 },
 "de nada": {
  "nuance": "「どういたしまして」。カジュアルにはno hay de quéとも言う。",
  "etymology": "de（〜について）+ nada（何もない）で「大したことではない」の意。",
  "synonyms": [
   "no hay de qué",
   "para eso estamos"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Muchas gracias por tu ayuda.\n— De nada.",
   "ja": "「手伝ってくれて本当にありがとう」「どういたしまして」"
  }
 },
 "lo siento": {
  "nuance": "謝罪の基本表現。perdónより少しフォーマルで、深刻な内容にも使える。",
  "etymology": "sentir（感じる）の一人称現在形。「私はそれを（悪く）感じている」が直訳。",
  "synonyms": [
   "perdón",
   "disculpa"
  ],
  "derived": [
   "sentir（感じる）",
   "sentimiento（感情）"
  ],
  "dialogue": {
   "es": "— Llegué tarde, lo siento mucho.\n— No te preocupes.",
   "ja": "「遅れてごめんなさい」「気にしないで」"
  }
 },
 "sí": {
  "nuance": "「はい」。アクセント記号がない si は「もし〜なら」という別の単語になるので注意。",
  "etymology": "ラテン語sic（そのように）に由来。",
  "synonyms": [
   "claro",
   "por supuesto"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Quieres venir?\n— Sí, claro.",
   "ja": "「来る？」「うん、もちろん」"
  }
 },
 "no": {
  "nuance": "「いいえ」だけでなく、動詞の前に置いて否定文を作る基本語でもある。",
  "etymology": "ラテン語non（〜ない）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Te gusta el café?\n— No, prefiero el té.",
   "ja": "「コーヒー好き？」「いや、お茶の方が好き」"
  }
 },
 "agua": {
  "nuance": "アクセントのある「a」音が続くのを避けるため、単数形では女性名詞なのに el を使う特殊な単語（el agua fría）。",
  "etymology": "ラテン語aqua（水）に由来。",
  "synonyms": [],
  "derived": [
   "acuático（水の、水生の）",
   "acuario（水族館）"
  ],
  "dialogue": {
   "es": "— ¿Me traes un vaso de agua?\n— Claro, ahora mismo.",
   "ja": "「水を一杯持ってきてくれる？」「もちろん、すぐに」"
  }
 },
 "café": {
  "nuance": "「コーヒー」と「喫茶店」の両方の意味を持つ。文脈で判断する。",
  "etymology": "アラビア語qahwaがトルコ語を経てヨーロッパの言語に広まった。",
  "synonyms": [],
  "derived": [
   "cafetería（カフェ）",
   "cafeína（カフェイン）"
  ],
  "dialogue": {
   "es": "— ¿Vamos a tomar un café?\n— Sí, conozco un lugar cerca.",
   "ja": "「コーヒー飲みに行く？」「うん、近くにいい場所知ってるよ」"
  }
 },
 "hablar": {
  "nuance": "「話す」の基本動詞。特定の言語について話すときはhablar+言語（hablar español）。",
  "etymology": "ラテン語fabulari（物語る）に由来。",
  "synonyms": [
   "conversar",
   "charlar（雑談する、よりカジュアル）"
  ],
  "derived": [
   "habla（話し方、方言）",
   "hablante（話者）"
  ],
  "dialogue": {
   "es": "— ¿Hablas inglés?\n— Un poco, estoy aprendiendo.",
   "ja": "「英語話せる？」「少しだけ、勉強中なんだ」"
  }
 },
 "comer": {
  "nuance": "「食べる」の基本動詞。ラテンアメリカの多くの地域では「昼食をとる」という意味でも使われる。",
  "etymology": "ラテン語comedere（すっかり食べる）に由来。",
  "synonyms": [
   "alimentarse（栄養を取る、ややフォーマル）"
  ],
  "derived": [
   "comida（食べ物、食事）",
   "comedor（食堂）"
  ],
  "dialogue": {
   "es": "— ¿Ya comiste?\n— No, todavía no.",
   "ja": "「もうご飯食べた？」「ううん、まだ」"
  }
 },
 "vivir": {
  "nuance": "「住む」だけでなく「生きる」という意味でも使われる。",
  "etymology": "ラテン語vivere（生きる）に由来。",
  "synonyms": [
   "residir（居住する、フォーマル）",
   "habitar（住む、ややフォーマル）"
  ],
  "derived": [
   "vida（人生、命）",
   "vivienda（住居）"
  ],
  "dialogue": {
   "es": "— ¿Dónde vives?\n— Vivo en Tokio.",
   "ja": "「どこに住んでるの？」「東京に住んでるよ」"
  }
 },
 "tener": {
  "nuance": "「持つ」だけでなく、tener frío（寒い）、tener hambre（お腹が空いた）のように、体の状態を表す表現にも幅広く使われる不規則動詞。",
  "etymology": "ラテン語tenere（保持する）に由来。",
  "synonyms": [
   "poseer（所有する、ややフォーマル）"
  ],
  "derived": [
   "tenencia（保有）",
   "teniente（中尉、軍の階級）"
  ],
  "dialogue": {
   "es": "— ¿Tienes hermanos?\n— Sí, tengo una hermana.",
   "ja": "「兄弟いる？」「うん、妹が一人いるよ」"
  }
 },
 "querer": {
  "nuance": "「欲しい・したい」に加えて「愛している」という意味にもなる（Te quiero.）。文脈で意味が変わる。amar（愛する）との違い：querer は家族・友人など日常的な「大好き」を伝えるときに自然。amarはより恋愛的・重い響きがあり、パートナーや配偶者、神への愛など、深く真剣な文脈でよく使われる。複数の相手には「Los quiero.（男性・混合）／Las quiero.（女性）」のようにustedes系の目的代名詞を使う（vosを使わない地域では常にustedes扱い）。",
  "etymology": "ラテン語quaerere（探し求める）に由来。",
  "synonyms": [
   "desear（望む、ややフォーマル）",
   "amar（愛する、より強い愛情表現）"
  ],
  "derived": [
   "querido（親愛なる、手紙の書き出し等）",
   "cariño（愛情）"
  ],
  "dialogue": {
   "es": "— ¿Qué quieres hacer hoy?\n— Quiero descansar en casa.",
   "ja": "「今日何したい？」「家でゆっくりしたいな」"
  }
 },
 "poder": {
  "nuance": "「〜できる」の基本動詞で、能力・可能性・許可のすべてをカバーする万能語。",
  "etymology": "俗ラテン語potere（〜できる）に由来。",
  "synonyms": [
   "ser capaz de（〜する能力がある、ややフォーマル）"
  ],
  "derived": [
   "poder（名詞・力、権力）",
   "poderoso（力強い）"
  ],
  "dialogue": {
   "es": "— ¿Puedes ayudarme?\n— Sí, claro que puedo.",
   "ja": "「手伝ってもらえる？」「うん、もちろんできるよ」"
  }
 },
 "ir": {
  "nuance": "「行く」の基本動詞で、ir a+動詞の原形（〜するつもりだ）という未来を表す用法も非常によく使われる。 また、ir de+名詞（〜しに行く、〜の外出をする）という別の決まった用法もある：vamos de compras（買い物に行く）、vamos de viaje（旅行に行く）。vamos a（＋不定詞または場所）とは形も意味も違うので混同しないよう注意。ir a＋不定詞＝「〜するつもりだ」、ir a＋場所＝「〜へ行く」、ir de＋活動名詞＝「〜をしに出かける」。",
  "etymology": "ラテン語のire（行く）由来だが、活用は別の動詞vadere由来の形も混ざった特殊な不規則動詞。",
  "synonyms": [
   "dirigirse a（〜に向かう、ややフォーマル）"
  ],
  "derived": [
   "ida（行き、片道）",
   "salida（出発、出口）"
  ],
  "dialogue": {
   "es": "— ¿Vas a la fiesta?\n— Sí, voy a ir con mis amigos.",
   "ja": "「パーティー行く？」「うん、友達と行くつもり」"
  }
 },
 "hacer": {
  "nuance": "「する・作る」の基本動詞。天気表現（hace calor＝暑い）にも使われる、応用範囲が非常に広い不規則動詞。",
  "etymology": "ラテン語facere（する、作る）に由来。",
  "synonyms": [
   "realizar（実行する、ややフォーマル）",
   "fabricar（製造する）"
  ],
  "derived": [
   "hecho（事実、出来事、過去分詞）",
   "quehacer（仕事、やるべきこと）"
  ],
  "dialogue": {
   "es": "— ¿Qué haces?\n— Estoy haciendo la tarea.",
   "ja": "「何してるの？」「宿題やってるところ」"
  }
 },
 "ser": {
  "nuance": "本質的・恒常的な性質を表すbe動詞。estarとの使い分けが学習者の最大の壁の一つ。",
  "etymology": "ラテン語esse（〜である）とsedere（座る）の要素が混ざった特殊な不規則動詞。",
  "synonyms": [],
  "derived": [
   "ser（名詞・存在、生き物）",
   "esencia（本質）"
  ],
  "dialogue": {
   "es": "— ¿De dónde eres?\n— Soy de Japón.",
   "ja": "「出身はどこ？」「日本出身だよ」"
  }
 },
 "estar": {
  "nuance": "一時的な状態・場所を表すbe動詞。serとの対比で覚えるのが効率的。",
  "etymology": "ラテン語stare（立つ）に由来。",
  "synonyms": [],
  "derived": [
   "estado（状態、州）",
   "estable（安定した）"
  ],
  "dialogue": {
   "es": "— ¿Cómo estás?\n— Estoy bien, gracias.",
   "ja": "「元気？」「元気だよ、ありがとう」"
  }
 },
 "amigo": {
  "nuance": "「友達」の基本語。女性形はamiga。親しさの度合いはbuen amigo（親友）などで調整する。",
  "etymology": "ラテン語amicus（友人）に由来、amare（愛する）と同語源。",
  "synonyms": [
   "compañero（仲間）",
   "cuate（メキシコの口語で「相棒」）"
  ],
  "derived": [
   "amistad（友情）",
   "amigable（友好的な）"
  ],
  "dialogue": {
   "es": "— Él es mi mejor amigo.\n— ¡Qué bien!",
   "ja": "「彼は私の親友なんだ」「いいね！」"
  }
 },
 "casa": {
  "nuance": "「家」の基本語。hogar（家庭、家庭的な意味合いを含む）とはニュアンスが少し異なる。",
  "etymology": "ラテン語casa（小屋）に由来。",
  "synonyms": [
   "hogar（家庭）",
   "vivienda（住居、フォーマル）"
  ],
  "derived": [
   "casero（自家製の、家主）",
   "casona（大邸宅）"
  ],
  "dialogue": {
   "es": "— ¿Vamos a tu casa?\n— Sí, está cerca de aquí.",
   "ja": "「君の家に行く？」「うん、ここから近いよ」"
  }
 },
 "trabajo": {
  "nuance": "「仕事」の基本語。口語ではchamba（メキシコ等）もよく使われる。",
  "etymology": "俗ラテン語tripaliare（拷問器具tripaliumで苦しめる）に由来するとされ、元々「苦労」の意味合いが強かった。",
  "synonyms": [
   "empleo（雇用、職）",
   "chamba（口語）"
  ],
  "derived": [
   "trabajar（働く）",
   "trabajador（労働者、勤勉な）"
  ],
  "dialogue": {
   "es": "— ¿Cómo va el trabajo?\n— Un poco ocupado, pero bien.",
   "ja": "「仕事はどう？」「ちょっと忙しいけど順調だよ」"
  }
 },
 "tiempo": {
  "nuance": "「時間」と「天気」の両方の意味を持つ単語。文脈で判断する（¿Qué tiempo hace?＝天気はどう？）。",
  "etymology": "ラテン語tempus（時）に由来。",
  "synonyms": [
   "clima（気候、天気の意味で）"
  ],
  "derived": [
   "temporada（シーズン）",
   "temporal（一時的な）"
  ],
  "dialogue": {
   "es": "— No tengo tiempo hoy.\n— Entiendo, será para otro día.",
   "ja": "「今日は時間がないんだ」「分かった、また今度にしよう」"
  }
 },
 "día": {
  "nuance": "-aで終わるのに男性名詞という例外の代表格（el día）。",
  "etymology": "ラテン語dies（日）に由来。",
  "synonyms": [
   "jornada（一日の労働時間、より限定的）"
  ],
  "derived": [
   "diario（日記、日々の）",
   "mediodía（正午）"
  ],
  "dialogue": {
   "es": "— ¿Qué día es hoy?\n— Hoy es lunes.",
   "ja": "「今日は何曜日？」「今日は月曜日だよ」"
  }
 },
 "noche": {
  "nuance": "「夜」。buenas nochesは「こんばんは」と「おやすみ」の両方に使える。",
  "etymology": "ラテン語nox/noctis（夜）に由来。",
  "synonyms": [],
  "derived": [
   "nocturno（夜間の）",
   "anoche（昨夜）"
  ],
  "dialogue": {
   "es": "— Buenas noches, que descanses.\n— Igualmente, buenas noches.",
   "ja": "「おやすみ、ゆっくり休んでね」「君もね、おやすみ」"
  }
 },
 "grande": {
  "nuance": "名詞の前に置くとgranに短縮され、「偉大な」という意味に変わる（un gran hombre＝偉大な人 vs un hombre grande＝体の大きな人）。",
  "etymology": "ラテン語grandis（大きい）に由来。",
  "synonyms": [
   "enorme（巨大な）",
   "amplio（広い）"
  ],
  "derived": [
   "grandeza（偉大さ）",
   "agrandar（大きくする）"
  ],
  "dialogue": {
   "es": "— Es una ciudad muy grande.\n— Sí, es fácil perderse.",
   "ja": "「とても大きい街だね」「うん、迷いやすいよ」"
  }
 },
 "pequeño": {
  "nuance": "「小さい」の基本語。人に対して使うと「幼い、年下の」という意味にもなる。",
  "etymology": "起源ははっきりしないが、俗ラテン語系の語とされる。",
  "synonyms": [
   "chico（口語）",
   "diminuto（極小の）"
  ],
  "derived": [
   "pequeñez（小ささ）"
  ],
  "dialogue": {
   "es": "— El apartamento es pequeño pero cómodo.\n— Lo importante es que te guste.",
   "ja": "「アパートは小さいけど快適だよ」「気に入っているなら一番だね」"
  }
 },
 "bueno": {
  "nuance": "「良い」の基本語。名詞の前ではbuenに短縮される（un buen día）。感嘆詞的に「ええと」「まあ」という意味でも使われる。",
  "etymology": "ラテン語bonus（良い）に由来。",
  "synonyms": [
   "bien（副詞形）"
  ],
  "derived": [
   "bondad（善良さ）",
   "bienestar（幸福、福祉）"
  ],
  "dialogue": {
   "es": "— ¿Qué tal la película?\n— Bueno, no estuvo mal.",
   "ja": "「映画どうだった？」「うーん、悪くはなかったよ」"
  }
 },
 "malo": {
  "nuance": "「悪い」の基本語。名詞の前ではmalに短縮される（un mal día）。",
  "etymology": "ラテン語malus（悪い）に由来。",
  "synonyms": [
   "pésimo（最悪の）"
  ],
  "derived": [
   "maldad（悪意）",
   "malestar（不快感）"
  ],
  "dialogue": {
   "es": "— Hoy tuve un mal día.\n— Lo siento, ¿quieres hablar de ello?",
   "ja": "「今日は悪い一日だったよ」「それは残念、話したい？」"
  }
 },
 "nuevo": {
  "nuance": "名詞の前だと「新入りの、別の」、後だと「新品の」という違いが出ることがある。",
  "etymology": "ラテン語novus（新しい）に由来。",
  "synonyms": [
   "reciente（最近の）"
  ],
  "derived": [
   "novedad（新しさ、ニュース）",
   "renovar（更新する）"
  ],
  "dialogue": {
   "es": "— Tengo un carro nuevo.\n— ¡Felicidades! ¿De qué color es?",
   "ja": "「新しい車を買ったんだ」「おめでとう！何色？」"
  }
 },
 "familia": {
  "nuance": "「家族」。メキシコを含むラテンアメリカでは、親族の絆をとても大切にする文化的背景がある単語。",
  "etymology": "ラテン語familia（家族、使用人を含む世帯）に由来。",
  "synonyms": [
   "parientes（親戚）"
  ],
  "derived": [
   "familiar（家族の、身近な）",
   "familiaridad（親しみ）"
  ],
  "dialogue": {
   "es": "— ¿Tienes una familia grande?\n— Sí, somos seis hermanos.",
   "ja": "「大家族なの？」「うん、6人兄弟なんだ」"
  }
 },
 "escuela": {
  "nuance": "「学校」の一般的な語。colegio（私立校を指すことが多い）やuniversidad（大学）とは区別される。",
  "etymology": "ラテン語schola、さらにギリシャ語skholē（暇、余暇→そこから転じて学問の場）に由来。",
  "synonyms": [
   "colegio（学校、地域により意味が異なる）"
  ],
  "derived": [
   "escolar（学校の）"
  ],
  "dialogue": {
   "es": "— ¿A qué hora sales de la escuela?\n— A las tres de la tarde.",
   "ja": "「何時に学校終わるの？」「午後3時だよ」"
  }
 },
 "dinero": {
  "nuance": "「お金」の基本語。口語ではlanaやferiaもよく使われる（メキシコ）。",
  "etymology": "ラテン語denarius（古代ローマの銀貨）に由来。",
  "synonyms": [
   "plata（口語、多くのラテンアメリカで）",
   "lana／feria（メキシコの口語）"
  ],
  "derived": [
   "monetario（金銭の）"
  ],
  "dialogue": {
   "es": "— No tengo mucho dinero ahora.\n— No te preocupes, yo invito.",
   "ja": "「今あまりお金がないんだ」「気にしないで、私がおごるよ」"
  }
 },
 "amor": {
  "nuance": "「愛」。呼びかけ語として「あなた、ハニー」のような意味でも非常によく使われる（mi amor）。",
  "etymology": "ラテン語amor（愛）に由来。",
  "synonyms": [
   "cariño（愛情、より穏やかな響き）"
  ],
  "derived": [
   "amar（愛する）",
   "amoroso（愛情深い）"
  ],
  "dialogue": {
   "es": "— Te amo, mi amor.\n— Yo también te amo.",
   "ja": "「愛してるよ、ハニー」「私もあなたを愛してる」"
  }
 },
 "feliz": {
  "nuance": "「幸せな」の基本語。¡Feliz cumpleaños!（誕生日おめでとう）のような決まり文句にも頻出。",
  "etymology": "ラテン語felix（幸運な、実り豊かな）に由来。",
  "synonyms": [
   "contento（満足した、より一時的な喜び）"
  ],
  "derived": [
   "felicidad（幸福）",
   "felicitar（祝う）"
  ],
  "dialogue": {
   "es": "— ¡Feliz cumpleaños!\n— ¡Muchas gracias!",
   "ja": "「誕生日おめでとう！」「どうもありがとう！」"
  }
 },
 "trabajar": {
  "nuance": "「働く」の基本動詞。名詞形trabajoとセットで覚えると効率的。",
  "etymology": "俗ラテン語tripaliare（苦しめる）に由来、trabajoと同語源。",
  "synonyms": [
   "laborar（働く、フォーマル）"
  ],
  "derived": [
   "trabajo（仕事）",
   "trabajador（労働者）"
  ],
  "dialogue": {
   "es": "— ¿Dónde trabajas?\n— Trabajo en una oficina.",
   "ja": "「どこで働いているの？」「オフィスで働いているよ」"
  }
 },
 "ser / estar": {
  "nuance": "英語のbe動詞1つに対し、スペイン語はser（本質的・恒常的な性質）とestar（一時的な状態・場所）の2つに分かれる。この区別は学習者にとって最大の壁の一つ。",
  "etymology": "serはラテン語esse（〜である）とsedere（座る）が混ざった特殊な語源。estarはラテン語stare（立つ）に由来。",
  "synonyms": [],
  "derived": [
   "esencia（本質、serと同語源）",
   "estado（状態、estarと同語源）"
  ],
  "dialogue": {
   "es": "— ¿De dónde eres?\n— Soy de Japón. ¿Y tú, cómo estás hoy?\n— Estoy muy bien, gracias.",
   "ja": "「出身はどこ？」「日本出身だよ。君は今日、調子はどう？」「とても元気だよ、ありがとう」"
  }
 },
 "estudiar": {
  "nuance": "「勉強する」の基本動詞。estudiar+専攻名で「〜を専攻する」という意味にもなる。",
  "etymology": "ラテン語studere（熱心に取り組む）に由来。",
  "synonyms": [
   "aprender（学ぶ、習得のニュアンスが強い）"
  ],
  "derived": [
   "estudio（勉強、書斎）",
   "estudiante（学生）"
  ],
  "dialogue": {
   "es": "— ¿Qué estudias?\n— Estudio medicina.",
   "ja": "「何を勉強しているの？」「医学を勉強しているよ」"
  }
 },
 "querer decir": {
  "nuance": "「〜という意味だ」という決まり文句。¿Qué quiere decir esto?（これはどういう意味？）のように使う。",
  "etymology": "querer（欲する）+ decir（言う）で「言おうとしていること」が原義。",
  "synonyms": [
   "significar（意味する、ややフォーマル）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué quiere decir 'chido'?\n— Quiere decir 'genial' en México.",
   "ja": "「chidoってどういう意味？」「メキシコでは『いいね』という意味だよ」"
  }
 },
 "necesitar": {
  "nuance": "「必要とする」の基本動詞。tener queほど義務のニュアンスは強くない。",
  "etymology": "ラテン語necessitare（必要にする）に由来。",
  "synonyms": [
   "requerir（要する、ややフォーマル）"
  ],
  "derived": [
   "necesidad（必要性）",
   "necesario（必要な）"
  ],
  "dialogue": {
   "es": "— ¿Necesitas algo del súper?\n— Sí, necesito leche.",
   "ja": "「スーパーで何か必要なものある？」「うん、牛乳が必要」"
  }
 },
 "gustar": {
  "nuance": "英語のlikeとは文構造が逆で、「主語＝好きな対象」になる特殊な動詞。人称は間接目的語代名詞で表す。",
  "etymology": "ラテン語gustare（味わう）に由来。",
  "synonyms": [
   "encantar（大好きだ、より強い）",
   "agradar（好ましい、フォーマル）"
  ],
  "derived": [
   "gusto（好み、味覚）",
   "disgusto（不快感）"
  ],
  "dialogue": {
   "es": "— ¿Te gusta la música clásica?\n— Sí, me gusta mucho.",
   "ja": "「クラシック音楽好き？」「うん、すごく好き」"
  }
 },
 "necesario": {
  "nuance": "「必要な」。es necesario que+接続法、という構文でよく使われる。",
  "etymology": "necesitarと同語源、ラテン語necessarius。",
  "synonyms": [
   "imprescindible（不可欠な、より強い）"
  ],
  "derived": [
   "necesidad（必要性）",
   "necesitar（必要とする）"
  ],
  "dialogue": {
   "es": "— Es necesario llegar temprano.\n— Sí, entiendo.",
   "ja": "「早く着く必要があるよ」「うん、わかった」"
  }
 },
 "importante": {
  "nuance": "「重要な」の基本語。es importante que+接続法という形もよく使われる。",
  "etymology": "ラテン語importare（持ち込む、重要である）に由来。",
  "synonyms": [
   "fundamental（基本的な、より強い）",
   "clave（鍵となる）"
  ],
  "derived": [
   "importancia（重要性）",
   "importar（重要である、輸入する）"
  ],
  "dialogue": {
   "es": "— Esto es muy importante para mí.\n— Lo entiendo perfectamente.",
   "ja": "「これは私にとってとても大事なんだ」「よく分かるよ」"
  }
 },
 "conocer": {
  "nuance": "「（人・場所を）知っている」。事実を知っているsaberとは区別される。初対面で「知り合いになる」という意味にもなる。",
  "etymology": "ラテン語cognoscere（認識する）に由来。",
  "synonyms": [
   "saber（事実を知る、conocerとは対象が異なる）"
  ],
  "derived": [
   "conocimiento（知識）",
   "conocido（知人）"
  ],
  "dialogue": {
   "es": "— ¿Conoces a mi hermana?\n— No, mucho gusto.",
   "ja": "「私の妹知ってる？」「いや、はじめまして」"
  }
 },
 "saber": {
  "nuance": "「（事実・情報を）知っている」「〜できる（技能）」の両方の意味を持つ不規則動詞。conocerとの使い分けに注意。",
  "etymology": "ラテン語sapere（味がする、賢い）に由来。",
  "synonyms": [],
  "derived": [
   "sabiduría（知恵）",
   "sabio（賢者、賢い）"
  ],
  "dialogue": {
   "es": "— ¿Sabes nadar?\n— Sí, sé nadar bien.",
   "ja": "「泳げる？」「うん、上手に泳げるよ」"
  }
 },
 "sentir": {
  "nuance": "「感じる」の基本動詞。lo sientoのように謝罪の決まり文句にもなる。再帰形sentirseは「（自分が）〜な気分になる」。",
  "etymology": "ラテン語sentire（感じる、知覚する）に由来。",
  "synonyms": [
   "percibir（知覚する、フォーマル）"
  ],
  "derived": [
   "sentimiento（感情）",
   "sensación（感覚）"
  ],
  "dialogue": {
   "es": "— ¿Cómo te sientes hoy?\n— Me siento mucho mejor.",
   "ja": "「今日は気分どう？」「だいぶ良くなったよ」"
  }
 },
 "pensar": {
  "nuance": "「考える」の基本動詞（e→ieの語根母音変化）。pensar en（〜について考える）、pensar de（〜について意見を持つ）で前置詞が変わる。",
  "etymology": "ラテン語pensare（重さを量る、熟考する）に由来。",
  "synonyms": [
   "reflexionar（熟考する、よりフォーマル）",
   "creer（思う、意見）"
  ],
  "derived": [
   "pensamiento（考え）",
   "pensativo（物思いにふけった）"
  ],
  "dialogue": {
   "es": "— ¿Qué piensas de esta idea?\n— Pienso que es muy buena.",
   "ja": "「このアイデアどう思う？」「とても良いと思うよ」"
  }
 },
 "creer": {
  "nuance": "「思う・信じる」。creo que...（〜だと思う）は意見を述べる最も基本的な形。",
  "etymology": "ラテン語credere（信じる）に由来。",
  "synonyms": [
   "pensar（考える）",
   "opinar（意見を述べる、ややフォーマル）"
  ],
  "derived": [
   "creencia（信念）",
   "increíble（信じられない）"
  ],
  "dialogue": {
   "es": "— Creo que va a llover.\n— Sí, yo también lo creo.",
   "ja": "「雨が降ると思う」「うん、私もそう思う」"
  }
 },
 "encontrar": {
  "nuance": "「見つける」の基本動詞（o→ueの語根母音変化）。再帰形encontrarseは「（人と）出会う」「（体調が）〜である」の意味にもなる。",
  "etymology": "俗ラテン語incontrare（出会う）に由来。",
  "synonyms": [
   "hallar（見つける、ややフォーマル）"
  ],
  "derived": [
   "encuentro（出会い）",
   "reencontrar（再会する）"
  ],
  "dialogue": {
   "es": "— ¿Encontraste tus llaves?\n— Sí, las encontré en la cocina.",
   "ja": "「鍵見つかった？」「うん、台所で見つけたよ」"
  }
 },
 "llevar": {
  "nuance": "「運ぶ・持っていく」「（服を）着ている」「（時間を）過ごしている」など、非常に幅広い意味を持つ動詞。llevar+期間+現在分詞で「〜し続けている」という表現にもなる。",
  "etymology": "ラテン語levare（持ち上げる）に由来。",
  "synonyms": [
   "cargar（運ぶ、より重いものに）",
   "traer（持ってくる、方向が逆）"
  ],
  "derived": [
   "llevadero（我慢できる）"
  ],
  "dialogue": {
   "es": "— ¿Cuánto tiempo llevas viviendo aquí?\n— Llevo cinco años.",
   "ja": "「ここに住んでどれくらい？」「5年になるよ」"
  }
 },
 "dejar": {
  "nuance": "「置いていく」「〜させる（許可）」「やめる」など複数の意味を持つ。dejar de+動詞の原形で「〜するのをやめる」。",
  "etymology": "ラテン語laxare（緩める）に由来。",
  "synonyms": [
   "permitir（許可する、より狭い意味）",
   "abandonar（放棄する、より強い）"
  ],
  "derived": [
   "dejadez（怠慢）"
  ],
  "dialogue": {
   "es": "— Dejé mi teléfono en casa.\n— Qué mal, ¿quieres volver por él?",
   "ja": "「携帯を家に置いてきちゃった」「それは大変、取りに戻る？」"
  }
 },
 "pasar": {
  "nuance": "「通る」「過ごす」「起こる」など非常に幅広い意味を持つ動詞。¿Qué pasa?（どうしたの？）は日常会話の定番。",
  "etymology": "俗ラテン語passare（通り過ぎる）に由来。",
  "synonyms": [
   "ocurrir（起こる、より限定的）",
   "suceder（起こる、ややフォーマル）"
  ],
  "derived": [
   "pasado（過去）",
   "pasatiempo（趣味、暇つぶし）"
  ],
  "dialogue": {
   "es": "— ¿Qué pasó ayer?\n— Nada especial, pasé el día en casa.",
   "ja": "「昨日何かあった？」「特に何も、家で一日過ごしたよ」"
  }
 },
 "seguir": {
  "nuance": "「続ける」「従う」「フォローする（SNS）」の意味を持つ動詞（e→iの語根母音変化）。seguir+現在分詞で「〜し続けている」。",
  "etymology": "ラテン語sequi（後をついていく）に由来。",
  "synonyms": [
   "continuar（続ける、よりフォーマル）"
  ],
  "derived": [
   "seguidor（フォロワー）",
   "siguiente（次の）"
  ],
  "dialogue": {
   "es": "— ¿Sigues estudiando español?\n— Sí, sigo practicando cada día.",
   "ja": "「スペイン語まだ勉強してる？」「うん、毎日練習し続けてるよ」"
  }
 },
 "empezar": {
  "nuance": "「始める」の基本動詞（e→ieの語根母音変化）。empezar a+動詞の原形で「〜し始める」。",
  "etymology": "俗ラテン語*impitiare（〜の中に置く）に由来するとされる。",
  "synonyms": [
   "comenzar（始める、ほぼ同義）",
   "iniciar（開始する、フォーマル）"
  ],
  "derived": [
   "empiece（一部地域での名詞形）",
   "principio（始まり）"
  ],
  "dialogue": {
   "es": "— ¿Cuándo empieza la película?\n— Empieza a las ocho.",
   "ja": "「映画いつ始まるの？」「8時に始まるよ」"
  }
 },
 "terminar": {
  "nuance": "「終わる・終える」の基本動詞。terminar de+動詞の原形で「〜し終える」。",
  "etymology": "ラテン語terminare（境界を定める）に由来。",
  "synonyms": [
   "acabar（終わる、ほぼ同義）",
   "finalizar（終了する、フォーマル）"
  ],
  "derived": [
   "término（用語、終わり）",
   "terminal（終着駅、末期の）"
  ],
  "dialogue": {
   "es": "— ¿A qué hora terminas de trabajar?\n— Termino a las seis.",
   "ja": "「何時に仕事終わる？」「6時に終わるよ」"
  }
 },
 "empresa": {
  "nuance": "「会社」の一般的な語。compañíaもほぼ同義でよく使われる。",
  "etymology": "ラテン語prehendere（つかむ、企てる）由来のimprendereから派生。",
  "synonyms": [
   "compañía（会社）",
   "negocio（商売、ビジネス）"
  ],
  "derived": [
   "empresario（経営者）",
   "emprender（起業する、着手する）"
  ],
  "dialogue": {
   "es": "— ¿En qué empresa trabajas?\n— Trabajo en una empresa de tecnología.",
   "ja": "「どこの会社で働いているの？」「テクノロジー企業で働いているよ」"
  }
 },
 "problema": {
  "nuance": "-maで終わるギリシャ語源の男性名詞の代表例（el problema）。「-a＝女性名詞」という思い込みで間違えやすい。",
  "etymology": "ギリシャ語próblēma（前に投げられたもの→課題）に由来。",
  "synonyms": [
   "dificultad（困難）",
   "inconveniente（不都合）"
  ],
  "derived": [
   "problemático（問題のある）"
  ],
  "dialogue": {
   "es": "— Tengo un problema con mi computadora.\n— ¿Qué le pasa?",
   "ja": "「パソコンに問題があるんだ」「どうしたの？」"
  }
 },
 "mundo": {
  "nuance": "「世界」の基本語。todo el mundo（みんな、直訳「世界中」）という慣用句もよく使われる。",
  "etymology": "ラテン語mundus（世界、宇宙）に由来。",
  "synonyms": [],
  "derived": [
   "mundial（世界的な）"
  ],
  "dialogue": {
   "es": "— Todo el mundo está de acuerdo.\n— Qué bien, entonces empecemos.",
   "ja": "「みんな賛成しているよ」「よかった、それなら始めよう」"
  }
 },
 "país": {
  "nuance": "「国」の基本語。patria（祖国、感情的な響きが強い）とはニュアンスが異なる。",
  "etymology": "俗ラテン語pagensis（田舎、地方）に由来。",
  "synonyms": [
   "nación（国家、より政治的な響き）"
  ],
  "derived": [
   "paisaje（風景）",
   "paisano（同郷人）"
  ],
  "dialogue": {
   "es": "— ¿Cuántos países has visitado?\n— He visitado unos diez países.",
   "ja": "「何カ国訪れたことある？」「10カ国くらい訪れたことがあるよ」"
  }
 },
 "manera": {
  "nuance": "「方法・やり方」。de esta manera（このように）、de todas maneras（とにかく）などの決まり文句が多い。",
  "etymology": "俗ラテン語manaria（手の使い方）に由来、manoと同語源。",
  "synonyms": [
   "forma（方法）",
   "modo（方法、様式）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿De qué manera puedo ayudarte?\n— De cualquier manera, gracias.",
   "ja": "「どんな風に手伝えるかな？」「どんな形でもいいよ、ありがとう」"
  }
 },
 "momento": {
  "nuance": "「瞬間・時」。un momento（ちょっと待って）は日常会話の定番フレーズ。",
  "etymology": "ラテン語momentum（動き、重要性）に由来。",
  "synonyms": [
   "instante（瞬間、より短い一瞬）"
  ],
  "derived": [
   "momentáneo（一時的な）",
   "momentito（口語の指小形）"
  ],
  "dialogue": {
   "es": "— ¿Puedes esperar un momento?\n— Sí, claro, aquí espero.",
   "ja": "「ちょっと待ってもらえる？」「うん、もちろん、ここで待ってるよ」"
  }
 },
 "parte": {
  "nuance": "「部分」。en parte（部分的に）、por otra parte（一方で）など、前置詞と組み合わさった表現が多い。",
  "etymology": "ラテン語pars/partis（部分）に由来。",
  "synonyms": [
   "porción（部分、量的なニュアンス）"
  ],
  "derived": [
   "parcial（部分的な）",
   "partir（分ける、出発する）"
  ],
  "dialogue": {
   "es": "— ¿De qué parte de México eres?\n— Soy de la parte norte.",
   "ja": "「メキシコのどの地域出身？」「北部出身だよ」"
  }
 },
 "lugar": {
  "nuance": "「場所」の基本語。en lugar de（〜の代わりに）という前置詞的表現もよく使われる。",
  "etymology": "ラテン語localis（場所の）に由来。",
  "synonyms": [
   "sitio（場所、ほぼ同義）",
   "espacio（空間）"
  ],
  "derived": [
   "localizar（位置を特定する）"
  ],
  "dialogue": {
   "es": "— Este es mi lugar favorito.\n— Se ve muy tranquilo.",
   "ja": "「ここが私のお気に入りの場所なんだ」「とても静かそうだね」"
  }
 },
 "vida": {
  "nuance": "「人生・命」の基本語。toda la vida（生涯ずっと）のような表現にも使われる。",
  "etymology": "ラテン語vita（生命）に由来、vivir（生きる）と同語源。",
  "synonyms": [],
  "derived": [
   "vivir（生きる）",
   "vital（生命の、重要な）"
  ],
  "dialogue": {
   "es": "— ¿Cómo te va la vida?\n— Muy bien, sin quejas.",
   "ja": "「人生どう？」「とても順調、文句なしだよ」"
  }
 },
 "mano": {
  "nuance": "「手」。-oで終わるのに女性名詞という例外の代表格（la mano）。",
  "etymology": "ラテン語manus（手）に由来。",
  "synonyms": [],
  "derived": [
   "manejar（運転する、扱う）",
   "manual（手動の、マニュアル）"
  ],
  "dialogue": {
   "es": "— Dame la mano.\n— Aquí está, ten cuidado.",
   "ja": "「手を貸して」「はい、気をつけてね」"
  }
 },
 "cabeza": {
  "nuance": "「頭」の基本語。tener en la cabeza（頭にある、覚えている）のような慣用表現も多い。",
  "etymology": "俗ラテン語capitia（頭部の覆い）に由来。",
  "synonyms": [],
  "derived": [
   "encabezar（先頭に立つ）",
   "cabecera（頭部、見出し）"
  ],
  "dialogue": {
   "es": "— Me duele la cabeza.\n— Deberías descansar un poco.",
   "ja": "「頭が痛いんだ」「少し休んだ方がいいよ」"
  }
 },
 "corazón": {
  "nuance": "「心臓」だけでなく「心・愛情」の象徴としても使われる（de todo corazón＝心から）。",
  "etymology": "ラテン語cor/cordis（心臓）に由来。",
  "synonyms": [],
  "derived": [
   "cordial（心のこもった）",
   "acuerdo（一致、cordisと関連する語源説あり）"
  ],
  "dialogue": {
   "es": "— Te lo digo de todo corazón.\n— Gracias, significa mucho para mí.",
   "ja": "「心から言っているんだ」「ありがとう、とても意味があるよ」"
  }
 },
 "verdad": {
  "nuance": "「真実」。¿verdad?を文末につけると「〜だよね？」という確認の表現になる。",
  "etymology": "ラテン語veritas（真実）に由来。",
  "synonyms": [],
  "derived": [
   "verdadero（本当の）",
   "verificar（確認する）"
  ],
  "dialogue": {
   "es": "— Es muy inteligente, ¿verdad?\n— Sí, es verdad.",
   "ja": "「彼女はとても賢いよね？」「うん、本当だね」"
  }
 },
 "razón": {
  "nuance": "「理由」だけでなく、tener razón（正しい、道理にかなっている）という決まり文句も頻出。",
  "etymology": "ラテン語ratio（計算、理性）に由来。",
  "synonyms": [
   "motivo（動機、理由）"
  ],
  "derived": [
   "razonable（理にかなった）",
   "razonar（推論する）"
  ],
  "dialogue": {
   "es": "— Creo que tienes razón.\n— Gracias por entenderme.",
   "ja": "「君の言う通りだと思う」「分かってくれてありがとう」"
  }
 },
 "rojo": {
  "nuance": "「赤」の基本語。ponerse rojo（顔が赤くなる、恥ずかしさで）という慣用表現もある。",
  "etymology": "ラテン語russeus（赤みがかった）に由来。",
  "synonyms": [
   "colorado（一部地域で「赤」の意味、特にメキシコ）"
  ],
  "derived": [
   "rojizo（赤みがかった）",
   "enrojecer（赤くする・赤面する）"
  ],
  "dialogue": {
   "es": "— Me gusta tu vestido rojo.\n— Gracias, es mi color favorito.",
   "ja": "「その赤いワンピース素敵だね」「ありがとう、お気に入りの色なんだ」"
  }
 },
 "azul": {
  "nuance": "「青」の基本語。azul marino（ネイビー）、azul cielo（スカイブルー）のように別の語と組み合わせて色味を細かく表現できる。",
  "etymology": "アラビア語lāzaward（ラピスラズリ）に由来。",
  "synonyms": [],
  "derived": [
   "azulejo（タイル、青いタイルが語源）"
  ],
  "dialogue": {
   "es": "— El cielo está muy azul hoy.\n— Sí, es un día perfecto.",
   "ja": "「今日は空がとても青いね」「うん、最高の日だね」"
  }
 },
 "entender": {
  "nuance": "「理解する」の基本動詞（e→ieの語根母音変化）。comprenderとほぼ同義だが、entenderの方が口語的でよく使われる。",
  "etymology": "ラテン語intendere（〜に向ける）に由来。",
  "synonyms": [
   "comprender（理解する、ややフォーマル）"
  ],
  "derived": [
   "entendimiento（理解力）",
   "malentendido（誤解）"
  ],
  "dialogue": {
   "es": "— ¿Entiendes lo que digo?\n— Sí, entiendo perfectamente.",
   "ja": "「私の言っていること分かる？」「うん、完全に分かるよ」"
  }
 },
 "aprender": {
  "nuance": "「学ぶ・習得する」の基本動詞。estudiar（勉強する、行為そのもの）とは違い、aprenderは「身につく」という結果に焦点がある。",
  "etymology": "ラテン語apprehendere（つかみ取る）に由来。",
  "synonyms": [],
  "derived": [
   "aprendizaje（学習）",
   "aprendiz（見習い）"
  ],
  "dialogue": {
   "es": "— ¿Cuánto tiempo llevas aprendiendo español?\n— Llevo casi un año.",
   "ja": "「スペイン語を学んでどれくらい？」「もうすぐ1年になるよ」"
  }
 },
 "enseñar": {
  "nuance": "「教える」だけでなく「見せる」という意味も持つ動詞（enseñar una foto＝写真を見せる）。",
  "etymology": "俗ラテン語insignare（印をつける、示す）に由来。",
  "synonyms": [
   "mostrar（見せる、そちらの意味限定）"
  ],
  "derived": [
   "enseñanza（教え、教育）",
   "enseñante（教える人）"
  ],
  "dialogue": {
   "es": "— ¿Me enseñas a cocinar tacos?\n— ¡Claro, con gusto!",
   "ja": "「タコスの作り方教えてくれる？」「もちろん、喜んで！」"
  }
 },
 "escribir": {
  "nuance": "「書く」の基本動詞。過去分詞escritoが不規則（escribidoではない）という点に注意。",
  "etymology": "ラテン語scribere（書く）に由来。",
  "synonyms": [
   "redactar（執筆する、フォーマル）"
  ],
  "derived": [
   "escritor（作家）",
   "escritura（筆跡、文書）"
  ],
  "dialogue": {
   "es": "— ¿Le escribiste a tu abuela?\n— Sí, le escribí una carta larga.",
   "ja": "「おばあさんに手紙書いた？」「うん、長い手紙を書いたよ」"
  }
 },
 "leer": {
  "nuance": "「読む」の基本動詞。現在分詞がleyendo、点過去三人称がleyó/leyeronと、母音の連続を避けるためyが入る不規則な綴りに注意。",
  "etymology": "ラテン語legere（集める、読む）に由来。",
  "synonyms": [],
  "derived": [
   "lectura（読書）",
   "lector（読者）"
  ],
  "dialogue": {
   "es": "— ¿Qué estás leyendo?\n— Estoy leyendo una novela de misterio.",
   "ja": "「何読んでるの？」「ミステリー小説を読んでいるよ」"
  }
 },
 "escuchar": {
  "nuance": "「聞く・耳を傾ける」。単に音が聞こえるoírとは違い、意識して聞く、というニュアンスがある。",
  "etymology": "俗ラテン語auscultare（注意深く聞く）に由来。",
  "synonyms": [
   "oír（聞こえる、無意識の聴覚）"
  ],
  "derived": [
   "escucha（傾聴）"
  ],
  "dialogue": {
   "es": "— ¿Escuchaste las noticias hoy?\n— No, ¿qué pasó?",
   "ja": "「今日のニュース聞いた？」「いや、何があったの？」"
  }
 },
 "mirar": {
  "nuance": "「見る・眺める」。意識して見るという点でmirarを使い、単に視界に入るverとは区別される。",
  "etymology": "ラテン語mirari（驚嘆する）に由来、元は「不思議に思って見る」の意。",
  "synonyms": [
   "ver（見える、無意識の視覚）",
   "observar（観察する）"
  ],
  "derived": [
   "mirada（まなざし）",
   "admirar（賞賛する）"
  ],
  "dialogue": {
   "es": "— Mira esa puesta de sol.\n— Es hermosa.",
   "ja": "「あの夕日を見て」「きれいだね」"
  }
 },
 "buscar": {
  "nuance": "「探す」の基本動詞。英語のlook forと違い、前置詞なしで直接buscar algoと言う点に注意（buscar por ではない）。",
  "etymology": "起源は諸説あり、ケルト語系またはゲルマン語系の語とされる。",
  "synonyms": [
   "investigar（調査する、より深く探る）"
  ],
  "derived": [
   "búsqueda（検索、探索）",
   "buscador（検索エンジン）"
  ],
  "dialogue": {
   "es": "— ¿Qué buscas?\n— Busco mis llaves.",
   "ja": "「何探してるの？」「鍵を探しているんだ」"
  }
 },
 "perder": {
  "nuance": "「失う・なくす」だけでなく「（試合に）負ける」「（乗り物を）逃す」という意味にもなる（e→ieの語根母音変化）。",
  "etymology": "ラテン語perdere（完全に失う）に由来。",
  "synonyms": [],
  "derived": [
   "pérdida（損失）",
   "perdido（迷子の、失われた）"
  ],
  "dialogue": {
   "es": "— Perdimos el partido de fútbol.\n— Qué lástima, la próxima vez será.",
   "ja": "「サッカーの試合負けちゃった」「残念、次はきっとうまくいくよ」"
  }
 },
 "ganar": {
  "nuance": "「勝つ」だけでなく「（お金を）稼ぐ」という意味も持つ動詞。",
  "etymology": "ゲルマン語系の語（家畜の世話をする→利益を得る、の意味変化）に由来。",
  "synonyms": [],
  "derived": [
   "ganancia（利益）",
   "ganador（勝者）"
  ],
  "dialogue": {
   "es": "— ¿Cuánto ganas al mes?\n— Prefiero no decirlo, pero me alcanza bien.",
   "ja": "「月にいくら稼いでるの？」「言わないでおくけど、十分な額だよ」"
  }
 },
 "jugar": {
  "nuance": "「遊ぶ・（スポーツを）する」の基本動詞（u→ueという珍しい語根母音変化）。jugar a+スポーツ名でよく使われる。",
  "etymology": "ラテン語jocari（冗談を言う、遊ぶ）に由来。",
  "synonyms": [],
  "derived": [
   "juego（遊び、ゲーム）",
   "jugador（選手、プレーヤー）"
  ],
  "dialogue": {
   "es": "— ¿Juegas al fútbol?\n— Sí, juego todos los fines de semana.",
   "ja": "「サッカーする？」「うん、毎週末プレーしているよ」"
  }
 },
 "dormir": {
  "nuance": "「眠る」の基本動詞（o→ueの語根母音変化）。再帰形dormirseは「眠りにつく」という瞬間的な動作を表す。",
  "etymology": "ラテン語dormire（眠る）に由来。",
  "synonyms": [],
  "derived": [
   "dormitorio（寝室）",
   "sueño（眠り、夢）"
  ],
  "dialogue": {
   "es": "— ¿Cuántas horas dormiste anoche?\n— Dormí solo cinco horas.",
   "ja": "「昨夜何時間寝た？」「たった5時間しか寝てないよ」"
  }
 },
 "bonito": {
  "nuance": "「かわいい・きれいな」。lindo（かわいい、ラテンアメリカでよく使われる）とほぼ同義。",
  "etymology": "buenoの指小形bonitoから発展したとされる。",
  "synonyms": [
   "lindo（かわいい、特にラテンアメリカ）",
   "precioso（とても美しい、より強調）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Qué bonito jardín tienes.\n— Gracias, lo cuido con mucho cariño.",
   "ja": "「素敵な庭だね」「ありがとう、とても大事に世話しているんだ」"
  }
 },
 "fácil": {
  "nuance": "「簡単な」の基本語。es fácil que+接続法という構文もある。",
  "etymology": "ラテン語facilis（しやすい）に由来。",
  "synonyms": [
   "sencillo（シンプルな）"
  ],
  "derived": [
   "facilidad（容易さ）",
   "facilitar（容易にする）"
  ],
  "dialogue": {
   "es": "— Este examen fue muy fácil.\n— Qué envidia, el mío fue difícil.",
   "ja": "「この試験とても簡単だった」「うらやましい、私のは難しかったよ」"
  }
 },
 "difícil": {
  "nuance": "「難しい」の基本語。es difícil que+接続法という構文でもよく使われる。",
  "etymology": "ラテン語difficilis（しにくい）に由来。",
  "synonyms": [
   "complicado（複雑な）"
  ],
  "derived": [
   "dificultad（困難）",
   "dificultar（困難にする）"
  ],
  "dialogue": {
   "es": "— El examen estuvo bastante difícil.\n— Sí, yo tampoco terminé a tiempo.",
   "ja": "「試験かなり難しかったね」「うん、私も時間内に終わらなかったよ」"
  }
 },
 "madre": {
  "nuance": "「母」の基本語。mamáはより親しみのある呼び方。メキシコの口語では特別な慣用表現も多い単語。",
  "etymology": "ラテン語mater（母）に由来。",
  "synonyms": [
   "mamá（お母さん、より親しみやすい）"
  ],
  "derived": [
   "maternal（母性的な）",
   "madrina（名付け親、代母）"
  ],
  "dialogue": {
   "es": "— Mi madre cocina delicioso.\n— La mía también, es un talento familiar.",
   "ja": "「私の母は料理が美味しいんだ」「私の母もだよ、家族の才能だね」"
  }
 },
 "padre": {
  "nuance": "「父」の基本語。papáはより親しみのある呼び方。メキシコの口語では「padre」が「かっこいい、いいね」という形容詞的スラングとしても使われる（¡Qué padre!）。",
  "etymology": "ラテン語pater（父）に由来。",
  "synonyms": [
   "papá（お父さん、より親しみやすい）"
  ],
  "derived": [
   "paternal（父性的な）",
   "padrino（名付け親、代父）"
  ],
  "dialogue": {
   "es": "— Mi padre trabaja en un banco.\n— ¿Ah sí? El mío también.",
   "ja": "「私の父は銀行で働いているんだ」「あ、そうなの？私の父もだよ」"
  }
 },
 "hermano": {
  "nuance": "「兄弟」の基本語。年上・年下の区別なくhermanoと呼び、必要なら「hermano mayor（兄）」「hermano menor（弟）」で区別する。",
  "etymology": "ラテン語germanus（実の、同じ両親の）に由来。",
  "synonyms": [],
  "derived": [
   "hermandad（兄弟愛、団体）",
   "hermanastro（異父・異母兄弟）"
  ],
  "dialogue": {
   "es": "— ¿Tienes hermanos mayores?\n— Sí, tengo un hermano mayor.",
   "ja": "「お兄さんいる？」「うん、兄が一人いるよ」"
  }
 },
 "libro": {
  "nuance": "「本」の基本語。「libre（自由な）」と綴りが似ているが無関係な語源。",
  "etymology": "ラテン語liber（木の内皮、書物の材料）に由来。",
  "synonyms": [],
  "derived": [
   "librería（本屋）",
   "libreta（ノート）"
  ],
  "dialogue": {
   "es": "— ¿Qué libro estás leyendo?\n— Un libro sobre la historia de México.",
   "ja": "「何の本読んでるの？」「メキシコの歴史についての本だよ」"
  }
 },
 "puerta": {
  "nuance": "「ドア」の基本語。puerta de embarque（搭乗ゲート）のように空港関連の語にも使われる。",
  "etymology": "ラテン語porta（門、入口）に由来。",
  "synonyms": [],
  "derived": [
   "portero（門番、ゴールキーパー）",
   "portón（大きな門）"
  ],
  "dialogue": {
   "es": "— ¿Puedes cerrar la puerta?\n— Sí, ya la cierro.",
   "ja": "「ドア閉めてもらえる？」「うん、今閉めるよ」"
  }
 },
 "ventana": {
  "nuance": "「窓」の基本語。ventanilla（小窓）は、乗り物の窓や窓口を指すのによく使われる派生語。",
  "etymology": "ラテン語ventus（風）に由来、風を通す穴が原義。",
  "synonyms": [],
  "derived": [
   "ventanilla（小窓、乗り物の窓、窓口）"
  ],
  "dialogue": {
   "es": "— Abre la ventana, hace calor.\n— Buena idea, así entra el aire.",
   "ja": "「窓開けて、暑いよ」「いい考えだね、それで風が入るね」"
  }
 },
 "silla": {
  "nuance": "「椅子」の基本語。silla de ruedas（車椅子）のような複合語もよく使われる。",
  "etymology": "ラテン語sella（座席）に由来。",
  "synonyms": [
   "asiento（座席、より広い意味）"
  ],
  "derived": [
   "sillón（アームチェア、大きな椅子）"
  ],
  "dialogue": {
   "es": "— Esta silla es muy cómoda.\n— Sí, la compré la semana pasada.",
   "ja": "「この椅子とても座り心地いいね」「うん、先週買ったんだ」"
  }
 },
 "hijo": {
  "nuance": "「息子」。複数形hijosは「息子たち」だけでなく「子供たち（男女混合）」という意味でも使われる。",
  "etymology": "ラテン語filius（息子）に由来。",
  "synonyms": [],
  "derived": [
   "hijastro（継子）",
   "ahijado（名付け子）"
  ],
  "dialogue": {
   "es": "— ¿Cuántos hijos tienes?\n— Tengo dos hijos y una hija.",
   "ja": "「子供何人いる？」「息子が2人と娘が1人いるよ」"
  }
 },
 "perro": {
  "nuance": "「犬」の基本語。メキシコの口語ではperro（きつい、大変な）という形容詞的な使い方もある（trabajo perro＝きつい仕事）。",
  "etymology": "起源は不明だが、ラテン語canisに由来する語ではない珍しいケース。",
  "synonyms": [],
  "derived": [
   "perrera（犬小屋）",
   "perruno（犬の）"
  ],
  "dialogue": {
   "es": "— ¿Tienes perro o gato?\n— Tengo un perro, se llama Max.",
   "ja": "「犬派？猫派？」「犬を飼ってるよ、マックスっていうんだ」"
  }
 },
 "gato": {
  "nuance": "「猫」の基本語。メキシコシティの人を指す口語的な呼び名としても使われることがある（chilango等と並ぶ俗称の一つ）。",
  "etymology": "俗ラテン語cattus（猫）に由来。",
  "synonyms": [],
  "derived": [
   "gatito（子猫）"
  ],
  "dialogue": {
   "es": "— Mi gato duerme todo el día.\n— Los gatos son así, muy tranquilos.",
   "ja": "「うちの猫は一日中寝てるよ」「猫ってそういうものだよね、とても穏やかで」"
  }
 },
 "qué": {
  "nuance": "疑問詞「何」の基本語。アクセントなしのqueは「〜すること」という関係代名詞・接続詞になる、別の単語。",
  "etymology": "ラテン語quid（何）に由来。",
  "synonyms": [],
  "derived": [
   "porqué（名詞・理由）",
   "qué tal（挨拶表現）"
  ],
  "dialogue": {
   "es": "— ¿Qué haces este fin de semana?\n— Todavía no sé, quizás descanso.",
   "ja": "「今週末何するの？」「まだ分からない、たぶん休むかな」"
  }
 },
 "quién": {
  "nuance": "「誰」の基本疑問詞。複数形quiénesもある（英語のwhoにはない区別）。",
  "etymology": "ラテン語quis（誰）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Quién es esa persona?\n— Es mi nueva compañera de trabajo.",
   "ja": "「あの人誰？」「新しい同僚だよ」"
  }
 },
 "cómo": {
  "nuance": "「どのように」の基本疑問詞。¿Cómo?だけで「え、何て言った？」と聞き返す表現にもなる。",
  "etymology": "ラテン語quomodo（どのような方法で）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cómo se dice esto en español?\n— Se dice 'mesa'.",
   "ja": "「これはスペイン語で何て言うの？」「『メサ』って言うよ」"
  }
 },
 "cuándo": {
  "nuance": "「いつ」の基本疑問詞。アクセントなしのcuandoは「〜するとき」という接続詞になる。",
  "etymology": "ラテン語quando（いつ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cuándo es tu cumpleaños?\n— Es en marzo.",
   "ja": "「誕生日いつ？」「3月だよ」"
  }
 },
 "dónde": {
  "nuance": "「どこ」の基本疑問詞。¿De dónde eres?（出身はどこ？）は自己紹介の定番フレーズ。",
  "etymology": "ラテン語de unde（どこから）に由来。",
  "synonyms": [],
  "derived": [
   "adónde（どこへ、方向を強調）"
  ],
  "dialogue": {
   "es": "— ¿Dónde está la estación?\n— Está a dos cuadras de aquí.",
   "ja": "「駅はどこ？」「ここから2ブロック先だよ」"
  }
 },
 "por qué": {
  "nuance": "「なぜ」の疑問表現。答えるときはporque（つなげて一語、アクセントなし）を使うという綴りの違いに注意。",
  "etymology": "por（〜のために）+ qué（何）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "porque（接続詞・なぜなら）",
   "porqué（名詞・理由）"
  ],
  "dialogue": {
   "es": "— ¿Por qué llegaste tarde?\n— Porque el tráfico estaba muy pesado.",
   "ja": "「なんで遅れたの？」「交通渋滞がひどかったから」"
  }
 },
 "hoy": {
  "nuance": "「今日」の基本語。hoy en día（最近は、今日では）という慣用表現もよく使われる。",
  "etymology": "ラテン語hodie（この日に）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué planes tienes para hoy?\n— Hoy voy a descansar en casa.",
   "ja": "「今日の予定は？」「今日は家でゆっくりするつもり」"
  }
 },
 "mañana": {
  "nuance": "「明日」と「朝」の両方の意味を持つ単語。見分け方のコツ：冠詞（la）がついてla mañanaの形なら「朝」（名詞）、単独でmañanaだけなら副詞として「明日」を意味することがほとんど。mañana por la mañana（明日の朝）のように組み合わさることも多い。",
  "etymology": "俗ラテン語maneana（朝の）に由来。",
  "synonyms": [],
  "derived": [
   "mañanero（朝型の）"
  ],
  "dialogue": {
   "es": "— ¿Nos vemos mañana?\n— Sí, mañana por la tarde.",
   "ja": "「明日会う？」「うん、明日の午後にね」"
  }
 },
 "ayer": {
  "nuance": "「昨日」の基本語。点過去とセットで使われることが非常に多い時間表現。",
  "etymology": "ラテン語ad heri（昨日に）に由来。",
  "synonyms": [],
  "derived": [
   "anteayer（一昨日）"
  ],
  "dialogue": {
   "es": "— ¿Qué hiciste ayer?\n— Ayer fui al cine con mis amigos.",
   "ja": "「昨日何した？」「昨日は友達と映画に行ったよ」"
  }
 },
 "quizás": {
  "nuance": "「たぶん・もしかしたら」。quizás/quizá+接続法という組み合わせもよく使われる（不確実性が強いとき）。",
  "etymology": "qui sabe（誰が知ろうか）が縮まったとされる表現。",
  "synonyms": [
   "tal vez（たぶん、ほぼ同義）",
   "a lo mejor（口語でよく使う）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Vienes a la fiesta?\n— Quizás, todavía no estoy seguro.",
   "ja": "「パーティー来る？」「たぶんね、まだ確定じゃないけど」"
  }
 },
 "entonces": {
  "nuance": "「それなら・その時」。会話の中で話をつなげる接続詞としても非常によく使われる（¿Entonces qué hacemos?＝それでどうする？）。",
  "etymology": "ラテン語in tunc（その時に）に由来。",
  "synonyms": [
   "así que（だから）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— No tengo dinero hoy.\n— Entonces vamos otro día.",
   "ja": "「今日お金がないんだ」「それなら別の日に行こう」"
  }
 },
 "alegría": {
  "nuance": "「喜び」の基本語。con alegría（喜んで）、salto de alegría（うれしくて飛び跳ねる）のような表現でも使われる。",
  "etymology": "ラテン語alacer（活発な、うれしい）に由来。",
  "synonyms": [
   "felicidad（幸福）",
   "gozo（喜び、ややフォーマル・文学的）"
  ],
  "derived": [
   "alegre（陽気な）",
   "alegrarse（喜ぶ）"
  ],
  "dialogue": {
   "es": "— Qué alegría verte de nuevo.\n— Igual digo, ha pasado tiempo.",
   "ja": "「また会えて嬉しいよ」「私もだよ、久しぶりだね」"
  }
 },
 "tristeza": {
  "nuance": "「悲しみ」の基本語。con tristeza（悲しげに）という副詞的表現もよく使われる。",
  "etymology": "ラテン語tristitia（悲しみ）に由来。",
  "synonyms": [
   "pena（悲しみ、残念さ）"
  ],
  "derived": [
   "triste（悲しい）",
   "entristecer（悲しませる）"
  ],
  "dialogue": {
   "es": "— Siento mucha tristeza por la noticia.\n— Yo también, es difícil de aceptar.",
   "ja": "「その知らせにとても悲しい気持ちだよ」「私もだよ、受け止めるのが難しいね」"
  }
 },
 "miedo": {
  "nuance": "「恐怖」という名詞。tener miedo（怖い）という決まった動詞との組み合わせで使うことが多い（estar miedoとは言わない）。asustado（怖がっている、形容詞）との違い：miedoはより一般的・持続的な恐怖感（暗闇が怖い、高所が怖いなど）を表す名詞そのもの。一方asustadoは、何か具体的な出来事に驚かされて一時的に怖くなっている状態を表す形容詞（estar asustado＝驚いて怖がっている）。",
  "etymology": "ラテン語metus（恐れ）に由来。",
  "synonyms": [
   "temor（恐れ、ややフォーマル）"
  ],
  "derived": [
   "miedoso（怖がりな）",
   "temer（恐れる）"
  ],
  "dialogue": {
   "es": "— Le tengo miedo a las arañas.\n— A mí también, son horribles.",
   "ja": "「クモが怖いんだ」「私もだよ、あれは苦手」"
  }
 },
 "esperanza": {
  "nuance": "「希望」。tener esperanza de que+接続法（〜であることを望む）という構文でよく使われる。",
  "etymology": "esperar（待つ・望む）と同語源、ラテン語sperare（望む）に由来。",
  "synonyms": [],
  "derived": [
   "esperar（待つ・望む）",
   "esperanzador（希望を与える）"
  ],
  "dialogue": {
   "es": "— Tengo esperanza de que todo salga bien.\n— Yo también confío en eso.",
   "ja": "「すべてうまくいくことを願っているよ」「私もそう信じているよ」"
  }
 },
 "paciencia": {
  "nuance": "「忍耐」。tener paciencia（我慢する）、perder la paciencia（我慢の限界がくる）などの表現でよく使われる。",
  "etymology": "ラテン語patientia（耐えること）に由来。",
  "synonyms": [],
  "derived": [
   "paciente（忍耐強い、患者）",
   "impaciencia（せっかち）"
  ],
  "dialogue": {
   "es": "— Ten paciencia, ya casi llegamos.\n— Está bien, puedo esperar.",
   "ja": "「我慢して、もうすぐ着くよ」「大丈夫、待てるよ」"
  }
 },
 "elote": {
  "nuance": "メキシコで屋台の定番、蒸し・茹でとうもろこしにマヨネーズ・チーズ・チリパウダーをかけた軽食。棒にささずカップに入れたものはesquites（エスキテス）と呼ばれる。",
  "etymology": "ナワトル語elotl（とうもろこしの穂軸）に由来。",
  "synonyms": [
   "esquites（カップ入りのもの）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Quieres un elote con todo?\n— Sí, con mucho chile por favor.",
   "ja": "「全部乗せのエロテ食べる？」「うん、チリたっぷりでお願い」"
  }
 },
 "torta": {
  "nuance": "メキシコでは「サンドイッチ」を指す（スペインでは「ケーキ」の意味になるので注意、地域差が大きい単語）。",
  "etymology": "ラテン語torta（丸いパン）に由来。",
  "synonyms": [],
  "derived": [
   "tortero（トルタを作る人・売る人）"
  ],
  "dialogue": {
   "es": "— Quiero una torta de jamón.\n— Enseguida se la preparo.",
   "ja": "「ハムのトルタください」「すぐにご用意しますね」"
  }
 },
 "horchata": {
  "nuance": "米や桂皮(シナモン)などから作る甘い冷たい飲み物。メキシコの定番の水（agua fresca）の一種。",
  "etymology": "諸説あるが、スペインで大麦から作られていた飲み物hordeataに由来するという説が有力（ラテン語hordeum＝大麦）。メキシコでは主に米で作られるが、語源となった飲み物とは原材料が異なる点に注意。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Me das un vaso de horchata?\n— Claro, está bien fría.",
   "ja": "「オルチャータ一杯もらえる？」「もちろん、よく冷えているよ」"
  }
 },
 "se me hizo tarde": {
  "nuance": "「遅くなってしまった」という、自分の意図とは関係なく起きたことのように表現する再帰的な言い回し。se me（〜私にとって）という構造が英語や日本語にはない発想。",
  "etymology": "hacerse tarde（遅くなる）+ 間接目的語代名詞me の組み合わせ。",
  "synonyms": [
   "llegué tarde（単純に「遅れた」と言う表現）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Perdón, se me hizo tarde.\n— No te preocupes, yo también acabo de llegar.",
   "ja": "「ごめん、遅くなっちゃった」「気にしないで、私もちょうど着いたところ」"
  }
 },
 "no me lo esperaba": {
  "nuance": "「それは予想していなかった」という驚きを表す決まり文句。esperar（待つ・予想する）+間接目的語me+lo（それを）の組み合わせ。",
  "etymology": "esperar（予想する）の否定形＋代名詞の組み合わせ。",
  "synonyms": [
   "qué sorpresa（なんて驚き）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¡Gané el premio!\n— ¡Qué bien, no me lo esperaba!",
   "ja": "「賞をもらったんだ！」「すごいね、それは予想してなかったよ！」"
  }
 },
 "buenas tardes": {
  "nuance": "正午過ぎから日没あたりまで使う挨拶。何時から何時までという厳密な区切りはなく、地域や感覚による。",
  "etymology": "bueno（良い）+ tarde（午後）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "tarde（午後、遅い）"
  ],
  "dialogue": {
   "es": "— Buenas tardes, ¿en qué le puedo ayudar?\n— Buenas tardes, busco una camisa.",
   "ja": "「こんにちは、何かお手伝いできますか」「こんにちは、シャツを探しています」"
  }
 },
 "buenas noches": {
  "nuance": "日没後の挨拶「こんばんは」と、寝る前の「おやすみ」の両方に使える便利な表現。",
  "etymology": "bueno（良い）+ noche（夜）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "noche（夜）"
  ],
  "dialogue": {
   "es": "— Buenas noches, que duermas bien.\n— Igualmente, hasta mañana.",
   "ja": "「おやすみ、よく眠ってね」「あなたもね、また明日」"
  }
 },
 "¿cómo estás?": {
  "nuance": "友人・親しい相手への「元気？」。目上の人にはformalな¿Cómo está usted?を使う。",
  "etymology": "cómo（どのように）+ estar（一時的な状態）の組み合わせ。",
  "synonyms": [
   "¿qué tal?（もっとカジュアル）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cómo estás hoy?\n— Bien, gracias, ¿y tú?",
   "ja": "「今日は元気？」「元気だよ、ありがとう、君は？」"
  }
 },
 "mucho gusto": {
  "nuance": "初対面のときの決まり文句「はじめまして」。encantado/encantadaも同じ場面で使える（性別で語尾が変わる）。",
  "etymology": "mucho（たくさんの）+ gusto（喜び）で「大変うれしいです」が直訳。",
  "synonyms": [
   "encantado/encantada（会えて光栄です）"
  ],
  "derived": [
   "gustar（好きだ）"
  ],
  "dialogue": {
   "es": "— Soy Ana, mucho gusto.\n— Mucho gusto, Ana, soy Carlos.",
   "ja": "「アナです、はじめまして」「はじめまして、アナさん、カルロスです」"
  }
 },
 "hasta luego": {
  "nuance": "「またね」。adiósよりカジュアルで、また会う予定がある相手によく使う。",
  "etymology": "hasta（〜まで）+ luego（後で）の組み合わせ。",
  "synonyms": [
   "nos vemos（またね）",
   "hasta pronto（また近いうちに）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Me tengo que ir, hasta luego.\n— Hasta luego, cuídate.",
   "ja": "「もう行かなきゃ、またね」「またね、気をつけて」"
  }
 },
 "adiós": {
  "nuance": "「さようなら」。長期間・二度と会わないかもしれないニュアンスがあり、hasta luegoより重みがある。",
  "etymology": "a Dios（神へ、神に委ねて）が縮まった表現。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Bueno, ya me voy, adiós.\n— Adiós, que te vaya bien.",
   "ja": "「じゃあ、もう行くね、さようなら」「さようなら、うまくいくといいね」"
  }
 },
 "¿qué tal?": {
  "nuance": "友人へのカジュアルな挨拶「調子どう？」。¿Qué tal el fin de semana?（週末どうだった？）のように話題を続けて聞くのにも使える。",
  "etymology": "qué（何）+ tal（そのような）の組み合わせ。",
  "synonyms": [
   "¿qué onda?（メキシコの口語）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué tal tu día?\n— Bastante bien, gracias.",
   "ja": "「今日はどうだった？」「かなり良かったよ、ありがとう」"
  }
 },
 "uno": {
  "nuance": "数字の「1」。名詞の前で使うときはun/unaに変化する（un libro、una casa）。",
  "etymology": "ラテン語unus（一つの）に由来。",
  "synonyms": [],
  "derived": [
   "único（唯一の）",
   "unir（結びつける）"
  ],
  "dialogue": {
   "es": "— ¿Cuántos hermanos tienes?\n— Solo uno.",
   "ja": "「兄弟は何人いる？」「一人だけだよ」"
  }
 },
 "dos": {
  "nuance": "数字の「2」。性・数変化しない数詞（unoだけ特別）。",
  "etymology": "ラテン語duo（二つの）に由来。",
  "synonyms": [],
  "derived": [
   "doble（二倍の）",
   "docena（1ダース）"
  ],
  "dialogue": {
   "es": "— Quiero dos boletos, por favor.\n— Claro, son 200 pesos.",
   "ja": "「チケットを2枚ください」「かしこまりました、200ペソです」"
  }
 },
 "tres": {
  "nuance": "数字の「3」の基本語。",
  "etymology": "ラテン語tres（三つの）に由来。",
  "synonyms": [],
  "derived": [
   "tercero（3番目の）",
   "triple（三倍の）"
  ],
  "dialogue": {
   "es": "— Llegaré en tres minutos.\n— Perfecto, te espero.",
   "ja": "「3分で着くよ」「わかった、待ってるね」"
  }
 },
 "cuatro": {
  "nuance": "数字の「4」の基本語。",
  "etymology": "ラテン語quattuor（四つの）に由来。",
  "synonyms": [],
  "derived": [
   "cuarto（4番目の、部屋）",
   "cuadrado（正方形）"
  ],
  "dialogue": {
   "es": "— Somos cuatro en mi familia.\n— Qué bien, nosotros somos tres.",
   "ja": "「私の家族は4人だよ」「いいね、私たちは3人だよ」"
  }
 },
 "cinco": {
  "nuance": "数字の「5」の基本語。",
  "etymology": "ラテン語quinque（五つの）に由来。",
  "synonyms": [],
  "derived": [
   "quinto（5番目の）"
  ],
  "dialogue": {
   "es": "— Nos vemos a las cinco.\n— Perfecto, ahí estaré.",
   "ja": "「5時に会おう」「わかった、そこにいるよ」"
  }
 },
 "diez": {
  "nuance": "数字の「10」の基本語。切りの良い数として色々な表現に使われる。",
  "etymology": "ラテン語decem（十）に由来。",
  "synonyms": [],
  "derived": [
   "décimo（10番目の）",
   "década（10年間）"
  ],
  "dialogue": {
   "es": "— ¿Cuántos años llevas aquí?\n— Diez años ya.",
   "ja": "「ここに来てどれくらい？」「もう10年になるよ」"
  }
 },
 "veinte": {
  "nuance": "数字の「20」の基本語。21以降はveintiuno, veintidósのように1語につながる。",
  "etymology": "ラテン語viginti（二十）に由来。",
  "synonyms": [],
  "derived": [
   "veintena（20個くらい）"
  ],
  "dialogue": {
   "es": "— Tengo veinte años.\n— Eres muy joven todavía.",
   "ja": "「20歳なんだ」「まだとても若いね」"
  }
 },
 "cien": {
  "nuance": "数字の「100」。ちょうど100のときはcien、101以降はciento uno等になる（cien→ciento）。",
  "etymology": "ラテン語centum（百）に由来。",
  "synonyms": [],
  "derived": [
   "centenar（100個くらい）",
   "por ciento（パーセント）"
  ],
  "dialogue": {
   "es": "— Esto cuesta cien pesos.\n— Está bien, aquí tienes.",
   "ja": "「これは100ペソです」「わかりました、どうぞ」"
  }
 },
 "mil": {
  "nuance": "数字の「1000」。「un mil」とは言わず、単にmilと言う（他の数字は「un millón」のようにunをつける）。",
  "etymology": "ラテン語mille（千）に由来。",
  "synonyms": [],
  "derived": [
   "milenio（千年紀）",
   "miles（何千もの）"
  ],
  "dialogue": {
   "es": "— Ahorré mil pesos este mes.\n— ¡Qué disciplina!",
   "ja": "「今月1000ペソ貯金したよ」「なんて計画的なんだ！」"
  }
 },
 "lunes": {
  "nuance": "「月曜日」。スペイン語の曜日は小文字で書き、性別はすべて男性名詞（el lunes）。",
  "etymology": "ラテン語lunae dies（月の日）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Trabajas los lunes?\n— Sí, de lunes a viernes.",
   "ja": "「月曜日は働いてるの？」「うん、月曜から金曜まで」"
  }
 },
 "martes": {
  "nuance": "「火曜日」。martes y trece（13日の火曜日）はスペイン語圏で英語の「13日の金曜日」に相当する縁起の悪い日とされる。",
  "etymology": "ラテン語Martis dies（軍神マルスの日）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Tienes clase los martes?\n— Sí, tengo clase de español.",
   "ja": "「火曜日は授業ある？」「うん、スペイン語の授業があるよ」"
  }
 },
 "miércoles": {
  "nuance": "「水曜日」。週の真ん中の日として、日本語の「週の中日」に近い感覚で使われることもある。",
  "etymology": "ラテン語Mercurii dies（商業神メルクリウスの日）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Ya es miércoles, la semana va rápido.\n— Sí, ya casi es viernes.",
   "ja": "「もう水曜日だね、一週間があっという間」「うん、もうすぐ金曜日だね」"
  }
 },
 "jueves": {
  "nuance": "「木曜日」。特に慣用表現は少ないが、週末前日として楽しみにされる曜日。",
  "etymology": "ラテン語Iovis dies（主神ユピテルの日）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué haces el jueves?\n— Todavía no tengo planes.",
   "ja": "「木曜日は何するの？」「まだ予定がないよ」"
  }
 },
 "viernes": {
  "nuance": "「金曜日」。¡Por fin viernes!（やっと金曜日！）のように、週末の始まりとして喜ばれる曜日。",
  "etymology": "ラテン語Veneris dies（美の女神ウェヌスの日）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¡Por fin es viernes!\n— Sí, ya quiero que sea fin de semana.",
   "ja": "「やっと金曜日だ！」「うん、もう週末になってほしいよ」"
  }
 },
 "sábado": {
  "nuance": "「土曜日」。週末の代表的な曜日で、パーティーや外出の予定によく使われる。",
  "etymology": "ヘブライ語shabbat（安息日）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Tienes planes para el sábado?\n— Sí, voy a una fiesta.",
   "ja": "「土曜日の予定は？」「うん、パーティーに行くよ」"
  }
 },
 "domingo": {
  "nuance": "「日曜日」。多くのスペイン語圏の国で、家族で集まって食事をする日として大切にされている。",
  "etymology": "ラテン語dies dominicus（主の日）に由来。",
  "synonyms": [],
  "derived": [
   "dominical（日曜の）"
  ],
  "dialogue": {
   "es": "— Los domingos como con mi familia.\n— Qué lindo, nosotros también.",
   "ja": "「日曜日は家族と食事をするんだ」「素敵だね、私たちもだよ」"
  }
 },
 "primavera": {
  "nuance": "「春」。花や新しい始まりを連想させる季節として、比喩的にも「若さ」の意味で使われることがある。",
  "etymology": "ラテン語primus（最初の）+ ver（春）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me encanta la primavera.\n— A mí también, las flores son hermosas.",
   "ja": "「春が大好きなんだ」「私もだよ、花がきれいだよね」"
  }
 },
 "verano": {
  "nuance": "「夏」。メキシコを含む多くの地域で、学校の長期休みの時期でもある。",
  "etymology": "ラテン語veranum（春に関する、後に夏の意味に転じた）に由来。",
  "synonyms": [],
  "derived": [
   "veranear（避暑に行く）"
  ],
  "dialogue": {
   "es": "— ¿Qué planes tienes para el verano?\n— Voy a viajar con mi familia.",
   "ja": "「夏の予定は？」「家族と旅行するつもりだよ」"
  }
 },
 "otoño": {
  "nuance": "「秋」。メキシコの死者の日(11月上旬)もこの季節の終わりごろに祝われる。",
  "etymology": "ラテン語autumnus（秋）に由来。",
  "synonyms": [],
  "derived": [
   "otoñal（秋の）"
  ],
  "dialogue": {
   "es": "— El otoño es mi estación favorita.\n— ¿Por qué te gusta tanto?",
   "ja": "「秋が一番好きな季節なんだ」「どうしてそんなに好きなの？」"
  }
 },
 "invierno": {
  "nuance": "「冬」。メキシコの多くの地域は温暖なため、日本ほど寒くならないことも多い。",
  "etymology": "ラテン語hibernum（冬の）に由来。",
  "synonyms": [],
  "derived": [
   "invernal（冬の）",
   "invernadero（温室）"
  ],
  "dialogue": {
   "es": "— En invierno hace mucho frío aquí.\n— ¿De verdad? Pensé que México era cálido.",
   "ja": "「ここは冬とても寒いんだ」「本当に？メキシコは暖かいと思っていたよ」"
  }
 },
 "verde": {
  "nuance": "「緑」の基本語。estar verde（未熟である）という慣用表現もある。",
  "etymology": "ラテン語viridis（緑の）に由来。",
  "synonyms": [],
  "derived": [
   "verdura（野菜）",
   "verdor（緑の生い茂り）"
  ],
  "dialogue": {
   "es": "— Me gusta el color verde.\n— A mí también, es relajante.",
   "ja": "「緑色が好きなんだ」「私もだよ、落ち着くよね」"
  }
 },
 "amarillo": {
  "nuance": "「黄色」の基本語。メキシコのタクシーなど、黄色が使われる場面も多い。",
  "etymology": "俗ラテン語amarellus（少し苦い→黄色っぽい、の意味変化）に由来。",
  "synonyms": [],
  "derived": [
   "amarillento（黄色っぽい）"
  ],
  "dialogue": {
   "es": "— Esa flor amarilla es bonita.\n— Sí, es un girasol.",
   "ja": "「あの黄色い花きれいだね」「うん、ひまわりだよ」"
  }
 },
 "negro": {
  "nuance": "「黒」の基本語。mercado negro（闇市場）のような比喩表現にも使われる。",
  "etymology": "ラテン語niger（黒い）に由来。",
  "synonyms": [],
  "derived": [
   "negrura（黒さ）",
   "ennegrecer（黒くする）"
  ],
  "dialogue": {
   "es": "— Voy a usar el vestido negro.\n— Te va a quedar muy bien.",
   "ja": "「黒いワンピースを着るつもり」「すごく似合うと思うよ」"
  }
 },
 "blanco": {
  "nuance": "「白」の基本語。en blanco（真っ白、頭が真っ白になる）という慣用表現もある。",
  "etymology": "ゲルマン語系の語blank（輝く）に由来。",
  "synonyms": [],
  "derived": [
   "blancura（白さ）",
   "blanquear（白くする）"
  ],
  "dialogue": {
   "es": "— Me quedé en blanco durante el examen.\n— Te entiendo, a mí me pasa igual.",
   "ja": "「試験中、頭が真っ白になっちゃった」「わかるよ、私も同じことがあるよ」"
  }
 },
 "gris": {
  "nuance": "「灰色」の基本語。天気が曇っているときにも使われる（un día gris＝どんよりした日）。",
  "etymology": "ゲルマン語系の語gris（灰色）に由来。",
  "synonyms": [],
  "derived": [
   "grisáceo（灰色がかった）"
  ],
  "dialogue": {
   "es": "— El cielo está muy gris hoy.\n— Sí, parece que va a llover.",
   "ja": "「今日は空がとても曇っているね」「うん、雨が降りそうだね」"
  }
 },
 "rosa": {
  "nuance": "「ピンク」の意味と「バラの花」の両方の意味を持つ単語。文脈で判断する。",
  "etymology": "ラテン語rosa（バラ）に由来、花の色から色名に転じた。",
  "synonyms": [
   "rosado（より一般的なピンクの形容詞形）"
  ],
  "derived": [
   "rosado（ピンク色の）",
   "rosal（バラの木）"
  ],
  "dialogue": {
   "es": "— Me regaló una rosa.\n— Qué romántico.",
   "ja": "「バラをプレゼントしてくれたんだ」「なんてロマンチックなんだ」"
  }
 },
 "morado": {
  "nuance": "「紫」の基本語。violeta（バイオレット）とほぼ同義で使われることも多い。",
  "etymology": "mora（桑の実）の色に由来。",
  "synonyms": [
   "violeta（紫、バイオレット）",
   "púrpura（紫、より濃い）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Ese suéter morado te queda bien.\n— Gracias, es mi color favorito.",
   "ja": "「その紫のセーター似合っているね」「ありがとう、お気に入りの色なんだ」"
  }
 },
 "naranja": {
  "nuance": "「オレンジ色」と「オレンジ(果物)」の両方の意味を持つ単語。色を表すときは性数変化しない（unas camisas naranja）。",
  "etymology": "アラビア語経由でペルシャ語nārang（オレンジの実）に由来。",
  "synonyms": [],
  "derived": [
   "anaranjado（オレンジ色の、別の言い方）"
  ],
  "dialogue": {
   "es": "— Me gusta el atardecer naranja.\n— Es hermoso, sobre todo en la playa.",
   "ja": "「オレンジ色の夕焼けが好きなんだ」「美しいよね、特にビーチでは」"
  }
 },
 "marrón": {
  "nuance": "「茶色」の基本語。café（コーヒー色）もラテンアメリカでは茶色の意味でよく使われる。",
  "etymology": "フランス語marron（マロン、栗）に由来。",
  "synonyms": [
   "café（茶色、ラテンアメリカで）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Tiene los ojos marrones.\n— Son muy bonitos.",
   "ja": "「彼女は茶色い目をしているよ」「とてもきれいだね」"
  }
 },
 "dorado": {
  "nuance": "「金色」の基本語。動詞dorar（金色にする、こんがり焼く）の過去分詞から形容詞化した語。",
  "etymology": "dorar（金色にする）の過去分詞、ラテン語deaurare（金メッキする）に由来。",
  "synonyms": [],
  "derived": [
   "dorar（金色にする、こんがり焼く）"
  ],
  "dialogue": {
   "es": "— Tiene un reloj dorado precioso.\n— Sí, se ve muy elegante.",
   "ja": "「素敵な金色の時計をしているね」「うん、とてもエレガントに見えるね」"
  }
 },
 "plateado": {
  "nuance": "「銀色」の基本語。platear（銀メッキする）の過去分詞から形容詞化した語。",
  "etymology": "plata（銀）から派生した語。",
  "synonyms": [],
  "derived": [
   "plata（銀）",
   "platear（銀メッキする）"
  ],
  "dialogue": {
   "es": "— Me encantan tus aretes plateados.\n— Gracias, fueron un regalo.",
   "ja": "「その銀色のピアス素敵だね」「ありがとう、プレゼントでもらったんだ」"
  }
 },
 "celeste": {
  "nuance": "「水色」。cielo（空）と同語源で、空の色を表す語として使われる。",
  "etymology": "ラテン語caelestis（天の、空の）に由来。",
  "synonyms": [
   "azul cielo（空色）"
  ],
  "derived": [
   "cielo（空）"
  ],
  "dialogue": {
   "es": "— El vestido celeste es muy delicado.\n— Sí, combina bien contigo.",
   "ja": "「その水色のワンピースはとても繊細だね」「うん、君によく似合っているよ」"
  }
 },
 "turquesa": {
  "nuance": "「ターコイズ色」。宝石ターコイズ(トルコ石)の色から来た語。カリブ海の海の色を表現するのにもよく使われる。",
  "etymology": "フランス語turquoise（トルコの、トルコ石）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El mar aquí es de un turquesa increíble.\n— Sí, parece una postal.",
   "ja": "「ここの海は信じられないくらいターコイズ色だね」「うん、まるで絵葉書みたいだね」"
  }
 },
 "hermana": {
  "nuance": "「姉/妹」の基本語。年上・年下の区別なくhermanaと呼び、必要ならhermana mayor/menorで区別する。",
  "etymology": "ラテン語germana（実の、同じ両親の）の女性形に由来。",
  "synonyms": [],
  "derived": [
   "hermanastra（異父・異母姉妹）"
  ],
  "dialogue": {
   "es": "— ¿Tienes hermanas?\n— Sí, tengo dos hermanas menores.",
   "ja": "「姉妹いる？」「うん、妹が2人いるよ」"
  }
 },
 "abuelo": {
  "nuance": "「祖父」。abuelosは「祖父母」という意味にもなる（男女混合の複数形）。",
  "etymology": "ラテン語aviolus（avus「祖父」の指小形）に由来。",
  "synonyms": [],
  "derived": [
   "bisabuelo（曽祖父）",
   "abuelito（おじいちゃん、親しみを込めて）"
  ],
  "dialogue": {
   "es": "— Mi abuelo cumple 80 años.\n— ¡Qué gran celebración le espera!",
   "ja": "「祖父が80歳になるんだ」「それは盛大なお祝いになりそうだね！」"
  }
 },
 "abuela": {
  "nuance": "「祖母」。abuelitaという指小形も、親しみを込めてよく使われる。",
  "etymology": "ラテン語aviola（avia「祖母」の指小形）に由来。",
  "synonyms": [],
  "derived": [
   "bisabuela（曽祖母）",
   "abuelita（おばあちゃん）"
  ],
  "dialogue": {
   "es": "— Mi abuela cocina increíble.\n— La mía también, extraño su comida.",
   "ja": "「祖母の料理は最高なんだ」「私の祖母もだよ、その料理が恋しいよ」"
  }
 },
 "hija": {
  "nuance": "「娘」の基本語。呼びかけとして「hija」だけで親しみを込めて使われることもある。",
  "etymology": "ラテン語filia（娘）に由来。",
  "synonyms": [],
  "derived": [
   "hijastra（継子・娘）",
   "ahijada（名付け子・娘）"
  ],
  "dialogue": {
   "es": "— Mi hija empieza la escuela mañana.\n— Debe estar muy emocionada.",
   "ja": "「娘が明日から学校が始まるんだ」「とてもわくわくしているだろうね」"
  }
 },
 "tío": {
  "nuance": "「おじ」。スペインの口語ではtío/tíaが「やつ、あいつ」のようなくだけた呼びかけ語にもなる（メキシコではあまり使わない）。",
  "etymology": "ラテン語thius（ギリシャ語theios由来）に由来。",
  "synonyms": [],
  "derived": [
   "tío abuelo（大おじ）"
  ],
  "dialogue": {
   "es": "— Mi tío vive en Guadalajara.\n— Qué bonita ciudad.",
   "ja": "「私のおじはグアダラハラに住んでいるよ」「素敵な街だね」"
  }
 },
 "tía": {
  "nuance": "「おば」の基本語。",
  "etymology": "ラテン語thia（女性形）に由来。",
  "synonyms": [],
  "derived": [
   "tía abuela（大おば）"
  ],
  "dialogue": {
   "es": "— Mi tía siempre nos trae regalos.\n— Qué generosa.",
   "ja": "「私のおばはいつもプレゼントを持ってきてくれるんだ」「なんて気前がいいんだろう」"
  }
 },
 "primo": {
  "nuance": "「いとこ(男)」。女性はprima。英語のcousinと違い性別で単語が分かれる。",
  "etymology": "ラテン語primus（最初の→血縁関係を表す語に転じた）に由来。",
  "synonyms": [],
  "derived": [
   "primo hermano（第一いとこ、より近い関係を強調）"
  ],
  "dialogue": {
   "es": "— Mi primo viene de visita este fin de semana.\n— Qué divertido, ¿de dónde viene?",
   "ja": "「今週末いとこが遊びに来るんだ」「楽しそうだね、どこから来るの？」"
  }
 },
 "prima": {
  "nuance": "「いとこ(女)」の基本語。",
  "etymology": "primoの女性形。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Mi prima y yo somos muy unidas.\n— Qué lindo tener esa relación.",
   "ja": "「いとこと私はとても仲がいいんだ」「そういう関係があるのは素敵だね」"
  }
 },
 "esposo": {
  "nuance": "「夫」。maridoもほぼ同義でよく使われる（esposoの方がややフォーマルな響き）。",
  "etymology": "ラテン語sponsus（誓約した人→配偶者）に由来。",
  "synonyms": [
   "marido（夫、より口語的）"
  ],
  "derived": [
   "esposar（手錠をかける、という別の意味も）",
   "esposas（手錠、複数形で）"
  ],
  "dialogue": {
   "es": "— Mi esposo cocina los fines de semana.\n— Qué suerte tienes.",
   "ja": "「夫は週末に料理をしてくれるんだ」「それは幸運だね」"
  }
 },
 "esposa": {
  "nuance": "「妻」。mujerも文脈によっては「妻」の意味で使われる（口語）。",
  "etymology": "esposoの女性形。",
  "synonyms": [
   "mujer（妻、口語的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Mi esposa trabaja en un hospital.\n— Qué importante labor.",
   "ja": "「妻は病院で働いているんだ」「大切な仕事だね」"
  }
 },
 "nieto": {
  "nuance": "「孫息子」。nietosは「孫たち」という意味にもなる（男女混合）。",
  "etymology": "ラテン語nepos（孫、甥）に由来。",
  "synonyms": [],
  "derived": [
   "bisnieto（ひ孫）"
  ],
  "dialogue": {
   "es": "— Mi abuela adora a sus nietos.\n— Se nota, siempre habla de ustedes.",
   "ja": "「祖母は孫たちをとても可愛がっているんだ」「わかるよ、いつも君たちの話をしているもの」"
  }
 },
 "nieta": {
  "nuance": "「孫娘」の基本語。",
  "etymology": "nietoの女性形。",
  "synonyms": [],
  "derived": [
   "bisnieta（ひ孫娘）"
  ],
  "dialogue": {
   "es": "— Soy la nieta mayor de la familia.\n— Debes tener muchas responsabilidades.",
   "ja": "「私は家族で一番年上の孫娘なんだ」「色々責任がありそうだね」"
  }
 },
 "sobrino": {
  "nuance": "「甥」の基本語。",
  "etymology": "ラテン語sobrinus（いとこ→後に甥・姪の意味に変化）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Mi sobrino cumple cinco años.\n— Qué edad tan bonita.",
   "ja": "「甥が5歳になるんだ」「かわいい年齢だね」"
  }
 },
 "sobrina": {
  "nuance": "「姪」の基本語。",
  "etymology": "sobrinoの女性形。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Mi sobrina es muy inteligente.\n— Se nota que la quieres mucho.",
   "ja": "「姪はとても賢いんだ」「とても可愛がっているのが伝わってくるね」"
  }
 },
 "suegro": {
  "nuance": "「義父」の基本語。suegrosは「義理の両親」という意味にもなる。",
  "etymology": "ラテン語socer（義父）に由来。",
  "synonyms": [],
  "derived": [
   "consuegro（子供の配偶者の親同士の関係）"
  ],
  "dialogue": {
   "es": "— Mi suegro es muy amable conmigo.\n— Qué bueno, no todos tienen esa suerte.",
   "ja": "「義父は私にとても優しいんだ」「それはいいね、みんながその幸運に恵まれているわけではないから」"
  }
 },
 "suegra": {
  "nuance": "「義母」。スペイン語圏でもsuegraにまつわるジョークや慣用表現が多い（日本語の「姑」のイメージに近い）。",
  "etymology": "suegroの女性形。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Mi suegra vive cerca de nosotros.\n— ¿Y se llevan bien?",
   "ja": "「義母は私たちの近くに住んでいるんだ」「仲は良いの？」"
  }
 },
 "cuñado": {
  "nuance": "「義理の兄弟」。配偶者の兄弟、または自分の兄弟の配偶者を指す。女性形はcuñada。",
  "etymology": "ラテン語cognatus（血縁関係のある）に由来。",
  "synonyms": [],
  "derived": [
   "cuñada（義理の姉妹）"
  ],
  "dialogue": {
   "es": "— Mi cuñado es muy gracioso.\n— Las reuniones familiares deben ser divertidas.",
   "ja": "「義理の兄弟はとても面白い人なんだ」「家族の集まりは楽しそうだね」"
  }
 },
 "abrir": {
  "nuance": "「開ける」の基本動詞。過去分詞abierto（不規則）に注意（abridoではない）。",
  "etymology": "ラテン語aperire（開く）に由来。",
  "synonyms": [],
  "derived": [
   "abierto（開いている、過去分詞）",
   "apertura（開始、開口）"
  ],
  "dialogue": {
   "es": "— ¿Puedes abrir la ventana?\n— Sí, hace calor aquí.",
   "ja": "「窓開けてもらえる？」「うん、ここ暑いね」"
  }
 },
 "cerrar": {
  "nuance": "「閉める」の基本動詞（e→ieの語根母音変化）。",
  "etymology": "俗ラテン語serrare（かんぬきで閉じる）に由来。",
  "synonyms": [],
  "derived": [
   "cerrado（閉まっている）",
   "cierre（閉店、ファスナー）"
  ],
  "dialogue": {
   "es": "— ¿A qué hora cierran la tienda?\n— A las nueve de la noche.",
   "ja": "「お店は何時に閉まるの？」「夜9時だよ」"
  }
 },
 "ver": {
  "nuance": "「見る・見える」の基本動詞。意識して見るmirarとは少しニュアンスが違う（視界に入る、という感覚）。",
  "etymology": "ラテン語videre（見る）に由来。",
  "synonyms": [
   "mirar（意識して見る）"
  ],
  "derived": [
   "vista（視力、景色）",
   "visible（見える）"
  ],
  "dialogue": {
   "es": "— ¿Viste la película nueva?\n— Sí, la vi ayer.",
   "ja": "「新しい映画見た？」「うん、昨日見たよ」"
  }
 },
 "oír": {
  "nuance": "「聞こえる」。意識して聞くescucharとは区別される（無意識の聴覚）。",
  "etymology": "ラテン語audire（聞く）に由来。",
  "synonyms": [
   "escuchar（意識して聞く）"
  ],
  "derived": [
   "oído（耳、聴覚）"
  ],
  "dialogue": {
   "es": "— ¿Oíste ese ruido?\n— Sí, ¿qué habrá sido?",
   "ja": "「あの音聞こえた？」「うん、何だったんだろう」"
  }
 },
 "dar": {
  "nuance": "「与える」の基本動詞。dar un paseo（散歩する）、dar las gracias（感謝する）のような決まり文句にも多く使われる。",
  "etymology": "ラテン語dare（与える）に由来。",
  "synonyms": [],
  "derived": [
   "dado（サイコロ）",
   "donar（寄付する）"
  ],
  "dialogue": {
   "es": "— ¿Me das tu número?\n— Claro, aquí está.",
   "ja": "「電話番号教えてくれる？」「もちろん、はいどうぞ」"
  }
 },
 "tomar": {
  "nuance": "「取る」だけでなく「（飲み物を）飲む」「（乗り物に）乗る」という意味も持つ、応用範囲の広い動詞。",
  "etymology": "起源は諸説あり、俗ラテン語系の語とされる。",
  "synonyms": [
   "beber（飲む、より直接的）",
   "coger（取る、地域差に注意）"
  ],
  "derived": [
   "toma（取ること）"
  ],
  "dialogue": {
   "es": "— ¿Qué vas a tomar?\n— Voy a tomar un café.",
   "ja": "「何飲む？」「コーヒーにするよ」"
  }
 },
 "traer": {
  "nuance": "「持ってくる」。話し手のところへ近づく方向、llevar（持っていく）は逆方向、という向きの違いに注意。",
  "etymology": "ラテン語trahere（引く、運ぶ）に由来。",
  "synonyms": [],
  "derived": [
   "traído（持ってこられた）"
  ],
  "dialogue": {
   "es": "— ¿Puedes traer más servilletas?\n— Sí, ahora las traigo.",
   "ja": "「もっとナプキン持ってきてくれる？」「うん、今持ってくるよ」"
  }
 },
 "soñar": {
  "nuance": "「夢を見る」（o→ueの語根母音変化）。soñar con（〜を夢見る）という前置詞との組み合わせが決まっている。",
  "etymology": "ラテン語somniare（夢を見る）に由来。",
  "synonyms": [],
  "derived": [
   "sueño（夢、眠気）",
   "soñador（夢想家）"
  ],
  "dialogue": {
   "es": "— Anoche soñé contigo.\n— ¿En serio? ¿Qué soñaste?",
   "ja": "「昨夜君の夢を見たよ」「本当に？何を夢見たの？」"
  }
 },
 "recordar": {
  "nuance": "「思い出す・覚えている」（o→ueの語根母音変化）。acordarse deとほぼ同義で使い分けられる。",
  "etymology": "ラテン語recordari（心に呼び戻す）に由来。",
  "synonyms": [
   "acordarse de（思い出す、再帰形）"
  ],
  "derived": [
   "recuerdo（思い出、お土産）"
  ],
  "dialogue": {
   "es": "— ¿Recuerdas su nombre?\n— No, lo olvidé por completo.",
   "ja": "「彼の名前覚えてる？」「いや、すっかり忘れちゃった」"
  }
 },
 "olvidar": {
  "nuance": "「忘れる」。再帰形olvidarse deもほぼ同じ意味でよく使われる。",
  "etymology": "俗ラテン語oblitare（忘れる）に由来。",
  "synonyms": [
   "olvidarse de（忘れる、再帰形）"
  ],
  "derived": [
   "olvido（忘却）"
  ],
  "dialogue": {
   "es": "— Olvidé mi paraguas en casa.\n— Qué mal, va a llover.",
   "ja": "「傘を家に忘れちゃった」「それは困った、雨が降りそうだよ」"
  }
 },
 "decidir": {
  "nuance": "「決める」の基本動詞。decidirse a+動詞の原形（〜する決心をする）という再帰形もある。",
  "etymology": "ラテン語decidere（切り落とす→決定する）に由来。",
  "synonyms": [],
  "derived": [
   "decisión（決断）",
   "decidido（決断力のある）"
  ],
  "dialogue": {
   "es": "— ¿Ya decidiste qué vas a estudiar?\n— Todavía no estoy seguro.",
   "ja": "「何を勉強するかもう決めた？」「まだ確信が持てないんだ」"
  }
 },
 "cambiar": {
  "nuance": "「変える・両替する」の基本動詞。cambiar de opinión（意見を変える）のような表現もよく使う。",
  "etymology": "俗ラテン語cambiare（交換する）に由来。",
  "synonyms": [],
  "derived": [
   "cambio（変化、おつり）",
   "cambiante（変わりやすい）"
  ],
  "dialogue": {
   "es": "— ¿Dónde puedo cambiar dinero?\n— Hay un banco cerca de aquí.",
   "ja": "「どこでお金を両替できる？」「この近くに銀行があるよ」"
  }
 },
 "ayudar": {
  "nuance": "「手伝う」の基本動詞。ayudar a+動詞の原形（〜するのを手伝う）という構文が定番。",
  "etymology": "ラテン語adiutare（助ける）に由来。",
  "synonyms": [
   "asistir（援助する、ややフォーマル）"
  ],
  "derived": [
   "ayuda（助け）",
   "ayudante（助手）"
  ],
  "dialogue": {
   "es": "— ¿Me ayudas con esto?\n— Claro, con gusto.",
   "ja": "「これ手伝ってくれる？」「もちろん、喜んで」"
  }
 },
 "preguntar": {
  "nuance": "「質問する」の基本動詞。pedir（頼む）と混同しやすいので注意（preguntarは「尋ねる」、pedirは「求める」）。",
  "etymology": "俗ラテン語praecuntare（前もって尋ねる）に由来。",
  "synonyms": [],
  "derived": [
   "pregunta（質問）",
   "preguntón（質問好きな人）"
  ],
  "dialogue": {
   "es": "— Te quiero preguntar algo.\n— Claro, dime.",
   "ja": "「ちょっと聞きたいことがあるんだ」「うん、言って」"
  }
 },
 "vestirse": {
  "nuance": "「服を着る」（再帰動詞、e→iの語根母音変化）。ponerse（身につける、より部分的な動作）と使い分けられる。",
  "etymology": "ラテン語vestire（服を着せる）に由来。",
  "synonyms": [],
  "derived": [
   "vestido（ワンピース、服）",
   "vestimenta（衣服）"
  ],
  "dialogue": {
   "es": "— Me visto rápido en las mañanas.\n— Yo tardo más de media hora.",
   "ja": "「朝は素早く服を着るんだ」「私は30分以上かかるよ」"
  }
 },
 "sentarse": {
  "nuance": "「座る」（再帰動詞、e→ieの語根母音変化）。命令形siéntate（座って）はよく使われるフレーズ。",
  "etymology": "ラテン語sedere（座る）に由来。",
  "synonyms": [],
  "derived": [
   "asiento（座席）",
   "sentado（座っている）"
  ],
  "dialogue": {
   "es": "— Siéntate, por favor.\n— Gracias, ¿aquí está bien?",
   "ja": "「座ってください」「ありがとう、ここでいい？」"
  }
 },
 "quedarse": {
  "nuance": "「とどまる」（再帰動詞）。quedarse con（〜を自分のものにする）という表現もよく使われる。",
  "etymology": "俗ラテン語quietare（静止させる）に由来。",
  "synonyms": [],
  "derived": [
   "quedar（残る、約束する）"
  ],
  "dialogue": {
   "es": "— ¿Te vas a quedar en casa hoy?\n— Sí, quiero descansar.",
   "ja": "「今日は家にいるつもり？」「うん、ゆっくりしたいんだ」"
  }
 },
 "añadir": {
  "nuance": "「加える」の基本動詞。料理のレシピなどでもよく使われる（añadir sal＝塩を加える）。",
  "etymology": "ラテン語inaddere（〜に加える）に由来。",
  "synonyms": [
   "agregar（加える、ほぼ同義）"
  ],
  "derived": [
   "añadido（追加された部分）"
  ],
  "dialogue": {
   "es": "— ¿Le añado más azúcar?\n— Sí, un poco más está bien.",
   "ja": "「もっと砂糖加える？」「うん、少し多めでいいよ」"
  }
 },
 "mezclar": {
  "nuance": "「混ぜる」の基本動詞。比喩的に「（人・物事を）混同する」という意味でも使われる。",
  "etymology": "俗ラテン語misculare（混ぜる）に由来。",
  "synonyms": [],
  "derived": [
   "mezcla（混合物）",
   "mezclador（ミキサー、DJ機材）"
  ],
  "dialogue": {
   "es": "— Mezcla la harina con los huevos.\n— Ya lo estoy haciendo.",
   "ja": "「小麦粉と卵を混ぜて」「もうやっているところだよ」"
  }
 },
 "alto": {
  "nuance": "「背が高い」「（音量・声が）大きい」の両方の意味を持つ形容詞。en voz alta（大きな声で）のような表現にも使われる。",
  "etymology": "ラテン語altus（高い）に由来。",
  "synonyms": [],
  "derived": [
   "altura（高さ）",
   "altavoz（スピーカー）"
  ],
  "dialogue": {
   "es": "— Eres muy alto.\n— Sí, mido casi dos metros.",
   "ja": "「君はとても背が高いね」「うん、2メートル近くあるよ」"
  }
 },
 "bajo": {
  "nuance": "「背が低い」の基本語。前置詞として「〜の下に」という意味もある（bajo la mesa＝テーブルの下に）。",
  "etymology": "俗ラテン語bassus（低い）に由来。",
  "synonyms": [],
  "derived": [
   "bajar（下がる）",
   "bajeza（卑劣さ）"
  ],
  "dialogue": {
   "es": "— La mesa es muy baja.\n— Sí, es de estilo japonés.",
   "ja": "「そのテーブルはとても低いね」「うん、和風スタイルなんだ」"
  }
 },
 "rápido": {
  "nuance": "「速い」の基本語。副詞としても使える（Habla rápido＝速く話す）。",
  "etymology": "ラテン語rapidus（急速な）に由来。",
  "synonyms": [
   "veloz（速い、ややフォーマル）"
  ],
  "derived": [
   "rapidez（速さ）"
  ],
  "dialogue": {
   "es": "— Camina más rápido, por favor.\n— Perdón, ya voy.",
   "ja": "「もっと速く歩いて」「ごめん、もう行くよ」"
  }
 },
 "lento": {
  "nuance": "「遅い」の基本語。副詞としても使われることがある（más lento＝もっとゆっくり）。",
  "etymology": "ラテン語lentus（しなやかな、ゆっくりした）に由来。",
  "synonyms": [],
  "derived": [
   "lentitud（遅さ）"
  ],
  "dialogue": {
   "es": "— El internet está muy lento hoy.\n— Sí, algo debe estar mal.",
   "ja": "「今日ネットがとても遅いね」「うん、何かおかしいのかも」"
  }
 },
 "caro": {
  "nuance": "「高い(値段)」の基本語。背が高いのはalto、値段が高いのはcaro、と使い分ける。",
  "etymology": "ラテン語carus（親愛な、高価な）に由来。",
  "synonyms": [],
  "derived": [
   "carero（高値をふっかける人）"
  ],
  "dialogue": {
   "es": "— Este restaurante es muy caro.\n— Sí, pero vale la pena.",
   "ja": "「このレストランはとても高いね」「うん、でもその価値はあるよ」"
  }
 },
 "barato": {
  "nuance": "「安い」の基本語。",
  "etymology": "アラビア語baraka（祝福、幸運）に由来するという説がある。",
  "synonyms": [],
  "derived": [
   "baratija（安物）"
  ],
  "dialogue": {
   "es": "— Encontré unos zapatos baratos.\n— ¿Dónde los compraste?",
   "ja": "「安い靴を見つけたんだ」「どこで買ったの？」"
  }
 },
 "viejo": {
  "nuance": "「古い・年をとった」の基本語。人にもモノにも使える（メキシコの口語ではviejoが「父」、viejaが「母」を指す親しみを込めた俗称にもなる）。",
  "etymology": "ラテン語vetulus（veterの指小形、年老いた）に由来。",
  "synonyms": [
   "antiguo（古い、モノ限定的）"
  ],
  "derived": [
   "vejez（老齢）",
   "envejecer（年をとる）"
  ],
  "dialogue": {
   "es": "— Este edificio es muy viejo.\n— Sí, tiene más de cien años.",
   "ja": "「この建物はとても古いね」「うん、100年以上経っているよ」"
  }
 },
 "limpio": {
  "nuance": "「きれいな、清潔な」の基本語。limpiar（掃除する）の過去分詞から形容詞化した語。",
  "etymology": "ラテン語limpidus（澄んだ）に由来。",
  "synonyms": [],
  "derived": [
   "limpiar（掃除する）",
   "limpieza（清潔さ、掃除）"
  ],
  "dialogue": {
   "es": "— Tu cuarto está muy limpio.\n— Gracias, acabo de ordenarlo.",
   "ja": "「君の部屋とてもきれいだね」「ありがとう、ちょうど片付けたところ」"
  }
 },
 "sucio": {
  "nuance": "「汚い」の基本語。juego sucio（汚い手口）のような比喩表現にも使われる。",
  "etymology": "ラテン語soccidus（濡れた、汚れた）に由来。",
  "synonyms": [],
  "derived": [
   "ensuciar（汚す）",
   "suciedad（汚れ）"
  ],
  "dialogue": {
   "es": "— Mis zapatos están sucios.\n— Límpialos antes de entrar.",
   "ja": "「靴が汚れているよ」「入る前に拭いてね」"
  }
 },
 "fuerte": {
  "nuance": "「強い」の基本語。味が濃い、音が大きい、という意味にも使われる幅広い形容詞。",
  "etymology": "ラテン語fortis（強い、勇敢な）に由来。",
  "synonyms": [],
  "derived": [
   "fuerza（力）",
   "fortalecer（強化する）"
  ],
  "dialogue": {
   "es": "— Este café está muy fuerte.\n— A mí me gusta así.",
   "ja": "「このコーヒーとても濃いね」「私はこれくらいが好きなんだ」"
  }
 },
 "débil": {
  "nuance": "「弱い」の基本語。",
  "etymology": "ラテン語debilis（弱い、不自由な）に由来。",
  "synonyms": [],
  "derived": [
   "debilidad（弱さ）",
   "debilitar（弱める）"
  ],
  "dialogue": {
   "es": "— Me siento un poco débil hoy.\n— Deberías descansar más.",
   "ja": "「今日は少し体が弱っている感じがする」「もっと休んだ方がいいよ」"
  }
 },
 "feo": {
  "nuance": "「醜い」の基本語。天気が悪いときにも使われる（hace un día feo＝嫌な天気だ）。",
  "etymology": "ラテン語foedus（醜い、恥ずべき）に由来。",
  "synonyms": [],
  "derived": [
   "afear（醜くする）"
  ],
  "dialogue": {
   "es": "— Hace un día muy feo hoy.\n— Sí, mejor quedémonos en casa.",
   "ja": "「今日はとても嫌な天気だね」「うん、家にいた方がいいね」"
  }
 },
 "inteligente": {
  "nuance": "「賢い」の基本語。listo（賢い、機転が利く）とほぼ同義で使われることもある。",
  "etymology": "ラテン語intelligens（理解する）に由来。",
  "synonyms": [
   "listo（賢い、機転が利く）"
  ],
  "derived": [
   "inteligencia（知性）"
  ],
  "dialogue": {
   "es": "— Tu hija es muy inteligente.\n— Gracias, le encanta leer.",
   "ja": "「君の娘さんはとても賢いね」「ありがとう、読書が大好きなんだ」"
  }
 },
 "divertido": {
  "nuance": "「楽しい」の基本語。divertirse（楽しむ、再帰動詞）の過去分詞から形容詞化した語。",
  "etymology": "ラテン語divertere（脇にそれる→気晴らしする）に由来。",
  "synonyms": [
   "entretenido（楽しい、面白い）"
  ],
  "derived": [
   "divertirse（楽しむ）",
   "diversión（娯楽）"
  ],
  "dialogue": {
   "es": "— La fiesta estuvo muy divertida.\n— Sí, lo pasé genial.",
   "ja": "「パーティーはとても楽しかったね」「うん、最高に楽しかったよ」"
  }
 },
 "amable": {
  "nuance": "「親切な」の基本語。人柄を褒めるときによく使われる。",
  "etymology": "ラテン語amabilis（愛すべき）に由来。",
  "synonyms": [
   "gentil（親切な、丁寧な）"
  ],
  "derived": [
   "amabilidad（親切さ）"
  ],
  "dialogue": {
   "es": "— Eres muy amable, gracias.\n— No es nada, con gusto.",
   "ja": "「とても親切だね、ありがとう」「どういたしまして、喜んで」"
  }
 },
 "generoso": {
  "nuance": "「寛大な・気前がいい」の基本語。",
  "etymology": "ラテン語generosus（高貴な生まれの→気高い）に由来。",
  "synonyms": [],
  "derived": [
   "generosidad（寛大さ）"
  ],
  "dialogue": {
   "es": "— Fue muy generoso de tu parte.\n— No hay de qué.",
   "ja": "「それはとても気前が良かったね」「どういたしまして」"
  }
 },
 "honesto": {
  "nuance": "「正直な」の基本語。",
  "etymology": "ラテン語honestus（名誉ある、誠実な）に由来。",
  "synonyms": [
   "sincero（誠実な）"
  ],
  "derived": [
   "honestidad（正直さ）"
  ],
  "dialogue": {
   "es": "— Necesito que seas honesto conmigo.\n— Claro, siempre lo soy.",
   "ja": "「私に正直でいてほしいんだ」「もちろん、いつもそうしているよ」"
  }
 },
 "pan": {
  "nuance": "「パン」の基本語。pan dulce（甘いパン）はメキシコの朝食・おやつの定番。",
  "etymology": "ラテン語panis（パン）に由来。",
  "synonyms": [],
  "derived": [
   "panadería（パン屋）",
   "panadero（パン職人）"
  ],
  "dialogue": {
   "es": "— ¿Compraste pan fresco?\n— Sí, todavía está caliente.",
   "ja": "「焼きたてのパン買った？」「うん、まだ温かいよ」"
  }
 },
 "fruta": {
  "nuance": "「果物」の総称。個々の果物はmanzana、plátanoのように具体名で呼ぶ。",
  "etymology": "ラテン語fructus（果実、実り）に由来。",
  "synonyms": [],
  "derived": [
   "frutería（果物屋）",
   "frutal（果樹の）"
  ],
  "dialogue": {
   "es": "— Deberías comer más fruta.\n— Tienes razón, empezaré mañana.",
   "ja": "「もっと果物食べた方がいいよ」「その通りだね、明日から始めるよ」"
  }
 },
 "manzana": {
  "nuance": "「りんご」の基本語。メキシコを含む一部地域では「街区・ブロック」という意味でも使われる（一区画）。",
  "etymology": "ラテン語mala matiana（マティウス家のりんご種）に由来するとされる。",
  "synonyms": [],
  "derived": [
   "manzano（りんごの木）"
  ],
  "dialogue": {
   "es": "— ¿Quieres una manzana?\n— Sí, gracias, tengo hambre.",
   "ja": "「りんご食べる？」「うん、ありがとう、お腹すいてるんだ」"
  }
 },
 "plátano": {
  "nuance": "「バナナ」。地域によってbananaという単語もよく使われる（特にカリブ海地域）。",
  "etymology": "ギリシャ語platanos（プラタナスの木、葉の形が似ていることから）に由来。",
  "synonyms": [
   "la banana（バナナ、地域による）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Me das un plátano?\n— Claro, toma.",
   "ja": "「バナナちょうだい」「もちろん、どうぞ」"
  }
 },
 "limón": {
  "nuance": "「レモン」。メキシコではライムを指すことも多く、実際のレモンとライムの呼び方が地域によって逆転することがある点に注意。",
  "etymology": "アラビア語laymūnがヨーロッパの言語に広まった語。",
  "synonyms": [],
  "derived": [
   "limonada（レモネード）"
  ],
  "dialogue": {
   "es": "— Ponle limón a los tacos.\n— Buena idea, le da más sabor.",
   "ja": "「タコスにレモンかけて」「いい考えだね、より風味が出るよ」"
  }
 },
 "delicioso": {
  "nuance": "「美味しい」。rico（美味しい、よりカジュアル）ともほぼ同義でよく使われる。",
  "etymology": "ラテン語deliciosus（喜びに満ちた）に由来。",
  "synonyms": [
   "rico（美味しい、カジュアル）",
   "sabroso（風味豊かな）"
  ],
  "derived": [
   "delicia（喜び、美味なもの）"
  ],
  "dialogue": {
   "es": "— Esta comida está deliciosa.\n— Gracias, la hice yo mismo.",
   "ja": "「この料理美味しいね」「ありがとう、自分で作ったんだ」"
  }
 },
 "picante": {
  "nuance": "「辛い」。メキシコ料理では欠かせない味覚表現。picoso（口語でも辛いの意味、特にメキシコ）とも言う。",
  "etymology": "picar（刺す、辛味を感じさせる）の現在分詞から形容詞化。",
  "synonyms": [
   "picoso（辛い、口語・メキシコ）"
  ],
  "derived": [
   "picar（辛味を感じさせる、刺す）"
  ],
  "dialogue": {
   "es": "— Esta salsa está muy picante.\n— A mí me gusta bien picante.",
   "ja": "「このサルサとても辛いね」「私はかなり辛いのが好きなんだ」"
  }
 },
 "ojo": {
  "nuance": "「目」の基本語。tener ojo para（〜を見る目がある）のような慣用表現もある。",
  "etymology": "ラテン語oculus（目）に由来。",
  "synonyms": [],
  "derived": [
   "ojal（ボタンホール）"
  ],
  "dialogue": {
   "es": "— Tienes los ojos muy bonitos.\n— Gracias, son de mi madre.",
   "ja": "「とてもきれいな目をしているね」「ありがとう、母譲りなんだ」"
  }
 },
 "oreja": {
  "nuance": "「耳」の基本語。oído（聴覚・内耳）とは区別される（orejaは外から見える耳の部分）。",
  "etymology": "ラテン語auricula（小さな耳）に由来。",
  "synonyms": [],
  "derived": [
   "orejera（イヤーマフ）"
  ],
  "dialogue": {
   "es": "— Me duele la oreja.\n— Deberías ver a un médico.",
   "ja": "「耳が痛いんだ」「病院に行った方がいいよ」"
  }
 },
 "nariz": {
  "nuance": "「鼻」の基本語。meter las narices（首を突っ込む）のような慣用表現もある。",
  "etymology": "ラテン語naris（鼻孔）に由来。",
  "synonyms": [],
  "derived": [
   "nasal（鼻の）"
  ],
  "dialogue": {
   "es": "— Tiene la nariz roja de frío.\n— Hace mucho frío afuera.",
   "ja": "「寒さで鼻が赤いね」「外はとても寒いからね」"
  }
 },
 "boca": {
  "nuance": "「口」の基本語。boca abajo（うつ伏せ）のような表現にも使われる。",
  "etymology": "ラテン語bucca（頬、口）に由来。",
  "synonyms": [],
  "derived": [
   "bocado（一口）",
   "bocina（クラクション）"
  ],
  "dialogue": {
   "es": "— Abre la boca, por favor.\n— ¿Es necesario para el examen?",
   "ja": "「口を開けてください」「検査に必要なんですか」"
  }
 },
 "brazo": {
  "nuance": "「腕」の基本語。brazo derecho（右腕、比喩的に「右腕、頼れる存在」の意味にもなる）。",
  "etymology": "ラテン語brachium（腕）に由来。",
  "synonyms": [],
  "derived": [
   "abrazar（抱きしめる）",
   "abrazo（ハグ）"
  ],
  "dialogue": {
   "es": "— Me lastimé el brazo jugando fútbol.\n— ¿Estás bien? ¿Duele mucho?",
   "ja": "「サッカーをしていて腕を痛めたんだ」「大丈夫？すごく痛い？」"
  }
 },
 "pierna": {
  "nuance": "「脚」の基本語。動物の脚にも使うが、鶏肉などの「もも肉」の意味にもなる。",
  "etymology": "俗ラテン語perna（もも肉、脚）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me duelen las piernas después de correr.\n— Deberías estirar antes y después.",
   "ja": "「走った後、脚が痛いんだ」「前後にストレッチした方がいいよ」"
  }
 },
 "pie": {
  "nuance": "「足」の基本語。a pie（歩いて）、de pie（立って）のような慣用表現が多い。",
  "etymology": "ラテン語pes/pedis（足）に由来。",
  "synonyms": [],
  "derived": [
   "apie（歩いて）",
   "pedal（ペダル）"
  ],
  "dialogue": {
   "es": "— Prefiero ir a pie.\n— Yo también, es buen ejercicio.",
   "ja": "「歩いて行く方が好きなんだ」「私もだよ、いい運動になるし」"
  }
 },
 "dedo": {
  "nuance": "「指」の総称。手の指も足の指もdedoで、区別したいときはdedo de la mano/del pieと言う。",
  "etymology": "ラテン語digitus（指）に由来。",
  "synonyms": [],
  "derived": [
   "dedal（指ぬき）"
  ],
  "dialogue": {
   "es": "— Me corté el dedo cocinando.\n— ¿Necesitas una venda?",
   "ja": "「料理していて指を切っちゃった」「絆創膏いる？」"
  }
 },
 "espalda": {
  "nuance": "「背中」の基本語。dar la espalda（背を向ける、見捨てる）のような比喩表現もある。",
  "etymology": "俗ラテン語spatula（肩甲骨）に由来。",
  "synonyms": [],
  "derived": [
   "espaldar（背もたれ）"
  ],
  "dialogue": {
   "es": "— Me duele mucho la espalda.\n— Deberías cambiar de colchón.",
   "ja": "「背中がとても痛いんだ」「マットレスを変えた方がいいかもね」"
  }
 },
 "estómago": {
  "nuance": "「お腹・胃」の基本語。dolor de estómago（腹痛）はよく使う組み合わせ。",
  "etymology": "ギリシャ語stomachos（胃）に由来。",
  "synonyms": [
   "barriga（お腹、口語）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Me duele el estómago.\n— ¿Comiste algo raro?",
   "ja": "「お腹が痛いんだ」「何か変なもの食べた？」"
  }
 },
 "cabello": {
  "nuance": "「髪」の基本語。peloもほぼ同義でよく使われる（cabelloの方がややフォーマル）。",
  "etymology": "ラテン語capillus（髪）に由来。",
  "synonyms": [
   "pelo（髪、より口語的）"
  ],
  "derived": [
   "cabellera（豊かな髪）"
  ],
  "dialogue": {
   "es": "— Me gusta tu corte de cabello.\n— Gracias, me lo corté ayer.",
   "ja": "「髪型素敵だね」「ありがとう、昨日切ったんだ」"
  }
 },
 "cuello": {
  "nuance": "「首」の基本語。cuello de la botella（瓶の首→ボトルネック）のような比喩表現もある。",
  "etymology": "ラテン語collum（首）に由来。",
  "synonyms": [],
  "derived": [
   "collar（首飾り）"
  ],
  "dialogue": {
   "es": "— Tengo el cuello muy tenso.\n— Deberías hacer estiramientos.",
   "ja": "「首がとても凝っているんだ」「ストレッチした方がいいよ」"
  }
 },
 "hombro": {
  "nuance": "「肩」の基本語。encogerse de hombros（肩をすくめる）はよく使われる表現。",
  "etymology": "ラテン語umerus（肩）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me duele el hombro derecho.\n— ¿Dormiste en mala posición?",
   "ja": "「右肩が痛いんだ」「変な体勢で寝ちゃったの？」"
  }
 },
 "rodilla": {
  "nuance": "「ひざ」の基本語。de rodillas（ひざまずいて）という表現もある。",
  "etymology": "俗ラテン語rotella（小さな車輪→ひざの丸い形から）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me lastimé la rodilla esquiando.\n— Qué mal, ¿puedes caminar?",
   "ja": "「スキーでひざを痛めちゃった」「それは大変、歩ける？」"
  }
 },
 "diente": {
  "nuance": "「歯」の基本語。muela（奥歯）とは区別される。",
  "etymology": "ラテン語dens/dentis（歯）に由来。",
  "synonyms": [],
  "derived": [
   "dentista（歯医者）",
   "dentadura（歯並び）"
  ],
  "dialogue": {
   "es": "— Me duele un diente.\n— Deberías ir al dentista.",
   "ja": "「歯が一本痛いんだ」「歯医者に行った方がいいよ」"
  }
 },
 "piel": {
  "nuance": "「肌・皮膚」の基本語。動物の「毛皮」という意味にもなる。",
  "etymology": "ラテン語pellis（皮）に由来。",
  "synonyms": [],
  "derived": [
   "pelar（皮をむく）"
  ],
  "dialogue": {
   "es": "— Tienes la piel muy bronceada.\n— Sí, fui a la playa el fin de semana.",
   "ja": "「肌がとても日焼けしているね」「うん、週末にビーチに行ったんだ」"
  }
 },
 "uña": {
  "nuance": "「爪」の基本語。comerse las uñas（爪を噛む）はよくある癖を表す表現。",
  "etymology": "ラテン語ungula（爪、蹄）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Tienes las uñas muy bien pintadas.\n— Gracias, fui al salón ayer.",
   "ja": "「爪きれいに塗ってあるね」「ありがとう、昨日サロンに行ったんだ」"
  }
 },
 "hueso": {
  "nuance": "「骨」の基本語。果物の「種」（果肉の中の硬い芯）という意味にもなる。",
  "etymology": "ラテン語ossum（骨）に由来。",
  "synonyms": [],
  "derived": [
   "huesudo（骨ばった）"
  ],
  "dialogue": {
   "es": "— Se rompió un hueso jugando fútbol.\n— Qué mala suerte, ¿cuánto tiempo tardará en sanar?",
   "ja": "「サッカーをしていて骨を折ったんだ」「なんて運が悪い、治るのにどれくらいかかるかな？」"
  }
 },
 "sangre": {
  "nuance": "「血」の基本語。sangre fría（冷血、冷静さ）のような比喩表現も多い。",
  "etymology": "ラテン語sanguis（血）に由来。",
  "synonyms": [],
  "derived": [
   "sangrar（出血する）",
   "sanguíneo（血液の）"
  ],
  "dialogue": {
   "es": "— Me hice una herida y sale sangre.\n— Espera, te traigo una venda.",
   "ja": "「怪我して血が出てるんだ」「待って、絆創膏持ってくるね」"
  }
 },
 "cocina": {
  "nuance": "「台所」だけでなく「料理・料理法」という意味でも使われる（cocina mexicana＝メキシコ料理）。",
  "etymology": "ラテン語coquina（調理場）に由来。",
  "synonyms": [],
  "derived": [
   "cocinar（料理する）",
   "cocinero（料理人）"
  ],
  "dialogue": {
   "es": "— La cocina de tu casa es hermosa.\n— Gracias, la remodelamos hace poco.",
   "ja": "「君の家のキッチン素敵だね」「ありがとう、最近リフォームしたんだ」"
  }
 },
 "dormitorio": {
  "nuance": "「寝室」の基本語。habitación（部屋、より一般的）やcuarto（部屋、口語）もほぼ同義で使われる。",
  "etymology": "ラテン語dormitorium（寝る場所）に由来、dormir（眠る）と同語源。",
  "synonyms": [
   "habitación（部屋）",
   "cuarto（部屋、口語）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cuántos dormitorios tiene tu casa?\n— Tiene tres dormitorios.",
   "ja": "「君の家は寝室いくつあるの？」「3部屋あるよ」"
  }
 },
 "baño": {
  "nuance": "「お風呂・トイレ」の両方の意味を持つ単語。公共の場では「トイレ」を指すことがほとんど。",
  "etymology": "ラテン語balneum（浴場）に由来。",
  "synonyms": [],
  "derived": [
   "bañar（入浴させる）",
   "bañera（浴槽）"
  ],
  "dialogue": {
   "es": "— ¿Dónde está el baño?\n— Al fondo del pasillo, a la derecha.",
   "ja": "「お手洗いはどこですか」「廊下の奥、右側です」"
  }
 },
 "sala": {
  "nuance": "「リビング」の基本語。sala de espera（待合室）のような複合語にも使われる。",
  "etymology": "ゲルマン語系の語sal（部屋、広間）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vamos a ver la película en la sala.\n— Perfecto, voy a hacer palomitas.",
   "ja": "「リビングで映画見よう」「いいね、ポップコーン作るよ」"
  }
 },
 "jardín": {
  "nuance": "「庭」の基本語。jardín de niños（幼稚園）という複合表現もある。",
  "etymology": "ゲルマン語系の語gard（囲われた場所）に由来。",
  "synonyms": [],
  "derived": [
   "jardinero（庭師）",
   "jardinería（園芸）"
  ],
  "dialogue": {
   "es": "— Tu jardín está lleno de flores.\n— Gracias, las cuido todos los días.",
   "ja": "「君の庭は花でいっぱいだね」「ありがとう、毎日世話しているんだ」"
  }
 },
 "cama": {
  "nuance": "「ベッド」の基本語。hacer la cama（ベッドを整える）はよく使う表現。",
  "etymology": "起源ははっきりしないが、俗ラテン語系の語とされる。",
  "synonyms": [],
  "derived": [
   "camastro（粗末なベッド）"
  ],
  "dialogue": {
   "es": "— Todavía no he hecho la cama.\n— No te preocupes, hazlo después.",
   "ja": "「まだベッドを整えていないんだ」「気にしないで、後でやってね」"
  }
 },
 "sofá": {
  "nuance": "「ソファ」の基本語。フランス語経由でアラビア語からヨーロッパの言語に広まった単語。",
  "etymology": "アラビア語suffa（クッション付きの座席）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Este sofá es muy cómodo.\n— Sí, me quedo dormido en él muy fácil.",
   "ja": "「このソファとても座り心地いいね」「うん、すぐ眠っちゃうんだ」"
  }
 },
 "techo": {
  "nuance": "「屋根・天井」の両方の意味を持つ単語。techo de cristal（ガラスの天井、比喩的に「見えない昇進の壁」）のような表現もある。",
  "etymology": "ラテン語tectum（覆い、屋根）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El techo tiene una gotera.\n— Hay que llamar a un técnico.",
   "ja": "「天井から雨漏りしているんだ」「技術者を呼ばないとね」"
  }
 },
 "pared": {
  "nuance": "「壁」の基本語。建物の内壁・外壁どちらにも使う（muroは主に外の塀・壁）。",
  "etymology": "ラテン語paries（壁）に由来。",
  "synonyms": [
   "muro（塀、外壁）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Voy a pintar la pared de azul.\n— Qué buena idea, va a quedar bonito.",
   "ja": "「壁を青く塗るつもりなんだ」「いい考えだね、きれいになりそう」"
  }
 },
 "escalera": {
  "nuance": "「階段」の基本語。escalera mecánica（エスカレーター）、escalera eléctrica（同左）も派生表現。",
  "etymology": "ラテン語scalaria（階段）に由来。",
  "synonyms": [],
  "derived": [
   "escalar（登る）",
   "escalón（一段）"
  ],
  "dialogue": {
   "es": "— Prefiero usar las escaleras.\n— Yo también, es más saludable.",
   "ja": "「階段を使う方が好きなんだ」「私もだよ、その方が健康的だしね」"
  }
 },
 "garaje": {
  "nuance": "「ガレージ」の基本語。フランス語からの借用語。",
  "etymology": "フランス語garage（保管場所）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El coche está en el garaje.\n— Voy por él ahora.",
   "ja": "「車はガレージにあるよ」「今取りに行くね」"
  }
 },
 "refrigerador": {
  "nuance": "「冷蔵庫」。地域によってneveraやfrigoríficoとも呼ばれる（スペインではfrigorífico、メキシコではrefrigeradorが一般的）。",
  "etymology": "refrigerar（冷やす）から派生、ラテン語refrigerare（冷やす）に由来。",
  "synonyms": [
   "nevera（冷蔵庫、地域による）"
  ],
  "derived": [
   "refrigerar（冷やす）"
  ],
  "dialogue": {
   "es": "— El refrigerador está vacío.\n— Vamos a hacer las compras.",
   "ja": "「冷蔵庫が空っぽだよ」「買い物に行こう」"
  }
 },
 "estufa": {
  "nuance": "「コンロ」。メキシコではガスコンロを指すことが多いが、スペインではcocina（台所と同じ単語）を使うことも。地域差が大きい単語。",
  "etymology": "起源は諸説あるが、イタリア語stufa（暖房器具）と関連するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— La estufa no enciende.\n— Voy a revisar el gas.",
   "ja": "「コンロがつかないんだ」「ガスを確認してみるね」"
  }
 },
 "horno": {
  "nuance": "「オーブン」の基本語。al horno（オーブンで焼いた）という表現は料理名によく使われる。",
  "etymology": "ラテン語furnus（かまど）に由来。",
  "synonyms": [],
  "derived": [
   "hornear（オーブンで焼く）",
   "hornilla（コンロの口）"
  ],
  "dialogue": {
   "es": "— El pollo al horno está listo.\n— Huele delicioso.",
   "ja": "「オーブン焼きチキンができたよ」「美味しそうな匂いだね」"
  }
 },
 "triste": {
  "nuance": "「悲しい」の基本語。estar tristeで一時的な悲しみの状態を表す。",
  "etymology": "ラテン語tristis（悲しい）に由来。",
  "synonyms": [],
  "derived": [
   "tristeza（悲しみ）",
   "entristecer（悲しませる）"
  ],
  "dialogue": {
   "es": "— ¿Por qué estás tan triste?\n— Perdí mi trabajo.",
   "ja": "「どうしてそんなに悲しそうなの？」「仕事を失ってしまったんだ」"
  }
 },
 "enojado": {
  "nuance": "「怒っている」の基本語。enojarse（怒る、再帰動詞）の過去分詞から形容詞化。メキシコではenojado、スペインではenfadadoも同義でよく使われる。",
  "etymology": "俗ラテン語inodiare（嫌悪させる）に由来。",
  "synonyms": [
   "enfadado（怒っている、主にスペイン）",
   "molesto（不快な）"
  ],
  "derived": [
   "enojarse（怒る）",
   "enojo（怒り）"
  ],
  "dialogue": {
   "es": "— ¿Estás enojado conmigo?\n— No, solo estoy cansado.",
   "ja": "「私に怒ってるの？」「いや、ただ疲れているだけだよ」"
  }
 },
 "cansado": {
  "nuance": "「疲れた」の基本語。estar cansado de+動詞の原形/名詞で「〜にうんざりしている」という意味にもなる。",
  "etymology": "cansar（疲れさせる）の過去分詞、ラテン語campsare（コースを曲がる→疲れる）に由来。",
  "synonyms": [],
  "derived": [
   "cansar（疲れさせる）",
   "cansancio（疲労）"
  ],
  "dialogue": {
   "es": "— Estoy muy cansado hoy.\n— ¿No dormiste bien?",
   "ja": "「今日はとても疲れているんだ」「よく眠れなかったの？」"
  }
 },
 "nervioso": {
  "nuance": "「緊張している」の基本語。ponerse nervioso（緊張する、状態の変化を表す）という表現もよく使う。",
  "etymology": "ラテン語nervosus（筋のある、力強い→神経質な、に意味変化）に由来。",
  "synonyms": [],
  "derived": [
   "nervio（神経）",
   "nerviosismo（緊張）"
  ],
  "dialogue": {
   "es": "— Estoy nervioso por la entrevista.\n— Vas a estar bien, tranquilo.",
   "ja": "「面接で緊張しているんだ」「大丈夫だよ、落ち着いて」"
  }
 },
 "emocionado": {
  "nuance": "「わくわくしている」。emocionar（感動させる、わくわくさせる）の過去分詞から形容詞化。",
  "etymology": "ラテン語emovere（心を動かす）に由来。",
  "synonyms": [],
  "derived": [
   "emocionar（感動させる）",
   "emoción（感情、興奮）"
  ],
  "dialogue": {
   "es": "— Estoy muy emocionado por el viaje.\n— Yo también, va a ser increíble.",
   "ja": "「旅行がとても楽しみなんだ」「私もだよ、きっと最高だね」"
  }
 },
 "aburrido": {
  "nuance": "「退屈している」と「つまらない（人・もの）」の両方の意味を持つ。ser aburrido（性格がつまらない）とestar aburrido（今退屈している）でニュアンスが変わる代表的な形容詞。",
  "etymology": "aburrir（退屈させる）の過去分詞、ラテン語abhorrere（嫌う）に由来。",
  "synonyms": [],
  "derived": [
   "aburrir（退屈させる）",
   "aburrimiento（退屈）"
  ],
  "dialogue": {
   "es": "— Estoy aburrido, no hay nada que hacer.\n— Vamos a caminar un rato.",
   "ja": "「退屈だな、何もすることがないよ」「少し散歩しに行こうよ」"
  }
 },
 "sorprendido": {
  "nuance": "「驚いている」。sorprender（驚かせる）の過去分詞から形容詞化した語。",
  "etymology": "ラテン語superprehendere（上からつかむ→不意打ちする）に由来。",
  "synonyms": [],
  "derived": [
   "sorprender（驚かせる）",
   "sorpresa（驚き）"
  ],
  "dialogue": {
   "es": "— Estoy sorprendido por la noticia.\n— Sí, nadie lo esperaba.",
   "ja": "「その知らせに驚いているんだ」「うん、誰も予想していなかったよね」"
  }
 },
 "asustado": {
  "nuance": "「怖がっている」。asustar（怖がらせる）の過去分詞から形容詞化した語。miedo（恐怖、名詞）との違い：asustadoは具体的な出来事（物音、驚かされたことなど）によって一時的に怖くなっている状態を表す形容詞（estar asustado）。一方miedoは、より一般的・持続的な恐怖感そのものを表す名詞（tener miedo）で、必ずしも直前の出来事に結びつかない。",
  "etymology": "俗ラテン語ex-subitare（突然の出来事による）に由来。",
  "synonyms": [],
  "derived": [
   "asustar（怖がらせる）",
   "susto（恐怖、驚き）"
  ],
  "dialogue": {
   "es": "— El perro está asustado por los truenos.\n— Pobrecito, vamos a calmarlo.",
   "ja": "「犬が雷で怖がっているよ」「かわいそうに、落ち着かせてあげよう」"
  }
 },
 "tranquilo": {
  "nuance": "「落ち着いている」の基本語。¡Tranquilo!（落ち着いて！）は日常会話で非常によく使われる。",
  "etymology": "ラテン語tranquillus（穏やかな）に由来。",
  "synonyms": [],
  "derived": [
   "tranquilidad（平静）",
   "tranquilizar（落ち着かせる）"
  ],
  "dialogue": {
   "es": "— Tranquilo, todo va a estar bien.\n— Gracias, necesitaba escuchar eso.",
   "ja": "「落ち着いて、すべてうまくいくから」「ありがとう、それを聞く必要があったんだ」"
  }
 },
 "preocupado": {
  "nuance": "「心配している」。preocuparse por（〜を心配する）という前置詞との組み合わせが決まっている。",
  "etymology": "ラテン語praeoccupare（前もって占める→頭を占める）に由来。",
  "synonyms": [],
  "derived": [
   "preocuparse（心配する）",
   "preocupación（心配事）"
  ],
  "dialogue": {
   "es": "— Estoy preocupado por el examen.\n— Vas a estar bien, has estudiado mucho.",
   "ja": "「試験のことが心配なんだ」「大丈夫だよ、たくさん勉強したじゃない」"
  }
 },
 "orgulloso": {
  "nuance": "「誇りに思う」。estar orgulloso de（〜を誇りに思う）という前置詞との組み合わせが決まっている。",
  "etymology": "俗ラテン語orgolio（誇り、ゲルマン語系）に由来。",
  "synonyms": [],
  "derived": [
   "orgullo（誇り）"
  ],
  "dialogue": {
   "es": "— Estoy orgulloso de ti.\n— Gracias, significa mucho viniendo de ti.",
   "ja": "「君を誇りに思うよ」「ありがとう、あなたに言ってもらえると特別に嬉しいよ」"
  }
 },
 "avergonzado": {
  "nuance": "「恥ずかしい」。avergonzarse（恥じる、再帰動詞）の過去分詞から形容詞化した語。",
  "etymology": "vergüenza（恥）から派生した語。",
  "synonyms": [],
  "derived": [
   "avergonzarse（恥じる）",
   "vergüenza（恥）"
  ],
  "dialogue": {
   "es": "— Me siento avergonzado por lo que dije.\n— No te preocupes, todos cometemos errores.",
   "ja": "「自分が言ったことが恥ずかしく感じるんだ」「気にしないで、誰でも間違いはするよ」"
  }
 },
 "agradecido": {
  "nuance": "「感謝している」。estar agradecido con（〜に感謝している）という形もよく使われる。",
  "etymology": "agradecer（感謝する）の過去分詞から形容詞化。",
  "synonyms": [],
  "derived": [
   "agradecer（感謝する）",
   "agradecimiento（感謝）"
  ],
  "dialogue": {
   "es": "— Estoy muy agradecido por tu ayuda.\n— No es nada, para eso están los amigos.",
   "ja": "「手伝ってくれて本当に感謝しているんだ」「なんでもないよ、友達なんだから」"
  }
 },
 "confundido": {
  "nuance": "「混乱している」。confundir（混乱させる、混同する）の過去分詞から形容詞化した語。",
  "etymology": "ラテン語confundere（一緒に注ぐ→混同する）に由来。",
  "synonyms": [],
  "derived": [
   "confundir（混同する）",
   "confusión（混乱）"
  ],
  "dialogue": {
   "es": "— Estoy confundido con las instrucciones.\n— Te las explico de nuevo.",
   "ja": "「説明が混乱していてよく分からないんだ」「もう一度説明するね」"
  }
 },
 "decepcionado": {
  "nuance": "「がっかりしている」。decepcionar（失望させる）の過去分詞から形容詞化した語。",
  "etymology": "ラテン語deceptio（欺瞞）に由来。",
  "synonyms": [],
  "derived": [
   "decepcionar（失望させる）",
   "decepción（失望）"
  ],
  "dialogue": {
   "es": "— Estoy decepcionado con el resultado.\n— Lo entiendo, esperabas más.",
   "ja": "「結果にがっかりしているんだ」「分かるよ、もっと期待していたもんね」"
  }
 },
 "satisfecho": {
  "nuance": "「満足している」。satisfacer（満足させる）の過去分詞（不規則）から形容詞化した語。",
  "etymology": "ラテン語satisfacere（十分にする）に由来。",
  "synonyms": [],
  "derived": [
   "satisfacer（満足させる）",
   "satisfacción（満足）"
  ],
  "dialogue": {
   "es": "— ¿Estás satisfecho con tu trabajo?\n— Sí, me gusta mucho lo que hago.",
   "ja": "「今の仕事に満足している？」「うん、やっていることがとても好きなんだ」"
  }
 },
 "inseguro": {
  "nuance": "「自信がない」だけでなく「不安定な、危険な」という意味にもなる基本語。",
  "etymology": "in（否定）+ seguro（安全な、確かな）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "inseguridad（不安、治安の悪さ）"
  ],
  "dialogue": {
   "es": "— Me siento inseguro sobre mi decisión.\n— Es normal, tómate tu tiempo.",
   "ja": "「自分の決断に自信が持てないんだ」「それは普通のことだよ、時間をかけていいんだよ」"
  }
 },
 "entusiasmado": {
  "nuance": "「意欲的な、わくわくしている」。emocionadoとほぼ同義で使われることも多い。",
  "etymology": "ギリシャ語enthousiasmos（神に憑かれた状態→情熱）に由来。",
  "synonyms": [
   "emocionado（わくわくしている）"
  ],
  "derived": [
   "entusiasmo（情熱）",
   "entusiasmar（熱狂させる）"
  ],
  "dialogue": {
   "es": "— Estoy muy entusiasmado con el nuevo proyecto.\n— Se nota, hablas de eso todo el tiempo.",
   "ja": "「新しいプロジェクトにとても意欲的なんだ」「わかるよ、ずっとその話をしているもんね」"
  }
 },
 "indiferente": {
  "nuance": "「無関心な」の基本語。me da igual（どちらでもいい）と近いニュアンスで使われることもある。",
  "etymology": "ラテン語indifferens（区別しない）に由来。",
  "synonyms": [],
  "derived": [
   "indiferencia（無関心）"
  ],
  "dialogue": {
   "es": "— Parece indiferente a todo esto.\n— Tal vez solo está cansado.",
   "ja": "「彼はこの件に無関心そうだね」「たぶんただ疲れているだけかもしれないよ」"
  }
 },
 "camisa": {
  "nuance": "「シャツ」の基本語。camisetaは「Tシャツ」を指す別の単語。",
  "etymology": "ラテン語camisia（シャツ、下着）に由来。",
  "synonyms": [],
  "derived": [
   "camiseta（Tシャツ）",
   "camisón（寝間着）"
  ],
  "dialogue": {
   "es": "— Me gusta tu camisa nueva.\n— Gracias, la compré ayer.",
   "ja": "「その新しいシャツ素敵だね」「ありがとう、昨日買ったんだ」"
  }
 },
 "pantalón": {
  "nuance": "「ズボン」。両足に分かれた衣類なので複数形pantalonesもよく使われる（単数扱いのpantalónも一般的）。",
  "etymology": "イタリアの喜劇キャラクターPantaloneの衣装に由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Necesito comprar un pantalón nuevo.\n— Vamos al centro comercial este fin de semana.",
   "ja": "「新しいズボンを買う必要があるんだ」「今週末ショッピングモールに行こうよ」"
  }
 },
 "vestido": {
  "nuance": "「ワンピース」の基本語。vestir（服を着せる）と同語源。",
  "etymology": "ラテン語vestire（服を着せる）に由来。",
  "synonyms": [],
  "derived": [
   "vestir（服を着せる）",
   "vestirse（服を着る）"
  ],
  "dialogue": {
   "es": "— Ese vestido te queda perfecto.\n— Gracias, lo compré para la boda.",
   "ja": "「そのワンピース、君にぴったりだね」「ありがとう、結婚式のために買ったんだ」"
  }
 },
 "zapato": {
  "nuance": "「靴」の基本語。zapatería（靴屋）、zapatero（靴職人）などの派生語も多い。",
  "etymology": "起源は諸説あるが、トルコ語やアラビア語系の語と関連するとされる。",
  "synonyms": [],
  "derived": [
   "zapatería（靴屋）",
   "zapatilla（スリッパ、スニーカー）"
  ],
  "dialogue": {
   "es": "— Necesito unos zapatos nuevos para correr.\n— Hay una tienda de deportes cerca de aquí.",
   "ja": "「走るための新しい靴が必要なんだ」「この近くにスポーツ用品店があるよ」"
  }
 },
 "chaqueta": {
  "nuance": "「ジャケット」の基本語。saco（ジャケット、地域による）とほぼ同義で使われることもある。",
  "etymology": "フランス語jaquette（短い上着）に由来。",
  "synonyms": [
   "saco（ジャケット、地域による）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Vas a llevar chaqueta?\n— Sí, dicen que va a hacer frío.",
   "ja": "「ジャケット持っていく？」「うん、寒くなるって言ってたから」"
  }
 },
 "sombrero": {
  "nuance": "「帽子」の基本語。メキシコの伝統的な広いつばの帽子（ソンブレロ)は世界的にも有名。gorra（キャップ）とは形状が異なる。",
  "etymology": "sombra（影）から派生、ラテン語umbra（影）に由来。",
  "synonyms": [],
  "derived": [
   "sombra（影）"
  ],
  "dialogue": {
   "es": "— Ese sombrero es muy tradicional.\n— Sí, es típico de esta región.",
   "ja": "「その帽子はとても伝統的だね」「うん、この地域の特産なんだ」"
  }
 },
 "gafas": {
  "nuance": "「眼鏡」の基本語。ラテンアメリカではlentesもよく使われる（メキシコではlentesが一般的）。",
  "etymology": "gafa（フック、留め具）に由来、耳にかける形状から。",
  "synonyms": [
   "lentes（眼鏡、ラテンアメリカで一般的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Usas gafas para leer?\n— Sí, desde hace unos años.",
   "ja": "「読書用の眼鏡使ってるの？」「うん、数年前から」"
  }
 },
 "coche": {
  "nuance": "「車」の基本語。地域によってcarro（ラテンアメリカで一般的）やauto（アルゼンチン等）もよく使われる。メキシコではcarroが最も一般的。",
  "etymology": "フランス語coche（馬車）に由来。",
  "synonyms": [
   "carro（車、ラテンアメリカで一般的）",
   "auto（車、一部地域）"
  ],
  "derived": [
   "cochera（車庫）"
  ],
  "dialogue": {
   "es": "— ¿Tienes coche?\n— Sí, pero prefiero el transporte público.",
   "ja": "「車持ってる？」「うん、でも公共交通機関の方が好きなんだ」"
  }
 },
 "autobús": {
  "nuance": "「バス」の基本語。メキシコではcamiónもバスを指すことがある（トラックとは別の意味、地域差に注意）。",
  "etymology": "フランス語autobus（自動+乗合馬車）に由来。",
  "synonyms": [
   "camión（バス、メキシコの一部地域）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué autobús debo tomar?\n— El número doce te lleva al centro.",
   "ja": "「どのバスに乗ればいい？」「12番が中心街に連れて行ってくれるよ」"
  }
 },
 "tren": {
  "nuance": "「電車」の基本語。メキシコは他のラテンアメリカ諸国と比べて鉄道網が限られている。",
  "etymology": "フランス語train（隊列、行列）に由来。",
  "synonyms": [],
  "derived": [
   "ferrocarril（鉄道）"
  ],
  "dialogue": {
   "es": "— ¿A qué hora sale el tren?\n— Sale a las nueve en punto.",
   "ja": "「電車は何時に出発するの？」「9時ちょうどに出るよ」"
  }
 },
 "avión": {
  "nuance": "「飛行機」の基本語。por avión（航空便で）という表現もある。",
  "etymology": "フランス語avion（鳥のように飛ぶもの）に由来。",
  "synonyms": [],
  "derived": [
   "aviación（航空）",
   "aeropuerto（空港）"
  ],
  "dialogue": {
   "es": "— ¿A qué hora llega tu avión?\n— Aterriza a las siete de la noche.",
   "ja": "「飛行機は何時に着くの？」「夜7時に着陸するよ」"
  }
 },
 "bicicleta": {
  "nuance": "「自転車」の基本語。口語ではbiciと短縮されることも多い。",
  "etymology": "フランス語bicyclette（二輪）に由来。",
  "synonyms": [
   "bici（自転車、口語）"
  ],
  "derived": [
   "ciclista（サイクリスト）"
  ],
  "dialogue": {
   "es": "— Voy al trabajo en bicicleta.\n— Qué buen ejercicio diario.",
   "ja": "「自転車で仕事に行っているんだ」「毎日いい運動になるね」"
  }
 },
 "barco": {
  "nuance": "「船」の総称。barco de vela（帆船）、barco de vapor（蒸気船）のように種類を表す複合語も多い。",
  "etymology": "ラテン語barca（小舟）に由来。",
  "synonyms": [],
  "derived": [
   "embarcar（乗船する）"
  ],
  "dialogue": {
   "es": "— Nunca he viajado en barco.\n— Deberías probarlo, es una experiencia única.",
   "ja": "「船で旅したことがないんだ」「試してみるべきだよ、特別な体験だから」"
  }
 },
 "taxi": {
  "nuance": "「タクシー」の基本語。メキシコシティでは公式の(sitio）タクシーとアプリ配車の両方が一般的。",
  "etymology": "taxímetro（タクシーメーター）の短縮形に由来。",
  "synonyms": [],
  "derived": [
   "taxista（タクシー運転手）"
  ],
  "dialogue": {
   "es": "— Voy a pedir un taxi.\n— Buena idea, ya es tarde.",
   "ja": "「タクシーを呼ぶよ」「いい考えだね、もう遅いから」"
  }
 },
 "metro": {
  "nuance": "「地下鉄」の基本語。メキシコシティの地下鉄は世界でも利用者数が多い交通機関の一つ。",
  "etymology": "metropolitano（大都市の）の短縮形に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cómo llego al centro?\n— Toma el metro, es más rápido.",
   "ja": "「中心街へはどう行けばいい？」「地下鉄に乗って、その方が速いよ」"
  }
 },
 "camión": {
  "nuance": "「トラック」の基本語。ただしメキシコの一部地域では「バス」の意味で使われることもある地域差の大きい単語。",
  "etymology": "フランス語camion（荷馬車）に由来。",
  "synonyms": [],
  "derived": [
   "camionero（トラック運転手）"
  ],
  "dialogue": {
   "es": "— Ese camión lleva muebles.\n— Debe ser una mudanza.",
   "ja": "「あのトラック家具を運んでいるね」「引っ越しかもしれないね」"
  }
 },
 "casco": {
  "nuance": "「ヘルメット」の基本語。都市の「旧市街」（casco antiguo/histórico）という意味にもなる。",
  "etymology": "起源は諸説あるが、頭部を覆うものという概念から発展したとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Ponte el casco antes de andar en bici.\n— Sí, siempre lo uso.",
   "ja": "「自転車に乗る前にヘルメットをかぶって」「うん、いつもかぶっているよ」"
  }
 },
 "fútbol": {
  "nuance": "「サッカー」。メキシコを含むラテンアメリカ・スペインで圧倒的に人気の高いスポーツ。アメリカンフットボールはfútbol americanoと区別する。",
  "etymology": "英語football（フット＋ボール）に由来。",
  "synonyms": [],
  "derived": [
   "futbolista（サッカー選手）"
  ],
  "dialogue": {
   "es": "— ¿Juegas fútbol los fines de semana?\n— Sí, con mis amigos del barrio.",
   "ja": "「週末サッカーする？」「うん、近所の友達とね」"
  }
 },
 "baloncesto": {
  "nuance": "「バスケットボール」。ラテンアメリカの多くの地域ではbasquetbolという表記もよく使われる。",
  "etymology": "balón（ボール）+ cesto（かご）の組み合わせ。",
  "synonyms": [
   "básquetbol（地域による表記）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Ves los partidos de baloncesto?\n— Sí, soy fanático de la NBA.",
   "ja": "「バスケの試合見る？」「うん、NBAの大ファンなんだ」"
  }
 },
 "natación": {
  "nuance": "「水泳」の基本語。nadar（泳ぐ）の名詞形。",
  "etymology": "ラテン語natare（泳ぐ）に由来。",
  "synonyms": [],
  "derived": [
   "nadar（泳ぐ）",
   "nadador（水泳選手）"
  ],
  "dialogue": {
   "es": "— Practico natación tres veces por semana.\n— Es un ejercicio muy completo.",
   "ja": "「週3回水泳をしているんだ」「とても全身運動になるよね」"
  }
 },
 "ciclismo": {
  "nuance": "「サイクリング」。スペインを中心にヨーロッパでは人気の高いスポーツ競技でもある。",
  "etymology": "フランス語cyclisme（自転車競技）に由来。",
  "synonyms": [],
  "derived": [
   "ciclista（サイクリスト）"
  ],
  "dialogue": {
   "es": "— El ciclismo es popular en España.\n— Sí, hay muchas rutas de montaña.",
   "ja": "「サイクリングはスペインで人気だよね」「うん、山道のルートがたくさんあるんだ」"
  }
 },
 "béisbol": {
  "nuance": "「野球」。メキシコ、特に北部やカリブ海沿岸で人気の高いスポーツ。",
  "etymology": "英語baseball（ベース＋ボール）に由来。",
  "synonyms": [],
  "derived": [
   "beisbolista（野球選手）"
  ],
  "dialogue": {
   "es": "— El béisbol es muy popular en el norte de México.\n— Sí, hay equipos muy competitivos.",
   "ja": "「野球はメキシコ北部でとても人気だよね」「うん、競争力のあるチームがたくさんあるんだ」"
  }
 },
 "yoga": {
  "nuance": "「ヨガ」の基本語。サンスクリット語由来で世界共通の呼び方。",
  "etymology": "サンスクリット語yoga（結びつける、統合する）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Empecé a practicar yoga este año.\n— ¿Y cómo te sientes?",
   "ja": "「今年からヨガを始めたんだ」「調子はどう？」"
  }
 },
 "gimnasio": {
  "nuance": "「ジム」の基本語。口語ではgymと英語のまま使われることもある。",
  "etymology": "ギリシャ語gymnasion（裸で運動する場所）に由来。",
  "synonyms": [],
  "derived": [
   "gimnasta（体操選手）"
  ],
  "dialogue": {
   "es": "— Voy al gimnasio todas las mañanas.\n— Qué disciplina, yo no puedo levantarme temprano.",
   "ja": "「毎朝ジムに行っているんだ」「なんて規則正しいんだ、私は早起きできないよ」"
  }
 },
 "sol": {
  "nuance": "「太陽」の基本語。hace sol（晴れている）、tomar el sol（日光浴する）などの表現でよく使う。",
  "etymology": "ラテン語sol（太陽）に由来。",
  "synonyms": [],
  "derived": [
   "solar（太陽の）",
   "asolear（日に当てる）"
  ],
  "dialogue": {
   "es": "— Hace mucho sol hoy.\n— Sí, deberíamos ir a la playa.",
   "ja": "「今日はとても日差しが強いね」「うん、ビーチに行くべきだね」"
  }
 },
 "lluvia": {
  "nuance": "「雨」の基本語。llover（雨が降る）の名詞形。",
  "etymology": "ラテン語pluvia（雨）に由来。",
  "synonyms": [],
  "derived": [
   "llover（雨が降る）",
   "lluvioso（雨の多い）"
  ],
  "dialogue": {
   "es": "— La lluvia no para desde ayer.\n— Espero que pare pronto.",
   "ja": "「昨日から雨が止まないね」「早く止むといいな」"
  }
 },
 "viento": {
  "nuance": "「風」の基本語。hace viento（風が強い）という決まった表現がある。",
  "etymology": "ラテン語ventus（風）に由来。",
  "synonyms": [],
  "derived": [
   "ventilar（換気する）",
   "ventana（窓）"
  ],
  "dialogue": {
   "es": "— Hace mucho viento hoy.\n— Sí, casi se me vuela el sombrero.",
   "ja": "「今日はとても風が強いね」「うん、帽子が飛びそうになったよ」"
  }
 },
 "nieve": {
  "nuance": "「雪」の基本語。メキシコでは意外にも「アイスクリーム」という意味でも使われることがある（地域による）。",
  "etymology": "ラテン語nix/nivis（雪）に由来。",
  "synonyms": [],
  "derived": [
   "nevar（雪が降る）",
   "nevado（雪の積もった）"
  ],
  "dialogue": {
   "es": "— ¿Nieva mucho donde vives?\n— Sí, en invierno mucho.",
   "ja": "「君が住んでいるところは雪がたくさん降るの？」「うん、冬はとても降るよ」"
  }
 },
 "calor": {
  "nuance": "「暑さ」の基本語。tener calor（暑いと感じる、人が主語）とhacer calor（暑い、天気）の使い分けに注意。",
  "etymology": "ラテン語calor（熱）に由来。",
  "synonyms": [],
  "derived": [
   "caliente（熱い）",
   "calentar（温める）"
  ],
  "dialogue": {
   "es": "— Tengo mucho calor.\n— Prende el ventilador.",
   "ja": "「とても暑いんだ」「扇風機つけて」"
  }
 },
 "frío": {
  "nuance": "「寒さ」の基本語。tener frío（寒いと感じる）とhacer frío（寒い、天気）の使い分けに注意（calorと同じパターン）。",
  "etymology": "ラテン語frigidus（冷たい）に由来。",
  "synonyms": [],
  "derived": [
   "frígido（冷たい）",
   "enfriar（冷やす）"
  ],
  "dialogue": {
   "es": "— Tengo mucho frío, ¿me prestas tu chaqueta?\n— Claro, toma.",
   "ja": "「とても寒いんだ、ジャケット貸してくれる？」「もちろん、どうぞ」"
  }
 },
 "arcoíris": {
  "nuance": "「虹」。arco（弓）+ íris（虹彩、色の帯）の組み合わせでできた単語。",
  "etymology": "arco（弓）+ iris（ギリシャ語で虹の女神の名前）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¡Mira ese arcoíris!\n— Qué hermoso, tiene todos los colores.",
   "ja": "「あの虹見て！」「なんてきれいなんだ、全部の色があるね」"
  }
 },
 "niebla": {
  "nuance": "「霧」の基本語。conducir con niebla（霧の中を運転する）は注意が必要な状況としてよく話題になる。",
  "etymology": "ラテン語nebula（霧、雲）に由来。",
  "synonyms": [],
  "derived": [
   "nebuloso（霧のかかった）"
  ],
  "dialogue": {
   "es": "— Hay mucha niebla esta mañana.\n— Maneja con cuidado.",
   "ja": "「今朝はとても霧が濃いね」「気をつけて運転してね」"
  }
 },
 "pájaro": {
  "nuance": "「鳥」の総称。ave（鳥類、よりフォーマル・生物学的な語）とほぼ同義。",
  "etymology": "ラテン語passer（スズメ）から意味が広がったとされる。",
  "synonyms": [
   "ave（鳥類、フォーマル）"
  ],
  "derived": [
   "pajarera（鳥かご）"
  ],
  "dialogue": {
   "es": "— Hay un pájaro cantando en mi ventana.\n— Qué lindo despertar así.",
   "ja": "「窓のところで鳥がさえずっているんだ」「そんな風に目覚めるのって素敵だね」"
  }
 },
 "pez": {
  "nuance": "「魚」。生きている魚はpez、料理として食べる魚はpescadoと区別する点が日本語話者には新鮮なポイント。",
  "etymology": "ラテン語piscis（魚）に由来。",
  "synonyms": [
   "pescado（食用の魚）"
  ],
  "derived": [
   "pesca（漁）",
   "pescar（釣る）"
  ],
  "dialogue": {
   "es": "— Tengo un pez de mascota.\n— ¿Qué tipo de pez es?",
   "ja": "「魚を1匹ペットとして飼っているんだ」「どんな種類の魚？」"
  }
 },
 "caballo": {
  "nuance": "「馬」の基本語。a caballo（馬に乗って）という表現もよく使う。",
  "etymology": "俗ラテン語caballus（馬、駄馬）に由来。",
  "synonyms": [],
  "derived": [
   "caballero（騎士、紳士）",
   "caballería（騎兵隊）"
  ],
  "dialogue": {
   "es": "— ¿Sabes montar a caballo?\n— No, nunca lo he intentado.",
   "ja": "「乗馬できる？」「いや、試したことないんだ」"
  }
 },
 "vaca": {
  "nuance": "「牛（雌牛）」。carne de vaca（牛肉）、toroは「雄牛」と区別される。",
  "etymology": "ラテン語vacca（雌牛）に由来。",
  "synonyms": [],
  "derived": [
   "vacuno（牛の）"
  ],
  "dialogue": {
   "es": "— Vimos muchas vacas en el rancho.\n— Debe ser hermoso el campo por allá.",
   "ja": "「牧場でたくさんの牛を見たよ」「そこの田園風景はきっと美しいだろうね」"
  }
 },
 "cerdo": {
  "nuance": "「豚」の基本語。puerco（豚、ラテンアメリカで一般的）、chancho（豚、南米で一般的）も同義でよく使われる。",
  "etymology": "ラテン語porcus（豚）から派生したとされる。",
  "synonyms": [
   "puerco（豚、口語）",
   "chancho（豚、南米）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— El cerdo es una carne muy usada en México.\n— Sí, especialmente en los tacos al pastor.",
   "ja": "「豚肉はメキシコでよく使われる肉だよね」「うん、特にタコス・アル・パストールでね」"
  }
 },
 "león": {
  "nuance": "「ライオン」の基本語。比喩的に「勇敢な人」を指すこともある。",
  "etymology": "ラテン語leo（ライオン）に由来。",
  "synonyms": [],
  "derived": [
   "leona（雌ライオン）"
  ],
  "dialogue": {
   "es": "— Vimos leones en el zoológico.\n— ¿Estaban despiertos?",
   "ja": "「動物園でライオンを見たよ」「起きていた？」"
  }
 },
 "elefante": {
  "nuance": "「象」の基本語。elefante blanco（白い象、比喩的に「役に立たない高価なもの」という慣用表現もある）。",
  "etymology": "ラテン語elephantus、さらにギリシャ語elephas（象、象牙）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Los elefantes tienen muy buena memoria.\n— Sí, dicen que nunca olvidan.",
   "ja": "「象はとても記憶力がいいんだよ」「うん、決して忘れないって言うよね」"
  }
 },
 "mono": {
  "nuance": "「猿」の基本語。形容詞として「かわいい」という意味にもなる（スペインの一部地域の口語、地域差あり）。",
  "etymology": "起源は諸説あるが、イタリア語monna（女性の呼びかけ）と関連するとされる。",
  "synonyms": [],
  "derived": [
   "monería（おどけた仕草）"
  ],
  "dialogue": {
   "es": "— Los monos son muy inteligentes.\n— Sí, se parecen mucho a nosotros.",
   "ja": "「猿はとても賢いんだよ」「うん、私たちにとても似ているよね」"
  }
 },
 "conejo": {
  "nuance": "「うさぎ」の基本語。conejillo de Indias（モルモット、直訳「インドの小うさぎ」）という表現もある。",
  "etymology": "ラテン語cuniculus（うさぎ、地下トンネル）に由来。",
  "synonyms": [],
  "derived": [
   "conejera（うさぎ小屋）"
  ],
  "dialogue": {
   "es": "— Mi hija quiere un conejo de mascota.\n— Son animales muy tranquilos.",
   "ja": "「娘がうさぎをペットに欲しがっているんだ」「とても穏やかな動物だよね」"
  }
 },
 "oso": {
  "nuance": "「熊」の基本語。oso de peluche（テディベア）はよく使う複合語。",
  "etymology": "ラテン語ursus（熊）に由来。",
  "synonyms": [],
  "derived": [
   "osezno（子熊）"
  ],
  "dialogue": {
   "es": "— Vimos un oso en el bosque.\n— ¡Qué miedo! ¿Estaban lejos?",
   "ja": "「森でクマを見たんだ」「怖い！遠くにいたの？」"
  }
 },
 "serpiente": {
  "nuance": "「蛇」の基本語。víbora（毒蛇）はより限定的な語。",
  "etymology": "ラテン語serpens（這うもの）に由来。",
  "synonyms": [
   "víbora（毒蛇）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Le tengo miedo a las serpientes.\n— A mí también, aunque sé que la mayoría no son peligrosas.",
   "ja": "「蛇が怖いんだ」「私もだよ、ほとんどは危険じゃないって分かっていてもね」"
  }
 },
 "delfín": {
  "nuance": "「イルカ」の基本語。知能の高い動物として親しまれている。",
  "etymology": "ギリシャ語delphis（イルカ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vimos delfines nadando cerca del barco.\n— Qué experiencia tan increíble.",
   "ja": "「船の近くを泳ぐイルカを見たよ」「なんて素晴らしい体験なんだ」"
  }
 },
 "ballena": {
  "nuance": "「クジラ」の基本語。ballena azul（シロナガスクジラ）は地球最大の動物として知られる。",
  "etymology": "ラテン語ballaena（クジラ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— En esta zona se pueden ver ballenas.\n— ¡Qué maravilla! Me encantaría verlas.",
   "ja": "「この地域ではクジラが見られるんだ」「なんて素敵なんだ！ぜひ見てみたいな」"
  }
 },
 "tiburón": {
  "nuance": "「サメ」の基本語。比喩的に「冷酷なビジネスマン」を指すこともある。",
  "etymology": "起源は諸説あるが、カリブ海地域の言語からの借用語とされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vi un tiburón mientras buceaba.\n— ¿Tuviste miedo?",
   "ja": "「ダイビング中にサメを見たんだ」「怖かった？」"
  }
 },
 "árbol": {
  "nuance": "「木」の基本語。árbol genealógico（家系図、直訳「家系の木」）という表現もある。",
  "etymology": "ラテン語arbor（木）に由来。",
  "synonyms": [],
  "derived": [
   "arbusto（低木）",
   "arboleda（並木道）"
  ],
  "dialogue": {
   "es": "— Ese árbol tiene más de cien años.\n— Es impresionante lo grande que es.",
   "ja": "「あの木は100年以上経っているんだ」「そんなに大きいなんてすごいね」"
  }
 },
 "flor": {
  "nuance": "「花」の基本語。flor de un día（一日花、比喩的に「はかないもの」）という表現もある。",
  "etymology": "ラテン語flos/floris（花）に由来。",
  "synonyms": [],
  "derived": [
   "florecer（開花する）",
   "florero（花瓶）"
  ],
  "dialogue": {
   "es": "— Estas flores son para ti.\n— Gracias, son hermosas.",
   "ja": "「この花は君にだよ」「ありがとう、きれいだね」"
  }
 },
 "río": {
  "nuance": "「川」の基本語。río abajo（川下へ）、río arriba（川上へ）のような方向表現もある。",
  "etymology": "ラテン語rivus（小川）に由来。",
  "synonyms": [],
  "derived": [
   "ribera（川岸）"
  ],
  "dialogue": {
   "es": "— Ese río es muy famoso por sus rápidos.\n— ¿Se puede hacer rafting ahí?",
   "ja": "「あの川は急流で有名なんだ」「そこでラフティングできるの？」"
  }
 },
 "mar": {
  "nuance": "「海」の基本語。océano（大洋、より広い海域）とは規模が異なる。",
  "etymology": "ラテン語mare（海）に由来。",
  "synonyms": [
   "océano（大洋）"
  ],
  "derived": [
   "marino（海の）",
   "marea（潮）"
  ],
  "dialogue": {
   "es": "— Me encanta el sonido del mar.\n— A mí también, es muy relajante.",
   "ja": "「海の音が大好きなんだ」「私もだよ、とてもリラックスできるよね」"
  }
 },
 "cielo": {
  "nuance": "「空」の基本語。宗教的な文脈では「天国」という意味にもなる。",
  "etymology": "ラテン語caelum（空、天）に由来。",
  "synonyms": [],
  "derived": [
   "celeste（水色、空の）"
  ],
  "dialogue": {
   "es": "— El cielo está muy despejado hoy.\n— Perfecto para ver las estrellas esta noche.",
   "ja": "「今日は空がとても晴れているね」「今夜星を見るのに最適だね」"
  }
 },
 "estrella": {
  "nuance": "「星」の基本語。比喩的に「有名人、スター」という意味にもなる（una estrella de cine＝映画スター）。",
  "etymology": "ラテン語stella（星）に由来。",
  "synonyms": [],
  "derived": [
   "estrellado（星がちりばめられた）"
  ],
  "dialogue": {
   "es": "— Se pueden ver muchas estrellas desde aquí.\n— Sí, no hay contaminación lumínica.",
   "ja": "「ここからだとたくさんの星が見えるね」「うん、光害がないからね」"
  }
 },
 "luna": {
  "nuance": "「月」の基本語。luna de miel（ハネムーン、直訳「蜜の月」）という有名な表現もある。",
  "etymology": "ラテン語luna（月）に由来。",
  "synonyms": [],
  "derived": [
   "lunar（月の、ほくろ）"
  ],
  "dialogue": {
   "es": "— La luna está muy brillante esta noche.\n— Sí, debe ser luna llena.",
   "ja": "「今夜は月がとても明るいね」「うん、満月に違いないね」"
  }
 },
 "bosque": {
  "nuance": "「森」の基本語。selva（ジャングル、より密林・熱帯のイメージ）とは区別される。",
  "etymology": "ゲルマン語系の語bosk（茂み、森）に由来。",
  "synonyms": [
   "selva（ジャングル）"
  ],
  "derived": [
   "boscoso（森の多い）"
  ],
  "dialogue": {
   "es": "— Vamos a caminar por el bosque.\n— Buena idea, hace un día perfecto.",
   "ja": "「森を歩きに行こう」「いい考えだね、完璧な天気だし」"
  }
 },
 "volcán": {
  "nuance": "「火山」の基本語。メキシコには活火山が多く、ポポカテペトル山などが有名。",
  "etymology": "ローマ神話の火の神ウルカヌス（Vulcano）に由来。",
  "synonyms": [],
  "derived": [
   "volcánico（火山の）"
  ],
  "dialogue": {
   "es": "— Ese volcán todavía está activo.\n— Da un poco de miedo vivir cerca.",
   "ja": "「あの火山はまだ活動中なんだ」「近くに住むのは少し怖いね」"
  }
 },
 "desierto": {
  "nuance": "「砂漠」の基本語。メキシコ北部には広大な砂漠地帯が広がる。",
  "etymology": "ラテン語desertus（見捨てられた）に由来。",
  "synonyms": [],
  "derived": [
   "desértico（砂漠の）"
  ],
  "dialogue": {
   "es": "— El desierto de noche hace mucho frío.\n— Es sorprendente el cambio de temperatura.",
   "ja": "「砂漠は夜とても寒くなるんだ」「気温の変化に驚くよね」"
  }
 },
 "isla": {
  "nuance": "「島」の基本語。ラテンアメリカやスペインには美しい島々が多く、観光地としても人気。",
  "etymology": "ラテン語insula（島）に由来。",
  "synonyms": [],
  "derived": [
   "isleño（島の住人）"
  ],
  "dialogue": {
   "es": "— Esa isla es un destino turístico famoso.\n— Me gustaría visitarla algún día.",
   "ja": "「あの島は有名な観光地なんだ」「いつか訪れてみたいな」"
  }
 },
 "médico": {
  "nuance": "「医者」の基本語。doctorもほぼ同義で呼びかけ語としてよく使われる（Doctor, ¿puedo hacerle una pregunta?）。",
  "etymology": "ラテン語medicus（医者）に由来。",
  "synonyms": [
   "doctor（医者、呼びかけにも使う）"
  ],
  "derived": [
   "medicina（医学、薬）",
   "medicar（薬を処方する）"
  ],
  "dialogue": {
   "es": "— Necesito ver a un médico.\n— Hay una clínica cerca de aquí.",
   "ja": "「医者に診てもらう必要があるんだ」「この近くにクリニックがあるよ」"
  }
 },
 "enfermera": {
  "nuance": "「看護師」。男性形はenfermero。医療現場で非常に重要な役割を持つ職業として尊敬される。",
  "etymology": "enfermo（病気の）から派生した語。",
  "synonyms": [],
  "derived": [
   "enfermería（看護、医務室）",
   "enfermo（病気の）"
  ],
  "dialogue": {
   "es": "— Mi hermana es enfermera.\n— Debe ser un trabajo muy exigente.",
   "ja": "「私の姉は看護師なんだ」「きっとすごく大変な仕事だろうね」"
  }
 },
 "maestro": {
  "nuance": "「教師」の基本語。profesorもほぼ同義で使われるが、maestroは小学校の先生、profesorは中高・大学の先生というニュアンスの違いがある地域も。",
  "etymology": "ラテン語magister（師、指導者）に由来。",
  "synonyms": [
   "profesor（教師、より一般的）"
  ],
  "derived": [
   "maestría（修士号、熟達）"
  ],
  "dialogue": {
   "es": "— Mi maestra de español es muy paciente.\n— Qué suerte, eso ayuda mucho a aprender.",
   "ja": "「私のスペイン語の先生はとても忍耐強いんだ」「それは幸運だね、学ぶのにとても助けになるよ」"
  }
 },
 "abogado": {
  "nuance": "「弁護士」の基本語。女性形はabogada。",
  "etymology": "ラテン語advocatus（呼び寄せられた者→弁護人）に由来。",
  "synonyms": [],
  "derived": [
   "abogacía（法律業務）"
  ],
  "dialogue": {
   "es": "— Necesito hablar con un abogado.\n— Conozco a uno muy bueno.",
   "ja": "「弁護士と話す必要があるんだ」「とても良い人を知っているよ」"
  }
 },
 "ingeniero": {
  "nuance": "「エンジニア」の基本語。スペイン語圏では肩書きとして名前の前にIngeniero（略Ing.）をつけて呼ぶ習慣がある国もある。",
  "etymology": "ラテン語ingenium（才能、独創性）に由来。",
  "synonyms": [],
  "derived": [
   "ingeniería（工学）"
  ],
  "dialogue": {
   "es": "— ¿En qué trabajas?\n— Soy ingeniero de software.",
   "ja": "「どんな仕事しているの？」「ソフトウェアエンジニアなんだ」"
  }
 },
 "periodista": {
  "nuance": "「記者」の基本語。男女ともperiodistaの形を使う（性別で変化しない）。",
  "etymology": "periódico（新聞）から派生した語。",
  "synonyms": [],
  "derived": [
   "periódico（新聞）",
   "periodismo（ジャーナリズム）"
  ],
  "dialogue": {
   "es": "— Trabaja como periodista en un canal de noticias.\n— Debe conocer mucha gente interesante.",
   "ja": "「ニュースチャンネルで記者として働いているんだ」「きっと面白い人にたくさん出会うだろうね」"
  }
 },
 "cocinero": {
  "nuance": "「料理人」の基本語。chef（フランス語からの借用語、より専門的なシェフ）とも使い分けられる。",
  "etymology": "cocinar（料理する）から派生した語。",
  "synonyms": [
   "chef（シェフ、専門的）"
  ],
  "derived": [
   "cocinar（料理する）",
   "cocina（台所、料理）"
  ],
  "dialogue": {
   "es": "— Quiero ser cocinero profesional.\n— Deberías estudiar en una escuela culinaria.",
   "ja": "「プロの料理人になりたいんだ」「料理学校で学ぶといいよ」"
  }
 },
 "policía": {
  "nuance": "「警察官」の基本語。la policíaは「警察（組織）」という意味になり、性で意味が変わる面白い単語。",
  "etymology": "ギリシャ語politeia（都市国家の統治）に由来。",
  "synonyms": [],
  "derived": [
   "policíaco（警察の、探偵の）"
  ],
  "dialogue": {
   "es": "— Llama a la policía.\n— Ya lo hice, están en camino.",
   "ja": "「警察を呼んで」「もう呼んだよ、向かっているところ」"
  }
 },
 "bombero": {
  "nuance": "「消防士」の基本語。bomba（ポンプ、爆弾）から派生、消火用のポンプを扱う人が原義。",
  "etymology": "bomba（ポンプ）から派生した語。",
  "synonyms": [],
  "derived": [
   "bomba（ポンプ、爆弾）"
  ],
  "dialogue": {
   "es": "— Los bomberos llegaron muy rápido.\n— Menos mal, el fuego no se expandió.",
   "ja": "「消防士がとても早く到着したんだ」「良かった、火が広がらなかったんだね」"
  }
 },
 "dentista": {
  "nuance": "「歯医者」の基本語。男女ともdentistaの形を使う（性別で変化しない）。",
  "etymology": "diente（歯）から派生した語。",
  "synonyms": [],
  "derived": [
   "diente（歯）"
  ],
  "dialogue": {
   "es": "— Tengo cita con el dentista mañana.\n— Espero que no sea nada grave.",
   "ja": "「明日歯医者の予約があるんだ」「大したことないといいね」"
  }
 },
 "veterinario": {
  "nuance": "「獣医」の基本語。口語ではvetと短縮されることもある。",
  "etymology": "ラテン語veterinarius（家畜の医者）に由来。",
  "synonyms": [],
  "derived": [
   "veterinaria（獣医学）"
  ],
  "dialogue": {
   "es": "— Llevé a mi perro al veterinario.\n— ¿Está todo bien?",
   "ja": "「犬を獣医に連れて行ったんだ」「大丈夫だった？」"
  }
 },
 "científico": {
  "nuance": "「科学者」の基本語。女性形はcientífica。",
  "etymology": "ciencia（科学）から派生した語。",
  "synonyms": [],
  "derived": [
   "ciencia（科学）",
   "científico（科学的な、形容詞としても）"
  ],
  "dialogue": {
   "es": "— Quiero ser científica cuando sea grande.\n— Qué meta tan interesante.",
   "ja": "「大きくなったら科学者になりたいんだ」「なんて興味深い目標なんだ」"
  }
 },
 "escritor": {
  "nuance": "「作家」の基本語。女性形はescritora。",
  "etymology": "escribir（書く）から派生した語。",
  "synonyms": [],
  "derived": [
   "escribir（書く）",
   "escritura（文書、筆跡）"
  ],
  "dialogue": {
   "es": "— Ese escritor es muy famoso en México.\n— Sí, he leído dos de sus libros.",
   "ja": "「あの作家はメキシコでとても有名なんだ」「うん、彼の本を2冊読んだよ」"
  }
 },
 "actor": {
  "nuance": "「俳優」の基本語。女性形はactriz。",
  "etymology": "ラテン語actor（行為者）に由来。",
  "synonyms": [],
  "derived": [
   "actuar（演じる）",
   "actuación（演技）"
  ],
  "dialogue": {
   "es": "— Ese actor estuvo increíble en la película.\n— Sí, se merece un premio.",
   "ja": "「あの俳優は映画ですごかったね」「うん、賞に値するよね」"
  }
 },
 "cantante": {
  "nuance": "「歌手」の基本語。男女ともcantanteの形を使う（性別で変化しない）。",
  "etymology": "cantar（歌う）の現在分詞から派生した語。",
  "synonyms": [],
  "derived": [
   "cantar（歌う）",
   "canción（歌）"
  ],
  "dialogue": {
   "es": "— ¿Quién es tu cantante favorito?\n— Me encanta la música de Peso Pluma.",
   "ja": "「好きな歌手は誰？」「ペソ・プルマの音楽が大好きなんだ」"
  }
 },
 "banco": {
  "nuance": "「銀行」と「ベンチ」の両方の意味を持つ単語。文脈で判断する。",
  "etymology": "ゲルマン語系の語bank（座席、両替商の台）に由来。",
  "synonyms": [],
  "derived": [
   "bancario（銀行の）",
   "bancarrota（破産）"
  ],
  "dialogue": {
   "es": "— Voy al banco a sacar dinero.\n— Yo también necesito ir.",
   "ja": "「お金を下ろしに銀行に行くよ」「私も行く必要があるんだ」"
  }
 },
 "hospital": {
  "nuance": "「病院」の基本語。clínica（クリニック、より小規模な医療施設）とは規模が異なる。",
  "etymology": "ラテン語hospitalis（客をもてなす）に由来、hotelと同語源。",
  "synonyms": [
   "clínica（クリニック）"
  ],
  "derived": [
   "hospitalizar（入院させる）"
  ],
  "dialogue": {
   "es": "— Tuvieron que llevarlo al hospital.\n— ¿Está bien ahora?",
   "ja": "「彼を病院に連れて行かなきゃならなかったんだ」「今は大丈夫なの？」"
  }
 },
 "mercado": {
  "nuance": "「市場」の基本語。mercado sobre ruedas（移動市場）のような複合語もメキシコでよく使われる。",
  "etymology": "ラテン語mercatus（取引、市場）に由来。",
  "synonyms": [],
  "derived": [
   "mercancía（商品）",
   "mercadeo（マーケティング）"
  ],
  "dialogue": {
   "es": "— Compré verduras frescas en el mercado.\n— Siempre es mejor que el súper.",
   "ja": "「市場で新鮮な野菜を買ったんだ」「いつもスーパーより良いよね」"
  }
 },
 "parque": {
  "nuance": "「公園」の基本語。parque de diversiones（遊園地）という複合語もよく使われる。",
  "etymology": "フランス語parc（囲われた土地）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vamos al parque a caminar.\n— Buena idea, hace buen clima.",
   "ja": "「公園に散歩しに行こう」「いい考えだね、天気もいいし」"
  }
 },
 "biblioteca": {
  "nuance": "「図書館」の基本語。英語のlibraryと形が似ているが、libreríaは「本屋」という別の意味になる紛らわしい単語（false friend）。",
  "etymology": "ギリシャ語bibliothēkē（本の保管場所）に由来。",
  "synonyms": [],
  "derived": [
   "bibliotecario（司書）"
  ],
  "dialogue": {
   "es": "— Voy a estudiar en la biblioteca.\n— Yo también, nos vemos allá.",
   "ja": "「図書館で勉強するよ」「私もだよ、そこで会おう」"
  }
 },
 "farmacia": {
  "nuance": "「薬局」の基本語。メキシコでは処方箋なしで買える薬も多く、地域による違いがある。",
  "etymology": "ギリシャ語pharmakeia（薬の使用）に由来。",
  "synonyms": [],
  "derived": [
   "farmacéutico（薬剤師）"
  ],
  "dialogue": {
   "es": "— Necesito ir a la farmacia por medicina.\n— Hay una en la esquina.",
   "ja": "「薬を買いに薬局に行く必要があるんだ」「角にあるよ」"
  }
 },
 "supermercado": {
  "nuance": "「スーパー」の基本語。súperと短縮して呼ばれることも多い。",
  "etymology": "super（超）+ mercado（市場）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "mercado（市場）"
  ],
  "dialogue": {
   "es": "— Voy al supermercado, ¿necesitas algo?\n— Sí, ¿me traes leche?",
   "ja": "「スーパーに行くよ、何か必要？」「うん、牛乳持ってきてくれる？」"
  }
 },
 "playa": {
  "nuance": "「ビーチ」の基本語。メキシコには美しいビーチが多く、人気の観光地。",
  "etymology": "俗ラテン語plagia（海岸）に由来。",
  "synonyms": [],
  "derived": [
   "playero（ビーチの）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es tu playa favorita en México?\n— Me encanta Tulum.",
   "ja": "「メキシコで好きなビーチはどこ？」「トゥルムが大好きなんだ」"
  }
 },
 "montaña": {
  "nuance": "「山」の基本語。montaña rusa（ジェットコースター、直訳「ロシアの山」）という面白い表現もある。",
  "etymology": "俗ラテン語montanea（山の）に由来。",
  "synonyms": [],
  "derived": [
   "montañoso（山の多い）",
   "montañismo（登山）"
  ],
  "dialogue": {
   "es": "— Esa montaña es la más alta del país.\n— ¿Se puede escalar?",
   "ja": "「あの山はこの国で一番高いんだ」「登れるの？」"
  }
 },
 "ciudad": {
  "nuance": "「都市」の基本語。Ciudad de México（メキシコシティ）のように固有名詞にも使われる。",
  "etymology": "ラテン語civitas（市民権、都市国家）に由来。",
  "synonyms": [],
  "derived": [
   "ciudadano（市民）"
  ],
  "dialogue": {
   "es": "— ¿Te gusta vivir en la ciudad?\n— Sí, aunque a veces extraño la tranquilidad del campo.",
   "ja": "「都会に住むのは好き？」「うん、でも時々田舎の静けさが恋しくなるよ」"
  }
 },
 "museo": {
  "nuance": "「美術館・博物館」の基本語。ギリシャ神話の学芸の女神ムーサ（musa）が語源。",
  "etymology": "ギリシャ語mouseion（ムーサの神殿）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Has ido al museo de antropología?\n— No todavía, dicen que es impresionante.",
   "ja": "「人類学博物館に行ったことある？」「まだないんだ、すごいって聞くけど」"
  }
 },
 "teléfono": {
  "nuance": "「電話」の基本語。celular（携帯電話、ラテンアメリカ）とmóvil（携帯電話、スペイン）で地域差がある。",
  "etymology": "ギリシャ語tele（遠くの）+ phone（音）に由来。",
  "synonyms": [
   "celular（携帯電話、ラテンアメリカ）",
   "móvil（携帯電話、スペイン）"
  ],
  "derived": [
   "telefonear（電話する）",
   "telefónico（電話の）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es tu número de teléfono?\n— Te lo anoto aquí.",
   "ja": "「電話番号は何番？」「ここに書いておくね」"
  }
 },
 "internet": {
  "nuance": "「インターネット」。スペイン語では男性名詞として扱われることが多いが、女性名詞として使う地域もある。",
  "etymology": "英語internet（inter+net）に由来。",
  "synonyms": [],
  "derived": [
   "internauta（ネットユーザー）"
  ],
  "dialogue": {
   "es": "— El internet está muy lento hoy.\n— Sí, algo debe estar pasando con la red.",
   "ja": "「今日インターネットがとても遅いね」「うん、ネットワークに何かあるのかも」"
  }
 },
 "aplicación": {
  "nuance": "「アプリ」の基本語。口語ではappと英語のまま使われることも多い。",
  "etymology": "aplicar（適用する）から派生した語。",
  "synonyms": [
   "app（アプリ、口語）"
  ],
  "derived": [
   "aplicar（適用する）"
  ],
  "dialogue": {
   "es": "— ¿Qué aplicación usas para aprender español?\n— Uso varias, incluyendo esta.",
   "ja": "「スペイン語学習にどんなアプリ使ってる？」「いくつか使っていて、これも含めてね」"
  }
 },
 "contraseña": {
  "nuance": "「パスワード」の基本語。口語ではpasswordと英語のまま使われることもある。",
  "etymology": "contra（対抗して）+ seña（合図）の組み合わせ、元は「合言葉」の意。",
  "synonyms": [
   "password（パスワード、口語）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Olvidé mi contraseña otra vez.\n— Deberías usar un gestor de contraseñas.",
   "ja": "「またパスワード忘れちゃった」「パスワード管理アプリを使った方がいいよ」"
  }
 },
 "batería": {
  "nuance": "「バッテリー」の基本語。se me acabó la batería（電池が切れた）はよく使う表現。",
  "etymology": "フランス語batterie（一連の道具）に由来。",
  "synonyms": [],
  "derived": [
   "cargador（充電器）"
  ],
  "dialogue": {
   "es": "— Se me está acabando la batería.\n— Toma, te presto mi cargador.",
   "ja": "「バッテリーがなくなりそうなんだ」「はい、充電器貸してあげる」"
  }
 },
 "pantalla": {
  "nuance": "「画面」の基本語。pantalla táctil（タッチスクリーン）のような複合語もよく使われる。",
  "etymology": "パンタ（布の一種）から派生したとされる、光を遮るものが原義。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Se rompió la pantalla de mi teléfono.\n— Qué mal, ¿es caro repararla?",
   "ja": "「携帯の画面が割れちゃった」「それは大変、修理は高いの？」"
  }
 },
 "wifi": {
  "nuance": "「Wi-Fi」。多くのスペイン語圏でそのままwifiと表記・発音される（ウィフィと発音されることも）。",
  "etymology": "英語Wi-Fi（Wireless Fidelityの略）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cuál es la contraseña del wifi?\n— Está escrita en el router.",
   "ja": "「Wi-Fiのパスワードは？」「ルーターに書いてあるよ」"
  }
 },
 "mensaje": {
  "nuance": "「メッセージ」の基本語。mensaje de texto（テキストメッセージ）、dejar un mensaje（伝言を残す）のような表現もよく使う。",
  "etymology": "ラテン語missus（送られたもの）に由来。",
  "synonyms": [],
  "derived": [
   "mensajero（メッセンジャー、配達人）"
  ],
  "dialogue": {
   "es": "— Te mandé un mensaje ayer.\n— Perdón, no lo vi. Ahora lo leo.",
   "ja": "「昨日メッセージ送ったよ」「ごめん、見てなかった。今読むね」"
  }
 },
 "red social": {
  "nuance": "「SNS」の基本語。redes sociales（複数形）で「SNS全般」を指すことが多い。",
  "etymology": "red（網）+ social（社会的な）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "red（網、ネットワーク）"
  ],
  "dialogue": {
   "es": "— ¿Qué red social usas más?\n— Principalmente Instagram.",
   "ja": "「一番よく使うSNSは？」「主にインスタグラムかな」"
  }
 },
 "usuario": {
  "nuance": "「ユーザー」の基本語。SNSの「ユーザー名」という意味にもなる（¿cuál es tu usuario?＝ユーザー名は何？）。",
  "etymology": "usar（使う）から派生した語。",
  "synonyms": [],
  "derived": [
   "usar（使う）",
   "uso（使用）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es tu usuario en Instagram?\n— Te lo mando por mensaje.",
   "ja": "「インスタのユーザー名何？」「メッセージで送るね」"
  }
 },
 "publicación": {
  "nuance": "「投稿」の基本語。publicar（公開する、投稿する）の名詞形。",
  "etymology": "ラテン語publicare（公にする）に由来。",
  "synonyms": [],
  "derived": [
   "publicar（投稿する、出版する）"
  ],
  "dialogue": {
   "es": "— Vi tu última publicación.\n— ¿Te gustó?",
   "ja": "「君の最新の投稿見たよ」「気に入った？」"
  }
 },
 "comentario": {
  "nuance": "「コメント」の基本語。comentar（コメントする、論評する）の名詞形。",
  "etymology": "ラテン語commentarius（注釈書）に由来。",
  "synonyms": [],
  "derived": [
   "comentar（コメントする）"
  ],
  "dialogue": {
   "es": "— Gracias por tu comentario.\n— De nada, me encantó tu publicación.",
   "ja": "「コメントありがとう」「どういたしまして、君の投稿とても良かったよ」"
  }
 },
 "enlace": {
  "nuance": "「リンク」の基本語。link（英語のまま）と言われることも多い。",
  "etymology": "enlazar（結びつける）から派生した語。",
  "synonyms": [
   "link（リンク、口語）"
  ],
  "derived": [
   "enlazar（結びつける）"
  ],
  "dialogue": {
   "es": "— Te mando el enlace por correo.\n— Perfecto, gracias.",
   "ja": "「メールでリンク送るね」「ありがとう、助かるよ」"
  }
 },
 "archivo": {
  "nuance": "「ファイル」の基本語。「公文書館、アーカイブ」という意味にもなる。",
  "etymology": "ラテン語archivum（公文書保管所）に由来。",
  "synonyms": [],
  "derived": [
   "archivar（保存する、ファイルする）"
  ],
  "dialogue": {
   "es": "— No encuentro el archivo que me enviaste.\n— Te lo mando de nuevo.",
   "ja": "「君が送ってくれたファイルが見つからないんだ」「もう一度送るね」"
  }
 },
 "carpeta": {
  "nuance": "「フォルダ」の基本語。英語のcarpet（じゅうたん）と似ているが無関係な紛らわしい単語（false friend）。",
  "etymology": "ラテン語carpere（つかむ、集める）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Guardé los documentos en esta carpeta.\n— Perfecto, así los encuentro fácilmente.",
   "ja": "「書類はこのフォルダに保存したよ」「完璧、それなら簡単に見つけられるね」"
  }
 },
 "navegador": {
  "nuance": "「ブラウザ」の基本語。navegar（航海する→ネットサーフィンする）から派生。",
  "etymology": "navegar（航海する）から派生した語。",
  "synonyms": [],
  "derived": [
   "navegar（ネットサーフィンする、航海する）"
  ],
  "dialogue": {
   "es": "— ¿Qué navegador usas?\n— Uso Chrome, principalmente.",
   "ja": "「どのブラウザ使ってる？」「主にChromeを使っているよ」"
  }
 },
 "oficina": {
  "nuance": "「オフィス」の基本語。oficina en casa（在宅ワークスペース）のような複合語もよく使われる。",
  "etymology": "ラテン語officina（仕事場）に由来。",
  "synonyms": [],
  "derived": [
   "oficinista（会社員）"
  ],
  "dialogue": {
   "es": "— ¿Trabajas desde la oficina o desde casa?\n— Depende del día.",
   "ja": "「オフィスで働いてるの、それとも家から？」「日による感じかな」"
  }
 },
 "jefe": {
  "nuance": "「上司」の基本語。女性形はjefa。カジュアルな呼びかけとして「ボス」という意味でも使われる。",
  "etymology": "フランス語chef（頭、リーダー）に由来。",
  "synonyms": [],
  "derived": [
   "jefatura（本部、指導部）"
  ],
  "dialogue": {
   "es": "— Mi jefe es muy comprensivo.\n— Qué suerte, no todos tienen eso.",
   "ja": "「私の上司はとても理解がある人なんだ」「それは幸運だね、みんながそうとは限らないから」"
  }
 },
 "empleado": {
  "nuance": "「従業員」の基本語。女性形はempleada。empleado del mes（今月の優秀従業員）のような表現もある。",
  "etymology": "emplear（雇う）の過去分詞から派生した語。",
  "synonyms": [],
  "derived": [
   "emplear（雇う）",
   "empleo（雇用）"
  ],
  "dialogue": {
   "es": "— Es un empleado muy dedicado.\n— Se nota, siempre llega temprano.",
   "ja": "「とても献身的な従業員なんだ」「わかるよ、いつも早く来ているもんね」"
  }
 },
 "reunión": {
  "nuance": "「会議」の基本語。reunión familiar（家族の集まり）のように、より広く「集まり」全般にも使われる。",
  "etymology": "reunir（集める）から派生した語。",
  "synonyms": [],
  "derived": [
   "reunir（集める）",
   "reunirse（集まる）"
  ],
  "dialogue": {
   "es": "— Tengo una reunión a las diez.\n— Yo también, ¿la misma sala?",
   "ja": "「10時に会議があるんだ」「私もだよ、同じ部屋？」"
  }
 },
 "computadora": {
  "nuance": "「パソコン」。メキシコを含むラテンアメリカで一般的な語。スペインではordenadorが使われる地域差の大きい単語。",
  "etymology": "computar（計算する）から派生した語。",
  "synonyms": [
   "ordenador（パソコン、スペイン）"
  ],
  "derived": [
   "computar（計算する）"
  ],
  "dialogue": {
   "es": "— Mi computadora se congeló otra vez.\n— Deberías reiniciarla.",
   "ja": "「またパソコンがフリーズしたんだ」「再起動した方がいいよ」"
  }
 },
 "correo electrónico": {
  "nuance": "「メール」の基本語。口語ではcorreoやemail（英語のまま）と短縮されることも多い。",
  "etymology": "correo（郵便）+ electrónico（電子の）の組み合わせ。",
  "synonyms": [
   "email（メール、口語）"
  ],
  "derived": [
   "correo（郵便、メール）"
  ],
  "dialogue": {
   "es": "— Te mandé un correo electrónico ayer.\n— Voy a revisarlo ahora.",
   "ja": "「昨日メール送ったよ」「今確認するね」"
  }
 },
 "proyecto": {
  "nuance": "「プロジェクト」の基本語。trabajar en un proyecto（プロジェクトに取り組む）はよく使う組み合わせ。",
  "etymology": "ラテン語proiectus（前に投げられたもの→計画）に由来。",
  "synonyms": [],
  "derived": [
   "proyectar（計画する、投影する）"
  ],
  "dialogue": {
   "es": "— ¿Cómo va el proyecto?\n— Vamos bien, casi terminamos.",
   "ja": "「プロジェクトの調子はどう？」「順調だよ、もうすぐ終わるよ」"
  }
 },
 "sueldo": {
  "nuance": "「給料」の基本語。salario（給与、ややフォーマル）ともほぼ同義。",
  "etymology": "ラテン語solidus（古代ローマの金貨）に由来。",
  "synonyms": [
   "salario（給与、フォーマル）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cuándo cobras tu sueldo?\n— El último día del mes.",
   "ja": "「給料はいつ受け取るの？」「月末だよ」"
  }
 },
 "entrevista": {
  "nuance": "「面接」だけでなく「インタビュー」という意味にもなる。",
  "etymology": "フランス語entrevue（見合い、面談）に由来。",
  "synonyms": [],
  "derived": [
   "entrevistar（面接する、インタビューする）"
  ],
  "dialogue": {
   "es": "— Tengo una entrevista de trabajo mañana.\n— ¡Mucha suerte!",
   "ja": "「明日仕事の面接があるんだ」「頑張って！」"
  }
 },
 "currículum": {
  "nuance": "「履歴書」の基本語。CV（curriculum vitaeの略）と呼ばれることも多い。",
  "etymology": "ラテン語curriculum vitae（人生の経歴）に由来。",
  "synonyms": [
   "CV（履歴書、略称）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Necesito actualizar mi currículum.\n— Te puedo ayudar si quieres.",
   "ja": "「履歴書を更新する必要があるんだ」「よければ手伝うよ」"
  }
 },
 "cliente": {
  "nuance": "「顧客」の基本語。女性形はclienta（一部地域）またはclienteのまま使う地域もある。",
  "etymology": "ラテン語cliens（保護される者、依頼人）に由来。",
  "synonyms": [],
  "derived": [
   "clientela（顧客層）"
  ],
  "dialogue": {
   "es": "— El cliente quedó muy satisfecho.\n— Excelente, eso es lo importante.",
   "ja": "「お客様はとても満足していたよ」「素晴らしい、それが大事だよね」"
  }
 },
 "horario": {
  "nuance": "「スケジュール・時間割」の基本語。horario de trabajo（勤務時間）のような複合語もよく使われる。",
  "etymology": "hora（時間）から派生した語。",
  "synonyms": [],
  "derived": [
   "hora（時間）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es tu horario de trabajo?\n— Trabajo de nueve a cinco.",
   "ja": "「勤務時間は？」「9時から5時まで働いているよ」"
  }
 },
 "olla": {
  "nuance": "「鍋」の基本語。olla exprés（圧力鍋）のような複合語もよく使われる。",
  "etymology": "ラテン語olla（壺、鍋）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Pon la olla en la estufa.\n— Ya la puse, está calentando.",
   "ja": "「鍋をコンロにかけて」「もう置いたよ、温まっているところ」"
  }
 },
 "sartén": {
  "nuance": "「フライパン」の基本語。地域によって女性名詞（la sartén）と男性名詞（el sartén）どちらも使われる珍しい単語。",
  "etymology": "ラテン語sartago（フライパン）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Necesito una sartén más grande.\n— Te presto la mía.",
   "ja": "「もっと大きいフライパンが必要なんだ」「私のを貸してあげるよ」"
  }
 },
 "cuchillo": {
  "nuance": "「包丁・ナイフ」の基本語。cuchillo de cocina（調理用包丁）のように用途を明示することも多い。",
  "etymology": "俗ラテン語cultellus（小さな刃物）に由来。",
  "synonyms": [],
  "derived": [
   "cuchillería（刃物店）"
  ],
  "dialogue": {
   "es": "— Este cuchillo está muy afilado.\n— Ten cuidado al usarlo.",
   "ja": "「この包丁とても切れ味がいいね」「使うとき気をつけてね」"
  }
 },
 "cuchara": {
  "nuance": "「スプーン」の基本語。cucharita（小さじ、ティースプーン）は指小形。",
  "etymology": "ラテン語cochlear（スプーン）に由来。",
  "synonyms": [],
  "derived": [
   "cucharita（小さじ）",
   "cucharada（大さじ一杯分）"
  ],
  "dialogue": {
   "es": "— Pásame una cuchara, por favor.\n— Aquí tienes.",
   "ja": "「スプーンとってもらえる？」「はい、どうぞ」"
  }
 },
 "tenedor": {
  "nuance": "「フォーク」の基本語。tener（持つ）と同語源、「持つ道具」が原義。",
  "etymology": "tener（持つ）から派生した語。",
  "synonyms": [],
  "derived": [
   "tener（持つ）"
  ],
  "dialogue": {
   "es": "— Se me cayó el tenedor.\n— Te traigo otro.",
   "ja": "「フォークを落としちゃった」「別のを持ってくるね」"
  }
 },
 "plato": {
  "nuance": "「皿」だけでなく「料理・一品」という意味にもなる（plato del día＝本日の料理）。",
  "etymology": "フランス語plat（平たい）に由来。",
  "synonyms": [],
  "derived": [
   "platillo（小皿、メキシコでは「料理」の意味も）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es tu plato favorito?\n— Los tacos al pastor, sin duda.",
   "ja": "「好きな料理は何？」「タコス・アル・パストール、間違いなく」"
  }
 },
 "vaso": {
  "nuance": "「コップ」の基本語。copa（ワイングラスのような脚付きグラス）とは形状が異なる。",
  "etymology": "ラテン語vas（容器）に由来。",
  "synonyms": [
   "copa（脚付きグラス）"
  ],
  "derived": [
   "vasija（容器）"
  ],
  "dialogue": {
   "es": "— ¿Me das un vaso de agua?\n— Claro, enseguida.",
   "ja": "「水を一杯もらえる？」「もちろん、すぐに」"
  }
 },
 "taza": {
  "nuance": "「マグカップ」の基本語。計量単位の「カップ」という意味にもなる（レシピでよく使われる）。",
  "etymology": "アラビア語ṭāsa（皿、椀）に由来。",
  "synonyms": [],
  "derived": [
   "tazón（大きめのボウル）"
  ],
  "dialogue": {
   "es": "— Me regalaron una taza muy bonita.\n— ¿La usas para café o té?",
   "ja": "「とてもきれいなマグカップをもらったんだ」「コーヒー用？それともお茶用？」"
  }
 },
 "licuadora": {
  "nuance": "「ミキサー」の基本語。メキシコ料理（サルサやアグアフレスカ作り）で頻繁に使われる家電。",
  "etymology": "licuar（液状にする）から派生した語。",
  "synonyms": [],
  "derived": [
   "licuar（液状にする）"
  ],
  "dialogue": {
   "es": "— Voy a hacer un jugo en la licuadora.\n— ¿Me haces uno a mí también?",
   "ja": "「ミキサーでジュース作るよ」「私の分も作ってくれる？」"
  }
 },
 "colador": {
  "nuance": "「ざる」の基本語。colar（濾す）から派生した語。",
  "etymology": "colar（濾す）から派生した語。",
  "synonyms": [],
  "derived": [
   "colar（濾す）"
  ],
  "dialogue": {
   "es": "— Pásame el colador para la pasta.\n— Aquí está.",
   "ja": "「パスタ用のざるとって」「はい、どうぞ」"
  }
 },
 "tabla de cortar": {
  "nuance": "「まな板」の基本語。tabla（板）+ cortar（切る）の組み合わせ。",
  "etymology": "tabla（板）+ cortar（切る）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "tabla（板）",
   "cortar（切る）"
  ],
  "dialogue": {
   "es": "— Necesito lavar la tabla de cortar.\n— Yo la lavo, no te preocupes.",
   "ja": "「まな板を洗う必要があるんだ」「私が洗うよ、気にしないで」"
  }
 },
 "delantal": {
  "nuance": "「エプロン」の基本語。",
  "etymology": "delante（前に）から派生した語、体の前につけるものが原義。",
  "synonyms": [],
  "derived": [
   "delante（前に）"
  ],
  "dialogue": {
   "es": "— Ponte el delantal antes de cocinar.\n— Buena idea, no quiero mancharme.",
   "ja": "「料理する前にエプロンつけて」「いい考えだね、汚れたくないもんね」"
  }
 },
 "enero": {
  "nuance": "「1月」。スペイン語の月名は小文字で書くのが正式（英語と違う点）。",
  "etymology": "ローマ神話の門の神ヤヌス（Janus）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Mi cumpleaños es en enero.\n— El mío también, ¿qué día?",
   "ja": "「私の誕生日は1月なんだ」「私もだよ、何日？」"
  }
 },
 "febrero": {
  "nuance": "「2月」。Día de San Valentín（バレンタインデー）がある月。",
  "etymology": "ローマの浄化の儀式februa（清め）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Febrero es el mes más corto.\n— Sí, solo tiene 28 días.",
   "ja": "「2月は一番短い月だね」「うん、28日しかないもんね」"
  }
 },
 "marzo": {
  "nuance": "「3月」。ローマ神話の軍神マルス（Marte）に由来する月名。",
  "etymology": "ローマ神話の軍神マルス（Mars）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— En marzo empieza la primavera aquí.\n— Qué bien, ya quiero que llegue.",
   "ja": "「ここでは3月に春が始まるんだ」「いいね、もう待ちきれないよ」"
  }
 },
 "abril": {
  "nuance": "「4月」。Semana Santa（聖週間）がこの時期に祝われることが多い。",
  "etymology": "ラテン語aperire（開く→花が開く月）に由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué planes tienes para abril?\n— Voy a viajar durante Semana Santa.",
   "ja": "「4月の予定は？」「聖週間の間に旅行するつもりだよ」"
  }
 },
 "mayo": {
  "nuance": "「5月」。Cinco de Mayo（5月5日）はメキシコの祝日として海外でも知られている。",
  "etymology": "ローマ神話の豊穣の女神マイア（Maia）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El 5 de mayo se celebra la batalla de Puebla.\n— Es un día importante en México.",
   "ja": "「5月5日にプエブラの戦いが祝われるんだ」「メキシコでは重要な日だよね」"
  }
 },
 "junio": {
  "nuance": "「6月」。北半球では夏の始まりの月。",
  "etymology": "ローマ神話の女神ユノ（Juno）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— En junio termina el semestre.\n— Por fin, ya quiero vacaciones.",
   "ja": "「6月に学期が終わるんだ」「やっと、もう休暇が欲しいよ」"
  }
 },
 "julio": {
  "nuance": "「7月」。ローマの政治家ユリウス・カエサル（Julio César）に由来する月名。",
  "etymology": "ユリウス・カエサル（Julius Caesar）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Julio es el mes más caluroso aquí.\n— Aquí también, hace mucho calor.",
   "ja": "「ここでは7月が一番暑い月なんだ」「こっちも同じだよ、とても暑いんだ」"
  }
 },
 "agosto": {
  "nuance": "「8月」。ローマ皇帝アウグストゥス（Augusto）に由来する月名。",
  "etymology": "初代ローマ皇帝アウグストゥス（Augustus）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Muchas empresas cierran en agosto en España.\n— Sí, es temporada de vacaciones.",
   "ja": "「スペインでは8月に多くの企業が休業するんだ」「うん、休暇シーズンだからね」"
  }
 },
 "septiembre": {
  "nuance": "「9月」。メキシコの独立記念日（9月16日）がある月。",
  "etymology": "ラテン語septem（7）に由来（古代ローマ暦では7番目の月だった）。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El 16 de septiembre es el Día de la Independencia.\n— Debe haber una gran celebración.",
   "ja": "「9月16日は独立記念日なんだ」「きっと大きなお祝いがあるんだろうね」"
  }
 },
 "octubre": {
  "nuance": "「10月」。ラテン語で「8番目」を意味する語から（古代ローマ暦の名残）。",
  "etymology": "ラテン語octo（8）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— En octubre empieza a hacer frío aquí.\n— Aquí también empieza el otoño.",
   "ja": "「ここでは10月から寒くなり始めるんだ」「こっちも秋が始まるよ」"
  }
 },
 "noviembre": {
  "nuance": "「11月」。メキシコの死者の日（11月1〜2日）がある月として特に重要。",
  "etymology": "ラテン語novem（9）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El Día de los Muertos es en noviembre.\n— Es una de mis tradiciones favoritas.",
   "ja": "「死者の日は11月にあるんだ」「私のお気に入りの伝統行事の一つだよ」"
  }
 },
 "diciembre": {
  "nuance": "「12月」。ラテンアメリカやスペインではクリスマスとNavidadの飾り付けで賑わう月。",
  "etymology": "ラテン語decem（10）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Diciembre es mi mes favorito del año.\n— El mío también, me encanta la Navidad.",
   "ja": "「12月は私の一番好きな月なんだ」「私もだよ、クリスマスが大好きなんだ」"
  }
 },
 "salud": {
  "nuance": "「健康」の基本語。乾杯するときの掛け声¡Salud!（乾杯！/お大事に）としてもよく使われる。",
  "etymology": "ラテン語salus（健康、安全）に由来。",
  "synonyms": [],
  "derived": [
   "saludable（健康的な）",
   "saludar（挨拶する）"
  ],
  "dialogue": {
   "es": "— La salud es lo más importante.\n— Totalmente de acuerdo.",
   "ja": "「健康が一番大事だよね」「まったく同感だよ」"
  }
 },
 "enfermedad": {
  "nuance": "「病気」の基本語。enfermo（病気の、形容詞）と同語源。",
  "etymology": "ラテン語infirmitas（弱さ、病弱）に由来。",
  "synonyms": [],
  "derived": [
   "enfermo（病気の）",
   "enfermar（病気になる）"
  ],
  "dialogue": {
   "es": "— Esa enfermedad es muy común en invierno.\n— Sí, hay que cuidarse mucho.",
   "ja": "「その病気は冬にとてもよくあるんだ」「うん、しっかり気をつけないとね」"
  }
 },
 "resfriado": {
  "nuance": "「風邪」の基本語。resfriarse（風邪をひく、再帰動詞）から派生。gripeは「インフルエンザ」でより症状が重い。",
  "etymology": "resfriar（冷やす）から派生した語。",
  "synonyms": [
   "gripe（インフルエンザ、より重い）"
  ],
  "derived": [
   "resfriarse（風邪をひく）"
  ],
  "dialogue": {
   "es": "— Creo que tengo un resfriado.\n— Deberías descansar y tomar líquidos.",
   "ja": "「風邪をひいたみたいなんだ」「休んで水分をたくさん取った方がいいよ」"
  }
 },
 "fiebre": {
  "nuance": "「発熱」の基本語。tener fiebre（熱がある）はよく使う組み合わせ。",
  "etymology": "ラテン語febris（熱）に由来。",
  "synonyms": [],
  "derived": [
   "febril（熱のある）"
  ],
  "dialogue": {
   "es": "— Tengo fiebre desde anoche.\n— Deberías tomarte la temperatura.",
   "ja": "「昨夜から熱があるんだ」「体温を測った方がいいよ」"
  }
 },
 "dolor": {
  "nuance": "「痛み」の基本語。dolor de cabeza（頭痛）、dolor de estómago（腹痛）のように「dolor de+部位」で具体的な痛みを表す。",
  "etymology": "ラテン語dolor（痛み、苦しみ）に由来。",
  "synonyms": [],
  "derived": [
   "doler（痛む）",
   "doloroso（痛い、辛い）"
  ],
  "dialogue": {
   "es": "— Tengo un dolor de cabeza terrible.\n— ¿Quieres una pastilla?",
   "ja": "「ひどい頭痛がするんだ」「錠剤いる？」"
  }
 },
 "medicina": {
  "nuance": "「薬」だけでなく「医学」という意味にもなる基本語。",
  "etymology": "ラテン語medicina（医術、薬）に由来。",
  "synonyms": [],
  "derived": [
   "médico（医者）",
   "medicar（薬を処方する）"
  ],
  "dialogue": {
   "es": "— ¿Ya tomaste tu medicina?\n— Sí, la tomé después de comer.",
   "ja": "「もう薬飲んだ？」「うん、食後に飲んだよ」"
  }
 },
 "vacuna": {
  "nuance": "「ワクチン」の基本語。vacunarse（ワクチンを接種する、再帰動詞）とセットで覚えると便利。",
  "etymology": "vaca（牛）に由来（牛痘から天然痘ワクチンが開発されたことから）。",
  "synonyms": [],
  "derived": [
   "vacunar（ワクチン接種する）",
   "vacunarse（ワクチンを接種する）"
  ],
  "dialogue": {
   "es": "— ¿Ya te pusiste la vacuna?\n— Sí, me la puse la semana pasada.",
   "ja": "「もうワクチン打った？」「うん、先週打ったよ」"
  }
 },
 "receta": {
  "nuance": "「処方箋」と「レシピ」の両方の意味を持つ単語。文脈で判断する。",
  "etymology": "ラテン語recepta（受け取られたもの）に由来。",
  "synonyms": [],
  "derived": [
   "recetar（処方する）"
  ],
  "dialogue": {
   "es": "— Necesito una receta para esta medicina.\n— El médico te la puede dar.",
   "ja": "「この薬には処方箋が必要なんだ」「医者が出してくれるよ」"
  }
 },
 "clínica": {
  "nuance": "「クリニック」の基本語。hospital（病院、より大規模）とは規模が異なる。",
  "etymology": "ギリシャ語klinike（ベッドサイドの医療）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Hay una clínica cerca de mi casa.\n— Qué conveniente.",
   "ja": "「家の近くにクリニックがあるんだ」「なんて便利なんだろう」"
  }
 },
 "síntoma": {
  "nuance": "「症状」の基本語。-maで終わるギリシャ語源の男性名詞（el síntoma）。",
  "etymology": "ギリシャ語symptoma（付随して起こること）に由来。",
  "synonyms": [],
  "derived": [
   "sintomático（症状のある）"
  ],
  "dialogue": {
   "es": "— ¿Cuáles son tus síntomas?\n— Tengo tos y dolor de garganta.",
   "ja": "「症状は何ですか」「咳と喉の痛みがあります」"
  }
 },
 "alergia": {
  "nuance": "「アレルギー」の基本語。tener alergia a（〜にアレルギーがある）という前置詞との組み合わせ。",
  "etymology": "ギリシャ語allos（他の）+ ergon（反応）に由来。",
  "synonyms": [],
  "derived": [
   "alérgico（アレルギーのある）"
  ],
  "dialogue": {
   "es": "— Tengo alergia a los mariscos.\n— Debo tenerlo en cuenta al cocinar.",
   "ja": "「甲殻類アレルギーがあるんだ」「料理するとき気をつけないとね」"
  }
 },
 "cirugía": {
  "nuance": "「手術」の基本語。cirujano（外科医）と同語源。",
  "etymology": "ギリシャ語kheirourgia（手仕事）に由来。",
  "synonyms": [],
  "derived": [
   "cirujano（外科医）",
   "quirúrgico（外科の）"
  ],
  "dialogue": {
   "es": "— Va a tener una cirugía la próxima semana.\n— Espero que todo salga bien.",
   "ja": "「来週手術を受けるんだ」「すべてうまくいくといいね」"
  }
 },
 "venda": {
  "nuance": "「包帯」の基本語。vendar（包帯を巻く）から派生。",
  "etymology": "ゲルマン語系の語binda（結びつけるもの）に由来。",
  "synonyms": [],
  "derived": [
   "vendar（包帯を巻く）"
  ],
  "dialogue": {
   "es": "— Necesito una venda para esta herida.\n— Tengo un botiquín en el coche.",
   "ja": "「この傷に包帯が必要なんだ」「車に救急箱があるよ」"
  }
 },
 "emergencia": {
  "nuance": "「緊急事態」の基本語。en caso de emergencia（緊急の場合）はよく見る表示。",
  "etymology": "ラテン語emergere（浮かび上がる、突然現れる）に由来。",
  "synonyms": [],
  "derived": [
   "emerger（現れる）"
  ],
  "dialogue": {
   "es": "— Esto es una emergencia, necesito ayuda.\n— Voy enseguida.",
   "ja": "「これは緊急事態なんだ、助けが必要なんだ」「すぐ行くよ」"
  }
 },
 "ambulancia": {
  "nuance": "「救急車」の基本語。llamar una ambulancia（救急車を呼ぶ）はよく使う表現。",
  "etymology": "フランス語hôpital ambulant（移動病院）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¡Llama a una ambulancia!\n— Ya la llamé, está en camino.",
   "ja": "「救急車を呼んで！」「もう呼んだよ、向かっているところ」"
  }
 },
 "accidente": {
  "nuance": "「事故」の基本語。por accidente（偶然に、うっかり）という表現もある。",
  "etymology": "ラテン語accidere（起こる）に由来。",
  "synonyms": [],
  "derived": [
   "accidental（偶然の）"
  ],
  "dialogue": {
   "es": "— Hubo un accidente en la carretera.\n— Espero que nadie salga herido.",
   "ja": "「道路で事故があったんだ」「誰も怪我しないといいね」"
  }
 },
 "peligro": {
  "nuance": "「危険」の基本語。fuera de peligro（危険を脱して）のような表現も医療現場でよく使われる。",
  "etymology": "ラテン語periculum（危険、試み）に由来。",
  "synonyms": [],
  "derived": [
   "peligroso（危険な）"
  ],
  "dialogue": {
   "es": "— Esa zona es de mucho peligro de noche.\n— Mejor evitarla entonces.",
   "ja": "「あの地域は夜とても危険なんだ」「それなら避けた方がいいね」"
  }
 },
 "seguridad": {
  "nuance": "「安全・治安」の基本語。cinturón de seguridad（シートベルト）のような複合語もよく使われる。",
  "etymology": "seguro（安全な）から派生した語。",
  "synonyms": [],
  "derived": [
   "seguro（安全な、保険）",
   "asegurar（保証する）"
  ],
  "dialogue": {
   "es": "— La seguridad es importante en este barrio.\n— Sí, hay que tener cuidado por la noche.",
   "ja": "「この地区では治安が重要なんだ」「うん、夜は気をつけないとね」"
  }
 },
 "moneda": {
  "nuance": "「通貨・硬貨」の両方の意味を持つ単語。moneda extranjera（外国通貨）のような表現もある。",
  "etymology": "ローマ神話の女神ユノ・モネタ（Juno Moneta、貨幣鋳造所があった神殿）に由来。",
  "synonyms": [],
  "derived": [
   "monedero（財布、小銭入れ）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es la moneda de México?\n— Es el peso mexicano.",
   "ja": "「メキシコの通貨は何？」「メキシコペソだよ」"
  }
 },
 "tarjeta de crédito": {
  "nuance": "「クレジットカード」の基本語。tarjeta de débito（デビットカード）と区別される。",
  "etymology": "tarjeta（カード）+ crédito（信用）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "crédito（信用、クレジット）"
  ],
  "dialogue": {
   "es": "— ¿Aceptan tarjeta de crédito?\n— Sí, también aceptamos débito.",
   "ja": "「クレジットカード使えますか」「はい、デビットカードも使えますよ」"
  }
 },
 "cajero automático": {
  "nuance": "「ATM」の基本語。口語ではcajeroと短縮されることも多い。",
  "etymology": "caja（レジ、金庫）から派生した語。",
  "synonyms": [],
  "derived": [
   "caja（レジ）",
   "cajero（レジ係、ATM）"
  ],
  "dialogue": {
   "es": "— Necesito encontrar un cajero automático.\n— Hay uno en la esquina.",
   "ja": "「ATMを見つける必要があるんだ」「角にあるよ」"
  }
 },
 "préstamo": {
  "nuance": "「ローン」の基本語。prestar（貸す）から派生した語。",
  "etymology": "prestar（貸す）から派生した語。",
  "synonyms": [],
  "derived": [
   "prestar（貸す）",
   "prestado（借りた）"
  ],
  "dialogue": {
   "es": "— Pedimos un préstamo para comprar la casa.\n— Espero que las tasas sean buenas.",
   "ja": "「家を買うためにローンを組んだんだ」「金利がいいといいね」"
  }
 },
 "ahorro": {
  "nuance": "「貯金」の基本語。ahorrar（貯金する、節約する）の名詞形。",
  "etymology": "アラビア語horr（自由な）に由来するとされる。",
  "synonyms": [],
  "derived": [
   "ahorrar（貯金する）"
  ],
  "dialogue": {
   "es": "— Tengo pocos ahorros todavía.\n— Poco a poco vas a lograrlo.",
   "ja": "「まだ貯金があまりないんだ」「少しずつ達成できるよ」"
  }
 },
 "impuesto": {
  "nuance": "「税金」の基本語。impuesto sobre la renta（所得税）のような複合語もよく使われる。",
  "etymology": "imponer（課す）の過去分詞から派生した語。",
  "synonyms": [],
  "derived": [
   "imponer（課す）"
  ],
  "dialogue": {
   "es": "— Los impuestos subieron este año.\n— Sí, lo he notado en mi sueldo.",
   "ja": "「今年は税金が上がったね」「うん、給料で気づいたよ」"
  }
 },
 "presupuesto": {
  "nuance": "「予算」の基本語。hacer un presupuesto（予算を組む）はよく使う表現。",
  "etymology": "presuponer（前提とする）から派生した語。",
  "synonyms": [],
  "derived": [
   "presuponer（前提とする）"
  ],
  "dialogue": {
   "es": "— Necesitamos hacer un presupuesto para el viaje.\n— Buena idea, así no gastamos de más.",
   "ja": "「旅行の予算を組む必要があるね」「いい考えだね、そうすれば使いすぎないから」"
  }
 },
 "efectivo": {
  "nuance": "「現金」の基本語。en efectivo（現金で）はよく使う表現。",
  "etymology": "efectivo（実効的な、実際の）から意味が転じた語。",
  "synonyms": [],
  "derived": [
   "efecto（効果）"
  ],
  "dialogue": {
   "es": "— ¿Pagas en efectivo o con tarjeta?\n— En efectivo, por favor.",
   "ja": "「現金で払う？それともカード？」「現金でお願いします」"
  }
 },
 "recibo": {
  "nuance": "「領収書」の基本語。recibir（受け取る）から派生した語。",
  "etymology": "recibir（受け取る）から派生した語。",
  "synonyms": [],
  "derived": [
   "recibir（受け取る）"
  ],
  "dialogue": {
   "es": "— ¿Me da el recibo, por favor?\n— Claro, aquí está.",
   "ja": "「レシートいただけますか」「もちろん、こちらです」"
  }
 },
 "estar en las nubes": {
  "nuance": "「上の空である、ぼーっとしている」。直訳は「雲の中にいる」で、日本語の「上の空」と発想が似ている面白いイディオム。",
  "etymology": "estar（いる）+ en las nubes（雲の中に）の組み合わせ。",
  "synonyms": [
   "estar distraído（気が散っている）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Me estás escuchando?\n— Perdón, estaba en las nubes.",
   "ja": "「私の話聞いてる？」「ごめん、上の空だった」"
  }
 },
 "costar un ojo de la cara": {
  "nuance": "「非常に高い」。直訳は「顔の目玉の値段がする」で、日本語の「目が飛び出るほど高い」と似た発想。",
  "etymology": "costar（値段がする）+ un ojo de la cara（顔の目玉）の組み合わせ。",
  "synonyms": [
   "ser muy caro（とても高い、直接的な表現）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Ese reloj me costó un ojo de la cara.\n— Debe ser muy bueno entonces.",
   "ja": "「あの時計はものすごく高かったんだ」「それならきっといい時計なんだろうね」"
  }
 },
 "tomar el pelo": {
  "nuance": "「からかう」。直訳は「髪を引っ張る」。¿Me estás tomando el pelo?（からかってるの？）は日常会話でよく使う。",
  "etymology": "tomar（取る）+ el pelo（髪）の組み合わせ。",
  "synonyms": [
   "burlarse de（〜をからかう）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Me estás tomando el pelo?\n— No, hablo en serio.",
   "ja": "「からかってるの？」「いや、本気で言っているんだ」"
  }
 },
 "meter la pata": {
  "nuance": "「やらかす、失敗する」。直訳は「足を突っ込む」。会話や行動で失敗したときに使う口語表現。",
  "etymology": "meter（入れる）+ la pata（動物の足）の組み合わせ。",
  "synonyms": [
   "equivocarse（間違える）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Creo que metí la pata en la reunión.\n— ¿Qué pasó?",
   "ja": "「会議でやらかしちゃったと思う」「何があったの？」"
  }
 },
 "ser pan comido": {
  "nuance": "「朝飯前だ」。直訳は「食べられたパン」。とても簡単なことを表す口語表現。",
  "etymology": "ser（である）+ pan comido（食べられたパン）の組み合わせ。",
  "synonyms": [
   "ser muy fácil（とても簡単だ）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Puedes hacer esto?\n— Claro, es pan comido.",
   "ja": "「これできる？」「もちろん、朝飯前だよ」"
  }
 },
 "ponerse las pilas": {
  "nuance": "「気合を入れる、本気を出す」。直訳は「電池を入れる」。やる気を出す必要があるときによく使われる口語表現。",
  "etymology": "ponerse（自分に入れる）+ las pilas（電池）の組み合わせ。",
  "synonyms": [
   "esforzarse（努力する）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Tienes que ponerte las pilas para el examen.\n— Tienes razón, voy a estudiar más.",
   "ja": "「試験に向けて気合を入れないとだめだよ」「その通りだね、もっと勉強するよ」"
  }
 },
 "echar de menos": {
  "nuance": "🇪🇸 主にスペインで使われる表現。extrañar（恋しく思う、ラテンアメリカでより一般的）とほぼ同じ意味。メキシコではextrañarの方が圧倒的によく使われるので、そちらを優先して覚えるのがおすすめ。",
  "etymology": "echar（投げる）+ de menos（不足を）の組み合わせ、元は「不足を感じる」の意。",
  "synonyms": [
   "extrañar（恋しく思う、ラテンアメリカ）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Te echo de menos.\n— Yo también te extraño mucho.",
   "ja": "「君が恋しいよ」「私もあなたがとても恋しいよ」"
  }
 },
 "dar en el clavo": {
  "nuance": "「図星をつく、的確に言い当てる」。直訳は「釘に当てる」。",
  "etymology": "dar（当てる）+ en el clavo（釘に）の組み合わせ。",
  "synonyms": [
   "acertar（言い当てる）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Diste en el clavo con esa respuesta.\n— Gracias, lo pensé bien.",
   "ja": "「その答え、まさに図星だったよ」「ありがとう、よく考えたんだ」"
  }
 },
 "hacer la vista gorda": {
  "nuance": "「見て見ぬふりをする」。直訳は「太った視線を作る」で少し奇妙だが、よく使われる口語表現。",
  "etymology": "hacer（する）+ la vista gorda（太った視線）の組み合わせ、由来ははっきりしない。",
  "synonyms": [
   "ignorar（無視する）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— El profesor hizo la vista gorda con mi tardanza.\n— Qué suerte tuviste.",
   "ja": "「先生は私の遅刻を見て見ぬふりしてくれたんだ」「なんてラッキーだったんだろう」"
  }
 },
 "quedarse de piedra": {
  "nuance": "「あぜんとする、驚いて固まる」。直訳は「石になる」。ショックな知らせを聞いたときの反応を表す。",
  "etymology": "quedarse（〜のままになる）+ de piedra（石で）の組み合わせ。",
  "synonyms": [
   "quedarse boquiabierto（あっけにとられる）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Me quedé de piedra cuando escuché la noticia.\n— Yo también, no me lo esperaba.",
   "ja": "「その知らせを聞いてあぜんとしたよ」「私もだよ、予想していなかったから」"
  }
 },
 "fijarse en": {
  "nuance": "「〜に気づく、注目する」。darse cuenta de（〜に気がつく、結果としての気づき）とはニュアンスがやや異なり、fijarse enは意識的に注意を向けるイメージ。",
  "etymology": "fijar（固定する）+ en（〜に）の組み合わせ。",
  "synonyms": [
   "notar（気づく）"
  ],
  "derived": [
   "fijo（固定した）"
  ],
  "dialogue": {
   "es": "— Fíjate bien antes de cruzar la calle.\n— Sí, siempre miro a ambos lados.",
   "ja": "「道を渡る前によく注意してね」「うん、いつも両側を見ているよ」"
  }
 },
 "darse cuenta de": {
  "nuance": "「〜に気がつく」。ある事実に後から気づく、という結果的な気づきを表す。",
  "etymology": "dar（与える）+ cuenta（勘定、認識）の再帰形。",
  "synonyms": [
   "notar（気づく）"
  ],
  "derived": [
   "cuenta（勘定、口座）"
  ],
  "dialogue": {
   "es": "— Me di cuenta de mi error muy tarde.\n— A todos nos pasa alguna vez.",
   "ja": "「自分の間違いにとても遅く気づいたんだ」「誰にでもそういうことはあるよ」"
  }
 },
 "atreverse a": {
  "nuance": "「あえて〜する、思い切って〜する」。勇気を出して行動するというニュアンスの再帰動詞。",
  "etymology": "ラテン語attribuere（自分に引き受ける）に由来するとされる。",
  "synonyms": [
   "animarse a（思い切って〜する）"
  ],
  "derived": [
   "atrevido（大胆な）"
  ],
  "dialogue": {
   "es": "— No me atrevo a decírselo.\n— Deberías intentarlo, te vas a sentir mejor.",
   "ja": "「それを彼に言う勇気がないんだ」「試してみるべきだよ、気持ちが楽になるから」"
  }
 },
 "quejarse de": {
  "nuance": "「〜に文句を言う、不満を言う」。quejaは「不満、苦情」という名詞にもなる。",
  "etymology": "俗ラテン語quassiare（激しく揺さぶる→嘆く）に由来。",
  "synonyms": [],
  "derived": [
   "queja（不満）"
  ],
  "dialogue": {
   "es": "— Siempre te quejas del clima.\n— Es que hace demasiado calor aquí.",
   "ja": "「いつも天気について文句言ってるね」「だってここは暑すぎるんだもん」"
  }
 },
 "negarse a": {
  "nuance": "「〜することを拒否する」。negar（否定する）の再帰形。",
  "etymology": "ラテン語negare（否定する）に由来。",
  "synonyms": [
   "rechazar（拒否する）"
  ],
  "derived": [
   "negar（否定する）",
   "negativo（否定的な）"
  ],
  "dialogue": {
   "es": "— Se negó a firmar el contrato.\n— ¿Por qué? ¿Había algún problema?",
   "ja": "「彼は契約書にサインすることを拒否したんだ」「どうして？何か問題があったの？」"
  }
 },
 "sin duda": {
  "nuance": "「間違いなく、疑いなく」。意見を強調するときによく使う副詞句。",
  "etymology": "sin（〜なしで）+ duda（疑い）の組み合わせ。",
  "synonyms": [
   "definitivamente（絶対に）"
  ],
  "derived": [
   "dudar（疑う）"
  ],
  "dialogue": {
   "es": "— Sin duda, es la mejor película del año.\n— Estoy totalmente de acuerdo.",
   "ja": "「間違いなく、今年最高の映画だね」「まったく同感だよ」"
  }
 },
 "por lo tanto": {
  "nuance": "「したがって」。論理的な結論を導くときに使うフォーマルな接続表現。",
  "etymology": "por（〜によって）+ lo tanto（それほど）の組み合わせ。",
  "synonyms": [
   "así que（だから）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— No estudié, por lo tanto, no aprobé.\n— La próxima vez estudia más.",
   "ja": "「勉強しなかった、だから合格しなかったんだ」「次はもっと勉強してね」"
  }
 },
 "en cuanto a": {
  "nuance": "「〜に関しては」。話題を切り替えるときによく使うフォーマルな表現。",
  "etymology": "en（〜において）+ cuanto（〜だけ）+ a（〜に）の組み合わせ。",
  "synonyms": [
   "respecto a（〜に関して）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— En cuanto a tu pregunta, no estoy seguro.\n— Está bien, investigaré por mi cuenta.",
   "ja": "「君の質問に関しては、確信が持てないんだ」「大丈夫、自分で調べてみるよ」"
  }
 },
 "a pesar de": {
  "nuance": "「〜にもかかわらず」。逆接を表す前置詞句、後ろに名詞または動詞の原形が続く。",
  "etymology": "a（〜に）+ pesar（重さ、苦しみ）+ de（〜の）の組み合わせ。",
  "synonyms": [
   "aunque（〜だけれども）"
  ],
  "derived": [
   "pesar（後悔する、重さがある）"
  ],
  "dialogue": {
   "es": "— A pesar de la lluvia, fuimos al parque.\n— Qué valientes.",
   "ja": "「雨にもかかわらず、公園に行ったんだ」「なんて勇敢なんだ」"
  }
 },
 "de hecho": {
  "nuance": "「実は、実際に」。前の内容を補強したり、意外な事実を付け加えたりするときに使う。",
  "etymology": "de（〜の）+ hecho（事実）の組み合わせ。",
  "synonyms": [
   "en realidad（実は）"
  ],
  "derived": [
   "hecho（事実、hacerの過去分詞）"
  ],
  "dialogue": {
   "es": "— De hecho, ya había terminado el proyecto.\n— ¡Qué eficiente!",
   "ja": "「実は、もうプロジェクトを終えていたんだ」「なんて効率的なんだ！」"
  }
 },
 "chamba": {
  "nuance": "「仕事」のとてもくだけた言い方。trabajoよりずっとカジュアルで、友人同士の会話でよく使われる。フォーマルな場では使わない。",
  "etymology": "バスク語zamba（重労働）に由来するとされる。",
  "synonyms": [
   "trabajo（仕事、標準語）"
  ],
  "derived": [
   "chambear（働く、口語動詞）"
  ],
  "dialogue": {
   "es": "— ¿Cómo va la chamba?\n— Bien, aunque hay mucho que hacer.",
   "ja": "「仕事どう？」「順調だよ、やることは多いけどね」"
  }
 },
 "güey": {
  "nuance": "友人同士で「お前」「やつ」のように使う、メキシコで非常によく聞く単語。目上の人や初対面の人には使わない、親しい間柄限定の言葉。文脈によっては侮辱的にもなり得るので使い所に注意。",
  "etymology": "buey（去勢牛、間抜けという意味の俗語）から転じたとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué onda, güey?\n— Todo bien, ¿y tú?",
   "ja": "「よお、元気？」「元気だよ、お前は？」"
  }
 },
 "neta": {
  "nuance": "「本当のこと、マジで」という意味の万能スラング。¿Neta?（マジで？）、la neta es que...（実を言うと〜）のように色々な形で使われる。",
  "etymology": "neto（正味の、純粋な）から派生した口語表現。",
  "synonyms": [
   "en serio（本気で）",
   "de verdad（本当に）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Gané la lotería.\n— ¿Neta? ¡Qué envidia!",
   "ja": "「宝くじ当たったんだ」「マジで？うらやましい！」"
  }
 },
 "chido": {
  "nuance": "「かっこいい、いいね」という意味のメキシコの口語。padreもほぼ同じ意味でよく使われる。",
  "etymology": "起源は諸説あり、はっきりしない。",
  "synonyms": [
   "padre（いいね、メキシコの口語）",
   "genial（すごい）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¡Qué chido tu carro nuevo!\n— Gracias, lo compré la semana pasada.",
   "ja": "「新しい車かっこいいね！」「ありがとう、先週買ったんだ」"
  }
 },
 "no manches": {
  "nuance": "「うそでしょ、まさか」という驚きを表すメキシコの口語表現。より強い（下品とされる）バリエーションno mamesもあるが、no manchesの方が上品で広く使われる。",
  "etymology": "mancharse（汚れる）を避けた婉曲表現とされる。",
  "synonyms": [
   "¿en serio?（本当に？）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Choqué el carro de mi papá.\n— ¡No manches! ¿Está bien el carro?",
   "ja": "「お父さんの車をぶつけちゃったんだ」「うそでしょ！車は大丈夫？」"
  }
 },
 "¿qué onda?": {
  "nuance": "友人へのカジュアルな挨拶で「調子どう？」に近い。ondaは直訳すると「波」だが、この表現では「調子・様子」を意味する。",
  "etymology": "qué（何）+ onda（波）の組み合わせ。",
  "synonyms": [
   "¿qué tal?（調子どう？）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué onda? ¿Cómo te ha ido?\n— Todo bien, gracias por preguntar.",
   "ja": "「調子どう？最近どんな感じ？」「順調だよ、聞いてくれてありがとう」"
  }
 },
 "lana": {
  "nuance": "「ウール、毛糸」の基本語。口語では「お金」を指すスラングとしても非常によく使われる（地域や世代によってplataやferiaなど他の言い方も好まれる）。文脈で判断する。",
  "etymology": "lana（羊毛）が比喩的に「お金」の意味に転じたとされる。",
  "synonyms": [
   "dinero（お金、標準語）",
   "feria（お金、口語）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— No tengo lana para salir hoy.\n— No te preocupes, yo invito.",
   "ja": "「今日出かけるお金がないんだ」「気にしないで、私がおごるよ」"
  }
 },
 "feria": {
  "nuance": "「お金・小銭」を指すメキシコの口語表現。標準的な意味の「お祭り、見本市」とは別の俗語的な使い方。",
  "etymology": "feria（市、定期市）から、市で使うお金という連想で意味が転じたとされる。",
  "synonyms": [
   "lana（お金、口語）",
   "dinero（お金、標準語）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cuánta feria tienes?\n— Tengo como cien pesos.",
   "ja": "「お金いくら持ってる？」「100ペソくらいかな」"
  }
 },
 "crudo": {
  "nuance": "「二日酔いの」という意味の口語表現。標準的な意味は「生の、未加工の」だが、体調を表す俗語としても非常によく使われる。",
  "etymology": "crudo（生の）が比喩的に「（お酒で）まだ消化しきれていない」という意味に転じたとされる。",
  "synonyms": [
   "resaca（二日酔い、名詞形）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Estoy bien crudo hoy.\n— Bebiste mucho anoche, ¿verdad?",
   "ja": "「今日はひどい二日酔いなんだ」「昨夜たくさん飲んだんでしょ？」"
  }
 },
 "fresa": {
  "nuance": "「いちご」の基本語。口語では「気取っている、お坊ちゃん・お嬢様風の」という意味の形容詞としても使われる（皮肉を込めて使われることが多い）。文脈で判断する。",
  "etymology": "fresa（いちご）が「甘ったるい、気取った」というイメージから意味が転じたとされる。",
  "synonyms": [
   "presumido（うぬぼれた）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Es un poco fresa, ¿no crees?\n— Un poco, pero es buena persona.",
   "ja": "「彼女はちょっと気取っていると思わない？」「少しね、でもいい人だよ」"
  }
 },
 "órale": {
  "nuance": "「おおっ、さあ、了解」など場面に応じて色々な意味になる万能の間投詞。メキシコのスペイン語を象徴する言葉の一つ。",
  "etymology": "ahora（今）が変化したとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Ya casi llegamos.\n— ¡Órale! Vámonos entonces.",
   "ja": "「もうすぐ着くよ」「よし！じゃあ行こう」"
  }
 },
 "no tener pelos en la lengua": {
  "nuance": "「歯に衣着せぬ、率直に言う」。直訳は「舌に毛がない」で、思ったことをストレートに言う人を表す口語表現。",
  "etymology": "no tener（持たない）+ pelos en la lengua（舌の上の毛）の組み合わせ。",
  "synonyms": [
   "ser muy directo（とても率直だ）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Mi abuela no tiene pelos en la lengua.\n— Sí, siempre dice lo que piensa.",
   "ja": "「私の祖母は歯に衣着せぬ人なんだ」「うん、いつも思ったことを言うよね」"
  }
 },
 "estar como agua para chocolate": {
  "nuance": "「かんかんに怒っている」。メキシコ発祥の表現で、同名の小説・映画のタイトルにもなった。直訳は「ホットチョコレート用のお湯のようだ」で、沸騰寸前の状態から怒りを連想させる。",
  "etymology": "agua para chocolate（ホットチョコレートを作るための熱湯）に由来。",
  "synonyms": [
   "estar furioso（激怒している）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Está como agua para chocolate desde que perdió el trabajo.\n— Pobre, debe estar pasando por mucho estrés.",
   "ja": "「彼は仕事を失ってからかんかんに怒っているんだ」「かわいそうに、きっとすごくストレスを抱えているんだろうね」"
  }
 },
 "estar hasta las narices": {
  "nuance": "🇪🇸 主にスペインで使われる表現。「うんざりしている」という意味。メキシコでは estar harto（うんざりしている）や estar hasta la madre（口語、より強い表現）の方がよく使われる。",
  "etymology": "estar（いる）+ hasta las narices（鼻まで）の組み合わせ。",
  "synonyms": [
   "estar harto（うんざりしている）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Estoy hasta las narices de este proyecto.\n— Ya casi terminamos, aguanta un poco más.",
   "ja": "「このプロジェクトにはもううんざりだよ」「もうすぐ終わるから、もう少し頑張って」"
  }
 },
 "írsele la mano": {
  "nuance": "「（何かを）やり過ぎる」。直訳は「手が行ってしまう」で、力加減や量を間違えたときに使う。",
  "etymology": "irse（行く）+ la mano（手）の再帰的な組み合わせ。",
  "synonyms": [
   "excederse（度を超す）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Se me fue la mano con la sal.\n— No importa, igual está rico.",
   "ja": "「塩を入れすぎちゃった」「大丈夫、それでも美味しいよ」"
  }
 },
 "ni fu ni fa": {
  "nuance": "「どうでもいい、まあまあ」という無関心・平凡さを表す口語表現。",
  "etymology": "擬音的な表現で、明確な語源はない。",
  "synonyms": [
   "así así（まあまあ）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué te pareció la película?\n— Ni fu ni fa, no fue nada especial.",
   "ja": "「映画どうだった？」「まあまあかな、特に何もなかったよ」"
  }
 },
 "poner los puntos sobre las íes": {
  "nuance": "「細部まではっきりさせる」。直訳は「iの上に点を打つ」で、あいまいさを残さず明確にすることを表す。",
  "etymology": "poner（置く）+ los puntos（点）+ sobre las íes（iの上に）の組み合わせ。",
  "synonyms": [
   "aclarar todo（すべてを明確にする）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Vamos a poner los puntos sobre las íes antes de firmar.\n— Buena idea, mejor evitar malentendidos.",
   "ja": "「サインする前に、細かいところをはっきりさせよう」「いい考えだね、誤解は避けた方がいいから」"
  }
 },
 "írsele el santo al cielo": {
  "nuance": "🇪🇸 主にスペインで使われる表現。「すっかり忘れる」という意味。直訳は「聖人が天に行ってしまう」。メキシコでは単に se me olvidó por completo（すっかり忘れた）と言う方が自然。",
  "etymology": "irse（行く）+ el santo（聖人）+ al cielo（天に）の再帰的な組み合わせ。",
  "synonyms": [
   "olvidarse por completo（完全に忘れる）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Se me fue el santo al cielo, olvidé tu cumpleaños.\n— No te preocupes, no pasa nada.",
   "ja": "「すっかり忘れてた、君の誕生日を忘れちゃった」「気にしないで、大丈夫だよ」"
  }
 },
 "tirar la toalla": {
  "nuance": "「あきらめる」。英語のthrow in the towelと同じボクシング由来の表現。",
  "etymology": "ボクシングで、セコンドがタオルを投げ入れて試合を止めさせることに由来。",
  "synonyms": [
   "rendirse（降参する）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— No voy a tirar la toalla tan fácilmente.\n— Así se habla, sigue adelante.",
   "ja": "「そう簡単にはあきらめないよ」「その意気だよ、続けよう」"
  }
 },
 "estar hecho polvo": {
  "nuance": "🇪🇸 主にスペインで使われる表現。「くたくたに疲れている」という意味。メキシコでは estar muerto（口語）や estar exhausto の方が通じやすい。",
  "etymology": "estar（いる）+ hecho polvo（ほこりになった）の組み合わせ。",
  "synonyms": [
   "estar exhausto（疲れ果てている）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Estoy hecho polvo después del viaje.\n— Descansa bien esta noche.",
   "ja": "「旅行の後でくたくたなんだ」「今夜はしっかり休んでね」"
  }
 },
 "no dar pie con bola": {
  "nuance": "「何をやってもうまくいかない」。直訳は「ボールに足を当てられない」というサッカー由来のような表現。",
  "etymology": "dar pie con bola（ボールに足を当てる）の否定形。",
  "synonyms": [
   "no acertar（うまくいかない）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Hoy no doy pie con bola.\n— A todos nos pasa a veces, mañana será mejor.",
   "ja": "「今日は何をやってもうまくいかないんだ」「誰にでもあることだよ、明日はきっと良くなるよ」"
  }
 },
 "ser uña y carne": {
  "nuance": "「切っても切れない仲」。直訳は「爪と肉」で、爪と皮膚のように離れられない親密な関係を表す。",
  "etymology": "uña（爪）+ carne（肉）の組み合わせ。",
  "synonyms": [
   "ser inseparables（離れられない仲）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Mi mejor amiga y yo somos uña y carne.\n— Se nota, siempre están juntas.",
   "ja": "「親友と私は切っても切れない仲なんだ」「わかるよ、いつも一緒にいるもんね」"
  }
 },
 "tomar el toro por los cuernos": {
  "nuance": "「正面から立ち向かう」。直訳は「牛の角をつかむ」という闘牛由来の表現。",
  "etymology": "闘牛で牛の角を直接つかむ危険な行為に由来。",
  "synonyms": [
   "enfrentar el problema（問題に立ち向かう）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Hay que tomar el toro por los cuernos y resolver esto.\n— Tienes razón, no podemos seguir evitándolo.",
   "ja": "「これは正面から立ち向かって解決しないと」「その通りだね、避け続けるわけにはいかないもんね」"
  }
 },
 "costar un huevo": {
  "nuance": "「ものすごく高い」という口語表現。costar un ojo de la caraとほぼ同義だが、こちらの方がよりカジュアル（一部地域ではやや下品とされることもある）。",
  "etymology": "costar（値段がする）+ un huevo（卵一つ）の組み合わせ。",
  "synonyms": [
   "costar un ojo de la cara（目玉が飛び出るほど高い）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Este celular me costó un huevo.\n— Espero que valga la pena.",
   "ja": "「この携帯すごく高かったんだ」「その価値があるといいね」"
  }
 },
 "estar pez en algo": {
  "nuance": "🇪🇸 主にスペインで使われる表現（メキシコではあまり通じないので注意）。「まったく知識がない」という意味。直訳は「魚である」で、その分野について全く分からない状態を表す。メキシコでは代わりに no saber nada de（〜について何も知らない）や no tener ni idea（全く見当もつかない）の方が通じやすい。",
  "etymology": "estar（いる）+ pez（魚）の組み合わせ、由来ははっきりしない。",
  "synonyms": [
   "no saber nada de（〜について何も知らない）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Estoy pez en informática.\n— No te preocupes, yo te puedo ayudar.",
   "ja": "「私、IT関係は全然わからないんだ」「心配しないで、手伝ってあげるよ」"
  }
 },
 "írsele la olla": {
  "nuance": "🇪🇸 主にスペインで使われる表現。「頭がおかしくなる、我を忘れる」という意味。メキシコでは perder la cabeza や volverse loco の方が一般的。",
  "etymology": "irse（行く）+ la olla（鍋、頭の比喩）の再帰的な組み合わせ。",
  "synonyms": [
   "perder la cabeza（頭がおかしくなる）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Se le fue la olla y gritó frente a todos.\n— Qué vergüenza, espero que se disculpe.",
   "ja": "「彼は我を忘れてみんなの前で怒鳴ったんだ」「恥ずかしいね、謝るといいけど」"
  }
 },
 "dar la lata": {
  "nuance": "🇪🇸 主にスペインで使われる表現。「うるさく迷惑をかける」という意味。メキシコでは fastidiar や molestar の方が広く通じる。",
  "etymology": "由来ははっきりしないが、古い機械の缶が立てる不快な音に関連するとされる。",
  "synonyms": [
   "molestar（迷惑をかける）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Mi hermano menor siempre me da la lata.\n— Los hermanos menores son así a veces.",
   "ja": "「弟はいつも私にうるさくつきまとうんだ」「弟ってそういうものだよね、時々」"
  }
 },
 "ponerse las botas": {
  "nuance": "🇪🇸 主にスペインで使われる表現。「思う存分楽しむ、たらふく食べる」という意味。メキシコではあまり使われないので、通じない場合がある。",
  "etymology": "かつて裕福な人だけがブーツを履けたことに由来するとされる。",
  "synonyms": [
   "disfrutar al máximo（最大限楽しむ）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Nos pusimos las botas en la boda.\n— La comida se veía deliciosa.",
   "ja": "「結婚式でたらふく食べたよ」「料理美味しそうだったもんね」"
  }
 },
 "estar en pañales": {
  "nuance": "「まだ始まったばかりである」。直訳は「おむつをしている」で、赤ちゃんの状態から未熟さ・初期段階を連想させる。",
  "etymology": "pañal（おむつ）から派生した表現。",
  "synonyms": [
   "estar empezando（始まったばかりだ）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— El proyecto todavía está en pañales.\n— Entiendo, hay mucho por hacer todavía.",
   "ja": "「プロジェクトはまだ始まったばかりなんだ」「わかるよ、まだやることがたくさんあるんだね」"
  }
 },
 "salirse con la suya": {
  "nuance": "「自分の思い通りにする」という口語表現。多くの場合、他人の反対を押し切って、という少しネガティブなニュアンスを含む。",
  "etymology": "salirse（出る）+ con la suya（自分のものと共に）の組み合わせ。",
  "synonyms": [
   "imponer su voluntad（自分の意志を押し通す）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Siempre se sale con la suya.\n— Es porque es muy insistente.",
   "ja": "「彼はいつも自分の思い通りにするんだ」「すごくしつこいからね」"
  }
 },
 "estar en la luna": {
  "nuance": "「ぼーっとしている、上の空である」。直訳は「月にいる」で、周りのことに気づいていない状態を表す。",
  "etymology": "estar（いる）+ en la luna（月に）の組み合わせ。",
  "synonyms": [
   "estar distraído（気が散っている）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Me estás escuchando?\n— Perdón, estaba en la luna.",
   "ja": "「私の話聞いてる？」「ごめん、ぼーっとしてた」"
  }
 },
 "ser el pan de cada día": {
  "nuance": "「日常茶飯事である」。直訳は「毎日のパンである」で、ありふれた出来事を表す。",
  "etymology": "pan de cada día（毎日のパン）は主の祈りにも登場する聖書由来の表現。",
  "synonyms": [
   "ser algo común（よくあることだ）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Los embotellamientos son el pan de cada día aquí.\n— Sí, hay que salir con tiempo.",
   "ja": "「ここでは交通渋滞は日常茶飯事なんだ」「うん、時間に余裕を持って出ないとね」"
  }
 },
 "meter la cuchara": {
  "nuance": "「（頼まれてもいないのに）口を挟む」。直訳は「スプーンを入れる」。",
  "etymology": "meter（入れる）+ la cuchara（スプーン）の組み合わせ。",
  "synonyms": [
   "entrometerse（干渉する）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Siempre mete la cuchara en las conversaciones ajenas.\n— Sí, puede ser un poco molesto.",
   "ja": "「彼はいつも他人の会話に口を挟むんだ」「うん、ちょっと迷惑なこともあるよね」"
  }
 },
 "dar en el blanco": {
  "nuance": "「的を射る、まさにその通りだ」。直訳は「的（白い的）に当てる」。",
  "etymology": "dar（当てる）+ en el blanco（的に）の組み合わせ、射撃・アーチェリー由来。",
  "synonyms": [
   "acertar（言い当てる）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Diste en el blanco con esa idea.\n— Gracias, lo pensé mucho.",
   "ja": "「そのアイデアはまさに的を射ていたね」「ありがとう、よく考えたんだ」"
  }
 },
 "no tener ni pies ni cabeza": {
  "nuance": "「まったく筋が通らない」。直訳は「足も頭もない」で、論理が破綻している状態を表す。",
  "etymology": "no tener（持たない）+ ni pies ni cabeza（足も頭も）の組み合わせ。",
  "synonyms": [
   "no tener sentido（意味をなさない）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Esta explicación no tiene ni pies ni cabeza.\n— Tienes razón, pidamos que la repita.",
   "ja": "「この説明、まったく筋が通ってないよ」「その通りだね、もう一度説明してもらおう」"
  }
 },
 "ser la gota que colma el vaso": {
  "nuance": "「我慢の限界を超えるきっかけとなる出来事」。直訳は「コップを溢れさせる一滴」。",
  "etymology": "la gota（一滴）+ que colma el vaso（コップを満たす）の組み合わせ。",
  "synonyms": [
   "ser el colmo（限界だ）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Ese comentario fue la gota que colmó el vaso.\n— Entiendo que ya no pudieras aguantar más.",
   "ja": "「あの発言が我慢の限界を超えるきっかけだったんだ」「もう耐えられなかったのも理解できるよ」"
  }
 },
 "física": {
  "nuance": "「物理学」の基本語。female article laがつく（-aで終わる学問名は一般的に女性名詞）。",
  "etymology": "ギリシャ語physiké（自然に関する学問）に由来。",
  "synonyms": [],
  "derived": [
   "físico（物理学者、物理的な）"
  ],
  "dialogue": {
   "es": "— La física cuántica es fascinante.\n— Sí, aunque es difícil de entender.",
   "ja": "「量子物理学は魅力的だよね」「うん、理解するのは難しいけどね」"
  }
 },
 "química": {
  "nuance": "「化学」の基本語。",
  "etymology": "アラビア語al-kīmiyā（錬金術）に由来。",
  "synonyms": [],
  "derived": [
   "químico（化学者、化学の）"
  ],
  "dialogue": {
   "es": "— La química fue mi materia favorita en la escuela.\n— La mía era biología.",
   "ja": "「化学は学校で一番好きな科目だったんだ」「私は生物学だったよ」"
  }
 },
 "biología": {
  "nuance": "「生物学」の基本語。",
  "etymology": "ギリシャ語bios（生命）+ logia（学問）に由来。",
  "synonyms": [],
  "derived": [
   "biólogo（生物学者）",
   "biológico（生物学的な）"
  ],
  "dialogue": {
   "es": "— Estudio biología marina.\n— Qué interesante, ¿trabajas con delfines?",
   "ja": "「海洋生物学を学んでいるんだ」「面白いね、イルカと関わったりするの？」"
  }
 },
 "matemáticas": {
  "nuance": "「数学」の基本語。常に複数形で使われる（英語のmathematicsと同じパターン）。",
  "etymology": "ギリシャ語mathema（学ぶべきもの）に由来。",
  "synonyms": [],
  "derived": [
   "matemático（数学者、数学の）"
  ],
  "dialogue": {
   "es": "— Nunca se me dieron bien las matemáticas.\n— A mí me encantaban.",
   "ja": "「数学は昔から得意じゃなかったんだ」「私は大好きだったよ」"
  }
 },
 "experimento": {
  "nuance": "「実験」の基本語。hacer un experimento（実験をする）はよく使う組み合わせ。",
  "etymology": "ラテン語experimentum（試み）に由来。",
  "synonyms": [],
  "derived": [
   "experimentar（実験する、経験する）"
  ],
  "dialogue": {
   "es": "— Vamos a hacer un experimento en clase de ciencias.\n— ¡Qué emocionante!",
   "ja": "「理科の授業で実験をするんだ」「わくわくするね！」"
  }
 },
 "átomo": {
  "nuance": "「原子」の基本語。",
  "etymology": "ギリシャ語atomos（分割できないもの）に由来。",
  "synonyms": [],
  "derived": [
   "atómico（原子の）"
  ],
  "dialogue": {
   "es": "— El átomo es la unidad básica de la materia.\n— Sí, lo aprendí en la escuela.",
   "ja": "「原子は物質の基本単位だよね」「うん、学校で習ったよ」"
  }
 },
 "célula": {
  "nuance": "「細胞」の基本語。",
  "etymology": "ラテン語cellula（小さな部屋）に由来。",
  "synonyms": [],
  "derived": [
   "celular（細胞の、携帯電話）"
  ],
  "dialogue": {
   "es": "— Todos los seres vivos están hechos de células.\n— Es fascinante cómo funciona la biología.",
   "ja": "「すべての生物は細胞でできているんだよね」「生物学の仕組みって魅力的だよね」"
  }
 },
 "planeta": {
  "nuance": "「惑星」の基本語。-aで終わるが男性名詞（ギリシャ語源）。",
  "etymology": "ギリシャ語planetes（さまよう星）に由来。",
  "synonyms": [],
  "derived": [
   "planetario（プラネタリウム）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es tu planeta favorito?\n— Me encanta Saturno por sus anillos.",
   "ja": "「好きな惑星は？」「土星が輪っかがあって大好きなんだ」"
  }
 },
 "gravedad": {
  "nuance": "「重力」の基本語。比喩的に「重大さ」という意味にもなる。",
  "etymology": "ラテン語gravitas（重さ）に由来。",
  "synonyms": [],
  "derived": [
   "grave（深刻な、重い）"
  ],
  "dialogue": {
   "es": "— La gravedad es lo que nos mantiene en el suelo.\n— Sin ella, todos flotaríamos.",
   "ja": "「重力が私たちを地面に留めているんだよね」「それがなかったら、みんな浮いちゃうよね」"
  }
 },
 "energía": {
  "nuance": "「エネルギー」の基本語。「元気、活力」という日常的な意味でもよく使われる。",
  "etymology": "ギリシャ語energeia（活動）に由来。",
  "synonyms": [],
  "derived": [
   "enérgico（活力のある）"
  ],
  "dialogue": {
   "es": "— Tienes mucha energía hoy.\n— Sí, dormí muy bien anoche.",
   "ja": "「今日はとても元気だね」「うん、昨夜よく眠れたんだ」"
  }
 },
 "laboratorio": {
  "nuance": "「研究室、実験室」の基本語。",
  "etymology": "ラテン語laborare（働く）に由来。",
  "synonyms": [],
  "derived": [
   "laborar（働く）"
  ],
  "dialogue": {
   "es": "— Trabajo en un laboratorio de investigación.\n— ¿Qué tipo de investigación haces?",
   "ja": "「研究室で働いているんだ」「どんな研究をしているの？」"
  }
 },
 "teoría": {
  "nuance": "「理論」の基本語。en teoría（理論上は）という表現もよく使う。",
  "etymology": "ギリシャ語theoria（観察、考察）に由来。",
  "synonyms": [],
  "derived": [
   "teórico（理論的な）"
  ],
  "dialogue": {
   "es": "— En teoría, esto debería funcionar.\n— Vamos a probarlo y ver qué pasa.",
   "ja": "「理論上は、これはうまくいくはずなんだ」「試してみて何が起こるか見てみよう」"
  }
 },
 "universo": {
  "nuance": "「宇宙」の基本語。",
  "etymology": "ラテン語universum（一つにまとまったもの）に由来。",
  "synonyms": [],
  "derived": [
   "universal（普遍的な）"
  ],
  "dialogue": {
   "es": "— El universo es infinito, según los científicos.\n— Es difícil de imaginar.",
   "ja": "「科学者によると宇宙は無限なんだって」「想像するのが難しいね」"
  }
 },
 "pintura": {
  "nuance": "「絵画」の基本語。「ペンキ」という意味にもなる。",
  "etymology": "pintar（描く）から派生した語。",
  "synonyms": [],
  "derived": [
   "pintar（描く）",
   "pintor（画家）"
  ],
  "dialogue": {
   "es": "— Esta pintura es de un artista local.\n— Es realmente hermosa.",
   "ja": "「この絵画は地元のアーティストのものなんだ」「本当に美しいね」"
  }
 },
 "escultura": {
  "nuance": "「彫刻」の基本語。",
  "etymology": "ラテン語sculpere（彫る）に由来。",
  "synonyms": [],
  "derived": [
   "esculpir（彫刻する）",
   "escultor（彫刻家）"
  ],
  "dialogue": {
   "es": "— Esa escultura es impresionante.\n— Sí, tardaron años en hacerla.",
   "ja": "「あの彫刻すごいね」「うん、作るのに何年もかかったんだって」"
  }
 },
 "novela": {
  "nuance": "「小説」の基本語。novela de misterio（ミステリー小説）のように種類を表す複合語も多い。",
  "etymology": "イタリア語novella（新しい物語）に由来。",
  "synonyms": [],
  "derived": [
   "novelista（小説家）"
  ],
  "dialogue": {
   "es": "— Estoy leyendo una novela muy buena.\n— ¿De qué trata?",
   "ja": "「とても良い小説を読んでいるんだ」「どんな話なの？」"
  }
 },
 "autor": {
  "nuance": "「著者」の基本語。女性形はautora。",
  "etymology": "ラテン語auctor（創始者、著者）に由来。",
  "synonyms": [],
  "derived": [
   "autoría（著作）"
  ],
  "dialogue": {
   "es": "— ¿Quién es el autor de este libro?\n— Es un escritor mexicano muy famoso.",
   "ja": "「この本の著者は誰？」「とても有名なメキシコの作家だよ」"
  }
 },
 "personaje": {
  "nuance": "「登場人物」の基本語。",
  "etymology": "persona（人）から派生した語。",
  "synonyms": [],
  "derived": [
   "personalidad（性格）"
  ],
  "dialogue": {
   "es": "— Mi personaje favorito es el protagonista.\n— El mío es el villano.",
   "ja": "「好きな登場人物は主人公なんだ」「私は悪役かな」"
  }
 },
 "trama": {
  "nuance": "「筋書き、プロット」の基本語。",
  "etymology": "ラテン語trama（織物の横糸）に由来、物語の「織り成す」イメージから。",
  "synonyms": [
   "argumento（あらすじ）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— La trama de esta serie es muy compleja.\n— Sí, hay que prestar mucha atención.",
   "ja": "「このドラマの筋書きはとても複雑だね」「うん、注意深く見ないとね」"
  }
 },
 "exposición": {
  "nuance": "「展覧会」の基本語。「説明、発表」という意味にもなる。",
  "etymology": "ラテン語expositio（提示）に由来。",
  "synonyms": [],
  "derived": [
   "exponer（展示する、説明する）"
  ],
  "dialogue": {
   "es": "— Hay una exposición de arte moderno en el museo.\n— ¿Quieres ir el fin de semana?",
   "ja": "「美術館で現代アートの展覧会があるんだ」「週末に行きたい？」"
  }
 },
 "galería": {
  "nuance": "「ギャラリー」の基本語。",
  "etymology": "イタリア語galleria（回廊）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Esta galería tiene obras de artistas locales.\n— Vamos a echar un vistazo.",
   "ja": "「このギャラリーには地元アーティストの作品があるんだ」「見に行こうよ」"
  }
 },
 "chistoso": {
  "nuance": "「面白い、おかしい」。chismosoと綴りが似ているが全くの別物なので注意（chiste＝ジョークから派生）。graciosoともほぼ同義。",
  "etymology": "chiste（冗談、ジョーク）から派生した語。",
  "synonyms": [
   "gracioso（面白い、ほぼ同義）"
  ],
  "derived": [
   "chiste（ジョーク）"
  ],
  "dialogue": {
   "es": "— Eres muy chistoso.\n— Gracias, me gusta hacer reír a la gente.",
   "ja": "「君はとても面白いね」「ありがとう、人を笑わせるのが好きなんだ」"
  }
 },
 "chismoso": {
  "nuance": "「噂好きな、ゴシップ好きな」。chistoso（面白い）と綴りが似ているが意味は全く違うので要注意（chisme＝噂話から派生）。",
  "etymology": "chisme（噂話、ゴシップ）から派生した語。",
  "synonyms": [],
  "derived": [
   "chisme（噂話）"
  ],
  "dialogue": {
   "es": "— No seas chismoso, no cuentes lo que te dije.\n— Tranquilo, no le voy a decir a nadie.",
   "ja": "「噂好きにならないで、言ったこと言いふらさないでね」「大丈夫、誰にも言わないよ」"
  }
 },
 "mentiroso": {
  "nuance": "「嘘つきな」。mentira（嘘）から派生した形容詞。",
  "etymology": "mentira（嘘）から派生した語。",
  "synonyms": [],
  "derived": [
   "mentira（嘘）",
   "mentir（嘘をつく）"
  ],
  "dialogue": {
   "es": "— No confío en él, es muy mentiroso.\n— Sí, siempre exagera todo.",
   "ja": "「彼は信用できないよ、すごく嘘つきなんだ」「うん、いつも何でも大げさに言うよね」"
  }
 },
 "miedoso": {
  "nuance": "「怖がりな」。miedo（恐怖）から派生した形容詞、口語でよく使われる。",
  "etymology": "miedo（恐怖）から派生した語。",
  "synonyms": [],
  "derived": [
   "miedo（恐怖）"
  ],
  "dialogue": {
   "es": "— Soy muy miedoso con las películas de terror.\n— Yo también, prefiero las comedias.",
   "ja": "「ホラー映画はすごく苦手なんだ」「私もだよ、コメディの方がいいな」"
  }
 },
 "envidioso": {
  "nuance": "「嫉妬深い」。envidia（嫉妬）から派生した形容詞。",
  "etymology": "envidia（嫉妬）から派生した語。",
  "synonyms": [],
  "derived": [
   "envidia（嫉妬）",
   "envidiar（嫉妬する）"
  ],
  "dialogue": {
   "es": "— No seas envidioso, alégrate por su éxito.\n— Tienes razón, debería estar feliz por él.",
   "ja": "「嫉妬しないで、彼の成功を喜んであげなよ」「その通りだね、彼のために喜ぶべきだね」"
  }
 },
 "famoso": {
  "nuance": "「有名な」の基本語。los famosos（有名人たち）という名詞的な使い方もよくされる。",
  "etymology": "ラテン語famosus（評判の高い）に由来。",
  "synonyms": [],
  "derived": [
   "fama（名声）"
  ],
  "dialogue": {
   "es": "— Ese actor es muy famoso en México.\n— Sí, ha estado en muchas películas.",
   "ja": "「あの俳優はメキシコでとても有名なんだ」「うん、たくさんの映画に出ているよね」"
  }
 },
 "ruidoso": {
  "nuance": "「うるさい、騒がしい」。ruido（音、騒音）から派生した形容詞。",
  "etymology": "ruido（騒音）から派生した語。",
  "synonyms": [],
  "derived": [
   "ruido（騒音）"
  ],
  "dialogue": {
   "es": "— Este vecindario es muy ruidoso por las noches.\n— Sí, hay muchos bares cerca.",
   "ja": "「この近所は夜とてもうるさいんだ」「うん、近くにバーがたくさんあるからね」"
  }
 },
 "peligroso": {
  "nuance": "「危険な」の基本語。peligro（危険）から派生した形容詞。",
  "etymology": "peligro（危険）から派生した語。",
  "synonyms": [],
  "derived": [
   "peligro（危険）"
  ],
  "dialogue": {
   "es": "— Esa zona es peligrosa de noche.\n— Mejor evitarla entonces.",
   "ja": "「あの地域は夜危険なんだ」「それなら避けた方がいいね」"
  }
 },
 "estudioso": {
  "nuance": "「勉強熱心な」。estudiar（勉強する）から派生した形容詞。",
  "etymology": "estudiar（勉強する）から派生した語。",
  "synonyms": [],
  "derived": [
   "estudiar（勉強する）",
   "estudio（勉強）"
  ],
  "dialogue": {
   "es": "— Mi hija es muy estudiosa.\n— Qué bueno, eso le ayudará mucho.",
   "ja": "「私の娘はとても勉強熱心なんだ」「それはいいね、きっと役に立つよ」"
  }
 },
 "ambicioso": {
  "nuance": "「野心的な」の基本語。ポジティブにもネガティブにも使われる。",
  "etymology": "ラテン語ambitiosus（野心のある）に由来。",
  "synonyms": [],
  "derived": [
   "ambición（野心）"
  ],
  "dialogue": {
   "es": "— Es muy ambicioso con su carrera.\n— Eso lo va a llevar lejos.",
   "ja": "「彼はキャリアにとても野心的なんだ」「それが彼を遠くまで導くだろうね」"
  }
 },
 "religioso": {
  "nuance": "「信心深い」の基本語。宗教施設を指す名詞的用法もある。",
  "etymology": "ラテン語religiosus（敬虔な）に由来。",
  "synonyms": [],
  "derived": [
   "religión（宗教）"
  ],
  "dialogue": {
   "es": "— Su familia es muy religiosa.\n— La mía también, vamos a misa cada domingo.",
   "ja": "「彼の家族はとても信心深いんだ」「私の家族もだよ、毎週日曜日にミサに行くんだ」"
  }
 },
 "sospechoso": {
  "nuance": "「怪しい、疑わしい」。名詞として「容疑者」という意味にもなる。",
  "etymology": "sospechar（疑う）から派生した語。",
  "synonyms": [],
  "derived": [
   "sospechar（疑う）",
   "sospecha（疑い）"
  ],
  "dialogue": {
   "es": "— Ese hombre se ve sospechoso.\n— Sí, mejor mantente alejado.",
   "ja": "「あの男は怪しく見えるね」「うん、離れておいた方がいいよ」"
  }
 },
 "vergonzoso": {
  "nuance": "「恥ずかしがりな（性格）」と「恥ずべき、みっともない（出来事）」の両方の意味を持つ。文脈で判断する。",
  "etymology": "vergüenza（恥）から派生した語。",
  "synonyms": [
   "tímido（内気な、性格の意味で）"
  ],
  "derived": [
   "vergüenza（恥）"
  ],
  "dialogue": {
   "es": "— De niño era muy vergonzoso.\n— Yo también, me costaba hablar en público.",
   "ja": "「子供の頃はとても恥ずかしがりだったんだ」「私もだよ、人前で話すのが苦手だった」"
  }
 },
 "cargador": {
  "nuance": "「充電器」の基本語。cargar（充電する、積む）から派生した語。",
  "etymology": "cargar（積む、充電する）から派生した語。",
  "synonyms": [],
  "derived": [
   "cargar（充電する）",
   "carga（積み荷、充電）"
  ],
  "dialogue": {
   "es": "— ¿Tienes un cargador que me prestes?\n— Sí, aquí tienes.",
   "ja": "「貸せる充電器持ってる？」「うん、はいどうぞ」"
  }
 },
 "seguidor": {
  "nuance": "「フォロワー」の基本語。seguir（従う、フォローする）から派生した語。",
  "etymology": "seguir（従う）から派生した語。",
  "synonyms": [],
  "derived": [
   "seguir（フォローする）"
  ],
  "dialogue": {
   "es": "— Tiene muchos seguidores en redes sociales.\n— Sí, es bastante popular.",
   "ja": "「彼女はSNSでフォロワーがたくさんいるんだ」「うん、かなり人気があるよね」"
  }
 },
 "notificación": {
  "nuance": "「通知」の基本語。desactivar las notificaciones（通知をオフにする）のような表現でよく使われる。",
  "etymology": "notificar（通知する）から派生した語。",
  "synonyms": [],
  "derived": [
   "notificar（通知する）"
  ],
  "dialogue": {
   "es": "— Tengo demasiadas notificaciones en el celular.\n— Deberías desactivar algunas.",
   "ja": "「携帯に通知が多すぎるんだ」「いくつかオフにした方がいいよ」"
  }
 },
 "descarga": {
  "nuance": "「ダウンロード」の基本語。descargar（ダウンロードする）の名詞形。",
  "etymology": "descargar（下ろす、ダウンロードする）から派生した語。",
  "synonyms": [],
  "derived": [
   "descargar（ダウンロードする）"
  ],
  "dialogue": {
   "es": "— La descarga está tardando mucho.\n— Debe ser el internet lento.",
   "ja": "「ダウンロードにとても時間がかかっているんだ」「ネットが遅いんだろうね」"
  }
 },
 "actualización": {
  "nuance": "「アップデート」の基本語。actualizar（更新する）の名詞形。",
  "etymology": "actualizar（更新する）から派生した語。",
  "synonyms": [],
  "derived": [
   "actualizar（更新する）",
   "actual（現在の）"
  ],
  "dialogue": {
   "es": "— Hay una actualización disponible para tu teléfono.\n— La instalaré más tarde.",
   "ja": "「あなたの携帯にアップデートがあるよ」「後でインストールするね」"
  }
 },
 "video": {
  "nuance": "「動画」の基本語。スペインではvídeo（アクセントつき）と綴ることも多い。",
  "etymology": "ラテン語video（私は見る）に由来。",
  "synonyms": [],
  "derived": [
   "videollamada（ビデオ通話）"
  ],
  "dialogue": {
   "es": "— Vi un video muy gracioso hoy.\n— Mándamelo, quiero verlo.",
   "ja": "「今日とても面白い動画見たんだ」「送って、見たいな」"
  }
 },
 "foto": {
  "nuance": "「写真」。fotografía（正式名称）の省略形で、-oで終わるのに女性名詞という例外。",
  "etymology": "fotografía（写真）の省略形。",
  "synonyms": [
   "fotografía（写真、正式名）"
  ],
  "derived": [
   "fotografiar（撮影する）",
   "fotógrafo（写真家）"
  ],
  "dialogue": {
   "es": "— ¿Me tomas una foto?\n— Claro, sonríe.",
   "ja": "「写真撮ってくれる？」「もちろん、笑って」"
  }
 },
 "inteligencia artificial": {
  "nuance": "「人工知能」の基本語。略してIAとも呼ばれる。",
  "etymology": "inteligencia（知能）+ artificial（人工の）の組み合わせ。",
  "synonyms": [
   "IA（略称）"
  ],
  "derived": [
   "inteligente（賢い）"
  ],
  "dialogue": {
   "es": "— La inteligencia artificial está cambiando todo.\n— Sí, es impresionante lo rápido que avanza.",
   "ja": "「人工知能がすべてを変えつつあるね」「うん、進歩の速さがすごいよね」"
  }
 },
 "robot": {
  "nuance": "「ロボット」の基本語。チェコ語由来の国際的な単語。",
  "etymology": "チェコ語robota（強制労働）に由来。",
  "synonyms": [],
  "derived": [
   "robótica（ロボット工学）"
  ],
  "dialogue": {
   "es": "— Este robot puede limpiar la casa solo.\n— Qué práctico, quiero uno.",
   "ja": "「このロボットは一人で家を掃除できるんだ」「便利だね、私も欲しいな」"
  }
 },
 "dron": {
  "nuance": "「ドローン」の基本語。英語droneのスペイン語表記。",
  "etymology": "英語drone（雄バチ、無人機）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Grabé el video con un dron.\n— Se ve increíble desde arriba.",
   "ja": "「ドローンでこの動画を撮ったんだ」「上から見るとすごいね」"
  }
 },
 "realidad virtual": {
  "nuance": "「バーチャルリアリティ」の基本語。略してVR（英語のまま）とも呼ばれる。",
  "etymology": "realidad（現実）+ virtual（仮想の）の組み合わせ。",
  "synonyms": [
   "VR（略称）"
  ],
  "derived": [
   "virtual（仮想の）"
  ],
  "dialogue": {
   "es": "— Probé unos lentes de realidad virtual.\n— ¿Cómo se sintió?",
   "ja": "「VRゴーグルを試したんだ」「どんな感じだった？」"
  }
 },
 "satélite": {
  "nuance": "「人工衛星」の基本語。GPS等の技術説明でよく使われる。",
  "etymology": "ラテン語satelles（従者）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Este satélite orbita la Tierra cada 90 minutos.\n— Qué velocidad tan increíble.",
   "ja": "「この衛星は90分ごとに地球を周回するんだ」「なんてすごい速さなんだ」"
  }
 },
 "servidor": {
  "nuance": "「サーバー」の基本語。servir（仕える、給仕する）から派生した語。",
  "etymology": "servir（仕える）から派生した語。",
  "synonyms": [],
  "derived": [
   "servir（仕える）"
  ],
  "dialogue": {
   "es": "— El servidor está caído otra vez.\n— Qué mal, no puedo acceder a mi cuenta.",
   "ja": "「サーバーがまた落ちているんだ」「困ったね、アカウントにアクセスできないよ」"
  }
 },
 "base de datos": {
  "nuance": "「データベース」の基本語。base（土台）+ de datos（データの）の組み合わせ。",
  "etymology": "base（土台）+ de datos（データの）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "dato（データ）"
  ],
  "dialogue": {
   "es": "— Necesito actualizar la base de datos.\n— ¿Cuánto tiempo va a tomar?",
   "ja": "「データベースを更新する必要があるんだ」「どれくらい時間かかりそう？」"
  }
 },
 "código": {
  "nuance": "「コード」の基本語。プログラミングの「コード」と「暗証番号」の両方の意味を持つ。",
  "etymology": "ラテン語codex（写本、法典）に由来。",
  "synonyms": [],
  "derived": [
   "codificar（コード化する）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es el código de la wifi?\n— Está en la parte de atrás del router.",
   "ja": "「Wi-Fiのコードは何？」「ルーターの裏に書いてあるよ」"
  }
 },
 "universidad": {
  "nuance": "「大学」の基本語。地域によってはuniと短縮されることも多い。",
  "etymology": "ラテン語universitas（全体、共同体）に由来。",
  "synonyms": [],
  "derived": [
   "universitario（大学の、大学生）"
  ],
  "dialogue": {
   "es": "— ¿En qué universidad estudias?\n— En la UNAM.",
   "ja": "「どこの大学で勉強してるの？」「UNAM(メキシコ国立自治大学)だよ」"
  }
 },
 "carrera": {
  "nuance": "「専攻・学部課程」と「競走」「キャリア」の両方の意味を持つ単語。文脈で判断する。",
  "etymology": "俗ラテン語carraria（荷車道）に由来。",
  "synonyms": [],
  "derived": [
   "carro（車）"
  ],
  "dialogue": {
   "es": "— ¿Qué carrera estudias?\n— Estudio medicina.",
   "ja": "「何を専攻しているの？」「医学を勉強しているよ」"
  }
 },
 "beca": {
  "nuance": "「奨学金」の基本語。tener una beca（奨学金をもらっている）はよく使う表現。",
  "etymology": "起源ははっきりしないが、俗ラテン語系の語とされる。",
  "synonyms": [],
  "derived": [
   "becario（奨学生）"
  ],
  "dialogue": {
   "es": "— Conseguí una beca para estudiar en el extranjero.\n— ¡Felicidades! Qué gran oportunidad.",
   "ja": "「海外留学の奨学金を獲得したんだ」「おめでとう！素晴らしい機会だね」"
  }
 },
 "examen": {
  "nuance": "「試験」の基本語。presentar un examen（試験を受ける）という組み合わせでよく使う。",
  "etymology": "ラテン語examen（計量、検査）に由来。",
  "synonyms": [],
  "derived": [
   "examinar（試験する、検査する）"
  ],
  "dialogue": {
   "es": "— Tengo un examen mañana.\n— ¡Suerte! Estudia bien.",
   "ja": "「明日試験があるんだ」「頑張って！しっかり勉強してね」"
  }
 },
 "tarea": {
  "nuance": "「宿題」の基本語。「任務、仕事」という一般的な意味でも使われる。",
  "etymology": "アラビア語ṭāriḥa（課された仕事）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Ya hiciste la tarea?\n— Todavía no, la hago después de cenar.",
   "ja": "「もう宿題やった？」「まだだよ、夕食後にやるつもり」"
  }
 },
 "nota": {
  "nuance": "「成績」の基本語。「メモ、注釈」という意味にもなる。",
  "etymology": "ラテン語nota（印、記号）に由来。",
  "synonyms": [
   "calificación（成績、ややフォーマル）"
  ],
  "derived": [
   "notable（注目に値する）"
  ],
  "dialogue": {
   "es": "— Saqué una buena nota en el examen.\n— ¡Qué bien! Felicidades.",
   "ja": "「試験でいい成績を取ったんだ」「よかったね！おめでとう」"
  }
 },
 "título": {
  "nuance": "「学位」と「タイトル、肩書き」の両方の意味を持つ単語。",
  "etymology": "ラテン語titulus（表題、称号）に由来。",
  "synonyms": [],
  "derived": [
   "titular（保有者、見出し）"
  ],
  "dialogue": {
   "es": "— Recibí mi título el año pasado.\n— ¡Felicidades, qué logro!",
   "ja": "「去年学位を取得したんだ」「おめでとう、すごい達成だね」"
  }
 },
 "semestre": {
  "nuance": "「学期」の基本語。多くのラテンアメリカの大学は1年を2学期制で運営している。",
  "etymology": "ラテン語semestris（6ヶ月の）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Este semestre tengo muchas materias difíciles.\n— Ánimo, ya casi termina el año.",
   "ja": "「今学期は難しい科目がたくさんあるんだ」「頑張って、もうすぐ今年も終わるから」"
  }
 },
 "aula": {
  "nuance": "「教室」の基本語。女性名詞だがel aulaとなる（aguaと同じ、アクセントのあるa音を避けるため）。",
  "etymology": "ラテン語aula（広間）に由来。",
  "synonyms": [
   "salón de clases（教室、より一般的な言い方）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿En qué aula es la clase?\n— En el aula 305.",
   "ja": "「授業はどの教室であるの？」「305教室だよ」"
  }
 },
 "lápiz": {
  "nuance": "「鉛筆」の基本語。複数形はlápices（z→c）という綴りの変化に注意。",
  "etymology": "ラテン語lapis（石）に由来。",
  "synonyms": [],
  "derived": [
   "lapicero（シャープペンシル、地域による）"
  ],
  "dialogue": {
   "es": "— ¿Me prestas un lápiz?\n— Claro, toma.",
   "ja": "「鉛筆貸してくれる？」「もちろん、どうぞ」"
  }
 },
 "hacer falta": {
  "nuance": "「必要である、足りない」。faltarとほぼ同じ意味・語順で使われる（gustar型の構文：hacer faltaの主語は「必要とされているもの」、必要としている人は間接目的語代名詞で表す）。Me hace falta dinero.（お金が足りない、直訳「私にとってお金が不足を成す」）のように使う。",
  "etymology": "hacer（する）+ falta（不足）の組み合わせ。",
  "synonyms": [
   "faltar（足りない、ほぼ同義）"
  ],
  "derived": [
   "falta（不足、欠席）"
  ],
  "dialogue": {
   "es": "— Me hace falta más tiempo para terminar.\n— Te entiendo, a mí también.",
   "ja": "「終わらせるのにもっと時間が必要なんだ」「わかるよ、私もだよ」"
  }
 },
 "gobierno": {
  "nuance": "「政府」の基本語。gobernar（統治する）から派生した語。",
  "etymology": "gobernar（統治する）から派生した語。",
  "synonyms": [],
  "derived": [
   "gobernar（統治する）",
   "gobernador（知事）"
  ],
  "dialogue": {
   "es": "— El gobierno anunció nuevas medidas económicas.\n— Espero que ayuden a la gente.",
   "ja": "「政府が新しい経済対策を発表したんだ」「人々の助けになるといいね」"
  }
 },
 "presidente": {
  "nuance": "「大統領」の基本語。女性形はpresidenta。",
  "etymology": "ラテン語praesidens（前に座る者）に由来。",
  "synonyms": [],
  "derived": [
   "presidir（議長を務める）",
   "presidencia（大統領職）"
  ],
  "dialogue": {
   "es": "— ¿Quién es el presidente actual?\n— Tendría que buscarlo, no estoy seguro.",
   "ja": "「今の大統領は誰？」「調べないと、確信が持てないな」"
  }
 },
 "ciudadano": {
  "nuance": "「市民」の基本語。ciudad（都市）から派生した語。",
  "etymology": "ciudad（都市）から派生した語。",
  "synonyms": [],
  "derived": [
   "ciudad（都市）",
   "ciudadanía（市民権）"
  ],
  "dialogue": {
   "es": "— Como ciudadanos, tenemos responsabilidades.\n— Sí, y también derechos.",
   "ja": "「市民として、私たちには責任があるよね」「うん、そして権利もね」"
  }
 },
 "ley": {
  "nuance": "「法律」の基本語。aprobar una ley（法律を可決する）はよく使う組み合わせ。",
  "etymology": "ラテン語lex（法）に由来。",
  "synonyms": [],
  "derived": [
   "legal（合法の）",
   "legislar（立法する）"
  ],
  "dialogue": {
   "es": "— Van a aprobar una nueva ley.\n— ¿Sobre qué tema?",
   "ja": "「新しい法律が可決されるらしいよ」「どんなテーマについて？」"
  }
 },
 "derecho": {
  "nuance": "「権利」の基本語。「法学」「まっすぐな、右」という意味にもなる多義語。",
  "etymology": "ラテン語directus（まっすぐな）に由来。",
  "synonyms": [],
  "derived": [
   "derecha（右）",
   "directo（直接の）"
  ],
  "dialogue": {
   "es": "— Todos tenemos derecho a la educación.\n— Estoy totalmente de acuerdo.",
   "ja": "「私たちには皆、教育を受ける権利がある」「まったく同感だよ」"
  }
 },
 "elección": {
  "nuance": "「選挙」の基本語。elegir（選ぶ）の名詞形。",
  "etymology": "elegir（選ぶ）から派生した語。",
  "synonyms": [],
  "derived": [
   "elegir（選ぶ）",
   "electoral（選挙の）"
  ],
  "dialogue": {
   "es": "— Las elecciones son el próximo mes.\n— ¿Ya sabes por quién vas a votar?",
   "ja": "「選挙は来月なんだ」「もう誰に投票するか決めた？」"
  }
 },
 "voto": {
  "nuance": "「投票」の基本語。votar（投票する）の名詞形。",
  "etymology": "ラテン語votum（誓い、願い）に由来。",
  "synonyms": [],
  "derived": [
   "votar（投票する）"
  ],
  "dialogue": {
   "es": "— Mi voto es muy importante para mí.\n— Sí, hay que ejercerlo con responsabilidad.",
   "ja": "「私にとって自分の一票はとても大切なんだ」「うん、責任を持って行使しないとね」"
  }
 },
 "congreso": {
  "nuance": "「議会」の基本語。「学会、大会」という意味にもなる。",
  "etymology": "ラテン語congressus（会合）に由来。",
  "synonyms": [],
  "derived": [
   "congresista（議員）"
  ],
  "dialogue": {
   "es": "— El congreso votará la ley mañana.\n— Espero que la aprueben.",
   "ja": "「議会は明日その法律を採決するんだ」「可決されるといいね」"
  }
 },
 "constitución": {
  "nuance": "「憲法」の基本語。「体格、構成」という意味にもなる。",
  "etymology": "ラテン語constitutio（設立、制定）に由来。",
  "synonyms": [],
  "derived": [
   "constituir（構成する）",
   "constitucional（憲法の）"
  ],
  "dialogue": {
   "es": "— La constitución protege nuestros derechos.\n— Es importante conocerla bien.",
   "ja": "「憲法は私たちの権利を守ってくれるんだ」「よく知っておくことが大切だよね」"
  }
 },
 "comunidad": {
  "nuance": "「地域社会」の基本語。común（共通の）から派生した語。",
  "etymology": "ラテン語communitas（共同体）に由来。",
  "synonyms": [],
  "derived": [
   "común（共通の）",
   "comunitario（地域社会の）"
  ],
  "dialogue": {
   "es": "— Esta comunidad es muy unida.\n— Sí, todos se ayudan mucho.",
   "ja": "「この地域社会はとても団結しているね」「うん、みんなよく助け合っているよね」"
  }
 },
 "vecino": {
  "nuance": "「隣人」の基本語。女性形はvecina。",
  "etymology": "ラテン語vicinus（近くの）に由来。",
  "synonyms": [],
  "derived": [
   "vecindad（近隣）",
   "vecindario（近所）"
  ],
  "dialogue": {
   "es": "— Mi vecino es muy amable.\n— Qué suerte tener buenos vecinos.",
   "ja": "「私の隣人はとても親切なんだ」「良い隣人がいるのは幸運だよね」"
  }
 },
 "generación": {
  "nuance": "「世代」の基本語。generar（生み出す）から派生した語。",
  "etymology": "generar（生み出す）から派生した語。",
  "synonyms": [],
  "derived": [
   "generar（生み出す）",
   "generacional（世代の）"
  ],
  "dialogue": {
   "es": "— Cada generación tiene su propia música.\n— Es cierto, la mía era muy diferente.",
   "ja": "「世代ごとに独自の音楽があるよね」「本当だね、私の世代は全然違ったよ」"
  }
 },
 "pastilla": {
  "nuance": "「錠剤」の基本語。tomar una pastilla（錠剤を飲む）はよく使う組み合わせ。",
  "etymology": "フランス語pastille（薬用トローチ）に由来。",
  "synonyms": [
   "píldora（錠剤、より一般的な言い方）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Tomaste tu pastilla hoy?\n— Sí, la tomé después de desayunar.",
   "ja": "「今日薬飲んだ？」「うん、朝食後に飲んだよ」"
  }
 },
 "yeso": {
  "nuance": "「ギプス」の基本語。「石膏」という建材の意味にもなる。",
  "etymology": "ギリシャ語gypsos（石膏）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cuánto tiempo tienes que usar el yeso?\n— Seis semanas más.",
   "ja": "「ギプスはあとどれくらいつけないといけないの？」「あと6週間だよ」"
  }
 },
 "incendio": {
  "nuance": "「火事」の基本語。encender（火をつける）と同語源。",
  "etymology": "ラテン語incendium（火事）に由来。",
  "synonyms": [],
  "derived": [
   "encender（火をつける）",
   "incendiar（放火する）"
  ],
  "dialogue": {
   "es": "— Hubo un incendio en el edificio vecino.\n— ¡Qué susto! ¿Hubo heridos?",
   "ja": "「隣のビルで火事があったんだ」「怖い！怪我人はいた？」"
  }
 },
 "evacuación": {
  "nuance": "「避難」の基本語。evacuar（避難する）の名詞形。",
  "etymology": "evacuar（避難させる）から派生した語。",
  "synonyms": [],
  "derived": [
   "evacuar（避難する）"
  ],
  "dialogue": {
   "es": "— La evacuación se hizo de manera ordenada.\n— Menos mal que todos estaban preparados.",
   "ja": "「避難は秩序立てて行われたんだ」「みんな準備ができていて良かったね」"
  }
 },
 "primeros auxilios": {
  "nuance": "「応急処置」の基本語。primero（最初の）+ auxilio（助け）の組み合わせ。",
  "etymology": "primero（最初の）+ auxilio（助け）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "auxiliar（助ける）"
  ],
  "dialogue": {
   "es": "— Tomé un curso de primeros auxilios.\n— Qué útil, eso puede salvar vidas.",
   "ja": "「応急処置の講習を受けたんだ」「役に立つね、命を救うこともあるから」"
  }
 },
 "tratamiento": {
  "nuance": "「治療」の基本語。tratar（扱う、治療する）から派生した語。",
  "etymology": "tratar（治療する）から派生した語。",
  "synonyms": [],
  "derived": [
   "tratar（治療する）"
  ],
  "dialogue": {
   "es": "— El tratamiento está funcionando bien.\n— Qué buena noticia.",
   "ja": "「治療がうまくいっているんだ」「それは良い知らせだね」"
  }
 },
 "termómetro": {
  "nuance": "「体温計」の基本語。",
  "etymology": "ギリシャ語thermos（熱い）+ metron（測定）の組み合わせ。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Dónde está el termómetro?\n— Está en el botiquín.",
   "ja": "「体温計どこにある？」「救急箱の中にあるよ」"
  }
 },
 "presión arterial": {
  "nuance": "「血圧」の基本語。presión（圧力）+ arterial（動脈の）の組み合わせ。",
  "etymology": "presión（圧力）+ arterial（動脈の）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "arteria（動脈）"
  ],
  "dialogue": {
   "es": "— Tengo la presión arterial un poco alta.\n— Deberías cuidar tu alimentación.",
   "ja": "「血圧が少し高いんだ」「食生活に気をつけた方がいいね」"
  }
 },
 "pulso": {
  "nuance": "「脈拍」の基本語。tomar el pulso（脈を測る）はよく使う組み合わせ。",
  "etymology": "ラテン語pulsus（打つこと）に由来。",
  "synonyms": [],
  "derived": [
   "pulsar（押す、脈打つ）"
  ],
  "dialogue": {
   "es": "— El médico me tomó el pulso.\n— ¿Estaba todo normal?",
   "ja": "「医者が脈を測ってくれたんだ」「異常はなかった？」"
  }
 },
 "tos": {
  "nuance": "「咳」の基本語。tener tos（咳が出る）はよく使う組み合わせ。",
  "etymology": "ラテン語tussis（咳）に由来。",
  "synonyms": [],
  "derived": [
   "toser（咳をする）"
  ],
  "dialogue": {
   "es": "— Tengo mucha tos desde ayer.\n— Deberías tomar algo caliente.",
   "ja": "「昨日からひどい咳が出るんだ」「何か温かいものを飲んだ方がいいよ」"
  }
 },
 "piedra": {
  "nuance": "「石」の基本語。tirar la primera piedra（最初に石を投げる、比喩的に「最初に非難する」）のような表現もある。",
  "etymology": "ラテン語petra（岩）に由来。",
  "synonyms": [],
  "derived": [
   "pedregoso（石の多い）"
  ],
  "dialogue": {
   "es": "— Cuidado, hay muchas piedras en el camino.\n— Gracias por avisarme.",
   "ja": "「気をつけて、道に石がたくさんあるよ」「教えてくれてありがとう」"
  }
 },
 "costa": {
  "nuance": "「海岸」の基本語。メキシコには太平洋岸・カリブ海岸両方に美しい海岸線がある。",
  "etymology": "ラテン語costa（あばら骨、側面）に由来。",
  "synonyms": [],
  "derived": [
   "costero（沿岸の）"
  ],
  "dialogue": {
   "es": "— La costa de Oaxaca es hermosa.\n— Sí, tiene playas increíbles.",
   "ja": "「オアハカの海岸は美しいよね」「うん、素晴らしいビーチがあるんだ」"
  }
 },
 "valle": {
  "nuance": "「谷」の基本語。地名にもよく使われる（Valle de México＝メキシコ盆地）。",
  "etymology": "ラテン語vallis（谷）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El valle está lleno de flores en primavera.\n— Debe ser una vista hermosa.",
   "ja": "「春になるとその谷は花でいっぱいになるんだ」「きっと美しい景色なんだろうね」"
  }
 },
 "cascada": {
  "nuance": "「滝」の基本語。catarataとほぼ同義。メキシコにはアグア・アスルなど有名な滝が多い。",
  "etymology": "イタリア語cascare（落ちる）に由来。",
  "synonyms": [
   "catarata（滝、より大規模なものに使うことも）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Visitamos una cascada increíble en Chiapas.\n— ¿Se podía nadar ahí?",
   "ja": "「チアパスで素晴らしい滝を訪れたんだ」「そこで泳げたの？」"
  }
 },
 "lago": {
  "nuance": "「湖」の基本語。lagunaは「潟、より小さい湖」を指す近い語。",
  "etymology": "ラテン語lacus（湖）に由来。",
  "synonyms": [
   "laguna（潟、小さな湖）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Ese lago es el más grande del país.\n— Me encantaría visitarlo algún día.",
   "ja": "「あの湖はこの国で一番大きいんだ」「いつか訪れてみたいな」"
  }
 },
 "terremoto": {
  "nuance": "「地震」の基本語。メキシコは地震が多い地域として知られている。",
  "etymology": "tierra（地）+ mover（動く）に由来。",
  "synonyms": [
   "sismo（地震、ややフォーマル）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Hubo un terremoto anoche, ¿lo sentiste?\n— Sí, fue bastante fuerte.",
   "ja": "「昨夜地震があったんだ、感じた？」「うん、かなり強かったよね」"
  }
 },
 "huracán": {
  "nuance": "「ハリケーン」の基本語。メキシコのカリブ海沿岸・太平洋沿岸ではハリケーンシーズンに注意が必要。",
  "etymology": "タイノ語hurakán（嵐の神）に由来、英語hurricaneも同語源。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Se acerca un huracán a la costa.\n— Hay que prepararse bien.",
   "ja": "「ハリケーンが海岸に近づいているんだ」「しっかり備えないとね」"
  }
 },
 "amanecer": {
  "nuance": "「夜明け」の基本語。動詞としても使われ「夜が明ける」という意味になる。",
  "etymology": "a（〜へ）+ mañana（朝）の組み合わせから派生。",
  "synonyms": [],
  "derived": [
   "mañana（朝）"
  ],
  "dialogue": {
   "es": "— Vimos el amanecer desde la montaña.\n— Debió ser espectacular.",
   "ja": "「山から夜明けを見たんだ」「きっと壮観だったろうね」"
  }
 },
 "atardecer": {
  "nuance": "「夕暮れ」の基本語。動詞としても使われ「日が暮れる」という意味になる。",
  "etymology": "a（〜へ）+ tarde（午後）の組み合わせから派生。",
  "synonyms": [
   "puesta de sol（日没）"
  ],
  "derived": [
   "tarde（午後）"
  ],
  "dialogue": {
   "es": "— El atardecer en la playa es mágico.\n— Vamos a verlo juntos hoy.",
   "ja": "「ビーチの夕暮れは幻想的だよね」「今日一緒に見に行こう」"
  }
 },
 "selva": {
  "nuance": "「ジャングル」の基本語。bosque（森、より温帯的）とは区別される。メキシコ南部にはマヤ文明の遺跡を包むジャングルが広がる。",
  "etymology": "ラテン語silva（森）に由来。",
  "synonyms": [],
  "derived": [
   "selvático（ジャングルの）"
  ],
  "dialogue": {
   "es": "— Chichén Itzá está rodeado de selva.\n— Debe ser impresionante verlo así.",
   "ja": "「チチェン・イッツァはジャングルに囲まれているんだ」「そんな風に見るのはきっと感動的だろうね」"
  }
 },
 "españa": {
  "nuance": "「スペイン」の基本語。スペイン語の発祥地。",
  "etymology": "フェニキア語i-shepan-ha（ウサギの島）に由来するとされる。",
  "synonyms": [],
  "derived": [
   "español（スペイン語、スペイン人）"
  ],
  "dialogue": {
   "es": "— ¿Has estado en España?\n— No, pero quiero ir algún día.",
   "ja": "「スペインに行ったことある？」「ないけど、いつか行きたいな」"
  }
 },
 "méxico": {
  "nuance": "「メキシコ」の基本語。正式名称はEstados Unidos Mexicanos（メキシコ合衆国）。",
  "etymology": "アステカの言葉Mēxihcoに由来、アステカ族の自称に関連するとされる。",
  "synonyms": [],
  "derived": [
   "mexicano（メキシコの、メキシコ人）"
  ],
  "dialogue": {
   "es": "— México tiene una cultura muy rica.\n— Sí, la comida y las tradiciones son increíbles.",
   "ja": "「メキシコはとても豊かな文化を持っているよね」「うん、料理や伝統が素晴らしいよね」"
  }
 },
 "argentina": {
  "nuance": "「アルゼンチン」の基本語。南米で2番目に大きな国。",
  "etymology": "ラテン語argentum（銀）に由来。",
  "synonyms": [],
  "derived": [
   "argentino（アルゼンチンの、アルゼンチン人）"
  ],
  "dialogue": {
   "es": "— Argentina es famosa por el tango y el fútbol.\n— Y por su carne también.",
   "ja": "「アルゼンチンはタンゴとサッカーで有名だよね」「あとお肉もね」"
  }
 },
 "colombia": {
  "nuance": "「コロンビア」の基本語。コロンブスの名前に由来する。",
  "etymology": "クリストファー・コロンブス（Cristóbal Colón）の名前に由来。",
  "synonyms": [],
  "derived": [
   "colombiano（コロンビアの、コロンビア人）"
  ],
  "dialogue": {
   "es": "— El café colombiano es muy famoso.\n— Sí, es uno de los mejores del mundo.",
   "ja": "「コロンビアのコーヒーはとても有名だよね」「うん、世界でも最高峰の一つだよね」"
  }
 },
 "perú": {
  "nuance": "「ペルー」の基本語。マチュピチュなど古代インカ文明の遺跡で知られる。",
  "etymology": "古い先住民言語の川の名前に由来するとされる。",
  "synonyms": [],
  "derived": [
   "peruano（ペルーの、ペルー人）"
  ],
  "dialogue": {
   "es": "— Quiero visitar Machu Picchu en Perú.\n— Yo también, dicen que es impresionante.",
   "ja": "「ペルーのマチュピチュを訪れたいんだ」「私もだよ、すごいって言うよね」"
  }
 },
 "chile": {
  "nuance": "「チリ」の基本語。南北に非常に細長い国として知られる。「唐辛子」を意味するchileとは別の単語（アクセントの位置が違う：Chile国名は最後にアクセント、chile唐辛子も同じ綴りだが文脈で判断）。",
  "etymology": "マプチェ語chilli（大地の果て）に由来するとされる。",
  "synonyms": [],
  "derived": [
   "chileno（チリの、チリ人）"
  ],
  "dialogue": {
   "es": "— Chile es un país muy largo y angosto.\n— Sí, tiene paisajes muy variados.",
   "ja": "「チリはとても細長い国だよね」「うん、多様な景観があるんだ」"
  }
 },
 "estados unidos": {
  "nuance": "「アメリカ合衆国」の基本語。EE.UU.またはEU.と略されることもある。",
  "etymology": "estado（州）+ unido（連合した）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "estadounidense（アメリカの、アメリカ人）"
  ],
  "dialogue": {
   "es": "— Muchos mexicanos tienen familia en Estados Unidos.\n— Sí, hay una conexión muy fuerte entre los dos países.",
   "ja": "「多くのメキシコ人はアメリカに家族がいるんだ」「うん、両国の間にはとても強いつながりがあるよね」"
  }
 },
 "francia": {
  "nuance": "「フランス」の基本語。",
  "etymology": "ゲルマン系のフランク族（francos）に由来。",
  "synonyms": [],
  "derived": [
   "francés（フランス語、フランス人）"
  ],
  "dialogue": {
   "es": "— ¿Alguna vez has estado en Francia?\n— Sí, visité París hace unos años.",
   "ja": "「フランスに行ったことある？」「うん、数年前にパリを訪れたよ」"
  }
 },
 "japón": {
  "nuance": "「日本」の基本語。",
  "etymology": "マルコ・ポーロが伝えた中国語由来の名称Cipangu経由でヨーロッパに広まったとされる。",
  "synonyms": [],
  "derived": [
   "japonés（日本語、日本人）"
  ],
  "dialogue": {
   "es": "— Soy de Japón.\n— ¡Qué interesante! Me encantaría visitarlo.",
   "ja": "「私は日本出身なんだ」「面白いね！ぜひ訪れてみたいな」"
  }
 },
 "brasil": {
  "nuance": "「ブラジル」の基本語。南米最大の国で、ポルトガル語圏。",
  "etymology": "赤色染料が取れる木brasilに由来。",
  "synonyms": [],
  "derived": [
   "brasileño（ブラジルの、ブラジル人）"
  ],
  "dialogue": {
   "es": "— En Brasil se habla portugués, no español.\n— Es cierto, mucha gente lo olvida.",
   "ja": "「ブラジルではスペイン語じゃなくてポルトガル語が話されているんだよ」「その通り、多くの人が忘れがちだよね」"
  }
 },
 "cuba": {
  "nuance": "「キューバ」の基本語。カリブ海の島国。",
  "etymology": "タイノ語cubanacánに由来するとされる。",
  "synonyms": [],
  "derived": [
   "cubano（キューバの、キューバ人）"
  ],
  "dialogue": {
   "es": "— La música cubana es muy alegre.\n— Sí, me encanta el son cubano.",
   "ja": "「キューバの音楽はとても陽気だよね」「うん、ソン・クバーノが大好きなんだ」"
  }
 },
 "martillo": {
  "nuance": "「ハンマー」の基本語。martillar（打つ）から派生した語。",
  "etymology": "ラテン語martellus（小さなハンマー）に由来。",
  "synonyms": [],
  "derived": [
   "martillar（叩く）"
  ],
  "dialogue": {
   "es": "— ¿Me pasas el martillo?\n— Aquí tienes, ten cuidado.",
   "ja": "「ハンマー取ってくれる？」「はい、どうぞ、気をつけてね」"
  }
 },
 "destornillador": {
  "nuance": "「ドライバー」の基本語。tornillo（ねじ）から派生した語。",
  "etymology": "tornillo（ねじ）から派生した語。",
  "synonyms": [],
  "derived": [
   "tornillo（ねじ）",
   "destornillar（ねじを外す）"
  ],
  "dialogue": {
   "es": "— Necesito un destornillador de estrella.\n— Creo que tengo uno en la caja de herramientas.",
   "ja": "「プラスドライバーが必要なんだ」「工具箱にあると思うよ」"
  }
 },
 "llave inglesa": {
  "nuance": "「レンチ」の基本語。直訳は「イギリスの鍵」という面白い表現。",
  "etymology": "llave（鍵）+ inglesa（イギリスの）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "llave（鍵）"
  ],
  "dialogue": {
   "es": "— Pásame la llave inglesa, por favor.\n— ¿Cuál tamaño necesitas?",
   "ja": "「レンチ取ってくれる？」「どのサイズが必要？」"
  }
 },
 "taladro": {
  "nuance": "「ドリル」の基本語。taladrar（穴をあける）から派生した語。",
  "etymology": "taladrar（穴をあける）から派生した語。",
  "synonyms": [],
  "derived": [
   "taladrar（穴をあける）"
  ],
  "dialogue": {
   "es": "— Voy a usar el taladro para colgar este cuadro.\n— Ten cuidado con el cable.",
   "ja": "「この絵を掛けるのにドリルを使うよ」「コードに気をつけてね」"
  }
 },
 "sierra": {
  "nuance": "「のこぎり」の基本語。「山脈」という意味にもなる（Sierra Madreなど地名によく使われる）。",
  "etymology": "ラテン語serra（のこぎり）に由来。",
  "synonyms": [],
  "derived": [
   "serrar（のこぎりで切る）"
  ],
  "dialogue": {
   "es": "— Usé la sierra para cortar la madera.\n— ¿Quedó parejo el corte?",
   "ja": "「木を切るのにのこぎりを使ったんだ」「切り口はきれいだった？」"
  }
 },
 "clavo": {
  "nuance": "「釘」の基本語。dar en el clavo（釘に当てる、的を射る）という慣用句にも使われる。",
  "etymology": "ラテン語clavus（釘）に由来。",
  "synonyms": [],
  "derived": [
   "clavar（釘を打つ）"
  ],
  "dialogue": {
   "es": "— Necesito más clavos para terminar esto.\n— Voy a comprar unos.",
   "ja": "「これを終わらせるのにもっと釘が必要なんだ」「買ってくるよ」"
  }
 },
 "tornillo": {
  "nuance": "「ねじ」の基本語。faltar un tornillo（ねじが足りない、比喩的に「頭がおかしい」）という慣用句もある。",
  "etymology": "torno（旋盤、回転）から派生した語。",
  "synonyms": [],
  "derived": [
   "destornillador（ドライバー）",
   "atornillar（ねじで留める）"
  ],
  "dialogue": {
   "es": "— Se cayó un tornillo de la silla.\n— Vamos a buscarlo antes de que se pierda.",
   "ja": "「椅子からねじが落ちたんだ」「なくす前に探そう」"
  }
 },
 "pegamento": {
  "nuance": "「接着剤」の基本語。pegar（くっつける）から派生した語。",
  "etymology": "pegar（くっつける）から派生した語。",
  "synonyms": [
   "cola（接着剤、地域による）"
  ],
  "derived": [
   "pegar（くっつける、叩く）"
  ],
  "dialogue": {
   "es": "— ¿Tienes pegamento? Se rompió mi taza.\n— Sí, aquí tienes.",
   "ja": "「接着剤ある？マグカップが割れちゃったんだ」「うん、はいどうぞ」"
  }
 },
 "cuerda": {
  "nuance": "「ロープ」の基本語。「楽器の弦」という意味にもなる。",
  "etymology": "ラテン語chorda（腸線、弦）に由来。",
  "synonyms": [],
  "derived": [
   "cordón（ひも）"
  ],
  "dialogue": {
   "es": "— Necesitamos una cuerda más resistente.\n— Hay una en el garaje.",
   "ja": "「もっと丈夫なロープが必要なんだ」「ガレージに一本あるよ」"
  }
 },
 "llave": {
  "nuance": "「鍵」の基本語。「（水道などの）栓」「レンチ」という意味にもなる多義語。",
  "etymology": "ラテン語clavis（鍵）に由来。",
  "synonyms": [],
  "derived": [
   "llavero（キーホルダー）"
  ],
  "dialogue": {
   "es": "— Perdí las llaves de mi casa.\n— ¿Ya revisaste tus bolsillos?",
   "ja": "「家の鍵をなくしちゃった」「もうポケットは確認した？」"
  }
 },
 "navidad": {
  "nuance": "「クリスマス」の基本語。メキシコでは12月に盛大に祝われる。",
  "etymology": "ラテン語nativitas（誕生）に由来。",
  "synonyms": [],
  "derived": [
   "navideño（クリスマスの）"
  ],
  "dialogue": {
   "es": "— ¿Cómo celebras la Navidad en tu país?\n— Con una gran cena en familia.",
   "ja": "「君の国ではクリスマスをどう祝うの？」「家族で大きな夕食を囲むんだ」"
  }
 },
 "semana santa": {
  "nuance": "「聖週間」の基本語。イースター前の1週間で、メキシコでは長期休暇としても知られる。",
  "etymology": "semana（週）+ santa（聖なる）の組み合わせ。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Durante Semana Santa, muchos van a la playa.\n— Sí, es temporada alta de turismo.",
   "ja": "「聖週間の間、多くの人がビーチに行くんだ」「うん、観光のハイシーズンだよね」"
  }
 },
 "año nuevo": {
  "nuance": "「新年」の基本語。Feliz Año Nuevo（新年おめでとう）はよく使う挨拶。",
  "etymology": "año（年）+ nuevo（新しい）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "año（年）"
  ],
  "dialogue": {
   "es": "— ¿Qué planes tienes para Año Nuevo?\n— Voy a estar con mi familia.",
   "ja": "「新年の予定は？」「家族と過ごすつもりだよ」"
  }
 },
 "cumpleaños": {
  "nuance": "「誕生日」の基本語。単数形も複数形も同じ形（cumple+años＝「年を満たす」から）。",
  "etymology": "cumplir（満たす）+ años（年）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "cumplir（満たす、達成する）"
  ],
  "dialogue": {
   "es": "— ¡Feliz cumpleaños!\n— Muchas gracias por acordarte.",
   "ja": "「誕生日おめでとう！」「覚えていてくれてありがとう」"
  }
 },
 "boda": {
  "nuance": "「結婚式」の基本語。casarse（結婚する）とは別の語。",
  "etymology": "ラテン語vota（誓い）に由来。",
  "synonyms": [],
  "derived": [
   "casarse（結婚する）"
  ],
  "dialogue": {
   "es": "— Fuimos a una boda hermosa el sábado.\n— ¿Dónde fue?",
   "ja": "「土曜日に美しい結婚式に行ったんだ」「どこであったの？」"
  }
 },
 "carnaval": {
  "nuance": "「カーニバル」の基本語。メキシコのベラクルスなどで盛大に祝われる。",
  "etymology": "イタリア語carnevale（謝肉祭）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El carnaval de Veracruz es muy famoso.\n— Me encantaría verlo algún día.",
   "ja": "「ベラクルスのカーニバルはとても有名なんだ」「いつか見てみたいな」"
  }
 },
 "día de la independencia": {
  "nuance": "「独立記念日」の基本語。メキシコでは9月16日。",
  "etymology": "día（日）+ de la independencia（独立の）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "independiente（独立した）"
  ],
  "dialogue": {
   "es": "— El Día de la Independencia se celebra con fuegos artificiales.\n— Y también con mucha comida típica.",
   "ja": "「独立記念日は花火で祝われるんだ」「あと伝統料理もたくさんね」"
  }
 },
 "día de los muertos": {
  "nuance": "「死者の日」の基本語。11月1日・2日、亡くなった家族を明るく迎えるメキシコの伝統行事。",
  "etymology": "día（日）+ de los muertos（死者たちの）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "muerto（死んだ、死者）"
  ],
  "dialogue": {
   "es": "— El Día de los Muertos es una celebración muy colorida.\n— Sí, las ofrendas son hermosas.",
   "ja": "「死者の日はとてもカラフルなお祝いなんだ」「うん、祭壇がきれいだよね」"
  }
 },
 "posadas": {
  "nuance": "「ポサーダス」の基本語。12月16日から24日にかけて行われる、メキシコのクリスマス前の伝統行事。マリアとホセの宿探しを再現する。",
  "etymology": "posada（宿）から派生した語。",
  "synonyms": [],
  "derived": [
   "posada（宿）"
  ],
  "dialogue": {
   "es": "— Vamos a una posada esta noche.\n— ¡Qué divertido, habrá piñata!",
   "ja": "「今夜ポサーダに行くんだ」「楽しそう、ピニャータがあるんだね！」"
  }
 },
 "quinceañera": {
  "nuance": "「キンセアニェーラ」の基本語。ラテンアメリカで女の子の15歳を祝う伝統的な通過儀礼（少女から大人の女性への節目とされる）。法律上の成人年齢（メキシコでは18歳）とは別の、文化的・宗教的な意味合いの強いお祝いである点に注意。",
  "etymology": "quince（15）+ años（歳）の組み合わせから派生。",
  "synonyms": [],
  "derived": [
   "quince（15）"
  ],
  "dialogue": {
   "es": "— La quinceañera de mi prima es el próximo mes.\n— ¿Va a ser una fiesta grande?",
   "ja": "「私のいとこのキンセアニェーラは来月なんだ」「大きなパーティーになるの？」"
  }
 },
 "aeropuerto": {
  "nuance": "「空港」の基本語。aero（空の）+ puerto（港）の組み合わせ。",
  "etymology": "aero（空の）+ puerto（港）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "aéreo（航空の）"
  ],
  "dialogue": {
   "es": "— ¿A qué hora llegamos al aeropuerto?\n— Deberíamos llegar dos horas antes del vuelo.",
   "ja": "「何時に空港に着く？」「フライトの2時間前には着いた方がいいね」"
  }
 },
 "estación": {
  "nuance": "「駅」の基本語。「季節」という意味にもなる多義語。",
  "etymology": "ラテン語statio（立つこと、駐留地）に由来。",
  "synonyms": [],
  "derived": [
   "estacionar（駐車する）"
  ],
  "dialogue": {
   "es": "— ¿Dónde está la estación de tren más cercana?\n— A dos cuadras de aquí.",
   "ja": "「一番近い電車の駅はどこですか？」「ここから2ブロックです」"
  }
 },
 "billete": {
  "nuance": "「切符」の基本語。ラテンアメリカではboleto、スペインではbilleteが一般的（地域差）。「紙幣」という意味にもなる。",
  "etymology": "フランス語billet（短い文書、切符）に由来。",
  "synonyms": [
   "boleto（切符、ラテンアメリカで一般的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Dónde compro el billete?\n— En la taquilla, al fondo.",
   "ja": "「切符はどこで買えますか？」「奥の窓口です」"
  }
 },
 "equipaje": {
  "nuance": "「荷物」の基本語。equipaje de mano（機内持ち込み荷物）とも組み合わせる。",
  "etymology": "フランス語équiper（装備する）に由来。",
  "synonyms": [],
  "derived": [
   "equipar（装備する）"
  ],
  "dialogue": {
   "es": "— ¿Cuánto equipaje puedo llevar?\n— Depende de la aerolínea.",
   "ja": "「荷物はどれくらい持っていけますか？」「航空会社によりますね」"
  }
 },
 "maleta": {
  "nuance": "「スーツケース」の基本語。hacer la maleta（荷造りする）はよく使う表現。",
  "etymology": "フランス語malette（小さな鞄）に由来。",
  "synonyms": [],
  "derived": [
   "maletero（トランク、車の荷物入れ）"
  ],
  "dialogue": {
   "es": "— ¿Ya hiciste tu maleta?\n— Casi, me falta poco.",
   "ja": "「もう荷造りした？」「もうすぐだよ、あと少し」"
  }
 },
 "hotel": {
  "nuance": "「ホテル」の基本語。世界共通の借用語。",
  "etymology": "フランス語hôtel（宿泊施設）に由来。",
  "synonyms": [],
  "derived": [
   "hotelero（ホテルの、ホテル業者）"
  ],
  "dialogue": {
   "es": "— ¿En qué hotel te vas a quedar?\n— En uno cerca del centro.",
   "ja": "「どのホテルに泊まる予定？」「中心街に近いところだよ」"
  }
 },
 "reserva": {
  "nuance": "「予約」の基本語。reservar（予約する）の名詞形。地域によってreservación（より英語reservationに近い形）も使われる。",
  "etymology": "reservar（予約する、取っておく）から派生した語。",
  "synonyms": [
   "reservación（予約、一部地域）"
  ],
  "derived": [
   "reservar（予約する）"
  ],
  "dialogue": {
   "es": "— Tengo una reserva a nombre de García.\n— Un momento, la busco.",
   "ja": "「ガルシアの名前で予約しています」「少々お待ちください、確認します」"
  }
 },
 "pasaporte": {
  "nuance": "「パスポート」の基本語。pasar（通る）+ puerto（港）に由来。",
  "etymology": "pasar（通る）+ puerto（港）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "pasar（通る）"
  ],
  "dialogue": {
   "es": "— No olvides tu pasaporte.\n— Ya lo tengo en mi bolsa.",
   "ja": "「パスポート忘れないでね」「もうバッグに入れてあるよ」"
  }
 },
 "aduana": {
  "nuance": "「税関」の基本語。アラビア語由来。",
  "etymology": "アラビア語al-diwan（帳簿、役所）に由来。",
  "synonyms": [],
  "derived": [
   "aduanero（税関の、税関職員）"
  ],
  "dialogue": {
   "es": "— Tuvimos que esperar mucho en la aduana.\n— Sí, había mucha gente.",
   "ja": "「税関でとても待たされたんだ」「うん、人が多かったもんね」"
  }
 },
 "visa": {
  "nuance": "「ビザ」の基本語。visadoという言い方も一部地域で使われる。",
  "etymology": "ラテン語visa（見られたもの）に由来。",
  "synonyms": [
   "visado（ビザ、一部地域）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Necesito visa para viajar ahí?\n— Depende de tu nacionalidad.",
   "ja": "「そこに旅行するのにビザが必要？」「あなたの国籍によりますね」"
  }
 },
 "puerta de embarque": {
  "nuance": "「搭乗ゲート」の基本語。puerta（扉）+ embarque（搭乗）の組み合わせ。",
  "etymology": "puerta（扉）+ embarque（搭乗）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "embarcar（搭乗する）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es tu puerta de embarque?\n— La número 15.",
   "ja": "「あなたの搭乗ゲートは？」「15番だよ」"
  }
 },
 "escala": {
  "nuance": "「乗り継ぎ」の基本語。「規模、目盛り」という意味にもなる。",
  "etymology": "ラテン語scala（はしご）に由来。",
  "synonyms": [],
  "derived": [
   "escalar（登る）"
  ],
  "dialogue": {
   "es": "— ¿Tu vuelo tiene escala?\n— Sí, en Houston.",
   "ja": "「あなたのフライトは乗り継ぎある？」「うん、ヒューストンでね」"
  }
 },
 "mostrador": {
  "nuance": "「カウンター」の基本語。mostrar（見せる）から派生した語。",
  "etymology": "mostrar（見せる）から派生した語。",
  "synonyms": [],
  "derived": [
   "mostrar（見せる）"
  ],
  "dialogue": {
   "es": "— El mostrador de la aerolínea está al fondo.\n— Gracias, ya lo veo.",
   "ja": "「その航空会社のカウンターは奥にあるよ」「ありがとう、見えたよ」"
  }
 },
 "horario de trabajo": {
  "nuance": "「勤務時間」の基本語。horario（時間割）+ de trabajo（仕事の）の組み合わせ。",
  "etymology": "hora（時間）から派生した語。",
  "synonyms": [],
  "derived": [
   "hora（時間）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es tu horario de trabajo?\n— De nueve a seis, de lunes a viernes.",
   "ja": "「勤務時間はどうなってる？」「月曜から金曜、9時から6時までだよ」"
  }
 },
 "videollamada": {
  "nuance": "「ビデオ通話」の基本語。video（動画）+ llamada（電話）の組み合わせ。",
  "etymology": "video（動画）+ llamada（電話）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "llamar（電話する）"
  ],
  "dialogue": {
   "es": "— ¿Hacemos una videollamada mañana?\n— Sí, perfecto.",
   "ja": "「明日ビデオ通話する？」「うん、いいね」"
  }
 },
 "teletrabajo": {
  "nuance": "「テレワーク」の基本語。tele（遠隔の）+ trabajo（仕事）の組み合わせ。",
  "etymology": "tele（遠隔の）+ trabajo（仕事）の組み合わせ。",
  "synonyms": [
   "trabajo remoto（リモートワーク）"
  ],
  "derived": [
   "trabajar（働く）"
  ],
  "dialogue": {
   "es": "— Hago teletrabajo tres días a la semana.\n— Qué buena flexibilidad.",
   "ja": "「週3日テレワークしているんだ」「いい柔軟性だね」"
  }
 },
 "capacitación": {
  "nuance": "「研修」の基本語。capacitar（能力をつけさせる）から派生した語。ラテンアメリカでよく使われる（スペインではformaciónが一般的）。",
  "etymology": "capacitar（能力をつけさせる）から派生した語。",
  "synonyms": [
   "formación（研修、スペインで一般的）"
  ],
  "derived": [
   "capacitar（訓練する）"
  ],
  "dialogue": {
   "es": "— Tengo una capacitación esta tarde.\n— ¿Sobre qué tema?",
   "ja": "「今日の午後研修があるんだ」「どんなテーマ？」"
  }
 },
 "ascenso": {
  "nuance": "「昇進」の基本語。ascender（登る、昇進する）から派生した語。",
  "etymology": "ascender（登る）から派生した語。",
  "synonyms": [],
  "derived": [
   "ascender（昇進する）"
  ],
  "dialogue": {
   "es": "— ¡Me dieron un ascenso!\n— ¡Felicidades, te lo mereces!",
   "ja": "「昇進したんだ！」「おめでとう、その価値があるよ！」"
  }
 },
 "tenis": {
  "nuance": "「テニス」の基本語。「スニーカー」という意味にもなる（地域による、メキシコでよく使われる用法）。",
  "etymology": "フランス語tenez（さあどうぞ、サーブの掛け声）に由来するとされる。",
  "synonyms": [],
  "derived": [
   "tenista（テニス選手）"
  ],
  "dialogue": {
   "es": "— ¿Juegas tenis los fines de semana?\n— Sí, con mi hermano.",
   "ja": "「週末テニスする？」「うん、兄とね」"
  }
 },
 "correr": {
  "nuance": "「走る」の基本動詞。ir a correr（ランニングに行く）はよく使う組み合わせ。",
  "etymology": "ラテン語currere（走る）に由来。",
  "synonyms": [],
  "derived": [
   "carrera（競走、キャリア）",
   "corredor（走者、廊下）"
  ],
  "dialogue": {
   "es": "— Salgo a correr todas las mañanas.\n— Qué buena disciplina.",
   "ja": "「毎朝走りに出かけるんだ」「なんて規則正しいんだ」"
  }
 },
 "boxeo": {
  "nuance": "「ボクシング」の基本語。メキシコはボクシングの世界チャンピオンを多く輩出している国として知られる。",
  "etymology": "英語boxing（箱を打つ→殴る）に由来。",
  "synonyms": [],
  "derived": [
   "boxear（ボクシングする）",
   "boxeador（ボクサー）"
  ],
  "dialogue": {
   "es": "— México tiene una gran tradición en el boxeo.\n— Sí, muchos campeones mundiales.",
   "ja": "「メキシコはボクシングの伝統が豊かなんだ」「うん、多くの世界チャンピオンがいるよね」"
  }
 },
 "golf": {
  "nuance": "「ゴルフ」の基本語。英語からの借用語。",
  "etymology": "英語golf（起源は不明）に由来。",
  "synonyms": [],
  "derived": [
   "golfista（ゴルファー）"
  ],
  "dialogue": {
   "es": "— ¿Sabes jugar golf?\n— Un poco, no soy muy bueno.",
   "ja": "「ゴルフできる？」「少しだけ、あまり上手じゃないんだ」"
  }
 },
 "surf": {
  "nuance": "「サーフィン」の基本語。メキシコの太平洋岸は世界的なサーフスポットとしても有名。",
  "etymology": "英語surf（波、波乗り）に由来。",
  "synonyms": [],
  "derived": [
   "surfear（サーフィンする）",
   "surfista（サーファー）"
  ],
  "dialogue": {
   "es": "— Puebla Escondida es famosa por el surf.\n— Me encantaría aprender algún día.",
   "ja": "「プエブロ・エスコンディードはサーフィンで有名なんだ」「いつか習ってみたいな」"
  }
 },
 "esquí": {
  "nuance": "「スキー」の基本語。ノルウェー語由来。",
  "etymology": "ノルウェー語ski（雪の板）に由来。",
  "synonyms": [],
  "derived": [
   "esquiar（スキーをする）",
   "esquiador（スキーヤー）"
  ],
  "dialogue": {
   "es": "— Nunca he esquiado, ¿es difícil?\n— Al principio sí, pero se aprende rápido.",
   "ja": "「スキーしたことないんだけど、難しい？」「最初はそうだけど、すぐ上達するよ」"
  }
 },
 "escalada": {
  "nuance": "「クライミング」の基本語。escalar（登る）から派生した語。",
  "etymology": "escalar（登る）から派生した語。",
  "synonyms": [],
  "derived": [
   "escalar（登る）",
   "escalador（クライマー）"
  ],
  "dialogue": {
   "es": "— La escalada en roca es mi pasión.\n— ¿No te da miedo la altura?",
   "ja": "「ロッククライミングは私の情熱なんだ」「高さは怖くないの？」"
  }
 },
 "voleibol": {
  "nuance": "「バレーボール」の基本語。英語volleyballのスペイン語表記。",
  "etymology": "英語volleyball（ボレー＋ボール）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Jugamos voleibol en la playa.\n— Suena muy divertido.",
   "ja": "「ビーチでバレーボールをしたんだ」「とても楽しそうだね」"
  }
 },
 "artes marciales": {
  "nuance": "「格闘技」の基本語。arte（技術）+ marcial（軍事の）の組み合わせ。",
  "etymology": "arte（技術）+ marcial（軍事の、ローマ神話の軍神マルスに由来）の組み合わせ。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Practico artes marciales desde niño.\n— ¿Cuál disciplina en particular?",
   "ja": "「子供の頃から格闘技をしているんだ」「特にどの流派？」"
  }
 },
 "atletismo": {
  "nuance": "「陸上競技」の基本語。atleta（アスリート）から派生した語。",
  "etymology": "atleta（アスリート）から派生した語。",
  "synonyms": [],
  "derived": [
   "atleta（アスリート）"
  ],
  "dialogue": {
   "es": "— El atletismo requiere mucha disciplina.\n— Sí, es un deporte muy exigente.",
   "ja": "「陸上競技はとても規律が必要なんだ」「うん、かなり厳しいスポーツだよね」"
  }
 },
 "guitarra": {
  "nuance": "「ギター」の基本語。メキシコ音楽（マリアッチなど）に欠かせない楽器。",
  "etymology": "アラビア語qitara経由でギリシャ語kithara（弦楽器）に由来。",
  "synonyms": [],
  "derived": [
   "guitarrista（ギタリスト）"
  ],
  "dialogue": {
   "es": "— ¿Sabes tocar la guitarra?\n— Sí, un poco, estoy aprendiendo.",
   "ja": "「ギター弾ける？」「うん、少しだけ、練習中なんだ」"
  }
 },
 "piano": {
  "nuance": "「ピアノ」の基本語。世界共通の借用語（イタリア語由来）。",
  "etymology": "イタリア語pianoforte（弱く強く）の短縮形に由来。",
  "synonyms": [],
  "derived": [
   "pianista（ピアニスト）"
  ],
  "dialogue": {
   "es": "— Estudié piano cuando era niña.\n— ¿Todavía tocas?",
   "ja": "「子供の頃ピアノを習っていたんだ」「今も弾くの？」"
  }
 },
 "violín": {
  "nuance": "「バイオリン」の基本語。マリアッチの重要な楽器の一つ。",
  "etymology": "イタリア語violino（小さなヴィオラ）に由来。",
  "synonyms": [],
  "derived": [
   "violinista（バイオリニスト）"
  ],
  "dialogue": {
   "es": "— El violín es un instrumento hermoso.\n— Sí, aunque muy difícil de aprender.",
   "ja": "「バイオリンは美しい楽器だよね」「うん、でも習得するのはとても難しいんだ」"
  }
 },
 "trompeta": {
  "nuance": "「トランペット」の基本語。マリアッチの象徴的な楽器の一つ。",
  "etymology": "フランス語trompette（トランペット）に由来。",
  "synonyms": [],
  "derived": [
   "trompetista（トランペット奏者）"
  ],
  "dialogue": {
   "es": "— La trompeta le da mucha energía a la música.\n— Sí, es un sonido muy alegre.",
   "ja": "「トランペットが音楽にたくさんのエネルギーを与えているね」「うん、とても陽気な音だよね」"
  }
 },
 "tambor": {
  "nuance": "「太鼓」の基本語。パーカッションの基本的な楽器。",
  "etymology": "アラビア語ṭunbūr（弦楽器）に由来するとされる。",
  "synonyms": [],
  "derived": [
   "tamborista（太鼓奏者）"
  ],
  "dialogue": {
   "es": "— El sonido del tambor marca el ritmo.\n— Es la base de toda la música.",
   "ja": "「太鼓の音がリズムを刻んでいるね」「音楽全体の土台なんだよね」"
  }
 },
 "acordeón": {
  "nuance": "「アコーディオン」の基本語。北メキシコの音楽（norteño、corridos）に欠かせない楽器。",
  "etymology": "ドイツ語Akkordeonに由来。",
  "synonyms": [],
  "derived": [
   "acordeonista（アコーディオン奏者）"
  ],
  "dialogue": {
   "es": "— El acordeón es clave en la música norteña.\n— Sí, le da ese sonido característico.",
   "ja": "「アコーディオンは北メキシコ音楽の要なんだ」「うん、あの特徴的な音を作っているよね」"
  }
 },
 "órgano": {
  "nuance": "「オルガン」の基本語。「臓器」という意味にもなる多義語。",
  "etymology": "ギリシャ語organon（道具、器官）に由来。",
  "synonyms": [],
  "derived": [
   "organista（オルガン奏者）"
  ],
  "dialogue": {
   "es": "— El órgano de esa iglesia es antiguo.\n— Debe sonar increíble.",
   "ja": "「あの教会のオルガンは古いんだ」「きっと素晴らしい音がするんだろうね」"
  }
 },
 "poesía": {
  "nuance": "「詩」という文学ジャンル全体を指す。個々の詩作品はpoemaと呼ぶ。",
  "etymology": "ギリシャ語poiesis（創作）に由来。",
  "synonyms": [],
  "derived": [
   "poema（詩、作品）",
   "poeta（詩人）"
  ],
  "dialogue": {
   "es": "— Me encanta la poesía mexicana.\n— Octavio Paz es uno de mis favoritos.",
   "ja": "「メキシコの詩が大好きなんだ」「オクタビオ・パスは私のお気に入りの一人だよ」"
  }
 },
 "cuento": {
  "nuance": "「短編小説」の基本語。contar（語る）から派生した語、子供向けの「お話」という意味にもなる。",
  "etymology": "contar（語る、数える）から派生した語。",
  "synonyms": [],
  "derived": [
   "contar（語る）",
   "cuentista（短編作家）"
  ],
  "dialogue": {
   "es": "— Escribí un cuento corto para la clase.\n— ¿De qué trata?",
   "ja": "「授業のために短編小説を書いたんだ」「どんな話なの？」"
  }
 },
 "poema": {
  "nuance": "「詩（作品）」の基本語。poesía（詩というジャンル全体）とは区別される。",
  "etymology": "ギリシャ語poiema（作られたもの）に由来。",
  "synonyms": [],
  "derived": [
   "poesía（詩、ジャンル）",
   "poeta（詩人）"
  ],
  "dialogue": {
   "es": "— Escribió un poema para su esposa.\n— Qué romántico.",
   "ja": "「彼は妻のために詩を書いたんだ」「なんてロマンチックなんだ」"
  }
 },
 "obra de teatro": {
  "nuance": "「演劇作品」の基本語。obra（作品）+ de teatro（演劇の）の組み合わせ。",
  "etymology": "obra（作品）+ teatro（劇場）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "teatro（劇場、演劇）"
  ],
  "dialogue": {
   "es": "— Vimos una obra de teatro increíble anoche.\n— ¿De qué trataba?",
   "ja": "「昨夜すごい演劇を見たんだ」「どんな話だった？」"
  }
 },
 "escenario": {
  "nuance": "「舞台」の基本語。「シナリオ、状況」という意味にもなる。",
  "etymology": "イタリア語scenario（場面設定）に由来。",
  "synonyms": [],
  "derived": [
   "escena（場面）"
  ],
  "dialogue": {
   "es": "— El escenario estaba decorado con muchas luces.\n— Debió ser hermoso.",
   "ja": "「舞台はたくさんのライトで飾られていたんだ」「きっと美しかったろうね」"
  }
 },
 "lienzo": {
  "nuance": "「キャンバス」の基本語。絵画を描く布・支持体を指す。",
  "etymology": "ラテン語linteum（亜麻布）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Este lienzo es enorme.\n— Debió tardar meses en pintarlo.",
   "ja": "「このキャンバスはとても大きいね」「描くのに何ヶ月もかかったんだろうね」"
  }
 },
 "pincel": {
  "nuance": "「絵筆」の基本語。",
  "etymology": "ラテン語penicillus（小さな尾、筆）に由来。",
  "synonyms": [],
  "derived": [
   "pincelada（一筆）"
  ],
  "dialogue": {
   "es": "— ¿Qué tipo de pincel usas para esto?\n— Uno muy fino, para los detalles.",
   "ja": "「これにはどんな筆を使うの？」「とても細いのを使うよ、細部のためにね」"
  }
 },
 "danza": {
  "nuance": "「舞踊」の基本語。bailarよりもフォーマルな文脈でよく使われる（芸術としてのダンス）。",
  "etymology": "フランク語系の語danson（引っ張る）に由来。",
  "synonyms": [
   "baile（踊り、より一般的）"
  ],
  "derived": [
   "bailar（踊る）"
  ],
  "dialogue": {
   "es": "— La danza folclórica mexicana es muy colorida.\n— Sí, los trajes son hermosos.",
   "ja": "「メキシコの民族舞踊はとてもカラフルなんだ」「うん、衣装が美しいよね」"
  }
 },
 "folclore": {
  "nuance": "「民間伝承」の基本語。英語folkloreのスペイン語表記。",
  "etymology": "英語folklore（民衆の知恵）に由来。",
  "synonyms": [],
  "derived": [
   "folclórico（民俗的な）"
  ],
  "dialogue": {
   "es": "— El folclore mexicano tiene muchas leyendas.\n— Me encantaría conocer más.",
   "ja": "「メキシコの民間伝承にはたくさんの伝説があるんだ」「もっと知りたいな」"
  }
 },
 "artesanía": {
  "nuance": "「手工芸」の基本語。artesano（職人）から派生した語。メキシコの市場では伝統的な手工芸品がよく売られている。",
  "etymology": "artesano（職人）から派生した語。",
  "synonyms": [],
  "derived": [
   "artesano（職人）"
  ],
  "dialogue": {
   "es": "— Compré esta artesanía en Oaxaca.\n— Es preciosa, ¿qué es?",
   "ja": "「オアハカでこの手工芸品を買ったんだ」「きれいだね、何なの？」"
  }
 },
 "mural": {
  "nuance": "「壁画」の基本語。メキシコはディエゴ・リベラなど壁画運動（muralismo）で世界的に有名。",
  "etymology": "ラテン語murus（壁）に由来。",
  "synonyms": [],
  "derived": [
   "muralista（壁画家）",
   "muralismo（壁画運動）"
  ],
  "dialogue": {
   "es": "— Ese mural cuenta la historia de México.\n— Diego Rivera hizo muchos así.",
   "ja": "「あの壁画はメキシコの歴史を語っているんだ」「ディエゴ・リベラがこういうのをたくさん作ったんだよね」"
  }
 },
 "leyenda": {
  "nuance": "「伝説」の基本語。「凡例、地図記号の説明」という意味にもなる。",
  "etymology": "ラテン語legenda（読まれるべきもの）に由来。",
  "synonyms": [],
  "derived": [
   "legendario（伝説的な）"
  ],
  "dialogue": {
   "es": "— Esa leyenda se cuenta desde hace siglos.\n— Me encantaría escucharla completa.",
   "ja": "「あの伝説は何世紀も前から語り継がれているんだ」「全部聞いてみたいな」"
  }
 },
 "patrimonio": {
  "nuance": "「遺産」の基本語。patrimonio cultural（文化遺産）はよく使う組み合わせ。",
  "etymology": "ラテン語patrimonium（父から受け継いだもの）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Este sitio es patrimonio de la humanidad.\n— Por eso está tan bien conservado.",
   "ja": "「この遺跡は人類の遺産なんだ」「だからこんなによく保存されているんだね」"
  }
 },
 "microscopio": {
  "nuance": "「顕微鏡」の基本語。micro（小さい）+ scopio（見るもの）の組み合わせ。",
  "etymology": "ギリシャ語mikros（小さい）+ skopein（見る）の組み合わせ。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vimos las células con un microscopio.\n— Fue fascinante ver tanto detalle.",
   "ja": "「顕微鏡で細胞を見たんだ」「そんなに細かく見えるなんて面白いね」"
  }
 },
 "fórmula": {
  "nuance": "「公式」の基本語。「調合、処方」という意味にもなる。",
  "etymology": "ラテン語formula（小さな型）に由来。",
  "synonyms": [],
  "derived": [
   "formular（策定する）"
  ],
  "dialogue": {
   "es": "— No recuerdo la fórmula para este problema.\n— Te la puedo explicar.",
   "ja": "「この問題の公式を覚えていないんだ」「説明してあげるよ」"
  }
 },
 "cuenta bancaria": {
  "nuance": "「銀行口座」の基本語。cuenta（勘定）+ bancaria（銀行の）の組み合わせ。",
  "etymology": "cuenta（勘定）+ banco（銀行）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "banco（銀行）",
   "cuenta（勘定、口座）"
  ],
  "dialogue": {
   "es": "— Necesito abrir una cuenta bancaria.\n— Te recomiendo ese banco, tienen buen servicio.",
   "ja": "「銀行口座を開く必要があるんだ」「あの銀行がおすすめだよ、サービスがいいから」"
  }
 },
 "inversión": {
  "nuance": "「投資」の基本語。invertir（投資する）の名詞形。",
  "etymology": "invertir（投資する、逆にする）から派生した語。",
  "synonyms": [],
  "derived": [
   "invertir（投資する）",
   "inversor（投資家）"
  ],
  "dialogue": {
   "es": "— Esta es una buena inversión a largo plazo.\n— Espero que tengas razón.",
   "ja": "「これは長期的にいい投資だよ」「そうだといいね」"
  }
 },
 "cambio": {
  "nuance": "「おつり」「両替」の両方の意味を持つ基本語。cambiar（変える）から派生。",
  "etymology": "cambiar（変える）から派生した語。",
  "synonyms": [],
  "derived": [
   "cambiar（変える）"
  ],
  "dialogue": {
   "es": "— Aquí tiene su cambio.\n— Muchas gracias.",
   "ja": "「おつりです」「どうもありがとうございます」"
  }
 },
 "factura": {
  "nuance": "「請求書」の基本語。メキシコではpedir factura（領収書を発行してもらう）という表現もよく使われる（税務申告関連）。",
  "etymology": "ラテン語factura（作られたもの）に由来。",
  "synonyms": [],
  "derived": [
   "facturar（請求する、荷物を預ける）"
  ],
  "dialogue": {
   "es": "— ¿Me puede dar factura de esta compra?\n— Claro, necesito sus datos fiscales.",
   "ja": "「この購入品の領収書もらえますか？」「もちろんです、税務情報を教えてください」"
  }
 },
 "suscripción": {
  "nuance": "「サブスクリプション」の基本語。suscribirse（登録する）の名詞形。",
  "etymology": "suscribir（署名する、登録する）から派生した語。",
  "synonyms": [],
  "derived": [
   "suscribirse（登録する）"
  ],
  "dialogue": {
   "es": "— Cancelé mi suscripción al gimnasio.\n— ¿Por qué? Te gustaba mucho.",
   "ja": "「ジムのサブスクを解約したんだ」「どうして？すごく気に入ってたじゃん」"
  }
 },
 "deuda": {
  "nuance": "「借金」の基本語。tener deudas（借金がある）はよく使う組み合わせ。",
  "etymology": "ラテン語debita（借りているもの）に由来。",
  "synonyms": [],
  "derived": [
   "deber（借りている、〜すべきだ）"
  ],
  "dialogue": {
   "es": "— Estoy pagando mis deudas poco a poco.\n— Es bueno tener un plan.",
   "ja": "「少しずつ借金を返済しているんだ」「計画があるのはいいことだね」"
  }
 },
 "arquitecto": {
  "nuance": "「建築家」の基本語。女性形はarquitecta。",
  "etymology": "ギリシャ語arkhitekton（主任建築家）に由来。",
  "synonyms": [],
  "derived": [
   "arquitectura（建築学）"
  ],
  "dialogue": {
   "es": "— Mi hermano es arquitecto.\n— ¿Qué tipo de edificios diseña?",
   "ja": "「私の兄は建築家なんだ」「どんな建物を設計しているの？」"
  }
 },
 "contador": {
  "nuance": "「会計士」の基本語。女性形はcontadora。「カウンター、計測器」という意味にもなる。",
  "etymology": "contar（数える）から派生した語。",
  "synonyms": [
   "contable（会計士、スペイン）"
  ],
  "derived": [
   "contar（数える）",
   "contabilidad（会計）"
  ],
  "dialogue": {
   "es": "— Mi contador me ayuda con los impuestos.\n— Es bueno tener a alguien de confianza.",
   "ja": "「私の会計士が税金の申告を手伝ってくれるんだ」「信頼できる人がいるのはいいことだね」"
  }
 },
 "camarero": {
  "nuance": "「ウェイター」の基本語。ラテンアメリカではmesero、スペインではcamareroが一般的（地域差）。",
  "etymology": "cámara（部屋、宮廷の部屋）から派生した語。",
  "synonyms": [
   "mesero（ウェイター、ラテンアメリカで一般的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— El camarero fue muy amable.\n— Sí, deberíamos dejarle buena propina.",
   "ja": "「そのウェイターはとても親切だったね」「うん、チップを弾んであげよう」"
  }
 },
 "piloto": {
  "nuance": "「パイロット」の基本語。男女ともpilotoの形を使う（性別で変化しない）。",
  "etymology": "ギリシャ語pedon（オール）から派生したとされる。",
  "synonyms": [],
  "derived": [
   "pilotar（操縦する）"
  ],
  "dialogue": {
   "es": "— El piloto anunció un retraso.\n— Espero que no sea mucho tiempo.",
   "ja": "「パイロットが遅延を発表したんだ」「あまり長くないといいね」"
  }
 },
 "electricista": {
  "nuance": "「電気技師」の基本語。男女ともelectricistaの形を使う。",
  "etymology": "electricidad（電気）から派生した語。",
  "synonyms": [],
  "derived": [
   "electricidad（電気）"
  ],
  "dialogue": {
   "es": "— Necesito llamar a un electricista.\n— ¿Qué pasó con la luz?",
   "ja": "「電気技師を呼ぶ必要があるんだ」「電気どうしたの？」"
  }
 },
 "plomero": {
  "nuance": "「配管工」の基本語。地域によってfontanero（スペインで一般的）とも呼ばれる。",
  "etymology": "plomo（鉛、かつて配管に使われた金属）から派生した語。",
  "synonyms": [
   "fontanero（配管工、スペイン）"
  ],
  "derived": [
   "plomo（鉛）"
  ],
  "dialogue": {
   "es": "— El plomero viene mañana a revisar la tubería.\n— Menos mal, hay una fuga.",
   "ja": "「明日配管工が配管を確認しに来るんだ」「よかった、水漏れがあるから」"
  }
 },
 "carpintero": {
  "nuance": "「大工」の基本語。carpintería（大工仕事）から派生。",
  "etymology": "ラテン語carpentarius（車大工）に由来。",
  "synonyms": [],
  "derived": [
   "carpintería（大工仕事）"
  ],
  "dialogue": {
   "es": "— El carpintero hizo esta mesa a mano.\n— Es un trabajo hermoso.",
   "ja": "「この大工さんはこのテーブルを手作りしたんだ」「美しい仕事だね」"
  }
 },
 "peluquero": {
  "nuance": "「美容師」の基本語。女性形はpeluquera。peluquería（美容院）から派生。",
  "etymology": "peluca（かつら）から派生した語。",
  "synonyms": [
   "estilista（スタイリスト）"
  ],
  "derived": [
   "peluquería（美容院）"
  ],
  "dialogue": {
   "es": "— Mi peluquero siempre me deja el corte perfecto.\n— Deberías darme su nombre.",
   "ja": "「私の美容師さんはいつも完璧なカットにしてくれるんだ」「名前教えてよ」"
  }
 },
 "pintor": {
  "nuance": "「画家」の基本語。女性形はpintora。「ペンキ屋」という意味にもなる。",
  "etymology": "pintar（描く）から派生した語。",
  "synonyms": [],
  "derived": [
   "pintar（描く）",
   "pintura（絵画）"
  ],
  "dialogue": {
   "es": "— Frida Kahlo es una pintora muy famosa.\n— Sus autorretratos son impresionantes.",
   "ja": "「フリーダ・カーロはとても有名な画家だよね」「彼女の自画像はすごいよね」"
  }
 },
 "granjero": {
  "nuance": "「農家」の基本語。女性形はgranjera。granja（農場）から派生。",
  "etymology": "granja（農場）から派生した語。",
  "synonyms": [
   "agricultor（農業従事者、よりフォーマル）"
  ],
  "derived": [
   "granja（農場）"
  ],
  "dialogue": {
   "es": "— El granjero vende sus productos en el mercado.\n— Todo se ve muy fresco.",
   "ja": "「その農家は市場で自分の作物を売っているんだ」「全部とても新鮮そうだね」"
  }
 },
 "conferencia": {
  "nuance": "「講義・会議」の基本語。「電話会議」という意味にもなる（conferencia telefónica）。",
  "etymology": "ラテン語conferre（持ち寄る）に由来。",
  "synonyms": [],
  "derived": [
   "conferenciante（講演者）"
  ],
  "dialogue": {
   "es": "— La conferencia empieza a las diez.\n— Voy a llegar un poco antes.",
   "ja": "「会議は10時に始まるよ」「少し早めに着くつもりだよ」"
  }
 },
 "cuaderno": {
  "nuance": "「ノート」の基本語。cuarto（4分の1）から派生した語（紙を折りたたむ単位に由来するとされる）。",
  "etymology": "ラテン語quaterni（4つずつ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Necesito comprar un cuaderno nuevo.\n— Hay una papelería cerca de aquí.",
   "ja": "「新しいノートを買う必要があるんだ」「この近くに文房具屋があるよ」"
  }
 },
 "regla": {
  "nuance": "「定規」の基本語。「ルール、規則」という意味にもなる多義語。",
  "etymology": "ラテン語regula（まっすぐな棒、規則）に由来。",
  "synonyms": [],
  "derived": [
   "regular（規則正しい、調整する）"
  ],
  "dialogue": {
   "es": "— ¿Me prestas tu regla?\n— Claro, toma.",
   "ja": "「定規貸してくれる？」「もちろん、どうぞ」"
  }
 },
 "bolígrafo": {
  "nuance": "「ボールペン」の基本語。口語ではplumaと短縮されることも多い（メキシコ）。",
  "etymology": "bola（球）+ grafo（書くもの）の組み合わせ。",
  "synonyms": [
   "pluma（ペン、口語・メキシコ）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Tienes un bolígrafo que me prestes?\n— Sí, aquí tienes.",
   "ja": "「貸せるボールペン持ってる？」「うん、はいどうぞ」"
  }
 },
 "calculadora": {
  "nuance": "「電卓」の基本語。calcular（計算する）から派生した語。",
  "etymology": "calcular（計算する）から派生した語。",
  "synonyms": [],
  "derived": [
   "calcular（計算する）"
  ],
  "dialogue": {
   "es": "— ¿Puedo usar tu calculadora?\n— Claro, aquí está.",
   "ja": "「電卓使ってもいい？」「もちろん、はいどうぞ」"
  }
 },
 "sobre": {
  "nuance": "「封筒」の基本語。前置詞「〜の上に」という意味にもなる同形異義語。",
  "etymology": "ラテン語super（〜の上に）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Necesito un sobre para enviar esto.\n— Hay unos en el cajón.",
   "ja": "「これを送るのに封筒が必要なんだ」「引き出しにいくつかあるよ」"
  }
 },
 "agenda": {
  "nuance": "「手帳」の基本語。「議題、アジェンダ」という意味にもなる。",
  "etymology": "ラテン語agenda（行われるべきこと）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Anoté la cita en mi agenda.\n— Buena idea, así no la olvidas.",
   "ja": "「手帳に予約を書いておいたよ」「いい考えだね、そうすれば忘れないよね」"
  }
 },
 "enterarse de": {
  "nuance": "「〜を知る、〜に気づく」。すでに起きていた事実を後から知る、というニュアンスの再帰動詞。",
  "etymology": "ラテン語integer（完全な→全体を把握する）に由来するとされる。",
  "synonyms": [
   "darse cuenta de（気がつく）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Me enteré de la noticia por redes sociales.\n— Yo también, fue una sorpresa.",
   "ja": "「そのニュースをSNSで知ったんだ」「私もだよ、驚いたよね」"
  }
 },
 "arrepentirse de": {
  "nuance": "「後悔する」。過去の行動を悔やむことを表す再帰動詞。",
  "etymology": "ラテン語paenitere（後悔させる）に由来。",
  "synonyms": [],
  "derived": [
   "arrepentimiento（後悔）"
  ],
  "dialogue": {
   "es": "— Me arrepiento de no haber estudiado más.\n— Nunca es tarde para empezar.",
   "ja": "「もっと勉強しなかったことを後悔しているんだ」「始めるのに遅すぎることはないよ」"
  }
 },
 "acostumbrarse a": {
  "nuance": "「〜に慣れる」。costumbre（習慣）から派生した再帰動詞。",
  "etymology": "costumbre（習慣）から派生した語。",
  "synonyms": [],
  "derived": [
   "costumbre（習慣）"
  ],
  "dialogue": {
   "es": "— Ya me acostumbré al clima de aquí.\n— Qué bueno, al principio es difícil.",
   "ja": "「もうここの気候に慣れたよ」「よかった、最初は大変だもんね」"
  }
 },
 "mejorar": {
  "nuance": "「改善する」の基本語。自動詞・他動詞両方で使える（Mejoró＝良くなった／Mejoré mi español＝スペイン語を上達させた）。",
  "etymology": "mejor（より良い）から派生した語。",
  "synonyms": [],
  "derived": [
   "mejor（より良い）",
   "mejora（改善）"
  ],
  "dialogue": {
   "es": "— Tu español ha mejorado mucho.\n— Gracias, practico todos los días.",
   "ja": "「君のスペイン語、すごく上達したね」「ありがとう、毎日練習しているんだ」"
  }
 },
 "permitir": {
  "nuance": "「許可する」の基本語。permitir que+接続法、またはpermitir+不定詞の形を取る。",
  "etymology": "ラテン語permittere（通過させる、許す）に由来。",
  "synonyms": [],
  "derived": [
   "permiso（許可）"
  ],
  "dialogue": {
   "es": "— Mis padres no me permiten salir tarde.\n— Los míos tampoco.",
   "ja": "「私の両親は遅くまで出かけるのを許してくれないんだ」「私の両親もだよ」"
  }
 },
 "prohibir": {
  "nuance": "「禁止する」の基本語。está prohibido（禁止されている）という受け身の形もよく見る。",
  "etymology": "ラテン語prohibere（遠ざける、禁じる）に由来。",
  "synonyms": [],
  "derived": [
   "prohibido（禁止された）",
   "prohibición（禁止）"
  ],
  "dialogue": {
   "es": "— Está prohibido fumar aquí.\n— Perdón, no lo sabía.",
   "ja": "「ここは喫煙禁止です」「すみません、知りませんでした」"
  }
 },
 "peinarse": {
  "nuance": "「髪をとかす」の基本語。peine（くし）から派生した再帰動詞。",
  "etymology": "peine（くし）から派生した語。",
  "synonyms": [],
  "derived": [
   "peine（くし）"
  ],
  "dialogue": {
   "es": "— Voy a peinarme antes de salir.\n— Te espero aquí.",
   "ja": "「出かける前に髪をとかすよ」「ここで待ってるね」"
  }
 },
 "maquillarse": {
  "nuance": "「化粧をする」の基本語。maquillaje（化粧）から派生した再帰動詞。",
  "etymology": "フランス語maquiller（化粧する）に由来。",
  "synonyms": [],
  "derived": [
   "maquillaje（化粧）"
  ],
  "dialogue": {
   "es": "— Me maquillo rápido en las mañanas.\n— Yo tardo más tiempo.",
   "ja": "「朝は素早く化粧するんだ」「私はもっと時間がかかるよ」"
  }
 },
 "afeitarse": {
  "nuance": "「ひげを剃る」の基本語。",
  "etymology": "ラテン語ad-fictare（こする）に由来するとされる。",
  "synonyms": [],
  "derived": [
   "afeitadora（電動シェーバー）"
  ],
  "dialogue": {
   "es": "— Me afeito todas las mañanas.\n— Yo dejo crecer la barba.",
   "ja": "「毎朝ひげを剃るんだ」「私はひげを伸ばしているよ」"
  }
 },
 "cocinar": {
  "nuance": "「料理する」の基本語。cocina（台所、料理）から派生した語。",
  "etymology": "cocina（台所）から派生した語。",
  "synonyms": [],
  "derived": [
   "cocina（台所、料理）",
   "cocinero（料理人）"
  ],
  "dialogue": {
   "es": "— Me encanta cocinar los fines de semana.\n— A mí también, es relajante.",
   "ja": "「週末に料理するのが大好きなんだ」「私もだよ、リラックスできるよね」"
  }
 },
 "hervir": {
  "nuance": "「煮る、沸かす」の基本語。e→ieの語根母音変化動詞。",
  "etymology": "ラテン語fervere（沸く）に由来。",
  "synonyms": [],
  "derived": [
   "hervido（茹でた）",
   "hervidor（湯沸かし器）"
  ],
  "dialogue": {
   "es": "— El agua ya está hirviendo.\n— Perfecto, agrega la pasta.",
   "ja": "「お湯がもう沸いているよ」「完璧、パスタを入れて」"
  }
 },
 "freír": {
  "nuance": "「揚げる」の基本語。過去分詞が2つある珍しい動詞（freído/frito、fritoの方がよく使われる）。",
  "etymology": "ラテン語frigere（揚げる）に由来。",
  "synonyms": [],
  "derived": [
   "frito（揚げた）",
   "freidora（フライヤー）"
  ],
  "dialogue": {
   "es": "— Voy a freír unos plátanos.\n— Me encantan los plátanos fritos.",
   "ja": "「バナナを揚げるよ」「揚げバナナ大好きなんだ」"
  }
 },
 "sorprenderse de": {
  "nuance": "「〜に驚く」。sorprender（驚かせる）の再帰形。",
  "etymology": "sorprender（驚かせる）から派生した語。",
  "synonyms": [],
  "derived": [
   "sorpresa（驚き）"
  ],
  "dialogue": {
   "es": "— Me sorprendí mucho de verte aquí.\n— Yo también, qué casualidad.",
   "ja": "「ここで君に会えてとても驚いたよ」「私もだよ、なんて偶然」"
  }
 },
 "cepillarse los dientes": {
  "nuance": "「歯を磨く」の基本表現。cepillo（ブラシ）から派生した再帰動詞。",
  "etymology": "cepillo（ブラシ）から派生した語。",
  "synonyms": [],
  "derived": [
   "cepillo（ブラシ）"
  ],
  "dialogue": {
   "es": "— ¿Ya te cepillaste los dientes?\n— Sí, hace un momento.",
   "ja": "「もう歯磨いた？」「うん、さっきね」"
  }
 },
 "quitarse": {
  "nuance": "「脱ぐ」の基本語。quitar（取り除く）の再帰形。ponerse（着る）と対になる表現。",
  "etymology": "quitar（取り除く）から派生した語。",
  "synonyms": [],
  "derived": [
   "quitar（取り除く）"
  ],
  "dialogue": {
   "es": "— Me quito los zapatos al entrar a casa.\n— Es una buena costumbre.",
   "ja": "「家に入るとき靴を脱ぐんだ」「いい習慣だね」"
  }
 },
 "ponerse": {
  "nuance": "「着る、身につける」の基本語。vestirse（服を着る、より全体的な動作）とは対照的に、個別のアイテムを身につけるときによく使う。",
  "etymology": "poner（置く）から派生した語。",
  "synonyms": [],
  "derived": [
   "poner（置く）"
  ],
  "dialogue": {
   "es": "— Me voy a poner una chaqueta, hace frío.\n— Buena idea, yo también.",
   "ja": "「ジャケット着るよ、寒いから」「いい考えだね、私もそうしよう」"
  }
 },
 "cortar": {
  "nuance": "「切る」の基本動詞。cortarse（自分を切る、うっかり怪我をする）という再帰形もよく使われる。",
  "etymology": "ラテン語curtare（短くする）に由来。",
  "synonyms": [],
  "derived": [
   "corte（切り口、カット）",
   "cortante（鋭利な）"
  ],
  "dialogue": {
   "es": "— ¿Puedes cortar el pan?\n— Claro, ¿en cuántas piezas?",
   "ja": "「パンを切ってくれる？」「もちろん、何切れに？」"
  }
 },
 "hornear": {
  "nuance": "「オーブンで焼く」の基本語。horno（オーブン）から派生した語。",
  "etymology": "horno（オーブン）から派生した語。",
  "synonyms": [],
  "derived": [
   "horno（オーブン）"
  ],
  "dialogue": {
   "es": "— Voy a hornear un pastel para su cumpleaños.\n— ¡Qué rico va a estar!",
   "ja": "「彼の誕生日にケーキを焼くつもりだよ」「美味しそう！」"
  }
 },
 "calentar": {
  "nuance": "「温める」の基本動詞。e→ieの語根母音変化動詞。",
  "etymology": "caliente（熱い）から派生した語。",
  "synonyms": [],
  "derived": [
   "caliente（熱い）",
   "calentamiento（温め、加熱）"
  ],
  "dialogue": {
   "es": "— ¿Puedes calentar la comida?\n— Claro, dame un minuto.",
   "ja": "「食べ物温めてくれる？」「もちろん、少し待ってね」"
  }
 },
 "limpiar": {
  "nuance": "「掃除する」の基本語。limpio（きれいな）から派生した語。",
  "etymology": "limpio（きれいな）から派生した語。",
  "synonyms": [],
  "derived": [
   "limpio（きれいな）",
   "limpieza（掃除）"
  ],
  "dialogue": {
   "es": "— Voy a limpiar mi cuarto este fin de semana.\n— Yo te ayudo si quieres.",
   "ja": "「今週末部屋を掃除するつもりだよ」「よければ手伝うよ」"
  }
 },
 "ordenar": {
  "nuance": "「片付ける」と「注文する」の両方の意味を持つ動詞。orden（順序、命令）から派生。",
  "etymology": "ラテン語ordinare（順序立てる）に由来。",
  "synonyms": [],
  "derived": [
   "orden（順序、命令）"
  ],
  "dialogue": {
   "es": "— Necesito ordenar mi escritorio.\n— Está un poco desordenado, sí.",
   "ja": "「机を片付ける必要があるんだ」「確かに少し散らかっているね」"
  }
 },
 "reparar": {
  "nuance": "「修理する」の基本語。arreglar（直す、より口語的）とほぼ同義。",
  "etymology": "ラテン語reparare（元に戻す）に由来。",
  "synonyms": [
   "arreglar（直す、より口語的）"
  ],
  "derived": [
   "reparación（修理）"
  ],
  "dialogue": {
   "es": "— ¿Cuánto cuesta reparar esto?\n— Depende del daño.",
   "ja": "「これを修理するのにいくらかかる？」「損傷次第だね」"
  }
 },
 "construir": {
  "nuance": "「建てる」の基本語。不規則動詞（construyo, construyes...のようにyが入る）。",
  "etymology": "ラテン語construere（組み立てる）に由来。",
  "synonyms": [],
  "derived": [
   "construcción（建設）",
   "constructor（建設業者）"
  ],
  "dialogue": {
   "es": "— Van a construir un edificio nuevo aquí.\n— Espero que no sea muy alto.",
   "ja": "「ここに新しいビルが建つらしいよ」「あまり高くないといいけど」"
  }
 },
 "pintar": {
  "nuance": "「塗る、絵を描く」の基本語。pintura（絵画、ペンキ）から派生。",
  "etymology": "ラテン語pinctare（絵を描く）に由来。",
  "synonyms": [],
  "derived": [
   "pintura（絵画）",
   "pintor（画家）"
  ],
  "dialogue": {
   "es": "— Voy a pintar la pared de azul.\n— Qué buena idea, va a quedar bonito.",
   "ja": "「壁を青く塗るつもりだよ」「いい考えだね、きれいになりそう」"
  }
 },
 "cantar": {
  "nuance": "「歌う」の基本動詞。canción（歌）から派生。",
  "etymology": "ラテン語cantare（歌う）に由来。",
  "synonyms": [],
  "derived": [
   "canción（歌）",
   "cantante（歌手）"
  ],
  "dialogue": {
   "es": "— Me encanta cantar en la ducha.\n— A todos nos pasa, jaja.",
   "ja": "「シャワーで歌うのが大好きなんだ」「みんなそうだよね、笑」"
  }
 },
 "saltar": {
  "nuance": "「跳ぶ」の基本動詞。saltar la cuerda（縄跳びをする）のような組み合わせでもよく使われる。",
  "etymology": "ラテン語saltare（跳ねる）に由来。",
  "synonyms": [],
  "derived": [
   "salto（跳躍）"
  ],
  "dialogue": {
   "es": "— Los niños saltaban de alegría.\n— Debieron estar muy felices.",
   "ja": "「子供たちは喜んで跳びはねていたよ」「きっととても嬉しかったんだろうね」"
  }
 },
 "caminar": {
  "nuance": "「歩く」の基本動詞。camino（道）から派生した語。",
  "etymology": "camino（道）から派生した語。",
  "synonyms": [
   "andar（歩く、ほぼ同義）"
  ],
  "derived": [
   "camino（道）",
   "caminata（散歩、ハイキング）"
  ],
  "dialogue": {
   "es": "— Prefiero caminar al trabajo.\n— Es buen ejercicio diario.",
   "ja": "「職場まで歩く方が好きなんだ」「毎日のいい運動になるよね」"
  }
 },
 "subir": {
  "nuance": "「上がる」の基本動詞。「（ファイルを）アップロードする」という意味にもなる。",
  "etymology": "ラテン語subire（下から上へ行く）に由来。",
  "synonyms": [],
  "derived": [
   "subida（上昇、坂）"
  ],
  "dialogue": {
   "es": "— Vamos a subir al segundo piso.\n— Hay un elevador allá.",
   "ja": "「2階に上がろう」「あそこにエレベーターがあるよ」"
  }
 },
 "bajar": {
  "nuance": "「下がる」の基本語。「（ファイルを）ダウンロードする」という意味にもなる。",
  "etymology": "俗ラテン語bassiare（低くする）に由来。",
  "synonyms": [],
  "derived": [
   "bajada（下降、坂）"
  ],
  "dialogue": {
   "es": "— Voy a bajar por las escaleras.\n— Yo tomo el elevador.",
   "ja": "「階段で降りるよ」「私はエレベーターを使うよ」"
  }
 },
 "entrar": {
  "nuance": "「入る」の基本動詞。entrada（入り口）から派生。",
  "etymology": "ラテン語intrare（内に入る）に由来。",
  "synonyms": [],
  "derived": [
   "entrada（入口、入場券）"
  ],
  "dialogue": {
   "es": "— ¿Puedo entrar?\n— Claro, adelante.",
   "ja": "「入ってもいい？」「もちろん、どうぞ」"
  }
 },
 "egoísta": {
  "nuance": "「利己的な」の基本語。男女同形（-istaで終わる形容詞は性で変化しない）。",
  "etymology": "ego（ラテン語で「私」）から派生した語。",
  "synonyms": [],
  "derived": [
   "egoísmo（利己主義）"
  ],
  "dialogue": {
   "es": "— No seas tan egoísta, comparte con tu hermano.\n— Está bien, perdón.",
   "ja": "「そんなに自分勝手にならないで、弟と分けなさい」「わかった、ごめん」"
  }
 },
 "sincero": {
  "nuance": "「誠実な」の基本語。honesto（正直な）とほぼ同義で使われることも多い。",
  "etymology": "ラテン語sincerus（純粋な、混じりけのない）に由来。",
  "synonyms": [
   "honesto（正直な）"
  ],
  "derived": [
   "sinceridad（誠実さ）"
  ],
  "dialogue": {
   "es": "— Aprecio tu opinión sincera.\n— Siempre te voy a decir la verdad.",
   "ja": "「君の率直な意見をありがたく思うよ」「いつも本当のことを言うつもりだよ」"
  }
 },
 "tímido": {
  "nuance": "「恥ずかしがりな」の基本語。vergonzoso（恥ずかしがりな、恥ずべき）とほぼ同義。",
  "etymology": "ラテン語timidus（恐れる）に由来。",
  "synonyms": [
   "vergonzoso（恥ずかしがりな）"
  ],
  "derived": [
   "timidez（内気さ）"
  ],
  "dialogue": {
   "es": "— De niño era muy tímido.\n— Yo también, me costaba hablar con extraños.",
   "ja": "「子供の頃はとても内気だったんだ」「私もだよ、知らない人と話すのが大変だった」"
  }
 },
 "valiente": {
  "nuance": "「勇敢な」の基本語。valor（勇気）から派生した語。",
  "etymology": "ラテン語valens（強い、力のある）に由来。",
  "synonyms": [],
  "derived": [
   "valor（勇気）",
   "valentía（勇敢さ）"
  ],
  "dialogue": {
   "es": "— Fuiste muy valiente al hacer eso.\n— Gracias, estaba nervioso pero lo hice.",
   "ja": "「それをやったなんてとても勇敢だったね」「ありがとう、緊張したけどやったんだ」"
  }
 },
 "paciente": {
  "nuance": "「忍耐強い」の基本語。名詞として「患者」という意味にもなる。",
  "etymology": "ラテン語patiens（耐える）に由来。",
  "synonyms": [],
  "derived": [
   "paciencia（忍耐）"
  ],
  "dialogue": {
   "es": "— Eres muy paciente con los niños.\n— Se necesita mucha paciencia, sí.",
   "ja": "「君は子供たちにとても忍耐強いね」「うん、たくさんの忍耐が必要だよね」"
  }
 },
 "curioso": {
  "nuance": "「好奇心旺盛な」の基本語。「奇妙な、珍しい」という意味にもなる。",
  "etymology": "ラテン語curiosus（気にかける）に由来。",
  "synonyms": [],
  "derived": [
   "curiosidad（好奇心）"
  ],
  "dialogue": {
   "es": "— Mi hijo es muy curioso, siempre pregunta todo.\n— Es una buena señal de inteligencia.",
   "ja": "「私の息子はとても好奇心旺盛で、いつも何でも聞くんだ」「知性のいい兆候だよね」"
  }
 },
 "creativo": {
  "nuance": "「創造的な」の基本語。crear（創造する）から派生した語。",
  "etymology": "crear（創造する）から派生した語。",
  "synonyms": [],
  "derived": [
   "crear（創造する）",
   "creatividad（創造性）"
  ],
  "dialogue": {
   "es": "— Tienes una mente muy creativa.\n— Gracias, me encanta el arte.",
   "ja": "「君はとても創造的な頭脳を持っているね」「ありがとう、芸術が大好きなんだ」"
  }
 },
 "responsable": {
  "nuance": "「責任感のある」の基本語。ser responsable de（〜の責任がある）はよく使う組み合わせ。",
  "etymology": "responder（応答する、責任を負う）から派生した語。",
  "synonyms": [],
  "derived": [
   "responsabilidad（責任）"
  ],
  "dialogue": {
   "es": "— Es una empleada muy responsable.\n— Se nota, siempre cumple sus plazos.",
   "ja": "「彼女はとても責任感のある従業員だよね」「わかるよ、いつも締め切りを守っているもんね」"
  }
 },
 "perezoso": {
  "nuance": "「怠惰な」の基本語。pereza（怠惰）から派生した語。動物の「ナマケモノ」という意味にもなる。",
  "etymology": "pereza（怠惰）から派生した語。",
  "synonyms": [],
  "derived": [
   "pereza（怠惰）"
  ],
  "dialogue": {
   "es": "— Hoy me siento muy perezoso.\n— A veces todos necesitamos un día así.",
   "ja": "「今日はとても怠けたい気分なんだ」「みんな時々そういう日が必要だよね」"
  }
 },
 "trabajador": {
  "nuance": "「勤勉な」の基本語。名詞として「労働者」という意味にもなる。",
  "etymology": "trabajar（働く）から派生した語。",
  "synonyms": [],
  "derived": [
   "trabajar（働く）",
   "trabajo（仕事）"
  ],
  "dialogue": {
   "es": "— Es la persona más trabajadora que conozco.\n— Se merece un ascenso.",
   "ja": "「私が知っている中で一番働き者な人だよ」「昇進に値するね」"
  }
 },
 "optimista": {
  "nuance": "「楽観的な」の基本語。男女同形（-istaで終わる形容詞）。",
  "etymology": "ラテン語optimus（最良の）に由来。",
  "synonyms": [],
  "derived": [
   "optimismo（楽観主義）"
  ],
  "dialogue": {
   "es": "— Trato de ser optimista sobre el futuro.\n— Es una buena actitud.",
   "ja": "「未来については楽観的でいようとしているんだ」「いい態度だよね」"
  }
 },
 "serio": {
  "nuance": "「真面目な」の基本語。en serio（本気で、真剣に）という副詞句もよく使う。",
  "etymology": "ラテン語serius（重大な）に由来。",
  "synonyms": [],
  "derived": [
   "seriedad（真面目さ）"
  ],
  "dialogue": {
   "es": "— ¿Hablas en serio?\n— Sí, completamente en serio.",
   "ja": "「本気で言ってるの？」「うん、完全に本気だよ」"
  }
 },
 "educado": {
  "nuance": "「礼儀正しい」の基本語。educar（教育する）の過去分詞から形容詞化。「教育を受けた」という意味ではなく「行儀がいい」という意味なのが日本語話者には注意点。",
  "etymology": "educar（教育する）から派生した語。",
  "synonyms": [],
  "derived": [
   "educar（教育する）",
   "educación（教育、行儀）"
  ],
  "dialogue": {
   "es": "— Sus hijos son muy educados.\n— Se nota que los criaron bien.",
   "ja": "「彼の子供たちはとても礼儀正しいね」「よく育てられたのがわかるね」"
  }
 },
 "redondo": {
  "nuance": "「丸い」の基本語。基本的な形の形容詞。",
  "etymology": "俗ラテン語retundus（丸い）に由来。",
  "synonyms": [],
  "derived": [
   "redondear（丸める）"
  ],
  "dialogue": {
   "es": "— La mesa es redonda.\n— Así todos pueden verse.",
   "ja": "「そのテーブルは丸いんだ」「そうすればみんなお互いが見えるよね」"
  }
 },
 "ancho": {
  "nuance": "「幅広い」の基本語。基本的なサイズの形容詞。",
  "etymology": "ラテン語amplus（広い）に由来。",
  "synonyms": [],
  "derived": [
   "anchura（幅）",
   "ensanchar（広げる）"
  ],
  "dialogue": {
   "es": "— Esta calle es muy ancha.\n— Sí, hay espacio para varios carriles.",
   "ja": "「この通りはとても幅広いね」「うん、何車線分もスペースがあるよ」"
  }
 },
 "estrecho": {
  "nuance": "「狭い」の基本語。anchoの反対語。「海峡」という意味にもなる名詞（el estrecho）。",
  "etymology": "ラテン語strictus（きつく締められた）に由来。",
  "synonyms": [],
  "derived": [
   "estrechar（狭める）"
  ],
  "dialogue": {
   "es": "— Este pasillo es muy estrecho.\n— Sí, apenas cabemos dos personas.",
   "ja": "「この廊下はとても狭いね」「うん、二人並ぶのがやっとだよ」"
  }
 },
 "músculo": {
  "nuance": "「筋肉」の基本語。hacer músculo（筋肉をつける）はよく使う表現。",
  "etymology": "ラテン語musculus（小さなネズミ→筋肉の動きから）に由来。",
  "synonyms": [],
  "derived": [
   "muscular（筋肉の）"
  ],
  "dialogue": {
   "es": "— Me duele un músculo de la pierna.\n— Deberías estirar antes de hacer ejercicio.",
   "ja": "「足の筋肉が痛いんだ」「運動前にストレッチした方がいいよ」"
  }
 },
 "cerebro": {
  "nuance": "「脳」の基本語。比喩的に「頭脳、知恵」という意味にもなる。",
  "etymology": "ラテン語cerebrum（脳）に由来。",
  "synonyms": [],
  "derived": [
   "cerebral（脳の）"
  ],
  "dialogue": {
   "es": "— El cerebro humano es fascinante.\n— Sí, todavía hay mucho que no entendemos.",
   "ja": "「人間の脳は魅力的だよね」「うん、まだ理解していないことがたくさんあるよね」"
  }
 },
 "cintura": {
  "nuance": "「腰、ウエスト」の基本語。",
  "etymology": "ラテン語cinctura（帯、締めるもの）に由来。",
  "synonyms": [],
  "derived": [
   "cinturón（ベルト）"
  ],
  "dialogue": {
   "es": "— Me duele la cintura después de tanto sentarme.\n— Deberías levantarte y caminar un poco.",
   "ja": "「長く座っていたから腰が痛いんだ」「立って少し歩いた方がいいよ」"
  }
 },
 "tobillo": {
  "nuance": "「足首」の基本語。torcerse el tobillo（足首をひねる）はよく使う組み合わせ。",
  "etymology": "ラテン語tibiaculum（すね骨の小さなもの）に由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me torcí el tobillo jugando fútbol.\n— ¿Puedes caminar bien?",
   "ja": "「サッカーで足首をひねっちゃった」「ちゃんと歩ける？」"
  }
 },
 "garganta": {
  "nuance": "「喉」の基本語。dolor de garganta（喉の痛み）はよく使う組み合わせ。",
  "etymology": "俗ラテン語gargantaに由来、擬音的な語源とされる。",
  "synonyms": [],
  "derived": [
   "desgarganta（喉が枯れる）"
  ],
  "dialogue": {
   "es": "— Tengo la garganta irritada.\n— Deberías tomar té con miel.",
   "ja": "「喉がイガイガするんだ」「ハチミツ入りのお茶を飲んだ方がいいよ」"
  }
 },
 "codo": {
  "nuance": "「肘」の基本語。hablar por los codos（ひじで話す、比喩的に「おしゃべりだ」）という慣用句もある。",
  "etymology": "ラテン語cubitus（肘）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me golpeé el codo con la puerta.\n— ¡Ay, eso duele mucho!",
   "ja": "「ドアに肘をぶつけちゃった」「うわ、それすごく痛いよね！」"
  }
 },
 "muñeca": {
  "nuance": "「手首」の基本語。「人形」という意味にもなる同形異義語。",
  "etymology": "起源は諸説あるが、人形の意味との関連ははっきりしない。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me duele la muñeca de tanto escribir.\n— Deberías tomar un descanso.",
   "ja": "「たくさん書いていて手首が痛いんだ」「休憩した方がいいよ」"
  }
 },
 "falda": {
  "nuance": "「スカート」の基本語。",
  "etymology": "起源ははっきりしないが、俗ラテン語系の語とされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Esa falda te queda muy bien.\n— Gracias, la compré ayer.",
   "ja": "「そのスカート、君にとても似合っているね」「ありがとう、昨日買ったんだ」"
  }
 },
 "calcetín": {
  "nuance": "「靴下」の基本語。calceta（靴下）の指小形から派生。",
  "etymology": "calza（脚衣）から派生した語。",
  "synonyms": [
   "media（靴下、地域による）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Perdí un calcetín en la lavadora.\n— Siempre pasa eso, es un misterio.",
   "ja": "「洗濯機で靴下片方なくしちゃった」「いつもそうなるよね、謎だよね」"
  }
 },
 "abrigo": {
  "nuance": "「コート」の基本語。abrigar（暖める、守る）から派生した語。",
  "etymology": "abrigar（暖める）から派生した語。",
  "synonyms": [],
  "derived": [
   "abrigar（暖める、守る）"
  ],
  "dialogue": {
   "es": "— Necesitas un abrigo, hace mucho frío.\n— Tienes razón, voy por uno.",
   "ja": "「コートが必要だよ、とても寒いから」「その通りだね、取りに行くよ」"
  }
 },
 "bufanda": {
  "nuance": "「マフラー」の基本語。",
  "etymology": "イタリア語buffare（膨らむ）に由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me encanta esta bufanda de lana.\n— Te queda muy elegante.",
   "ja": "「このウールのマフラーが大好きなんだ」「とてもエレガントに似合っているね」"
  }
 },
 "guante": {
  "nuance": "「手袋」の基本語。",
  "etymology": "ゲルマン語系の語want（手袋）に由来。",
  "synonyms": [],
  "derived": [
   "enguantado（手袋をした）"
  ],
  "dialogue": {
   "es": "— Olvidé mis guantes en casa.\n— Ten, te presto los míos.",
   "ja": "「手袋を家に忘れちゃった」「はい、私のを貸すよ」"
  }
 },
 "cinturón": {
  "nuance": "「ベルト」の基本語。cinturón de seguridad（シートベルト）という複合語もよく使われる。",
  "etymology": "cintura（ウエスト）から派生した語。",
  "synonyms": [],
  "derived": [
   "cintura（腰）"
  ],
  "dialogue": {
   "es": "— Ponte el cinturón de seguridad.\n— Ya lo tengo puesto.",
   "ja": "「シートベルトをつけて」「もうつけているよ」"
  }
 },
 "corbata": {
  "nuance": "「ネクタイ」の基本語。クロアチアの傭兵の首巻きに由来する（英語cravatと同語源）。",
  "etymology": "クロアチア語hrvat（クロアチア人）に由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Tengo que usar corbata para la entrevista?\n— Sí, sería mejor.",
   "ja": "「面接にはネクタイをしないといけない？」「うん、その方がいいと思うよ」"
  }
 },
 "paraguas": {
  "nuance": "「傘」の基本語。para（防ぐ）+ aguas（水）の組み合わせ、単数複数同形。",
  "etymology": "parar（防ぐ）+ aguas（水）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "parar（止める、防ぐ）"
  ],
  "dialogue": {
   "es": "— No olvides tu paraguas, va a llover.\n— Gracias por avisarme.",
   "ja": "「傘忘れないでね、雨が降るから」「教えてくれてありがとう」"
  }
 },
 "bolso": {
  "nuance": "「バッグ」の基本語。bolsa（袋、より一般的な語）とは少しニュアンスが違い、ハンドバッグを指すことが多い。",
  "etymology": "ラテン語bursa（袋）に由来。",
  "synonyms": [
   "bolsa（袋、より一般的）"
  ],
  "derived": [
   "bolsillo（ポケット）"
  ],
  "dialogue": {
   "es": "— Me encanta tu bolso nuevo.\n— Gracias, lo compré en oferta.",
   "ja": "「君の新しいバッグ素敵だね」「ありがとう、セールで買ったんだ」"
  }
 },
 "reloj": {
  "nuance": "「時計」の基本語。reloj de pulsera（腕時計）、reloj de pared（壁掛け時計）のような組み合わせもよく使う。",
  "etymology": "ラテン語horologium（時を告げる装置）に由来。",
  "synonyms": [],
  "derived": [
   "relojero（時計職人）"
  ],
  "dialogue": {
   "es": "— Mi reloj se detuvo esta mañana.\n— Deberías cambiar la pila.",
   "ja": "「今朝、時計が止まっちゃったんだ」「電池を替えた方がいいよ」"
  }
 },
 "anillo": {
  "nuance": "「指輪」の基本語。anillo de compromiso（婚約指輪）はよく使う組み合わせ。",
  "etymology": "ラテン語anellus（小さな輪）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¡Qué bonito es tu anillo!\n— Gracias, fue un regalo.",
   "ja": "「その指輪素敵だね！」「ありがとう、プレゼントだったんだ」"
  }
 },
 "oveja": {
  "nuance": "「羊」の基本語。carnero（雄羊）とは区別される。oveja negra（黒い羊、比喩的に「厄介者、家族の異端児」）という慣用句もある。",
  "etymology": "ラテン語ovicula（小さな羊）に由来。",
  "synonyms": [],
  "derived": [
   "ovino（羊の）"
  ],
  "dialogue": {
   "es": "— Cuentas ovejas para dormir?\n— A veces, cuando no puedo dormir.",
   "ja": "「眠るために羊を数える？」「時々ね、眠れないときに」"
  }
 },
 "ratón": {
  "nuance": "「ねずみ」の基本語。「（パソコンの）マウス」という意味にもなる。",
  "etymology": "俗ラテン語ratto（ねずみ）に由来。",
  "synonyms": [],
  "derived": [
   "ratonera（ねずみ捕り）"
  ],
  "dialogue": {
   "es": "— Vi un ratón en la cocina.\n— ¡Qué asco! Hay que poner una trampa.",
   "ja": "「台所でねずみを見たんだ」「気持ち悪い！罠を仕掛けないとね」"
  }
 },
 "tigre": {
  "nuance": "「虎」の基本語。女性形はtigresa。",
  "etymology": "ギリシャ語tigris（虎）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El tigre es uno de mis animales favoritos.\n— A mí también, son majestuosos.",
   "ja": "「虎は私の好きな動物の一つなんだ」「私もだよ、堂々としているよね」"
  }
 },
 "pulpo": {
  "nuance": "「タコ」の基本語。メキシコ料理でよく使われる食材でもある（pulpo a las brasas＝炭焼きタコなど）。",
  "etymology": "ラテン語polypus（多くの足を持つもの）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El pulpo es muy inteligente.\n— Sí, dicen que puede resolver problemas.",
   "ja": "「タコはとても賢いんだよ」「うん、問題を解決できるって言うよね」"
  }
 },
 "cangrejo": {
  "nuance": "「カニ」の基本語。",
  "etymology": "フランク語系の語krabbeに由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Encontramos un cangrejo en la playa.\n— ¿Lo dejaron ir?",
   "ja": "「ビーチでカニを見つけたんだ」「逃してあげたの？」"
  }
 },
 "tortuga": {
  "nuance": "「カメ」の基本語。a paso de tortuga（カメの歩調で、比喩的に「とてもゆっくり」）という慣用句もある。",
  "etymology": "俗ラテン語tartaruca（地獄の生き物→硬い甲羅から連想）に由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Las tortugas viven muchos años.\n— Sí, algunas más de cien.",
   "ja": "「カメは何年も生きるんだよね」「うん、100年以上生きるものもいるんだって」"
  }
 },
 "mariposa": {
  "nuance": "「蝶」の基本語。水泳の「バタフライ」という意味にもなる。",
  "etymology": "起源は諸説あるが、「マリアが飛ぶ」という民間語源説もある。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vimos muchas mariposas en el jardín.\n— Debe ser temporada de migración.",
   "ja": "「庭でたくさんの蝶を見たんだ」「渡りの季節なんだろうね」"
  }
 },
 "abeja": {
  "nuance": "「ハチ」の基本語。picadura de abeja（ハチに刺されること）はよく使う組み合わせ。",
  "etymology": "ラテン語apicula（小さなハチ）に由来。",
  "synonyms": [],
  "derived": [
   "abejorro（マルハナバチ）"
  ],
  "dialogue": {
   "es": "— Me picó una abeja.\n— ¿Te duele mucho?",
   "ja": "「ハチに刺されちゃった」「すごく痛い？」"
  }
 },
 "araña": {
  "nuance": "「クモ」の基本語。多くの人が苦手とする虫の代表格。",
  "etymology": "ラテン語aranea（クモ）に由来。",
  "synonyms": [],
  "derived": [
   "arañar（引っかく）"
  ],
  "dialogue": {
   "es": "— Le tengo miedo a las arañas.\n— A mí también, son horribles.",
   "ja": "「クモが怖いんだ」「私もだよ、あれは苦手」"
  }
 },
 "mosquito": {
  "nuance": "「蚊」の基本語。picadura de mosquito（蚊に刺されること）はよく使う組み合わせ。",
  "etymology": "mosca（ハエ）の指小形に由来。",
  "synonyms": [],
  "derived": [
   "mosca（ハエ）"
  ],
  "dialogue": {
   "es": "— Hay muchos mosquitos esta noche.\n— Deberíamos usar repelente.",
   "ja": "「今夜は蚊がたくさんいるね」「虫除けを使った方がいいね」"
  }
 },
 "águila": {
  "nuance": "「ワシ」の基本語。águilaは女性名詞だが、アクセントのあるa音を避けるため単数形ではelを使う。メキシコの国章にも描かれている。",
  "etymology": "ラテン語aquila（ワシ）に由来。",
  "synonyms": [],
  "derived": [
   "aguileño（ワシのような）"
  ],
  "dialogue": {
   "es": "— El águila es el símbolo de México.\n— Sí, está en la bandera.",
   "ja": "「ワシはメキシコのシンボルなんだ」「うん、国旗にも描かれているよね」"
  }
 },
 "búho": {
  "nuance": "「フクロウ」の基本語。lechuza（メンフクロウ）とは種類が異なる近い語。",
  "etymology": "ラテン語bubo（フクロウ）に由来。",
  "synonyms": [
   "lechuza（メンフクロウ）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Escuché un búho anoche.\n— Deben vivir cerca de aquí.",
   "ja": "「昨夜フクロウの声を聞いたんだ」「この近くに住んでいるんだろうね」"
  }
 },
 "loro": {
  "nuance": "「オウム」の基本語。papagayoとほぼ同義。比喩的に「おしゃべりな人」という意味にもなる。",
  "etymology": "起源ははっきりしないが、擬音的な語源とされる。",
  "synonyms": [
   "papagayo（オウム）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Mi loro puede decir varias palabras.\n— ¡Qué divertido! ¿Qué dice?",
   "ja": "「私のオウムはいくつか言葉を話せるんだ」「面白い！何て言うの？」"
  }
 },
 "pingüino": {
  "nuance": "「ペンギン」の基本語。ウェールズ語由来とされる。",
  "etymology": "ウェールズ語pen gwyn（白い頭）に由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Los pingüinos no pueden volar.\n— Pero nadan muy bien.",
   "ja": "「ペンギンは飛べないんだよね」「でも泳ぐのはとても上手だよね」"
  }
 },
 "pavo": {
  "nuance": "「七面鳥」の基本語。メキシコ原産の鳥で、感謝祭・クリスマスの定番料理。",
  "etymology": "ラテン語pavo（クジャク、混同から意味が転じたとされる）に由来。",
  "synonyms": [],
  "derived": [
   "pavo real（クジャク）"
  ],
  "dialogue": {
   "es": "— Preparamos pavo para la cena de Navidad.\n— Suena delicioso.",
   "ja": "「クリスマスディナー用に七面鳥を準備しているんだ」「美味しそうだね」"
  }
 },
 "cena": {
  "nuance": "「夕食」の基本語。cenar（夕食を食べる）から派生した名詞。",
  "etymology": "ラテン語cena（食事）に由来。",
  "synonyms": [],
  "derived": [
   "cenar（夕食を食べる）"
  ],
  "dialogue": {
   "es": "— ¿Qué vamos a preparar para la cena?\n— Pensaba hacer pasta.",
   "ja": "「夕食は何を作ろうか？」「パスタを作ろうかと思ってたよ」"
  }
 },
 "desayuno": {
  "nuance": "「朝食」の基本語。desayunar（朝食を食べる）から派生した名詞。",
  "etymology": "des（否定）+ ayuno（断食）の組み合わせ、「断食を解く」が原義。",
  "synonyms": [],
  "derived": [
   "desayunar（朝食を食べる）"
  ],
  "dialogue": {
   "es": "— ¿Qué comiste de desayuno?\n— Huevos con tocino.",
   "ja": "「朝食に何食べたの？」「卵とベーコンだよ」"
  }
 },
 "cuenta": {
  "nuance": "「お会計」の基本語。「口座」「勘定」という意味にもなる。La cuenta, por favor.（お会計お願いします）は非常によく使う表現。",
  "etymology": "contar（数える）から派生した語。",
  "synonyms": [],
  "derived": [
   "contar（数える）",
   "contador（会計士）"
  ],
  "dialogue": {
   "es": "— La cuenta, por favor.\n— Enseguida se la traigo.",
   "ja": "「お会計お願いします」「すぐお持ちします」"
  }
 },
 "uva": {
  "nuance": "「ぶどう」の基本語。メキシコでは新年の12回の鐘の音とともにぶどうを12粒食べる習慣もある。",
  "etymology": "ラテン語uva（ぶどう）に由来。",
  "synonyms": [],
  "derived": [
   "vino（ワイン）"
  ],
  "dialogue": {
   "es": "— Compré uvas sin semilla.\n— Perfecto, son más fáciles de comer.",
   "ja": "「種なしぶどうを買ったよ」「完璧、食べやすいよね」"
  }
 },
 "sandía": {
  "nuance": "「スイカ」の基本語。夏によく食べられるフルーツ。",
  "etymology": "アラビア語sindiyya（インドの実）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— La sandía está muy dulce hoy.\n— Es la mejor fruta para el calor.",
   "ja": "「今日のスイカはとても甘いね」「暑さに一番いい果物だよね」"
  }
 },
 "piña": {
  "nuance": "「パイナップル」の基本語。「松ぼっくり」という意味にもなる（見た目の類似から）。",
  "etymology": "pino（松）の実に似ていることから派生。",
  "synonyms": [],
  "derived": [
   "piñata（ピニャータ、形状の関連）"
  ],
  "dialogue": {
   "es": "— Esta piña está muy jugosa.\n— La compré en el mercado esta mañana.",
   "ja": "「このパイナップル、とてもジューシーだね」「今朝市場で買ったんだ」"
  }
 },
 "mango": {
  "nuance": "「マンゴー」の基本語。メキシコでは非常によく食べられる夏のフルーツ。",
  "etymology": "タミル語mankay経由でポルトガル語mangaに由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El mango con chile es delicioso.\n— Es un snack muy típico de aquí.",
   "ja": "「チリをかけたマンゴーは美味しいよね」「ここでとても典型的なおやつだよね」"
  }
 },
 "pera": {
  "nuance": "「梨」の基本語。西洋梨（洋梨）を指すことが一般的。",
  "etymology": "ラテン語pira（梨）に由来。",
  "synonyms": [],
  "derived": [
   "peral（梨の木）"
  ],
  "dialogue": {
   "es": "— Prefiero las peras a las manzanas.\n— A mí me gustan las dos por igual.",
   "ja": "「りんごより梨の方が好きなんだ」「私はどちらも同じくらい好きだよ」"
  }
 },
 "papaya": {
  "nuance": "「パパイヤ」の基本語。メキシコの朝食によく登場するフルーツ。",
  "etymology": "タイノ語papaya（パパイヤ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Como papaya casi todas las mañanas.\n— Es muy buena para la digestión.",
   "ja": "「ほとんど毎朝パパイヤを食べているんだ」「消化にとてもいいよね」"
  }
 },
 "zanahoria": {
  "nuance": "「にんじん」の基本語。",
  "etymology": "アラビア語isfannāriyaに由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Te gustan las zanahorias crudas?\n— Sí, me encantan con un poco de sal.",
   "ja": "「にんじんは生で好き？」「うん、少し塩をかけると大好きなんだ」"
  }
 },
 "papa": {
  "nuance": "「じゃがいも」の基本語。ラテンアメリカで一般的（スペインではpatataが一般的）。「ローマ教皇」という意味にもなる同形異義語（大文字Papaで区別）。",
  "etymology": "ケチュア語papa（じゃがいも）に由来。",
  "synonyms": [
   "patata（じゃがいも、スペインで一般的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Quieres papas fritas con tu hamburguesa?\n— Sí, por favor.",
   "ja": "「ハンバーガーにフライドポテトつける？」「うん、お願いします」"
  }
 },
 "cebolla": {
  "nuance": "「玉ねぎ」の基本語。多くのメキシコ料理の基本食材。",
  "etymology": "ラテン語cepulla（小さな玉ねぎ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Esta receta lleva mucha cebolla.\n— A mí me encanta el sabor que le da.",
   "ja": "「このレシピは玉ねぎがたくさん入るんだ」「それが加える風味が大好きなんだ」"
  }
 },
 "ajo": {
  "nuance": "「にんにく」の基本語。多くの料理の基本食材。",
  "etymology": "ラテン語allium（にんにく）に由来。",
  "synonyms": [],
  "derived": [
   "ajillo（にんにく風味の料理）"
  ],
  "dialogue": {
   "es": "— Le puse mucho ajo a la salsa.\n— Se nota, huele delicioso.",
   "ja": "「サルサにたくさんにんにくを入れたんだ」「わかるよ、美味しそうな匂いがする」"
  }
 },
 "tomate": {
  "nuance": "「トマト」の基本語。メキシコ料理に欠かせない食材。verdeとrojoの2種類がよく使われる（緑トマトはサルサ・ベルデに）。",
  "etymology": "ナワトル語tomatlに由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Esta salsa lleva tomate verde.\n— Por eso tiene ese color.",
   "ja": "「このサルサは緑トマトが入っているんだ」「だからその色をしているんだね」"
  }
 },
 "lechuga": {
  "nuance": "「レタス」の基本語。leche（ミルク）と同語源（レタスの茎から出る白い樹液から）。",
  "etymology": "ラテン語lactuca（レタス）に由来、leche（ミルク）と同語源。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Necesito lechuga fresca para la ensalada.\n— Hay en el refrigerador.",
   "ja": "「サラダ用の新鮮なレタスが必要なんだ」「冷蔵庫にあるよ」"
  }
 },
 "pepino": {
  "nuance": "「きゅうり」の基本語。",
  "etymology": "ラテン語pepo（メロン）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El pepino con limón y chile es un snack común aquí.\n— Se ve refrescante.",
   "ja": "「レモンとチリをかけたきゅうりはここでよくあるおやつなんだ」「涼しげに見えるね」"
  }
 },
 "brócoli": {
  "nuance": "「ブロッコリー」の基本語。イタリア語からの借用語。",
  "etymology": "イタリア語broccolo（キャベツの芽）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— No me gusta mucho el brócoli.\n— A mí tampoco de niño, pero ahora sí.",
   "ja": "「ブロッコリーあまり好きじゃないんだ」「私も子供の頃はそうだったけど、今は好きだよ」"
  }
 },
 "mesa": {
  "nuance": "「テーブル」の基本語。poner la mesa（食卓の準備をする）はよく使う組み合わせ。",
  "etymology": "ラテン語mensa（テーブル）に由来。",
  "synonyms": [],
  "derived": [
   "mesero（ウェイター、ラテンアメリカ）"
  ],
  "dialogue": {
   "es": "— ¿Puedes poner la mesa?\n— Claro, ya voy.",
   "ja": "「テーブルの準備してくれる？」「うん、今行くよ」"
  }
 },
 "microondas": {
  "nuance": "「電子レンジ」の基本語。micro（小さい）+ ondas（波）の組み合わせ、単数複数同形。",
  "etymology": "micro（小さい）+ ondas（波）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "onda（波）"
  ],
  "dialogue": {
   "es": "— Calienta esto en el microondas.\n— ¿Por cuánto tiempo?",
   "ja": "「これ電子レンジで温めて」「どれくらいの時間？」"
  }
 },
 "lavadora": {
  "nuance": "「洗濯機」の基本語。lavar（洗う）から派生した語。",
  "etymology": "lavar（洗う）から派生した語。",
  "synonyms": [],
  "derived": [
   "lavar（洗う）"
  ],
  "dialogue": {
   "es": "— La lavadora está haciendo un ruido raro.\n— Deberíamos llamar a un técnico.",
   "ja": "「洗濯機が変な音を立てているんだ」「技術者を呼んだ方がいいね」"
  }
 },
 "televisor": {
  "nuance": "「テレビ」の基本語。televisión（テレビ放送、番組の意味も）とは少し違い、televisorは「機器」を指すことが多い。",
  "etymology": "tele（遠くの）+ visor（見るもの）の組み合わせ。",
  "synonyms": [
   "televisión（テレビ、放送）"
  ],
  "derived": [
   "televisión（テレビ）"
  ],
  "dialogue": {
   "es": "— Compramos un televisor nuevo.\n— ¿De qué tamaño?",
   "ja": "「新しいテレビを買ったんだ」「どれくらいのサイズ？」"
  }
 },
 "espejo": {
  "nuance": "「鏡」の基本語。mirarse al espejo（鏡で自分を見る）はよく使う組み合わせ。",
  "etymology": "ラテン語speculum（鏡）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Se rompió el espejo del baño.\n— Hay que comprar uno nuevo.",
   "ja": "「お風呂の鏡が割れちゃった」「新しいのを買わないとね」"
  }
 },
 "lámpara": {
  "nuance": "「ランプ」の基本語。",
  "etymology": "ギリシャ語lampas（明かり、たいまつ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Esta lámpara da muy poca luz.\n— Deberíamos cambiar el foco.",
   "ja": "「このランプ、光がとても弱いね」「電球を変えた方がいいね」"
  }
 },
 "almohada": {
  "nuance": "「枕」の基本語。アラビア語由来。",
  "etymology": "アラビア語al-mikhadda（頬のためのもの）に由来。",
  "synonyms": [],
  "derived": [
   "almohadilla（クッション、パッド）"
  ],
  "dialogue": {
   "es": "— Necesito una almohada más suave.\n— Te presto una de las mías.",
   "ja": "「もっと柔らかい枕が必要なんだ」「私のを一つ貸すよ」"
  }
 },
 "manta": {
  "nuance": "「毛布」の基本語。cobija（毛布、ラテンアメリカでも一般的）とほぼ同義。",
  "etymology": "ラテン語mantum（マント、覆い）に由来。",
  "synonyms": [
   "cobija（毛布、ラテンアメリカで一般的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Hace frío, pásame una manta.\n— Aquí tienes.",
   "ja": "「寒いね、毛布取って」「はい、どうぞ」"
  }
 },
 "armario": {
  "nuance": "「クローゼット」の基本語。closet（英語借用、地域による）とも呼ばれる。",
  "etymology": "ラテン語armarium（武器や道具を入れる棚）に由来。",
  "synonyms": [
   "clóset（クローゼット、一部地域）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Mi armario está lleno de ropa que no uso.\n— Deberías donar algo.",
   "ja": "「私のクローゼットは使わない服でいっぱいなんだ」「何か寄付した方がいいよ」"
  }
 },
 "estante": {
  "nuance": "「棚」の基本語。estar（立つ）から派生した語。",
  "etymology": "estar（立つ）から派生した語。",
  "synonyms": [],
  "derived": [
   "estantería（棚、複数段の）"
  ],
  "dialogue": {
   "es": "— Puse los libros en ese estante.\n— Se ve muy ordenado.",
   "ja": "「本をあの棚に置いたよ」「とても整頓されて見えるね」"
  }
 },
 "alfombra": {
  "nuance": "「じゅうたん」の基本語。アラビア語由来。",
  "etymology": "アラビア語al-khumra（マット）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Esta alfombra es muy suave.\n— La compramos en Turquía.",
   "ja": "「このじゅうたん、とても柔らかいね」「トルコで買ったんだ」"
  }
 },
 "vela": {
  "nuance": "「ろうそく」の基本語。「帆（船の）」という意味にもなる同形異義語。",
  "etymology": "ラテン語vigilia（見張り→夜に使う明かり）に由来。",
  "synonyms": [],
  "derived": [
   "velar（見守る、徹夜する）"
  ],
  "dialogue": {
   "es": "— Encendimos velas durante el apagón.\n— Fue como una cena romántica.",
   "ja": "「停電の間ろうそくをつけたんだ」「ロマンチックなディナーみたいだったね」"
  }
 },
 "despertador": {
  "nuance": "「目覚まし時計」の基本語。despertar（目覚めさせる）から派生した語。",
  "etymology": "despertar（目覚めさせる）から派生した語。",
  "synonyms": [],
  "derived": [
   "despertar（目覚めさせる）"
  ],
  "dialogue": {
   "es": "— No escuché mi despertador esta mañana.\n— Por eso llegaste tarde.",
   "ja": "「今朝目覚ましが聞こえなかったんだ」「それで遅刻したんだね」"
  }
 },
 "ducha": {
  "nuance": "「シャワー」の基本語。ducharse（シャワーを浴びる）から派生した名詞。",
  "etymology": "イタリア語doccia（水の管）に由来。",
  "synonyms": [],
  "derived": [
   "ducharse（シャワーを浴びる）"
  ],
  "dialogue": {
   "es": "— Voy a tomar una ducha rápida.\n— Te espero aquí.",
   "ja": "「サッとシャワーを浴びてくるよ」「ここで待ってるね」"
  }
 },
 "aspiradora": {
  "nuance": "「掃除機」の基本語。aspirar（吸い込む）から派生した語。",
  "etymology": "aspirar（吸い込む）から派生した語。",
  "synonyms": [],
  "derived": [
   "aspirar（吸い込む）"
  ],
  "dialogue": {
   "es": "— ¿Puedes pasar la aspiradora en la sala?\n— Sí, ahora mismo.",
   "ja": "「リビングに掃除機かけてくれる？」「うん、今すぐやるよ」"
  }
 },
 "iglesia": {
  "nuance": "「教会」の基本語。メキシコの街の中心には必ずと言っていいほど教会が建っている。",
  "etymology": "ギリシャ語ekklesia（集会）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Esa iglesia es muy antigua.\n— Sí, tiene más de trescientos años.",
   "ja": "「あの教会はとても古いんだ」「うん、300年以上経っているよ」"
  }
 },
 "pueblo": {
  "nuance": "「町」の基本語。「民衆、人民」という意味にもなる。メキシコには美しい「プエブロ・マヒコ(魔法の町)」に認定された小さな町が多くある。",
  "etymology": "ラテン語populus（民衆）に由来。",
  "synonyms": [],
  "derived": [
   "poblar（人が住む）"
  ],
  "dialogue": {
   "es": "— Ese pueblo es muy pintoresco.\n— Deberíamos visitarlo algún fin de semana.",
   "ja": "「あの町はとても絵になるんだ」「いつか週末に訪れるべきだね」"
  }
 },
 "ayuntamiento": {
  "nuance": "「市役所」の基本語。",
  "etymology": "ayuntar（集める）から派生した語。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Necesito ir al ayuntamiento por un trámite.\n— ¿Qué documento necesitas?",
   "ja": "「手続きのために市役所に行く必要があるんだ」「どんな書類が必要なの？」"
  }
 },
 "estadio": {
  "nuance": "「スタジアム」の基本語。メキシコシティのアステカ・スタジアムは複数回ワールドカップの会場となった歴史的な場所。",
  "etymology": "ギリシャ語stadion（古代の距離単位、競技場）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El estadio estaba lleno para el partido.\n— Debió ser una atmósfera increíble.",
   "ja": "「試合でスタジアムは満員だったんだ」「きっとすごい雰囲気だったんだろうね」"
  }
 },
 "teatro": {
  "nuance": "「劇場」の基本語。「演劇」という意味にもなる。",
  "etymology": "ギリシャ語theatron（見る場所）に由来。",
  "synonyms": [],
  "derived": [
   "teatral（演劇の）"
  ],
  "dialogue": {
   "es": "— Vamos al teatro este fin de semana.\n— ¿Qué obra vamos a ver?",
   "ja": "「今週末劇場に行こう」「どの演劇を見に行くの？」"
  }
 },
 "cine": {
  "nuance": "「映画館」の基本語。「映画」という意味にもなる。cinematógrafoの短縮形。",
  "etymology": "ギリシャ語kinema（動き）に由来。",
  "synonyms": [],
  "derived": [
   "cinematografía（映画技術）"
  ],
  "dialogue": {
   "es": "— ¿Vamos al cine esta noche?\n— Sí, ¿qué película quieres ver?",
   "ja": "「今夜映画館に行こうか？」「うん、どの映画見たい？」"
  }
 },
 "catedral": {
  "nuance": "「大聖堂」の基本語。メキシコシティの中央広場にある大聖堂は北米最大級として有名。",
  "etymology": "ギリシャ語kathedra（司教座）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— La catedral del centro es impresionante.\n— Sí, la arquitectura es increíble.",
   "ja": "「中心街の大聖堂はすごいよね」「うん、建築がすごいよね」"
  }
 },
 "rascacielos": {
  "nuance": "「高層ビル」の基本語。直訳は「空を引っ掻くもの」、単数複数同形。",
  "etymology": "rascar（引っ掻く）+ cielos（空）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "rascar（引っ掻く）"
  ],
  "dialogue": {
   "es": "— Ese rascacielos es el más alto de la ciudad.\n— Se ve impresionante de noche.",
   "ja": "「あの高層ビルはこの街で一番高いんだ」「夜見るとすごいね」"
  }
 },
 "plaza": {
  "nuance": "「広場」の基本語。メキシコの街の中心にある伝統的な公共広場（zócaloとも呼ばれる）。",
  "etymology": "ラテン語platea（広い通り）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— La plaza principal está llena de gente los domingos.\n— Hay muchos vendedores ambulantes.",
   "ja": "「メインの広場は日曜日には人でいっぱいなんだ」「屋台の売り手がたくさんいるよね」"
  }
 },
 "avenida": {
  "nuance": "「大通り」の基本語。calle（通り）よりも広い道を指す。",
  "etymology": "llegar（到着する）と同語源のavenir（到着する）から派生。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vivo cerca de la avenida principal.\n— Debe haber mucho tráfico.",
   "ja": "「メインの大通りの近くに住んでいるんだ」「きっと交通量が多いんだろうね」"
  }
 },
 "puente": {
  "nuance": "「橋」の基本語。「連休」という比喩的な意味にもなる（祝日と週末をつなぐ休みのこと）。",
  "etymology": "ラテン語pons（橋）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Este fin de semana hay puente.\n— ¡Qué bien, un día extra de descanso!",
   "ja": "「今週末は連休があるんだ」「いいね、休みが1日多いんだ！」"
  }
 },
 "monumento": {
  "nuance": "「記念碑」の基本語。メキシコシティの独立記念塔（El Ángel）などが有名。",
  "etymology": "ラテン語monumentum（記念するもの）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Ese monumento conmemora la independencia.\n— Es un símbolo muy importante.",
   "ja": "「あの記念碑は独立を記念しているんだ」「とても重要な象徴だよね」"
  }
 },
 "semáforo": {
  "nuance": "「信号機」の基本語。semá（信号）+ foro（運ぶもの、光を運ぶ）の組み合わせ。",
  "etymology": "ギリシャ語sema（信号）+ phoros（運ぶもの）の組み合わせ。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El semáforo está en rojo.\n— Hay que esperar.",
   "ja": "「信号が赤だよ」「待たないとね」"
  }
 },
 "acera": {
  "nuance": "「歩道」の基本語。スペインで一般的（メキシコではbanquetaもよく使われる、地域差）。",
  "etymology": "ラテン語acies（列、縁）に由来。",
  "synonyms": [
   "banqueta（歩道、メキシコで一般的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Camina por la acera, es más seguro.\n— Tienes razón.",
   "ja": "「歩道を歩いて、その方が安全だから」「その通りだね」"
  }
 },
 "oficina de correos": {
  "nuance": "「郵便局」の基本語。oficina（オフィス）+ de correos（郵便の）の組み合わせ。",
  "etymology": "correo（郵便）から派生した語。",
  "synonyms": [],
  "derived": [
   "correo（郵便、メール）"
  ],
  "dialogue": {
   "es": "— Necesito ir a la oficina de correos.\n— ¿Vas a enviar algo?",
   "ja": "「郵便局に行く必要があるんだ」「何か送るの？」"
  }
 },
 "siempre": {
  "nuance": "「いつも」の基本語。頻度を表す副詞の中で最も高頻度を表す。",
  "etymology": "ラテン語semper（常に）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Siempre llego temprano al trabajo.\n— Qué puntual eres.",
   "ja": "「いつも仕事に早く着くんだ」「なんて時間に正確なんだ」"
  }
 },
 "nunca": {
  "nuance": "「決して〜ない」の基本語。文頭に置くとnoが不要になる（Nunca voy＝Noなしで文頭）。",
  "etymology": "ラテン語numquam（決して〜ない）に由来。",
  "synonyms": [
   "jamás（決して〜ない、より強調）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Nunca he estado en Europa.\n— Yo tampoco, me gustaría ir algún día.",
   "ja": "「ヨーロッパに行ったことが一度もないんだ」「私もだよ、いつか行ってみたいな」"
  }
 },
 "a veces": {
  "nuance": "「時々」の基本語。中頻度を表す副詞句。",
  "etymology": "vez（回、度）から派生した表現。",
  "synonyms": [],
  "derived": [
   "vez（回）"
  ],
  "dialogue": {
   "es": "— A veces trabajo los fines de semana.\n— Debe ser cansado.",
   "ja": "「時々週末も働くんだ」「疲れるだろうね」"
  }
 },
 "a menudo": {
  "nuance": "「よく」の基本語。a vecesよりも高頻度を表す。",
  "etymology": "menudo（小さい、細かい）から派生した表現、「細かく＝頻繁に」の意。",
  "synonyms": [
   "frecuentemente（頻繁に）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Voy al gimnasio a menudo.\n— Qué disciplina.",
   "ja": "「よくジムに行くんだ」「規則正しいね」"
  }
 },
 "todavía": {
  "nuance": "「まだ」の基本語。否定文でも肯定文でも使える（todavía no＝まだ〜ない）。",
  "etymology": "toda（すべて）+ vía（道）の組み合わせから派生したとされる。",
  "synonyms": [
   "aún（まだ、ほぼ同義）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Todavía estás trabajando?\n— Sí, me falta un poco.",
   "ja": "「まだ仕事してるの？」「うん、あと少しなんだ」"
  }
 },
 "ya": {
  "nuance": "「すでに」の基本語。todavíaと対照的に使われることが多い（Ya terminé＝もう終わった）。",
  "etymology": "ラテン語iam（すでに）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Ya llegaste?\n— Sí, ya estoy aquí.",
   "ja": "「もう着いた？」「うん、もうここにいるよ」"
  }
 },
 "pronto": {
  "nuance": "「すぐに」の基本語。hasta pronto（またすぐにね）という別れの挨拶もよく使う。",
  "etymology": "ラテン語promptus（用意のできた）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Voy a llegar pronto.\n— Perfecto, te espero.",
   "ja": "「すぐに着くよ」「わかった、待ってるね」"
  }
 },
 "temprano": {
  "nuance": "「早く」の基本語。levantarse temprano（早起きする）はよく使う組み合わせ。",
  "etymology": "ラテン語tempranus（時期の早い）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me gusta levantarme temprano.\n— Yo prefiero dormir hasta tarde.",
   "ja": "「早起きするのが好きなんだ」「私は遅くまで寝ている方が好きだよ」"
  }
 },
 "siglo": {
  "nuance": "「世紀」の基本語。siglo veintiuno（21世紀）のように使う。",
  "etymology": "ラテン語saeculum（時代、世代）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Este edificio es del siglo diecinueve.\n— Se nota por el estilo arquitectónico.",
   "ja": "「この建物は19世紀のものなんだ」「建築様式でわかるね」"
  }
 },
 "década": {
  "nuance": "「10年間」の基本語。ラテン語deca（10）に由来。",
  "etymology": "ギリシャ語deka（10）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vivimos aquí desde hace una década.\n— El tiempo pasa muy rápido.",
   "ja": "「私たちは10年前からここに住んでいるんだ」「時が経つのはとても早いね」"
  }
 },
 "temporada": {
  "nuance": "「シーズン」の基本語。temporada alta（ハイシーズン）、temporada baja（オフシーズン）はよく使う組み合わせ。",
  "etymology": "tiempo（時間）から派生した語。",
  "synonyms": [],
  "derived": [
   "tiempo（時間）"
  ],
  "dialogue": {
   "es": "— Diciembre es temporada alta aquí.\n— Los precios suben mucho entonces.",
   "ja": "「12月はここではハイシーズンなんだ」「じゃあその頃は値段がすごく上がるね」"
  }
 },
 "tienda": {
  "nuance": "「店」の基本語。tienda de campaña（テント）という別の意味にもなる。",
  "etymology": "ラテン語tendere（張る）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Hay una tienda nueva en la esquina.\n— ¿Qué venden ahí?",
   "ja": "「角に新しい店ができたんだ」「そこは何を売っているの？」"
  }
 },
 "centro comercial": {
  "nuance": "「ショッピングモール」の基本語。centro（中心）+ comercial（商業の）の組み合わせ。",
  "etymology": "centro（中心）+ comercio（商業）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "comercio（商業）"
  ],
  "dialogue": {
   "es": "— Vamos al centro comercial este fin de semana.\n— Necesito comprar ropa nueva.",
   "ja": "「今週末ショッピングモールに行こう」「新しい服を買う必要があるんだ」"
  }
 },
 "caja": {
  "nuance": "「レジ」の基本語。「箱」という意味にもなる。",
  "etymology": "ラテン語capsa（箱）に由来。",
  "synonyms": [],
  "derived": [
   "cajero（レジ係、ATM）"
  ],
  "dialogue": {
   "es": "— Puedes pagar en la caja.\n— ¿Aceptan tarjeta?",
   "ja": "「レジでお支払いできますよ」「カードは使えますか？」"
  }
 },
 "oferta": {
  "nuance": "「セール」の基本語。「申し出、提案」という意味にもなる。en oferta（セール中）はよく使う組み合わせ。",
  "etymology": "ラテン語offerre（提供する）に由来。",
  "synonyms": [],
  "derived": [
   "ofrecer（提供する）"
  ],
  "dialogue": {
   "es": "— Este producto está en oferta.\n— ¡Qué buen precio!",
   "ja": "「この商品はセール中なんだ」「なんていい値段なんだ！」"
  }
 },
 "descuento": {
  "nuance": "「割引」の基本語。descontar（差し引く）から派生した語。",
  "etymology": "descontar（差し引く）から派生した語。",
  "synonyms": [],
  "derived": [
   "descontar（差し引く）"
  ],
  "dialogue": {
   "es": "— ¿Hay descuento por pagar en efectivo?\n— Sí, un cinco por ciento.",
   "ja": "「現金払いだと割引はありますか？」「はい、5%です」"
  }
 },
 "talla": {
  "nuance": "「サイズ」の基本語。衣服のサイズを指すときによく使う（números＝数値のサイズとは区別）。",
  "etymology": "tallar（彫る、切る）から派生した語。",
  "synonyms": [],
  "derived": [
   "tallar（彫る）"
  ],
  "dialogue": {
   "es": "— ¿Qué talla usas?\n— Uso talla mediana.",
   "ja": "「サイズは何？」「Mサイズを着ているよ」"
  }
 },
 "carrito": {
  "nuance": "「カート」の基本語。carro（車）の指小形。",
  "etymology": "carro（車）の指小形に由来。",
  "synonyms": [],
  "derived": [
   "carro（車）"
  ],
  "dialogue": {
   "es": "— Necesitamos un carrito más grande.\n— Hay varios en la entrada.",
   "ja": "「もっと大きいカートが必要だね」「入り口にいくつかあるよ」"
  }
 },
 "pedido": {
  "nuance": "「注文」の基本語。pedir（頼む）の過去分詞から名詞化。",
  "etymology": "pedir（頼む）から派生した語。",
  "synonyms": [],
  "derived": [
   "pedir（頼む）"
  ],
  "dialogue": {
   "es": "— Mi pedido todavía no ha llegado.\n— ¿Cuánto tiempo dijeron que tardaría?",
   "ja": "「私の注文品がまだ届いていないんだ」「どれくらいかかるって言ってた？」"
  }
 },
 "sala de emergencias": {
  "nuance": "「救急外来」の基本語。sala（部屋）+ de emergencias（緊急の）の組み合わせ。",
  "etymology": "sala（部屋）+ emergencia（緊急事態）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "emergencia（緊急事態）"
  ],
  "dialogue": {
   "es": "— Tuvimos que llevarlo a la sala de emergencias.\n— ¿Está bien ahora?",
   "ja": "「彼を救急外来に連れて行かなきゃならなかったんだ」「今は大丈夫なの？」"
  }
 },
 "inyección": {
  "nuance": "「注射」の基本語。poner una inyección（注射を打つ）はよく使う組み合わせ。",
  "etymology": "ラテン語iniectio（中に投げ入れること）に由来。",
  "synonyms": [],
  "derived": [
   "inyectar（注射する）"
  ],
  "dialogue": {
   "es": "— El médico me puso una inyección.\n— ¿Dolió mucho?",
   "ja": "「医者が注射を打ってくれたんだ」「すごく痛かった？」"
  }
 },
 "cicatriz": {
  "nuance": "「傷跡」の基本語。",
  "etymology": "ラテン語cicatrix（傷跡）に由来。",
  "synonyms": [],
  "derived": [
   "cicatrizar（傷が治る）"
  ],
  "dialogue": {
   "es": "— Esa cicatriz es de cuando era niño.\n— ¿Qué te pasó?",
   "ja": "「その傷跡は子供の頃のものなんだ」「何があったの？」"
  }
 },
 "respiración": {
  "nuance": "「呼吸」の基本語。respirar（呼吸する）の名詞形。",
  "etymology": "respirar（呼吸する）から派生した語。",
  "synonyms": [],
  "derived": [
   "respirar（呼吸する）"
  ],
  "dialogue": {
   "es": "— Haz una respiración profunda.\n— Ya me siento más tranquilo.",
   "ja": "「深呼吸してみて」「もう落ち着いた気がするよ」"
  }
 },
 "estornudo": {
  "nuance": "「くしゃみ」の基本語。estornudar（くしゃみをする）の名詞形。¡Salud!（お大事に）はくしゃみをした人にかける定番の言葉。",
  "etymology": "ラテン語sternutare（くしゃみをする）に由来。",
  "synonyms": [],
  "derived": [
   "estornudar（くしゃみをする）"
  ],
  "dialogue": {
   "es": "— ¡Salud! Ese fue un gran estornudo.\n— Gracias, creo que tengo alergias.",
   "ja": "「お大事に！すごいくしゃみだったね」「ありがとう、アレルギーかもしれない」"
  }
 },
 "mareo": {
  "nuance": "「めまい」の基本語。marear（めまいを起こす、酔わせる）から派生した名詞。",
  "etymology": "mar（海）から派生した語（船酔いのイメージから）。",
  "synonyms": [],
  "derived": [
   "marear（めまいを起こす）",
   "mareado（めまいがする）"
  ],
  "dialogue": {
   "es": "— Tengo un poco de mareo.\n— Deberías sentarte y tomar agua.",
   "ja": "「少しめまいがするんだ」「座って水を飲んだ方がいいよ」"
  }
 },
 "programador": {
  "nuance": "「プログラマー」の基本語。女性形はprogramadora。",
  "etymology": "programar（プログラムする）から派生した語。",
  "synonyms": [],
  "derived": [
   "programar（プログラムする）",
   "programa（プログラム）"
  ],
  "dialogue": {
   "es": "— Trabajo como programador en una startup.\n— ¿Qué lenguajes usas?",
   "ja": "「スタートアップでプログラマーとして働いているんだ」「どんな言語を使うの？」"
  }
 },
 "impresora": {
  "nuance": "「プリンター」の基本語。imprimir（印刷する）から派生した語。",
  "etymology": "imprimir（印刷する）から派生した語。",
  "synonyms": [],
  "derived": [
   "imprimir（印刷する）"
  ],
  "dialogue": {
   "es": "— La impresora se quedó sin tinta.\n— Hay más en el cajón.",
   "ja": "「プリンターのインクが切れちゃった」「引き出しにもっとあるよ」"
  }
 },
 "teclado": {
  "nuance": "「キーボード」の基本語。tecla（キー）から派生した語。",
  "etymology": "tecla（キー）から派生した語。",
  "synonyms": [],
  "derived": [
   "tecla（キー）"
  ],
  "dialogue": {
   "es": "— Mi teclado no funciona bien.\n— Deberías limpiarlo.",
   "ja": "「私のキーボードがうまく動かないんだ」「掃除した方がいいよ」"
  }
 },
 "auriculares": {
  "nuance": "「ヘッドホン」の基本語。audífonos（イヤホン、地域による）ともほぼ同義。",
  "etymology": "ラテン語auris（耳）から派生した語。",
  "synonyms": [
   "audífonos（イヤホン、地域による）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Olvidé mis auriculares en casa.\n— Te presto los míos.",
   "ja": "「ヘッドホンを家に忘れちゃった」「私のを貸すよ」"
  }
 },
 "podcast": {
  "nuance": "「ポッドキャスト」の基本語。英語からの借用語で、そのまま使われる。",
  "etymology": "英語pod（iPod）+ broadcast（放送）の組み合わせに由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué podcast me recomiendas?\n— Hay uno muy bueno sobre historia.",
   "ja": "「どのポッドキャストがおすすめ？」「歴史についてのとてもいいのがあるよ」"
  }
 },
 "virus informático": {
  "nuance": "「コンピューターウイルス」の基本語。virus（ウイルス）+ informático（情報科学の）の組み合わせ。",
  "etymology": "ラテン語virus（毒）から派生した語。",
  "synonyms": [],
  "derived": [
   "informática（情報科学）"
  ],
  "dialogue": {
   "es": "— Mi computadora tiene un virus informático.\n— Deberías instalar un antivirus.",
   "ja": "「私のパソコンにコンピューターウイルスが入っているんだ」「アンチウイルスをインストールした方がいいよ」"
  }
 },
 "almacenamiento": {
  "nuance": "「ストレージ」の基本語。almacenar（保存する）から派生した語。",
  "etymology": "almacenar（保存する）から派生した語。",
  "synonyms": [],
  "derived": [
   "almacenar（保存する）"
  ],
  "dialogue": {
   "es": "— Mi teléfono no tiene suficiente almacenamiento.\n— Deberías borrar algunas fotos.",
   "ja": "「私の携帯は十分なストレージがないんだ」「いくつか写真を消した方がいいよ」"
  }
 },
 "configuración": {
  "nuance": "「設定」の基本語。configurar（設定する）から派生した語。",
  "etymology": "configurar（設定する）から派生した語。",
  "synonyms": [],
  "derived": [
   "configurar（設定する）"
  ],
  "dialogue": {
   "es": "— Cambié la configuración de mi teléfono.\n— ¿Qué cambiaste?",
   "ja": "「携帯の設定を変えたんだ」「何を変えたの？」"
  }
 },
 "conexión": {
  "nuance": "「接続」の基本語。conectar（接続する）から派生した語。",
  "etymology": "conectar（接続する）から派生した語。",
  "synonyms": [],
  "derived": [
   "conectar（接続する）"
  ],
  "dialogue": {
   "es": "— No tengo buena conexión a internet.\n— Prueba reiniciar el router.",
   "ja": "「インターネットの接続が良くないんだ」「ルーターを再起動してみて」"
  }
 },
 "¿cuánto cuesta?": {
  "nuance": "「いくらですか？」の基本フレーズ。買い物で非常によく使う。",
  "etymology": "cuánto（どれくらい）+ costar（値段がする）の組み合わせ。",
  "synonyms": [
   "¿cuánto vale?（いくらですか、ほぼ同義）"
  ],
  "derived": [
   "costar（値段がする）"
  ],
  "dialogue": {
   "es": "— ¿Cuánto cuesta esto?\n— Doscientos pesos.",
   "ja": "「これいくらですか？」「200ペソです」"
  }
 },
 "no entiendo": {
  "nuance": "「わかりません」の基本フレーズ。理解できないときの定番表現。",
  "etymology": "no（否定）+ entender（理解する）の組み合わせ。",
  "synonyms": [
   "no comprendo（わかりません、ややフォーマル）"
  ],
  "derived": [
   "entender（理解する）"
  ],
  "dialogue": {
   "es": "— No entiendo esta palabra.\n— Te la explico con gusto.",
   "ja": "「この単語がわからないんだ」「喜んで説明するよ」"
  }
 },
 "claro que sí": {
  "nuance": "「もちろん」の基本フレーズ。強い肯定・同意を表す。",
  "etymology": "claro（明らかな）+ que sí（そうだと）の組み合わせ。",
  "synonyms": [
   "por supuesto（もちろん）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Me puedes ayudar?\n— Claro que sí.",
   "ja": "「手伝ってもらえる？」「もちろんだよ」"
  }
 },
 "tal vez": {
  "nuance": "「たぶん」の基本フレーズ。quizásとほぼ同義。tal vez+接続法という組み合わせもよく見られる。",
  "etymology": "tal（そのような）+ vez（回）の組み合わせ。",
  "synonyms": [
   "quizás（たぶん）",
   "a lo mejor（たぶん、口語）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Vienes a la fiesta?\n— Tal vez, todavía no estoy seguro.",
   "ja": "「パーティー来る？」「たぶんね、まだ確信が持てないんだ」"
  }
 },
 "sin embargo": {
  "nuance": "「しかしながら」の基本フレーズ。pero（しかし）よりもフォーマルな逆接表現。",
  "etymology": "sin（〜なしで）+ embargo（妨げ）の組み合わせ。",
  "synonyms": [
   "no obstante（しかしながら、フォーマル）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Sin embargo, hay otra opción.\n— ¿Cuál sería?",
   "ja": "「しかしながら、別の選択肢があるんだ」「それはどんな？」"
  }
 },
 "además": {
  "nuance": "「さらに」の基本フレーズ。情報を付け加えるときに使う接続表現。",
  "etymology": "a（〜へ）+ demás（残りの）の組み合わせ。",
  "synonyms": [
   "también（〜も）"
  ],
  "derived": [
   "demás（残りの）"
  ],
  "dialogue": {
   "es": "— Es un buen restaurante, además está cerca.\n— Vamos entonces.",
   "ja": "「いいレストランだよ、さらに近いんだ」「じゃあ行こう」"
  }
 },
 "aunque": {
  "nuance": "「〜だけれども」の基本フレーズ。逆接・譲歩を表す接続詞。",
  "etymology": "aun（〜さえ）+ que（〜ということ）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "aun（〜さえ）"
  ],
  "dialogue": {
   "es": "— Aunque llueva, vamos a salir.\n— Bueno, llevemos paraguas.",
   "ja": "「雨が降っても、出かけるつもりだよ」「じゃあ傘を持っていこう」"
  }
 },
 "me encantaría": {
  "nuance": "「ぜひそうしたい」の基本フレーズ。encantar（大好きだ、gustar型動詞）の条件法。丁寧な誘い・提案への強い肯定的な返事。",
  "etymology": "encantar（魅了する）の条件法。",
  "synonyms": [],
  "derived": [
   "encantar（大好きだ）"
  ],
  "dialogue": {
   "es": "— ¿Quieres venir a mi boda?\n— Me encantaría, gracias por invitarme.",
   "ja": "「私の結婚式に来ない？」「ぜひ行きたいよ、招待してくれてありがとう」"
  }
 },
 "no importa": {
  "nuance": "「気にしないで」の基本フレーズ。importar（重要である）の否定形。",
  "etymology": "no（否定）+ importar（重要である）の組み合わせ。",
  "synonyms": [
   "no hay problema（問題ない）"
  ],
  "derived": [
   "importar（重要である）"
  ],
  "dialogue": {
   "es": "— Perdón por llegar tarde.\n— No importa, apenas llegué yo también.",
   "ja": "「遅れてごめん」「気にしないで、私もついさっき着いたところだから」"
  }
 },
 "depende": {
  "nuance": "「場合による」の基本フレーズ。depender de（〜による）から派生。",
  "etymology": "depender（〜による）から派生した語。",
  "synonyms": [],
  "derived": [
   "depender（〜による）"
  ],
  "dialogue": {
   "es": "— ¿Vas a ir a la playa?\n— Depende del clima.",
   "ja": "「ビーチに行くの？」「天気次第だね」"
  }
 },
 "estoy de acuerdo": {
  "nuance": "「賛成です」の基本フレーズ。estar de acuerdo con（〜に賛成する）から派生。",
  "etymology": "estar（いる）+ de acuerdo（合意して）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "acuerdo（合意）"
  ],
  "dialogue": {
   "es": "— Creo que deberíamos esperar.\n— Estoy de acuerdo contigo.",
   "ja": "「待つべきだと思うんだ」「あなたに賛成だよ」"
  }
 },
 "¿en serio?": {
  "nuance": "「本当に？」の基本フレーズ。驚きを表す口語表現。",
  "etymology": "en（〜で）+ serio（真剣な）の組み合わせ。",
  "synonyms": [
   "¿de verdad?（本当に？）"
  ],
  "derived": [
   "serio（真面目な）"
  ],
  "dialogue": {
   "es": "— Gané la lotería.\n— ¿En serio? ¡Qué envidia!",
   "ja": "「宝くじ当たったんだ」「本当に？うらやましい！」"
  }
 },
 "buena suerte": {
  "nuance": "「頑張って」の基本フレーズ。直訳は「良い運を」。",
  "etymology": "buena（良い）+ suerte（運）の組み合わせ。",
  "synonyms": [
   "mucho éxito（成功を祈る）"
  ],
  "derived": [
   "suerte（運）"
  ],
  "dialogue": {
   "es": "— Tengo un examen mañana.\n— ¡Buena suerte!",
   "ja": "「明日試験があるんだ」「頑張ってね！」"
  }
 },
 "felicidades": {
  "nuance": "「おめでとう」の基本フレーズ。誕生日、昇進など様々なお祝いに使える万能語。",
  "etymology": "felicidad（幸福）から派生した語。",
  "synonyms": [
   "enhorabuena（おめでとう、達成に対して）"
  ],
  "derived": [
   "felicidad（幸福）"
  ],
  "dialogue": {
   "es": "— ¡Aprobé el examen!\n— ¡Felicidades!",
   "ja": "「試験に合格したよ！」「おめでとう！」"
  }
 },
 "nos vemos pronto": {
  "nuance": "「またすぐにね」の基本フレーズ。別れ際の定番の挨拶。",
  "etymology": "nos vemos（会う）+ pronto（すぐに）の組み合わせ。",
  "synonyms": [
   "hasta pronto（またすぐにね）"
  ],
  "derived": [
   "ver（見る、会う）"
  ],
  "dialogue": {
   "es": "— Ya me tengo que ir.\n— Está bien, nos vemos pronto.",
   "ja": "「もう行かないと」「わかった、またすぐにね」"
  }
 },
 "por si acaso": {
  "nuance": "「念のため」の基本フレーズ。",
  "etymology": "por（〜のために）+ si acaso（もしかして）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "acaso（もしかして）"
  ],
  "dialogue": {
   "es": "— Lleva un paraguas, por si acaso.\n— Buena idea.",
   "ja": "「念のため傘持って行きなよ」「いい考えだね」"
  }
 },
 "hoy en día": {
  "nuance": "「最近は、今日では」の基本フレーズ。現代の状況について話すときによく使う。",
  "etymology": "hoy（今日）+ en día（日に）の組み合わせ。",
  "synonyms": [
   "actualmente（現在は）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Hoy en día todo es digital.\n— Es cierto, ha cambiado mucho.",
   "ja": "「最近は何でもデジタルだよね」「本当だね、すごく変わったよね」"
  }
 },
 "cereza": {
  "nuance": "「さくらんぼ」の基本語。",
  "etymology": "ラテン語ceresia（さくらんぼ）に由来。",
  "synonyms": [],
  "derived": [
   "cerezo（さくらんぼの木、桜の木）"
  ],
  "dialogue": {
   "es": "— Estas cerezas están muy dulces.\n— Las compré en el mercado esta mañana.",
   "ja": "「このさくらんぼ、とても甘いね」「今朝市場で買ったんだ」"
  }
 },
 "durazno": {
  "nuance": "「桃」の基本語。ラテンアメリカで一般的（スペインではmelocotónが一般的、地域差）。",
  "etymology": "ラテン語duracinus（硬い皮の実）に由来。",
  "synonyms": [
   "melocotón（桃、スペイン）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Este durazno está muy jugoso.\n— Es la mejor fruta del verano.",
   "ja": "「この桃はとてもジューシーだね」「夏一番の果物だよね」"
  }
 },
 "coco": {
  "nuance": "「ココナッツ」の基本語。agua de coco（ココナッツウォーター）はメキシコの海沿いでよく飲まれる。",
  "etymology": "ポルトガル語coco（お化け→実の3つの穴が顔に見えることから）に由来するとされる。",
  "synonyms": [],
  "derived": [
   "cocotero（ヤシの木）"
  ],
  "dialogue": {
   "es": "— Me encanta el agua de coco.\n— Es muy refrescante en la playa.",
   "ja": "「ココナッツウォーターが大好きなんだ」「ビーチでとても爽やかだよね」"
  }
 },
 "calabaza": {
  "nuance": "「かぼちゃ」の基本語。死者の日やハロウィンの時期によく使われる食材・飾り。",
  "etymology": "起源は諸説あるが、先住民言語系の語とされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vamos a hacer sopa de calabaza.\n— Suena delicioso para este clima.",
   "ja": "「かぼちゃスープを作ろう」「この天気に美味しそうだね」"
  }
 },
 "pizza": {
  "nuance": "「ピザ」の基本語。イタリア語からの国際的な借用語。",
  "etymology": "イタリア語pizza（起源は諸説あり）に由来。",
  "synonyms": [],
  "derived": [
   "pizzería（ピザ屋）"
  ],
  "dialogue": {
   "es": "— ¿Pedimos pizza esta noche?\n— Sí, con mucho queso.",
   "ja": "「今夜ピザ頼もうか？」「うん、チーズたっぷりでね」"
  }
 },
 "hamburguesa": {
  "nuance": "「ハンバーガー」の基本語。ドイツの都市ハンブルクに由来。",
  "etymology": "ドイツの都市Hamburgに由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Quiero una hamburguesa con papas.\n— Buena elección.",
   "ja": "「ハンバーガーとポテトが欲しいな」「いい選択だね」"
  }
 },
 "sopa": {
  "nuance": "「スープ」の基本語。メキシコではsopa secaという「乾いたスープ」（実は米やパスタ料理）という独特な用法もある。",
  "etymology": "ゲルマン語系の語suppa（パンを浸した食事）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Esta sopa está deliciosa.\n— Es la receta de mi abuela.",
   "ja": "「このスープ美味しいね」「祖母のレシピなんだ」"
  }
 },
 "ensalada": {
  "nuance": "「サラダ」の基本語。sal（塩）と同語源（元々は塩で味付けした野菜料理から）。",
  "etymology": "sal（塩）から派生した語。",
  "synonyms": [],
  "derived": [
   "sal（塩）"
  ],
  "dialogue": {
   "es": "— ¿Quieres una ensalada de acompañamiento?\n— Sí, por favor.",
   "ja": "「サイドにサラダはいかがですか？」「はい、お願いします」"
  }
 },
 "postre": {
  "nuance": "「デザート」の基本語。食後に出されるものを指す。",
  "etymology": "post（後の）から派生した語。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué hay de postre?\n— Flan casero.",
   "ja": "「デザートは何がある？」「手作りのフランだよ」"
  }
 },
 "pastel": {
  "nuance": "「ケーキ」の基本語。ラテンアメリカで一般的（スペインではtartaもよく使われる）。「パステル画」という意味にもなる。",
  "etymology": "フランス語pastel（練り粉）に由来。",
  "synonyms": [
   "tarta（ケーキ、スペイン）"
  ],
  "derived": [
   "pastelería（ケーキ屋）"
  ],
  "dialogue": {
   "es": "— Hice un pastel de chocolate.\n— ¡Se ve delicioso!",
   "ja": "「チョコレートケーキを作ったんだ」「美味しそう！」"
  }
 },
 "helado": {
  "nuance": "「アイスクリーム」の基本語。helar（凍らせる）の過去分詞から名詞化。",
  "etymology": "helar（凍らせる）から派生した語。",
  "synonyms": [],
  "derived": [
   "helar（凍らせる）",
   "hielo（氷）"
  ],
  "dialogue": {
   "es": "— ¿Qué sabor de helado quieres?\n— Chocolate, por favor.",
   "ja": "「どの味のアイスクリームが欲しい？」「チョコレートをお願い」"
  }
 },
 "chocolate": {
  "nuance": "「チョコレート」の基本語。ナワトル語（アステカの言葉）由来で、メキシコから世界に広まった。",
  "etymology": "ナワトル語xocolatl（苦い水）に由来。",
  "synonyms": [],
  "derived": [
   "chocolatería（チョコレート専門店）"
  ],
  "dialogue": {
   "es": "— El chocolate mexicano tiene canela.\n— Por eso tiene ese sabor especial.",
   "ja": "「メキシコのチョコレートにはシナモンが入っているんだ」「だからあの特別な味がするんだね」"
  }
 },
 "jugo": {
  "nuance": "「ジュース」の基本語。zumo（ジュース、スペインで一般的）とほぼ同義（地域差）。",
  "etymology": "ラテン語sucus（樹液、汁）に由来。",
  "synonyms": [
   "zumo（ジュース、スペインで一般的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Me das un jugo de naranja?\n— Claro, enseguida.",
   "ja": "「オレンジジュースもらえる？」「もちろん、すぐに」"
  }
 },
 "cerveza": {
  "nuance": "「ビール」の基本語。メキシコは世界的なビール輸出国でもある（Corona, Modeloなど）。",
  "etymology": "ラテン語cervesia（ビール）に由来。",
  "synonyms": [],
  "derived": [
   "cervecería（ビール醸造所、バー）"
  ],
  "dialogue": {
   "es": "— ¿Quieres una cerveza fría?\n— Sí, con mucho gusto.",
   "ja": "「冷たいビール飲む？」「うん、喜んで」"
  }
 },
 "vino": {
  "nuance": "「ワイン」の基本語。メキシコの北部（バハ・カリフォルニアなど）にもワイン産地がある。",
  "etymology": "ラテン語vinum（ワイン）に由来。",
  "synonyms": [],
  "derived": [
   "viñedo（ぶどう畑）",
   "vinicultura（ワイン醸造業）"
  ],
  "dialogue": {
   "es": "— Este vino es de Baja California.\n— No sabía que México producía vino.",
   "ja": "「このワインはバハ・カリフォルニア産なんだ」「メキシコがワインを作っているなんて知らなかったよ」"
  }
 },
 "azúcar": {
  "nuance": "「砂糖」の基本語。性が不安定な珍しい単語（男性・女性どちらでも使われる：el azúcar/la azúcar）。",
  "etymology": "アラビア語as-sukkarに由来。",
  "synonyms": [],
  "derived": [
   "azucarero（砂糖入れ）",
   "azucarado（甘い）"
  ],
  "dialogue": {
   "es": "— ¿Cuánta azúcar le pongo?\n— Solo una cucharadita.",
   "ja": "「砂糖どれくらい入れる？」「小さじ一杯だけで」"
  }
 },
 "sal": {
  "nuance": "「塩」の基本語。pasarla sal（塩を取る）という日常会話のフレーズもよく使う。",
  "etymology": "ラテン語sal（塩）に由来。",
  "synonyms": [],
  "derived": [
   "salar（塩を振る）",
   "salado（塩辛い）"
  ],
  "dialogue": {
   "es": "— ¿Me pasas la sal, por favor?\n— Aquí tienes.",
   "ja": "「塩取ってくれる？」「はい、どうぞ」"
  }
 },
 "pimienta": {
  "nuance": "「こしょう」の基本語。pimiento（ピーマン、パプリカ）とは別の単語なので混同しないよう注意。",
  "etymology": "ラテン語pigmenta（染料、香辛料）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Le pongo pimienta a la sopa?\n— Sí, un poco.",
   "ja": "「スープにこしょうかける？」「うん、少しだけ」"
  }
 },
 "aceite": {
  "nuance": "「油」の基本語。aceite de oliva（オリーブオイル）はよく使う組み合わせ。",
  "etymology": "アラビア語az-zayt（オリーブの汁）に由来。",
  "synonyms": [],
  "derived": [
   "aceituna（オリーブの実）"
  ],
  "dialogue": {
   "es": "— Usa aceite de oliva para esta receta.\n— ¿Tienes en casa?",
   "ja": "「このレシピにはオリーブオイルを使ってね」「家にある？」"
  }
 },
 "impaciente": {
  "nuance": "「せっかちな」の基本語。pacienteの反対語。",
  "etymology": "in（否定）+ paciente（忍耐強い）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "impaciencia（せっかちさ）"
  ],
  "dialogue": {
   "es": "— Estoy impaciente por ver los resultados.\n— Ya casi los tenemos.",
   "ja": "「結果を見るのが待ちきれないんだ」「もうすぐ出るよ」"
  }
 },
 "pesimista": {
  "nuance": "「悲観的な」の基本語。optimistaの反対語。男女同形（-istaで終わる形容詞）。",
  "etymology": "ラテン語pessimus（最悪の）に由来。",
  "synonyms": [],
  "derived": [
   "pesimismo（悲観主義）"
  ],
  "dialogue": {
   "es": "— No seas tan pesimista.\n— Tienes razón, voy a intentar ser más positivo.",
   "ja": "「そんなに悲観的にならないで」「その通りだね、もっとポジティブになるようにするよ」"
  }
 },
 "gracioso": {
  "nuance": "「面白い」の基本語。chistosoとほぼ同義でよく使われる。",
  "etymology": "gracia（優雅さ、面白さ）から派生した語。",
  "synonyms": [
   "chistoso（面白い、ほぼ同義）"
  ],
  "derived": [
   "gracia（優雅さ、面白さ）"
  ],
  "dialogue": {
   "es": "— Eres muy gracioso.\n— Gracias, me gusta hacer reír a la gente.",
   "ja": "「君はとても面白いね」「ありがとう、人を笑わせるのが好きなんだ」"
  }
 },
 "profundo": {
  "nuance": "「深い」の基本語。「深遠な、深みのある」という比喩的な意味にもなる。",
  "etymology": "ラテン語profundus（底が深い）に由来。",
  "synonyms": [],
  "derived": [
   "profundidad（深さ）",
   "profundizar（深く掘り下げる）"
  ],
  "dialogue": {
   "es": "— Este lago es muy profundo.\n— Hay que tener cuidado al nadar.",
   "ja": "「この湖はとても深いんだ」「泳ぐとき気をつけないとね」"
  }
 },
 "plano": {
  "nuance": "「平らな」の基本語。「地図、計画」という意味の名詞にもなる。",
  "etymology": "ラテン語planus（平らな）に由来。",
  "synonyms": [],
  "derived": [
   "planear（計画する）"
  ],
  "dialogue": {
   "es": "— Este terreno es muy plano.\n— Perfecto para construir aquí.",
   "ja": "「この土地はとても平らだね」「ここに建てるのに完璧だね」"
  }
 },
 "suave": {
  "nuance": "「柔らかい」の基本語。触感だけでなく、性格や音についても使える幅広い形容詞。",
  "etymology": "ラテン語suavis（甘美な、心地よい）に由来。",
  "synonyms": [],
  "derived": [
   "suavidad（柔らかさ）",
   "suavizar（和らげる）"
  ],
  "dialogue": {
   "es": "— Esta almohada es muy suave.\n— La compré en oferta.",
   "ja": "「この枕とても柔らかいね」「セールで買ったんだ」"
  }
 },
 "brillante": {
  "nuance": "「輝いている」の基本語。「優秀な、素晴らしい」という比喩的な意味にもなる。",
  "etymology": "brillar（輝く）から派生した語。",
  "synonyms": [],
  "derived": [
   "brillar（輝く）",
   "brillo（輝き）"
  ],
  "dialogue": {
   "es": "— Tuviste una idea brillante.\n— Gracias, se me ocurrió de repente.",
   "ja": "「素晴らしいアイデアを思いついたね」「ありがとう、突然思いついたんだ」"
  }
 },
 "oscuro": {
  "nuance": "「暗い」の基本語。claroの反対語。色の濃さを表すときにもよく使う（azul oscuro＝濃い青）。",
  "etymology": "ラテン語obscurus（暗い）に由来。",
  "synonyms": [],
  "derived": [
   "oscuridad（暗闇）",
   "oscurecer（暗くなる）"
  ],
  "dialogue": {
   "es": "— Este cuarto está muy oscuro.\n— Vamos a encender la luz.",
   "ja": "「この部屋とても暗いね」「電気をつけよう」"
  }
 },
 "claro": {
  "nuance": "「明るい」「明確な」の両方の意味を持つ基本語。同意を表す間投詞としても頻繁に使われる（¡Claro!＝もちろん！）。",
  "etymology": "ラテン語clarus（明るい、明白な）に由来。",
  "synonyms": [],
  "derived": [
   "claridad（明るさ、明確さ）",
   "aclarar（明らかにする）"
  ],
  "dialogue": {
   "es": "— ¿Quieres venir con nosotros?\n— ¡Claro!",
   "ja": "「私たちと一緒に来る？」「もちろん！」"
  }
 },
 "transparente": {
  "nuance": "「透明な」の基本語。「透明性のある、正直な」という比喩的な意味にもなる。",
  "etymology": "trans（通して）+ parecer（見える）の組み合わせに由来。",
  "synonyms": [],
  "derived": [
   "transparencia（透明性）"
  ],
  "dialogue": {
   "es": "— El agua de este lago es muy transparente.\n— Se pueden ver los peces.",
   "ja": "「この湖の水はとても透明だね」「魚が見えるね」"
  }
 },
 "ligero": {
  "nuance": "「軽い」の基本語。pesadoの反対語。「軽食」という意味の名詞的用法もある。",
  "etymology": "俗ラテン語levarius（軽い）に由来。",
  "synonyms": [],
  "derived": [
   "ligereza（軽さ）"
  ],
  "dialogue": {
   "es": "— Esta mochila es muy ligera.\n— Perfecta para viajar.",
   "ja": "「このリュックとても軽いね」「旅行に最適だね」"
  }
 },
 "pesado": {
  "nuance": "「重い」の基本語。比喩的に「うっとうしい、面倒な（人）」という意味にもなる。",
  "etymology": "pesar（重さがある）から派生した語。",
  "synonyms": [],
  "derived": [
   "pesar（重さがある、後悔する）",
   "peso（重さ）"
  ],
  "dialogue": {
   "es": "— Esta maleta está muy pesada.\n— Te ayudo a cargarla.",
   "ja": "「このスーツケース、とても重いね」「運ぶの手伝うよ」"
  }
 },
 "flexible": {
  "nuance": "「柔軟な」の基本語。物理的にも、性格・スケジュールについても使える。",
  "etymology": "ラテン語flexibilis（曲げられる）に由来。",
  "synonyms": [],
  "derived": [
   "flexibilidad（柔軟性）"
  ],
  "dialogue": {
   "es": "— Mi horario de trabajo es muy flexible.\n— Qué suerte, el mío es muy rígido.",
   "ja": "「私の勤務時間はとても柔軟なんだ」「幸運だね、私のはとても厳しいよ」"
  }
 },
 "seco": {
  "nuance": "「乾いた」の基本語。「辛口の（ワイン）」という意味にもなる。",
  "etymology": "ラテン語siccus（乾いた）に由来。",
  "synonyms": [],
  "derived": [
   "secar（乾かす）",
   "sequía（干ばつ）"
  ],
  "dialogue": {
   "es": "— El clima aquí es muy seco.\n— Deberías usar crema hidratante.",
   "ja": "「ここの気候はとても乾燥しているね」「保湿クリームを使った方がいいよ」"
  }
 },
 "tibio": {
  "nuance": "「ぬるい」の基本語。calienteとfríoの中間。",
  "etymology": "ラテン語tepidus（ぬるい）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El café ya está tibio.\n— Te lo caliento de nuevo.",
   "ja": "「コーヒーもうぬるくなっちゃった」「また温めてあげるよ」"
  }
 },
 "maduro": {
  "nuance": "「熟した」の基本語。「成熟した、大人びた（性格）」という比喩的な意味にもなる。",
  "etymology": "ラテン語maturus（成熟した）に由来。",
  "synonyms": [],
  "derived": [
   "madurar（熟す、成熟する）",
   "madurez（成熟）"
  ],
  "dialogue": {
   "es": "— Este plátano ya está maduro.\n— Perfecto para hacer pan de plátano.",
   "ja": "「このバナナもう熟しているね」「バナナブレッドを作るのに完璧だね」"
  }
 },
 "fresco": {
  "nuance": "「新鮮な」の基本語。「涼しい」という意味にもなる。",
  "etymology": "ゲルマン語系の語frisk（新鮮な）に由来。",
  "synonyms": [],
  "derived": [
   "frescura（新鮮さ、涼しさ）",
   "refrescar（涼しくする）"
  ],
  "dialogue": {
   "es": "— Este pescado está muy fresco.\n— Lo compraron esta mañana.",
   "ja": "「この魚とても新鮮だね」「今朝買ったんだって」"
  }
 },
 "cuidadoso": {
  "nuance": "「注意深い」の基本語。cuidado（注意）から派生した語。",
  "etymology": "cuidado（注意、世話）から派生した語。",
  "synonyms": [],
  "derived": [
   "cuidado（注意）",
   "cuidar（世話をする）"
  ],
  "dialogue": {
   "es": "— Sé cuidadoso con ese objeto, es frágil.\n— No te preocupes, tendré cuidado.",
   "ja": "「その物には注意してね、壊れやすいから」「心配しないで、気をつけるよ」"
  }
 },
 "puntual": {
  "nuance": "「時間に正確な」の基本語。punto（点、時点）から派生した語。",
  "etymology": "punto（点）から派生した語。",
  "synonyms": [],
  "derived": [
   "puntualidad（時間厳守）"
  ],
  "dialogue": {
   "es": "— Eres muy puntual, siempre llegas a tiempo.\n— Trato de respetar el tiempo de los demás.",
   "ja": "「君はとても時間に正確だね、いつも時間通りに来るよね」「他人の時間を尊重するように心がけているんだ」"
  }
 },
 "sombra": {
  "nuance": "「影」の基本語。「日陰」という意味にもなる。",
  "etymology": "ラテン語umbra（影）に由来。",
  "synonyms": [],
  "derived": [
   "sombrero（帽子、影を作るものから）",
   "sombrío（陰気な）"
  ],
  "dialogue": {
   "es": "— Sentémonos en la sombra, hace mucho sol.\n— Buena idea.",
   "ja": "「日陰に座ろう、日差しが強いから」「いい考えだね」"
  }
 },
 "luz": {
  "nuance": "「光」の基本語。「電気、灯り」という意味でもよく使われる（apagar la luz＝電気を消す）。",
  "etymology": "ラテン語lux（光）に由来。",
  "synonyms": [],
  "derived": [
   "iluminar（照らす）"
  ],
  "dialogue": {
   "es": "— Apaga la luz al salir.\n— Claro, no te preocupes.",
   "ja": "「出るとき電気消してね」「もちろん、心配しないで」"
  }
 },
 "ruido": {
  "nuance": "「騒音」の基本語。hacer ruido（音を立てる）はよく使う組み合わせ。",
  "etymology": "ラテン語rugitus（吠え声）に由来。",
  "synonyms": [],
  "derived": [
   "ruidoso（うるさい）"
  ],
  "dialogue": {
   "es": "— Hay mucho ruido afuera.\n— Deben ser los vecinos.",
   "ja": "「外がとても騒がしいね」「隣人たちだろうね」"
  }
 },
 "silencio": {
  "nuance": "「静けさ」の基本語。guardar silencio（沈黙を守る）はよく使う組み合わせ。",
  "etymology": "ラテン語silentium（静寂）に由来。",
  "synonyms": [],
  "derived": [
   "silencioso（静かな）",
   "silenciar（黙らせる）"
  ],
  "dialogue": {
   "es": "— Necesito silencio para concentrarme.\n— Voy a bajar el volumen.",
   "ja": "「集中するのに静けさが必要なんだ」「音量下げるね」"
  }
 },
 "voz": {
  "nuance": "「声」の基本語。en voz alta（大きな声で）、en voz baja（小さな声で）はよく使う組み合わせ。",
  "etymology": "ラテン語vox（声）に由来。",
  "synonyms": [],
  "derived": [
   "vocal（母音）",
   "voces（複数の声）"
  ],
  "dialogue": {
   "es": "— Tienes una voz muy bonita para cantar.\n— Gracias, canto desde niña.",
   "ja": "「歌うのにとてもきれいな声を持っているね」「ありがとう、子供の頃から歌っているんだ」"
  }
 },
 "sonido": {
  "nuance": "「音」の基本語。sonar（鳴る）から派生した語。",
  "etymology": "sonar（鳴る）から派生した語。",
  "synonyms": [],
  "derived": [
   "sonar（鳴る）"
  ],
  "dialogue": {
   "es": "— Me encanta el sonido de la lluvia.\n— A mí también, es muy relajante.",
   "ja": "「雨の音が大好きなんだ」「私もだよ、とてもリラックスできるよね」"
  }
 },
 "sabor": {
  "nuance": "「味」の基本語。saber（知る、味がする）と同語源。",
  "etymology": "ラテン語sapor（味）に由来。",
  "synonyms": [],
  "derived": [
   "saber（味がする）"
  ],
  "dialogue": {
   "es": "— Este helado tiene un sabor único.\n— ¿De qué es?",
   "ja": "「このアイスクリーム独特の味がするね」「何味なの？」"
  }
 },
 "olor": {
  "nuance": "「匂い」の基本語。oler（匂いがする）から派生した語。",
  "etymology": "oler（匂いがする）から派生した語。",
  "synonyms": [],
  "derived": [
   "oler（匂いがする）",
   "oloroso（香り高い）"
  ],
  "dialogue": {
   "es": "— Hay un olor delicioso en la cocina.\n— Estoy horneando pan.",
   "ja": "「台所からいい匂いがするね」「パンを焼いているんだ」"
  }
 },
 "principio": {
  "nuance": "「始まり」の基本語。「原則」という意味にもなる。al principio（最初は）はよく使う表現。",
  "etymology": "ラテン語principium（始まり）に由来。",
  "synonyms": [],
  "derived": [
   "principal（主要な）"
  ],
  "dialogue": {
   "es": "— Al principio fue difícil, pero mejoró.\n— Es normal, así es al aprender algo nuevo.",
   "ja": "「最初は大変だったけど、良くなったよ」「普通のことだよ、何か新しいことを学ぶときはそうだからね」"
  }
 },
 "final": {
  "nuance": "「終わり」の基本語。「決勝戦」という意味にもなる。al final（最後には）はよく使う表現。",
  "etymology": "ラテン語finalis（終わりの）に由来。",
  "synonyms": [],
  "derived": [
   "finalizar（終わらせる）"
  ],
  "dialogue": {
   "es": "— Al final todo salió bien.\n— Me alegra mucho escuchar eso.",
   "ja": "「結局すべてうまくいったよ」「それを聞いてとても嬉しいよ」"
  }
 },
 "resto": {
  "nuance": "「残り」の基本語。los restos（残骸、遺跡）という意味にもなる。",
  "etymology": "ラテン語restare（残る）に由来。",
  "synonyms": [],
  "derived": [
   "restar（引き算する、残る）"
  ],
  "dialogue": {
   "es": "— ¿Qué hacemos con el resto de la comida?\n— La guardamos para mañana.",
   "ja": "「残りの食べ物どうする？」「明日のために取っておこう」"
  }
 },
 "grupo": {
  "nuance": "「グループ」の基本語。「バンド、音楽グループ」という意味にもなる。",
  "etymology": "イタリア語gruppo（かたまり）に由来。",
  "synonyms": [],
  "derived": [
   "agrupar（グループ化する）"
  ],
  "dialogue": {
   "es": "— Formamos un grupo para el proyecto.\n— ¿Cuántas personas son?",
   "ja": "「プロジェクトのためにグループを作ったよ」「何人いるの？」"
  }
 },
 "lista": {
  "nuance": "「リスト」の基本語。hacer una lista（リストを作る）はよく使う組み合わせ。",
  "etymology": "ゲルマン語系の語lista（縁、帯）に由来。",
  "synonyms": [],
  "derived": [
   "listar（一覧にする）"
  ],
  "dialogue": {
   "es": "— Hice una lista de compras.\n— Perfecto, así no olvidamos nada.",
   "ja": "「買い物リストを作ったよ」「完璧だね、そうすれば何も忘れないもんね」"
  }
 },
 "ejemplo": {
  "nuance": "「例」の基本語。por ejemplo（例えば）は非常によく使う表現。",
  "etymology": "ラテン語exemplum（見本、例）に由来。",
  "synonyms": [],
  "derived": [
   "ejemplar（模範的な、一部）"
  ],
  "dialogue": {
   "es": "— ¿Me puedes dar un ejemplo?\n— Claro, mira esto.",
   "ja": "「例をもらえる？」「もちろん、これを見て」"
  }
 },
 "solución": {
  "nuance": "「解決策」の基本語。resolver（解決する）と関連。",
  "etymology": "resolver（解決する）と同語源、ラテン語solutio（解決）に由来。",
  "synonyms": [],
  "derived": [
   "resolver（解決する）",
   "solucionar（解決する）"
  ],
  "dialogue": {
   "es": "— Creo que encontré la solución.\n— ¡Excelente! Cuéntame.",
   "ja": "「解決策を見つけたと思うんだ」「素晴らしい！教えて」"
  }
 },
 "pregunta": {
  "nuance": "「質問」の基本語。preguntar（質問する）から派生した語。",
  "etymology": "preguntar（質問する）から派生した語。",
  "synonyms": [],
  "derived": [
   "preguntar（質問する）"
  ],
  "dialogue": {
   "es": "— Tengo una pregunta rápida.\n— Claro, dime.",
   "ja": "「ちょっと質問があるんだ」「もちろん、言って」"
  }
 },
 "respuesta": {
  "nuance": "「答え」の基本語。responder（答える）から派生した語。",
  "etymology": "responder（答える）から派生した語。",
  "synonyms": [],
  "derived": [
   "responder（答える）"
  ],
  "dialogue": {
   "es": "— Todavía no tengo la respuesta.\n— Tómate tu tiempo.",
   "ja": "「まだ答えを持っていないんだ」「時間をかけていいよ」"
  }
 },
 "duda": {
  "nuance": "「疑問」の基本語。tener duda（疑問がある）、sin duda（間違いなく）はよく使う組み合わせ。",
  "etymology": "ラテン語dubitare（疑う）に由来。",
  "synonyms": [],
  "derived": [
   "dudar（疑う）",
   "dudoso（疑わしい）"
  ],
  "dialogue": {
   "es": "— Tengo una duda sobre este tema.\n— Pregúntame lo que sea.",
   "ja": "「このテーマについて疑問があるんだ」「何でも聞いて」"
  }
 },
 "opinión": {
  "nuance": "「意見」の基本語。en mi opinión（私の意見では）はよく使う表現。",
  "etymology": "ラテン語opinio（見解）に由来。",
  "synonyms": [],
  "derived": [
   "opinar（意見を言う）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es tu opinión sobre esto?\n— Creo que es una buena idea.",
   "ja": "「これについてどう思う？」「いいアイデアだと思うよ」"
  }
 },
 "pararse": {
  "nuance": "「立つ」の基本語。ラテンアメリカで一般的（スペインではponerse de pieの方がよく使われる、地域差）。「止まる」という意味にもなる。",
  "etymology": "parar（止まる）から派生した再帰動詞。",
  "synonyms": [
   "ponerse de pie（立つ、スペインで一般的）"
  ],
  "derived": [
   "parar（止まる）"
  ],
  "dialogue": {
   "es": "— Párate aquí, por favor.\n— ¿Aquí está bien?",
   "ja": "「ここに立ってください」「ここでいいですか？」"
  }
 },
 "quitar": {
  "nuance": "「取り除く」の基本語。quitarse（脱ぐ、自分から取り除く）の元になる動詞。",
  "etymology": "ラテン語quietare（静止させる）に由来。",
  "synonyms": [],
  "derived": [
   "quitarse（脱ぐ）"
  ],
  "dialogue": {
   "es": "— ¿Puedes quitar esos platos de la mesa?\n— Claro, ahora los llevo.",
   "ja": "「テーブルからそのお皿を片付けてくれる？」「うん、今持っていくね」"
  }
 },
 "enfriar": {
  "nuance": "「冷やす」の基本語。frío（寒い、冷たい）から派生した語。",
  "etymology": "frío（冷たい）から派生した語。",
  "synonyms": [],
  "derived": [
   "frío（冷たい）",
   "enfriamiento（冷却）"
  ],
  "dialogue": {
   "es": "— Deja enfriar el pastel antes de cortarlo.\n— ¿Cuánto tiempo?",
   "ja": "「切る前にケーキを冷ましてね」「どれくらいの時間？」"
  }
 },
 "destruir": {
  "nuance": "「破壊する」の基本語。construir（建てる）の反対語。不規則動詞（destruyo, destruyes...）。",
  "etymology": "ラテン語destruere（積み上げたものを崩す）に由来。",
  "synonyms": [],
  "derived": [
   "destrucción（破壊）"
  ],
  "dialogue": {
   "es": "— El huracán destruyó muchas casas.\n— Qué tragedia.",
   "ja": "「ハリケーンが多くの家を破壊したんだ」「なんて悲劇なんだ」"
  }
 },
 "dibujar": {
  "nuance": "「絵を描く」の基本語。pintar（塗る、絵の具で描く）とは対照的に、線画・スケッチを指すことが多い。",
  "etymology": "フランス語dessiner（描く）に由来。",
  "synonyms": [],
  "derived": [
   "dibujo（絵、デッサン）",
   "dibujante（イラストレーター）"
  ],
  "dialogue": {
   "es": "— Mi hija dibuja muy bien.\n— ¿Toma clases de arte?",
   "ja": "「私の娘はとても絵が上手なんだ」「アートのクラスを取っているの？」"
  }
 },
 "bailar": {
  "nuance": "「踊る」の基本語。メキシコでもとても一般的な語。",
  "etymology": "俗ラテン語ballare（踊る）に由来。",
  "synonyms": [],
  "derived": [
   "baile（踊り）",
   "bailarín（ダンサー）"
  ],
  "dialogue": {
   "es": "— ¿Te gusta bailar salsa?\n— Sí, aunque no soy muy bueno.",
   "ja": "「サルサ踊るの好き？」「うん、あまり上手じゃないけどね」"
  }
 },
 "salir": {
  "nuance": "「出る、出かける」の基本動詞。salir con（〜と付き合う）という表現もよく使われる。",
  "etymology": "ラテン語salire（跳ねる）に由来。",
  "synonyms": [],
  "derived": [
   "salida（出口）"
  ],
  "dialogue": {
   "es": "— ¿A qué hora sales del trabajo?\n— A las seis, normalmente.",
   "ja": "「何時に仕事を出るの？」「普通は6時だよ」"
  }
 },
 "llegar": {
  "nuance": "「到着する」の基本動詞。llegar a ser（〜になる）という表現もよく使われる。",
  "etymology": "ラテン語plicare（折り重ねる→到着する）に由来。",
  "synonyms": [],
  "derived": [
   "llegada（到着）"
  ],
  "dialogue": {
   "es": "— ¿A qué hora llegas?\n— Como a las ocho.",
   "ja": "「何時に着く？」「8時くらいかな」"
  }
 },
 "regresar": {
  "nuance": "「戻る」の基本語。volver（帰ってくる）とほぼ同義。ラテンアメリカでよく使われる。",
  "etymology": "ラテン語regredi（戻る）に由来。",
  "synonyms": [
   "volver（帰ってくる、ほぼ同義）"
  ],
  "derived": [
   "regreso（帰り）"
  ],
  "dialogue": {
   "es": "— ¿A qué hora regresas a casa?\n— Como a las nueve.",
   "ja": "「何時に家に帰る？」「9時くらいかな」"
  }
 },
 "volver": {
  "nuance": "「帰ってくる」の基本語。regresarとほぼ同義。volver a+不定詞（また〜する）という表現も非常によく使われる。",
  "etymology": "ラテン語volvere（回転する→戻る）に由来。",
  "synonyms": [
   "regresar（戻る、ほぼ同義）"
  ],
  "derived": [
   "vuelta（戻り、一周）"
  ],
  "dialogue": {
   "es": "— Voy a volver más tarde.\n— Está bien, aquí te espero.",
   "ja": "「あとで戻ってくるよ」「わかった、ここで待ってるね」"
  }
 },
 "sugerir": {
  "nuance": "「提案する」の基本語。sugerir que+接続法の形を取る。",
  "etymology": "ラテン語suggerere（下から運ぶ→示唆する）に由来。",
  "synonyms": [
   "proponer（提案する）"
  ],
  "derived": [
   "sugerencia（提案）"
  ],
  "dialogue": {
   "es": "— Sugiero que salgamos más temprano.\n— Buena idea, así evitamos el tráfico.",
   "ja": "「もっと早く出発することを提案するよ」「いい考えだね、そうすれば渋滞を避けられるし」"
  }
 },
 "proponer": {
  "nuance": "「提案する」の基本語。ponerと同じ活用パターンの不規則動詞。",
  "etymology": "ラテン語proponere（前に置く→提案する）に由来。",
  "synonyms": [
   "sugerir（提案する）"
  ],
  "derived": [
   "propuesta（提案）"
  ],
  "dialogue": {
   "es": "— Propongo que lo hagamos mañana.\n— Me parece bien.",
   "ja": "「明日それをやることを提案するよ」「良さそうだね」"
  }
 },
 "aceptar": {
  "nuance": "「受け入れる」の基本語。rechazarの反対語。",
  "etymology": "ラテン語acceptare（受け取る）に由来。",
  "synonyms": [],
  "derived": [
   "aceptación（受諾）",
   "aceptable（許容できる）"
  ],
  "dialogue": {
   "es": "— Acepté el trabajo.\n— ¡Felicidades! Estoy muy contento por ti.",
   "ja": "「その仕事を受けたんだ」「おめでとう！すごく嬉しいよ」"
  }
 },
 "rechazar": {
  "nuance": "「拒否する」の基本語。aceptarの反対語。",
  "etymology": "俗ラテン語recusare（拒む）に由来。",
  "synonyms": [],
  "derived": [
   "rechazo（拒否）"
  ],
  "dialogue": {
   "es": "— Rechacé la oferta.\n— ¿Por qué? Parecía buena.",
   "ja": "「その申し出を断ったんだ」「どうして？良さそうだったのに」"
  }
 },
 "colina": {
  "nuance": "「丘」の基本語。montaña（山）よりも小規模な高地。",
  "etymology": "ラテン語collis（丘）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Subimos a la colina para ver el atardecer.\n— La vista debió ser hermosa.",
   "ja": "「夕日を見るために丘に登ったんだ」「きっと美しい景色だったろうね」"
  }
 },
 "sequía": {
  "nuance": "「干ばつ」の基本語。seco（乾いた）から派生した語。",
  "etymology": "seco（乾いた）から派生した語。",
  "synonyms": [],
  "derived": [
   "seco（乾いた）"
  ],
  "dialogue": {
   "es": "— Esta región sufre una sequía severa.\n— Esperemos que llueva pronto.",
   "ja": "「この地域は深刻な干ばつに苦しんでいるんだ」「早く雨が降るといいね」"
  }
 },
 "marea": {
  "nuance": "「潮」の基本語。marea alta（満潮）、marea baja（干潮）はよく使う組み合わせ。",
  "etymology": "mar（海）から派生した語。",
  "synonyms": [],
  "derived": [
   "mar（海）"
  ],
  "dialogue": {
   "es": "— La marea está muy alta hoy.\n— No podemos caminar por esa parte de la playa.",
   "ja": "「今日は満潮がとても高いね」「ビーチのあの辺りは歩けないね」"
  }
 },
 "cueva": {
  "nuance": "「洞窟」の基本語。メキシコのユカタン半島には有名なセノーテ（地下水を湛えた洞窟）が多い。",
  "etymology": "ラテン語cova（くぼんだ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Exploramos una cueva increíble en Yucatán.\n— ¿Era muy profunda?",
   "ja": "「ユカタン半島ですごい洞窟を探検したんだ」「とても深かった？」"
  }
 },
 "acantilado": {
  "nuance": "「崖」の基本語。",
  "etymology": "cantil（崖）の指小形から派生した語。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Ese acantilado tiene una vista impresionante.\n— Pero hay que tener mucho cuidado.",
   "ja": "「あの崖は見事な景色があるんだ」「でもすごく気をつけないとね」"
  }
 },
 "cordillera": {
  "nuance": "「山脈」の基本語。cuerda（ロープ、山々が連なる様子から）から派生。",
  "etymology": "cuerda（ロープ）から派生した語。",
  "synonyms": [],
  "derived": [
   "cuerda（ロープ）"
  ],
  "dialogue": {
   "es": "— La cordillera se ve nevada en invierno.\n— Debe ser una vista espectacular.",
   "ja": "「その山脈は冬になると雪をかぶって見えるんだ」「きっと壮観な景色なんだろうね」"
  }
 },
 "ecosistema": {
  "nuance": "「生態系」の基本語。eco（家、環境）+ sistema（体系）の組み合わせ。",
  "etymology": "ギリシャ語oikos（家）+ systema（体系）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "sistema（体系）"
  ],
  "dialogue": {
   "es": "— Este ecosistema es muy frágil.\n— Hay que protegerlo con cuidado.",
   "ja": "「この生態系はとても壊れやすいんだ」「大切に保護しないとね」"
  }
 },
 "contaminación": {
  "nuance": "「汚染」の基本語。contaminar（汚染する）から派生した語。",
  "etymology": "contaminar（汚染する）から派生した語。",
  "synonyms": [],
  "derived": [
   "contaminar（汚染する）"
  ],
  "dialogue": {
   "es": "— La contaminación en la ciudad es un gran problema.\n— Sí, especialmente en invierno.",
   "ja": "「都市の汚染は大きな問題だよね」「うん、特に冬にね」"
  }
 },
 "reciclaje": {
  "nuance": "「リサイクル」の基本語。reciclar（リサイクルする）から派生した語。",
  "etymology": "reciclar（リサイクルする）から派生した語。",
  "synonyms": [],
  "derived": [
   "reciclar（リサイクルする）"
  ],
  "dialogue": {
   "es": "— ¿Haces reciclaje en tu casa?\n— Sí, separamos el plástico y el papel.",
   "ja": "「家でリサイクルしている？」「うん、プラスチックと紙を分けているよ」"
  }
 },
 "calentamiento global": {
  "nuance": "「地球温暖化」の基本語。calentar（温める）から派生した語。",
  "etymology": "calentar（温める）+ global（地球規模の）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "calentar（温める）"
  ],
  "dialogue": {
   "es": "— El calentamiento global afecta a todos.\n— Debemos hacer algo al respecto.",
   "ja": "「地球温暖化はみんなに影響するよね」「それについて何かしないとね」"
  }
 },
 "especie": {
  "nuance": "「種」の基本語。生物学的な種を指す。",
  "etymology": "ラテン語species（見た目、種類）に由来。",
  "synonyms": [],
  "derived": [
   "especial（特別な）"
  ],
  "dialogue": {
   "es": "— Esta especie está en peligro de extinción.\n— Qué triste, hay que protegerla.",
   "ja": "「この種は絶滅の危機に瀕しているんだ」「悲しいね、守らないとね」"
  }
 },
 "hábitat": {
  "nuance": "「生息地」の基本語。",
  "etymology": "ラテン語habitat（それは住む）に由来。",
  "synonyms": [],
  "derived": [
   "habitar（住む）"
  ],
  "dialogue": {
   "es": "— Estamos destruyendo su hábitat natural.\n— Es urgente cambiar esta situación.",
   "ja": "「私たちは彼らの自然の生息地を破壊しているんだ」「この状況を変えるのは急務だね」"
  }
 },
 "extinción": {
  "nuance": "「絶滅」の基本語。extinguir（消す、絶滅させる）から派生した語。",
  "etymology": "extinguir（消す）から派生した語。",
  "synonyms": [],
  "derived": [
   "extinguir（消す）",
   "extinto（絶滅した）"
  ],
  "dialogue": {
   "es": "— Muchas especies están al borde de la extinción.\n— Es una crisis que no podemos ignorar.",
   "ja": "「多くの種が絶滅の危機に瀕しているんだ」「無視できない危機だよね」"
  }
 },
 "pijama": {
  "nuance": "「パジャマ」の基本語。地域によって男性名詞・女性名詞両方使われる（el pijama/la pijamaは地域差）。",
  "etymology": "ペルシャ語pay-jama（脚の衣服）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me encanta este pijama nuevo.\n— Se ve muy cómodo.",
   "ja": "「この新しいパジャマ気に入っているんだ」「とても快適そうだね」"
  }
 },
 "mochila": {
  "nuance": "「リュック」の基本語。ケチュア語由来。",
  "etymology": "ケチュア語muchila（袋）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Necesito una mochila más grande para la escuela.\n— Hay una buena oferta en la tienda.",
   "ja": "「学校用にもっと大きいリュックが必要なんだ」「あの店でいいセールがあるよ」"
  }
 },
 "collar": {
  "nuance": "「ネックレス」の基本語。「（犬などの）首輪」という意味にもなる。",
  "etymology": "ラテン語collare（首の周りのもの）に由来。",
  "synonyms": [],
  "derived": [
   "cuello（首）"
  ],
  "dialogue": {
   "es": "— Ese collar es muy elegante.\n— Fue un regalo de mi abuela.",
   "ja": "「そのネックレスとてもエレガントだね」「祖母からのプレゼントだったんだ」"
  }
 },
 "aretes": {
  "nuance": "「ピアス、イヤリング」の基本語。ラテンアメリカで一般的（スペインではpendientesが一般的、地域差）。",
  "etymology": "arete（小さな輪）から派生した語。",
  "synonyms": [
   "pendientes（ピアス、スペイン）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Me encantan tus aretes nuevos.\n— Gracias, los compré este fin de semana.",
   "ja": "「君の新しいピアス素敵だね」「ありがとう、今週末買ったんだ」"
  }
 },
 "pulsera": {
  "nuance": "「ブレスレット」の基本語。pulso（脈拍、手首）から派生した語。",
  "etymology": "pulso（脈拍、手首）から派生した語。",
  "synonyms": [],
  "derived": [
   "pulso（脈拍、手首）"
  ],
  "dialogue": {
   "es": "— Hice esta pulsera yo misma.\n— ¡Qué talento! Es hermosa.",
   "ja": "「このブレスレット自分で作ったんだ」「才能あるね！きれいだよ」"
  }
 },
 "pañuelo": {
  "nuance": "「ハンカチ」の基本語。paño（布）から派生した語。「スカーフ」という意味にもなる。",
  "etymology": "paño（布）から派生した語。",
  "synonyms": [],
  "derived": [
   "paño（布）"
  ],
  "dialogue": {
   "es": "— ¿Tienes un pañuelo? Necesito sonarme.\n— Sí, aquí tienes.",
   "ja": "「ハンカチある？鼻をかむ必要があるんだ」「うん、はいどうぞ」"
  }
 },
 "sandalias": {
  "nuance": "「サンダル」の基本語。夏によく履かれる履物。",
  "etymology": "ギリシャ語sandalon（サンダル）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Compré unas sandalias para el verano.\n— Perfectas para la playa.",
   "ja": "「夏用にサンダルを買ったんだ」「ビーチに最適だね」"
  }
 },
 "botas": {
  "nuance": "「ブーツ」の基本語。メキシコの伝統的なカウボーイブーツ（botas vaqueras）も有名。",
  "etymology": "フランス語botte（ブーツ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Esas botas vaqueras son muy bonitas.\n— Son de piel de verdad.",
   "ja": "「そのカウボーイブーツとてもかっこいいね」「本革なんだ」"
  }
 },
 "algodón": {
  "nuance": "「綿」の基本語。100% algodón（綿100%）という表示でよく見る。",
  "etymology": "アラビア語al-qutn（綿）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Prefiero la ropa de algodón.\n— Es más cómoda para el calor.",
   "ja": "「綿の服の方が好きなんだ」「暑さにはより快適だよね」"
  }
 },
 "seda": {
  "nuance": "「絹」の基本語。高級な生地としてよく知られる。",
  "etymology": "ラテン語seta（剛毛、絹）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Esta bufanda es de seda pura.\n— Se siente muy suave.",
   "ja": "「このマフラー純絹なんだ」「とても柔らかい感触だね」"
  }
 },
 "cuero": {
  "nuance": "「革」の基本語。piel（皮膚、皮革）ともほぼ同義で使われる。",
  "etymology": "ラテン語corium（皮）に由来。",
  "synonyms": [
   "piel（革、ほぼ同義）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Esta chaqueta de cuero es de muy buena calidad.\n— Se nota, se ve muy elegante.",
   "ja": "「この革ジャケットとてもいい品質だね」「わかるよ、とてもエレガントに見える」"
  }
 },
 "tela": {
  "nuance": "「生地」の基本語。テキスタイル全般を指す。",
  "etymology": "ラテン語tela（織物、機織り）に由来。",
  "synonyms": [],
  "derived": [
   "textil（繊維の）"
  ],
  "dialogue": {
   "es": "— Esta tela es muy suave al tacto.\n— ¿De qué material es?",
   "ja": "「この生地、触ってとても柔らかいね」「何素材なの？」"
  }
 },
 "uniforme": {
  "nuance": "「制服」の基本語。uni（一つの）+ forma（形）の組み合わせ。",
  "etymology": "ラテン語uniformis（一つの形の）に由来。",
  "synonyms": [],
  "derived": [
   "uniformidad（均一性）"
  ],
  "dialogue": {
   "es": "— Mi hijo tiene que usar uniforme en la escuela.\n— Es común en muchas escuelas mexicanas.",
   "ja": "「私の息子は学校で制服を着ないといけないんだ」「多くのメキシコの学校で一般的だよね」"
  }
 },
 "chaleco": {
  "nuance": "「ベスト」の基本語。chaleco salvavidas（救命胴衣）はよく使う組み合わせ。",
  "etymology": "トルコ語yelek（袖のない上着）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Ponte el chaleco salvavidas antes de subir al bote.\n— Claro, es importante para la seguridad.",
   "ja": "「ボートに乗る前に救命胴衣を着てね」「うん、安全のために大事だよね」"
  }
 },
 "sudadera": {
  "nuance": "「パーカー」の基本語。sudar（汗をかく）から派生した語。",
  "etymology": "sudar（汗をかく）から派生した語。",
  "synonyms": [],
  "derived": [
   "sudar（汗をかく）"
  ],
  "dialogue": {
   "es": "— Me encanta esta sudadera con capucha.\n— Se ve muy cómoda.",
   "ja": "「このフード付きパーカー気に入っているんだ」「とても快適そうだね」"
  }
 },
 "¿a qué hora sale?": {
  "nuance": "「何時に出発しますか？」の基本フレーズ。バス・電車・飛行機の時刻を尋ねるときの定番表現。",
  "etymology": "a qué hora（何時に）+ salir（出発する）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "salir（出発する）"
  ],
  "dialogue": {
   "es": "— ¿A qué hora sale el próximo autobús?\n— En veinte minutos.",
   "ja": "「次のバスは何時に出発しますか？」「20分後です」"
  }
 },
 "tarjeta de embarque": {
  "nuance": "「搭乗券」の基本語。tarjeta（カード）+ de embarque（搭乗の）の組み合わせ。",
  "etymology": "tarjeta（カード）+ embarque（搭乗）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "embarcar（搭乗する）"
  ],
  "dialogue": {
   "es": "— No olvides tu tarjeta de embarque.\n— La tengo en mi teléfono.",
   "ja": "「搭乗券忘れないでね」「携帯に入っているよ」"
  }
 },
 "destino": {
  "nuance": "「目的地」の基本語。「運命」という意味にもなる。",
  "etymology": "ラテン語destinare（決定する）に由来。",
  "synonyms": [],
  "derived": [
   "destinar（割り当てる）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es tu destino final?\n— Voy a Cancún.",
   "ja": "「最終目的地はどこですか？」「カンクンに行きます」"
  }
 },
 "itinerario": {
  "nuance": "「旅程」の基本語。",
  "etymology": "ラテン語itinerarium（道程の記録）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Ya tienes el itinerario del viaje?\n— Sí, casi todo planeado.",
   "ja": "「旅の旅程もう決まった？」「うん、ほぼ計画済みだよ」"
  }
 },
 "excursión": {
  "nuance": "「小旅行」の基本語。日帰りまたは短期間の旅行を指す。",
  "etymology": "ラテン語excursio（外出、遠征）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vamos a hacer una excursión a las pirámides.\n— ¡Qué emocionante!",
   "ja": "「ピラミッドへの小旅行に行くつもりだよ」「わくわくするね！」"
  }
 },
 "guía turístico": {
  "nuance": "「観光ガイド」の基本語。女性形はguía turística。「ガイドブック」という意味にもなる。",
  "etymology": "guiar（案内する）+ turístico（観光の）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "guiar（案内する）"
  ],
  "dialogue": {
   "es": "— El guía turístico sabía mucha historia.\n— Fue una excursión muy educativa.",
   "ja": "「その観光ガイドはたくさんの歴史を知っていたんだ」「とても勉強になる小旅行だったね」"
  }
 },
 "mapa": {
  "nuance": "「地図」の基本語。-aで終わるが男性名詞（ギリシャ語源）。",
  "etymology": "ラテン語mappa（布、地図）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Tienes un mapa de la ciudad?\n— Sí, en mi teléfono.",
   "ja": "「街の地図持ってる？」「うん、携帯にあるよ」"
  }
 },
 "brújula": {
  "nuance": "「コンパス」の基本語。",
  "etymology": "イタリア語bussola（コンパス）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Llevamos una brújula para el senderismo.\n— Buena idea, por si nos perdemos.",
   "ja": "「ハイキング用にコンパスを持って行くよ」「いい考えだね、もし迷った場合に備えて」"
  }
 },
 "seguro de viaje": {
  "nuance": "「旅行保険」の基本語。seguro（保険）+ de viaje（旅行の）の組み合わせ。",
  "etymology": "seguro（安全な、保険）から派生した語。",
  "synonyms": [],
  "derived": [
   "seguro（保険、安全な）"
  ],
  "dialogue": {
   "es": "— ¿Compraste seguro de viaje?\n— Sí, siempre lo hago para viajes largos.",
   "ja": "「旅行保険買った？」「うん、長旅のときはいつもそうしているよ」"
  }
 },
 "embajada": {
  "nuance": "「大使館」の基本語。embajador（大使）から派生した語。",
  "etymology": "embajador（大使）から派生した語。",
  "synonyms": [],
  "derived": [
   "embajador（大使）"
  ],
  "dialogue": {
   "es": "— Perdí mi pasaporte, tengo que ir a la embajada.\n— Espero que puedan ayudarte rápido.",
   "ja": "「パスポートをなくしちゃって、大使館に行かないと」「早く助けてもらえるといいね」"
  }
 },
 "tour": {
  "nuance": "「ツアー」の基本語。英語からの借用語で、そのまま使われる。",
  "etymology": "英語tour（旅、周遊）に由来。",
  "synonyms": [
   "recorrido（ツアー、より正式）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— El tour incluye entrada a tres museos.\n— Suena como una buena opción.",
   "ja": "「そのツアーは3つの美術館の入場料込みなんだ」「良さそうな選択肢だね」"
  }
 },
 "propina": {
  "nuance": "「チップ」の基本語。メキシコでは通常含まれておらず、10〜15%程度が目安。",
  "etymology": "ギリシャ語propinein（乾杯する→気前よく渡す）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cuánto dejamos de propina?\n— Como el quince por ciento está bien.",
   "ja": "「チップいくら置く？」「15%くらいがいいかな」"
  }
 },
 "círculo": {
  "nuance": "「円」の基本語。基本的な幾何図形。",
  "etymology": "ラテン語circulus（小さな輪）に由来。",
  "synonyms": [],
  "derived": [
   "circular（円形の、回る）"
  ],
  "dialogue": {
   "es": "— Dibuja un círculo perfecto.\n— Es difícil sin usar un compás.",
   "ja": "「完璧な円を描いて」「コンパスを使わずには難しいよ」"
  }
 },
 "cuadrado": {
  "nuance": "「正方形」の基本語。cuatro（4）から派生した語。「形が四角い、頭が固い」という比喩的な意味にもなる。",
  "etymology": "cuatro（4）から派生した語。",
  "synonyms": [],
  "derived": [
   "cuatro（4）"
  ],
  "dialogue": {
   "es": "— La mesa es cuadrada.\n— Cabe bien en esa esquina.",
   "ja": "「そのテーブルは正方形なんだ」「あの角にちょうど収まるね」"
  }
 },
 "triángulo": {
  "nuance": "「三角形」の基本語。tri（3）+ ángulo（角）の組み合わせ。",
  "etymology": "tres（3）+ ángulo（角）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "triangular（三角の）"
  ],
  "dialogue": {
   "es": "— Ese sándwich está cortado en triángulos.\n— Se ve más apetitoso así.",
   "ja": "「そのサンドイッチは三角に切られているんだ」「そうするともっと美味しそうに見えるね」"
  }
 },
 "línea": {
  "nuance": "「線」の基本語。「（電話・交通の）路線」という意味にもなる。",
  "etymology": "ラテン語linea（麻糸から作った線）に由来。",
  "synonyms": [],
  "derived": [
   "lineal（直線の）"
  ],
  "dialogue": {
   "es": "— Dibuja una línea recta aquí.\n— ¿Con regla o a mano libre?",
   "ja": "「ここに直線を引いて」「定規で？それとも手描きで？」"
  }
 },
 "punto": {
  "nuance": "「点」の基本語。「地点、要点」という意味にもなる。en punto（ちょうど、時刻について）はよく使う表現。",
  "etymology": "ラテン語punctum（刺されたもの、点）に由来。",
  "synonyms": [],
  "derived": [
   "puntual（時間に正確な）"
  ],
  "dialogue": {
   "es": "— La reunión es a las tres en punto.\n— Perfecto, llegaré a tiempo.",
   "ja": "「会議は3時ちょうどからだよ」「わかった、時間通りに行くね」"
  }
 },
 "docena": {
  "nuance": "「1ダース」の基本語。doce（12）から派生した語。",
  "etymology": "doce（12）から派生した語。",
  "synonyms": [],
  "derived": [
   "doce（12）"
  ],
  "dialogue": {
   "es": "— Necesito una docena de huevos.\n— Están en el refrigerador de la tienda.",
   "ja": "「卵を1ダース必要なんだ」「店の冷蔵庫にあるよ」"
  }
 },
 "mitad": {
  "nuance": "「半分」の基本語。a mitad de precio（半額で）はよく使う表現。",
  "etymology": "ラテン語medietas（中間）に由来。",
  "synonyms": [],
  "derived": [
   "medio（半分の）"
  ],
  "dialogue": {
   "es": "— ¿Me das la mitad de tu sándwich?\n— Claro, toma.",
   "ja": "「サンドイッチの半分もらえる？」「もちろん、どうぞ」"
  }
 },
 "estrella de mar": {
  "nuance": "「ヒトデ」の基本語。estrella（星）+ de mar（海の）の組み合わせ。",
  "etymology": "estrella（星）+ mar（海）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "estrella（星）"
  ],
  "dialogue": {
   "es": "— Encontramos una estrella de mar en la playa.\n— ¿La dejaron ir al agua?",
   "ja": "「ビーチでヒトデを見つけたんだ」「水に戻してあげたの？」"
  }
 },
 "medusa": {
  "nuance": "「クラゲ」の基本語。ギリシャ神話のメドゥーサに由来。",
  "etymology": "ギリシャ神話のメドゥーサ（髪が蛇の怪物）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me picó una medusa en la playa.\n— ¡Qué dolor! ¿Estás bien?",
   "ja": "「ビーチでクラゲに刺されちゃった」「痛そう！大丈夫？」"
  }
 },
 "hormiga": {
  "nuance": "「アリ」の基本語。trabajar como una hormiga（アリのように働く、勤勉に働く）という慣用句もある。",
  "etymology": "ラテン語formica（アリ）に由来。",
  "synonyms": [],
  "derived": [
   "hormiguero（アリの巣）"
  ],
  "dialogue": {
   "es": "— Hay hormigas en la cocina.\n— Hay que limpiar bien las migas.",
   "ja": "「台所にアリがいるんだ」「パンくずをしっかり掃除しないとね」"
  }
 },
 "gallo": {
  "nuance": "「おんどり」の基本語。gallina（めんどり）の男性形。メキシコの慣習で誕生日の朝に「ガジェアタ」という歌の風習と関連。",
  "etymology": "ラテン語gallus（おんどり）に由来。",
  "synonyms": [],
  "derived": [
   "gallina（めんどり）"
  ],
  "dialogue": {
   "es": "— El gallo cantó muy temprano hoy.\n— Me despertó antes de la alarma.",
   "ja": "「今日はおんどりがとても早く鳴いたね」「目覚まし時計より先に起こされちゃったよ」"
  }
 },
 "gallina": {
  "nuance": "「めんどり」の基本語。「臆病者」という比喩的な意味にもなる（口語）。",
  "etymology": "gallo（おんどり）の女性形。",
  "synonyms": [],
  "derived": [
   "gallo（おんどり）"
  ],
  "dialogue": {
   "es": "— Tenemos gallinas en el patio.\n— ¿Ponen huevos frescos?",
   "ja": "「庭にめんどりがいるんだ」「新鮮な卵を産むの？」"
  }
 },
 "pato": {
  "nuance": "「アヒル」の基本語。女性形はpata。",
  "etymology": "起源ははっきりしないが、アラビア語系の語とされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vimos patos en el lago.\n— Los niños les dieron pan.",
   "ja": "「湖でアヒルを見たんだ」「子供たちがパンをあげていたよ」"
  }
 },
 "lobo": {
  "nuance": "「オオカミ」の基本語。女性形はloba。",
  "etymology": "ラテン語lupus（オオカミ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Escuchamos aullar a un lobo en la noche.\n— Qué escalofriante.",
   "ja": "「夜にオオカミの遠吠えを聞いたんだ」「なんてゾッとするんだ」"
  }
 },
 "jirafa": {
  "nuance": "「キリン」の基本語。アラビア語由来。",
  "etymology": "アラビア語zarafa（キリン）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— La jirafa es el animal más alto del mundo.\n— Sí, su cuello es impresionante.",
   "ja": "「キリンは世界で一番背が高い動物なんだ」「うん、あの首はすごいよね」"
  }
 },
 "cocodrilo": {
  "nuance": "「ワニ」の基本語。caimán（カイマン、より小型のワニ科）とは区別される。",
  "etymology": "ギリシャ語krokodilos（トカゲ）に由来。",
  "synonyms": [
   "caimán（カイマン）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Vimos cocodrilos en el río.\n— Debieron mantenerse a distancia.",
   "ja": "「川でワニを見たんだ」「きっと距離を保っていたんだろうね」"
  }
 },
 "cebra": {
  "nuance": "「シマウマ」の基本語。「横断歩道」という意味にもなる（paso de cebra）。",
  "etymology": "ラテン語equiferus（野生の馬）に由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Las cebras tienen rayas únicas.\n— Como huellas dactilares.",
   "ja": "「シマウマは独特な縞模様を持っているんだ」「指紋みたいだね」"
  }
 },
 "tetera": {
  "nuance": "「ティーポット」の基本語。té（お茶）から派生した語。",
  "etymology": "té（お茶）から派生した語。",
  "synonyms": [],
  "derived": [
   "té（お茶）"
  ],
  "dialogue": {
   "es": "— Pon agua a calentar en la tetera.\n— Ya la puse.",
   "ja": "「ティーポットにお湯を沸かして」「もう入れたよ」"
  }
 },
 "abrelatas": {
  "nuance": "「缶切り」の基本語。abrir（開ける）+ latas（缶）の組み合わせ、単数複数同形。",
  "etymology": "abrir（開ける）+ lata（缶）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "abrir（開ける）",
   "lata（缶）"
  ],
  "dialogue": {
   "es": "— ¿Dónde está el abrelatas?\n— En el segundo cajón.",
   "ja": "「缶切りどこにある？」「2番目の引き出しだよ」"
  }
 },
 "parrilla": {
  "nuance": "「グリル」の基本語。asar a la parrilla（グリルで焼く）はよく使う組み合わせ。",
  "etymology": "parra（ぶどうの木、格子状の構造から）に由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vamos a hacer carne a la parrilla este fin de semana.\n— ¡Qué rico! Cuenta conmigo.",
   "ja": "「今週末グリルでお肉焼こうよ」「美味しそう！私も参加するよ」"
  }
 },
 "motocicleta": {
  "nuance": "「バイク」の基本語。moto（口語での短縮形）ともよく呼ばれる。",
  "etymology": "motor（モーター）+ cicleta（bicicletaから派生）の組み合わせ。",
  "synonyms": [
   "moto（バイク、口語）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Compré una motocicleta nueva.\n— ¿Qué marca es?",
   "ja": "「新しいバイクを買ったんだ」「どのメーカー？」"
  }
 },
 "helicóptero": {
  "nuance": "「ヘリコプター」の基本語。helico（螺旋）+ ptero（翼）の組み合わせ。",
  "etymology": "ギリシャ語helix（螺旋）+ pteron（翼）の組み合わせ。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vimos un helicóptero sobrevolando la ciudad.\n— Debía ser de las noticias.",
   "ja": "「街の上を飛ぶヘリコプターを見たんだ」「きっとニュースのだったんだろうね」"
  }
 },
 "transbordador": {
  "nuance": "「フェリー」の基本語。transbordar（乗り換える）から派生した語。",
  "etymology": "transbordar（積み替える、乗り換える）から派生した語。",
  "synonyms": [
   "ferri（フェリー、英語借用）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Tomamos el transbordador para llegar a la isla.\n— ¿Cuánto tiempo tardó?",
   "ja": "「その島に行くのにフェリーに乗ったんだ」「どれくらい時間かかった？」"
  }
 },
 "furgoneta": {
  "nuance": "「バン」の基本語。furgón（貨車、より大型の意味）の指小形。",
  "etymology": "furgón（貨車）の指小形に由来。",
  "synonyms": [],
  "derived": [
   "furgón（貨車）"
  ],
  "dialogue": {
   "es": "— Necesitamos una furgoneta para la mudanza.\n— Voy a rentar una.",
   "ja": "「引っ越しにバンが必要だね」「レンタルするよ」"
  }
 },
 "cinturón de seguridad": {
  "nuance": "「シートベルト」の基本語。cinturón（ベルト）+ de seguridad（安全の）の組み合わせ。",
  "etymology": "cinturón（ベルト）+ seguridad（安全）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "cinturón（ベルト）",
   "seguro（安全な）"
  ],
  "dialogue": {
   "es": "— Ponte el cinturón de seguridad.\n— Ya lo tengo puesto.",
   "ja": "「シートベルトつけて」「もうつけているよ」"
  }
 },
 "licencia de conducir": {
  "nuance": "「運転免許証」の基本語。地域によってlicencia de manejo（運転免許証、メキシコで一般的）とも呼ばれる。",
  "etymology": "licencia（許可証）+ conducir（運転する）の組み合わせ。",
  "synonyms": [
   "licencia de manejo（運転免許証、メキシコで一般的）"
  ],
  "derived": [
   "conducir（運転する）"
  ],
  "dialogue": {
   "es": "— ¿Ya sacaste tu licencia de conducir?\n— Sí, la semana pasada.",
   "ja": "「もう運転免許取った？」「うん、先週ね」"
  }
 },
 "celoso": {
  "nuance": "「嫉妬している」の基本語。恋愛関係でよく使われる（envidiosoは物・成功への嫉妬、celosoは人間関係での嫉妬というニュアンスの違いがある）。",
  "etymology": "ラテン語zelosus（熱心な、嫉妬深い）に由来。",
  "synonyms": [
   "envidioso（嫉妬深い、物事への）"
  ],
  "derived": [
   "celos（嫉妬）"
  ],
  "dialogue": {
   "es": "— No seas celoso, solo somos amigos.\n— Perdón, a veces me pongo así.",
   "ja": "「嫉妬しないで、私たちはただの友達だから」「ごめん、時々そうなっちゃうんだ」"
  }
 },
 "aliviado": {
  "nuance": "「ほっとしている」の基本語。aliviar（和らげる）の過去分詞から形容詞化。",
  "etymology": "aliviar（和らげる）から派生した語。",
  "synonyms": [],
  "derived": [
   "aliviar（和らげる）",
   "alivio（安堵）"
  ],
  "dialogue": {
   "es": "— Me siento aliviado de que todo salió bien.\n— Yo también, estaba muy preocupado.",
   "ja": "「すべてうまくいってほっとしているよ」「私もだよ、すごく心配していたんだ」"
  }
 },
 "esperanzado": {
  "nuance": "「希望を持っている」の基本語。esperanza（希望）から派生した語。",
  "etymology": "esperanza（希望）から派生した語。",
  "synonyms": [],
  "derived": [
   "esperanza（希望）",
   "esperar（望む、待つ）"
  ],
  "dialogue": {
   "es": "— Estoy esperanzado sobre el futuro.\n— Es bueno mantener esa actitud.",
   "ja": "「未来について希望を持っているんだ」「その姿勢を保つのはいいことだね」"
  }
 },
 "nube": {
  "nuance": "「雲」の基本語。estar en las nubes（雲の中にいる＝ぼーっとしている）という慣用句もある。",
  "etymology": "ラテン語nubes（雲）に由来。",
  "synonyms": [],
  "derived": [
   "nublado（曇った）"
  ],
  "dialogue": {
   "es": "— Esas nubes se ven amenazantes.\n— Va a llover pronto.",
   "ja": "「あの雲、脅威的に見えるね」「もうすぐ雨が降りそうだね」"
  }
 },
 "tormenta": {
  "nuance": "「嵐」の基本語。tormenta eléctrica（雷雨）はよく使う組み合わせ。",
  "etymology": "ラテン語tormentum（ねじれ、苦しみ）に由来。",
  "synonyms": [],
  "derived": [
   "atormentar（苦しめる）"
  ],
  "dialogue": {
   "es": "— Se acerca una tormenta.\n— Deberíamos entrar antes de que empiece.",
   "ja": "「嵐が近づいているね」「始まる前に中に入った方がいいね」"
  }
 },
 "húmedo": {
  "nuance": "「湿気がある」の基本語。secoの反対語。",
  "etymology": "ラテン語humidus（湿った）に由来。",
  "synonyms": [],
  "derived": [
   "humedad（湿度）",
   "humedecer（湿らせる）"
  ],
  "dialogue": {
   "es": "— El clima aquí es muy húmedo en verano.\n— Sí, se siente pesado el aire.",
   "ja": "「ここの気候は夏にとても湿気があるね」「うん、空気が重く感じるよね」"
  }
 },
 "¿dónde está...?": {
  "nuance": "「〜はどこ？」の基本フレーズ。場所を尋ねる最も基本的な表現。",
  "etymology": "dónde（どこ）+ estar（いる）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "estar（いる）"
  ],
  "dialogue": {
   "es": "— ¿Dónde está la farmacia más cercana?\n— A dos cuadras de aquí.",
   "ja": "「一番近い薬局はどこですか？」「ここから2ブロック先です」"
  }
 },
 "¿puedes ayudarme?": {
  "nuance": "「手伝ってもらえますか」の基本フレーズ。助けを求めるときの定番表現。",
  "etymology": "poder（できる）+ ayudar（助ける）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "ayudar（助ける）"
  ],
  "dialogue": {
   "es": "— ¿Puedes ayudarme con esto?\n— Claro, ¿qué necesitas?",
   "ja": "「これ手伝ってもらえる？」「もちろん、何が必要？」"
  }
 },
 "está bien": {
  "nuance": "「大丈夫です」の基本フレーズ。同意・了承を表す万能表現。",
  "etymology": "estar（いる）+ bien（良く）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "bien（良く）"
  ],
  "dialogue": {
   "es": "— ¿Nos vemos a las cinco?\n— Está bien.",
   "ja": "「5時に会おうか？」「大丈夫だよ」"
  }
 },
 "no estoy seguro": {
  "nuance": "「確信がない」の基本フレーズ。女性形はno estoy segura。",
  "etymology": "no（否定）+ estar（いる）+ seguro（確かな）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "seguro（確かな、安全な）"
  ],
  "dialogue": {
   "es": "— ¿Vamos a llegar a tiempo?\n— No estoy seguro, hay mucho tráfico.",
   "ja": "「時間通りに着けるかな？」「確信ないな、交通量が多いから」"
  }
 },
 "qué lástima": {
  "nuance": "「残念だね」の基本フレーズ。同情・残念な気持ちを表す。",
  "etymology": "qué（なんて）+ lástima（哀れみ）の組み合わせ。",
  "synonyms": [
   "qué pena（残念だね）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— No pude ir a la fiesta.\n— Qué lástima, te divertiste mucho.",
   "ja": "「パーティーに行けなかったんだ」「残念だね、すごく楽しかったのに」"
  }
 },
 "cuanto antes": {
  "nuance": "「できるだけ早く」の基本フレーズ。",
  "etymology": "cuanto（どれだけ）+ antes（前に）の組み合わせ。",
  "synonyms": [
   "lo antes posible（できるだけ早く）"
  ],
  "derived": [
   "antes（前に）"
  ],
  "dialogue": {
   "es": "— Necesito la respuesta cuanto antes.\n— Te la doy mañana a primera hora.",
   "ja": "「できるだけ早く答えが必要なんだ」「明日一番に伝えるよ」"
  }
 },
 "¡ay!": {
  "nuance": "「痛っ！」「あら」の基本間投詞。痛みや驚きなど、様々な場面で使われる万能語。",
  "etymology": "擬音的な感嘆詞に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¡Ay! Me pegué en el dedo.\n— ¿Estás bien?",
   "ja": "「痛っ！指をぶつけちゃった」「大丈夫？」"
  }
 },
 "¡ojalá!": {
  "nuance": "「そうだといいな！」の基本間投詞。アラビア語由来（「アッラーが望むなら」）。願望を表す接続法のトリガーとしても有名。",
  "etymology": "アラビア語law šā' allāh（アッラーが望むなら）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Espero que apruebes el examen.\n— ¡Ojalá!",
   "ja": "「試験に合格するといいね」「そうだといいな！」"
  }
 },
 "¡ánimo!": {
  "nuance": "「頑張れ！」の基本間投詞。励ましの言葉。",
  "etymology": "ánimo（元気、勇気）から派生した語。",
  "synonyms": [],
  "derived": [
   "ánimo（元気、勇気）"
  ],
  "dialogue": {
   "es": "— Tengo un examen difícil mañana.\n— ¡Ánimo! Vas a estar bien.",
   "ja": "「明日難しい試験があるんだ」「頑張れ！大丈夫だよ」"
  }
 },
 "¡salud!": {
  "nuance": "「乾杯！」「お大事に」の両方の意味を持つ間投詞。乾杯のときと、くしゃみをした人にかけるときの両方で使う。",
  "etymology": "salud（健康）から派生した語。",
  "synonyms": [],
  "derived": [
   "salud（健康）"
  ],
  "dialogue": {
   "es": "— ¡Salud! Por los buenos amigos.\n— ¡Salud!",
   "ja": "「乾杯！良き友人たちに」「乾杯！」"
  }
 },
 "¡auxilio!": {
  "nuance": "「助けて！」の基本間投詞。緊急時に使う叫び声。ayudaよりも切迫した状況で使う。",
  "etymology": "ラテン語auxilium（助け）に由来。",
  "synonyms": [
   "¡ayuda!（助けて！）"
  ],
  "derived": [
   "auxiliar（助ける）"
  ],
  "dialogue": {
   "es": "— ¡Auxilio! ¡Alguien se está ahogando!\n— ¡Voy a llamar a emergencias!",
   "ja": "「助けて！誰かが溺れている！」「救急に電話するよ！」"
  }
 },
 "primero": {
  "nuance": "「まず」の基本フレーズ。話の順序を示す接続表現。",
  "etymology": "ラテン語primarius（最初の）に由来。",
  "synonyms": [],
  "derived": [
   "primer（最初の、名詞前）"
  ],
  "dialogue": {
   "es": "— Primero, vamos a revisar el presupuesto.\n— Buena idea, empecemos por ahí.",
   "ja": "「まず、予算を確認しよう」「いい考えだね、そこから始めよう」"
  }
 },
 "luego": {
  "nuance": "「それから」の基本フレーズ。「後で」という意味にもなる（hasta luego＝またあとで）。",
  "etymology": "ラテン語loco（その場所で）に由来。",
  "synonyms": [
   "después（その後）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Primero como, luego trabajo.\n— Suena como un buen plan.",
   "ja": "「まず食べて、それから仕事するよ」「いい計画に聞こえるね」"
  }
 },
 "finalmente": {
  "nuance": "「最後に」の基本フレーズ。話の締めくくりを表す接続表現。",
  "etymology": "final（終わりの）から派生した語。",
  "synonyms": [
   "por último（最後に）"
  ],
  "derived": [
   "final（終わり）"
  ],
  "dialogue": {
   "es": "— Finalmente, quiero agradecerles a todos.\n— Fue una gran presentación.",
   "ja": "「最後に、皆さんに感謝したいと思います」「素晴らしいプレゼンだったよ」"
  }
 },
 "por otro lado": {
  "nuance": "「一方で」の基本フレーズ。対比や別の視点を示すときに使う。",
  "etymology": "por（〜によって）+ otro lado（別の側）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "lado（側）"
  ],
  "dialogue": {
   "es": "— Por otro lado, hay que considerar el costo.\n— Tienes razón, es un factor importante.",
   "ja": "「一方で、コストも考慮しないといけないね」「その通りだね、重要な要素だよね」"
  }
 },
 "en resumen": {
  "nuance": "「要約すると」の基本フレーズ。話をまとめるときに使う。",
  "etymology": "en（〜において）+ resumen（要約）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "resumir（要約する）"
  ],
  "dialogue": {
   "es": "— En resumen, el proyecto fue un éxito.\n— Me alegra escuchar eso.",
   "ja": "「要約すると、プロジェクトは成功だったよ」「それを聞いて嬉しいよ」"
  }
 },
 "es decir": {
  "nuance": "「つまり」の基本フレーズ。言い換えるときに使う接続表現。",
  "etymology": "es（〜である）+ decir（言う）の組み合わせ。",
  "synonyms": [
   "o sea（つまり、口語）"
  ],
  "derived": [
   "decir（言う）"
  ],
  "dialogue": {
   "es": "— Llego en una hora, es decir, a las tres.\n— Perfecto, te espero.",
   "ja": "「1時間で着くよ、つまり3時だね」「わかった、待ってるね」"
  }
 },
 "al contrario": {
  "nuance": "「逆に」の基本フレーズ。予想と反対のことを言うときに使う。",
  "etymology": "al（〜に）+ contrario（反対の）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "contrario（反対の）"
  ],
  "dialogue": {
   "es": "— ¿Estás molesto?\n— Al contrario, estoy muy contento.",
   "ja": "「怒ってるの？」「逆に、すごく嬉しいんだ」"
  }
 },
 "espinaca": {
  "nuance": "「ほうれん草」の基本語。",
  "etymology": "アラビア語isbinakh（ほうれん草）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Te gusta la espinaca?\n— Sí, especialmente en ensaladas.",
   "ja": "「ほうれん草好き？」「うん、特にサラダに入れて」"
  }
 },
 "pimiento": {
  "nuance": "「ピーマン」の基本語。pimienta（こしょう）とは別の単語なので混同しないよう注意。",
  "etymology": "pimienta（こしょう）から派生した語（見た目の類似から）。",
  "synonyms": [],
  "derived": [
   "pimienta（こしょう）"
  ],
  "dialogue": {
   "es": "— Necesito pimientos rojos para la receta.\n— Hay en el refrigerador.",
   "ja": "「レシピに赤ピーマンが必要なんだ」「冷蔵庫にあるよ」"
  }
 },
 "galleta": {
  "nuance": "「クッキー」の基本語。galleta salada（クラッカー）のような組み合わせもよく使う。",
  "etymology": "フランス語galette（平たいパン）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Hice galletas de chocolate.\n— ¡Se ven deliciosas!",
   "ja": "「チョコレートクッキーを作ったんだ」「美味しそう！」"
  }
 },
 "refresco": {
  "nuance": "「炭酸飲料」の基本語。ラテンアメリカで一般的（refrescar＝涼しくするから派生）。",
  "etymology": "refrescar（涼しくする）から派生した語。",
  "synonyms": [
   "soda（ソーダ、地域による）"
  ],
  "derived": [
   "refrescar（涼しくする）"
  ],
  "dialogue": {
   "es": "— ¿Quieres un refresco?\n— Sí, uno de cola, por favor.",
   "ja": "「炭酸飲料飲む？」「うん、コーラをお願い」"
  }
 },
 "té": {
  "nuance": "「お茶」の基本語。中国語由来の国際的な単語。",
  "etymology": "中国語（福建語）te（茶）に由来。",
  "synonyms": [],
  "derived": [
   "tetera（ティーポット）"
  ],
  "dialogue": {
   "es": "— ¿Prefieres té o café?\n— Té, por favor.",
   "ja": "「お茶とコーヒー、どっちがいい？」「お茶をお願い」"
  }
 },
 "leche": {
  "nuance": "「牛乳」の基本語。leche entera（全脂乳）、leche deslactosada（乳糖不使用）のような種類もよく話題になる。",
  "etymology": "ラテン語lac（乳）に由来。",
  "synonyms": [],
  "derived": [
   "lácteo（乳製品の）"
  ],
  "dialogue": {
   "es": "— ¿Se acabó la leche?\n— Sí, hay que comprar más.",
   "ja": "「牛乳もうなくなった？」「うん、もっと買わないとね」"
  }
 },
 "mantequilla": {
  "nuance": "「バター」の基本語。",
  "etymology": "manteca（脂肪）から派生した語。",
  "synonyms": [],
  "derived": [
   "manteca（脂肪、ラード）"
  ],
  "dialogue": {
   "es": "— Pásame la mantequilla, por favor.\n— Aquí tienes.",
   "ja": "「バター取ってくれる？」「はい、どうぞ」"
  }
 },
 "queso": {
  "nuance": "「チーズ」の基本語。メキシコにはqueso oaxaca、queso frescoなど独自の種類が多い。",
  "etymology": "ラテン語caseus（チーズ）に由来。",
  "synonyms": [],
  "derived": [
   "quesadilla（ケサディーヤ、チーズ入りの料理）"
  ],
  "dialogue": {
   "es": "— ¿Qué tipo de queso prefieres?\n— Me encanta el queso oaxaca.",
   "ja": "「どんなチーズが好き？」「オアハカチーズが大好きなんだ」"
  }
 },
 "huevo": {
  "nuance": "「卵」の基本語。huevos rancheros（メキシコ式卵料理）は朝食の定番。",
  "etymology": "ラテン語ovum（卵）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cómo quieres los huevos?\n— Revueltos, por favor.",
   "ja": "「卵はどう料理する？」「スクランブルでお願い」"
  }
 },
 "arroz": {
  "nuance": "「米」の基本語。arroz a la mexicana（メキシコ風ライス）はよく食べられる副菜。",
  "etymology": "アラビア語ar-ruzz（米）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Este arroz está muy sabroso.\n— Le puse un poco de tomate y ajo.",
   "ja": "「このお米とても美味しいね」「トマトとにんにくを少し入れたんだ」"
  }
 },
 "frijoles": {
  "nuance": "「豆」の基本語。メキシコ料理の基本食材で、frijoles refritos（練り豆）はよく食べられる。",
  "etymology": "ラテン語phaseolus（豆）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Los frijoles están recién hechos.\n— Huelen deliciosos.",
   "ja": "「豆は作りたてだよ」「美味しそうな匂いがする」"
  }
 },
 "taco": {
  "nuance": "「タコス」の基本語。メキシコを代表する料理で、地域ごとに様々な種類がある（tacos al pastor, tacos de canastaなど）。",
  "etymology": "起源は諸説あるが、ナワトル語系の語とされる。",
  "synonyms": [],
  "derived": [
   "taquería（タコス屋）",
   "taquero（タコス職人）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es tu taco favorito?\n— Los tacos al pastor, sin duda.",
   "ja": "「好きなタコスは？」「タコス・アル・パストール、間違いなく」"
  }
 },
 "quesadilla": {
  "nuance": "「ケサディーヤ」の基本語。queso（チーズ）から派生、トルティーヤにチーズなどを挟んで焼いた料理。",
  "etymology": "queso（チーズ）から派生した語。",
  "synonyms": [],
  "derived": [
   "queso（チーズ）"
  ],
  "dialogue": {
   "es": "— Voy a pedir una quesadilla de flor de calabaza.\n— Nunca las he probado.",
   "ja": "「カボチャの花のケサディーヤを頼むよ」「まだ食べたことないんだ」"
  }
 },
 "tamal": {
  "nuance": "「タマル」の基本語。トウモロコシの葉やバナナの葉で包んで蒸したメキシコの伝統料理。複数形はtamales。",
  "etymology": "ナワトル語tamalliに由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— En Día de la Candelaria comemos tamales.\n— Es una tradición deliciosa.",
   "ja": "「聖燭祭の日にはタマルを食べるんだ」「美味しい伝統だね」"
  }
 },
 "mole": {
  "nuance": "「モーレ」の基本語。チョコレートや複数のチリを使った複雑なメキシコの伝統ソース。プエブラ・オアハカが有名な産地。",
  "etymology": "ナワトル語molli（ソース）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El mole poblano tiene chocolate.\n— Es una combinación sorprendente pero deliciosa.",
   "ja": "「モーレ・ポブラーノにはチョコレートが入っているんだ」「意外だけど美味しい組み合わせだよね」"
  }
 },
 "tortilla": {
  "nuance": "「トルティーヤ」の基本語。トウモロコシまたは小麦粉で作られる、メキシコ料理に欠かせない主食。スペインのtortilla（オムレツ）とは全く別物なので注意。",
  "etymology": "torta（丸いパン）の指小形に由来。",
  "synonyms": [],
  "derived": [
   "torta（サンドイッチ、メキシコで人気）"
  ],
  "dialogue": {
   "es": "— ¿Prefieres tortillas de maíz o de harina?\n— De maíz, siempre.",
   "ja": "「トウモロコシと小麦粉、どちらのトルティーヤが好き？」「いつもトウモロコシだよ」"
  }
 },
 "guacamole": {
  "nuance": "「ワカモレ」の基本語。アボカドをベースにしたメキシコの伝統的なディップ。世界的に有名になった料理。",
  "etymology": "ナワトル語ahuacamolli（アボカドのソース）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Hice guacamole fresco.\n— ¡Me encanta! ¿Le pusiste cilantro?",
   "ja": "「新鮮なワカモレを作ったんだ」「大好きなんだ！パクチー入れた？」"
  }
 },
 "salsa": {
  "nuance": "「サルサ」の基本語。料理の「ソース」と、音楽・ダンスの「サルサ」の両方の意味を持つ。",
  "etymology": "ラテン語salsus（塩味のついた）に由来。",
  "synonyms": [],
  "derived": [
   "salsear（ソースをかける）"
  ],
  "dialogue": {
   "es": "— ¿La salsa verde es muy picante?\n— Un poco, pero muy sabrosa.",
   "ja": "「緑のサルサはすごく辛い？」「少しだけど、とても美味しいよ」"
  }
 },
 "sushi": {
  "nuance": "「寿司」の基本語。日本語からの国際的な借用語。メキシコでも人気の高い外国料理の一つ。",
  "etymology": "日本語「寿司」に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Conoces un buen lugar de sushi por aquí?\n— Sí, hay uno excelente cerca del centro.",
   "ja": "「この辺りでいい寿司屋知ってる？」「うん、中心街の近くにすごくいいのがあるよ」"
  }
 },
 "pasta": {
  "nuance": "「パスタ」の基本語。イタリア語からの国際的な借用語。",
  "etymology": "イタリア語pasta（練り粉）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cocinamos pasta esta noche?\n— Sí, con salsa de tomate.",
   "ja": "「今夜パスタ作ろうか？」「うん、トマトソースでね」"
  }
 },
 "imagen": {
  "nuance": "「画像」の基本語。「イメージ、印象」という意味にもなる。",
  "etymology": "ラテン語imago（像、姿）に由来。",
  "synonyms": [],
  "derived": [
   "imaginar（想像する）"
  ],
  "dialogue": {
   "es": "— Esta imagen es muy clara.\n— Sí, se ve todo con detalle.",
   "ja": "「この画像とても鮮明だね」「うん、細部まで全部見えるね」"
  }
 },
 "textura": {
  "nuance": "「質感」の基本語。tejer（織る）と同語源。",
  "etymology": "ラテン語textura（織り方）に由来。",
  "synonyms": [],
  "derived": [
   "texto（テキスト、織られたものから）"
  ],
  "dialogue": {
   "es": "— Me encanta la textura de esta tela.\n— Es muy suave al tacto.",
   "ja": "「この生地の質感が大好きなんだ」「触るととても柔らかいよね」"
  }
 },
 "superficie": {
  "nuance": "「表面」の基本語。super（上に）+ facies（顔、外見）の組み合わせ。",
  "etymology": "ラテン語superficies（表面）に由来。",
  "synonyms": [],
  "derived": [
   "superficial（表面的な）"
  ],
  "dialogue": {
   "es": "— La superficie de la mesa está rayada.\n— Se puede pulir.",
   "ja": "「テーブルの表面に傷がついているね」「磨けば直せるよ」"
  }
 },
 "borde": {
  "nuance": "「へり、端」の基本語。al borde de（〜の瀬戸際に）という比喩的な表現もよく使う。",
  "etymology": "ゲルマン語系の語bord（端）に由来。",
  "synonyms": [],
  "derived": [
   "bordear（縁取る）"
  ],
  "dialogue": {
   "es": "— Ten cuidado con el borde de la mesa.\n— Es un poco filoso.",
   "ja": "「テーブルの端に気をつけて」「少し鋭いんだ」"
  }
 },
 "conjunto": {
  "nuance": "「集合」の基本語。「服の一式、音楽グループ」という意味にもなる。en conjunto（全体として）はよく使う表現。",
  "etymology": "ラテン語conjunctus（結合した）に由来。",
  "synonyms": [],
  "derived": [
   "junto（一緒の）"
  ],
  "dialogue": {
   "es": "— En conjunto, fue un buen año.\n— Sí, a pesar de algunos problemas.",
   "ja": "「全体として、良い一年だったね」「うん、いくつか問題はあったけどね」"
  }
 },
 "motivo": {
  "nuance": "「動機」の基本語。「理由」という意味にもなる。con motivo de（〜を機に）はよく使う表現。",
  "etymology": "ラテン語motivus（動かす）に由来。",
  "synonyms": [],
  "derived": [
   "motivar（動機づける）"
  ],
  "dialogue": {
   "es": "— No entiendo el motivo de su decisión.\n— Tal vez tenía sus razones.",
   "ja": "「彼の決断の動機がわからないんだ」「たぶん彼なりの理由があったんだろうね」"
  }
 },
 "ventaja": {
  "nuance": "「利点」の基本語。desventaja（欠点）と対で使われることが多い。",
  "etymology": "ラテン語ab ante（前に）に由来。",
  "synonyms": [],
  "derived": [
   "aventajar（優る）"
  ],
  "dialogue": {
   "es": "— La ventaja de vivir aquí es la ubicación.\n— Es cierto, todo está cerca.",
   "ja": "「ここに住む利点は立地だよね」「本当だね、何でも近いもんね」"
  }
 },
 "desventaja": {
  "nuance": "「欠点」の基本語。ventaja（利点）の反対語。",
  "etymology": "des（否定）+ ventaja（利点）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "ventaja（利点）"
  ],
  "dialogue": {
   "es": "— La desventaja es que es un poco caro.\n— Pero vale la pena.",
   "ja": "「欠点は少し高いことだね」「でもその価値はあるよ」"
  }
 },
 "perspectiva": {
  "nuance": "「視点」の基本語。「展望、見通し」という意味にもなる。",
  "etymology": "ラテン語perspicere（見通す）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me diste una nueva perspectiva sobre esto.\n— Me alegra haber ayudado.",
   "ja": "「これについて新しい視点をくれたね」「役に立てて嬉しいよ」"
  }
 },
 "prejuicio": {
  "nuance": "「偏見」の基本語。pre（前もって）+ juicio（判断）の組み合わせ。",
  "etymology": "pre（前もって）+ juicio（判断）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "juicio（判断）"
  ],
  "dialogue": {
   "es": "— Debemos evitar los prejuicios.\n— Estoy totalmente de acuerdo.",
   "ja": "「偏見は避けるべきだよね」「まったく同感だよ」"
  }
 },
 "percepción": {
  "nuance": "「知覚」の基本語。percibir（知覚する）から派生した語。",
  "etymology": "percibir（知覚する）から派生した語。",
  "synonyms": [],
  "derived": [
   "percibir（知覚する）"
  ],
  "dialogue": {
   "es": "— Nuestra percepción del tiempo cambia con la edad.\n— Es fascinante pensar en eso.",
   "ja": "「時間の知覚は年齢とともに変わるんだよね」「それについて考えるのは魅力的だね」"
  }
 },
 "dilema": {
  "nuance": "「ジレンマ」の基本語。-aで終わるが男性名詞（ギリシャ語源）。",
  "etymology": "ギリシャ語dilemma（二つの前提）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Tengo un dilema difícil de resolver.\n— Cuéntame, tal vez pueda ayudarte.",
   "ja": "「解決が難しいジレンマを抱えているんだ」「話して、手伝えるかもしれないから」"
  }
 },
 "controversia": {
  "nuance": "「論争」の基本語。causar controversia（論争を引き起こす）はよく使う組み合わせ。",
  "etymology": "ラテン語controversia（対立する意見）に由来。",
  "synonyms": [],
  "derived": [
   "controvertido（物議を醸す）"
  ],
  "dialogue": {
   "es": "— Esa decisión causó mucha controversia.\n— Sí, la gente tiene opiniones muy divididas.",
   "ja": "「その決定は大きな論争を引き起こしたんだ」「うん、人々の意見がすごく分かれているよね」"
  }
 },
 "consenso": {
  "nuance": "「合意」の基本語。llegar a un consenso（合意に達する）はよく使う組み合わせ。",
  "etymology": "ラテン語consensus（同意）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Llegamos a un consenso al final.\n— Qué bueno, así podemos avanzar.",
   "ja": "「最終的に合意に達したよ」「良かった、そうすれば前に進めるね」"
  }
 },
 "noticia": {
  "nuance": "「ニュース」の基本語。単数形も複数形も使われる（las noticias＝ニュース番組・報道）。",
  "etymology": "ラテン語notitia（知識、認識）に由来。",
  "synonyms": [],
  "derived": [
   "noticiero（ニュース番組）"
  ],
  "dialogue": {
   "es": "— ¿Viste la noticia de hoy?\n— No, ¿qué pasó?",
   "ja": "「今日のニュース見た？」「いや、何があったの？」"
  }
 },
 "periódico": {
  "nuance": "「新聞」の基本語。periodo（期間）から派生、定期刊行物が原義。",
  "etymology": "periodo（期間）から派生した語。",
  "synonyms": [],
  "derived": [
   "periodista（記者）"
  ],
  "dialogue": {
   "es": "— Todavía leo el periódico impreso.\n— Yo prefiero las noticias digitales.",
   "ja": "「まだ紙の新聞を読んでいるんだ」「私はデジタルのニュースの方が好きだな」"
  }
 },
 "ahora": {
  "nuance": "「今」の基本語。ahora mismo（今すぐ）はよく使う表現。",
  "etymology": "ラテン語hac hora（この時に）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Puedes venir ahora?\n— Sí, voy enseguida.",
   "ja": "「今来られる？」「うん、すぐ行くよ」"
  }
 },
 "después": {
  "nuance": "「あとで」の基本語。después de（〜の後で）という前置詞句もよく使う。",
  "etymology": "ラテン語de ex post（後から）に由来。",
  "synonyms": [
   "luego（それから）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Hablamos después, ahora estoy ocupado.\n— Está bien, no hay prisa.",
   "ja": "「あとで話そう、今忙しいんだ」「わかった、急がなくていいよ」"
  }
 },
 "antes": {
  "nuance": "「前に」の基本語。antes de（〜の前に）という前置詞句もよく使う。",
  "etymology": "ラテン語ante（前に）に由来。",
  "synonyms": [],
  "derived": [
   "anterior（以前の）"
  ],
  "dialogue": {
   "es": "— Llegué antes de lo esperado.\n— Qué bien, así tenemos más tiempo.",
   "ja": "「予定より早く着いたよ」「よかった、そうすればもっと時間があるね」"
  }
 },
 "tarde": {
  "nuance": "「遅く」の基本語。「午後」という名詞の意味にもなる（la tarde）。llegar tarde（遅刻する）はよく使う組み合わせ。",
  "etymology": "ラテン語tardus（遅い）に由来。",
  "synonyms": [],
  "derived": [
   "tardar（時間がかかる）",
   "tardanza（遅刻）"
  ],
  "dialogue": {
   "es": "— Llegué tarde a la reunión.\n— ¿Qué pasó?",
   "ja": "「会議に遅刻しちゃったんだ」「何があったの？」"
  }
 },
 "medianoche": {
  "nuance": "「真夜中」の基本語。media（半分の）+ noche（夜）の組み合わせ。",
  "etymology": "media（半分）+ noche（夜）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "noche（夜）"
  ],
  "dialogue": {
   "es": "— Llegamos a casa a medianoche.\n— Fue una noche muy larga.",
   "ja": "「真夜中に家に着いたんだ」「とても長い夜だったね」"
  }
 },
 "mediodía": {
  "nuance": "「正午」の基本語。media（半分の）+ día（日）の組み合わせ。",
  "etymology": "medio（半分の）+ día（日）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "día（日）"
  ],
  "dialogue": {
   "es": "— Nos vemos al mediodía para comer.\n— Perfecto, ¿dónde?",
   "ja": "「正午に食事のために会おう」「いいね、どこで？」"
  }
 },
 "fecha": {
  "nuance": "「日付」の基本語。fecha de nacimiento（生年月日）はよく使う組み合わせ。",
  "etymology": "ラテン語facta（作られた→記録された）に由来。",
  "synonyms": [],
  "derived": [
   "fechar（日付を記す）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es la fecha límite?\n— El próximo viernes.",
   "ja": "「締め切りはいつ？」「来週の金曜日だよ」"
  }
 },
 "calendario": {
  "nuance": "「カレンダー」の基本語。",
  "etymology": "ラテン語calendarium（帳簿）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Anoté la cita en el calendario.\n— Buena idea, así no se te olvida.",
   "ja": "「カレンダーに予約を書いておいたよ」「いい考えだね、そうすれば忘れないもんね」"
  }
 },
 "plazo": {
  "nuance": "「期限」の基本語。cumplir el plazo（期限を守る）はよく使う組み合わせ。",
  "etymology": "ラテン語placitum（合意された期間）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El plazo para entregar el proyecto es mañana.\n— Todavía tengo trabajo por hacer.",
   "ja": "「プロジェクトの提出期限は明日だよ」「まだやる仕事が残っているんだ」"
  }
 },
 "rutina": {
  "nuance": "「日課」の基本語。tener una rutina（決まった日課がある）はよく使う組み合わせ。",
  "etymology": "フランス語routine（習慣的な道）に由来。",
  "synonyms": [],
  "derived": [
   "rutinario（日課の、単調な）"
  ],
  "dialogue": {
   "es": "— Tengo una rutina de ejercicio todas las mañanas.\n— Qué disciplina, yo no puedo mantenerla.",
   "ja": "「毎朝運動の日課があるんだ」「規律正しいね、私は続けられないよ」"
  }
 },
 "siesta": {
  "nuance": "「昼寝」の基本語。ラテンアメリカやスペインの文化に根付いた習慣。",
  "etymology": "ラテン語sexta hora（第六の時間、正午）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Voy a tomar una siesta.\n— Buena idea, es muy caluroso hoy.",
   "ja": "「昼寝するよ」「いい考えだね、今日はとても暑いから」"
  }
 },
 "descanso": {
  "nuance": "「休憩」の基本語。descansar（休む）から派生した語。",
  "etymology": "descansar（休む）から派生した語。",
  "synonyms": [],
  "derived": [
   "descansar（休む）"
  ],
  "dialogue": {
   "es": "— Necesito un descanso, llevo horas trabajando.\n— Tómate diez minutos.",
   "ja": "「休憩が必要だな、何時間も働いているから」「10分休んで」"
  }
 },
 "fin de semana": {
  "nuance": "「週末」の基本語。fin（終わり）+ de semana（週の）の組み合わせ。",
  "etymology": "fin（終わり）+ semana（週）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "semana（週）"
  ],
  "dialogue": {
   "es": "— ¿Qué planes tienes para el fin de semana?\n— Nada especial, solo descansar.",
   "ja": "「週末の予定は？」「特に何もないよ、ただ休むだけ」"
  }
 },
 "costumbre": {
  "nuance": "「習慣」の基本語。tener la costumbre de（〜する習慣がある）はよく使う組み合わせ。",
  "etymology": "ラテン語consuetudo（慣習）に由来。",
  "synonyms": [],
  "derived": [
   "acostumbrarse（慣れる）"
  ],
  "dialogue": {
   "es": "— Es una costumbre muy interesante.\n— Sí, no la había visto antes.",
   "ja": "「それはとても興味深い習慣だね」「うん、前に見たことなかったよ」"
  }
 },
 "canadá": {
  "nuance": "「カナダ」の基本語。北米の国、メキシコ・アメリカとともにワールドカップ2026の共催国だった。",
  "etymology": "先住民言語の「村、集落」を意味する語kanataに由来。",
  "synonyms": [],
  "derived": [
   "canadiense（カナダの、カナダ人）"
  ],
  "dialogue": {
   "es": "— ¿Has estado en Canadá?\n— No, pero me gustaría ver las Cataratas del Niágara.",
   "ja": "「カナダに行ったことある？」「ないけど、ナイアガラの滝を見てみたいな」"
  }
 },
 "alemania": {
  "nuance": "「ドイツ」の基本語。",
  "etymology": "ゲルマン民族の一部族Alemanniに由来。",
  "synonyms": [],
  "derived": [
   "alemán（ドイツ語、ドイツ人）"
  ],
  "dialogue": {
   "es": "— Alemania es famosa por su cerveza.\n— Y por su ingeniería también.",
   "ja": "「ドイツはビールで有名だよね」「工学技術でもね」"
  }
 },
 "italia": {
  "nuance": "「イタリア」の基本語。",
  "etymology": "古代の部族名Italoiに由来するとされる。",
  "synonyms": [],
  "derived": [
   "italiano（イタリア語、イタリア人）"
  ],
  "dialogue": {
   "es": "— La comida italiana es una de mis favoritas.\n— La mía también, especialmente la pasta.",
   "ja": "「イタリア料理は私の好きなものの一つなんだ」「私もだよ、特にパスタがね」"
  }
 },
 "china": {
  "nuance": "「中国」の基本語。",
  "etymology": "秦（Qin）王朝の名前に由来するとされる。",
  "synonyms": [],
  "derived": [
   "chino（中国語、中国人）"
  ],
  "dialogue": {
   "es": "— China tiene una historia muy larga.\n— Sí, miles de años de civilización.",
   "ja": "「中国はとても長い歴史があるよね」「うん、何千年もの文明があるよね」"
  }
 },
 "guatemala": {
  "nuance": "「グアテマラ」の基本語。メキシコの南に隣接する中米の国。",
  "etymology": "ナワトル語Quauhtemallan（森の多い土地）に由来するとされる。",
  "synonyms": [],
  "derived": [
   "guatemalteco（グアテマラの、グアテマラ人）"
  ],
  "dialogue": {
   "es": "— Guatemala tiene ruinas mayas impresionantes.\n— Como Tikal, ¿verdad?",
   "ja": "「グアテマラにはすごいマヤ遺跡があるんだよね」「ティカルとかだよね？」"
  }
 },
 "venezuela": {
  "nuance": "「ベネズエラ」の基本語。「小さなベネチア」を意味する名前に由来。",
  "etymology": "Venecia（ベネチア）の指小形に由来。",
  "synonyms": [],
  "derived": [
   "venezolano（ベネズエラの、ベネズエラ人）"
  ],
  "dialogue": {
   "es": "— Venezuela tiene las cataratas más altas del mundo.\n— El Salto Ángel, ¿cierto?",
   "ja": "「ベネズエラには世界一高い滝があるんだよね」「エンジェルフォールだよね？」"
  }
 },
 "américa": {
  "nuance": "「アメリカ大陸」の基本語。イタリアの探検家アメリゴ・ヴェスプッチに由来。北米・中米・南米を含む大陸全体を指す（米国のみを指す場合はEstados Unidosと区別する）。",
  "etymology": "探検家アメリゴ・ヴェスプッチ（Amerigo Vespucci）の名前に由来。",
  "synonyms": [],
  "derived": [
   "americano（アメリカ大陸の）"
  ],
  "dialogue": {
   "es": "— América tiene una gran diversidad cultural.\n— Desde Canadá hasta Argentina.",
   "ja": "「アメリカ大陸はとても文化的多様性があるよね」「カナダからアルゼンチンまでね」"
  }
 },
 "europa": {
  "nuance": "「ヨーロッパ」の基本語。ギリシャ神話のエウロペ姫に由来。",
  "etymology": "ギリシャ神話のエウロペ（Europa）姫に由来。",
  "synonyms": [],
  "derived": [
   "europeo（ヨーロッパの、ヨーロッパ人）"
  ],
  "dialogue": {
   "es": "— Quiero viajar por Europa el próximo año.\n— ¿Qué países vas a visitar?",
   "ja": "「来年ヨーロッパを旅行したいんだ」「どの国を訪れるつもり？」"
  }
 },
 "asia": {
  "nuance": "「アジア」の基本語。世界最大の大陸。",
  "etymology": "起源は諸説あるが、アッシリア語系の語とされる。",
  "synonyms": [],
  "derived": [
   "asiático（アジアの、アジア人）"
  ],
  "dialogue": {
   "es": "— Asia tiene países muy diversos.\n— Sí, desde Japón hasta India.",
   "ja": "「アジアはとても多様な国があるよね」「うん、日本からインドまでね」"
  }
 },
 "áfrica": {
  "nuance": "「アフリカ」の基本語。",
  "etymology": "起源は諸説あるが、フェニキア語系の語とされる。",
  "synonyms": [],
  "derived": [
   "africano（アフリカの、アフリカ人）"
  ],
  "dialogue": {
   "es": "— África tiene una biodiversidad increíble.\n— Los safaris deben ser impresionantes.",
   "ja": "「アフリカはすごい生物多様性があるよね」「サファリはきっとすごいんだろうね」"
  }
 },
 "te extraño": {
  "nuance": "「会いたいよ」の基本フレーズ。extrañar（恋しく思う）はラテンアメリカで一般的な語で、メキシコでも非常によく使われる。",
  "etymology": "extrañar（恋しく思う）から派生。",
  "synonyms": [],
  "derived": [
   "extrañar（恋しく思う）"
  ],
  "dialogue": {
   "es": "— Te extraño mucho.\n— Yo también te extraño.",
   "ja": "「すごく会いたいよ」「私もあなたに会いたいよ」"
  }
 },
 "¡uf!": {
  "nuance": "「うわ〜」「ふう」の基本間投詞。疲労や安堵、驚きなど様々な感情を表す万能語。",
  "etymology": "擬音的な感嘆詞に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¡Uf! Qué día tan largo.\n— Sí, necesito descansar.",
   "ja": "「ふう！なんて長い一日だったんだ」「うん、休憩が必要だな」"
  }
 },
 "¡vaya!": {
  "nuance": "「おやおや」の基本間投詞。驚きや失望を表す。",
  "etymology": "ir（行く）の接続法現在から派生した間投詞。",
  "synonyms": [],
  "derived": [
   "ir（行く）"
  ],
  "dialogue": {
   "es": "— Perdí las llaves otra vez.\n— ¡Vaya! Eso te pasa seguido.",
   "ja": "「また鍵をなくしちゃった」「おやおや！よくあることだね」"
  }
 },
 "por ejemplo": {
  "nuance": "「例えば」の基本フレーズ。非常によく使う接続表現。",
  "etymology": "por（〜として）+ ejemplo（例）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "ejemplo（例）"
  ],
  "dialogue": {
   "es": "— Hay muchas opciones, por ejemplo, ir al cine o quedarnos en casa.\n— Prefiero quedarme en casa.",
   "ja": "「選択肢がたくさんあるよ、例えば映画に行くとか家にいるとか」「家にいる方がいいな」"
  }
 },
 "mientras tanto": {
  "nuance": "「その間に」の基本フレーズ。並行して起こることを説明するときに使う。",
  "etymology": "mientras（〜の間）+ tanto（それだけ）の組み合わせ。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Voy a cocinar, mientras tanto puedes descansar.\n— Gracias, eso suena bien.",
   "ja": "「料理するよ、その間休んでいていいから」「ありがとう、それはいいね」"
  }
 },
 "en conclusión": {
  "nuance": "「結論として」の基本フレーズ。話や文章をまとめるときに使うフォーマルな表現。",
  "etymology": "en（〜において）+ conclusión（結論）の組み合わせ。",
  "synonyms": [
   "en resumen（要約すると）"
  ],
  "derived": [
   "concluir（結論づける）"
  ],
  "dialogue": {
   "es": "— En conclusión, necesitamos más tiempo.\n— Estoy de acuerdo con tu análisis.",
   "ja": "「結論として、もっと時間が必要だね」「君の分析に同意するよ」"
  }
 },
 "no obstante": {
  "nuance": "「それにもかかわらず」の基本フレーズ。sin embargoよりもさらにフォーマルな逆接表現。",
  "etymology": "no（否定）+ obstante（妨げる）の組み合わせ。",
  "synonyms": [
   "sin embargo（しかしながら）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— No obstante, seguimos adelante con el plan.\n— Me parece la decisión correcta.",
   "ja": "「それにもかかわらず、計画を進めているんだ」「正しい決断だと思うよ」"
  }
 },
 "por consiguiente": {
  "nuance": "「したがって」の基本フレーズ。論理的な結論を導くフォーマルな表現。",
  "etymology": "por（〜によって）+ consiguiente（結果として続く）の組み合わせ。",
  "synonyms": [
   "por lo tanto（したがって）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— No llovió, por consiguiente, el evento continuará al aire libre.\n— Qué bueno, esperemos que siga así.",
   "ja": "「雨が降らなかった、したがってイベントは屋外で続行されるよ」「良かった、このまま続くといいね」"
  }
 },
 "dicho de otro modo": {
  "nuance": "「言い換えると」の基本フレーズ。説明を言い換えるときに使う。",
  "etymology": "dicho（言われた）+ de otro modo（別の方法で）の組み合わせ。",
  "synonyms": [
   "es decir（つまり）"
  ],
  "derived": [
   "decir（言う）"
  ],
  "dialogue": {
   "es": "— Dicho de otro modo, no tenemos suficiente presupuesto.\n— Entiendo la situación ahora.",
   "ja": "「言い換えると、十分な予算がないんだ」「今状況がわかったよ」"
  }
 },
 "a fin de cuentas": {
  "nuance": "「結局のところ」の基本フレーズ。",
  "etymology": "a fin de（〜の終わりに）+ cuentas（計算）の組み合わせ。",
  "synonyms": [
   "al final（最終的に）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— A fin de cuentas, todo salió bien.\n— Me alegra escuchar eso.",
   "ja": "「結局のところ、すべてうまくいったよ」「それを聞いて嬉しいよ」"
  }
 },
 "de ahora en adelante": {
  "nuance": "「これからは」の基本フレーズ。今後の変化を宣言するときに使う。",
  "etymology": "de ahora（今から）+ en adelante（前へ）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "adelante（前へ）"
  ],
  "dialogue": {
   "es": "— De ahora en adelante, voy a ser más puntual.\n— Me parece una buena decisión.",
   "ja": "「これからは、もっと時間に正確になるつもりだよ」「いい決断だと思うよ」"
  }
 },
 "¿me puede repetir, por favor?": {
  "nuance": "「もう一度言ってもらえますか」の基本フレーズ。聞き取れなかったときの丁寧な確認表現。",
  "etymology": "poder（できる）+ repetir（繰り返す）の組み合わせ。",
  "synonyms": [
   "¿cómo dice?（何とおっしゃいましたか）"
  ],
  "derived": [
   "repetir（繰り返す）"
  ],
  "dialogue": {
   "es": "— ¿Me puede repetir, por favor? No escuché bien.\n— Claro, le decía que la reunión es a las tres.",
   "ja": "「もう一度言ってもらえますか？よく聞こえなかったんです」「もちろんです、会議は3時からだと言っていました」"
  }
 },
 "empeñarse en": {
  "nuance": "「〜に固執する」の基本語。empeño（決意、こだわり）から派生した再帰動詞。",
  "etymology": "empeñar（質に入れる→力を注ぐ）から派生した語。",
  "synonyms": [],
  "derived": [
   "empeño（決意）"
  ],
  "dialogue": {
   "es": "— Se empeña en hacerlo solo.\n— Es muy independiente.",
   "ja": "「彼は一人でやることに固執しているんだ」「とても自立しているよね」"
  }
 },
 "confirmar": {
  "nuance": "「確認する」の基本語。confirmar una reservación（予約を確認する）はよく使う組み合わせ。",
  "etymology": "ラテン語confirmare（固める、確証する）に由来。",
  "synonyms": [],
  "derived": [
   "confirmación（確認）"
  ],
  "dialogue": {
   "es": "— ¿Puedes confirmar la reservación?\n— Sí, ya la confirmé por correo.",
   "ja": "「予約を確認してもらえる？」「うん、もうメールで確認したよ」"
  }
 },
 "cancelar": {
  "nuance": "「キャンセルする」の基本語。cancelar una cita（予約をキャンセルする）はよく使う組み合わせ。",
  "etymology": "ラテン語cancellare（格子で消す）に由来。",
  "synonyms": [],
  "derived": [
   "cancelación（キャンセル）"
  ],
  "dialogue": {
   "es": "— Tuve que cancelar mi cita.\n— ¿Vas a reagendarla?",
   "ja": "「予約をキャンセルしないといけなかったんだ」「日程変更するつもり？」"
  }
 },
 "reservar": {
  "nuance": "「予約する」の基本語。reservar una mesa（テーブルを予約する）はよく使う組み合わせ。",
  "etymology": "ラテン語reservare（取っておく）に由来。",
  "synonyms": [],
  "derived": [
   "reserva（予約）"
  ],
  "dialogue": {
   "es": "— ¿Ya reservaste el hotel?\n— Sí, para las tres noches.",
   "ja": "「もうホテル予約した？」「うん、3泊分ね」"
  }
 },
 "organizar": {
  "nuance": "「整理する、企画する」の基本語。organizar una fiesta（パーティーを企画する）はよく使う組み合わせ。",
  "etymology": "órgano（器官、組織）から派生した語。",
  "synonyms": [],
  "derived": [
   "organización（組織、団体）"
  ],
  "dialogue": {
   "es": "— Vamos a organizar una fiesta sorpresa.\n— ¡Qué divertido! Cuenta conmigo.",
   "ja": "「サプライズパーティーを企画しよう」「面白そう！私も参加するよ」"
  }
 },
 "planear": {
  "nuance": "「計画する」の基本語。planear un viaje（旅行を計画する）はよく使う組み合わせ。",
  "etymology": "plano（平面、計画）から派生した語。",
  "synonyms": [
   "planificar（計画する、ややフォーマル）"
  ],
  "derived": [
   "plan（計画）"
  ],
  "dialogue": {
   "es": "— Estamos planeando un viaje a la playa.\n— ¡Qué envidia! Llévame contigo.",
   "ja": "「ビーチ旅行を計画しているんだ」「いいなあ！連れてって」"
  }
 },
 "lograr": {
  "nuance": "「達成する」の基本語。lograr+不定詞（〜することに成功する）という組み合わせもよく使う。",
  "etymology": "ラテン語lucrari（利益を得る）に由来。",
  "synonyms": [],
  "derived": [
   "logro（達成）"
  ],
  "dialogue": {
   "es": "— Logré terminar el proyecto a tiempo.\n— ¡Felicidades! Sabía que lo lograrías.",
   "ja": "「プロジェクトを時間通りに終わらせることができたんだ」「おめでとう！できると思っていたよ」"
  }
 },
 "fracasar": {
  "nuance": "「失敗する」の基本語。lograr（達成する）の反対語。",
  "etymology": "イタリア語fracassare（打ち砕く）に由来。",
  "synonyms": [],
  "derived": [
   "fracaso（失敗）"
  ],
  "dialogue": {
   "es": "— El plan fracasó desde el principio.\n— ¿Qué salió mal?",
   "ja": "「その計画は最初から失敗したんだ」「何がうまくいかなかったの？」"
  }
 },
 "intentar": {
  "nuance": "「試みる」の基本語。intentar+不定詞（〜しようと試みる）という組み合わせが定番。",
  "etymology": "ラテン語intentare（向ける、試みる）に由来。",
  "synonyms": [
   "tratar de（〜しようとする）"
  ],
  "derived": [
   "intento（試み）"
  ],
  "dialogue": {
   "es": "— Voy a intentar hacerlo de nuevo.\n— Ánimo, sé que puedes lograrlo.",
   "ja": "「もう一度やってみるよ」「頑張って、できると思うよ」"
  }
 },
 "evitar": {
  "nuance": "「避ける」の基本語。evitar+不定詞（〜するのを避ける）という組み合わせもよく使う。",
  "etymology": "ラテン語evitare（避ける）に由来。",
  "synonyms": [],
  "derived": [
   "evitable（避けられる）"
  ],
  "dialogue": {
   "es": "— Trato de evitar el tráfico saliendo temprano.\n— Buena estrategia.",
   "ja": "「早く出発することで渋滞を避けようとしているんだ」「いい戦略だね」"
  }
 },
 "impedir": {
  "nuance": "「妨げる」の基本語。impedir que+接続法の形を取る。",
  "etymology": "ラテン語impedire（足を絡ませる）に由来。",
  "synonyms": [],
  "derived": [
   "impedimento（障害）"
  ],
  "dialogue": {
   "es": "— La lluvia impidió que saliéramos.\n— Qué mal, teníamos planes.",
   "ja": "「雨のせいで出かけられなかったんだ」「残念だね、予定があったのに」"
  }
 },
 "comparar": {
  "nuance": "「比較する」の基本語。comparar A con B（AとBを比較する）という組み合わせが定番。",
  "etymology": "ラテン語comparare（対にする）に由来。",
  "synonyms": [],
  "derived": [
   "comparación（比較）"
  ],
  "dialogue": {
   "es": "— No me gusta comparar a mis hijos.\n— Es una buena filosofía, cada uno es diferente.",
   "ja": "「子供たちを比較するのは好きじゃないんだ」「いい考え方だね、みんなそれぞれ違うから」"
  }
 },
 "combinar": {
  "nuance": "「組み合わせる」の基本語。",
  "etymology": "ラテン語combinare（二つを組み合わせる）に由来。",
  "synonyms": [],
  "derived": [
   "combinación（組み合わせ）"
  ],
  "dialogue": {
   "es": "— Puedes combinar estos dos colores.\n— Se ven bien juntos.",
   "ja": "「この2つの色を組み合わせられるよ」「一緒だと良く見えるね」"
  }
 },
 "separar": {
  "nuance": "「分ける」の基本語。separar la basura（ゴミを分別する）はよく使う組み合わせ。",
  "etymology": "ラテン語separare（離す）に由来。",
  "synonyms": [],
  "derived": [
   "separación（分離）"
  ],
  "dialogue": {
   "es": "— Hay que separar el plástico del vidrio.\n— Sí, para reciclar bien.",
   "ja": "「プラスチックとガラスを分けないとね」「うん、ちゃんとリサイクルするために」"
  }
 },
 "maleducado": {
  "nuance": "「無礼な」の基本語。mal（悪い）+ educado（礼儀正しい）の組み合わせ。educadoの反対語。",
  "etymology": "mal（悪い）+ educado（教育された）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "educado（礼儀正しい）"
  ],
  "dialogue": {
   "es": "— Fue muy maleducado con el mesero.\n— Sí, no me gustó su actitud.",
   "ja": "「彼はウェイターにとても無礼だったんだ」「うん、彼の態度気に入らなかったよ」"
  }
 },
 "áspero": {
  "nuance": "「ざらざらした」の基本語。suave（柔らかい）の反対語。「（性格が）荒っぽい」という比喩的な意味にもなる。",
  "etymology": "ラテン語asper（粗い）に由来。",
  "synonyms": [],
  "derived": [
   "aspereza（粗さ）"
  ],
  "dialogue": {
   "es": "— Esta tela se siente áspera.\n— No es muy cómoda para la piel.",
   "ja": "「この生地ざらざらした感触だね」「肌にはあまり快適じゃないね」"
  }
 },
 "rígido": {
  "nuance": "「硬直した」の基本語。flexible（柔軟な）の反対語。性格についても使える。",
  "etymology": "ラテン語rigidus（硬い）に由来。",
  "synonyms": [],
  "derived": [
   "rigidez（硬直）"
  ],
  "dialogue": {
   "es": "— Mi horario es muy rígido.\n— El mío es más flexible.",
   "ja": "「私のスケジュールはとても厳しいんだ」「私のはもっと柔軟だよ」"
  }
 },
 "caliente": {
  "nuance": "「熱い」の基本語。fríoの反対語。tener calor（人が暑いと感じる）とestar caliente（物が熱い）の違いに注意。",
  "etymology": "ラテン語calens（熱している）に由来。",
  "synonyms": [],
  "derived": [
   "calor（暑さ）",
   "calentar（温める）"
  ],
  "dialogue": {
   "es": "— Ten cuidado, el café está muy caliente.\n— Gracias por avisarme.",
   "ja": "「気をつけて、コーヒーがとても熱いよ」「教えてくれてありがとう」"
  }
 },
 "descuidado": {
  "nuance": "「不注意な」の基本語。cuidadoso（注意深い）の反対語。",
  "etymology": "des（否定）+ cuidado（注意）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "cuidado（注意）"
  ],
  "dialogue": {
   "es": "— Fue descuidado al dejar la puerta abierta.\n— Podría haber pasado algo malo.",
   "ja": "「ドアを開けっぱなしにして不注意だったね」「何か悪いことが起きたかもしれないね」"
  }
 },
 "impuntual": {
  "nuance": "「時間にルーズな」の基本語。puntual（時間に正確な）の反対語。",
  "etymology": "in（否定）+ puntual（時間に正確な）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "puntual（時間に正確な）"
  ],
  "dialogue": {
   "es": "— Es un poco impuntual, siempre llega tarde.\n— Deberías decirle algo.",
   "ja": "「彼は少し時間にルーズで、いつも遅刻するんだ」「何か言った方がいいよ」"
  }
 },
 "estricto": {
  "nuance": "「厳しい」の基本語。comprensivo（理解のある）と対照的に使われることが多い。",
  "etymology": "ラテン語strictus（引き締められた）に由来。",
  "synonyms": [],
  "derived": [
   "estrictamente（厳密に）"
  ],
  "dialogue": {
   "es": "— Mi profesor es muy estricto.\n— El mío también, pero aprendo mucho.",
   "ja": "「私の先生はとても厳しいんだ」「私のもだよ、でもたくさん学べるんだ」"
  }
 },
 "comprensivo": {
  "nuance": "「理解のある」の基本語。comprender（理解する）から派生。estricto（厳しい）の対比としてよく使われる。",
  "etymology": "comprender（理解する）から派生した語。",
  "synonyms": [],
  "derived": [
   "comprender（理解する）"
  ],
  "dialogue": {
   "es": "— Mi jefe es muy comprensivo.\n— Qué suerte, eso hace el trabajo más agradable.",
   "ja": "「私の上司はとても理解があるんだ」「幸運だね、それで仕事がより快適になるよね」"
  }
 },
 "justo": {
  "nuance": "「公正な」の基本語。injusto（不公正な）の反対語。「ちょうど」という副詞的な意味にもなる。",
  "etymology": "ラテン語iustus（正しい）に由来。",
  "synonyms": [],
  "derived": [
   "justicia（正義）",
   "injusto（不公正な）"
  ],
  "dialogue": {
   "es": "— El árbitro fue muy justo.\n— Sí, tomó buenas decisiones.",
   "ja": "「その審判はとても公正だったよね」「うん、いい判断をしていたよね」"
  }
 },
 "modesto": {
  "nuance": "「謙虚な」の基本語。arrogante（傲慢な）の反対語。",
  "etymology": "ラテン語modestus（適度な、慎み深い）に由来。",
  "synonyms": [],
  "derived": [
   "modestia（謙虚さ）"
  ],
  "dialogue": {
   "es": "— A pesar de su éxito, sigue siendo muy modesto.\n— Eso lo hace aún más admirable.",
   "ja": "「彼は成功しているのに、とても謙虚なままなんだ」「それがさらに彼を尊敬できるものにするよね」"
  }
 },
 "arrogante": {
  "nuance": "「傲慢な」の基本語。modesto（謙虚な）の反対語。",
  "etymology": "ラテン語arrogans（要求する、傲慢な）に由来。",
  "synonyms": [],
  "derived": [
   "arrogancia（傲慢さ）"
  ],
  "dialogue": {
   "es": "— Es un poco arrogante con sus compañeros.\n— A nadie le gusta trabajar con alguien así.",
   "ja": "「彼は同僚に対して少し傲慢なんだ」「そういう人と働きたい人はいないよね」"
  }
 },
 "leal": {
  "nuance": "「忠実な」の基本語。ペット・友人・パートナーなど幅広い対象に使える。",
  "etymology": "ラテン語legalis（法にかなった→忠実な）に由来。",
  "synonyms": [],
  "derived": [
   "lealtad（忠誠）"
  ],
  "dialogue": {
   "es": "— Los perros son animales muy leales.\n— Es una de las razones por las que los amo.",
   "ja": "「犬はとても忠実な動物だよね」「それが犬を愛する理由の一つなんだ」"
  }
 },
 "confiable": {
  "nuance": "「信頼できる」の基本語。confiar（信頼する）から派生した語。",
  "etymology": "confiar（信頼する）から派生した語。",
  "synonyms": [],
  "derived": [
   "confiar（信頼する）",
   "confianza（信頼）"
  ],
  "dialogue": {
   "es": "— Es una persona muy confiable.\n— Sí, siempre cumple su palabra.",
   "ja": "「彼はとても信頼できる人なんだ」「うん、いつも約束を守るよね」"
  }
 },
 "ingenuo": {
  "nuance": "「世間知らずな、純真な」の基本語。ネガティブにもポジティブにも使われる。",
  "etymology": "ラテン語ingenuus（生まれながらに自由な→純真な）に由来。",
  "synonyms": [],
  "derived": [
   "ingenuidad（世間知らず）"
  ],
  "dialogue": {
   "es": "— Fue un poco ingenuo al confiar en esa oferta.\n— Sí, debió investigar más.",
   "ja": "「その申し出を信じるなんて少し世間知らずだったね」「うん、もっと調べるべきだったね」"
  }
 },
 "práctico": {
  "nuance": "「実用的な」の基本語。practicar（練習する）と同語源。",
  "etymology": "ラテン語practicus（実行の）に由来。",
  "synonyms": [],
  "derived": [
   "practicar（練習する）"
  ],
  "dialogue": {
   "es": "— Este utensilio es muy práctico.\n— Sí, lo uso todos los días.",
   "ja": "「この道具はとても実用的だね」「うん、毎日使っているよ」"
  }
 },
 "detallista": {
  "nuance": "「細かいところに気がつく」の基本語。detalle（細部）から派生。男女同形。",
  "etymology": "detalle（細部）から派生した語。",
  "synonyms": [],
  "derived": [
   "detalle（細部）"
  ],
  "dialogue": {
   "es": "— Eres muy detallista con tu trabajo.\n— Gracias, me gusta hacer las cosas bien.",
   "ja": "「君は仕事にとても細かいところまで気を配るね」「ありがとう、物事をきちんとやるのが好きなんだ」"
  }
 },
 "vinagre": {
  "nuance": "「酢」の基本語。vino（ワイン）+ agre（酸っぱい）の組み合わせ。",
  "etymology": "vino（ワイン）+ agre（酸っぱい）の組み合わせに由来。",
  "synonyms": [],
  "derived": [
   "vino（ワイン）"
  ],
  "dialogue": {
   "es": "— Le puse un poco de vinagre a la ensalada.\n— Le da un buen sabor.",
   "ja": "「サラダに少し酢を入れたんだ」「いい味になるよね」"
  }
 },
 "burrito": {
  "nuance": "「ブリトー」の基本語。小さいロバ（burro）の指小形に由来するとされる。北メキシコ発祥の料理。",
  "etymology": "burro（ロバ）の指小形に由来するとされる。",
  "synonyms": [],
  "derived": [
   "burro（ロバ）"
  ],
  "dialogue": {
   "es": "— Quiero un burrito de frijoles.\n— Yo prefiero de carne asada.",
   "ja": "「豆のブリトーが欲しいな」「私はカルネ・アサーダの方が好きだな」"
  }
 },
 "pozole": {
  "nuance": "「ポソレ」の基本語。トウモロコシ（ポソル）と肉を使ったメキシコの伝統的なスープ料理。ナワトル語由来。",
  "etymology": "ナワトル語pozolli（泡立った）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El pozole rojo es mi favorito.\n— A mí me gusta más el verde.",
   "ja": "「赤いポソレが一番好きなんだ」「私は緑の方が好きだな」"
  }
 },
 "merienda": {
  "nuance": "「おやつ」の基本語。午後の軽食を指す。",
  "etymology": "ラテン語merenda（正午の食事）に由来。",
  "synonyms": [],
  "derived": [
   "merendar（おやつを食べる）"
  ],
  "dialogue": {
   "es": "— ¿Qué hay de merienda?\n— Pan con chocolate caliente.",
   "ja": "「おやつは何がある？」「パンとホットチョコレートだよ」"
  }
 },
 "fideos": {
  "nuance": "「麺」の基本語。sopa de fideos（麺スープ）はよく食べられるメキシコ料理。",
  "etymology": "アラビア語fidaws（麺）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me encanta la sopa de fideos.\n— Es un platillo muy reconfortante.",
   "ja": "「麺スープが大好きなんだ」「とても心温まる料理だよね」"
  }
 },
 "miel": {
  "nuance": "「蜂蜜」の基本語。luna de miel（ハネムーン、直訳「蜜の月」）という表現もある。",
  "etymology": "ラテン語mel（蜂蜜）に由来。",
  "synonyms": [],
  "derived": [
   "mielero（蜂蜜好き、動物）"
  ],
  "dialogue": {
   "es": "— Le pongo miel a mi té.\n— Es más saludable que el azúcar.",
   "ja": "「お茶に蜂蜜を入れるんだ」「砂糖よりも健康的だよね」"
  }
 },
 "yogur": {
  "nuance": "「ヨーグルト」の基本語。トルコ語由来の国際的な単語。",
  "etymology": "トルコ語yoğurt（ヨーグルト）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Como yogur con fruta todas las mañanas.\n— Es un desayuno muy saludable.",
   "ja": "「毎朝フルーツ入りのヨーグルトを食べているんだ」「とても健康的な朝食だよね」"
  }
 },
 "cereal": {
  "nuance": "「シリアル」の基本語。「穀物」という意味にもなる。",
  "etymology": "ローマ神話の農業の女神ケレース（Ceres）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué cereal prefieres?\n— El de chocolate.",
   "ja": "「どのシリアルが好き？」「チョコレート味だよ」"
  }
 },
 "caldo": {
  "nuance": "「だし・スープの素」の基本語。caldo de pollo（チキンスープ）はよく食べられるメキシコ料理。",
  "etymology": "ラテン語calidus（熱い）に由来。",
  "synonyms": [],
  "derived": [
   "calentar（温める）"
  ],
  "dialogue": {
   "es": "— El caldo de pollo ayuda cuando estás enfermo.\n— Sí, mi mamá siempre lo hace.",
   "ja": "「チキンスープは病気のとき助けになるよね」「うん、私の母がいつも作ってくれるんだ」"
  }
 },
 "calle": {
  "nuance": "「通り」の基本語。en la calle（通りで、街中で）はよく使う表現。",
  "etymology": "ラテン語callis（小道）に由来。",
  "synonyms": [],
  "derived": [
   "callejón（路地）"
  ],
  "dialogue": {
   "es": "— ¿En qué calle vives?\n— En la calle Juárez.",
   "ja": "「何通りに住んでいるの？」「フアレス通りだよ」"
  }
 },
 "torre": {
  "nuance": "「タワー」の基本語。チェスの「ルーク」という意味にもなる。",
  "etymology": "ラテン語turris（塔）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Esa torre es el edificio más alto de la ciudad.\n— Se ve impresionante de noche.",
   "ja": "「あのタワーは街で一番高い建物なんだ」「夜見るとすごいね」"
  }
 },
 "consulado": {
  "nuance": "「領事館」の基本語。embajada（大使館）とは規模・役割が異なる。",
  "etymology": "cónsul（領事）から派生した語。",
  "synonyms": [],
  "derived": [
   "cónsul（領事）"
  ],
  "dialogue": {
   "es": "— Necesito ir al consulado para renovar mi pasaporte.\n— ¿Hace cita en línea?",
   "ja": "「パスポートの更新のために領事館に行く必要があるんだ」「オンラインで予約するの？」"
  }
 },
 "zoológico": {
  "nuance": "「動物園」の基本語。zoo（口語での短縮形）ともよく呼ばれる。",
  "etymology": "ギリシャ語zoon（動物）+ logos（学問）の組み合わせ。",
  "synonyms": [
   "zoo（動物園、口語）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Vamos a llevar a los niños al zoológico.\n— A ellos les va a encantar.",
   "ja": "「子供たちを動物園に連れて行こう」「きっと気に入るよ」"
  }
 },
 "acuario": {
  "nuance": "「水族館」の基本語。agua（水）から派生した語。",
  "etymology": "ラテン語aquarium（水の場所）に由来。",
  "synonyms": [],
  "derived": [
   "agua（水）"
  ],
  "dialogue": {
   "es": "— El acuario tiene tiburones.\n— ¡Qué emocionante! Vamos este fin de semana.",
   "ja": "「水族館にサメがいるんだ」「わくわくするね！今週末行こう」"
  }
 },
 "cuidado": {
  "nuance": "「気をつけて！」の基本フレーズ。「注意」という名詞の意味にもなる。tener cuidado（気をつける）はよく使う組み合わせ。",
  "etymology": "cuidar（世話をする、注意する）から派生した語。",
  "synonyms": [],
  "derived": [
   "cuidar（世話をする）"
  ],
  "dialogue": {
   "es": "— ¡Cuidado! Hay un escalón ahí.\n— Gracias por avisarme.",
   "ja": "「気をつけて！そこに段差があるよ」「教えてくれてありがとう」"
  }
 },
 "no pasa nada": {
  "nuance": "「大丈夫、問題ないよ」の基本フレーズ。気にしないでいいと伝えるカジュアルな表現。",
  "etymology": "no（否定）+ pasar（起こる）+ nada（何も）の組み合わせ。",
  "synonyms": [
   "no hay problema（問題ないです）"
  ],
  "derived": [
   "pasar（起こる）"
  ],
  "dialogue": {
   "es": "— Perdón por llegar tarde.\n— No pasa nada, apenas empezamos.",
   "ja": "「遅れてごめん」「大丈夫だよ、始めたばかりだから」"
  }
 },
 "vale la pena": {
  "nuance": "「その価値がある」の基本フレーズ。valer（価値がある）+ la pena（苦労）の組み合わせ。",
  "etymology": "valer（価値がある）+ pena（苦労、罰）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "valer（価値がある）"
  ],
  "dialogue": {
   "es": "— ¿Vale la pena ver esa película?\n— Sí, totalmente.",
   "ja": "「その映画見る価値ある？」「うん、絶対にね」"
  }
 },
 "estoy de camino": {
  "nuance": "「今向かっています」の基本フレーズ。到着予定を伝える定番表現。",
  "etymology": "estar（いる）+ de camino（道中の）の組み合わせ。",
  "synonyms": [
   "voy en camino（向かっています）"
  ],
  "derived": [
   "camino（道）"
  ],
  "dialogue": {
   "es": "— ¿Ya vienes?\n— Sí, estoy de camino.",
   "ja": "「もう来てる？」「うん、今向かっているところだよ」"
  }
 },
 "tómalo con calma": {
  "nuance": "「落ち着いて」の基本フレーズ。相手を落ち着かせるときの表現。",
  "etymology": "tomar（取る）+ con calma（落ち着いて）の組み合わせ。",
  "synonyms": [
   "tranquilo（落ち着いて）"
  ],
  "derived": [
   "calma（落ち着き）"
  ],
  "dialogue": {
   "es": "— Estoy muy nervioso por la entrevista.\n— Tómalo con calma, vas a estar bien.",
   "ja": "「面接ですごく緊張しているんだ」「落ち着いて、大丈夫だから」"
  }
 },
 "no hay problema": {
  "nuance": "「問題ないです」の基本フレーズ。承諾・許可を表す万能表現。",
  "etymology": "no（否定）+ hay（ある）+ problema（問題）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "problema（問題）"
  ],
  "dialogue": {
   "es": "— ¿Puedo llegar unos minutos tarde?\n— No hay problema.",
   "ja": "「数分遅れて着いてもいい？」「問題ないよ」"
  }
 },
 "mosca": {
  "nuance": "「ハエ」の基本語。por si las moscas（念のため、直訳「ハエの場合に備えて」）という慣用句もある。",
  "etymology": "ラテン語musca（ハエ）に由来。",
  "synonyms": [],
  "derived": [
   "mosquito（蚊）"
  ],
  "dialogue": {
   "es": "— Hay una mosca en la cocina.\n— Voy a abrir la ventana.",
   "ja": "「台所にハエがいるんだ」「窓を開けるね」"
  }
 },
 "caracol": {
  "nuance": "「かたつむり」の基本語。「（渦巻き状の）貝殻、内耳の蝸牛」という意味にもなる。",
  "etymology": "ラテン語cochlea（螺旋、蝸牛）に由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Encontramos un caracol en el jardín.\n— Los niños siempre se emocionan con ellos.",
   "ja": "「庭でかたつむりを見つけたんだ」「子供たちはいつもそれにわくわくするよね」"
  }
 },
 "cisne": {
  "nuance": "「白鳥」の基本語。elegante（優雅な）という比喩でよく使われる。",
  "etymology": "ラテン語cygnus（白鳥）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Los cisnes en ese lago son hermosos.\n— Se ven muy elegantes nadando.",
   "ja": "「あの湖の白鳥はきれいだね」「泳いでいる姿がとてもエレガントに見えるね」"
  }
 },
 "paloma": {
  "nuance": "「ハト」の基本語。平和の象徴としてもよく使われる。",
  "etymology": "ラテン語palumbes（野生のハト）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Hay muchas palomas en la plaza.\n— Sí, la gente les da de comer.",
   "ja": "「広場にはたくさんのハトがいるね」「うん、人々が餌をあげているんだ」"
  }
 },
 "zorro": {
  "nuance": "「キツネ」の基本語。「ずる賢い人」という比喩的な意味にもなる。",
  "etymology": "起源は諸説あるが、アラビア語系の語とされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vimos un zorro cerca del bosque.\n— Qué suerte, no es común verlos.",
   "ja": "「森の近くでキツネを見たんだ」「幸運だね、見かけることはあまりないから」"
  }
 },
 "ciervo": {
  "nuance": "「シカ」の基本語。女性形はcierva。",
  "etymology": "ラテン語cervus（シカ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vimos un ciervo cruzando el camino.\n— Tuvimos que frenar de golpe.",
   "ja": "「道を横切るシカを見たんだ」「急ブレーキをかけなきゃいけなかったよ」"
  }
 },
 "canguro": {
  "nuance": "「カンガルー」の基本語。オーストラリア先住民言語由来。",
  "etymology": "オーストラリア先住民言語ガグーの語gangurruに由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Nunca he visto un canguro en persona.\n— Solo en Australia se pueden ver en libertad.",
   "ja": "「カンガルーを実際に見たことないんだ」「オーストラリアでしか野生では見られないよね」"
  }
 },
 "murciélago": {
  "nuance": "「コウモリ」の基本語。murus（壁）+ ciego（盲目の）から派生したとされる。",
  "etymology": "ラテン語mus caecus（盲目のネズミ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Hay murciélagos en esa cueva.\n— Debe ser fascinante verlos volar al atardecer.",
   "ja": "「あの洞窟にはコウモリがいるんだ」「夕暮れに飛ぶのを見るのはきっと魅力的だろうね」"
  }
 },
 "secadora": {
  "nuance": "「乾燥機」の基本語。secar（乾かす）から派生した語。",
  "etymology": "secar（乾かす）から派生した語。",
  "synonyms": [],
  "derived": [
   "secar（乾かす）"
  ],
  "dialogue": {
   "es": "— La secadora hace un ruido extraño.\n— Deberíamos revisarla.",
   "ja": "「乾燥機が変な音を立てているんだ」「確認した方がいいね」"
  }
 },
 "lavaplatos": {
  "nuance": "「食洗機」の基本語。lavar（洗う）+ platos（皿）の組み合わせ、単数複数同形。",
  "etymology": "lavar（洗う）+ platos（皿）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "lavar（洗う）",
   "plato（皿）"
  ],
  "dialogue": {
   "es": "— Pon los platos en el lavaplatos.\n— Ya lo hice.",
   "ja": "「お皿を食洗機に入れて」「もうやったよ」"
  }
 },
 "linterna": {
  "nuance": "「懐中電灯」の基本語。ギリシャ語ランタン由来。",
  "etymology": "ラテン語lanterna（ランプ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Trae una linterna, va a estar oscuro.\n— Ya la tengo en la mochila.",
   "ja": "「懐中電灯持ってきて、暗くなりそうだから」「もうリュックに入れてあるよ」"
  }
 },
 "fósforo": {
  "nuance": "「マッチ」の基本語。cerillo（マッチ、地域による）ともほぼ同義。「リン（元素）」という意味にもなる。",
  "etymology": "ギリシャ語phosphoros（光を運ぶもの）に由来。",
  "synonyms": [
   "cerillo（マッチ、地域による）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Tienes fósforos para encender la vela?\n— Sí, en la cocina.",
   "ja": "「ろうそくをつけるマッチある？」「うん、台所にあるよ」"
  }
 },
 "cepillo de dientes": {
  "nuance": "「歯ブラシ」の基本語。cepillo（ブラシ）+ de dientes（歯の）の組み合わせ。",
  "etymology": "cepillo（ブラシ）+ diente（歯）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "cepillo（ブラシ）",
   "diente（歯）"
  ],
  "dialogue": {
   "es": "— Olvidé mi cepillo de dientes en casa.\n— Puedes comprar uno en la farmacia.",
   "ja": "「歯ブラシを家に忘れちゃった」「薬局で買えるよ」"
  }
 },
 "plancha": {
  "nuance": "「アイロン」の基本語。「鉄板（料理用）」という意味にもなる（a la plancha＝鉄板焼きの）。",
  "etymology": "フランク語系の語planca（板）に由来。",
  "synonyms": [],
  "derived": [
   "planchar（アイロンをかける）"
  ],
  "dialogue": {
   "es": "— Necesito planchar esta camisa.\n— La plancha está en el armario.",
   "ja": "「このシャツにアイロンをかける必要があるんだ」「アイロンはクローゼットにあるよ」"
  }
 },
 "basurero": {
  "nuance": "「ゴミ箱」の基本語。basura（ゴミ）から派生した語。「ゴミ収集人」という意味にもなる。",
  "etymology": "basura（ゴミ）から派生した語。",
  "synonyms": [],
  "derived": [
   "basura（ゴミ）"
  ],
  "dialogue": {
   "es": "— El basurero está lleno.\n— Voy a sacar la basura.",
   "ja": "「ゴミ箱がいっぱいだよ」「ゴミを出すね」"
  }
 },
 "escoba": {
  "nuance": "「ほうき」の基本語。barrer con la escoba（ほうきで掃く）はよく使う組み合わせ。",
  "etymology": "ラテン語scopa（小枝の束）に由来。",
  "synonyms": [],
  "derived": [
   "barrer（掃く）"
  ],
  "dialogue": {
   "es": "— ¿Dónde está la escoba?\n— En el clóset de limpieza.",
   "ja": "「ほうきどこにある？」「掃除用具入れにあるよ」"
  }
 },
 "detergente": {
  "nuance": "「洗剤」の基本語。detergente para ropa（洗濯用洗剤）、detergente para platos（食器用洗剤）のように使う。",
  "etymology": "ラテン語detergere（拭き取る）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Se acabó el detergente.\n— Voy a comprar más.",
   "ja": "「洗剤がなくなったよ」「もっと買ってくるね」"
  }
 },
 "matiz": {
  "nuance": "「ニュアンス」の基本語。matizar（ニュアンスを加える）から派生した語。",
  "etymology": "ラテン語mateola（打つ道具→色調から派生）に由来するとされる。",
  "synonyms": [],
  "derived": [
   "matizar（ニュアンスを加える）"
  ],
  "dialogue": {
   "es": "— Hay un matiz importante en lo que dijo.\n— Tienes razón, no es tan simple.",
   "ja": "「彼が言ったことには重要なニュアンスがあるんだ」「その通りだね、そんなに単純じゃないよね」"
  }
 },
 "trasfondo": {
  "nuance": "「背景」の基本語。tras（後ろに）+ fondo（底、背景）の組み合わせ。",
  "etymology": "tras（後ろに）+ fondo（底）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "fondo（底、背景）"
  ],
  "dialogue": {
   "es": "— Hay un trasfondo político en esta decisión.\n— No me sorprende.",
   "ja": "「この決定には政治的な背景があるんだ」「驚かないよ」"
  }
 },
 "revista": {
  "nuance": "「雑誌」の基本語。revisar（見直す）と同語源。",
  "etymology": "revisar（見直す）から派生した語。",
  "synonyms": [],
  "derived": [
   "revisar（見直す）"
  ],
  "dialogue": {
   "es": "— Compré una revista para el viaje.\n— ¿De qué tema?",
   "ja": "「旅行用に雑誌を買ったんだ」「どんなテーマの？」"
  }
 },
 "anuncio": {
  "nuance": "「広告、お知らせ」の基本語。anunciar（発表する、宣伝する）から派生した語。",
  "etymology": "anunciar（発表する）から派生した語。",
  "synonyms": [],
  "derived": [
   "anunciar（発表する）"
  ],
  "dialogue": {
   "es": "— Vi un anuncio interesante en la tele.\n— ¿De qué producto?",
   "ja": "「テレビで面白い広告を見たんだ」「どんな商品の？」"
  }
 },
 "titular": {
  "nuance": "「見出し」の基本語。「保有者」「タイトルをつける」という動詞の意味にもなる。",
  "etymology": "título（タイトル）から派生した語。",
  "synonyms": [],
  "derived": [
   "título（タイトル）"
  ],
  "dialogue": {
   "es": "— El titular de esa noticia es muy llamativo.\n— Sí, capta bien la atención.",
   "ja": "「あのニュースの見出しはとても目を引くね」「うん、注意をよく引くよね」"
  }
 },
 "qué padre": {
  "nuance": "「かっこいい！」「いいね！」というメキシコの口語表現。padreは本来「父」だが、口語では「いいね、すごい」という意味の形容詞にもなる。chidoとほぼ同義。",
  "etymology": "padre（父）が口語で「素晴らしい」の意味に転じたとされる。",
  "synonyms": [
   "chido（いいね、口語）"
  ],
  "derived": [
   "padre（父）"
  ],
  "dialogue": {
   "es": "— ¡Qué padre está tu carro nuevo!\n— Gracias, me encanta.",
   "ja": "「君の新しい車すごいいいね！」「ありがとう、大好きなんだ」"
  }
 },
 "a ver qué pasa": {
  "nuance": "「どうなるか見てみよう」の基本フレーズ。結果を待つときの表現。",
  "etymology": "a ver（見てみよう）+ qué pasa（何が起こる）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "pasar（起こる）"
  ],
  "dialogue": {
   "es": "— No sé si va a funcionar.\n— A ver qué pasa.",
   "ja": "「うまくいくかわからないな」「どうなるか見てみよう」"
  }
 },
 "lo tengo bajo control": {
  "nuance": "「ちゃんとコントロールできている」の基本フレーズ。状況を管理できていると伝える表現。",
  "etymology": "tener（持つ）+ bajo control（コントロールの下に）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "control（コントロール）"
  ],
  "dialogue": {
   "es": "— ¿Necesitas ayuda con eso?\n— No, lo tengo bajo control.",
   "ja": "「それ手伝い必要？」「いや、ちゃんとコントロールできているよ」"
  }
 },
 "estoy a punto de salir": {
  "nuance": "「ちょうど出かけるところ」の基本フレーズ。estar a punto de+不定詞（まさに〜しようとしている）の実例。",
  "etymology": "estar a punto de（まさに〜しようとしている）+ salir（出る）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "salir（出る）"
  ],
  "dialogue": {
   "es": "— ¿Ya vienes?\n— Sí, estoy a punto de salir.",
   "ja": "「もう来る？」「うん、ちょうど出かけるところだよ」"
  }
 },
 "cuenta conmigo": {
  "nuance": "「頼ってね」「私も参加するよ」の基本フレーズ。協力・参加を申し出るときの表現。",
  "etymology": "contar con（頼る、当てにする）+ conmigo（私と）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "contar（数える、頼る）"
  ],
  "dialogue": {
   "es": "— Vamos a organizar una fiesta.\n— ¡Cuenta conmigo!",
   "ja": "「パーティーを企画しようと思うんだ」「私も参加するよ！」"
  }
 },
 "ya era hora": {
  "nuance": "「やっとだね」の基本フレーズ。待ち望んでいたことがようやく起きたときの表現。",
  "etymology": "ya（もう）+ era hora（時間だった）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "hora（時間）"
  ],
  "dialogue": {
   "es": "— Por fin terminé el proyecto.\n— ¡Ya era hora!",
   "ja": "「ついにプロジェクトが終わったよ」「やっとだね！」"
  }
 },
 "me da igual": {
  "nuance": "「どっちでもいい」の基本フレーズ。dar igual（同じことだ）から派生。",
  "etymology": "dar（与える）+ igual（同じ）の組み合わせ。",
  "synonyms": [
   "no me importa（気にしない）"
  ],
  "derived": [
   "igual（同じ）"
  ],
  "dialogue": {
   "es": "— ¿Quieres ir al cine o quedarte en casa?\n— Me da igual.",
   "ja": "「映画に行きたい？それとも家にいたい？」「どっちでもいいよ」"
  }
 },
 "vamos al grano": {
  "nuance": "「本題に入ろう」の基本フレーズ。直訳は「粒に行こう」で、余計な話を省いて核心に入ることを表す。",
  "etymology": "ir（行く）+ al grano（粒に、核心に）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "grano（粒）"
  ],
  "dialogue": {
   "es": "— Tenemos poco tiempo, vamos al grano.\n— De acuerdo, el problema principal es el presupuesto.",
   "ja": "「時間が少ないから、本題に入ろう」「わかった、主な問題は予算だよ」"
  }
 },
 "voy para allá": {
  "nuance": "「今そっちに向かってるよ」の基本フレーズ。移動中を伝える表現。",
  "etymology": "ir（行く）+ para allá（そちらへ）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "allá（あちら）"
  ],
  "dialogue": {
   "es": "— ¿Cuándo llegas?\n— Ya voy para allá.",
   "ja": "「いつ着く？」「もうそっちに向かっているよ」"
  }
 },
 "profundizar": {
  "nuance": "「深く掘り下げる」の基本語。profundo（深い）から派生した語。",
  "etymology": "profundo（深い）から派生した語。",
  "synonyms": [],
  "derived": [
   "profundo（深い）"
  ],
  "dialogue": {
   "es": "— Me gustaría profundizar en este tema.\n— Podemos hablar más al respecto.",
   "ja": "「このテーマについて深く掘り下げたいんだ」「それについてもっと話せるよ」"
  }
 },
 "plantear": {
  "nuance": "「提起する」の基本語。plantear una pregunta（質問を投げかける）はよく使う組み合わせ。",
  "etymology": "planta（植物、根を張る）から派生した語。",
  "synonyms": [],
  "derived": [
   "planta（植物、階）"
  ],
  "dialogue": {
   "es": "— Quiero plantear un problema importante.\n— Adelante, te escuchamos.",
   "ja": "「重要な問題を提起したいんだ」「どうぞ、聞くよ」"
  }
 },
 "abordar": {
  "nuance": "「取り組む」の基本語。「（乗り物に）乗り込む」という意味にもなる。",
  "etymology": "a（〜へ）+ bordo（船縁）の組み合わせに由来。",
  "synonyms": [],
  "derived": [
   "bordo（船縁）"
  ],
  "dialogue": {
   "es": "— Vamos a abordar este problema mañana.\n— Buena idea, necesitamos un plan.",
   "ja": "「明日この問題に取り組もう」「いい考えだね、計画が必要だし」"
  }
 },
 "reflexionar": {
  "nuance": "「熟考する」の基本語。reflejar（反射する）と同語源。",
  "etymology": "ラテン語reflectere（曲げ戻す→反射する、内省する）に由来。",
  "synonyms": [],
  "derived": [
   "reflejo（反射）"
  ],
  "dialogue": {
   "es": "— Necesito reflexionar sobre esta decisión.\n— Tómate el tiempo que necesites.",
   "ja": "「この決断についてじっくり考える必要があるんだ」「必要な時間をかけていいよ」"
  }
 },
 "reunir": {
  "nuance": "「集める」の基本語。reunirse（集まる、再帰形）もよく使われる。",
  "etymology": "re（再び）+ unir（結びつける）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "unir（結びつける）",
   "reunión（会議、集まり）"
  ],
  "dialogue": {
   "es": "— Necesitamos reunir más información.\n— Estoy de acuerdo, esto no es suficiente.",
   "ja": "「もっと情報を集める必要があるね」「同感だよ、これでは十分じゃない」"
  }
 },
 "compartir": {
  "nuance": "「共有する」の基本語。compartir con（〜と分かち合う）という組み合わせもよく使う。",
  "etymology": "con（一緒に）+ partir（分ける）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "partir（分ける）"
  ],
  "dialogue": {
   "es": "— ¿Quieres compartir el postre?\n— Claro, se ve delicioso.",
   "ja": "「デザートシェアする？」「もちろん、美味しそうだね」"
  }
 },
 "canal": {
  "nuance": "「チャンネル」の基本語。「運河」という意味にもなる。",
  "etymology": "ラテン語canalis（水路）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué canal estás viendo?\n— El de noticias.",
   "ja": "「何のチャンネル見てるの？」「ニュースのだよ」"
  }
 },
 "transmisión": {
  "nuance": "「放送」の基本語。transmitir（放送する、伝える）から派生した語。",
  "etymology": "transmitir（伝える）から派生した語。",
  "synonyms": [],
  "derived": [
   "transmitir（放送する）"
  ],
  "dialogue": {
   "es": "— La transmisión del partido empieza a las ocho.\n— Voy a prender la tele.",
   "ja": "「試合の中継は8時に始まるよ」「テレビつけるね」"
  }
 },
 "código qr": {
  "nuance": "「QRコード」の基本語。código（コード）+ QR（Quick Responseの略）の組み合わせ。",
  "etymology": "英語Quick Response（速い反応）の略。",
  "synonyms": [],
  "derived": [
   "código（コード）"
  ],
  "dialogue": {
   "es": "— Escanea el código QR para ver el menú.\n— Ya lo hice, se ve bien.",
   "ja": "「メニューを見るのにQRコードをスキャンして」「もうやったよ、良さそうだね」"
  }
 },
 "asistente virtual": {
  "nuance": "「バーチャルアシスタント」の基本語。asistente（アシスタント）+ virtual（仮想の）の組み合わせ。",
  "etymology": "asistir（助ける）+ virtual（仮想の）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "asistir（助ける）"
  ],
  "dialogue": {
   "es": "— Uso el asistente virtual para poner alarmas.\n— Yo también, es muy práctico.",
   "ja": "「アラームを設定するのにバーチャルアシスタントを使っているんだ」「私もだよ、とても便利だよね」"
  }
 },
 "gorro": {
  "nuance": "「ニット帽」の基本語。sombrero（帽子全般、つばのある帽子）とは区別される。",
  "etymology": "ラテン語系の語gurra（帽子）に由来するとされる。",
  "synonyms": [],
  "derived": [
   "gorra（キャップ）"
  ],
  "dialogue": {
   "es": "— Ponte el gorro, hace mucho frío.\n— Buena idea.",
   "ja": "「ニット帽かぶって、とても寒いから」「いい考えだね」"
  }
 },
 "impermeable": {
  "nuance": "「レインコート」の基本語。im（否定）+ permeable（透過性の）の組み合わせ、「水を通さない」が原義。",
  "etymology": "im（否定）+ permeable（透過性の）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "permeable（透過性の）"
  ],
  "dialogue": {
   "es": "— Necesito un impermeable para la temporada de lluvias.\n— Yo tengo uno extra, te lo puedo prestar.",
   "ja": "「雨季用にレインコートが必要なんだ」「私は予備を持っているから、貸してあげるよ」"
  }
 },
 "suéter": {
  "nuance": "「セーター」の基本語。英語sweaterのスペイン語表記。",
  "etymology": "英語sweater（汗をかかせるもの）に由来。",
  "synonyms": [
   "chompa（セーター、一部地域）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Me encanta este suéter de lana.\n— Se ve muy calientito.",
   "ja": "「このウールのセーター気に入っているんだ」「とても暖かそうだね」"
  }
 },
 "medias": {
  "nuance": "「タイツ、ストッキング」の基本語。地域によってcalcetines（靴下）を指すこともある（地域差）。",
  "etymology": "media（半分の）から派生、元々は「膝までの靴下」を指した。",
  "synonyms": [],
  "derived": [
   "medio（半分の）"
  ],
  "dialogue": {
   "es": "— Se me rompieron las medias.\n— Tengo un par extra si quieres.",
   "ja": "「タイツが破れちゃった」「予備が一足あるからよければ」"
  }
 },
 "gorra": {
  "nuance": "「キャップ」の基本語。野球帽のような、つばのある帽子を指す。gorro（ニット帽）とは形状が違う。",
  "etymology": "gorro（帽子）から派生した語。",
  "synonyms": [],
  "derived": [
   "gorro（ニット帽）"
  ],
  "dialogue": {
   "es": "— Me gusta tu gorra de béisbol.\n— Gracias, es de mi equipo favorito.",
   "ja": "「君の野球帽好きだな」「ありがとう、好きなチームのなんだ」"
  }
 },
 "glaciar": {
  "nuance": "「氷河」の基本語。hielo（氷）と関連するが別語源。",
  "etymology": "フランス語glacier（氷河）に由来。",
  "synonyms": [],
  "derived": [
   "glacial（氷河の、極寒の）"
  ],
  "dialogue": {
   "es": "— Los glaciares se están derritiendo rápido.\n— Es una consecuencia del calentamiento global.",
   "ja": "「氷河が急速に溶けているんだ」「地球温暖化の影響だよね」"
  }
 },
 "oasis": {
  "nuance": "「オアシス」の基本語。単数複数同形。",
  "etymology": "エジプト語系の語に由来、ギリシャ語oasisを経由。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Encontramos un oasis en medio del desierto.\n— Debió ser un alivio.",
   "ja": "「砂漠のど真ん中でオアシスを見つけたんだ」「きっと安堵しただろうね」"
  }
 },
 "energía solar": {
  "nuance": "「太陽エネルギー」の基本語。energía（エネルギー）+ solar（太陽の）の組み合わせ。",
  "etymology": "sol（太陽）から派生した語。",
  "synonyms": [],
  "derived": [
   "sol（太陽）"
  ],
  "dialogue": {
   "es": "— Instalamos paneles de energía solar.\n— Qué buena inversión a largo plazo.",
   "ja": "「太陽エネルギーのパネルを設置したんだ」「長期的にいい投資だね」"
  }
 },
 "paisaje": {
  "nuance": "「景色」の基本語。país（国）から派生した語。",
  "etymology": "país（国）から派生した語。",
  "synonyms": [],
  "derived": [
   "país（国）"
  ],
  "dialogue": {
   "es": "— El paisaje desde aquí es hermoso.\n— Vale la pena tomar una foto.",
   "ja": "「ここからの景色は美しいね」「写真撮る価値があるね」"
  }
 },
 "matrícula": {
  "nuance": "「授業料、入学登録」の基本語。「ナンバープレート」という意味にもなる（地域による）。",
  "etymology": "ラテン語matricula（登録簿）に由来。",
  "synonyms": [],
  "derived": [
   "matricular（登録する）"
  ],
  "dialogue": {
   "es": "— La matrícula subió este año.\n— Sí, cada vez es más cara.",
   "ja": "「今年授業料が上がったんだ」「うん、どんどん高くなっているよね」"
  }
 },
 "pizarrón": {
  "nuance": "「黒板」の基本語。ラテンアメリカで一般的（スペインではpizarraが一般的、地域差）。",
  "etymology": "pizarra（黒板、スレート石）から派生した語。",
  "synonyms": [
   "pizarra（黒板、スペイン）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— El maestro escribió la tarea en el pizarrón.\n— Voy a anotarla.",
   "ja": "「先生が黒板に宿題を書いたんだ」「メモするね」"
  }
 },
 "grapadora": {
  "nuance": "「ホッチキス」の基本語。grapa（ホッチキスの針）から派生した語。",
  "etymology": "grapa（ホッチキスの針、留め金）から派生した語。",
  "synonyms": [],
  "derived": [
   "grapa（留め金）"
  ],
  "dialogue": {
   "es": "— ¿Tienes una grapadora que me prestes?\n— Sí, aquí tienes.",
   "ja": "「貸せるホッチキスある？」「うん、はいどうぞ」"
  }
 },
 "probador": {
  "nuance": "「試着室」の基本語。probar（試す）から派生した語。",
  "etymology": "probar（試す）から派生した語。",
  "synonyms": [],
  "derived": [
   "probar（試す）"
  ],
  "dialogue": {
   "es": "— ¿Dónde está el probador?\n— Al fondo, a la derecha.",
   "ja": "「試着室はどこですか？」「奥の右側です」"
  }
 },
 "etiqueta": {
  "nuance": "「タグ」の基本語。「エチケット、礼儀作法」という意味にもなる。",
  "etymology": "フランス語étiquette（貼り紙）に由来。",
  "synonyms": [],
  "derived": [
   "etiquetar（タグをつける）"
  ],
  "dialogue": {
   "es": "— Olvidé quitar la etiqueta.\n— No te preocupes, se ve bien igual.",
   "ja": "「タグを取るの忘れちゃった」「気にしないで、それでも大丈夫に見えるよ」"
  }
 },
 "garantía": {
  "nuance": "「保証」の基本語。tener garantía（保証がある）はよく使う組み合わせ。",
  "etymology": "フランス語garantie（保証）に由来。",
  "synonyms": [],
  "derived": [
   "garantizar（保証する）"
  ],
  "dialogue": {
   "es": "— ¿Este producto tiene garantía?\n— Sí, por un año.",
   "ja": "「この商品は保証がありますか？」「はい、1年間です」"
  }
 },
 "reembolso": {
  "nuance": "「返金」の基本語。re（再び）+ embolsar（財布に入れる）の組み合わせ。",
  "etymology": "embolsar（財布に入れる）から派生した語。",
  "synonyms": [],
  "derived": [
   "bolsa（袋、財布）"
  ],
  "dialogue": {
   "es": "— Solicité un reembolso por el producto defectuoso.\n— ¿Cuánto tiempo tardará?",
   "ja": "「不良品の返金を申請したんだ」「どれくらい時間かかりそう？」"
  }
 },
 "envío": {
  "nuance": "「配送」の基本語。enviar（送る）から派生した語。envío gratis（送料無料）はよく使う組み合わせ。",
  "etymology": "enviar（送る）から派生した語。",
  "synonyms": [],
  "derived": [
   "enviar（送る）"
  ],
  "dialogue": {
   "es": "— El envío tarda tres días hábiles.\n— Perfecto, no hay prisa.",
   "ja": "「配送は3営業日かかります」「大丈夫、急いでいないので」"
  }
 },
 "vecindad": {
  "nuance": "「近隣」の基本語。vecino（隣人）から派生した語。",
  "etymology": "vecino（隣人）から派生した語。",
  "synonyms": [],
  "derived": [
   "vecino（隣人）"
  ],
  "dialogue": {
   "es": "— La vecindad es muy tranquila.\n— Qué bien, es importante para vivir a gusto.",
   "ja": "「この近隣はとても静かなんだ」「いいね、快適に暮らすには大事なことだよね」"
  }
 },
 "igualdad": {
  "nuance": "「平等」の基本語。igual（同じ）から派生した語。",
  "etymology": "igual（同じ）から派生した語。",
  "synonyms": [],
  "derived": [
   "igual（同じ）"
  ],
  "dialogue": {
   "es": "— Debemos luchar por la igualdad.\n— Estoy totalmente de acuerdo.",
   "ja": "「平等のために戦うべきだよね」「まったく同感だよ」"
  }
 },
 "diversidad": {
  "nuance": "「多様性」の基本語。diverso（多様な）から派生した語。",
  "etymology": "diverso（多様な）から派生した語。",
  "synonyms": [],
  "derived": [
   "diverso（多様な）"
  ],
  "dialogue": {
   "es": "— Esta ciudad tiene mucha diversidad cultural.\n— Es una de sus mejores características.",
   "ja": "「この街はとても文化的多様性があるよね」「それが最高の特徴の一つだよね」"
  }
 },
 "flauta": {
  "nuance": "「フルート」の基本語。",
  "etymology": "ラテン語flare（吹く）に由来するとされる。",
  "synonyms": [],
  "derived": [
   "flautista（フルート奏者）"
  ],
  "dialogue": {
   "es": "— Toco la flauta desde niña.\n— Debe sonar hermoso.",
   "ja": "「子供の頃からフルートを吹いているんだ」「きっと美しい音がするんだろうね」"
  }
 },
 "saxofón": {
  "nuance": "「サックス」の基本語。発明者ベルギー人アドルフ・サックスに由来。",
  "etymology": "発明者アドルフ・サックス（Adolphe Sax）の名前に由来。",
  "synonyms": [],
  "derived": [
   "saxofonista（サックス奏者）"
  ],
  "dialogue": {
   "es": "— El saxofón le da mucho estilo al jazz.\n— Es mi instrumento favorito.",
   "ja": "「サックスはジャズにとても味を与えているよね」「私の好きな楽器なんだ」"
  }
 },
 "clarinete": {
  "nuance": "「クラリネット」の基本語。",
  "etymology": "イタリア語clarinetto（小さなラッパ）に由来。",
  "synonyms": [],
  "derived": [
   "clarinetista（クラリネット奏者）"
  ],
  "dialogue": {
   "es": "— Mi hijo estudia clarinete en la escuela.\n— Qué bonito instrumento.",
   "ja": "「私の息子は学校でクラリネットを学んでいるんだ」「素敵な楽器だね」"
  }
 },
 "actriz": {
  "nuance": "「女優」の基本語。actor（俳優）の女性形。",
  "etymology": "actor（俳優）の女性形。",
  "synonyms": [],
  "derived": [
   "actor（俳優）",
   "actuar（演じる）"
  ],
  "dialogue": {
   "es": "— Esa actriz es muy talentosa.\n— Sí, ganó varios premios.",
   "ja": "「あの女優はとても才能があるよね」「うん、いくつも賞を取ったんだ」"
  }
 },
 "ecuador": {
  "nuance": "「エクアドル」の基本語。赤道（equator）を意味するスペイン語から国名がついた。",
  "etymology": "ecuador（赤道）に由来、赤道直下の国であることから。",
  "synonyms": [],
  "derived": [
   "ecuatoriano（エクアドルの、エクアドル人）"
  ],
  "dialogue": {
   "es": "— Ecuador tiene las Islas Galápagos.\n— Me encantaría ver la fauna única de ahí.",
   "ja": "「エクアドルにはガラパゴス諸島があるんだよね」「そこの独特な動物相を見てみたいな」"
  }
 },
 "bolivia": {
  "nuance": "「ボリビア」の基本語。独立の英雄シモン・ボリバルに由来。",
  "etymology": "独立の指導者シモン・ボリバル（Simón Bolívar）の名前に由来。",
  "synonyms": [],
  "derived": [
   "boliviano（ボリビアの、ボリビア人）"
  ],
  "dialogue": {
   "es": "— Bolivia tiene el Salar de Uyuni.\n— He visto fotos, se ve como un espejo gigante.",
   "ja": "「ボリビアにはウユニ塩湖があるんだよね」「写真見たことあるよ、巨大な鏡みたいだね」"
  }
 },
 "uruguay": {
  "nuance": "「ウルグアイ」の基本語。先住民言語グアラニー語由来。",
  "etymology": "グアラニー語uruguáy（鳥の川）に由来するとされる。",
  "synonyms": [],
  "derived": [
   "uruguayo（ウルグアイの、ウルグアイ人）"
  ],
  "dialogue": {
   "es": "— Uruguay tiene playas muy bonitas.\n— Y buen fútbol también.",
   "ja": "「ウルグアイはとてもきれいなビーチがあるよね」「サッカーもいいよね」"
  }
 },
 "estación de policía": {
  "nuance": "「警察署」の基本語。estación（駅、局）+ de policía（警察の）の組み合わせ。",
  "etymology": "estación（局）+ policía（警察）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "policía（警察）"
  ],
  "dialogue": {
   "es": "— Hay que reportarlo en la estación de policía.\n— Vamos ahora mismo.",
   "ja": "「それは警察署に届け出ないとね」「今すぐ行こう」"
  }
 },
 "rugby": {
  "nuance": "「ラグビー」の基本語。イギリスの町ラグビーに由来。",
  "etymology": "イギリスの町Rugbyに由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Nunca he visto un partido de rugby.\n— Es un deporte muy físico.",
   "ja": "「ラグビーの試合見たことないんだ」「とても体を使うスポーツだよ」"
  }
 },
 "rectángulo": {
  "nuance": "「長方形」の基本語。recto（まっすぐな）+ ángulo（角）の組み合わせ。",
  "etymology": "recto（直角の）+ ángulo（角）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "ángulo（角）"
  ],
  "dialogue": {
   "es": "— Ese terreno tiene forma de rectángulo.\n— Perfecto para construir una casa.",
   "ja": "「その土地は長方形の形をしているんだ」「家を建てるのに完璧だね」"
  }
 },
 "centímetro": {
  "nuance": "「センチメートル」の基本語。centi（100分の1）+ metro（メートル）の組み合わせ。",
  "etymology": "ラテン語centum（100）+ metro（メートル）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "metro（メートル）"
  ],
  "dialogue": {
   "es": "— Mide unos treinta centímetros.\n— Es más grande de lo que pensaba.",
   "ja": "「約30センチメートルだよ」「思っていたより大きいね」"
  }
 },
 "kilómetro": {
  "nuance": "「キロメートル」の基本語。kilo（1000）+ metro（メートル）の組み合わせ。",
  "etymology": "ギリシャ語khilioi（1000）+ metro（メートル）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "metro（メートル）"
  ],
  "dialogue": {
   "es": "— Vivo a dos kilómetros de aquí.\n— No está tan lejos.",
   "ja": "「ここから2キロのところに住んでいるよ」「そんなに遠くないね」"
  }
 },
 "litro": {
  "nuance": "「リットル」の基本語。容量の基本単位。",
  "etymology": "フランス語litre（容量単位）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Necesito un litro de leche.\n— Hay en el refrigerador.",
   "ja": "「牛乳1リットル必要なんだ」「冷蔵庫にあるよ」"
  }
 },
 "kilogramo": {
  "nuance": "「キログラム」の基本語。口語ではkiloと短縮されることも多い。",
  "etymology": "kilo（1000）+ gramo（グラム）の組み合わせ。",
  "synonyms": [
   "kilo（キロ、口語）"
  ],
  "derived": [
   "gramo（グラム）"
  ],
  "dialogue": {
   "es": "— Compré dos kilogramos de manzanas.\n— Suficiente para hacer un pastel.",
   "ja": "「りんごを2キログラム買ったんだ」「ケーキを作るのに十分だね」"
  }
 },
 "par": {
  "nuance": "「一組」の基本語。un par de（〜のペア、口語で「いくつかの」という意味にもなる）。",
  "etymology": "ラテン語par（等しい、対）に由来。",
  "synonyms": [],
  "derived": [
   "parear（対にする）"
  ],
  "dialogue": {
   "es": "— Compré un par de zapatos nuevos.\n— ¿De qué color?",
   "ja": "「新しい靴を一足買ったんだ」「何色？」"
  }
 },
 "doble": {
  "nuance": "「二倍」の基本語。「（映画の）吹き替え、スタントマン」という意味にもなる。",
  "etymology": "ラテン語duplus（二倍の）に由来。",
  "synonyms": [],
  "derived": [
   "duplicar（二倍にする）"
  ],
  "dialogue": {
   "es": "— Esta receta necesita el doble de harina.\n— Voy a medir de nuevo.",
   "ja": "「このレシピは倍の小麦粉が必要だよ」「もう一度量るね」"
  }
 },
 "rinoceronte": {
  "nuance": "「サイ」の基本語。ギリシャ語「鼻の角」に由来。",
  "etymology": "ギリシャ語rhis（鼻）+ keras（角）の組み合わせ。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El rinoceronte está en peligro de extinción.\n— Es muy triste, hay que protegerlos.",
   "ja": "「サイは絶滅の危機に瀕しているんだ」「とても悲しいね、守らないと」"
  }
 },
 "hipopótamo": {
  "nuance": "「カバ」の基本語。ギリシャ語「川の馬」に由来。",
  "etymology": "ギリシャ語hippos（馬）+ potamos（川）の組み合わせ。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El hipopótamo pasa la mayor parte del día en el agua.\n— Son animales sorprendentemente rápidos.",
   "ja": "「カバは一日の大半を水の中で過ごすんだ」「意外にも足が速い動物なんだよ」"
  }
 },
 "camello": {
  "nuance": "「ラクダ」の基本語。",
  "etymology": "ラテン語camelus（ラクダ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Montamos un camello en el desierto.\n— Debió ser una experiencia única.",
   "ja": "「砂漠でラクダに乗ったんだ」「きっと特別な体験だったんだろうね」"
  }
 },
 "panda": {
  "nuance": "「パンダ」の基本語。ネパール語系の言語由来。",
  "etymology": "ネパール語系の語ponyaに由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Los pandas comen bambú casi todo el día.\n— Son muy adorables.",
   "ja": "「パンダはほぼ一日中竹を食べているんだ」「とても愛らしいよね」"
  }
 },
 "koala": {
  "nuance": "「コアラ」の基本語。オーストラリア先住民言語由来。",
  "etymology": "オーストラリア先住民言語の語に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Los koalas duermen casi veinte horas al día.\n— ¡Qué vida tan relajada!",
   "ja": "「コアラは1日に20時間近く眠るんだって」「なんてリラックスした生活なんだ！」"
  }
 },
 "ardilla": {
  "nuance": "「リス」の基本語。",
  "etymology": "ラテン語sciurellus（小さなリス）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Hay una ardilla en el jardín.\n— Se está comiendo las nueces.",
   "ja": "「庭にリスがいるよ」「木の実を食べているんだ」"
  }
 },
 "traje formal": {
  "nuance": "「フォーマルスーツ」の基本語。traje（スーツ）+ formal（正式な）の組み合わせ。",
  "etymology": "traer（着せる）から派生した語。",
  "synonyms": [],
  "derived": [
   "traer（持ってくる）"
  ],
  "dialogue": {
   "es": "— Necesito un traje formal para la boda.\n— Vamos de compras este fin de semana.",
   "ja": "「結婚式用にフォーマルスーツが必要なんだ」「今週末買い物に行こう」"
  }
 },
 "bata": {
  "nuance": "「ガウン」の基本語。医師の白衣（bata blanca）という意味にもなる。",
  "etymology": "起源は諸説あるが、俗ラテン語系の語とされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Me pongo la bata después de bañarme.\n— Es muy cómoda.",
   "ja": "「お風呂の後にガウンを着るんだ」「とても快適だよね」"
  }
 },
 "circo": {
  "nuance": "「サーカス」の基本語。ラテン語「円形の場所」に由来。",
  "etymology": "ラテン語circus（円形の場所）に由来。",
  "synonyms": [],
  "derived": [
   "circular（円形の）"
  ],
  "dialogue": {
   "es": "— Llevamos a los niños al circo.\n— Les debió encantar.",
   "ja": "「子供たちをサーカスに連れて行ったんだ」「きっと気に入ったんだろうね」"
  }
 },
 "pulmón": {
  "nuance": "「肺」の基本語。",
  "etymology": "ラテン語pulmo（肺）に由来。",
  "synonyms": [],
  "derived": [
   "pulmonía（肺炎）"
  ],
  "dialogue": {
   "es": "— Fumar daña mucho los pulmones.\n— Por eso decidí dejarlo.",
   "ja": "「喫煙は肺にとても悪影響を与えるんだ」「だからやめる決心をしたんだ」"
  }
 },
 "hígado": {
  "nuance": "「肝臓」の基本語。",
  "etymology": "ラテン語ficatum（イチジクで育てた肝臓→肝臓の意味に転じた）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El hígado filtra las toxinas del cuerpo.\n— Es un órgano muy importante.",
   "ja": "「肝臓は体の毒素を濾過するんだ」「とても重要な臓器だよね」"
  }
 },
 "estación de bomberos": {
  "nuance": "「消防署」の基本語。estación（局）+ de bomberos（消防士の）の組み合わせ。",
  "etymology": "bombero（消防士）から派生した語。",
  "synonyms": [],
  "derived": [
   "bombero（消防士）"
  ],
  "dialogue": {
   "es": "— La estación de bomberos está a dos cuadras.\n— Qué bueno que esté tan cerca.",
   "ja": "「消防署は2ブロック先にあるよ」「そんなに近くにあってよかったね」"
  }
 },
 "planetario": {
  "nuance": "「プラネタリウム」の基本語。planeta（惑星）から派生した語。",
  "etymology": "planeta（惑星）から派生した語。",
  "synonyms": [],
  "derived": [
   "planeta（惑星）"
  ],
  "dialogue": {
   "es": "— Vamos al planetario este sábado.\n— Me encantan las estrellas.",
   "ja": "「今週土曜日プラネタリウムに行こう」「星が大好きなんだ」"
  }
 },
 "observatorio": {
  "nuance": "「天文台」の基本語。observar（観察する）から派生した語。",
  "etymology": "observar（観察する）から派生した語。",
  "synonyms": [],
  "derived": [
   "observar（観察する）"
  ],
  "dialogue": {
   "es": "— Visitamos un observatorio en las montañas.\n— ¿Pudieron ver algo especial?",
   "ja": "「山の天文台を訪れたんだ」「何か特別なもの見られた？」"
  }
 },
 "bolsa": {
  "nuance": "「袋」の基本語。「株式市場」という意味にもなる（la bolsa de valores）。",
  "etymology": "ラテン語bursa（袋）に由来。",
  "synonyms": [],
  "derived": [
   "bolsillo（ポケット）"
  ],
  "dialogue": {
   "es": "— ¿Necesitas una bolsa?\n— No, gracias, traigo la mía.",
   "ja": "「袋必要ですか？」「いいえ、大丈夫です、自分の持ってきているので」"
  }
 },
 "cronómetro": {
  "nuance": "「ストップウォッチ」の基本語。crono（時間）+ metro（測定）の組み合わせ。",
  "etymology": "ギリシャ語khronos（時間）+ metron（測定）の組み合わせ。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Usa el cronómetro para medir el tiempo.\n— Buena idea para el entrenamiento.",
   "ja": "「時間を測るのにストップウォッチを使って」「トレーニングにいい考えだね」"
  }
 },
 "centro": {
  "nuance": "「中心」の基本語。「繁華街」という意味にもなる（el centro＝街の中心地）。",
  "etymology": "ラテン語centrum（中心）に由来。",
  "synonyms": [],
  "derived": [
   "central（中心の）"
  ],
  "dialogue": {
   "es": "— Vamos al centro este fin de semana.\n— Hay muchas tiendas ahí.",
   "ja": "「今週末中心街に行こう」「そこにはたくさんの店があるよね」"
  }
 },
 "candado": {
  "nuance": "「南京錠」の基本語。",
  "etymology": "ラテン語catenatus（鎖でつながれた）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Pon un candado en la puerta del garaje.\n— Buena idea, para más seguridad.",
   "ja": "「ガレージのドアに南京錠をつけて」「いい考えだね、より安全のために」"
  }
 },
 "manguera": {
  "nuance": "「ホース」の基本語。",
  "etymology": "起源は諸説あるが、アラビア語系の語とされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Usa la manguera para regar el jardín.\n— Ya casi termino.",
   "ja": "「庭に水をやるのにホースを使って」「もうすぐ終わるよ」"
  }
 },
 "marcador": {
  "nuance": "「マーカー」の基本語。「スコアボード、得点」という意味にもなる。",
  "etymology": "marcar（印をつける）から派生した語。",
  "synonyms": [],
  "derived": [
   "marcar（印をつける）"
  ],
  "dialogue": {
   "es": "— ¿Tienes un marcador amarillo?\n— Sí, aquí tienes.",
   "ja": "「黄色いマーカーある？」「うん、はいどうぞ」"
  }
 },
 "sello": {
  "nuance": "「切手、印」の基本語。sellar（封をする、印を押す）から派生した語。",
  "etymology": "ラテン語sigillum（小さな印）に由来。",
  "synonyms": [],
  "derived": [
   "sellar（封をする）"
  ],
  "dialogue": {
   "es": "— Necesito un sello para esta carta.\n— Hay en el cajón del escritorio.",
   "ja": "「この手紙に切手が必要なんだ」「机の引き出しにあるよ」"
  }
 },
 "pantano": {
  "nuance": "「沼地」の基本語。",
  "etymology": "起源は諸説あるが、俗ラテン語系の語とされる。",
  "synonyms": [],
  "derived": [
   "pantanoso（沼地の）"
  ],
  "dialogue": {
   "es": "— Esa zona es un pantano.\n— Hay que tener cuidado al caminar por ahí.",
   "ja": "「あの地域は沼地なんだ」「そこを歩くときは気をつけないとね」"
  }
 },
 "arrecife": {
  "nuance": "「サンゴ礁」の基本語。メキシコのカリブ海沿岸には世界第2位の規模のサンゴ礁がある。",
  "etymology": "アラビア語ar-raṣīf（舗装された道）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Buceamos en un arrecife de coral.\n— Debió ser hermoso ver los peces.",
   "ja": "「サンゴ礁でダイビングしたんだ」「魚を見るのはきっと美しかっただろうね」"
  }
 },
 "pradera": {
  "nuance": "「草原」の基本語。prado（草地）から派生した語。",
  "etymology": "prado（草地）から派生した語。",
  "synonyms": [],
  "derived": [
   "prado（草地）"
  ],
  "dialogue": {
   "es": "— La pradera está llena de flores silvestres.\n— Qué hermosa vista.",
   "ja": "「草原は野生の花でいっぱいなんだ」「なんて美しい景色なんだろう」"
  }
 },
 "manantial": {
  "nuance": "「泉」の基本語。manar（湧き出る）から派生した語。",
  "etymology": "manar（湧き出る）から派生した語。",
  "synonyms": [],
  "derived": [
   "manar（湧き出る）"
  ],
  "dialogue": {
   "es": "— Bebimos agua directamente de un manantial.\n— Debió estar muy fresca.",
   "ja": "「泉から直接水を飲んだんだ」「きっととても新鮮だったんだろうね」"
  }
 },
 "constatar": {
  "nuance": "「確認する」の基本語。con（一緒に）+ stare（立つ）から派生した語。",
  "etymology": "ラテン語constare（確固としている）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Pude constatar que la información era correcta.\n— Qué bueno que lo verificaste.",
   "ja": "「情報が正しいことを確認できたよ」「確認してよかったね」"
  }
 },
 "prevalecer": {
  "nuance": "「優勢である」の基本語。pre（前に）+ valer（価値がある）の組み合わせ。",
  "etymology": "ラテン語praevalere（他より強い）に由来。",
  "synonyms": [],
  "derived": [
   "valer（価値がある）"
  ],
  "dialogue": {
   "es": "— La paz debe prevalecer sobre el conflicto.\n— Estoy totalmente de acuerdo.",
   "ja": "「平和は争いより優勢であるべきだよね」「まったく同感だよ」"
  }
 },
 "discrepar": {
  "nuance": "「意見が食い違う」の基本語。discrepancia（食い違い）から派生した語。",
  "etymology": "ラテン語discrepare（不協和音を出す）に由来。",
  "synonyms": [],
  "derived": [
   "discrepancia（食い違い）"
  ],
  "dialogue": {
   "es": "— Discrepo con esa opinión.\n— Es válido tener puntos de vista diferentes.",
   "ja": "「その意見には賛成できないな」「違う視点を持つのは正当なことだよね」"
  }
 },
 "lista de tareas": {
  "nuance": "「タスクリスト」の基本語。lista（リスト）+ de tareas（タスクの）の組み合わせ。",
  "etymology": "tarea（仕事、宿題）から派生した語。",
  "synonyms": [],
  "derived": [
   "tarea（仕事）"
  ],
  "dialogue": {
   "es": "— Hice una lista de tareas para hoy.\n— Qué organizado eres.",
   "ja": "「今日のタスクリストを作ったんだ」「なんて几帳面なんだ」"
  }
 },
 "día libre": {
  "nuance": "「休みの日」の基本語。día（日）+ libre（自由な）の組み合わせ。",
  "etymology": "libre（自由な）から派生した語。",
  "synonyms": [],
  "derived": [
   "libre（自由な）"
  ],
  "dialogue": {
   "es": "— Tengo un día libre mañana.\n— ¿Qué vas a hacer?",
   "ja": "「明日休みの日があるんだ」「何するつもり？」"
  }
 },
 "emisora": {
  "nuance": "「放送局」の基本語。emitir（放送する）から派生した語。",
  "etymology": "emitir（放送する）から派生した語。",
  "synonyms": [],
  "derived": [
   "emitir（放送する）"
  ],
  "dialogue": {
   "es": "— Esa emisora toca buena música.\n— ¿Cuál es la frecuencia?",
   "ja": "「あの放送局はいい音楽を流しているんだ」「周波数は何？」"
  }
 },
 "costumbre social": {
  "nuance": "「社会習慣」の基本語。costumbre（習慣）+ social（社会的な）の組み合わせ。",
  "etymology": "costumbre（習慣）から派生した語。",
  "synonyms": [],
  "derived": [
   "costumbre（習慣）"
  ],
  "dialogue": {
   "es": "— Es una costumbre social muy arraigada.\n— Sí, se remonta a generaciones.",
   "ja": "「とても根付いた社会習慣なんだ」「うん、何世代も遡るんだよね」"
  }
 },
 "voluntariado": {
  "nuance": "「ボランティア活動」の基本語。voluntario（ボランティア）から派生した語。",
  "etymology": "voluntario（ボランティア）から派生した語。",
  "synonyms": [],
  "derived": [
   "voluntario（ボランティア）"
  ],
  "dialogue": {
   "es": "— Hago voluntariado los fines de semana.\n— Qué admirable.",
   "ja": "「週末ボランティア活動をしているんだ」「なんて立派なんだ」"
  }
 },
 "extintor": {
  "nuance": "「消火器」の基本語。extinguir（消す）から派生した語。",
  "etymology": "extinguir（消す）から派生した語。",
  "synonyms": [],
  "derived": [
   "extinguir（消す）"
  ],
  "dialogue": {
   "es": "— ¿Dónde está el extintor?\n— Junto a la puerta principal.",
   "ja": "「消火器はどこにありますか？」「正面玄関のそばです」"
  }
 },
 "chándal": {
  "nuance": "「ジャージ」の基本語。スペインで一般的（メキシコではsudaderaやpants）。フランス語由来。",
  "etymology": "フランス語chandail（漁師のセーター）に由来。",
  "synonyms": [
   "pants（ジャージ、メキシコ）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Me puse el chándal para hacer ejercicio.\n— Yo también, es más cómodo.",
   "ja": "「運動するのにジャージを着たよ」「私もだよ、その方が快適だよね」"
  }
 },
 "ceja": {
  "nuance": "「眉」の基本語。levantar la ceja（眉をひそめる、疑う仕草）はよく使う表現。",
  "etymology": "ラテン語supercilia（眉）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Se depiló las cejas.\n— Le quedan muy bien.",
   "ja": "「彼女は眉を整えたんだ」「とても似合っているね」"
  }
 },
 "pestaña": {
  "nuance": "「まつげ」の基本語。「（ウェブブラウザの）タブ」という意味にもなる。",
  "etymology": "ラテン語pectinare（くしでとかす）に由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Tienes pestañas muy largas.\n— Gracias, son naturales.",
   "ja": "「とても長いまつげだね」「ありがとう、地毛だよ」"
  }
 },
 "barco de vela": {
  "nuance": "「ヨット」の基本語。barco（船）+ de vela（帆の）の組み合わせ。",
  "etymology": "barco（船）+ vela（帆）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "barco（船）",
   "vela（ろうそく、帆）"
  ],
  "dialogue": {
   "es": "— Navegamos en un barco de vela.\n— Debió ser tranquilo sin motor.",
   "ja": "「ヨットで航海したんだ」「モーターなしで静かだったろうね」"
  }
 },
 "tranvía": {
  "nuance": "「路面電車」の基本語。tram（英語）+ vía（線路）の組み合わせ。",
  "etymology": "英語tram + vía（道）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "vía（道、線路）"
  ],
  "dialogue": {
   "es": "— Tomamos el tranvía para llegar al centro.\n— Es una manera pintoresca de viajar.",
   "ja": "「中心街に行くのに路面電車に乗ったんだ」「情緒ある移動方法だよね」"
  }
 },
 "curry": {
  "nuance": "「カレー」の基本語。タミル語由来の国際的な単語。",
  "etymology": "タミル語kari（ソース）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Hice curry de pollo para la cena.\n— Suena delicioso.",
   "ja": "「夕食にチキンカレーを作ったんだ」「美味しそう」"
  }
 },
 "mermelada": {
  "nuance": "「ジャム」の基本語。ポルトガル語marmelada（マルメロのジャム）に由来。",
  "etymology": "ポルトガル語marmelo（マルメロ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Hice mermelada de fresa casera.\n— Se ve deliciosa.",
   "ja": "「手作りのイチゴジャムを作ったんだ」「美味しそう」"
  }
 },
 "avena": {
  "nuance": "「オートミール」の基本語。",
  "etymology": "ラテン語avena（オート麦）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Como avena con fruta todas las mañanas.\n— Es un desayuno muy saludable.",
   "ja": "「毎朝フルーツ入りのオートミールを食べているんだ」「とても健康的な朝食だよね」"
  }
 },
 "museo de arte": {
  "nuance": "「美術館」の基本語。museo（美術館・博物館）+ de arte（芸術の）の組み合わせ。",
  "etymology": "museo（博物館）から派生した語。",
  "synonyms": [],
  "derived": [
   "museo（博物館）"
  ],
  "dialogue": {
   "es": "— Vamos al museo de arte este fin de semana.\n— Hay una exposición nueva.",
   "ja": "「今週末美術館に行こう」「新しい展覧会があるんだ」"
  }
 },
 "tradición": {
  "nuance": "「伝統」の基本語。tradicional（伝統的な）から派生した語の元になる語。",
  "etymology": "ラテン語traditio（伝えること）に由来。",
  "synonyms": [],
  "derived": [
   "tradicional（伝統的な）"
  ],
  "dialogue": {
   "es": "— Es una tradición muy antigua.\n— Me encanta que se mantenga viva.",
   "ja": "「とても古い伝統なんだ」「今も生き続けているのが嬉しいね」"
  }
 },
 "autenticación": {
  "nuance": "「認証」の基本語。autenticar（認証する）から派生した語。",
  "etymology": "auténtico（本物の）から派生した語。",
  "synonyms": [],
  "derived": [
   "auténtico（本物の）"
  ],
  "dialogue": {
   "es": "— Necesitas la autenticación de dos pasos.\n— Ya la activé.",
   "ja": "「二段階認証が必要だよ」「もう有効にしたよ」"
  }
 },
 "conservación": {
  "nuance": "「保全」の基本語。conservar（保存する）から派生した語。",
  "etymology": "conservar（保存する）から派生した語。",
  "synonyms": [],
  "derived": [
   "conservar（保存する）"
  ],
  "dialogue": {
   "es": "— Este parque tiene un programa de conservación.\n— Es importante para el ecosistema.",
   "ja": "「この公園には保全プログラムがあるんだ」「生態系にとって重要だよね」"
  }
 },
 "injusto": {
  "nuance": "「不公正な」の基本語。justo（公正な）の反対語。",
  "etymology": "in（否定）+ justo（正しい）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "justo（公正な）"
  ],
  "dialogue": {
   "es": "— Eso me parece muy injusto.\n— Estoy de acuerdo, no es justo.",
   "ja": "「それはとても不公正に思えるな」「同感だよ、公正じゃないよね」"
  }
 },
 "entrega": {
  "nuance": "「配達」の基本語。entregar（届ける）から派生した語。",
  "etymology": "entregar（届ける）から派生した語。",
  "synonyms": [],
  "derived": [
   "entregar（届ける）"
  ],
  "dialogue": {
   "es": "— La entrega llegará mañana.\n— Perfecto, ya la esperaba.",
   "ja": "「配達は明日届くよ」「よかった、待っていたんだ」"
  }
 },
 "día de las madres": {
  "nuance": "「母の日」の基本語。メキシコでは5月10日に固定で祝われる（アメリカと違い5月の第2日曜日ではない）。",
  "etymology": "día（日）+ de las madres（母たちの）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "madre（母）"
  ],
  "dialogue": {
   "es": "— El Día de las Madres en México es siempre el 10 de mayo.\n— No sabía que era una fecha fija.",
   "ja": "「メキシコの母の日はいつも5月10日なんだ」「決まった日付だとは知らなかったよ」"
  }
 },
 "sentirse solo": {
  "nuance": "「孤独を感じる」の基本表現。sentirse（感じる）+ solo（一人の）の組み合わせ。",
  "etymology": "sentir（感じる）から派生した語。",
  "synonyms": [],
  "derived": [
   "solo（一人の）"
  ],
  "dialogue": {
   "es": "— A veces me siento solo en la ciudad nueva.\n— Es normal al principio, se pasa con el tiempo.",
   "ja": "「新しい街で時々孤独を感じるんだ」「最初はよくあることだよ、時間が経てば良くなるよ」"
  }
 },
 "equipo de trabajo": {
  "nuance": "「仕事のチーム」の基本語。equipo（チーム）+ de trabajo（仕事の）の組み合わせ。",
  "etymology": "equipo（チーム、装備）から派生した語。",
  "synonyms": [],
  "derived": [
   "equipo（チーム）"
  ],
  "dialogue": {
   "es": "— Tengo un excelente equipo de trabajo.\n— Qué suerte, eso hace la diferencia.",
   "ja": "「素晴らしい仕事のチームがいるんだ」「幸運だね、それが違いを生むんだ」"
  }
 },
 "check-in": {
  "nuance": "「チェックイン」の基本語。英語からの借用語。",
  "etymology": "英語check-in（確認して入る）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿A qué hora es el check-in?\n— A partir de las tres de la tarde.",
   "ja": "「チェックインは何時から？」「午後3時からだよ」"
  }
 },
 "taco al pastor": {
  "nuance": "「タコス・アル・パストール」の基本語。豚肉をスパイスに漬けて回転焼きにする、メキシコシティで特に人気のタコス。中東のシャワルマから影響を受けたとされる。",
  "etymology": "pastor（羊飼い）に由来、中東移民の料理法から発展したとされる。",
  "synonyms": [],
  "derived": [
   "pastor（羊飼い）"
  ],
  "dialogue": {
   "es": "— Los tacos al pastor son mis favoritos.\n— Con piña, ¿verdad?",
   "ja": "「タコス・アル・パストールが一番好きなんだ」「パイナップル入りでしょ？」"
  }
 },
 "pan dulce": {
  "nuance": "「甘いパン」の基本語。メキシコの朝食・おやつの定番、様々な種類がある。",
  "etymology": "pan（パン）+ dulce（甘い）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "pan（パン）",
   "dulce（甘い）"
  ],
  "dialogue": {
   "es": "— Vamos a comprar pan dulce para el desayuno.\n— Me encantan las conchas.",
   "ja": "「朝食用に甘いパンを買いに行こう」「コンチャが大好きなんだ」"
  }
 },
 "helada": {
  "nuance": "「霜」の基本語。helar（凍らせる）から派生した語。",
  "etymology": "helar（凍らせる）から派生した語。",
  "synonyms": [],
  "derived": [
   "helar（凍らせる）",
   "hielo（氷）"
  ],
  "dialogue": {
   "es": "— Hubo helada esta mañana.\n— Por eso hacía tanto frío.",
   "ja": "「今朝霜が降りたんだ」「だからあんなに寒かったんだね」"
  }
 },
 "arpa": {
  "nuance": "「ハープ」の基本語。arpaは女性名詞だが、アクセントのあるa音を避けるため単数形ではelを使う。ベラクルスの音楽（son jarocho）で有名な楽器。",
  "etymology": "ゲルマン語系の語harpa（ハープ）に由来。",
  "synonyms": [],
  "derived": [
   "arpista（ハープ奏者）"
  ],
  "dialogue": {
   "es": "— El arpa jarocha suena hermoso.\n— Es un instrumento icónico de Veracruz.",
   "ja": "「ハラチャ・ハープの音色は美しいね」「ベラクルスを象徴する楽器なんだ」"
  }
 },
 "contrabajo": {
  "nuance": "「コントラバス」の基本語。contra（〜に対する）+ bajo（低い）の組み合わせ。",
  "etymology": "イタリア語contrabbasso（さらに低い音）に由来。",
  "synonyms": [],
  "derived": [
   "bajo（低い、ベース）"
  ],
  "dialogue": {
   "es": "— El contrabajo le da profundidad a la música.\n— Es la base de todo el sonido.",
   "ja": "「コントラバスが音楽に深みを与えているね」「全体の音の土台なんだよね」"
  }
 },
 "ukelele": {
  "nuance": "「ウクレレ」の基本語。ハワイ語由来。",
  "etymology": "ハワイ語ukulele（跳ねるノミ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Estoy aprendiendo a tocar el ukelele.\n— Es más fácil que la guitarra, ¿verdad?",
   "ja": "「ウクレレを習っているんだ」「ギターより簡単だよね？」"
  }
 },
 "pandereta": {
  "nuance": "「タンバリン」の基本語。",
  "etymology": "pandero（大型の太鼓）の指小形に由来。",
  "synonyms": [],
  "derived": [
   "pandero（太鼓）"
  ],
  "dialogue": {
   "es": "— Toca la pandereta durante la canción.\n— Le da mucho ritmo.",
   "ja": "「歌の間タンバリンを鳴らして」「とてもリズムが出るよね」"
  }
 },
 "oceanía": {
  "nuance": "「オセアニア」の基本語。オーストラリア・ニュージーランド・太平洋諸島を含む大陸。",
  "etymology": "ラテン語oceanus（大洋）から派生した語。",
  "synonyms": [],
  "derived": [
   "océano（大洋）"
  ],
  "dialogue": {
   "es": "— Oceanía tiene islas hermosas.\n— Me encantaría visitar Australia.",
   "ja": "「オセアニアには美しい島々があるよね」「オーストラリアに行ってみたいな」"
  }
 },
 "antártida": {
  "nuance": "「南極大陸」の基本語。ártico（北極の）の反対語anti-ártico（南極の）から派生。",
  "etymology": "anti（反対の）+ ártico（北極の）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "ártico（北極の）"
  ],
  "dialogue": {
   "es": "— La Antártida es el continente más frío.\n— Casi nadie vive ahí permanentemente.",
   "ja": "「南極大陸は一番寒い大陸だよね」「ほとんど誰も定住していないよね」"
  }
 },
 "equipaje de mano": {
  "nuance": "「機内持ち込み荷物」の基本語。equipaje（荷物）+ de mano（手の）の組み合わせ。",
  "etymology": "equipaje（荷物）+ mano（手）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "equipaje（荷物）"
  ],
  "dialogue": {
   "es": "— Solo llevo equipaje de mano.\n— Así evitas esperar en la banda de maletas.",
   "ja": "「機内持ち込み荷物だけ持っていくよ」「そうすれば荷物の受け取りで待たなくて済むね」"
  }
 },
 "snowboard": {
  "nuance": "「スノーボード」の基本語。英語からの借用語。",
  "etymology": "英語snowboard（雪の板）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Prefieres esquiar o hacer snowboard?\n— Snowboard, definitivamente.",
   "ja": "「スキーとスノーボード、どっちが好き？」「断然スノーボードだね」"
  }
 },
 "hockey": {
  "nuance": "「ホッケー」の基本語。英語からの借用語。",
  "etymology": "英語hockey（起源は諸説あり）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— No sabía que jugabas hockey.\n— Sí, desde que era niño.",
   "ja": "「ホッケーやってるなんて知らなかったよ」「うん、子供の頃からね」"
  }
 },
 "seguro de sí mismo": {
  "nuance": "「自信がある」の基本表現。seguro（確かな）+ de sí mismo（自分自身の）の組み合わせ。",
  "etymology": "seguro（確かな）から派生した語。",
  "synonyms": [],
  "derived": [
   "seguro（確かな、安全な）"
  ],
  "dialogue": {
   "es": "— Se ve muy seguro de sí mismo en las entrevistas.\n— Eso lo hace destacar.",
   "ja": "「面接でとても自信がありそうに見えるよね」「それが彼を際立たせているんだよね」"
  }
 },
 "cinta métrica": {
  "nuance": "「巻き尺」の基本語。cinta（テープ）+ métrica（測定の）の組み合わせ。",
  "etymology": "cinta（テープ）+ metro（メートル）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "metro（メートル）"
  ],
  "dialogue": {
   "es": "— ¿Tienes una cinta métrica?\n— Sí, en la caja de herramientas.",
   "ja": "「巻き尺持ってる？」「うん、工具箱にあるよ」"
  }
 },
 "gancho": {
  "nuance": "「フック」の基本語。「（ボクシングの）フックパンチ」という意味にもなる。",
  "etymology": "起源は諸説あるが、俗ラテン語系の語とされる。",
  "synonyms": [],
  "derived": [
   "enganchar（引っ掛ける）"
  ],
  "dialogue": {
   "es": "— Cuelga tu abrigo en ese gancho.\n— Gracias.",
   "ja": "「そのフックにコート掛けて」「ありがとう」"
  }
 },
 "clip": {
  "nuance": "「クリップ」の基本語。英語からの借用語。「動画クリップ」という意味にもなる。",
  "etymology": "英語clip（挟むもの）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Necesito un clip para estos papeles.\n— Hay en el cajón.",
   "ja": "「この書類にクリップが必要なんだ」「引き出しにあるよ」"
  }
 },
 "archivador": {
  "nuance": "「書類棚」の基本語。archivo（ファイル、書類）から派生した語。",
  "etymology": "archivo（ファイル）から派生した語。",
  "synonyms": [],
  "derived": [
   "archivo（ファイル）"
  ],
  "dialogue": {
   "es": "— Guarda esos documentos en el archivador.\n— Ya lo hice.",
   "ja": "「その書類を書類棚にしまって」「もうやったよ」"
  }
 },
 "incertidumbre": {
  "nuance": "「不確実性」の基本語。cierto（確かな）+ incierto（不確かな）から派生。",
  "etymology": "incierto（不確かな）から派生した語。",
  "synonyms": [],
  "derived": [
   "cierto（確かな）",
   "incierto（不確かな）"
  ],
  "dialogue": {
   "es": "— Hay mucha incertidumbre sobre el futuro.\n— Es normal sentirse así a veces.",
   "ja": "「未来について不確実性が多いよね」「時々そう感じるのは普通のことだよ」"
  }
 },
 "contradicción": {
  "nuance": "「矛盾」の基本語。contra（反対に）+ decir（言う）の組み合わせ。",
  "etymology": "contra（反対に）+ decir（言う）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "contradecir（矛盾する）"
  ],
  "dialogue": {
   "es": "— Hay una contradicción en su argumento.\n— Sí, no tiene mucho sentido.",
   "ja": "「彼の主張には矛盾があるよね」「うん、あまり筋が通ってないよね」"
  }
 },
 "ambigüedad": {
  "nuance": "「曖昧さ」の基本語。ambiguo（曖昧な）から派生した語。",
  "etymology": "ambiguo（曖昧な）から派生した語。",
  "synonyms": [],
  "derived": [
   "ambiguo（曖昧な）"
  ],
  "dialogue": {
   "es": "— Hay demasiada ambigüedad en el contrato.\n— Deberíamos pedir más claridad.",
   "ja": "「契約書に曖昧さが多すぎるね」「もっと明確さを求めた方がいいね」"
  }
 },
 "coherencia": {
  "nuance": "「一貫性」の基本語。cohesión（結束）と同語源。",
  "etymology": "ラテン語cohaerere（くっついている）に由来。",
  "synonyms": [],
  "derived": [
   "coherente（一貫した）"
  ],
  "dialogue": {
   "es": "— Su discurso tuvo mucha coherencia.\n— Sí, cada punto se conectaba bien.",
   "ja": "「彼のスピーチはとても一貫性があったね」「うん、それぞれの点がうまくつながっていたね」"
  }
 },
 "trascendencia": {
  "nuance": "「重要性、超越性」の基本語。trascender（超える）から派生した語。",
  "etymology": "trascender（超える）から派生した語。",
  "synonyms": [],
  "derived": [
   "trascender（超える）"
  ],
  "dialogue": {
   "es": "— Este descubrimiento tiene gran trascendencia.\n— Va a cambiar mucho el campo.",
   "ja": "「この発見はとても重要性があるね」「その分野を大きく変えるだろうね」"
  }
 },
 "discrepancia": {
  "nuance": "「食い違い」の基本語。discrepar（意見が食い違う）から派生した語。",
  "etymology": "discrepar（食い違う）から派生した語。",
  "synonyms": [],
  "derived": [
   "discrepar（食い違う）"
  ],
  "dialogue": {
   "es": "— Hay una discrepancia entre los dos informes.\n— Deberíamos revisarlos juntos.",
   "ja": "「2つの報告書に食い違いがあるね」「一緒に確認した方がいいね」"
  }
 },
 "escepticismo": {
  "nuance": "「懐疑主義」の基本語。escéptico（懐疑的な）から派生した語。",
  "etymology": "ギリシャ語skeptikos（探求する）に由来。",
  "synonyms": [],
  "derived": [
   "escéptico（懐疑的な）"
  ],
  "dialogue": {
   "es": "— Recibió la noticia con escepticismo.\n— Es comprensible, suena demasiado bueno.",
   "ja": "「彼はそのニュースを懐疑的に受け止めたんだ」「わかるよ、都合が良すぎるもんね」"
  }
 },
 "suscitar": {
  "nuance": "「引き起こす」の基本語。sub（下から）+ citar（呼び起こす）の組み合わせ。",
  "etymology": "ラテン語suscitare（下から起こす）に由来。",
  "synonyms": [],
  "derived": [
   "citar（引用する、呼び出す）"
  ],
  "dialogue": {
   "es": "— Esta política suscitó mucho debate.\n— No me sorprende, es un tema controversial.",
   "ja": "「この政策は多くの論争を引き起こしたね」「驚かないよ、物議を醸すテーマだから」"
  }
 },
 "matizar": {
  "nuance": "「ニュアンスを加える」の基本語。matiz（ニュアンス）から派生した語。",
  "etymology": "matiz（ニュアンス）から派生した語。",
  "synonyms": [],
  "derived": [
   "matiz（ニュアンス）"
  ],
  "dialogue": {
   "es": "— Quiero matizar lo que dije antes.\n— Adelante, te escucho.",
   "ja": "「さっき言ったことにニュアンスを加えたいんだ」「どうぞ、聞くよ」"
  }
 },
 "desencadenar": {
  "nuance": "「引き起こす（連鎖的に）」の基本語。des（外す）+ encadenar（鎖でつなぐ）の組み合わせ、「鎖を解き放つ」が原義。",
  "etymology": "des（外す）+ encadenar（鎖でつなぐ）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "cadena（鎖）"
  ],
  "dialogue": {
   "es": "— Ese comentario desencadenó una gran discusión.\n— Nadie esperaba esa reacción.",
   "ja": "「あの発言が大きな議論を引き起こしたんだ」「誰もそんな反応は予想していなかったよ」"
  }
 },
 "botas de nieve": {
  "nuance": "「スノーブーツ」の基本語。botas（ブーツ）+ de nieve（雪の）の組み合わせ。",
  "etymology": "botas（ブーツ）+ nieve（雪）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "botas（ブーツ）",
   "nieve（雪）"
  ],
  "dialogue": {
   "es": "— Necesito botas de nieve para el viaje.\n— Yo tengo un par extra.",
   "ja": "「旅行用にスノーブーツが必要なんだ」「私は予備が一足あるよ」"
  }
 },
 "ensalada de frutas": {
  "nuance": "「フルーツサラダ」の基本語。ensalada（サラダ）+ de frutas（フルーツの）の組み合わせ。",
  "etymology": "ensalada（サラダ）+ fruta（果物）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "ensalada（サラダ）",
   "fruta（果物）"
  ],
  "dialogue": {
   "es": "— Hice ensalada de frutas para el desayuno.\n— Se ve deliciosa.",
   "ja": "「朝食用にフルーツサラダを作ったんだ」「美味しそうだね」"
  }
 },
 "escultura moderna": {
  "nuance": "「現代彫刻」の基本語。escultura（彫刻）+ moderna（現代の）の組み合わせ。",
  "etymology": "esculpir（彫刻する）から派生した語。",
  "synonyms": [],
  "derived": [
   "escultura（彫刻）",
   "moderno（現代の）"
  ],
  "dialogue": {
   "es": "— Esa escultura moderna es muy interesante.\n— No entiendo bien qué representa.",
   "ja": "「あの現代彫刻はとても興味深いね」「何を表しているのかよくわからないな」"
  }
 },
 "festival": {
  "nuance": "「フェスティバル」の基本語。festividad（祝祭）と関連語。",
  "etymology": "ラテン語festivus（祭りの）に由来。",
  "synonyms": [],
  "derived": [
   "fiesta（パーティー、祭り）"
  ],
  "dialogue": {
   "es": "— Vamos al festival de música este verano.\n— ¿Quiénes van a tocar?",
   "ja": "「今年の夏、音楽フェスティバルに行こう」「誰が演奏するの？」"
  }
 },
 "actualización de software": {
  "nuance": "「ソフトウェア更新」の基本語。actualización（更新）+ de software（ソフトウェアの）の組み合わせ。",
  "etymology": "actualizar（更新する）から派生した語。",
  "synonyms": [],
  "derived": [
   "actualizar（更新する）"
  ],
  "dialogue": {
   "es": "— Hay una actualización de software pendiente.\n— La voy a instalar ahora.",
   "ja": "「保留中のソフトウェア更新があるよ」「今インストールするね」"
  }
 },
 "copia de seguridad": {
  "nuance": "「バックアップ」の基本語。copia（コピー）+ de seguridad（安全の）の組み合わせ。",
  "etymology": "copia（コピー）+ seguridad（安全）の組み合わせ。",
  "synonyms": [
   "backup（バックアップ、英語借用）"
  ],
  "derived": [
   "copiar（コピーする）",
   "seguro（安全な）"
  ],
  "dialogue": {
   "es": "— ¿Hiciste una copia de seguridad?\n— Sí, ayer mismo.",
   "ja": "「バックアップ取った？」「うん、昨日ね」"
  }
 },
 "chip electrónico": {
  "nuance": "「電子チップ」の基本語。chip（チップ）+ electrónico（電子の）の組み合わせ。",
  "etymology": "英語chip（欠片）+ electrónico（電子の）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "electrónico（電子の）"
  ],
  "dialogue": {
   "es": "— Este chip electrónico es muy avanzado.\n— La tecnología avanza rápido.",
   "ja": "「この電子チップはとても先進的だね」「技術の進歩は早いよね」"
  }
 },
 "eso tiene sentido": {
  "nuance": "「それは筋が通っている」の基本フレーズ。tener sentido（意味をなす）から派生。",
  "etymology": "tener（持つ）+ sentido（意味）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "sentido（意味、感覚）"
  ],
  "dialogue": {
   "es": "— Por eso llegó tarde, tenía una emergencia.\n— Ah, eso tiene sentido.",
   "ja": "「だから遅刻したんだ、緊急事態があって」「ああ、それは筋が通っているね」"
  }
 },
 "nos mantenemos en contacto": {
  "nuance": "「連絡取り合おうね」の基本フレーズ。mantenerse en contacto（連絡を保つ）から派生。",
  "etymology": "mantener（保つ）+ contacto（接触）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "contacto（接触）"
  ],
  "dialogue": {
   "es": "— Fue un gusto conocerte.\n— Igualmente, nos mantenemos en contacto.",
   "ja": "「会えて良かったよ」「こちらこそ、連絡取り合おうね」"
  }
 },
 "eso ya lo sabía": {
  "nuance": "「それはもう知ってたよ」の基本フレーズ。",
  "etymology": "eso（それ）+ ya（もう）+ saber（知る）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "saber（知る）"
  ],
  "dialogue": {
   "es": "— El precio subió otra vez.\n— Eso ya lo sabía, es una tendencia constante.",
   "ja": "「また値段が上がったんだ」「それはもう知ってたよ、ずっと続いている傾向だから」"
  }
 },
 "día de reyes": {
  "nuance": "「公現祭」の基本語。1月6日、メキシコでは子供たちがプレゼントをもらう伝統的な祝日でロスカ・デ・レジェス（王様のパン）を食べる。",
  "etymology": "día（日）+ de reyes（王たちの）の組み合わせ、東方の三賢者に由来。",
  "synonyms": [],
  "derived": [
   "rey（王）"
  ],
  "dialogue": {
   "es": "— El Día de Reyes comemos rosca.\n— Y buscamos el muñequito adentro.",
   "ja": "「公現祭にはロスカを食べるんだ」「そして中の人形を探すんだよね」"
  }
 },
 "equipaje facturado": {
  "nuance": "「預け荷物」の基本語。equipaje（荷物）+ facturado（チェックインされた）の組み合わせ。",
  "etymology": "facturar（荷物を預ける、請求する）から派生した語。",
  "synonyms": [],
  "derived": [
   "equipaje（荷物）"
  ],
  "dialogue": {
   "es": "— ¿Cuánto equipaje facturado puedo llevar?\n— Depende de tu boleto.",
   "ja": "「預け荷物はどれくらい持っていけますか？」「チケットによりますね」"
  }
 },
 "cabe destacar que": {
  "nuance": "「特筆すべきは」の基本フレーズ。caber（収まる、当てはまる）+ destacar（際立たせる）の組み合わせ、フォーマルな文章でよく使う。",
  "etymology": "caber（当てはまる）+ destacar（際立たせる）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "destacar（際立たせる）"
  ],
  "dialogue": {
   "es": "— Cabe destacar que el proyecto terminó antes de tiempo.\n— Sí, fue un gran logro del equipo.",
   "ja": "「特筆すべきは、プロジェクトが予定より早く終わったことだね」「うん、チームの大きな功績だったね」"
  }
 },
 "a grandes rasgos": {
  "nuance": "「大まかに言うと」の基本フレーズ。rasgo（特徴、線）から派生した表現。",
  "etymology": "grande（大きい）+ rasgo（線、特徴）の組み合わせ。",
  "synonyms": [
   "en términos generales（一般的に言えば）"
  ],
  "derived": [
   "rasgo（特徴）"
  ],
  "dialogue": {
   "es": "— A grandes rasgos, el plan es viable.\n— Me alegra escuchar eso.",
   "ja": "「大まかに言うと、その計画は実現可能だね」「それを聞いて嬉しいよ」"
  }
 },
 "en términos generales": {
  "nuance": "「一般的に言えば」の基本フレーズ。en（〜において）+ términos generales（一般的な言葉）の組み合わせ。",
  "etymology": "término（言葉、用語）から派生した語。",
  "synonyms": [
   "a grandes rasgos（大まかに言うと）"
  ],
  "derived": [
   "término（用語）"
  ],
  "dialogue": {
   "es": "— En términos generales, el año fue exitoso.\n— Hubo algunos desafíos, pero sí.",
   "ja": "「一般的に言えば、良い一年だったね」「いくつか課題はあったけど、そうだね」"
  }
 },
 "a raíz de": {
  "nuance": "「〜がきっかけで」の基本フレーズ。raíz（根）から派生した表現、「そこから根を張って」というイメージ。",
  "etymology": "raíz（根）から派生した表現。",
  "synonyms": [],
  "derived": [
   "raíz（根）"
  ],
  "dialogue": {
   "es": "— A raíz de ese evento, cambiamos nuestra estrategia.\n— Fue una decisión inteligente.",
   "ja": "「その出来事がきっかけで、戦略を変えたんだ」「賢い決断だったね」"
  }
 },
 "a todas luces": {
  "nuance": "「明らかに」の基本フレーズ。直訳は「あらゆる光の下で」で、疑いようがないことを表す。",
  "etymology": "luz（光）から派生した表現。",
  "synonyms": [
   "claramente（明らかに）"
  ],
  "derived": [
   "luz（光）"
  ],
  "dialogue": {
   "es": "— A todas luces, esto fue un error.\n— Sí, no hay otra explicación.",
   "ja": "「明らかに、これは間違いだったね」「うん、他に説明のしようがないよね」"
  }
 },
 "bajo ningún concepto": {
  "nuance": "「いかなる場合も〜ない」の基本フレーズ。bajo（〜の下で）+ ningún concepto（いかなる概念も）の組み合わせ、強い禁止・拒否を表す。",
  "etymology": "bajo（〜の下で）+ concepto（概念）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "concepto（概念）"
  ],
  "dialogue": {
   "es": "— Bajo ningún concepto vamos a aceptar esa oferta.\n— Estoy de acuerdo, no es justa.",
   "ja": "「いかなる場合もその申し出は受け入れないよ」「同感だよ、公正じゃないから」"
  }
 },
 "con creces": {
  "nuance": "「十分すぎるほど」の基本フレーズ。creces（増加）から派生、期待を大きく上回ることを表す。",
  "etymology": "crecer（成長する）から派生した語。",
  "synonyms": [],
  "derived": [
   "crecer（成長する）"
  ],
  "dialogue": {
   "es": "— Superó las expectativas con creces.\n— Sí, fue impresionante.",
   "ja": "「彼は期待を十分すぎるほど上回ったよ」「うん、印象的だったね」"
  }
 },
 "miel de maple": {
  "nuance": "「メープルシロップ」の基本語。miel（蜂蜜）+ de maple（カエデの）の組み合わせ。",
  "etymology": "miel（蜂蜜）+ 英語maple（カエデ）の組み合わせ。",
  "synonyms": [
   "jarabe de maple（メープルシロップ）"
  ],
  "derived": [
   "miel（蜂蜜）"
  ],
  "dialogue": {
   "es": "— Le pongo miel de maple a los hotcakes.\n— A mí también, es lo mejor.",
   "ja": "「ホットケーキにメープルシロップをかけるんだ」「私もだよ、最高だよね」"
  }
 },
 "permitir el acceso": {
  "nuance": "「アクセスを許可する」の基本表現。permitir（許可する）+ el acceso（アクセス）の組み合わせ。",
  "etymology": "permitir（許可する）+ acceso（アクセス）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "permitir（許可する）",
   "acceso（アクセス）"
  ],
  "dialogue": {
   "es": "— Necesito que me permitas el acceso al sistema.\n— Te lo doy en un momento.",
   "ja": "「システムへのアクセスを許可してもらう必要があるんだ」「すぐに許可するよ」"
  }
 },
 "contigo o sin ti": {
  "nuance": "「君がいてもいなくても」の基本フレーズ。con（〜と）+ tigo（君）と、sin（〜なしで）+ ti（君）の対比。",
  "etymology": "con（〜と）+ ti（君）、sin（〜なしで）+ ti（君）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "contigo（君と）"
  ],
  "dialogue": {
   "es": "— Voy a hacerlo, contigo o sin ti.\n— Está bien, cuenta conmigo entonces.",
   "ja": "「君がいてもいなくてもやるつもりだよ」「わかった、それなら私も参加するよ」"
  }
 },
 "interés": {
  "nuance": "「利子」「興味」の両方の意味を持つ基本語。金融文脈ではtasa de interés（利率）のように使う。",
  "etymology": "ラテン語interesse（間にある→重要である）に由来。",
  "synonyms": [],
  "derived": [
   "interesar（興味を持たせる）",
   "interesante（興味深い）"
  ],
  "dialogue": {
   "es": "— El interés de este préstamo es muy alto.\n— Deberías comparar con otros bancos.",
   "ja": "「このローンの利子はとても高いね」「他の銀行と比較した方がいいよ」"
  }
 },
 "echar la hueva": {
  "nuance": "メキシコの口語表現で「サボる、だらだらする」という意味。huevaは「怠け心」を表す俗語。",
  "etymology": "echar（投げる）+ hueva（卵、俗語で怠け心）の組み合わせ。",
  "synonyms": [
   "flojear（怠ける、口語）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Hoy no quiero hacer nada, voy a echar la hueva.\n— Todos necesitamos un día así de vez en cuando.",
   "ja": "「今日は何もしたくない、だらだらするよ」「みんな時々そういう日が必要だよね」"
  }
 },
 "huelga decir que": {
  "nuance": "「言うまでもなく」の基本フレーズ。huelga（ストライキ、ここでは「余計だ」の意味）+ decir（言う）の組み合わせ、フォーマルな表現。",
  "etymology": "huelga（不要である）+ decir（言う）の組み合わせ。",
  "synonyms": [
   "ni que decir tiene（言うまでもなく）"
  ],
  "derived": [
   "decir（言う）"
  ],
  "dialogue": {
   "es": "— Huelga decir que este proyecto es importante para todos.\n— Estamos totalmente comprometidos.",
   "ja": "「言うまでもなく、このプロジェクトはみんなにとって重要だね」「私たちは全力で取り組んでいるよ」"
  }
 },
 "en vísperas de": {
  "nuance": "「〜の直前に」の基本フレーズ。víspera（前夜、前日）から派生した表現。",
  "etymology": "ラテン語vespera（夕方）から派生した語。",
  "synonyms": [],
  "derived": [
   "víspera（前夜）"
  ],
  "dialogue": {
   "es": "— En vísperas de las elecciones, hay mucha tensión.\n— Es normal en estos momentos.",
   "ja": "「選挙の直前は、緊張感が高まるよね」「こういう時期は普通のことだよね」"
  }
 },
 "amable y paciente": {
  "nuance": "「優しくて忍耐強い」という性格を表す複合表現。amable（優しい）+ paciente（忍耐強い）の組み合わせ。",
  "etymology": "amable（愛される価値のある）+ paciente（耐える）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "amable（優しい）",
   "paciente（忍耐強い）"
  ],
  "dialogue": {
   "es": "— Mi maestra es muy amable y paciente.\n— Es una combinación perfecta para enseñar.",
   "ja": "「私の先生はとても優しくて忍耐強いんだ」「教えるのに完璧な組み合わせだね」"
  }
 },
 "sincero y directo": {
  "nuance": "「誠実で率直な」という性格を表す複合表現。sincero（誠実な）+ directo（直接的な）の組み合わせ。",
  "etymology": "sincero（純粋な）+ directo（まっすぐな）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "sincero（誠実な）",
   "directo（直接の）"
  ],
  "dialogue": {
   "es": "— Aprecio que seas tan sincero y directo conmigo.\n— Siempre te voy a decir la verdad.",
   "ja": "「私にとても誠実で率直でいてくれてありがたいよ」「いつも本当のことを言うつもりだよ」"
  }
 },
 "tranquilo y paciente": {
  "nuance": "「穏やかで忍耐強い」という性格を表す複合表現。tranquilo（落ち着いた）+ paciente（忍耐強い）の組み合わせ。",
  "etymology": "tranquilo（静かな）+ paciente（耐える）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "tranquilo（落ち着いた）",
   "paciente（忍耐強い）"
  ],
  "dialogue": {
   "es": "— Es una persona muy tranquila y paciente.\n— Por eso es tan bueno con los niños.",
   "ja": "「彼はとても穏やかで忍耐強い人なんだ」「だから子供たちにとても優しいんだね」"
  }
 },
 "curioso por naturaleza": {
  "nuance": "「生まれつき好奇心旺盛な」という性格を表す複合表現。curioso（好奇心旺盛な）+ por naturaleza（生まれつき）の組み合わせ。",
  "etymology": "curioso（気にかける）+ naturaleza（性質）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "curioso（好奇心旺盛な）",
   "naturaleza（自然、性質）"
  ],
  "dialogue": {
   "es": "— Es curioso por naturaleza, siempre pregunta cómo funcionan las cosas.\n— Va a ser un gran científico.",
   "ja": "「彼は生まれつき好奇心旺盛で、いつも物事の仕組みを尋ねるんだ」「きっと素晴らしい科学者になるね」"
  }
 },
 "interés（financiero）": {
  "nuance": "「利子」の基本語。金融文脈での「利子」を明確にするための表記。単なるinterés（興味・利子）と区別している。",
  "etymology": "ラテン語interesse（間にある→重要である）に由来。",
  "synonyms": [],
  "derived": [
   "interesar（興味を持たせる）"
  ],
  "dialogue": {
   "es": "— El interés de esta cuenta es muy bajo.\n— Deberías buscar otro banco.",
   "ja": "「この口座の利子はとても低いね」「別の銀行を探した方がいいよ」"
  }
 },
 "ni que decir tiene": {
  "nuance": "「言うまでもなく」の基本フレーズ。huelga decir queとほぼ同義、フォーマルな表現。",
  "etymology": "ni（〜さえない）+ que decir tiene（言うことがある）の組み合わせ。",
  "synonyms": [
   "huelga decir que（言うまでもなく）"
  ],
  "derived": [
   "decir（言う）"
  ],
  "dialogue": {
   "es": "— Ni que decir tiene que estamos orgullosos de ti.\n— Muchas gracias, significa mucho.",
   "ja": "「言うまでもなく、あなたを誇りに思っているよ」「本当にありがとう、とても意味があるよ」"
  }
 },
 "flexible（personalidad）": {
  "nuance": "「柔軟な（性格）」の基本語。物理的な柔軟性と区別して、性格の柔軟性を明確にする表記。",
  "etymology": "ラテン語flexibilis（曲げられる）に由来。",
  "synonyms": [],
  "derived": [
   "flexibilidad（柔軟性）"
  ],
  "dialogue": {
   "es": "— Es muy flexible con los cambios de planes.\n— Esa actitud facilita mucho las cosas.",
   "ja": "「彼は予定変更にとても柔軟なんだ」「その姿勢は物事をとても楽にするよね」"
  }
 },
 "trámite": {
  "nuance": "「手続き」の基本語。hacer un trámite（手続きをする）はよく使う組み合わせ、役所などでの事務手続き全般を指す。",
  "etymology": "tramitar（手続きする）から派生した語。",
  "synonyms": [],
  "derived": [
   "tramitar（手続きする）"
  ],
  "dialogue": {
   "es": "— Tengo que hacer un trámite en el banco.\n— ¿Cuánto tiempo crees que tarde?",
   "ja": "「銀行で手続きをしないといけないんだ」「どれくらい時間かかりそう？」"
  }
 },
 "requisito": {
  "nuance": "「要件」の基本語。cumplir con los requisitos（要件を満たす）はよく使う組み合わせ。",
  "etymology": "ラテン語requisitus（求められた）に由来。",
  "synonyms": [],
  "derived": [
   "requerir（要求する）"
  ],
  "dialogue": {
   "es": "— ¿Cuáles son los requisitos para aplicar?\n— Necesitas tu identificación y comprobante de domicilio.",
   "ja": "「応募の要件は何ですか？」「身分証明書と住所証明が必要です」"
  }
 },
 "comprobante": {
  "nuance": "「領収書、証明書」の基本語。comprobar（確認する）から派生した語。",
  "etymology": "comprobar（確認する）から派生した語。",
  "synonyms": [
   "recibo（領収書、ほぼ同義）"
  ],
  "derived": [
   "comprobar（確認する）"
  ],
  "dialogue": {
   "es": "— Guarda el comprobante de pago.\n— Lo voy a necesitar para la garantía.",
   "ja": "「支払いの領収書を保管しておいて」「保証のために必要になるから」"
  }
 },
 "vigente": {
  "nuance": "「有効な」の基本語。estar vigente（有効である）はよく使う組み合わせ、法律・書類の有効性を表す。",
  "etymology": "ラテン語vigens（力強い、生きている）に由来。",
  "synonyms": [],
  "derived": [
   "vigencia（有効期間）"
  ],
  "dialogue": {
   "es": "— ¿Tu pasaporte está vigente?\n— Sí, vence hasta el próximo año.",
   "ja": "「あなたのパスポートは有効ですか？」「はい、来年まで有効です」"
  }
 },
 "encargarse de": {
  "nuance": "「〜を担当する」の基本表現。encargar（頼む、任せる）から派生した再帰動詞。",
  "etymology": "encargar（任せる）から派生した語。",
  "synonyms": [],
  "derived": [
   "encargar（任せる）"
  ],
  "dialogue": {
   "es": "— ¿Quién se encarga de este proyecto?\n— Yo, desde el mes pasado.",
   "ja": "「このプロジェクトは誰が担当していますか？」「私です、先月からね」"
  }
 },
 "retroalimentación": {
  "nuance": "「フィードバック」の基本語。フォーマルな職場文脈でよく使われる（口語ではfeedbackという英語借用もよく使われる）。",
  "etymology": "retro（後ろへ）+ alimentación（栄養補給）の組み合わせ。",
  "synonyms": [
   "feedback（フィードバック、英語借用・口語）"
  ],
  "derived": [
   "alimentar（栄養を与える）"
  ],
  "dialogue": {
   "es": "— Gracias por tu retroalimentación.\n— Espero que te sea útil.",
   "ja": "「フィードバックありがとう」「役に立つといいな」"
  }
 },
 "cumplir con": {
  "nuance": "「〜を果たす」の基本表現。cumplir con las expectativas（期待に応える）のような組み合わせでよく使う。",
  "etymology": "ラテン語complere（満たす）に由来。",
  "synonyms": [],
  "derived": [
   "cumplimiento（履行）"
  ],
  "dialogue": {
   "es": "— Necesitamos cumplir con el plazo.\n— Estamos trabajando en ello.",
   "ja": "「期限を守る必要があるね」「取り組んでいるところだよ」"
  }
 },
 "desempeño": {
  "nuance": "「(仕事の)成果」の基本語。desempeñar（果たす、演じる）から派生した語。",
  "etymology": "desempeñar（役目を果たす）から派生した語。",
  "synonyms": [],
  "derived": [
   "desempeñar（果たす）"
  ],
  "dialogue": {
   "es": "— Tu desempeño este trimestre fue excelente.\n— Muchas gracias, trabajé muy duro.",
   "ja": "「今四半期の君の成果は素晴らしかったよ」「ありがとうございます、とても頑張りました」"
  }
 },
 "plazo de entrega": {
  "nuance": "「納期」の基本語。plazo（期限）+ de entrega（納品の）の組み合わせ。",
  "etymology": "plazo（期限）+ entregar（届ける）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "plazo（期限）",
   "entregar（届ける）"
  ],
  "dialogue": {
   "es": "— El plazo de entrega es la próxima semana.\n— Vamos a poder cumplirlo.",
   "ja": "「納期は来週だよ」「間に合わせられそうだね」"
  }
 },
 "malentendido": {
  "nuance": "「誤解」の基本語。mal（悪く）+ entender（理解する）の組み合わせ。",
  "etymology": "mal（悪く）+ entender（理解する）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "entender（理解する）"
  ],
  "dialogue": {
   "es": "— Creo que hubo un malentendido.\n— Sí, vamos a aclararlo.",
   "ja": "「誤解があったと思うんだ」「うん、はっきりさせよう」"
  }
 },
 "aclarar": {
  "nuance": "「明確にする」の基本語。claro（明るい、明確な）から派生した語。",
  "etymology": "claro（明確な）から派生した語。",
  "synonyms": [],
  "derived": [
   "claro（明確な）"
  ],
  "dialogue": {
   "es": "— ¿Puedes aclarar ese punto?\n— Claro, lo explico de nuevo.",
   "ja": "「その点を明確にしてもらえる？」「もちろん、もう一度説明するね」"
  }
 },
 "insistir": {
  "nuance": "「主張する」の基本語。insistir en（〜を主張する）という組み合わせでよく使う。",
  "etymology": "ラテン語insistere（上に立つ→固執する）に由来。",
  "synonyms": [],
  "derived": [
   "insistencia（固執）"
  ],
  "dialogue": {
   "es": "— Insisto en que lo hagamos así.\n— Está bien, confío en tu criterio.",
   "ja": "「こうやることを主張するよ」「わかった、君の判断を信じるよ」"
  }
 },
 "ceder": {
  "nuance": "「譲歩する」の基本語。「（席などを）譲る」という意味にもなる。",
  "etymology": "ラテン語cedere（下がる、譲る）に由来。",
  "synonyms": [],
  "derived": [
   "cesión（譲渡）"
  ],
  "dialogue": {
   "es": "— Al final tuve que ceder.\n— A veces es necesario para llegar a un acuerdo.",
   "ja": "「結局譲歩しないといけなかったんだ」「合意に達するには時々必要だよね」"
  }
 },
 "reclamo": {
  "nuance": "「クレーム」の基本語。hacer un reclamo（クレームを出す）はよく使う組み合わせ。",
  "etymology": "reclamar（要求する、クレームをつける）から派生した語。",
  "synonyms": [],
  "derived": [
   "reclamar（要求する）"
  ],
  "dialogue": {
   "es": "— Voy a poner un reclamo por este producto.\n— Cuéntame qué pasó.",
   "ja": "「この商品についてクレームを出すつもりだよ」「何があったか教えて」"
  }
 },
 "queja": {
  "nuance": "「苦情」の基本語。quejarse（不満を言う）から派生した語。",
  "etymology": "quejarse（不満を言う）から派生した語。",
  "synonyms": [],
  "derived": [
   "quejarse（不満を言う）"
  ],
  "dialogue": {
   "es": "— Tengo una queja sobre el servicio.\n— Lo siento mucho, ¿qué pasó?",
   "ja": "「サービスについて苦情があるんです」「大変申し訳ございません、何があったのですか？」"
  }
 },
 "inconveniente": {
  "nuance": "「不都合」の基本語。「不便な、都合が悪い」という形容詞の意味にもなる。",
  "etymology": "in（否定）+ conveniente（都合の良い）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "conveniente（都合の良い）"
  ],
  "dialogue": {
   "es": "— Perdón por el inconveniente.\n— No te preocupes, no pasa nada.",
   "ja": "「ご不便をおかけしてすみません」「気にしないで、大丈夫だよ」"
  }
 },
 "avería": {
  "nuance": "「故障」の基本語。tener una avería（故障している）はよく使う組み合わせ。",
  "etymology": "アラビア語awariyya（損傷した商品）に由来。",
  "synonyms": [],
  "derived": [
   "averiado（故障した）",
   "averiarse（故障する）"
  ],
  "dialogue": {
   "es": "— El coche tiene una avería.\n— Hay que llevarlo al mecánico.",
   "ja": "「車が故障しているんだ」「整備工場に持って行かないとね」"
  }
 },
 "cita médica": {
  "nuance": "「診察予約」の基本語。cita（予約）+ médica（医療の）の組み合わせ。",
  "etymology": "citar（呼び出す）から派生した語。",
  "synonyms": [],
  "derived": [
   "citar（呼び出す）"
  ],
  "dialogue": {
   "es": "— Tengo una cita médica mañana.\n— ¿Para qué es?",
   "ja": "「明日診察予約があるんだ」「何のため？」"
  }
 },
 "receta médica": {
  "nuance": "「処方箋」の基本語。receta（レシピ、処方箋）+ médica（医療の）の組み合わせ。",
  "etymology": "ラテン語recepta（受け取られたもの）に由来。",
  "synonyms": [],
  "derived": [
   "recetar（処方する）"
  ],
  "dialogue": {
   "es": "— Necesito una receta médica para este medicamento.\n— El doctor te la puede dar.",
   "ja": "「この薬には処方箋が必要なんだ」「先生が出してくれるよ」"
  }
 },
 "diagnóstico": {
  "nuance": "「診断」の基本語。diagnosticar（診断する）から派生した語。",
  "etymology": "ギリシャ語diagnosis（見分けること）に由来。",
  "synonyms": [],
  "derived": [
   "diagnosticar（診断する）"
  ],
  "dialogue": {
   "es": "— ¿Cuál fue el diagnóstico?\n— Solo era una gripe común.",
   "ja": "「診断結果は何だったの？」「ただの普通の風邪だったよ」"
  }
 },
 "formulario": {
  "nuance": "「書式」の基本語。llenar un formulario（フォームに記入する）はよく使う組み合わせ。",
  "etymology": "fórmula（公式、書式）から派生した語。",
  "synonyms": [],
  "derived": [
   "fórmula（公式）"
  ],
  "dialogue": {
   "es": "— Tienes que llenar este formulario.\n— ¿Con bolígrafo o lápiz?",
   "ja": "「この書式に記入してください」「ボールペンと鉛筆どちらで？」"
  }
 },
 "firma": {
  "nuance": "「署名」の基本語。firmar（署名する）から派生した名詞。「会社」という意味にもなる。",
  "etymology": "firmar（署名する）から派生した語。",
  "synonyms": [],
  "derived": [
   "firmar（署名する）"
  ],
  "dialogue": {
   "es": "— Necesito su firma aquí.\n— Claro, un momento.",
   "ja": "「ここにあなたの署名が必要です」「もちろん、少々お待ちください」"
  }
 },
 "identificación oficial": {
  "nuance": "「公的身分証明書」の基本語。identificación（身分証明）+ oficial（公的な）の組み合わせ。",
  "etymology": "identificar（身元を確認する）から派生した語。",
  "synonyms": [],
  "derived": [
   "identificar（身元を確認する）"
  ],
  "dialogue": {
   "es": "— ¿Trae alguna identificación oficial?\n— Sí, mi credencial de elector.",
   "ja": "「何か公的身分証明書をお持ちですか？」「はい、選挙人証を持っています」"
  }
 },
 "expedir": {
  "nuance": "「発行する」の基本語。書類・証明書を正式に発行するときに使う。",
  "etymology": "ラテン語expedire（足かせを解く→発送する）に由来。",
  "synonyms": [],
  "derived": [
   "expedición（発行）"
  ],
  "dialogue": {
   "es": "— ¿Dónde expiden el pasaporte?\n— En la oficina de gobernación.",
   "ja": "「パスポートはどこで発行されますか？」「内務省の事務所です」"
  }
 },
 "vencer": {
  "nuance": "「期限切れになる」の基本語。「（試合などで）勝つ」という意味にもなる。",
  "etymology": "ラテン語vincere（勝つ）に由来。",
  "synonyms": [],
  "derived": [
   "vencimiento（満了）"
  ],
  "dialogue": {
   "es": "— Mi licencia vence el próximo mes.\n— Deberías renovarla pronto.",
   "ja": "「私の免許は来月期限切れになるんだ」「早めに更新した方がいいよ」"
  }
 },
 "renovar": {
  "nuance": "「更新する」の基本語。renovar un documento（書類を更新する）はよく使う組み合わせ。",
  "etymology": "re（再び）+ novar（新しくする）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "nuevo（新しい）",
   "renovación（更新）"
  ],
  "dialogue": {
   "es": "— Necesito renovar mi pasaporte.\n— ¿Cuándo vence?",
   "ja": "「パスポートを更新する必要があるんだ」「いつ切れるの？」"
  }
 },
 "cotización": {
  "nuance": "「見積もり」の基本語。cotizar（見積もる）から派生した語。",
  "etymology": "cotizar（見積もる、相場をつける）から派生した語。",
  "synonyms": [],
  "derived": [
   "cotizar（見積もる）"
  ],
  "dialogue": {
   "es": "— Nos enviaron la cotización esta mañana.\n— ¿Cuánto costará?",
   "ja": "「今朝見積もりが送られてきたよ」「いくらになりそう？」"
  }
 },
 "proveedor": {
  "nuance": "「供給業者」の基本語。proveer（供給する）から派生した語。",
  "etymology": "proveer（供給する）から派生した語。",
  "synonyms": [],
  "derived": [
   "proveer（供給する）"
  ],
  "dialogue": {
   "es": "— Cambiamos de proveedor este año.\n— ¿Por qué motivo?",
   "ja": "「今年供給業者を変更したんだ」「どんな理由で？」"
  }
 },
 "sucursal": {
  "nuance": "「支店」の基本語。会社・銀行の支店を指す。",
  "etymology": "ラテン語sub（下に）から派生した語。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Hay una sucursal cerca de mi casa.\n— Qué conveniente.",
   "ja": "「私の家の近くに支店があるんだ」「便利だね」"
  }
 },
 "horario de atención": {
  "nuance": "「営業時間」の基本語。horario（時間割）+ de atención（対応の）の組み合わせ。",
  "etymology": "hora（時間）+ atender（対応する）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "atender（対応する）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es su horario de atención?\n— De nueve a seis, de lunes a sábado.",
   "ja": "「営業時間は何時から何時までですか？」「月曜から土曜、9時から6時までです」"
  }
 },
 "disponibilidad": {
  "nuance": "「空き状況」の基本語。disponible（利用可能な）から派生した語。",
  "etymology": "disponible（利用可能な）から派生した語。",
  "synonyms": [],
  "derived": [
   "disponible（利用可能な）"
  ],
  "dialogue": {
   "es": "— ¿Tienen disponibilidad para mañana?\n— Sí, a las diez de la mañana.",
   "ja": "「明日の空きはありますか？」「はい、午前10時に空いています」"
  }
 },
 "malinterpretar": {
  "nuance": "「誤解する」の基本語。mal（悪く）+ interpretar（解釈する）の組み合わせ。",
  "etymology": "mal（悪く）+ interpretar（解釈する）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "interpretar（解釈する）"
  ],
  "dialogue": {
   "es": "— Creo que malinterpretaste lo que dije.\n— Perdón, déjame explicarlo mejor.",
   "ja": "「私が言ったこと、誤解されたと思うんだ」「ごめん、もっとよく説明させて」"
  }
 },
 "ponerse de acuerdo": {
  "nuance": "「合意する」の基本表現。ponerse（〜になる）+ de acuerdo（合意して）の組み合わせ。",
  "etymology": "acuerdo（合意）から派生した語。",
  "synonyms": [],
  "derived": [
   "acuerdo（合意）"
  ],
  "dialogue": {
   "es": "— Necesitamos ponernos de acuerdo sobre la fecha.\n— ¿Qué tal el viernes?",
   "ja": "「日程について合意する必要があるね」「金曜日はどう？」"
  }
 },
 "disculparse": {
  "nuance": "「謝る」の基本語。disculpa（謝罪、許し）から派生した再帰動詞。",
  "etymology": "disculpa（許し）から派生した語。",
  "synonyms": [],
  "derived": [
   "disculpa（謝罪）"
  ],
  "dialogue": {
   "es": "— Quiero disculparme por lo que pasó.\n— No te preocupes, ya está olvidado.",
   "ja": "「起きたことについて謝りたいんだ」「気にしないで、もう忘れたよ」"
  }
 },
 "justificar": {
  "nuance": "「正当化する」の基本語。justo（正しい）から派生した語。",
  "etymology": "justo（正しい）から派生した語。",
  "synonyms": [],
  "derived": [
   "justo（正しい）",
   "justificación（正当化）"
  ],
  "dialogue": {
   "es": "— No puedo justificar ese gasto.\n— Deberíamos revisarlo juntos.",
   "ja": "「その出費は正当化できないな」「一緒に見直した方がいいね」"
  }
 },
 "postergar": {
  "nuance": "「延期する」の基本語。aplazar（延期する）とほぼ同義。",
  "etymology": "ラテン語posterus（後の）に由来。",
  "synonyms": [
   "aplazar（延期する、ほぼ同義）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Tuvimos que postergar la reunión.\n— ¿Para cuándo la reprogramaron?",
   "ja": "「会議を延期しないといけなかったんだ」「いつに変更したの？」"
  }
 },
 "coordinar": {
  "nuance": "「調整する」の基本語。coordinar con（〜と調整する）という組み合わせもよく使う。",
  "etymology": "co（一緒に）+ ordinar（順序立てる）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "coordinación（調整）",
   "coordinador（コーディネーター）"
  ],
  "dialogue": {
   "es": "— Voy a coordinar con el equipo.\n— Perfecto, avísame los detalles.",
   "ja": "「チームと調整するよ」「わかった、詳細を教えてね」"
  }
 },
 "negociar": {
  "nuance": "「交渉する」の基本語。negociar el precio（値段を交渉する）はよく使う組み合わせ。",
  "etymology": "ラテン語negotiari（商売をする）に由来。",
  "synonyms": [],
  "derived": [
   "negociación（交渉）"
  ],
  "dialogue": {
   "es": "— ¿Se puede negociar el precio?\n— Sí, tenemos algo de margen.",
   "ja": "「値段は交渉できますか？」「はい、多少余裕があります」"
  }
 },
 "asumir": {
  "nuance": "「引き受ける」の基本語。asumir la responsabilidad（責任を引き受ける）はよく使う組み合わせ。",
  "etymology": "ラテン語assumere（取り上げる）に由来。",
  "synonyms": [],
  "derived": [
   "asunción（引き受け）"
  ],
  "dialogue": {
   "es": "— Voy a asumir la responsabilidad de este error.\n— Es admirable que lo reconozcas.",
   "ja": "「このミスの責任を引き受けるよ」「それを認めるなんて立派だね」"
  }
 },
 "delegar": {
  "nuance": "「委任する」の基本語。delegar tareas（仕事を委任する）はよく使う組み合わせ。",
  "etymology": "ラテン語delegare（委ねる）に由来。",
  "synonyms": [],
  "derived": [
   "delegado（代表者）",
   "delegación（委任）"
  ],
  "dialogue": {
   "es": "— Necesito aprender a delegar más.\n— Confiar en tu equipo te ayudará.",
   "ja": "「もっと委任することを学ぶ必要があるんだ」「チームを信頼することが助けになるよ」"
  }
 },
 "priorizar": {
  "nuance": "「優先させる」の基本語。prioridad（優先事項）から派生した語。",
  "etymology": "prioridad（優先事項）から派生した語。",
  "synonyms": [],
  "derived": [
   "prioridad（優先事項）"
  ],
  "dialogue": {
   "es": "— Debemos priorizar las tareas urgentes.\n— Estoy de acuerdo, empecemos por esas.",
   "ja": "「緊急のタスクを優先させないとね」「同感だよ、それらから始めよう」"
  }
 },
 "implementar": {
  "nuance": "「実施する」の基本語。フォーマルなビジネス文脈でよく使う。",
  "etymology": "英語implement（実行する）に由来。",
  "synonyms": [],
  "derived": [
   "implementación（実施）"
  ],
  "dialogue": {
   "es": "— Vamos a implementar el nuevo sistema el lunes.\n— Espero que sea una transición suave.",
   "ja": "「月曜日に新しいシステムを実施するよ」「スムーズな移行だといいね」"
  }
 },
 "solicitud": {
  "nuance": "「申請」の基本語。solicitar（申請する）から派生した語。hacer una solicitud（申請をする）はよく使う組み合わせ。",
  "etymology": "solicitar（申請する）から派生した語。",
  "synonyms": [],
  "derived": [
   "solicitar（申請する）"
  ],
  "dialogue": {
   "es": "— Envié mi solicitud la semana pasada.\n— ¿Ya te respondieron?",
   "ja": "「先週申請を送ったんだ」「もう返事あった？」"
  }
 },
 "acuerdo": {
  "nuance": "「合意」の基本語。llegar a un acuerdo（合意に達する）はよく使う組み合わせ。de acuerdo（了解、賛成）という表現もよく使う。",
  "etymology": "ラテン語accordare（心を一致させる）に由来。",
  "synonyms": [],
  "derived": [
   "acordar（合意する）"
  ],
  "dialogue": {
   "es": "— Llegamos a un acuerdo finalmente.\n— Qué bueno, fue una negociación larga.",
   "ja": "「ついに合意に達したよ」「よかった、長い交渉だったね」"
  }
 },
 "contrato": {
  "nuance": "「契約」の基本語。firmar un contrato（契約書に署名する）はよく使う組み合わせ。",
  "etymology": "ラテン語contractus（結ばれたもの）に由来。",
  "synonyms": [],
  "derived": [
   "contratar（契約する、雇う）"
  ],
  "dialogue": {
   "es": "— Necesito leer el contrato antes de firmarlo.\n— Buena idea, siempre hay que revisarlo bien.",
   "ja": "「署名する前に契約書を読む必要があるんだ」「いい考えだね、いつもよく確認しないと」"
  }
 },
 "cláusula": {
  "nuance": "「条項」の基本語。契約書などの個別の項目を指す。",
  "etymology": "ラテン語clausula（閉じられたもの）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Hay una cláusula que no entiendo bien.\n— Pregúntale al abogado.",
   "ja": "「よく理解できない条項があるんだ」「弁護士に聞いてみて」"
  }
 },
 "arrendamiento": {
  "nuance": "「賃貸借」の基本語。arrendar（賃貸する）から派生した語。alquilerともほぼ同義でよく使われる。",
  "etymology": "arrendar（賃貸する）から派生した語。",
  "synonyms": [
   "alquiler（賃貸、より一般的）"
  ],
  "derived": [
   "arrendar（賃貸する）"
  ],
  "dialogue": {
   "es": "— El contrato de arrendamiento es por un año.\n— ¿Se puede renovar después?",
   "ja": "「賃貸契約は1年間なんだ」「その後更新できるの？」"
  }
 },
 "inquilino": {
  "nuance": "「賃借人」の基本語。propietario（所有者、大家）の対義語。",
  "etymology": "ラテン語inquilinus（住み込みの人）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Somos buenos inquilinos, siempre pagamos a tiempo.\n— Eso es importante para el propietario.",
   "ja": "「私たちはいい賃借人だよ、いつも時間通りに払っているし」「それは大家さんにとって大事なことだよね」"
  }
 },
 "propietario": {
  "nuance": "「所有者、大家」の基本語。女性形はpropietaria。dueño（オーナー、より口語的）とほぼ同義。",
  "etymology": "propiedad（所有物）から派生した語。",
  "synonyms": [
   "dueño（オーナー、より口語的）"
  ],
  "derived": [
   "propiedad（所有物）"
  ],
  "dialogue": {
   "es": "— Tengo que hablar con el propietario sobre la reparación.\n— ¿Ya le avisaste?",
   "ja": "「修理について大家さんと話さないといけないんだ」「もう知らせた？」"
  }
 },
 "póliza": {
  "nuance": "「保険証券」の基本語。póliza de seguro（保険証券）はよく使う組み合わせ。",
  "etymology": "イタリア語polizza（証書）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Qué cubre tu póliza de seguro?\n— Cubre accidentes y robo.",
   "ja": "「あなたの保険証券は何をカバーしているの？」「事故と盗難をカバーしているよ」"
  }
 },
 "indemnización": {
  "nuance": "「賠償金」の基本語。indemnizar（賠償する）から派生した語。",
  "etymology": "indemnizar（賠償する）から派生した語。",
  "synonyms": [],
  "derived": [
   "indemnizar（賠償する）"
  ],
  "dialogue": {
   "es": "— Recibió una indemnización por el accidente.\n— Espero que le haya ayudado con los gastos.",
   "ja": "「事故の賠償金を受け取ったんだ」「費用の助けになるといいね」"
  }
 },
 "nómina": {
  "nuance": "「給与明細」の基本語。estar en nómina（正社員として雇われている）という表現もよく使う。",
  "etymology": "ラテン語nomina（名前のリスト）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Revisé mi nómina y hay un error.\n— Deberías hablar con recursos humanos.",
   "ja": "「給与明細を確認したらミスがあったんだ」「人事部に話した方がいいよ」"
  }
 },
 "sueldo neto": {
  "nuance": "「手取り給与」の基本語。sueldo bruto（総支給額）との対比でよく使われる。",
  "etymology": "neto（純粋な、正味の）から派生した語。",
  "synonyms": [],
  "derived": [
   "sueldo（給与）"
  ],
  "dialogue": {
   "es": "— ¿Cuál es tu sueldo neto?\n— Después de impuestos, es un poco menos de lo esperado.",
   "ja": "「手取り給与はいくら？」「税金引かれた後は、思ったより少し少ないんだ」"
  }
 },
 "prestaciones": {
  "nuance": "「福利厚生」の基本語。健康保険・ボーナスなど給与以外の待遇を指す。",
  "etymology": "prestar（貸す、提供する）から派生した語。",
  "synonyms": [],
  "derived": [
   "prestar（提供する）"
  ],
  "dialogue": {
   "es": "— Este trabajo tiene buenas prestaciones.\n— Incluyendo seguro médico, supongo.",
   "ja": "「この仕事は福利厚生がいいんだ」「医療保険も含めてだろうね」"
  }
 },
 "jubilación": {
  "nuance": "「退職、年金」の基本語。jubilarse（退職する）から派生した語。",
  "etymology": "ラテン語jubilare（喜びを表す）に由来。",
  "synonyms": [],
  "derived": [
   "jubilarse（退職する）"
  ],
  "dialogue": {
   "es": "— Está ahorrando para su jubilación.\n— Es importante empezar temprano.",
   "ja": "「彼は退職に向けて貯金しているんだ」「早く始めるのが大事だよね」"
  }
 },
 "renuncia": {
  "nuance": "「退職、辞職」の基本語。renunciar（辞める）から派生した語。",
  "etymology": "renunciar（辞める）から派生した語。",
  "synonyms": [],
  "derived": [
   "renunciar（辞める）"
  ],
  "dialogue": {
   "es": "— Presenté mi renuncia ayer.\n— ¿Qué vas a hacer ahora?",
   "ja": "「昨日退職届を出したんだ」「これから何するつもり？」"
  }
 },
 "despido": {
  "nuance": "「解雇」の基本語。despedir（解雇する）から派生した語。",
  "etymology": "despedir（解雇する）から派生した語。",
  "synonyms": [],
  "derived": [
   "despedir（解雇する）"
  ],
  "dialogue": {
   "es": "— Hubo varios despidos en la empresa.\n— Qué difícil momento para todos.",
   "ja": "「会社でいくつか解雇があったんだ」「みんなにとって大変な時期だね」"
  }
 },
 "desempleo": {
  "nuance": "「失業」の基本語。desempleado（失業者）から派生した語。",
  "etymology": "des（否定）+ empleo（雇用）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "empleo（雇用）",
   "desempleado（失業者）"
  ],
  "dialogue": {
   "es": "— El desempleo bajó este año.\n— Es una buena señal para la economía.",
   "ja": "「今年失業率が下がったんだ」「経済にとっていい兆候だね」"
  }
 },
 "postularse": {
  "nuance": "「応募する」の基本語。postular（推薦する、応募する）の再帰形。aplicarとほぼ同義。",
  "etymology": "ラテン語postulare（要求する）に由来。",
  "synonyms": [
   "aplicar（応募する、ほぼ同義）"
  ],
  "derived": [
   "postulación（応募）"
  ],
  "dialogue": {
   "es": "— Me postulé para ese puesto.\n— ¡Buena suerte! Espero que te lo den.",
   "ja": "「その職に応募したんだ」「頑張って！採用されるといいね」"
  }
 },
 "entrevista de trabajo": {
  "nuance": "「就職面接」の基本語。entrevista（面接）+ de trabajo（仕事の）の組み合わせ。",
  "etymology": "entrevistar（インタビューする）から派生した語。",
  "synonyms": [],
  "derived": [
   "entrevista（面接）"
  ],
  "dialogue": {
   "es": "— Tengo una entrevista de trabajo mañana.\n— ¡Mucho éxito!",
   "ja": "「明日就職面接があるんだ」「頑張ってね！」"
  }
 },
 "siniestro": {
  "nuance": "「保険事故」の基本語。保険が適用される事故・災害を指す。「不吉な、邪悪な」という形容詞の意味にもなる。",
  "etymology": "ラテン語sinister（左の、不吉な）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Tuvimos que reportar el siniestro a la aseguradora.\n— ¿Cuánto tiempo tarda el proceso?",
   "ja": "「その保険事故を保険会社に報告しないといけなかったんだ」「手続きにどれくらい時間かかる？」"
  }
 },
 "tripa": {
  "nuance": "「トリッパ、臓物」の基本語。タコスの具材として使われ、コリコリとした食感が特徴。tripasと複数形で使われることも多い。",
  "etymology": "ラテン語系の語tripa（内臓）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Has probado tacos de tripa?\n— Sí, tienen una textura muy interesante.",
   "ja": "「トリッパのタコス食べたことある？」「うん、すごく面白い食感なんだよね」"
  }
 },
 "suadero": {
  "nuance": "「スアデロ」の基本語。牛の腹部・胸の肉を使った、メキシコシティのタコスで特に人気の部位。柔らかくジューシーなのが特徴。",
  "etymology": "sudar（汗をかく）から派生した語、調理法に由来するとされる。",
  "synonyms": [],
  "derived": [
   "sudar（汗をかく）"
  ],
  "dialogue": {
   "es": "— Los tacos de suadero son los mejores de la ciudad.\n— Estoy de acuerdo, la carne es muy suave.",
   "ja": "「スアデロのタコスは街で一番美味しいんだ」「同感だよ、お肉がとても柔らかいよね」"
  }
 },
 "carnitas": {
  "nuance": "「カルニータス」の基本語。豚肉をじっくり油で煮込んで作る、ミチョアカン州発祥の料理。タコスやトルタの具として大人気。",
  "etymology": "carne（肉）の指小形に由来。",
  "synonyms": [],
  "derived": [
   "carne（肉）"
  ],
  "dialogue": {
   "es": "— Las carnitas de Michoacán son famosas.\n— Sí, tienen una técnica especial de cocción.",
   "ja": "「ミチョアカンのカルニータスは有名なんだ」「うん、特別な調理法があるんだよね」"
  }
 },
 "birria": {
  "nuance": "「ビリア」の基本語。ハリスコ州発祥の、スパイスで煮込んだ肉料理（伝統的にはヤギ肉、現在は牛肉も一般的）。スープに浸して食べるtacos de birriaが特に有名。",
  "etymology": "起源は諸説あるが、俗ラテン語系の語とされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Los tacos de birria se comen con consomé.\n— Es mi platillo favorito los fines de semana.",
   "ja": "「ビリアのタコスはコンソメと一緒に食べるんだ」「週末に一番好きな料理なんだよね」"
  }
 },
 "barbacoa": {
  "nuance": "「バルバコア」の基本語。肉を地下の穴やマゲイの葉で包んでじっくり蒸し焼きにする伝統的な調理法。特にイダルゴ州で有名で、日曜日の朝食としてよく食べられる。",
  "etymology": "タイノ語barbacoa（木の台）に由来、英語barbecueも同語源。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Los domingos comemos barbacoa con mi familia.\n— Es una tradición muy rica.",
   "ja": "「日曜日は家族でバルバコアを食べるんだ」「とても豊かな伝統だよね」"
  }
 },
 "cochinita pibil": {
  "nuance": "「コチニータ・ピビル」の基本語。ユカタン半島発祥の料理で、豚肉をアチオテ（アナトー）とサワーオレンジでマリネしてバナナの葉で包んで蒸し焼きにする。",
  "etymology": "cochino（豚）+ マヤ語pibil（地中で焼いた）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "cochino（豚）"
  ],
  "dialogue": {
   "es": "— La cochinita pibil es típica de Yucatán.\n— Se sirve con cebolla morada encurtida.",
   "ja": "「コチニータ・ピビルはユカタンの名物なんだ」「紫玉ねぎのピクルスと一緒に出されるんだよね」"
  }
 },
 "chicharrón": {
  "nuance": "「チチャロン」の基本語。豚の皮を揚げたスナック・食材。サラダやタコスの具、そのままおやつとしても食べられる。",
  "etymology": "起源は諸説あるが、俗ラテン語系の語とされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El chicharrón está muy crujiente.\n— Me encanta con salsa verde.",
   "ja": "「チチャロン、とてもパリパリだね」「緑のサルサと一緒に食べるのが大好きなんだ」"
  }
 },
 "lengua": {
  "nuance": "「タン」の基本語。牛の舌を柔らかく煮込んだタコスの具材として人気。「言語」という意味にもなる。",
  "etymology": "ラテン語lingua（舌、言語）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Has probado tacos de lengua?\n— Sí, son más suaves de lo que esperaba.",
   "ja": "「タンのタコス食べたことある？」「うん、思っていたより柔らかかったよ」"
  }
 },
 "bistec": {
  "nuance": "「ビステック」の基本語。英語beefsteakのスペイン語表記。メキシコでは薄切り肉全般を指すことが多い。",
  "etymology": "英語beefsteak（牛肉のステーキ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Quiero tacos de bistec con todo.\n— Yo también, con guacamole extra.",
   "ja": "「ビステックのタコス、全部乗せで頼みたいな」「私もだよ、ワカモレ多めで」"
  }
 },
 "campechano": {
  "nuance": "「カンペチャーノ」の基本語。複数の種類の肉(bistec+chorizoなど)を混ぜたタコス。カンペチェ州とは直接関係なく、「混ぜ合わせた」という意味の口語から。",
  "etymology": "Campeche（カンペチェ州）に由来するとされるが、混合を意味する口語表現として広まった。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Pido un taco campechano.\n— A mí también, me gusta la mezcla de sabores.",
   "ja": "「カンペチャーノのタコスを頼むよ」「私もだよ、味の組み合わせが好きなんだ」"
  }
 },
 "nopales": {
  "nuance": "「ノパル」の基本語。食用サボテンの若い葉。焼いたりサラダにしたり、様々な調理法で食べられるメキシコ料理の定番食材。",
  "etymology": "ナワトル語nohpalliに由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Los nopales asados están deliciosos.\n— Son muy buenos para la salud también.",
   "ja": "「焼いたノパル、美味しいね」「健康にもとてもいいんだよね」"
  }
 },
 "cilantro": {
  "nuance": "「パクチー」の基本語。メキシコ料理に欠かせないハーブで、タコスの薬味として玉ねぎと一緒に使われることが多い。",
  "etymology": "ラテン語coriandrum（コリアンダー）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Le pones cilantro a tus tacos?\n— Sí, siempre con cebolla también.",
   "ja": "「タコスにパクチー入れる？」「うん、いつも玉ねぎも一緒にね」"
  }
 },
 "antojitos": {
  "nuance": "「アントヒート」の基本語。屋台や市場で売られるメキシコの軽食・スナック料理全般を指す総称（タコス、ケサディーヤ、ソペスなど）。",
  "etymology": "antojo（食欲、欲求）の指小形に由来。",
  "synonyms": [],
  "derived": [
   "antojo（食欲、欲求）"
  ],
  "dialogue": {
   "es": "— Vamos a comer antojitos en el mercado.\n— Me encanta probar de todo un poco.",
   "ja": "「市場でアントヒートを食べに行こう」「少しずつ色々試すの大好きなんだ」"
  }
 },
 "comal": {
  "nuance": "「コマル」の基本語。トルティーヤを焼くための平たい鉄板・陶板。メキシコの台所に欠かせない伝統的な調理器具。",
  "etymology": "ナワトル語comalliに由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Mi abuela todavía usa un comal de barro.\n— Las tortillas saben diferente así.",
   "ja": "「私の祖母はまだ土製のコマルを使っているんだ」「そうやって作ると味が違うんだよね」"
  }
 },
 "molcajete": {
  "nuance": "「モルカヘテ」の基本語。火山岩でできたすり鉢で、サルサをすりつぶすのに使う伝統的な道具。料理をそのまま盛り付ける器としても使われる。",
  "etymology": "ナワトル語molcaxitl（すり鉢）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Esta salsa está hecha en molcajete.\n— Se nota, tiene una textura diferente.",
   "ja": "「このサルサはモルカヘテで作ったんだ」「わかるよ、質感が違うもんね」"
  }
 },
 "combi": {
  "nuance": "「コンビ」の基本語。乗り合いのミニバン・小型バス。メキシコの地方都市でよく使われる庶民の交通手段。",
  "etymology": "英語combination（組み合わせ）から派生したとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Tomé una combi para llegar aquí.\n— ¿Es económica?",
   "ja": "「ここに来るのにコンビに乗ったんだ」「安いの？」"
  }
 },
 "pesero": {
  "nuance": "「ペセロ」の基本語。メキシコシティの乗り合いミニバス。かつて運賃が1ペソだったことに由来する名称。",
  "etymology": "peso（ペソ）から派生した語、かつての運賃に由来。",
  "synonyms": [],
  "derived": [
   "peso（ペソ）"
  ],
  "dialogue": {
   "es": "— El pesero pasa cada diez minutos.\n— Es más rápido que el metro a veces.",
   "ja": "「ペセロは10分おきに来るんだ」「時々地下鉄より速いんだよね」"
  }
 },
 "changarro": {
  "nuance": "「チャンガロ」の基本語。個人経営の小さな店・商店を指すメキシコの口語。",
  "etymology": "起源ははっきりしないが、俗語として広まった。",
  "synonyms": [
   "tiendita（小さな店）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Hay un changarro en la esquina que vende de todo.\n— Es muy conveniente tenerlo cerca.",
   "ja": "「角に何でも売っている個人商店があるんだ」「近くにあるととても便利だよね」"
  }
 },
 "tianguis": {
  "nuance": "「ティアングイス」の基本語。決まった曜日に開かれる青空市・露天市場。アステカ時代からの伝統が今も続いている。",
  "etymology": "ナワトル語tianquiztli（市場）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El tianguis de los martes está cerca de mi casa.\n— ¿Qué venden ahí?",
   "ja": "「火曜日のティアングイスは私の家の近くなんだ」「そこでは何を売っているの？」"
  }
 },
 "colonia": {
  "nuance": "「コロニア」の基本語。メキシコで「地区、町内」を意味する語（他のスペイン語圏ではbarrioの方が一般的）。住所にもよく使われる（例:Colonia Roma）。「香水」という意味にもなる。",
  "etymology": "ラテン語colonia（植民地）に由来。",
  "synonyms": [
   "barrio（地区、他地域で一般的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿En qué colonia vives?\n— En la Colonia Condesa.",
   "ja": "「どのコロニアに住んでいるの？」「コンデサ地区だよ」"
  }
 },
 "banqueta": {
  "nuance": "「バンケタ」の基本語。メキシコで「歩道」を意味する語（他のスペイン語圏ではaceraの方が一般的）。",
  "etymology": "フランス語banquette（小さなベンチ）に由来。",
  "synonyms": [
   "acera（歩道、他地域で一般的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— La banqueta está en mal estado aquí.\n— Hay que tener cuidado al caminar.",
   "ja": "「ここの歩道は状態が悪いね」「歩くとき気をつけないと」"
  }
 },
 "alberca": {
  "nuance": "「アルベルカ」の基本語。メキシコで「プール」を意味する語（他のスペイン語圏ではpiscinaの方が一般的）。",
  "etymology": "アラビア語al-birka（貯水池）に由来。",
  "synonyms": [
   "piscina（プール、他地域で一般的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— El hotel tiene alberca.\n— Perfecto, hace mucho calor.",
   "ja": "「そのホテルにはプールがあるんだ」「よかった、とても暑いから」"
  }
 },
 "popote": {
  "nuance": "「ポポテ」の基本語。メキシコで「ストロー」を意味する語（他のスペイン語圏ではpajita/sorbete/bombillaなど地域差が大きい）。",
  "etymology": "ナワトル語popotl（葦、茎）に由来。",
  "synonyms": [
   "pajita（ストロー、他地域で一般的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Me puede dar un popote?\n— Claro, aquí tiene.",
   "ja": "「ストローもらえますか？」「はい、どうぞ」"
  }
 },
 "fonda": {
  "nuance": "「フォンダ」の基本語。家族経営の小さな食堂で、comida corrida（日替わり定食）を出す庶民的な店。",
  "etymology": "アラビア語funduq（宿屋）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Vamos a comer en la fonda de la esquina.\n— Ahí hacen buena comida casera.",
   "ja": "「角のフォンダで食べよう」「そこは美味しい家庭料理を出すんだよね」"
  }
 },
 "credencial para votar": {
  "nuance": "「選挙人証」の基本語。メキシコでは投票のためだけでなく、事実上の身分証明書として銀行口座開設など様々な場面で使われる。INE（国立選挙機構）が発行する。",
  "etymology": "credencial（証明書）+ para votar（投票のための）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "credencial（証明書）"
  ],
  "dialogue": {
   "es": "— Necesitas tu credencial para votar para este trámite.\n— La tengo aquí conmigo.",
   "ja": "「この手続きには選挙人証が必要です」「今持っているよ」"
  }
 },
 "curp": {
  "nuance": "「CURP」の基本語。Clave Única de Registro de Poblaciónの略で、メキシコ国民・居住者に割り当てられる18桁の個人識別コード。ほぼすべての公的手続きで必要。",
  "etymology": "Clave Única de Registro de Población（人口登録統一コード）の略。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Necesito mi CURP para este trámite.\n— Puedes obtenerlo en línea.",
   "ja": "「この手続きにCURPが必要なんだ」「オンラインで取得できるよ」"
  }
 },
 "rfc": {
  "nuance": "「RFC」の基本語。Registro Federal de Contribuyentesの略で、税務者登録番号。領収書の発行などに必要。",
  "etymology": "Registro Federal de Contribuyentes（連邦納税者登録）の略。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Me puede dar factura con mi RFC?\n— Claro, deme sus datos.",
   "ja": "「私のRFCで領収書もらえますか？」「もちろん、情報を教えてください」"
  }
 },
 "imss": {
  "nuance": "「IMSS」の基本語。Instituto Mexicano del Seguro Socialの略で、メキシコの社会保障機構。公的医療・年金制度を運営する。",
  "etymology": "Instituto Mexicano del Seguro Social（メキシコ社会保障機構）の略。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Tengo cita en el IMSS mañana.\n— ¿Es tu primera consulta ahí?",
   "ja": "「明日IMSSで予約があるんだ」「そこでの初診なの？」"
  }
 },
 "chela": {
  "nuance": "「ビール」を意味する口語表現。cervezaより気軽な、友人同士でよく使う言い方。",
  "etymology": "起源ははっきりしないが、俗語として広まった。",
  "synonyms": [
   "cerveza（ビール、標準的な言い方）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Vamos por unas chelas?\n— ¡Claro que sí!",
   "ja": "「ビール飲みに行かない？」「もちろん行こう！」"
  }
 },
 "chorizo": {
  "nuance": "「チョリソ」の基本語。メキシコのチョリソはスペイン産と違い、生の状態で調理する軟らかいソーセージが一般的。タコスやサルサ用の具材としてもよく使われる。",
  "etymology": "起源は諸説あるが、俗ラテン語系の語とされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El chorizo con papas es delicioso.\n— Es un desayuno muy común aquí.",
   "ja": "「チョリソとじゃがいもの組み合わせは美味しいね」「ここではよくある朝食なんだよ」"
  }
 },
 "fraccionamiento": {
  "nuance": "「住宅開発区、分譲地」の基本語。フェンスやゲートで区切られた計画的な住宅地区を指す、メキシコでよく使われる語。",
  "etymology": "fraccionar（区分する）から派生した語。",
  "synonyms": [],
  "derived": [
   "fraccionar（区分する）"
  ],
  "dialogue": {
   "es": "— Vivimos en un fraccionamiento con seguridad las 24 horas.\n— Debe ser muy tranquilo.",
   "ja": "「私たちは24時間警備のある住宅地区に住んでいるんだ」「きっととても静かなんだろうね」"
  }
 },
 "ine": {
  "nuance": "「INE」の基本語。Instituto Nacional Electoralの略で、国立選挙機構。選挙人証（credencial para votar）を発行する機関で、この証明書自体を指して「INE」と呼ぶことも日常会話で非常に多い。",
  "etymology": "Instituto Nacional Electoral（国立選挙機構）の略。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Trae su INE?\n— Sí, aquí está.",
   "ja": "「選挙人証(INE)をお持ちですか？」「はい、こちらです」"
  }
 },
 "autopista": {
  "nuance": "「高速道路」の基本語。auto（自動車の）+ pista（道）の組み合わせ。メキシコの高速道路は有料（de cuota）と無料（libre）の2種類があることが多い。",
  "etymology": "auto（自動車）+ pista（道）の組み合わせ。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— ¿Tomamos la autopista o la carretera libre?\n— La autopista, así llegamos más rápido.",
   "ja": "「高速道路と無料道路、どっち使う？」「高速道路にしよう、そっちの方が早く着くから」"
  }
 },
 "carretera": {
  "nuance": "「幹線道路」の基本語。autopista（高速道路、より大規模）とは区別されるが、一般的な道路全般を指すこともある。",
  "etymology": "carro（車）から派生した語。",
  "synonyms": [],
  "derived": [
   "carro（車）"
  ],
  "dialogue": {
   "es": "— La carretera a Cuernavaca tiene buena vista.\n— Sí, se ve el volcán desde ahí.",
   "ja": "「クエルナバカへの道は景色がいいんだ」「うん、そこから火山が見えるよね」"
  }
 },
 "caseta de cobro": {
  "nuance": "「料金所」の基本語。caseta（小屋）+ de cobro（徴収の）の組み合わせ。メキシコの高速道路で通行料を支払う場所。",
  "etymology": "caseta（小屋）+ cobrar（徴収する）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "cobrar（徴収する）"
  ],
  "dialogue": {
   "es": "— Hay tráfico en la caseta de cobro.\n— Vamos a tardar un poco más.",
   "ja": "「料金所で渋滞しているね」「もう少し時間がかかりそうだね」"
  }
 },
 "cuota": {
  "nuance": "「通行料金」の基本語。メキシコでは高速道路の通行料を指す一般的な語（peajeも通じるが、cuotaの方が日常でよく使われる）。carretera de cuota（有料道路）はよく使う組み合わせ。",
  "etymology": "ラテン語quota（各自の分）に由来。",
  "synonyms": [
   "peaje（通行料、他地域でより一般的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cuánto cuesta la cuota hasta allá?\n— Como doscientos pesos.",
   "ja": "「そこまでの通行料はいくら？」「200ペソくらいだよ」"
  }
 },
 "carretera libre": {
  "nuance": "「無料道路」の基本語。carretera de cuota（有料道路）の対義語。時間はかかるが料金がかからない。",
  "etymology": "carretera（道路）+ libre（自由な、無料の）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "libre（自由な）"
  ],
  "dialogue": {
   "es": "— La carretera libre tarda más pero es gratis.\n— A veces vale la pena por el ahorro.",
   "ja": "「無料道路の方が時間はかかるけど無料なんだ」「節約のために時々その価値があるよね」"
  }
 },
 "gasolinera": {
  "nuance": "「ガソリンスタンド」の基本語。gasolina（ガソリン）から派生した語。",
  "etymology": "gasolina（ガソリン）から派生した語。",
  "synonyms": [],
  "derived": [
   "gasolina（ガソリン）"
  ],
  "dialogue": {
   "es": "— Necesitamos parar en una gasolinera.\n— Hay una a dos kilómetros.",
   "ja": "「ガソリンスタンドに寄る必要があるね」「2キロ先にあるよ」"
  }
 },
 "gasolina": {
  "nuance": "「ガソリン」の基本語。gasolina magna（レギュラー）、gasolina premium（ハイオク）のように種類を区別する。",
  "etymology": "英語gasoline（gas＋oil由来）に由来。",
  "synonyms": [],
  "derived": [
   "gasolinera（ガソリンスタンド）"
  ],
  "dialogue": {
   "es": "— Llénalo con gasolina magna, por favor.\n— Enseguida.",
   "ja": "「レギュラーガソリンで満タンにしてください」「かしこまりました」"
  }
 },
 "grúa": {
  "nuance": "「レッカー車」の基本語。「クレーン」という建設機械の意味にもなる。",
  "etymology": "grulla（鶴、首の長い形状から）から派生した語。",
  "synonyms": [],
  "derived": [
   "grulla（鶴）"
  ],
  "dialogue": {
   "es": "— El coche se descompuso, hay que llamar a la grúa.\n— Ya tengo el número a la mano.",
   "ja": "「車が壊れちゃった、レッカー車を呼ばないと」「もう電話番号手元にあるよ」"
  }
 },
 "verificación vehicular": {
  "nuance": "「車検（排ガス検査）」の基本語。メキシコシティなど都市部で義務付けられている、ナンバープレートの末尾番号によって時期が決まる排出ガス検査制度。",
  "etymology": "verificar（確認する）から派生した語。",
  "synonyms": [],
  "derived": [
   "verificar（確認する）"
  ],
  "dialogue": {
   "es": "— Tengo que hacer la verificación vehicular este mes.\n— No lo dejes para el último día.",
   "ja": "「今月車検を受けないといけないんだ」「最終日まで待たない方がいいよ」"
  }
 },
 "tenencia": {
  "nuance": "「自動車税」の基本語。メキシコで車両所有者が支払う年間税金（州によって呼び名や制度が異なる場合がある）。",
  "etymology": "tener（持つ）から派生した語。",
  "synonyms": [],
  "derived": [
   "tener（持つ）"
  ],
  "dialogue": {
   "es": "— ¿Ya pagaste la tenencia de este año?\n— Sí, la pagué en enero.",
   "ja": "「今年の自動車税もう払った？」「うん、1月に払ったよ」"
  }
 },
 "placas": {
  "nuance": "「ナンバープレート」の基本語。単数形placaもあるが、車には通常2枚あるため複数形でよく使われる。",
  "etymology": "フランス語plaque（板）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Se me olvidaron mis placas en el otro coche.\n— Vas a tener que ir por ellas.",
   "ja": "「別の車にナンバープレートを忘れちゃった」「取りに行かないといけないね」"
  }
 },
 "estacionamiento": {
  "nuance": "「駐車場」の基本語。estacionar（駐車する）から派生した語。",
  "etymology": "estacionar（駐車する）から派生した語。",
  "synonyms": [],
  "derived": [
   "estacionar（駐車する）"
  ],
  "dialogue": {
   "es": "— ¿Hay estacionamiento gratis aquí?\n— Sí, en la parte de atrás.",
   "ja": "「ここに無料駐車場ある？」「うん、裏側にあるよ」"
  }
 },
 "tope": {
  "nuance": "「減速バンプ」の基本語。メキシコの道路に非常に多く設置されている、車の速度を落とすための盛り上がり。他地域ではreductor de velocidad、topeなど様々な呼び方がある。",
  "etymology": "topar（ぶつかる）から派生した語。",
  "synonyms": [],
  "derived": [
   "topar（ぶつかる）"
  ],
  "dialogue": {
   "es": "— Cuidado, hay un tope adelante.\n— Gracias, casi no lo veo.",
   "ja": "「気をつけて、前に減速バンプがあるよ」「ありがとう、ほとんど見えなかった」"
  }
 },
 "carril": {
  "nuance": "「車線」の基本語。cambiar de carril（車線変更する）はよく使う組み合わせ。",
  "etymology": "carro（車）から派生した語。",
  "synonyms": [],
  "derived": [
   "carro（車）"
  ],
  "dialogue": {
   "es": "— Ponte en el carril derecho.\n— Ya voy a cambiar.",
   "ja": "「右車線に入って」「もう変えるところだよ」"
  }
 },
 "límite de velocidad": {
  "nuance": "「制限速度」の基本語。límite（限界）+ de velocidad（速度の）の組み合わせ。",
  "etymology": "límite（限界）+ velocidad（速度）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "límite（限界）",
   "velocidad（速度）"
  ],
  "dialogue": {
   "es": "— El límite de velocidad aquí es de sesenta.\n— Voy a bajar la velocidad.",
   "ja": "「ここの制限速度は60キロだよ」「速度を落とすね」"
  }
 },
 "multa de tránsito": {
  "nuance": "「交通違反切符」の基本語。multa（罰金）+ de tránsito（交通の）の組み合わせ。",
  "etymology": "multa（罰金）から派生した語。",
  "synonyms": [],
  "derived": [
   "multa（罰金）"
  ],
  "dialogue": {
   "es": "— Me pusieron una multa de tránsito.\n— ¿Por qué motivo?",
   "ja": "「交通違反切符切られちゃった」「どんな理由で？」"
  }
 },
 "seguro de auto": {
  "nuance": "「自動車保険」の基本語。seguro（保険）+ de auto（車の）の組み合わせ。",
  "etymology": "seguro（安全な、保険）から派生した語。",
  "synonyms": [],
  "derived": [
   "seguro（保険）"
  ],
  "dialogue": {
   "es": "— ¿Tienes seguro de auto?\n— Sí, es obligatorio en algunos estados.",
   "ja": "「自動車保険入ってる？」「うん、一部の州では義務なんだ」"
  }
 },
 "taller mecánico": {
  "nuance": "「自動車修理工場」の基本語。taller（工房）+ mecánico（機械の、修理工の）の組み合わせ。",
  "etymology": "taller（作業場）+ mecánico（機械工）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "mecánico（修理工）"
  ],
  "dialogue": {
   "es": "— Llevé el carro al taller mecánico.\n— ¿Qué le pasaba?",
   "ja": "「車を修理工場に持って行ったんだ」「何があったの？」"
  }
 },
 "ponchadura": {
  "nuance": "「パンク」の基本語。メキシコで一般的な言い方（他地域ではpinchazoも使われる）。ponchar（パンクさせる）から派生。",
  "etymology": "ponchar（パンクさせる）から派生した語。",
  "synonyms": [
   "pinchazo（パンク、他地域）"
  ],
  "derived": [
   "ponchar（パンクさせる）"
  ],
  "dialogue": {
   "es": "— Tuve una ponchadura en la carretera.\n— Qué mala suerte, ¿tenías llanta de refacción?",
   "ja": "「道路でパンクしちゃったんだ」「運が悪かったね、スペアタイヤ持ってた？」"
  }
 },
 "libramiento": {
  "nuance": "「バイパス道路」の基本語。都市の中心部を避けて通る迂回路。",
  "etymology": "librar（免れる、解放する）から派生した語。",
  "synonyms": [],
  "derived": [
   "librar（免れる）"
  ],
  "dialogue": {
   "es": "— Toma el libramiento para evitar el centro.\n— Buena idea, siempre hay tráfico ahí.",
   "ja": "「中心街を避けるならバイパス道路を使って」「いい考えだね、そこはいつも渋滞しているから」"
  }
 },
 "segundo piso": {
  "nuance": "「高架高速道路」の基本語。直訳は「二階」で、メキシコシティにある既存の道路の上に建てられた高架式高速道路を指す通称。",
  "etymology": "segundo（第二の）+ piso（階）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "piso（階）"
  ],
  "dialogue": {
   "es": "— Tomamos el segundo piso para evitar el tráfico.\n— Es mucho más rápido así.",
   "ja": "「渋滞を避けるために高架高速道路を使ったんだ」「その方がずっと速いよね」"
  }
 },
 "chafa": {
  "nuance": "「安っぽい、質の悪い」を意味するメキシコの口語形容詞。malo（悪い）よりも「見た目や質が安っぽい」というニュアンスが強い。",
  "etymology": "起源ははっきりしないが、俗語として広まった。",
  "synonyms": [
   "barato（安い、より中立的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Esta mochila es un poco chafa.\n— Sí, se le rompió el cierre rápido.",
   "ja": "「このリュック、ちょっと安っぽいね」「うん、ファスナーがすぐ壊れちゃった」"
  }
 },
 "a huevo": {
  "nuance": "「絶対に、当然」を意味するメキシコの口語表現。強い確信・強制を表す（やや荒っぽい表現なので使う相手を選ぶ）。",
  "etymology": "huevo（卵、俗語では「気合、根性」）から派生した表現。",
  "synonyms": [
   "claro que sí（もちろん）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Vas a ir a la fiesta?\n— A huevo, no me la pierdo.",
   "ja": "「パーティー行くの？」「もちろん行くよ、見逃さないよ」"
  }
 },
 "simón": {
  "nuance": "「うん」を意味するメキシコの口語表現。síの砕けた言い方。",
  "etymology": "sí（はい）が音変化した俗語とされる。",
  "synonyms": [
   "sí（はい、標準的な言い方）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Quieres ir a comer?\n— Simón, tengo hambre.",
   "ja": "「食べに行きたい？」「うん、お腹すいた」"
  }
 },
 "nel": {
  "nuance": "「いや」を意味するメキシコの口語表現。noの砕けた言い方。",
  "etymology": "no（いいえ）が音変化した俗語とされる。",
  "synonyms": [
   "no（いいえ、標準的な言い方）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Quieres venir?\n— Nel, estoy muy cansado.",
   "ja": "「来たい？」「いや、すごく疲れてるんだ」"
  }
 },
 "sale": {
  "nuance": "「オーケー、決まり」を意味するメキシコの口語表現。合意・了承を表す。",
  "etymology": "salir（うまくいく）から派生した表現とされる。",
  "synonyms": [
   "está bien（大丈夫、標準的な言い方）"
  ],
  "derived": [
   "salir（出る、うまくいく）"
  ],
  "dialogue": {
   "es": "— Nos vemos a las cinco.\n— Sale, ahí estaré.",
   "ja": "「5時に会おうね」「決まり、そこに行くよ」"
  }
 },
 "híjole": {
  "nuance": "「うわあ、げっ」を意味するメキシコの間投詞。驚き・困惑・失望など幅広い感情を表す。",
  "etymology": "hijo（息子）が音変化した感嘆詞とされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Se me olvidó tu regalo en casa.\n— Híjole, qué mala onda.",
   "ja": "「君のプレゼント家に忘れちゃった」「うわあ、それは残念だね」"
  }
 },
 "chavo": {
  "nuance": "「若者、少年」を意味するメキシコの口語。女性形はchava。muchachoよりカジュアルな言い方。",
  "etymology": "起源は諸説あるが、俗語として広まった。",
  "synonyms": [
   "muchacho（若者、より標準的）"
  ],
  "derived": [
   "chava（少女）"
  ],
  "dialogue": {
   "es": "— Ese chavo es mi vecino.\n— Se ve muy simpático.",
   "ja": "「あの若者は私の隣人なんだ」「とても感じよさそうだね」"
  }
 },
 "compa": {
  "nuance": "「相棒」を意味するメキシコの口語。compadre（名付け親同士の関係、転じて親しい友人）の短縮形。",
  "etymology": "compadre（名付け親、親友）の短縮形。",
  "synonyms": [
   "amigo（友達、標準的な言い方）"
  ],
  "derived": [
   "compadre（親友）"
  ],
  "dialogue": {
   "es": "— ¿Qué onda, compa?\n— Todo bien, ¿y tú?",
   "ja": "「調子どう、相棒？」「元気だよ、君は？」"
  }
 },
 "carnal": {
  "nuance": "「兄弟のように親しい友人」を意味するメキシコの口語。hermano（兄弟）と同じくらい近い間柄の友人を指す。",
  "etymology": "ラテン語carnalis（血肉の、身内の）に由来。",
  "synonyms": [
   "hermano（兄弟、比喩的にも使う）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Él es mi carnal desde la primaria.\n— Qué bonita amistad.",
   "ja": "「彼は小学校からの親友なんだ」「素敵な友情だね」"
  }
 },
 "al chile": {
  "nuance": "「マジで、正直言うと」を意味するメキシコの口語表現。率直さを強調するときに使う（やや砕けた表現）。",
  "etymology": "chile（唐辛子）から派生した表現、「辛辣に率直に」のイメージ。",
  "synonyms": [
   "de verdad（本当に）"
  ],
  "derived": [
   "chile（唐辛子）"
  ],
  "dialogue": {
   "es": "— Al chile, no me gustó la película.\n— Yo tampoco, la verdad.",
   "ja": "「正直言うと、あの映画好きじゃなかったな」「私もだよ、実は」"
  }
 },
 "troca": {
  "nuance": "「トラック、ピックアップトラック」を意味するメキシコ北部でよく使われる口語。英語truckからの借用語（camionetaが標準的な言い方）。",
  "etymology": "英語truck（トラック）に由来。",
  "synonyms": [
   "camioneta（トラック、標準的な言い方）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Me gusta tu troca nueva.\n— Gracias, la compré el mes pasado.",
   "ja": "「君の新しいトラック好きだな」「ありがとう、先月買ったんだ」"
  }
 },
 "banda": {
  "nuance": "「仲間たち」を意味するメキシコの口語。「バンド（音楽グループ）」という標準的な意味もある。",
  "etymology": "イタリア語banda（集団）に由来。",
  "synonyms": [
   "amigos（友達、標準的な言い方）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Voy a salir con la banda esta noche.\n— ¡Que se diviertan!",
   "ja": "「今夜仲間たちと出かけるよ」「楽しんできてね！」"
  }
 },
 "rollo": {
  "nuance": "「事情、話」を意味するメキシコの口語。「（フィルムの）ロール」という標準的な意味もある。¿cuál es tu rollo?（お前の話は何なんだ？）のように使う。",
  "etymology": "ラテン語rotulus（巻いたもの）に由来。",
  "synonyms": [
   "asunto（事柄、標準的な言い方）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— ¿Cuál es tu rollo con él?\n— Es una larga historia.",
   "ja": "「彼とはどういう事情なの？」「長い話なんだ」"
  }
 },
 "desmadre": {
  "nuance": "「めちゃくちゃな状況、大混乱」を意味するメキシコの口語（やや砕けた表現）。友人同士のくだけた会話でよく使われる。",
  "etymology": "des（否定）+ madre（母）の組み合わせから派生した俗語。",
  "synonyms": [
   "caos（混乱、より中立的な言い方）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— La fiesta terminó en un desmadre.\n— Sí, se rompió todo.",
   "ja": "「パーティーはめちゃくちゃな状態で終わったんだ」「うん、全部壊れちゃったよ」"
  }
 },
 "apapachar": {
  "nuance": "「愛情を込めて甘やかす、抱きしめる」を意味するメキシコ独自の美しい言葉。ナワトル語由来で、単なる「抱きしめる」よりも温かい愛情のこもったニュアンスがある。",
  "etymology": "ナワトル語papatzoa（抱きしめる、優しく触れる）に由来。",
  "synonyms": [
   "abrazar（抱きしめる、より一般的）"
  ],
  "derived": [
   "apapacho（甘やかし、愛情表現）"
  ],
  "dialogue": {
   "es": "— Ven, déjame apapacharte.\n— Gracias, necesitaba eso.",
   "ja": "「おいで、甘やかさせて」「ありがとう、それが必要だったんだ」"
  }
 },
 "sacar la vuelta": {
  "nuance": "「避ける、逃げる」を意味するメキシコの口語表現。責任や困難な状況を避けることを表す。",
  "etymology": "sacar（取り出す）+ vuelta（回転、遠回り）の組み合わせ。",
  "synonyms": [
   "evitar（避ける、より標準的）"
  ],
  "derived": [
   "vuelta（回転）"
  ],
  "dialogue": {
   "es": "— Le está sacando la vuelta al problema.\n— Tarde o temprano lo va a tener que enfrentar.",
   "ja": "「彼はその問題を避けているんだ」「遅かれ早かれ向き合わないといけなくなるよ」"
  }
 },
 "ni modo": {
  "nuance": "「仕方ない」を意味するメキシコの非常によく使われる口語表現。どうしようもない状況を受け入れるときに使う。",
  "etymology": "ni（〜さえない）+ modo（方法）の組み合わせ。",
  "synonyms": [
   "qué se le va a hacer（仕方ないね）"
  ],
  "derived": [
   "modo（方法）"
  ],
  "dialogue": {
   "es": "— Se canceló el vuelo.\n— Ni modo, hay que esperar al siguiente.",
   "ja": "「フライトがキャンセルになったんだ」「仕方ない、次のを待たないとね」"
  }
 },
 "a poco": {
  "nuance": "「まさか、本当に？」を意味するメキシコの口語表現。驚きを表すときによく使う。",
  "etymology": "a（〜へ）+ poco（少し）の組み合わせ、意味の変遷ははっきりしない。",
  "synonyms": [
   "¿en serio?（本当に？）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Me gané la lotería.\n— ¿A poco? ¡Qué envidia!",
   "ja": "「宝くじ当たったんだ」「まさか？うらやましい！」"
  }
 },
 "en chinga": {
  "nuance": "「大急ぎで」を意味するメキシコの口語表現（やや砕けた表現なので使う場面を選ぶ）。",
  "etymology": "chingar（急かす、俗語）から派生した表現。",
  "synonyms": [
   "rápido（速く、標準的な言い方）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Tengo que hacer esto en chinga.\n— ¿Necesitas ayuda?",
   "ja": "「これを大急ぎでやらないといけないんだ」「手伝い必要？」"
  }
 },
 "fifí": {
  "nuance": "「お高くとまった、上流気取りの」を意味するメキシコの口語。fresaと似た意味だが、より皮肉・批判的なニュアンスで使われることが多い（政治的な文脈で使われることもある）。",
  "etymology": "フランス語fifils（お坊ちゃん）に由来するとされる。",
  "synonyms": [
   "fresa（気取った、ほぼ同義）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Ese restaurante es muy fifí.\n— Sí, y los precios también.",
   "ja": "「あのレストランはすごくお高くとまっているんだ」「うん、値段もね」"
  }
 },
 "chava": {
  "nuance": "「若者、少女」を意味するメキシコの口語。chavo（少年）の女性形。muchachaよりカジュアルな言い方。",
  "etymology": "起源は諸説あるが、俗語として広まった。",
  "synonyms": [
   "muchacha（若者、より標準的）"
  ],
  "derived": [
   "chavo（少年）"
  ],
  "dialogue": {
   "es": "— Esa chava es mi compañera de clase.\n— Se ve muy amable.",
   "ja": "「あの女の子は私のクラスメートなんだ」「とても親切そうだね」"
  }
 },
 "amar": {
  "nuance": "「深く愛する」の基本語。querer（好き・愛してる、より日常的）よりも重く真剣な響きを持つ動詞で、パートナーや配偶者、神への愛など、深い愛情を表すときに使われる。日常会話では家族・友人へはquererの方が自然。",
  "etymology": "ラテン語amare（愛する）に由来。",
  "synonyms": [
   "querer（愛する・好き、より日常的）"
  ],
  "derived": [
   "amor（愛）",
   "amoroso（愛情深い）"
  ],
  "dialogue": {
   "es": "— Te amo con todo mi corazón.\n— Yo también te amo.",
   "ja": "「心から君を愛しているよ」「私もあなたを愛しているよ」"
  }
 },
 "borracho": {
  "nuance": "「酔っ払い」「酔っている」の基本語。crudo（二日酔いの）とは別の状態（borrachoは酔っている最中、crudoは翌朝の二日酔い）。estar borracho（酔っている）の形でよく使われる。",
  "etymology": "ラテン語系の語burra（毛織物→酔いでふらつく様子）に由来するとされる。",
  "synonyms": [
   "tomado（酔っている、口語）"
  ],
  "derived": [
   "emborracharse（酔っ払う）"
  ],
  "dialogue": {
   "es": "— Está muy borracho, no debería manejar.\n— Tienes razón, vamos a pedirle un taxi.",
   "ja": "「彼、すごく酔っ払ってるね、運転すべきじゃないよ」「その通りだね、タクシー呼んであげよう」"
  }
 },
 "rumbo a": {
  "nuance": "「〜に向かって」という方向を表す表現。旅行記事やニュース記事の読解でよく登場する（例：rumbo a la Ciudad de México＝メキシコシティに向かって）。ir rumbo a（〜に向かう）の形でよく使われる。",
  "etymology": "rumbo（方角、進路）から派生した表現。",
  "synonyms": [
   "hacia（〜へ向かって、ほぼ同義）"
  ],
  "derived": [
   "rumbo（方角、進路）"
  ],
  "dialogue": {
   "es": "— Vamos rumbo al aeropuerto.\n— ¿A qué hora sale el vuelo?",
   "ja": "「空港に向かっているところだよ」「フライトは何時に出発するの？」"
  }
 },
 "afirmar": {
  "nuance": "「断言する、述べる」の基本語。ニュース記事で「〜は述べた」という引用の導入によく使われる、フォーマルな「言う」の言い換え。",
  "etymology": "ラテン語affirmare（確固とする）に由来。",
  "synonyms": [
   "decir（言う、より一般的）"
  ],
  "derived": [
   "afirmación（断言）"
  ],
  "dialogue": {
   "es": "— El presidente afirmó que la economía va mejorando.\n— Espero que tenga razón.",
   "ja": "「大統領は経済が改善していると述べたんだ」「その通りだといいね」"
  }
 },
 "señalar": {
  "nuance": "「指摘する」の基本語。「指し示す」という文字通りの意味と、報道記事で「〜は指摘した」という引用の導入の両方でよく使われる。",
  "etymology": "señal（印、合図）から派生した語。",
  "synonyms": [],
  "derived": [
   "señal（印、合図）"
  ],
  "dialogue": {
   "es": "— El estudio señala un aumento en el consumo.\n— Es una tendencia preocupante.",
   "ja": "「その調査は消費の増加を指摘しているんだ」「気になる傾向だね」"
  }
 },
 "destacar": {
  "nuance": "「強調する、際立つ」の基本語。他動詞（〜を強調する）としても自動詞（際立つ）としても使われる、報道・論説文でよく使う動詞。",
  "etymology": "des（分離）+ tacar（触れる、打つ）の組み合わせに由来するとされる。",
  "synonyms": [],
  "derived": [
   "destacado（際立った）"
  ],
  "dialogue": {
   "es": "— El informe destaca la importancia de la educación.\n— Estoy de acuerdo con ese enfoque.",
   "ja": "「その報告書は教育の重要性を強調しているんだ」「そのアプローチに賛成だよ」"
  }
 },
 "sostener": {
  "nuance": "「主張する」の基本語。「支える、持ちこたえる」という文字通りの意味もある。論説文で「〜と主張する」という文脈でよく使われる。",
  "etymology": "ラテン語sustinere（下から支える）に由来。",
  "synonyms": [
   "mantener（主張する、維持する）"
  ],
  "derived": [
   "sostén（支え）"
  ],
  "dialogue": {
   "es": "— El autor sostiene que el cambio es necesario.\n— Presenta buenos argumentos.",
   "ja": "「著者は変化が必要だと主張しているんだ」「良い論拠を提示しているよね」"
  }
 },
 "subrayar": {
  "nuance": "「強調する」の基本語。直訳は「下に線を引く」で、比喩的に「特に重要だと強調する」という意味で使われる。",
  "etymology": "sub（下に）+ rayar（線を引く）の組み合わせ。",
  "synonyms": [
   "destacar（強調する）"
  ],
  "derived": [
   "raya（線）"
  ],
  "dialogue": {
   "es": "— El experto subrayó la urgencia del problema.\n— Deberíamos actuar pronto entonces.",
   "ja": "「専門家はその問題の緊急性を強調したんだ」「じゃあ早く対応した方がいいね」"
  }
 },
 "revelar": {
  "nuance": "「明らかにする」の基本語。調査結果やニュースで「〜が明らかになった」という文脈でよく使われる。",
  "etymology": "ラテン語revelare（ベールを取り除く）に由来。",
  "synonyms": [],
  "derived": [
   "revelación（暴露、啓示）"
  ],
  "dialogue": {
   "es": "— La investigación reveló datos sorprendentes.\n— ¿Qué tipo de datos?",
   "ja": "「その調査は驚くべきデータを明らかにしたんだ」「どんなデータ？」"
  }
 },
 "advertir": {
  "nuance": "「警告する」「気づく」の両方の意味を持つ動詞。文脈で判断する。報道文では「専門家は〜と警告した」という文脈でよく使われる。",
  "etymology": "ラテン語advertere（注意を向ける）に由来。",
  "synonyms": [],
  "derived": [
   "advertencia（警告）"
  ],
  "dialogue": {
   "es": "— Los científicos advierten sobre el cambio climático.\n— Es un tema que no podemos ignorar.",
   "ja": "「科学者たちは気候変動について警告しているんだ」「無視できないテーマだよね」"
  }
 },
 "fenómeno": {
  "nuance": "「現象」の基本語。自然現象から社会現象まで幅広く使われる、論説文の定番語彙。",
  "etymology": "ギリシャ語phainomenon（現れるもの）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Este fenómeno se ha estudiado poco.\n— Sería interesante investigarlo más.",
   "ja": "「この現象はあまり研究されていないんだ」「もっと調査したら面白そうだね」"
  }
 },
 "ámbito": {
  "nuance": "「領域、分野」の基本語。en el ámbito de（〜の分野において）はよく使う組み合わせ、論説文の定番語彙。",
  "etymology": "ラテン語ambitus（周囲、範囲）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Trabaja en el ámbito de la salud pública.\n— Es un campo muy importante.",
   "ja": "「彼女は公衆衛生の分野で働いているんだ」「とても重要な分野だよね」"
  }
 },
 "entorno": {
  "nuance": "「環境、周囲」の基本語。物理的な環境からビジネス環境まで幅広く使われる。",
  "etymology": "en（〜において）+ torno（周り）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "torno（周り、回転）"
  ],
  "dialogue": {
   "es": "— Necesitamos proteger nuestro entorno.\n— Cada pequeña acción cuenta.",
   "ja": "「私たちの環境を守る必要があるね」「小さな行動一つ一つが大切だよね」"
  }
 },
 "panorama": {
  "nuance": "「全体像、見通し」の基本語。「景色」という文字通りの意味もある。論説文で「今後の見通し」を語るときによく使われる。",
  "etymology": "ギリシャ語pan（すべて）+ horama（見えるもの）の組み合わせ。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El panorama económico es incierto.\n— Habrá que esperar y ver.",
   "ja": "「経済の見通しは不透明だね」「様子を見るしかないね」"
  }
 },
 "enfoque": {
  "nuance": "「アプローチ、視点」の基本語。enfocar（焦点を合わせる）から派生した語。",
  "etymology": "enfocar（焦点を合わせる）から派生した語。",
  "synonyms": [],
  "derived": [
   "enfocar（焦点を合わせる）"
  ],
  "dialogue": {
   "es": "— Me gusta tu enfoque sobre este tema.\n— Gracias, traté de ser objetivo.",
   "ja": "「このテーマについての君のアプローチ好きだな」「ありがとう、客観的であろうとしたんだ」"
  }
 },
 "rasgo": {
  "nuance": "「特徴」の基本語。性格・外見・現象の特徴を表すときに幅広く使われる。",
  "etymology": "rasgar（引っかく、線を引く）から派生した語。",
  "synonyms": [
   "característica（特徴、より一般的）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Ese es un rasgo típico de la cultura mexicana.\n— Sí, la hospitalidad es muy notable.",
   "ja": "「それはメキシコ文化の典型的な特徴だね」「うん、おもてなしの心がとても目立つよね」"
  }
 },
 "medida": {
  "nuance": "「対策、措置」の基本語。「測定、寸法」という文字通りの意味もある。tomar medidas（対策を講じる）はよく使う組み合わせ。",
  "etymology": "medir（測る）から派生した語。",
  "synonyms": [],
  "derived": [
   "medir（測る）"
  ],
  "dialogue": {
   "es": "— El gobierno anunció nuevas medidas económicas.\n— Espero que ayuden a la gente.",
   "ja": "「政府は新しい経済対策を発表したんだ」「人々の助けになるといいね」"
  }
 },
 "consecuencia": {
  "nuance": "「結果、影響」の基本語。como consecuencia de（〜の結果として）はよく使う組み合わせ。",
  "etymology": "ラテン語consequentia（後に続くもの）に由来。",
  "synonyms": [],
  "derived": [
   "consecuente（一貫した）"
  ],
  "dialogue": {
   "es": "— Esa decisión tuvo graves consecuencias.\n— Nadie esperaba ese resultado.",
   "ja": "「その決断は深刻な結果をもたらしたんだ」「誰もそんな結果は予想していなかったよ」"
  }
 },
 "factor": {
  "nuance": "「要因」の基本語。un factor importante（重要な要因）はよく使う組み合わせ。",
  "etymology": "ラテン語factor（作る者）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El clima fue un factor decisivo.\n— Sí, cambió todos nuestros planes.",
   "ja": "「気候が決定的な要因だったんだ」「うん、私たちの計画を全部変えてしまったよね」"
  }
 },
 "repercusión": {
  "nuance": "「影響、反響」の基本語。tener repercusión（反響を呼ぶ）はよく使う組み合わせ。",
  "etymology": "ラテン語repercutere（跳ね返る）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— La noticia tuvo mucha repercusión internacional.\n— Se habló de ella en todo el mundo.",
   "ja": "「そのニュースは国際的に大きな反響を呼んだんだ」「世界中で話題になったよね」"
  }
 },
 "impacto": {
  "nuance": "「インパクト、衝撃」の基本語。物理的な衝撃と比喩的な影響力の両方で使われる。",
  "etymology": "ラテン語impactus（打ち当てられた）に由来。",
  "synonyms": [],
  "derived": [
   "impactar（衝撃を与える）"
  ],
  "dialogue": {
   "es": "— Esta política tendrá un gran impacto.\n— Habrá que monitorear los resultados.",
   "ja": "「この政策は大きな影響を与えるだろうね」「結果を注視しないとね」"
  }
 },
 "contraste": {
  "nuance": "「対比」の基本語。en contraste con（〜と対照的に）はよく使う組み合わせ。",
  "etymology": "contrastar（対比する）から派生した語。",
  "synonyms": [],
  "derived": [
   "contrastar（対比する）"
  ],
  "dialogue": {
   "es": "— Hay un fuerte contraste entre las dos ciudades.\n— Sí, son mundos totalmente diferentes.",
   "ja": "「2つの街には強い対比があるんだ」「うん、まったく違う世界だよね」"
  }
 },
 "hallazgo": {
  "nuance": "「発見」の基本語。hallar（見つける）から派生した語。科学的・考古学的な発見によく使われる。",
  "etymology": "hallar（見つける）から派生した語。",
  "synonyms": [
   "descubrimiento（発見、より一般的）"
  ],
  "derived": [
   "hallar（見つける）"
  ],
  "dialogue": {
   "es": "— Este hallazgo cambia todo lo que sabíamos.\n— Es un momento histórico para la ciencia.",
   "ja": "「この発見は今まで知っていたことをすべて変えるんだ」「科学にとって歴史的な瞬間だね」"
  }
 },
 "dato": {
  "nuance": "「データ、情報」の基本語。複数形datosがよく使われる（一つの情報でも複数扱いになりがち）。",
  "etymology": "ラテン語datum（与えられたもの）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Necesitamos más datos para confirmar esto.\n— Estoy de acuerdo, es muy pronto para concluir.",
   "ja": "「これを確認するにはもっとデータが必要だね」「同感だよ、結論を出すには早すぎるよね」"
  }
 },
 "cifra": {
  "nuance": "「数字」の基本語。統計や金額を表す数字を指す、報道文の定番語彙。",
  "etymology": "アラビア語sifr（ゼロ）に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Las cifras de desempleo bajaron este mes.\n— Es una buena noticia para la economía.",
   "ja": "「今月失業率の数字が下がったんだ」「経済にとっていいニュースだね」"
  }
 },
 "porcentaje": {
  "nuance": "「割合、パーセンテージ」の基本語。un pequeño porcentaje（小さな割合）のように使う。",
  "etymology": "por（〜につき）+ ciento（100）の組み合わせに由来。",
  "synonyms": [],
  "derived": [
   "ciento（100）"
  ],
  "dialogue": {
   "es": "— ¿Qué porcentaje de estudiantes aprobó?\n— Alrededor del ochenta por ciento.",
   "ja": "「学生の何パーセントが合格したの？」「約80パーセントだよ」"
  }
 },
 "tendencia": {
  "nuance": "「傾向」の基本語。tener tendencia a（〜する傾向がある）はよく使う組み合わせ。",
  "etymology": "tender（傾向がある、伸ばす）から派生した語。",
  "synonyms": [],
  "derived": [
   "tender（傾向がある）"
  ],
  "dialogue": {
   "es": "— Hay una tendencia creciente hacia el trabajo remoto.\n— Sí, cada vez más empresas lo permiten.",
   "ja": "「リモートワークへの傾向が高まっているんだ」「うん、それを許可する企業がどんどん増えているよね」"
  }
 },
 "vínculo": {
  "nuance": "「つながり、関連」の基本語。「（インターネットの）リンク」という意味にもなる。",
  "etymology": "ラテン語vinculum（結びつけるもの）に由来。",
  "synonyms": [],
  "derived": [
   "vincular（結びつける）"
  ],
  "dialogue": {
   "es": "— Existe un vínculo entre ambos fenómenos.\n— Es un hallazgo interesante.",
   "ja": "「両方の現象にはつながりがあるんだ」「興味深い発見だね」"
  }
 },
 "llevar a cabo": {
  "nuance": "「実行する」の基本表現。llevar（運ぶ）+ a cabo（端まで）の組み合わせ、フォーマルな文脈でよく使う。",
  "etymology": "llevar（運ぶ）+ cabo（端）の組み合わせ。",
  "synonyms": [
   "realizar（実行する）"
  ],
  "derived": [
   "cabo（端）"
  ],
  "dialogue": {
   "es": "— Vamos a llevar a cabo el proyecto el próximo mes.\n— Estamos listos para empezar.",
   "ja": "「来月プロジェクトを実行するつもりだよ」「始める準備はできているよ」"
  }
 },
 "dar lugar a": {
  "nuance": "「〜を引き起こす」の基本表現。dar（与える）+ lugar（場所、機会）の組み合わせ。",
  "etymology": "dar（与える）+ lugar（場所）の組み合わせ。",
  "synonyms": [
   "provocar（引き起こす）"
  ],
  "derived": [
   "lugar（場所）"
  ],
  "dialogue": {
   "es": "— Ese comentario dio lugar a una gran polémica.\n— No esperaba esa reacción.",
   "ja": "「その発言が大きな論争を引き起こしたんだ」「そんな反応は予想していなかったよ」"
  }
 },
 "tener en cuenta": {
  "nuance": "「考慮に入れる」の基本表現。tener（持つ）+ en cuenta（勘定に）の組み合わせ。",
  "etymology": "cuenta（勘定）から派生した表現。",
  "synonyms": [
   "considerar（考慮する）"
  ],
  "derived": [
   "cuenta（勘定）"
  ],
  "dialogue": {
   "es": "— Hay que tener en cuenta el presupuesto.\n— Tienes razón, es un factor importante.",
   "ja": "「予算を考慮に入れないとね」「その通りだね、重要な要素だよね」"
  }
 },
 "poner de relieve": {
  "nuance": "「際立たせる」の基本表現。relieve（浮き彫り、際立ち）から派生した、ややフォーマルな表現。",
  "etymology": "poner（置く）+ relieve（浮き彫り）の組み合わせ。",
  "synonyms": [
   "destacar（強調する）"
  ],
  "derived": [
   "relieve（浮き彫り）"
  ],
  "dialogue": {
   "es": "— El estudio pone de relieve un problema grave.\n— Habrá que tomar medidas.",
   "ja": "「その研究は深刻な問題を際立たせているんだ」「対策を講じないとね」"
  }
 },
 "constituir": {
  "nuance": "「〜を構成する」の基本語。ser（〜である）よりもフォーマルで、論説文でよく使われる。",
  "etymology": "ラテン語constituere（設立する）に由来。",
  "synonyms": [],
  "derived": [
   "constitución（憲法、構成）"
  ],
  "dialogue": {
   "es": "— Esto constituye un avance importante.\n— Estoy de acuerdo, es un gran paso.",
   "ja": "「これは重要な進歩を構成しているね」「同感だよ、大きな一歩だね」"
  }
 },
 "abarcar": {
  "nuance": "「含む、網羅する」の基本語。abarcar todo（すべてを網羅する）のように使う。",
  "etymology": "a（〜へ）+ brazo（腕）に由来するとされる（腕で抱え込むイメージ）。",
  "synonyms": [],
  "derived": [
   "brazo（腕）"
  ],
  "dialogue": {
   "es": "— El curso abarca varios temas.\n— Suena bastante completo.",
   "ja": "「そのコースはいくつかのテーマを網羅しているんだ」「かなり充実してそうだね」"
  }
 },
 "surgir": {
  "nuance": "「生じる、現れる」の基本語。un problema surgió（問題が生じた）のように使う。",
  "etymology": "ラテン語surgere（立ち上がる）に由来。",
  "synonyms": [],
  "derived": [
   "surgimiento（出現）"
  ],
  "dialogue": {
   "es": "— Surgió un problema inesperado.\n— ¿Podemos resolverlo a tiempo?",
   "ja": "「予期しない問題が生じたんだ」「時間内に解決できる？」"
  }
 },
 "carecer de": {
  "nuance": "「〜が欠けている」の基本表現。faltarとほぼ同義だが、よりフォーマルな響き。",
  "etymology": "ラテン語carere（欠けている）に由来。",
  "synonyms": [
   "faltar（足りない、より一般的）"
  ],
  "derived": [
   "carencia（欠如）"
  ],
  "dialogue": {
   "es": "— El plan carece de detalles importantes.\n— Deberíamos pedir más información.",
   "ja": "「その計画は重要な詳細が欠けているね」「もっと情報を求めた方がいいね」"
  }
 },
 "respecto a": {
  "nuance": "「〜に関して」の基本フレーズ。con respecto a（〜に関して）の形もよく使われる。",
  "etymology": "respecto（尊重、関連）から派生した語。",
  "synonyms": [
   "en cuanto a（〜に関して）"
  ],
  "derived": [
   "respetar（尊重する）"
  ],
  "dialogue": {
   "es": "— Respecto a tu pregunta, no tengo una respuesta clara.\n— Está bien, tómate tu tiempo.",
   "ja": "「君の質問に関して、明確な答えを持っていないんだ」「大丈夫、時間をかけていいよ」"
  }
 },
 "de acuerdo con": {
  "nuance": "「〜によれば」の基本フレーズ。segúnとほぼ同義だが、よりフォーマルな響き。",
  "etymology": "acuerdo（合意）から派生した表現。",
  "synonyms": [
   "según（〜によると）"
  ],
  "derived": [
   "acuerdo（合意）"
  ],
  "dialogue": {
   "es": "— De acuerdo con el informe, la situación ha mejorado.\n— Es una buena noticia.",
   "ja": "「報告書によれば、状況は改善しているんだ」「いいニュースだね」"
  }
 },
 "según": {
  "nuance": "「〜によると」の基本語。情報源を示すときによく使う前置詞。",
  "etymology": "ラテン語secundum（〜に沿って）に由来。",
  "synonyms": [
   "de acuerdo con（〜によれば、フォーマル）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Según los expertos, la situación mejorará pronto.\n— Espero que tengan razón.",
   "ja": "「専門家によると、状況はすぐに改善するらしいよ」「そうだといいね」"
  }
 },
 "cabe señalar": {
  "nuance": "「指摘すべきは」の基本フレーズ。caber（当てはまる）+ señalar（指摘する）の組み合わせ、論説文の定番の書き出し表現。",
  "etymology": "caber（当てはまる）+ señalar（指摘する）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "señalar（指摘する）"
  ],
  "dialogue": {
   "es": "— Cabe señalar que los resultados varían según la región.\n— Es un punto importante a considerar.",
   "ja": "「指摘すべきは、結果が地域によって異なるということだね」「考慮すべき重要な点だね」"
  }
 },
 "indicar": {
  "nuance": "「示す」の基本語。señalar（指摘する）とほぼ同義で、データや標識、方向などを「示す」ときによく使われる。",
  "etymology": "ラテン語indicare（示す）に由来。",
  "synonyms": [
   "señalar（指摘する、ほぼ同義）"
  ],
  "derived": [
   "indicación（指示）",
   "indicador（指標）"
  ],
  "dialogue": {
   "es": "— La flecha indica la salida.\n— Ah, ya la veo, gracias.",
   "ja": "「その矢印が出口を示しているよ」「ああ、見えた、ありがとう」"
  }
 },
 "declarar": {
  "nuance": "「表明する」の基本語。公式な場での発言・宣言を表す、報道文でよく使われるフォーマルな「言う」の言い換え。「（税関で）申告する」という意味にもなる。",
  "etymology": "ラテン語declarare（明らかにする）に由来。",
  "synonyms": [
   "afirmar（断言する）"
  ],
  "derived": [
   "declaración（宣言、申告）"
  ],
  "dialogue": {
   "es": "— El ministro declaró que habrá nuevas inversiones.\n— Espero que se cumpla.",
   "ja": "「大臣は新たな投資があると表明したんだ」「実現するといいね」"
  }
 },
 "asegurar": {
  "nuance": "「保証する、断言する」の基本語。「（保険で）保証する」という意味にもなる。報道文で「〜と断言した」という引用の導入にもよく使われる。",
  "etymology": "seguro（確かな、安全な）から派生した語。",
  "synonyms": [
   "afirmar（断言する）"
  ],
  "derived": [
   "seguro（確かな、保険）",
   "seguridad（安全）"
  ],
  "dialogue": {
   "es": "— Me aseguró que todo estaría listo a tiempo.\n— Espero que cumpla su palabra.",
   "ja": "「すべて時間通りに準備できると保証してくれたんだ」「約束を守ってくれるといいね」"
  }
 },
 "representar": {
  "nuance": "「表す、代表する」の基本語。数値・概念・人を「代表する、表す」という幅広い文脈で使われる、論説文の定番語彙。",
  "etymology": "ラテン語repraesentare（目の前に示す）に由来。",
  "synonyms": [],
  "derived": [
   "representante（代表者）",
   "representación（表現、代表）"
  ],
  "dialogue": {
   "es": "— Esta cifra representa un aumento del diez por ciento.\n— Es un crecimiento significativo.",
   "ja": "「この数字は10パーセントの増加を表しているんだ」「大きな成長だね」"
  }
 },
 "cerca de": {
  "nuance": "「〜の近くに」の基本フレーズ。lejos de（〜から遠くに）の反対語。",
  "etymology": "cerca（近くに）から派生した表現。",
  "synonyms": [],
  "derived": [
   "cerca（近くに）"
  ],
  "dialogue": {
   "es": "— Vivo cerca de la estación.\n— Qué conveniente para el transporte.",
   "ja": "「駅の近くに住んでいるんだ」「交通の便がいいね」"
  }
 },
 "lejos de": {
  "nuance": "「〜から遠くに」の基本フレーズ。cerca de（〜の近くに）の反対語。",
  "etymology": "lejos（遠くに）から派生した表現。",
  "synonyms": [],
  "derived": [
   "lejos（遠くに）"
  ],
  "dialogue": {
   "es": "— Su casa está lejos de aquí.\n— ¿Cuánto tiempo se tarda en llegar?",
   "ja": "「彼の家はここから遠いんだ」「着くのにどれくらいかかるの？」"
  }
 },
 "al lado de": {
  "nuance": "「〜の隣に」の基本フレーズ。junto a（〜のそばに）とほぼ同義。",
  "etymology": "lado（側）から派生した表現。",
  "synonyms": [
   "junto a（〜のそばに）"
  ],
  "derived": [
   "lado（側）"
  ],
  "dialogue": {
   "es": "— El banco está al lado de la farmacia.\n— Perfecto, es fácil de encontrar.",
   "ja": "「銀行は薬局の隣にあるよ」「いいね、見つけやすいね」"
  }
 },
 "detrás de": {
  "nuance": "「〜の後ろに」の基本フレーズ。delante de（〜の前に）の反対語。",
  "etymology": "tras（後ろに）から派生した表現。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El parque está detrás del edificio.\n— Ah, ya lo veo desde aquí.",
   "ja": "「公園はその建物の後ろにあるよ」「ああ、ここから見えるね」"
  }
 },
 "delante de": {
  "nuance": "「〜の前に」の基本フレーズ。detrás de（〜の後ろに）の反対語。",
  "etymology": "delante（前に）から派生した表現。",
  "synonyms": [
   "enfrente de（〜の向かいに）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— Nos vemos delante de la entrada.\n— Perfecto, ahí estaré.",
   "ja": "「入り口の前で会おう」「わかった、そこにいるね」"
  }
 },
 "alrededor de": {
  "nuance": "「〜の周りに」の基本フレーズ。「約〜、およそ〜」という数量の意味にもなる（alrededor de cien personas＝約100人）。",
  "etymology": "rodear（囲む）と関連する語に由来。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Hay muchas tiendas alrededor del parque.\n— Es un buen lugar para pasear.",
   "ja": "「その公園の周りにはたくさんの店があるんだ」「散歩するのにいい場所だね」"
  }
 },
 "a través de": {
  "nuance": "「〜を通して」の基本フレーズ。物理的な通過と、比喩的な手段（メディアを通して等）の両方で使われる。",
  "etymology": "través（横切ること）から派生した表現。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Nos conocimos a través de un amigo en común.\n— Qué buena manera de conocerse.",
   "ja": "「共通の友人を通して知り合ったんだ」「素敵な出会い方だね」"
  }
 },
 "junto a": {
  "nuance": "「〜のそばに」の基本フレーズ。al lado de（〜の隣に）とほぼ同義。",
  "etymology": "junto（一緒の）から派生した表現。",
  "synonyms": [
   "al lado de（〜の隣に）"
  ],
  "derived": [
   "juntar（合わせる）"
  ],
  "dialogue": {
   "es": "— Siéntate junto a mí.\n— Con gusto.",
   "ja": "「私のそばに座って」「喜んで」"
  }
 },
 "frente a": {
  "nuance": "「〜に面して」の基本フレーズ。enfrente deとほぼ同義だが、より比喩的な「〜に直面して」という意味でもよく使われる。",
  "etymology": "frente（正面、額）から派生した表現。",
  "synonyms": [
   "enfrente de（〜の向かいに）"
  ],
  "derived": [
   "frente（正面、額）"
  ],
  "dialogue": {
   "es": "— El hotel está frente al mar.\n— Debe tener una vista hermosa.",
   "ja": "「そのホテルは海に面しているんだ」「きっと美しい景色なんだろうね」"
  }
 },
 "dentro de": {
  "nuance": "「〜の中に」の基本フレーズ。物理的な内部と、時間的な「〜以内に」の両方で使われる（dentro de una hora＝1時間以内に）。",
  "etymology": "dentro（中に）から派生した表現。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— Llegaré dentro de diez minutos.\n— Te espero aquí.",
   "ja": "「10分以内に着くよ」「ここで待ってるね」"
  }
 },
 "fuera de": {
  "nuance": "「〜の外に」の基本フレーズ。dentro de（〜の中に）の反対語。",
  "etymology": "fuera（外に）から派生した表現。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El coche está estacionado fuera del edificio.\n— Voy a buscarlo.",
   "ja": "「車は建物の外に停めてあるよ」「取りに行くね」"
  }
 },
 "encima de": {
  "nuance": "「〜の上に」の基本フレーズ。debajo de（〜の下に）の反対語。",
  "etymology": "cima（頂上）から派生した表現。",
  "synonyms": [],
  "derived": [
   "cima（頂上）"
  ],
  "dialogue": {
   "es": "— Puse las llaves encima de la mesa.\n— Ya las vi, gracias.",
   "ja": "「鍵をテーブルの上に置いたよ」「もう見たよ、ありがとう」"
  }
 },
 "debajo de": {
  "nuance": "「〜の下に」の基本フレーズ。encima de（〜の上に）の反対語。",
  "etymology": "bajo（下の）から派生した表現。",
  "synonyms": [],
  "derived": [
   "bajo（下の）"
  ],
  "dialogue": {
   "es": "— El gato está debajo de la cama.\n— Siempre se esconde ahí.",
   "ja": "「猫がベッドの下にいるよ」「いつもそこに隠れるんだよね」"
  }
 },
 "hacia": {
  "nuance": "「〜へ向かって」の基本語。方向を表す前置詞、a（到達点）よりも「その方向へ」という漠然とした動きを表す。",
  "etymology": "ラテン語系の語faciaに由来するとされる。",
  "synonyms": [],
  "derived": [],
  "dialogue": {
   "es": "— El barco navega hacia el norte.\n— Debe hacer mucho frío allá.",
   "ja": "「船は北に向かって航行しているんだ」「あっちはきっと寒いんだろうね」"
  }
 },
 "a lo largo de": {
  "nuance": "「〜に沿って」「〜の間ずっと」の基本フレーズ。空間的な意味と時間的な意味の両方で使われる。",
  "etymology": "largo（長い）から派生した表現。",
  "synonyms": [],
  "derived": [
   "largo（長い）"
  ],
  "dialogue": {
   "es": "— Caminamos a lo largo de la playa.\n— Fue una tarde muy relajante.",
   "ja": "「ビーチに沿って歩いたんだ」「とてもリラックスできる午後だったね」"
  }
 },
 "en medio de": {
  "nuance": "「〜の真ん中に」の基本フレーズ。物理的な中心と、比喩的な「〜の最中に」の両方で使われる。",
  "etymology": "medio（真ん中）から派生した表現。",
  "synonyms": [],
  "derived": [
   "medio（真ん中、半分）"
  ],
  "dialogue": {
   "es": "— Nos encontramos en medio de la plaza.\n— Perfecto, es fácil de ubicar.",
   "ja": "「広場の真ん中で会おう」「いいね、わかりやすい場所だね」"
  }
 },
 "de repente": {
  "nuance": "「突然」の基本フレーズ。予期しない出来事が起こったときによく使う。",
  "etymology": "repente（突然の）から派生した表現。",
  "synonyms": [
   "repentinamente（突然に、よりフォーマル）"
  ],
  "derived": [],
  "dialogue": {
   "es": "— De repente empezó a llover.\n— Menos mal que traje el paraguas.",
   "ja": "「突然雨が降り始めたんだ」「傘持ってきてよかったよ」"
  }
 },
 "de vez en cuando": {
  "nuance": "「時々」の基本フレーズ。a vecesとほぼ同義。",
  "etymology": "vez（回）+ cuando（〜のとき）の組み合わせ。",
  "synonyms": [
   "a veces（時々、ほぼ同義）"
  ],
  "derived": [
   "vez（回）"
  ],
  "dialogue": {
   "es": "— De vez en cuando salgo a correr por la mañana.\n— Qué buen hábito.",
   "ja": "「時々朝ランニングに行くんだ」「いい習慣だね」"
  }
 },
 "poco a poco": {
  "nuance": "「少しずつ」の基本フレーズ。段階的な変化・進歩を表すときによく使う。",
  "etymology": "poco（少し）を繰り返した表現。",
  "synonyms": [],
  "derived": [
   "poco（少し）"
  ],
  "dialogue": {
   "es": "— Poco a poco estoy mejorando mi español.\n— Se nota el progreso.",
   "ja": "「少しずつスペイン語が上達しているんだ」「進歩がわかるよ」"
  }
 },
 "de nuevo": {
  "nuance": "「再び」の基本フレーズ。otra vezとほぼ同義。",
  "etymology": "nuevo（新しい）から派生した表現。",
  "synonyms": [
   "otra vez（再び、ほぼ同義）"
  ],
  "derived": [
   "nuevo（新しい）"
  ],
  "dialogue": {
   "es": "— Intentémoslo de nuevo.\n— Sí, esta vez va a funcionar.",
   "ja": "「もう一度試してみよう」「うん、今度はうまくいくよ」"
  }
 },
 "al mismo tiempo": {
  "nuance": "「同時に」の基本フレーズ。simultáneamente（よりフォーマル）とほぼ同義。",
  "etymology": "mismo（同じ）+ tiempo（時間）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "mismo（同じ）",
   "tiempo（時間）"
  ],
  "dialogue": {
   "es": "— No puedo hacer dos cosas al mismo tiempo.\n— Nadie puede, tranquilo.",
   "ja": "「2つのことを同時にはできないよ」「誰にもできないよ、落ち着いて」"
  }
 },
 "de todos modos": {
  "nuance": "「とにかく、いずれにせよ」の基本フレーズ。de todas formasとほぼ同義。",
  "etymology": "modo（方法）から派生した表現。",
  "synonyms": [
   "de todas formas（いずれにせよ、ほぼ同義）"
  ],
  "derived": [
   "modo（方法）"
  ],
  "dialogue": {
   "es": "— No sé si va a funcionar, pero de todos modos lo voy a intentar.\n— Esa es la actitud correcta.",
   "ja": "「うまくいくかわからないけど、とにかく試してみるよ」「その姿勢は正しいよ」"
  }
 },
 "en cambio": {
  "nuance": "「一方で」の基本フレーズ。対比を表す接続表現。",
  "etymology": "cambio（変化）から派生した表現。",
  "synonyms": [],
  "derived": [
   "cambiar（変える）"
  ],
  "dialogue": {
   "es": "— A mí me gusta el café; a ella, en cambio, le gusta el té.\n— Cada quien con sus gustos.",
   "ja": "「私はコーヒーが好きなんだけど、彼女は一方で紅茶が好きなんだ」「人それぞれ好みがあるよね」"
  }
 },
 "por lo general": {
  "nuance": "「一般的に」の基本フレーズ。generalmente（よりフォーマル）とほぼ同義。",
  "etymology": "general（一般的な）から派生した表現。",
  "synonyms": [
   "generalmente（一般的に）"
  ],
  "derived": [
   "general（一般的な）"
  ],
  "dialogue": {
   "es": "— Por lo general, llego temprano al trabajo.\n— Qué disciplina.",
   "ja": "「一般的に、私は仕事に早く着くんだ」「なんて規律正しいんだ」"
  }
 },
 "a partir de": {
  "nuance": "「〜から(時点)」の基本フレーズ。desdeとほぼ同義だが、未来の開始時点を表すときによく使われる。",
  "etymology": "partir（出発する）から派生した表現。",
  "synonyms": [
   "desde（〜から）"
  ],
  "derived": [
   "partir（出発する）"
  ],
  "dialogue": {
   "es": "— A partir de mañana, empiezo mi nueva dieta.\n— ¡Ánimo!",
   "ja": "「明日から新しいダイエットを始めるよ」「頑張って！」"
  }
 },
 "hasta ahora": {
  "nuance": "「今のところ」の基本フレーズ。現在までの状況を表すときに使う。",
  "etymology": "hasta（〜まで）+ ahora（今）の組み合わせ。",
  "synonyms": [
   "de momento（今のところ）"
  ],
  "derived": [
   "ahora（今）"
  ],
  "dialogue": {
   "es": "— Hasta ahora todo va bien.\n— Me alegra escuchar eso.",
   "ja": "「今のところすべて順調だよ」「それを聞いて嬉しいよ」"
  }
 },
 "de momento": {
  "nuance": "「今のところ」の基本フレーズ。hasta ahoraとほぼ同義。",
  "etymology": "momento（瞬間）から派生した表現。",
  "synonyms": [
   "hasta ahora（今のところ）"
  ],
  "derived": [
   "momento（瞬間）"
  ],
  "dialogue": {
   "es": "— De momento no tengo planes para el fin de semana.\n— Podríamos hacer algo juntos.",
   "ja": "「今のところ週末の予定はないんだ」「一緒に何かできるかもね」"
  }
 },
 "en seguida": {
  "nuance": "「すぐに」の基本フレーズ。inmediatamente（よりフォーマル）とほぼ同義。",
  "etymology": "seguido（続いた）から派生した表現。",
  "synonyms": [
   "inmediatamente（すぐに、フォーマル）"
  ],
  "derived": [
   "seguir（続ける）"
  ],
  "dialogue": {
   "es": "— Voy en seguida.\n— Te espero aquí.",
   "ja": "「すぐ行くよ」「ここで待ってるね」"
  }
 },
 "a lo mejor": {
  "nuance": "「もしかしたら」の基本フレーズ。quizás/tal vezとほぼ同義の口語表現。",
  "etymology": "mejor（より良い）から派生した表現。",
  "synonyms": [
   "tal vez（たぶん）",
   "quizás（たぶん）"
  ],
  "derived": [
   "mejor（より良い）"
  ],
  "dialogue": {
   "es": "— A lo mejor llueve mañana.\n— Deberíamos llevar paraguas por si acaso.",
   "ja": "「もしかしたら明日雨が降るかも」「念のため傘を持って行った方がいいね」"
  }
 },
 "sobre todo": {
  "nuance": "「とりわけ」の基本フレーズ。特に強調したい点を示すときに使う。",
  "etymology": "sobre（〜の上に）+ todo（すべて）の組み合わせ。",
  "synonyms": [
   "especialmente（特に）"
  ],
  "derived": [
   "todo（すべて）"
  ],
  "dialogue": {
   "es": "— Me gusta la comida mexicana, sobre todo los tacos.\n— A mí también, son deliciosos.",
   "ja": "「メキシコ料理が好きなんだ、とりわけタコスがね」「私もだよ、美味しいよね」"
  }
 },
 "en particular": {
  "nuance": "「特に」の基本フレーズ。en especial（ほぼ同義）とも言い換えられる。",
  "etymology": "particular（個別の）から派生した表現。",
  "synonyms": [
   "en especial（特に）"
  ],
  "derived": [
   "particular（個別の）"
  ],
  "dialogue": {
   "es": "— ¿Hay algo en particular que te gustaría hacer?\n— No, cualquier plan está bien.",
   "ja": "「何か特にやりたいことある？」「いや、どんな予定でも大丈夫だよ」"
  }
 },
 "al fin y al cabo": {
  "nuance": "「結局のところ」の基本フレーズ。a fin de cuentasとほぼ同義。",
  "etymology": "fin（終わり）+ cabo（端）の組み合わせ。",
  "synonyms": [
   "a fin de cuentas（結局のところ）"
  ],
  "derived": [
   "fin（終わり）"
  ],
  "dialogue": {
   "es": "— Al fin y al cabo, todo salió bien.\n— Sí, no había por qué preocuparse tanto.",
   "ja": "「結局のところ、すべてうまくいったね」「うん、そんなに心配する必要なかったね」"
  }
 },
 "tarde o temprano": {
  "nuance": "「遅かれ早かれ」の基本フレーズ。避けられない結果について話すときによく使う。",
  "etymology": "tarde（遅く）+ temprano（早く）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "tarde（遅く）",
   "temprano（早く）"
  ],
  "dialogue": {
   "es": "— Tarde o temprano tendrás que decidir.\n— Lo sé, solo necesito más tiempo.",
   "ja": "「遅かれ早かれ決めないといけないよ」「わかってる、もう少し時間が必要なんだ」"
  }
 },
 "enfrente de": {
  "nuance": "「〜の向かいに」の基本フレーズ。frente a（〜に面して）とほぼ同義。",
  "etymology": "en（〜において）+ frente（正面）の組み合わせ。",
  "synonyms": [
   "frente a（〜に面して）"
  ],
  "derived": [
   "frente（正面）"
  ],
  "dialogue": {
   "es": "— El café está enfrente de la estación.\n— Perfecto, lo voy a encontrar fácilmente.",
   "ja": "「そのカフェは駅の向かいにあるよ」「よかった、簡単に見つけられそうだね」"
  }
 },
 "hacer cola": {
  "nuance": "「列に並ぶ」の基本表現。cola（尻尾、列）から派生。メキシコではhacer filaもよく使われる（地域差）。",
  "etymology": "cola（尻尾、列）から派生した表現。",
  "synonyms": [
   "hacer fila（列に並ぶ、ほぼ同義）"
  ],
  "derived": [
   "cola（尻尾、列）"
  ],
  "dialogue": {
   "es": "— Tuvimos que hacer cola por una hora.\n— Qué mala suerte, ¿valió la pena?",
   "ja": "「1時間並ばないといけなかったんだ」「運が悪かったね、その価値はあった？」"
  }
 },
 "estar de acuerdo": {
  "nuance": "「賛成する」の基本表現。estar de acuerdo con（〜に賛成する）という組み合わせもよく使う。",
  "etymology": "acuerdo（合意）から派生した表現。",
  "synonyms": [],
  "derived": [
   "acuerdo（合意）"
  ],
  "dialogue": {
   "es": "— Estoy de acuerdo contigo.\n— Me alegra que pensemos igual.",
   "ja": "「あなたに賛成だよ」「同じように考えていて嬉しいよ」"
  }
 },
 "ponerse de pie": {
  "nuance": "「立ち上がる」の基本表現。levantarseとほぼ同義だが、より「起立する」という動作を明確に表す。",
  "etymology": "pie（足）から派生した表現。",
  "synonyms": [
   "levantarse（立ち上がる、起きる）"
  ],
  "derived": [
   "pie（足）"
  ],
  "dialogue": {
   "es": "— Todos se pusieron de pie para aplaudir.\n— Fue un momento muy emotivo.",
   "ja": "「みんな拍手するために立ち上がったんだ」「とても感動的な瞬間だったね」"
  }
 },
 "dar un paseo": {
  "nuance": "「散歩する」の基本表現。pasear（散歩する、動詞）とほぼ同じ意味。",
  "etymology": "paseo（散歩）から派生した表現。",
  "synonyms": [
   "pasear（散歩する）"
  ],
  "derived": [
   "pasear（散歩する）"
  ],
  "dialogue": {
   "es": "— ¿Quieres dar un paseo por el parque?\n— Sí, hace un día precioso.",
   "ja": "「公園を散歩したい？」「うん、今日はとてもいい天気だから」"
  }
 },
 "hacer ejercicio": {
  "nuance": "「運動する」の基本表現。entrenar（トレーニングする）よりも一般的な言い方。",
  "etymology": "ejercicio（運動、練習）から派生した表現。",
  "synonyms": [],
  "derived": [
   "ejercicio（運動）"
  ],
  "dialogue": {
   "es": "— Trato de hacer ejercicio todos los días.\n— Qué disciplina, yo debería hacer lo mismo.",
   "ja": "「毎日運動しようとしているんだ」「規律正しいね、私も同じことをすべきだな」"
  }
 },
 "tomar una decisión": {
  "nuance": "「決断する」の基本表現。decidir（決める、動詞一語）とほぼ同じ意味だが、より明確な決断のニュアンス。",
  "etymology": "decisión（決定）から派生した表現。",
  "synonyms": [
   "decidir（決める）"
  ],
  "derived": [
   "decisión（決定）"
  ],
  "dialogue": {
   "es": "— Tengo que tomar una decisión importante.\n— Tómate tu tiempo, no hay prisa.",
   "ja": "「重要な決断をしないといけないんだ」「時間をかけていいよ、急がなくていいから」"
  }
 },
 "pedir prestado": {
  "nuance": "「借りる」の基本表現。pedir（頼む）+ prestado（貸された）の組み合わせ。prestar（貸す）の対義的な視点。",
  "etymology": "prestar（貸す）から派生した語。",
  "synonyms": [],
  "derived": [
   "prestar（貸す）"
  ],
  "dialogue": {
   "es": "— ¿Me puedes pedir prestado el coche?\n— Claro, cuídalo bien.",
   "ja": "「車貸してもらえる？」「もちろん、大事に使ってね」"
  }
 },
 "prestar atención": {
  "nuance": "「注意を払う」の基本表現。prestar（貸す）+ atención（注意）の組み合わせ、直訳は「注意を貸す」。",
  "etymology": "prestar（貸す）+ atención（注意）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "atención（注意）"
  ],
  "dialogue": {
   "es": "— Presta atención, esto es importante.\n— Estoy escuchando.",
   "ja": "「注意して聞いて、これは重要だから」「聞いているよ」"
  }
 },
 "hacer caso": {
  "nuance": "「言うことを聞く、注意を払う」の基本表現。hacer caso a（〜の言うことを聞く）という組み合わせでよく使う。",
  "etymology": "caso（場合、事例）から派生した表現。",
  "synonyms": [],
  "derived": [
   "caso（場合）"
  ],
  "dialogue": {
   "es": "— No me hizo caso.\n— Qué frustrante.",
   "ja": "「彼は私の言うことを聞いてくれなかったんだ」「イライラするね」"
  }
 },
 "tener suerte": {
  "nuance": "「運がいい」の基本表現。ser afortunado（幸運である、よりフォーマル）とほぼ同義。",
  "etymology": "suerte（運）から派生した表現。",
  "synonyms": [],
  "derived": [
   "suerte（運）"
  ],
  "dialogue": {
   "es": "— Tuviste mucha suerte de encontrar ese trabajo.\n— Sí, estoy muy agradecido.",
   "ja": "「その仕事を見つけられて運が良かったね」「うん、とても感謝しているよ」"
  }
 },
 "tener razón": {
  "nuance": "「正しい(人が)」の基本表現。estar equivocado（間違っている）の反対語。",
  "etymology": "razón（理性、理由）から派生した表現。",
  "synonyms": [],
  "derived": [
   "razón（理由）"
  ],
  "dialogue": {
   "es": "— Tienes razón, debí haberlo pensado mejor.\n— No te preocupes, todos cometemos errores.",
   "ja": "「君の言う通りだね、もっとよく考えるべきだった」「気にしないで、誰でもミスはするから」"
  }
 },
 "estar equivocado": {
  "nuance": "「間違っている(人が)」の基本表現。tener razón（正しい）の反対語。",
  "etymology": "equivocarse（間違える）から派生した語。",
  "synonyms": [],
  "derived": [
   "equivocarse（間違える）"
  ],
  "dialogue": {
   "es": "— Creo que estás equivocado sobre esto.\n— Puede ser, déjame revisarlo.",
   "ja": "「これについては君が間違っていると思うな」「そうかもね、確認させて」"
  }
 },
 "cometer un error": {
  "nuance": "「ミスをする」の基本表現。equivocarse（間違える）とほぼ同義。",
  "etymology": "cometer（犯す）+ error（誤り）の組み合わせ。",
  "synonyms": [
   "equivocarse（間違える）"
  ],
  "derived": [
   "error（誤り）"
  ],
  "dialogue": {
   "es": "— Cometí un error en el informe.\n— No te preocupes, lo podemos corregir.",
   "ja": "「報告書でミスをしちゃったんだ」「心配しないで、修正できるから」"
  }
 },
 "sacar fotos": {
  "nuance": "「写真を撮る」の基本表現。tomar fotos（写真を撮る、ほぼ同義）とも言い換えられる。",
  "etymology": "sacar（取り出す）+ foto（写真）の組み合わせ。",
  "synonyms": [
   "tomar fotos（写真を撮る）"
  ],
  "derived": [
   "foto（写真）"
  ],
  "dialogue": {
   "es": "— Vamos a sacar fotos antes de que se ponga el sol.\n— Buena idea, la luz está perfecta.",
   "ja": "「日が沈む前に写真を撮ろう」「いい考えだね、光が完璧だから」"
  }
 },
 "hacer las paces": {
  "nuance": "「仲直りする」の基本表現。paz（平和）から派生、直訳は「平和を作る」。",
  "etymology": "paz（平和）から派生した表現。",
  "synonyms": [
   "reconciliarse（仲直りする、よりフォーマル）"
  ],
  "derived": [
   "paz（平和）"
  ],
  "dialogue": {
   "es": "— Ya hicimos las paces después de la discusión.\n— Me alegra escuchar eso.",
   "ja": "「口論の後、もう仲直りしたよ」「それを聞いて嬉しいよ」"
  }
 },
 "cambiar de opinión": {
  "nuance": "「考えを変える」の基本表現。cambiar（変える）+ de opinión（意見の）の組み合わせ。",
  "etymology": "opinión（意見）から派生した表現。",
  "synonyms": [],
  "derived": [
   "opinión（意見）"
  ],
  "dialogue": {
   "es": "— Cambié de opinión sobre el restaurante.\n— ¿Por qué? Pensé que te gustaba.",
   "ja": "「そのレストランについて考えが変わったんだ」「どうして？気に入っていると思ってたよ」"
  }
 },
 "darse prisa": {
  "nuance": "「急ぐ」の基本表現。apurarse（急ぐ、ラテンアメリカで一般的）とほぼ同義。",
  "etymology": "prisa（急ぎ）から派生した表現。",
  "synonyms": [
   "apurarse（急ぐ、ラテンアメリカで一般的）"
  ],
  "derived": [
   "prisa（急ぎ）"
  ],
  "dialogue": {
   "es": "— ¡Date prisa, vamos a llegar tarde!\n— Ya voy, dame un minuto.",
   "ja": "「急いで、遅刻しちゃうよ！」「今行くよ、1分待って」"
  }
 },
 "echar un vistazo": {
  "nuance": "「ちょっと見る」の基本表現。vistazo（一瞥）から派生、echarle un ojo（口語、ほぼ同義）とも言い換えられる。",
  "etymology": "echar（投げる）+ vistazo（一瞥）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "ver（見る）"
  ],
  "dialogue": {
   "es": "— ¿Puedes echar un vistazo a este documento?\n— Claro, dame un momento.",
   "ja": "「この書類ちょっと見てもらえる？」「もちろん、少し待ってね」"
  }
 },
 "perder el tiempo": {
  "nuance": "「時間を無駄にする」の基本表現。perder（失う）+ el tiempo（時間）の組み合わせ。",
  "etymology": "perder（失う）+ tiempo（時間）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "perder（失う）",
   "tiempo（時間）"
  ],
  "dialogue": {
   "es": "— No quiero perder el tiempo en esto.\n— Tienes razón, sigamos adelante.",
   "ja": "「これに時間を無駄にしたくないんだ」「その通りだね、先に進もう」"
  }
 },
 "valer la pena": {
  "nuance": "「価値がある」の基本表現。すでにpróximaで少し触れましたが、valer（価値がある）+ la pena（苦労）の組み合わせ。",
  "etymology": "valer（価値がある）+ pena（苦労、罰）の組み合わせ。",
  "synonyms": [],
  "derived": [
   "valer（価値がある）"
  ],
  "dialogue": {
   "es": "— ¿Vale la pena ver esa serie?\n— Sí, totalmente.",
   "ja": "「そのドラマ見る価値ある？」「うん、絶対にね」"
  }
 },
 "estar harto": {
  "nuance": "「うんざりしている」の基本表現。estar harto de（〜にうんざりしている）という組み合わせでよく使う。",
  "etymology": "hartar（満腹にする、うんざりさせる）から派生した語。",
  "synonyms": [],
  "derived": [
   "hartar（うんざりさせる）"
  ],
  "dialogue": {
   "es": "— Estoy harto de este clima.\n— Yo también, espero que mejore pronto.",
   "ja": "「この天気にはうんざりしているんだ」「私もだよ、早く良くなるといいね」"
  }
 },
 "ponerse nervioso": {
  "nuance": "「緊張する」の基本表現。ponerse（〜になる）+ nervioso（緊張した）の組み合わせ。",
  "etymology": "nervioso（神経質な）から派生した表現。",
  "synonyms": [],
  "derived": [
   "nervioso（緊張した）"
  ],
  "dialogue": {
   "es": "— Me pongo muy nervioso antes de hablar en público.\n— Es normal, a todos nos pasa.",
   "ja": "「人前で話す前はすごく緊張するんだ」「普通のことだよ、みんなそうだから」"
  }
 },
 "quedarse dormido": {
  "nuance": "「寝落ちする」の基本表現。dormirse（眠りに落ちる）とほぼ同義だが、「そのまま眠ってしまった」というニュアンスが強い。",
  "etymology": "quedarse（留まる）+ dormido（眠った）の組み合わせ。",
  "synonyms": [
   "dormirse（眠りに落ちる）"
  ],
  "derived": [
   "dormir（眠る）"
  ],
  "dialogue": {
   "es": "— Me quedé dormido viendo la película.\n— Jaja, a mí me pasa seguido.",
   "ja": "「映画を見ながら寝落ちしちゃった」「あはは、私もよくあるよ」"
  }
 },
 "hacer una llamada": {
  "nuance": "「電話をかける」の基本表現。llamar（電話する、動詞一語）とほぼ同じ意味。",
  "etymology": "llamada（電話、呼び出し）から派生した表現。",
  "synonyms": [
   "llamar（電話する）"
  ],
  "derived": [
   "llamar（呼ぶ、電話する）"
  ],
  "dialogue": {
   "es": "— Necesito hacer una llamada rápida.\n— Claro, tómate tu tiempo.",
   "ja": "「急いで電話をかける必要があるんだ」「もちろん、ゆっくりどうぞ」"
  }
 },
 "dar las gracias": {
  "nuance": "「感謝を伝える」の基本表現。agradecer（感謝する、動詞一語）とほぼ同じ意味。",
  "etymology": "gracias（感謝）から派生した表現。",
  "synonyms": [
   "agradecer（感謝する）"
  ],
  "derived": [
   "gracias（ありがとう）"
  ],
  "dialogue": {
   "es": "— Quiero darte las gracias por tu ayuda.\n— No hay de qué, para eso están los amigos.",
   "ja": "「助けてくれてありがとうと伝えたいんだ」「どういたしまして、友達ってそういうものだから」"
  }
 },
 "pedir perdón": {
  "nuance": "「許しを乞う」の基本表現。disculparse（謝る）とほぼ同義。",
  "etymology": "perdón（許し）から派生した表現。",
  "synonyms": [
   "disculparse（謝る）"
  ],
  "derived": [
   "perdonar（許す）"
  ],
  "dialogue": {
   "es": "— Le pedí perdón por mi comportamiento.\n— Fue muy maduro de tu parte.",
   "ja": "「自分の振る舞いについて許しを乞うたんだ」「君にしてはとても大人の対応だったね」"
  }
 },
 "tener cuidado": {
  "nuance": "「気をつける」の基本表現。tener cuidado con（〜に気をつける）という組み合わせでよく使う。",
  "etymology": "cuidado（注意）から派生した表現。",
  "synonyms": [],
  "derived": [
   "cuidado（注意）",
   "cuidar（世話をする）"
  ],
  "dialogue": {
   "es": "— Ten cuidado con el escalón.\n— Gracias por avisarme.",
   "ja": "「段差に気をつけて」「教えてくれてありがとう」"
  }
 },
 "hacer trampa": {
  "nuance": "「ズルをする」の基本表現。trampa（罠、ズル）から派生した表現。",
  "etymology": "trampa（罠）から派生した表現。",
  "synonyms": [],
  "derived": [
   "trampa（罠、ズル）"
  ],
  "dialogue": {
   "es": "— No hagas trampa en el juego.\n— Nunca haría eso, lo prometo.",
   "ja": "「ゲームでズルしないでね」「絶対そんなことしないよ、約束する」"
  }
 },
 "romper el hielo": {
  "nuance": "「場を和ませる」の基本表現。romper（壊す）+ el hielo（氷）の組み合わせ、英語のbreak the iceと同じ発想。",
  "etymology": "romper（壊す）+ hielo（氷）の組み合わせ、英語break the iceと同語源的発想。",
  "synonyms": [],
  "derived": [
   "hielo（氷）"
  ],
  "dialogue": {
   "es": "— Contó un chiste para romper el hielo.\n— Funcionó, todos se rieron.",
   "ja": "「場を和ませるために冗談を言ったんだ」「効果あったね、みんな笑ってたよ」"
  }
 },
 "hacer amigos": {
  "nuance": "「友達を作る」の基本表現。hacer（作る）+ amigos（友達）の組み合わせ。",
  "etymology": "amigo（友達）から派生した表現。",
  "synonyms": [],
  "derived": [
   "amigo（友達）"
  ],
  "dialogue": {
   "es": "— Es fácil hacer amigos aquí.\n— Sí, la gente es muy amigable.",
   "ja": "「ここでは友達を作りやすいんだ」「うん、みんなとても親しみやすいよね」"
  }
 }
};
