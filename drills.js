const VERBS = [
  { v:"hablar", regular:true, ja:"話す",
    presente:["hablo","hablas","habla","hablamos","hablan"],
    indefinido:["hablé","hablaste","habló","hablamos","hablaron"],
    imperfecto:["hablaba","hablabas","hablaba","hablábamos","hablaban"],
    futuro:["hablaré","hablarás","hablará","hablaremos","hablarán"],
    condicional:["hablaría","hablarías","hablaría","hablaríamos","hablarían"],
    subjuntivo:["hable","hables","hable","hablemos","hablen"],
    perfecto:["he hablado","has hablado","ha hablado","hemos hablado","han hablado"],
    imperativo:["habla","hable","hablemos","hablen"] },
  { v:"comer", regular:true, ja:"食べる",
    presente:["como","comes","come","comemos","comen"],
    indefinido:["comí","comiste","comió","comimos","comieron"],
    imperfecto:["comía","comías","comía","comíamos","comían"],
    futuro:["comeré","comerás","comerá","comeremos","comerán"],
    condicional:["comería","comerías","comería","comeríamos","comerían"],
    subjuntivo:["coma","comas","coma","comamos","coman"],
    perfecto:["he comido","has comido","ha comido","hemos comido","han comido"],
    imperativo:["come","coma","comamos","coman"] },
  { v:"vivir", regular:true, ja:"住む/生きる",
    presente:["vivo","vives","vive","vivimos","viven"],
    indefinido:["viví","viviste","vivió","vivimos","vivieron"],
    imperfecto:["vivía","vivías","vivía","vivíamos","vivían"],
    futuro:["viviré","vivirás","vivirá","viviremos","vivirán"],
    condicional:["viviría","vivirías","viviría","viviríamos","vivirían"],
    subjuntivo:["viva","vivas","viva","vivamos","vivan"],
    perfecto:["he vivido","has vivido","ha vivido","hemos vivido","han vivido"],
    imperativo:["vive","viva","vivamos","vivan"] },
  { v:"ser", regular:false, ja:"〜である",
    presente:["soy","eres","es","somos","son"],
    indefinido:["fui","fuiste","fue","fuimos","fueron"],
    imperfecto:["era","eras","era","éramos","eran"],
    futuro:["seré","serás","será","seremos","serán"],
    condicional:["sería","serías","sería","seríamos","serían"],
    subjuntivo:["sea","seas","sea","seamos","sean"],
    perfecto:["he sido","has sido","ha sido","hemos sido","han sido"],
    imperativo:["sé","sea","seamos","sean"] },
  { v:"estar", regular:false, ja:"〜にいる",
    presente:["estoy","estás","está","estamos","están"],
    indefinido:["estuve","estuviste","estuvo","estuvimos","estuvieron"],
    imperfecto:["estaba","estabas","estaba","estábamos","estaban"],
    futuro:["estaré","estarás","estará","estaremos","estarán"],
    condicional:["estaría","estarías","estaría","estaríamos","estarían"],
    subjuntivo:["esté","estés","esté","estemos","estén"],
    perfecto:["he estado","has estado","ha estado","hemos estado","han estado"],
    imperativo:["está","esté","estemos","estén"] },
  { v:"tener", regular:false, ja:"持つ",
    presente:["tengo","tienes","tiene","tenemos","tienen"],
    indefinido:["tuve","tuviste","tuvo","tuvimos","tuvieron"],
    imperfecto:["tenía","tenías","tenía","teníamos","tenían"],
    futuro:["tendré","tendrás","tendrá","tendremos","tendrán"],
    condicional:["tendría","tendrías","tendría","tendríamos","tendrían"],
    subjuntivo:["tenga","tengas","tenga","tengamos","tengan"],
    perfecto:["he tenido","has tenido","ha tenido","hemos tenido","han tenido"],
    imperativo:["ten","tenga","tengamos","tengan"] },
  { v:"ir", regular:false, ja:"行く",
    presente:["voy","vas","va","vamos","van"],
    indefinido:["fui","fuiste","fue","fuimos","fueron"],
    imperfecto:["iba","ibas","iba","íbamos","iban"],
    futuro:["iré","irás","irá","iremos","irán"],
    condicional:["iría","irías","iría","iríamos","irían"],
    subjuntivo:["vaya","vayas","vaya","vayamos","vayan"],
    perfecto:["he ido","has ido","ha ido","hemos ido","han ido"],
    imperativo:["ve","vaya","vamos","vayan"] },
  { v:"hacer", regular:false, ja:"する/作る",
    presente:["hago","haces","hace","hacemos","hacen"],
    indefinido:["hice","hiciste","hizo","hicimos","hicieron"],
    imperfecto:["hacía","hacías","hacía","hacíamos","hacían"],
    futuro:["haré","harás","hará","haremos","harán"],
    condicional:["haría","harías","haría","haríamos","harían"],
    subjuntivo:["haga","hagas","haga","hagamos","hagan"],
    perfecto:["he hecho","has hecho","ha hecho","hemos hecho","han hecho"],
    imperativo:["haz","haga","hagamos","hagan"] },
  { v:"poder", regular:false, ja:"〜できる",
    presente:["puedo","puedes","puede","podemos","pueden"],
    indefinido:["pude","pudiste","pudo","pudimos","pudieron"],
    imperfecto:["podía","podías","podía","podíamos","podían"],
    futuro:["podré","podrás","podrá","podremos","podrán"],
    condicional:["podría","podrías","podría","podríamos","podrían"],
    subjuntivo:["pueda","puedas","pueda","podamos","puedan"],
    perfecto:["he podido","has podido","ha podido","hemos podido","han podido"],
    imperativo:["puede","pueda","podamos","puedan"] },
  { v:"querer", regular:false, ja:"欲しい/したい",
    presente:["quiero","quieres","quiere","queremos","quieren"],
    indefinido:["quise","quisiste","quiso","quisimos","quisieron"],
    imperfecto:["quería","querías","quería","queríamos","querían"],
    futuro:["querré","querrás","querrá","querremos","querrán"],
    condicional:["querría","querrías","querría","querríamos","querrían"],
    subjuntivo:["quiera","quieras","quiera","queramos","quieran"],
    perfecto:["he querido","has querido","ha querido","hemos querido","han querido"],
    imperativo:["quiere","quiera","queramos","quieran"] },
  { v:"decir", regular:false, ja:"言う",
    presente:["digo","dices","dice","decimos","dicen"],
    indefinido:["dije","dijiste","dijo","dijimos","dijeron"],
    imperfecto:["decía","decías","decía","decíamos","decían"],
    futuro:["diré","dirás","dirá","diremos","dirán"],
    condicional:["diría","dirías","diría","diríamos","dirían"],
    subjuntivo:["diga","digas","diga","digamos","digan"],
    perfecto:["he dicho","has dicho","ha dicho","hemos dicho","han dicho"],
    imperativo:["di","diga","digamos","digan"] },
  { v:"poner", regular:false, ja:"置く",
    presente:["pongo","pones","pone","ponemos","ponen"],
    indefinido:["puse","pusiste","puso","pusimos","pusieron"],
    imperfecto:["ponía","ponías","ponía","poníamos","ponían"],
    futuro:["pondré","pondrás","pondrá","pondremos","pondrán"],
    condicional:["pondría","pondrías","pondría","pondríamos","pondrían"],
    subjuntivo:["ponga","pongas","ponga","pongamos","pongan"],
    perfecto:["he puesto","has puesto","ha puesto","hemos puesto","han puesto"],
    imperativo:["pon","ponga","pongamos","pongan"] },
  { v:"salir", regular:false, ja:"出る",
    presente:["salgo","sales","sale","salimos","salen"],
    indefinido:["salí","saliste","salió","salimos","salieron"],
    imperfecto:["salía","salías","salía","salíamos","salían"],
    futuro:["saldré","saldrás","saldrá","saldremos","saldrán"],
    condicional:["saldría","saldrías","saldría","saldríamos","saldrían"],
    subjuntivo:["salga","salgas","salga","salgamos","salgan"],
    perfecto:["he salido","has salido","ha salido","hemos salido","han salido"],
    imperativo:["sal","salga","salgamos","salgan"] },
  { v:"venir", regular:false, ja:"来る",
    presente:["vengo","vienes","viene","venimos","vienen"],
    indefinido:["vine","viniste","vino","vinimos","vinieron"],
    imperfecto:["venía","venías","venía","veníamos","venían"],
    futuro:["vendré","vendrás","vendrá","vendremos","vendrán"],
    condicional:["vendría","vendrías","vendría","vendríamos","vendrían"],
    subjuntivo:["venga","vengas","venga","vengamos","vengan"],
    perfecto:["he venido","has venido","ha venido","hemos venido","han venido"],
    imperativo:["ven","venga","vengamos","vengan"] },
  { v:"dar", regular:false, ja:"与える",
    presente:["doy","das","da","damos","dan"],
    indefinido:["di","diste","dio","dimos","dieron"],
    imperfecto:["daba","dabas","daba","dábamos","daban"],
    futuro:["daré","darás","dará","daremos","darán"],
    condicional:["daría","darías","daría","daríamos","darían"],
    subjuntivo:["dé","des","dé","demos","den"],
    perfecto:["he dado","has dado","ha dado","hemos dado","han dado"],
    imperativo:["da","dé","demos","den"] },
  { v:"ver", regular:false, ja:"見る",
    presente:["veo","ves","ve","vemos","ven"],
    indefinido:["vi","viste","vio","vimos","vieron"],
    imperfecto:["veía","veías","veía","veíamos","veían"],
    futuro:["veré","verás","verá","veremos","verán"],
    condicional:["vería","verías","vería","veríamos","verían"],
    subjuntivo:["vea","veas","vea","veamos","vean"],
    perfecto:["he visto","has visto","ha visto","hemos visto","han visto"],
    imperativo:["ve","vea","veamos","vean"] },
  { v:"saber", regular:false, ja:"知っている",
    presente:["sé","sabes","sabe","sabemos","saben"],
    indefinido:["supe","supiste","supo","supimos","supieron"],
    imperfecto:["sabía","sabías","sabía","sabíamos","sabían"],
    futuro:["sabré","sabrás","sabrá","sabremos","sabrán"],
    condicional:["sabría","sabrías","sabría","sabríamos","sabrían"],
    subjuntivo:["sepa","sepas","sepa","sepamos","sepan"],
    perfecto:["he sabido","has sabido","ha sabido","hemos sabido","han sabido"],
    imperativo:["sabe","sepa","sepamos","sepan"] },
  { v:"traer", regular:false, ja:"持ってくる",
    presente:["traigo","traes","trae","traemos","traen"],
    indefinido:["traje","trajiste","trajo","trajimos","trajeron"],
    imperfecto:["traía","traías","traía","traíamos","traían"],
    futuro:["traeré","traerás","traerá","traeremos","traerán"],
    condicional:["traería","traerías","traería","traeríamos","traerían"],
    subjuntivo:["traiga","traigas","traiga","traigamos","traigan"],
    perfecto:["he traído","has traído","ha traído","hemos traído","han traído"],
    imperativo:["trae","traiga","traigamos","traigan"] },
  { v:"trabajar", regular:true, ja:"働く",
    presente:["trabajo","trabajas","trabaja","trabajamos","trabajan"],
    indefinido:["trabajé","trabajaste","trabajó","trabajamos","trabajaron"],
    imperfecto:["trabajaba","trabajabas","trabajaba","trabajábamos","trabajaban"],
    futuro:["trabajaré","trabajarás","trabajará","trabajaremos","trabajarán"],
    condicional:["trabajaría","trabajarías","trabajaría","trabajaríamos","trabajarían"],
    subjuntivo:["trabaje","trabajes","trabaje","trabajemos","trabajen"],
    perfecto:["he trabajado","has trabajado","ha trabajado","hemos trabajado","han trabajado"],
    imperativo:["trabaja","trabaje","trabajemos","trabajen"] },
  { v:"estudiar", regular:true, ja:"勉強する",
    presente:["estudio","estudias","estudia","estudiamos","estudian"],
    indefinido:["estudié","estudiaste","estudió","estudiamos","estudiaron"],
    imperfecto:["estudiaba","estudiabas","estudiaba","estudiábamos","estudiaban"],
    futuro:["estudiaré","estudiarás","estudiará","estudiaremos","estudiarán"],
    condicional:["estudiaría","estudiarías","estudiaría","estudiaríamos","estudiarían"],
    subjuntivo:["estudie","estudies","estudie","estudiemos","estudien"],
    perfecto:["he estudiado","has estudiado","ha estudiado","hemos estudiado","han estudiado"],
    imperativo:["estudia","estudie","estudiemos","estudien"] },
  { v:"comprar", regular:true, ja:"買う",
    presente:["compro","compras","compra","compramos","compran"],
    indefinido:["compré","compraste","compró","compramos","compraron"],
    imperfecto:["compraba","comprabas","compraba","comprábamos","compraban"],
    futuro:["compraré","comprarás","comprará","compraremos","comprarán"],
    condicional:["compraría","comprarías","compraría","compraríamos","comprarían"],
    subjuntivo:["compre","compres","compre","compremos","compren"],
    perfecto:["he comprado","has comprado","ha comprado","hemos comprado","han comprado"],
    imperativo:["compra","compre","compremos","compren"] },
  { v:"aprender", regular:true, ja:"学ぶ",
    presente:["aprendo","aprendes","aprende","aprendemos","aprenden"],
    indefinido:["aprendí","aprendiste","aprendió","aprendimos","aprendieron"],
    imperfecto:["aprendía","aprendías","aprendía","aprendíamos","aprendían"],
    futuro:["aprenderé","aprenderás","aprenderá","aprenderemos","aprenderán"],
    condicional:["aprendería","aprenderías","aprendería","aprenderíamos","aprenderían"],
    subjuntivo:["aprenda","aprendas","aprenda","aprendamos","aprendan"],
    perfecto:["he aprendido","has aprendido","ha aprendido","hemos aprendido","han aprendido"],
    imperativo:["aprende","aprenda","aprendamos","aprendan"] },
  { v:"decidir", regular:true, ja:"決める",
    presente:["decido","decides","decide","decidimos","deciden"],
    indefinido:["decidí","decidiste","decidió","decidimos","decidieron"],
    imperfecto:["decidía","decidías","decidía","decidíamos","decidían"],
    futuro:["decidiré","decidirás","decidirá","decidiremos","decidirán"],
    condicional:["decidiría","decidirías","decidiría","decidiríamos","decidirían"],
    subjuntivo:["decida","decidas","decida","decidamos","decidan"],
    perfecto:["he decidido","has decidido","ha decidido","hemos decidido","han decidido"],
    imperativo:["decide","decida","decidamos","decidan"] },
  { v:"vender", regular:true, ja:"売る",
    presente:["vendo","vendes","vende","vendemos","venden"],
    indefinido:["vendí","vendiste","vendió","vendimos","vendieron"],
    imperfecto:["vendía","vendías","vendía","vendíamos","vendían"],
    futuro:["venderé","venderás","venderá","venderemos","venderán"],
    condicional:["vendería","venderías","vendería","venderíamos","venderían"],
    subjuntivo:["venda","vendas","venda","vendamos","vendan"],
    perfecto:["he vendido","has vendido","ha vendido","hemos vendido","han vendido"],
    imperativo:["vende","venda","vendamos","vendan"] },
  { v:"mirar", regular:true, ja:"見る",
    presente:["miro","miras","mira","miramos","miran"],
    indefinido:["miré","miraste","miró","miramos","miraron"],
    imperfecto:["miraba","mirabas","miraba","mirábamos","miraban"],
    futuro:["miraré","mirarás","mirará","miraremos","mirarán"],
    condicional:["miraría","mirarías","miraría","miraríamos","mirarían"],
    subjuntivo:["mire","mires","mire","miremos","miren"],
    perfecto:["he mirado","has mirado","ha mirado","hemos mirado","han mirado"],
    imperativo:["mira","mire","miremos","miren"] },
  { v:"escuchar", regular:true, ja:"聞く",
    presente:["escucho","escuchas","escucha","escuchamos","escuchan"],
    indefinido:["escuché","escuchaste","escuchó","escuchamos","escucharon"],
    imperfecto:["escuchaba","escuchabas","escuchaba","escuchábamos","escuchaban"],
    futuro:["escucharé","escucharás","escuchará","escucharemos","escucharán"],
    condicional:["escucharía","escucharías","escucharía","escucharíamos","escucharían"],
    subjuntivo:["escuche","escuches","escuche","escuchemos","escuchen"],
    perfecto:["he escuchado","has escuchado","ha escuchado","hemos escuchado","han escuchado"],
    imperativo:["escucha","escuche","escuchemos","escuchen"] },
  { v:"necesitar", regular:true, ja:"必要とする",
    presente:["necesito","necesitas","necesita","necesitamos","necesitan"],
    indefinido:["necesité","necesitaste","necesitó","necesitamos","necesitaron"],
    imperfecto:["necesitaba","necesitabas","necesitaba","necesitábamos","necesitaban"],
    futuro:["necesitaré","necesitarás","necesitará","necesitaremos","necesitarán"],
    condicional:["necesitaría","necesitarías","necesitaría","necesitaríamos","necesitarían"],
    subjuntivo:["necesite","necesites","necesite","necesitemos","necesiten"],
    perfecto:["he necesitado","has necesitado","ha necesitado","hemos necesitado","han necesitado"],
    imperativo:["necesita","necesite","necesitemos","necesiten"] },
  { v:"usar", regular:true, ja:"使う",
    presente:["uso","usas","usa","usamos","usan"],
    indefinido:["usé","usaste","usó","usamos","usaron"],
    imperfecto:["usaba","usabas","usaba","usábamos","usaban"],
    futuro:["usaré","usarás","usará","usaremos","usarán"],
    condicional:["usaría","usarías","usaría","usaríamos","usarían"],
    subjuntivo:["use","uses","use","usemos","usen"],
    perfecto:["he usado","has usado","ha usado","hemos usado","han usado"],
    imperativo:["usa","use","usemos","usen"] },
  { v:"esperar", regular:true, ja:"待つ・望む",
    presente:["espero","esperas","espera","esperamos","esperan"],
    indefinido:["esperé","esperaste","esperó","esperamos","esperaron"],
    imperfecto:["esperaba","esperabas","esperaba","esperábamos","esperaban"],
    futuro:["esperaré","esperarás","esperará","esperaremos","esperarán"],
    condicional:["esperaría","esperarías","esperaría","esperaríamos","esperarían"],
    subjuntivo:["espere","esperes","espere","esperemos","esperen"],
    perfecto:["he esperado","has esperado","ha esperado","hemos esperado","han esperado"],
    imperativo:["espera","espere","esperemos","esperen"] },
  { v:"tomar", regular:true, ja:"取る・飲む",
    presente:["tomo","tomas","toma","tomamos","toman"],
    indefinido:["tomé","tomaste","tomó","tomamos","tomaron"],
    imperfecto:["tomaba","tomabas","tomaba","tomábamos","tomaban"],
    futuro:["tomaré","tomarás","tomará","tomaremos","tomarán"],
    condicional:["tomaría","tomarías","tomaría","tomaríamos","tomarían"],
    subjuntivo:["tome","tomes","tome","tomemos","tomen"],
    perfecto:["he tomado","has tomado","ha tomado","hemos tomado","han tomado"],
    imperativo:["toma","tome","tomemos","tomen"] },
];

