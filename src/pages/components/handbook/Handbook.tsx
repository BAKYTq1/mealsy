import React, { useState } from 'react';

// --- Интерфейсы ---
interface Product {
  id: number;
  name: string;
  calories: string;
  proteins: string;
  fats: string;
  carbs: string;
  imageUrl: string;
}

interface Category {
  id: number;
  title: string;
  imageUrl: string;
  products: Product[];
}

// --- Данные для каждого отдела ---
const allCategories: Category[] = [
  {
    id: 1,
    title: 'Молочные продукты и яйца',
    imageUrl: 'https://santosepulcro.co.il/upload/iblock/30e/30eff6b89230b780d253354890cfcc66.jpg',
    products: [
      { id: 101, name: 'Творог 5%', calories: '121 ккал', proteins: '17.2 гр.', fats: '5 гр.', carbs: '1.8 гр.', imageUrl: 'https://images.unsplash.com/photo-1550583724-125581cc255b?w=400' },
      { id: 102, name: 'Молоко 3.2%', calories: '60 ккал', proteins: '3 гр.', fats: '3.2 гр.', carbs: '4.7 гр.', imageUrl: 'https://images.unsplash.com/photo-1563636619-e9107da5a1bb?w=400' },
      { id: 103, name: 'Яйцо куриное', calories: '157 ккал', proteins: '12.7 гр.', fats: '11.5 гр.', carbs: '0.7 гр.', imageUrl: 'https://images.unsplash.com/photo-1582722872445-41ca507ad462?w=400' },
      { id: 104, name: 'Йогурт натуральный', calories: '66 ккал', proteins: '3.5 гр.', fats: '3.2 гр.', carbs: '5 гр.', imageUrl: 'https://images.unsplash.com/photo-1571212430441-77da20944cb8?w=400' },
      { id: 105, name: 'Сметана 20%', calories: '204 ккал', proteins: '2.5 гр.', fats: '20 гр.', carbs: '3.4 гр.', imageUrl: 'https://images.unsplash.com/photo-1528750955925-cd72599d00e8?w=400' },
    ]
  },
  {
    id: 2,
    title: 'Рыба и морепродукты',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400',
    products: [
      { id: 201, name: 'Семга филе', calories: '203 ккал', proteins: '20 гр.', fats: '13 гр.', carbs: '0 гр.', imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400' },
      { id: 202, name: 'Дорадо', calories: '96 ккал', proteins: '18 гр.', fats: '3 гр.', carbs: '0 гр.', imageUrl: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400' },
      { id: 203, name: 'Креветки тигровые', calories: '89 ккал', proteins: '19.2 гр.', fats: '0.6 гр.', carbs: '0 гр.', imageUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400' },
      { id: 204, name: 'Кальмар', calories: '92 ккал', proteins: '18 гр.', fats: '2.2 гр.', carbs: '2 гр.', imageUrl: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400' },
      { id: 205, name: 'Мидии', calories: '77 ккал', proteins: '11.5 гр.', fats: '2 гр.', carbs: '3.3 гр.', imageUrl: 'https://images.unsplash.com/photo-1534080355125-27a156253b77?w=400' },
    ]
  },
  {
    id: 3,
    title: 'Овощи и корнеплоды',
    imageUrl: 'https://m.dom-eda.com/uploads/images/catalog/item/0688b97e47/85cdbfd74f_500.jpg',
    products: [
      { id: 301, name: 'Брокколи', calories: '34 ккал', proteins: '2.8 гр.', fats: '0.4 гр.', carbs: '7 гр.', imageUrl: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400' },
      { id: 302, name: 'Авокадо', calories: '160 ккал', proteins: '2 гр.', fats: '15 гр.', carbs: '9 гр.', imageUrl: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400' },
      { id: 303, name: 'Томаты Черри', calories: '18 ккал', proteins: '0.9 гр.', fats: '0.2 гр.', carbs: '3.9 гр.', imageUrl: 'https://images.unsplash.com/photo-1546473427-e1ad1554dec1?w=400' },
      { id: 304, name: 'Морковь', calories: '41 ккал', proteins: '0.9 гр.', fats: '0.2 гр.', carbs: '10 гр.', imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b996a6642d?w=400' },
      { id: 305, name: 'Болгарский перец', calories: '27 ккал', proteins: '1.3 гр.', fats: '0.1 гр.', carbs: '5.3 гр.', imageUrl: 'https://images.unsplash.com/photo-1566184050576-94e1fd77908b?w=400' },
    ]
  },
  {
    id: 4,
    title: 'Бакалея',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
    products: [
      { id: 401, name: 'Оливковое масло', calories: '884 ккал', proteins: '0 гр.', fats: '100 гр.', carbs: '0 гр.', imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacabc88c5?w=400' },
      { id: 402, name: 'Рис Басмати', calories: '340 ккал', proteins: '7.5 гр.', fats: '0.5 гр.', carbs: '77 гр.', imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400' },
      { id: 403, name: 'Овсяные хлопья', calories: '352 ккал', proteins: '12 гр.', fats: '6 гр.', carbs: '62 гр.', imageUrl: 'https://images.unsplash.com/photo-1586444248902-2f64eddf13cf?w=400' },
      { id: 404, name: 'Мед цветочный', calories: '304 ккал', proteins: '0.3 гр.', fats: '0 гр.', carbs: '82 гр.', imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400' },
      { id: 405, name: 'Макароны (ТСП)', calories: '350 ккал', proteins: '13 гр.', fats: '1.5 гр.', carbs: '71 гр.', imageUrl: 'https://images.unsplash.com/photo-1551462147-37885abb3e4a?w=400' },
    ]
  },
  {
    id: 5,
    title: 'Мясо и мясная гастрономия',
    imageUrl: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400',
    products: [
      { id: 501, name: 'Говядина (вырезка)', calories: '218 ккал', proteins: '19 гр.', fats: '16 гр.', carbs: '0 гр.', imageUrl: 'https://images.unsplash.com/photo-1558034859-045a83b444a2?w=400' },
      { id: 502, name: 'Стейк Рибай', calories: '291 ккал', proteins: '24 гр.', fats: '22 гр.', carbs: '0 гр.', imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400' },
      { id: 503, name: 'Фарш домашний', calories: '254 ккал', proteins: '17 гр.', fats: '20 гр.', carbs: '0 гр.', imageUrl: 'https://images.unsplash.com/photo-1588168333986-507c81ae397a?w=400' },
      { id: 504, name: 'Свиные ребра', calories: '320 ккал', proteins: '15 гр.', fats: '29 гр.', carbs: '0 гр.', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
      { id: 505, name: 'Бекон сырокопченый', calories: '450 ккал', proteins: '14 гр.', fats: '45 гр.', carbs: '0 гр.', imageUrl: 'https://images.unsplash.com/photo-1606851682840-0681159bf5ee?w=400' },
    ]
  }
  // ... можно аналогично добавить для Фруктов, Спиртного и т.д.
];

// --- Вспомогательный компонент карточки продукта ---
const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-4 transition-all hover:shadow-md">
    <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
      />
    </div>
    <h3 className="font-bold text-lg text-gray-800 mb-2 leading-tight h-14 line-clamp-2">
      {product.name}
    </h3>
    <div className="text-xs text-gray-500 space-y-1.5 mb-5 border-t border-gray-50 pt-3">
      <p className="flex justify-between"><span>Калории:</span> <span className="font-medium text-gray-700">{product.calories}</span></p>
      <p className="flex justify-between"><span>Белки:</span> <span className="font-medium text-gray-700">{product.proteins}</span></p>
      <p className="flex justify-between"><span>Жиры:</span> <span className="font-medium text-gray-700">{product.fats}</span></p>
      <p className="flex justify-between"><span>Углеводы:</span> <span className="font-medium text-gray-700">{product.carbs}</span></p>
    </div>
    <button className="w-full py-2.5 bg-[#76c75d] hover:bg-[#6ab453] text-white rounded-xl transition-colors text-sm font-semibold">
      Посмотреть
    </button>
  </div>
);

// --- Основной компонент Handbook ---
export function Handbook() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  // Скролл вверх при смене категории
  const handleCategoryClick = (cat: Category) => {
    setSelectedCategory(cat);
    window.scrollTo(0, 0);
  };

  // ЭКРАН 2: Список товаров в категории
  if (selectedCategory) {
    return (
      <div className="min-h-screen bg-[#fcfcfc]">
        <section className="max-w-6xl mx-auto px-4 py-8">
          {/* Навигация */}
          <nav className="flex items-center text-sm font-medium mb-6">
            <button 
              onClick={() => setSelectedCategory(null)} 
              className="text-green-600 hover:text-green-700 flex items-center transition-colors"
            >
              ← Справочник
            </button>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-500">{selectedCategory.title}</span>
          </nav>

          <div className="flex justify-between items-end mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              {selectedCategory.title}
            </h1>
            <p className="text-gray-400 text-sm font-medium">
              Найдено: {selectedCategory.products.length} товаров
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedCategory.products.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </section>
      </div>
    );
  }

  // ЭКРАН 1: Главная страница справочника (сетка категорий)
  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Справочник</h1>
        
        <div className="max-w-3xl text-[16px] leading-relaxed text-gray-500 mb-14">
          <p className="mb-4">
            В нашем справочнике собрана подробная база данных пищевой ценности продуктов. 
            Выберите категорию, чтобы узнать состав, калорийность и содержание макронутриентов (БЖУ).
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {allCategories.map((category) => (
            <div 
              key={category.id} 
              onClick={() => handleCategoryClick(category)}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gray-50 mb-4 shadow-sm transition-all group-hover:shadow-xl group-hover:-translate-y-1">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}