import { useState } from 'react';

// Mock data
const books = [
  { id: 1, title: 'Духовное путешествие', sold: 1245, stock: 355, cover: 'bg-gradient-to-br from-emerald-600 to-teal-700' },
  { id: 2, title: 'Воспитание детей', sold: 892, stock: 208, cover: 'bg-gradient-to-br from-blue-600 to-indigo-700' },
  { id: 3, title: 'Исламская психология', sold: 1567, stock: 443, cover: 'bg-gradient-to-br from-purple-600 to-pink-700' },
  { id: 4, title: 'Покаянием к Аллаху', sold: 723, stock: 177, cover: 'bg-gradient-to-br from-orange-600 to-red-700' },
  { id: 5, title: 'Познание Пророка', sold: 1034, stock: 289, cover: 'bg-gradient-to-br from-sky-600 to-blue-700' },
  { id: 6, title: 'Познание Имама Али', sold: 678, stock: 156, cover: 'bg-gradient-to-br from-rose-600 to-red-700' },
  { id: 7, title: 'Познание Аллаха', sold: 945, stock: 234, cover: 'bg-gradient-to-br from-teal-600 to-cyan-700' },
  { id: 8, title: 'Исламский образ жизни', sold: 1189, stock: 312, cover: 'bg-gradient-to-br from-amber-600 to-orange-700' },
  { id: 9, title: 'Командная работа', sold: 834, stock: 267, cover: 'bg-gradient-to-br from-indigo-600 to-purple-700' },
];

const monthlyData = [
  { month: 'Янв', sales: 856, delta: 12, externalAds: 45, internalAds: 23, revenue: 428000, orders: 920 },
  { month: 'Фев', sales: 923, delta: 8, externalAds: 52, internalAds: 28, revenue: 461500, orders: 1012 },
  { month: 'Мар', sales: 1045, delta: 13, externalAds: 61, internalAds: 31, revenue: 522500, orders: 1156 },
  { month: 'Апр', sales: 978, delta: -6, externalAds: 58, internalAds: 29, revenue: 489000, orders: 1098 },
  { month: 'Май', sales: 1234, delta: 26, externalAds: 72, internalAds: 38, revenue: 617000, orders: 1367 },
  { month: 'Июн', sales: 1456, delta: 18, externalAds: 89, internalAds: 45, revenue: 728000, orders: 1621 },
];

const weeklyData = [
  { month: 'Нед 1', sales: 234, delta: 5, externalAds: 12, internalAds: 8, revenue: 117000, orders: 256 },
  { month: 'Нед 2', sales: 289, delta: 23, externalAds: 15, internalAds: 10, revenue: 144500, orders: 318 },
  { month: 'Нед 3', sales: 267, delta: -8, externalAds: 14, internalAds: 9, revenue: 133500, orders: 293 },
  { month: 'Нед 4', sales: 312, delta: 17, externalAds: 18, internalAds: 11, revenue: 156000, orders: 343 },
];

const yearlyData = [
  { month: '2020', sales: 8456, delta: 0, externalAds: 345, internalAds: 189, revenue: 4228000, orders: 9302 },
  { month: '2021', sales: 9823, delta: 16, externalAds: 423, internalAds: 234, revenue: 4911500, orders: 10805 },
  { month: '2022', sales: 11245, delta: 14, externalAds: 512, internalAds: 298, revenue: 5622500, orders: 12370 },
  { month: '2023', sales: 13678, delta: 22, externalAds: 634, internalAds: 356, revenue: 6839000, orders: 15046 },
  { month: '2024', sales: 15234, delta: 11, externalAds: 712, internalAds: 401, revenue: 7617000, orders: 16757 },
];

const quarterlyData = [
  { month: 'Q1', sales: 2824, delta: 12, externalAds: 158, internalAds: 82, revenue: 1412000, orders: 3106 },
  { month: 'Q2', sales: 3268, delta: 16, externalAds: 189, internalAds: 96, revenue: 1634000, orders: 3595 },
  { month: 'Q3', sales: 2987, delta: -9, externalAds: 167, internalAds: 88, revenue: 1493500, orders: 3286 },
  { month: 'Q4', sales: 3612, delta: 21, externalAds: 201, internalAds: 107, revenue: 1806000, orders: 3973 },
];

