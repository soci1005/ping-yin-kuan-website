import { Mail, ExternalLink, BookOpen, Users, Database, FileText, Award, Download } from 'lucide-react';

/**
 * 關秉寅教授個人學術網站
 * 設計理念：學術簡約主義
 * - 深藍色主色調代表專業和學術信任
 * - 清晰的資訊層級和易於導航的結構
 * - 精心設計的排版和微妙的互動效果
 */

export default function Home() {
  const heroImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663620222015/Lf6ttBa3x9uuuPee5ExvaJ/hero-academic-dJ6TBTAJqAZQF5BJ7hwmSx.webp';
  const patternImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663620222015/Lf6ttBa3x9uuuPee5ExvaJ/academic-pattern-93azfvaiwoV7kJ5mqdR8Jb.webp';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={heroImageUrl}
          alt="Academic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl flex items-center gap-8">
              <img
                src="https://ici.nccu.edu.tw/upload/91/staffing/5852/%E5%85%BC%E4%BB%BB%E6%95%99%E5%B8%AB-%E9%97%9C%E7%A7%89%E5%AF%85%E8%80%81%E5%B8%AB.jpg"
                alt="Ping-Yin Kuan"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0"
              />
              <div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
                  關秉寶
                </h1>
                <p className="text-xl text-gray-100 mb-2">
                  Ping-Yin Kuan
                </p>
                <p className="text-lg text-gray-200">
                  Distinguished Professor (Adjunct), International College of Innovation<br />
                  National Chengchi University
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Contact & Quick Info */}
        <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-200">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">
            聯絡資訊
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <a href="mailto:soci1005@nccu.edu.tw" className="text-blue-600 hover:text-blue-800 break-all">
                  soci1005@nccu.edu.tw
                </a>
                <br />
                <a href="mailto:pykuan@nccu.edu.tw" className="text-blue-600 hover:text-blue-800 break-all">
                  pykuan@nccu.edu.tw
                </a>
                <br />
                <a href="mailto:soci1005@gmail.com" className="text-blue-600 hover:text-blue-800 break-all">
                  soci1005@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ExternalLink className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">ORCID ID</p>
                <a href="https://orcid.org/0000-0001-9516-4910" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  0000-0001-9516-4910
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ExternalLink className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">政大學術集成</p>
                <a href="https://ah.lib.nccu.edu.tw/scholar?id=271&locale=zh_TW" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  學術著作與檔案
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ExternalLink className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">Google Scholar</p>
                <a href="https://scholar.google.com/citations?user=pxY77-cAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  學術檔案
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ExternalLink className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">ResearchGate</p>
                <a href="https://www.researchgate.net/profile/Ping-Yin-Kuan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  研究檔案
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">最高學歷：</span> 美國維吉尼亞大學社會學博士 (Ph.D. Sociology, University of Virginia, USA)
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="mb-16">
          <img src={patternImageUrl} alt="divider" className="w-full h-20 object-cover opacity-50" />
        </div>

        {/* Research Interests */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8">
            研究領域
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '教育社會學', desc: 'Sociology of Education', icon: BookOpen },
              { title: '社會階層', desc: 'Social Stratification', icon: Users },
              { title: '調查研究方法', desc: 'Survey Research Methods', icon: Database }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border-2 border-blue-100 rounded-lg hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:translate-y-[-4px]"
              >
                <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-serif font-bold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Courses Taught */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8">
            教授課程
          </h2>

          {/* Undergraduate */}
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200">
              大學部 (Undergraduate)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-50 border-b-2 border-blue-200">
                    <th className="px-4 py-3 text-left font-semibold text-blue-900">課程名稱 (Course Title)</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-900">課程大綱 (Syllabus)</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-900">講義 (Lecture Notes)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: '社會學動動腦 (Thinking Sociologically)' },
                    { name: '社會統計 (Social Statistics)' },
                    { name: 'Statistics I' },
                    { name: 'Statistics II' },
                    { name: '社會研究方法 (Social Research Methods)' },
                    { name: '教育社會學 (Sociology of Education)' }
                  ].map((course, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-800">{course.name}</td>
                      <td className="px-4 py-3">
                        <a href="#" className="text-blue-600 hover:text-blue-800 underline">連結 (Link)</a>
                      </td>
                      <td className="px-4 py-3">
                        <a href="#" className="text-blue-600 hover:text-blue-800 underline">連結 (Link)</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Graduate */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200">
              研究所 (Graduate)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-50 border-b-2 border-blue-200">
                    <th className="px-4 py-3 text-left font-semibold text-blue-900">課程名稱 (Course Title)</th>
                    <th className="px-4 py-3 text-left font-semibold text-blue-900">課程大綱 (Syllabus)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: '教育社會學：資料庫專題研究 (Sociology of Education: Seminar on Research Databases)' },
                    { name: '教育改革的社會學 (Studies in Sociology of Educational Reforms)' },
                    { name: '教育社會學 (Sociology of Education)' },
                    { name: '高等量化研究（因果推論）(Advanced Quantitative Research: Causal Inference)' },
                    { name: 'Introduction to Statistical Analysis' },
                    { name: 'Intermediate Statistical Methods' }
                  ].map((course, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-800">{course.name}</td>
                      <td className="px-4 py-3">
                        <a href="#" className="text-blue-600 hover:text-blue-800 underline">連結 (Link)</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8">
            學術著作
          </h2>
          <div className="space-y-8">
            {/* Journal Articles */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200">
                期刊論文 (Journal Articles)
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: '以反事實架構角度推估因果效應： 2000 年至 2023 年臺灣教育研究領域相關期刊論文之擇要回顧',
                    authors: '關秉寅、彭思錦',
                    journal: '中國統計學報',
                    year: 2024,
                    volume: '62(3): 222-262'
                  },
                  {
                    title: '運用界限設置分析方法探究年齡—時期—世代之效應：以臺灣個人主觀社會地位長期變遷為例',
                    authors: '彭思錦、關秉寅',
                    journal: '調查研究—方法與應用',
                    year: 2023,
                    volume: '51: 161-204'
                  },
                  {
                    title: 'Time Will Tell: Revisiting the Impact of College Expansion on Income and Occupational Prestige Mobility of Young Adults in Taiwan',
                    authors: 'Kuan, Ping-Yin & Ssu-Chin Peng',
                    journal: 'Higher Education Quarterly',
                    year: 2021,
                    volume: '75(3): 468-486'
                  },
                  {
                    title: "Graduates' Career Success Predicted by Mathematical and Affective Abilities, Effective Higher-Education Learning and Economic Contexts: A Bioecological Positivity to Success Model",
                    authors: 'Chiu, Mei-Shiu, Weiyan Xiong & Ping-Yin Kuan',
                    journal: 'Journal of Education and Work',
                    year: 2021,
                    volume: '34(3): 313-330'
                  },
                  {
                    title: 'The Heterogeneous Effects of Participation in Shadow Education on Mental Health of High School Students in Taiwan',
                    authors: 'Chen, I-Chien & Ping-Yin Kuan',
                    journal: 'International Journal of Environmental Research and Public Health',
                    year: 2021,
                    volume: '18(3): 1222'
                  },
                  {
                    title: '臺灣高教擴張對年輕世代薪資及職業的影響：反事實的分析',
                    authors: '關秉寅、彭思錦、崔成秀',
                    journal: '人文及社會科學集刊',
                    year: 2019,
                    volume: '31(4): 555-599'
                  },
                  {
                    title: 'Effects of Cram Schooling on Academic Achievement and Mental Health of Junior High Students in Taiwan',
                    authors: 'Kuan, Ping-Yin',
                    journal: 'Chinese Sociological Review',
                    year: 2018,
                    volume: '50(4): 391-422',
                    note: '(The winner of the 2012 CIES George Bereday Award)'
                  },
                  {
                    title: '從學校到勞力市場：簡介「台灣教育長期追蹤資料庫」及其後續追蹤調查',
                    authors: '關秉寅',
                    journal: '中國統計學報',
                    year: 2017,
                    volume: '55(1): 24-40'
                  },
                  {
                    title: '同儕補習風氣對國中生學習成就之影響',
                    authors: '關秉寅',
                    journal: '臺灣社會學刊',
                    year: 2016,
                    volume: '60: 99-133'
                  },
                  {
                    title: '國中讀前段班有差嗎？能力分班對學習成就影響的反事實分析',
                    authors: '關秉寅',
                    journal: '教育研究集刊',
                    year: 2016,
                    volume: '62(1): 1-33'
                  }
                ].map((pub, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 mb-1">{pub.title}</p>
                        <p className="text-sm text-gray-700 mb-2">{pub.authors}</p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">{pub.journal}</span> ({pub.year}), {pub.volume}
                        </p>
                        {pub.note && <p className="text-xs text-blue-600 italic mt-2">{pub.note}</p>}
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full whitespace-nowrap">
                        {pub.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Books & Chapters */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200">
                著作與專章 (Books & Book Chapters)
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: '第 5 章：補習數學有用嗎？一個「反事實」的分析',
                    authors: '關秉寅、李敦義',
                    publisher: '收錄於陳俊瑋編著《方興未艾：學科補習效益在臺灣的發現》',
                    year: 2018,
                    pages: '頁 93-121'
                  },
                  {
                    title: '第 7 章：國中生數學補的愈久，數學成就愈好嗎？傾向分數配對法的分析',
                    authors: '關秉寅、李敦義',
                    publisher: '收錄於陳俊瑋編著《方興未艾：學科補習效益在臺灣的發現》',
                    year: 2018,
                    pages: '頁 147-167'
                  },
                  {
                    title: '第 11 章：同儕補習風氣對國中生學習成就之影響',
                    authors: '關秉寅',
                    publisher: '收錄於陳俊瑋編著《方興未艾：學科補習效益在臺灣的發現》',
                    year: 2018,
                    pages: '頁 213-232'
                  },
                  {
                    title: 'Chapter 1: A Profile of Religion in Contemporary Taiwan',
                    authors: 'Kuan, Ping-Yin',
                    publisher: 'in Tsai, Yen-zen, ed., Religious Experience in Contemporary Taiwan and China. Taipei: Chengchi University Press',
                    year: 2013,
                    pages: 'pp. 17-40'
                  },
                  {
                    title: 'Chapter 11: Becoming Religious? The Relationship between Change in Religious Affiliation and Religiosity in Taiwan',
                    authors: 'Chao, Hsing-kuang & Ping-Yin Kuan',
                    publisher: 'in Tsai, Yen-zen, ed., Religious Experience in Contemporary Taiwan and China. Taipei: Chengchi University Press',
                    year: 2013,
                    pages: 'pp. 213-232'
                  },
                  {
                    title: '高教擴張、失業與主觀社會地位變遷',
                    authors: '張峯彬、關秉寅',
                    publisher: '收錄於謝雨生、傅仰止主編《臺灣的社會變遷 1985~2005：社會階層與勞動市場》',
                    year: 2012,
                    pages: '頁 63-92'
                  }
                ].map((pub, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-400 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 mb-1">{pub.title}</p>
                        <p className="text-sm text-gray-700 mb-2">{pub.authors}</p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">{pub.publisher}</span> ({pub.year})
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{pub.pages}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full whitespace-nowrap">
                        {pub.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Reports */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200">
                研究報告 (Research Reports)
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: '「臺灣教育長期追蹤資料庫」後續調查：核心樣本 2019 年電訪追蹤調查',
                    authors: '關秉寅',
                    year: 2020,
                    grant: 'MOST-108-2420-H-001 -192-SSS'
                  },
                  {
                    title: '台灣社會變遷基本調查計畫第七期第五次調查計畫執行報告',
                    authors: '傅仰止、關秉寅、吳齊殷、廖培珊、謝淑惠',
                    year: 2020,
                    grant: 'MOST-107-2420-H-001 -003 -SS2'
                  },
                  {
                    title: '台灣國高中生補習持續時間及變動軌跡類型對學習成就與心理健康之影響',
                    authors: '關秉寅',
                    year: 2020,
                    grant: 'MOST-107-2410-H-004 -068'
                  },
                  {
                    title: '台灣國中生補習對心理健康影響之因果分析',
                    authors: '關秉寅',
                    year: 2018,
                    grant: 'MOST-106-2410-H-004 -123'
                  },
                  {
                    title: '「臺灣教育長期追蹤資料庫」後續調查：教育與勞力市場的連結 2013-2017',
                    authors: '關秉寅',
                    year: 2017,
                    grant: 'MOST-102-2420-H-004-026-SS4'
                  },
                  {
                    title: '台灣高教擴張對年輕世代職業地位及薪資的影響：反事實的分析',
                    authors: '關秉寅',
                    year: 2016,
                    grant: 'MOST-104-2410-H-004-109'
                  }
                ].map((pub, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-400 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 mb-1">{pub.title}</p>
                        <p className="text-sm text-gray-700 mb-2">{pub.authors}</p>
                        <p className="text-xs text-gray-600">
                          Grant: <span className="font-mono">{pub.grant}</span>
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full whitespace-nowrap">
                        {pub.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CV Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8">
            履歷 (Curriculum Vitae)
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200">
                學歷 (Education)
              </h3>
              <div className="space-y-6">
                {[
                  {
                    degree: 'Ph.D. in Sociology',
                    institution: 'University of Virginia, USA',
                    year: '1993',
                    details: '社會學博士'
                  },
                  {
                    degree: 'M.A. in Sociology',
                    institution: 'Virginia Commonwealth University, USA',
                    year: '1982',
                    details: '社會學碩士'
                  },
                  {
                    degree: 'B.A. in Sociology',
                    institution: 'Fu Jen Catholic University, Taiwan',
                    year: '1977',
                    details: '天主教輔仁大學社會學系社會學士'
                  }
                ].map((edu, idx) => (
                  <div key={idx} className="relative pl-6 pb-6 border-l-2 border-blue-300">
                    {idx < 2 && <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>}
                    <div className="text-sm text-gray-600 font-semibold mb-1">{edu.year}</div>
                    <p className="font-semibold text-gray-900 mb-1">{edu.degree}</p>
                    <p className="text-gray-700 mb-1">{edu.institution}</p>
                    {edu.details && <p className="text-sm text-gray-600 italic">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Positions */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-200">
                職位 (Positions)
              </h3>
              
              {/* NCCU Positions */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-4 pl-3 border-l-4 border-blue-600">
                  政治大學教學行政經歷
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      title: '名譽教授',
                      institution: '國立政治大學亞太研究英語博士學位學程',
                      period: '2022.02~迄今'
                    },
                    {
                      title: '兼任特聘教授、國際合作策略長',
                      institution: '國立政治大學國際創新學院',
                      period: '2021.08~迄今'
                    },
                    {
                      title: '兼任教授',
                      institution: '國立政治大學亞太研究英語博士學位學程',
                      period: '2021.02~2021.07'
                    },
                    {
                      title: '副院長',
                      institution: '國立政治大學社會科學學院',
                      period: '2018.04~2020.01'
                    },
                    {
                      title: '主任',
                      institution: '國立政治大學亞太研究英語博士學位學程',
                      period: '2017.04~2020.01'
                    },
                    {
                      title: '合聘教授',
                      institution: '國立政治大學亞太研究英語博士學位學程',
                      period: '2016.08~2021.01'
                    },
                    {
                      title: '書院長',
                      institution: '國立政治大學政大書院計畫辦公室',
                      period: '2016.04~2019.07'
                    },
                    {
                      title: '主任',
                      institution: '國立政治大學亞太研究英語碩士學位學程',
                      period: '2010.08~2013.07'
                    },
                    {
                      title: '主任',
                      institution: '國立政治大學亞太研究英語博士學位學程',
                      period: '2010.08~2013.02'
                    },
                    {
                      title: '主任',
                      institution: '國立政治大學社會科學學院學生事務辦公室',
                      period: '2009.10~2010.08'
                    },
                    {
                      title: '主任',
                      institution: '國立政治大學社會學系',
                      period: '2006.08~2008.07'
                    },
                    {
                      title: '副教授、教授',
                      institution: '國立政治大學社會學系',
                      period: '2001.08~2022.01'
                    }
                  ].map((pos, idx) => (
                    <div key={idx} className="p-3 bg-blue-50 rounded-lg border-l-2 border-blue-400 hover:shadow-md transition-shadow">
                      <p className="font-semibold text-gray-900 text-sm mb-1">{pos.title}</p>
                      <p className="text-xs text-gray-700 mb-1">{pos.institution}</p>
                      <p className="text-xs text-blue-600 font-medium">{pos.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Positions */}
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-4 pl-3 border-l-4 border-green-600">
                  其他教學行政經歷
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      title: '兼任教授',
                      institution: '東吳大學社會學系',
                      period: '2022.02~2022.07'
                    },
                    {
                      title: '兼任教授',
                      institution: '國立臺灣師範大學教育學系',
                      period: '2020.02~2021.07'
                    },
                    {
                      title: 'Visiting Professor',
                      institution: 'Department of Sociology, Utrecht University',
                      period: '2020.02~2020.04'
                    },
                    {
                      title: '兼任教授',
                      institution: '國立臺灣師範大學教育學系',
                      period: '2018.08~2019.01'
                    },
                    {
                      title: 'Visiting Research Fellow',
                      institution: 'Department of Sociology, University of Wisconsin-Madison',
                      period: '2004.08~2005.01'
                    },
                    {
                      title: '主任',
                      institution: '天主教輔仁大學中國社會文化研究中心',
                      period: '1996.04~2000.07'
                    },
                    {
                      title: '副教授',
                      institution: '天主教輔仁大學社會學系',
                      period: '1993.08~2001.07'
                    },
                    {
                      title: '兼任講師',
                      institution: '天主教輔仁大學社會學系',
                      period: '1986.08~1987.07'
                    }
                  ].map((pos, idx) => (
                    <div key={idx} className="p-3 bg-green-50 rounded-lg border-l-2 border-green-400 hover:shadow-md transition-shadow">
                      <p className="font-semibold text-gray-900 text-sm mb-1">{pos.title}</p>
                      <p className="text-xs text-gray-700 mb-1">{pos.institution}</p>
                      <p className="text-xs text-green-600 font-medium">{pos.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg border border-blue-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  榮譽與獎項（研究相關）(Honors & Awards - Research Related)
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>1994~1998 國科會甲種研究獎勵</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2006 國立政治大學學術研究成果國際化優等研究獎</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2010~2016 科技部獎勵特殊優秀人才</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2012 CIES (Comparative and International Education Society) George Bereday Award (for the best article published in Comparative Education Review in 2011)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2018 國立政治大學學術研究優良獎</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2018~2021 科技部研究獎勵</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  主要學術活動 (Major Academic Activities)
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2020.10~2021.07 元智大學社會暨政策科學學系 諮議委員</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2019.11 台北醫學大學人文暨社會科學院「108年度系所學位學程暨通識教育自我評鑑」委員</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2018.08~2020.07 臺灣社會學刊 編輯委員</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2016.04~迄今 科技部人文社會科學研究中心 教育學門、社會學門學術研習營講員</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2016.01~迄今 當代教育研究 編輯委員</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2016.01~2017.01 臺灣教育評論月刊 編輯委員</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2014.08~2016.12 國家教育研究院 教育部高級中學公民與社會科教科用書審定委員</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2013.06~2015.05 國立中山大學教育部高東屏區域教學資源中心大學教學效能及學習成效評估中心諮詢委員</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2013.01~2015.01 臺灣社會學 編輯委員</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2010.08~2013.07 調查研究─方法與應用 編輯委員</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2009.01~迄今 國立台灣師範大學教育研究與評鑑中心專家諮詢委員</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2008.08~2010.07 教育部高中優質化專家諮詢小組委員</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2006.11~2014.07 教育研究集刊 編輯委員</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2002.01~2004.12 台灣社會學會理事</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>2000.01~2002.12 台灣社會學會秘書長</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8">
            學術機構與期刊
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">
                主要機構連結 (Notable Affiliations)
              </h3>
              <ul className="space-y-3">
                {[
                  '台灣羅四維夥伴學習促進協會 (Daniel Ross Association for the Promotion of Partner Based Learning)',
                  '台灣社會學會 (Taiwan Sociological Association) - 理事 (2002-2004)',
                  '台灣社會學會 (Taiwan Sociological Association) - 秘書長 (2000-2002)',
                  '台灣教育長期追蹤資料庫 (Taiwan Education Panel Survey)',
                  '台灣教育長期追蹤資料庫後續調查 (Taiwan Education Panel Survey and Beyond)',
                  '臺灣後期中等教育長期追蹤資料庫 (Taiwan Upper Secondary Education Database)',
                  '中央研究院社會學研究所 (Institute of Sociology, Academia Sinica)',
                  '政大書院 (Chengchi College)',
                  '國立臺灣師範大學教育學系 (Education Department, National Taiwan Normal University)',
                  'Department of Sociology, University of Wisconsin-Madison',
                  'Department of Sociology, Utrecht University'
                ].map((affiliation, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{affiliation}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">
                編輯與期刊 (Editorial & Journals)
              </h3>
              <ul className="space-y-3">
                {[
                  '當代教育研究 (Contemporary Educational Research) - 編輯委員 (2016 - Present)',
                  '臺灣社會學刊 (Taiwanese Journal of Sociology) - 編輯委員 (2018-2020)',
                  '臺灣社會學 (Taiwanese Sociology) - 編輯委員 (2013-2015)',
                  '教育研究集刊 (Bulletin of Educational Research) - 編輯委員 (2006-2014)',
                  '調查研究─方法與應用 (Survey Research-Methods and Application) - 編輯委員 (2010-2013)',
                  '臺灣教育評論月刊 (Taiwan Education Review) - 編輯委員 (2016-2017)',
                  '台灣社會學會 (Taiwan Sociological Association) - 理事 (2002-2004)',
                  '台灣社會學會 (Taiwan Sociological Association) - 秘書長 (2000-2002)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-gray-300 mb-2">
            © 2026 關秉寶 (Ping-Yin Kuan). All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            National Chengchi University | International College of Innovation
          </p>
        </div>
      </footer>
    </div>
  );
}