const EXAMPLES = [
 {
  "before": "Ayer yo ",
  "verb": "hablar",
  "tense": "indefinido",
  "p": 0,
  "after": " con mi madre.",
  "ja": "昨日、私は母と話した。"
 },
 {
  "before": "Cuando era niño, yo ",
  "verb": "ir",
  "tense": "imperfecto",
  "p": 0,
  "after": " a la escuela caminando.",
  "ja": "子供の頃、私は歩いて学校に通っていた。"
 },
 {
  "before": "Mañana nosotros ",
  "verb": "comer",
  "tense": "futuro",
  "p": 3,
  "after": " en un restaurante nuevo.",
  "ja": "明日、私たちは新しいレストランで食べるだろう。"
 },
 {
  "before": "En tu lugar, yo ",
  "verb": "hacer",
  "tense": "condicional",
  "p": 0,
  "after": " lo mismo.",
  "ja": "あなたの立場なら、私も同じことをするだろう。"
 },
 {
  "before": "¿",
  "verb": "poder",
  "tense": "condicional",
  "p": 1,
  "after": " usted ayudarme?",
  "ja": "手伝っていただけますか？（丁寧な依頼）"
 },
 {
  "before": "Espero que tú ",
  "verb": "tener",
  "tense": "subjuntivo",
  "p": 1,
  "after": " un buen viaje.",
  "ja": "良い旅行になりますように。"
 },
 {
  "before": "Quiero que ellos ",
  "verb": "ser",
  "tense": "subjuntivo",
  "p": 4,
  "after": " felices.",
  "ja": "彼らが幸せであってほしい。"
 },
 {
  "before": "Yo nunca ",
  "verb": "ir",
  "tense": "perfecto",
  "p": 0,
  "after": " a México.",
  "ja": "私はメキシコに行ったことがない。"
 },
 {
  "before": "¿Alguna vez tú ",
  "verb": "comer",
  "tense": "perfecto",
  "p": 1,
  "after": " tacos de verdad?",
  "ja": "本場のタコスを食べたことはありますか？"
 },
 {
  "before": "¡",
  "verb": "hablar",
  "tense": "imperativo",
  "p": 0,
  "after": " más despacio, por favor!",
  "ja": "もっとゆっくり話してください！"
 },
 {
  "before": "El año pasado, nosotros ",
  "verb": "vivir",
  "tense": "indefinido",
  "p": 3,
  "after": " en España.",
  "ja": "去年、私たちはスペインに住んだ。"
 },
 {
  "before": "Normalmente, yo ",
  "verb": "tener",
  "tense": "presente",
  "p": 0,
  "after": " mucho trabajo los lunes.",
  "ja": "普段、月曜日は仕事がたくさんある。"
 },
 {
  "before": "El próximo año, ellos ",
  "verb": "estar",
  "tense": "futuro",
  "p": 4,
  "after": " en Japón.",
  "ja": "来年、彼らは日本にいるだろう。"
 },
 {
  "before": "Cuando éramos jóvenes, ",
  "verb": "querer",
  "tense": "imperfecto",
  "p": 3,
  "after": " viajar mucho.",
  "ja": "若い頃、私たちはたくさん旅行したいと思っていた。"
 },
 {
  "before": "Este regalo es ",
  "answer": "para",
  "after": " ti.",
  "ja": "このプレゼントは君のためのものだ。",
  "label": "por / para",
  "note": "para+人は「〜のために」という受益者・目的を表す。"
 },
 {
  "before": "Caminamos ",
  "answer": "por",
  "after": " el parque de camino a casa.",
  "ja": "私たちは家に帰る途中、公園を通って歩いた。",
  "label": "por / para",
  "note": "por は「〜を通って」という経路を表す。「〜に向かって」ならparaになるところだが、ここでは家までの経路上を通っている。"
 },
 {
  "before": "Trabajo ",
  "answer": "para",
  "after": " ganar dinero.",
  "ja": "お金を稼ぐために働く。",
  "label": "por / para",
  "note": "para+動詞の原形は「〜するために」という目的を表す。"
 },
 {
  "before": "Gracias ",
  "answer": "por",
  "after": " tu ayuda.",
  "ja": "助けてくれてありがとう。",
  "label": "por / para",
  "note": "por は理由・原因（〜のおかげで、〜に対して）を表す。"
 },
 {
  "before": "Necesito el informe ",
  "answer": "para",
  "after": " el lunes.",
  "ja": "月曜日までにその報告書が必要だ。",
  "label": "por / para",
  "note": "para+期限は「〜までに」という締め切りを表す。"
 },
 {
  "before": "Pasamos ",
  "answer": "por",
  "after": " tu casa camino al trabajo.",
  "ja": "仕事に行く途中、君の家のそばを通った。",
  "label": "por / para",
  "note": "por は「〜のそばを」という通過点を表す。目的地ではなく途中で通過した場所を表している。"
 },
 {
  "before": "Voy ",
  "answer": "a",
  "after": " la escuela todos los días.",
  "ja": "毎日学校に行く。",
  "label": "en / a",
  "note": "行き先を表すときは a を使う（ir a + 場所）。"
 },
 {
  "before": "Vivo ",
  "answer": "en",
  "after": " México.",
  "ja": "メキシコに住んでいる。",
  "label": "en / a",
  "note": "「〜の中に」という所在を表すときは en を使う。"
 },
 {
  "before": "Llegamos ",
  "answer": "a",
  "after": " la fiesta a las nueve.",
  "ja": "9時にパーティーに着いた。",
  "label": "en / a",
  "note": "到着点を表すときは a を使う（llegar a）。"
 },
 {
  "before": "El libro está ",
  "answer": "en",
  "after": " la mesa.",
  "ja": "本はテーブルの上にある。",
  "label": "en / a",
  "note": "物の所在を表すときは en を使う。"
 },
 {
  "before": "Entramos ",
  "answer": "a",
  "after": " la casa por la puerta principal.",
  "ja": "正面玄関から家に入った。",
  "label": "en / a",
  "note": "「〜の中へ」という動きの方向を表すときは a を使うことが多い（entrar a）。"
 },
 {
  "before": "Trabajo ",
  "answer": "en",
  "after": " una empresa de tecnología.",
  "ja": "テクノロジー企業で働いている。",
  "label": "en / a",
  "note": "活動の場所を表すときは en を使う（trabajar en）。"
 },
 {
  "before": "Subimos ",
  "answer": "al",
  "after": " tercer piso.",
  "ja": "3階に上がった。",
  "label": "en / a",
  "note": "a+elはalに縮約される。到着点を表すaを使う。"
 },
 {
  "before": "Nos vemos ",
  "answer": "en",
  "after": " la entrada del cine.",
  "ja": "映画館の入り口で会おう。",
  "label": "en / a",
  "note": "待ち合わせ場所を表すときは en を使う。"
 },
 {
  "before": "El perro juega ",
  "answer": "con",
  "after": " la pelota.",
  "ja": "犬はボールで遊んでいる。",
  "label": "前置詞（決まった言い回し）",
  "topic": "preposicion",
  "note": "「〜と一緒に、〜を使って」を表すconを使う。"
 },
 {
  "before": "Salgo ",
  "answer": "sin",
  "after": " dinero, olvidé mi cartera.",
  "ja": "お金なしで出かける、財布を忘れた。",
  "label": "前置詞（決まった言い回し）",
  "topic": "preposicion",
  "note": "「〜なしで」を表すsin。"
 },
 {
  "before": "El cuadro está colgado ",
  "answer": "sobre",
  "after": " el sofá.",
  "ja": "絵はソファの上に掛かっている。",
  "label": "前置詞（決まった言い回し）",
  "topic": "preposicion",
  "note": "「〜の上に（接触せず）」を表すsobre。"
 },
 {
  "before": "El examen es ",
  "answer": "entre",
  "after": " las dos y las cuatro.",
  "ja": "試験は2時から4時の間だ。",
  "label": "前置詞（決まった言い回し）",
  "topic": "preposicion",
  "note": "「〜の間に」を表すentre。"
 },
 {
  "before": "Caminamos ",
  "answer": "desde",
  "after": " el hotel hasta la playa.",
  "ja": "ホテルからビーチまで歩いた。",
  "label": "前置詞（決まった言い回し）",
  "topic": "preposicion",
  "note": "起点を表すdesde、到達点を表すhastaはセットでよく使われる。"
 },
 {
  "before": "Voy a estudiar ",
  "answer": "hasta",
  "after": " muy tarde hoy.",
  "ja": "今日はとても遅くまで勉強するつもりだ。",
  "label": "前置詞（決まった言い回し）",
  "topic": "preposicion",
  "note": "時間の限界を表すhasta。"
 },
 {
  "before": "El avión vuela ",
  "answer": "hacia",
  "after": " el norte.",
  "ja": "飛行機は北へ向かって飛んでいる。",
  "label": "前置詞（決まった言い回し）",
  "topic": "preposicion",
  "note": "方向を表すhacia。"
 },
 {
  "before": "Estudié español ",
  "answer": "durante",
  "after": " tres años.",
  "ja": "3年間スペイン語を勉強した。",
  "label": "前置詞（決まった言い回し）",
  "topic": "preposicion",
  "note": "継続期間を表すdurante。"
 },
 {
  "before": "¿Tienes el libro? Sí, ",
  "answer": "lo",
  "after": " tengo.",
  "ja": "本を持ってる？うん、持ってるよ。",
  "label": "目的代名詞",
  "note": "男性単数の直接目的語（el libro）は lo に置き換える。"
 },
 {
  "before": "¿Compraste las manzanas? Sí, ",
  "answer": "las",
  "after": " compré.",
  "ja": "りんごを買った？うん、買ったよ。",
  "label": "目的代名詞",
  "note": "女性複数の直接目的語（las manzanas）は las に置き換える。"
 },
 {
  "before": "",
  "answer": "Le",
  "after": " voy a dar un regalo a mi madre.",
  "ja": "母にプレゼントをあげるつもりだ。",
  "label": "目的代名詞",
  "note": "間接目的語（〜に）は単数なら le、複数なら les で表す。"
 },
 {
  "before": "",
  "answer": "Les",
  "after": " escribí una carta a mis amigos.",
  "ja": "友人たちに手紙を書いた。",
  "label": "目的代名詞",
  "note": "間接目的語が複数のときは les を使う。"
 },
 {
  "before": "¿Ves a Juan? Sí, ",
  "answer": "lo",
  "after": " veo.",
  "ja": "フアンが見える？うん、見えるよ。",
  "label": "目的代名詞",
  "note": "男性の人を指す直接目的語も lo に置き換えられる。"
 },
 {
  "before": "Yo ",
  "answer": "me levanto",
  "after": " a las siete de la mañana.",
  "ja": "私は朝7時に起きる。",
  "label": "levantarse（再帰動詞・現在形）",
  "note": "再帰動詞は主語に合わせた再帰代名詞（me/te/se/nos/se）を動詞の前につける。"
 },
 {
  "before": "Ella ",
  "answer": "se llama",
  "after": " María.",
  "ja": "彼女はマリアという名前だ。",
  "label": "llamarse（再帰動詞・現在形）",
  "note": "llamarse は「〜という名前である」。三人称単数は se llama。"
 },
 {
  "before": "Nosotros ",
  "answer": "nos despertamos",
  "after": " temprano los lunes.",
  "ja": "私たちは月曜日早く目を覚ます。",
  "label": "despertarse（再帰動詞・現在形）",
  "note": "nosotros では再帰代名詞 nos を使う。"
 },
 {
  "before": "¿A qué hora ",
  "answer": "te acuestas",
  "after": " tú?",
  "ja": "何時に寝るの？",
  "label": "acostarse（再帰動詞・現在形）",
  "note": "tú では再帰代名詞 te を使う。"
 },
 {
  "before": "Ellos ",
  "answer": "se duchan",
  "after": " por la mañana.",
  "ja": "彼らは朝シャワーを浴びる。",
  "label": "ducharse（再帰動詞・現在形）",
  "note": "三人称複数では再帰代名詞 se を使う。"
 },
 {
  "before": "Este coche es más caro ",
  "answer": "que",
  "after": " aquel.",
  "ja": "この車はあの車より高い。",
  "label": "比較級",
  "note": "比較級は más+形容詞+que で「〜より…」を表す。"
 },
 {
  "before": "Ella es ",
  "answer": "tan",
  "after": " alta como su hermana.",
  "ja": "彼女は姉と同じくらい背が高い。",
  "label": "同等比較",
  "note": "同等比較は tan+形容詞+como で「〜と同じくらい」を表す。"
 },
 {
  "before": "Tengo menos tiempo ",
  "answer": "que",
  "after": " tú.",
  "ja": "私は君より時間が少ない。",
  "label": "比較級",
  "note": "menos+名詞+que で「〜より少ない」を表す。"
 },
 {
  "before": "Mi hermano es el ",
  "answer": "más",
  "after": " alto de la familia.",
  "ja": "私の兄は家族の中で一番背が高い。",
  "label": "最上級",
  "note": "最上級は el/la+más+形容詞で「一番〜」を表す。"
 },
 {
  "before": "María ",
  "answer": "es",
  "after": " muy inteligente.",
  "ja": "マリアはとても賢い。",
  "label": "ser / estar",
  "note": "性格・本質的な性質を表すときは ser を使う。"
 },
 {
  "before": "Hoy yo ",
  "answer": "estoy",
  "after": " un poco cansado.",
  "ja": "今日、私は少し疲れている。",
  "label": "ser / estar",
  "note": "一時的な状態を表すときは estar を使う。"
 },
 {
  "before": "Madrid ",
  "answer": "está",
  "after": " en España.",
  "ja": "マドリードはスペインにある。",
  "label": "ser / estar",
  "note": "場所・所在を表すときは estar を使う。"
 },
 {
  "before": "¿Qué hora ",
  "answer": "es",
  "after": "?",
  "ja": "何時ですか。",
  "label": "ser / estar",
  "note": "時刻を表すときは ser を使う。"
 },
 {
  "before": "La sopa ",
  "answer": "está",
  "after": " fría, caliéntala un poco.",
  "ja": "スープが冷めているから、少し温めて。",
  "label": "ser / estar",
  "note": "一時的な状態（今冷めている）を表すときは estar を使う。「caliéntala（温めて）」から一時的な温度の話だと分かる。"
 },
 {
  "before": "Él ",
  "answer": "es",
  "after": " médico.",
  "ja": "彼は医者だ。",
  "label": "ser / estar",
  "note": "職業を表すときは ser を使う。"
 },
 {
  "before": "A mí ",
  "answer": "me gusta",
  "after": " el chocolate.",
  "ja": "私はチョコレートが好きだ。",
  "label": "gustar（現在形）",
  "topic": "gustar",
  "note": "gustarは「主語＝好きな対象」。人は間接目的語代名詞（me/te/le/nos/les）で表す。"
 },
 {
  "before": "A ella ",
  "answer": "le duele",
  "after": " la cabeza.",
  "ja": "彼女は頭が痛い。",
  "label": "doler（現在形）",
  "topic": "gustar",
  "note": "doler（痛い）もgustarと同じ語順パターンを取る。"
 },
 {
  "before": "A nosotros ",
  "answer": "nos interesa",
  "after": " la historia.",
  "ja": "私たちは歴史に興味がある。",
  "label": "interesar（現在形）",
  "topic": "gustar",
  "note": "interesar（興味がある）もgustar型。主語は「歴史」なので単数形。"
 },
 {
  "before": "A ellos ",
  "answer": "les gustan",
  "after": " los tacos.",
  "ja": "彼らはタコスが好きだ。",
  "label": "gustar（現在形）",
  "topic": "gustar",
  "note": "主語（los tacos）が複数なので、動詞も複数形gustanになる。"
 },
 {
  "before": "A ti ",
  "answer": "te molesta",
  "after": " el ruido.",
  "ja": "あなたは騒音が迷惑だ。",
  "label": "molestar（現在形）",
  "topic": "gustar",
  "note": "molestar（迷惑だ）もgustar型の語順を取る。"
 },
 {
  "before": "¿Le diste el regalo a Juan? Sí, ",
  "answer": "se lo",
  "after": " di.",
  "ja": "フアンにプレゼントをあげた？うん、それを彼にあげたよ。",
  "label": "目的代名詞（二重）",
  "note": "間接目的語leと直接目的語loが並ぶとき、leはseに変わる。"
 },
 {
  "before": "¿Me prestas tu coche? Sí, ",
  "answer": "te lo",
  "after": " presto.",
  "ja": "車を貸してくれる？うん、それを君に貸すよ。",
  "label": "目的代名詞（二重）",
  "note": "間接目的語（te）＋直接目的語（lo）は「te lo」の順で並べる。"
 },
 {
  "before": "¿Les enviaste la carta a ellos? Sí, ",
  "answer": "se la",
  "after": " envié.",
  "ja": "彼らに手紙を送った？うん、それを彼らに送ったよ。",
  "label": "目的代名詞（二重）",
  "note": "間接目的語lesと直接目的語laが並ぶとき、lesはseに変わる。"
 },
 {
  "before": "¿Nos vas a dar la noticia? Sí, ",
  "answer": "nos la",
  "after": " voy a dar.",
  "ja": "私たちにその知らせを教えてくれる？うん、それを教えるよ。",
  "label": "目的代名詞（二重）",
  "note": "seに変わるのはle/lesが直接目的語lo/laと組み合わさるときだけ。nos/te/meはそのままの形で使う（nos+la→nos la）。"
 },
 {
  "before": "¿Me compras el libro? Sí, ",
  "answer": "te lo",
  "after": " compro.",
  "ja": "その本を買ってくれる？うん、それを君に買うよ。",
  "label": "目的代名詞（二重）",
  "note": "間接目的語（te）＋直接目的語（lo）は必ずこの順番。"
 },
 {
  "before": "Confío ",
  "answer": "en",
  "after": " ti.",
  "ja": "私は君を信頼している。",
  "label": "前置詞（en/de）",
  "topic": "preposicion",
  "note": "confiar en（〜を信頼する）は決まった組み合わせ。"
 },
 {
  "before": "El libro trata ",
  "answer": "de",
  "after": " la historia de México.",
  "ja": "その本はメキシコの歴史についてだ。",
  "label": "前置詞（en/de）",
  "topic": "preposicion",
  "note": "tratar de（〜について扱う）は決まった組み合わせ。"
 },
 {
  "before": "¿Tienes las entradas? Sí, ",
  "answer": "las",
  "after": " tengo.",
  "ja": "チケットを持ってる？うん、持ってるよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "女性複数の直接目的語（las entradas）は las に置き換える。"
 },
 {
  "before": "¿Conoces a María? Sí, ",
  "answer": "la",
  "after": " conozco.",
  "ja": "マリアを知ってる？うん、知ってるよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "女性を指す直接目的語は la に置き換える。"
 },
 {
  "before": "¿Viste el partido? Sí, ",
  "answer": "lo",
  "after": " vi.",
  "ja": "試合を見た？うん、見たよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "男性単数の直接目的語（el partido）は lo に置き換える。"
 },
 {
  "before": "¿Compraste los boletos? Sí, ",
  "answer": "los",
  "after": " compré.",
  "ja": "チケットを買った？うん、買ったよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "男性複数の直接目的語（los boletos）は los に置き換える。"
 },
 {
  "before": "¿Necesitas la información? Sí, ",
  "answer": "la",
  "after": " necesito.",
  "ja": "その情報が必要？うん、必要だよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "女性単数の直接目的語（la información）は la に置き換える。"
 },
 {
  "before": "Yo ",
  "answer": "me visto",
  "after": " rápido por las mañanas.",
  "ja": "私は朝、素早く服を着る。",
  "label": "vestirse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "vestirseは語根母音変化（e→i）動詞。yoの形はme visto。"
 },
 {
  "before": "Ella ",
  "answer": "se baña",
  "after": " antes de dormir.",
  "ja": "彼女は寝る前にお風呂に入る。",
  "label": "bañarse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "三人称単数では再帰代名詞 se を使う。"
 },
 {
  "before": "Nosotros ",
  "answer": "nos sentamos",
  "after": " en la primera fila.",
  "ja": "私たちは最前列に座る。",
  "label": "sentarse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "nosotrosでは再帰代名詞 nos を使う。"
 },
 {
  "before": "¿Por qué ",
  "answer": "te quedas",
  "after": " tú en casa?",
  "ja": "どうして君は家に残るの？",
  "label": "quedarse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "túでは再帰代名詞 te を使う。"
 },
 {
  "before": "Ellos ",
  "answer": "se peinan",
  "after": " frente al espejo.",
  "ja": "彼らは鏡の前で髪をとかす。",
  "label": "peinarse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "三人称複数では再帰代名詞 se を使う。"
 },
 {
  "before": "Juan tiene más dinero ",
  "answer": "que",
  "after": " Pedro.",
  "ja": "フアンはペドロより多くのお金を持っている。",
  "label": "比較級",
  "topic": "comparativo",
  "note": "más+名詞+que で「〜より多くの…」を表す。"
 },
 {
  "before": "Este ejercicio es menos difícil ",
  "answer": "que",
  "after": " el anterior.",
  "ja": "この練習問題は前のものより簡単だ。",
  "label": "比較級",
  "topic": "comparativo",
  "note": "menos+形容詞+que で「〜より少ない」を表す。"
 },
 {
  "before": "Mi coche es tan rápido ",
  "answer": "como",
  "after": " el tuyo.",
  "ja": "私の車は君のと同じくらい速い。",
  "label": "同等比較",
  "topic": "comparativo",
  "note": "tan+形容詞+como で「〜と同じくらい」を表す。"
 },
 {
  "before": "Ella es la ",
  "answer": "más",
  "after": " inteligente de la clase.",
  "ja": "彼女はクラスで一番賢い。",
  "label": "最上級",
  "topic": "comparativo",
  "note": "el/la+más+形容詞で「一番〜」を表す。"
 },
 {
  "before": "Tengo tantos libros ",
  "answer": "como",
  "after": " tú.",
  "ja": "私は君と同じくらいたくさんの本を持っている。",
  "label": "同等比較",
  "topic": "comparativo",
  "note": "tanto/a/os/as+名詞+como で名詞の同等比較を表す。"
 },
 {
  "before": "Esta película es peor ",
  "answer": "que",
  "after": " la anterior.",
  "ja": "この映画は前のものより悪い。",
  "label": "比較級",
  "topic": "comparativo",
  "note": "peor（もっと悪い、malの不規則比較級）の後もqueを使う。"
 },
 {
  "before": "Nosotros ",
  "answer": "somos",
  "after": " estudiantes de español.",
  "ja": "私たちはスペイン語の学生だ。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "身分・所属を表すときは ser を使う。"
 },
 {
  "before": "La puerta ",
  "answer": "está",
  "after": " abierta.",
  "ja": "ドアが開いている。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "動作の結果としての状態を表すときは estar+過去分詞を使う。"
 },
 {
  "before": "Ellos ",
  "answer": "están",
  "after": " de vacaciones esta semana.",
  "ja": "彼らは今週休暇中だ。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "「esta semana（今週）」から一時的な状況だと分かるので estar を使う。"
 },
 {
  "before": "Yo ",
  "answer": "soy",
  "after": " de Japón.",
  "ja": "私は日本出身だ。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "出身を表すときは ser de を使う。"
 },
 {
  "before": "A mí ",
  "answer": "me encanta",
  "after": " viajar.",
  "ja": "私は旅行が大好きだ。",
  "label": "encantar（現在形）",
  "topic": "gustar",
  "note": "encantar（大好きだ）もgustar型の語順を取る。"
 },
 {
  "before": "A nosotros ",
  "answer": "nos falta",
  "after": " tiempo.",
  "ja": "私たちは時間が足りない。",
  "label": "faltar（現在形）",
  "topic": "gustar",
  "note": "faltar（足りない）もgustar型。主語（tiempo）が単数なのでfalta。"
 },
 {
  "before": "A ti ",
  "answer": "te quedan",
  "after": " diez pesos.",
  "ja": "君にはあと10ペソ残っている。",
  "label": "quedar（現在形）",
  "topic": "gustar",
  "note": "主語（diez pesos）が複数なので動詞も複数形quedanになる。"
 },
 {
  "before": "A ella no ",
  "answer": "le importa",
  "after": " el precio.",
  "ja": "彼女は値段を気にしない。",
  "label": "importar（現在形）",
  "topic": "gustar",
  "note": "importar（気にする、重要だ）もgustar型の語順を取る。"
 },
 {
  "before": "A ellos ",
  "answer": "les fascinan",
  "after": " los museos.",
  "ja": "彼らは美術館に夢中だ。",
  "label": "fascinar（現在形）",
  "topic": "gustar",
  "note": "主語（los museos）が複数なので動詞も複数形fascinanになる。"
 },
 {
  "before": "¿Te doy la respuesta? Sí, ",
  "answer": "te la",
  "after": " doy.",
  "ja": "答えを教えてあげようか？うん、それを教えてあげるよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "te（間接）＋la（直接）は「te la」の順番のまま、seには変わらない。"
 },
 {
  "before": "¿Le explicas la lección a tu hermano? Sí, ",
  "answer": "se la",
  "after": " explico.",
  "ja": "弟にその授業を説明してあげる？うん、それを説明してあげるよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "間接目的語leと直接目的語laが並ぶとき、leはseに変わる。"
 },
 {
  "before": "¿Nos traes las bebidas? Sí, ",
  "answer": "nos las",
  "after": " traigo.",
  "ja": "私たちに飲み物を持ってきてくれる？うん、それらを持ってくるよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "nosはseに変わらず、そのままnos+las→nos lasの順で使う。"
 },
 {
  "before": "¿Me prestas los apuntes? Sí, ",
  "answer": "te los",
  "after": " presto.",
  "ja": "ノートを貸してくれる？うん、それを君に貸すよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "te（間接）＋los（直接）は「te los」の順番。"
 },
 {
  "before": "¿Les mandas el paquete a ellos? Sí, ",
  "answer": "se lo",
  "after": " mando.",
  "ja": "彼らに荷物を送ってあげる？うん、それを送ってあげるよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "間接目的語lesと直接目的語loが並ぶとき、lesはseに変わる。"
 },
 {
  "before": "Estoy pensando ",
  "answer": "en",
  "after": " el examen.",
  "ja": "試験のことを考えている。",
  "label": "前置詞（en/de）",
  "topic": "preposicion",
  "note": "pensar en（〜について考える）は決まった組み合わせ。"
 },
 {
  "before": "Me alegro ",
  "answer": "de",
  "after": " tu éxito.",
  "ja": "君の成功を嬉しく思う。",
  "label": "前置詞（en/de）",
  "topic": "preposicion",
  "note": "alegrarse de（〜を喜ぶ）は決まった組み合わせ。"
 },
 {
  "before": "Voy ",
  "answer": "a",
  "after": " pie al trabajo.",
  "ja": "歩いて仕事に行く。",
  "label": "前置詞（決まった言い回し）",
  "topic": "preposicion",
  "note": "ir a pie（歩いて行く）は決まった言い回し。"
 },
 {
  "before": "El regalo es de parte ",
  "answer": "de",
  "after": " todos nosotros.",
  "ja": "このプレゼントは私たち全員からです。",
  "label": "前置詞（en/de）",
  "topic": "preposicion",
  "note": "de parte de（〜からの、〜を代表して）は決まった言い回し。"
 },
 {
  "before": "Depende ",
  "answer": "del",
  "after": " clima.",
  "ja": "天気による。",
  "label": "前置詞（en/de）",
  "topic": "preposicion",
  "note": "depender de（〜による）は決まった組み合わせ。de+elはdelに縮約される。"
 },
 {
  "before": "Se preocupa mucho ",
  "answer": "por",
  "after": " su familia.",
  "ja": "彼は家族のことをとても心配している。",
  "label": "前置詞（決まった言い回し）",
  "topic": "preposicion",
  "note": "preocuparse por（〜を心配する）は決まった組み合わせ。"
 },
 {
  "before": "Estoy harto ",
  "answer": "de",
  "after": " este ruido.",
  "ja": "この騒音にはうんざりだ。",
  "label": "前置詞（en/de）",
  "topic": "preposicion",
  "note": "harto de（〜にうんざりして）は決まった言い回し。"
 },
 {
  "before": "Vamos ",
  "answer": "de",
  "after": " compras esta tarde.",
  "ja": "今日の午後、買い物に行こう。",
  "label": "前置詞（en/de）",
  "topic": "preposicion",
  "note": "ir de compras（買い物に行く）は決まった言い回し。"
 },
 {
  "before": "¿Terminaste la tarea? Sí, ",
  "answer": "la",
  "after": " terminé.",
  "ja": "宿題終わった？うん、終わったよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "女性単数の直接目的語（la tarea）は la に置き換える。"
 },
 {
  "before": "¿Perdiste las llaves? Sí, ",
  "answer": "las",
  "after": " perdí.",
  "ja": "鍵をなくした？うん、なくしたよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "女性複数の直接目的語（las llaves）は las に置き換える。"
 },
 {
  "before": "¿Rompiste el plato? Sí, ",
  "answer": "lo",
  "after": " rompí.",
  "ja": "お皿を割った？うん、割ったよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "男性単数の直接目的語（el plato）は lo に置き換える。"
 },
 {
  "before": "¿Invitaste a tus amigos? Sí, ",
  "answer": "los",
  "after": " invité.",
  "ja": "友達を招待した？うん、招待したよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "男性複数の直接目的語（a tus amigos）は los に置き換える。"
 },
 {
  "before": "¿Llamaste a tu madre? Sí, ",
  "answer": "la",
  "after": " llamé.",
  "ja": "お母さんに電話した？うん、電話したよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "女性を指す直接目的語（a tu madre）は la に置き換える。"
 },
 {
  "before": "¿Encontraste tu teléfono? Sí, ",
  "answer": "lo",
  "after": " encontré.",
  "ja": "携帯電話見つかった？うん、見つかったよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "男性単数の直接目的語（tu teléfono）は lo に置き換える。"
 },
 {
  "before": "¿Leíste los mensajes? Sí, ",
  "answer": "los",
  "after": " leí.",
  "ja": "メッセージ読んだ？うん、読んだよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "男性複数の直接目的語（los mensajes）は los に置き換える。"
 },
 {
  "before": "¿Escribiste la carta? Sí, ",
  "answer": "la",
  "after": " escribí.",
  "ja": "手紙書いた？うん、書いたよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "女性単数の直接目的語（la carta）は la に置き換える。"
 },
 {
  "before": "Él ",
  "answer": "se afeita",
  "after": " todas las mañanas.",
  "ja": "彼は毎朝ひげを剃る。",
  "label": "afeitarse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "三人称単数では再帰代名詞 se を使う。"
 },
 {
  "before": "Yo ",
  "answer": "me maquillo",
  "after": " antes de salir.",
  "ja": "私は出かける前に化粧をする。",
  "label": "maquillarse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "yoでは再帰代名詞 me を使う。"
 },
 {
  "before": "El bebé ",
  "answer": "se duerme",
  "after": " rápido.",
  "ja": "赤ちゃんはすぐに眠りにつく。",
  "label": "dormirse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "dormirseはo→ueの語根母音変化動詞。三人称単数はse duerme。"
 },
 {
  "before": "Nosotros ",
  "answer": "nos vamos",
  "after": " de vacaciones mañana.",
  "ja": "私たちは明日休暇に出かける。",
  "label": "irse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "irseは不規則動詞。nosotrosの形はnos vamos。"
 },
 {
  "before": "¿Por qué ",
  "answer": "te preocupas",
  "after": " tú tanto?",
  "ja": "どうして君はそんなに心配するの？",
  "label": "preocuparse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "túでは再帰代名詞 te を使う。"
 },
 {
  "before": "Ellos ",
  "answer": "se enojan",
  "after": " fácilmente.",
  "ja": "彼らはすぐ怒る。",
  "label": "enojarse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "三人称複数では再帰代名詞 se を使う。"
 },
 {
  "before": "Este hotel es mejor ",
  "answer": "que",
  "after": " aquel.",
  "ja": "このホテルはあのホテルより良い。",
  "label": "比較級",
  "topic": "comparativo",
  "note": "mejor（もっと良い、buenoの不規則比較級）の後もqueを使う。"
 },
 {
  "before": "Ana corre más rápido ",
  "answer": "que",
  "after": " Luis.",
  "ja": "アナはルイスより速く走る。",
  "label": "比較級",
  "topic": "comparativo",
  "note": "más+副詞+que で「〜より…」を表す。"
 },
 {
  "before": "Tengo tanto trabajo ",
  "answer": "como",
  "after": " tú.",
  "ja": "私は君と同じくらいたくさん仕事がある。",
  "label": "同等比較",
  "topic": "comparativo",
  "note": "tanto+名詞+como で名詞の同等比較を表す。"
 },
 {
  "before": "Este es el edificio más alto ",
  "answer": "de",
  "after": " la ciudad.",
  "ja": "これは街で一番高い建物だ。",
  "label": "最上級",
  "topic": "comparativo",
  "note": "最上級の範囲を示すときは「de+場所」を使う（enではない点に注意）。"
 },
 {
  "before": "Su casa es tan grande ",
  "answer": "como",
  "after": " la mía.",
  "ja": "彼の家は私の家と同じくらい大きい。",
  "label": "同等比較",
  "topic": "comparativo",
  "note": "tan+形容詞+como で「〜と同じくらい」を表す。"
 },
 {
  "before": "Hay menos gente aquí ",
  "answer": "que",
  "after": " ayer.",
  "ja": "今日は昨日より人が少ない。",
  "label": "比較級",
  "topic": "comparativo",
  "note": "menos+名詞+que で「〜より少ない」を表す。"
 },
 {
  "before": "Este café ",
  "answer": "está",
  "after": " demasiado caliente.",
  "ja": "このコーヒーは熱すぎる。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "一時的な温度の状態を表すときは estar を使う。"
 },
 {
  "before": "Mis padres ",
  "answer": "son",
  "after": " de México.",
  "ja": "私の両親はメキシコ出身だ。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "出身を表すときは ser de を使う。"
 },
 {
  "before": "¿Cómo ",
  "answer": "está",
  "after": " tu abuela?",
  "ja": "おばあさんの調子はどう？",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "体調・健康状態を尋ねるときは estar を使う。"
 },
 {
  "before": "El concierto ",
  "answer": "es",
  "after": " en el estadio.",
  "ja": "コンサートはスタジアムで行われる。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "イベントが「どこで開催されるか」を表すときは ser を使う（estarではない特別なルール）。"
 },
 {
  "before": "La ventana ",
  "answer": "está",
  "after": " rota.",
  "ja": "窓が割れている。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "動作の結果としての状態を表すときは estar+過去分詞を使う。"
 },
 {
  "before": "Nosotros ",
  "answer": "somos",
  "after": " profesores.",
  "ja": "私たちは教師だ。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "職業を表すときは ser を使う。"
 },
 {
  "before": "A mí ",
  "answer": "me aburren",
  "after": " las películas largas.",
  "ja": "長い映画は退屈だ。",
  "label": "aburrir（現在形）",
  "topic": "gustar",
  "note": "主語（las películas）が複数なので動詞も複数形aburrenになる。"
 },
 {
  "before": "A ella ",
  "answer": "le sorprende",
  "after": " la noticia.",
  "ja": "彼女はその知らせに驚いている。",
  "label": "sorprender（現在形）",
  "topic": "gustar",
  "note": "sorprender（驚かせる）もgustar型の語順を取る。"
 },
 {
  "before": "A nosotros ",
  "answer": "nos preocupa",
  "after": " el futuro.",
  "ja": "私たちは将来が心配だ。",
  "label": "preocupar（現在形）",
  "topic": "gustar",
  "note": "preocupar（心配させる）もgustar型の語順を取る。"
 },
 {
  "before": "¿A ti ",
  "answer": "te parece",
  "after": " bien mi plan?",
  "ja": "私の計画は君にとって良さそう？",
  "label": "parecer（現在形）",
  "topic": "gustar",
  "note": "parecer（〜のように思える）もgustar型の語順を取る。"
 },
 {
  "before": "A ellos ",
  "answer": "les hace falta",
  "after": " más tiempo.",
  "ja": "彼らはもっと時間が必要だ。",
  "label": "hacer falta（現在形）",
  "topic": "gustar",
  "note": "hacer falta（必要である）もgustar型の語順を取る。"
 },
 {
  "before": "A mí ",
  "answer": "me fastidia",
  "after": " esperar.",
  "ja": "待つのは私にとって煩わしい。",
  "label": "fastidiar（現在形）",
  "topic": "gustar",
  "note": "fastidiar（うんざりさせる）もgustar型の語順を取る。"
 },
 {
  "before": "¿Te presto mi bici? Sí, ",
  "answer": "me la",
  "after": " prestas.",
  "ja": "自転車を貸してあげようか？うん、それを貸して。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "me（間接）＋la（直接）は「me la」の順番。"
 },
 {
  "before": "¿Le compras el regalo a tu papá? Sí, ",
  "answer": "se lo",
  "after": " compro.",
  "ja": "お父さんにプレゼントを買ってあげる？うん、それを買ってあげるよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "leとloが並ぶとき、leはseに変わる。"
 },
 {
  "before": "¿Nos enseñas la foto? Sí, ",
  "answer": "nos la",
  "after": " enseño.",
  "ja": "私たちにその写真を見せてくれる？うん、見せるよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "nosはseに変わらず、そのままnos+la→nos laの順で使う。"
 },
 {
  "before": "¿Me das los boletos? Sí, ",
  "answer": "te los",
  "after": " doy.",
  "ja": "チケットをくれる？うん、それを君にあげるよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "te（間接）＋los（直接）は「te los」の順番。"
 },
 {
  "before": "¿Les cuentas el secreto a ellas? Sí, ",
  "answer": "se lo",
  "after": " cuento.",
  "ja": "彼女たちに秘密を話す？うん、話すよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "lesとloが並ぶとき、lesはseに変わる。"
 },
 {
  "before": "¿Te devuelvo las llaves? Sí, ",
  "answer": "me las",
  "after": " devuelves.",
  "ja": "鍵を返してほしい？うん、それを私に返して。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "me（間接）＋las（直接）は「me las」の順番。"
 },
 {
  "before": "Sueño ",
  "answer": "con",
  "after": " viajar por el mundo.",
  "ja": "世界中を旅することを夢見ている。",
  "label": "前置詞（決まった言い回し）",
  "topic": "preposicion",
  "note": "soñar con（〜を夢見る）は決まった組み合わせ。"
 },
 {
  "before": "Insisto ",
  "answer": "en",
  "after": " que vengas conmigo.",
  "ja": "君に一緒に来てほしいと言い張っている。",
  "label": "前置詞（en/de）",
  "topic": "preposicion",
  "note": "insistir en（〜を主張する）は決まった組み合わせ。"
 },
 {
  "before": "Se enteró ",
  "answer": "de",
  "after": " la noticia por la radio.",
  "ja": "彼はラジオでその知らせを知った。",
  "label": "前置詞（en/de）",
  "topic": "preposicion",
  "note": "enterarse de（〜を知る）は決まった組み合わせ。"
 },
 {
  "before": "Estamos orgullosos ",
  "answer": "de",
  "after": " ti.",
  "ja": "私たちは君を誇りに思っている。",
  "label": "前置詞（en/de）",
  "topic": "preposicion",
  "note": "orgulloso de（〜を誇りに思う）は決まった組み合わせ。"
 },
 {
  "before": "Voy a hablar ",
  "answer": "con",
  "after": " el director mañana.",
  "ja": "明日、監督と話すつもりだ。",
  "label": "前置詞（決まった言い回し）",
  "topic": "preposicion",
  "note": "hablar con（〜と話す）は決まった組み合わせ。"
 },
 {
  "before": "Este trabajo consiste ",
  "answer": "en",
  "after": " organizar archivos.",
  "ja": "この仕事はファイルを整理することから成り立っている。",
  "label": "前置詞（en/de）",
  "topic": "preposicion",
  "note": "consistir en（〜から成る）は決まった組み合わせ。"
 },
 {
  "before": "Nos reímos mucho ",
  "answer": "de",
  "after": " esa película.",
  "ja": "私たちはその映画をとても笑った。",
  "label": "前置詞（en/de）",
  "topic": "preposicion",
  "note": "reírse de（〜を笑う）は決まった組み合わせ。"
 },
 {
  "before": "Cuento ",
  "answer": "con",
  "after": " tu ayuda para este proyecto.",
  "ja": "このプロジェクトで君の助けを頼りにしている。",
  "label": "前置詞（決まった言い回し）",
  "topic": "preposicion",
  "note": "contar con（〜を頼りにする）は決まった組み合わせ。"
 },
 {
  "before": "¿Ya viste la serie? Sí, ya ",
  "answer": "la",
  "after": " vi.",
  "ja": "もうそのドラマ見た？うん、もう見たよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "女性単数の直接目的語（la serie）は la に置き換える。"
 },
 {
  "before": "¿Tienes los papeles? Sí, ",
  "answer": "los",
  "after": " tengo aquí.",
  "ja": "書類持ってる？うん、ここにあるよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "男性複数の直接目的語（los papeles）は los に置き換える。"
 },
 {
  "before": "¿Buscas tu cartera? Sí, ",
  "answer": "la",
  "after": " busco.",
  "ja": "財布探してるの？うん、探しているよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "女性単数の直接目的語（tu cartera）は la に置き換える。"
 },
 {
  "before": "¿Trajiste el paraguas? Sí, ",
  "answer": "lo",
  "after": " traje.",
  "ja": "傘持ってきた？うん、持ってきたよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "男性単数の直接目的語（el paraguas）は lo に置き換える。"
 },
 {
  "before": "¿Guardaste las fotos? Sí, ",
  "answer": "las",
  "after": " guardé.",
  "ja": "写真保存した？うん、保存したよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "女性複数の直接目的語（las fotos）は las に置き換える。"
 },
 {
  "before": "¿Reconoces a ese actor? Sí, ",
  "answer": "lo",
  "after": " reconozco.",
  "ja": "あの俳優分かる？うん、分かるよ。",
  "label": "目的代名詞",
  "topic": "pronombre",
  "note": "男性を指す直接目的語も lo に置き換えられる。"
 },
 {
  "before": "Yo ",
  "answer": "me aburro",
  "after": " en las reuniones largas.",
  "ja": "私は長い会議だと退屈する。",
  "label": "aburrirse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "yoでは再帰代名詞 me を使う。"
 },
 {
  "before": "Ellos ",
  "answer": "se divierten",
  "after": " mucho en la fiesta.",
  "ja": "彼らはパーティーでとても楽しんでいる。",
  "label": "divertirse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "divertirseはe→ieの語根母音変化動詞。三人称複数はse divierten。"
 },
 {
  "before": "Mis padres ",
  "answer": "se casan",
  "after": " el próximo mes.",
  "ja": "私の両親は来月結婚する（式を挙げる）。",
  "label": "casarse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "三人称複数では再帰代名詞 se を使う。"
 },
 {
  "before": "Nosotros ",
  "answer": "nos mudamos",
  "after": " a una casa nueva.",
  "ja": "私たちは新しい家に引っ越す。",
  "label": "mudarse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "nosotrosでは再帰代名詞 nos を使う。"
 },
 {
  "before": "Tú siempre ",
  "answer": "te relajas",
  "after": " los fines de semana.",
  "ja": "君はいつも週末にリラックスする。",
  "label": "relajarse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "túでは再帰代名詞 te を使う。"
 },
 {
  "before": "Ella ",
  "answer": "se cansa",
  "after": " rápido cuando corre.",
  "ja": "彼女は走るとすぐ疲れる。",
  "label": "cansarse（再帰動詞・現在形）",
  "topic": "reflexivo",
  "note": "三人称単数では再帰代名詞 se を使う。"
 },
 {
  "before": "Este restaurante es peor ",
  "answer": "que",
  "after": " el otro.",
  "ja": "このレストランはもう一方より悪い。",
  "label": "比較級",
  "topic": "comparativo",
  "note": "peor（もっと悪い）の後もqueを使う。"
 },
 {
  "before": "Tienes tanta paciencia ",
  "answer": "como",
  "after": " un santo.",
  "ja": "君は聖人のような忍耐力を持っている。",
  "label": "同等比較",
  "topic": "comparativo",
  "note": "tanto/a+名詞+como で名詞の同等比較を表す。"
 },
 {
  "before": "Ganamos menos dinero ",
  "answer": "que",
  "after": " el año pasado.",
  "ja": "私たちは去年より稼ぎが少ない。",
  "label": "比較級",
  "topic": "comparativo",
  "note": "menos+名詞+que で「〜より少ない」を表す。"
 },
 {
  "before": "Es el problema más difícil ",
  "answer": "de",
  "after": " todos.",
  "ja": "それは全部の中で一番難しい問題だ。",
  "label": "最上級",
  "topic": "comparativo",
  "note": "最上級の範囲を示すときは「de+全体」を使う。"
 },
 {
  "before": "Mi computadora es tan rápida ",
  "answer": "como",
  "after": " la tuya.",
  "ja": "私のパソコンは君のと同じくらい速い。",
  "label": "同等比較",
  "topic": "comparativo",
  "note": "tan+形容詞+como で「〜と同じくらい」を表す。"
 },
 {
  "before": "Hoy hace más calor ",
  "answer": "que",
  "after": " ayer.",
  "ja": "今日は昨日より暑い。",
  "label": "比較級",
  "topic": "comparativo",
  "note": "más+形容詞+que で「〜より…」を表す。"
 },
 {
  "before": "Los niños ",
  "answer": "están",
  "after": " emocionados por el viaje.",
  "ja": "子供たちは旅行にわくわくしている。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "一時的な感情の状態を表すときは estar を使う。"
 },
 {
  "before": "Mi tío ",
  "answer": "es",
  "after": " ingeniero.",
  "ja": "私のおじはエンジニアだ。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "職業を表すときは ser を使う。"
 },
 {
  "before": "¿",
  "answer": "Estás",
  "after": " tú lista para salir?",
  "ja": "出かける準備できてる？",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "準備ができているかという一時的な状態は estar を使う。"
 },
 {
  "before": "El examen ",
  "answer": "es",
  "after": " mañana por la mañana.",
  "ja": "試験は明日の朝だ。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "イベントの開催時期・場所を表すときは ser を使う。"
 },
 {
  "before": "Las tiendas ",
  "answer": "están",
  "after": " cerradas los domingos.",
  "ja": "お店は日曜日は閉まっている。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "cerrado（閉まっている）のような状態を表す形容詞は estar と組み合わせる。"
 },
 {
  "before": "Nosotros ",
  "answer": "somos",
  "after": " estudiantes de esta universidad.",
  "ja": "私たちはこの大学の学生だ。",
  "label": "ser / estar",
  "topic": "ser_estar",
  "note": "身分・所属を表すときは ser を使う。"
 },
 {
  "before": "A los niños ",
  "answer": "les entusiasman",
  "after": " los parques de diversiones.",
  "ja": "子供たちは遊園地に夢中だ。",
  "label": "entusiasmar（現在形）",
  "topic": "gustar",
  "note": "主語（los parques）が複数なので動詞も複数形entusiasmanになる。"
 },
 {
  "before": "A mí no ",
  "answer": "me conviene",
  "after": " este horario.",
  "ja": "このスケジュールは私にとって都合が悪い。",
  "label": "convenir（現在形）",
  "topic": "gustar",
  "note": "convenir（都合が良い）もgustar型の語順を取る。"
 },
 {
  "before": "A ella ",
  "answer": "le duelen",
  "after": " los pies después de caminar tanto.",
  "ja": "彼女はたくさん歩いた後、足が痛い。",
  "label": "doler（現在形）",
  "topic": "gustar",
  "note": "主語（los pies）が複数なので動詞も複数形duelenになる。"
 },
 {
  "before": "A nosotros ",
  "answer": "nos asustan",
  "after": " las películas de terror.",
  "ja": "私たちはホラー映画が怖い。",
  "label": "asustar（現在形）",
  "topic": "gustar",
  "note": "主語（las películas）が複数なので動詞も複数形asustanになる。"
 },
 {
  "before": "A ti ",
  "answer": "te disgusta",
  "after": " la mentira.",
  "ja": "君は嘘が嫌いだ。",
  "label": "disgustar（現在形）",
  "topic": "gustar",
  "note": "disgustar（嫌だ）もgustar型の語順を取る。"
 },
 {
  "before": "De niño, a mí ",
  "answer": "me gustaba",
  "after": " jugar en el parque.",
  "ja": "子供の頃、公園で遊ぶのが好きだった。",
  "label": "gustar（線過去）",
  "topic": "gustar",
  "note": "過去の習慣的な好みは線過去（imperfecto）で表す。gustaba（単数主語jugarに一致）。"
 },
 {
  "before": "Anoche a ella ",
  "answer": "le encantó",
  "after": " la película.",
  "ja": "昨夜、彼女はその映画をとても気に入った。",
  "label": "encantar（点過去）",
  "topic": "gustar",
  "note": "1回きりの反応・感想は点過去で表す。película（単数）に一致してencantó。"
 },
 {
  "before": "El año pasado, a nosotros ",
  "answer": "nos interesaba",
  "after": " mucho la política.",
  "ja": "去年、私たちは政治にとても興味があった。",
  "label": "interesar（線過去）",
  "topic": "gustar",
  "note": "継続していた過去の興味・関心は線過去で表す。"
 },
 {
  "before": "Ayer a mí ",
  "answer": "me dolió",
  "after": " la cabeza todo el día.",
  "ja": "昨日、一日中頭が痛かった。",
  "label": "doler（点過去）",
  "topic": "gustar",
  "note": "特定の日の症状（1回きりの出来事として）は点過去で表すことが多い。cabeza（単数）に一致してdolió。"
 },
 {
  "before": "Cuando era niño, a él ",
  "answer": "le fascinaban",
  "after": " los dinosaurios.",
  "ja": "子供の頃、彼は恐竜に夢中だった。",
  "label": "fascinar（線過去）",
  "topic": "gustar",
  "note": "子供の頃からの継続した興味は線過去。dinosaurios（複数）に一致してfascinaban。"
 },
 {
  "before": "La semana pasada, a ustedes ",
  "answer": "les faltó",
  "after": " tiempo para terminar.",
  "ja": "先週、あなたたちは終わらせる時間が足りなかった。",
  "label": "faltar（点過去）",
  "topic": "gustar",
  "note": "特定の状況での不足は点過去で表す。tiempo（単数）に一致してfaltó。"
 },
 {
  "before": "De joven, a mí ",
  "answer": "me molestaban",
  "after": " mucho los ruidos fuertes.",
  "ja": "若い頃、大きな音がとても嫌だった。",
  "label": "molestar（線過去）",
  "topic": "gustar",
  "note": "過去の継続的な傾向は線過去。ruidos（複数）に一致してmolestaban。"
 },
 {
  "before": "Al final de la película, a todos ",
  "answer": "les sorprendió",
  "after": " el final.",
  "ja": "映画の最後に、みんなその結末に驚いた。",
  "label": "sorprender（点過去）",
  "topic": "gustar",
  "note": "特定の瞬間の反応は点過去。final（単数）に一致してsorprendió。"
 },
 {
  "before": "Antes, a nosotros ",
  "answer": "nos convenía",
  "after": " trabajar desde casa.",
  "ja": "以前は、家から働くのが私たちにとって都合が良かった。",
  "label": "convenir（線過去）",
  "topic": "gustar",
  "note": "過去の状況としての「都合の良さ」は線過去で表すことが多い。"
 },
 {
  "before": "El sábado pasado, a mí ",
  "answer": "me encantó",
  "after": " la fiesta.",
  "ja": "先週の土曜日、私はそのパーティーがとても気に入った。",
  "label": "encantar（点過去）",
  "topic": "gustar",
  "note": "特定の1回のイベントに対する感想は点過去。fiesta（単数）に一致してencantó。"
 },
 {
  "before": "A ellos ",
  "answer": "les fascina",
  "after": " la historia antigua.",
  "ja": "彼らは古代史に夢中だ。",
  "label": "fascinar（現在形）",
  "topic": "gustar",
  "note": "主語（la historia）が単数なので動詞も単数形fascinaになる。"
 },
 {
  "before": "¿Le regalas el libro a tu hermana? Sí, ",
  "answer": "se lo",
  "after": " regalo.",
  "ja": "妹に本をプレゼントする？うん、それをあげるよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "leとloが並ぶとき、leはseに変わる。"
 },
 {
  "before": "¿Nos preparas la cena? Sí, ",
  "answer": "nos la",
  "after": " preparo.",
  "ja": "私たちに夕食を用意してくれる？うん、用意するよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "nosはseに変わらず、そのままnos+la→nos laの順で使う。"
 },
 {
  "before": "¿Te muestro las fotos? Sí, ",
  "answer": "me las",
  "after": " muestras.",
  "ja": "写真見せようか？うん、見せて。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "me（間接）＋las（直接）は「me las」の順番。"
 },
 {
  "before": "¿Les vendes el coche a ellos? Sí, ",
  "answer": "se lo",
  "after": " vendo.",
  "ja": "彼らに車を売るの？うん、売るよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "lesとloが並ぶとき、lesはseに変わる。"
 },
 {
  "before": "¿Me traes el paraguas? Sí, ",
  "answer": "te lo",
  "after": " traigo.",
  "ja": "傘持ってきてくれる？うん、それを君に持ってくるよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "te（間接）＋lo（直接）は「te lo」の順番。"
 },
 {
  "before": "¿Le devuelves los libros a la biblioteca? Sí, ",
  "answer": "se los",
  "after": " devuelvo.",
  "ja": "図書館に本を返すの？うん、それらを返すよ。",
  "label": "目的代名詞（二重）",
  "topic": "pronombre_doble",
  "note": "leとlosが並ぶとき、leはseに変わる。"
 },
 {
  "before": "Ayer yo le ",
  "verb": "decir",
  "tense": "indefinido",
  "p": 0,
  "after": " la verdad a mi amigo.",
  "ja": "昨日、私は友人に本当のことを言った。"
 },
 {
  "before": "Ella siempre ",
  "verb": "poner",
  "tense": "presente",
  "p": 2,
  "after": " la mesa antes de cenar.",
  "ja": "彼女はいつも夕食前にテーブルを整える。"
 },
 {
  "before": "Nosotros ",
  "verb": "salir",
  "tense": "futuro",
  "p": 3,
  "after": " temprano mañana.",
  "ja": "私たちは明日早く出発するだろう。"
 },
 {
  "before": "¿Cuándo ",
  "verb": "venir",
  "tense": "presente",
  "p": 1,
  "after": " tú a visitarnos?",
  "ja": "いつ私たちを訪ねてきますか。"
 },
 {
  "before": "Yo le ",
  "verb": "dar",
  "tense": "indefinido",
  "p": 0,
  "after": " un regalo a mi madre ayer.",
  "ja": "昨日、私は母にプレゼントをあげた。"
 },
 {
  "before": "¿Alguna vez ",
  "verb": "ver",
  "tense": "perfecto",
  "p": 1,
  "after": " tú esa película?",
  "ja": "その映画を見たことがありますか。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " agua está muy fría.",
  "ja": "水がとても冷たい。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "aguaは女性名詞だが、アクセントのあるa音が続くのを避けるため単数形ではelを使う。"
 },
 {
  "before": "Voy a ",
  "answer": "la",
  "after": " escuela todos los días.",
  "ja": "毎日学校に行く。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "特定の（自分の通っている）学校を指すので定冠詞la。"
 },
 {
  "before": "Necesito ",
  "answer": "un",
  "after": " vaso de agua, por favor.",
  "ja": "コップ一杯の水が必要です。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "不特定の一つのコップなのでun。"
 },
 {
  "before": "Hay ",
  "answer": "un",
  "after": " problema con tu pedido.",
  "ja": "あなたの注文に問題があります。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "初めて話題にする不特定の問題なのでun。"
 },
 {
  "before": "Me encantan ",
  "answer": "los",
  "after": " gatos en general.",
  "ja": "猫全般が大好きだ。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "スペイン語では「〜というもの全般」を表すときも定冠詞を使う。"
 },
 {
  "before": "Es ",
  "answer": "un",
  "after": " médico muy reconocido en la ciudad.",
  "ja": "彼は街でとても有名な医者だ。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "職業に形容詞がつくときは不定冠詞が必要になる（Es médico.は冠詞なしでもよいが、修飾語がつくとunが必要）。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " Sr. García llegó tarde a la reunión.",
  "ja": "ガルシアさんは会議に遅れて来た。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "señor/señoraなどの敬称は、直接呼びかけるとき以外は定冠詞をつける。"
 },
 {
  "before": "¿Tienes ",
  "answer": "una",
  "after": " pluma que me puedas prestar?",
  "ja": "貸せるペンある？",
  "label": "冠詞",
  "topic": "articulos",
  "note": "不特定の一本のペンなのでuna。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " problema no tiene solución fácil.",
  "ja": "その問題には簡単な解決策がない。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "problemaは-aで終わるが、ギリシャ語源のため男性名詞。"
 },
 {
  "before": "Me lastimé ",
  "answer": "la",
  "after": " mano derecha.",
  "ja": "右手を怪我した。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "manoは-oで終わるが女性名詞という例外。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " día más importante de mi vida fue mi boda.",
  "ja": "人生で一番大切な日は結婚式だった。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "díaは-aで終わるが男性名詞という例外。"
 },
 {
  "before": "Compré ",
  "answer": "una",
  "after": " foto enmarcada para mi abuela.",
  "ja": "祖母のために額縁入りの写真を買った。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "fotoは-oで終わるが女性名詞（fotografíaの省略形のため）。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " clima de esta región es muy variable.",
  "ja": "この地域の気候はとても変わりやすい。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "climaは-aで終わるが男性名詞（ギリシャ語源）。"
 },
 {
  "before": "Necesito resolver ",
  "answer": "el",
  "after": " sistema antes de las cinco.",
  "ja": "5時までにこのシステムを解決する必要がある。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "sistemaは-aで終わるが男性名詞（ギリシャ語源）。"
 },
 {
  "before": "¿Cuál es ",
  "answer": "la",
  "after": " capital de Francia?",
  "ja": "フランスの首都はどこですか？",
  "label": "名詞の性",
  "topic": "genero",
  "note": "capitalは「首都」の意味では女性名詞（capital=資本金の意味では男性名詞）。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " mapa está sobre la mesa.",
  "ja": "地図はテーブルの上にある。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "mapaは-aで終わるが男性名詞（ギリシャ語源）。"
 },
 {
  "before": "",
  "answer": "Este",
  "after": " libro que tengo aquí es interesante.",
  "ja": "私がここに持っているこの本は面白い。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "話し手に近いものにはesteを使う。"
 },
 {
  "before": "",
  "answer": "Esa",
  "after": " chaqueta que tú llevas puesta es bonita.",
  "ja": "君が着ているそのジャケットは素敵だね。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "聞き手に近いものにはeseを使う。"
 },
 {
  "before": "",
  "answer": "Aquellas",
  "after": " montañas que se ven allá a lo lejos son muy altas.",
  "ja": "遠くに見えるあの山々はとても高い。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "両者から遠いものにはaquelを使う（女性複数形aquellas）。"
 },
 {
  "before": "",
  "answer": "Esa",
  "after": " silla que está justo a tu lado es cómoda.",
  "ja": "君のすぐ隣にあるその椅子は快適だ。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "聞き手のそばにあるものにはeseを使う。"
 },
 {
  "before": "",
  "answer": "Este",
  "after": " perro que está aquí conmigo se llama Max.",
  "ja": "ここに私と一緒にいるこの犬はマックスという名前だ。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "話し手のそばにあるものにはesteを使う。"
 },
 {
  "before": "",
  "answer": "Aquel",
  "after": " edificio que se ve al fondo de la calle es el ayuntamiento.",
  "ja": "通りの奥に見えるあの建物は市役所だ。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "遠くにあるものにはaquelを使う。"
 },
 {
  "before": "",
  "answer": "Estas",
  "after": " flores que tengo en mis manos son para ti.",
  "ja": "私が手に持っているこれらの花は君のためのものだ。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "話し手の手元にあるものにはesteの女性複数形estasを使う。"
 },
 {
  "before": "",
  "answer": "Esos",
  "after": " zapatos que tienes puestos son nuevos, ¿verdad?",
  "ja": "君が履いているその靴は新しいでしょ？",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "聞き手が身につけているものにはeseの男性複数形esosを使う。"
 },
 {
  "before": "",
  "answer": "Mi",
  "after": " hermana vive en Guadalajara.",
  "ja": "私の姉はグアダラハラに住んでいる。",
  "label": "所有形容詞",
  "topic": "posesivos",
  "note": "「私の」は単数名詞の前でmi。"
 },
 {
  "before": "¿Dónde están ",
  "answer": "tus",
  "after": " llaves?",
  "ja": "君の鍵はどこ？",
  "label": "所有形容詞",
  "topic": "posesivos",
  "note": "「君の」は複数名詞の前でtus。"
 },
 {
  "before": "",
  "answer": "Nuestra",
  "after": " casa es muy grande.",
  "ja": "私たちの家はとても大きい。",
  "label": "所有形容詞",
  "topic": "posesivos",
  "note": "nuestro/nuestraは性数変化する唯一の短い所有形容詞。casaは女性名詞なのでnuestra。"
 },
 {
  "before": "Ese perro es ",
  "answer": "suyo",
  "after": ".",
  "ja": "あの犬は彼のものだ。",
  "label": "所有代名詞",
  "topic": "posesivos",
  "note": "「〜のもの」という所有代名詞。suyoはél/ella/ustedすべてに使える。"
 },
 {
  "before": "",
  "answer": "Mis",
  "after": " padres viven en México.",
  "ja": "私の両親はメキシコに住んでいる。",
  "label": "所有形容詞",
  "topic": "posesivos",
  "note": "「私の」は複数名詞の前でmis。"
 },
 {
  "before": "El coche es ",
  "answer": "mío",
  "after": ".",
  "ja": "その車は私のものだ。",
  "label": "所有代名詞",
  "topic": "posesivos",
  "note": "「私のもの」という所有代名詞、男性単数名詞に一致してmío。"
 },
 {
  "before": "",
  "answer": "Sus",
  "after": " amigos vienen a la fiesta.",
  "ja": "彼らの友達がパーティーに来る。",
  "label": "所有形容詞",
  "topic": "posesivos",
  "note": "「彼らの」は複数名詞の前でsus。"
 },
 {
  "before": "¿Es esta ",
  "answer": "tu",
  "after": " mochila?",
  "ja": "これは君のリュック？",
  "label": "所有形容詞",
  "topic": "posesivos",
  "note": "「君の」は単数名詞の前でtu。"
 },
 {
  "before": "",
  "answer": "Hay",
  "after": " un restaurante muy bueno cerca de aquí.",
  "ja": "この近くにとても良いレストランがある。",
  "label": "hay / estar",
  "topic": "hay_estar",
  "note": "初出の不特定のものにはhayを使う。"
 },
 {
  "before": "El restaurante que mencioné ",
  "answer": "está",
  "after": " en la esquina.",
  "ja": "私が言ったレストランは角にある。",
  "label": "hay / estar",
  "topic": "hay_estar",
  "note": "すでに話題に出た特定のものの場所にはestarを使う。"
 },
 {
  "before": "¿",
  "answer": "Hay",
  "after": " leche en el refrigerador?",
  "ja": "冷蔵庫に牛乳ある？",
  "label": "hay / estar",
  "topic": "hay_estar",
  "note": "不特定の存在を尋ねるときはhayを使う。"
 },
 {
  "before": "¿Dónde ",
  "answer": "está",
  "after": " la estación del metro más cercana?",
  "ja": "一番近い地下鉄の駅はどこですか？",
  "label": "hay / estar",
  "topic": "hay_estar",
  "note": "la（定冠詞）がついた特定のものの場所にはestarを使う。"
 },
 {
  "before": "La casa ",
  "answer": "fue pintada",
  "after": " el año pasado.",
  "ja": "その家は去年塗装された。",
  "label": "受け身",
  "topic": "pasiva",
  "note": "ser+過去分詞の受け身。主語la casaが女性単数なので過去分詞もpintadaと一致する。"
 },
 {
  "before": "Los documentos ",
  "answer": "fueron firmados",
  "after": " ayer por el director.",
  "ja": "書類は昨日部長によって署名された。",
  "label": "受け身",
  "topic": "pasiva",
  "note": "主語los documentosが男性複数なのでfueron firmadosと一致する。"
 },
 {
  "before": "En México ",
  "answer": "se habla",
  "after": " español.",
  "ja": "メキシコではスペイン語が話されている。",
  "label": "受け身（se pasivo）",
  "topic": "pasiva",
  "note": "動作主が不明・重要でないときは se+動詞（三人称）の受け身がよく使われる。"
 },
 {
  "before": "Aquí ",
  "answer": "se venden",
  "after": " libros usados.",
  "ja": "ここでは古本が売られている。",
  "label": "受け身（se pasivo）",
  "topic": "pasiva",
  "note": "se+動詞は主語（libros、複数）に一致して複数形se vendenになる。"
 },
 {
  "before": "El puente ",
  "answer": "fue construido",
  "after": " hace veinte años.",
  "ja": "その橋は20年前に建設された。",
  "label": "受け身",
  "topic": "pasiva",
  "note": "ser+過去分詞（construido、男性単数）の受け身。"
 },
 {
  "before": "Las cartas ",
  "answer": "fueron enviadas",
  "after": " la semana pasada.",
  "ja": "手紙は先週送られた。",
  "label": "受け身",
  "topic": "pasiva",
  "note": "主語las cartasが女性複数なのでfueron enviadasと一致する。"
 },
 {
  "before": "",
  "answer": "Se necesitan",
  "after": " empleados con experiencia.",
  "ja": "経験のある従業員が求められています。",
  "label": "受け身（se pasivo）",
  "topic": "pasiva",
  "note": "求人広告などでよく見るse pasivoの形。主語empleadosに一致して複数形。"
 },
 {
  "before": "La ventana ",
  "answer": "fue rota",
  "after": " durante la tormenta.",
  "ja": "窓は嵐の間に割られた。",
  "label": "受け身",
  "topic": "pasiva",
  "note": "romperの過去分詞rotoは不規則。女性単数主語に一致してrota。"
 },
 {
  "before": "",
  "answer": "Nadie",
  "after": " vino a la fiesta.",
  "ja": "誰もパーティーに来なかった。",
  "label": "否定語",
  "topic": "algo_alguno",
  "note": "文頭に否定語を置くときはnoを省略できる。"
 },
 {
  "before": "No he ido ",
  "answer": "nunca",
  "after": " a España.",
  "ja": "スペインには一度も行ったことがない。",
  "label": "否定語",
  "topic": "algo_alguno",
  "note": "「一度も〜ない」を表す否定副詞。"
 },
 {
  "before": "No como carne ",
  "answer": "ni",
  "after": " pescado.",
  "ja": "私は肉も魚も食べない。",
  "label": "否定語",
  "topic": "algo_alguno",
  "note": "「〜も〜ない」を重ねるときのni。"
 },
 {
  "before": "Estoy ",
  "answer": "muy",
  "after": " cansado hoy.",
  "ja": "今日はとても疲れている。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "形容詞の前にはmuyを使う（変化しない）。"
 },
 {
  "before": "Tengo ",
  "answer": "mucho",
  "after": " trabajo esta semana.",
  "ja": "今週は仕事がたくさんある。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "muchoは名詞を修飾し、性数に一致する。trabajoは男性名詞なのでmucho。"
 },
 {
  "before": "Ella es ",
  "answer": "muy",
  "after": " inteligente.",
  "ja": "彼女はとても賢い。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "形容詞の前にはmuyを使う。"
 },
 {
  "before": "Bebo ",
  "answer": "mucha",
  "after": " agua todos los días.",
  "ja": "私は毎日たくさんの水を飲む。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "aguaは女性名詞なのでmucha（elがつく例外でも性自体は女性のまま）。"
 },
 {
  "before": "Hace ",
  "answer": "mucho",
  "after": " calor en verano.",
  "ja": "夏はとても暑い。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "calorは男性名詞、hace mucho calorで決まった言い回し。"
 },
 {
  "before": "Estás ",
  "answer": "muy",
  "after": " callado hoy.",
  "ja": "今日は君、とても静かだね。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "形容詞の前にはmuyを使う。"
 },
 {
  "before": "Tenemos ",
  "answer": "muchas",
  "after": " preguntas para ti.",
  "ja": "君に聞きたいことがたくさんある。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "preguntasは女性複数名詞なのでmuchas。"
 },
 {
  "before": "Corre ",
  "answer": "muy",
  "after": " rápido.",
  "ja": "彼はとても速く走る。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "副詞rápidoの前にはmuyを使う。"
 },
 {
  "before": "Me gusta el café. A mí ",
  "answer": "también",
  "after": ".",
  "ja": "コーヒーが好きだ。私も。",
  "label": "también / tampoco",
  "topic": "reglas_menores",
  "note": "肯定文に同意するときはtambién。"
 },
 {
  "before": "No me gusta el café. A mí ",
  "answer": "tampoco",
  "after": ".",
  "ja": "コーヒーが好きじゃない。私も（好きじゃない）。",
  "label": "también / tampoco",
  "topic": "reglas_menores",
  "note": "否定文に同意するときはtampoco。"
 },
 {
  "before": "Quiero ir al cine. Yo ",
  "answer": "también",
  "after": " quiero ir.",
  "ja": "映画に行きたい。私も行きたい。",
  "label": "también / tampoco",
  "topic": "reglas_menores",
  "note": "肯定文への同意はtambién。"
 },
 {
  "before": "No quiero salir hoy. Yo ",
  "answer": "tampoco",
  "after": " quiero salir.",
  "ja": "今日は出かけたくない。私も出かけたくない。",
  "label": "también / tampoco",
  "topic": "reglas_menores",
  "note": "否定文への同意はtampoco。"
 },
 {
  "before": "La persona ",
  "answer": "que",
  "after": " me ayudó fue muy amable.",
  "ja": "私を手伝ってくれた人はとても親切だった。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "最も基本的で万能な関係代名詞que。"
 },
 {
  "before": "Este es el pueblo ",
  "answer": "donde",
  "after": " nací.",
  "ja": "ここが私が生まれた村だ。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "場所を先行詞とするときはdonde。"
 },
 {
  "before": "Mi hermano, ",
  "answer": "quien",
  "after": " vive en España, viene de visita.",
  "ja": "スペインに住んでいる私の兄が、遊びに来る。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "人を先行詞とし、コンマで区切る非制限用法ではquienがよく使われる。"
 },
 {
  "before": "La casa ",
  "answer": "que",
  "after": " compramos es enorme.",
  "ja": "私たちが買った家はとても大きい。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "物を先行詞とするときはque。"
 },
 {
  "before": "No conozco a nadie ",
  "answer": "que",
  "after": " pueda ayudarte.",
  "ja": "君を助けられる人を誰も知らない。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "nadie queの組み合わせで接続法とセットになることが多い。"
 },
 {
  "before": "Ese es el restaurante ",
  "answer": "donde",
  "after": " comimos ayer.",
  "ja": "あれが昨日私たちが食事をしたレストランだ。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "場所を先行詞とするときはdonde。"
 },
 {
  "before": "El libro ",
  "answer": "que",
  "after": " me prestaste es fascinante.",
  "ja": "君が貸してくれた本はとても面白い。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "物を先行詞とするときはque。"
 },
 {
  "before": "Ana, ",
  "answer": "quien",
  "after": " es mi mejor amiga, se muda la próxima semana.",
  "ja": "私の親友のアナは、来週引っ越す。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "人を先行詞とし、コンマで区切る場合はquien。"
 },
 {
  "before": "¿Tienes ",
  "answer": "alguna",
  "after": " pregunta?",
  "ja": "何か質問はある？",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "algunoは名詞の性に一致する。preguntaは女性名詞なのでalguna。"
 },
 {
  "before": "No tengo ",
  "answer": "ninguna",
  "after": " duda.",
  "ja": "何の疑問もない。",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "ningunoも名詞の性に一致する。dudaは女性名詞なのでninguna。"
 },
 {
  "before": "¿Hay ",
  "answer": "alguien",
  "after": " aquí?",
  "ja": "ここに誰かいる？",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "「誰か」を表す不変化の代名詞。"
 },
 {
  "before": "No hay ",
  "answer": "nadie",
  "after": " en la oficina.",
  "ja": "オフィスには誰もいない。",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "「誰も〜ない」を表す不変化の代名詞。"
 },
 {
  "before": "Quiero comer ",
  "answer": "algo",
  "after": " dulce.",
  "ja": "何か甘いものが食べたい。",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "「何か」を表す不変化の代名詞。"
 },
 {
  "before": "No quiero comer ",
  "answer": "nada",
  "after": ".",
  "ja": "何も食べたくない。",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "「何も〜ない」を表す不変化の代名詞。"
 },
 {
  "before": "¿Conoces ",
  "answer": "algún",
  "after": " restaurante bueno por aquí?",
  "ja": "この辺りに良いレストラン知ってる？",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "algunoは男性単数名詞の前でalgúnに短縮される。"
 },
 {
  "before": "No conozco ",
  "answer": "ningún",
  "after": " restaurante bueno por aquí.",
  "ja": "この辺りに良いレストランを知らない。",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "ningunoも男性単数名詞の前でningúnに短縮される。"
 },
 {
  "before": "Fui a la tienda ",
  "answer": "y",
  "after": " compré leche.",
  "ja": "店に行って牛乳を買った。",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "通常の「そして」はy。"
 },
 {
  "before": "Tengo hermanos ",
  "answer": "e",
  "after": " hijas.",
  "ja": "私には兄弟と娘がいる。",
  "label": "接続詞",
  "topic": "reglas_menores",
  "note": "次の単語がi/hiの音で始まるときyはeに変わる。"
 },
 {
  "before": "¿Prefieres té ",
  "answer": "o",
  "after": " café?",
  "ja": "紅茶とコーヒー、どちらがいい？",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "通常の「または」はo。"
 },
 {
  "before": "Son siete ",
  "answer": "u",
  "after": " ocho estudiantes.",
  "ja": "7人か8人の生徒だ。",
  "label": "接続詞",
  "topic": "reglas_menores",
  "note": "次の単語がo/hoの音で始まるときoはuに変わる。"
 },
 {
  "before": "No quiero café, ",
  "answer": "sino",
  "after": " té.",
  "ja": "コーヒーではなく、紅茶が欲しい。",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "否定した内容を別のもので訂正するときはsinoを使う。"
 },
 {
  "before": "No es tonto, ",
  "answer": "sino",
  "after": " muy inteligente.",
  "ja": "彼はばかではなく、とても賢い。",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "否定+名詞/形容詞の訂正にはsinoを使う。"
 },
 {
  "before": "Ella no cocina, ",
  "answer": "sino que",
  "after": " hornea pasteles.",
  "ja": "彼女は料理をするのではなく、ケーキを焼く。",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "訂正の後ろに活用した動詞が続くときはsino queを使う。"
 },
 {
  "before": "Quiero ir, ",
  "answer": "pero",
  "after": " no tengo tiempo.",
  "ja": "行きたいけど、時間がない。",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "単純な逆接（〜だが）にはperoを使う。"
 },
 {
  "before": "Vivo aquí ",
  "answer": "desde",
  "after": " 2015.",
  "ja": "2015年からここに住んでいる。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "「〜以来」という起点を表すときはdesdeを使う。"
 },
 {
  "before": "",
  "answer": "Hace",
  "after": " tres años que estudio español.",
  "ja": "スペイン語を勉強してから3年になる。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "hace+期間+que+現在形で「〜してから…になる」を表す。"
 },
 {
  "before": "",
  "answer": "Llevo",
  "after": " cinco años estudiando español.",
  "ja": "5年間スペイン語を勉強し続けている。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "llevar+期間+現在分詞で「〜し続けている」を表す。"
 },
 {
  "before": "Trabajo en esta empresa ",
  "answer": "desde",
  "after": " hace cinco años.",
  "ja": "5年前からこの会社で働いている。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "desde hace+期間で起点からの経過を表す。"
 },
 {
  "before": "¿Cuánto tiempo ",
  "answer": "hace",
  "after": " que esperas?",
  "ja": "どれくらい待ってるの？",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "¿Cuánto tiempo hace que...?は経過期間を尋ねる決まった表現。"
 },
 {
  "before": "",
  "answer": "Llevo",
  "after": " dos horas esperando el autobús.",
  "ja": "バスを2時間待ち続けている。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "llevar+期間+現在分詞で継続を表す。"
 },
 {
  "before": "No lo veo ",
  "answer": "desde",
  "after": " el año pasado.",
  "ja": "去年から彼に会っていない。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "「〜以来ずっと〜ない」という起点にはdesdeを使う。"
 },
 {
  "before": "",
  "answer": "Llevo",
  "after": " mucho tiempo sin hablar con ella.",
  "ja": "彼女と長い間話していない。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "llevar+期間+sin+不定詞で「〜せずに…になる」を表す。"
 },
 {
  "before": "Trabajé ",
  "answer": "todo",
  "after": " el día sin descanso.",
  "ja": "休みなしで一日中働いた。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "男性単数名詞díaの前にはtodoを使う。"
 },
 {
  "before": "Limpié ",
  "answer": "toda",
  "after": " la casa esta mañana.",
  "ja": "今朝、家中を掃除した。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "女性単数名詞casaの前にはtodaを使う。"
 },
 {
  "before": "",
  "answer": "Todos",
  "after": " los estudiantes aprobaron el examen.",
  "ja": "生徒全員が試験に合格した。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "男性複数名詞estudiantesの前にはtodosを使う。"
 },
 {
  "before": "",
  "answer": "Todas",
  "after": " las tiendas cierran los domingos.",
  "ja": "すべての店は日曜日に閉まる。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "女性複数名詞tiendasの前にはtodasを使う。"
 },
 {
  "before": "",
  "answer": "Todo",
  "after": " está listo para la fiesta.",
  "ja": "パーティーの準備はすべて整っている。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "「すべてのもの」という代名詞として使うときはtodo（中性的）。"
 },
 {
  "before": "",
  "answer": "Todos",
  "after": " vinieron a la reunión.",
  "ja": "全員が会議に来た。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "「全員」という代名詞として使うときはtodos。"
 },
 {
  "before": "Comimos ",
  "answer": "toda",
  "after": " la pizza.",
  "ja": "ピザを全部食べた。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "女性単数名詞pizzaの前にはtodaを使う。"
 },
 {
  "before": "Necesito hablar con ",
  "answer": "todo",
  "after": " el equipo.",
  "ja": "チーム全体と話す必要がある。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "男性単数名詞equipoの前にはtodoを使う。"
 },
 {
  "before": "¿",
  "answer": "Cuál",
  "after": " es tu nombre?",
  "ja": "あなたの名前は何ですか？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "ser+具体的な情報を尋ねるときはcuálを使うのが標準的。"
 },
 {
  "before": "¿Qué ",
  "answer": "hora",
  "after": " es?",
  "ja": "今何時ですか？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "時刻を尋ねる決まり文句¿Qué hora es?。"
 },
 {
  "before": "¿",
  "answer": "Cuál",
  "after": " es la diferencia entre estos dos?",
  "ja": "この2つの違いは何ですか？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "選択肢の中から選ぶニュアンスのときはcuál。"
 },
 {
  "before": "¿",
  "answer": "Quién",
  "after": " vive en esa casa?",
  "ja": "あの家には誰が住んでいますか？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "人を尋ねるときはquién。"
 },
 {
  "before": "¿",
  "answer": "Dónde",
  "after": " está el baño?",
  "ja": "トイレはどこですか？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "場所を尋ねるときはdónde。"
 },
 {
  "before": "¿",
  "answer": "Cuándo",
  "after": " llegas a casa?",
  "ja": "いつ家に着く？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "時を尋ねるときはcuándo。"
 },
 {
  "before": "¿Cómo te ",
  "answer": "llamas",
  "after": "?",
  "ja": "お名前は？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "¿Cómo te llamas?は名前を尋ねる決まり文句。"
 },
 {
  "before": "¿",
  "answer": "Cuánto",
  "after": " cuesta este boleto?",
  "ja": "このチケットはいくらですか？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "金額・量を尋ねるときはcuánto。"
 },
 {
  "before": "Cuando era niño, ",
  "verb": "tener",
  "tense": "imperfecto",
  "p": 0,
  "after": " muchos amigos en el barrio.",
  "ja": "子供の頃、近所にたくさんの友達がいた。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "Ayer ",
  "verb": "hacer",
  "tense": "indefinido",
  "p": 0,
  "after": " mucho ejercicio.",
  "ja": "昨日、たくさん運動をした。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "Mientras yo ",
  "verb": "comer",
  "tense": "imperfecto",
  "p": 0,
  "after": ", mi hermano llamó por teléfono.",
  "ja": "私が食事をしている間に、弟が電話をかけてきた。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "De repente, alguien ",
  "verb": "decir",
  "tense": "indefinido",
  "p": 2,
  "after": " algo muy gracioso.",
  "ja": "突然、誰かがとても面白いことを言った。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "Todos los veranos, nosotros ",
  "verb": "ir",
  "tense": "imperfecto",
  "p": 3,
  "after": " a la playa.",
  "ja": "毎年夏、私たちはビーチに行っていた。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "El año pasado, nosotros ",
  "verb": "ir",
  "tense": "indefinido",
  "p": 3,
  "after": " a Cancún.",
  "ja": "去年、私たちはカンクンに行った。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "Cuando tenía diez años, ",
  "verb": "vivir",
  "tense": "imperfecto",
  "p": 0,
  "after": " en Guadalajara.",
  "ja": "10歳の頃、グアダラハラに住んでいた。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "El verano pasado, ",
  "verb": "vivir",
  "tense": "indefinido",
  "p": 0,
  "after": " tres meses en España.",
  "ja": "去年の夏、3ヶ月間スペインに住んだ。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "Vamos a ver ",
  "answer": "una",
  "after": " película esta noche.",
  "ja": "今夜映画を見に行こう。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "不特定の一本の映画なのでuna。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " hombre que viste ayer es mi tío.",
  "ja": "昨日君が見た男の人は私の叔父だ。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "すでに話題に出た特定の人なので定冠詞El。"
 },
 {
  "before": "Me gusta ",
  "answer": "la",
  "after": " música clásica.",
  "ja": "クラシック音楽が好きだ。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "「〜というもの全般」を表すときは定冠詞を使う。"
 },
 {
  "before": "¿Tienes ",
  "answer": "un",
  "after": " hermano mayor?",
  "ja": "お兄さんはいる？",
  "label": "冠詞",
  "topic": "articulos",
  "note": "不特定の一人の兄なのでun。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " águila es un ave majestuosa.",
  "ja": "鷲は堂々とした鳥だ。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "águilaは女性名詞だが、アクセントのあるa音を避けるため単数形ではelを使う。"
 },
 {
  "before": "Ella es ",
  "answer": "una",
  "after": " doctora excelente.",
  "ja": "彼女は優秀な医者だ。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "職業に形容詞がつくときは不定冠詞が必要になる。"
 },
 {
  "before": "¿Dónde está ",
  "answer": "el",
  "after": " baño?",
  "ja": "トイレはどこですか？",
  "label": "冠詞",
  "topic": "articulos",
  "note": "特定の（その場にある）トイレを指すので定冠詞el。"
 },
 {
  "before": "Necesito comprar ",
  "answer": "un",
  "after": " paraguas, va a llover.",
  "ja": "傘を買う必要がある、雨が降りそうだ。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "不特定の一本の傘なのでun。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " programa de televisión es muy popular.",
  "ja": "そのテレビ番組はとても人気だ。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "programaは-aで終わるが男性名詞（ギリシャ語源）。"
 },
 {
  "before": "Se rompió ",
  "answer": "la",
  "after": " pierna izquierda.",
  "ja": "左足を骨折した。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "piernaは規則通り女性名詞。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " idioma más hablado en el mundo es el inglés.",
  "ja": "世界で最も話されている言語は英語だ。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "idiomaは-aで終わるが男性名詞（ギリシャ語源）。"
 },
 {
  "before": "Compramos ",
  "answer": "un",
  "after": " sofá nuevo.",
  "ja": "新しいソファを買った。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "sofáは男性名詞。"
 },
 {
  "before": "",
  "answer": "La",
  "after": " radio está encendida.",
  "ja": "ラジオがついている。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "radioは-oで終わるが女性名詞という例外。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " tema de la reunión es importante.",
  "ja": "会議のテーマは重要だ。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "temaは-aで終わるが男性名詞（ギリシャ語源）。"
 },
 {
  "before": "Vimos ",
  "answer": "un",
  "after": " eclipse solar anoche.",
  "ja": "昨夜、日食を見た。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "eclipseは男性名詞。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " análisis fue muy detallado.",
  "ja": "その分析はとても詳細だった。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "análisisは-isで終わる男性名詞、単複同形。"
 },
 {
  "before": "",
  "answer": "Esta",
  "after": " camisa que compré ayer me queda perfecta.",
  "ja": "昨日買ったこのシャツはぴったりだ。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "話し手が今持っているものにはesteの女性形estaを使う。"
 },
 {
  "before": "¿Puedes pasarme ",
  "answer": "ese",
  "after": " libro que está ahí?",
  "ja": "そこにあるその本を渡してくれる？",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "聞き手のそばにあるものにはeseを使う。"
 },
 {
  "before": "Cuando yo era niño, ",
  "answer": "aquellos",
  "after": " años fueron muy difíciles para mi familia.",
  "ja": "私が子供だった頃、あの年月は家族にとってとても大変だった。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "「子供の頃」という遠い過去を示す明確な根拠があるのでaquellos。"
 },
 {
  "before": "No me gusta ",
  "answer": "ese",
  "after": " tipo de música.",
  "ja": "その手の音楽は好きじゃない。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "少し距離を置いた、やや否定的なニュアンスでeseがよく使われる。"
 },
 {
  "before": "Mira ",
  "answer": "aquel",
  "after": " pájaro que está posado en la rama de allí.",
  "ja": "あそこの枝に止まっているあの鳥を見て。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "遠くにあるものにはaquelを使う。"
 },
 {
  "before": "",
  "answer": "Este",
  "after": " problema que tenemos ahora es serio.",
  "ja": "私たちが今抱えているこの問題は深刻だ。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "現在進行中の話題にはesteを使う。"
 },
 {
  "before": "¿Qué opinas de ",
  "answer": "esta",
  "after": " decisión que tomamos la semana pasada?",
  "ja": "先週私たちが下したこの決定についてどう思う？",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "直近の出来事にはestaを使う。"
 },
 {
  "before": "",
  "answer": "Esos",
  "after": " zapatos que llevas puestos son muy cómodos, ¿verdad?",
  "ja": "君が履いているその靴、とても快適でしょ？",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "聞き手が身につけているものにはeseの複数形esosを使う。"
 },
 {
  "before": "¿Puedo usar ",
  "answer": "tu",
  "after": " computadora?",
  "ja": "君のパソコン使ってもいい？",
  "label": "所有形容詞",
  "topic": "posesivos",
  "note": "「君の」は単数名詞の前でtu。"
 },
 {
  "before": "",
  "answer": "Sus",
  "after": " opiniones son muy valiosas para mí.",
  "ja": "あなたのご意見は私にとってとても貴重です。",
  "label": "所有形容詞",
  "topic": "posesivos",
  "note": "「あなたの」（usted）は複数名詞の前でsus。"
 },
 {
  "before": "Este es ",
  "answer": "nuestro",
  "after": " carro.",
  "ja": "これは私たちの車だ。",
  "label": "所有形容詞",
  "topic": "posesivos",
  "note": "carroは男性名詞なのでnuestro。"
 },
 {
  "before": "¿Son estas ",
  "answer": "tuyas",
  "after": " las llaves?",
  "ja": "これは君の鍵？",
  "label": "所有代名詞",
  "topic": "posesivos",
  "note": "「君のもの」という所有代名詞、女性複数名詞llavesに一致してtuyas。"
 },
 {
  "before": "",
  "answer": "Mi",
  "after": " familia es muy unida.",
  "ja": "私の家族はとても仲がいい。",
  "label": "所有形容詞",
  "topic": "posesivos",
  "note": "「私の」は単数名詞の前でmi。"
 },
 {
  "before": "La responsabilidad es ",
  "answer": "mía",
  "after": ".",
  "ja": "責任は私にある。",
  "label": "所有代名詞",
  "topic": "posesivos",
  "note": "「私のもの」という所有代名詞、女性単数名詞responsabilidadに一致してmía。"
 },
 {
  "before": "",
  "answer": "Su",
  "after": " perro ladra mucho.",
  "ja": "彼の犬はよく吠える。",
  "label": "所有形容詞",
  "topic": "posesivos",
  "note": "「彼の」は単数名詞の前でsu。"
 },
 {
  "before": "Esa mochila azul es ",
  "answer": "suya",
  "after": ".",
  "ja": "その青いリュックは彼のものだ。",
  "label": "所有代名詞",
  "topic": "posesivos",
  "note": "「彼のもの」という所有代名詞、女性単数名詞mochilaに一致してsuya。"
 },
 {
  "before": "",
  "answer": "Hay",
  "after": " mucho tráfico a esta hora.",
  "ja": "この時間は交通量がとても多い。",
  "label": "hay / estar",
  "topic": "hay_estar",
  "note": "不特定の量を表すのでhayを使う。"
 },
 {
  "before": "¿",
  "answer": "Hay",
  "after": " algo de comer en la cocina?",
  "ja": "台所に何か食べるものある？",
  "label": "hay / estar",
  "topic": "hay_estar",
  "note": "不特定のものを尋ねるときはhayを使う。"
 },
 {
  "before": "¿Dónde ",
  "answer": "están",
  "after": " los baños?",
  "ja": "トイレはどこですか？",
  "label": "hay / estar",
  "topic": "hay_estar",
  "note": "los（定冠詞）がついた特定のものの場所にはestarを使う。"
 },
 {
  "before": "",
  "answer": "Hay",
  "after": " dos baños en este piso.",
  "ja": "この階には2つのトイレがある。",
  "label": "hay / estar",
  "topic": "hay_estar",
  "note": "不特定の数を数えるときはhayを使う。"
 },
 {
  "before": "El contrato ",
  "answer": "fue firmado",
  "after": " por ambas partes.",
  "ja": "契約は双方によって署名された。",
  "label": "受け身",
  "topic": "pasiva",
  "note": "ser+過去分詞の受け身、主語contrato（男性単数）に一致。"
 },
 {
  "before": "Las plantas ",
  "answer": "son regadas",
  "after": " todos los días por el jardinero.",
  "ja": "植物は庭師によって毎日水をやられている。",
  "label": "受け身",
  "topic": "pasiva",
  "note": "現在形の受け身、習慣的な動作を表す。plantas（女性複数）に一致。"
 },
 {
  "before": "En esta fábrica ",
  "answer": "se fabrican",
  "after": " muchos productos.",
  "ja": "この工場では多くの製品が製造されている。",
  "label": "受け身（se pasivo）",
  "topic": "pasiva",
  "note": "se+動詞、主語productosに一致して複数形。"
 },
 {
  "before": "El problema ",
  "answer": "fue resuelto",
  "after": " rápidamente.",
  "ja": "問題はすぐに解決された。",
  "label": "受け身",
  "topic": "pasiva",
  "note": "resolverの過去分詞resueltoは不規則。"
 },
 {
  "before": "",
  "answer": "Se busca",
  "after": " camarero con experiencia.",
  "ja": "経験のあるウェイターを募集しています。",
  "label": "受け身（se pasivo）",
  "topic": "pasiva",
  "note": "求人広告の定番表現、主語camareroは単数。"
 },
 {
  "before": "Los resultados ",
  "answer": "serán anunciados",
  "after": " mañana.",
  "ja": "結果は明日発表される予定だ。",
  "label": "受け身",
  "topic": "pasiva",
  "note": "未来形の受け身、ser未来形+過去分詞。"
 },
 {
  "before": "La casa ",
  "answer": "fue vendida",
  "after": " el mes pasado.",
  "ja": "その家は先月売られた。",
  "label": "受け身",
  "topic": "pasiva",
  "note": "女性単数主語casaに一致してvendida。"
 },
 {
  "before": "Aquí ",
  "answer": "se hablan",
  "after": " tres idiomas.",
  "ja": "ここでは3つの言語が話されている。",
  "label": "受け身（se pasivo）",
  "topic": "pasiva",
  "note": "主語tres idiomas（複数）に一致してse hablan。"
 },
 {
  "before": "",
  "answer": "Ninguno",
  "after": " de mis amigos vino a la fiesta.",
  "ja": "私の友達の誰一人としてパーティーに来なかった。",
  "label": "否定語",
  "topic": "algo_alguno",
  "note": "「誰も〜ない（〜のうち）」を表すninguno。"
 },
 {
  "before": "Jamás he visto ",
  "answer": "nada",
  "after": " tan hermoso.",
  "ja": "これほど美しいものを見たことがない。",
  "label": "否定語",
  "topic": "algo_alguno",
  "note": "「何も〜ない」を表すnada。"
 },
 {
  "before": "Es una persona ",
  "answer": "muy",
  "after": " generosa.",
  "ja": "彼女はとても寛大な人だ。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "形容詞の前にはmuyを使う。"
 },
 {
  "before": "Tenemos ",
  "answer": "muchas",
  "after": " dudas sobre este plan.",
  "ja": "この計画について疑問がたくさんある。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "dudasは女性複数名詞なのでmuchas。"
 },
 {
  "before": "Llovió ",
  "answer": "mucho",
  "after": " anoche.",
  "ja": "昨夜はたくさん雨が降った。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "動詞を修飾する副詞としてmuchoを使う。"
 },
 {
  "before": "Estamos ",
  "answer": "muy",
  "after": " ocupados esta semana.",
  "ja": "今週はとても忙しい。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "形容詞の前にはmuyを使う。"
 },
 {
  "before": "Hay ",
  "answer": "mucho",
  "after": " ruido aquí.",
  "ja": "ここはとても騒がしい。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "ruidoは男性名詞なのでmucho。"
 },
 {
  "before": "Ella corre ",
  "answer": "mucho",
  "after": " más rápido que yo.",
  "ja": "彼女は私よりずっと速く走る。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "比較級を強調するときはmuyではなくmuchoを使う（mucho más）。"
 },
 {
  "before": "No tengo ",
  "answer": "mucho",
  "after": " tiempo libre.",
  "ja": "自由な時間があまりない。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "tiempoは男性名詞なのでmucho。"
 },
 {
  "before": "Es un libro ",
  "answer": "muy",
  "after": " interesante.",
  "ja": "とても面白い本だ。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "形容詞の前にはmuyを使う。"
 },
 {
  "before": "Fuimos al cine el sábado, y ellos ",
  "answer": "también",
  "after": ".",
  "ja": "土曜日に映画に行った、そして彼らも行った。",
  "label": "también / tampoco",
  "topic": "reglas_menores",
  "note": "肯定内容への同意はtambién。"
 },
 {
  "before": "No comimos nada antes de salir, y tú ",
  "answer": "tampoco",
  "after": ".",
  "ja": "出かける前に何も食べなかった、君もだね。",
  "label": "también / tampoco",
  "topic": "reglas_menores",
  "note": "否定内容への同意はtampoco。"
 },
 {
  "before": "Vamos a llegar tarde, y ustedes ",
  "answer": "también",
  "after": ".",
  "ja": "私たちは遅れそうだ、あなたたちもだ。",
  "label": "también / tampoco",
  "topic": "reglas_menores",
  "note": "肯定内容への同意はtambién。"
 },
 {
  "before": "No tengo planes para hoy, y ella ",
  "answer": "tampoco",
  "after": ".",
  "ja": "今日は予定がない、彼女もだ。",
  "label": "también / tampoco",
  "topic": "reglas_menores",
  "note": "否定内容への同意はtampoco。"
 },
 {
  "before": "El parque ",
  "answer": "donde",
  "after": " jugamos de niños ya no existe.",
  "ja": "子供の頃に遊んだ公園はもう存在しない。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "場所を先行詞とするときはdonde。"
 },
 {
  "before": "La chica ",
  "answer": "que",
  "after": " conocí ayer es muy simpática.",
  "ja": "昨日出会った女の子はとても感じがいい。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "物・人どちらにも使える万能なque。"
 },
 {
  "before": "Mis padres, ",
  "answer": "quienes",
  "after": " viven en Puebla, vienen a visitarnos.",
  "ja": "プエブラに住んでいる私の両親が、私たちを訪ねてくる。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "人を先行詞とし、コンマで区切る非制限用法ではquienesが使われる（複数）。"
 },
 {
  "before": "Vi la película ",
  "answer": "que",
  "after": " me recomendaste.",
  "ja": "君が勧めてくれた映画を見た。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "物を先行詞とするときはque。"
 },
 {
  "before": "La empresa ",
  "answer": "donde",
  "after": " trabajo está creciendo mucho.",
  "ja": "私が働いている会社はとても成長している。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "場所（勤務先）を先行詞とするときはdonde。"
 },
 {
  "before": "El profesor, ",
  "answer": "quien",
  "after": " es muy estricto, nos exige mucho.",
  "ja": "とても厳しいその先生は、私たちにたくさん要求する。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "人を先行詞とし、コンマで区切る場合はquien。"
 },
 {
  "before": "Los amigos con ",
  "answer": "quienes",
  "after": " viajé son de Chile.",
  "ja": "私が一緒に旅行した友達はチリ出身だ。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "前置詞con+人を先行詞とするときはquienes。"
 },
 {
  "before": "Este es el pueblo ",
  "answer": "donde",
  "after": " nació mi abuela.",
  "ja": "ここが私の祖母が生まれた村だ。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "場所を先行詞とするときはdonde。"
 },
 {
  "before": "¿Hay ",
  "answer": "algún",
  "after": " problema con mi pedido?",
  "ja": "私の注文に何か問題がありますか？",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "algunoは男性単数名詞problemaの前でalgúnに短縮。"
 },
 {
  "before": "No encontré ",
  "answer": "ninguna",
  "after": " información útil.",
  "ja": "役に立つ情報を何一つ見つけられなかった。",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "informaciónは女性名詞なのでninguna。"
 },
 {
  "before": "¿Necesitas ",
  "answer": "algo",
  "after": " más antes de irte?",
  "ja": "出かける前に何か他に必要なものある？",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "「何か」を表す不変化の代名詞。"
 },
 {
  "before": "No vino ",
  "answer": "nadie",
  "after": " a la reunión.",
  "ja": "誰も会議に来なかった。",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "「誰も〜ない」を表す不変化の代名詞。"
 },
 {
  "before": "Tengo ",
  "answer": "algunas",
  "after": " dudas sobre este tema.",
  "ja": "この話題についていくつか疑問がある。",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "dudasは女性複数名詞なのでalgunas。"
 },
 {
  "before": "No tengo ",
  "answer": "ninguna",
  "after": " duda al respecto.",
  "ja": "それについて何の疑問もない。",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "dudaは女性名詞なのでninguna。"
 },
 {
  "before": "¿Conoces a ",
  "answer": "alguien",
  "after": " que hable francés?",
  "ja": "フランス語を話す人を誰か知ってる？",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "「誰か」を表す不変化の代名詞。"
 },
 {
  "before": "No hay ",
  "answer": "ninguna",
  "after": " manera de convencerlo.",
  "ja": "彼を説得する方法は一つもない。",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "maneraは女性名詞なのでninguna。"
 },
 {
  "before": "Compré manzanas ",
  "answer": "y",
  "after": " naranjas.",
  "ja": "りんごとオレンジを買った。",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "通常の「そして」はy。"
 },
 {
  "before": "¿Quieres ir al parque ",
  "answer": "o",
  "after": " quedarte en casa?",
  "ja": "公園に行きたい、それとも家にいたい？",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "通常の「または」はo。"
 },
 {
  "before": "Ella no es perezosa, ",
  "answer": "sino",
  "after": " muy trabajadora.",
  "ja": "彼女は怠け者ではなく、とても勤勉だ。",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "否定した内容を訂正するときはsinoを使う。"
 },
 {
  "before": "Tiene siete ",
  "answer": "u",
  "after": " ocho gatos, no recuerdo bien.",
  "ja": "猫を7匹か8匹飼っている、正確には覚えていない。",
  "label": "接続詞",
  "topic": "reglas_menores",
  "note": "次の単語がo/hoの音で始まるときoはuに変わる。"
 },
 {
  "before": "Quiero comprarlo, ",
  "answer": "pero",
  "after": " no tengo suficiente dinero.",
  "ja": "それを買いたいけど、十分なお金がない。",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "単純な逆接にはperoを使う。"
 },
 {
  "before": "No fue un error, ",
  "answer": "sino",
  "after": " una decisión consciente.",
  "ja": "それは間違いではなく、意識的な決断だった。",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "否定+名詞の訂正にはsinoを使う。"
 },
 {
  "before": "Estudió mucho, ",
  "answer": "pero",
  "after": " no aprobó el examen.",
  "ja": "彼はたくさん勉強したが、試験に合格しなかった。",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "単純な逆接にはperoを使う。"
 },
 {
  "before": "Viajamos a Italia ",
  "answer": "e",
  "after": " Irlanda el año pasado.",
  "ja": "去年イタリアとアイルランドを旅行した。",
  "label": "接続詞",
  "topic": "reglas_menores",
  "note": "次の単語がi音で始まるときyはeに変わる。"
 },
 {
  "before": "",
  "answer": "Hace",
  "after": " dos semanas que no lo veo.",
  "ja": "彼に会わなくなって2週間になる。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "hace+期間+que+現在形で経過を表す。"
 },
 {
  "before": "Vivo en esta ciudad ",
  "answer": "desde",
  "after": " hace ocho años.",
  "ja": "8年前からこの街に住んでいる。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "desde hace+期間で起点からの経過を表す。"
 },
 {
  "before": "",
  "answer": "Llevo",
  "after": " un mes buscando trabajo.",
  "ja": "1ヶ月間仕事を探し続けている。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "llevar+期間+現在分詞で継続を表す。"
 },
 {
  "before": "No hablamos ",
  "answer": "desde",
  "after": " el verano pasado.",
  "ja": "去年の夏から話していない。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "起点を表すdesde。"
 },
 {
  "before": "¿Cuánto tiempo ",
  "answer": "llevas",
  "after": " trabajando aquí?",
  "ja": "ここでどれくらい働いているの？",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "llevar+期間+現在分詞の疑問文。"
 },
 {
  "before": "",
  "answer": "Hace",
  "after": " mucho tiempo que no viajo.",
  "ja": "旅行しなくなって長い時間が経つ。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "hace+期間+queの構文。"
 },
 {
  "before": "Estudio español ",
  "answer": "desde",
  "after": " 2020.",
  "ja": "2020年からスペイン語を勉強している。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "起点を表すdesde。"
 },
 {
  "before": "",
  "answer": "Llevo",
  "after": " tres horas estudiando sin parar.",
  "ja": "休まず3時間勉強し続けている。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "llevar+期間+現在分詞の構文。"
 },
 {
  "before": "Leí ",
  "answer": "todo",
  "after": " el libro en un día.",
  "ja": "一日で本を全部読んだ。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "男性単数名詞libroの前にはtodoを使う。"
 },
 {
  "before": "",
  "answer": "Todas",
  "after": " las noches salgo a caminar.",
  "ja": "毎晩散歩に出かける。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "女性複数名詞nochesの前にはtodasを使う。"
 },
 {
  "before": "",
  "answer": "Todos",
  "after": " mis amigos vienen a la boda.",
  "ja": "私の友達全員が結婚式に来る。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "男性複数名詞amigosの前にはtodosを使う。"
 },
 {
  "before": "Ella sabe ",
  "answer": "todo",
  "after": " sobre este tema.",
  "ja": "彼女はこのテーマについてすべて知っている。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "代名詞として使うときはtodo（中性的）。"
 },
 {
  "before": "Limpiamos ",
  "answer": "toda",
  "after": " la oficina ayer.",
  "ja": "昨日オフィス全体を掃除した。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "女性単数名詞oficinaの前にはtodaを使う。"
 },
 {
  "before": "",
  "answer": "Todos",
  "after": " los días llueve en esta temporada.",
  "ja": "この時期は毎日雨が降る。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "男性複数名詞díasの前にはtodosを使う。"
 },
 {
  "before": "Compré ",
  "answer": "todos",
  "after": " los ingredientes para la receta.",
  "ja": "レシピに必要な材料を全部買った。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "男性複数名詞ingredientesの前にはtodosを使う。"
 },
 {
  "before": "",
  "answer": "Todo",
  "after": " está bajo control.",
  "ja": "すべて順調だ。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "代名詞として「すべてのこと」を表すときはtodo。"
 },
 {
  "before": "¿",
  "answer": "Cuál",
  "after": " prefieres, el rojo o el azul?",
  "ja": "赤と青、どっちが好き？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "選択肢の中から選ぶときはcuál。"
 },
 {
  "before": "¿",
  "answer": "Cuál",
  "after": " es la diferencia entre estos dos planes?",
  "ja": "この2つのプランの違いは何ですか？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "具体的な情報を選ぶときはcuál。"
 },
 {
  "before": "¿",
  "answer": "Quién",
  "after": " trajo esto a la fiesta?",
  "ja": "誰がこれをパーティーに持ってきたの？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "人を尋ねるときはquién。"
 },
 {
  "before": "¿",
  "answer": "Qué",
  "after": " vamos a comer hoy?",
  "ja": "今日は何を食べようか？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "「何を」という開かれた質問にはqué。"
 },
 {
  "before": "¿",
  "answer": "Dónde",
  "after": " vive tu familia?",
  "ja": "君の家族はどこに住んでいるの？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "場所を尋ねるときはdónde。"
 },
 {
  "before": "¿",
  "answer": "Cuándo",
  "after": " terminarás el proyecto?",
  "ja": "プロジェクトはいつ終わりそう？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "時を尋ねるときはcuándo。"
 },
 {
  "before": "¿",
  "answer": "Cómo",
  "after": " te sientes hoy?",
  "ja": "今日の気分はどう？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "様子・状態を尋ねるときはcómo。"
 },
 {
  "before": "¿",
  "answer": "Cuánto",
  "after": " cuesta el boleto de avión?",
  "ja": "飛行機のチケットはいくらですか？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "金額を尋ねるときはcuánto。"
 },
 {
  "before": "Cuando vivíamos en México, ",
  "verb": "comer",
  "tense": "imperfecto",
  "p": 3,
  "after": " tacos todos los viernes.",
  "ja": "メキシコに住んでいた頃、毎週金曜日にタコスを食べていた。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "Ayer ",
  "verb": "comprar",
  "tense": "indefinido",
  "p": 0,
  "after": " un regalo para mi madre.",
  "ja": "昨日、母にプレゼントを買った。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "Mientras yo ",
  "verb": "estudiar",
  "tense": "imperfecto",
  "p": 0,
  "after": " para el examen, mi teléfono no dejaba de sonar.",
  "ja": "試験勉強をしている間、携帯が鳴りやまなかった。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "De repente, ",
  "verb": "ver",
  "tense": "indefinido",
  "p": 0,
  "after": " a un viejo amigo en la calle.",
  "ja": "突然、通りで古い友人を見かけた。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "Todos los días, mi abuela ",
  "verb": "hablar",
  "tense": "imperfecto",
  "p": 2,
  "after": " con sus vecinos.",
  "ja": "毎日、私の祖母は近所の人たちと話していた。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "El mes pasado, ",
  "verb": "necesitar",
  "tense": "indefinido",
  "p": 0,
  "after": " ayuda con la mudanza.",
  "ja": "先月、引っ越しの手伝いが必要だった。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "Cuando era joven, ",
  "verb": "trabajar",
  "tense": "imperfecto",
  "p": 0,
  "after": " en una tienda los fines de semana.",
  "ja": "若い頃、週末に店で働いていた。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "Anoche ",
  "verb": "esperar",
  "tense": "indefinido",
  "p": 0,
  "after": " el autobús por media hora.",
  "ja": "昨夜、30分間バスを待った。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "Compré ",
  "answer": "un",
  "after": " paraguas nuevo porque perdí el otro.",
  "ja": "別のをなくしたので、新しい傘を買った。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "不特定の一本の傘なのでun。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " presidente dará un discurso esta noche.",
  "ja": "大統領は今夜演説をする予定だ。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "特定の（その国の）大統領を指すので定冠詞El。"
 },
 {
  "before": "Nunca he visto ",
  "answer": "un",
  "after": " elefante en persona.",
  "ja": "実物のゾウを見たことが一度もない。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "不特定の一頭のゾウなのでun。"
 },
 {
  "before": "Prefiero ",
  "answer": "el",
  "after": " café sin azúcar.",
  "ja": "コーヒーは砂糖なしの方が好きだ。",
  "label": "冠詞",
  "topic": "articulos",
  "note": "「コーヒーというもの全般」を表すときは定冠詞を使う。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " mapa de la ciudad está desactualizado.",
  "ja": "その街の地図は情報が古い。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "mapaは-aで終わるが男性名詞（ギリシャ語源）。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " clima ha cambiado mucho este año.",
  "ja": "今年、気候はとても変わった。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "climaは-aで終わるが男性名詞（ギリシャ語源）。"
 },
 {
  "before": "Compramos ",
  "answer": "unas",
  "after": " cortinas nuevas para la sala.",
  "ja": "リビング用に新しいカーテンを買った。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "cortinasは規則通り女性複数名詞。"
 },
 {
  "before": "",
  "answer": "El",
  "after": " dilema es difícil de resolver.",
  "ja": "そのジレンマは解決するのが難しい。",
  "label": "名詞の性",
  "topic": "genero",
  "note": "dilemaは-aで終わるが男性名詞（ギリシャ語源）。"
 },
 {
  "before": "",
  "answer": "Esa",
  "after": " situación que vivimos el año pasado fue difícil.",
  "ja": "去年私たちが経験したあの状況は大変だった。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "少し前の話題にはeseを使う。"
 },
 {
  "before": "Prefiero ",
  "answer": "esta",
  "after": " opción sobre la otra.",
  "ja": "もう一方より、こちらの選択肢の方がいい。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "今まさに検討している選択肢にはestaを使う。"
 },
 {
  "before": "Han pasado veinte años, pero no puedo creer lo que pasó ",
  "answer": "aquel",
  "after": " día.",
  "ja": "20年経ったけど、あの日起きたことが信じられない。",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "「20年経った」という明確な時間的距離があるのでaquel。"
 },
 {
  "before": "¿Me pasas ",
  "answer": "ese",
  "after": " plato que está junto a ti?",
  "ja": "君のそばにあるその皿を取ってくれる？",
  "label": "指示形容詞",
  "topic": "demostrativos",
  "note": "聞き手のそばにあるものにはeseを使う。"
 },
 {
  "before": "¿Dónde dejaste ",
  "answer": "tu",
  "after": " mochila?",
  "ja": "君のリュックどこに置いた？",
  "label": "所有形容詞",
  "topic": "posesivos",
  "note": "「君の」は単数名詞の前でtu。"
 },
 {
  "before": "Este proyecto es completamente ",
  "answer": "nuestro",
  "after": ".",
  "ja": "このプロジェクトは完全に私たちのものだ。",
  "label": "所有代名詞",
  "topic": "posesivos",
  "note": "「私たちのもの」という所有代名詞、男性単数名詞proyectoに一致してnuestro。"
 },
 {
  "before": "",
  "answer": "Mis",
  "after": " abuelos vinieron a visitarnos.",
  "ja": "私の祖父母が訪ねてきてくれた。",
  "label": "所有形容詞",
  "topic": "posesivos",
  "note": "「私の」は複数名詞の前でmis。"
 },
 {
  "before": "La culpa no es mía, es ",
  "answer": "suya",
  "after": ".",
  "ja": "責任は私にではなく、彼らにある。",
  "label": "所有代名詞",
  "topic": "posesivos",
  "note": "「彼らのもの」という所有代名詞、女性単数名詞culpaに一致してsuya。"
 },
 {
  "before": "",
  "answer": "Hay",
  "after": " poca gente en el cine hoy.",
  "ja": "今日は映画館に人が少ない。",
  "label": "hay / estar",
  "topic": "hay_estar",
  "note": "不特定の量を表すのでhayを使う。"
 },
 {
  "before": "Los boletos ",
  "answer": "están",
  "after": " agotados.",
  "ja": "チケットは売り切れている。",
  "label": "hay / estar",
  "topic": "hay_estar",
  "note": "特定の（話題の）チケットの状態にはestarを使う。"
 },
 {
  "before": "Este edificio ",
  "answer": "fue diseñado",
  "after": " por un arquitecto famoso.",
  "ja": "この建物は有名な建築家によって設計された。",
  "label": "受け身",
  "topic": "pasiva",
  "note": "男性単数主語edificioに一致してdiseñado。"
 },
 {
  "before": "Las reglas ",
  "answer": "son explicadas",
  "after": " al inicio de la clase.",
  "ja": "ルールは授業の最初に説明される。",
  "label": "受け身",
  "topic": "pasiva",
  "note": "現在形の受け身、女性複数主語reglasに一致。"
 },
 {
  "before": "",
  "answer": "Se prohíbe",
  "after": " fumar en este restaurante.",
  "ja": "このレストランでは喫煙が禁止されている。",
  "label": "受け身（se pasivo）",
  "topic": "pasiva",
  "note": "se+動詞の受け身表現、掲示物などでよく見る形。"
 },
 {
  "before": "El puente ",
  "answer": "fue construido",
  "after": " en 1920.",
  "ja": "その橋は1920年に建設された。",
  "label": "受け身",
  "topic": "pasiva",
  "note": "男性単数主語puenteに一致してconstruido。"
 },
 {
  "before": "Trabajamos ",
  "answer": "mucho",
  "after": " para terminar a tiempo.",
  "ja": "時間通りに終わらせるためにたくさん働いた。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "動詞を修飾する副詞としてmuchoを使う。"
 },
 {
  "before": "Es una decisión ",
  "answer": "muy",
  "after": " importante.",
  "ja": "とても重要な決断だ。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "形容詞の前にはmuyを使う。"
 },
 {
  "before": "Tenemos ",
  "answer": "muchas",
  "after": " ganas de verte.",
  "ja": "君に会いたくてたまらない。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "ganasは女性複数名詞なのでmuchas。"
 },
 {
  "before": "Está ",
  "answer": "muy",
  "after": " lejos de aquí.",
  "ja": "ここからとても遠い。",
  "label": "muy / mucho",
  "topic": "muy_mucho",
  "note": "副詞lejosの前にはmuyを使う。"
 },
 {
  "before": "El hotel ",
  "answer": "donde",
  "after": " nos quedamos era muy cómodo.",
  "ja": "私たちが泊まったホテルはとても快適だった。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "場所（宿泊先）を先行詞とするときはdonde。"
 },
 {
  "before": "El restaurante ",
  "answer": "que",
  "after": " recomendaste estuvo delicioso.",
  "ja": "君が勧めてくれたレストランは美味しかった。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "物を先行詞とするときのque。"
 },
 {
  "before": "Mi hermana, ",
  "answer": "quien",
  "after": " vive en Toronto, nos visitará pronto.",
  "ja": "トロントに住んでいる私の姉が、もうすぐ私たちを訪ねてくる。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "人を先行詞とし、コンマで区切る非制限用法ではquienが使われる。"
 },
 {
  "before": "Ese es el libro ",
  "answer": "que",
  "after": " te recomendé.",
  "ja": "それが私が君に勧めた本だ。",
  "label": "関係代名詞",
  "topic": "relativos",
  "note": "物を先行詞とするときはque。"
 },
 {
  "before": "¿Falta ",
  "answer": "algo",
  "after": " por hacer?",
  "ja": "何かやり残したことある？",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "「何か」を表す不変化の代名詞。"
 },
 {
  "before": "No queda ",
  "answer": "ningún",
  "after": " pan en la cocina.",
  "ja": "台所にパンが一つも残っていない。",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "panは男性名詞なのでningún。"
 },
 {
  "before": "¿Hay ",
  "answer": "alguna",
  "after": " manera de arreglar esto?",
  "ja": "これを直す何か方法はある？",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "maneraは女性名詞なのでalguna。"
 },
 {
  "before": "No conozco a ",
  "answer": "nadie",
  "after": " que hable ruso.",
  "ja": "ロシア語を話す人を誰も知らない。",
  "label": "不定語",
  "topic": "algo_alguno",
  "note": "「誰も〜ない」を表す不変化の代名詞。"
 },
 {
  "before": "Quiero pastel ",
  "answer": "y",
  "after": " helado de postre.",
  "ja": "デザートにケーキとアイスクリームが欲しい。",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "通常の「そして」はy。"
 },
 {
  "before": "No sé si ir en tren ",
  "answer": "o",
  "after": " en autobús.",
  "ja": "電車で行くかバスで行くか分からない。",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "通常の「または」はo。"
 },
 {
  "before": "No llegamos tarde, ",
  "answer": "sino",
  "after": " temprano.",
  "ja": "私たちは遅れたのではなく、早く着いた。",
  "label": "接続詞",
  "topic": "conjunciones",
  "note": "否定した内容を訂正するときはsinoを使う。"
 },
 {
  "before": "Hay siete ",
  "answer": "u",
  "after": " ocho personas en la sala.",
  "ja": "部屋には7人か8人いる。",
  "label": "接続詞",
  "topic": "reglas_menores",
  "note": "次の単語がo/hoの音で始まるときoはuに変わる。"
 },
 {
  "before": "",
  "answer": "Hace",
  "after": " tres semanas que no hablamos.",
  "ja": "話さなくなって3週間になる。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "hace+期間+queの構文。"
 },
 {
  "before": "Trabajo en esta empresa ",
  "answer": "desde",
  "after": " 2019.",
  "ja": "2019年からこの会社で働いている。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "起点を表すdesde。"
 },
 {
  "before": "",
  "answer": "Llevo",
  "after": " seis meses aprendiendo a tocar la guitarra.",
  "ja": "6ヶ月間ギターを弾くことを習い続けている。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "llevar+期間+現在分詞で継続を表す。"
 },
 {
  "before": "No la veo ",
  "answer": "desde",
  "after": " su graduación.",
  "ja": "彼女の卒業式以来会っていない。",
  "label": "時間の経過",
  "topic": "tiempo_exp",
  "note": "起点を表すdesde。"
 },
 {
  "before": "Limpié ",
  "answer": "todo",
  "after": " mi cuarto esta mañana.",
  "ja": "今朝、部屋を全部掃除した。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "男性単数名詞cuartoの前にはtodoを使う。"
 },
 {
  "before": "",
  "answer": "Todas",
  "after": " las tiendas cierran a las nueve.",
  "ja": "すべての店は9時に閉まる。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "女性複数名詞tiendasの前にはtodasを使う。"
 },
 {
  "before": "Invitamos a ",
  "answer": "todos",
  "after": " nuestros vecinos.",
  "ja": "近所の人たち全員を招待した。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "男性複数名詞vecinosの前にはtodosを使う。"
 },
 {
  "before": "Ella conoce ",
  "answer": "todo",
  "after": " sobre este tema.",
  "ja": "彼女はこのテーマについてすべて知っている。",
  "label": "todo/toda",
  "topic": "todo_toda",
  "note": "代名詞として使うときはtodo（中性的）。"
 },
 {
  "before": "¿",
  "answer": "Cuál",
  "after": " es tu color favorito?",
  "ja": "君の好きな色は何？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "具体的な情報を選ぶときはcuál。"
 },
 {
  "before": "¿",
  "answer": "Cuándo",
  "after": " empieza la película?",
  "ja": "映画はいつ始まるの？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "時を尋ねるときはcuándo。"
 },
 {
  "before": "¿",
  "answer": "Cuál",
  "after": " prefieres, quedarte o salir?",
  "ja": "残るのと出かけるの、どっちがいい？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "2つの選択肢から選ぶときはcuál。"
 },
 {
  "before": "¿",
  "answer": "Cuánto",
  "after": " cuesta el pasaje de ida y vuelta?",
  "ja": "往復チケットはいくらですか？",
  "label": "疑問詞",
  "topic": "interrogativos",
  "note": "金額を尋ねるときはcuánto。"
 },
 {
  "before": "Cuando yo era niño, ",
  "verb": "tener",
  "tense": "imperfecto",
  "p": 0,
  "after": " un perro llamado Rex.",
  "ja": "子供の頃、レックスという名前の犬を飼っていた。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "Ayer ",
  "verb": "ver",
  "tense": "indefinido",
  "p": 0,
  "after": " una película muy buena.",
  "ja": "昨日、とても良い映画を見た。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "Mientras ella ",
  "verb": "hablar",
  "tense": "imperfecto",
  "p": 2,
  "after": " por teléfono, empezó a llover.",
  "ja": "彼女が電話で話している間に、雨が降り始めた。",
  "topic": "preterito_imperfecto"
 },
 {
  "before": "El año pasado, nosotros ",
  "verb": "comprar",
  "tense": "indefinido",
  "p": 3,
  "after": " una casa nueva.",
  "ja": "去年、私たちは新しい家を買った。",
  "topic": "preterito_imperfecto"
 },
 { "before":"El cuadro está colgado ", "answer":"sobre", "after":" la chimenea.", "ja":"絵は暖炉の上に掛かっている。", "label":"前置詞", "topic":"preposicion", "note":"「〜の上に」を表すsobre。" },
 { "before":"El gato duerme ", "answer":"bajo", "after":" la mesa.", "ja":"猫はテーブルの下で寝ている。", "label":"前置詞", "topic":"preposicion", "note":"「〜の下に」を表すbajo（debajo deとほぼ同義、よりフォーマル）。" },
 { "before":"La farmacia está ", "answer":"entre", "after":" el banco y la panadería.", "ja":"薬局は銀行とパン屋の間にある。", "label":"前置詞", "topic":"preposicion", "note":"「〜の間に」を表すentre。" },
 { "before":"Caminamos ", "answer":"desde", "after":" el hotel hasta la playa.", "ja":"ホテルからビーチまで歩いた。", "label":"前置詞", "topic":"preposicion", "note":"起点を表すdesde。" },
 { "before":"Voy a estudiar ", "answer":"hasta", "after":" muy tarde hoy.", "ja":"今日はとても遅くまで勉強するつもりだ。", "label":"前置詞", "topic":"preposicion", "note":"終点を表すhasta。" },
 { "before":"El avión vuela ", "answer":"hacia", "after":" el norte.", "ja":"飛行機は北へ向かって飛んでいる。", "label":"前置詞", "topic":"preposicion", "note":"方向を表すhacia。" },
 { "before":"Estudié español ", "answer":"durante", "after":" tres años.", "ja":"3年間スペイン語を勉強した。", "label":"前置詞", "topic":"preposicion", "note":"期間を表すdurante。" },
 { "before":"Jugamos ", "answer":"contra", "after":" el mejor equipo de la liga.", "ja":"リーグ最強のチームと対戦した。", "label":"前置詞", "topic":"preposicion", "note":"「〜に対して、〜と対戦して」を表すcontra。" },
 { "before":"El abogado habló ", "answer":"ante", "after":" el juez.", "ja":"弁護士は裁判官の前で話した。", "label":"前置詞", "topic":"preposicion", "note":"「〜の面前で」を表すante（delante deよりフォーマル）。" },
 { "before":"No puedo vivir ", "answer":"sin", "after":" mi teléfono.", "ja":"携帯なしでは生きていけない。", "label":"前置詞", "topic":"preposicion", "note":"「〜なしで」を表すsin。" },
 { "before":"Prefiero el café ", "answer":"con", "after":" leche.", "ja":"ミルク入りのコーヒーの方が好きだ。", "label":"前置詞", "topic":"preposicion", "note":"「〜と一緒に」を表すcon。" },
 { "before":"El regalo es ", "answer":"para", "after":" mi mamá.", "ja":"このプレゼントは私の母のためのものだ。", "label":"前置詞", "topic":"preposicion", "note":"受取人を表すpara。" },
 { "before":"Nos vemos ", "answer":"entre", "after":" semana, no el fin de semana.", "ja":"週末じゃなくて平日に会おうね。", "label":"前置詞", "topic":"preposicion", "note":"entre semana（平日に）は決まった表現。" },
 { "before":"El tesoro está enterrado ", "answer":"bajo", "after":" tierra.", "ja":"宝物は地下に埋まっている。", "label":"前置詞", "topic":"preposicion", "note":"bajo tierra（地下に）は決まった表現。" },
 { "before":"La reunión es ", "answer":"desde", "after":" las tres hasta las cinco.", "ja":"会議は3時から5時までだ。", "label":"前置詞", "topic":"preposicion", "note":"desde...hasta...（〜から〜まで）の組み合わせ。" },
 { "before":"Trabajamos ", "answer":"durante", "after":" toda la noche.", "ja":"一晩中働いた。", "label":"前置詞", "topic":"preposicion", "note":"期間を表すdurante。" },
 { "before":"El barco navega ", "answer":"hacia", "after":" la isla.", "ja":"船は島へ向かって航行している。", "label":"前置詞", "topic":"preposicion", "note":"方向を表すhacia。" },
 { "before":"No hay nada ", "answer":"sobre", "after":" la mesa.", "ja":"テーブルの上には何もない。", "label":"前置詞", "topic":"preposicion", "note":"「〜の上に」を表すsobre。" },
 { "before":"El equipo luchó ", "answer":"contra", "after":" viento y marea.", "ja":"チームはあらゆる困難に立ち向かった。", "label":"前置詞", "topic":"preposicion", "note":"contra viento y marea（あらゆる困難に逆らって）は決まった表現。" },
 { "before":"Firmó el documento ", "answer":"ante", "after":" un notario.", "ja":"公証人の前で書類に署名した。", "label":"前置詞", "topic":"preposicion", "note":"「〜の面前で」を表すante。" },
 { "before":"Puedes venir ", "answer":"con", "after":" tu familia.", "ja":"家族と一緒に来ていいよ。", "label":"前置詞", "topic":"preposicion", "note":"「〜と一緒に」を表すcon。" },
 { "before":"El parque está ", "answer":"entre", "after":" mi casa y la escuela.", "ja":"公園は私の家と学校の間にある。", "label":"前置詞", "topic":"preposicion", "note":"「〜の間に」を表すentre。" }
];

