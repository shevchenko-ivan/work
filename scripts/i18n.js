// Ivan Shevchenko — portfolio i18n
// Mini dictionary-based translation, persisted in localStorage.

const TRANSLATIONS = {
  ua: {
    // ── Nav ───────────────────────────────────────────────
    'nav.available':           'Доступний · 5 год перетин з ЄС / США-Схід',
    'nav.openToRoles':         'Відкритий до senior / lead ролей · віддалено / Валенсія',
    'nav.allVariations':       '← Усі варіації',

    // ── Landing ───────────────────────────────────────────
    'landing.title.line1':     'Чотири кути.',
    'landing.title.line2':     'Одна людина.',
    'landing.lede':            'Як саме мене представити — залежить від розмови. Вибери варіацію, що підходить, поділись посиланням і пропусти «дай я знов розкажу свій бекграунд».',
    'landing.group.freelance': 'Фріланс — Upwork &amp; разові проєкти',
    'landing.group.fulltime':  'Full-time — senior &amp; lead ролі',

    'landing.card.fl-saas.title':  'SaaS і дизайн-системи',
    'landing.card.fl-saas.desc':   'Для Upwork-брифів на SaaS, CRM, дашборди та адмінки. Веде Freight Genie (5★) і Silpo ERM.',
    'landing.card.fl-mob.title':   'Мобільні застосунки',
    'landing.card.fl-mob.desc':    'Для Upwork-брифів на мобайл і cross-platform. Веде Silpo Flutter app і BOS mobile patterns.',
    'landing.card.ft-saas.title':  'Enterprise SaaS, ERM і DS',
    'landing.card.ft-saas.desc':   'Для senior / lead Product Designer ролей на складних B2B-платформах. Веде Silpo ERM (−34% помилок) і BOS DS.',
    'landing.card.ft-mob.title':   'Мобайл і дизайн-системи',
    'landing.card.ft-mob.desc':    'Для ролей з реальним мобайл-компонентом. Веде Silpo cross-platform DS і BOS mobile patterns.',

    'landing.footer.copy':     '© Іван Шевченко · Валенсія',

    // ── Hero: Freelance / SaaS ────────────────────────────
    'hero.fl-saas.kicker':     'Фріланс · SaaS і дизайн-системи',
    'hero.fl-saas.title':      'Я проектую <em>мульти-рольні SaaS</em>, які виходять і залишаються консистентними.',
    'hero.fl-saas.lede':       'Senior Product Designer з 7+ роками в enterprise B2B — дашборди, адмінки, мульти-рольні CRM і дизайн-системи, що їх тримають разом. П\'ять зірок на Upwork. Зараз веду BOS design system у TemaBit (Fozzy Group).',
    'hero.cta.work':           'Подивитись роботи →',
    'hero.cta.contactSecondary': 'або перейти до контактів',

    // ── Hero: Freelance / Mobile ──────────────────────────
    'hero.fl-mob.kicker':      'Фріланс · Мобільні застосунки',
    'hero.fl-mob.title':       'Я проектую <em>мобільні продукти</em>, що поважають платформу і користувача.',
    'hero.fl-mob.lede':        'Senior Product Designer з 7+ роками в consumer mobile і cross-platform дизайн-системах. Збудував фундамент мобайл-апки Silpo на Flutter і думаю native-first — від гептиків і bottom sheets до native календарів та accessibility.',
    'hero.cta.workMobile':     'Подивитись мобайл-роботи →',

    // ── Hero: Full-time / SaaS ────────────────────────────
    'hero.ft-saas.kicker':     'Full-time · Enterprise SaaS і дизайн-системи',
    'hero.ft-saas.title':      'Senior Product Designer, що перетворює <em>enterprise-складність</em> на запущений продукт.',
    'hero.ft-saas.lede':       '7+ років в enterprise B2B у топ-5 ритейлері України Fozzy Group. Спроектував 9-модульну ERM-платформу, що зменшила операційні помилки на 34%, заснував Silpo Design System без top-down мандата, зараз веду BOS design system для B2B-платформи TemaBit.',
    'hero.cta.aboutSecondary': 'або читати про мене',

    // ── Hero: Full-time / Mobile ──────────────────────────
    'hero.ft-mob.kicker':      'Full-time · Мобайл і дизайн-системи',
    'hero.ft-mob.title':       '<em>Mobile-aware</em> сеньйор, який може вести систему, а не лише ship-ити екран.',
    'hero.ft-mob.lede':        'Senior Product Designer з глибоким cross-platform DS досвідом. Заснував Silpo Design System, що покриває веб і consumer Flutter-апку, і зараз веду BOS design system у TemaBit — де мобайл-патерни вважаються first-class citizens, а не desktop afterthought-ами.',

    // ── Status: available / open ──────────────────────────
    'status.available':        'Доступний · 5 год перетин з ЄС / США-Схід',
    'status.openLead':         'Відкритий до senior / lead ролей · віддалено / Валенсія',

    // ── Facts labels ──────────────────────────────────────
    'fact.basedIn':            'Базуюсь',
    'fact.workingHours':       'Робочі години',
    'fact.upwork':             'Upwork',
    'fact.bestFit':            'Найкраще підходить',
    'fact.role':               'Роль',
    'fact.years':              'Років у ремеслі',
    'fact.domain':             'Домен',
    'fact.platforms':          'Платформи',
    'fact.specialty':          'Спеціалізація',
    'fact.mobilePlatforms':    'Мобільні платформи',

    'fact.val.spain':          'Валенсія, Іспанія 🇪🇸',
    'fact.val.cet':            'CET · async-friendly',
    'fact.val.upwork':         '★★★★★ · 4 відгуки',
    'fact.val.saasFit':        'SaaS · CRM · Адмінки · DS',
    'fact.val.mobileFit':      'Consumer app · DS · A11y',
    'fact.val.platforms':      'iOS · Android · Flutter',
    'fact.val.seniorPD':       'Senior PD · Lead-track',
    'fact.val.years':          '7+',
    'fact.val.b2b':            'B2B · Enterprise · DS',
    'fact.val.mobileDS':       'Мобайл DS · Accessibility',

    // ── Section eyebrows / titles ─────────────────────────
    'section.selectedWork':    'Вибрані роботи',
    'section.featuredWork':    'Featured роботи',
    'section.howIWork':        'Як я працюю',
    'section.howIApproachMobile': 'Як я підходжу до мобайла',
    'section.whatIBring':      'Що приношу в senior / lead роль',
    'section.testimonial':     'Відгук',
    'section.testimonials':    'Відгуки',

    'section.fl-saas.title':   'П\'ять проєктів, що показують, як я працюю над SaaS.',
    'section.fl-saas.desc':    'Кожен кейс нижче — те, що я вів або вів спільно end-to-end: ресерч, IA, UI, дизайн-система і передача в інженерію.',
    'section.fl-mob.title':    'Чотири проєкти — і всі з мобільним серцем.',
    'section.fl-mob.desc':     'Мобайл-патерни, які я реально випустив, — не exploration-файли. Consumer Flutter, enterprise mobile patterns, моя власна indie-апка.',
    'section.ft-saas.title':   'Чотири кейси, що показують, яким lead-дизайнером я стаю.',
    'section.ft-saas.desc':    'Enterprise scope, координація між командами, дизайн-системи як продукти — не лише як деліверебли. Кожен проєкт нижче — мій lead чи co-lead end-to-end.',
    'section.ft-mob.title':    'Чотири кейси, де mobile DS thinking зробив різницю.',
    'section.ft-mob.desc':     'Від consumer Flutter-апки в топ-5 ритейлера України до моєї власної indie-апки про музику — mobile-first дизайн, cross-platform системи і accessibility з першого дня.',

    'section.threeThings':     'Три речі, які я приношу на кожен SaaS-проєкт.',
    'section.threePrinciples': 'Три принципи, з якими я підходжу до кожного мобайл-проєкту.',
    'section.threeAreas':      'Три зони, де у мене skin in the game — не лише думки.',
    'section.threeAreasMobile': 'Три зони, де видно mobile DS thinking.',

    // ── Pillars: SaaS freelance ───────────────────────────
    'pillar.multiRole.title':  'Мульти-рольне SaaS-мислення',
    'pillar.multiRole.body':   'Я бачу дашборди як workflow, не як екрани. Ролі, дозволи, edge-стани і щільність даних — спершу. Пікселі — потім.',
    'pillar.dsShips.title':    'Дизайн-системи, що реально виходять',
    'pillar.dsShips.body':     'Токени, Storybook, governance і contribution-флоу — побудовані так, щоб інженери шипали швидше, а не щоб дизайнери милувались Figma-бібліотеками.',
    'pillar.metrics.title':    'Пріоритизація на основі метрик',
    'pillar.metrics.body':     'RICE, евристики і stakeholder-інтерв\'ю задають scope. Я скажу, що треба відрізати, а не лише що проектувати.',

    // ── Pillars: Mobile freelance ─────────────────────────
    'pillar.respectPlatform.title': 'Повага до платформи',
    'pillar.respectPlatform.body':  'Native-жести, native-пікери, native-haptic. Найкраще «кастомне» рішення зазвичай те, що йде за iOS HIG або Material — і знає, коли ламати правило свідомо.',
    'pillar.crossPlatform.title':   'Cross-platform свобода',
    'pillar.crossPlatform.body':    'Шипав на Flutter, працював з React Native командами. Думаю шерд-патернами спершу, platform-specific delta — потім.',
    'pillar.a11y.title':            'Accessibility за замовчуванням',
    'pillar.a11y.body':             'WCAG 2.1 AA для мене — не фінальний чеклист. Це лежить у токенах кольору, touch-targets і motion specs з першого компоненту.',

    // ── Pillars: Full-time SaaS ───────────────────────────
    'pillar.leadWithoutTitle.title': 'Лідерство без титулу',
    'pillar.leadWithoutTitle.body':  'Я вже координую дизайнерів, вирішую крос-командні конфлікти і формую DS-процеси. Наступний крок — формалізувати ownership і ритуали. Саме це я і будую цього року.',
    'pillar.complexity.title':       'Enterprise-складність → простий UI',
    'pillar.complexity.body':        'Дев\'ять ERM-модулів, 4 B2B-продукти, десятки стейкхолдерів. Я перекладаю бізнес-процеси в інтерфейси, якими оператори справді користуються з задоволенням.',
    'pillar.dsAsProduct.title':      'Дизайн-системи як продукти',
    'pillar.dsAsProduct.body':       'DS — не Figma-бібліотека, а продукт з користувачами, беклогом, релізним каденсом і моделлю контрибуцій. Саме так я і ставлюсь до неї щодня.',

    // ── Pillars: Full-time Mobile ─────────────────────────
    'pillar.mobileAware.title':      'Mobile-aware DS-архітектура',
    'pillar.mobileAware.body':       'Touch-targets, native-пікери, жести, motion-specs — зашиті в токени і компоненти, не приклеєні в кінці. Триступенева абстракція дозволяє одній DS подорожувати від веба до Flutter.',
    'pillar.crossPlatformThinking.title': 'Cross-platform думка з першого дня',
    'pillar.crossPlatformThinking.body':  'Думаю шерд-патернами спершу, platform delta — потім. Material і HIG — стартові точки, не євангеліє. Native — дефолт, custom — свідомий вибір.',
    'pillar.leadHandsOn.title':           'Lead-роль + руки в коді',
    'pillar.leadHandsOn.body':            'Веду крос-командні ритуали, пишу ADR і формую governance — і досі шиплю пікселі. Lead, який не відкривав Figma цей квартал, — не той lead, яким хочу бути я.',

    // ── Contact ───────────────────────────────────────────
    'contact.fl-saas.title':   'Поговорімо про твій <em>SaaS</em>.',
    'contact.fl-saas.lede':    'Скинь короткий бриф — продукт, роль, стадія, дедлайн. Зазвичай відповідаю протягом робочого дня.',
    'contact.fl-mob.title':    'Маєш <em>мобайл-апку</em>, яку треба випустити?',
    'contact.fl-mob.lede':     'Скинь бриф — платформа, стадія, команда, дедлайн. Відповім протягом робочого дня з думками щодо scope і підходу.',
    'contact.ft-saas.title':   'Шукаєш <em>senior або lead</em> дизайнера?',
    'contact.ft-saas.lede':    'Відкритий до senior і lead Product Designer ролей — віддалено або гібридно в Валенсії. Кидай повідомлення, відповім протягом робочого дня.',
    'contact.ft-mob.title':    'Наймаєш <em>mobile-aware</em> сеньйора?',
    'contact.ft-mob.lede':     'Відкритий до senior і lead Product Designer ролей з реальним мобайл-компонентом — віддалено або гібридно в Валенсії.',


    // ── Footer ────────────────────────────────────────────
    'foot.copy':               '© Іван Шевченко · Senior Product Designer',
    'foot.otherVariations':    'Інші варіації →',

    // ── Freelance closing block (Upwork-safe, no contacts) ─
    'fl.close.title':          'Знайшли мене через <em>Upwork</em>?',
    'fl.close.body':           'Тоді ви вже знаєте, де мене знайти. Надішліть бриф через ваш Upwork job post або інвайт — зазвичай відповідаю протягом робочого дня.',

    // ── Section titles & descriptions ────────────────────
    'sec.fl-saas.workTitle':   'П\'ять проєктів, що показують, як я працюю над SaaS.',
    'sec.fl-saas.workDesc':    'Кожен кейс нижче — те, що я вів або вів спільно end-to-end: ресерч, IA, UI, дизайн-система і передача в інженерію.',
    'sec.fl-saas.howTitle':    'Три речі, які я приношу на кожен SaaS-проєкт.',

    'sec.fl-mob.workTitle':    'Чотири проєкти — і всі з мобільним серцем.',
    'sec.fl-mob.workDesc':     'Мобайл-патерни, які я реально випустив, — не exploration-файли. Consumer Flutter, enterprise mobile patterns, моя власна indie-апка.',
    'sec.fl-mob.howTitle':     'Три принципи, з якими я підходжу до кожного мобайл-проєкту.',

    'sec.ft-saas.workTitle':   'Чотири кейси, що показують, яким lead-дизайнером я стаю.',
    'sec.ft-saas.workDesc':    'Enterprise scope, координація між командами, дизайн-системи як продукти — не лише як деліверебли. Кожен проєкт нижче — мій lead чи co-lead end-to-end.',
    'sec.ft-saas.aboutTitle':  'Три зони, де у мене skin in the game — не лише думки.',

    'sec.ft-mob.workTitle':    'Чотири кейси, де mobile DS thinking зробив різницю.',
    'sec.ft-mob.workDesc':     'Від consumer Flutter-апки в топ-5 ритейлера України до моєї власної indie-апки про музику — mobile-first дизайн, cross-platform системи і accessibility з першого дня.',
    'sec.ft-mob.aboutTitle':   'Три зони, де видно mobile DS thinking.',

    // ── Pillar bodies (доповнюю те, що було) ─────────────
    'pillar.body.multiRole':   'Я бачу дашборди як workflow, не як екрани. Ролі, дозволи, edge-стани і щільність даних — спершу. Пікселі — потім.',
    'pillar.body.dsShips':     'Токени, Storybook, governance і contribution-флоу — побудовані так, щоб інженери шипали швидше, а не щоб дизайнери милувались Figma-бібліотеками.',
    'pillar.body.metrics':     'RICE, евристики і stakeholder-інтерв\'ю задають scope. Я скажу, що треба відрізати, а не лише що проектувати.',
    'pillar.body.respectPlatform': 'Native-жести, native-пікери, native-haptic. Найкраще «кастомне» рішення зазвичай те, що йде за iOS HIG або Material — і знає, коли ламати правило свідомо.',
    'pillar.body.crossPlatform':   'Шипав на Flutter, працював з React Native командами. Думаю шерд-патернами спершу, platform-specific delta — потім.',
    'pillar.body.a11y':            'WCAG 2.1 AA для мене — не фінальний чеклист. Це лежить у токенах кольору, touch-targets і motion specs з першого компоненту.',
    'pillar.body.leadWithoutTitle': 'Я вже координую дизайнерів, вирішую крос-командні конфлікти і формую DS-процеси. Наступний крок — формалізувати ownership і ритуали. Саме це я і будую цього року.',
    'pillar.body.complexity':       'Дев\'ять ERM-модулів, 4 B2B-продукти, десятки стейкхолдерів. Я перекладаю бізнес-процеси в інтерфейси, якими оператори справді користуються з задоволенням.',
    'pillar.body.dsAsProduct':      'DS — не Figma-бібліотека, а продукт з користувачами, беклогом, релізним каденсом і моделлю контрибуцій. Саме так я і ставлюсь до неї щодня.',
    'pillar.body.mobileAware':      'Touch-targets, native-пікери, жести, motion-specs — зашиті в токени і компоненти, не приклеєні в кінці. Триступенева абстракція дозволяє одній DS подорожувати від веба до Flutter.',
    'pillar.body.crossPlatformThinking': 'Думаю шерд-патернами спершу, platform delta — потім. Material і HIG — стартові точки, не євангеліє. Native — дефолт, custom — свідомий вибір.',
    'pillar.body.leadHandsOn':      'Веду крос-командні ритуали, пишу ADR і формую governance — і досі шиплю пікселі. Lead, який не відкривав Figma цей квартал, — не той lead, яким хочу бути я.',

    // ── Quotes ───────────────────────────────────────────
    'quote.dana':              'Чудовий спеціаліст — врівноважений, сприймає критику й вміє аргументувати свою позицію. Soft skills, які дизайнеру справді потрібні.',
    'quote.dana.cite':         'Дана Желєзняк · Data-driven product designer',
    'quote.anna':              'Іван глибоко аналізує матеріал і чітко артикулює свої думки. Легко адаптується до різних задач і швидко знаходить цікаві рішення.',
    'quote.anna.cite':         'Анна Єжель · UX/UI Designer, викладач ITEA',
    'quote.anna.short':        'Іван виділився як спеціаліст, який глибоко аналізує матеріал і вміє чітко донести думку. Легко адаптується, а ідеї мають чіткий логічний зв\'язок.',

    // ── Section quote / testimonial ──────────────────────
    'sec.testimonial':         'Відгук',
    'sec.testimonials':        'Відгуки',

    // ── Case sections — common eyebrows ──────────────────
    'case.eyebrow.context':    'Контекст',
    'case.eyebrow.approach':   'Підхід',
    'case.eyebrow.method':     'Метод',
    'case.eyebrow.architecture': 'Архітектура',
    'case.eyebrow.what':       'Що я зробив',
    'case.eyebrow.shipping':   'Що я зараз шиплю',
    'case.eyebrow.outcomes':   'Результати',
    'case.eyebrow.outcome':    'Результат',
    'case.eyebrow.outcomeSo':  'Результат (поки що)',
    'case.eyebrow.findings':   'Знахідки',
    'case.eyebrow.recommendations': 'Рекомендації',
    'case.eyebrow.learnings':  'Уроки',
    'case.eyebrow.learningsSoFar': 'Уроки поки що',
    'case.eyebrow.related':    'Дотичні',

    'case.related.also':       'Якщо сподобалось, подивись також…',

    // ── Case facts labels ────────────────────────────────
    'caseFacts.year':          'Рік',
    'caseFacts.company':       'Компанія',
    'caseFacts.client':        'Клієнт',
    'caseFacts.role':          'Роль',
    'caseFacts.domain':        'Домен',
    'caseFacts.scope':         'Скоуп',
    'caseFacts.platforms':     'Платформи',
    'caseFacts.platform':      'Платформа',
    'caseFacts.products':      'Продукти, що обслуговуються',
    'caseFacts.surfaces':      'Поверхонь у аудиті',
    'caseFacts.stage':         'Стадія',
    'caseFacts.stack':         'Стек',
    'caseFacts.status':        'Статус',

    // ── Contact (additional links) ───────────────────────
    'contact.backToPortfolio': '← Назад до портфоліо',

    // ── Hero & section additional bits ───────────────────
    'hero.replyWithinDay':     'Зазвичай відповідаю протягом робочого дня.',

    // ── Freight Genie case (slug: freight-genie) ─────────
    'case.fg.title':           'Freight Genie',
    'case.fg.sub':             'Multi-role SaaS CRM для логістики вантажоперевезень. Дашборди й складні воркфлоу для диспетчерів, водіїв та back-office — отримав п\'ять зірок на Upwork і фразу, яку клієнти потім цитують у своїх запитах.',
    'case.fg.fact.year':       '2024',
    'case.fg.fact.client':     'Upwork (конфіденційно)',
    'case.fg.fact.role':       'Product Designer',
    'case.fg.fact.domain':     'Логістика · Вантажоперевезення',

    'case.fg.context.title':   'Freight-CRM, що переріс свій ранній UI.',
    'case.fg.context.body1':   'Клієнт масштабував freight-management продукт і зіткнувся зі знайомою проблемою — одні й ті ж екрани обслуговували надто різні ролі. Диспетчерам потрібен був щільний, скан-френдлі вигляд; водіям — спрощений, мобільно-зручний; back-office хотів реконсиляції та звітів. Початковий UI намагався догодити всім — і не догодив нікому.',
    'case.fg.context.body2':   'Моя задача — переробити SaaS-веб-додаток навколо реальних рольових флоу, і встигнути в межах фіксованої ціни на Upwork.',

    'case.fg.approach.title':  'Спочатку рольові флоу, потім екрани.',
    'case.fg.approach.body':   'Починав з боку workflow, а не зі скрінів. Для кожної ролі я фіксував канонічний ланцюг задач і потім питав: який мінімальний інтерфейс це підтримує?',
    'case.fg.list1.s1':        'Маппінг ролей',
    'case.fg.list1.s1sub':     'Диспетчер, водій, back-office — точки входу, основні дії, потреби в даних.',
    'case.fg.list1.s2':        'Інформаційна архітектура',
    'case.fg.list1.s2sub':     'Навігаційна модель, що масштабується між ролями, не змушуючи одну жити в ментальній моделі іншої.',
    'case.fg.list1.s3':        'Дашборд-лейаути',
    'case.fg.list1.s3sub':     'Стартові екрани під ролі — KPI-картки для back-office, диспатч-борд для ops, маршрут для водіїв.',
    'case.fg.list1.s4':        'Workflow-екрани',
    'case.fg.list1.s4sub':     'Створення замовлення, диспатч, апдейти статусу, реконсиляція — спроектовані як флоу, не як ізольовані форми.',
    'case.fg.list1.s5':        'Хендофф-пакет',
    'case.fg.list1.s5sub':     'Стани компонентів, edge-кейси, empty-стани та інженерні нотатки — готові для dev-команди клієнта.',

    'case.fg.what.title':      'Три рольові продукти всередині однієї CRM.',
    'case.fg.what.s1':         'Дашборд диспетчера',
    'case.fg.what.s1sub':      'Live ops-борд з високою щільністю даних, фільтрується за статусом, регіоном і водієм.',
    'case.fg.what.s2':         'View для водія',
    'case.fg.what.s2sub':      'Mobile-first, обмежений до задач дня, деталей маршруту й оновлення статусу одним тапом.',
    'case.fg.what.s3':         'Інструменти back-office',
    'case.fg.what.s3sub':      'Управління замовленнями, реконсиляція, звітність та експорти — навколо batch-дій і аудит-трейлів.',
    'case.fg.what.s4':         'Спільні стани компонентів',
    'case.fg.what.s4sub':      'Empty, loading, error і edge-стани — визначені для кожної workflow-поверхні.',

    'case.fg.outcome.title':   'П\'ятизірковий відгук, що став шаблоном для пропозалів.',
    'case.fg.outcome.body':    'Клієнт закрив проєкт п\'ятизірковим відгуком на Upwork — моїм першим на платформі. Фраза, яку він тоді написав, — каноніч-ний абзац, з якого я тепер починаю пропозали на схожі брифи.',
    'case.fg.outcome.m1':      'Рейтинг на Upwork',
    'case.fg.outcome.m2':      'Перепроектовано ролей',
    'case.fg.outcome.m3':      'Поставка з фіксованою ціною',

    'case.fg.learnings.title': 'Що я б взяв з собою у наступну freight-CRM.',
    'case.fg.l.s1':            'Ролі, а не персони',
    'case.fg.l.s1sub':         'У логістичному SaaS роль у моменті важить більше, ніж персона. Проектуй під ту роль, у якій вони зараз.',
    'case.fg.l.s2':            'Щільність даних — це фіча',
    'case.fg.l.s2sub':         'Для диспетчерів менше білого простору й більше видимих даних — правильна відповідь. Мобільні відступи тут не пасують.',
    'case.fg.l.s3':            'Зміна статусу — це й є продукт',
    'case.fg.l.s3sub':         'Вся CRM — це машина станів. Кожен workflow-екран — це місце, де статус переходить.',

    // ── Silpo ERM ────────────────────────────────────────
    'case.erm.title':          'Silpo ERM — enterprise-платформа з 9 модулів.',
    'case.erm.sub':            'Централізована ERM-система для топ-5 ритейлера України, що покриває все — від адміністрування замовлень і колаборації з постачальниками до логістики, лояльності та керування промо-акціями. Дев\'ять модулів, десятки стейкхолдерів, одна послідовна мова інтерфейсу.',
    'case.erm.fact.year':      '2023',
    'case.erm.fact.company':   'Fozzy Group · Silpo',
    'case.erm.fact.role':      'Lead Product Designer',
    'case.erm.fact.scope':     '9 модулів, мульти-команда',

    'case.erm.context.title':  'Одна платформа на цілого ритейлера.',
    'case.erm.context.body1':  'Silpo — частина Fozzy Group, 5-ї за розміром приватної компанії України і оператора 830+ магазинів. Внутрішні e-commerce операції розрослись по різних інструментах і командах: маркетологи запускали промо в одному місці, бухгалтери звіряли в іншому, кур\'єри працювали в третьому, а BA витрачали тижні, перекладаючи між ними.',
    'case.erm.context.body2':  'ERM мав це все об\'єднати — адміністрування замовлень, колаборацію з постачальниками, логістику, промо, лояльність — в одну платформу зі спільною мовою інтерфейсу через дев\'ять бізнес-модулів.',

    'case.erm.approach.title': 'Scenario maps і atomic design плюс багато слухання.',
    'case.erm.approach.body':  'Я підключався після того, як BA і product-owner-и визначали, що оптимізовувати — я брав їхні вимоги і перекладав на щось, чим оператори справді хотіли користуватись. Інструментарій звичний, але масштаб незвичний.',
    'case.erm.list1.s1':       'Дослідження стейкхолдерів і користувачів',
    'case.erm.list1.s1sub':    'Інтерв\'ю та опитування з менеджерами і фронтлайн-співробітниками з різних відділів. Юзабіліті-тести на прототипах.',
    'case.erm.list1.s2':       'Конкурентний аналіз',
    'case.erm.list1.s2sub':    'Shopify, Etsy, Odoo — за IA-патернами, щільністю дашбордів і конвенціями адмін-інструментів.',
    'case.erm.list1.s3':       'Scenario maps',
    'case.erm.list1.s3sub':    'Структурував кожен бізнес-процес у навігаційні флоу до будь-яких пікселів.',
    'case.erm.list1.s4':       'Atomic дизайн-система',
    'case.erm.list1.s4sub':    'Спільний UI-кіт, застосований у всіх дев\'яти модулях — стандартизовані компоненти, швидша поставка для інженерії.',
    'case.erm.list1.s5':       'Крос-функціональні ритуали',
    'case.erm.list1.s5sub':    'Тижневі sync між командами, Jira + Confluence + Slack як джерело правди, Scrum-каденс.',

    'case.erm.what.title':     'Дев\'ять модулів, одна мова інтерфейсу.',
    'case.erm.what.s1':        'E-commerce',
    'case.erm.what.s1sub':     'Замовлення (CRUD + статус-трекінг) і промо (інструменти кампаній для маркетологів).',
    'case.erm.what.s2':        'GEO',
    'case.erm.what.s2sub':     'Робота з адресами і точність доставки.',
    'case.erm.what.s3':        'Billing',
    'case.erm.what.s3sub':     'Автоматизація бухгалтерії, інвойсинг, моніторинг платежів.',
    'case.erm.what.s4':        'CORE',
    'case.erm.what.s4sub':     'Каталог товарів, характеристики, послуги за філією, користувачі.',
    'case.erm.what.s5':        'Payments',
    'case.erm.what.s5sub':     'Транзакції з мерчантами, бізнес-операції.',
    'case.erm.what.s6':        'Loyalty',
    'case.erm.what.s6sub':     'Партнерські програми, B2B-участь, операції.',
    'case.erm.what.s7':        'CityRyder',
    'case.erm.what.s7sub':     'Управління кур\'єрами, маршрутизація, моніторинг, гео-зональне планування, рушій компенсацій.',
    'case.erm.what.s8':        'DAMS',
    'case.erm.what.s8sub':     'Переміщення інвентарю, контроль термінів, KPI-панелі та графіки персоналу.',
    'case.erm.what.s9':        'Profile',
    'case.erm.what.s9sub':     'Співробітники й рольовий доступ.',
    'case.erm.what.body':      'Поверх роботи з модулями я co-lead-ив дизайн-систему, яку використовували всі дев\'ять модулів — і виступав медіатором між дизайнерами, інженерією, QA, PO і BA, коли виникали конфлікти.',
    'case.erm.what.caption':   'Дизайн інтерфейсів у дев\'яти модулях слідував спільній atomic-design DS — однакові компоненти, різна бізнес-логіка.',

    'case.erm.outcome.title':  '34% падіння операційних помилок — і чотири KPI, що рухаються.',
    'case.erm.outcome.body':   'Хедлайн-результат був у зниженні помилок, але й чотири вторинних KPI рушили у правильному напрямку.',
    'case.erm.outcome.m1':     'Операційні помилки',
    'case.erm.outcome.m2':     'Модулів випущено',
    'case.erm.outcome.m3':     'Українська компанія',
    'case.erm.kpi.s1':         'CR — Conversion Rate',
    'case.erm.kpi.s1sub':      'Конверсія замовлення зросла після оптимізації чекауту.',
    'case.erm.kpi.s2':         'TAT — Turnaround Time',
    'case.erm.kpi.s2sub':      'Час обробки замовлення знизився завдяки автоматизації.',
    'case.erm.kpi.s3':         'ABR — Abandonment Rate',
    'case.erm.kpi.s3sub':      'Drop-off зменшено через UX-покращення.',
    'case.erm.kpi.s4':         'NPS',
    'case.erm.kpi.s4sub':      'Показник лояльності клієнтів зріс.',

    'case.erm.learnings.title': 'П\'ять речей, які я б сказав собі в перший день.',
    'case.erm.l.s1':           'Крос-командна комунікація — і є проєкт',
    'case.erm.l.s1sub':        'Коли дев\'ять модулів зачіпають п\'ять відділів — alignment стає deliverable-ом.',
    'case.erm.l.s2':           'Плануй гнучко, шипи ітераційно',
    'case.erm.l.s2sub':        'Багатоступеневий rollout буде переприоритезовано. Будуй ритм для адаптації.',
    'case.erm.l.s3':           'Тестуй на прототипах, а не на проді',
    'case.erm.l.s3sub':        'Ловити IA-проблеми на інтерактивних прототипах — фікс у 10 разів дешевший.',
    'case.erm.l.s4':           'Тренуй операторів',
    'case.erm.l.s4sub':        'Adoption — частина дизайну. Без сесій і підтримки жодний UX-редизайн не приживеться.',
    'case.erm.l.s5':           'Зроби фідбек інструментом',
    'case.erm.l.s5sub':        'Збирай, маршрутизуй, закривай петлю. Інакше він розчиняється.',

    // ── BOS Design System ────────────────────────────────
    'case.bos.title':          'BOS Design System — DS за B2B-платформою.',
    'case.bos.sub':            'Активна дизайн-система, що обслуговує B2B-платформу TemaBit: BitCore IAM (у проді), BitSubscription, BitAuth і Bit Billing. Storybook як джерело правди, тижневі readiness-ритуали, Claude-Skills автоматизації та governance-модель, побудована під крос-командну швидкість.',
    'case.bos.fact.year':      '2026 (активний)',
    'case.bos.fact.company':   'TemaBit (Fozzy Group)',
    'case.bos.fact.role':      'Lead Designer (соло)',
    'case.bos.fact.products':  '4 B2B-продукти',

    'case.bos.context.title':  'DS як продукт, а не як Figma-бібліотека.',
    'case.bos.context.body1':  'TemaBit — IT-підрозділ Fozzy Group, пише ~80% софту холдингу. BOS — її B2B-платформа: BitCore IAM у проді, BitSubscription, BitAuth і Bit Billing — у розробці. Кілька продуктових команд, одна платформова ідентичність і маленька DS-команда, що тримає це разом.',
    'case.bos.context.body2':  'Я веду дизайн-систему, зараз як команда з однієї людини (раніше нас було двоє). Робота — наполовину крафт, наполовину product management: беклог, roadmap, governance, contribution-флоу, lifecycle.',

    'case.bos.approach.title': 'Спершу governance, потім компоненти.',
    'case.bos.approach.body':  'Складна частина DS — не компоненти. Це процеси навколо них. Пріоритизація, прозорість, релізи, change management, accessibility-зобов\'язання.',
    'case.bos.list1.s1':       'Storybook як джерело правди',
    'case.bos.list1.s1sub':    'Спеки компонентів, варіанти, props і код живуть у Storybook — Figma вказує на нього, не навпаки.',
    'case.bos.list1.s2':       'Readiness-трекер',
    'case.bos.list1.s2sub':    'Жива Confluence-таблиця, яку підтримує кастомний Claude Skill (bos-ds-tracker), вбудований у ритуали команди.',
    'case.bos.list1.s3':       'Тижнева автоматизація',
    'case.bos.list1.s3sub':    'Запланована задача підсвічує дизайн-таски без FE і FE-таски без story points — одразу йдуть у рефаймент.',
    'case.bos.list1.s4':       'ADR для дизайн-рішень',
    'case.bos.list1.s4sub':    'Architecture Decision Records роблять trade-off-и явними і зберігають історичний контекст.',
    'case.bos.list1.s5':       'Стадії lifecycle',
    'case.bos.list1.s5sub':    'Planned · In progress · Ready · Deprecated — видимі кожному продуктовому дизайнеру, а не лише DS-команді.',

    'case.bos.what.title':     'Foundations, компоненти, автоматизація.',
    'case.bos.what.s1':        'Foundation-токени',
    'case.bos.what.s1sub':     'Колір сьогодні; spacing, типографіка і radius — заплановані. WCAG 2.1 AA закодований на рівні токенів.',
    'case.bos.what.s2':        'Нові варіанти компонентів',
    'case.bos.what.s2sub':     'Mobile empty state, tab error state, read-only field, Button radius LG (8px), checkbox, filters panel, app switcher, scrollbar.',
    'case.bos.what.s3':        'Випущені у FE',
    'case.bos.what.s3sub':     'Mobile navigation, MoreWindow, grid popover, Select/Textarea/TimePicker/DatePicker (read-only), navigation bar з nested menu, drawer, templates.',
    'case.bos.what.s4':        'Claude Skills',
    'case.bos.what.s4sub':     'bos-ds-tracker, jira-create-task, design-clarify — автоматизації, вбудовані в workflow команди, а не окремі від нього.',
    'case.bos.what.s5':        'Мобайл-патерни як first-class',
    'case.bos.what.s5sub':     'Mobile drawer, mobile navigation, calendar bottom sheet, mobile empty states — не desktop у розтяжку.',

    'case.bos.outcome.title':  'Система, що шипає, і процес, що тримається.',
    'case.bos.outcome.m1':     'B2B-продукти, що обслуговуються',
    'case.bos.outcome.m2':     'Джерело правди (Storybook)',
    'case.bos.outcome.m3':     'Автоматичний readiness-чек',
    'case.bos.outcome.m3v':    'Щотижня',
    'case.bos.outcome.body':   'Глибший результат — якісний. DS зараз працює як продукт зі своїм roadmap, ритмом релізів і моделлю контрибуцій. Продуктові дизайнери бачать, що готове, пропонують зміни і шипають без bottleneck-ів на DS-команді для кожного варіанта.',

    'case.bos.learnings.title': 'Три уроки, які я несу далі.',
    'case.bos.l.s1':           'Storybook перемагає Figma як джерело правди',
    'case.bos.l.s1sub':        'Код — артефакт, який інженери шипають. Спеки, що не живуть у коді, дрифтують за тижні.',
    'case.bos.l.s2':           'Автоматизація — це лідерство в масштабі',
    'case.bos.l.s2sub':        'Тижневий Claude Skill, що нагадує команді, варт більше за той самий нагад від мене вручну у Slack.',
    'case.bos.l.s3':           'Видимість lifecycle розблоковує команди',
    'case.bos.l.s3sub':        'Коли продуктові дизайнери бачать статус, не питаючи, — вони перестають питати. DS-команда повертає собі час на фокус.',

    // ── Silpo Design System ──────────────────────────────
    'case.sds.title':          'Silpo Design System — заснована без top-down мандата.',
    'case.sds.sub':            'Cross-platform DS для consumer-продуктів Silpo, що покриває веб і Flutter-мобайл. Стартувала з guerrilla-інтерв\'ю, валідована з C-level стейкхолдерами, випущена з WCAG 2.1 AA з першого дня і трьома рівнями абстракції, що дозволяють подорожувати між дуже різними кодовими базами.',
    'case.sds.fact.year':      '2023',
    'case.sds.fact.company':   'Fozzy Group · Silpo',
    'case.sds.fact.role':      'Senior PD (виконував роль DS Lead)',
    'case.sds.fact.platforms': 'Web + Flutter мобайл',

    'case.sds.context.title':  'Моя ініціатива — не завдання згори.',
    'case.sds.context.body1':  'У Silpo було дві поверхні, що мали значення для клієнтів — веб-магазин і Flutter-мобайл, — але кожна команда перебудовувала одні й ті ж компоненти двічі, в трохи різний спосіб. Top-down мандата фіксити це не було. Було видиме тертя, повільний Time to Market і очевидна можливість.',
    'case.sds.context.body2':  'Я подавав систему як спосіб <strong>покращити Time to Market для продуктових фіч</strong>, із побічним ефектом: дизайнери отримували час на ресерч. Це формулювання дало buy-in від C-level. Реальна робота стартувала.',

    'case.sds.approach.title': 'Двостадійний ресерч, потім RICE, потім ship.',
    'case.sds.list1.s1':       'Guerrilla-інтерв\'ю',
    'case.sds.list1.s1sub':    'Швидкий quality-of-life фідбек від дизайнерів і фронтенд-інженерів — що працює сьогодні, що ні.',
    'case.sds.list1.s2':       'Stakeholder-інтерв\'ю',
    'case.sds.list1.s2sub':    'Структуровані розмови з CTO, Solution Architect, Front-end Architect, Flutter Architect і Head of Design — щоб зафіксувати вимоги й обмеження.',
    'case.sds.list1.s3':       'Скан референсів',
    'case.sds.list1.s3sub':    'Google Material, Amazon Cloudscape, IBM Carbon, Shopify Polaris — за IA-патернами і governance.',
    'case.sds.list1.s4':       'RICE-пріоритизація',
    'case.sds.list1.s4sub':    'Reach × Impact × Confidence / Effort. Зробила roadmap захищеним перед усіма, хто питав.',
    'case.sds.list1.s5':       'WCAG 2.1 AA на старті',
    'case.sds.list1.s5sub':    'Жорстка вимога з першого дня — не фінальний чеклист.',

    'case.sds.architecture.title': 'Три рівні абстракції — кожен під свою реальність.',
    'case.sds.architecture.body':  'Систему побудовано навколо трьох рівнів абстракції, щоб вона могла подорожувати між дуже різними кодовими базами, не нав\'язуючи однакові артефакти всім командам.',
    'case.sds.arch.s1':        'Нижчий — code reuse',
    'case.sds.arch.s1sub':     'Повний code reuse для продуктів на одній платформі (наприклад, усі Flutter-додатки). Максимальна ефективність, де стеки збігаються.',
    'case.sds.arch.s2':        'Середній — компоненти + патерни',
    'case.sds.arch.s2sub':     'Спільні візуальні компоненти й патерни між веб і мобайлом, реалізовані під платформу.',
    'case.sds.arch.s3':        'Вищий — лише патерни',
    'case.sds.arch.s3sub':     'Узгодження на рівні патернів там, де кодові бази розходяться. Тримає бренд консистентним без локу на рівні компонентів.',
    'case.sds.arch.caption':   'Три рівні абстракції — pattern-only зверху, повний code reuse знизу.',

    'case.sds.what.title':     'Документована, доступна, підкріплена воркшопами система.',
    'case.sds.what.s1':        'Документація',
    'case.sds.what.s1sub':     'Zeroheight для foundations і патернів. Storybook для живого компонента. Figma — як дизайн-інструмент.',
    'case.sds.what.s2':        'Воркшопи і тренінги',
    'case.sds.what.s2sub':     'Для дизайнерів і для інженерів. Окремий канал для обміну знаннями й Q&A.',
    'case.sds.what.s3':        'WCAG 2.1 AA',
    'case.sds.what.s3sub':     'Контраст кольорів на рівні токенів, focus-стани, motion preferences — у foundation-шарі.',
    'case.sds.what.s4':        'Governance для змін',
    'case.sds.what.s4sub':     'Місячний changelog-ритуал, version-history save перед публікацією, opt-in патерни замість мандаторних.',
    'case.sds.what.s5':        'Шість дизайн-принципів',
    'case.sds.what.s5sub':     'Clarity, Consistency, Scalability, Research, Collaboration, Beautiful expression.',
    'case.sds.what.caption':   'Workflow, що тримав систему живою — contribution flow, review, реліз, adoption.',

    'case.sds.outcome.title':  'Швидший shipping, менше помилок, щасливіші команди.',
    'case.sds.outcome.m1':     'З першого дня',
    'case.sds.outcome.m2':     'Платформи об\'єднано',
    'case.sds.outcome.m3':     'Рівнів абстракції',
    'case.sds.outcome.body':   'Видимі результати — швидша поставка продуктових фіч, менше консистентних помилок між веб і мобайлом, щасливіша команда дизайнерів і інженерів. Невидимий — і той, що, як я тепер знаю, важить найбільше — у дизайнерів повернувся час на ресерч.',

    'case.sds.learnings.title': 'Що я взяв із цього в BOS DS через три роки.',
    'case.sds.l.s1':           'Stakeholder alignment — не обговорюється',
    'case.sds.l.s1sub':        'DS без buy-in від C-level — це просто Figma-бібліотека, що швидко старіє.',
    'case.sds.l.s2':           'Ітеруй, а не доводь до досконалості',
    'case.sds.l.s2sub':        'V1, що випустилась і використовується, краща за v3, що ще в ревью. Versioning — частина дизайну.',
    'case.sds.l.s3':           'І дизайнери, і інженери — користувачі',
    'case.sds.l.s3sub':        'QA і BA також. Дизайн під одну групу за рахунок іншої руйнує adoption.',

    // ── Silpo App ────────────────────────────────────────
    'case.app.title':          'Silpo App — consumer-сторона системи.',
    'case.app.sub':            'Мобайл-досвід для учасників програми лояльності Silpo — карта лояльності, scan-and-shop, store locator, бонуси. Випущено на Flutter, доступно за замовчуванням, повністю консистентно з веб через спільну cross-platform дизайн-систему.',
    'case.app.fact.year':      '2023',
    'case.app.fact.company':   'Fozzy Group · Silpo',
    'case.app.fact.platform':  'Flutter (iOS + Android)',
    'case.app.fact.scope':     'Consumer · loyalty + commerce',

    'case.app.context.title':  'Мобайл-апка для мільйонів учасників лояльності.',
    'case.app.context.body1':  'Silpo обслуговує мільйони клієнтів у 800+ магазинах. Мобайл-апка — це те, як лояльні клієнти несуть свої відносини з брендом: баланс бонусів, карта лояльності, store locator, in-store допомога. Очікування: native-відчуття, доступно, візуально цілісно з веб-магазином.',
    'case.app.context.body2':  'Апка і веб-магазин жили на різних кодових базах — Flutter для мобайлу, традиційний веб для шопу. Виклик — зробити їх одним продуктом, не нав\'язуючи однакові компоненти обом.',

    'case.app.approach.title': 'Спершу native, потім система, потім екрани.',
    'case.app.list1.s1':       'Спершу native-патерни',
    'case.app.list1.s1sub':    'Bottom sheets, native pickers, жести, haptics — там, де користувачі їх вже очікують.',
    'case.app.list1.s2':       'Cross-platform DS як спинний хребет',
    'case.app.list1.s2sub':    'Побудована на трирівневій моделі Silpo Design System — повний code reuse всередині Flutter, pattern-level alignment з вебом.',
    'case.app.list1.s3':       'Accessibility у foundation-шарі',
    'case.app.list1.s3sub':    'WCAG 2.1 AA контраст у кольорах-токенах, focus-стани закодовані на рівні компонентів.',
    'case.app.list1.s4':       'Loyalty-first IA',
    'case.app.list1.s4sub':    'Найчастіше використовувана поверхня для регулярного клієнта — карта лояльності. Це й вело навігацію.',

    'case.app.what.title':     'Поверхні, що важать day-to-day.',
    'case.app.what.s1':        'Карта лояльності та баланс',
    'case.app.what.s1sub':     'Стартовий екран — миттєвий доступ до карти, балансу бонусів і недавньої активності.',
    'case.app.what.s2':        'Scan-and-shop',
    'case.app.what.s2sub':     'Сканер товарів зі швидким додаванням у in-store кошик.',
    'case.app.what.s3':        'Store locator',
    'case.app.what.s3sub':     'Карта з пошуком за близькістю, годинами роботи й сервісами магазина.',
    'case.app.what.s4':        'Бонуси і партнерські програми',
    'case.app.what.s4sub':     'Статус, швидкість нарахування, історія і флоу обміну в партнерів.',
    'case.app.what.s5':        'Онбординг і auth',
    'case.app.what.s5sub':     'First-run флоу, оптимізований під одну руку на телефоні.',

    'case.app.outcome.title':  'Один продукт, дві поверхні, один бренд.',
    'case.app.outcome.m1':     'Cross-platform фреймворк',
    'case.app.outcome.m2':     'Український ритейлер',
    'case.app.outcome.m3':     'Єдиний бренд-досвід',
    'case.app.outcome.body':   'Глибший результат — якісний. Апка перестала здаватись окремим продуктом. Той самий голос бренду, ті ж компоненти, той же loyalty-флоу, що й у веба. Дизайн-система зробила свою роботу: вона подорожувала.',

    'case.app.learnings.title': 'Три речі, які я виніс із поставки consumer-мобайла.',
    'case.app.l.s1':           'Стартові екрани заробляють свій слот',
    'case.app.l.s1sub':        'Для loyalty-апки карта — це домашній екран. Не роби з неї вкладку «Лояльність».',
    'case.app.l.s2':           'Native — дефолт, custom — вибір',
    'case.app.l.s2sub':        'Користуйся пікером, який дає ОС — доки не доведеш, що кастомний помітно покращує задачу.',
    'case.app.l.s3':           'Accessibility у день 1 — дешева; у день 90 — проєкт',
    'case.app.l.s3sub':        'Контраст на рівні токенів, focus-стани, motion prefs — заклади їх рано.',

    // ── Miele audit ──────────────────────────────────────
    'case.miele.title':        'Miele Україна — UX-аудит перед редизайном.',
    'case.miele.sub':           'Структурований аудит shop.miele.ua перед запланованим редизайном B2C-порталу. Nielsen 10 евристик, конкурентний бенчмарк по Bosch, Siemens, AEG, Gaggenau і Smeg, рекомендації, пріоритезовані за RICE — упаковано як Notion-деліверебл, з яким клієнт міг працювати напряму.',
    'case.miele.fact.year':    '2024',
    'case.miele.fact.client':  'Miele Україна',
    'case.miele.fact.role':    'UX-аудитор',
    'case.miele.fact.surfaces': '4',

    'case.miele.context.title': 'Преміум-бренд планував редизайн.',
    'case.miele.context.body1': 'Miele Україна — локальний дистриб\'ютор німецького преміум-бренду побутової техніки. Вони планували міграцію і редизайн B2C-порталу і хотіли зовнішню експертну оцінку — що реально зламано, перед тим, як скоупити проєкт.',
    'case.miele.context.body2': 'Цільова аудиторія клієнта — upper-middle income; люди, які вже довіряють бренду і очікують, що цифровий досвід відповідатиме. Pre-redesign гіпотеза: конверсія і довіра падали через конкретні поверхні, але не було зрозуміло, які саме, у якому порядку, з яким повертанням.',

    'case.miele.method.title': 'Евристика, конкуренти, технічне, RICE.',
    'case.miele.m.s1':         'Евристична оцінка',
    'case.miele.m.s1sub':      'Nielsen 10 застосовано до чотирьох критичних поверхонь.',
    'case.miele.m.s2':         'Конкурентний бенчмарк',
    'case.miele.m.s2sub':      'Bosch, Siemens, AEG, Gaggenau, Smeg — premium-сегмент-патерни для продукту, пошуку і чекауту.',
    'case.miele.m.s3':         'Технічний аудит',
    'case.miele.m.s3sub':      'Швидкість завантаження, адаптивність, коректність UI на breakpoint-ах.',
    'case.miele.m.s4':         'RICE-пріоритизація',
    'case.miele.m.s4sub':      'Reach × Impact × Confidence / Effort — захищений ранжир, який клієнт міг шерити з стейкхолдерами.',

    'case.miele.findings.title': 'Чотири поверхні, рангіровані за impact.',
    'case.miele.f.s1':         'Checkout — критичний',
    'case.miele.f.s1sub':      'Складний і непрозорий флоу, надлишкові поля, слабка валідація. Прямий удар по конверсії і довірі.',
    'case.miele.f.s2':         'Головна — високий',
    'case.miele.f.s2sub':      'Бракує блоку категорій техніки над згином. Користувачі не могли швидко зорієнтуватись. Порядок першого екрана потребував перегляду.',
    'case.miele.f.s3':         'Флоу пошуку — високий',
    'case.miele.f.s3sub':      'Прогалини в авто-комплішені й фільтрах, що дратували intent-driven покупців — найцінніший сегмент.',
    'case.miele.f.s4':         'Сторінка продукту — середній',
    'case.miele.f.s4sub':      'Конкуруючі CTA створювали тертя при виборі. Когнітивне навантаження в момент рішення.',

    'case.miele.rec.title':    'Roadmap, з яким клієнт міг працювати напряму.',
    'case.miele.r.s1':         'Редизайн checkout end-to-end',
    'case.miele.r.s1sub':      'Менше кроків, зв\'язані дії, правильний зворотний зв\'язок.',
    'case.miele.r.s2':         'Додати блок категорій на головній',
    'case.miele.r.s2sub':      'Оновити IA першого екрану, щоб користувач орієнтувався за < 3 секунди.',
    'case.miele.r.s3':         'Полагодити автокомпліт і фільтри пошуку',
    'case.miele.r.s3sub':      'Критично для тих, хто заходить з наміром.',
    'case.miele.r.s4':         'Вирішити CTA-конкуренцію на сторінках продукту',
    'case.miele.r.s4sub':      'Одна основна дія, підтримуючі — на другому плані.',
    'case.miele.r.s5':         'A/B-тестувати критичні зміни',
    'case.miele.r.s5sub':      'Виміряти вплив на конверсію перед розширенням редизайну.',

    'case.miele.outcome.title': 'Чіткий скоуп редизайну, обмежений за impact.',
    'case.miele.outcome.m1':   'Критичних поверхонь у аудиті',
    'case.miele.outcome.m2':   'Конкурентів бенчмарковано',
    'case.miele.outcome.m3':   'Метод',
    'case.miele.outcome.body': 'Деліверебл — Notion-документ, по якому клієнт може навігувати: знахідки по поверхнях, ранжированій рекомендації, відправна точка для будь-кого, кого вони наймуть на виконання редизайну.',

    // ── Diez ─────────────────────────────────────────────
    'case.diez.title':         'Diez — акордова апка для гітаристів.',
    'case.diez.sub':           'Мій власний продукт — mobile-first акордова апка з конструктором прогресій для гітаристів. Стартувала як вправа на крафт, виростає у справжній indie-продукт із ресерчем, моделюванням монетизації і повним ownership-ом дизайн ↔ інженерія.',
    'case.diez.fact.year':     '2026 (MVP Q2)',
    'case.diez.fact.role':     'Засновник, дизайнер, билдер',
    'case.diez.fact.stage':    'MVP',
    'case.diez.fact.stack':    'Next.js · mobile-first',

    'case.diez.context.title': 'Чому я це будую.',
    'case.diez.context.body1': 'Я граю на гітарі. Інструменти, якими я вчу пісні і будую акордові прогресії, — або важкий desktop-софт, або мобільні сайти з рекламою. Є проміжок для тихої, сфокусованої, mobile-first акордової апки — і я близько до користувача, щоб приймати рішення без research panel.',
    'case.diez.context.body2': 'Поза самим продуктом, Diez — це мій спосіб practising what I preach: дизайнер може — і має — володіти повним продуктовим лупом хоча б раз. Стратегія, ресерч, дизайн, build, ship, монетизація, learn.',

    'case.diez.approach.title': 'Indie-product thinking, не "app design".',
    'case.diez.list1.s1':      'Спершу unit-economics',
    'case.diez.list1.s1sub':   'Моделюю за фреймворком з курсу Unit Economics у Projector — CAC, LTV, ARPU, retention-когорти, шляхи монетизації.',
    'case.diez.list1.s2':      'Mobile-first за замовчуванням',
    'case.diez.list1.s2sub':   'Гітарист тягнеться до телефона, не до ноутбука, коли потрібен акорд.',
    'case.diez.list1.s3':      'Малий, переконаний scope',
    'case.diez.list1.s3sub':   'MVP, що робить одну річ — бібліотека акордів + простий конструктор прогресій — і робить її добре.',
    'case.diez.list1.s4':      'Дизайн ↔ інженерія як один луп',
    'case.diez.list1.s4sub':   'Я і там, і там. Без hand-off-ів. Рішення у Figma тестуються у браузері того ж дня.',

    'case.diez.what.title':    'MVP, потім сигнал з реального світу.',
    'case.diez.what.s1':       'Бібліотека акордів',
    'case.diez.what.s1sub':    'Браузер, пошук і збереження акордів з чіткими fingering-діаграмами.',
    'case.diez.what.s2':       'Конструктор прогресій',
    'case.diez.what.s2sub':    'Перетягни акорди в послідовність, збережи, поділись.',
    'case.diez.what.s3':       'Mobile-first інтерфейс',
    'case.diez.what.s3sub':    'Користування однією рукою, зручно з гітарою в руках.',
    'case.diez.what.s4':       'Гіпотеза монетизації',
    'case.diez.what.s4sub':    'Змодельована, але не доведена — підписка-пейволл на багатші фічі з щедрим free tier.',

    'case.diez.outcome.title': 'Це реально, скоро буде, і я вчуся.',
    'case.diez.outcome.m1':    'Цільовий запуск',
    'case.diez.outcome.m2':    'Команда з одного',
    'case.diez.outcome.m3':    'Продуктова модель',
    'case.diez.outcome.m3v':   'Indie',
    'case.diez.outcome.body':  'Хедлайн-результат чесний: вона ще передзапускова. Що вона дає мені — і дала б команді, що мене найме — це інсайдер-погляд на indie-економіку продукту, trade-off-и монетизації і ціну кожного "маленького" дизайн-рішення, коли ти і платиш за інженерію.',

    'case.diez.learnings.title': 'Чого мене вчить будування Diez.',
    'case.diez.l.s1':          'Скоуп — це дизайн',
    'case.diez.l.s1sub':       'Кожен екран коштує мені інженерного часу. Відрізати — це дизайн, не лінь.',
    'case.diez.l.s2':          'Mobile-first — це дисципліна, не buzzword',
    'case.diez.l.s2sub':       'Дизайн під одну руку на телефоні форсує ясність. Desktop-версія зазвичай добре успадковує її.',
    'case.diez.l.s3':          'Монетизація — частина UX',
    'case.diez.l.s3sub':       'Де стоїть пейволл — це дизайнерське рішення з наслідками для retention.',

    // ── Pillars from sec freelance/mobile ────────────────
    'sec.fl-mob.howEyebrow':   'Як я підходжу до мобайла',

    // ── Related / contact / lede ─────────────────────────
    'case.related.fg':         'Якщо сподобалось, подивись також…',

    // Generic "Drop a brief" sub-lede on contact (per case)
    'contact.brief.fg':        'Скинь бриф — ролі, стадія, дедлайн. Зазвичай відповідаю протягом робочого дня.',
    'contact.brief.erm':       'Скинь бриф. Я робив складне, мульти-стейкхолдерне, мульти-модульне — і можу сказати, що різати.',
    'contact.brief.bos':       'Скинь бриф. Скажу, чи твоїй DS треба більше компонентів, чи більше governance.',
    'contact.brief.sds':       'Скинь бриф. Я заснував одну без мандата і дожив, щоб про неї написати.',
    'contact.brief.app':       'Скинь бриф — платформа, стадія, команда. Відповім протягом робочого дня.',
    'contact.brief.miele':     'Скинь бриф — сайт, аудиторія, скоуп. Повернусь з методом і фіксованою ціною.',
    'contact.brief.diez':      'Пінг мене, коли MVP вийде — або якщо хочеш поспілкуватись про indie-економіку продукту до того.',

    'contact.fg.title':        'Маєш <em>SaaS CRM</em> на дизайн?',
    'contact.erm.title':       'Будуєш <em>enterprise-платформу</em>?',
    'contact.bos.title':       'Потрібен <em>DS-lead</em>, що ставиться до неї як до продукту?',
    'contact.sds.title':       'Засновуєш <em>дизайн-систему</em>?',
    'contact.app.title':       'Шипаєш <em>consumer mobile app</em>?',
    'contact.miele.title':     '<em>UX-аудит</em> перед редизайном?',
    'contact.diez.title':      'Цікаво про <em>Diez</em>?',
  },

  en: {
  },
};

