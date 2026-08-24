import { motion } from 'framer-motion';

function Header({ navItems, activeSection, onNavigate, showProfile, avatar }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/70 bg-gray-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-3 md:px-8">
        <motion.div
          initial={false}
          animate={showProfile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -8, scale: 0.92 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="hidden items-center gap-3 md:flex"
        >
          <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-700 bg-gray-900">
            <img src={avatar} alt="Foto de Jostyn Muentes" className="h-full w-full object-cover" />
          </div>
          <p className="text-sm font-semibold text-gray-200">Jostyn Muentes</p>
        </motion.div>

        <div className="flex w-full flex-wrap items-center justify-center gap-2 rounded-2xl bg-gray-900/70 p-2 md:w-auto md:flex-nowrap md:gap-3 md:rounded-full md:px-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`min-w-[132px] flex-1 rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 sm:flex-none sm:text-sm md:min-w-0 md:px-5 md:text-base ${
                  isActive
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="hidden md:block" />
      </nav>
    </header>
  );
}

export default Header;
