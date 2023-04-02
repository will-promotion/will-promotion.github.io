import type { ChartData, ChartOptions } from 'chart.js';

export const SITE_TITLE = "WILL新歓HP | WILL【公式サイト】";
export const SITE_DESCRIPTION =
  "WILL(Waseda IT Leader Lab)は早稲田大学を拠点とするプログラミングサークルです。こちらのサイトではWILLおよびWILLと提携しているPlayGroundの情報とWILLの新歓に関する内容が確認できます。";
export const PAGE_LINKS = <const>[
  {
    title: "TOP",
    enTitle: "TOP",
    href: "/",
  },
  {
    title: "活動紹介",
    enTitle: "ABOUT US",
    href: "/about",
  },
  {
    title: "コース説明",
    enTitle: "COURSES",
    href: "/courses",
  },
  {
    title: "新歓イベント",
    enTitle: "EVENTS",
    href: "/events",
  },
  {
    title: "入会方法",
    enTitle: "JOIN US",
    href: "/join",
  },
  {
    title: "お問い合せ",
    enTitle: "CONTACT US",
    href: "/contact",
  },
];

// Chart
const tooltip = {
  callbacks: {
    label: (tooltipItem: { dataset: { data: { [x: string]: any; }; }; dataIndex: string | number; }) => {
      const value = tooltipItem.dataset.data[tooltipItem.dataIndex];
      return `${value}`;
    },
  },
};

const legend: any = {
  display: true,
  position: "right",
  fullWidth: false,
  labels: {
    boxWidth: 20,
    boxHeight: 20,
    font: {
      size:18
    },
  },
};

export const options: ChartOptions<"doughnut"> = {
  rotation: 0,
  cutout: '70%',
  plugins: {
    legend: legend,
    tooltip: tooltip,
  }
};

export const yearsData: ChartData<'doughnut'> = {
  labels: ["1年 15人", "2年 17人", "3年 13人", "4年 1人"],
  datasets: [
    {
      data: [15, 17, 13, 1],
      backgroundColor: ["#f4b3ca", "#b0da37", "#EB6EA5", "#AAB564"],
    },
  ],
};

export const genderData: ChartData<'doughnut'> = {
  labels: ["男子 36人", "女子 10人"],
  datasets: [
    {
      data: [36, 10],
      backgroundColor: ["#AACF52", "#F19EC2"],
    },
  ],
};

export const universityData: ChartData<'doughnut'> = {
  labels: ["早稲田 45人", "他大 1人"],
  datasets: [
    {
      data: [45, 1],
      backgroundColor: ["#f5b8b5", "#b5c97c"],
    },
  ],
};

export const departmentData: ChartData<'doughnut'> = {
  labels: [
    "国教 1人",
    "社学 4人",
    "教育 6人",
    "商 7人",
    "法 2人",
    "創造 4人",
    "先進 0人",
    "基幹 15人",
    "人科 2人",
    "文 1人",
    "文構 1人",
    "政経 2人",
    "他大 1人"
  ],
  datasets: [
    {
      data: [1, 4, 6, 7, 2, 4, 0, 15, 2, 1, 1, 2, 1],
      backgroundColor: [
        "#be8096",
        "#f4b3ca",
        "#ff3e82",
        "#E4007F",
        "#cd0049",
        "#bf7e45",
        "#644529",
        "#d96600",
        "#3b5000",
        "#638600",
        "#87b701",
        "#a7e200",
        "#CCE198",
      ],
    },
  ],
};

export const departmentOptions: ChartOptions<"doughnut"> = {
  rotation: -3.3,
  cutout: '70%',
  plugins: {
    legend: legend,
    tooltip: tooltip,
  }
}

export const CHART_DATA = [
  {
    title: "学年比",
    name: "years",
    data: yearsData,
    options: options,
  },
  {
    title: "男女比",
    name: "gender",
    data: genderData,
    options: options,
  },
  {
    title: "大学比",
    name: "university",
    data: universityData,
    options: options,
  },
  {
    title: "学部比",
    name: "department",
    data: departmentData,
    options: departmentOptions,
  },
]

