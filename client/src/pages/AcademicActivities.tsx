import { Award, FileText } from "lucide-react";

export default function AcademicActivities() {
  const honors = [
    { title: "國科會甲種研究獎勵", year: "1994~1998" },
    { title: "國立政治大學學術研究成果國際化優等研究獎", year: "2006" },
    { title: "科技部獎勵特殊優秀人才", year: "2010~2016" },
    { title: "CIES (Comparative and International Education Society) George Bereday Award (for the best article published in Comparative Education Review in 2011)", year: "2012" },
    { title: "國立政治大學學術研究優良獎", year: "2018" },
    { title: "科技部研究獎勵", year: "2018~2021" }
  ];

  const activities = [
    { title: "元智大學社會暨政策科學學系 諮議委員", period: "2020.10~2021.07" },
    { title: "台北醫學大學人文暨社會科學院「108年度系所學位學程暨通識教育自我評鑑」委員", period: "2019.11" },
    { title: "臺灣社會學刊 編輯委員", period: "2018.08~2020.07" },
    { title: "科技部人文社會科學研究中心 教育學門、社會學門學術研習營講員", period: "2016.04~迄今" },
    { title: "當代教育研究 編輯委員", period: "2016.01~2024.07" },
    { title: "歐美研究季刊 編輯委員", period: "2023 ~ 迄今" },
    { title: "George Bereday Award Selection Committee, Comparative and International Education Society (CIES)", period: "2024 ~ 2026" },
    { title: "臺灣教育評論月刊 編輯委員", period: "2016.01~2017.01" },
    { title: "國家教育研究院 教育部高級中學公民與社會科教科用書審定委員", period: "2014.08~2016.12" },
    { title: "國立中山大學教育部高東屏區域教學資源中心大學教學效能及學習成效評估中心諮詢委員", period: "2013.06~2015.05" },
    { title: "臺灣社會學 編輯委員", period: "2013.01~2015.01" },
    { title: "調查研究─方法與應用 編輯委員", period: "2010.08~2013.07" },
    { title: "國立台灣師範大學教育研究與評鑑中心專家諮詢委員", period: "2009.01~迄今" },
    { title: "教育部高中優質化專家諮詢小組委員", period: "2008.08~2010.07" },
    { title: "教育研究集刊 編輯委員", period: "2006.11~2014.07" },
    { title: "台灣社會學會理事", period: "2002.01~2004.12" },
    { title: "台灣社會學會秘書長", period: "2000.01~2002.12" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-8 h-8" />
            <h1 className="text-4xl font-serif font-bold">學術活動</h1>
          </div>
          <p className="text-lg text-blue-100">Academic Activities and Honors</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Honors & Awards */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6" />
            榮譽與獎項（研究相關）(Honors & Awards - Research Related)
          </h2>
          <div className="space-y-3">
            {honors.map((honor, idx) => (
              <div key={idx} className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-900 mb-1">{honor.title}</p>
                <p className="text-sm text-blue-600 font-medium">{honor.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Major Academic Activities */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            主要學術活動 (Major Academic Activities)
          </h2>
          <div className="space-y-3">
            {activities.map((activity, idx) => (
              <div key={idx} className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400 hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-900 mb-1">{activity.title}</p>
                <p className="text-sm text-green-600 font-medium">{activity.period}</p>
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