const LANG_STORAGE_KEY = 'ivansh-lang';

function detectInitialLang() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved === 'en' || saved === 'ua') return saved;
  const nav = (navigator.language || 'en').toLowerCase();
  return nav.startsWith('uk') || nav.startsWith('ru') ? 'ua' : 'en';
}

function snapshotEnglish() {
  // Cache the original English text so we can restore on toggle back.
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    if (!el.dataset.i18nEn) el.dataset.i18nEn = el.innerHTML;
  });
}

function applyLang(lang) {
  document.documentElement.lang = lang === 'ua' ? 'uk' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (lang === 'ua') {
      const t = TRANSLATIONS.ua[key];
      if (t !== undefined) el.innerHTML = t;
    } else {
      // restore the cached original
      if (el.dataset.i18nEn !== undefined) el.innerHTML = el.dataset.i18nEn;
    }
  });

  document.querySelectorAll('.lang-switch__opt').forEach((opt) => {
    opt.classList.toggle('lang-switch__opt--active', opt.dataset.lang === lang);
  });

  document.body.classList.toggle('lang-ua', lang === 'ua');
  document.body.classList.toggle('lang-en', lang === 'en');

  localStorage.setItem(LANG_STORAGE_KEY, lang);
}

function initI18n() {
  snapshotEnglish();
  applyLang(detectInitialLang());

  document.querySelectorAll('.lang-switch').forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = localStorage.getItem(LANG_STORAGE_KEY) || 'en';
      applyLang(current === 'en' ? 'ua' : 'en');
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
