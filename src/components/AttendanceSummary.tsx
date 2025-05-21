import { User, CalendarDays, Download } from "lucide-react";


export function AttendanceSummary() {
  return (
    <section className="w-full max-w-[1300px] mx-auto mt-20 px-4 sm:px-6 py-6 bg-white rounded-2xl border border-gray-300 shadow space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-[#1E1E1E] font-manrope">
          Overall Attendance
        </h2>

        <div className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-lg text-sm text-[#1E1E1E]">
          <span>May 20, 2024</span>
          <CalendarDays className="w-4 h-4 text-[#465DFE]" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow w-full">
          <SummaryCard
            title="Total Employees"
            value="26"
            bgColor="bg-[#F2F4FF]"
            iconColor="text-[#465DFE]"
          />
          <SummaryCard
            title="No. of Presents"
            value="04"
            bgColor="bg-[#FEF7E9]"
            iconColor="text-[#FE9D00]"
          />
          <SummaryCard
            title="No. of Absents"
            value="02"
            bgColor="bg-[#FFF1F1]"
            iconColor="text-[#FF4C4C]"
          />
        </div>
        <div className="flex-shrink-0 self-end lg:self-center w-full lg:w-auto">
          <button className="w-full lg:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#465DFE] text-white rounded-md text-sm font-medium hover:bg-blue-700 transition">
            <Download className="w-4 h-4" />
              Download Report
          </button>
        </div>
      </div>
    </section>
  );
}

function SummaryCard({
  title,
  value,
  bgColor,
  iconColor,
}: {
  title: string;
  value: string;
  bgColor: string;
  iconColor: string;
}) {
  return (
    <div className={`p-4 rounded-lg flex flex-col gap-2 ${bgColor}`}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-[#1E1E1E]">{title}</p>
        <User className={`w-5 h-5 ${iconColor}`} />
      </div>
      <p className="text-xl font-bold text-[#1E1E1E]">{value}</p>
    </div>
  );
}
