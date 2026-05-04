import { BookOpen } from "lucide-react";

export default function Publications() {
  const journalArticles = [
    // 2016 年以後
    {
      title: "以反事實架構角度推估因果效應：2000年至2023年臺灣教育研究領域相關期刊論文之擇要回顧",
      authors: "關秉寅、彭思錦",
      journal: "中國統計學報",
      year: 2024,
      volume: "62(3)",
      pages: "222-262"
    },
    {
      title: "運用界限設置分析方法探究年齡—時期—世代之效應：以臺灣個人主觀社會地位長期變遷為例",
      authors: "彭思錦、關秉寅",
      journal: "調查研究—方法與應用",
      year: 2023,
      volume: "51",
      pages: "161-204"
    },
    {
      title: "Time Will Tell: Revisiting the Impact of College Expansion on Income and Occupational Prestige Mobility of Young Adults in Taiwan",
      authors: "Kuan, Ping-Yin & Ssu-Chin Peng",
      journal: "Higher Education Quarterly",
      year: 2021,
      volume: "75(3)",
      pages: "468-486"
    },
    {
      title: "Graduates' Career Success Predicted by Mathematical and Affective Abilities, Effective Higher-Education Learning and Economic Contexts: A Bioecological Positivity to Success Model",
      authors: "Chiu, Mei-Shiu, Weiyan Xiong & Ping-Yin Kuan",
      journal: "Journal of Education and Work",
      year: 2021,
      volume: "34(3)",
      pages: "313-330"
    },
    {
      title: "The Heterogeneous Effects of Participation in Shadow Education on Mental Health of High School Students in Taiwan",
      authors: "Chen, I-Chien & Ping-Yin Kuan",
      journal: "International Journal of Environmental Research and Public Health",
      year: 2021,
      volume: "18(3)",
      pages: "1222"
    },
    {
      title: "臺灣高教擴張對年輕世代薪資及職業的影響：反事實的分析",
      authors: "關秉寅、彭思錦、崔成秀",
      journal: "人文及社會科學集刊",
      year: 2019,
      volume: "31(4)",
      pages: "555-599"
    },
    {
      title: "Effects of Cram Schooling on Academic Achievement and Mental Health of Junior High Students in Taiwan",
      authors: "Kuan, Ping-Yin",
      journal: "Chinese Sociological Review",
      year: 2018,
      volume: "50(4)",
      pages: "391-422"
    },
    {
      title: "從學校到勞力市場：簡介「台灣教育長期追蹤資料庫」及其後續追蹤調查",
      authors: "關秉寅",
      journal: "中國統計學報",
      year: 2017,
      volume: "55(1)",
      pages: "24-40"
    },
    {
      title: "同儕補習風氣對國中生學習成就之影響",
      authors: "關秉寅",
      journal: "臺灣社會學刊",
      year: 2016,
      volume: "60",
      pages: "99-133"
    },
    {
      title: "國中讀前段班有差嗎？能力分班對學習成就影響的反事實分析",
      authors: "關秉寅",
      journal: "教育研究集刊",
      year: 2016,
      volume: "62(1)",
      pages: "1-33"
    },
    {
      title: "Social Context, Parental Exogamy and Hakka Language Retention in Taiwan",
      authors: "Jan, Jie-Sheng, Ping-Yin Kuan, & Arlett Lomeli",
      journal: "Journal of Multilingual and Multicultural Development",
      year: 2016,
      volume: "37(8)",
      pages: "794-804"
    },
    // 2016 年以前
    {
      title: "Gender, Sleep Problems, and Obesity in Taiwan: A Propensity-Score-Matching Approach",
      authors: "Chen, Duan-Rung & Ping-Yin Kuan",
      journal: "Women and Health",
      year: 2015,
      volume: "55(2)",
      pages: "119-133"
    },
    {
      title: "台灣及東亞青少年的成長歷程：評The Psychological Well-being of East Asian Youth",
      authors: "關秉寅",
      journal: "台灣社會學",
      year: 2014,
      volume: "27",
      pages: "167-174"
    },
    {
      title: "The Impact of Multilevel Factors on Technology Integration: The Case of Taiwanese Grade 1-9 Teachers and Schools",
      authors: "Hsu, Shihkuan & Ping-Yin Kuan",
      journal: "Educational Technology Research and Development",
      year: 2013,
      volume: "65(1)",
      pages: "25-50"
    },
    {
      title: "The Impact of Marital Discord of Parents on Taiwanese Adolescents' Academic Achievement: The Mediating and Moderating Effect of Maternal Parenting Practice",
      authors: "Lee, Chien-Ti, Troy E. Beckert, Chyi-In Wu, & Ping-Yin Kuan",
      journal: "Journal of Comparative Family Studies",
      year: 2011,
      volume: "42(6)",
      pages: "827-850"
    },
    {
      title: "國民中小學教師資訊融入教學素養評量表之建構與調查",
      authors: "徐式寬、關秉寅",
      journal: "科學教育學刊",
      year: 2011,
      volume: "19(4)",
      pages: "335-357"
    },
    {
      title: "Effects of Cram Schooling on Mathematics Performance: Evidence from Junior High Students in Taiwan",
      authors: "Kuan, Ping-Yin",
      journal: "Comparative Education Review",
      year: 2011,
      volume: "55(3)",
      pages: "342-368",
      note: "(The winner of the CIES George Bereday Award for the best article published in the Comparative Education Review in 2011)"
    },
    {
      title: "生命壓力事件與個人宗教性之間係的探討",
      authors: "關秉寅、彭士芬",
      journal: "台灣宗教研究",
      year: 2010,
      volume: "9(2)",
      pages: "27-52"
    },
    {
      title: "國中生數學補得越久，數學成就越好嗎？傾向分數配對法的分析",
      authors: "關秉寅、李教義",
      journal: "教育研究集刊",
      year: 2010,
      volume: "56(2)",
      pages: "105-139"
    },
    {
      title: "The Invisible Family: A Qualitative Study of Suicide Survivors in Taiwan",
      authors: "Tzeng, Wen-Chii, Pi-Yu Su, Hsien-Hsien Chiang, & Ping-Yin Kuan, & Jia-Fu Lee",
      journal: "Western Journal of Nursing Research",
      year: 2010,
      volume: "32(2)",
      pages: "185-198"
    },
    {
      title: "撤散性思考與聚欲性思考的交會：有限解答之擴散性思考測驗之編製與信效度檢驗",
      authors: "陳學志、洪美蒨、許樺芬、鄧皓政、關秉寅、詹志昇",
      journal: "教育科學研究期刊",
      year: 2009,
      volume: "54(4)",
      pages: "29-61"
    },
    {
      title: "Social Citizenship Rights and the Welfare Circle Dilemma – Reflections from the Attitudinal Findings of Two Chinese Societies",
      authors: "Wong, Chack-Kie, Kate Yeong-Tsyr Wang, & Ping-Yin Kuan",
      journal: "Asian Social Work and Policy Review",
      year: 2009,
      volume: "3",
      pages: "51-62"
    },
    {
      title: "補習數學有用嗎？─個「反事實」的分析",
      authors: "關秉寅、李教義",
      journal: "台灣社會學刊",
      year: 2008,
      volume: "41",
      pages: "97-148"
    },
    {
      title: "社會福利的權利與責任：一個質譜的探視",
      authors: "王永慈、關秉寅、王卓琪、鄧康良",
      journal: "中國社會工作研究",
      year: 2007,
      volume: "5",
      pages: "23-44"
    },
    {
      title: "Class Identification in Taiwan: A Latent Class Analysis",
      authors: "Kuan, Ping-Yin",
      journal: "台灣社會學刊",
      year: 2006,
      volume: "37",
      pages: "169-205"
    },
    {
      title: "Peace, Not War - Adolescents' Management of Intergenerational Conflicts in Taiwan",
      authors: "Kuan, Ping-Yin",
      journal: "Journal of Comparative Family Studies",
      year: 2004,
      volume: "35",
      pages: "591-614"
    },
    {
      title: "青少年以對立性方式處理人際衝突之研究",
      authors: "關秉寅",
      journal: "國立政治大學社會學報",
      year: 2003,
      volume: "35",
      pages: "35-78"
    },
    {
      title: "青少年處理人際組紛方式初探",
      authors: "關秉寅",
      journal: "應用心理研究",
      year: 2001,
      volume: "11",
      pages: "141-173"
    },
    {
      title: "台灣社會民眾處理人際組紛方式之研究",
      authors: "關秉寅",
      journal: "台灣社會學刊",
      year: 1999,
      volume: "22",
      pages: "121-171"
    },
    {
      title: "Stratification Beliefs in Taiwan",
      authors: "Kuan, Ping-Yin & Yih-Jyh Huang",
      journal: "Contemporary Development Analysis",
      year: 1996,
      volume: "1(2)",
      pages: "95-199"
    },
    {
      title: "「誰的公平?誰的正義?」從土地增值稅爭議談公平與權力之間係",
      authors: "關秉寅",
      journal: "人文及社會科學集刊",
      year: 1994,
      volume: "6(2)",
      pages: "99-133"
    },
    {
      title: "Choosing Rules of Distributive Justice",
      authors: "關秉寅",
      journal: "輔仁學誌─法、管理學院之部",
      year: 1993,
      volume: "25",
      pages: "317-390"
    },
    {
      title: "Structural Analysis and the Study of Social Structure",
      authors: "關秉寅",
      journal: "輔仁學誌─法、管理學院之部",
      year: 1987,
      volume: "19",
      pages: "461-473"
    }
  ];

  const books = [
    {
      title: "補習數學有用嗎？一個「反事實」的分析",
      authors: "關秉寅、李敦義",
      publisher: "陳俊瑋編著《方興未艾：學科補習效益在臺灣的發現》，麗文文化",
      year: 2018,
      pages: "頁93-121"
    },
    {
      title: "國中生數學補的愈久，數學成就愈好嗎？傾向分數配對法的分析",
      authors: "關秉寅、李敦義",
      publisher: "陳俊瑋編著《方興未艾：學科補習效益在臺灣的發現》，麗文文化",
      year: 2018,
      pages: "頁147-167"
    },
    {
      title: "同儕補習風氣對國中生學習成就之影響",
      authors: "關秉寅",
      publisher: "陳俊瑋編著《方興未艾：學科補習效益在臺灣的發現》，麗文文化",
      year: 2018,
      pages: "頁213-232"
    },
    {
      title: "A Profile of Religion in Contemporary Taiwan",
      authors: "Kuan, Ping-Yin",
      publisher: "Tsai, Yen-zen, ed., Religious Experience in Contemporary Taiwan and China. Chengchi University Press",
      year: 2013,
      pages: "pp. 17-40"
    },
    {
      title: "Becoming Religious? The Relationship between Change in Religious Affiliation and Religiosity in Taiwan",
      authors: "Chao, Hsing-kuang & Ping-Yin Kuan",
      publisher: "Tsai, Yen-zen, ed., Religious Experience in Contemporary Taiwan and China. Chengchi University Press",
      year: 2013,
      pages: "pp. 213-232"
    },
    {
      title: "高教擴張、失業與主觀社會地位變遷",
      authors: "張峯彬、關秉寅",
      publisher: "謝雨生、傅仰止主編《臺灣的社會變遷1985~2005：社會階層與勞動市場》，中央研究院社會學研究所",
      year: 2012,
      pages: "頁63-92"
    },
    {
      title: "Chapter 5: Statistical Analysis",
      authors: "Kuo, Cheng-Tian & Ping-Yin Kuan",
      publisher: "Kuo, Cheng-Tian, Religion and Democracy in Taiwan. Albany: State University of New York Press",
      year: 2008,
      pages: "pp. 87-113"
    },
    {
      title: "爭靜革命：台灣社會債信觀的變化",
      authors: "關秉寅、王永慈",
      publisher: "王振寰、章英華主編《凝聚台灣生命力》，巨流",
      year: 2005,
      pages: "頁65-99"
    },
    {
      title: "青少年以對立性方式處理人際組紛之研究",
      authors: "關秉寅",
      publisher: "國立台北大學犯罪學研究所主編《二〇〇二犯罪問題研究研討會論文集》，國立台北大學",
      year: 2002,
      pages: "頁149-171"
    },
    {
      title: "L'Occidente secondo Taiwan: Occidente, cultura occidentale e cristianesimo nelle opinioni dei taiwanesi",
      authors: "Kuan, Ping-Yin, Dominique Tyl, & Mei-Chi Yin",
      publisher: "Edizioni della Fondazione Giovanni Agnelli",
      year: 2000,
      pages: "Traduzione dall'inglese di Martina Scalzerle"
    },
    {
      title: "青少年以對立性方式處理人際組紛之研究初探",
      authors: "關秉寅",
      publisher: "侯崇文主編《2000年犯罪問題理論與實務研討會論文集》，國立台北大學",
      year: 2000,
      pages: "頁62-90"
    },
    {
      title: "台灣民眾對薪資所得分配公平規範之評量",
      authors: "關秉寅",
      publisher: "侯崇文主編《八十五年度行政院國科會犯罪問題研究成果發表研討會論文集》，行政院國家科學委員會",
      year: 1997,
      pages: "頁67-98"
    },
    {
      title: "台灣民眾對成就之歸因及重分配政策之態度",
      authors: "關秉寅、黃毅志",
      publisher: "張玉堂、呂玉瑛、王南昌主編《九〇年代的台灣社會：社會變遷基本調查研究系列二(上冊)》，中央研究院社會學研究所",
      year: 1997,
      pages: "頁147-187"
    }
  ];

  const researchReports = [
    {
      title: "「臺灣教育長期追蹤資料庫」後續調查：核心樣本2019年電訪追蹤調查",
      author: "關秉寅",
      year: 2020,
      projectNumber: "MOST-108-2420-H-001-192-SSS"
    },
    {
      title: "台灣社會變遷基本調查計畫第七期第五次調查計畫執行報告",
      author: "傅仰止、關秉寅、吳齊殷、廖培珊、謝淑惠",
      year: 2020,
      projectNumber: "MOST-107-2420-H-001-003-SS2"
    },
    {
      title: "台灣國高中生補習持續時間及變動軌跡類型對學習成就與心理健康之影響",
      author: "關秉寅",
      year: 2020,
      projectNumber: "MOST-107-2410-H-004-068"
    },
    {
      title: "台灣國中生補習對心理健康影響之因果分析",
      author: "關秉寅",
      year: 2018,
      projectNumber: "MOST-106-2410-H-004-123"
    },
    {
      title: "「臺灣教育長期追蹤資料庫」後續調查：教育與勞力市場的連結2013-2017",
      author: "關秉寅",
      year: 2017,
      projectNumber: "MOST-102-2420-H-004-026-SS4"
    },
    {
      title: "台灣高教擴張對年輕世代職業地位及薪資的影響：反事實的分析",
      author: "關秉寅",
      year: 2016,
      projectNumber: "MOST-104-2410-H-004-109"
    },
    {
      title: "提高經濟弱勢學生進入頂尖大學",
      author: "關秉寅",
      year: 2016,
      projectNumber: "國立政治大學校務發展研究計畫"
    },
    {
      title: "國民中小學教師資訊融入教學素養大型資料之分析",
      author: "徐世寬、關秉寅",
      year: 2014,
      projectNumber: "MOST-102-2511-S-002-002"
    },
    {
      title: "回憶補習風氣對國中生學習成就之影響",
      author: "關秉寅",
      year: 2014,
      projectNumber: "MOST-102-2410-H-004-137"
    },
    {
      title: "2010世界價值觀調查-臺灣",
      author: "湯京平、關秉寅、莊文忠等",
      year: 2013,
      projectNumber: "NSC-100-2420-H-004-048"
    },
    {
      title: "國中能力分班對學生學習成就的影響",
      author: "關秉寅",
      year: 2012,
      projectNumber: "NSC-99-2410-H-004-166"
    },
    {
      title: "家庭社經地位、父母教養方式及作為對青少年學習表現之影響",
      author: "關秉寅",
      year: 2010,
      projectNumber: "NSC-96-2412-H-004-006-MY2"
    },
    {
      title: "台灣地區宗教經驗之比較研究",
      author: "蔡彥仁、蔡怡佳、郭承天、關秉寅、趙星光",
      year: 2009,
      projectNumber: "NSC-97-2410-H-004-178-MY3"
    },
    {
      title: "自認選族之民族認同研究",
      author: "曾要琮、關秉寅",
      year: 2009,
      projectNumber: "NSC-96-2314-B-016-050-MY2"
    },
    {
      title: "國民中小學教師資訊科技素養自評系統實施計畫成果報告",
      author: "徐世寬、關秉寅",
      year: 2009,
      projectNumber: "教育部電算中心"
    },
    {
      title: "大專校院招收外籍生市場調查與分析研究",
      author: "馬晨蕾、關秉寅",
      year: 2008,
      projectNumber: "教育部高教司"
    },
    {
      title: "中小學教師資訊科技素養教師自評表計畫",
      author: "徐世寬、關秉寅",
      year: 2007,
      projectNumber: "教育部電算中心"
    },
    {
      title: "問題導向與行動導向的通識教育",
      author: "關秉寅",
      year: 2006,
      projectNumber: "教育部顧問室"
    },
    {
      title: "社會福利的權利與責任的檢視：理念與落實(Ⅱ)",
      author: "王永慈、關秉寅",
      year: 2006,
      projectNumber: "NSC-94-2412-H-003-002-SSS"
    },
    {
      title: "家庭結構對國中生學習行為與成就之影響初探",
      author: "關秉寅",
      year: 2005,
      projectNumber: "NSC-93-2412-H-004-009"
    },
    {
      title: "社會福利的權利與責任的檢視：理念與落實",
      author: "王永慈、關秉寅",
      year: 2005,
      projectNumber: "NSC-93-2412-H-003-003-SSS"
    },
    {
      title: "家庭結構對青少年學習行為與成就之影響初探",
      author: "關秉寅",
      year: 2004,
      projectNumber: "NSC-2412-H-004-008"
    },
    {
      title: "台北市因應全球化策略之研究：以會議及展覽產業為例",
      author: "冷則剛、關秉寅",
      year: 2003,
      projectNumber: "台北市政府政府研究發展考核委員會"
    },
    {
      title: "青少年以對立性方式處理人際組紛之研究",
      author: "關秉寅",
      year: 2003,
      projectNumber: "NSC-91-2412-H-004-012"
    },
    {
      title: "台灣社會民眾的階級意識研究",
      author: "關秉寅",
      year: 2002,
      projectNumber: "NSC-90-2412-H-004-021"
    },
    {
      title: "修訂台北縣綜合發展計畫─人文社會部門基礎研究：第四章─教育部門研究",
      author: "吳齊殷、關秉寅",
      year: 2000,
      projectNumber: "台北縣政府委託研究計畫"
    },
    {
      title: "九〇年代大陸基層教發展現況研究",
      author: "關秉寅、楊開燁",
      year: 2000,
      projectNumber: "行政院大陸委員會"
    },
    {
      title: "青少年犯罪問題與其防制對策─青少年處理人際組紛的態度與行為研究(Ⅱ)",
      author: "關秉寅",
      year: 2000,
      projectNumber: "NSC-88-2418-H-030-002-Q14"
    },
    {
      title: "青少年犯罪問題與其防制對策─青少年處理人際組紛的態度與行為研究(Ⅰ)",
      author: "關秉寅",
      year: 1999,
      projectNumber: "NSC-87-2418-H-030-004-Q14"
    },
    {
      title: "Attitudes and Reflections towards the West, Western Culture, and Christianity in Taiwan",
      author: "Kuan, Ping-Yin, Dominique Tyl, & Catalina Mei-chi Yin with Louis Gutheinz, Augustin Wen-Ban Kuo",
      year: 1999,
      projectNumber: "Fondazione Giovanni Agnelli, Italy"
    },
    {
      title: "大學系所評鑑統計分析方法之探討",
      author: "謝邦昌、關秉寅",
      year: 1997,
      projectNumber: "輔仁大學研究獎勵"
    },
    {
      title: "台灣社會民眾處理人際組紛方式之研究",
      author: "關秉寅",
      year: 1997,
      projectNumber: "NSC-86-2412-H-030-001"
    },
    {
      title: "外籍勞工介入之正式與非正式系統─現況與倫理分析",
      author: "艾立勳、關秉寅等",
      year: 1997,
      projectNumber: "輔仁大學中西文化研究中心"
    },
    {
      title: "分析台灣勞工法規以及對女性外籍勞力及其家庭關係的影響",
      author: "艾立勳、關秉寅等",
      year: 1996,
      projectNumber: "輔仁大學中西文化研究中心"
    },
    {
      title: "薪資所得分配公平規範之研究",
      author: "關秉寅",
      year: 1995,
      projectNumber: "NSC-84-2411-H-030-004"
    }
  ];

  const technicalReports = [
    {
      title: "TEPS-B技術報告第1號：建構TEPS-B Panel 1 SH樣本2009年調查完訪成功樣本的機率權數",
      authors: "關秉寅、詹傑勝",
      year: 2015
    },
    {
      title: "TEPS-B技術報告第2號：建構TEPS-B Panel 1 SH樣本2010年面訪調查完訪成功樣本的機率權數",
      authors: "關秉寅、詹傑勝",
      year: 2016
    },
    {
      title: "TEPS-B技術報告第3號：建構TEPS-B Panel 1/2 CP樣本2014年面訪調查完訪成功樣本的機率權數",
      authors: "關秉寅、彭思錦",
      year: 2019
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-8 h-8" />
            <h1 className="text-4xl font-serif font-bold">學術著作</h1>
          </div>
          <p className="text-lg text-blue-100">Publications and Research Works</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Journal Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">
            期刊論文 (Journal Articles)
          </h2>
          <div className="space-y-4">
            {journalArticles.map((article, idx) => (
              <div key={idx} className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-700 mb-1">{article.authors}</p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">{article.journal}</span>, {article.volume}, pp. {article.pages}
                    </p>
                    {article.note && (
                      <p className="text-sm text-blue-700 mt-2 italic">{article.note}</p>
                    )}
                  </div>
                  <span className="text-blue-600 font-bold text-lg flex-shrink-0">{article.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Books & Book Chapters */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 pb-3 border-b-2 border-green-200">
            專書及專書論文 (Books & Book Chapters)
          </h2>
          <div className="space-y-4">
            {books.map((book, idx) => (
              <div key={idx} className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{book.title}</h3>
                    <p className="text-sm text-gray-700 mb-1">{book.authors}</p>
                    <p className="text-sm text-gray-600">
                      {book.publisher}, {book.pages}
                    </p>
                  </div>
                  <span className="text-green-600 font-bold text-lg flex-shrink-0">{book.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Reports */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 pb-3 border-b-2 border-purple-200">
            研究報告 (Research Reports)
          </h2>
          <div className="space-y-4">
            {researchReports.map((report, idx) => (
              <div key={idx} className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-sm text-gray-700 mb-1">
                      <span className="font-medium">Author(s):</span> {report.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Project Number:</span> {report.projectNumber}
                    </p>
                  </div>
                  <span className="text-purple-600 font-bold text-lg flex-shrink-0">{report.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Reports */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 pb-3 border-b-2 border-orange-200">
            技術報告 (Technical Reports)
          </h2>
          <div className="space-y-4">
            {technicalReports.map((report, idx) => (
              <div key={idx} className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-sm text-gray-700">
                      {report.authors}
                    </p>
                  </div>
                  <span className="text-orange-600 font-bold text-lg flex-shrink-0">{report.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <p className="text-gray-300 mb-2">
              © 2026 關秉寅 (Ping-Yin Kuan). All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              National Chengchi University | International College of Innovation
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
