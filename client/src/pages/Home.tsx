import { Mail, ExternalLink, Award, FileText } from "lucide-react";
import { Link } from "wouter";

/**
 * 關秉寅教授個人學術網站 - 首頁
 * 設計理念：學術簡約主義
 * - 深藍色主色調代表專業和學術信任
 * - 清晰的資訊層級和易於導航的結構
 * - 精心設計的排版和微妙的互動效果
 */

export default function Home() {
  const heroImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663620222015/Lf6ttBa3x9uuuPee5ExvaJ/hero-academic-final-F2tiJcaCeaTyK5fyo6NzFc.webp';

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
        </section>

        {/* Research Fields */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">
            研究領域 (Research Fields)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "教育社會學", en: "Sociology of Education" },
              { title: "社會階層與不平等", en: "Social Stratification and Inequality" },
              { title: "調查研究方法", en: "Survey Research Methods" }
            ].map((field, idx) => (
              <div key={idx} className="p-6 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{field.title}</h3>
                <p className="text-sm text-gray-600">{field.en}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-lg border border-blue-200">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">
            瀏覽更多內容
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/publications" className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer">
              <FileText className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">學術著作</h3>
              <p className="text-sm text-gray-600">期刊論文、著作與專章、研究報告</p>
            </Link>
            <Link href="/cv" className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer">
              <Award className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">履歷</h3>
              <p className="text-sm text-gray-600">學歷、職位、主要機構連結</p>
            </Link>
            <Link href="/academic-activities" className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer">
              <FileText className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">學術活動</h3>
              <p className="text-sm text-gray-600">榮譽與獎項、主要學術活動</p>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© 2026 Ping-Yin Kuan. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
