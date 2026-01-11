import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const privilegeItems = [
  {
    id: 1,
    name: 'VIP',
    price: 199,
    features: ['Приоритетный вход', 'Цветной ник', '5 приватных территорий', 'Команда /fly'],
    color: 'bg-green-600',
    popular: false,
  },
  {
    id: 2,
    name: 'Premium',
    price: 399,
    features: ['Всё из VIP', '10 приватных территорий', 'Кит каждые 12 часов', 'Команда /god'],
    color: 'bg-blue-600',
    popular: true,
  },
  {
    id: 3,
    name: 'Ultimate',
    price: 699,
    features: ['Всё из Premium', 'Неограниченные территории', 'Доступ к креативу', 'Свой мини-сервер'],
    color: 'bg-purple-600',
    popular: false,
  },
];

const cosmeticItems = [
  { id: 1, name: 'Светящиеся крылья', price: 99, icon: 'Sparkles' },
  { id: 2, name: 'Огненный след', price: 149, icon: 'Flame' },
  { id: 3, name: 'Питомец дракон', price: 199, icon: 'Bird' },
  { id: 4, name: 'Корона победителя', price: 249, icon: 'Crown' },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2c1a] via-background to-[#2d1810]">
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-2xl">🎮</div>
            <span className="text-2xl font-bold text-shadow-minecraft">Flarasa rasa</span>
          </div>
          
          <div className="hidden md:flex gap-6">
            {['home', 'about', 'rules', 'shop', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'about' && 'О сервере'}
                {section === 'rules' && 'Правила'}
                {section === 'shop' && 'Магазин'}
                {section === 'contact' && 'Контакты'}
              </button>
            ))}
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <Icon name="UserPlus" className="mr-2" size={18} />
            Войти
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-shadow-minecraft">
              Flarasa rasa
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Лучший ванильный сервер с выживанием, приватами и дружным комьюнити
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                <Icon name="Play" className="mr-2" size={20} />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Users" className="mr-2" size={20} />
                Discord
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-card/80 backdrop-blur border-border hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="text-4xl mb-2">⛏️</div>
                  <CardTitle>120+ игроков</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Онлайн каждый день</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/80 backdrop-blur border-border hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="text-4xl mb-2">🛡️</div>
                  <CardTitle>Без лагов</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Мощный хостинг</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/80 backdrop-blur border-border hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="text-4xl mb-2">🎁</div>
                  <CardTitle>Ивенты</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Призы каждую неделю</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold mb-12 text-center text-shadow-minecraft">О сервере</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Pickaxe" className="text-primary" size={24} />
                  Ванильное выживание
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Чистый Minecraft без модов. Добывай ресурсы, строй базы, торгуй с игроками.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shield" className="text-primary" size={24} />
                  Система приватов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Защити свою территорию от гриферов. Твоя база под надёжной охраной.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Trophy" className="text-primary" size={24} />
                  Еженедельные ивенты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  PvP турниры, постройки, спидран. Выигрывай призы и донат-валюту.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Zap" className="text-primary" size={24} />
                  Без лагов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мощный хостинг и оптимизация. Стабильный TPS даже при большом онлайне.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-bold mb-12 text-center text-shadow-minecraft">Правила сервера</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <span className="text-2xl">⚔️</span>
                  Правила игры
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Запрещён читерский софт и любые модификации, дающие преимущество</li>
                  <li>Запрещён гриф и кража на чужих территориях</li>
                  <li>PvP разрешено только в специальных зонах или по взаимному согласию</li>
                  <li>Уважай личное пространство других игроков</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <span className="text-2xl">💬</span>
                  Правила общения
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Запрещены оскорбления, мат и токсичное поведение</li>
                  <li>Не спамь в чате и не используй капс</li>
                  <li>Реклама других серверов запрещена</li>
                  <li>Будь вежлив и помогай новичкам</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <span className="text-2xl">🏗️</span>
                  Правила построек
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Стройся минимум в 200 блоках от спавна</li>
                  <li>Не загромождай ландшафт случайными постройками</li>
                  <li>Запрещены оскорбительные постройки</li>
                  <li>При длительном отсутствии (30+ дней) твоя база может быть удалена</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-2">
                  <span className="text-2xl">⚖️</span>
                  Наказания
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Нарушение правил чата — мут от 1 часа до перманентного</li>
                  <li>Читы — перманентный бан без возможности разбана</li>
                  <li>Гриф — бан на 7-30 дней, при повторе — перманент</li>
                  <li>Серьёзные нарушения — бан без предупреждения</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="shop" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center text-shadow-minecraft">Магазин</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Поддержи сервер и получи крутые возможности
          </p>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Привилегии</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {privilegeItems.map((item) => (
                <Card
                  key={item.id}
                  className={`relative bg-card border-2 hover:scale-105 transition-transform ${
                    item.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
                  }`}
                >
                  {item.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      Популярное
                    </Badge>
                  )}
                  <CardHeader>
                    <div className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center text-3xl mb-4 mx-auto`}>
                      💎
                    </div>
                    <CardTitle className="text-center text-2xl">{item.name}</CardTitle>
                    <CardDescription className="text-center text-3xl font-bold text-foreground mt-2">
                      {item.price} ₽
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Separator className="mb-4" />
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                      Купить
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Косметика</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {cosmeticItems.map((item) => (
                <Card key={item.id} className="bg-card border-border hover:scale-105 transition-transform">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name={item.icon as any} className="text-accent" size={32} />
                    </div>
                    <CardTitle className="text-center text-lg">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-2xl font-bold text-accent">{item.price} ₽</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Купить
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-8 text-shadow-minecraft">Контакты</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Присоединяйся к нашему комьюнити и будь в курсе всех новостей
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border hover:scale-105 transition-transform cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-[#5865F2] rounded-full flex items-center justify-center text-3xl mx-auto mb-2">
                  💬
                </div>
                <CardTitle>Discord</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Общайся с игроками и администрацией</p>
                <Button className="mt-4" variant="outline">
                  Присоединиться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:scale-105 transition-transform cursor-pointer">
              <CardHeader>
                <div className="w-16 h-16 bg-[#229ED9] rounded-full flex items-center justify-center text-3xl mx-auto mb-2">
                  ✈️
                </div>
                <CardTitle>Telegram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Новости и анонсы ивентов</p>
                <Button className="mt-4" variant="outline">
                  Подписаться
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-card rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-2">IP адрес сервера:</p>
            <code className="text-2xl font-mono font-bold text-primary">play.flarasa.ru</code>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-card/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2026 Flarasa rasa. Все права защищены.</p>
          <p className="text-sm mt-2">Minecraft является торговой маркой Mojang AB</p>
        </div>
      </footer>
    </div>
  );
}