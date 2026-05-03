import { Mail, ExternalLink, BookOpen, Users, Database } from "lucide-react";

/**
 * 關秉寅教授個人學術網站 - 首頁
 * 設計理念：學術簡約主義
 * - 深藍色主色調代表專業和學術信任
 * - 清晰的資訊層級和易於導航的結構
 * - 精心設計的排版和微妙的互動效果
 */

export default function Home() {
  const heroImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663620222015/Lf6ttBa3x9uuuPee5ExvaJ/hero-academic-final-F2tiJcaCeaTyK5fyo6NzFc.webp';
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
                  關秉寅
                </h1>
                <p className="text-xl text-gray-100 mb-2">
                  Ping-Yin Kuan
                </p>
                <p className="text-lg text-gray-200">
                  Professor Emeritus, College of Social Sciences<br />
                  Distinguished Professor (Adjunct), International College of Innovation, National Chengchi University
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
                <a href="mailto:soci1005@nccu.edu.tw" className="text-blue-600 hover:text-blue-800 break-all text-sm">
                  soci1005@nccu.edu.tw
                </a>
                <br />
                <a href="mailto:pykuan@nccu.edu.tw" className="text-blue-600 hover:text-blue-800 break-all text-sm">
                  pykuan@nccu.edu.tw
                </a>
                <br />
                <a href="mailto:soci1005@gmail.com" className="text-blue-600 hover:text-blue-800 break-all text-sm">
                  soci1005@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ExternalLink className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">ORCID ID</p>
                <a href="https://orcid.org/0000-0001-9516-4910" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                  0000-0001-9516-4910
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ExternalLink className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">政大學術集成</p>
                <a href="https://ah.lib.nccu.edu.tw/scholar?id=271&locale=zh_TW" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                  學術著作與檔案
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ExternalLink className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">Google Scholar</p>
                <a href="https://scholar.google.com/citations?user=pxY77-cAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                  學術檔案
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ExternalLink className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 mb-1">ResearchGate</p>
                <a href="https://www.researchgate.net/profile/Ping-Yin-Kuan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
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

        {/* Education & Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8">
            履歷
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">
                學歷 (Education)
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <p className="font-semibold text-gray-900">Ph.D. Sociology</p>
                  <p className="text-sm text-gray-700">University of Virginia, USA</p>
                  <p className="text-xs text-gray-600">1993</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <p className="font-semibold text-gray-900">M.A. Sociology</p>
                  <p className="text-sm text-gray-700">Virginia Commonwealth University, USA</p>
                  <p className="text-xs text-gray-600">1982</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <p className="font-semibold text-gray-900">B.A. Sociology</p>
                  <p className="text-sm text-gray-700">Fu Jen Catholic University, Taiwan</p>
                  <p className="text-xs text-gray-600">1977</p>
                </div>
              </div>
            </div>

            {/* Current Positions */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-200">
                現職 (Current Positions)
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <p className="font-semibold text-gray-900">名譽教授</p>
                  <p className="text-sm text-gray-600">Professor Emeritus</p>
                  <p className="text-sm text-gray-700"><a href="https://idas.nccu.edu.tw/eng/PageFront" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">亞太研究英語博士學位學程</a></p>
                  <p className="text-sm text-gray-600">International Doctoral Program in Asia-Pacific Studies</p>
                  <p className="text-xs text-green-600 font-medium">2022.02 ~ 迄今</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <p className="font-semibold text-gray-900">兼任特聘教授、國際合作策略長</p>
                  <p className="text-sm text-gray-600">Adjunct Distinguished Professor; Chair, International Cooperation Advisory Committee</p>
                  <p className="text-sm text-gray-700"><a href="https://ici.nccu.edu.tw/eng/PageFront" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">創新國際學院</a></p>
                  <p className="text-sm text-gray-600">International College of Innovation</p>
                  <p className="text-xs text-green-600 font-medium">2021.08 ~ 迄今</p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
