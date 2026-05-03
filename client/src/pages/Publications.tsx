import { BookOpen } from "lucide-react";

export default function Publications() {
  const journalArticles = [
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
