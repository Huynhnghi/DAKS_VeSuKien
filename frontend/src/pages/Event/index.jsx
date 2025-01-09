import React, { useState, useEffect } from 'react';
import EventsListCard_2 from "../../components/Event/EventsListCard_2";
import { searchEvents } from '../../services/apiService';
import { useLocation } from 'react-router-dom';
import FilterCateEvent from '../../components/Filter/FilterCateEvent';
import FilterCityEvent from '../../components/Filter/FilterCityEvent';
import Breadcrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import background from '../../assets/img/background-search.jpg';
import iconSearch from '../../assets/img/search.png';

function Event() {
    const [search, setSearch] = useState("");
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Thêm trạng thái tải
    const [error, setError] = useState(""); // Thêm trạng thái lỗi

    const location = useLocation();
    const cate = location.state;
    const [eventCateId, setEventCate] = useState(cate?.cate?.id || '');
    const [locationSelected, setLocationSelected] = useState(cate?.cate?.id || '');

    const SearchEventsData = async () => {
        setIsLoading(true); // Bắt đầu tải dữ liệu
        setError(""); // Reset lỗi
        try {
            const res = await searchEvents(search, eventCateId, locationSelected);
            setEvents(res.data.data);
        } catch (error) {
            setError("Không thể tải dữ liệu. Vui lòng thử lại sau.");
        } finally {
            setIsLoading(false); // Kết thúc tải
        }
    };

    useEffect(() => {
        SearchEventsData();
    }, [search, eventCateId, locationSelected]);

    return (
        <>
            <Breadcrumbs />
            {/* Hero Section */}
            <div className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-xl shadow-lg overflow-hidden">
                {/* Background Image */}
                <img
                    src={background}
                    alt="Search Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />

                {/* Content */}
                <div className="relative text-center text-white px-4 w-full max-w-4xl">
                    {/* Icon chuyển động */}
                    <div className="animate-bounce mb-4">
                        <img
                            src={iconSearch}
                            alt="Search Icon"
                            className="w-16 h-16 mx-auto"
                        />
                    </div>

                    {/* Tiêu đề */}
                    <h1 className="text-2xl md:text-3xl font-extrabold mb-2">
                        Khám phá sự kiện yêu thích
                    </h1>
                    <p className="text-sm md:text-base font-light mb-4">
                        Tìm kiếm và tham gia các sự kiện thú vị ngay hôm nay!
                    </p>

                    {/* Search Section */}
                    <div className="flex items-center bg-white text-gray-700 border border-gray-300 rounded-full shadow-md w-full max-w-xl mx-auto">
                        <input
                            type="text"
                            className="flex-grow py-2 px-4 text-sm md:text-base outline-none rounded-l-full placeholder-gray-400"
                            placeholder="Tìm kiếm sự kiện bạn thích..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            className="bg-blue-500 text-white py-2 px-5 rounded-r-full text-sm md:text-base font-medium hover:bg-blue-600 transition-all"
                            onClick={SearchEventsData}
                        >
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </div>


            {/* Content Section */}
            <div className="container mx-auto mt-10 flex flex-col md:flex-row gap-10">
                {/* Sidebar Filters */}
                <div className="w-full md:w-1/4 bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-lg font-bold mb-6 text-gray-900">Lọc sự kiện</h2>
                    <div className="mb-6">
                        <FilterCateEvent eventCate={eventCateId} setEventCate={setEventCate} />
                    </div>
                    <div className="mb-6">
                        <FilterCityEvent locationSelected={locationSelected} setLocationSelected={setLocationSelected} />
                    </div>
                    <div className="space-y-4">
                        <img
                            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                            src="https://ticketbox.vn/_next/image?url=https%3A%2F%2Fsalt.tkbcdn.com%2Fts%2Fds%2F39%2F63%2Fe7%2F4aca268d86721c0c26f3d02364059d7a.jpg&w=2048&q=75"
                            alt="Event"
                        />
                        <img
                            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                            src={background}
                            alt="Event Banner"
                        />
                    </div>
                </div>

                {/* Event List */}
                <div className="w-full md:w-3/4">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-[300px] text-blue-500">
                            <p className="text-xl">Đang tải sự kiện...</p>
                        </div>
                    ) : error ? (
                        <div className="flex justify-center items-center h-[300px] text-red-500">
                            <p className="text-xl">{error}</p>
                        </div>
                    ) : events.length > 0 ? (
                        <EventsListCard_2 events={events} />
                    ) : (
                        <div className="flex justify-center items-center h-[300px] text-gray-500">
                            <p className="text-xl">Không tìm thấy sự kiện nào phù hợp.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Event;