const dailyData = [
  { month: 'Пн', sales: 45, delta: 3, externalAds: 3, internalAds: 2, revenue: 22500, orders: 52 },
  { month: 'Вт', sales: 52, delta: 15, externalAds: 4, internalAds: 2, revenue: 26000, orders: 61 },
  { month: 'Ср', sales: 48, delta: -8, externalAds: 3, internalAds: 2, revenue: 24000, orders: 56 },
  { month: 'Чт', sales: 61, delta: 27, externalAds: 5, internalAds: 3, revenue: 30500, orders: 72 },
  { month: 'Пт', sales: 58, delta: -5, externalAds: 4, internalAds: 3, revenue: 29000, orders: 68 },
  { month: 'Сб', sales: 72, delta: 24, externalAds: 6, internalAds: 4, revenue: 36000, orders: 84 },
  { month: 'Вс', sales: 55, delta: -24, externalAds: 4, internalAds: 2, revenue: 27500, orders: 64 },
];

const funnelData = [
  { stage: 'Клики', value: 15670, conversion: 100, delta: 8 },
  { stage: 'Переходы', value: 8934, conversion: 57, delta: 5 },
  { stage: 'Корзина', value: 4521, conversion: 29, delta: -3 },
  { stage: 'Заказ', value: 2789, conversion: 18, delta: 12 },
  { stage: 'Выкуплено', value: 2345, conversion: 15, delta: 9 },
];

const advertisers = [
  { 
    id: 1, 
    name: 'Яндекс Дирек��', 
    spent: 45600, 
    clicks: 8934, 
    conversions: 456, 
    roi: 3.2, 
    status: 'active',
    color: 'bg-red-500'
  },
  { 
    id: 2, 
    name: 'Google Ads', 
    spent: 32400, 
    clicks: 6721, 
    conversions: 389, 
    roi: 2.8, 
    status: 'active',
    color: 'bg-blue-500'
  },
  { 
    id: 3, 
    name: 'VK Реклама', 
    spent: 18900, 
    clicks: 5234, 
    conversions: 267, 
    roi: 2.1, 
    status: 'active',
    color: 'bg-sky-500'
  },
  { 
    id: 4, 
    name: 'Telegram Ads', 
    spent: 12300, 
    clicks: 3456, 
    conversions: 198, 
    roi: 1.9, 
    status: 'active',
    color: 'bg-cyan-500'
  },
  { 
    id: 5, 
    name: 'Instagram', 
    spent: 9800, 
    clicks: 2890, 
    conversions: 145, 
    roi: 1.6, 
    status: 'paused',
    color: 'bg-pink-500'
  },
];

