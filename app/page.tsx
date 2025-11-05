export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">РусТир</div>
            <nav className="nav">
              <a href="#about">О нас</a>
              <a href="#services">Услуги</a>
              <a href="#locations">Тиры</a>
              <a href="#contact" className="cta-button">Связаться</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Профессиональное<br />
              <span className="highlight">управление тирами</span>
            </h1>
            <p>
              Ведущий оператор стрелковых тиров на территории России.
              Безопасность, профессионализм, современное оборудование.
            </p>
            <div className="hero-buttons">
              <a href="#locations" className="btn-primary">Наши тиры</a>
              <a href="#contact" className="btn-secondary">Получить консультацию</a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Тиров по России</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15</span>
                <span className="stat-label">Лет опыта</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500K+</span>
                <span className="stat-label">Довольных клиентов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">О компании</h2>
          <p className="section-subtitle">
            РусТир — лидер в сфере управления стрелковыми тирами с 15-летней историей успеха
          </p>
          <div className="about-grid">
            <div className="about-card">
              <span className="about-icon">🎯</span>
              <h3>Высокие стандарты</h3>
              <p>
                Все наши тиры соответствуют самым строгим требованиям безопасности
                и оснащены современным оборудованием мирового класса.
              </p>
            </div>
            <div className="about-card">
              <span className="about-icon">🏆</span>
              <h3>Профессионализм</h3>
              <p>
                Команда опытных инструкторов и администраторов с многолетним
                стажем и глубокими знаниями в области стрелкового спорта.
              </p>
            </div>
            <div className="about-card">
              <span className="about-icon">🔒</span>
              <h3>Безопасность превыше всего</h3>
              <p>
                Строгое соблюдение всех норм безопасности, регулярные проверки
                оборудования и обучение персонала по новейшим стандартам.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Наши услуги</h2>
          <p className="section-subtitle">
            Полный спектр услуг для любителей стрелкового спорта и профессионалов
          </p>
          <div className="services-grid">
            <div className="service-card">
              <span className="service-icon">🎯</span>
              <h3>Стрельба для начинающих</h3>
              <p>
                Обучение основам стрельбы с опытным инструктором.
                Безопасность и правильная техника с первого занятия.
              </p>
            </div>
            <div className="service-card">
              <span className="service-icon">💪</span>
              <h3>Тренировки для профи</h3>
              <p>
                Специализированные программы для опытных стрелков.
                Улучшение техники и отработка навыков.
              </p>
            </div>
            <div className="service-card">
              <span className="service-icon">🎓</span>
              <h3>Курсы инструкторов</h3>
              <p>
                Профессиональное обучение для будущих инструкторов
                по стрелковому делу с выдачей сертификата.
              </p>
            </div>
            <div className="service-card">
              <span className="service-icon">🎉</span>
              <h3>Корпоративные мероприятия</h3>
              <p>
                Организация тимбилдингов, мероприятий и соревнований
                для компаний любого размера.
              </p>
            </div>
            <div className="service-card">
              <span className="service-icon">🏅</span>
              <h3>Соревнования</h3>
              <p>
                Проведение турниров различного уровня — от любительских
                до профессиональных чемпионатов.
              </p>
            </div>
            <div className="service-card">
              <span className="service-icon">🔧</span>
              <h3>Аренда оборудования</h3>
              <p>
                Широкий выбор оружия и аксессуаров для аренды.
                Всё необходимое оборудование на месте.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="locations">
        <div className="container">
          <h2 className="section-title">Наши тиры</h2>
          <p className="section-subtitle">
            Современные стрелковые комплексы в крупнейших городах России
          </p>
          <div className="locations-grid">
            <div className="location-card">
              <div className="location-image">🏛️</div>
              <div className="location-content">
                <h3>Москва</h3>
                <p>📍 ул. Профсоюзная, 125</p>
                <p>📞 +7 (495) 123-45-67</p>
                <div className="location-features">
                  <span className="feature-tag">10 дорожек</span>
                  <span className="feature-tag">25м</span>
                  <span className="feature-tag">Пистолеты</span>
                  <span className="feature-tag">Винтовки</span>
                </div>
              </div>
            </div>
            <div className="location-card">
              <div className="location-image">⚓</div>
              <div className="location-content">
                <h3>Санкт-Петербург</h3>
                <p>📍 пр. Обуховской Обороны, 86</p>
                <p>📞 +7 (812) 234-56-78</p>
                <div className="location-features">
                  <span className="feature-tag">12 дорожек</span>
                  <span className="feature-tag">50м</span>
                  <span className="feature-tag">Пистолеты</span>
                  <span className="feature-tag">Винтовки</span>
                  <span className="feature-tag">Карабины</span>
                </div>
              </div>
            </div>
            <div className="location-card">
              <div className="location-image">🏭</div>
              <div className="location-content">
                <h3>Екатеринбург</h3>
                <p>📍 ул. Сибирский тракт, 45</p>
                <p>📞 +7 (343) 345-67-89</p>
                <div className="location-features">
                  <span className="feature-tag">8 дорожек</span>
                  <span className="feature-tag">25м</span>
                  <span className="feature-tag">Пистолеты</span>
                  <span className="feature-tag">Винтовки</span>
                </div>
              </div>
            </div>
            <div className="location-card">
              <div className="location-image">🌊</div>
              <div className="location-content">
                <h3>Казань</h3>
                <p>📍 ул. Декабристов, 156</p>
                <p>📞 +7 (843) 456-78-90</p>
                <div className="location-features">
                  <span className="feature-tag">6 дорожек</span>
                  <span className="feature-tag">25м</span>
                  <span className="feature-tag">Пистолеты</span>
                </div>
              </div>
            </div>
            <div className="location-card">
              <div className="location-image">🏔️</div>
              <div className="location-content">
                <h3>Новосибирск</h3>
                <p>📍 ул. Кирова, 78</p>
                <p>📞 +7 (383) 567-89-01</p>
                <div className="location-features">
                  <span className="feature-tag">10 дорожек</span>
                  <span className="feature-tag">50м</span>
                  <span className="feature-tag">Пистолеты</span>
                  <span className="feature-tag">Винтовки</span>
                </div>
              </div>
            </div>
            <div className="location-card">
              <div className="location-image">🌆</div>
              <div className="location-content">
                <h3>Краснодар</h3>
                <p>📍 ул. Красная, 234</p>
                <p>📞 +7 (861) 678-90-12</p>
                <div className="location-features">
                  <span className="feature-tag">8 дорожек</span>
                  <span className="feature-tag">25м</span>
                  <span className="feature-tag">Пистолеты</span>
                  <span className="feature-tag">Винтовки</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Свяжитесь с нами</h2>
          <p className="section-subtitle">
            Готовы ответить на все ваши вопросы и помочь выбрать подходящий тир
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h3>Телефон</h3>
              <p><a href="tel:+78001234567">8 (800) 123-45-67</a></p>
              <p>Бесплатно по России</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p><a href="mailto:info@rustir.ru">info@rustir.ru</a></p>
              <p>Ответим в течение 24 часов</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <h3>Режим работы</h3>
              <p>Пн-Пт: 10:00 - 22:00</p>
              <p>Сб-Вс: 09:00 - 23:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>РусТир</h4>
              <p>
                Ведущий оператор стрелковых тиров в России.
                Профессионализм, безопасность, качество.
              </p>
            </div>
            <div className="footer-section">
              <h4>Быстрые ссылки</h4>
              <a href="#about">О нас</a>
              <a href="#services">Услуги</a>
              <a href="#locations">Тиры</a>
              <a href="#contact">Контакты</a>
            </div>
            <div className="footer-section">
              <h4>Информация</h4>
              <a href="#">Лицензии</a>
              <a href="#">Правила безопасности</a>
              <a href="#">Цены</a>
              <a href="#">Вакансии</a>
            </div>
            <div className="footer-section">
              <h4>Контакты</h4>
              <p>📞 8 (800) 123-45-67</p>
              <p>✉️ info@rustir.ru</p>
              <p>📍 Москва, Россия</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 РусТир. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