/* ---------- Listening / dictation items (2 blanks per sentence, ~100-140 chars) ---------- */
const LISTENING_ITEMS = [
  { segs:["Todos los días, mi madre se despierta muy ", " y prepara el ", " para toda la familia."],
    answers:["temprano","desayuno"], ja:"毎日、母はとても早く起きて、家族全員のために朝食を用意する。" },
  { segs:["El fin de semana pasado fuimos a la ", " y nadamos en el ", " toda la tarde."],
    answers:["playa","mar"], ja:"先週末、私たちはビーチに行って、午後じゅう海で泳いだ。" },
  { segs:["Cuando era ", ", vivía en un pueblo pequeño cerca de las ", "."],
    answers:["niño","montañas"], ja:"子供の頃、私は山の近くの小さな町に住んでいた。" },
  { segs:["Mi hermano trabaja en una ", " del centro y siempre llega ", " a casa."],
    answers:["oficina","tarde"], ja:"私の兄はダウンタウンのオフィスで働いていて、いつも遅く家に帰ってくる。" },
  { segs:["Ayer compré una ", " nueva porque la anterior ya estaba muy ", "."],
    answers:["camisa","vieja"], ja:"昨日、前のがもう古かったから新しいシャツを買った。" },
  { segs:["El próximo mes voy a ", " a México para visitar a mis ", "."],
    answers:["viajar","abuelos"], ja:"来月、祖父母を訪ねるためにメキシコへ旅行するつもりだ。" },
  { segs:["Necesito comprar ", " y ", " para hacer el pastel de cumpleaños."],
    answers:["leche","huevos"], ja:"誕生日ケーキを作るために牛乳と卵を買う必要がある。" },
  { segs:["Mi profesora dice que debo ", " más para hablar español con ", "."],
    answers:["practicar","fluidez"], ja:"先生は、流暢にスペイン語を話すためにもっと練習しなければならないと言う。" },
  { segs:["Después de la ", ", salió un hermoso ", " sobre la ciudad."],
    answers:["lluvia","arcoíris"], ja:"雨の後、街の上に美しい虹が出た。" },
  { segs:["El sábado por la noche, mis amigos y yo fuimos a ", " a una ", " muy divertida."],
    answers:["bailar","fiesta"], ja:"土曜の夜、友達と私はとても楽しいパーティーへ踊りに行った。" },
  { segs:["Mi abuelo siempre nos cuenta ", " interesantes sobre su ", "."],
    answers:["historias","juventud"], ja:"祖父はいつも若い頃についての面白い話をしてくれる。" },
  { segs:["Antes de dormir, me gusta leer un ", " o escuchar ", " tranquila."],
    answers:["libro","música"], ja:"寝る前に、本を読んだり静かな音楽を聴いたりするのが好きだ。" },
  { segs:["En la reunión de hoy, vamos a ", " el presupuesto y tomar una ", " importante."],
    answers:["revisar","decisión"], ja:"今日の会議では、予算を見直して重要な決断を下す予定だ。" },
  { segs:["Cada verano, mi familia y yo pasamos una ", " completa en la ", " de mis tíos."],
    answers:["semana","casa"], ja:"毎年夏、私と家族はおじ夫婦の家で丸一週間を過ごす。" },
  { segs:["El médico me recomendó dormir más y reducir el ", " para mejorar mi ", "."],
    answers:["estrés","salud"], ja:"医者は、健康を改善するためにもっと眠ってストレスを減らすよう勧めた。" },
  { segs:["Cada mañana, antes de ir al trabajo, reviso mis ", " electrónicos y tomo un ", " rápido."],
    answers:["correos","café"], ja:"毎朝、仕事に行く前にメールを確認して、急いでコーヒーを飲む。" },
  { segs:["El mes pasado, mi hermana se graduó de la ", " y toda la familia fue a la ", "."],
    answers:["universidad","ceremonia"], ja:"先月、私の姉は大学を卒業して、家族全員が式典に行った。" },
  { segs:["Durante las vacaciones, decidimos alquilar un ", " y recorrer varias ", " del país."],
    answers:["coche","ciudades"], ja:"休暇の間、私たちは車を借りて、国内のいくつかの都市を回ることにした。" },
  { segs:["Mi vecino siempre riega las ", " de su jardín muy temprano, incluso antes de que salga el ", "."],
    answers:["plantas","sol"], ja:"私の隣人はいつも、太陽が昇る前でさえ、庭の植物にとても早く水をやる。" },
  { segs:["Cuando llegamos al ", ", la recepcionista nos explicó las ", " del lugar amablemente."],
    answers:["hotel","reglas"], ja:"ホテルに着いたとき、受付係は親切にその場所のルールを説明してくれた。" },
];