const deliveries = [
  {
    id: 1,
    date: '2024-11-15',
    status: 'delivered',
    books: [
      { title: 'Духовное путешествие', quantity: 250 },
      { title: 'Познание Аллаха', quantity: 180 },
      { title: 'Исламский образ жизни', quantity: 320 },
    ]
  },
  {
    id: 2,
    date: '2024-11-08',
    status: 'delivered',
    books: [
      { title: 'Воспитание детей', quantity: 150 },
      { title: 'Исламская психология', quantity: 280 },
      { title: 'Командная работа', quantity: 190 },
    ]
  },
  {
    id: 3,
    date: '2024-11-01',
    status: 'delivered',
    books: [
      { title: 'Покаянием к Аллаху', quantity: 140 },
      { title: 'Познание Пророка', quantity: 220 },
      { title: 'Познание Имама Али', quantity: 160 },
    ]
  },
  {
    id: 4,
    date: '2024-10-25',
    status: 'delivered',
    books: [
      { title: 'Духовное путешествие', quantity: 300 },
      { title: 'Исламская психология', quantity: 250 },
    ]
  },
  {
    id: 5,
    date: '2024-11-22',
    status: 'in_transit',
    books: [
      { title: 'Познание Аллаха', quantity: 200 },
      { title: 'Воспитание детей', quantity: 175 },
      { title: 'Командная работа', quantity: 180 },
    ]
  },
];

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [timePeriod, setTimePeriod] = useState('month');
  const [booksList, setBooksList] = useState(books);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookStock, setNewBookStock] = useState('');
  const [newBookSold, setNewBookSold] = useState('');
  const [notes, setNotes] = useState([
    {
      id: 1,
      author: 'Ахмед Ибрагимов',
      text: 'Предлагаю увеличить рекламный бюджет на книгу "Познание Аллаха" - показывает хорошую динамику',
      date: '2024-11-20',
      avatar: 'bg-emerald-500'
    },
    {
      id: 2,
      author: 'Фатима Алиева',
      text: 'Необходимо пересмотреть цену на "Воспитание детей" - много запросов о скидках',
      date: '2024-11-19',
      avatar: 'bg-blue-500'
    },
    {
      id: 3,
      author: 'Юсуф Махмудов',
      text: 'Книга "Исламская психология" заканчивается на складе - срочно нужен новый тираж',
      date: '2024-11-18',
      avatar: 'bg-purple-500'
    }
  ]);
  const [newNoteText, setNewNoteText] = useState('');
  const [showNoteForm, setShowNoteForm] = useState(false);

  const getDataByPeriod = () => {
    switch (timePeriod) {
      case 'day':
        return dailyData;
      case 'week':
        return weeklyData;
      case 'quarter':
        return quarterlyData;
      case 'year':
        return yearlyData;
      default:
        return monthlyData;
    }
  };

  const currentData = getDataByPeriod();

  const totalSold = booksList.reduce((sum, book) => sum + book.sold, 0);
  const totalStock = booksList.reduce((sum, book) => sum + book.stock, 0);
  const totalOrdered = 3456;
  const totalReturns = 234;
  const totalExpenses = 567;
  const externalAds = 89;
  const internalAds = 45;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white font-sans">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900/50 backdrop-blur-xl border-r border-white/5 flex flex-col">
          <div className="p-6 border-b border-white/5">
            <h1 className="text-xl tracking-tight">Маариф</h1>
            <p className="text-slate-400 mt-1">Учет книг</p>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${
                currentView === 'dashboard'
                  ? 'bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/10'
                  : 'text-slate-400 hover:bg-white/5'
              }`}
            >
              <svg className="w-4 h-4 inline mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Дашборд
            </button>

            <button
              onClick={() => setCurrentView('funnel')}
              className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${
                currentView === 'funnel'
                  ? 'bg-sky-500/20 text-sky-400 shadow-lg shadow-sky-500/10'
                  : 'text-slate-400 hover:bg-white/5'
              }`}
            >
              <svg className="w-4 h-4 inline mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              Воронка продаж
            </button>

            <button
              onClick={() => setCurrentView('ads')}
              className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${
                currentView === 'ads'
                  ? 'bg-amber-500/20 text-amber-400 shadow-lg shadow-amber-500/10'
                  : 'text-slate-400 hover:bg-white/5'
              }`}
            >
              <svg className="w-4 h-4 inline mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              Внешняя реклама
            </button>

            <button
              onClick={() => setCurrentView('deliveries')}
              className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${
                currentView === 'deliveries'
                  ? 'bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/10'
                  : 'text-slate-400 hover:bg-white/5'
              }`}
            >
              <svg className="w-4 h-4 inline mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              Поставки на WB
            </button>

            <div className="pt-4 pb-2 px-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">Книги</p>
            </div>

            {booksList.map((book) => (
              <button
                key={book.id}
                onClick={() => {
                  setSelectedBook(book);
                  setCurrentView('book');
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg transition-all group ${
                  selectedBook?.id === book.id && currentView === 'book'
                    ? 'bg-white/10 text-white'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="truncate pr-2">{book.title}</span>
                  <span className="text-xs text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {book.sold}
                  </span>
                </div>
              </button>
            ))}
            
            <button
              onClick={() => setShowAddBookModal(true)}
              className="w-full text-left px-4 py-2.5 rounded-lg transition-all text-slate-400 hover:bg-white/5 hover:text-white border border-dashed border-slate-600"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Добавить книгу</span>
              </div>
            </button>
          </nav>

          <div className="p-4 border-t border-white/5">
            <button
              onClick={() => setShowModal(true)}
              className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
            >
              + Добавить продажу
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {currentView === 'dashboard' && (
            <DashboardView
              totalSold={totalSold}
              totalOrdered={totalOrdered}
              totalReturns={totalReturns}
              totalExpenses={totalExpenses}
              externalAds={externalAds}
              internalAds={internalAds}
              data={currentData}
              books={booksList}
              timePeriod={timePeriod}
              setTimePeriod={setTimePeriod}
              notes={notes}
              setNotes={setNotes}
              newNoteText={newNoteText}
              setNewNoteText={setNewNoteText}
              showNoteForm={showNoteForm}
              setShowNoteForm={setShowNoteForm}
              onBookClick={(book) => {
                setSelectedBook(book);
                setCurrentView('book');
              }}
            />
          )}

          {currentView === 'book' && selectedBook && (
            <BookDetailView 
              book={selectedBook} 
              data={currentData}
              timePeriod={timePeriod}
              setTimePeriod={setTimePeriod}
            />
          )}

          {currentView === 'funnel' && <FunnelView funnelData={funnelData} />}

          {currentView === 'ads' && <AdsView advertisers={advertisers} />}

          {currentView === 'deliveries' && <DeliveriesView deliveries={deliveries} />}
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl">Добавить продажу</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Книга</label>
                <select className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500/50 transition-colors">
                  {booksList.map((book) => (
                    <option key={book.id} value={book.id}>
                      {book.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Количество</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Дата</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all mt-6">
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Book Modal */}
      {showAddBookModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl">Добавить новую книгу</h3>
              <button onClick={() => setShowAddBookModal(false)} className="text-slate-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Название книги</label>
                <input
                  type="text"
                  value={newBookTitle}
                  onChange={(e) => setNewBookTitle(e.target.value)}
                  placeholder="Введите название книги"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Остаток на складе</label>
                <input
                  type="number"
                  value={newBookStock}
                  onChange={(e) => setNewBookStock(e.target.value)}
                  placeholder="0"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Выкуплено</label>
                <input
                  type="number"
                  value={newBookSold}
                  onChange={(e) => setNewBookSold(e.target.value)}
                  placeholder="0"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              <button
                onClick={() => {
                  if (newBookTitle.trim() && newBookStock && newBookSold) {
                    const colors = [
                      'bg-gradient-to-br from-emerald-600 to-teal-700',
                      'bg-gradient-to-br from-blue-600 to-indigo-700',
                      'bg-gradient-to-br from-purple-600 to-pink-700',
                      'bg-gradient-to-br from-orange-600 to-red-700',
                      'bg-gradient-to-br from-sky-600 to-blue-700',
                      'bg-gradient-to-br from-rose-600 to-red-700',
                      'bg-gradient-to-br from-teal-600 to-cyan-700',
                      'bg-gradient-to-br from-amber-600 to-orange-700',
                      'bg-gradient-to-br from-indigo-600 to-purple-700',
                    ];
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    
                    setBooksList([
                      ...booksList,
                      {
                        id: booksList.length + 1,
                        title: newBookTitle,
                        sold: parseInt(newBookSold),
                        stock: parseInt(newBookStock),
                        cover: randomColor
                      }
                    ]);
                    setNewBookTitle('');
                    setNewBookStock('');
                    setNewBookSold('');
                    setShowAddBookModal(false);
                  }
                }}
                className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all mt-6"
              >
                Добавить книгу
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DashboardView({ totalSold, totalOrdered, totalReturns, totalExpenses, externalAds, internalAds, data, books, timePeriod, setTimePeriod, notes, setNotes, newNoteText, setNewNoteText, showNoteForm, setShowNoteForm, onBookClick }) {
  const getPeriodLabel = () => {
    switch (timePeriod) {
      case 'week': return 'За неделю';
      case 'month': return 'За месяц';
      case 'quarter': return 'За квартал';
      case 'year': return 'За год';
      default: return 'За месяц';
    }
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl mb-2">Обзор</h2>
          <p className="text-slate-400">Общая статистика по всем книгам</p>
        </div>

        {/* Period Selector */}
        <div className="flex gap-2 bg-slate-800/50 p-1 rounded-lg border border-white/10">
          <button
            onClick={() => setTimePeriod('week')}
            className={`px-4 py-2 rounded-md transition-all ${
              timePeriod === 'week'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Неделя
          </button>
          <button
            onClick={() => setTimePeriod('month')}
            className={`px-4 py-2 rounded-md transition-all ${
              timePeriod === 'month'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Месяц
          </button>
          <button
            onClick={() => setTimePeriod('quarter')}
            className={`px-4 py-2 rounded-md transition-all ${
              timePeriod === 'quarter'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Квартал
          </button>
          <button
            onClick={() => setTimePeriod('year')}
            className={`px-4 py-2 rounded-md transition-all ${
              timePeriod === 'year'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Год
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Всего выкуплено" value={totalSold} color="emerald" icon="check" />
        <KPICard title="Заказано" value={totalOrdered} color="blue" icon="cart" />
        <KPICard title="Отказов" value={totalReturns} color="red" icon="x" />
        <KPICard title="Расходы" value={`${totalExpenses} тыс ₽`} color="amber" icon="currency" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <KPICard title="Внешняя реклама" value={`${externalAds} тыс ₽`} color="sky" icon="external" />
        <KPICard title="Внутренняя реклама" value={`${internalAds} тыс ₽`} color="blue" icon="internal" />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl mb-6">График продаж в рублях</h3>
          <RevenueChart />
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl mb-6">График заказов книг</h3>
          <OrdersChart />
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl mb-6">Расходы на внутреннюю рекламу</h3>
          <InternalAdsChart />
        </div>
      </div>

      {/* Books Grid */}
      <div>
        <h3 className="text-xl mb-4">Книги</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <button
              key={book.id}
              onClick={() => onBookClick(book)}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:border-emerald-500/50 transition-all group text-left"
            >
              <div className={`w-full h-32 ${book.cover} rounded-lg mb-4 flex items-center justify-center`}>
                <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors">{book.title}</h4>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-slate-400">Выкуплено</p>
                  <p className="text-emerald-400">{book.sold}</p>
                </div>
                <div>
                  <p className="text-slate-400">Остаток</p>
                  <p className="text-sky-400">{book.stock}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Notes Section */}
      <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl mb-6">Заметки</h3>
        <div className="space-y-4">
          {notes.map((note) => (
            <div key={note.id} className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full ${note.avatar} flex items-center justify-center`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.656 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-400">{note.author}</p>
                </div>
                <p className="text-xs text-slate-400">{note.date}</p>
              </div>
              <p className="text-sm text-slate-400">{note.text}</p>
            </div>
          ))}
        </div>

        {/* Add Note Form */}
        {showNoteForm && (
          <div className="mt-4">
            <textarea
              value={newNoteText}
              onChange={(e) => setNewNoteText(e.target.value)}
              placeholder="Добавьте новую заметку..."
              className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
            <button
              onClick={() => {
                if (newNoteText.trim()) {
                  setNotes([
                    ...notes,
                    {
                      id: notes.length + 1,
                      author: 'Вы',
                      text: newNoteText,
                      date: new Date().toISOString().split('T')[0],
                      avatar: 'bg-emerald-500'
                    }
                  ]);
                  setNewNoteText('');
                  setShowNoteForm(false);
                }
              }}
              className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
            >
              Сохранить заметку
            </button>
          </div>
        )}

        {/* Add Note Button */}
        {!showNoteForm && (
          <button
            onClick={() => setShowNoteForm(true)}
            className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all mt-4"
          >
            + Добавить заметку
          </button>
        )}
      </div>
    </div>
  );
}

function BookDetailView({ book, data, timePeriod, setTimePeriod }) {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <button
          onClick={() => window.location.reload()}
          className="flex items-center text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Назад к обзору
        </button>

        {/* Period Selector */}
        <div className="flex gap-2 bg-slate-800/50 p-1 rounded-lg border border-white/10">
          <button
            onClick={() => setTimePeriod('week')}
            className={`px-4 py-2 rounded-md transition-all ${
              timePeriod === 'week'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Неделя
          </button>
          <button
            onClick={() => setTimePeriod('month')}
            className={`px-4 py-2 rounded-md transition-all ${
              timePeriod === 'month'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Месяц
          </button>
          <button
            onClick={() => setTimePeriod('quarter')}
            className={`px-4 py-2 rounded-md transition-all ${
              timePeriod === 'quarter'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Квартал
          </button>
          <button
            onClick={() => setTimePeriod('year')}
            className={`px-4 py-2 rounded-md transition-all ${
              timePeriod === 'year'
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Год
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Book Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className={`w-full h-64 ${book.cover} rounded-xl mb-6 flex items-center justify-center`}>
              <svg className="w-24 h-24 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            <h2 className="text-2xl mb-6">{book.title}</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-emerald-500/10 rounded-lg">
                <span className="text-slate-400">Выкуплено</span>
                <span className="text-emerald-400 text-xl">{book.sold}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-sky-500/10 rounded-lg">
                <span className="text-slate-400">На складе</span>
                <span className="text-sky-400 text-xl">{book.stock}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-amber-500/10 rounded-lg">
                <span className="text-slate-400">Конверсия</span>
                <span className="text-amber-400 text-xl">24%</span>
              </div>
            </div>

            <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
              + Добавить продажу
            </button>
          </div>
        </div>

        {/* Right Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl mb-6">График продаж в рублях</h3>
            <RevenueChart />
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl mb-6">График заказов книг</h3>
            <OrdersChart />
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl mb-6">Расходы на внутреннюю рекламу</h3>
            <InternalAdsChart />
          </div>
        </div>
      </div>
    </div>
  );
}

function FunnelView({ funnelData }) {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-3xl mb-2">Воронка продаж</h2>
        <p className="text-slate-400">Анализ конверсии на каждом этапе</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Funnel Visualization */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl mb-6">Визуализация</h3>
          <FunnelChart data={funnelData} />
        </div>

        {/* Funnel Stats */}
        <div className="space-y-4">
          {funnelData.map((stage, index) => (
            <div
              key={stage.stage}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index === 0 ? 'bg-sky-500/20 text-sky-400' :
                    index === 1 ? 'bg-blue-500/20 text-blue-400' :
                    index === 2 ? 'bg-purple-500/20 text-purple-400' :
                    index === 3 ? 'bg-pink-500/20 text-pink-400' :
                    'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    {index + 1}
                  </div>
                  <h4 className="text-xl">{stage.stage}</h4>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm ${
                  stage.delta > 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {stage.delta > 0 ? '+' : ''}{stage.delta}%
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-400 mb-1">Значение</p>
                  <p className="text-2xl">{stage.value.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-slate-400 mb-1">Конверсия</p>
                  <p className="text-2xl">{stage.conversion}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdsView({ advertisers }) {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-3xl mb-2">Внешняя рклама</h2>
        <p className="text-slate-400">Анализ эффективности рекламных кампаний</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advertisers.map((ad) => (
          <div key={ad.id} className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full ${ad.color} flex items-center justify-center`}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.656 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-400">{ad.name}</p>
              </div>
              <p className="text-xs text-slate-400">{ad.status}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Расходы</span>
                <span className="text-amber-400">{ad.spent.toLocaleString()} ₽</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Клики</span>
                <span className="text-sky-400">{ad.clicks.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Конверсии</span>
                <span className="text-emerald-400">{ad.conversions.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">ROI</span>
                <span className="text-pink-400">{ad.roi.toFixed(2)}x</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeliveriesView({ deliveries }) {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-3xl mb-2">Поставки на WB</h2>
        <p className="text-slate-400">История поставок книг на Wildberries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deliveries.map((delivery) => (
          <div key={delivery.id} className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full ${delivery.status === 'delivered' ? 'bg-emerald-500' : 'bg-red-500'} flex items-center justify-center`}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.656 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-400">{delivery.status === 'delivered' ? 'Доставлено' : 'В пути'}</p>
              </div>
              <p className="text-xs text-slate-400">{delivery.date}</p>
            </div>

            <div className="space-y-2">
              {delivery.books.map((book) => (
                <div key={book.title} className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">{book.title}</span>
                  <span className="text-emerald-400">{book.quantity} шт</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function KPICard({ title, value, color, icon }) {
  const colors = {
    emerald: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
    blue: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30',
    sky: 'from-sky-500/20 to-blue-500/20 border-sky-500/30',
    red: 'from-red-500/20 to-rose-500/20 border-red-500/30',
    amber: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
  };

  const iconColors = {
    emerald: 'text-emerald-400',
    blue: 'text-blue-400',
    sky: 'text-sky-400',
    red: 'text-red-400',
    amber: 'text-amber-400',
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} backdrop-blur-xl border rounded-xl p-6`}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-slate-400">{title}</p>
        <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${iconColors[color]}`}>
          {icon === 'check' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          {icon === 'cart' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )}
          {icon === 'x' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          {icon === 'currency' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {(icon === 'external' || icon === 'internal') && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          )}
        </div>
      </div>
      <p className="text-3xl">{typeof value === 'number' ? value.toLocaleString() : value}</p>
    </div>
  );
}

function RevenueChart() {
  const [period, setPeriod] = useState('month');
  
  const getData = () => {
    switch (period) {
      case 'day': return dailyData;
      case 'week': return weeklyData;
      case 'quarter': return quarterlyData;
      case 'year': return yearlyData;
      default: return monthlyData;
    }
  };
  
  const data = getData();
  const maxRevenue = Math.max(...data.map(d => d.revenue));
  const minRevenue = Math.min(...data.map(d => d.revenue));
  const range = maxRevenue - minRevenue;

  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((item.revenue - minRevenue) / range) * 80;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="space-y-4">
      {/* Period Selector */}
      <div className="flex gap-1 bg-slate-800/50 p-1 rounded-lg border border-white/10 text-xs">
        <button
          onClick={() => setPeriod('day')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'day'
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          День
        </button>
        <button
          onClick={() => setPeriod('week')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'week'
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Неделя
        </button>
        <button
          onClick={() => setPeriod('month')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'month'
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Месяц
        </button>
        <button
          onClick={() => setPeriod('quarter')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'quarter'
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Квартал
        </button>
        <button
          onClick={() => setPeriod('year')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'year'
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Год
        </button>
      </div>
      
      <div className="relative h-64">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        {/* Grid */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgb(51, 65, 85)" strokeWidth="0.2" />
        ))}

        {/* Area under line */}
        <polygon
          points={`0,100 ${points} 100,100`}
          fill="url(#revenueGradient)"
          opacity="0.3"
        />

        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke="#10b981"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Points */}
        {data.map((item, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = 100 - ((item.revenue - minRevenue) / range) * 80;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="1"
              fill="#10b981"
              className="hover:r-2 transition-all cursor-pointer"
            />
          );
        })}

        <defs>
          <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
        </defs>
      </svg>

        {/* Labels */}
        <div className="flex justify-between mt-4">
          {data.map((item, index) => (
            <div key={index} className="text-xs text-slate-400 text-center">
              <div>{item.month}</div>
              <div className="text-emerald-400 mt-1">{(item.revenue / 1000).toFixed(0)}к ₽</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrdersChart() {
  const [period, setPeriod] = useState('month');
  
  const getData = () => {
    switch (period) {
      case 'day': return dailyData;
      case 'week': return weeklyData;
      case 'quarter': return quarterlyData;
      case 'year': return yearlyData;
      default: return monthlyData;
    }
  };
  
  const data = getData();
  const maxOrders = Math.max(...data.map(d => d.orders));
  const minOrders = Math.min(...data.map(d => d.orders));
  const range = maxOrders - minOrders;

  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((item.orders - minOrders) / range) * 80;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="space-y-4">
      {/* Period Selector */}
      <div className="flex gap-1 bg-slate-800/50 p-1 rounded-lg border border-white/10 text-xs">
        <button
          onClick={() => setPeriod('day')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'day'
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          День
        </button>
        <button
          onClick={() => setPeriod('week')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'week'
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Неделя
        </button>
        <button
          onClick={() => setPeriod('month')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'month'
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Месяц
        </button>
        <button
          onClick={() => setPeriod('quarter')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'quarter'
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Квартал
        </button>
        <button
          onClick={() => setPeriod('year')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'year'
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Год
        </button>
      </div>
      
      <div className="relative h-64">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        {/* Grid */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgb(51, 65, 85)" strokeWidth="0.2" />
        ))}

        {/* Area under line */}
        <polygon
          points={`0,100 ${points} 100,100`}
          fill="url(#ordersGradient)"
          opacity="0.3"
        />

        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Points */}
        {data.map((item, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = 100 - ((item.orders - minOrders) / range) * 80;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="1"
              fill="#3b82f6"
              className="hover:r-2 transition-all cursor-pointer"
            />
          );
        })}

        <defs>
          <linearGradient id="ordersGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
      </svg>

        {/* Labels */}
        <div className="flex justify-between mt-4">
          {data.map((item, index) => (
            <div key={index} className="text-xs text-slate-400 text-center">
              <div>{item.month}</div>
              <div className="text-blue-400 mt-1">{item.orders}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InternalAdsChart() {
  const [period, setPeriod] = useState('month');
  
  const getData = () => {
    switch (period) {
      case 'day': return dailyData;
      case 'week': return weeklyData;
      case 'quarter': return quarterlyData;
      case 'year': return yearlyData;
      default: return monthlyData;
    }
  };
  
  const data = getData();
  const maxAds = Math.max(...data.map(d => d.internalAds));
  const minAds = Math.min(...data.map(d => d.internalAds));
  const range = maxAds - minAds;

  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((item.internalAds - minAds) / range) * 80;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="space-y-4">
      {/* Period Selector */}
      <div className="flex gap-1 bg-slate-800/50 p-1 rounded-lg border border-white/10 text-xs">
        <button
          onClick={() => setPeriod('day')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'day'
              ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          День
        </button>
        <button
          onClick={() => setPeriod('week')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'week'
              ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Неделя
        </button>
        <button
          onClick={() => setPeriod('month')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'month'
              ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Месяц
        </button>
        <button
          onClick={() => setPeriod('quarter')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'quarter'
              ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Квартал
        </button>
        <button
          onClick={() => setPeriod('year')}
          className={`flex-1 px-2 py-1 rounded transition-all ${
            period === 'year'
              ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Год
        </button>
      </div>
      
      <div className="relative h-64">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        {/* Grid */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgb(51, 65, 85)" strokeWidth="0.2" />
        ))}

        {/* Area under line */}
        <polygon
          points={`0,100 ${points} 100,100`}
          fill="url(#adsGradient)"
          opacity="0.3"
        />

        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Points */}
        {data.map((item, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = 100 - ((item.internalAds - minAds) / range) * 80;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="1"
              fill="#f59e0b"
              className="hover:r-2 transition-all cursor-pointer"
            />
          );
        })}

        <defs>
          <linearGradient id="adsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </svg>

        {/* Labels */}
        <div className="flex justify-between mt-4">
          {data.map((item, index) => (
            <div key={index} className="text-xs text-slate-400 text-center">
              <div>{item.month}</div>
              <div className="text-amber-400 mt-1">{item.internalAds} тыс ₽</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LineChart({ data }) {
  const maxSales = Math.max(...data.map(d => d.sales));
  const minSales = Math.min(...data.map(d => d.sales));
  const range = maxSales - minSales;

  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((item.sales - minSales) / range) * 80;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="relative h-64">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        {/* Grid */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgb(51, 65, 85)" strokeWidth="0.2" />
        ))}

        {/* Area under line */}
        <polygon
          points={`0,100 ${points} 100,100`}
          fill="url(#lineGradient)"
          opacity="0.3"
        />

        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke="#10b981"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Points */}
        {data.map((item, index) => {
          const x = (index / (data.length - 1)) * 100;
          const y = 100 - ((item.sales - minSales) / range) * 80;
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="1"
              fill="#10b981"
              className="hover:r-2 transition-all cursor-pointer"
            />
          );
        })}

        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
        </defs>
      </svg>

      {/* Labels */}
      <div className="flex justify-between mt-4">
        {data.map((item, index) => (
          <div key={index} className="text-xs text-slate-400">
            {item.month}
          </div>
        ))}
      </div>
    </div>
  );
}

function CombinedChart({ data, initialStock }) {
  const maxAds = Math.max(...data.map(d => d.externalAds + d.internalAds));
  
  return (
    <div className="space-y-4">
      {data.map((item, index) => {
        const totalAds = item.externalAds + item.internalAds;
        const stockDecrease = initialStock * (1 - (index + 1) * 0.12);
        
        return (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400 w-16">{item.month}</span>
              <span className="text-sky-400">{Math.round(stockDecrease)} остаток</span>
            </div>
            
            <div className="relative h-12">
              {/* Stock area (background) */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-slate-600/30 rounded-lg overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-sky-500/20 to-blue-500/20 transition-all duration-500"
                  style={{ width: `${(stockDecrease / initialStock) * 100}%` }}
                />
              </div>
              
              {/* Ads bars (foreground) */}
              <div className="absolute inset-0 flex items-end rounded-lg overflow-hidden">
                <div 
                  className="bg-gradient-to-t from-sky-500 to-sky-400 transition-all duration-500"
                  style={{ 
                    width: `${(item.externalAds / maxAds) * 100}%`,
                    height: '60%'
                  }}
                />
                <div 
                  className="bg-gradient-to-t from-blue-500 to-blue-400 transition-all duration-500"
                  style={{ 
                    width: `${(item.internalAds / maxAds) * 100}%`,
                    height: '60%'
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
      
      <div className="flex gap-6 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-sky-400" />
          <span className="text-xs text-slate-400">Внешняя реклама</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400" />
          <span className="text-xs text-slate-400">Внутренняя реклама</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-sky-400/30" />
          <span className="text-xs text-slate-400">Остаток</span>
        </div>
      </div>
    </div>
  );
}

function FunnelChart({ data }) {
  return (
    <svg viewBox="0 0 200 350" className="w-full h-96">
      <defs>
        <linearGradient id="funnelGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="funnelGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="funnelGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="funnelGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="funnelGradient5" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>

      {data.map((stage, index) => {
        const y = index * 60 + 10;
        const width = 180 - (index * 28);
        const x = (200 - width) / 2;
        const nextWidth = index < data.length - 1 ? 180 - ((index + 1) * 28) : width;
        const nextX = (200 - nextWidth) / 2;

        return (
          <g key={index}>
            {/* Funnel segment */}
            <path
              d={`M ${x} ${y} L ${x + width} ${y} L ${nextX + nextWidth} ${y + 50} L ${nextX} ${y + 50} Z`}
              fill={`url(#funnelGradient${index + 1})`}
              opacity="0.8"
              className="hover:opacity-100 transition-opacity cursor-pointer"
            />
            
            {/* Label */}
            <text
              x="100"
              y={y + 25}
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontWeight="600"
            >
              {stage.stage}
            </text>
            <text
              x="100"
              y={y + 40}
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              {stage.value.toLocaleString()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}