// WILLの活動紹介
export const WILL_ACT = [
  {
    title: "Wheel-Up",
    content: "学期中の対面での活動としては、Wheel-Upプロジェクトが行われています。プロジェクトは5~7月、10~12月の2期/年で開催され、先輩メンバー2名、後輩メンバー3~5名ほどでチームを組み、毎週ITに関する講義に加えて、作業会やレクリエーションを行い交流を深めます。",
    image: "images/about/about_will_.svg",
    alt: "Wheel-Upのイメージ画像",
  },
  {
    title: "月1レク",
    content: "WILLでは、月に1度の頻度で対面での交流会を行っています。スポッチャや花火をしたり、ハロウィーンの日に一緒にご飯食べたり、クリスマスマーケット行ったりするなど、普段オンラインでの学習がメインの中でも月1度は対面でメンバー同士の交流を図っています。",
    image: "images/about/about_will_rec.svg",
    alt: "定例会（オンライン）のイメージ画像",
  },
  {
    title: "定例会（オンライン）",
    content: "WILLでは、週1回、現在は水曜日12～13時にオンライン定例会を行っています。WILLメンバーで集まります。セットアップやWILLの学習でつまずいたところを相談したり雑談したり、学部や所属コースを越えた交流ができます。",
    image: "images/about/about_will_mtg.svg",
    alt: "定例会（オンライン）のイメージ画像",
  },
  {
    title: "運営部",
    content: "運営部の活動は、毎週のミーティングを軸としており、WILLのイベントやこれからについて、WILLがもっとよくなるような活動がされています。",
    image: "images/about/about_will_operation.svg",
    alt: "WILL運営部のイメージ画像",
  },
]

// PGの活動紹介
export const PG_ACT = [
  {
    title: "定例会",
    content: "PlayGroundでは、各コース参加者は週1回の頻度で集まり、学習について相談したり、LT形式の勉強会やレクを行って交流を深めています。コース受講者と修了者、案件参加中の方などが集まるので、勉強する中で分からないことがあったら随時質問できます。定例会の日程はコースにより異なります。",
    image: "images/about/about_slack.svg",
    alt: "slackのイメージ画像",
  },
  {
    title: "PGrit",
    content: "PGrit（グリット）とは、PlayGroundに所属する人たちが集うTwitterライクなSNSです。ここでは、Twitter同様に日常のことを呟いたり、技術的な発信をしたり、質問や課題提出など広い範囲で使用します。PlayGroundではこのPGritを通して多くの人と関わることができます。",
    image: "images/about/about_pgrit.svg",
    alt: "PGritのイメージ画像",
  },
  {
    title: "Dawn",
    content: "PlayGroundでは、コース定例会や勉強会、交流会、イベント、案件の開発や作業会などにDawn（ドーン）を用います。Dawnとは、PlayGroundで作成されたバーチャルオフィスサービスです。バーチャルオフィス内では、多様な部屋を作成することができ、各部屋は、最大16名のビデオ通話やチャットが可能です。新入生部屋などもあり、新入生同士で集まって交流する風景をよく見かけます。",
    image: "images/about/about_dawn.png",
    alt: "Dawnのイメージ画像",
  },
  {
    title: "ハッカソン",
    content: "PlayGroundでは定期的にハッカソンが開催されています。ハッカソンとは短期間で集中的にサービスを開発するコンペティションのようなものです。中には実際にサービスとしてローンチ(公開)できるのではないかと言われるぐらいレベルの高い成果物を作り上げるチームもあり、毎回白熱します。毎年1~2回ほど開催されています。",
    image: "images/about/about_hackathon.svg",
    alt: "ハッカソンのイメージ画像",
  },
]

