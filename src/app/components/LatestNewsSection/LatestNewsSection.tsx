"use client";

import { useState } from "react";
import ActivityCard from "./ActivityCard";

const Items = [
  { id: 1, name: "易購", icon: "/images/icons/praise.png" },
  { id: 2, name: "食品", icon: "/images/icons/fork_knife.png" },
  { id: 3, name: "百貨", icon: "/images/icons/store_front.png" },
  { id: 4, name: "書籍", icon: "/images/icons/book_open_text.png" },
  { id: 5, name: "影音", icon: "/images/icons/monitor_play.png" },
  { id: 6, name: "電子書", icon: "/images/icons/laptop.png" },
];

const activityList = [
  {
    id: 1,
    title: "用兩小時，學一生智慧",
    date: "2025-5-18",
    position: "慈濟東大靜思堂",
    description:
      "癌症治療不必然只是痛苦的歷程，莊佳穎醫師將用淺顯易懂的方式，帶您了解癌症的成因、治療選擇及心理調適，讓您在面對疾病時能夠更有信心與勇氣。",
    image: "/images/activities/001.png",
  },
  {
    id: 2,
    title: "探索數位藝術的未來",
    date: "2025-6-10",
    position: "台北數位藝術中心",
    description:
      "在這場講座中，數位藝術專家將分享數位藝術的最新趨勢與技術，並探討如何利用數位媒介創作出引人入勝的藝術作品，讓參與者對未來的藝術形式有更深的理解。",
    image: "/images/activities/002.png",
  },
  {
    id: 3,
    title: "親子共讀時光",
    date: "2025-7-15",
    position: "台北市立圖書館",
    description:
      "這是一個專為親子設計的共讀活動，透過精選的故事書，讓家長與孩子一起分享閱讀的樂趣，並進行互動討論，增進親子之間的情感聯繫，培養孩子的閱讀興趣。",
    image: "/images/activities/003.png",
  },
  {
    id: 4,
    title: "健康飲食講座",
    date: "2025-8-20",
    position: "健康生活中心",
    description:
      "專業營養師將在這場講座中深入探討健康飲食的重要性，分享如何選擇營養均衡的食物，並提供實用的飲食建議，幫助參與者改善飲食習慣，提升生活品質。",
    image: "/images/activities/002.png",
  },
  {
    id: 5,
    title: "創意手作工作坊",
    date: "2025-9-25",
    position: "手作藝術館",
    description:
      "在這個工作坊中，參與者將學習如何使用簡單的材料創作獨特的手作藝術品，透過專業指導，激發創意，並享受手作的樂趣，適合所有年齡層的參與者。",
    image: "/images/activities/003.png",
  },
  {
    id: 6,
    title: "音樂療癒之夜",
    date: "2025-10-30",
    position: "音樂廳",
    description:
      "這是一場結合音樂與心靈療癒的活動，透過輕柔的音樂，讓參與者在放鬆的氛圍中，釋放壓力，重拾內心的平靜，適合所有需要放鬆的人士參加。",
    image: "/images/activities/001.png",
  },
];

const LatestNewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activitiesPerPage = 3;

  const displayedActivities = activityList.slice(currentIndex, currentIndex + activitiesPerPage);

  const handleNextPage = () => {
    setCurrentIndex((prev) => (prev + activitiesPerPage) % activityList.length);
  };

  const handlePrevPage = () => {
    setCurrentIndex((prev) => (prev - activitiesPerPage + activityList.length) % activityList.length);
  };

  return (
    <div className="w-full">
      {/* 上方灰色區塊 */}
      <div className="w-full bg-[#F2F2F2] px-5 lg:px-0 py-6">
        <div className="grid grid-cols-3 gap-4 lg:flex lg:items-center lg:justify-center lg:gap-x-6">
          {Items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center bg-[#D5D5D5] w-full h-[100px] lg:w-[216px] lg:h-[216px]"
            >
              <img src={item.icon} alt={item.name} className="w-12 h-12 lg:w-20 lg:h-20 mb-2 lg:mb-4" />
              <span className="text-base lg:text-lg font-bold text-[#787777]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 下方白色區塊 */}
      <div className="relative">
        <div className="z-10 mt-20 mx-auto pb-20 max-w-[1417px] w-full">
          {/* 上方標題 */}
          <div className="mb-6 flex flex-col lg:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-[#A29380] mb-4 lg:mb-0">最新活動</div>
            <div className="hidden lg:block">
              <button onClick={handlePrevPage} className="p-2">
                <img src="/images/icons/nav_left_arrow.png" alt="nav_left_arrow" />
              </button>
              <button onClick={handleNextPage} className="p-2">
                <img src="/images/icons/nav_right_arrow.png" alt="nav_right_arrow" />
              </button>
            </div>
          </div>

          {/* 活動內容 */}
          {/* 手機版：橫向滑動 */}
          <div className="lg:hidden w-full px-2 overflow-x-auto pb-2">
            <div className="flex flex-row flex-nowrap gap-4">
              {activityList.map((activity) => (
                <div key={activity.id} className="min-w-[335px]">
                  <ActivityCard activity={activity} />
                </div>
              ))}
            </div>
          </div>
          {/* 桌機版：原本分頁 */}
          <div className="hidden lg:flex justify-between">
            <div className="">
              <div className="mb-[222px]">用兩小時，學一生智慧</div>
              <div>
                <button className="w-[136px] h-[35px] bg-[#545454] text-white px-4 py-2">瞭解更多</button>
              </div>
            </div>
            <div className="mt-2 flex space-x-6">
              {displayedActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        </div>

        {/* 背景圖片 */}
        <div className="absolute inset-0 z-[-1]">
          <img src="/images/mountains_background.png" alt="背景圖片" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default LatestNewsSection;
