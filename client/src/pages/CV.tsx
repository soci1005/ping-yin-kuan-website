import { Award, Briefcase, GraduationCap } from "lucide-react";

export default function CV() {
  const education = [
    { degree: "Ph.D. Sociology", institution: "University of Virginia, USA", year: "1993", thesis: "Social Stratification in Taiwan" },
    { degree: "M.A. Sociology", institution: "Virginia Commonwealth University, USA", year: "1982", thesis: "Educational Inequality" },
    { degree: "B.A. Sociology", institution: "Fu Jen Catholic University, Taiwan", year: "1977", thesis: "" }
  ];

  const positions = {
    nccu: [
      { title: "名譽教授", department: "亞太研究英語博士學位學程", period: "2022.02 ~ 迄今" },
      { title: "兼任特聘教授、國際合作策略長", department: "創新國際學院", period: "2021.08 ~ 迄今" },
      { title: "兼任教授", department: "亞太研究英語博士學位學程", period: "2021.02 ~ 2021.07" },
      { title: "副院長", department: "社會科學學院", period: "2018.04 ~ 2020.01" },
      { title: "主任", department: "亞太研究英語博士學位學程", period: "2017.04 ~ 2020.01" },
      { title: "合聘教授", department: "亞太研究英語博士學位學程", period: "2016.08 ~ 2021.01" },
      { title: "書院長", department: "政大書院計畫辦公室", period: "2016.04 ~ 2019.07" },
      { title: "主任", department: "亞太研究英語碩士學位學程", period: "2010.08 ~ 2013.07" },
      { title: "主任", department: "亞太研究英語博士學位學程", period: "2010.08 ~ 2013.02" },
      { title: "主任", department: "社會科學學院學生事務辦公室", period: "2009.10 ~ 2010.08" },
      { title: "主任", department: "社會學系", period: "2006.08 ~ 2008.07" },
      { title: "副教授、教授", department: "社會學系", period: "2001.08 ~ 2022.01" }
    ],
    other: [
      { title: "兼任教授", department: "東吳大學社會學系", period: "2022.02 ~ 2022.07" },
      { title: "兼任教授", department: "國立臺灣師範大學教育學系", period: "2020.02 ~ 2021.07" },
      { title: "Visiting Professor", department: "Department of Sociology, Utrecht University", period: "2020.02 ~ 2020.04" },
      { title: "兼任教授", department: "國立臺灣師範大學教育學系", period: "2018.08 ~ 2019.01" },
      { title: "Visiting Research Fellow", department: "Department of Sociology, University of Wisconsin-Madison", period: "2004.08 ~ 2005.01" },
      { title: "主任", department: "天主教輔仁大學中國社會文化研究中心", period: "1996.04 ~ 2000.07" },
      { title: "副教授", department: "天主教輔仁大學社會學系", period: "1993.08 ~ 2001.07" },
      { title: "兼任講師", department: "天主教輔仁大學社會學系", period: "1986.08 ~ 1987.07" }
    ]
  };

  const institutions = [
    "台灣社會學會 (Taiwan Sociological Association)",
    "台灣羅四維夥伴學習促進協會 (Daniel Ross Association for the Promotion of Partner Based Learning)",
    "國立政治大學 (National Chengchi University)",
    "東吳大學 (Soochow University)",
    "國立臺灣師範大學 (National Taiwan Normal University)",
    "天主教輔仁大學 (Fu Jen Catholic University)",
    "烏特勒支大學 (Utrecht University)",
    "威斯康辛大學 (University of Wisconsin-Madison)",
    "維吉尼亞大學 (University of Virginia)"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="w-8 h-8" />
            <h1 className="text-4xl font-serif font-bold">履歷</h1>
          </div>
          <p className="text-lg text-blue-100">Curriculum Vitae</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            學歷 (Education)
          </h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <p className="font-semibold text-gray-900 mb-1">{edu.degree}</p>
                <p className="text-sm text-gray-700 mb-1">{edu.institution}</p>
                <p className="text-sm text-gray-600">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Positions - NCCU */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            政治大學教學行政經歷 (Positions at National Chengchi University)
          </h2>
          <div className="space-y-3">
            {positions.nccu.map((pos, idx) => (
              <div key={idx} className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <p className="font-semibold text-gray-900 mb-1">{pos.title}</p>
                <p className="text-sm text-gray-700 mb-1">{pos.department}</p>
                <p className="text-xs text-green-600 font-medium">{pos.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Positions - Other */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            其他教學行政經歷 (Other Teaching and Administrative Positions)
          </h2>
          <div className="space-y-3">
            {positions.other.map((pos, idx) => (
              <div key={idx} className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                <p className="font-semibold text-gray-900 mb-1">{pos.title}</p>
                <p className="text-sm text-gray-700 mb-1">{pos.department}</p>
                <p className="text-xs text-purple-600 font-medium">{pos.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Main Institutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">主要機構連結 (Main Institutional Affiliations)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {institutions.map((inst, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <p className="text-gray-900 font-medium">{inst}</p>
              </div>
            ))}
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
