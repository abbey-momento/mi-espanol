const GRAMMAR_ARTICLES = [
  // ---------- 時制 ----------
  { title:"点過去の作り方（-ar動詞）",
    body:"点過去（pretérito indefinido）は、過去のある時点で完了した1回きりの行為を表す時制です。「昨日〜した」「先週〜した」のように、始まりと終わりがはっきりしている出来事に使います。-ar動詞は原形の語幹（hablarならhabl-）に決まった語尾をつけます。\n\n例: Ayer hablé con mi jefe.（昨日、上司と話した）／ El sábado pasado, bailamos toda la noche.（先週の土曜日、一晩中踊った）",
    table:{ cols:["人称","語尾","hablarの例"], rows:[
      ["yo","-é","hablé"], ["tú","-aste","hablaste"], ["él/ella/usted","-ó","habló"],
      ["nosotros","-amos","hablamos"], ["ellos/ellas/ustedes","-aron","hablaron"]
    ] } },
  { title:"点過去の作り方（-er/-ir動詞）",
    body:"-er動詞と-ir動詞は、点過去では同じ語尾になります（-ar動詞とは違う語尾です）。comer（食べる）とvivir（住む）はどちらもこの型です。\n\n例: Comí tacos anoche.（昨夜タコスを食べた）／ Vivimos en Osaka por dos años.（2年間大阪に住んでいた）\n\n不規則動詞も多く、ir/serはfui, fuiste, fue, fuimos, fueron（同形）、hacerはhice, hiciste, hizo...のように語幹自体が変わります。",
    table:{ cols:["人称","語尾","comerの例"], rows:[
      ["yo","-í","comí"], ["tú","-iste","comiste"], ["él/ella/usted","-ió","comió"],
      ["nosotros","-imos","comimos"], ["ellos/ellas/ustedes","-ieron","comieron"]
    ] } },
  { title:"線過去の作り方",
    body:"線過去（imperfecto）は、過去に繰り返していた習慣や、当時継続していた状態・背景を表します。「よく〜していた」「当時は〜だった」というニュアンスです。点過去よりも規則的で、不規則動詞がとても少ないのが特徴です（ser, ir, verの3つだけが不規則）。\n\n例: Cuando era niño, jugaba en el parque todos los días.（子供の頃、毎日公園で遊んでいた）／ Hacía mucho calor esa tarde.（その日の午後はとても暑かった）\n\n点過去との使い分けは「1回きりの出来事」か「繰り返し・背景描写」かで判断すると整理しやすいです。",
    table:{ cols:["人称","-ar語尾","-er/-ir語尾"], rows:[
      ["yo","-aba","-ía"], ["tú","-abas","-ías"], ["él/ella/usted","-aba","-ía"],
      ["nosotros","-ábamos","-íamos"], ["ellos/ellas/ustedes","-aban","-ían"]
    ] } },
  { title:"点過去 vs 線過去：使い分けの実践",
    body:"この2つの過去形は日本人学習者が最もつまずくポイントの一つです。ポイントは「その出来事に終わりが見えているか」。\n\n① 1回きり・完了した行為 → 点過去：Fui al cine ayer.（昨日映画館に行った＝行って戻ってきた、完了）\n② 習慣・繰り返し → 線過去：Iba al cine todos los fines de semana.（毎週末映画館に行っていた＝習慣）\n③ 背景・状況描写 → 線過去、その中で起きた出来事 → 点過去：Llovía（線過去＝背景）cuando salí（点過去＝その時起きた行為）de casa.（家を出たとき、雨が降っていた）\n\nこの「線過去の背景の中に点過去の出来事が割り込む」パターンは物語やニュースで非常によく出てきます。" },
  { title:"未来形の作り方",
    body:"多くの動詞は、原形（hablar, comer, vivirなど）にそのまま語尾をつけるだけで未来形になります。この語尾はすべての動詞タイプ（-ar/-er/-ir）で共通です。tener→tendr-、hacer→har-のように、語幹そのものが変わる不規則動詞もあります。\n\n例: Mañana hablaré con ella.（明日、彼女と話すつもりだ）\n\n口語では、未来のことをvoy a + 動詞の原形（〜するつもりだ）で表すことも非常に多く、日常会話ではむしろこちらの方が主流です。",
    table:{ cols:["人称","語尾","hablarの例"], rows:[
      ["yo","-é","hablaré"], ["tú","-ás","hablarás"], ["él/ella/usted","-á","hablará"],
      ["nosotros","-emos","hablaremos"], ["ellos/ellas/ustedes","-án","hablarán"]
    ] } },
  { title:"条件法（過去未来形）の作り方",
    body:"条件法（condicional）は「もし〜なら…だろう」という仮定や、「〜していただけますか」という丁寧な依頼に使います。未来形と同じ語幹（不規則動詞も同じ）に、線過去の-er/-ir型と同じ語尾をつけます。\n\n例: En tu lugar, yo hablaría con él.（あなたの立場なら、私は彼と話すだろう）／ ¿Podrías ayudarme?（手伝っていただけますか）",
    table:{ cols:["人称","語尾","hablarの例"], rows:[
      ["yo","-ía","hablaría"], ["tú","-ías","hablarías"], ["él/ella/usted","-ía","hablaría"],
      ["nosotros","-íamos","hablaríamos"], ["ellos/ellas/ustedes","-ían","hablarían"]
    ] } },
  { title:"接続法現在の作り方の基本",
    body:"接続法（subjuntivo）は、事実そのものではなく「願望・感情・疑い・不確実さ」など話し手の心の中を表す時制です。Espero que...（〜だといいな）、Quiero que...（〜してほしい）のような表現の後によく使われます。作り方は直説法現在のyoの形から-oを取り、-ar動詞は-e系、-er/-ir動詞は-a系の語尾に変えます（直説法と語尾が入れ替わるイメージです）。\n\n例: Espero que tengas un buen viaje.（良い旅行になりますように）",
    table:{ cols:["人称","-ar語尾","-er/-ir語尾"], rows:[
      ["yo","-e","-a"], ["tú","-es","-as"], ["él/ella/usted","-e","-a"],
      ["nosotros","-emos","-amos"], ["ellos/ellas/ustedes","-en","-an"]
    ] } },
  { title:"接続法を使うべき場面（トリガー）",
    body:"接続法は「どんな時に使うか」を覚えるのが一番大変です。代表的なきっかけ（トリガー）は次の4つのグループです。\n\n① 願望・依頼：quiero que, espero que, ojalá que\n② 感情：me alegra que, siento que, es una lástima que\n③ 疑い・否定：no creo que, dudo que, no es cierto que\n④ 価値判断・必要性：es importante que, es necesario que\n\n共通しているのは「主語が2つあり、後半の節が事実の報告ではなく、心の中の内容（願望・感情・疑い・評価）を表している」という点です。単なる事実の報告（Creo que tiene razón.＝直説法）と、疑いの表明（No creo que tenga razón.＝接続法）の違いに注目すると分かりやすいです。" },
  { title:"現在完了形（〜したことがある）の作り方",
    body:"現在完了形（pretérito perfecto）は「〜したことがある」「（今までに）〜した」という経験や、現在に関係する完了を表す複合時制です。haberを主語に合わせて活用させ、その後ろに過去分詞を置きます。過去分詞は主語が変わっても形は変わりません。\n\n例: Nunca he estado en Argentina.（アルゼンチンに行ったことがない）",
    table:{ cols:["主語","haber","過去分詞の例"], rows:[
      ["yo","he","hablado / comido / vivido"], ["tú","has","hablado / comido / vivido"],
      ["él/ella/usted","ha","hablado / comido / vivido"], ["nosotros","hemos","hablado / comido / vivido"],
      ["ellos/ellas/ustedes","han","hablado / comido / vivido"]
    ] } },
  { title:"進行形（estar + 現在分詞）",
    body:"「今まさに〜しているところだ」という一時的な進行中の動作を表すには、estarを活用させて現在分詞（gerundio）を続けます。現在分詞は-ar動詞なら-ando（hablando）、-er/-ir動詞なら-iendo（comiendo, viviendo）です。\n\n例: Estoy estudiando español ahora mismo.（今まさにスペイン語を勉強している）\n\n不規則な現在分詞もあります：leer→leyendo、dormir→durmiendo、pedir→pidiendoなど。英語のing形のように「普段の習慣」には使わず、あくまで「今この瞬間」を強調する表現です。" },
  { title:"命令形の使い方（肯定・否定・代名詞の位置）",
    body:"命令形は活用そのものに加えて、代名詞の位置ルールが重要です。\n\n肯定命令：動詞のすぐ後ろに代名詞をくっつけて1語にします。例：¡Dímelo!（それを私に言って！＝di+me+lo）\n否定命令：no＋接続法現在の形を使い、代名詞は動詞の前に置きます。例：¡No me lo digas!（それを私に言わないで！）\n\nこの「肯定と否定で代名詞の位置が逆になる」ルールは間違えやすいポイントです。" },
  // ---------- 名詞・冠詞・形容詞 ----------
  { title:"名詞の性と数のルール",
    body:"スペイン語の名詞にはel（男性）とla（女性）の区別があります。完璧な規則ではありませんが、大まかな傾向があります。\n\n複数形は基本的に母音で終わる語には-s、子音で終わる語には-esをつけます（casa→casas、ciudad→ciudades）。-z で終わる語は-cesに変わります（lápiz→lápices）。",
    table:{ cols:["語尾の傾向","性","例"], rows:[
      ["-o","男性が多い","el libro, el chico"],
      ["-a","女性が多い","la casa, la mesa"],
      ["-ción, -sión, -dad, -tad","女性","la nación, la ciudad"],
      ["-ma（ギリシャ語源）","男性の例外が多い","el problema, el idioma"],
      ["-e, 子音終わり","どちらもあり得る","el coche / la noche"]
    ] } },
  { title:"定冠詞・不定冠詞の使い方",
    body:"定冠詞（el/la/los/las）は「すでに話題に出た・特定できるもの」に、不定冠詞（un/una/unos/unas）は「初めて話題に出す・不特定のもの」に使います。\n\n例: Tengo un perro. El perro se llama Max.（犬を1匹飼っている。その犬はマックスという名前だ）→ 最初はun（不特定）、2回目はel（特定済み）。\n\n職業・国籍を言うときは冠詞をつけないのが基本です：Soy profesor.（私は教師です／ Soy profesorではなくun profesorとは言わない、ただし形容詞で修飾する場合はSoy un profesor excelente.のようにつけることもあります）。",
    table:{ cols:["性・数","定冠詞","不定冠詞"], rows:[
      ["男性単数","el","un"], ["女性単数","la","una"],
      ["男性複数","los","unos"], ["女性複数","las","unas"]
    ] } },
  { title:"形容詞の位置と性数一致",
    body:"形容詞は基本的に名詞の後ろに置き、名詞の性と数に一致させます。\n\n例: un coche rojo（赤い車）／ una casa roja（赤い家）／ unos coches rojos（赤い車たち）\n\nただし、bueno（良い）・malo（悪い）・grande（大きい）など一部の形容詞は名詞の前に置くと意味やニュアンスが変わったり、短縮形になったりします。例：un buen amigo（良い友人、buenoが短縮）、un gran hombre（偉大な人、grandeが短縮されgranに）／ un hombre grande（体の大きい人）。" },
  { title:"指示形容詞・指示代名詞（este/ese/aquel）",
    body:"「この・その・あの」に対応する3段階の距離感があります。este（この＝話し手に近い）、ese（その＝聞き手に近い）、aquel（あの＝両者から遠い）。それぞれ性・数で変化します。\n\n例: Este libro es mío.（この本は私のだ）／ Esa silla es cómoda.（その椅子は快適だ）／ Aquella montaña es muy alta.（あの山はとても高い）",
    table:{ cols:["距離感","男性単数","女性単数","男性複数","女性複数"], rows:[
      ["この（近い）","este","esta","estos","estas"],
      ["その（中間）","ese","esa","esos","esas"],
      ["あの（遠い）","aquel","aquella","aquellos","aquellas"]
    ] } },
  { title:"所有形容詞・所有代名詞",
    body:"「私の」「あなたの」などの所有を表す形です。名詞の前に置く短い形（mi, tu, su...）が日常でよく使われ、nuestro/vuestroだけは性・数で変化します。\n\n例: Mi casa es pequeña.（私の家は小さい）／ Nuestra familia es grande.（私たちの家族は大きい）\n\n「〜のもの」という所有代名詞（mío, tuyo, suyo...）は、El libro es mío.（その本は私のものだ）のように使います。",
    table:{ cols:["人称","所有形容詞（前置）","例"], rows:[
      ["yo","mi / mis","mi casa, mis libros"],
      ["tú","tu / tus","tu casa, tus libros"],
      ["él/ella/usted","su / sus","su casa, sus libros"],
      ["nosotros","nuestro/a/os/as","nuestra casa"],
      ["ellos/ustedes","su / sus","su casa, sus libros"]
    ] } },
  // ---------- 代名詞 ----------
  { title:"比較級の作り方",
    body:"スペイン語の比較表現は3パターン覚えれば大体対応できます。「〜より…」「〜より少ない」「〜と同じくらい」、そして「一番〜」という最上級です。\n\n例: Este coche es más caro que aquel.（この車はあの車より高い）／ Ella es tan alta como su hermana.（彼女は姉と同じくらい背が高い）／ Mi hermano es el más alto de la familia.（兄は家族で一番背が高い）",
    table:{ cols:["パターン","形","例"], rows:[
      ["優等比較","más + 形容詞 + que","más caro que（〜より高い）"],
      ["劣等比較","menos + 形容詞 + que","menos caro que（〜より安い）"],
      ["同等比較","tan + 形容詞 + como","tan alto como（〜と同じ高さ）"],
      ["最上級","el/la + más + 形容詞","el más alto（一番背が高い）"]
    ] } },
  { title:"por と para の使い分け",
    body:"por と para はどちらも「〜のために」と訳せてしまうことがあり紛らわしいですが、para は「目的地・目的・締め切り」、por は「理由・経路・交換」という軸で考えると整理しやすいです。",
    table:{ cols:["用法","前置詞","例"], rows:[
      ["目的・受益者","para","Este regalo es para ti.（このプレゼントは君のために）"],
      ["締め切り","para","para el lunes（月曜日までに）"],
      ["理由・原因","por","Gracias por tu ayuda.（助けてくれてありがとう）"],
      ["経路・通過","por","Caminamos por el parque.（公園を通って歩いた）"],
      ["交換・対価","por","Pagué 20 dólares por el libro.（本に20ドル払った）"]
    ] } },
  { title:"直接目的語の代名詞（lo/la/los/las）",
    body:"すでに話題に出たモノや人を「それ」「それらを」と言い換えるときに使います。名詞の性と数に合わせて4種類あり、基本的には動詞の前に置きます。",
    table:{ cols:["性・数","代名詞","例"], rows:[
      ["男性単数","lo","¿Tienes el libro? Sí, lo tengo."],
      ["女性単数","la","¿Tienes la llave? Sí, la tengo."],
      ["男性複数","los","¿Tienes los boletos? Sí, los tengo."],
      ["女性複数","las","¿Tienes las llaves? Sí, las tengo."]
    ] } },
  { title:"間接目的語の代名詞（le/les）",
    body:"「〜に」を表す代名詞です。dar（あげる）やescribir（書く）のように、相手（間接目的語）が必要な動詞でよく使われます。直接目的語のlo/laと一緒に使うとき、le/lesはseに変わるという重要なルールがあります（le lo ではなく se lo）。",
    table:{ cols:["形","意味","例"], rows:[
      ["le","彼に/彼女に/あなたに","Le doy un regalo.（彼に贈り物をあげる）"],
      ["les","彼らに/あなたたちに","Les escribo una carta.（彼らに手紙を書く）"],
      ["se lo / se la","それを〜に（le/les+lo/laの組み合わせ）","Se lo doy.（それを彼にあげる）"]
    ] } },
  { title:"二重目的語代名詞のくわしい語順",
    body:"間接目的語（〜に）と直接目的語（〜を）を同時に使うとき、必ず「間接→直接」の順で並べます。そして間接目的語がle/lesの場合はseに変わります。\n\n例: ¿Me prestas el libro? → Sí, te lo presto.（本を貸してくれる？→うん、それを君に貸すよ）\n例: ¿Le diste el regalo a María? → Sí, se lo di.（マリアにプレゼントをあげた？→うん、それを彼女にあげた）\n\n「le lo」という形は存在しないので、必ずseに変える点に注意してください。" },
  { title:"再帰動詞の基本",
    body:"「自分自身に対して行う動作」を表す動詞で、再帰代名詞（me/te/se/nos/se）を主語に合わせて動詞の前に置きます。levantarse（起きる）、llamarse（〜という名前だ）、ducharse（シャワーを浴びる）などが代表例です。",
    table:{ cols:["主語","再帰代名詞","levantarseの例"], rows:[
      ["yo","me","me levanto"], ["tú","te","te levantas"], ["él/ella/usted","se","se levanta"],
      ["nosotros","nos","nos levantamos"], ["ellos/ellas/ustedes","se","se levantan"]
    ] } },
  { title:"関係代名詞（que / quien / donde）",
    body:"que（〜する〜、人にもモノにも使える万能選手）、quien（〜する人、前置詞の後で人を指すときに使う）、donde（〜する場所）が代表的です。\n\n例: El libro que compré es interesante.（私が買った本は面白い）\n例: La persona con quien hablé es mi profesora.（私が話した相手は私の先生だ）\n例: La ciudad donde nací es pequeña.（私が生まれた街は小さい）\n\nqueは日常会話で圧倒的によく使われ、quienは主に前置詞（con quien, de quienなど）とセットで使われることが多いです。" },
  // ---------- 動詞の用法 ----------
  { title:"ser と estar の使い分け",
    body:"どちらも「〜である」と訳せるため混同しやすいですが、seres「本質的・変わりにくい性質」、estarは「一時的な状態・場所」を表す、という軸で整理できます。\n\n面白いのは同じ形容詞でも、ser/estarのどちらと組み合わせるかで意味が変わることです。例：Él es aburrido.（彼は（性格が）つまらない人だ）vs Él está aburrido.（彼は（今）退屈している）。",
    table:{ cols:["用法","動詞","例"], rows:[
      ["性格・性質","ser","Ella es inteligente.（彼女は賢い＝本質）"],
      ["職業・国籍","ser","Soy japonés.（私は日本人だ）"],
      ["時間・日付","ser","Son las tres.（3時だ）"],
      ["一時的な状態","estar","Estoy cansado.（疲れている＝今の状態）"],
      ["場所（人・モノの所在）","estar","Madrid está en España.（マドリードはスペインにある）"],
      ["進行形","estar","Estoy comiendo.（今食べているところ）"]
    ] } },
  { title:"gustar型動詞の語順",
    body:"gustar（好き）は英語のlikeとは文法構造がまったく違い、「主語」と「好きな対象」が入れ替わります。直訳すると「〜にとって、それは好ましい」という構造です。\n\n例: Me gusta el café.（私はコーヒーが好き＝直訳「私にとってコーヒーは好ましい」）\n例: Me gustan los tacos.（タコスが好き＝主語がtacos複数なのでgustanと複数形になる）\n\n同じ構造を取る動詞に、me duele（痛い）、me interesa（興味がある）、me molesta（迷惑だ）、me falta（足りない）などがあります。「主語は好きな対象、間接目的語代名詞が人」という構造を意識すると混乱しにくくなります。",
    table:{ cols:["人称","間接目的語代名詞","例"], rows:[
      ["yo","me","me gusta"], ["tú","te","te gusta"], ["él/ella/usted","le","le gusta"],
      ["nosotros","nos","nos gusta"], ["ellos/ustedes","les","les gusta"]
    ] } },
  { title:"受け身の表現（ser+過去分詞 / se pasivo）",
    body:"受け身は主に2パターンあります。\n\n① ser + 過去分詞（誰によって行われたかを明示したいとき）：La casa fue construida por mi abuelo.（その家は祖父によって建てられた）\n② se + 動詞（行為者をぼかす、一般的な事実として言うとき）：Aquí se habla español.（ここではスペイン語が話されている＝スペイン語が話される場所です）\n\n日常会話では②の「se受身」のほうが圧倒的によく使われます。掲示や案内表示（Se vende.＝売り物件、Se busca.＝求む）にもよく登場します。" },
  // ---------- その他重要トピック ----------
  { title:"疑問詞の使い分け（qué / cuál / quién など）",
    body:"疑問詞は場面によって使い分けが必要です。特にqué（何）とcuál（どれ）は英語のwhatと違って混同しやすいポイントです。\n\n例: ¿Qué es esto?（これは何ですか＝定義を聞く）\n例: ¿Cuál es tu nombre?（あなたの名前はどれですか＝複数の選択肢から選ぶ、実質「あなたの名前は？」）\n\n「名詞が後ろに続くときはqué＋名詞」（¿Qué libro quieres?＝どの本が欲しい？）というルールも重要です。",
    table:{ cols:["疑問詞","意味","例"], rows:[
      ["qué","何","¿Qué haces?（何をしているの？）"],
      ["cuál/cuáles","どれ","¿Cuál prefieres?（どちらが好き？）"],
      ["quién/quiénes","誰","¿Quién es él?（彼は誰？）"],
      ["cómo","どのように","¿Cómo estás?（元気？）"],
      ["cuándo","いつ","¿Cuándo llegas?（いつ着くの？）"],
      ["dónde","どこ","¿Dónde vives?（どこに住んでいるの？）"],
      ["por qué","なぜ","¿Por qué lloras?（なぜ泣いているの？）"],
      ["cuánto/a","どれくらい","¿Cuánto cuesta?（いくらですか）"]
    ] } },
  { title:"否定文の作り方（二重否定）",
    body:"スペイン語では、英語と違って否定語を2つ以上重ねて使うのが正しい文法です（二重否定でも意味が打ち消し合いません）。\n\n例: No tengo nada.（私は何も持っていない＝直訳「持っていない、何も」）\n例: Nunca voy allí.（そこには決して行かない）／ No voy nunca allí.（noと動詞、後ろにnuncaを置いても同じ意味）\n例: No conozco a nadie aquí.（ここでは誰も知らない）\n\nnoは動詞の前に置き、nada/nadie/nuncaなどの否定語が動詞の後ろに来るときは、必ず動詞の前にもnoが必要というのがポイントです（否定語が動詞より前にある場合はnoは不要：Nadie lo sabe.＝誰もそれを知らない）。" },
  { title:"アクセント記号（tilde）のルール",
    body:"スペイン語の単語は、決まったルールで自然に強勢（アクセント）の位置が決まり、そのルールから外れる場合だけアクセント記号（tilde）をつけます。\n\n① 母音（a,e,i,o,u）またはn,sで終わる単語 → 後ろから2番目の音節に強勢：casa, hablan, libros\n② それ以外の子音で終わる単語 → 最後の音節に強勢：hablar, ciudad, reloj\n③ このルールに当てはまらない単語には、強勢のある母音にtildeをつける：café, canción, árbol\n\nまた、qué/cuál/cómoのような疑問詞は、疑問の意味のときだけtildeがつきます（que＝関係代名詞「〜する」、qué＝疑問詞「何」）。" },
  { title:"時間の経過を表す表現（desde / hace / llevar）",
    body:"「〜以来」「〜前に」「〜し続けている」という時間表現は英語と発想が違うので注意が必要です。\n\n① hace + 期間（〜前に、過去の一時点）：Llegué hace dos horas.（2時間前に着いた）\n② desde hace + 期間（〜前から続けて今も）：Vivo aquí desde hace tres años.（3年前からここに住んでいる）\n③ llevar + 期間 + 現在分詞（〜し続けている）：Llevo tres años viviendo aquí.（3年間ここに住んでいる＝②とほぼ同じ意味で口語的）\n\n②と③はほぼ同じ意味を表せる、よく使われる言い換えパターンです。" },
];
