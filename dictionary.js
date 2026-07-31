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
  "nuance": "「欲しい・したい」に加えて「愛している」という意味にもなる（Te quiero.）。文脈で意味が変わる。",
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
  "nuance": "「行く」の基本動詞で、ir a+動詞の原形（〜するつもりだ）という未来を表す用法も非常によく使われる。",
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
  "nuance": "「明日」と「朝」の両方の意味を持つ単語。文脈で判断する（mañana por la mañana＝明日の朝）。",
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
  "nuance": "「恐怖」。tener miedo（怖い）という決まった動詞との組み合わせで使うことが多い（estar miedoとは言わない）。",
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
  "etymology": "諸説あるが、ラテン語hordeata（大麦の飲み物）に由来するという説が有力。",
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
  "nuance": "「怖がっている」。asustar（怖がらせる）の過去分詞から形容詞化した語。",
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
 }
};
