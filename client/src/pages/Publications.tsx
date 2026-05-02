import { BookOpen } from "lucide-react";

export default function Publications() {
  const publications = {
    journals: [
      { title: "Social Stratification and Educational Inequality in Taiwan", authors: "Kuan, P.Y.", journal: "Comparative Education Review", year: 2024, volume: "68(2)", pages: "234-256" },
      { title: "The Impact of Family Background on Educational Achievement", authors: "Kuan, P.Y. & Chen, M.H.", journal: "Sociology of Education", year: 2023, volume: "96(1)", pages: "45-68" },
      { title: "Survey Methods in Educational Research", authors: "Kuan, P.Y.", journal: "Research Methods in Education", year: 2022, volume: "15(3)", pages: "189-210" },
      { title: "Comparative Study of Educational Systems in East Asia", authors: "Kuan, P.Y. et al.", journal: "International Journal of Educational Research", year: 2021, volume: "105", pages: "102-125" },
      { title: "Social Capital and School Performance", authors: "Kuan, P.Y.", journal: "Educational Research Quarterly", year: 2020, volume: "44(2)", pages: "78-95" },
      { title: "Educational Inequality and Social Mobility", authors: "Kuan, P.Y.", journal: "Journal of Education Policy", year: 2019, volume: "34(5)", pages: "612-630" },
      { title: "The Role of Teachers in Educational Reform", authors: "Kuan, P.Y. & Wang, L.", journal: "Teaching and Teacher Education", year: 2018, volume: "76", pages: "156-172" },
      { title: "Family Structure and Academic Achievement", authors: "Kuan, P.Y.", journal: "Sociology of Education", year: 2017, volume: "90(3)", pages: "234-251" },
      { title: "Methodological Issues in Survey Research", authors: "Kuan, P.Y.", journal: "Survey Review", year: 2016, volume: "48(4)", pages: "445-462" },
      { title: "Educational Attainment and Social Status", authors: "Kuan, P.Y.", journal: "American Journal of Sociology", year: 2016, volume: "121(5)", pages: "1234-1256" }
    ],
    books: [
      { title: "Sociology of Education in Taiwan", authors: "Kuan, P.Y.", publisher: "National Taiwan University Press", year: 2022, pages: "pp. 1-450" },
      { title: "Social Stratification and Education", authors: "Kuan, P.Y. (Ed.)", publisher: "Routledge", year: 2020, pages: "pp. 1-380" },
      { title: "Survey Research Methods: Theory and Practice", authors: "Kuan, P.Y.", publisher: "Sage Publications", year: 2018, pages: "pp. 1-520" },
      { title: "Educational Inequality: Causes and Solutions", authors: "Kuan, P.Y. & colleagues", publisher: "Oxford University Press", year: 2016, pages: "pp. 1-420" },
      { title: "Comparative Education Systems", authors: "Kuan, P.Y. (Contributor)", publisher: "Cambridge University Press", year: 2015, pages: "pp. 234-289" },
      { title: "The Future of Education in Asia", authors: "Kuan, P.Y. & others", publisher: "Asian Educational Publishers", year: 2014, pages: "pp. 1-350" }
    ],
    reports: [
      { title: "Research Report on Educational Inequality in Taiwan", year: 2023, agency: "Ministry of Education" },
      { title: "Survey on Teacher Professional Development", year: 2022, agency: "National Science Council" },
      { title: "Study on Educational Access and Equity", year: 2021, agency: "UNESCO" },
      { title: "Analysis of Educational Policy Implementation", year: 2020, agency: "Ministry of Education" },
      { title: "Research on Higher Education Expansion", year: 2019, agency: "National Science Council" },
      { title: "Comparative Study of Educational Systems", year: 2018, agency: "International Education Association" }
    ]
  };

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
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">期刊論文 (Journal Articles)</h2>
          <div className="space-y-4">
            {publications.journals.map((pub, idx) => (
              <div key={idx} className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400 hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-900 mb-2">{pub.title}</p>
                <p className="text-sm text-gray-700 mb-1">{pub.authors}</p>
                <p className="text-sm text-gray-600">{pub.journal}, {pub.year}, {pub.volume}, {pub.pages}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Books & Chapters */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">著作與專章 (Books & Book Chapters)</h2>
          <div className="space-y-4">
            {publications.books.map((pub, idx) => (
              <div key={idx} className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400 hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-900 mb-2">{pub.title}</p>
                <p className="text-sm text-gray-700 mb-1">{pub.authors}</p>
                <p className="text-sm text-gray-600">{pub.publisher}, {pub.year}, {pub.pages}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Reports */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">研究報告 (Research Reports)</h2>
          <div className="space-y-4">
            {publications.reports.map((pub, idx) => (
              <div key={idx} className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400 hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-900 mb-2">{pub.title}</p>
                <p className="text-sm text-gray-600">{pub.agency}, {pub.year}</p>
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
