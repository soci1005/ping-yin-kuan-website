import { Mail, ExternalLink, BookOpen, Users, Database } from 'lucide-react';

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
  const cardBgUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663620222015/Lf6ttBa3x9uuuPee5ExvaJ/research-card-bg-7mmpKNB6mDNAPhzPNZh3Wk.webp';

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
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
                關秉寅
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
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Contact & Quick Info */}
        <section className="mb-16 bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-200">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">
            聯絡資訊
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <a href="mailto:soci1005@nccu.edu.tw" className="text-blue-600 hover:text-blue-800 break-all">
                  soci1005@nccu.edu.tw
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

        {/* Affiliations */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8">
            學術機構與期刊
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">
                主要研究機構 (Notable Affiliations)
              </h3>
              <ul className="space-y-3">
                {[
                  '台灣教育長期追蹤資料庫 (Taiwan Education Panel Survey)',
                  '台灣教育長期追蹤資料庫後續調查 (Taiwan Education Panel Survey and Beyond)',
                  '臺灣後期中等教育長期追蹤資料庫 (Taiwan Upper Secondary Education Database)',
                  '中央研究院社會學研究所 (Institute of Sociology, Academia Sinica)',
                  'Sociology at Wisconsin-Madison',
                  'Sociology at Utrecht University',
                  '政大書院 (Chengchi College)',
                  '國立臺灣師範大學教育學系 (Education Department, National Taiwan Normal University)'
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
                  '台灣羅四維夥伴學習促進協會 (Daniel Ross Association for the Promotion of Partner Based Learning)',
                  'China News Analysis (中國新聞分析)',
                  'UVA Club of Taiwan',
                  '臺灣社會學刊 (Taiwanese Journal of Sociology)',
                  '臺灣社會學 (Taiwanese Sociology)',
                  '教育研究集刊 (Bulletin of Educational Research)',
                  '當代教育研究季刊 (Contemporary Educational Research Quarterly)',
                  '調查研究─方法與應用 (Survey Research-Methods and Application)',
                  '歐美研究季刊 (EurAmerica)'
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
            © 2024 關秉寅 (Ping-Yin Kuan). All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            National Chengchi University | International College of Innovation
          </p>
        </div>
      </footer>
    </div>
  );
}