// コース紹介
export const COURSES = [
  {
    title: "フロントエンド",
    content: "WebサイトやWebアプリケーションなどでユーザーの目に触れる部分を作成します。Webアプリ開発ではバックエンドとの連携が必要になるため、バックエンドの技術を理解したりネットワークに関する知識を身に付けたりすることも重要になってきます。 また実装する際は、ユーザーが見やすく使いやすいUI（ユーザーインターフェース）で、UX（ユーザーエクスペリエンス）を向上させるデザインになっているかを吟味することも大切です。 更に、変化の激しい分野でもあるので、流行しているデザインや実装手法など常に勉強する姿勢も大切にしましょう。出来上がっていくのが目に見えてわかるので、ものづくりが好きな人が向いているかもしれません。",
    image: "images/courses/courses_frontend.svg",
    alt: "フロントエンドのイメージ画像",
    modalId: "modal-1",
    modalTitle: "-Frontend-",
    modalLearnings: ["HTML/CSS", "Git/GitHub", "JavaScript/TyepeScript", "React", "Storybook"],
    modalContent: "Figmaのデザインを基に、Reactを用いてTODOアプリの作成を行います。案件と同じように、先輩からレビューを受けながら進めていきます。課題の中で、デザインツールであるFigmaやコードのバージョン管理ツールである Git/GitHub の使い方についても学習します。",
  },
  {
    title: "バックエンド",
    content: "バックエンドの開発者は、Webサイトの基盤を作成し、ユーザーが入力した内容を意味のあるデータに変換して保存や出力を行います。バックエンドの構築では、フロントエンドやモバイルアプリとの連携をする設計になることが多くなります。そのため、それらの技術の把握も必要になってきます。バックエンドの領域には、データベース、アプリケーション、ネットワーク、セキュリティ等があり、それぞれの専門領域に分けられます。バックエンドコースでは、広範囲な基礎知識を学び、Webアプリケーションの作成ができる状態になることを目指しています。その後は、個人で興味のある分野について深く学ぶことができます。",
    image: "images/courses/courses_backend.svg",
    alt: "バックエンドのイメージ画像",
    modalId: "modal-2",
    modalTitle: "-Backend-",
    modalLearnings: ["HTML/CSS", "JavaScript", "Python", "Django", "SQL"],
    modalContent: "Twitterのようなクローンアプリケーションの開発を行います。コードレビューが行われるため、円滑なコミュニケーションを心がける必要があります。実装する機能には、「サインアップ」、「ログイン・ログアウト」、「ツイート」、「フォロー」、「いいね」があります。技術スタックには、フロントエンドにHTML、CSS、JavaScript、サーバーにDjango(Python)、データベースにSQLite3(RDB)が要求されます。",
  },
  {
    title: "モバイル",
    content: "iOSやAndroidのスマートフォン上で動くアプリの開発を行います。AppleやGoogleによってOSのアップデートが毎年行われるので非常に技術の流れが早いのが特徴であり、開発に必要なプログラム言語についても更新がされるので理解していなければなりません。モバイルアプリケーション開発では、ユーザーの目に見える部分のUI実装やデータ通信や認証などといったバックエンドとの連携が不可欠です。このコースでアプリケーションの全体像をつかんでモバイルエンジニアとしての第一歩を踏み出しましょう。",
    image: "images/courses/courses_mobile.svg",
    alt: "モバイルのイメージ画像",
    modalId: "modal-3",
    modalTitle: "-Mobile-",
    modalLearnings: ["Git/Github", "Figma(デザインデータの見方など)", "Dart言語を使ったクロスネイティブアプリケーションの開発", "環境構築"],
    modalContent: "Flutterを用いてQiitaのクライアントアプリを作成します。ログイン認証やAPIを使ったデータ通信、画面遷移や基礎的なレイアウト表示などができるようになることがモバイルコースの課題となります。実際の案件でも利用するFigmaのデザインデータを見ながらアプリのUI部分まで担当してもらいます。Figmaの使い方なども同時に学びます。",
  },
  {
    title: "データサイエンス",
    content: "データサイエンスコースでは、機械学習モデルの構築に必要な数学の基礎学習から、モデルのコーディングまで学べます。コース修了時には、生データを可視化し、分析できる力がつき、Kaggleのコンペに参加し、コードを読み解き、提出することができるようになります。また、最終課題ではチームで機械学習を用いた課題解決に取り組み実践的に学びを深めることができます。定例では、数式を理解しながらコードを書けるように日々努力しています。",
    image: "images/courses/courses_data-science.svg",
    alt: "データサイエンスのイメージ画像",
    modalId: "modal-4",
    modalTitle: "-DataScience-",
    modalLearnings: ["Git/Github", "Python", "線形代数、微積分、確率・統計", "機械学習の理論"],
    modalContent: "模擬案件という名目で、1か月の限られた期間にチームで課題解決のための手法提案・実装を行います。題材にkaggleのテーマを用います。",
  },
  {
    title: "デザイン",
    content: "デザインコースでは、UI/UXデザイナーのロードマップに合わせて、デザインツールFigmaを用いたデザインの作り方としてUI Design、作成したデザインの動きを表現するPrototyping、WEBページの設計図であるワイヤーフレームの作成方法、そしてDesign Systemの学習としてデザインの管理次第でエンジニアの実装スピードが変わることを学びます。",
    image: "images/courses/courses_design.svg",
    alt: "デザインのイメージ画像",
    modalId: "modal-5",
    modalTitle: "-Design-",
    modalLearnings: ["Figmaの使い方", "配色について", "Atomic Designの構築・管理", "仕様書の読み解き", "画面遷移図", "ワイヤーフレーム", "デザインカンプ"],
    modalContent: "最終課題は Shinonome で実際に請け負ったプロジェクトを使った模擬案件形式です。画面遷移図制作, ワイヤーフレーム制作, メインページのデザインカンプ制作の三段階で最終課題は構成されています。",
  },
  {
    title: "ブロックチェーン",
    content: "ブロックチェーンに関わる技術全般を担当。スマートコントラクトやチェーン設計について学べます。ブロックチェーンは、Bitcoinをはじめとする仮想通貨の土台となっている分散型システムです。ブロックチェーンエンジニアは主に、ブロックチェーン上で動作するアプリケーション(通称、スマートコントラクト)の設計と開発を担当します。技術の進歩が極めて早い業界のため、常にキャッチアップする必要がありますがその分、他の領域では味わえないスピード感や、時代の最先端を感じ取れます。",
    image: "images/courses/courses_block-chain.svg",
    alt: "ブロックチェーンのイメージ画像",
    modalId: "modal-6",
    modalTitle: "-BlockChain-",
    modalLearnings: ["暗号に関する知識ハッシュ関数, 公開鍵暗号, デジタル署名, ブロックチェーン理論", "Ethereum(EIP-1559)", "Dapps", "Hardhat, chai, ethers", "セキュリティのベストプラクティス", "Solidity, JavaScript/TypeScript", "ERC20, ERC721, OpenZeppelin, Uniswap v2"],
    modalContent: "Uniswapと呼ばれるプロトコルを用いたERC20-WETH間のスワップDappsを開発します。さらにmochaによるテストまでが課題内容に含まれます。",
  },
]

