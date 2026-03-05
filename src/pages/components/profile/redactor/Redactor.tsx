import { useState } from "react";
import { Calendar } from "lucide-react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from 'date-fns/locale'; 
import '../redactor/globals.css'
registerLocale('ru', ru);

export default function Redactor() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white p-14 rounded-2xl shadow-xl border border-gray-100">
        
        <p className="text-sm text-gray-400 mb-8">
          Главная / Профиль /{" "}
          <span className="text-gray-700 font-medium">
            Редактировать профиль
          </span>
        </p>

        <h1 className="text-3xl font-bold mb-12 text-gray-800">
          Редактировать профиль
        </h1>

        <div className="flex items-center gap-10 mb-14">
          <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center rounded-2xl shadow-lg">
            <span className="text-white text-5xl font-bold">B</span>
          </div>

          <div>
            <button className="text-green-600 text-lg font-semibold hover:text-green-700 transition">
              Загрузить изображение
            </button>
            <p className="text-sm text-gray-400 mt-2">
              Формат: jpg, png. Максимальный размер 5MB
            </p>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-semibold mb-3 text-gray-700">
            Ваше имя <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-200 rounded-xl px-5 py-3 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <p className="text-sm text-gray-500 mb-10 leading-relaxed">
          Конфиденциальность ваших данных важна для нас. Ознакомьтесь с нашими{" "}
          <span className="text-green-600 underline cursor-pointer">
            условиями использования
          </span>{" "}
          и{" "}
          <span className="text-green-600 underline cursor-pointer">
            уведомлением о конфиденциальности
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-700">
              День рождения
            </label>

            <div className="relative">
              <DatePicker
                selected={selectedDate}
                locale="ru" // Орус тилине которуу
                onChange={(date) => {
                  setSelectedDate(date);
                  setOpen(false);
                }}
                open={open}
                onClickOutside={() => setOpen(false)}
                dateFormat="dd.MM.yyyy"
                placeholderText="ДД.ММ.ГГГГ"
                className="w-full border border-gray-200 rounded-xl px-5 py-3 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />

              <Calendar
                onClick={() => setOpen(!open)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 w-5 h-5 cursor-pointer"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-700">
              Пол
            </label>
            <select className="w-full border border-gray-200 rounded-xl px-5 py-3 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 transition">
              <option>Выберите пол</option>
              <option>Мужской</option>
              <option>Женский</option>
            </select>
          </div>
        </div>

        <div className="mb-12">
          <label className="block text-sm font-semibold mb-3 text-gray-700">
            Ваш Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-200 rounded-xl px-5 py-3 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Изменить пароль
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Пароль должен содержать минимум 8 символов
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="password"
              placeholder="Новый пароль"
              className="w-full border border-gray-200 rounded-xl px-5 py-3 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <input
              type="password"
              placeholder="Повторить пароль"
              className="w-full border border-gray-200 rounded-xl px-5 py-3 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-6 mt-12">
          <button className="bg-green-500 text-white px-8 py-3 rounded-xl shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300">
            Сохранить изменения
          </button>
          <button className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-xl hover:bg-green-50 transition-all duration-300">
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
}