import { Building2, BookMarked } from "lucide-react";

export default function AcademicInstitutions() {
  const affiliations = [
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
  ];

  const journals = [
    '歐美研究季刊 (American and European Studies Quarterly) - 編輯委員 (2023 - Present)',
    '臺灣社會學刊 (Taiwanese Journal of Sociology) - 編輯委員 (2018-2020)',
    '當代教育研究 (Contemporary Educational Research) - 編輯委員 (2016 - 2024)',
    '臺灣教育評論月刊 (Taiwan Education Review) - 編輯委員 (2016-2017)',
    '臺灣社會學 (Taiwanese Sociology) - 編輯委員 (2013-2015)',
    '調查研究─方法與應用 (Survey Research-Methods and Application) - 編輯委員 (2010-2013)',
    '教育研究集刊 (Bulletin of Educational Research) - 編輯委員 (2006-2014)'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Building2 className="w-8 h-8" />
            <h1 className="text-4xl font-serif font-bold">學術連結</h1>
          </div>
          <p className="text-lg text-blue-100">Academic Links and Affiliations</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Institutions */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6" />
              主要機構連結
            </h2>
            <p className="text-gray-600 mb-6">(Notable Affiliations)</p>
            <ul className="space-y-3">
              {affiliations.map((affiliation, idx) => (
                <li key={idx} className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                  <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-700 text-sm">{affiliation}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial & Journals */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 flex items-center gap-2">
              <BookMarked className="w-6 h-6" />
              參與期刊編輯
            </h2>
            <p className="text-gray-600 mb-6">(Editorial & Journals)</p>
            <ul className="space-y-3">
              {journals.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg border-l-4 border-green-400 hover:shadow-md transition-shadow">
                  <span className="text-green-600 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

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
