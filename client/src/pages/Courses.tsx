import { BookOpen } from "lucide-react";

interface Course {
  name: string;
  syllabusLink?: string;
  lectureLink?: string;
}

export default function Courses() {
  const undergraduateCourses: Course[] = [
    { name: '社會學動動腦 (Thinking Sociologically)', lectureLink: 'https://drive.google.com/file/d/1NxI-RMLsi-UZ8DdrL81WKhLuLDqX3zLz/view?usp=sharing' },
    { name: '社會統計 (Social Statistics)', lectureLink: 'https://drive.google.com/file/d/1cKY5SwnAmgbodnoupuspuX5oxZvxJG0b/view?usp=sharing' },
    { name: 'Statistics I', syllabusLink: 'https://drive.google.com/file/d/1XKRtbykEHNiY5MJ0bn_g_1zUX2D2bOBA/view?usp=sharing' },
    { name: 'Statistics II', syllabusLink: 'https://drive.google.com/file/d/1Ab0viiNuXZItT0yJ-YosmLiIoVZjKhIq/view?usp=sharing' },
    { name: '社會研究方法 (Social Research Methods)', lectureLink: 'https://drive.google.com/file/d/1dAC8JT7o4MapFk5VWC1NoY78qgEq0MX1/view?usp=sharing' },
    { name: '教育社會學 (Sociology of Education)', syllabusLink: 'https://drive.google.com/file/d/1aH1xHcMZqwce1BgiBu3Lzcehx62mz-CS/view?usp=sharing', lectureLink: 'https://drive.google.com/file/d/1FNPAMCqKsYrqiZWrdvma1TT0HwQFDuip/view?usp=sharing' }
  ];

  const graduateCourses: Course[] = [
    { name: '高等社會統計 (Advanced Social Statistics)' },
    { name: '教育社會學專題 (Seminar in Sociology of Education)', syllabusLink: 'https://drive.google.com/file/d/1_EHQaa7U4XNp9rpN_Pb1JiP-y34rj3Os/view?usp=sharing' },
    { name: '社會階層與教育 (Social Stratification and Education)' },
    { name: '調查研究方法 (Survey Research Methods)' },
    { name: '社會科學研究方法 (Research Methods in Social Sciences)' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-8 h-8" />
            <h1 className="text-4xl font-serif font-bold">教授課程</h1>
          </div>
          <p className="text-lg text-blue-100">Courses Taught</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Undergraduate Courses */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">
            大學部 (Undergraduate)
          </h2>
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
                {undergraduateCourses.map((course, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-800">{course.name}</td>
                    <td className="px-4 py-3">
                      {course.syllabusLink ? (
                        <a href={course.syllabusLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">連結 (Link)</a>
                      ) : (
                        <span className="text-gray-400">連結 (Link)</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {course.lectureLink ? (
                        <a href={course.lectureLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">連結 (Link)</a>
                      ) : (
                        <span className="text-gray-400">連結 (Link)</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Graduate Courses */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">
            研究所 (Graduate)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-50 border-b-2 border-blue-200">
                  <th className="px-4 py-3 text-left font-semibold text-blue-900">課程名稱 (Course Title)</th>
                  <th className="px-4 py-3 text-left font-semibold text-blue-900">課程大綱 (Syllabus)</th>
                </tr>
              </thead>
              <tbody>
                {graduateCourses.map((course, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-800">{course.name}</td>
                    <td className="px-4 py-3">
                      {course.syllabusLink ? (
                        <a href={course.syllabusLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">連結 (Link)</a>
                      ) : (
                        <span className="text-gray-400">連結 (Link)</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
