/* ----------------------------------------------------------------------
   DICCIONARIO — 詳しい単語辞典データ
   キーはvocab.jsの es フィールドを小文字化・trimしたもの。
   ここに載っていない単語は「詳細準備中」として基本情報だけ表示されます。
   少しずつ増やしていく前提のファイルです（1回に全部揃える必要はありません）。
------------------------------------------------------------------------- */
const DICTIONARY_DATA = {
  "hola": {
    nuance: "最もカジュアルな挨拶で、時間帯を問わず使える万能語。フォーマルな場でも問題なく使われる。",
    etymology: "ラテン語の感嘆詞に由来するとされるが、諸説あり（アラビア語起源説もある）。",
    synonyms: ["qué tal", "buenas"],
    derived: [],
    dialogue: { es: "— ¡Hola! ¿Cómo estás?\n— Hola, muy bien, ¿y tú?", ja: "「やあ！元気？」「やあ、元気だよ、君は？」" } },
  "buenos días": {
    nuance: "正午くらいまで使う朝の挨拶。ビジネスシーンでも標準的。",
    etymology: "bueno（良い）+ día（日）の組み合わせ。",
    synonyms: [], derived: ["buen día（一部地域で単数形も使われる）"],
    dialogue: { es: "— Buenos días, ¿cómo amaneció?\n— Buenos días, muy bien, gracias.", ja: "「おはようございます、調子はどうですか」「おはよう、良い調子です、ありがとう」" } },
  "gracias": {
    nuance: "感謝を表す基本語。muchas graciasにするとより丁寧・強調になる。",
    etymology: "ラテン語gratia（恩恵、感謝）に由来。",
    synonyms: ["te lo agradezco", "mil gracias"],
    derived: ["agradecer（感謝する、動詞）", "agradecido（感謝している、形容詞）"],
    dialogue: { es: "— Aquí tienes tu café.\n— Gracias.", ja: "「はい、コーヒーどうぞ」「ありがとう」" } },
  "por favor": {
    nuance: "依頼につける決まり文句。文末につけることが多いが文頭でも可。",
    etymology: "por（〜のために）+ favor（好意）で「お願いします」の意。",
    synonyms: [], derived: ["hacer el favor de（〜していただけますか、より丁寧な表現）"],
    dialogue: { es: "— ¿Me pasas la sal, por favor?\n— Claro, aquí tienes.", ja: "「塩を取ってもらえますか」「もちろん、どうぞ」" } },
  "de nada": {
    nuance: "「どういたしまして」。カジュアルにはno hay de quéとも言う。",
    etymology: "de（〜について）+ nada（何もない）で「大したことではない」の意。",
    synonyms: ["no hay de qué", "para eso estamos"],
    derived: [],
    dialogue: { es: "— Muchas gracias por tu ayuda.\n— De nada.", ja: "「手伝ってくれて本当にありがとう」「どういたしまして」" } },
  "lo siento": {
    nuance: "謝罪の基本表現。perdónより少しフォーマルで、深刻な内容にも使える。",
    etymology: "sentir（感じる）の一人称現在形。「私はそれを（悪く）感じている」が直訳。",
    synonyms: ["perdón", "disculpa"],
    derived: ["sentir（感じる）", "sentimiento（感情）"],
    dialogue: { es: "— Llegué tarde, lo siento mucho.\n— No te preocupes.", ja: "「遅れてごめんなさい」「気にしないで」" } },
  "sí": {
    nuance: "「はい」。アクセント記号がない si は「もし〜なら」という別の単語になるので注意。",
    etymology: "ラテン語sic（そのように）に由来。",
    synonyms: ["claro", "por supuesto"],
    derived: [],
    dialogue: { es: "— ¿Quieres venir?\n— Sí, claro.", ja: "「来る？」「うん、もちろん」" } },
  "no": {
    nuance: "「いいえ」だけでなく、動詞の前に置いて否定文を作る基本語でもある。",
    etymology: "ラテン語non（〜ない）に由来。",
    synonyms: [], derived: [],
    dialogue: { es: "— ¿Te gusta el café?\n— No, prefiero el té.", ja: "「コーヒー好き？」「いや、お茶の方が好き」" } },
  "agua": {
    nuance: "アクセントのある「a」音が続くのを避けるため、単数形では女性名詞なのに el を使う特殊な単語（el agua fría）。",
    etymology: "ラテン語aqua（水）に由来。",
    synonyms: [], derived: ["acuático（水の、水生の）", "acuario（水族館）"],
    dialogue: { es: "— ¿Me traes un vaso de agua?\n— Claro, ahora mismo.", ja: "「水を一杯持ってきてくれる？」「もちろん、すぐに」" } },
  "café": {
    nuance: "「コーヒー」と「喫茶店」の両方の意味を持つ。文脈で判断する。",
    etymology: "アラビア語qahwaがトルコ語を経てヨーロッパの言語に広まった。",
    synonyms: [], derived: ["cafetería（カフェ）", "cafeína（カフェイン）"],
    dialogue: { es: "— ¿Vamos a tomar un café?\n— Sí, conozco un lugar cerca.", ja: "「コーヒー飲みに行く？」「うん、近くにいい場所知ってるよ」" } },
  "hablar": {
    nuance: "「話す」の基本動詞。特定の言語について話すときはhablar+言語（hablar español）。",
    etymology: "ラテン語fabulari（物語る）に由来。",
    synonyms: ["conversar", "charlar（雑談する、よりカジュアル）"],
    derived: ["habla（話し方、方言）", "hablante（話者）"],
    dialogue: { es: "— ¿Hablas inglés?\n— Un poco, estoy aprendiendo.", ja: "「英語話せる？」「少しだけ、勉強中なんだ」" } },
  "comer": {
    nuance: "「食べる」の基本動詞。ラテンアメリカの多くの地域では「昼食をとる」という意味でも使われる。",
    etymology: "ラテン語comedere（すっかり食べる）に由来。",
    synonyms: ["alimentarse（栄養を取る、ややフォーマル）"],
    derived: ["comida（食べ物、食事）", "comedor（食堂）"],
    dialogue: { es: "— ¿Ya comiste?\n— No, todavía no.", ja: "「もうご飯食べた？」「ううん、まだ」" } },
  "vivir": {
    nuance: "「住む」だけでなく「生きる」という意味でも使われる。",
    etymology: "ラテン語vivere（生きる）に由来。",
    synonyms: ["residir（居住する、フォーマル）", "habitar（住む、ややフォーマル）"],
    derived: ["vida（人生、命）", "vivienda（住居）"],
    dialogue: { es: "— ¿Dónde vives?\n— Vivo en Tokio.", ja: "「どこに住んでるの？」「東京に住んでるよ」" } },
  "tener": {
    nuance: "「持つ」だけでなく、tener frío（寒い）、tener hambre（お腹が空いた）のように、体の状態を表す表現にも幅広く使われる不規則動詞。",
    etymology: "ラテン語tenere（保持する）に由来。",
    synonyms: ["poseer（所有する、ややフォーマル）"],
    derived: ["tenencia（保有）", "teniente（中尉、軍の階級）"],
    dialogue: { es: "— ¿Tienes hermanos?\n— Sí, tengo una hermana.", ja: "「兄弟いる？」「うん、妹が一人いるよ」" } },
  "querer": {
    nuance: "「欲しい・したい」に加えて「愛している」という意味にもなる（Te quiero.）。文脈で意味が変わる。",
    etymology: "ラテン語quaerere（探し求める）に由来。",
    synonyms: ["desear（望む、ややフォーマル）", "amar（愛する、より強い愛情表現）"],
    derived: ["querido（親愛なる、手紙の書き出し等）", "cariño（愛情）"],
    dialogue: { es: "— ¿Qué quieres hacer hoy?\n— Quiero descansar en casa.", ja: "「今日何したい？」「家でゆっくりしたいな」" } },
  "poder": {
    nuance: "「〜できる」の基本動詞で、能力・可能性・許可のすべてをカバーする万能語。",
    etymology: "俗ラテン語potere（〜できる）に由来。",
    synonyms: ["ser capaz de（〜する能力がある、ややフォーマル）"],
    derived: ["poder（名詞・力、権力）", "poderoso（力強い）"],
    dialogue: { es: "— ¿Puedes ayudarme?\n— Sí, claro que puedo.", ja: "「手伝ってもらえる？」「うん、もちろんできるよ」" } },
  "ir": {
    nuance: "「行く」の基本動詞で、ir a+動詞の原形（〜するつもりだ）という未来を表す用法も非常によく使われる。",
    etymology: "ラテン語のire（行く）由来だが、活用は別の動詞vadere由来の形も混ざった特殊な不規則動詞。",
    synonyms: ["dirigirse a（〜に向かう、ややフォーマル）"],
    derived: ["ida（行き、片道）", "salida（出発、出口）"],
    dialogue: { es: "— ¿Vas a la fiesta?\n— Sí, voy a ir con mis amigos.", ja: "「パーティー行く？」「うん、友達と行くつもり」" } },
  "hacer": {
    nuance: "「する・作る」の基本動詞。天気表現（hace calor＝暑い）にも使われる、応用範囲が非常に広い不規則動詞。",
    etymology: "ラテン語facere（する、作る）に由来。",
    synonyms: ["realizar（実行する、ややフォーマル）", "fabricar（製造する）"],
    derived: ["hecho（事実、出来事、過去分詞）", "quehacer（仕事、やるべきこと）"],
    dialogue: { es: "— ¿Qué haces?\n— Estoy haciendo la tarea.", ja: "「何してるの？」「宿題やってるところ」" } },
  "ser": {
    nuance: "本質的・恒常的な性質を表すbe動詞。estarとの使い分けが学習者の最大の壁の一つ。",
    etymology: "ラテン語esse（〜である）とsedere（座る）の要素が混ざった特殊な不規則動詞。",
    synonyms: [], derived: ["ser（名詞・存在、生き物）", "esencia（本質）"],
    dialogue: { es: "— ¿De dónde eres?\n— Soy de Japón.", ja: "「出身はどこ？」「日本出身だよ」" } },
  "estar": {
    nuance: "一時的な状態・場所を表すbe動詞。serとの対比で覚えるのが効率的。",
    etymology: "ラテン語stare（立つ）に由来。",
    synonyms: [], derived: ["estado（状態、州）", "estable（安定した）"],
    dialogue: { es: "— ¿Cómo estás?\n— Estoy bien, gracias.", ja: "「元気？」「元気だよ、ありがとう」" } },
  "amigo": {
    nuance: "「友達」の基本語。女性形はamiga。親しさの度合いはbuen amigo（親友）などで調整する。",
    etymology: "ラテン語amicus（友人）に由来、amare（愛する）と同語源。",
    synonyms: ["compañero（仲間）", "cuate（メキシコの口語で「相棒」）"],
    derived: ["amistad（友情）", "amigable（友好的な）"],
    dialogue: { es: "— Él es mi mejor amigo.\n— ¡Qué bien!", ja: "「彼は私の親友なんだ」「いいね！」" } },
  "casa": {
    nuance: "「家」の基本語。hogar（家庭、家庭的な意味合いを含む）とはニュアンスが少し異なる。",
    etymology: "ラテン語casa（小屋）に由来。",
    synonyms: ["hogar（家庭）", "vivienda（住居、フォーマル）"],
    derived: ["casero（自家製の、家主）", "casona（大邸宅）"],
    dialogue: { es: "— ¿Vamos a tu casa?\n— Sí, está cerca de aquí.", ja: "「君の家に行く？」「うん、ここから近いよ」" } },
  "trabajo": {
    nuance: "「仕事」の基本語。口語ではchamba（メキシコ等）もよく使われる。",
    etymology: "俗ラテン語tripaliare（拷問器具tripaliumで苦しめる）に由来するとされ、元々「苦労」の意味合いが強かった。",
    synonyms: ["empleo（雇用、職）", "chamba（口語）"],
    derived: ["trabajar（働く）", "trabajador（労働者、勤勉な）"],
    dialogue: { es: "— ¿Cómo va el trabajo?\n— Un poco ocupado, pero bien.", ja: "「仕事はどう？」「ちょっと忙しいけど順調だよ」" } },
  "tiempo": {
    nuance: "「時間」と「天気」の両方の意味を持つ単語。文脈で判断する（¿Qué tiempo hace?＝天気はどう？）。",
    etymology: "ラテン語tempus（時）に由来。",
    synonyms: ["clima（気候、天気の意味で）"],
    derived: ["temporada（シーズン）", "temporal（一時的な）"],
    dialogue: { es: "— No tengo tiempo hoy.\n— Entiendo, será para otro día.", ja: "「今日は時間がないんだ」「分かった、また今度にしよう」" } },
  "día": {
    nuance: "-aで終わるのに男性名詞という例外の代表格（el día）。",
    etymology: "ラテン語dies（日）に由来。",
    synonyms: ["jornada（一日の労働時間、より限定的）"],
    derived: ["diario（日記、日々の）", "mediodía（正午）"],
    dialogue: { es: "— ¿Qué día es hoy?\n— Hoy es lunes.", ja: "「今日は何曜日？」「今日は月曜日だよ」" } },
  "noche": {
    nuance: "「夜」。buenas nochesは「こんばんは」と「おやすみ」の両方に使える。",
    etymology: "ラテン語nox/noctis（夜）に由来。",
    synonyms: [], derived: ["nocturno（夜間の）", "anoche（昨夜）"],
    dialogue: { es: "— Buenas noches, que descanses.\n— Igualmente, buenas noches.", ja: "「おやすみ、ゆっくり休んでね」「君もね、おやすみ」" } },
  "grande": {
    nuance: "名詞の前に置くとgranに短縮され、「偉大な」という意味に変わる（un gran hombre＝偉大な人 vs un hombre grande＝体の大きな人）。",
    etymology: "ラテン語grandis（大きい）に由来。",
    synonyms: ["enorme（巨大な）", "amplio（広い）"],
    derived: ["grandeza（偉大さ）", "agrandar（大きくする）"],
    dialogue: { es: "— Es una ciudad muy grande.\n— Sí, es fácil perderse.", ja: "「とても大きい街だね」「うん、迷いやすいよ」" } },
  "pequeño": {
    nuance: "「小さい」の基本語。人に対して使うと「幼い、年下の」という意味にもなる。",
    etymology: "起源ははっきりしないが、俗ラテン語系の語とされる。",
    synonyms: ["chico（口語）", "diminuto（極小の）"],
    derived: ["pequeñez（小ささ）"],
    dialogue: { es: "— El apartamento es pequeño pero cómodo.\n— Lo importante es que te guste.", ja: "「アパートは小さいけど快適だよ」「気に入っているなら一番だね」" } },
  "bueno": {
    nuance: "「良い」の基本語。名詞の前ではbuenに短縮される（un buen día）。感嘆詞的に「ええと」「まあ」という意味でも使われる。",
    etymology: "ラテン語bonus（良い）に由来。",
    synonyms: ["bien（副詞形）"],
    derived: ["bondad（善良さ）", "bienestar（幸福、福祉）"],
    dialogue: { es: "— ¿Qué tal la película?\n— Bueno, no estuvo mal.", ja: "「映画どうだった？」「うーん、悪くはなかったよ」" } },
  "malo": {
    nuance: "「悪い」の基本語。名詞の前ではmalに短縮される（un mal día）。",
    etymology: "ラテン語malus（悪い）に由来。",
    synonyms: ["pésimo（最悪の）"],
    derived: ["maldad（悪意）", "malestar（不快感）"],
    dialogue: { es: "— Hoy tuve un mal día.\n— Lo siento, ¿quieres hablar de ello?", ja: "「今日は悪い一日だったよ」「それは残念、話したい？」" } },
  "nuevo": {
    nuance: "名詞の前だと「新入りの、別の」、後だと「新品の」という違いが出ることがある。",
    etymology: "ラテン語novus（新しい）に由来。",
    synonyms: ["reciente（最近の）"],
    derived: ["novedad（新しさ、ニュース）", "renovar（更新する）"],
    dialogue: { es: "— Tengo un carro nuevo.\n— ¡Felicidades! ¿De qué color es?", ja: "「新しい車を買ったんだ」「おめでとう！何色？」" } },
  "familia": {
    nuance: "「家族」。メキシコを含むラテンアメリカでは、親族の絆をとても大切にする文化的背景がある単語。",
    etymology: "ラテン語familia（家族、使用人を含む世帯）に由来。",
    synonyms: ["parientes（親戚）"],
    derived: ["familiar（家族の、身近な）", "familiaridad（親しみ）"],
    dialogue: { es: "— ¿Tienes una familia grande?\n— Sí, somos seis hermanos.", ja: "「大家族なの？」「うん、6人兄弟なんだ」" } },
  "escuela": {
    nuance: "「学校」の一般的な語。colegio（私立校を指すことが多い）やuniversidad（大学）とは区別される。",
    etymology: "ラテン語schola、さらにギリシャ語skholē（暇、余暇→そこから転じて学問の場）に由来。",
    synonyms: ["colegio（学校、地域により意味が異なる）"],
    derived: ["escolar（学校の）"],
    dialogue: { es: "— ¿A qué hora sales de la escuela?\n— A las tres de la tarde.", ja: "「何時に学校終わるの？」「午後3時だよ」" } },
  "dinero": {
    nuance: "「お金」の基本語。口語ではlanaやferiaもよく使われる（メキシコ）。",
    etymology: "ラテン語denarius（古代ローマの銀貨）に由来。",
    synonyms: ["plata（口語、多くのラテンアメリカで）", "lana／feria（メキシコの口語）"],
    derived: ["monetario（金銭の）"],
    dialogue: { es: "— No tengo mucho dinero ahora.\n— No te preocupes, yo invito.", ja: "「今あまりお金がないんだ」「気にしないで、私がおごるよ」" } },
  "amor": {
    nuance: "「愛」。呼びかけ語として「あなた、ハニー」のような意味でも非常によく使われる（mi amor）。",
    etymology: "ラテン語amor（愛）に由来。",
    synonyms: ["cariño（愛情、より穏やかな響き）"],
    derived: ["amar（愛する）", "amoroso（愛情深い）"],
    dialogue: { es: "— Te amo, mi amor.\n— Yo también te amo.", ja: "「愛してるよ、ハニー」「私もあなたを愛してる」" } },
  "feliz": {
    nuance: "「幸せな」の基本語。¡Feliz cumpleaños!（誕生日おめでとう）のような決まり文句にも頻出。",
    etymology: "ラテン語felix（幸運な、実り豊かな）に由来。",
    synonyms: ["contento（満足した、より一時的な喜び）"],
    derived: ["felicidad（幸福）", "felicitar（祝う）"],
    dialogue: { es: "— ¡Feliz cumpleaños!\n— ¡Muchas gracias!", ja: "「誕生日おめでとう！」「どうもありがとう！」" } },
  "trabajar": {
    nuance: "「働く」の基本動詞。名詞形trabajoとセットで覚えると効率的。",
    etymology: "俗ラテン語tripaliare（苦しめる）に由来、trabajoと同語源。",
    synonyms: ["laborar（働く、フォーマル）"],
    derived: ["trabajo（仕事）", "trabajador（労働者）"],
    dialogue: { es: "— ¿Dónde trabajas?\n— Trabajo en una oficina.", ja: "「どこで働いているの？」「オフィスで働いているよ」" } },
  "ser / estar": {
    nuance: "英語のbe動詞1つに対し、スペイン語はser（本質的・恒常的な性質）とestar（一時的な状態・場所）の2つに分かれる。この区別は学習者にとって最大の壁の一つ。",
    etymology: "serはラテン語esse（〜である）とsedere（座る）が混ざった特殊な語源。estarはラテン語stare（立つ）に由来。",
    synonyms: [],
    derived: ["esencia（本質、serと同語源）", "estado（状態、estarと同語源）"],
    dialogue: { es: "— ¿De dónde eres?\n— Soy de Japón. ¿Y tú, cómo estás hoy?\n— Estoy muy bien, gracias.", ja: "「出身はどこ？」「日本出身だよ。君は今日、調子はどう？」「とても元気だよ、ありがとう」" } },
  "estudiar": {
    nuance: "「勉強する」の基本動詞。estudiar+専攻名で「〜を専攻する」という意味にもなる。",
    etymology: "ラテン語studere（熱心に取り組む）に由来。",
    synonyms: ["aprender（学ぶ、習得のニュアンスが強い）"],
    derived: ["estudio（勉強、書斎）", "estudiante（学生）"],
    dialogue: { es: "— ¿Qué estudias?\n— Estudio medicina.", ja: "「何を勉強しているの？」「医学を勉強しているよ」" } },
};
