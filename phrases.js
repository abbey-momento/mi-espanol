const SCENARIOS = [
 {
  "icon": "☕",
  "title": "カフェで",
  "items": [
   {
    "es": "¿Qué va a tomar?",
    "ja": "何になさいますか？",
    "note": "tomarは『飲む』にも『食べる』にも使える万能動詞。comerと迷ったらtomarで通じることが多い",
    "grammar": "tomar（飲む・食べる）の直説法現在3人称単数の疑問形。ir aではなく単純現在で「今何を注文するか」を尋ねている。",
    "nuance": "カフェやバルで店員がお客に注文を尋ねる、接客の定番フレーズ。¿Qué quiere?よりも柔らかく自然な響き。",
    "similar": [
     {
      "es": "¿Qué le sirvo?",
      "ja": "何をお持ちしましょうか？"
     },
     {
      "es": "¿Qué va a pedir?",
      "ja": "何をご注文されますか？"
     }
    ],
    "en": "What will you have?"
   },
   {
    "es": "Un café americano, por favor.",
    "ja": "アメリカーノを一つください。",
    "note": "『americano』はエスプレッソにお湯を足したもの。ブラックコーヒーが欲しいときの定番",
    "grammar": "「品名 + por favor.」という動詞を使わない省略構文。日常会話で最も使われる注文の型。",
    "nuance": "シンプルながら丁寧さを保った言い方で、カフェでもレストランでも広く使える。",
    "similar": [
     {
      "es": "Quisiera un café americano.",
      "ja": "アメリカーノをお願いしたいのですが。（より丁寧）"
     },
     {
      "es": "Me da un café americano.",
      "ja": "アメリカーノをください。（カジュアル）"
     }
    ],
    "en": "An Americano, please."
   },
   {
    "es": "¿Con leche entera, deslactosada o de almendra?",
    "ja": "牛乳は普通のにしますか、乳糖不使用にしますか、アーモンドミルクにしますか？",
    "note": "deslactosada（乳糖不使用）がメニューに普通にあるのがメキシコらしいところ",
    "grammar": "con（〜で）を使って「どのミルクで」と手段・材料を尋ねる構文。o（または）で選択肢を並べている。",
    "nuance": "カフェでミルクの種類を細かく確認される、接客が丁寧な店でよく聞かれる質問。",
    "similar": [
     {
      "es": "¿Qué tipo de leche prefiere?",
      "ja": "どのタイプの牛乳がお好みですか？"
     },
     {
      "es": "¿Con qué leche lo quiere?",
      "ja": "どの牛乳になさいますか？"
     }
    ],
    "en": "With whole milk, lactose-free, or almond milk?"
   },
   {
    "es": "Con leche entera está bien.",
    "ja": "普通の牛乳で大丈夫です。",
    "note": "está bienは『大丈夫』の万能フレーズ。同意・OK・妥協、どれにも使える",
    "grammar": "「con + 名詞 + está bien」で「〜で大丈夫です」と選択に同意する構文。estar bienは「問題ない」というニュアンス。",
    "nuance": "特にこだわりがないときに使う、柔らかい同意の返し方。",
    "similar": [
     {
      "es": "Con leche entera, por favor.",
      "ja": "普通の牛乳でお願いします。"
     },
     {
      "es": "Cualquiera está bien.",
      "ja": "どれでも大丈夫です。"
     }
    ],
    "en": "Whole milk is fine."
   },
   {
    "es": "¿Para tomar aquí o para llevar?",
    "ja": "店内でお召し上がりですか、お持ち帰りですか？",
    "note": "para aquí／para llevarはどんな飲食店でも通じる二択の鉄板",
    "grammar": "「para + 不定詞」で目的を表す構文。tomar aquí（ここで飲む）とllevar（持っていく）を対比させている。",
    "nuance": "カフェやファストフード店でほぼ必ず聞かれる定番の質問。",
    "similar": [
     {
      "es": "¿Es para aquí o para llevar?",
      "ja": "店内ですか、お持ち帰りですか？"
     },
     {
      "es": "¿Lo va a tomar aquí?",
      "ja": "こちらでお召し上がりになりますか？"
     }
    ],
    "en": "For here or to go?"
   },
   {
    "es": "Para llevar, por favor.",
    "ja": "持ち帰りでお願いします。",
    "note": "para llevarは『持ち帰り』全般に使える。テイクアウトの箱にもこの字が書いてある",
    "grammar": "「para + 動詞」の名詞的用法。para llevarで「持ち帰り用に」という意味の定型句。",
    "nuance": "テイクアウトを希望するときの最も一般的な言い方。",
    "similar": [
     {
      "es": "Es para llevar.",
      "ja": "持ち帰りです。"
     },
     {
      "es": "Para llevar, gracias.",
      "ja": "持ち帰りでお願いします。"
     }
    ],
    "en": "To go, please."
   },
   {
    "es": "¿De qué tamaño lo quiere?",
    "ja": "サイズはどうしますか？",
    "note": "loは前の名詞（café）を指す代名詞。省略された主語を推測する練習になる一文",
    "grammar": "「de qué tamaño」で「どのサイズの」と尋ねる疑問表現。loは前に出てきた飲み物を指す目的格代名詞。",
    "nuance": "サイズ展開のあるカフェでよく使われる接客表現。",
    "similar": [
     {
      "es": "¿Qué tamaño desea?",
      "ja": "どちらのサイズになさいますか？"
     },
     {
      "es": "¿Chico, mediano o grande?",
      "ja": "小、中、大のどれにしますか？"
     }
    ],
    "en": "What size would you like?"
   },
   {
    "es": "El chico/mediano/grande, por favor.",
    "ja": "小/中/大でお願いします。",
    "note": "chico/mediano/grandeはメキシコの標準サイズ表記。スタバ英語式より通じやすい",
    "grammar": "定冠詞elをつけて特定のサイズを選ぶ言い方。chico/mediano/grandeはメキシコで一般的なサイズ表現。",
    "nuance": "サイズを端的に答えるシンプルな返し方。",
    "similar": [
     {
      "es": "El mediano, por favor.",
      "ja": "中でお願いします。"
     },
     {
      "es": "Grande, gracias.",
      "ja": "大でお願いします。"
     }
    ],
    "en": "Small/medium/large, please."
   },
   {
    "es": "¿Le pongo azúcar?",
    "ja": "お砂糖入れますか？",
    "note": "ponerは『置く』だけでなく『加える』の意味でもよく使われる",
    "grammar": "poner（入れる）の直説法現在1人称単数の疑問形。leは間接目的語（あなたに）。",
    "nuance": "店員がお客の好みを確認するときの丁寧な言い方。",
    "similar": [
     {
      "es": "¿Quiere azúcar?",
      "ja": "砂糖はいりますか？"
     },
     {
      "es": "¿Le agrego azúcar?",
      "ja": "砂糖を加えましょうか？"
     }
    ],
    "en": "Should I add sugar?"
   },
   {
    "es": "Sin azúcar, gracias.",
    "ja": "砂糖なしでお願いします。",
    "note": "sin + 名詞は万能の『抜き』表現。sin hielo、sin sal、何にでも使える",
    "grammar": "前置詞sin（〜なしで）+ 名詞のシンプルな構文。動詞なしで完結する。",
    "nuance": "何かを断るときの基本パターンで、他の場面（sin hielo, sin cebollaなど）にも応用できる。",
    "similar": [
     {
      "es": "Sin azúcar, por favor.",
      "ja": "砂糖なしでお願いします。"
     },
     {
      "es": "No le pongo azúcar, gracias.",
      "ja": "砂糖は入れなくて大丈夫です。"
     }
    ],
    "en": "No sugar, thanks."
   },
   {
    "es": "¿Tiene leche de almendra?",
    "ja": "アーモンドミルクはありますか？",
    "note": "植物性ミルクの需要はメキシコでも増えていて、大体のカフェで通じる質問",
    "grammar": "tener（持つ）のusted形tiene。「お店に〜はありますか？」と尋ねるときの定番の型です。",
    "nuance": "直訳は「あなたは持っていますか？」ですが、お店に対して「在庫がありますか」と尋ねる自然な言い方です。¿Hay...?（〜はありますか）で聞くこともできます。",
    "similar": [
     {
      "es": "¿Hay leche de almendra?",
      "ja": "アーモンドミルクありますか？（より一般的な聞き方）"
     }
    ],
    "en": "Do you have almond milk?"
   },
   {
    "es": "Sin azúcar, por favor.",
    "ja": "砂糖なしでお願いします。",
    "note": "graciasよりpor favorの方が『依頼』のニュアンスが少し強い",
    "grammar": "sin + 名詞 + por favorで、gracias.より少し丁寧な依頼のニュアンスになる。",
    "nuance": "9番と似た表現だが、por favorを使うことで依頼のニュアンスが強まる。",
    "similar": [
     {
      "es": "Sin azúcar, gracias.",
      "ja": "砂糖なしでお願いします。"
     },
     {
      "es": "No le ponga azúcar, por favor.",
      "ja": "砂糖を入れないでください。"
     }
    ],
    "en": "No sugar, please."
   },
   {
    "es": "¿Cuál es su especialidad de la casa?",
    "ja": "このお店のおすすめは何ですか？",
    "note": "『de la casa』は『お店の』を表す定番表現。料理名の後によく付く",
    "grammar": "especialidad de la casa（お店の名物・自慢料理）という定型フレーズ。cuálは「どれ」を尋ねる疑問詞。",
    "nuance": "その店ならではの一品を尋ねる、少し通っぽい聞き方。",
    "similar": [
     {
      "es": "¿Qué me recomienda?",
      "ja": "何かおすすめはありますか？"
     },
     {
      "es": "¿Cuál es su plato estrella?",
      "ja": "一番人気のメニューは何ですか？"
     }
    ],
    "en": "What's your house specialty?"
   },
   {
    "es": "¿Tienen wifi?",
    "ja": "Wi-Fiはありますか？",
    "note": "wifiはスペイン語でも発音そのまま『ウィフィ』でOK",
    "grammar": "tener（持つ）の直説法現在3人称複数の疑問形。「お店として」を意味する複数形が使われる。",
    "nuance": "カフェで作業や勉強をしたいときによく使う実用的な質問。",
    "similar": [
     {
      "es": "¿Hay wifi aquí?",
      "ja": "ここにWi-Fiはありますか？"
     },
     {
      "es": "¿Cuál es la contraseña del wifi?",
      "ja": "Wi-Fiのパスワードは何ですか？"
     }
    ],
    "en": "Do you have wifi?"
   },
   {
    "es": "¿Me puede recalentar esto?",
    "ja": "これ温め直してもらえますか？",
    "note": "re-は『再び』の接頭辞。calentar（温める）＋re＝温め直す、と覚えると応用が効く",
    "grammar": "poder + 不定詞で丁寧な依頼を表す構文。recalentar（温め直す）はcalentar（温める）にre-（再び）がついた形。",
    "nuance": "少し冷めてしまった飲食物を温め直してほしいときに使う丁寧な依頼表現。",
    "similar": [
     {
      "es": "¿Me lo puede calentar un poco?",
      "ja": "少し温めてもらえますか？"
     },
     {
      "es": "¿Podría recalentarlo, por favor?",
      "ja": "温め直していただけますか？（より丁寧）"
     }
    ],
    "en": "Could you reheat this for me?"
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
    "note": "『para + 数字』は「〜人用」の型。ホテルやタクシーでも同じ型を使い回せる",
    "grammar": "「mesa para + 数字」で「〜人用のテーブル」を表す。入店時に人数を伝える基本パターン。",
    "nuance": "レストラン入口で最初にかける、席を案内してもらうための定番フレーズ。",
    "similar": [
     {
      "es": "¿Tiene mesa para dos?",
      "ja": "2名用の席はありますか？"
     },
     {
      "es": "Somos dos personas.",
      "ja": "2人です。"
     }
    ],
    "en": "A table for two, please."
   },
   {
    "es": "¿Ya sabe qué va a ordenar?",
    "ja": "ご注文はお決まりですか？",
    "note": "yaは『もう』。準備ができたか確認するときの定番の切り出し",
    "grammar": "ya（もう）+ saber（知っている）+ qué va a ordenar（何を注文するか）。ir a + 不定詞で近接未来を表す間接疑問文。",
    "nuance": "店員が注文を取りに来たときの丁寧な聞き方。",
    "similar": [
     {
      "es": "¿Qué va a ordenar?",
      "ja": "何をご注文なさいますか？"
     },
     {
      "es": "¿Está listo/a para ordenar?",
      "ja": "ご注文の準備はよろしいですか？"
     }
    ],
    "en": "Do you know what you'd like to order?"
   },
   {
    "es": "¿Me puede traer la carta/el menú?",
    "ja": "メニューをいただけますか？",
    "note": "cartaとmenúはほぼ同義。地域によって使う方が違うだけ",
    "grammar": "poder + 不定詞の丁寧な依頼構文。meは間接目的語（私に）。cartaとmenúはどちらも「メニュー」を指す同義語。",
    "nuance": "着席後、まだメニューが渡されていないときに使う依頼表現。",
    "similar": [
     {
      "es": "¿Me da el menú, por favor?",
      "ja": "メニューをいただけますか？"
     },
     {
      "es": "¿Podría ver la carta?",
      "ja": "メニューを見せていただけますか？"
     }
    ],
    "en": "Could you bring me the menu?"
   },
   {
    "es": "¿Qué me recomienda?",
    "ja": "何かおすすめはありますか？",
    "note": "レストランでもタクシーでも『何かおすすめは』と聞ける汎用フレーズ",
    "grammar": "recomendar（勧める）の直説法現在3人称単数の疑問形。meは間接目的語。",
    "nuance": "メニューに迷ったときに店員に相談する、カジュアルながら丁寧な聞き方。",
    "similar": [
     {
      "es": "¿Cuál es su especialidad?",
      "ja": "お店のおすすめは何ですか？"
     },
     {
      "es": "¿Qué me sugiere?",
      "ja": "何かおすすめはありますか？"
     }
    ],
    "en": "What do you recommend?"
   },
   {
    "es": "Para mí, este.",
    "ja": "私はこれにします。",
    "note": "メニューを指差しながら言えば、単語を知らなくても注文できる裏技フレーズ",
    "grammar": "「Para mí, + 名詞」で「私には〜を」と省略して注文する構文。動詞quieroなどを省いた口語的な言い方。",
    "nuance": "指を差しながら注文できる、メニューの読み方が分からなくても使える便利な表現。",
    "similar": [
     {
      "es": "Yo quiero este.",
      "ja": "私はこれが欲しいです。"
     },
     {
      "es": "Para mí, lo mismo.",
      "ja": "私も同じもので。"
     }
    ],
    "en": "I'll have this."
   },
   {
    "es": "¿Está picante este platillo?",
    "ja": "この料理は辛いですか？",
    "note": "メキシコ料理は『辛くない』と言われても辛いことがあるので聞いておいて損はない",
    "grammar": "estar + picante（辛い）の疑問形。estarは一時的な状態、性質としての辛さを表す。",
    "nuance": "辛いものが苦手な人が注文前に必ず確認したい質問。",
    "similar": [
     {
      "es": "¿Qué tan picante es esto?",
      "ja": "これはどれくらい辛いですか？"
     },
     {
      "es": "¿Tiene mucho chile?",
      "ja": "唐辛子はたくさん入っていますか？"
     }
    ],
    "en": "Is this dish spicy?"
   },
   {
    "es": "Sin cilantro, por favor.",
    "ja": "パクチー抜きでお願いします。",
    "note": "パクチー（cilantro）はメキシコ料理に本当によく入るので、苦手なら覚えておくと安心",
    "grammar": "sin + 名詞のシンプルな除外表現。他の食材にも応用できる汎用パターン。",
    "nuance": "メキシコ料理にはパクチーが多用されるため、苦手な人に便利な一言。",
    "similar": [
     {
      "es": "Sin cebolla, por favor.",
      "ja": "玉ねぎ抜きでお願いします。"
     },
     {
      "es": "¿Le pueden quitar el cilantro?",
      "ja": "パクチーを抜いてもらえますか？"
     }
    ],
    "en": "No cilantro, please."
   },
   {
    "es": "La cuenta, por favor.",
    "ja": "お会計お願いします。",
    "note": "指で空中に何か書くジェスチャーをしながら言うと、遠くの店員にも伝わりやすい",
    "grammar": "定冠詞la + cuenta（会計・伝票）+ por favor。動詞を使わない最も簡潔な依頼表現。",
    "nuance": "食事を終えたときに店員を呼んで使う定番の一言。",
    "similar": [
     {
      "es": "¿Me trae la cuenta?",
      "ja": "お会計を持ってきてもらえますか？"
     },
     {
      "es": "La cuenta, cuando pueda.",
      "ja": "手が空いたらお会計をお願いします。"
     }
    ],
    "en": "The check, please."
   },
   {
    "es": "¿La cuenta junta o por separado?",
    "ja": "お会計は一緒にしますか、別々にしますか？",
    "note": "友人・同僚との食事で必ず聞かれる質問。答えを用意しておくとスムーズ",
    "grammar": "junta（一緒に）とpor separado（別々に）を対比させる疑問文。juntaはjunto/juntaの女性形でcuentaに一致。",
    "nuance": "複数人での食事の際、店員が確認する定番の質問。",
    "similar": [
     {
      "es": "¿Pagan todo junto?",
      "ja": "まとめてお支払いされますか？"
     },
     {
      "es": "¿Cada quién paga lo suyo?",
      "ja": "それぞれ自分の分を払いますか？"
     }
    ],
    "en": "The check together or separate?"
   },
   {
    "es": "Por separado, por favor.",
    "ja": "別々でお願いします。",
    "note": "por separadoは『別々に』の万能表現。会計以外の場面でも使える",
    "grammar": "por separado（別々に）という副詞句のみで構成される簡潔な返答。",
    "nuance": "8番の質問に対する典型的な返答パターン。",
    "similar": [
     {
      "es": "Cada quien paga lo suyo.",
      "ja": "それぞれ自分の分を払います。"
     },
     {
      "es": "Sepárela, por favor.",
      "ja": "別にしてください。"
     }
    ],
    "en": "Separate, please."
   },
   {
    "es": "¿Aceptan tarjeta?",
    "ja": "カードは使えますか？",
    "note": "小さな食堂や屋台は現金のみのことも多いので、入店前に確認すると安心",
    "grammar": "aceptar（受け付ける）の直説法現在3人称複数の疑問形。「お店として」を意味する複数形。",
    "nuance": "小さな食堂などでは現金のみのこともあるため、事前確認によく使う。",
    "similar": [
     {
      "es": "¿Puedo pagar con tarjeta?",
      "ja": "カードで払えますか？"
     },
     {
      "es": "¿Solo aceptan efectivo?",
      "ja": "現金のみですか？"
     }
    ],
    "en": "Do you accept cards?"
   },
   {
    "es": "Soy alérgico/a a los cacahuates.",
    "ja": "私はピーナッツアレルギーです。",
    "note": "cacahuate（ピーナッツ）を他の食材名に入れ替えれば、どんなアレルギーにも応用可能",
    "grammar": "ser alérgico/a a + 名詞で「〜にアレルギーがある」を表す定型構文。alérgico/aは主語の性別で変化。",
    "nuance": "食物アレルギーを伝える、安全のために欠かせない重要な表現。",
    "similar": [
     {
      "es": "Tengo alergia a los mariscos.",
      "ja": "甲殻類アレルギーがあります。"
     },
     {
      "es": "No puedo comer gluten.",
      "ja": "グルテンを食べられません。"
     }
    ],
    "en": "I'm allergic to peanuts."
   },
   {
    "es": "¿Este platillo tiene nueces o lácteos?",
    "ja": "この料理にナッツや乳製品は入っていますか？",
    "note": "nueces（ナッツ類）とlácteos（乳製品）はアレルギー確認で頻出の2大キーワード",
    "grammar": "tener（持つ・含む）の直説法現在3人称単数の疑問形。o（または）で複数の食材を並べて確認する。",
    "nuance": "特定の食材が含まれているか具体的に確認したいときの表現。",
    "similar": [
     {
      "es": "¿Lleva algún tipo de nuez?",
      "ja": "何かナッツ類は入っていますか？"
     },
     {
      "es": "¿Contiene lácteos?",
      "ja": "乳製品は含まれていますか？"
     }
    ],
    "en": "Does this dish have nuts or dairy?"
   },
   {
    "es": "¿Tienen opciones vegetarianas/veganas?",
    "ja": "ベジタリアン/ヴィーガン向けのメニューはありますか？",
    "note": "近年メキシコシティを中心にvegano対応の店が急増中",
    "grammar": "tener（持つ）の直説法現在3人称複数の疑問形。opciones（選択肢）を目的語に取る。",
    "nuance": "食の制限がある人がメニュー選びの前に確認する実用的な質問。",
    "similar": [
     {
      "es": "¿Hay algo sin carne?",
      "ja": "お肉の入っていないものはありますか？"
     },
     {
      "es": "¿Tienen platillos veganos?",
      "ja": "ヴィーガン料理はありますか？"
     }
    ],
    "en": "Do you have vegetarian/vegan options?"
   },
   {
    "es": "¿La propina está incluida?",
    "ja": "チップは含まれていますか？",
    "note": "メキシコでは通常チップは別。団体客だとservicioとして自動加算されることもある",
    "grammar": "estar incluida（含まれている）の受動的な状態を表す表現。propinaは女性名詞なのでincluidaと性が一致。",
    "nuance": "チップ文化の有無を確認する、旅行者にとって特に重要な質問。",
    "similar": [
     {
      "es": "¿El servicio está incluido?",
      "ja": "サービス料は含まれていますか？"
     },
     {
      "es": "¿Tengo que dejar propina aparte?",
      "ja": "チップは別に置く必要がありますか？"
     }
    ],
    "en": "Is the tip included?"
   },
   {
    "es": "¿El servicio ya está incluido en la cuenta?",
    "ja": "サービス料はもう会計に含まれていますか？",
    "note": "propina（任意のチップ）とservicio（自動加算のサービス料）は別物と覚えておくと会計で迷わない",
    "grammar": "ya（すでに）+ estar incluido en（〜に含まれている）。en la cuentaで「会計の中に」を明示。",
    "nuance": "特に団体客の場合、自動でサービス料が加算されることがあるための確認表現。",
    "similar": [
     {
      "es": "¿Ya trae el servicio?",
      "ja": "サービス料はもう入っていますか？"
     },
     {
      "es": "¿Cobran cargo por servicio?",
      "ja": "サービス料は取られますか？"
     }
    ],
    "en": "Is the service charge already included in the bill?"
   },
   {
    "es": "¿Cuánto se deja de propina normalmente?",
    "ja": "普通どれくらいチップを渡すものですか？",
    "note": "目安は10〜15%。良いサービスなら15〜20%も珍しくない",
    "grammar": "se deja（置かれる）という再帰受身の表現。normalmente（普通は）で一般的な習慣を尋ねている。",
    "nuance": "現地の慣習が分からない旅行者が地元の人や店員に尋ねる自然な聞き方。",
    "similar": [
     {
      "es": "¿Cuánto es lo normal de propina?",
      "ja": "チップの相場はどれくらいですか？"
     },
     {
      "es": "¿Qué porcentaje se acostumbra dejar?",
      "ja": "だいたい何パーセント渡すのが普通ですか？"
     }
    ],
    "en": "How much do people usually tip?"
   },
   {
    "es": "Le voy a dejar la propina en efectivo.",
    "ja": "チップは現金で置いていきます。",
    "note": "カード払いでもチップだけ現金で、というのはメキシコでもよくある習慣",
    "grammar": "ir a + 不定詞の近接未来。leは間接目的語（店員に）、en efectivo（現金で）が手段を表す。",
    "nuance": "カード払いでもチップだけ現金で渡したいときに使う表現。",
    "similar": [
     {
      "es": "Voy a dejar propina en efectivo.",
      "ja": "チップは現金で置いていきます。"
     },
     {
      "es": "¿Puedo dejar la propina aparte, en efectivo?",
      "ja": "チップだけ現金で別にしてもいいですか？"
     }
    ],
    "en": "I'll leave the tip in cash."
   },
   {
    "es": "Estuvo muy rico, gracias.",
    "ja": "とても美味しかったです、ありがとうございます。",
    "note": "『rico』は『金持ち』だけでなく『美味しい』の意味でも大活躍する形容詞",
    "grammar": "estuvo（estarの点過去3人称単数）で「食事の間、美味しかった」という完了した状態を表す。ricoは「美味しい」の口語的な言い方。",
    "nuance": "会計時やお店を出るときに、店員やシェフへの感謝を伝える気持ちのいい一言。",
    "similar": [
     {
      "es": "Todo estuvo delicioso.",
      "ja": "全部美味しかったです。"
     },
     {
      "es": "Nos encantó la comida.",
      "ja": "料理がとても気に入りました。"
     }
    ],
    "en": "It was delicious, thank you."
   },
   {
    "es": "¿Me puede traer la cuenta, por favor?",
    "ja": "お会計を持ってきてもらえますか？",
    "grammar": "poder（できる）の現在形puedeを使った丁寧な依頼表現。「¿Me puede + 不定詞?」の形は「〜していただけますか？」という、店員などに対するフォーマルな依頼でよく使う型です。",
    "nuance": "usted（あなた）に対する丁寧な言い方なので、レストランやお店で店員に話しかけるときにぴったりです。友人同士ならもっとカジュアルに「¿Me traes la cuenta?」でも通じます。",
    "similar": [
     {
      "es": "¿Nos trae la cuenta, por favor?",
      "ja": "（複数人で）お会計持ってきてもらえますか？"
     },
     {
      "es": "La cuenta, por favor.",
      "ja": "お会計お願いします（より簡潔）"
     }
    ],
    "note": "7番のシンプル版に丁寧な依頼の形を足しただけ。状況に応じて使い分けを",
    "en": "Could you bring me the check, please?"
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
    "note": "¿Dónde está...?は単数、¿Dónde están...?は複数。verdurasは複数形だからestánになる",
    "grammar": "estar（一時的な所在）の直説法現在3人称複数の疑問形。dóndeで場所を尋ねる基本構文。",
    "nuance": "スーパーで特定の売り場を探すときの、最もシンプルで実用的な聞き方。",
    "similar": [
     {
      "es": "¿En qué pasillo están las verduras?",
      "ja": "野菜は何番の通路にありますか？"
     },
     {
      "es": "¿Dónde puedo encontrar las verduras?",
      "ja": "野菜はどこで見つけられますか？"
     }
    ],
    "en": "Where are the vegetables?"
   },
   {
    "es": "¿Tiene esto en otro color/talla?",
    "ja": "これの他の色/サイズはありますか？",
    "note": "『otro + 名詞』で『別の〜』全般に応用できる便利な型",
    "grammar": "tener（持つ・在庫がある）の直説法現在3人称単数の疑問形。en otro color/tallaで「別の色/サイズで」を表す。",
    "nuance": "衣料品店などで欲しい商品の色違い・サイズ違いを尋ねるときの表現。",
    "similar": [
     {
      "es": "¿Lo tiene en otra talla?",
      "ja": "別のサイズはありますか？"
     },
     {
      "es": "¿Hay otros colores disponibles?",
      "ja": "他に使える色はありますか？"
     }
    ],
    "en": "Do you have this in another color/size?"
   },
   {
    "es": "¿Me lo puedo probar?",
    "ja": "試着してもいいですか？",
    "note": "probarseは『試着する』。probar（試す）に再帰のseがつくだけと覚えると楽",
    "grammar": "poder + 不定詞の許可を求める構文。probarse（試着する）の再帰動詞がme + probarの形になっている。",
    "nuance": "衣料品店で試着室を使いたいときの確認表現。",
    "similar": [
     {
      "es": "¿Puedo probarme esto?",
      "ja": "これを試着してもいいですか？"
     },
     {
      "es": "¿Dónde están los probadores?",
      "ja": "試着室はどこですか？"
     }
    ],
    "en": "Can I try it on?"
   },
   {
    "es": "¿Necesita bolsa?",
    "ja": "袋は必要ですか？",
    "note": "メキシコではエコバッグ持参が一般化していて、この質問自体がだんだん減ってきている",
    "grammar": "necesitar（必要とする）の直説法現在3人称単数の疑問形。ustedに対する丁寧な聞き方。",
    "nuance": "レジで店員がエコバッグ持参かどうか確認する定番の質問。",
    "similar": [
     {
      "es": "¿Quiere una bolsa?",
      "ja": "袋はいりますか？"
     },
     {
      "es": "¿Le doy bolsa?",
      "ja": "袋をお付けしましょうか？"
     }
    ],
    "en": "Do you need a bag?"
   },
   {
    "es": "No, gracias, traigo mi propia bolsa.",
    "ja": "いいえ、大丈夫です、自分の袋を持ってきました。",
    "note": "propiaは『自分自身の』を強調する形容詞。所有格miだけより気持ちが伝わる",
    "grammar": "traer（持ってくる）の直説法現在1人称単数。propia（自分自身の）でmi bolsaを強調している。",
    "nuance": "エコバッグ持参を伝える、環境意識の高いメキシコでよく使う返答。",
    "similar": [
     {
      "es": "Ya tengo bolsa, gracias.",
      "ja": "もう袋を持っています、ありがとう。"
     },
     {
      "es": "No hace falta, traje la mía.",
      "ja": "大丈夫です、自分のを持ってきました。"
     }
    ],
    "en": "No thanks, I brought my own bag."
   },
   {
    "es": "¿Cuánto cuesta esto?",
    "ja": "これはいくらですか？",
    "note": "costarは主語が『もの』になる動詞。『私が払う』ではなく『それが値段を持つ』という発想",
    "grammar": "costar（値段がかかる）の直説法現在3人称単数の疑問形。cuántoは金額を尋ねる疑問詞。",
    "nuance": "値札が見当たらないときなどに使う、最も基本的な値段の聞き方。",
    "similar": [
     {
      "es": "¿Cuánto vale esto?",
      "ja": "これはいくらしますか？"
     },
     {
      "es": "¿Qué precio tiene esto?",
      "ja": "これの値段はいくらですか？"
     }
    ],
    "en": "How much is this?"
   },
   {
    "es": "¿Tiene algo más barato?",
    "ja": "もっと安いものはありますか？",
    "note": "más + 形容詞で比較級。baratoの反対はcaro（高い）、セットで覚えると便利",
    "grammar": "más barato（比較級「もっと安い」）+ algo（何か）の組み合わせ。baratoの比較級。",
    "nuance": "予算に合わせて別の選択肢を探したいときに使う表現。",
    "similar": [
     {
      "es": "¿No tiene algo más económico?",
      "ja": "もっとお手頃なものはありませんか？"
     },
     {
      "es": "¿Hay una opción más barata?",
      "ja": "もっと安い選択肢はありますか？"
     }
    ],
    "en": "Do you have something cheaper?"
   },
   {
    "es": "¿Puedo pagar con tarjeta?",
    "ja": "カードで払えますか？",
    "note": "conは『〜を使って』の意味でも頻出。手段を表すconは覚えておくと表現の幅が広がる",
    "grammar": "poder + 不定詞。con tarjeta（カードで）が支払い手段を表す前置詞句。",
    "nuance": "小さな店では現金のみのこともあるため、支払い方法を事前に確認する表現。",
    "similar": [
     {
      "es": "¿Aceptan tarjeta de crédito?",
      "ja": "クレジットカードは使えますか？"
     },
     {
      "es": "¿Se puede pagar con tarjeta?",
      "ja": "カードで支払いできますか？"
     }
    ],
    "en": "Can I pay by card?"
   },
   {
    "es": "¿Me da un recibo, por favor?",
    "ja": "レシートをいただけますか？",
    "note": "reciboはレシート、facturaは正式な請求書。経費精算にはfacturaが必要なことも",
    "grammar": "dar（与える）の直説法現在3人称単数の疑問形。meは間接目的語（私に）。",
    "nuance": "経費精算や返品のためにレシートが必要なときに使う表現。",
    "similar": [
     {
      "es": "¿Me puede dar el ticket?",
      "ja": "レシートをもらえますか？"
     },
     {
      "es": "¿Tiene recibo?",
      "ja": "領収書はありますか？"
     }
    ],
    "en": "Could I have a receipt, please?"
   },
   {
    "es": "¿Dónde están las bolsas para la fruta?",
    "ja": "果物用の袋はどこにありますか？",
    "note": "青果コーナーの薄い袋、実はメキシコでは店によって場所がバラバラで探しがち",
    "grammar": "estar（所在）の直説法現在3人称複数疑問形。para la frutaで「果物のための」と用途を明示。",
    "nuance": "青果コーナーで量り売り用の袋を探すときに使う実用的な表現。",
    "similar": [
     {
      "es": "¿Hay bolsitas para las verduras?",
      "ja": "野菜用の小袋はありますか？"
     },
     {
      "es": "¿Dónde puedo conseguir una bolsa para esto?",
      "ja": "これ用の袋はどこでもらえますか？"
     }
    ],
    "en": "Where are the bags for fruit?"
   },
   {
    "es": "¿Tienen productos sin gluten?",
    "ja": "グルテンフリーの商品はありますか？",
    "note": "sin glutenの表示は『Libre de gluten』とパッケージに書かれてることが多い",
    "grammar": "tener（持つ）の直説法現在3人称複数疑問形。sin gluten（グルテン抜き）が形容詞的にproductosを修飾。",
    "nuance": "食事制限がある人が売り場を探す前に確認する表現。",
    "similar": [
     {
      "es": "¿Dónde están los productos sin gluten?",
      "ja": "グルテンフリー商品はどこにありますか？"
     },
     {
      "es": "¿Tienen alguna sección libre de gluten?",
      "ja": "グルテンフリーのコーナーはありますか？"
     }
    ],
    "en": "Do you have gluten-free products?"
   },
   {
    "es": "¿Está en oferta esto?",
    "ja": "これはセール中ですか？",
    "note": "ofertaは『セール』、rebaja（値引き）と合わせて値札でよく見る単語",
    "grammar": "estar en oferta（セール中である）という定型句。estarは一時的な状態を表す。",
    "nuance": "値札が分かりにくいときや、割引の有無を確認したいときの表現。",
    "similar": [
     {
      "es": "¿Esto tiene descuento?",
      "ja": "これは割引されていますか？"
     },
     {
      "es": "¿Está de rebaja?",
      "ja": "値引き中ですか？"
     }
    ],
    "en": "Is this on sale?"
   },
   {
    "es": "¿Aceptan puntos de la tarjeta de lealtad?",
    "ja": "ポイントカードは使えますか？",
    "note": "『lealtad』は『忠誠』。ポイントカード＝『忠誠心のカード』という発想が面白い",
    "grammar": "aceptar（受け付ける）の直説法現在3人称複数疑問形。tarjeta de lealtad（会員カード・ポイントカード）。",
    "nuance": "会員特典やポイントを使いたいときにレジで確認する表現。",
    "similar": [
     {
      "es": "¿Tienen programa de puntos?",
      "ja": "ポイント制度はありますか？"
     },
     {
      "es": "¿Puedo usar mis puntos aquí?",
      "ja": "ここでポイントは使えますか？"
     }
    ],
    "en": "Do you accept loyalty card points?"
   },
   {
    "es": "¿Me puede dar una bolsa más grande?",
    "ja": "もっと大きい袋もらえますか？",
    "note": "más grandeで『もっと大きい』。この型はサイズ交渉全般に使い回せる",
    "grammar": "poder + 不定詞の丁寧な依頼構文。más grande（比較級「もっと大きい」）がbolsaを修飾。",
    "nuance": "荷物が多くて袋のサイズが足りないときに使う依頼表現。",
    "similar": [
     {
      "es": "¿Tiene bolsas más grandes?",
      "ja": "もっと大きい袋はありますか？"
     },
     {
      "es": "Necesito una bolsa más grande, por favor.",
      "ja": "もっと大きい袋が必要です。"
     }
    ],
    "en": "Could you give me a bigger bag?"
   },
   {
    "es": "Se me olvidó mi bolsa reutilizable.",
    "ja": "マイバッグを忘れちゃいました。",
    "note": "se me olvidóは『うっかり忘れた』の定番構文。自分のせいじゃない感が出せる",
    "grammar": "se me olvidó（忘れてしまった）という無意志の再帰動詞構文。olvidarを主語ではなく間接目的語meで表す、スペイン語特有の言い方。",
    "nuance": "うっかり忘れてしまったことを伝える、自分の責任を軽くするニュアンスのある表現。",
    "similar": [
     {
      "es": "Olvidé mi bolsa en casa.",
      "ja": "袋を家に忘れました。"
     },
     {
      "es": "No traje bolsa esta vez.",
      "ja": "今回は袋を持ってきませんでした。"
     }
    ],
    "en": "I forgot my reusable bag."
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
    "note": "『a nombre de + 名前』は予約・宅配・病院の受付など、あらゆる場面で使う型",
    "grammar": "tener（持つ）+ a nombre de（〜の名前で）という所有・帰属を表す前置詞句。",
    "nuance": "チェックイン時に自分の予約を伝える、最も基本的な言い方。",
    "similar": [
     {
      "es": "Tengo una reserva bajo el nombre de...",
      "ja": "〜の名前で予約があります。"
     },
     {
      "es": "Hice una reservación en línea.",
      "ja": "オンラインで予約しました。"
     }
    ],
    "en": "I have a reservation under the name..."
   },
   {
    "es": "¿A qué hora es el check-in/check-out?",
    "ja": "チェックイン/チェックアウトは何時ですか？",
    "note": "check-in/check-outはスペイン語でもそのまま英語由来の単語として通じる",
    "grammar": "ser（〜である）の直説法現在3人称単数疑問形。a qué horaで時刻を尋ねる基本表現。",
    "nuance": "到着前や滞在中に時間を確認しておきたいときの表現。",
    "similar": [
     {
      "es": "¿Hasta qué hora puedo hacer check-out?",
      "ja": "チェックアウトは何時までできますか？"
     },
     {
      "es": "¿A partir de qué hora puedo entrar a mi habitación?",
      "ja": "何時から部屋に入れますか？"
     }
    ],
    "en": "What time is check-in/check-out?"
   },
   {
    "es": "¿El desayuno está incluido?",
    "ja": "朝食は含まれていますか？",
    "note": "incluidoは『含まれる』。旅行中、値段交渉やプラン確認で頻出する形容詞",
    "grammar": "estar incluido（含まれている）という受動的状態を表す表現。desayuno（男性名詞）にincluidoが性一致。",
    "nuance": "宿泊料金に朝食が含まれるかを予約時・チェックイン時に確認する表現。",
    "similar": [
     {
      "es": "¿El desayuno viene con la habitación?",
      "ja": "朝食は部屋代に含まれていますか？"
     },
     {
      "es": "¿Tengo que pagar el desayuno aparte?",
      "ja": "朝食は別料金ですか？"
     }
    ],
    "en": "Is breakfast included?"
   },
   {
    "es": "¿Tienen wifi? ¿Cuál es la contraseña?",
    "ja": "Wi-Fiはありますか？パスワードは何ですか？",
    "note": "contraseñaは『パスワード』。銀行やアプリの設定でも出てくる重要単語",
    "grammar": "tener（持つ）の疑問形に続けて、cuál（どれ・何）でcontraseña（パスワード）を尋ねる2文構成。",
    "nuance": "チェックイン時にほぼ必ず確認する実用的な質問。",
    "similar": [
     {
      "es": "¿Cuál es la clave del wifi?",
      "ja": "Wi-Fiの暗証番号は何ですか？"
     },
     {
      "es": "¿Hay internet en la habitación?",
      "ja": "部屋にインターネットはありますか？"
     }
    ],
    "en": "Do you have wifi? What's the password?"
   },
   {
    "es": "¿Me pueden dar otra almohada/toalla?",
    "ja": "枕/タオルをもう一枚もらえますか？",
    "note": "otraは『もう一つの』。数を増やしてほしいときの依頼全般に使える",
    "grammar": "poder + 不定詞の丁寧な依頼構文。otra（もう一つの）が女性名詞almohada/toallaを修飾。",
    "nuance": "客室のアメニティが足りないときにフロントへ頼む表現。",
    "similar": [
     {
      "es": "¿Podrían traerme una toalla extra?",
      "ja": "タオルを追加で持ってきていただけますか？"
     },
     {
      "es": "Necesito otra almohada, por favor.",
      "ja": "枕がもう一枚必要です。"
     }
    ],
    "en": "Could I get another pillow/towel?"
   },
   {
    "es": "El aire acondicionado no funciona.",
    "ja": "エアコンが動きません。",
    "note": "funcionarは『機能する』。家電や機械の不具合を伝えるときの定番動詞",
    "grammar": "funcionar（機能する）の直説法現在3人称単数の否定形。主語el aire acondicionadoが動作しないことを述べる客観的な文。",
    "nuance": "設備の不具合をフロントに伝える、事実を淡々と述べる言い方。",
    "similar": [
     {
      "es": "El aire acondicionado está descompuesto.",
      "ja": "エアコンが故障しています。"
     },
     {
      "es": "Algo anda mal con el aire acondicionado.",
      "ja": "エアコンの調子がおかしいです。"
     }
    ],
    "en": "The air conditioning isn't working."
   },
   {
    "es": "¿Pueden guardar mi equipaje después del check-out?",
    "ja": "チェックアウト後に荷物を預かってもらえますか？",
    "note": "después deは『〜の後に』。antes de（〜の前に）とセットで覚えると旅行がスムーズ",
    "grammar": "poder（できる）+ 不定詞guardar（保管する）の疑問形。después de + 名詞で「〜の後に」を表す。",
    "nuance": "チェックアウト後も少し観光したいときに便利な依頼表現。",
    "similar": [
     {
      "es": "¿Puedo dejar mi maleta aquí un rato?",
      "ja": "少しの間ここに荷物を置いていいですか？"
     },
     {
      "es": "¿Tienen un lugar para guardar equipaje?",
      "ja": "荷物を預ける場所はありますか？"
     }
    ],
    "en": "Can you keep my luggage after check-out?"
   },
   {
    "es": "¿Me pueden llamar un taxi?",
    "ja": "タクシーを呼んでもらえますか？",
    "note": "フロントは大体タクシーの手配に慣れているので、迷ったらまず聞いてみるといい",
    "grammar": "poder + 不定詞llamar（呼ぶ）。meは間接目的語（私のために）。",
    "nuance": "フロントにタクシーの手配を頼む、宿泊先でよく使う依頼表現。",
    "similar": [
     {
      "es": "¿Me pueden pedir un taxi?",
      "ja": "タクシーを頼んでもらえますか？"
     },
     {
      "es": "¿Podrían conseguirme un taxi?",
      "ja": "タクシーを手配していただけますか？"
     }
    ],
    "en": "Could you call me a taxi?"
   },
   {
    "es": "¿A qué hora es el check-out?",
    "ja": "チェックアウトは何時ですか？",
    "note": "1番の一部だけ抜き出した形。必要な情報だけをピンポイントで聞ける柔軟さも大事",
    "grammar": "¿A qué hora es...?（〜は何時ですか？）は、時刻を尋ねる基本の型です。serを使って「その出来事がいつか」を尋ねます。",
    "nuance": "check-inやcheck-outは英語からの借用語で、ホテル業界ではスペイン語話者の間でもそのまま使われることが多いです。",
    "similar": [
     {
      "es": "¿Hasta qué hora puedo quedarme?",
      "ja": "何時まで滞在できますか？"
     }
    ],
    "en": "What time is check-out?"
   },
   {
    "es": "¿Puedo dejar mi equipaje después del check-out?",
    "ja": "チェックアウト後も荷物を預けられますか？",
    "note": "dejarは『置いていく・残す』。llevar（持っていく）と対になる動詞として覚えると便利",
    "grammar": "poder（できる）+ dejar（残す・預ける）の疑問形。6番と似た内容だが、可否を尋ねる形。",
    "nuance": "6番の依頼形に対して、こちらは「可能かどうか」を確認するニュアンス。",
    "similar": [
     {
      "es": "¿Se puede dejar equipaje después de salir?",
      "ja": "退室後に荷物を預けることはできますか？"
     },
     {
      "es": "¿Hay servicio de guardaequipaje?",
      "ja": "荷物預かりサービスはありますか？"
     }
    ],
    "en": "Can I leave my luggage after check-out?"
   },
   {
    "es": "No funciona el aire acondicionado.",
    "ja": "エアコンが動きません。",
    "note": "主語を後ろに置く語順もスペイン語では自然。5番と同じ内容でも印象が少し変わる",
    "grammar": "5番と同じ内容だが、否定副詞Noを文頭に置いた倒置的な語順。日常会話ではどちらの語順もよく使われる。",
    "nuance": "5番よりもやや強調的に不具合を伝える言い方。",
    "similar": [
     {
      "es": "El aire acondicionado no sirve.",
      "ja": "エアコンが使い物になりません。"
     },
     {
      "es": "Hay un problema con el aire acondicionado.",
      "ja": "エアコンに問題があります。"
     }
    ],
    "en": "The air conditioning doesn't work."
   },
   {
    "es": "¿El desayuno está incluido?",
    "ja": "朝食は含まれていますか？",
    "note": "2番と同じ質問。フロントとレストランなど、聞く相手が変われば何度でも使っていい",
    "grammar": "2番と同一の構文。フロントで再度確認したり、別の場面で使う際の同じ表現。",
    "nuance": "予約時に確認済みでも、チェックイン時に再確認したいときにも使える。",
    "similar": [
     {
      "es": "¿El precio incluye el desayuno?",
      "ja": "料金に朝食は含まれていますか？"
     },
     {
      "es": "¿A qué hora es el desayuno?",
      "ja": "朝食は何時からですか？"
     }
    ],
    "en": "Is breakfast included?"
   },
   {
    "es": "¿Tienen servicio de lavandería?",
    "ja": "ランドリーサービスはありますか？",
    "note": "『servicio de + 名詞』でホテルの各種サービスを幅広く聞ける型",
    "grammar": "tener（持つ）の直説法現在3人称複数疑問形。servicio de + 名詞で「〜サービス」を表す。",
    "nuance": "長期滞在時に洗濯サービスの有無を確認する実用的な表現。",
    "similar": [
     {
      "es": "¿Hay lavandería en el hotel?",
      "ja": "ホテルにランドリーはありますか？"
     },
     {
      "es": "¿Puedo lavar mi ropa aquí?",
      "ja": "ここで洗濯できますか？"
     }
    ],
    "en": "Do you have laundry service?"
   },
   {
    "es": "Quisiera una habitación con vista al mar.",
    "ja": "海が見える部屋がいいのですが。",
    "note": "quisieraはquieroより一段丁寧。ホテルでの要望にはこちらが好印象",
    "grammar": "quisiera（querer の過去未来・丁寧な希望表現）+ con vista al mar（海の眺めがある）という前置詞句。",
    "nuance": "quiero（欲しい）よりも柔らかく丁寧な、希望を伝える言い方。",
    "similar": [
     {
      "es": "¿Tienen habitaciones con vista al mar?",
      "ja": "海が見える部屋はありますか？"
     },
     {
      "es": "Prefiero una habitación con buena vista.",
      "ja": "眺めのいい部屋がいいです。"
     }
    ],
    "en": "I'd like a room with an ocean view."
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
    "note": "『salir』は『出る』だけでなく『（結果として）〜になる』という意味でも使われる",
    "grammar": "salir（出る・かかる）を使った口語的な値段表現。「a cuánto me sale」で「私にはいくらかかるか」という意味になる。",
    "nuance": "タクシーの運転手にざっくりした概算料金を尋ねるカジュアルな表現。",
    "similar": [
     {
      "es": "¿Cuánto me cobraría hasta...?",
      "ja": "〜までいくら請求されますか？"
     },
     {
      "es": "¿Más o menos cuánto es a...?",
      "ja": "〜までだいたいいくらですか？"
     }
    ],
    "en": "About how much would it be to...?"
   },
   {
    "es": "Lléveme a esta dirección, por favor.",
    "ja": "この住所まで連れて行ってください。",
    "note": "命令形+meのように、目的語代名詞は命令形の語尾にそのままくっつく",
    "grammar": "llevar（連れて行く）のusted命令形にme（私を）が接続した形。命令形+目的格代名詞は語尾に直接付ける。",
    "nuance": "行き先を丁寧に伝える基本表現。地図や住所を見せながら使うとより確実。",
    "similar": [
     {
      "es": "A esta dirección, por favor.",
      "ja": "この住所までお願いします。"
     },
     {
      "es": "¿Me puede llevar aquí?",
      "ja": "ここまで連れて行ってもらえますか？"
     }
    ],
    "en": "Take me to this address, please."
   },
   {
    "es": "¿Cuánto tiempo se hace hasta ahí?",
    "ja": "そこまでどれくらい時間がかかりますか？",
    "note": "『se hace』は『（時間が）かかる』の意外な言い方。tardarと合わせて覚えると表現の幅が出る",
    "grammar": "se hace（〜になる、〜かかる）という再帰動詞の非人称的用法。hasta ahí（そこまで）が到達点を示す。",
    "nuance": "移動時間の目安を知りたいときの表現。",
    "similar": [
     {
      "es": "¿Cuánto se tarda en llegar?",
      "ja": "着くのにどれくらいかかりますか？"
     },
     {
      "es": "¿Está lejos de aquí?",
      "ja": "ここから遠いですか？"
     }
    ],
    "en": "How long does it take to get there?"
   },
   {
    "es": "¿Puede parar aquí, por favor?",
    "ja": "ここで止めてもらえますか？",
    "note": "pararは『止まる』、detenerseも同じ意味でタクシーの運転手はどちらも使う",
    "grammar": "poder + 不定詞parar（止まる）の丁寧な依頼形。ustedに対する疑問形。",
    "nuance": "目的地に着いたときや途中で降りたいときに使う丁寧な依頼表現。",
    "similar": [
     {
      "es": "¿Me puede dejar aquí?",
      "ja": "ここで降ろしてもらえますか？"
     },
     {
      "es": "Deténgase aquí, por favor.",
      "ja": "ここで止まってください。"
     }
    ],
    "en": "Could you stop here, please?"
   },
   {
    "es": "¿Me puede esperar unos minutos?",
    "ja": "数分待ってもらえますか？",
    "note": "unos/unasは『いくつかの』。数を曖昧にぼかしたいときに便利な語",
    "grammar": "poder + 不定詞esperar（待つ）の丁寧な依頼形。unos minutos（数分）が待つ時間を示す。",
    "nuance": "用事を済ませる間、タクシーに待っていてほしいときの表現。",
    "similar": [
     {
      "es": "¿Puede esperarme un momento?",
      "ja": "少し待っていてもらえますか？"
     },
     {
      "es": "Vuelvo en cinco minutos, ¿me espera?",
      "ja": "5分で戻ります、待っていてもらえますか？"
     }
    ],
    "en": "Could you wait a few minutes for me?"
   },
   {
    "es": "¿Cuánto es?",
    "ja": "おいくらですか？",
    "note": "動詞も主語も省いた最短の疑問文。実はこれだけで十分通じる",
    "grammar": "ser（〜である）の直説法現在3人称単数を使った、動詞と主語を省略した最短の疑問文。",
    "nuance": "到着後、支払い金額を確認するときに使う最も簡潔な表現。",
    "similar": [
     {
      "es": "¿Cuánto le debo?",
      "ja": "おいくらお支払いすればいいですか？"
     },
     {
      "es": "¿Qué le debo?",
      "ja": "いくらですか？"
     }
    ],
    "en": "How much is it?"
   },
   {
    "es": "Quédese con el cambio.",
    "ja": "おつりは取っておいてください。",
    "note": "quedarse conは『自分のものにする』。おつりをそのままチップにする時の定番",
    "grammar": "quedarse con（〜を自分のものにする）の再帰動詞のusted命令形。cambio（おつり）が目的語。",
    "nuance": "タクシーではチップの習慣が明確でないため、おつりをチップ代わりに渡すときに使う表現。",
    "similar": [
     {
      "es": "Guarde el cambio.",
      "ja": "おつりは取っておいてください。"
     },
     {
      "es": "No necesito el cambio.",
      "ja": "おつりはいりません。"
     }
    ],
    "en": "Keep the change."
   },
   {
    "es": "¿Cuánto cuesta llegar al aeropuerto?",
    "ja": "空港まではいくらですか？",
    "note": "空港までは定額料金（tarifa fija）を設定してる配車サービスも多い",
    "grammar": "costar（値段がかかる）+ llegar a（〜に着く）の不定詞を主語に取る構文。",
    "nuance": "空港までの定額料金や相場を事前に知りたいときの表現。",
    "similar": [
     {
      "es": "¿Cuánto es la tarifa al aeropuerto?",
      "ja": "空港までの料金はいくらですか？"
     },
     {
      "es": "¿Hay tarifa fija al aeropuerto?",
      "ja": "空港までは定額料金がありますか？"
     }
    ],
    "en": "How much does it cost to get to the airport?"
   },
   {
    "es": "¿Puede esperar aquí unos minutos?",
    "ja": "ここで数分待ってもらえますか？",
    "note": "4番とほぼ同じだけど、aquíを足すだけで『この場所で』が明確になる",
    "grammar": "4番とほぼ同じ構文だが、aquí（ここで）を加えて場所を明示している。",
    "nuance": "特定の場所で待っていてほしいことを明確に伝える表現。",
    "similar": [
     {
      "es": "Espéreme aquí, por favor.",
      "ja": "ここで待っていてください。"
     },
     {
      "es": "No se vaya, ya vuelvo.",
      "ja": "行かないで、すぐ戻ります。"
     }
    ],
    "en": "Could you wait here a few minutes?"
   },
   {
    "es": "Pare aquí, por favor.",
    "ja": "ここで止めてください。",
    "note": "3番の疑問形より直接的な命令形。急いでるときはこちらの方が早い",
    "grammar": "parar（止まる）のusted命令形。3番の疑問形よりも直接的な指示表現。",
    "nuance": "急いでいるときなど、より直接的に停車を指示したいときに使う。",
    "similar": [
     {
      "es": "Deténgase aquí.",
      "ja": "ここで止まってください。"
     },
     {
      "es": "Aquí está bien, gracias.",
      "ja": "ここで大丈夫です、ありがとう。"
     }
    ],
    "en": "Stop here, please."
   },
   {
    "es": "¿Acepta tarjeta o solo efectivo?",
    "ja": "カードは使えますか、それとも現金のみですか？",
    "note": "メキシコのタクシーは今でも現金のみが多いので、乗る前に確認すると安心",
    "grammar": "aceptar（受け付ける）の直説法現在3人称単数疑問形。o solo efectivo（それとも現金のみか）で選択肢を明示。",
    "nuance": "メキシコのタクシーは現金のみのことも多いため、事前確認が重要な表現。",
    "similar": [
     {
      "es": "¿Puedo pagar con tarjeta?",
      "ja": "カードで払えますか？"
     },
     {
      "es": "¿Solo efectivo?",
      "ja": "現金のみですか？"
     }
    ],
    "en": "Do you take cards, or cash only?"
   },
   {
    "es": "¿Me puede dar un recibo?",
    "ja": "領収書もらえますか？",
    "note": "領収書が欲しいときは乗車後すぐお願いするのがコツ。降りてからだと難しい",
    "grammar": "poder + 不定詞dar（与える）の丁寧な依頼形。meは間接目的語（私に）。",
    "nuance": "経費精算などのために領収書が必要なときに使う表現。",
    "similar": [
     {
      "es": "¿Me da un comprobante?",
      "ja": "領収証をいただけますか？"
     },
     {
      "es": "¿Tiene recibo?",
      "ja": "レシートはありますか？"
     }
    ],
    "en": "Could I get a receipt?"
   },
   {
    "es": "Voy a esta dirección.",
    "ja": "この住所に行きます。",
    "note": "1番より少し軽い言い方。スマホの画面を見せながら言うのが実用的",
    "grammar": "ir a（〜へ行く）の直説法現在1人称単数。1番のlléveme（連れて行ってください）とは異なり、自分の行動として述べる形。",
    "nuance": "配車アプリの画面や住所を見せながら、行き先を簡潔に伝える表現。",
    "similar": [
     {
      "es": "Me dirijo a esta dirección.",
      "ja": "この住所に向かいます。"
     },
     {
      "es": "Es aquí a donde voy.",
      "ja": "ここに行きたいです。"
     }
    ],
    "en": "I'm going to this address."
   },
   {
    "es": "¿Cuánto falta para llegar?",
    "ja": "着くまでどれくらいですか？",
    "note": "faltarは『足りない』。『あとどれくらい』というニュアンスに使うのが面白い発想",
    "grammar": "faltar（不足している・あとどれくらい）を使った表現。para llegar（到着するまでに）が目的を示す。",
    "nuance": "移動中に残り時間を確認したいときに使う表現。",
    "similar": [
     {
      "es": "¿Ya casi llegamos?",
      "ja": "もうすぐ着きますか？"
     },
     {
      "es": "¿Cuánto nos falta?",
      "ja": "あとどれくらいですか？"
     }
    ],
    "en": "How much longer until we arrive?"
   },
   {
    "es": "¿Cuánto tarda en llegar?",
    "ja": "着くのにどれくらいかかりますか？",
    "grammar": "tardar en + 不定詞（〜するのに時間がかかる）という重要な熟語。¿Cuánto tarda...?で「どれくらい時間がかかりますか」と尋ねられます。",
    "nuance": "tardarは「遅れる」という意味もありますが、この形では「所要時間」を尋ねる中立的な表現です。",
    "similar": [
     {
      "es": "¿Cuánto tiempo toma?",
      "ja": "どれくらい時間がかかりますか？（ラテンアメリカでも使われる言い方）"
     }
    ],
    "note": "tardar en + 不定詞で『〜するのに時間がかかる』。旅行全般で頻出の構文",
    "en": "How long does it take to arrive?"
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
    "note": "mostradorは『カウンター』。デパートやレジでも使う単語",
    "grammar": "estar（所在）の直説法現在3人称単数疑問形。mostrador de la aerolínea（航空会社のカウンター）という複合名詞。",
    "nuance": "空港到着後、チェックインカウンターを探すときの基本表現。",
    "similar": [
     {
      "es": "¿Dónde puedo hacer el check-in?",
      "ja": "チェックインはどこでできますか？"
     },
     {
      "es": "¿Dónde está el counter de...?",
      "ja": "〜のカウンターはどこですか？"
     }
    ],
    "en": "Where is the ... airline counter?"
   },
   {
    "es": "Quiero facturar mi equipaje.",
    "ja": "荷物を預けたいです。",
    "note": "facturarはメキシコ独特の言い方。スペインではfacturarよりchequear equipajeが多い",
    "grammar": "querer + 不定詞facturar（（荷物を）預ける）。facturarはメキシコ・ラテンアメリカでよく使われる表現。",
    "nuance": "チェックインカウンターで預け荷物を出すときに使う定番表現。",
    "similar": [
     {
      "es": "Quiero registrar mi maleta.",
      "ja": "スーツケースを預けたいです。"
     },
     {
      "es": "¿Dónde facturo mi equipaje?",
      "ja": "荷物はどこで預ければいいですか？"
     }
    ],
    "en": "I'd like to check my luggage."
   },
   {
    "es": "¿Cuál es mi puerta de embarque?",
    "ja": "搭乗ゲートはどこですか？",
    "note": "embarque（搭乗）はabordaje（搭乗）とほぼ同義で言い換え可能",
    "grammar": "ser（〜である）の直説法現在3人称単数疑問形。cuálで「どれ」と特定のものを尋ねる。puerta de embarque（搭乗ゲート）。",
    "nuance": "自分のフライトのゲート番号を確認したいときの表現。",
    "similar": [
     {
      "es": "¿De qué puerta sale mi vuelo?",
      "ja": "私のフライトはどのゲートから出発しますか？"
     },
     {
      "es": "¿Dónde está la puerta 12?",
      "ja": "12番ゲートはどこですか？"
     }
    ],
    "en": "What's my boarding gate?"
   },
   {
    "es": "¿A qué hora empieza el abordaje?",
    "ja": "搭乗は何時から始まりますか？",
    "note": "空港のアナウンスでも『abordaje』の語がそのまま流れる",
    "grammar": "empezar（始まる）の直説法現在3人称単数疑問形。a qué horaで時刻を尋ねる。abordaje（搭乗）。",
    "nuance": "搭乗開始時刻を確認するときの表現。",
    "similar": [
     {
      "es": "¿Cuándo empieza a abordar mi vuelo?",
      "ja": "私のフライトはいつ搭乗開始ですか？"
     },
     {
      "es": "¿A qué hora abren la puerta?",
      "ja": "ゲートは何時に開きますか？"
     }
    ],
    "en": "What time does boarding start?"
   },
   {
    "es": "Mi vuelo se retrasó.",
    "ja": "私のフライトが遅延しました。",
    "note": "retrasarseは『遅れる』の再帰動詞。llegar tardeと言い換えも可能",
    "grammar": "retrasarse（遅れる）の再帰動詞の点過去3人称単数。過去に起きた出来事として述べる。",
    "nuance": "フライト遅延の事実をスタッフや他の人に伝える表現。",
    "similar": [
     {
      "es": "Mi vuelo tiene retraso.",
      "ja": "私のフライトは遅延しています。"
     },
     {
      "es": "Hay un retraso en mi vuelo.",
      "ja": "私のフライトに遅延があります。"
     }
    ],
    "en": "My flight was delayed."
   },
   {
    "es": "¿Dónde recojo mi equipaje?",
    "ja": "荷物はどこで受け取りますか？",
    "note": "recogerは『拾う・受け取る』。忘れ物を取りに行くときにも使う便利動詞",
    "grammar": "recoger（受け取る・拾う）の直説法現在1人称単数疑問形。dóndeで場所を尋ねる。",
    "nuance": "到着後、預けた荷物を受け取る場所を探すときの表現。",
    "similar": [
     {
      "es": "¿Dónde está la banda de equipaje?",
      "ja": "荷物のターンテーブルはどこですか？"
     },
     {
      "es": "¿Dónde se recoge el equipaje del vuelo 123?",
      "ja": "123便の荷物はどこで受け取れますか？"
     }
    ],
    "en": "Where do I pick up my luggage?"
   },
   {
    "es": "Vengo de vacaciones.",
    "ja": "観光で来ました。",
    "note": "入国審査は聞かれることがほぼ決まってるので、この一言で切り抜けられる",
    "grammar": "venir（来る）の直説法現在1人称単数。de vacaciones（休暇で）が来訪目的を表す。",
    "nuance": "入国審査で渡航目的を聞かれたときの典型的な回答。",
    "similar": [
     {
      "es": "Estoy de turista.",
      "ja": "観光で来ています。"
     },
     {
      "es": "Vengo por turismo.",
      "ja": "観光目的で来ました。"
     }
    ],
    "en": "I'm here on vacation."
   },
   {
    "es": "Me quedo una semana.",
    "ja": "1週間滞在します。",
    "note": "quedarseは『滞在する』。ホテルの会話にも頻出するので合わせて覚えると効率的",
    "grammar": "quedarse（滞在する）の再帰動詞、直説法現在1人称単数。una semana（1週間）が期間を表す。",
    "nuance": "入国審査で滞在期間を聞かれたときの回答例。",
    "similar": [
     {
      "es": "Voy a estar aquí una semana.",
      "ja": "ここに1週間いる予定です。"
     },
     {
      "es": "Mi estancia es de siete días.",
      "ja": "滞在は7日間です。"
     }
    ],
    "en": "I'm staying one week."
   },
   {
    "es": "¿Tiene algo que declarar?",
    "ja": "申告するものはありますか？",
    "note": "『algo que + 動詞』で『〜すべき何か』。relative clauseの基本パターン",
    "grammar": "tener（持つ）+ algo que declarar（申告すべき何か）という関係節構文。declarar（申告する）。",
    "nuance": "税関で係員がよく尋ねる定型の質問。",
    "similar": [
     {
      "es": "¿Trae algo que declarar?",
      "ja": "申告するものをお持ちですか？"
     },
     {
      "es": "¿Algo para declarar?",
      "ja": "申告するものは？"
     }
    ],
    "en": "Do you have anything to declare?"
   },
   {
    "es": "No tengo nada que declarar.",
    "ja": "申告するものは何もありません。",
    "note": "nada queで8番の質問にそのまま返せる、覚えておくと安心の定型句",
    "grammar": "no tengo nada（何も持っていない）の二重否定構文。スペイン語では否定語を重ねるのが標準。",
    "nuance": "税関での質問に対する最も一般的な返答。",
    "similar": [
     {
      "es": "No traigo nada que declarar.",
      "ja": "申告するものは持っていません。"
     },
     {
      "es": "Nada que declarar.",
      "ja": "申告するものはありません。"
     }
    ],
    "en": "I have nothing to declare."
   },
   {
    "es": "¿Lleva algo peligroso o prohibido en su equipaje?",
    "ja": "荷物に危険なものや禁止されているものは入っていますか？",
    "note": "peligroso（危険）とprohibido（禁止）、セットで覚えると保安検査全般で役立つ",
    "grammar": "llevar（持ち運ぶ）の直説法現在3人称単数疑問形。algo peligroso o prohibido（危険または禁止された何か）。",
    "nuance": "セキュリティチェックや税関で係員が確認する定型の質問。",
    "similar": [
     {
      "es": "¿Lleva líquidos o objetos punzocortantes?",
      "ja": "液体や刃物類をお持ちですか？"
     },
     {
      "es": "¿Tiene algo restringido en su maleta?",
      "ja": "スーツケースに制限品はありますか？"
     }
    ],
    "en": "Are you carrying anything dangerous or prohibited in your luggage?"
   },
   {
    "es": "No, no llevo nada peligroso.",
    "ja": "いいえ、危険なものは何も持っていません。",
    "note": "スペイン語は否定語を重ねるのが標準。no...nadaは二重否定でも正しい文法",
    "grammar": "no llevo nada（何も持ち運んでいない）の二重否定。10番の質問に対する返答パターン。",
    "nuance": "セキュリティ・税関での質問に対する明確な否定の返答。",
    "similar": [
     {
      "es": "No, todo está permitido.",
      "ja": "いいえ、全部許可されているものです。"
     },
     {
      "es": "No llevo nada prohibido.",
      "ja": "禁止されているものは何も持っていません。"
     }
    ],
    "en": "No, I'm not carrying anything dangerous."
   },
   {
    "es": "¿Cuál es el propósito de su viaje?",
    "ja": "渡航の目的は何ですか？",
    "note": "入国審査でほぼ100%聞かれる質問。答えを準備しておくと安心",
    "grammar": "ser（〜である）の直説法現在3人称単数疑問形。propósito de su viaje（旅行の目的）という名詞句。",
    "nuance": "入国審査で必ずと言っていいほど聞かれる質問。",
    "similar": [
     {
      "es": "¿A qué viene a este país?",
      "ja": "この国に何をしに来ましたか？"
     },
     {
      "es": "¿Cuál es el motivo de su visita?",
      "ja": "訪問の理由は何ですか？"
     }
    ],
    "en": "What's the purpose of your trip?"
   },
   {
    "es": "Estoy aquí por negocios.",
    "ja": "仕事で来ています。",
    "note": "porは『理由・目的』を表す前置詞。by businessの感覚に近い",
    "grammar": "estar（一時的な状態・所在）+ por negocios（仕事のために）という理由を表す前置詞句。",
    "nuance": "12番の質問に対する回答例の一つ。ビジネス目的を伝える表現。",
    "similar": [
     {
      "es": "Vengo por trabajo.",
      "ja": "仕事で来ました。"
     },
     {
      "es": "Es un viaje de negocios.",
      "ja": "出張です。"
     }
    ],
    "en": "I'm here on business."
   },
   {
    "es": "¿Dónde se va a hospedar?",
    "ja": "どこに滞在する予定ですか？",
    "note": "hospedarseは『宿泊する』。quedarseより少しフォーマルな響き",
    "grammar": "ir a + 不定詞hospedarse（宿泊する）の再帰動詞未来表現の疑問形。dóndeで場所を尋ねる。",
    "nuance": "入国審査で滞在先を確認される定型の質問。",
    "similar": [
     {
      "es": "¿En dónde se va a quedar?",
      "ja": "どこに滞在されますか？"
     },
     {
      "es": "¿Cuál es su dirección aquí?",
      "ja": "こちらでの滞在先住所は何ですか？"
     }
    ],
    "en": "Where will you be staying?"
   },
   {
    "es": "Me hospedo en este hotel.",
    "ja": "このホテルに滞在します。",
    "note": "予約確認書を見せながら言うと、聞き取れなくても伝わる",
    "grammar": "hospedarse（宿泊する）の再帰動詞、直説法現在1人称単数。en este hotel（このホテルに）で滞在先を明示。",
    "nuance": "14番の質問に対する回答。予約確認書を見せながら使うことも多い。",
    "similar": [
     {
      "es": "Voy a quedarme en este hotel.",
      "ja": "このホテルに滞在する予定です。"
     },
     {
      "es": "Esta es mi dirección de hospedaje.",
      "ja": "これが私の滞在先住所です。"
     }
    ],
    "en": "I'm staying at this hotel."
   },
   {
    "es": "¿Puedo ver su pasaporte, por favor?",
    "ja": "パスポートを見せていただけますか？",
    "note": "係員側の丁寧な言い回し。逆の立場でも使える表現として覚えておくと便利",
    "grammar": "poder（できる）+ 不定詞ver（見る）の疑問形。係員側から見た「私が見てもよいか」という許可を求める形式。",
    "nuance": "審査官やスタッフがパスポート提示を求める丁寧な言い方。",
    "similar": [
     {
      "es": "Su pasaporte, por favor.",
      "ja": "パスポートをお願いします。"
     },
     {
      "es": "¿Me permite su pasaporte?",
      "ja": "パスポートを見せていただけますか？"
     }
    ],
    "en": "May I see your passport, please?"
   },
   {
    "es": "¿Tiene equipaje de mano?",
    "ja": "機内持ち込み荷物はありますか？",
    "note": "『de mano』は『手の』。equipaje de mano＝手荷物、と直訳から覚えやすい",
    "grammar": "tener（持つ）の直説法現在3人称単数疑問形。equipaje de mano（機内持ち込み手荷物）。",
    "nuance": "チェックインカウンターや保安検査でよく聞かれる質問。",
    "similar": [
     {
      "es": "¿Trae equipaje de mano?",
      "ja": "機内持ち込み荷物はお持ちですか？"
     },
     {
      "es": "¿Cuántas piezas de equipaje de mano lleva?",
      "ja": "機内持ち込み荷物はいくつありますか？"
     }
    ],
    "en": "Do you have carry-on luggage?"
   },
   {
    "es": "Solo tengo equipaje de mano.",
    "ja": "機内持ち込み荷物だけです。",
    "note": "soloは『〜だけ』。範囲を限定する便利な副詞",
    "grammar": "solo（〜だけ）+ tener（持つ）の直説法現在1人称単数。17番の質問に対する返答。",
    "nuance": "預け荷物がなく、機内持ち込みのみであることを伝える表現。",
    "similar": [
     {
      "es": "No llevo maleta facturada.",
      "ja": "預け荷物はありません。"
     },
     {
      "es": "Viajo solo con equipaje de mano.",
      "ja": "機内持ち込み荷物だけで移動しています。"
     }
    ],
    "en": "I only have carry-on luggage."
   },
   {
    "es": "¿Necesito quitarme los zapatos?",
    "ja": "靴を脱ぐ必要がありますか？",
    "note": "quitarseは『（自分の身から）脱ぐ・外す』。再帰動詞の典型例",
    "grammar": "necesitar + 不定詞quitarse（脱ぐ）の再帰動詞疑問形。los zapatos（靴）が目的語。",
    "nuance": "保安検査場で確認したいときの表現。空港によってルールが異なるため便利。",
    "similar": [
     {
      "es": "¿Me tengo que quitar el cinturón?",
      "ja": "ベルトを外す必要がありますか？"
     },
     {
      "es": "¿Debo quitarme la chaqueta?",
      "ja": "上着を脱ぐ必要がありますか？"
     }
    ],
    "en": "Do I need to take off my shoes?"
   },
   {
    "es": "Por favor, vacíe sus bolsillos.",
    "ja": "ポケットの中を空にしてください。",
    "note": "bolsillo（ポケット）は服関連の単語の中でも旅行中に地味によく使う",
    "grammar": "vaciar（空にする）のusted命令形。sus bolsillos（あなたのポケット）が目的語。",
    "nuance": "保安検査でスタッフがよく使う指示表現。",
    "similar": [
     {
      "es": "Saque todo de sus bolsillos.",
      "ja": "ポケットの中身を全部出してください。"
     },
     {
      "es": "Retire objetos metálicos, por favor.",
      "ja": "金属製のものを外してください。"
     }
    ],
    "en": "Please empty your pockets."
   },
   {
    "es": "¿A qué hora es el último llamado para abordar?",
    "ja": "搭乗の最終案内は何時ですか？",
    "note": "último（最後の）＋llamado（呼び出し）＝ラストコール、と覚えると忘れにくい",
    "grammar": "ser（〜である）の直説法現在3人称単数疑問形。último llamado（最終案内）+ para abordar（搭乗のための）。",
    "nuance": "搭乗締め切り時刻を確認したいときの表現。",
    "similar": [
     {
      "es": "¿Hasta qué hora puedo abordar?",
      "ja": "何時まで搭乗できますか？"
     },
     {
      "es": "¿Cuándo cierran la puerta?",
      "ja": "ゲートはいつ閉まりますか？"
     }
    ],
    "en": "What time is the final boarding call?"
   },
   {
    "es": "Perdí mi conexión.",
    "ja": "乗り継ぎに乗り遅れました。",
    "note": "conexiónは『乗り継ぎ便』の意味でも使われる。接続の意味だけじゃない",
    "grammar": "perder（失う・逃す）の点過去1人称単数。conexión（乗り継ぎ便）が目的語。",
    "nuance": "乗り継ぎに間に合わなかったことをスタッフに伝えるトラブル表現。",
    "similar": [
     {
      "es": "Se me fue el vuelo de conexión.",
      "ja": "乗り継ぎ便に乗り遅れてしまいました。"
     },
     {
      "es": "No alcancé mi siguiente vuelo.",
      "ja": "次のフライトに間に合いませんでした。"
     }
    ],
    "en": "I missed my connecting flight."
   },
   {
    "es": "¿Hay otro vuelo disponible hoy?",
    "ja": "今日他に利用できるフライトはありますか？",
    "note": "disponibleは『利用可能な』。ホテルの空室確認などにも頻出する形容詞",
    "grammar": "haber（〜がある）の直説法現在3人称単数疑問形。otro vuelo disponible（他に利用可能な便）。",
    "nuance": "フライトを逃した後、代替便を探すときの表現。",
    "similar": [
     {
      "es": "¿Tiene otro vuelo para hoy?",
      "ja": "今日の他の便はありますか？"
     },
     {
      "es": "¿Cuál es el próximo vuelo disponible?",
      "ja": "次に利用できる便はいつですか？"
     }
    ],
    "en": "Is there another flight available today?"
   },
   {
    "es": "Mi maleta no llegó.",
    "ja": "私のスーツケースが届いていません。",
    "note": "ロストバゲージのときの第一声。落ち着いてこの一文から話し始めればOK",
    "grammar": "llegar（到着する）の点過去3人称単数の否定形。ロストバゲージを報告する客観的な事実文。",
    "nuance": "荷物受取所で自分の荷物が出てこないときに使うトラブル表現。",
    "similar": [
     {
      "es": "No encuentro mi equipaje.",
      "ja": "荷物が見つかりません。"
     },
     {
      "es": "Mi maleta se perdió.",
      "ja": "荷物が紛失しました。"
     }
    ],
    "en": "My suitcase didn't arrive."
   },
   {
    "es": "¿Dónde está la oficina de objetos perdidos?",
    "ja": "遺失物取扱所はどこですか？",
    "note": "objetos perdidos＝『失われた物』。忘れ物センター全般にそのまま使える表現",
    "grammar": "estar（所在）の直説法現在3人称単数疑問形。oficina de objetos perdidos（遺失物取扱所）という複合名詞。",
    "nuance": "ロストバゲージの手続きをするための窓口を探すときの表現。",
    "similar": [
     {
      "es": "¿Dónde reporto mi equipaje perdido?",
      "ja": "紛失した荷物はどこで報告できますか？"
     },
     {
      "es": "¿Dónde está el mostrador de reclamos?",
      "ja": "クレーム窓口はどこですか？"
     }
    ],
    "en": "Where is the lost and found office?"
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
    "note": "『para + 症状』の型を覚えると、頭痛以外の症状にもそのまま応用できる",
    "grammar": "tener（持つ）+ algo para（〜のための何か）という目的を表す構文。dolor de cabeza（頭痛）。",
    "nuance": "薬局で症状に合う薬を探すときの基本表現。",
    "similar": [
     {
      "es": "¿Qué me recomienda para el dolor de cabeza?",
      "ja": "頭痛に何がおすすめですか？"
     },
     {
      "es": "¿Tiene un analgésico?",
      "ja": "鎮痛剤はありますか？"
     }
    ],
    "en": "Do you have something for a headache?"
   },
   {
    "es": "Me duele la garganta.",
    "ja": "喉が痛いです。",
    "note": "dolerはgustarと同じ語順の動詞。『私に喉が痛む』という発想で覚えると忘れにくい",
    "grammar": "doler（痛む）を使った構文。gustarと同じ間接目的語構文で、「私に喉が痛む」という語順になる。",
    "nuance": "体の特定の部位の痛みを伝える基本パターンで、他の部位にも応用できる。",
    "similar": [
     {
      "es": "Tengo dolor de garganta.",
      "ja": "喉に痛みがあります。"
     },
     {
      "es": "Me arde la garganta.",
      "ja": "喉がヒリヒリします。"
     }
    ],
    "en": "My throat hurts."
   },
   {
    "es": "¿Necesito receta para esto?",
    "ja": "これには処方箋が必要ですか？",
    "note": "recetaは『処方箋』のほかに『レシピ』の意味もある。文脈で判断が必要",
    "grammar": "necesitar（必要とする）の直説法現在1人称単数疑問形。para esto（これのために）が対象を示す。",
    "nuance": "薬を買う前に処方箋の要不要を確認する表現。",
    "similar": [
     {
      "es": "¿Esto se vende sin receta?",
      "ja": "これは処方箋なしで買えますか？"
     },
     {
      "es": "¿Es de venta libre?",
      "ja": "市販薬ですか？"
     }
    ],
    "en": "Do I need a prescription for this?"
   },
   {
    "es": "¿Cómo debo tomar esto?",
    "ja": "これはどう飲めばいいですか？",
    "note": "薬を『飲む』にはtomarを使う。beber（飲む）は使わないので注意",
    "grammar": "deber（〜すべき）+ 不定詞tomar（飲む）の疑問形。cómoで方法を尋ねる。",
    "nuance": "薬の正しい服用方法を薬剤師に確認する重要な表現。",
    "similar": [
     {
      "es": "¿Cuál es la dosis recomendada?",
      "ja": "推奨される用量はどれくらいですか？"
     },
     {
      "es": "¿Con o sin alimentos?",
      "ja": "食事と一緒に飲みますか、それとも空腹時ですか？"
     }
    ],
    "en": "How should I take this?"
   },
   {
    "es": "Soy alérgico/a a...",
    "ja": "私は〜アレルギーです。",
    "note": "alérgico/aは主語の性別で語尾が変わる形容詞。男性ならalérgico、女性ならalérgica",
    "grammar": "ser alérgico/a a + 名詞という定型構文。alérgico/aは主語の性別に応じて変化。",
    "nuance": "薬を処方される前に、アレルギー情報を伝える安全上重要な表現。",
    "similar": [
     {
      "es": "Tengo alergia a...",
      "ja": "〜アレルギーがあります。"
     },
     {
      "es": "No puedo tomar...",
      "ja": "〜は服用できません。"
     }
    ],
    "en": "I'm allergic to..."
   },
   {
    "es": "Necesito ver a un médico.",
    "ja": "医者に診てもらう必要があります。",
    "note": "人を目的語にとるときは必ずaが入る。『a un médico』のaを忘れがち",
    "grammar": "necesitar + 不定詞ver（会う・診てもらう）。a un médico（医者に）が対象を示す前置詞句（人を目的語にとるa）。",
    "nuance": "薬局では対応できない症状のときに使う表現。",
    "similar": [
     {
      "es": "Necesito consultar a un doctor.",
      "ja": "医者に相談する必要があります。"
     },
     {
      "es": "¿Hay algún médico aquí?",
      "ja": "ここに医者はいますか？"
     }
    ],
    "en": "I need to see a doctor."
   },
   {
    "es": "¿Dónde está la sala de emergencias?",
    "ja": "救急外来はどこですか？",
    "note": "『emergencias』は複数形が定番。単数のemergenciaはあまり使わない",
    "grammar": "estar（所在）の直説法現在3人称単数疑問形。sala de emergencias（救急外来）という複合名詞。",
    "nuance": "緊急の症状で病院の救急部門を探すときの表現。",
    "similar": [
     {
      "es": "¿Dónde queda urgencias?",
      "ja": "救急はどこにありますか？"
     },
     {
      "es": "Necesito ir a emergencias.",
      "ja": "救急外来に行く必要があります。"
     }
    ],
    "en": "Where is the emergency room?"
   },
   {
    "es": "No me siento bien.",
    "ja": "体調が良くないです。",
    "note": "sentirseは『（自分が）感じる』の再帰動詞。体調不良全般に使える万能フレーズ",
    "grammar": "sentirse（感じる）の再帰動詞、直説法現在1人称単数の否定形。bien（良く）を否定して体調不良を表す。",
    "nuance": "具体的な症状を言わずに、体調が悪いことを伝える一般的な表現。",
    "similar": [
     {
      "es": "Me siento mal.",
      "ja": "気分が悪いです。"
     },
     {
      "es": "No ando bien de salud.",
      "ja": "体調があまり良くないです。"
     }
    ],
    "en": "I don't feel well."
   },
   {
    "es": "¿Necesito receta para esto?",
    "ja": "これには処方箋が必要ですか？",
    "note": "2番と同じ質問。別の薬を指差しながら何度でも使っていい定番の聞き方",
    "grammar": "2番と同一の構文。別の薬について再度確認する際にも使える。",
    "nuance": "違う薬について同じ質問を繰り返す場面を想定した表現。",
    "similar": [
     {
      "es": "¿Se requiere prescripción médica?",
      "ja": "医師の処方箋は必要ですか？"
     },
     {
      "es": "¿Puedo comprarlo sin receta?",
      "ja": "処方箋なしで買えますか？"
     }
    ],
    "en": "Do I need a prescription for this?"
   },
   {
    "es": "¿Cada cuánto debo tomarlo?",
    "ja": "どれくらいの間隔で飲めばいいですか？",
    "note": "『cada cuánto』は『どれくらいの頻度で』。習慣を尋ねるときにも使える型",
    "grammar": "cada cuánto（どれくらいの頻度で）という頻度を尋ねる疑問句。deber + 不定詞tomarlo（それを飲む）。",
    "nuance": "服用間隔を確認する、薬を安全に使うための重要な質問。",
    "similar": [
     {
      "es": "¿Cuántas veces al día lo tomo?",
      "ja": "1日に何回飲みますか？"
     },
     {
      "es": "¿Cada cuántas horas?",
      "ja": "何時間おきですか？"
     }
    ],
    "en": "How often should I take it?"
   },
   {
    "es": "Soy alérgico a la penicilina.",
    "ja": "ペニシリンアレルギーがあります。",
    "note": "ペニシリンアレルギーは命に関わるので、必ず伝えるべき重要フレーズの一つ",
    "grammar": "4番と同じ構文の具体例。特定の薬品名（penicilina）を挙げている。",
    "nuance": "処方・治療前に伝えるべき、特に重要な医療情報の一例。",
    "similar": [
     {
      "es": "Tengo alergia a la penicilina.",
      "ja": "ペニシリンにアレルギーがあります。"
     },
     {
      "es": "No puedo tomar antibióticos con penicilina.",
      "ja": "ペニシリン系の抗生物質は飲めません。"
     }
    ],
    "en": "I'm allergic to penicillin."
   },
   {
    "es": "¿Tiene algo para el dolor de cabeza?",
    "ja": "頭痛に効くもの何かありますか？",
    "note": "0番のバリエーション。薬局では同じ質問を色々な言い方で聞き返されることもある",
    "grammar": "0番とほぼ同じ内容。algo（何か）の位置が少し異なるが意味は同じ。",
    "nuance": "0番のバリエーション。薬局で自然に使われる言い回しの幅を示す。",
    "similar": [
     {
      "es": "¿Qué tiene para el dolor de cabeza?",
      "ja": "頭痛に何がありますか？"
     },
     {
      "es": "¿Me recomienda algo para esto?",
      "ja": "これに何かおすすめはありますか？"
     }
    ],
    "en": "Do you have anything for a headache?"
   },
   {
    "es": "Necesito hacer una cita con el doctor.",
    "ja": "医者の予約を取る必要があります。",
    "note": "『hacer una cita』は『予約を取る』の定型句。美容院でも同じ表現が使える",
    "grammar": "necesitar + 不定詞hacer（する）。hacer una citaで「予約を取る」という定型句。",
    "nuance": "急を要さない診察のために予約を取りたいときの表現。",
    "similar": [
     {
      "es": "Quiero agendar una consulta.",
      "ja": "診察の予約をしたいです。"
     },
     {
      "es": "¿Puedo hacer una cita para hoy?",
      "ja": "今日の予約は取れますか？"
     }
    ],
    "en": "I need to make an appointment with the doctor."
   },
   {
    "es": "¿Cuánto tiempo tengo que esperar?",
    "ja": "どれくらい待たないといけませんか？",
    "note": "tener que + 不定詞は『〜しなければならない』。必要性を表す基本構文",
    "grammar": "tener que + 不定詞esperar（待つ）の疑問形。cuánto tiempo（どれくらいの時間）が待ち時間を尋ねる。",
    "nuance": "病院の待合室で待ち時間の目安を知りたいときの表現。",
    "similar": [
     {
      "es": "¿Cuánto es el tiempo de espera?",
      "ja": "待ち時間はどれくらいですか？"
     },
     {
      "es": "¿Falta mucho para que me atiendan?",
      "ja": "診てもらえるまでまだかかりますか？"
     }
    ],
    "en": "How long do I have to wait?"
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
    "note": "『a...』の後に地名や場所を入れるだけで、どこにでも応用できる万能テンプレ",
    "grammar": "llegar（到着する）の直説法現在1人称単数疑問形。cómoで方法を尋ねる基本構文。",
    "nuance": "目的地への行き方を尋ねる最も基本的な表現。",
    "similar": [
     {
      "es": "¿Por dónde se va a...?",
      "ja": "〜へはどちらに行けばいいですか？"
     },
     {
      "es": "¿Cuál es el camino a...?",
      "ja": "〜への道はどれですか？"
     }
    ],
    "en": "How do I get to...?"
   },
   {
    "es": "¿Está lejos de aquí?",
    "ja": "ここから遠いですか？",
    "note": "lejosの反対はcerca（近い）。この2語だけで距離感の会話は大体乗り切れる",
    "grammar": "estar（一時的な状態）+ lejos de（〜から遠い）という前置詞句。",
    "nuance": "徒歩か交通機関を使うか判断するために距離感を確認する表現。",
    "similar": [
     {
      "es": "¿Qué tan lejos está?",
      "ja": "どれくらい遠いですか？"
     },
     {
      "es": "¿Queda cerca de aquí?",
      "ja": "ここから近いですか？"
     }
    ],
    "en": "Is it far from here?"
   },
   {
    "es": "Está a dos cuadras de aquí.",
    "ja": "ここから2ブロック先です。",
    "note": "cuadraは『街区』。メキシコの都市はグリッド状の道が多く、距離の目安として定着してる",
    "grammar": "estar a + 距離 + de（〜から〜の距離にある）という定型構文。cuadra（街区・ブロック）はラテンアメリカでよく使われる単位。",
    "nuance": "道を教える際に具体的な距離を伝える表現。",
    "similar": [
     {
      "es": "Queda a dos calles de aquí.",
      "ja": "ここから2本先の通りです。"
     },
     {
      "es": "Está muy cerca, a unos minutos caminando.",
      "ja": "とても近く、歩いて数分です。"
     }
    ],
    "en": "It's two blocks from here."
   },
   {
    "es": "Siga derecho y luego dé vuelta a la izquierda.",
    "ja": "まっすぐ行って、それから左に曲がってください。",
    "note": "道案内のusted命令形はseguir・doblar・girarあたりを覚えておけば大体対応できる",
    "grammar": "seguir（進む）とdar vuelta（曲がる）のusted命令形を2つ組み合わせた文。derecho（まっすぐ）とa la izquierda（左に）が方向を示す。",
    "nuance": "道案内で複数の動作を順番に伝えるときの標準的な構文。",
    "similar": [
     {
      "es": "Siga derecho hasta la esquina y doble a la izquierda.",
      "ja": "角までまっすぐ行って左に曲がってください。"
     },
     {
      "es": "Vaya recto y después gire a la izquierda.",
      "ja": "まっすぐ行って、それから左に曲がってください。"
     }
    ],
    "en": "Go straight and then turn left."
   },
   {
    "es": "¿Se puede ir caminando?",
    "ja": "歩いて行けますか？",
    "note": "『se puede + 不定詞』は『〜できる』を表す万能構文。許可・可能どちらにも使える",
    "grammar": "poder（できる）の再帰受身的な用法se puede（〜できる）+ ir caminando（歩いて行く）。caminandoは現在分詞で様態を表す。",
    "nuance": "徒歩圏内かどうかを確認する実用的な表現。",
    "similar": [
     {
      "es": "¿Se puede llegar a pie?",
      "ja": "徒歩で着けますか？"
     },
     {
      "es": "¿Está a distancia de caminar?",
      "ja": "歩ける距離にありますか？"
     }
    ],
    "en": "Can you get there on foot?"
   },
   {
    "es": "Perdón, ¿me puede ayudar? Estoy perdido/a.",
    "ja": "すみません、助けてもらえますか？道に迷ってしまって。",
    "note": "『perdido』は道に『迷った』の意味と『失われた』の意味を両方持つ",
    "grammar": "poder + 不定詞ayudar（手伝う）の疑問形に続けて、estar perdido/a（道に迷っている状態）という状態動詞を使用。",
    "nuance": "見知らぬ人に道を尋ねる際の丁寧な切り出し方。",
    "similar": [
     {
      "es": "Disculpe, me perdí, ¿me puede orientar?",
      "ja": "すみません、迷ってしまいました、教えてもらえますか？"
     },
     {
      "es": "¿Me podría ayudar? No sé dónde estoy.",
      "ja": "手伝ってもらえますか？自分がどこにいるか分からないんです。"
     }
    ],
    "en": "Excuse me, could you help me? I'm lost."
   },
   {
    "es": "¿Qué autobús/línea debo tomar?",
    "ja": "どのバス/路線に乗ればいいですか？",
    "note": "乗り物には基本tomarを使う。『乗る』にsubirも使うが会話ではtomarの方が自然",
    "grammar": "deber + 不定詞tomar（乗る）の疑問形。qué autobús/línea（どのバス/路線）が対象を尋ねる。",
    "nuance": "公共交通機関を利用する際、路線が分からないときに使う表現。",
    "similar": [
     {
      "es": "¿Qué ruta me conviene tomar?",
      "ja": "どの路線に乗るのがいいですか？"
     },
     {
      "es": "¿Cuál camión me lleva a...?",
      "ja": "どのバスが〜まで連れて行ってくれますか？"
     }
    ],
    "en": "Which bus/line should I take?"
   },
   {
    "es": "¿Está lejos de aquí?",
    "ja": "ここから遠いですか？",
    "note": "1番と同じ質問。会話の中で何度でも聞き返していい定番フレーズ",
    "grammar": "1番と同一の構文。別の会話の流れで再度使われる想定。",
    "nuance": "会話の中で複数回距離を確認したい場面を想定。",
    "similar": [
     {
      "es": "¿Cuánto hay de aquí a allá?",
      "ja": "ここからそこまでどれくらいありますか？"
     },
     {
      "es": "¿Se puede llegar rápido?",
      "ja": "すぐ着けますか？"
     }
    ],
    "en": "Is it far from here?"
   },
   {
    "es": "¿Se puede ir caminando?",
    "ja": "歩いて行けますか？",
    "note": "4番の繰り返し。同じ表現を別の場面で使いまわす練習にちょうどいい",
    "grammar": "4番と同一の構文の繰り返し使用。",
    "nuance": "4番のバリエーションとして、別の場面での確認に使う。",
    "similar": [
     {
      "es": "¿Es caminable desde aquí?",
      "ja": "ここから歩いて行けますか？"
     },
     {
      "es": "¿No hace falta transporte?",
      "ja": "交通機関は必要ないですか？"
     }
    ],
    "en": "Can you walk there?"
   },
   {
    "es": "Siga derecho hasta el semáforo.",
    "ja": "信号までまっすぐ進んでください。",
    "note": "hastaは『〜まで』。距離・時間どちらの『まで』にも使える前置詞",
    "grammar": "seguir（進む）のusted命令形。hasta el semáforo（信号まで）が到達点を示す。",
    "nuance": "3番同様、道案内でよく使われる具体的な目印を使った指示。",
    "similar": [
     {
      "es": "Vaya recto hasta el semáforo.",
      "ja": "信号までまっすぐ行ってください。"
     },
     {
      "es": "Camine derecho hasta llegar al semáforo.",
      "ja": "信号に着くまでまっすぐ歩いてください。"
     }
    ],
    "en": "Go straight until the traffic light."
   },
   {
    "es": "Doble a la derecha en la esquina.",
    "ja": "角を右に曲がってください。",
    "note": "esquina（角）はdoblar/girarとセットで覚えると道案内が一気に楽になる",
    "grammar": "doblar（曲がる）のusted命令形。en la esquina（角で）が場所を示す。",
    "nuance": "具体的な曲がり角を示して道案内する表現。",
    "similar": [
     {
      "es": "Gire a la derecha en la esquina.",
      "ja": "角を右に曲がってください。"
     },
     {
      "es": "Voltee a la derecha ahí.",
      "ja": "そこで右に曲がってください。"
     }
    ],
    "en": "Turn right at the corner."
   },
   {
    "es": "Está a mano izquierda.",
    "ja": "左手にあります。",
    "note": "『a mano izquierda/derecha』は『左手/右手に』という決まり文句",
    "grammar": "estar a mano izquierda（左手にある）という定型の位置表現。",
    "nuance": "目的地の位置を簡潔に示す道案内の締めくくりによく使われる表現。",
    "similar": [
     {
      "es": "Lo va a ver a su izquierda.",
      "ja": "左側に見えてきます。"
     },
     {
      "es": "Queda del lado izquierdo.",
      "ja": "左側にあります。"
     }
    ],
    "en": "It's on the left."
   },
   {
    "es": "Perdón, creo que estoy perdido.",
    "ja": "すみません、道に迷ったみたいです。",
    "note": "creo queをつけるだけで断定を避けた柔らかい言い方になる、便利なクッション表現",
    "grammar": "creer（思う）+ que節で「〜だと思う」という控えめな表現。estar perdido（道に迷っている）。",
    "nuance": "5番よりもややカジュアルで、断定を避けた柔らかい言い方。",
    "similar": [
     {
      "es": "Creo que me perdí.",
      "ja": "迷ってしまったみたいです。"
     },
     {
      "es": "No sé muy bien dónde estoy.",
      "ja": "自分がどこにいるかよく分からないんです。"
     }
    ],
    "en": "Excuse me, I think I'm lost."
   },
   {
    "es": "¿Me puede indicar en el mapa?",
    "ja": "地図で教えてもらえますか？",
    "note": "indicarは『指し示す』。地図や書類の特定の場所を示してほしいときに使える",
    "grammar": "poder + 不定詞indicar（示す）の丁寧な依頼形。en el mapa（地図上で）が手段を示す。",
    "nuance": "言葉だけでは分かりにくいときに、地図を使って説明してもらう表現。",
    "similar": [
     {
      "es": "¿Me puede señalar dónde estamos?",
      "ja": "今どこにいるか示してもらえますか？"
     },
     {
      "es": "¿Me lo puede mostrar en el mapa?",
      "ja": "地図で見せてもらえますか？"
     }
    ],
    "en": "Could you show me on the map?"
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
    "note": "venir（来る）の命令形はvenと不規則。ir（行く）の命令形veと発音が似てて紛らわしい",
    "grammar": "venir（来る）の肯定命令形。túではven、ustedではvengaと不規則に変化する。",
    "nuance": "相手を呼び寄せる基本の命令表現。túとustedで丁寧さが大きく変わる。",
    "similar": [
     {
      "es": "Acércate / Acérquese.",
      "ja": "近くに来て／お越しください。"
     },
     {
      "es": "Ven acá.",
      "ja": "こっちに来て。"
     }
    ],
    "en": "Come here."
   },
   {
    "es": "Espera / Espere un momento.",
    "ja": "ちょっと待って／お待ちください。",
    "note": "『un momento』は『少しの間』。実際には結構待たされることも多い定番フレーズ",
    "grammar": "esperar（待つ）の肯定命令形。túではespera、ustedではespereと語尾が変化する。",
    "nuance": "相手に少し待ってほしいときの基本表現。",
    "similar": [
     {
      "es": "Aguanta / Aguante un momento.",
      "ja": "ちょっと待って（口語的）。"
     },
     {
      "es": "Dame un segundo.",
      "ja": "少し時間ちょうだい。"
     }
    ],
    "en": "Wait a moment."
   },
   {
    "es": "Mira / Mire esto.",
    "ja": "これ見て／これをご覧ください。",
    "note": "mirarは『意識的に見る』、verは『（自然に）見える』。使い分けの練習になる一語",
    "grammar": "mirar（見る）の肯定命令形。túではmira、ustedではmireに変化。",
    "nuance": "相手の注意を引くときによく使われる、会話の切り出し表現でもある。",
    "similar": [
     {
      "es": "Fíjate / Fíjese en esto.",
      "ja": "これに注目して。"
     },
     {
      "es": "Échale un ojo a esto.",
      "ja": "これちょっと見てみて。"
     }
    ],
    "en": "Look at this."
   },
   {
    "es": "Escucha / Escuche.",
    "ja": "聞いて／お聞きください。",
    "note": "escucharは『聞く（意識的に）』、oírは『聞こえる』。mirar/verと同じ構造の対",
    "grammar": "escuchar（聞く）の肯定命令形。túではescucha、ustedではescucheに変化。",
    "nuance": "何か重要なことを伝える前の前置きとしてよく使われる。",
    "similar": [
     {
      "es": "Oye / Oiga.",
      "ja": "ねえ／あの（呼びかけ）。"
     },
     {
      "es": "Presta atención.",
      "ja": "注意して聞いて。"
     }
    ],
    "en": "Listen."
   },
   {
    "es": "¡Cuidado!",
    "ja": "気をつけて！",
    "note": "1語で伝わる緊急フレーズの代表格。とっさに出るようにしておきたい",
    "grammar": "動詞ではなく名詞cuidado（注意）を単独で使う警告表現。感嘆符を伴うのが一般的。",
    "nuance": "危険を知らせる際の最も短く即座に使える表現。",
    "similar": [
     {
      "es": "¡Aguas!",
      "ja": "危ない！（メキシコ口語）"
     },
     {
      "es": "¡Ten cuidado!",
      "ja": "気をつけて！"
     }
    ],
    "en": "Watch out!"
   },
   {
    "es": "Ayúdame, por favor.",
    "ja": "手伝って、お願い。",
    "note": "命令形+meのアクセント記号は、音節が増えて発音位置が変わるためについてる",
    "grammar": "ayudar（手伝う）の肯定命令形にme（私を）が接続。アクセント記号は音節が増えて発音位置が変わるためにつく。",
    "nuance": "困っているときに助けを求める率直な表現。",
    "similar": [
     {
      "es": "¿Me puedes ayudar?",
      "ja": "手伝ってもらえる？"
     },
     {
      "es": "Necesito tu ayuda.",
      "ja": "あなたの助けが必要です。"
     }
    ],
    "en": "Help me, please."
   },
   {
    "es": "Siéntate / Siéntese, por favor.",
    "ja": "座って／お座りください。",
    "note": "sentarse（座る）の再帰動詞。再帰代名詞seが主語に応じてte/seに変わる",
    "grammar": "sentarse（座る）の再帰動詞の肯定命令形。túではsiéntate、ustedではsiénteseに変化。",
    "nuance": "席に座るよう促す丁寧な指示表現。",
    "similar": [
     {
      "es": "Toma asiento, por favor.",
      "ja": "お座りください。"
     },
     {
      "es": "Puedes sentarte aquí.",
      "ja": "ここに座っていいよ。"
     }
    ],
    "en": "Have a seat, please."
   },
   {
    "es": "Cállate.",
    "ja": "黙って。",
    "note": "かなりぶっきらぼうな響きなので、親しい相手以外には使わない方がいい",
    "grammar": "callarse（黙る）の再帰動詞の肯定命令形（tú形）。",
    "nuance": "かなり直接的でぶっきらぼうな響きがあるため、親しい間柄でのみ使うべき表現。",
    "similar": [
     {
      "es": "Guarda silencio.",
      "ja": "静かにして（より丁寧）。"
     },
     {
      "es": "Ya, cállate.",
      "ja": "もう、黙って（強い口調）。"
     }
    ],
    "en": "Be quiet."
   },
   {
    "es": "Apúrate / Apúrese, por favor.",
    "ja": "急いで／お急ぎください。",
    "note": "apurarseはメキシコで特によく使われる『急ぐ』の口語表現",
    "grammar": "apurarse（急ぐ）の再帰動詞の肯定命令形。túではapúrate、ustedではapúreseに変化。",
    "nuance": "相手に急いでほしいときのカジュアルな促し表現。",
    "similar": [
     {
      "es": "Date prisa.",
      "ja": "急いで。"
     },
     {
      "es": "Rápido, por favor.",
      "ja": "早くお願い。"
     }
    ],
    "en": "Hurry up, please."
   },
   {
    "es": "Dame eso, por favor.",
    "ja": "それをちょうだい。",
    "note": "daで終わる命令形+meの組み合わせは日常会話で非常によく出てくる型",
    "grammar": "dar（与える）の肯定命令形にme（私に）が接続。dameの形で「私にちょうだい」という意味になる。",
    "nuance": "物を渡してほしいときのカジュアルな依頼表現。",
    "similar": [
     {
      "es": "Pásame eso.",
      "ja": "それ取って。"
     },
     {
      "es": "¿Me das eso?",
      "ja": "それちょうだえる？"
     }
    ],
    "en": "Give me that, please."
   },
   {
    "es": "Ten cuidado.",
    "ja": "気をつけてね。",
    "note": "『Ten + 名詞』は感情・状態を持つという発想。tener paciencia（我慢して）にも応用可",
    "grammar": "tener（持つ）の肯定命令形（tú形）。cuidado（注意）とセットで「注意を持て」という定型表現。",
    "nuance": "相手の安全を気遣う、日常的な声かけ表現。",
    "similar": [
     {
      "es": "Cuídate.",
      "ja": "気をつけてね（別れ際にも使う）。"
     },
     {
      "es": "Ve con cuidado.",
      "ja": "気をつけて行ってね。"
     }
    ],
    "en": "Be careful."
   },
   {
    "es": "Quédate / Quédese aquí.",
    "ja": "ここにいて／ここにいてください。",
    "note": "quedarse（留まる）はホテルの『滞在する』とも同じ動詞、覚えておくと一石二鳥",
    "grammar": "quedarse（留まる）の再帰動詞の肯定命令形。túではquédate、ustedではquédeseに変化。",
    "nuance": "相手にその場に留まるよう指示する表現。",
    "similar": [
     {
      "es": "No te muevas de aquí.",
      "ja": "ここから動かないで。"
     },
     {
      "es": "Espera aquí.",
      "ja": "ここで待ってて。"
     }
    ],
    "en": "Stay here."
   },
   {
    "es": "Sígueme / Sígame, por favor.",
    "ja": "ついてきて／ついてきてください。",
    "note": "seguir（ついていく）は不規則動詞。seguir→sigo→sigueと語幹が変わる",
    "grammar": "seguir（ついていく）の肯定命令形にme（私に）が接続。túではsígueme、ustedではsígameに変化。",
    "nuance": "案内するときなどに、後についてきてほしいことを伝える表現。",
    "similar": [
     {
      "es": "Ven conmigo.",
      "ja": "一緒に来て。"
     },
     {
      "es": "Por aquí, sígame.",
      "ja": "こちらです、ついてきてください。"
     }
    ],
    "en": "Follow me, please."
   },
   {
    "es": "No te preocupes / No se preocupe.",
    "ja": "心配しないで／ご心配なさらず。",
    "note": "否定命令形は接続法を使うため、肯定形（preocúpate）とは全く違う形になる",
    "grammar": "preocuparse（心配する）の再帰動詞の否定命令形。否定命令形は接続法を使うため、肯定形（preocúpate）とは形が異なる。",
    "nuance": "相手を安心させたいときによく使う気遣いの表現。",
    "similar": [
     {
      "es": "Tranquilo/a.",
      "ja": "大丈夫だよ、落ち着いて。"
     },
     {
      "es": "No pasa nada.",
      "ja": "何も問題ないよ。"
     }
    ],
    "en": "Don't worry."
   },
   {
    "es": "No te vayas.",
    "ja": "行かないで。",
    "note": "irse（立ち去る）の否定命令。肯定形のvete（行け）と対で覚えると理解が深まる",
    "grammar": "irse（立ち去る）の再帰動詞の否定命令形（tú形）。肯定命令形（vete）とは異なる接続法の形を使う。",
    "nuance": "相手に去ってほしくないという気持ちを伝える表現。",
    "similar": [
     {
      "es": "Quédate un poco más.",
      "ja": "もう少しいて。"
     },
     {
      "es": "No me dejes solo/a.",
      "ja": "一人にしないで。"
     }
    ],
    "en": "Don't leave."
   },
   {
    "es": "Pásame la sal, por favor.",
    "ja": "塩取って。",
    "note": "食卓での『取って』は基本pasar。何にでも使い回せる万能動詞",
    "grammar": "pasar（渡す）の肯定命令形にme（私に）が接続。食卓での物の受け渡しによく使う定型パターン。",
    "nuance": "食事中に物を取ってほしいときのカジュアルな依頼表現。",
    "similar": [
     {
      "es": "¿Me pasas la sal?",
      "ja": "塩取ってもらえる？"
     },
     {
      "es": "Alcánzame la sal.",
      "ja": "塩を取って（届かせて）。"
     }
    ],
    "en": "Pass me the salt, please."
   },
   {
    "es": "Repite, por favor.",
    "ja": "もう一度言って。",
    "note": "聞き取れなかったときはこの一言で何度でも聞き返していい",
    "grammar": "repetir（繰り返す）の肯定命令形（tú形）。聞き取れなかったときの依頼表現。",
    "nuance": "相手の発言が聞き取れなかったときに使う実用的な表現。",
    "similar": [
     {
      "es": "¿Puedes repetir eso?",
      "ja": "それもう一度言ってもらえる？"
     },
     {
      "es": "¿Cómo dijiste?",
      "ja": "何て言ったの？"
     }
    ],
    "en": "Say it again, please."
   },
   {
    "es": "Vamos.",
    "ja": "行こう。",
    "note": "irのnosotros形命令は特殊で、vamosは『行こう』の他に『さあ』という掛け声にもなる",
    "grammar": "ir（行く）のnosotros形命令（勧誘表現）。「私たちで行こう」という一人称複数への呼びかけ。",
    "nuance": "一緒に行動しようと誘う、日常会話で非常によく使われる表現。",
    "similar": [
     {
      "es": "Vámonos.",
      "ja": "さあ、行こう（再帰形でより口語的）。"
     },
     {
      "es": "¿Nos vamos?",
      "ja": "行く？（疑問形での誘い）"
     }
    ],
    "en": "Let's go."
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
    "note": "メキシコ限定の電話の出方。スペインならdiga、他の中南米諸国ならalóが主流",
    "grammar": "本来はbueno（良い）という形容詞だが、電話に出るときの応答詞として慣用化している。",
    "nuance": "メキシコ特有の電話応答表現。他のスペイン語圏ではdiga（スペイン）やaló（多くの中南米諸国）が使われる。",
    "similar": [
     {
      "es": "¿Diga?",
      "ja": "もしもし？（スペインでの言い方）"
     },
     {
      "es": "¿Aló?",
      "ja": "もしもし？（多くの中南米諸国での言い方）"
     }
    ],
    "en": "Hello?"
   },
   {
    "es": "¿Con quién hablo?",
    "ja": "どちら様ですか？",
    "note": "『どちら様』を意味する、ビジネス電話でも使える丁寧な聞き方",
    "grammar": "hablar（話す）の直説法現在1人称単数疑問形。con quién（誰と）が話し相手を尋ねる。",
    "nuance": "電話口の相手が誰か確認する、少しフォーマルな聞き方。",
    "similar": [
     {
      "es": "¿Quién habla?",
      "ja": "どちら様ですか？（よりカジュアル）"
     },
     {
      "es": "¿Me puede decir su nombre?",
      "ja": "お名前を伺えますか？"
     }
    ],
    "en": "Who am I speaking with?"
   },
   {
    "es": "¿Está Juan, por favor?",
    "ja": "フアンさんいらっしゃいますか？",
    "note": "estarを使うのは『今そこにいるか』という一時的な状態を聞いているから",
    "grammar": "estar（在宅・在席）の直説法現在3人称単数疑問形。「フアンさんはいらっしゃいますか」という所在確認の定型表現。",
    "nuance": "電話で特定の人を呼び出してもらいたいときの表現。",
    "similar": [
     {
      "es": "¿Se encuentra Juan?",
      "ja": "フアンさんはいらっしゃいますか？（ややフォーマル）"
     },
     {
      "es": "¿Me comunica con Juan?",
      "ja": "フアンさんにつないでもらえますか？"
     }
    ],
    "en": "Is Juan there, please?"
   },
   {
    "es": "Un momento, por favor, ahora le paso.",
    "ja": "少々お待ちください、今おつなぎします。",
    "note": "pasarは『渡す』。電話を人に取り次ぐときのpasarは日本語の『代わります』に近い",
    "grammar": "pasar（取り次ぐ）の直説法現在1人称単数。leは間接目的語（あなたに）で、電話を「その人に渡す」というニュアンス。",
    "nuance": "電話を取り次ぐときの、受付や家族がよく使う表現。",
    "similar": [
     {
      "es": "Espere, ya le comunico.",
      "ja": "お待ちください、おつなぎします。"
     },
     {
      "es": "En un momento le paso la llamada.",
      "ja": "すぐにお電話をおつなぎします。"
     }
    ],
    "en": "One moment, please, I'll put you through now."
   },
   {
    "es": "Se cortó la llamada.",
    "ja": "電話が切れちゃった。",
    "note": "cortarse（切れる）は電話だけでなく、水道や電気が止まったときにも使える動詞",
    "grammar": "cortarse（切れる）の再帰動詞の点過去3人称単数。la llamada（通話）が主語。",
    "nuance": "通話が途切れたことを客観的に伝える表現。",
    "similar": [
     {
      "es": "Se colgó la llamada.",
      "ja": "通話が切れました。"
     },
     {
      "es": "Perdí la señal.",
      "ja": "電波が切れました。"
     }
    ],
    "en": "The call got cut off."
   },
   {
    "es": "Te mando un mensaje después.",
    "ja": "あとでメッセージ送るね。",
    "note": "mandarとenviarはほぼ同義。日常会話ではmandarの方がよく使われる",
    "grammar": "mandar（送る）の直説法現在1人称単数。después（後で）が時間を示す副詞。",
    "nuance": "今すぐ話せないときに、後で連絡すると伝えるカジュアルな表現。",
    "similar": [
     {
      "es": "Te escribo luego.",
      "ja": "あとで書くね（メッセージするね）。"
     },
     {
      "es": "Ahorita te mando algo.",
      "ja": "今すぐメッセージ送るね。"
     }
    ],
    "en": "I'll send you a message later."
   },
   {
    "es": "¿Me puedes llamar cuando puedas?",
    "ja": "手が空いたら電話してもらえる？",
    "note": "cuando puedasは接続法。『いつか分からないけどできるとき』という不確かさを表す",
    "grammar": "poder + 不定詞llamar（電話する）の疑問形。cuando puedas（できるときに）が接続法を使った時間節。",
    "nuance": "急ぎではないが折り返しの電話をお願いしたいときの表現。",
    "similar": [
     {
      "es": "Llámame cuando tengas chance.",
      "ja": "時間ができたら電話して。"
     },
     {
      "es": "Avísame cuando estés libre.",
      "ja": "手が空いたら教えて。"
     }
    ],
    "en": "Can you call me when you get a chance?"
   },
   {
    "es": "No tengo señal aquí.",
    "ja": "ここ電波が入らないんだ。",
    "note": "señalは『電波』のほかに『信号・サイン』の意味もある単語",
    "grammar": "tener（持つ）の直説法現在1人称単数の否定形。señal（電波）が目的語。",
    "nuance": "電波状況が悪いことを伝える、通話・通信トラブルの定番表現。",
    "similar": [
     {
      "es": "Aquí no hay cobertura.",
      "ja": "ここは電波が届いていません。"
     },
     {
      "es": "Tengo mala señal.",
      "ja": "電波が悪いです。"
     }
    ],
    "en": "I don't have signal here."
   },
   {
    "es": "Se me acabó la batería.",
    "ja": "バッテリーが切れちゃった。",
    "note": "se me acabóは『（自分の意志と関係なく）尽きてしまった』という無意志の構文",
    "grammar": "acabarse（尽きる）の再帰動詞の点過去3人称単数。se me acabóで「私のバッテリーが尽きてしまった」という無意志の構文。",
    "nuance": "バッテリー切れを伝える、日常会話でよく使う表現。",
    "similar": [
     {
      "es": "Mi celular se quedó sin batería.",
      "ja": "携帯の充電がなくなりました。"
     },
     {
      "es": "Ya no tengo batería.",
      "ja": "もうバッテリーがありません。"
     }
    ],
    "en": "My battery died."
   },
   {
    "es": "Se cortó la llamada.",
    "ja": "電話が切れちゃった。",
    "note": "4番と同じ。通話トラブルは繰り返し起きるものなので、何度でも使っていい",
    "grammar": "4番と同じ構文の繰り返し使用。",
    "nuance": "会話の中で複数回このトラブルが起きた場面を想定。",
    "similar": [
     {
      "es": "La llamada se cayó.",
      "ja": "通話が切れました。"
     },
     {
      "es": "Nos cortaron.",
      "ja": "通話が切られました。"
     }
    ],
    "en": "The call got cut off."
   },
   {
    "es": "No te escucho bien.",
    "ja": "よく聞こえないよ。",
    "note": "escucharを使うことで『聞こうとしているのに聞こえない』というニュアンスが出る",
    "grammar": "escuchar（聞く）の直説法現在1人称単数の否定形。bien（よく）を否定して聞き取りにくさを表す。",
    "nuance": "電波状況が悪いときや騒がしい場所での通話でよく使う表現。",
    "similar": [
     {
      "es": "Se escucha entrecortado.",
      "ja": "途切れ途切れに聞こえます。"
     },
     {
      "es": "¿Me escuchas?",
      "ja": "聞こえてる？"
     }
    ],
    "en": "I can't hear you well."
   },
   {
    "es": "Te mando un mensaje después.",
    "ja": "後でメッセージ送るね。",
    "note": "5番と同じ。曖昧に流したいときの便利な逃げ道フレーズでもある",
    "grammar": "5番と同一の構文の繰り返し使用。",
    "nuance": "5番のバリエーションとして、別の会話の流れで使われる想定。",
    "similar": [
     {
      "es": "Te aviso por mensaje.",
      "ja": "メッセージで知らせるね。"
     },
     {
      "es": "Hablamos por WhatsApp.",
      "ja": "WhatsAppで話そう。"
     }
    ],
    "en": "I'll send you a message later."
   },
   {
    "es": "¿Me puedes mandar tu ubicación?",
    "ja": "位置情報送ってもらえる？",
    "note": "ubicaciónはGPSアプリでもそのまま表示される単語",
    "grammar": "poder + 不定詞mandar（送る）の疑問形。tu ubicación（あなたの位置情報）が目的語。",
    "nuance": "待ち合わせなどで相手の現在地を知りたいときのカジュアルな依頼表現。",
    "similar": [
     {
      "es": "Mándame tu ubicación, por favor.",
      "ja": "位置情報送ってね。"
     },
     {
      "es": "¿Dónde estás? Compárteme el mapa.",
      "ja": "今どこ？地図共有して。"
     }
    ],
    "en": "Can you send me your location?"
   },
   {
    "es": "Se me acabó la batería.",
    "ja": "バッテリーが切れちゃった。",
    "note": "8番と同じ。電話を切る口実としても便利に使われる定番フレーズ",
    "grammar": "8番と同一の構文の繰り返し使用。",
    "nuance": "8番のバリエーションとして、別の場面での使用を想定。",
    "similar": [
     {
      "es": "Mi teléfono está a punto de apagarse.",
      "ja": "携帯がもうすぐ電源落ちそう。"
     },
     {
      "es": "Me quedo sin batería, te llamo luego.",
      "ja": "バッテリーがなくなりそう、後で電話するね。"
     }
    ],
    "en": "My battery died."
   },
   {
    "es": "Estoy a punto de salir.",
    "ja": "今にも出るところです。",
    "grammar": "estar a punto de + 不定詞（今にも〜するところだ）という重要な構文。punto（点）から来ていて、「〜する一点にいる」というイメージです。",
    "nuance": "「もうすぐ出る」という差し迫った感じを表すので、電話やメッセージで「今行くところだよ」と伝えるときによく使われます。",
    "similar": [
     {
      "es": "Ya casi salgo.",
      "ja": "もうすぐ出るよ（より口語的）"
     },
     {
      "es": "Voy saliendo.",
      "ja": "今出るところだよ"
     }
    ],
    "note": "『a punto de + 不定詞』は『まさに〜しようとしている』という直前の動作を表す型",
    "en": "I'm about to leave."
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
    "note": "dedicarse a（〜に従事する）は再帰動詞。『自分を〜に捧げる』という発想が面白い",
    "grammar": "dedicarse a（〜に従事する）という再帰動詞の熟語。¿A qué te dedicas?は直訳すると「あなたは何に自分を捧げていますか？」です。",
    "nuance": "「お仕事は何をされていますか？」と尋ねる、とても自然でよく使われる聞き方です。¿Qué haces?（何してるの？）よりも職業を尋ねるニュアンスが明確です。",
    "similar": [
     {
      "es": "¿En qué trabajas?",
      "ja": "どんな仕事をしていますか？"
     },
     {
      "es": "¿Cuál es tu profesión?",
      "ja": "あなたの職業は何ですか？（ややフォーマル）"
     }
    ],
    "en": "What do you do for a living?"
   },
   {
    "es": "¿De dónde eres?",
    "ja": "出身はどこですか？",
    "note": "serを使うのは『出身』が変わらない性質だから。estarではなくserが正解",
    "grammar": "ser（〜出身である）の直説法現在2人称単数疑問形。de dónde（どこから）が出身を尋ねる。",
    "nuance": "初対面でよく聞かれる、シンプルでカジュアルな出身確認の表現。",
    "similar": [
     {
      "es": "¿De qué país eres?",
      "ja": "どちらの国のご出身ですか？"
     },
     {
      "es": "¿Eres de aquí?",
      "ja": "ここの出身ですか？"
     }
    ],
    "en": "Where are you from?"
   },
   {
    "es": "¿Cuánto tiempo llevas viviendo aquí?",
    "ja": "ここに住んでどれくらいですか？",
    "note": "llevar + 現在分詞は『〜し続けている』を表す構文。継続を表す便利な型",
    "grammar": "llevar + 期間 + 現在分詞（〜し続けている）という、継続期間を表す重要な構文です。以前の「ドリル」でも扱った型です。",
    "nuance": "「いつからここに住んでいますか？」ではなく「どれくらいの期間住んでいますか？」と、継続している期間そのものを尋ねる自然な聞き方です。",
    "similar": [
     {
      "es": "¿Desde cuándo vives aquí?",
      "ja": "いつからここに住んでいますか？"
     }
    ],
    "en": "How long have you been living here?"
   },
   {
    "es": "¡Qué calor/frío hace hoy!",
    "ja": "今日は暑いね/寒いね！",
    "note": "感嘆文の¡Qué + 名詞!は、天気に限らずどんな話題の切り出しにも使える",
    "grammar": "感嘆文「¡Qué + 名詞化された形容詞 + hace!」というhacer（（天気が）〜である）を使った天気の慣用表現。",
    "nuance": "天気の話は世界共通の無難な雑談の切り口として、スペイン語でもよく使われる。",
    "similar": [
     {
      "es": "¡Está haciendo mucho calor!",
      "ja": "すごく暑くなってきたね！"
     },
     {
      "es": "¡Qué clima tan agradable!",
      "ja": "なんて気持ちのいい天気なんだろう！"
     }
    ],
    "en": "It's so hot/cold today!"
   },
   {
    "es": "¿Tienes planes para el fin de semana?",
    "ja": "週末の予定ある？",
    "note": "『fin de semana』は直訳で『週の終わり』。感覚的に覚えやすい複合語",
    "grammar": "tener（持つ）の直説法現在2人称単数疑問形。planes para（〜のための予定）という定型表現。",
    "nuance": "週末の予定を尋ねる、カジュアルな会話の広げ方。",
    "similar": [
     {
      "es": "¿Qué vas a hacer el fin de semana?",
      "ja": "週末は何するの？"
     },
     {
      "es": "¿Tienes algo planeado?",
      "ja": "何か予定入ってる？"
     }
    ],
    "en": "Do you have plans for the weekend?"
   },
   {
    "es": "¡Cuánto tiempo sin verte!",
    "ja": "久しぶりだね！",
    "note": "sin + 不定詞で『〜せずに』。再会の挨拶として定着してる決まり文句",
    "grammar": "感嘆文「¡Cuánto + 名詞 + sin + 不定詞!」という構文。sin verte（あなたに会わずに）で経過時間の長さを強調。",
    "nuance": "久しぶりに会った人への定番の挨拶。",
    "similar": [
     {
      "es": "¡Tanto tiempo!",
      "ja": "久しぶり！"
     },
     {
      "es": "¡Qué gusto verte de nuevo!",
      "ja": "また会えて嬉しい！"
     }
    ],
    "en": "It's been so long since I've seen you!"
   },
   {
    "es": "Nos vemos pronto, ¿va?",
    "ja": "また近いうちに会おうね？",
    "note": "文末の¿va?は『だよね？』と軽く念を押す口語表現。¿no?よりカジュアル",
    "grammar": "vernos（会う）の再帰動詞1人称複数、直説法現在。¿va?は「いいよね？」と念を押す口語的な付加疑問。",
    "nuance": "別れ際に軽く次の約束を交わすカジュアルな一言。",
    "similar": [
     {
      "es": "Nos vemos pronto.",
      "ja": "また近いうちに会おうね。"
     },
     {
      "es": "Hay que vernos más seguido.",
      "ja": "もっと頻繁に会おうね。"
     }
    ],
    "en": "See you soon, okay?"
   },
   {
    "es": "Que te vaya bien.",
    "ja": "うまくいきますように。",
    "note": "Que + 接続法は『〜でありますように』という祈願文。別れ際の温かい定番",
    "grammar": "接続法現在を使った祈願文「Que + 接続法」。irle bien（〜がうまくいく）という間接目的語構文。",
    "nuance": "別れ際に相手の幸運を願う、温かみのある表現。",
    "similar": [
     {
      "es": "Cuídate mucho.",
      "ja": "お大事に、気をつけてね。"
     },
     {
      "es": "Que tengas un buen día.",
      "ja": "良い一日を。"
     }
    ],
    "en": "Take care."
   },
   {
    "es": "¿A qué te dedicas?",
    "ja": "お仕事は何をされていますか？",
    "note": "0番と同じ。職業を尋ねるのはスモールトークの定番の切り口",
    "grammar": "dedicarse a（〜に従事する）という再帰動詞の熟語。¿A qué te dedicas?は直訳すると「あなたは何に自分を捧げていますか？」です。",
    "nuance": "「お仕事は何をされていますか？」と尋ねる、とても自然でよく使われる聞き方です。¿Qué haces?（何してるの？）よりも職業を尋ねるニュアンスが明確です。",
    "similar": [
     {
      "es": "¿En qué trabajas?",
      "ja": "どんな仕事をしていますか？"
     },
     {
      "es": "¿Cuál es tu profesión?",
      "ja": "あなたの職業は何ですか？（ややフォーマル）"
     }
    ],
    "en": "What do you do for a living?"
   },
   {
    "es": "¿De dónde eres originalmente?",
    "ja": "出身はどちらですか？",
    "note": "originalmenteを足すと『今はここに住んでるけど元々は』というニュアンスが出る",
    "grammar": "1番と似た構文にoriginalmente（もともと）を加えて、より詳しく出身を尋ねる形。",
    "nuance": "今住んでいる場所と出身地が異なりそうなときに使う、少し踏み込んだ聞き方。",
    "similar": [
     {
      "es": "¿Naciste aquí?",
      "ja": "ここで生まれたの？"
     },
     {
      "es": "¿Cuál es tu país de origen?",
      "ja": "出身国はどちらですか？"
     }
    ],
    "en": "Where are you originally from?"
   },
   {
    "es": "¿Cuánto tiempo llevas viviendo aquí?",
    "ja": "ここに住んでどれくらいになりますか？",
    "note": "2番と同じ。移住者や長期滞在者との会話で自然に出てくる質問",
    "grammar": "llevar + 期間 + 現在分詞（〜し続けている）という、継続期間を表す重要な構文です。以前の「ドリル」でも扱った型です。",
    "nuance": "「いつからここに住んでいますか？」ではなく「どれくらいの期間住んでいますか？」と、継続している期間そのものを尋ねる自然な聞き方です。",
    "similar": [
     {
      "es": "¿Desde cuándo vives aquí?",
      "ja": "いつからここに住んでいますか？"
     }
    ],
    "en": "How long have you been living here?"
   },
   {
    "es": "¿Qué planes tienes para el fin de semana?",
    "ja": "週末は何か予定ある？",
    "note": "疑問詞を文頭に出す語順もスペイン語では自然。4番と同じ内容でも印象が変わる",
    "grammar": "4番と似た構文だが、qué planes（どんな予定）を文頭に出した疑問詞疑問文。",
    "nuance": "4番よりも少し具体的な予定の内容を尋ねるニュアンス。",
    "similar": [
     {
      "es": "¿Algo especial este fin de semana?",
      "ja": "今週末は何か特別なことある？"
     },
     {
      "es": "¿Cómo vas a pasar el fin de semana?",
      "ja": "週末どう過ごす予定？"
     }
    ],
    "en": "What plans do you have for the weekend?"
   },
   {
    "es": "El tráfico estuvo terrible hoy.",
    "ja": "今日は渋滞がひどかったよ。",
    "note": "メキシコシティの渋滞は世界的にも有名で、鉄板の世間話ネタになる",
    "grammar": "estar（一時的な状態）の点過去3人称単数。terrible（ひどい）が状態を表す形容詞。",
    "nuance": "天気と並んで定番の雑談ネタである渋滞について話す表現。",
    "similar": [
     {
      "es": "Había mucho tráfico hoy.",
      "ja": "今日は渋滞がすごかった。"
     },
     {
      "es": "Me tardé el doble por el tráfico.",
      "ja": "渋滞で普段の倍の時間がかかった。"
     }
    ],
    "en": "Traffic was terrible today."
   },
   {
    "es": "¿Viste el partido ayer?",
    "ja": "昨日の試合見た？",
    "note": "サッカーの話題はメキシコでは性別問わず盛り上がる定番の話のタネ",
    "grammar": "ver（見る）の点過去2人称単数疑問形。el partido（試合）が目的語。",
    "nuance": "スポーツの話題を振る、男女問わずよく使われるカジュアルな雑談の切り口。",
    "similar": [
     {
      "es": "¿Cómo estuvo el partido?",
      "ja": "試合どうだった？"
     },
     {
      "es": "¿Ganó tu equipo?",
      "ja": "あなたのチーム勝った？"
     }
    ],
    "en": "Did you watch the game yesterday?"
   },
   {
    "es": "Qué calor hace hoy, ¿no?",
    "ja": "今日暑いよね？",
    "note": "3番に¿no?を足しただけで、相手の同意を引き出す会話になる",
    "grammar": "3番と似た感嘆表現に、¿no?（そうだよね？）という付加疑問をつけて同意を求める形。",
    "nuance": "天気の話に相手の同意を求める、会話を続けやすくする言い方。",
    "similar": [
     {
      "es": "Hace mucho calor, ¿verdad?",
      "ja": "すごく暑いよね？"
     },
     {
      "es": "Está haciendo un calor terrible.",
      "ja": "ひどい暑さだね。"
     }
    ],
    "en": "It's hot today, isn't it?"
   },
   {
    "es": "¿Cómo va todo por tu casa?",
    "ja": "家族はみんな元気？",
    "note": "『por tu casa』は家そのものではなく家族全体を指す、口語的な広がりのある表現",
    "grammar": "ir（〜が進む・〜である）の直説法現在3人称単数疑問形。por tu casa（あなたの家の方は）で家族全体を指す口語的表現。",
    "nuance": "相手の家族の様子を気遣うカジュアルな聞き方。",
    "similar": [
     {
      "es": "¿Cómo está tu familia?",
      "ja": "ご家族はお元気ですか？"
     },
     {
      "es": "¿Todo bien por tu casa?",
      "ja": "家族はみんな元気にしてる？"
     }
    ],
    "en": "How's everything at home?"
   },
   {
    "es": "Hace tiempo que no nos vemos.",
    "ja": "久しぶりだね。",
    "note": "5番より落ち着いたトーン。ビジネスシーンでも使いやすい久しぶりの挨拶",
    "grammar": "hace tiempo que（〜してから時間が経つ）という時間経過を表す構文。no nos vemos（会っていない）が続く。",
    "nuance": "5番と似た内容だが、より落ち着いたトーンで久しぶりを伝える表現。",
    "similar": [
     {
      "es": "Ya no nos vemos tan seguido.",
      "ja": "最近あまり会えていないね。"
     },
     {
      "es": "Hace mucho que no coincidimos.",
      "ja": "最近全然会えていないね。"
     }
    ],
    "en": "It's been a while since we've seen each other."
   },
   {
    "es": "¿Qué tal el fin de semana?",
    "ja": "週末どうだった？",
    "note": "¿Qué tal...?は本当に万能。天気でも仕事でも旅行でも何にでも使える",
    "grammar": "¿qué tal + 名詞?（〜はどうだった？）という定型の感想を尋ねる疑問文。",
    "nuance": "週明けの雑談で、相手の週末について尋ねる定番の切り出し。",
    "similar": [
     {
      "es": "¿Cómo estuvo tu fin de semana?",
      "ja": "週末はどうだった？"
     },
     {
      "es": "¿Hiciste algo divertido el fin de semana?",
      "ja": "週末何か楽しいことした？"
     }
    ],
    "en": "How was the weekend?"
   },
   {
    "es": "Se me hizo tarde.",
    "ja": "遅刻しちゃったんだ。",
    "grammar": "hacerse（〜になる）を使った無意識のse構文。直訳は「私にとって遅くなった」で、自分の意志と関係なく起きたことを表す典型的な型です。",
    "nuance": "「遅刻しちゃった」という、自分のせいというより状況的にそうなった、というニュアンスが出せる便利な表現です。",
    "similar": [
     {
      "es": "Llegué tarde.",
      "ja": "遅刻した（より直接的な言い方）"
     }
    ],
    "note": "se me hizoは『（気づいたら）〜になっていた』。遅刻の言い訳の定番構文",
    "en": "I ran late."
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
    "note": "『departamento』はメキシコでのマンション・アパートの呼び方。piso（スペイン）とは違う",
    "grammar": "estar + 現在分詞buscando（探している）という進行形。en renta（賃貸の）が物件の種類を示す。",
    "nuance": "不動産屋やオーナーに部屋を探していることを伝える最初の一言。",
    "similar": [
     {
      "es": "Busco un departamento para rentar.",
      "ja": "賃貸用のアパートを探しています。"
     },
     {
      "es": "¿Tiene departamentos disponibles?",
      "ja": "空いている部屋はありますか？"
     }
    ],
    "en": "I'm looking for an apartment to rent."
   },
   {
    "es": "¿Cuánto es la renta mensual?",
    "ja": "月々の家賃はいくらですか？",
    "note": "mensual（月ごとの）はanual（年ごとの）、semanal（週ごとの）とセットで覚えると便利",
    "grammar": "ser（〜である）の直説法現在3人称単数疑問形。mensual（月々の）がrentaを修飾する形容詞。",
    "nuance": "家賃の金額を確認する、部屋探しで最も基本的な質問。",
    "similar": [
     {
      "es": "¿Cuánto cuesta al mes?",
      "ja": "月々いくらですか？"
     },
     {
      "es": "¿Cuál es el precio de la renta?",
      "ja": "家賃はいくらですか？"
     }
    ],
    "en": "How much is the monthly rent?"
   },
   {
    "es": "¿Los servicios están incluidos?",
    "ja": "光熱費は含まれていますか？",
    "note": "『servicios』は電気・水道・ガスなど公共料金全般を指すまとめ言葉",
    "grammar": "estar incluido（含まれている）の直説法現在3人称複数疑問形。servicios（光熱費・公共料金）が主語。",
    "nuance": "電気・水道・ガスなどが家賃に含まれるかを確認する重要な質問。",
    "similar": [
     {
      "es": "¿La luz y el agua están incluidas?",
      "ja": "電気と水道は含まれていますか？"
     },
     {
      "es": "¿Tengo que pagar los servicios aparte?",
      "ja": "光熱費は別払いですか？"
     }
    ],
    "en": "Are utilities included?"
   },
   {
    "es": "¿Se necesita depósito?",
    "ja": "敷金は必要ですか？",
    "note": "depósitoは敷金・保証金。日本の『敷金』とほぼ同じ役割の慣習",
    "grammar": "necesitar（必要とする）の再帰受身的用法se necesita（必要とされる）。depósito（敷金・保証金）が主語。",
    "nuance": "契約時にかかる初期費用を確認する表現。",
    "similar": [
     {
      "es": "¿Piden depósito?",
      "ja": "敷金は求められますか？"
     },
     {
      "es": "¿Cuánto es el depósito requerido?",
      "ja": "必要な敷金はいくらですか？"
     }
    ],
    "en": "Is a deposit required?"
   },
   {
    "es": "¿Se permiten mascotas?",
    "ja": "ペットは飼えますか？",
    "note": "permitirseの受け身的な使い方。『se + 動詞』で規則やルールを表す型",
    "grammar": "permitir（許可する）を使った受け身的なse構文（se pasiva）。「ペットは許可されていますか？」という意味です。",
    "nuance": "無人称のseを使うことで、「誰が許可するか」をぼかして、規則やルールとして自然に尋ねる形になります。",
    "similar": [
     {
      "es": "¿Aceptan mascotas?",
      "ja": "ペットを受け入れていますか？"
     }
    ],
    "en": "Are pets allowed?"
   },
   {
    "es": "¿Cuándo puedo mudarme?",
    "ja": "いつ引っ越せますか？",
    "note": "mudarseは『引っ越す』。単なるmoverと違い、生活拠点を移すニュアンス",
    "grammar": "poder + 不定詞mudarse（引っ越す）の再帰動詞の疑問形。cuándo（いつ）が時期を尋ねる。",
    "nuance": "入居可能日を確認する、契約前の重要な質問。",
    "similar": [
     {
      "es": "¿A partir de cuándo puedo entrar?",
      "ja": "いつから入居できますか？"
     },
     {
      "es": "¿Cuál es la fecha de mudanza?",
      "ja": "引っ越し可能日はいつですか？"
     }
    ],
    "en": "When can I move in?"
   },
   {
    "es": "¿Cuánto tiempo dura el contrato?",
    "ja": "契約期間はどれくらいですか？",
    "note": "durarは『続く』。映画の上映時間からイベントの期間まで幅広く使える動詞",
    "grammar": "durar（続く）の直説法現在3人称単数疑問形。el contrato（契約）が主語、cuánto tiempoが期間を尋ねる。",
    "nuance": "賃貸契約の期間を確認する基本的な質問。",
    "similar": [
     {
      "es": "¿Cuál es la duración del contrato?",
      "ja": "契約期間はどれくらいですか？"
     },
     {
      "es": "¿Es un contrato anual?",
      "ja": "1年契約ですか？"
     }
    ],
    "en": "How long is the lease?"
   },
   {
    "es": "El departamento está amueblado.",
    "ja": "その部屋は家具付きです。",
    "note": "muebleは『家具』、amuebladoはそこから派生した過去分詞形容詞",
    "grammar": "estar amueblado（家具付きである）という受動的な状態を表す表現。amueblarの過去分詞が形容詞化している。",
    "nuance": "部屋の設備状況をオーナー側から説明する表現。",
    "similar": [
     {
      "es": "Viene con muebles incluidos.",
      "ja": "家具込みです。"
     },
     {
      "es": "¿Está amueblado o vacío?",
      "ja": "家具付きですか、それとも空室ですか？"
     }
    ],
    "en": "The apartment is furnished."
   },
   {
    "es": "¿Cuánto es el depósito?",
    "ja": "保証金はいくらですか？",
    "note": "3番の要否確認から、金額を聞くステップへ進んだ形",
    "grammar": "3番と関連する構文だが、金額を具体的に尋ねる形。ser（〜である）の疑問形。",
    "nuance": "敷金の要否ではなく、具体的な金額を尋ねる質問。",
    "similar": [
     {
      "es": "¿A cuánto asciende el depósito?",
      "ja": "敷金はいくらになりますか？"
     },
     {
      "es": "¿El depósito equivale a un mes de renta?",
      "ja": "敷金は家賃1ヶ月分ですか？"
     }
    ],
    "en": "How much is the deposit?"
   },
   {
    "es": "¿Se permiten mascotas?",
    "ja": "ペット可ですか？",
    "note": "4番と同じ。物件探しでは何度も繰り返し確認したい大事な項目",
    "grammar": "permitir（許可する）を使った受け身的なse構文（se pasiva）。「ペットは許可されていますか？」という意味です。",
    "nuance": "無人称のseを使うことで、「誰が許可するか」をぼかして、規則やルールとして自然に尋ねる形になります。",
    "similar": [
     {
      "es": "¿Aceptan mascotas?",
      "ja": "ペットを受け入れていますか？"
     }
    ],
    "en": "Are pets allowed?"
   },
   {
    "es": "¿Los servicios están incluidos en la renta?",
    "ja": "光熱費は家賃に含まれていますか？",
    "note": "2番により具体的に『家賃に』を加えた形。契約書を読むときにも役立つ表現",
    "grammar": "2番と同じ内容にen la renta（家賃に）を加えて明確化した形。",
    "nuance": "2番のバリエーションで、より明示的に家賃込みかを確認する表現。",
    "similar": [
     {
      "es": "¿El internet está incluido?",
      "ja": "インターネットは含まれていますか？"
     },
     {
      "es": "¿Qué servicios cubre la renta?",
      "ja": "家賃にはどのサービスが含まれますか？"
     }
    ],
    "en": "Are utilities included in the rent?"
   },
   {
    "es": "¿Cuándo puedo mudarme?",
    "ja": "いつ引っ越せますか？",
    "note": "5番と同じ。入居日の確認は物件探しの最終段階で必ず聞くべきこと",
    "grammar": "5番と同一の構文の繰り返し使用。",
    "nuance": "5番のバリエーションとして、別の会話の流れで使われる想定。",
    "similar": [
     {
      "es": "¿Está disponible desde ya?",
      "ja": "今すぐ入居できますか？"
     },
     {
      "es": "¿Cuándo queda libre el departamento?",
      "ja": "いつ部屋が空きますか？"
     }
    ],
    "en": "When can I move in?"
   },
   {
    "es": "¿El contrato es por un año?",
    "ja": "契約は1年間ですか？",
    "note": "『por + 期間』で契約期間を表す。ビジネス全般で使える型",
    "grammar": "ser（〜である）の直説法現在3人称単数疑問形。por un año（1年間）が期間を示す。",
    "nuance": "6番よりも具体的に、1年契約かどうかをピンポイントで確認する質問。",
    "similar": [
     {
      "es": "¿Hay contratos más cortos?",
      "ja": "もっと短い契約はありますか？"
     },
     {
      "es": "¿Se puede rentar por seis meses?",
      "ja": "6ヶ月で借りることはできますか？"
     }
    ],
    "en": "Is the lease for one year?"
   },
   {
    "es": "¿Cuántos metros cuadrados tiene?",
    "ja": "何平米ですか？",
    "note": "メキシコでは面積は平方フィートではなく平方メートルが標準",
    "grammar": "tener（持つ）の直説法現在3人称単数疑問形。metros cuadrados（平方メートル）が広さの単位。",
    "nuance": "部屋の広さを客観的な数値で確認する表現。",
    "similar": [
     {
      "es": "¿De qué tamaño es el departamento?",
      "ja": "部屋の大きさはどれくらいですか？"
     },
     {
      "es": "¿Cuántas recámaras tiene?",
      "ja": "寝室はいくつありますか？"
     }
    ],
    "en": "How many square meters is it?"
   },
   {
    "es": "¿Se puede pintar las paredes?",
    "ja": "壁のペンキ塗り替えはできますか？",
    "note": "賃貸でも壁を塗っていいか聞けるのが面白いところ。物件やオーナー次第",
    "grammar": "poder（できる）の再帰受身的用法se puede（〜できる）+ pintar（塗る）。las paredes（壁）が目的語。",
    "nuance": "自分好みに部屋をカスタマイズできるか確認する質問。",
    "similar": [
     {
      "es": "¿Puedo cambiar el color de las paredes?",
      "ja": "壁の色を変えてもいいですか？"
     },
     {
      "es": "¿Está permitido hacer modificaciones?",
      "ja": "改装は許可されていますか？"
     }
    ],
    "en": "Can I paint the walls?"
   },
   {
    "es": "¿Hay estacionamiento incluido?",
    "ja": "駐車場は含まれていますか？",
    "note": "車社会のメキシコでは駐車場の有無が物件選びの重要ポイントになりがち",
    "grammar": "haber（〜がある）の直説法現在3人称単数疑問形。estacionamiento incluido（込みの駐車場）が主語。",
    "nuance": "車を持っている場合に確認しておきたい設備の一つ。",
    "similar": [
     {
      "es": "¿El departamento tiene lugar de estacionamiento?",
      "ja": "部屋に駐車スペースはありますか？"
     },
     {
      "es": "¿El estacionamiento tiene costo extra?",
      "ja": "駐車場は追加料金がかかりますか？"
     }
    ],
    "en": "Is parking included?"
   },
   {
    "es": "¿Cuánto tiempo dura el contrato?",
    "ja": "契約期間はどれくらいですか？",
    "note": "6番と同じ。契約の話は何度も確認しても失礼にはならない",
    "grammar": "6番と同一の構文の繰り返し使用。",
    "nuance": "6番のバリエーションとして、別の物件を検討する際の再確認。",
    "similar": [
     {
      "es": "¿Cuál es la vigencia del contrato?",
      "ja": "契約の有効期間はどれくらいですか？"
     },
     {
      "es": "¿Se puede renovar el contrato?",
      "ja": "契約更新はできますか？"
     }
    ],
    "en": "How long is the lease?"
   },
   {
    "es": "Quisiera ver el departamento primero.",
    "ja": "先に部屋を見せてもらいたいのですが。",
    "note": "quisieraのおかげで、内見の希望も柔らかく丁寧に伝わる",
    "grammar": "quisiera（querer の丁寧な希望表現）+ ver（見る）+ primero（まず、先に）。",
    "nuance": "契約前に内見を希望する、丁寧で自然な依頼表現。",
    "similar": [
     {
      "es": "¿Puedo verlo antes de decidir?",
      "ja": "決める前に見せてもらえますか？"
     },
     {
      "es": "Me gustaría hacer una visita primero.",
      "ja": "まず内見をさせてもらいたいです。"
     }
    ],
    "en": "I'd like to see the apartment first."
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
    "note": "1語で叫べる緊急フレーズ。とっさに出るよう声に出して練習しておきたい",
    "grammar": "動詞ayudar（助ける）から派生した名詞ayuda（助け）を単独で使う叫び声的表現。",
    "nuance": "緊急時に最も短く、確実に伝わる一言。",
    "similar": [
     {
      "es": "¡Socorro!",
      "ja": "助けて！（より緊迫した表現）"
     },
     {
      "es": "¡Auxilio!",
      "ja": "助けて！（フォーマルな緊急語）"
     }
    ],
    "en": "Help!"
   },
   {
    "es": "Llame a la policía, por favor.",
    "ja": "警察を呼んでください。",
    "note": "policíaは女性名詞だが、警察官（男性）を指すときもla policíaのまま変わらない",
    "grammar": "llamar（呼ぶ）のusted命令形。a la policía（警察に）が目的語。",
    "nuance": "第三者に警察への通報を頼む緊急時の表現。",
    "similar": [
     {
      "es": "Necesito que llame a la policía.",
      "ja": "警察を呼んでほしいです。"
     },
     {
      "es": "¿Puede reportar esto a la policía?",
      "ja": "これを警察に報告してもらえますか？"
     }
    ],
    "en": "Call the police, please."
   },
   {
    "es": "Necesito un médico urgentemente.",
    "ja": "至急医者が必要です。",
    "note": "urgentementeのように-menteをつけると形容詞が副詞になる。urgente→urgentemente",
    "grammar": "necesitar（必要とする）の直説法現在1人称単数。urgentemente（至急に）が緊急性を強調する副詞。",
    "nuance": "命に関わる可能性がある状況で、緊急性を強く伝える表現。",
    "similar": [
     {
      "es": "¡Es una emergencia médica!",
      "ja": "医療緊急事態です！"
     },
     {
      "es": "Necesito atención médica inmediata.",
      "ja": "すぐに医療処置が必要です。"
     }
    ],
    "en": "I need a doctor urgently."
   },
   {
    "es": "Me robaron mi cartera.",
    "ja": "財布を盗まれました。",
    "note": "robaronは3人称複数の無人称的用法。『誰が』は分からなくても文が作れる",
    "grammar": "robar（盗む）の点過去3人称複数の無人称的用法。meは間接目的語（私から）。「誰かが私の財布を盗んだ」という意味。",
    "nuance": "盗難被害を警察やスタッフに報告する表現。",
    "similar": [
     {
      "es": "Me asaltaron.",
      "ja": "強盗に遭いました。"
     },
     {
      "es": "Alguien me robó la cartera.",
      "ja": "誰かに財布を盗まれました。"
     }
    ],
    "en": "My wallet was stolen."
   },
   {
    "es": "Perdí mi pasaporte.",
    "ja": "パスポートをなくしました。",
    "note": "パスポート紛失時は、まず大使館より先に現地警察に届け出るのが一般的な手順",
    "grammar": "perder（失う・なくす）の点過去1人称単数。mi pasaporte（私のパスポート）が目的語。",
    "nuance": "パスポート紛失を大使館や警察に報告する際の表現。",
    "similar": [
     {
      "es": "Se me perdió el pasaporte.",
      "ja": "パスポートをなくしてしまいました（無意志の構文）。"
     },
     {
      "es": "No encuentro mi pasaporte.",
      "ja": "パスポートが見つかりません。"
     }
    ],
    "en": "I lost my passport."
   },
   {
    "es": "¿Dónde está la embajada japonesa?",
    "ja": "日本大使館はどこですか？",
    "note": "embajada（大使館）とconsulado（領事館）は別物、都市によってどちらがあるか変わる",
    "grammar": "estar（所在）の直説法現在3人称単数疑問形。embajada japonesa（日本大使館）が主語。",
    "nuance": "パスポート紛失や重大なトラブル時に助けを求める窓口を探す表現。",
    "similar": [
     {
      "es": "¿Dónde está el consulado de Japón?",
      "ja": "日本領事館はどこですか？"
     },
     {
      "es": "Necesito contactar a mi embajada.",
      "ja": "大使館に連絡する必要があります。"
     }
    ],
    "en": "Where is the Japanese embassy?"
   },
   {
    "es": "No me siento bien, necesito ayuda.",
    "ja": "体調が悪いです、助けが必要です。",
    "note": "体調不良と助けの必要性、2つを1文にまとめた実践的な組み合わせ",
    "grammar": "sentirse（感じる）の再帰動詞の否定形に、necesitar（必要とする）の文を続けた2文構成。",
    "nuance": "体調不良と助けの必要性を同時に伝える表現。",
    "similar": [
     {
      "es": "Me siento muy mal, ayúdenme.",
      "ja": "すごく気分が悪いです、助けてください。"
     },
     {
      "es": "Creo que necesito ir al hospital.",
      "ja": "病院に行く必要があると思います。"
     }
    ],
    "en": "I don't feel well, I need help."
   },
   {
    "es": "Hubo un accidente.",
    "ja": "事故がありました。",
    "note": "hayの過去形hubo。事件・事故の報告に使う定番の型",
    "grammar": "haber（〜があった）の点過去3人称単数（hubo）。un accidente（事故）が主語。",
    "nuance": "事故が起きたことを客観的に報告する表現。",
    "similar": [
     {
      "es": "Ocurrió un accidente aquí.",
      "ja": "ここで事故が起きました。"
     },
     {
      "es": "Hubo un choque.",
      "ja": "衝突事故がありました。"
     }
    ],
    "en": "There was an accident."
   },
   {
    "es": "¡Se está quemando algo!",
    "ja": "何か燃えています！",
    "note": "estar + 現在分詞の進行形。『今まさに』起きていることを伝える緊急感がある",
    "grammar": "quemarse（燃える）の再帰動詞、現在進行形（estar + 現在分詞）。algo（何か）が主語。",
    "nuance": "火災の初期段階で周囲に緊急事態を伝える叫び声的表現。",
    "similar": [
     {
      "es": "¡Huele a quemado!",
      "ja": "焦げ臭い！"
     },
     {
      "es": "¡Hay humo!",
      "ja": "煙が出ている！"
     }
    ],
    "en": "Something is burning!"
   },
   {
    "es": "Alguien se desmayó.",
    "ja": "誰かが気を失いました。",
    "note": "desmayarseは『気絶する』。日常会話ではあまり使わないが、いざという時のために",
    "grammar": "desmayarse（気を失う）の再帰動詞の点過去3人称単数。alguien（誰か）が主語。",
    "nuance": "周囲で人が倒れたことを助けを呼ぶために伝える表現。",
    "similar": [
     {
      "es": "Una persona se cayó y no reacciona.",
      "ja": "人が倒れて反応がありません。"
     },
     {
      "es": "Alguien perdió el conocimiento.",
      "ja": "誰かが意識を失いました。"
     }
    ],
    "en": "Someone fainted."
   },
   {
    "es": "Necesito el número de mi seguro.",
    "ja": "保険番号が必要です。",
    "note": "海外旅行保険の番号は、パスポートと一緒に控えを持ち歩くと安心",
    "grammar": "necesitar（必要とする）の直説法現在1人称単数。número de mi seguro（保険番号）が目的語。",
    "nuance": "病院で保険情報の提示を求められたときに、確認が必要なことを伝える表現。",
    "similar": [
     {
      "es": "¿Dónde tengo mi póliza de seguro?",
      "ja": "保険証書はどこにありますか？"
     },
     {
      "es": "Necesito mi tarjeta de seguro médico.",
      "ja": "健康保険証が必要です。"
     }
    ],
    "en": "I need my insurance number."
   },
   {
    "es": "¿Dónde está el hospital más cercano?",
    "ja": "一番近い病院はどこですか？",
    "note": "más cercano（最も近い）は最上級の基本パターン。ホテルやATM探しにも応用できる",
    "grammar": "estar（所在）の直説法現在3人称単数疑問形。más cercano（最も近い）が最上級表現。",
    "nuance": "急を要する状況で最寄りの病院を探す実用的な表現。",
    "similar": [
     {
      "es": "¿Cuál es el hospital más cercano?",
      "ja": "一番近い病院はどこですか？"
     },
     {
      "es": "¿Hay un hospital cerca de aquí?",
      "ja": "この近くに病院はありますか？"
     }
    ],
    "en": "Where is the nearest hospital?"
   },
   {
    "es": "¡Llamen a una ambulancia!",
    "ja": "救急車を呼んでください！",
    "note": "ustedes命令形。その場にいる複数の人に向けた呼びかけになる",
    "grammar": "llamar（呼ぶ）のustedes命令形。複数の人に向けた緊急の呼びかけ。",
    "nuance": "その場にいる複数の人々に緊急対応を求める強い表現。",
    "similar": [
     {
      "es": "¡Que alguien llame a una ambulancia!",
      "ja": "誰か救急車を呼んでください！"
     },
     {
      "es": "¡Necesitamos una ambulancia, rápido!",
      "ja": "救急車が必要です、急いで！"
     }
    ],
    "en": "Call an ambulance!"
   },
   {
    "es": "No puede respirar bien.",
    "ja": "うまく呼吸ができていません。",
    "note": "第三者の様子を伝える文。自分のことなら『No puedo respirar bien』に置き換える",
    "grammar": "poder（できる）の直説法現在3人称単数の否定形+ respirar（呼吸する）。第三者の状態を報告する客観文。",
    "nuance": "他の人の呼吸困難を救助者やスタッフに伝える緊急表現。",
    "similar": [
     {
      "es": "Le cuesta trabajo respirar.",
      "ja": "呼吸するのが辛そうです。"
     },
     {
      "es": "Se está ahogando.",
      "ja": "息ができなくなっています。"
     }
    ],
    "en": "He/She can't breathe well."
   },
   {
    "es": "¿Dónde está la salida de emergencia?",
    "ja": "非常口はどこですか？",
    "note": "salida（出口）とentrada（入口）はセットで覚えておくと建物内で迷わない",
    "grammar": "estar（所在）の直説法現在3人称単数疑問形。salida de emergencia（非常口）という複合名詞。",
    "nuance": "建物内での緊急避難経路を確認する表現。",
    "similar": [
     {
      "es": "¿Por dónde se sale en caso de emergencia?",
      "ja": "緊急時はどこから出ればいいですか？"
     },
     {
      "es": "¿Dónde están las escaleras de emergencia?",
      "ja": "非常階段はどこですか？"
     }
    ],
    "en": "Where is the emergency exit?"
   },
   {
    "es": "Hay un incendio en el edificio.",
    "ja": "建物で火事が起きています。",
    "note": "incendio（火災）とfuego（火）は似ているが、incendioは制御不能な火事を指す",
    "grammar": "haber（〜がある）の直説法現在3人称単数。un incendio（火事）が主語、en el edificio（建物内で）が場所。",
    "nuance": "建物火災の発生を周囲や消防に伝える緊急報告表現。",
    "similar": [
     {
      "es": "¡El edificio se está incendiando!",
      "ja": "建物が燃えています！"
     },
     {
      "es": "Hay fuego en el piso de arriba.",
      "ja": "上の階で火が出ています。"
     }
    ],
    "en": "There's a fire in the building."
   },
   {
    "es": "Ten cuidado con el escalón.",
    "ja": "段差に気をつけてください。",
    "grammar": "tener（持つ）のtú肯定命令形ten（不規則形）。tener cuidado con（〜に気をつける）という熟語を命令形にした形です。",
    "nuance": "友人や親しい間柄で「気をつけて」と注意を促すときの、日常的でとても頻繁に使われる表現です。",
    "similar": [
     {
      "es": "Cuidado con el escalón.",
      "ja": "段差に気をつけて（命令形を省略したカジュアルな言い方）"
     }
    ],
    "note": "『con + 名詞』で『〜に気をつけて』の対象を示す型。危険物全般に応用できる",
    "en": "Watch out for the step."
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
    "note": "相槌の頻度はスペイン語の方が日本語より多いと言われる。ためらわず頻繁に挟んでOK",
    "grammar": "感嘆詞。特定の文法構造を持たない、相槌専用の音。",
    "nuance": "相手の話を聞いていることを示す最も基本的な相槌。頻繁に相槌を打つのがスペイン語の会話の特徴。",
    "similar": [
     {
      "es": "Mmm.",
      "ja": "うんうん（考えながらの相槌）。"
     },
     {
      "es": "Sí, sí.",
      "ja": "うんうん、そうそう。"
     }
    ],
    "en": "Uh-huh."
   },
   {
    "es": "Claro.",
    "ja": "もちろん、その通り。",
    "note": "『もちろん』のclaroは、形容詞claro（明るい・明白な）がそのまま副詞的に転用された例",
    "grammar": "形容詞claro（明らかな）が単独で「もちろん」という同意の副詞的に使われる。",
    "nuance": "相手の意見や説明にはっきりと同意する相槌。",
    "similar": [
     {
      "es": "Por supuesto.",
      "ja": "もちろんです（ややフォーマル）。"
     },
     {
      "es": "Claro que sí.",
      "ja": "もちろんそうです。"
     }
    ],
    "en": "Sure."
   },
   {
    "es": "Sí, sí.",
    "ja": "うんうん、そうそう。",
    "note": "肯定を2回重ねるのはスペイン語特有の強調パターン。1回より温かみが増す",
    "grammar": "肯定語síを2回重ねることで強調する口語的パターン。",
    "nuance": "相手の話に積極的に共感していることを示す相槌。",
    "similar": [
     {
      "es": "Exacto.",
      "ja": "その通り。"
     },
     {
      "es": "Totalmente.",
      "ja": "全くその通り。"
     }
    ],
    "en": "Yes, yes."
   },
   {
    "es": "Ya veo.",
    "ja": "なるほど。",
    "note": "verは『見る』だが、『理解する』の意味でもよく使われる。『分かった＝見えた』という発想",
    "grammar": "ver（見る）の直説法現在1人称単数。ya（もう、すでに）を伴って「もう分かった」という理解の完了を表す。",
    "nuance": "相手の説明に納得したことを伝える相槌。claro（もちろん）よりも「新しく理解した」というニュアンスが強い。",
    "similar": [
     {
      "es": "Entiendo.",
      "ja": "分かります。"
     },
     {
      "es": "Ah, ya entendí.",
      "ja": "ああ、分かりました。"
     }
    ],
    "en": "I see."
   },
   {
    "es": "¿En serio?",
    "ja": "本当に？マジで？",
    "note": "驚きを表す万能フレーズ。声のトーンを上げるとより自然に聞こえる",
    "grammar": "en serio（真剣に、本当に）という前置詞句を使った疑問表現。",
    "nuance": "驚きや意外性を表現する、会話を弾ませる相槌。",
    "similar": [
     {
      "es": "¿De verdad?",
      "ja": "本当に？"
     },
     {
      "es": "¿No me digas?",
      "ja": "まさか！（直訳「私に言わないで」）"
     }
    ],
    "en": "Really?"
   },
   {
    "es": "No puede ser.",
    "ja": "うそでしょ、そんな。",
    "note": "直訳は『あり得ない』。ser（〜である）の可能性を否定する哲学的な構文",
    "grammar": "poder（できる）の直説法現在3人称単数の否定形+ser（である）。「そんなことはあり得ない」という驚きの慣用表現。",
    "nuance": "強い驚きや信じられない気持ちを表す相槌。",
    "similar": [
     {
      "es": "No lo puedo creer.",
      "ja": "信じられない。"
     },
     {
      "es": "¡No manches!",
      "ja": "うそでしょ！（メキシコ口語）"
     }
    ],
    "en": "No way."
   },
   {
    "es": "Este... / Esto...",
    "ja": "えーと…",
    "note": "本来は『これ』を指す指示語だが、日本語の『えーと』と同じ機能に転用されている",
    "grammar": "指示代名詞este/esto（これ）が本来の意味を離れ、言葉に詰まったときの間投詞的用法として使われる。",
    "nuance": "次に何を言うか考えているときの、日本語の「えーと」に近いフィラー。",
    "similar": [
     {
      "es": "Eh...",
      "ja": "えー…"
     },
     {
      "es": "Cómo te digo...",
      "ja": "何と言えばいいかな…"
     }
    ],
    "en": "Um..."
   },
   {
    "es": "O sea...",
    "ja": "つまり…、要するに…",
    "note": "『つまり』にあたる言い換えのフィラー。若者言葉としても非常によく使われる",
    "grammar": "「つまり」を意味する接続表現。文の言い換えや補足の前に置かれる。",
    "nuance": "自分の発言をより分かりやすく言い換えるときに使うフィラー。",
    "similar": [
     {
      "es": "Es decir...",
      "ja": "すなわち…（ややフォーマル）。"
     },
     {
      "es": "Digamos que...",
      "ja": "言うなれば…"
     }
    ],
    "en": "I mean..."
   },
   {
    "es": "Bueno...",
    "ja": "ええと…、まあ…",
    "note": "本来『良い』を意味するbuenoが、話の間つなぎとして全く違う機能を持つのが面白い",
    "grammar": "形容詞bueno（良い）が本来の意味を離れ、話の切り出しや間つなぎの間投詞として機能している。",
    "nuance": "話題を変えたり、少し間を置いてから話し始めるときに使う万能フィラー。",
    "similar": [
     {
      "es": "Pues bueno...",
      "ja": "まあ、それで…"
     },
     {
      "es": "Bueno, como sea...",
      "ja": "まあ、とにかく…"
     }
    ],
    "en": "Well..."
   },
   {
    "es": "Pues...",
    "ja": "うーん…、まあ…",
    "note": "スペイン語の会話に最も頻出するフィラーの一つ。口癖のようによく挟まれる",
    "grammar": "本来「では、それで」を意味する接続詞puesが、考えながら話すときの間投詞として頻用される。",
    "nuance": "スペイン語話者の会話に非常に頻繁に登場する、考えをまとめるための定番フィラー。",
    "similar": [
     {
      "es": "Pos...",
      "ja": "うーん…（puesのくだけた発音、メキシコ口語）"
     },
     {
      "es": "Este, pues...",
      "ja": "えーと、うーん…"
     }
    ],
    "en": "Well..."
   },
   {
    "es": "A ver...",
    "ja": "えーと…（考える）",
    "note": "直訳は『見てみよう』。考える時間を稼ぐときの自然な間つなぎ",
    "grammar": "ver（見る）を使った定型句「見てみよう」が、考えを整理するときの間投詞に転じたもの。",
    "nuance": "質問に対してすぐ答えず、少し考える時間を作るときの表現。",
    "similar": [
     {
      "es": "Déjame pensar...",
      "ja": "ちょっと考えさせて…"
     },
     {
      "es": "Vamos a ver...",
      "ja": "ええと、見てみようか…"
     }
    ],
    "en": "Let's see..."
   },
   {
    "es": "Digo...",
    "ja": "というか…（言い直し）",
    "note": "decir（言う）の1人称現在形。言い直すときの『あ、っていうか』に近い機能",
    "grammar": "decir（言う）の直説法現在1人称単数が、自分の発言を訂正・言い直すときの間投詞として使われる。",
    "nuance": "言い間違えたときや、より正確に言い直したいときに使う表現。",
    "similar": [
     {
      "es": "Bueno, digo...",
      "ja": "というか…（前置きを添えて）。"
     },
     {
      "es": "Mejor dicho...",
      "ja": "より正確に言うと…"
     }
    ],
    "en": "I mean... (correcting myself)"
   },
   {
    "es": "¿Me explico?",
    "ja": "伝わってる？分かる？",
    "note": "自分の説明が伝わっているか確認する、控えめだけど丁寧な気配り表現",
    "grammar": "explicarse（自分の意図を説明する）の再帰動詞、直説法現在1人称単数疑問形。",
    "nuance": "自分の説明が相手にきちんと伝わっているか確認する表現。",
    "similar": [
     {
      "es": "¿Se entiende?",
      "ja": "分かりますか？"
     },
     {
      "es": "¿Queda claro?",
      "ja": "はっきりしましたか？"
     }
    ],
    "en": "Does that make sense?"
   },
   {
    "es": "¿Sabes?",
    "ja": "でしょ？分かるでしょ？",
    "note": "英語のyou know?と全く同じ働き。文末に添えるだけで会話にリズムが出る",
    "grammar": "saber（知る）の直説法現在2人称単数疑問形。文末につけて、共感や念押しを求める付加疑問的用法。",
    "nuance": "英語のyou know?に近い、会話にリズムを加える相槌。",
    "similar": [
     {
      "es": "¿No crees?",
      "ja": "そう思わない？"
     },
     {
      "es": "¿Verdad?",
      "ja": "でしょ？"
     }
    ],
    "en": "You know?"
   },
   {
    "es": "Fíjate que...",
    "ja": "実はさ…、聞いて…",
    "note": "fijarse（気づく）の命令形が、話の枕詞としてすっかり定着した表現",
    "grammar": "fijarse（気づく・注目する）の再帰動詞の命令形が、話を切り出す前置きの慣用句に転じたもの。",
    "nuance": "相手の注意を引いてから、少し意外な話や近況を語り始めるときの表現。",
    "similar": [
     {
      "es": "¿Sabes qué?",
      "ja": "ねえ、聞いて。"
     },
     {
      "es": "Resulta que...",
      "ja": "実はね…"
     }
    ],
    "en": "So get this..."
   },
   {
    "es": "No sé, ¿tú qué crees?",
    "ja": "どうかな、君はどう思う？",
    "note": "自分の意見を保留しつつ相手に振る、協調性のある会話の運び方",
    "grammar": "no sé（分からない）と、creer（思う）を使ったqué crees（どう思う）の疑問文を組み合わせた構文。",
    "nuance": "自分の意見を控えめに述べつつ、相手の意見を求める協調的な表現。",
    "similar": [
     {
      "es": "¿Tú qué opinas?",
      "ja": "あなたはどう思う？"
     },
     {
      "es": "No estoy seguro, ¿y tú?",
      "ja": "よく分からないな、あなたは？"
     }
    ],
    "en": "I don't know, what do you think?"
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
    "note": "nosotros形の命令は『〜しよう』という勧誘。会議や提案の切り出しに便利な型",
    "grammar": "empezar（始める）のnosotros形命令（勧誘）。「私たちで始めよう」という呼びかけ表現。",
    "nuance": "会議やミーティングを切り出す、フォーマルな職場表現。",
    "similar": [
     {
      "es": "Vamos a comenzar la junta.",
      "ja": "会議を始めましょう。"
     },
     {
      "es": "Empecemos, por favor.",
      "ja": "始めましょう。"
     }
    ],
    "en": "Good morning everyone, let's start the meeting."
   },
   {
    "es": "¿Me puedes enviar el archivo por correo?",
    "ja": "ファイルをメールで送ってもらえる？",
    "note": "『correo』は元々『郵便』の意味。correo electrónico（メール）の略として定着してる",
    "grammar": "poder + 不定詞enviar（送る）の疑問形。por correo（メールで）が手段を示す。",
    "nuance": "同僚間でファイルの共有を頼むカジュアルな依頼表現。",
    "similar": [
     {
      "es": "¿Me lo mandas por email?",
      "ja": "メールで送ってくれる？"
     },
     {
      "es": "¿Puedes compartirme el documento?",
      "ja": "その資料を共有してもらえる？"
     }
    ],
    "en": "Can you send me the file by email?"
   },
   {
    "es": "Voy a estar fuera de la oficina mañana.",
    "ja": "明日はオフィスにいません。",
    "note": "ir a + 不定詞の近接未来は、確定的な予定を伝えるときに自然な形",
    "grammar": "ir a + 不定詞estar（いる）の近接未来。fuera de la oficina（オフィスの外に）が状態を示す。",
    "nuance": "同僚に翌日の不在を事前に伝える表現。",
    "similar": [
     {
      "es": "Mañana trabajo desde casa.",
      "ja": "明日は在宅勤務です。"
     },
     {
      "es": "No voy a estar en la oficina mañana.",
      "ja": "明日はオフィスにいません。"
     }
    ],
    "en": "I'll be out of the office tomorrow."
   },
   {
    "es": "¿Tienes un momento para revisar esto?",
    "ja": "これを確認する時間ある？",
    "note": "『para + 不定詞』は目的を表す型。ビジネスメールでも頻出する構文",
    "grammar": "tener（持つ）の直説法現在2人称単数疑問形。para revisar esto（これを確認するための）が目的を示す。",
    "nuance": "軽い確認をお願いするカジュアルなビジネス表現。",
    "similar": [
     {
      "es": "¿Puedes echarle un ojo a esto?",
      "ja": "これちょっと見てもらえる？"
     },
     {
      "es": "¿Tienes chance de revisarlo hoy?",
      "ja": "今日中に確認する時間ある？"
     }
    ],
    "en": "Do you have a moment to review this?"
   },
   {
    "es": "Necesito pedir un día libre la próxima semana.",
    "ja": "来週、休みを一日いただきたいのですが。",
    "note": "『día libre』は直訳で『自由な日』。休暇の申請でよく使われる表現",
    "grammar": "necesitar + 不定詞pedir（頼む・申請する）。un día libre（休みの一日）が目的語。",
    "nuance": "上司に休暇を申請する、丁寧なビジネス表現。",
    "similar": [
     {
      "es": "Quisiera tomar un día de vacaciones.",
      "ja": "休暇を一日取りたいのですが。"
     },
     {
      "es": "¿Podría ausentarme un día la próxima semana?",
      "ja": "来週一日休ませていただけますか？"
     }
    ],
    "en": "I need to request a day off next week."
   },
   {
    "es": "¿Cuándo es la fecha límite?",
    "ja": "締め切りはいつですか？",
    "note": "límiteは『限界』。fecha límite＝『限界の日付』という直訳から締め切りを連想しやすい",
    "grammar": "ser（〜である）の直説法現在3人称単数疑問形。fecha límite（締め切り日）という複合名詞。",
    "nuance": "業務の締め切りを確認する基本的な質問。",
    "similar": [
     {
      "es": "¿Para cuándo se necesita esto?",
      "ja": "これはいつまでに必要ですか？"
     },
     {
      "es": "¿Cuál es el plazo de entrega?",
      "ja": "納期はいつですか？"
     }
    ],
    "en": "When is the deadline?"
   },
   {
    "es": "Voy a llegar un poco tarde a la oficina.",
    "ja": "オフィスに少し遅れて着きます。",
    "note": "un pocoは『少し』。程度をやわらげるクッション表現として便利",
    "grammar": "ir a + 不定詞llegar（着く）の近接未来。un poco tarde（少し遅れて）が様態を示す。",
    "nuance": "遅刻を事前に上司や同僚に知らせる表現。",
    "similar": [
     {
      "es": "Voy a retrasarme un poco.",
      "ja": "少し遅れそうです。"
     },
     {
      "es": "Se me hizo tarde, ya voy en camino.",
      "ja": "遅くなってしまいました、今向かっています。"
     }
    ],
    "en": "I'll get to the office a bit late."
   },
   {
    "es": "¿Podemos reagendar la junta?",
    "ja": "会議の日程を変更できますか？",
    "note": "re-は『再び』の接頭辞。agendar（予定を入れる）＋re＝再スケジュール",
    "grammar": "poder（できる）の直説法現在1人称複数疑問形。reagendar（再スケジュールする）はagendar（予定を入れる）にre-（再び）がついた形。",
    "nuance": "会議の日程変更を丁寧に提案する表現。",
    "similar": [
     {
      "es": "¿Podemos mover la junta a otro día?",
      "ja": "会議を別の日に動かせますか？"
     },
     {
      "es": "¿Se puede cambiar la hora de la reunión?",
      "ja": "会議の時間を変更できますか？"
     }
    ],
    "en": "Can we reschedule the meeting?"
   },
   {
    "es": "Gracias por tu ayuda con el proyecto.",
    "ja": "プロジェクトを手伝ってくれてありがとう。",
    "note": "『gracias por + 名詞』は感謝の理由を具体的に示す万能パターン",
    "grammar": "gracias por（〜に感謝する）+ 名詞ayuda（助け）。con el proyecto（プロジェクトに関して）が対象を示す。",
    "nuance": "同僚の協力に感謝を伝える丁寧な一言。",
    "similar": [
     {
      "es": "Te agradezco mucho tu apoyo.",
      "ja": "サポートに本当に感謝しています。"
     },
     {
      "es": "Gracias por echarme la mano.",
      "ja": "手伝ってくれてありがとう。"
     }
    ],
    "en": "Thanks for your help with the project."
   },
   {
    "es": "¿Tienes un momento para revisar esto?",
    "ja": "これ確認する時間ある？",
    "note": "3番と同じ。同僚に軽い確認を頼むときの定番の切り出し",
    "grammar": "3番と同一の構文の繰り返し使用。",
    "nuance": "3番のバリエーションとして、別の場面での確認依頼。",
    "similar": [
     {
      "es": "¿Tienes un segundo?",
      "ja": "ちょっと時間ある？"
     },
     {
      "es": "¿Me ayudas a revisar algo rápido?",
      "ja": "すぐに確認するの手伝ってくれる？"
     }
    ],
    "en": "Do you have a moment to check this?"
   },
   {
    "es": "Voy a estar fuera de la oficina mañana.",
    "ja": "明日はオフィスにいません。",
    "note": "2番と同じ。予定の共有はビジネスメールの基本マナー",
    "grammar": "2番と同一の構文の繰り返し使用。",
    "nuance": "2番のバリエーションとして、別の会話での不在通知。",
    "similar": [
     {
      "es": "Mañana no voy a la oficina.",
      "ja": "明日はオフィスに行きません。"
     },
     {
      "es": "Estaré ausente mañana.",
      "ja": "明日は不在にします。"
     }
    ],
    "en": "I'll be out of the office tomorrow."
   },
   {
    "es": "¿Podemos reagendar la junta?",
    "ja": "会議の予定変更できますか？",
    "note": "7番と同じ。予定変更のお願いは何度あっても不自然じゃない",
    "grammar": "7番と同一の構文の繰り返し使用。",
    "nuance": "7番のバリエーションとして、別の場面での日程調整依頼。",
    "similar": [
     {
      "es": "¿Es posible cambiar la fecha de la junta?",
      "ja": "会議の日付を変更することは可能ですか？"
     },
     {
      "es": "¿Podríamos posponerla?",
      "ja": "延期できますか？"
     }
    ],
    "en": "Can we reschedule the meeting?"
   },
   {
    "es": "Le doy seguimiento y le aviso.",
    "ja": "確認して連絡しますね。",
    "note": "『dar seguimiento』はビジネス用語として定着している定型句",
    "grammar": "dar seguimiento（フォローする、経過を追う）という定型句。leは間接目的語（あなたに）。",
    "nuance": "確認や対応を約束するときの、丁寧なビジネス表現。",
    "similar": [
     {
      "es": "Lo reviso y te comento.",
      "ja": "確認してから伝えますね。"
     },
     {
      "es": "Te mantengo al tanto.",
      "ja": "進捗を随時伝えますね。"
     }
    ],
    "en": "I'll follow up and let you know."
   },
   {
    "es": "¿Me puedes cubrir un momento?",
    "ja": "ちょっとの間代わってもらえる？",
    "note": "cubrirは『覆う』が原義。そこから『代わりを務める』の意味に発展した",
    "grammar": "poder + 不定詞cubrir（カバーする・代わりを務める）。un momento（少しの間）が期間を示す。",
    "nuance": "少しの間、業務を代わってほしいときのカジュアルな依頼表現。",
    "similar": [
     {
      "es": "¿Me puedes sustituir un rato?",
      "ja": "少しの間代わってもらえる？"
     },
     {
      "es": "¿Puedes cubrirme cinco minutos?",
      "ja": "5分だけ代わってもらえる？"
     }
    ],
    "en": "Can you cover for me for a moment?"
   },
   {
    "es": "Voy a tomar mi descanso.",
    "ja": "休憩を取りますね。",
    "note": "descansoは『休憩』。descansar（休む）の名詞形として覚えるとセットで使える",
    "grammar": "ir a + 不定詞tomar（取る）。mi descanso（自分の休憩）が目的語。",
    "nuance": "休憩に入ることを周囲に伝える表現。",
    "similar": [
     {
      "es": "Voy a salir a comer algo.",
      "ja": "何か食べに行ってきます。"
     },
     {
      "es": "Regreso en quince minutos, voy a mi break.",
      "ja": "15分で戻ります、休憩に行ってきます。"
     }
    ],
    "en": "I'm going to take my break."
   },
   {
    "es": "¿A qué hora es la junta?",
    "ja": "会議は何時からですか？",
    "note": "juntaは『会議』のメキシコ的な言い方。スペインではreuniónの方が一般的",
    "grammar": "ser（〜である）の直説法現在3人称単数疑問形。a qué horaで時刻を尋ねる基本構文。",
    "nuance": "会議の開始時刻を確認するシンプルな質問。",
    "similar": [
     {
      "es": "¿Cuándo empieza la reunión?",
      "ja": "会議はいつ始まりますか？"
     },
     {
      "es": "¿A qué hora es la llamada?",
      "ja": "通話は何時からですか？"
     }
    ],
    "en": "What time is the meeting?"
   },
   {
    "es": "Se me pasó el plazo de entrega.",
    "ja": "締め切りを過ぎてしまいました。",
    "note": "se me pasóは『（うっかり）過ぎてしまった』。自分の非を軽く伝える便利な構文",
    "grammar": "pasarse（過ぎる）の再帰動詞の点過去3人称単数。se me pasóで「（自分の意図とは無関係に）過ぎてしまった」という無意志の構文。",
    "nuance": "締め切りを過ぎてしまったことを報告する、少し申し訳なさを伴う表現。",
    "similar": [
     {
      "es": "No llegué a tiempo con la entrega.",
      "ja": "納期に間に合いませんでした。"
     },
     {
      "es": "Se me fue la fecha límite.",
      "ja": "締め切りを見落としてしまいました。"
     }
    ],
    "en": "I missed the deadline."
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
    "note": "cuentaは『口座』のほかに『計算・勘定』の意味も持つ、応用範囲の広い単語",
    "grammar": "querer + 不定詞abrir（開く）。cuenta bancaria（銀行口座）が目的語。",
    "nuance": "銀行窓口で口座開設を申し出る基本表現。",
    "similar": [
     {
      "es": "Me gustaría abrir una cuenta.",
      "ja": "口座を開きたいのですが。"
     },
     {
      "es": "¿Qué necesito para abrir una cuenta?",
      "ja": "口座を開くには何が必要ですか？"
     }
    ],
    "en": "I'd like to open a bank account."
   },
   {
    "es": "¿Dónde puedo cambiar dólares a pesos?",
    "ja": "ドルをペソに両替できる場所はどこですか？",
    "note": "『cambiar A a B』でAをBに変える型。両替以外にも応用できる構文",
    "grammar": "poder + 不定詞cambiar（両替する）の疑問形。dólares a pesos（ドルからペソへ）が両替の方向を示す。",
    "nuance": "両替所や銀行を探すときの実用的な表現。",
    "similar": [
     {
      "es": "¿Dónde hay una casa de cambio?",
      "ja": "両替所はどこにありますか？"
     },
     {
      "es": "¿Aquí puedo cambiar moneda?",
      "ja": "ここで両替できますか？"
     }
    ],
    "en": "Where can I exchange dollars for pesos?"
   },
   {
    "es": "¿Cuál es el tipo de cambio hoy?",
    "ja": "今日の為替レートはいくらですか？",
    "note": "『tipo de cambio』は直訳で『交換のタイプ』。為替レートを表す定型句として覚える",
    "grammar": "ser（〜である）の直説法現在3人称単数疑問形。tipo de cambio（為替レート）という定型句。",
    "nuance": "その日のレートを確認する、両替前の基本質問。",
    "similar": [
     {
      "es": "¿A cómo está el dólar hoy?",
      "ja": "今日のドルのレートはいくらですか？"
     },
     {
      "es": "¿Cuánto está el cambio?",
      "ja": "レートはいくらですか？"
     }
    ],
    "en": "What's today's exchange rate?"
   },
   {
    "es": "Quiero hacer un retiro, por favor.",
    "ja": "引き出しをお願いします。",
    "note": "retirarは『引き出す』。retiro（引退）とはまた別の意味を持つので文脈で判断",
    "grammar": "querer + 不定詞hacer（する）。hacer un retiro（引き出しをする）という定型句。",
    "nuance": "窓口でお金を引き出したいときの基本表現。",
    "similar": [
     {
      "es": "Quiero retirar dinero de mi cuenta.",
      "ja": "口座からお金を引き出したいです。"
     },
     {
      "es": "¿Puedo hacer un retiro aquí?",
      "ja": "ここで引き出しできますか？"
     }
    ],
    "en": "I'd like to make a withdrawal, please."
   },
   {
    "es": "Mi tarjeta no funciona.",
    "ja": "カードが使えません。",
    "note": "funcionarはホテルのエアコンの話でも登場した動詞。家電・機械全般に使える",
    "grammar": "funcionar（機能する）の直説法現在3人称単数の否定形。mi tarjeta（私のカード）が主語。",
    "nuance": "カードの不具合を客観的に伝えるトラブル表現。",
    "similar": [
     {
      "es": "Mi tarjeta está bloqueada.",
      "ja": "カードがブロックされています。"
     },
     {
      "es": "No puedo usar mi tarjeta.",
      "ja": "カードが使えません。"
     }
    ],
    "en": "My card isn't working."
   },
   {
    "es": "¿Cuánto cobran de comisión?",
    "ja": "手数料はいくらかかりますか？",
    "note": "cobrarは『請求する』側の動詞、pagarは『支払う』側。立場が逆なので混同注意",
    "grammar": "cobrar（請求する）の直説法現在3人称複数疑問形。de comisión（手数料として）が対象を示す。",
    "nuance": "両替や振込の際にかかる手数料を確認する重要な質問。",
    "similar": [
     {
      "es": "¿Hay algún cargo por esto?",
      "ja": "これには何か料金がかかりますか？"
     },
     {
      "es": "¿Cuál es la comisión por transferencia?",
      "ja": "振込手数料はいくらですか？"
     }
    ],
    "en": "How much commission do you charge?"
   },
   {
    "es": "Perdí mi tarjeta, necesito reportarla.",
    "ja": "カードを失くしたので、届け出をしたいです。",
    "note": "reportarは英語のreportとほぼ同じ発想で使える借用語的な動詞",
    "grammar": "perder（失う）の点過去1人称単数に続けて、necesitar + 不定詞reportarla（それを届け出る）。",
    "nuance": "カード紛失を銀行に届け出て、利用停止を依頼する重要な表現。",
    "similar": [
     {
      "es": "Necesito cancelar mi tarjeta perdida.",
      "ja": "紛失したカードを無効にする必要があります。"
     },
     {
      "es": "Quiero reportar el extravío de mi tarjeta.",
      "ja": "カードの紛失を届け出たいです。"
     }
    ],
    "en": "I lost my card, I need to report it."
   },
   {
    "es": "¿Hay un cajero automático cerca?",
    "ja": "近くにATMはありますか？",
    "note": "cajero automáticoは直訳で『自動の会計係』。ATMのスペイン語版の呼び方",
    "grammar": "haber（〜がある）の直説法現在3人称単数疑問形。cajero automático（ATM）が主語、cerca（近くに）が場所。",
    "nuance": "現金が必要なときにATMを探す実用的な表現。",
    "similar": [
     {
      "es": "¿Dónde hay un cajero por aquí?",
      "ja": "この辺りにATMはありますか？"
     },
     {
      "es": "¿Hay algún banco cerca con cajero?",
      "ja": "ATMのある銀行が近くにありますか？"
     }
    ],
    "en": "Is there an ATM nearby?"
   },
   {
    "es": "Quiero abrir una cuenta.",
    "ja": "口座を開設したいです。",
    "note": "0番の簡略版。文脈で『銀行口座』と分かる場面ではこれで十分",
    "grammar": "0番とほぼ同一の構文だが、bancariaを省略した簡潔形。",
    "nuance": "0番のバリエーションとして、文脈で「銀行口座」と分かる場面での言い方。",
    "similar": [
     {
      "es": "Vengo a abrir una cuenta.",
      "ja": "口座を開きに来ました。"
     },
     {
      "es": "¿Puedo abrir una cuenta de ahorros?",
      "ja": "普通預金口座を開けますか？"
     }
    ],
    "en": "I'd like to open an account."
   },
   {
    "es": "¿Cuál es el tipo de cambio hoy?",
    "ja": "今日の為替レートはいくらですか？",
    "note": "2番と同じ。レートは日々変わるので、確認は何度でも必要になる",
    "grammar": "2番と同一の構文の繰り返し使用。",
    "nuance": "2番のバリエーションとして、別の会話での再確認。",
    "similar": [
     {
      "es": "¿Cómo anda el dólar hoy?",
      "ja": "今日のドルの調子はどうですか？"
     },
     {
      "es": "¿Subió o bajó el tipo de cambio?",
      "ja": "為替レートは上がりましたか、下がりましたか？"
     }
    ],
    "en": "What's today's exchange rate?"
   },
   {
    "es": "Perdí mi tarjeta, ¿qué hago?",
    "ja": "カードをなくしました、どうすればいいですか？",
    "note": "6番より焦りが伝わる言い方。¿qué hago?は困ったときの汎用フレーズ",
    "grammar": "6番と似た内容だが、¿qué hago?（どうすればいいですか）という対処法を尋ねる形。",
    "nuance": "6番よりも困惑や不安のニュアンスが強く、対応方法を直接尋ねる表現。",
    "similar": [
     {
      "es": "¿Qué debo hacer si perdí mi tarjeta?",
      "ja": "カードを失くしたらどうすればいいですか？"
     },
     {
      "es": "¿Cómo cancelo mi tarjeta perdida?",
      "ja": "紛失したカードはどうやって無効にしますか？"
     }
    ],
    "en": "I lost my card, what should I do?"
   },
   {
    "es": "¿Cuánto tarda la transferencia?",
    "ja": "振込にはどれくらいかかりますか？",
    "note": "tardarはタクシーの所要時間でも登場した動詞。時間全般に使える万能語",
    "grammar": "tardar（時間がかかる）の直説法現在3人称単数疑問形。la transferencia（振込）が主語。",
    "nuance": "振込にかかる時間を事前に確認する実用的な質問。",
    "similar": [
     {
      "es": "¿Cuándo llega el dinero?",
      "ja": "お金はいつ届きますか？"
     },
     {
      "es": "¿Es inmediata la transferencia?",
      "ja": "振込は即時ですか？"
     }
    ],
    "en": "How long does the transfer take?"
   },
   {
    "es": "¿Puedo hacer un depósito aquí?",
    "ja": "ここで預け入れできますか？",
    "note": "depósitoは部屋探しの『敷金』とも同じ単語。『預ける』という共通の発想から来ている",
    "grammar": "poder（できる）の1人称現在形puedo。「¿Puedo + 不定詞?」で「〜してもいいですか？」という許可を求める表現です。",
    "nuance": "自分がその行為をしてよいか尋ねる形なので、窓口やレジなど、相手の許可・案内が必要な場面で自然に使えます。",
    "similar": [
     {
      "es": "¿Se puede hacer un depósito aquí?",
      "ja": "ここで入金できますか？（無人称のse、より一般的な聞き方）"
     }
    ],
    "en": "Can I make a deposit here?"
   },
   {
    "es": "Necesito un estado de cuenta.",
    "ja": "明細書が必要です。",
    "note": "『estado de cuenta』は直訳で『口座の状態』。明細書のスペイン語表現",
    "grammar": "necesitar（必要とする）の直説法現在1人称単数。estado de cuenta（明細書）が目的語。",
    "nuance": "口座の取引明細が必要なときの表現。",
    "similar": [
     {
      "es": "¿Me puede dar mi estado de cuenta?",
      "ja": "明細書をいただけますか？"
     },
     {
      "es": "Quiero revisar mis movimientos.",
      "ja": "取引履歴を確認したいです。"
     }
    ],
    "en": "I need a bank statement."
   },
   {
    "es": "¿Hay algún cajero cerca?",
    "ja": "この近くにATMはありますか？",
    "note": "7番のバリエーション。algúnは『何か・どれか』を表す不定形容詞",
    "grammar": "7番と似た構文だが、algúnを使って不定の存在を尋ねる形。",
    "nuance": "7番のバリエーションとして、同じ意味を少し異なる言い回しで表現。",
    "similar": [
     {
      "es": "¿Dónde queda el cajero más cercano?",
      "ja": "一番近いATMはどこですか？"
     },
     {
      "es": "¿Este banco tiene cajero?",
      "ja": "この銀行にATMはありますか？"
     }
    ],
    "en": "Is there an ATM around here?"
   },
   {
    "es": "Mi tarjeta fue rechazada.",
    "ja": "カードが拒否されました。",
    "note": "ser + 過去分詞の受動態。『カードが（誰かに）拒否された』という視点の文",
    "grammar": "ser + 過去分詞rechazada（拒否された）という受動態の点過去。tarjeta（女性名詞）にrechazadaが性一致。",
    "nuance": "支払い時にカードが使えなかったことを店員や銀行に伝える表現。",
    "similar": [
     {
      "es": "No me dejó pasar la tarjeta.",
      "ja": "カードが通りませんでした。"
     },
     {
      "es": "Salió un error con mi tarjeta.",
      "ja": "カードでエラーが出ました。"
     }
    ],
    "en": "My card was declined."
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
    "note": "『por la mañana/tarde/noche』は時間帯を表す基本セット。時間割の会話全般で使える",
    "grammar": "tener（持つ）の直説法現在3人称複数疑問形。por la mañana（午前中に）が時間帯を示す。",
    "nuance": "朝の時間帯にヨガクラスがあるか確認する具体的な質問。",
    "similar": [
     {
      "es": "¿Hay yoga temprano?",
      "ja": "早朝ヨガはありますか？"
     },
     {
      "es": "¿A qué hora es la clase de yoga?",
      "ja": "ヨガクラスは何時からですか？"
     }
    ],
    "en": "Do you have morning yoga classes?"
   },
   {
    "es": "¿Cómo me inscribo en el gimnasio?",
    "ja": "ジムの入会手続きはどうすればいいですか？",
    "note": "inscribirseは学校の入学手続きなどにも使う、登録全般の再帰動詞",
    "grammar": "inscribirse（登録する・入会する）の再帰動詞、直説法現在1人称単数疑問形。cómoで方法を尋ねる。",
    "nuance": "ジムに入会する手続き方法を尋ねる基本表現。",
    "similar": [
     {
      "es": "¿Qué necesito para hacerme miembro?",
      "ja": "会員になるには何が必要ですか？"
     },
     {
      "es": "¿Puedo inscribirme hoy mismo?",
      "ja": "今日すぐに入会できますか？"
     }
    ],
    "en": "How do I sign up at the gym?"
   },
   {
    "es": "¿Puedo probar una clase gratis?",
    "ja": "無料体験クラスを受けられますか？",
    "note": "gratis（無料）はスペイン語でも英語と似た響きで覚えやすい",
    "grammar": "poder（できる）+ probar（試す）の疑問形。una clase gratis（無料クラス）が目的語。",
    "nuance": "入会前に体験クラスを利用できるか確認する表現。",
    "similar": [
     {
      "es": "¿Tienen clase de prueba?",
      "ja": "体験クラスはありますか？"
     },
     {
      "es": "¿Ofrecen una sesión gratuita?",
      "ja": "無料セッションはありますか？"
     }
    ],
    "en": "Can I try a free class?"
   },
   {
    "es": "¿Dónde están los vestidores?",
    "ja": "更衣室はどこですか？",
    "note": "vestidor（更衣室）はvestirse（服を着る）から派生した単語",
    "grammar": "estar（所在）の直説法現在3人称複数疑問形。vestidores（更衣室）が主語。",
    "nuance": "施設内で更衣室を探すときの基本表現。",
    "similar": [
     {
      "es": "¿Dónde puedo cambiarme?",
      "ja": "どこで着替えられますか？"
     },
     {
      "es": "¿Hay lockers en el vestidor?",
      "ja": "更衣室にロッカーはありますか？"
     }
    ],
    "en": "Where are the changing rooms?"
   },
   {
    "es": "¿Me puede explicar cómo usar esta máquina?",
    "ja": "このマシンの使い方を教えてもらえますか？",
    "note": "explicarは『説明する』。教えてほしいときの丁寧な依頼に使える",
    "grammar": "poder + 不定詞explicar（説明する）の丁寧な依頼形。cómo usar（使い方）が間接疑問。",
    "nuance": "初めて使うマシンの使い方をスタッフに尋ねる表現。",
    "similar": [
     {
      "es": "¿Cómo se usa esta máquina?",
      "ja": "このマシンはどう使うんですか？"
     },
     {
      "es": "¿Me puede enseñar cómo funciona esto?",
      "ja": "これの使い方を教えてもらえますか？"
     }
    ],
    "en": "Could you explain how to use this machine?"
   },
   {
    "es": "Quiero cancelar mi membresía.",
    "ja": "会員登録を解約したいです。",
    "note": "membresíaは英語のmembershipに近い借用語的な単語",
    "grammar": "querer + 不定詞cancelar（解約する）。mi membresía（自分の会員資格）が目的語。",
    "nuance": "会員を解約したいと申し出る表現。",
    "similar": [
     {
      "es": "Quiero dar de baja mi membresía.",
      "ja": "会員登録を解約したいです。"
     },
     {
      "es": "¿Cómo cancelo mi suscripción?",
      "ja": "サブスクリプションはどうやって解約しますか？"
     }
    ],
    "en": "I'd like to cancel my membership."
   },
   {
    "es": "¿A qué hora cierran?",
    "ja": "何時に閉まりますか？",
    "note": "cerrarの3人称複数は『お店として』を指す、日本語にはない発想の主語",
    "grammar": "cerrar（閉める）の直説法現在3人称複数疑問形。a qué horaで時刻を尋ねる。",
    "nuance": "施設の閉店時間を確認する基本的な質問。",
    "similar": [
     {
      "es": "¿Hasta qué hora están abiertos?",
      "ja": "何時まで開いていますか？"
     },
     {
      "es": "¿A qué hora abren y cierran?",
      "ja": "開店・閉店時間は何時ですか？"
     }
    ],
    "en": "What time do you close?"
   },
   {
    "es": "¿Tienen clases de yoga?",
    "ja": "ヨガのクラスはありますか？",
    "note": "0番の一般形。時間帯を気にしないならこちらの方がシンプル",
    "grammar": "0番と似た構文だが、por la mañanaを省いたより一般的な質問。",
    "nuance": "時間帯を指定せず、ヨガクラス自体の有無を尋ねる表現。",
    "similar": [
     {
      "es": "¿Ofrecen clases de yoga?",
      "ja": "ヨガクラスは提供していますか？"
     },
     {
      "es": "¿Cuándo son las clases de yoga?",
      "ja": "ヨガクラスはいつありますか？"
     }
    ],
    "en": "Do you have yoga classes?"
   },
   {
    "es": "¿Puedo probar una clase gratis?",
    "ja": "無料体験クラスは受けられますか？",
    "note": "2番と同じ。体験クラスの確認は入会前の必須ステップ",
    "grammar": "2番と同一の構文の繰り返し使用。",
    "nuance": "2番のバリエーションとして、別の会話での確認。",
    "similar": [
     {
      "es": "¿Hay alguna clase de prueba disponible?",
      "ja": "利用できる体験クラスはありますか？"
     },
     {
      "es": "¿Puedo entrar a una clase sin pagar primero?",
      "ja": "先に支払わずにクラスに参加できますか？"
     }
    ],
    "en": "Can I try a free class?"
   },
   {
    "es": "¿Dónde están los vestidores?",
    "ja": "更衣室はどこですか？",
    "note": "3番と同じ。更衣室の場所は入館直後に確認しておきたい情報",
    "grammar": "3番と同一の構文の繰り返し使用。",
    "nuance": "3番のバリエーションとして、別の場面での確認。",
    "similar": [
     {
      "es": "¿Los vestidores están por aquí?",
      "ja": "更衣室はこの辺ですか？"
     },
     {
      "es": "¿Hay regaderas en el vestidor?",
      "ja": "更衣室にシャワーはありますか？"
     }
    ],
    "en": "Where are the changing rooms?"
   },
   {
    "es": "¿Este aparato está ocupado?",
    "ja": "このマシンは使用中ですか？",
    "note": "ocupadoは『忙しい』の意味もあるが、ここでは『使用中』の意味",
    "grammar": "estar ocupado（使用中である）の直説法現在3人称単数疑問形。este aparato（このマシン）が主語。",
    "nuance": "マシンが空いているか確認する、ジムでの実用的な表現。",
    "similar": [
     {
      "es": "¿Puedo usar esto?",
      "ja": "これ使ってもいいですか？"
     },
     {
      "es": "¿Ya casi terminas con esta máquina?",
      "ja": "このマシンもうすぐ終わりますか？"
     }
    ],
    "en": "Is this machine in use?"
   },
   {
    "es": "¿Cuántas repeticiones debo hacer?",
    "ja": "何回やればいいですか？",
    "note": "repeticiónはトレーニング用語として定着。日本語の『レップ数』にあたる",
    "grammar": "deber + 不定詞hacer（する）の疑問形。cuántas repeticiones（何回の反復）が対象。",
    "nuance": "トレーナーに正しい回数を確認するときの表現。",
    "similar": [
     {
      "es": "¿Cuántas series debo hacer?",
      "ja": "何セットやればいいですか？"
     },
     {
      "es": "¿Cuántas veces repito esto?",
      "ja": "これは何回繰り返せばいいですか？"
     }
    ],
    "en": "How many reps should I do?"
   },
   {
    "es": "Necesito estirar antes de empezar.",
    "ja": "始める前にストレッチが必要です。",
    "note": "estirarは『伸ばす』。ストレッチ（estiramiento）の動詞形",
    "grammar": "necesitar + 不定詞estirar（ストレッチする）。antes de empezar（始める前に）が時間節。",
    "nuance": "運動前のウォームアップの必要性を伝える表現。",
    "similar": [
     {
      "es": "Voy a calentar primero.",
      "ja": "まずウォームアップします。"
     },
     {
      "es": "Necesito hacer un poco de estiramiento.",
      "ja": "少しストレッチが必要です。"
     }
    ],
    "en": "I need to stretch before starting."
   },
   {
    "es": "¿Me puede corregir mi postura?",
    "ja": "姿勢を直してもらえますか？",
    "note": "corregirは『訂正する』。テストの採点にも使われる汎用動詞",
    "grammar": "poder + 不定詞corregir（直す）の丁寧な依頼形。mi postura（自分の姿勢）が目的語。",
    "nuance": "正しいフォームを確認したいときにトレーナーへ頼む表現。",
    "similar": [
     {
      "es": "¿Estoy haciendo esto bien?",
      "ja": "これ正しくできていますか？"
     },
     {
      "es": "¿Me puede revisar la técnica?",
      "ja": "フォームを確認してもらえますか？"
     }
    ],
    "en": "Could you correct my posture?"
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
    "note": "corteはcortar（切る）の名詞形。『切ること』＝カット、と覚えやすい",
    "grammar": "querer + 不定詞省略のcorte（カット）を名詞として使う構文。動詞cortarを名詞化したcorteが目的語。",
    "nuance": "美容院でカットを依頼する最も基本的な表現。",
    "similar": [
     {
      "es": "Vengo por un corte.",
      "ja": "カットをしに来ました。"
     },
     {
      "es": "¿Me puede cortar el cabello?",
      "ja": "髪を切ってもらえますか？"
     }
    ],
    "en": "I'd like a haircut, please."
   },
   {
    "es": "Solo las puntas, por favor.",
    "ja": "毛先だけお願いします。",
    "note": "puntaは『先端』。鉛筆の先も靴の先もこの単語で表せる",
    "grammar": "solo（〜だけ）+ las puntas（毛先）という限定表現。動詞なしの省略構文。",
    "nuance": "全体ではなく毛先だけの軽いカットを希望する表現。",
    "similar": [
     {
      "es": "Solo despúnteme, por favor.",
      "ja": "毛先だけ整えてください。"
     },
     {
      "es": "Nada más las puntas.",
      "ja": "毛先だけでお願いします。"
     }
    ],
    "en": "Just the ends, please."
   },
   {
    "es": "No mucho, solo un poco más corto.",
    "ja": "あまり短くしないで、少しだけ短くしてください。",
    "note": "程度を細かく調整したいときはno mucho、solo un pocoの組み合わせが便利",
    "grammar": "no mucho（あまり多くなく）+ un poco más corto（少しだけ短く）という比較級を使った程度の限定表現。",
    "nuance": "大きく変えたくない、控えめな変化を希望するときの言い方。",
    "similar": [
     {
      "es": "Solo un poquito más corto.",
      "ja": "ほんの少しだけ短くしてください。"
     },
     {
      "es": "No me lo corte demasiado.",
      "ja": "切りすぎないでください。"
     }
    ],
    "en": "Not too much, just a little shorter."
   },
   {
    "es": "¿Me puede hacer un lavado también?",
    "ja": "シャンプーもお願いできますか？",
    "note": "lavadoはlavar（洗う）の名詞形。洗濯（lavar la ropa）にも使う同じ動詞",
    "grammar": "poder + 不定詞hacer（する）の丁寧な依頼形。un lavado（シャンプー）が目的語、también（〜も）で追加を示す。",
    "nuance": "カットに加えてシャンプーもお願いしたいときの表現。",
    "similar": [
     {
      "es": "¿Incluye lavado el servicio?",
      "ja": "シャンプーはサービスに含まれますか？"
     },
     {
      "es": "Quiero que me laven el cabello también.",
      "ja": "髪も洗ってもらいたいです。"
     }
    ],
    "en": "Could you also wash my hair?"
   },
   {
    "es": "Quiero teñirme el cabello.",
    "ja": "髪を染めたいです。",
    "note": "teñirseは再帰動詞。『自分の髪を染める』という所有の感覚が再帰代名詞に表れてる",
    "grammar": "querer + 不定詞teñirse（染める）の再帰動詞。el cabello（髪）が目的語。",
    "nuance": "髪を染めたいという希望を伝える基本表現。",
    "similar": [
     {
      "es": "Quiero un tinte nuevo.",
      "ja": "新しい髪色にしたいです。"
     },
     {
      "es": "¿Me pueden teñir el cabello hoy?",
      "ja": "今日、髪を染めてもらえますか？"
     }
    ],
    "en": "I'd like to dye my hair."
   },
   {
    "es": "¿Cuánto tiempo va a tomar?",
    "ja": "どれくらい時間がかかりますか？",
    "note": "ここでもtomarが『（時間が）かかる』の意味で登場。飲食以外でも大活躍する動詞",
    "grammar": "ir a + 不定詞tomar（かかる）の近接未来疑問形。cuánto tiempo（どれくらいの時間）が対象。",
    "nuance": "施術にかかる時間の目安を確認する実用的な質問。",
    "similar": [
     {
      "es": "¿Cuánto se tarda?",
      "ja": "どれくらいかかりますか？"
     },
     {
      "es": "¿Cuánto dura el servicio?",
      "ja": "施術はどれくらいの長さですか？"
     }
    ],
    "en": "How long will it take?"
   },
   {
    "es": "Me encanta, muchas gracias.",
    "ja": "とても気に入りました、ありがとうございます。",
    "note": "encantarはgustarと同じ語順。『私を魅了する』が直訳で、感情の強さが伝わる",
    "grammar": "encantar（大いに気に入る）を使った、gustarと同じ間接目的語構文。「私に大いに気に入る」という語順。",
    "nuance": "仕上がりに満足したことを美容師に伝える、喜びのこもった表現。",
    "similar": [
     {
      "es": "Quedó perfecto, gracias.",
      "ja": "完璧に仕上がりました、ありがとう。"
     },
     {
      "es": "Me fascina el resultado.",
      "ja": "仕上がりにとても満足しています。"
     }
    ],
    "en": "I love it, thank you so much."
   },
   {
    "es": "Solo un corte, por favor.",
    "ja": "カットだけお願いします。",
    "note": "0番の短縮形。急いでいるときはこのくらい簡潔でも十分伝わる",
    "grammar": "solo（〜だけ）+ un corte（カット）の限定表現。他のサービスを含まないことを明示。",
    "nuance": "カラーやパーマなどを含まず、カットのみを希望する表現。",
    "similar": [
     {
      "es": "Únicamente el corte, gracias.",
      "ja": "カットだけでお願いします。"
     },
     {
      "es": "Nada más quiero un corte.",
      "ja": "カットだけが欲しいです。"
     }
    ],
    "en": "Just a haircut, please."
   },
   {
    "es": "No corte mucho, por favor.",
    "ja": "あまり切らないでください。",
    "note": "usted否定命令形。2番より直接的に『切りすぎないで』と伝える言い方",
    "grammar": "cortar（切る）のusted否定命令形。mucho（多く）を否定して控えめさを求める。",
    "nuance": "2番と似た内容だが、より直接的に「切りすぎないで」と指示する表現。",
    "similar": [
     {
      "es": "No me quite mucho, por favor.",
      "ja": "あまり切らないでください。"
     },
     {
      "es": "Con cuidado, por favor.",
      "ja": "慎重にお願いします。"
     }
    ],
    "en": "Please don't cut too much."
   },
   {
    "es": "Quiero un cambio de color.",
    "ja": "色を変えたいです。",
    "note": "cambio（変化）は銀行の為替レートの話でも出てきた単語、応用範囲が広い",
    "grammar": "querer + 名詞cambio de color（色の変更）という定型句。",
    "nuance": "4番と似た内容だが、より一般的に「色を変えたい」という希望を伝える表現。",
    "similar": [
     {
      "es": "Quiero probar un color diferente.",
      "ja": "違う色を試したいです。"
     },
     {
      "es": "¿Qué colores me recomienda?",
      "ja": "どんな色がおすすめですか？"
     }
    ],
    "en": "I'd like a color change."
   },
   {
    "es": "¿Cuánto tiempo toma el servicio?",
    "ja": "施術はどれくらい時間がかかりますか？",
    "note": "5番と同じ内容の別の言い方。tomarの主語違いのバリエーション",
    "grammar": "5番と似た構文だが、tomarの直説法現在3人称単数を使用。el servicio（施術）が主語。",
    "nuance": "5番のバリエーションとして、別の場面での所要時間確認。",
    "similar": [
     {
      "es": "¿Cuánto dura la cita?",
      "ja": "施術時間はどれくらいですか？"
     },
     {
      "es": "¿Es un servicio largo?",
      "ja": "時間のかかる施術ですか？"
     }
    ],
    "en": "How long does the service take?"
   },
   {
    "es": "Me gustaría ver el catálogo de estilos.",
    "ja": "スタイルのカタログを見たいです。",
    "note": "gustaríaはgustarの丁寧形。『見たいのですが』という控えめな希望の伝え方",
    "grammar": "gustaría（querer の丁寧な希望表現）+ ver（見る）。catálogo de estilos（スタイルカタログ）が目的語。",
    "nuance": "希望のスタイルを決める前に、参考にする画像集を見たいときの表現。",
    "similar": [
     {
      "es": "¿Tiene fotos de estilos?",
      "ja": "スタイルの写真はありますか？"
     },
     {
      "es": "¿Me puede mostrar algunos ejemplos?",
      "ja": "いくつか例を見せてもらえますか？"
     }
    ],
    "en": "I'd like to see the style catalog."
   },
   {
    "es": "Quiero un cambio de look.",
    "ja": "イメチェンしたいです。",
    "note": "lookは英語からの借用語。日常会話ではスペイン語と自然に混ざって使われる",
    "grammar": "querer + 名詞cambio de look（見た目の変化）という定型句。lookは英語からの借用語だが日常的に使われる。",
    "nuance": "9番よりも幅広く、髪型全体の印象を変えたいときの表現。",
    "similar": [
     {
      "es": "Quiero verme diferente.",
      "ja": "違う自分になりたいです。"
     },
     {
      "es": "¿Qué me recomienda para renovar mi imagen?",
      "ja": "イメージを一新するのに何がおすすめですか？"
     }
    ],
    "en": "I'd like a new look."
   },
   {
    "es": "¿Me puede hacer un peinado para una boda?",
    "ja": "結婚式用のヘアセットをお願いできますか？",
    "note": "bodaは『結婚式』。冠婚葬祭系の単語は覚えておくと会話の幅が広がる",
    "grammar": "poder + 不定詞hacer（する）の丁寧な依頼形。un peinado para una boda（結婚式用のヘアスタイル）が目的語。",
    "nuance": "特別なイベント用のヘアセットを依頼する表現。",
    "similar": [
     {
      "es": "Necesito un peinado elegante para un evento.",
      "ja": "イベント用のエレガントなヘアスタイルが必要です。"
     },
     {
      "es": "¿Hacen peinados para ocasiones especiales?",
      "ja": "特別な場のヘアセットはできますか？"
     }
    ],
    "en": "Could you do a hairstyle for a wedding?"
   },
   {
    "es": "No me gustan los productos con mucho olor.",
    "ja": "香りの強い製品は苦手です。",
    "note": "olorは『匂い』。良い匂いも悪い匂いも中立的に表せる単語",
    "grammar": "gustar構文の否定形。no me gustan（私は好きではない）+ productos con mucho olor（香りの強い製品）が主語。",
    "nuance": "使用する製品の香りについて事前に好みを伝える表現。",
    "similar": [
     {
      "es": "Soy sensible a los olores fuertes.",
      "ja": "強い香りに敏感です。"
     },
     {
      "es": "¿Tiene productos sin fragancia?",
      "ja": "無香料の製品はありますか？"
     }
    ],
    "en": "I don't like strongly scented products."
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
    "note": "『de acuerdo』は『合意して』という状態を表す熟語。estarとセットで使う",
    "grammar": "estar de acuerdo con（〜に同意する）という定型句。contigo（あなたと）が対象を示す。",
    "nuance": "相手の意見にはっきりと賛成を伝える基本表現。",
    "similar": [
     {
      "es": "Concuerdo contigo.",
      "ja": "あなたに同意します。"
     },
     {
      "es": "Pienso lo mismo.",
      "ja": "私も同じ考えです。"
     }
    ],
    "en": "I agree with you."
   },
   {
    "es": "No estoy muy de acuerdo, la verdad.",
    "ja": "正直、あまり賛成ではありません。",
    "note": "『la verdad』を文末に添えると『実は』という本音のニュアンスが加わる",
    "grammar": "0番の否定形にmuy（あまり）とla verdad（実は、正直）を加えた柔らかい反対表現。",
    "nuance": "断定を避けつつ、やんわりと反対意見を伝える丁寧な言い方。",
    "similar": [
     {
      "es": "No sé si estoy de acuerdo.",
      "ja": "賛成かどうか分からないな。"
     },
     {
      "es": "Tengo mis dudas al respecto.",
      "ja": "それについては疑問があります。"
     }
    ],
    "en": "Honestly, I don't quite agree."
   },
   {
    "es": "Tienes razón.",
    "ja": "あなたの言う通りです。",
    "note": "razónは『理性・道理』。『あなたは道理を持っている』が直訳で、面白い発想",
    "grammar": "tener razón（正しい・道理にかなっている）という定型句。tenerの直説法現在2人称単数。",
    "nuance": "相手の意見が正しいと認める、シンプルな同意表現。",
    "similar": [
     {
      "es": "Es cierto lo que dices.",
      "ja": "あなたの言うことは本当だね。"
     },
     {
      "es": "Así es.",
      "ja": "その通りです。"
     }
    ],
    "en": "You're right."
   },
   {
    "es": "Creo que no es tan sencillo.",
    "ja": "そんなに単純ではないと思います。",
    "note": "creo queのクッションを挟むことで、反対意見も柔らかく伝えられる",
    "grammar": "creer que（〜だと思う）+ 否定文no es tan sencillo（そう単純ではない）という従属節構文。",
    "nuance": "相手の意見に対して控えめに異論を唱える表現。",
    "similar": [
     {
      "es": "No creo que sea tan fácil.",
      "ja": "そんなに簡単だとは思わないな。"
     },
     {
      "es": "Hay más factores a considerar.",
      "ja": "考慮すべき要素が他にもあると思う。"
     }
    ],
    "en": "I think it's not that simple."
   },
   {
    "es": "En mi opinión, deberíamos esperar.",
    "ja": "私の意見では、待つべきだと思います。",
    "note": "deberíamosは義務のdeberの過去未来形。断定を避けた提案のトーンになる",
    "grammar": "en mi opinión（私の意見では）という前置き+ deber（〜すべき）の過去未来nosotros形。",
    "nuance": "自分の考えを前置きして述べる、丁寧な意見表明の表現。",
    "similar": [
     {
      "es": "Yo creo que deberíamos esperar.",
      "ja": "私は待つべきだと思います。"
     },
     {
      "es": "Personalmente, prefiero esperar.",
      "ja": "個人的には、待つ方がいいと思います。"
     }
    ],
    "en": "In my opinion, we should wait."
   },
   {
    "es": "Depende de cómo lo veas.",
    "ja": "見方によりますね。",
    "note": "『depende de』は『〜による』の万能表現。あらゆる場面で使い回せる",
    "grammar": "depender de（〜による）+ cómo lo veas（あなたがそれをどう見るか）という接続法を使った間接疑問節。",
    "nuance": "断定を避け、見方によって答えが変わることを示す柔軟な表現。",
    "similar": [
     {
      "es": "Todo depende del punto de vista.",
      "ja": "すべては視点次第だね。"
     },
     {
      "es": "Es cuestión de perspectiva.",
      "ja": "それは視点の問題だね。"
     }
    ],
    "en": "It depends on how you look at it."
   },
   {
    "es": "Buen punto, no lo había pensado así.",
    "ja": "いい指摘ですね、そう考えていませんでした。",
    "note": "había pensadoは過去完了形。『それより前の時点で考えていなかった』という時制",
    "grammar": "buen punto（いい指摘）という感嘆的な評価に、había pensado（過去完了）で「そこまで考えていなかった」という時制を続ける。",
    "nuance": "相手の意見に感心し、新しい視点を得たことを伝える表現。",
    "similar": [
     {
      "es": "Interesante, no había caído en eso.",
      "ja": "面白いね、それには気づかなかった。"
     },
     {
      "es": "Tienes un buen argumento.",
      "ja": "いい論点だね。"
     }
    ],
    "en": "Good point, I hadn't thought of it that way."
   },
   {
    "es": "Prefiero no opinar sobre eso.",
    "ja": "それについては意見を控えたいです。",
    "note": "preferir + no + 不定詞で『〜しない方を好む』。やんわり断る便利な構文",
    "grammar": "preferir（好む）+ no opinar（意見を述べない）の否定不定詞。sobre eso（それについて）が対象。",
    "nuance": "デリケートな話題などで、意見表明を避けたいときの丁寧な表現。",
    "similar": [
     {
      "es": "Mejor no me meto en eso.",
      "ja": "それには首を突っ込まない方がいいかな。"
     },
     {
      "es": "No tengo una opinión formada sobre eso.",
      "ja": "それについてはまだ意見がまとまっていません。"
     }
    ],
    "en": "I'd rather not share my opinion on that."
   },
   {
    "es": "Depende de cómo lo veas.",
    "ja": "見方によるね。",
    "note": "5番と同じ。断定を避けたいときに何度でも頼れる逃げ道フレーズ",
    "grammar": "5番と同一の構文の繰り返し使用。",
    "nuance": "5番のバリエーションとして、よりカジュアルな会話での使用を想定。",
    "similar": [
     {
      "es": "Según se mire.",
      "ja": "見方次第だね。"
     },
     {
      "es": "Eso ya es más subjetivo.",
      "ja": "それはもっと主観的なことだね。"
     }
    ],
    "en": "It depends on how you look at it."
   },
   {
    "es": "No lo había pensado de esa manera.",
    "ja": "そんな風には考えていなかったな。",
    "note": "『de esa manera』は『そのようなやり方で』。方法・視点を表す前置詞句",
    "grammar": "había pensado（過去完了）+ de esa manera（そのようには）。新しい視点への気づきを表す時制。",
    "nuance": "6番と関連し、相手の意見によって新たな視点を得たことを伝える表現。",
    "similar": [
     {
      "es": "Nunca lo vi de esa forma.",
      "ja": "そんな風に見たことはなかったな。"
     },
     {
      "es": "Me diste una nueva perspectiva.",
      "ja": "新しい視点をくれたね。"
     }
    ],
    "en": "I hadn't thought of it that way."
   },
   {
    "es": "Hasta cierto punto, tienes razón.",
    "ja": "ある程度は君の言う通りだね。",
    "note": "『hasta cierto punto』は『ある程度まで』。全面同意を避けたいときに便利",
    "grammar": "hasta cierto punto（ある程度まで）という限定的な同意を表す前置詞句+ 2番と同じtienes razón。",
    "nuance": "全面的にではなく、部分的に同意することを示す表現。",
    "similar": [
     {
      "es": "En parte tienes razón.",
      "ja": "部分的にはあなたの言う通りです。"
     },
     {
      "es": "Estoy de acuerdo, pero no del todo.",
      "ja": "賛成だけど、完全にではないかな。"
     }
    ],
    "en": "Up to a point, you're right."
   },
   {
    "es": "Prefiero no opinar sobre eso.",
    "ja": "それについては意見を控えておくよ。",
    "note": "7番と同じ。意見を求められて困ったときの安全なかわし方",
    "grammar": "7番と同一の構文の繰り返し使用。",
    "nuance": "7番のバリエーションとして、別の会話での使用を想定。",
    "similar": [
     {
      "es": "Mejor me quedo callado en esto.",
      "ja": "これについては黙っておくのがいいかな。"
     },
     {
      "es": "No quiero tomar partido.",
      "ja": "どちらの肩も持ちたくないな。"
     }
    ],
    "en": "I'd rather not comment on that."
   },
   {
    "es": "Eso tiene sentido.",
    "ja": "それは筋が通っているね。",
    "note": "『tener sentido』は直訳『意味を持つ』。論理的な納得を表す定番表現",
    "grammar": "tener sentido（筋が通る、意味を成す）という定型句。esoが主語。",
    "nuance": "相手の説明や意見に論理的な納得を示す表現。",
    "similar": [
     {
      "es": "Eso suena lógico.",
      "ja": "それは論理的に聞こえるね。"
     },
     {
      "es": "Ahora entiendo tu punto.",
      "ja": "今、あなたの言いたいことが分かった。"
     }
    ],
    "en": "That makes sense."
   },
   {
    "es": "No estoy tan seguro de eso.",
    "ja": "それについてはあまり確信が持てないな。",
    "note": "『estar seguro de』は『〜について確信がある』。tanで確信度を弱められる",
    "grammar": "estar seguro de（〜について確信がある）の否定形。tan（それほど）が確信の程度を弱める。",
    "nuance": "反対とまでは言わないが、確信が持てないという控えめな表現。",
    "similar": [
     {
      "es": "Tengo mis dudas.",
      "ja": "疑問があるな。"
     },
     {
      "es": "No sé si eso es del todo cierto.",
      "ja": "それが完全に正しいかは分からないな。"
     }
    ],
    "en": "I'm not so sure about that."
   },
   {
    "es": "Veo tu punto, pero...",
    "ja": "君の言い分はわかるけど…",
    "note": "verが『理解する』の意味で使われる例その2。相槌の『Ya veo』とも繋がる発想",
    "grammar": "ver（理解する）+ tu punto（あなたの論点）。peroに続けて異論を展開する導入表現。",
    "nuance": "相手の意見を一部認めつつ、自分の異なる考えを続けるための橋渡し表現。",
    "similar": [
     {
      "es": "Entiendo lo que dices, sin embargo...",
      "ja": "言いたいことは分かるけど、それでも…"
     },
     {
      "es": "Tienes razón en parte, pero...",
      "ja": "部分的にはその通りだけど…"
     }
    ],
    "en": "I see your point, but..."
   },
   {
    "es": "Coincido contigo en eso.",
    "ja": "それについては同感だよ。",
    "note": "coincidirは元々『一致する』。0番のestar de acuerdoより少しフォーマルな響き",
    "grammar": "coincidir con（〜と一致する）という定型句。en eso（それについて）が対象を限定。",
    "nuance": "0番より少しフォーマルで、特定の点について同意を示す表現。",
    "similar": [
     {
      "es": "Estoy totalmente de acuerdo en ese punto.",
      "ja": "その点については完全に同意です。"
     },
     {
      "es": "Pienso exactamente igual.",
      "ja": "全く同じように考えています。"
     }
    ],
    "en": "I agree with you on that."
   },
   {
    "es": "No te preocupes por eso.",
    "ja": "それについて心配しないでね。",
    "grammar": "preocuparse（心配する）のtú否定命令形。否定命令は接続法現在の形（te preocupes）にnoをつけて作ります。",
    "nuance": "相手を安心させたいときの定番フレーズ。肯定命令のPreocúpate（心配して）とは代名詞の位置が変わる点（否定は前、肯定は後ろ）にも注目です。",
    "similar": [
     {
      "es": "No pasa nada.",
      "ja": "大丈夫だよ、なんでもないよ"
     },
     {
      "es": "Tranquilo/Tranquila.",
      "ja": "落ち着いて、大丈夫"
     }
    ],
    "note": "命令形フレーズにも出てきたpreocuparse。相手を気遣う場面で頻出する動詞",
    "en": "Don't worry about that."
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
    "note": "『tiempo』は『時間』と『天気』の2つの意味を持つ単語。文脈で判断が必要",
    "grammar": "hacer（〜の天気である）を使った天気表現の疑問形。qué tiempo（どんな天気）が対象。",
    "nuance": "天気について尋ねる最も基本的な表現。",
    "similar": [
     {
      "es": "¿Cómo está el clima hoy?",
      "ja": "今日の気候はどう？"
     },
     {
      "es": "¿Qué tal el clima?",
      "ja": "天気はどんな感じ？"
     }
    ],
    "en": "What's the weather like today?"
   },
   {
    "es": "Hace mucho calor hoy.",
    "ja": "今日はとても暑いね。",
    "note": "hacerを使う天気表現はスペイン語の大きな特徴。estarではなくhacerが基本",
    "grammar": "hacer calor（暑い）という気象表現の定型句。mucho（とても）が程度を強調。",
    "nuance": "気温の高さを伝える最も一般的な表現。",
    "similar": [
     {
      "es": "Está haciendo mucho calor.",
      "ja": "すごく暑くなってきているね。"
     },
     {
      "es": "Qué calor hace hoy.",
      "ja": "今日は暑いね。"
     }
    ],
    "en": "It's very hot today."
   },
   {
    "es": "Hace un frío horrible.",
    "ja": "とんでもなく寒いね。",
    "note": "horribleのような強調の形容詞を足すと、感情のこもった表現になる",
    "grammar": "hacer frío（寒い）にhorrible（ひどい）という形容詞を加えた強調表現。",
    "nuance": "単なる寒さではなく、耐え難いほどの寒さを強調する表現。",
    "similar": [
     {
      "es": "Hace un frío que cala los huesos.",
      "ja": "骨まで凍るような寒さだね。"
     },
     {
      "es": "Está haciendo muchísimo frío.",
      "ja": "ものすごく寒いね。"
     }
    ],
    "en": "It's terribly cold."
   },
   {
    "es": "Está nublado.",
    "ja": "曇っているね。",
    "note": "一時的な空模様にはestarを使う。hacerとestarの使い分けが天気表現の面白いところ",
    "grammar": "estar（一時的な状態）+ nublado（曇っている）の過去分詞形容詞。天気の一時的な状態を表す際はestarを使う。",
    "nuance": "空模様の一時的な状態を伝える基本表現。",
    "similar": [
     {
      "es": "El cielo está gris.",
      "ja": "空が灰色だね。"
     },
     {
      "es": "Parece que va a llover.",
      "ja": "雨が降りそうだね。"
     }
    ],
    "en": "It's cloudy."
   },
   {
    "es": "Está despejado.",
    "ja": "快晴だね。",
    "note": "despejarseは『（空が）晴れる』。頭がスッキリする、という比喩的な意味でも使われる",
    "grammar": "estar despejado（晴れ渡っている）という定型表現。despejarse（晴れる）の過去分詞形容詞。",
    "nuance": "雲一つない快晴の状態を伝える表現。",
    "similar": [
     {
      "es": "No hay ni una nube.",
      "ja": "雲一つないね。"
     },
     {
      "es": "El cielo está muy claro hoy.",
      "ja": "今日は空がとても澄んでいるね。"
     }
    ],
    "en": "It's clear."
   },
   {
    "es": "Va a llover más tarde.",
    "ja": "後で雨が降るみたいだよ。",
    "note": "llover（雨が降る）は主語のない非人称動詞。『それが雨を降らせる』という発想はない",
    "grammar": "ir a + 不定詞llover（雨が降る）の近接未来。más tarde（後で）が時間を示す。",
    "nuance": "少し先の天気の予測を伝える表現。",
    "similar": [
     {
      "es": "Parece que va a llover.",
      "ja": "雨が降りそうだね。"
     },
     {
      "es": "Creo que lloverá esta tarde.",
      "ja": "今日の午後は雨が降ると思うよ。"
     }
    ],
    "en": "It's going to rain later."
   },
   {
    "es": "Está lloviendo a cántaros.",
    "ja": "土砂降りだよ。",
    "note": "『a cántaros』は直訳『壺いっぱいに』。日本語の『土砂降り』に近い誇張表現",
    "grammar": "estar + 現在分詞lloviendo（雨が降っている）の進行形。a cántarosは「壺いっぱいに」という直訳の慣用句。",
    "nuance": "非常に激しい雨を表す、日常会話でよく使われる誇張表現。",
    "similar": [
     {
      "es": "Está diluviando.",
      "ja": "土砂降りだよ。"
     },
     {
      "es": "Está cayendo un aguacero.",
      "ja": "猛烈な雨が降っているよ。"
     }
    ],
    "en": "It's raining cats and dogs."
   },
   {
    "es": "Parece que va a haber tormenta.",
    "ja": "嵐が来そうだね。",
    "note": "parecer queは『〜のようだ』。断定を避けた予測に便利な構文",
    "grammar": "parecer que（〜のようだ）+ haber（〜がある）の近接未来。tormenta（嵐）が主語。",
    "nuance": "空模様から嵐の接近を予測して伝える表現。",
    "similar": [
     {
      "es": "Se ve que viene una tormenta.",
      "ja": "嵐が来るのが見えるね。"
     },
     {
      "es": "El cielo se está poniendo feo.",
      "ja": "空模様が悪くなってきているね。"
     }
    ],
    "en": "It looks like there's going to be a storm."
   },
   {
    "es": "Hay mucho viento hoy.",
    "ja": "今日は風が強いね。",
    "note": "hay（〜がある）を使うのもスペイン語の天気表現の特徴。hacerと混同しやすいので注意",
    "grammar": "haber（〜がある）の直説法現在3人称単数。mucho viento（強い風）が主語。",
    "nuance": "風の強さを伝える基本表現。",
    "similar": [
     {
      "es": "Está haciendo mucho aire.",
      "ja": "風がすごいね（口語的）。"
     },
     {
      "es": "El viento está muy fuerte.",
      "ja": "風がとても強いね。"
     }
    ],
    "en": "It's very windy today."
   },
   {
    "es": "Se siente húmedo hoy.",
    "ja": "今日は湿気を感じるね。",
    "note": "sentirseの非人称的用法。『（誰にともなく）感じられる』という体感の表現",
    "grammar": "sentirse（感じられる）の再帰動詞、非人称的用法。húmedo（湿った）が状態を示す形容詞。",
    "nuance": "体感的な湿気の強さを伝える表現。",
    "similar": [
     {
      "es": "Hay mucha humedad hoy.",
      "ja": "今日は湿気が多いね。"
     },
     {
      "es": "El ambiente está pesado.",
      "ja": "空気が重たいね。"
     }
    ],
    "en": "It feels humid today."
   },
   {
    "es": "Hace un día precioso.",
    "ja": "今日は素敵な天気だね。",
    "note": "preciosoは『貴重な』のほかに『美しい・素敵な』の意味でもよく使われる",
    "grammar": "hacer（〜の天気である）+ un día precioso（素晴らしい一日）という名詞句。",
    "nuance": "天気の良さを感嘆的に表現する言い方。",
    "similar": [
     {
      "es": "Qué día tan bonito.",
      "ja": "なんて素敵な日なんだろう。"
     },
     {
      "es": "El clima está buenísimo hoy.",
      "ja": "今日は天気が最高だね。"
     }
    ],
    "en": "It's a beautiful day."
   },
   {
    "es": "Se pronostica lluvia para mañana.",
    "ja": "明日は雨の予報だよ。",
    "note": "pronosticarは『予報する』。天気予報士はel pronosticador del tiempoと呼ばれる",
    "grammar": "pronosticar（予報する）の再帰受身的用法se pronostica。para mañana（明日のために）が対象の日を示す。",
    "nuance": "天気予報の内容を伝える、ややフォーマルな表現。",
    "similar": [
     {
      "es": "Dicen que va a llover mañana.",
      "ja": "明日は雨が降るらしいよ。"
     },
     {
      "es": "El pronóstico dice lluvia para mañana.",
      "ja": "天気予報では明日雨だって。"
     }
    ],
    "en": "Rain is forecast for tomorrow."
   },
   {
    "es": "¿Llevaste paraguas?",
    "ja": "傘持ってきた？",
    "note": "paraguasは『para（〜のため）+ agua（水）』の複合語。傘＝雨よけ、という直訳",
    "grammar": "llevar（持っていく）の点過去2人称単数疑問形。paraguas（傘）が目的語。",
    "nuance": "外出前に傘の準備を確認する実用的な表現。",
    "similar": [
     {
      "es": "¿Trajiste algo para la lluvia?",
      "ja": "雨対策で何か持ってきた？"
     },
     {
      "es": "¿No se te olvidó el paraguas?",
      "ja": "傘忘れなかった？"
     }
    ],
    "en": "Did you bring an umbrella?"
   },
   {
    "es": "No olvides el suéter, va a refrescar por la noche.",
    "ja": "夜は涼しくなるからセーター忘れないでね。",
    "note": "refrescarは『涼しくなる』。fresco（涼しい）から派生した動詞",
    "grammar": "olvidar（忘れる）の否定命令形（tú）+ refrescar（涼しくなる）の近接未来。理由節por la nocheが続く。",
    "nuance": "気温の変化を予測して、服装のアドバイスをする気遣いの表現。",
    "similar": [
     {
      "es": "Lleva algo abrigador, va a hacer frío después.",
      "ja": "後で寒くなるから何か暖かいもの持って行って。"
     },
     {
      "es": "Por la noche baja la temperatura.",
      "ja": "夜は気温が下がるよ。"
     }
    ],
    "en": "Don't forget your sweater, it'll get cooler tonight."
   },
   {
    "es": "Con este calor, mejor quedémonos en casa.",
    "ja": "この暑さだから、家にいた方がいいね。",
    "note": "quedémonosはnosotros形の命令。『（一緒に）残ろう』という提案のニュアンス",
    "grammar": "con este calor（この暑さで）という理由を示す前置詞句+ quedarnos（留まる）のnosotros形命令（勧誘）。",
    "nuance": "暑さを理由に外出を控えようと提案する表現。",
    "similar": [
     {
      "es": "Hace demasiado calor para salir.",
      "ja": "外出するには暑すぎるね。"
     },
     {
      "es": "Mejor no salgamos con este calor.",
      "ja": "この暑さでは出かけない方がいいね。"
     }
    ],
    "en": "With this heat, we'd better stay home."
   },
   {
    "es": "¿A cuánto está la temperatura?",
    "ja": "今何度くらい？",
    "note": "estarを使うのは気温が変動する一時的な状態だから。está nubladoと同じ発想",
    "grammar": "estar（一時的な状態）+ a cuánto（いくらに）という値を尋ねる構文。la temperatura（気温）が主語。",
    "nuance": "現在の気温を数値で尋ねる実用的な表現。メキシコでは摂氏を使う。",
    "similar": [
     {
      "es": "¿Qué temperatura hace?",
      "ja": "気温はどれくらい？"
     },
     {
      "es": "¿Cuántos grados hay?",
      "ja": "何度ある？"
     }
    ],
    "en": "What's the temperature?"
   },
   {
    "es": "Estamos a treinta grados.",
    "ja": "今30度だよ。",
    "note": "estarのnosotros形が主語なしで気温を表す、独特な非人称的用法",
    "grammar": "estar a + 数値（〜の状態にある）という気温表現の定型構文。実質的には気温を客観的に述べる非人称的用法。",
    "nuance": "15番の質問に対する回答例。気温を具体的な数値で伝える表現。",
    "similar": [
     {
      "es": "Hace treinta grados.",
      "ja": "30度あるよ。"
     },
     {
      "es": "La temperatura está en treinta grados.",
      "ja": "気温は30度だよ。"
     }
    ],
    "en": "It's thirty degrees."
   },
   {
    "es": "En temporada de lluvias, siempre llueve por la tarde.",
    "ja": "雨季はいつも午後に雨が降るんだ。",
    "note": "メキシコの雨季は5〜10月ごろ。毎日午後だけ降る、というパターンが実際に多い",
    "grammar": "en temporada de lluvias（雨季には）という時を示す前置詞句+ siempre（いつも）を伴う習慣的現在。",
    "nuance": "メキシコの雨季特有の気候パターンを説明する表現。",
    "similar": [
     {
      "es": "En época de secas casi no llueve.",
      "ja": "乾季にはほとんど雨が降らないよ。"
     },
     {
      "es": "Por las tardes suele llover en esta temporada.",
      "ja": "この時期は午後によく雨が降るんだ。"
     }
    ],
    "en": "During the rainy season, it always rains in the afternoon."
   },
   {
    "es": "Cayó granizo esta mañana.",
    "ja": "今朝は雹が降ったんだ。",
    "note": "granizo（雹）は高地にあるメキシコシティでは意外とよく見られる気象現象",
    "grammar": "caer（降る）の点過去3人称単数。granizo（雹）が主語、esta mañana（今朝）が時間を示す。",
    "nuance": "珍しい気象現象（雹）が起きたことを報告する表現。",
    "similar": [
     {
      "es": "Estuvo granizando en la mañana.",
      "ja": "朝、雹が降っていたよ。"
     },
     {
      "es": "Nunca había visto granizo así.",
      "ja": "こんな雹は見たことなかったよ。"
     }
    ],
    "en": "It hailed this morning."
   },
   {
    "es": "El clima ha estado muy raro últimamente.",
    "ja": "最近天気がすごく変だね。",
    "note": "climaは長期的な『気候』、tiempoは短期的な『天気』。使い分けのいい例",
    "grammar": "haber（完了の助動詞）+ estado（estarの過去分詞）という現在完了形。últimamente（最近）が期間を示す。",
    "nuance": "近年の異常気象について話す、少し社会的な話題性のある表現。",
    "similar": [
     {
      "es": "El clima está muy loco este año.",
      "ja": "今年の気候はすごくおかしいね（口語的）。"
     },
     {
      "es": "Ya no hay estaciones tan definidas.",
      "ja": "もうはっきりした季節がなくなってきたね。"
     }
    ],
    "en": "The weather has been really strange lately."
   }
  ]
 },
 {
  "icon": "👶",
  "title": "子育て・家族の会話",
  "items": [
   {
    "es": "¿Cuántos años tiene tu hijo?",
    "ja": "お子さんは何歳ですか？",
    "note": "年齢はtener（持つ）で表す。serやestarではなくtenerを使うのがスペイン語の特徴",
    "grammar": "tener（持つ・〜歳である）の直説法現在3人称単数疑問形。cuántos años（何歳）が年齢を尋ねる定型表現。",
    "nuance": "子どもの年齢を尋ねる、育児トークの定番の切り出し。",
    "similar": [
     {
      "es": "¿Qué edad tiene tu bebé?",
      "ja": "赤ちゃんは何歳（何ヶ月）ですか？"
     },
     {
      "es": "¿Cuántos años cumplió tu hijo?",
      "ja": "お子さんは何歳になりましたか？"
     }
    ],
    "en": "How old is your son?"
   },
   {
    "es": "Ya está gateando.",
    "ja": "もうハイハイしているんです。",
    "note": "gatearはgato（猫）から派生した動詞。『猫のように這う』という語源が面白い",
    "grammar": "estar + 現在分詞gateando（ハイハイしている）の進行形。ya（もう）が成長の進み具合を示す。",
    "nuance": "子どもの発達段階を共有する、育児中の親同士でよくある会話。",
    "similar": [
     {
      "es": "Ya empezó a gatear.",
      "ja": "もうハイハイを始めたんです。"
     },
     {
      "es": "Se mueve por todos lados.",
      "ja": "あちこち動き回るんです。"
     }
    ],
    "en": "He's already crawling."
   },
   {
    "es": "Se despierta varias veces en la noche.",
    "ja": "夜に何度も起きるんです。",
    "note": "despertarseは再帰動詞。『自分自身を目覚めさせる』という発想の構造",
    "grammar": "despertarse（目覚める）の再帰動詞、直説法現在3人称単数。varias veces（何度も）が頻度を示す。",
    "nuance": "夜泣きや睡眠の悩みを共有する、育児あるあるの会話。",
    "similar": [
     {
      "es": "No duerme toda la noche todavía.",
      "ja": "まだ夜通しは寝ないんです。"
     },
     {
      "es": "Se levanta cada dos horas.",
      "ja": "2時間おきに起きるんです。"
     }
    ],
    "en": "He wakes up several times at night."
   },
   {
    "es": "¿A qué escuela va?",
    "ja": "どの学校に通っていますか？",
    "note": "irの3人称単数vaは不規則変化。『行く』は特に頻出動詞なので早めに覚えると便利",
    "grammar": "ir（通う）の直説法現在3人称単数疑問形。a qué escuela（どの学校に）が対象を尋ねる。",
    "nuance": "子どもの通っている学校を尋ねる基本表現。",
    "similar": [
     {
      "es": "¿En qué escuela está?",
      "ja": "どちらの学校にいますか？"
     },
     {
      "es": "¿Dónde estudia tu hijo?",
      "ja": "お子さんはどこで勉強していますか？"
     }
    ],
    "en": "Which school does he go to?"
   },
   {
    "es": "Está en la etapa de los berrinches.",
    "ja": "今かんしゃくの時期なんです。",
    "note": "berrincheはメキシコで『イヤイヤ期』にあたる口語表現としてよく使われる",
    "grammar": "estar en（〜の段階にいる）+ la etapa de los berrinches（かんしゃくの時期）という定型句。",
    "nuance": "いわゆる「イヤイヤ期」に近い成長段階を表す、育児トークでよく使われる表現。",
    "similar": [
     {
      "es": "Está pasando por una etapa difícil.",
      "ja": "大変な時期を過ごしています。"
     },
     {
      "es": "Le dan muchos berrinches últimamente.",
      "ja": "最近よくかんしゃくを起こすんです。"
     }
    ],
    "en": "He's going through the tantrum phase."
   },
   {
    "es": "Le tocan las vacunas este mes.",
    "ja": "今月予防接種の番なんです。",
    "note": "tocarleは『（順番として）〜の番になる』というgustar型の面白い構文",
    "grammar": "tocarle（〜の番になる）というgustar型構文。las vacunas（予防接種）が主語、leが間接目的語（その子に）。",
    "nuance": "定期予防接種のスケジュールについて話す表現。",
    "similar": [
     {
      "es": "Tiene cita para sus vacunas.",
      "ja": "予防接種の予約があります。"
     },
     {
      "es": "Ya le tocan las vacunas de los seis meses.",
      "ja": "もう6ヶ月の予防接種の時期です。"
     }
    ],
    "en": "He's due for vaccines this month."
   },
   {
    "es": "¿Le puedo dar esto de comer?",
    "ja": "これ食べさせてもいいですか？",
    "note": "『dar de comer』は『食べさせる』の定型句。動物にエサをやるときにも使う",
    "grammar": "poder（できる）+ dar de comer（食べさせる）という定型句の疑問形。leは間接目的語（その子に）。",
    "nuance": "他人の子どもに食べ物を与える前に確認する、気遣いの表現。",
    "similar": [
     {
      "es": "¿Ya puede comer esto?",
      "ja": "もうこれ食べられますか？"
     },
     {
      "es": "¿Tiene alguna alergia alimentaria?",
      "ja": "食物アレルギーはありますか？"
     }
    ],
    "en": "Can I give him/her this to eat?"
   },
   {
    "es": "Se porta muy bien en la escuela.",
    "ja": "学校ではとてもいい子にしているんです。",
    "note": "portarseは『（自らを）振る舞う』の再帰動詞。behaviorに近いニュアンス",
    "grammar": "portarse（振る舞う）の再帰動詞、直説法現在3人称単数。muy bien（とても良く）が様態を示す。",
    "nuance": "学校での子どもの様子を肯定的に伝える表現。",
    "similar": [
     {
      "es": "Es muy obediente en clase.",
      "ja": "授業ではとても素直なんです。"
     },
     {
      "es": "La maestra dice que se porta bien.",
      "ja": "先生がいい子にしていると言っていました。"
     }
    ],
    "en": "He behaves very well at school."
   },
   {
    "es": "Está aprendiendo a caminar.",
    "ja": "今歩く練習をしているんです。",
    "note": "『aprender a + 不定詞』は『〜することを学ぶ』の基本パターン",
    "grammar": "estar + 現在分詞aprendiendo（学んでいる）の進行形。a caminar（歩くこと）が不定詞目的語。",
    "nuance": "子どもの発達段階を共有する、1番と似たタイプの表現。",
    "similar": [
     {
      "es": "Ya da sus primeros pasos.",
      "ja": "もう最初の一歩を踏み出しています。"
     },
     {
      "es": "Se para solo, pero aún no camina.",
      "ja": "一人で立てるけど、まだ歩けないんです。"
     }
    ],
    "en": "He's learning to walk."
   },
   {
    "es": "¿Me puedes ayudar a cuidarlo un rato?",
    "ja": "少しの間見ていてもらえる？",
    "note": "『ayudar a + 不定詞』で『〜するのを手伝う』。ayudarの後は前置詞aが必須",
    "grammar": "poder + 不定詞ayudar（手伝う）+ a cuidarlo（その子の面倒を見ることを）という前置詞a付き不定詞句。",
    "nuance": "少しの間、子守りを頼むカジュアルな依頼表現。",
    "similar": [
     {
      "es": "¿Me lo puedes cuidar un momento?",
      "ja": "少しの間その子を見ていてくれる？"
     },
     {
      "es": "¿Puedes echarme la mano con los niños?",
      "ja": "子どものことで手伝ってもらえる？"
     }
    ],
    "en": "Can you help me watch him for a bit?"
   },
   {
    "es": "¿Ya duerme toda la noche?",
    "ja": "もう夜通し寝る？",
    "note": "『toda la noche』は『一晩中』。todo/toda + 名詞で『〜じゅう』を表す型",
    "grammar": "dormir（眠る）の直説法現在3人称単数疑問形。toda la noche（一晩中）が期間を示す。",
    "nuance": "2番と関連し、乳児の睡眠状況を尋ねる育児トークの定番質問。",
    "similar": [
     {
      "es": "¿Ya no se despierta en la noche?",
      "ja": "もう夜中に起きなくなりましたか？"
     },
     {
      "es": "¿Cómo van sus noches?",
      "ja": "夜はどんな感じですか？"
     }
    ],
    "en": "Does he sleep through the night yet?"
   },
   {
    "es": "Está resfriado desde ayer.",
    "ja": "昨日から風邪を引いているんです。",
    "note": "resfriadoは『風邪をひいた』状態。resfriarse（風邪をひく）の過去分詞形",
    "grammar": "estar resfriado（風邪をひいている）という状態を表す表現。desde ayer（昨日から）が期間を示す。",
    "nuance": "子どもの体調を近況として伝える表現。",
    "similar": [
     {
      "es": "Tiene un poco de tos.",
      "ja": "少し咳をしています。"
     },
     {
      "es": "Amaneció con fiebre.",
      "ja": "朝から熱があります。"
     }
    ],
    "en": "He's had a cold since yesterday."
   },
   {
    "es": "Le encanta jugar afuera.",
    "ja": "外で遊ぶのが大好きなんです。",
    "note": "encantarは美容院のフレーズでも登場した動詞。子どもの『大好き』にもよく使われる",
    "grammar": "encantar（大いに気に入る）を使ったgustar型構文。jugar afuera（外で遊ぶこと）が主語。",
    "nuance": "子どもの好みや性格を共有する、和やかな会話の一言。",
    "similar": [
     {
      "es": "Le fascina el parque.",
      "ja": "公園が大好きなんです。"
     },
     {
      "es": "Es muy activo/a.",
      "ja": "とても活発なんです。"
     }
    ],
    "en": "He loves playing outside."
   },
   {
    "es": "¿Cómo le fue en la escuela hoy?",
    "ja": "今日学校どうだった？",
    "note": "irle bien/malのgustar型構文。『その子にとってどう進んだか』という視点",
    "grammar": "irle bien/mal（〜がうまくいく/いかない）のgustar型構文の点過去疑問形。leが間接目的語。",
    "nuance": "子どもが帰宅した際によく使われる、学校での様子を尋ねる日常表現。",
    "similar": [
     {
      "es": "¿Qué tal tu día en la escuela?",
      "ja": "今日の学校どうだった？"
     },
     {
      "es": "¿Aprendiste algo nuevo hoy?",
      "ja": "今日何か新しいこと学んだ？"
     }
    ],
    "en": "How was school today?"
   },
   {
    "es": "Necesito recogerlo a las tres.",
    "ja": "3時に迎えに行かないといけないんです。",
    "note": "recogerは空港の荷物受け取りでも登場した動詞。『拾い上げる』が根本の意味",
    "grammar": "necesitar + 不定詞recogerlo（その子を迎えに行く）。a las tres（3時に）が時刻を示す。",
    "nuance": "お迎えの時間を伝える、育児と仕事の両立でよく使う表現。",
    "similar": [
     {
      "es": "Tengo que ir por él a las tres.",
      "ja": "3時にその子を迎えに行かないといけません。"
     },
     {
      "es": "La escuela sale a las tres.",
      "ja": "学校は3時に終わります。"
     }
    ],
    "en": "I need to pick him up at three."
   },
   {
    "es": "Es un poco tímido con gente nueva.",
    "ja": "初対面の人にはちょっと人見知りするんです。",
    "note": "serを使うのは性格という恒常的な性質だから。一時的な状態ならestarを使う",
    "grammar": "ser（性格を表す恒常的性質）+ un poco tímido（少し恥ずかしがり屋）。con gente nueva（初対面の人に対して）が対象。",
    "nuance": "子どもの性格を紹介する、初対面の場でよく使われる表現。",
    "similar": [
     {
      "es": "Le cuesta abrirse con desconocidos.",
      "ja": "知らない人にはなかなか心を開かないんです。"
     },
     {
      "es": "Es un poco reservado al principio.",
      "ja": "最初は少し人見知りするんです。"
     }
    ],
    "en": "He's a bit shy with new people."
   }
  ]
 }
];