// コース修了者の声
export const COURSE_VOICES = [
  {
    image: "images/courses/courses_dog.png",
    alt: "犬のアイコン",
    course: "フロントエンドコース",
    text1: "先輩からのレビューを受けることができた点",
    text2: "フロントエンドは実装の仕方に正解がないので、実装の方針について悩むこともあった",
  },
  {
    image: "images/courses/courses_eider.png",
    alt: "カモのアイコン",
    course: "バックエンドコース",
    text1: "アプリケーション制作の基礎であるユーザー登録やCRUD機能を学べたこと",
    text2: "クエリの呼び出しやフロントエンドとのつながりがよくわからず、どういったクラスや関数を書けばいいのかわからなかった",
  },
  {
    image: "images/courses/courses_sheep.png",
    alt: "羊のアイコン",
    course: "モバイルコース",
    text1: "いつも自分が使っているiPhoneアプリがどのような仕組みで動いているかを詳しく知ることができた",
    text2: "どの端末サイズでもデザインが崩れないようなUIを組むのが大変だった",
  },
]

// 新歓
export const EVENTS = [
  {
    title: "新歓説明会・セットアップ",
    content: "新歓期に開催する特別なオンライン説明会です！WILLの活動やビジョン、入会方法についてお話します！質問や相談なども受け付けているので、少しでも気になった方はぜひお申し込みください！説明会後、入部希望の方向けにセットアップサポート（90分前後）も行いますので、ぜひ予定を開けてご参加ください！",
    date: ["2023/04/05(水) 18:00-19:00 PlayGround/WILL合同", "2023/04/11(火) 15:00-15:30 WILL新歓", "2023/04/17(月) 15:00-15:30 WILL新歓", "2023/04/20(木) 18:00-19:00 PlayGround/WILL合同", "2023/05/01(月) 15:00-16:00 PlayGround/WILL合同"],
    image: "images/events/events_online.svg",
    alt: "オンライン説明会のイメージ画像",
  },
  {
    title: "ハンズオン | Python基礎文法",
    content: "AIなどに用いられるPythonという言語の未経験者向け体験会を開催します‼プログラミングに興味がある方は気軽に参加してください‼ (所要時間:100分程度)",
    date: ["2023/4/7(金) 15:00～16:40", "2023/5/3(水) 15:00～16:40"],
    image: "images/events/events_lt.svg",
    alt: "ハンズオン | Python基礎文法のイメージ画像",
  },
  {
    title: "ハンズオン | データサイエンス体験",
    content: "Pythonを用いて、kaggleというプラットフォームのチュートリアル(Titanic)で、機械学習についての説明をプログラミング未経験者向けに行います。興味のある人は気軽に参加してください!! (所要時間:100分程度)",
    date: ["2023/4/13(木) 15:05~16:45", "2023/4/29(土) 14:00~15:40"],
    image: "images/events/events_offline.svg",
    alt: "ハンズオン | データサイエンス体験のイメージ画像",
  },
]

// FAQ
export const FAQ = [
  {
    question: "入会費/年会費はありますか？",
    answer: "入会費/年会費はありません。",
    subAnswer: "WILLが参加するPlayGroundにおいても、無料でIT/プログラミングの学習やサポートを受けることができます。",
  },
  {
    question: "早稲田大学の学生じゃなくても入れますか？",
    answer: "もちろん歓迎です！",
    subAnswer: "WILLは早稲田大学を拠点に置いてますが、他大学の方でも大丈夫です。",
  },
  {
    question: "他サークルなどとの掛け持ちでも大丈夫ですか？",
    answer: "可能です！",
    subAnswer: "可能ですが、PlayGroundでのコース学習中や案件にアサインされている期間は、優先的に時間を割いていただく必要があります。（目安：10時間/週）",
  },
]
