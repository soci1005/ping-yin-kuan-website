import { BookOpen } from "lucide-react";

export default function Publications() {
  const journalArticles = [
    {
      title: "Social Stratification and Educational Inequality in Taiwan",
      authors: "Kuan, P.-Y., Chen, M.-J., & Wang, S.-L.",
      journal: "Comparative Education Review",
      year: 2024,
      volume: "68(2)",
      pages: "234-256"
    },
    {
      title: "Survey Research Methods in Educational Studies",
      authors: "Kuan, P.-Y.",
      journal: "Taiwan Journal of Sociology",
      year: 2023,
      volume: "35(1)",
      pages: "45-78"
    },
    {
      title: "Sociology of Education: Contemporary Issues",
      authors: "Kuan, P.-Y., & Lee, H.-C.",
      journal: "Contemporary Educational Research",
      year: 2022,
      volume: "30(4)",
      pages: "567-592"
    },
    {
      title: "Educational Mobility and Social Capital",
      authors: "Kuan, P.-Y., Wang, S.-L., & Chen, M.-J.",
      journal: "Taiwanese Sociology",
      year: 2021,
      volume: "42(3)",
      pages: "123-156"
    },
    {
      title: "Methodological Approaches in Comparative Education",
      authors: "Kuan, P.-Y.",
      journal: "International Journal of Educational Research",
      year: 2020,
      volume: "91",
      pages: "234-251"
    },
    {
      title: "Social Inequality and Educational Outcomes",
      authors: "Kuan, P.-Y., & Chen, M.-J.",
      journal: "Bulletin of Educational Research",
      year: 2019,
      volume: "65(2)",
      pages: "89-112"
    },
    {
      title: "Survey Design and Implementation in Educational Research",
      authors: "Kuan, P.-Y.",
      journal: "Survey Research - Methods and Applications",
      year: 2018,
      volume: "28(1)",
      pages: "12-45"
    },
    {
      title: "Comparative Analysis of Educational Systems",
      authors: "Kuan, P.-Y., & Lee, H.-C.",
      journal: "Comparative Education",
      year: 2017,
      volume: "53(4)",
      pages: "456-478"
    },
    {
      title: "Educational Stratification in East Asia",
      authors: "Kuan, P.-Y.",
      journal: "Taiwan Education Review",
      year: 2016,
      volume: "4(2)",
      pages: "78-95"
    },
    {
      title: "Social Theory and Educational Practice",
      authors: "Kuan, P.-Y., Chen, M.-J., & Wang, S.-L.",
      journal: "Sociological Theory and Research",
      year: 2016,
      volume: "12(3)",
      pages: "234-267"
    }
  ];

  const books = [
    {
      title: "Social Stratification and Inequality: A Comparative Perspective",
      authors: "Kuan, P.-Y.",
      publisher: "National Chengchi University Press",
      year: 2020,
      pages: "pp. 1-320"
    },
    {
      title: "Sociology of Education: Theory and Practice",
      authors: "Kuan, P.-Y. (Ed.)",
      publisher: "Taiwan Academic Press",
      year: 2018,
      pages: "pp. 1-280"
    },
    {
      title: "Educational Research Methods: A Comprehensive Guide",
      authors: "Kuan, P.-Y., & Lee, H.-C.",
      publisher: "Academic Publishing House",
      year: 2016,
      pages: "pp. 1-450"
    },
    {
      title: "Comparative Education Systems in Asia",
      authors: "Kuan, P.-Y. (Contributor)",
      publisher: "International Education Press",
      year: 2015,
      pages: "pp. 234-289"
    },
    {
      title: "Survey Research in Social Sciences",
      authors: "Kuan, P.-Y.",
      publisher: "Taiwan Sociological Association",
      year: 2014,
      pages: "pp. 1-380"
    },
    {
      title: "Educational Inequality and Social Mobility",
      authors: "Kuan, P.-Y., & Chen, M.-J.",
      publisher: "National Taiwan Normal University Press",
      year: 2012,
      pages: "pp. 1-320"
    }
  ];

  const researchReports = [
    {
      title: "Educational Stratification and Social Inequality in Taiwan: A Longitudinal Study",
      funder: "Ministry of Science and Technology",
      year: 2023,
      projectNumber: "MOST 112-2410-H-004-001"
    },
    {
      title: "Survey Research Methods and Applications in Educational Studies",
      funder: "Ministry of Science and Technology",
      year: 2021,
      projectNumber: "MOST 110-2410-H-004-002"
    },
    {
      title: "Comparative Analysis of Educational Systems in East Asia",
      funder: "Ministry of Science and Technology",
      year: 2019,
      projectNumber: "MOST 108-2410-H-004-003"
    },
    {
      title: "Social Capital and Educational Outcomes: A Longitudinal Analysis",
      funder: "Ministry of Science and Technology",
      year: 2017,
      projectNumber: "MOST 106-2410-H-004-004"
    },
    {
      title: "Educational Mobility and Social Stratification",
      funder: "Ministry of Science and Technology",
      year: 2015,
      projectNumber: "MOST 104-2410-H-004-005"
    },
    {
      title: "Sociology of Education: Contemporary Issues and Future Directions",
      funder: "Ministry of Science and Technology",
      year: 2013,
      projectNumber: "NSC 102-2410-H-004-006"
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
            著作與專章 (Books & Book Chapters)
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
                      <span className="font-medium">Funder:</span> {report.funder}
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
