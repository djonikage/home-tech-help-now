import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Send, Clock, Shield, CheckCircle, Laptop, Wifi, HardDrive, RotateCcw, Bug } from 'lucide-react';
import heroImage from "@/assets/hero-computer-repair.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    problem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      icon: Laptop,
      title: "Компьютер не включается",
      description: "Диагностика и ремонт блока питания, материнской платы",
      price: "от 1500 ₽"
    },
    {
      icon: Bug,
      title: "Удаление вирусов",
      description: "Полная очистка от вредоносного ПО, настройка защиты",
      price: "от 1000 ₽"
    },
    {
      icon: Wifi,
      title: "Настройка Wi-Fi",
      description: "Подключение к интернету, настройка роутера",
      price: "от 800 ₽"
    },
    {
      icon: HardDrive,
      title: "Замена SSD/HDD",
      description: "Установка нового накопителя, перенос данных",
      price: "от 1200 ₽"
    },
    {
      icon: RotateCcw,
      title: "Переустановка Windows",
      description: "Чистая установка ОС, настройка драйверов",
      price: "от 1500 ₽"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      text: "Очень быстро приехали и починили компьютер. Мастер объяснил все понятно, цены честные.",
      rating: 5
    },
    {
      name: "Сергей Иванов",
      text: "Переустановили Windows и настроили все программы. Работают профессионально, рекомендую!",
      rating: 5
    },
    {
      name: "Мария Козлова",
      text: "Спасли мой ноутбук! Думала, что все, а оказалось просто вирусы. Спасибо большое!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Laptop className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">КомпьютерСервис</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-semibold">+7 (999) 123-45-67</span>
              </div>
              <Button variant="default" size="sm" className="shadow-button">
                Вызвать мастера
              </Button>
            </div>
            
            <Button variant="default" size="sm" className="md:hidden">
              <Phone className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white py-20" style={{backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.85), rgba(5, 150, 105, 0.85)), url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Работаем 24/7 • Выезд в течение часа
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Компьютерная помощь <br />
              <span className="text-white/90">на дому в Москве</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Быстрый ремонт компьютеров и ноутбуков у вас дома. 
              Гарантия 30 дней на все виды работ.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-button">
                <Phone className="h-5 w-5 mr-2" />
                Вызвать мастера
              </Button>
              <Button size="lg" variant="hero">
                <MessageCircle className="h-5 w-5 mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Решаем любые компьютерные проблемы быстро и качественно
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-card-hover transition-smooth group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-smooth">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{service.title}</h3>
                      <Badge variant="secondary" className="mt-1">{service.price}</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-lg text-muted-foreground">
              Никаких скрытых платежей. Оплата только после выполнения работ.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Стоимость услуг</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Диагностика</span>
                        <span className="font-semibold">Бесплатно</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Выезд мастера</span>
                        <span className="font-semibold">500 ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Простой ремонт</span>
                        <span className="font-semibold">от 800 ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Сложный ремонт</span>
                        <span className="font-semibold">от 1500 ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Установка ПО</span>
                        <span className="font-semibold">от 500 ₽</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Условия работы</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <span>Гарантия 30 дней</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <span>Оплата после работ</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <span>Бесплатная диагностика</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <span>Выезд в день обращения</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <span>Работаем с 9:00 до 22:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-lg text-muted-foreground">
              Простой процесс от заявки до готового результата
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Заявка</h3>
              <p className="text-muted-foreground">
                Звоните или пишите в WhatsApp. Опишите проблему - мастер приедет в удобное время.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-success-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Ремонт</h3>
              <p className="text-muted-foreground">
                Бесплатная диагностика, согласование цены и быстрое решение проблемы.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Гарантия</h3>
              <p className="text-muted-foreground">
                Проверяем работу, даем гарантию 30 дней. Оплата только после успешного ремонта.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">
              Что говорят о нашей работе довольные клиенты
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <div className="font-semibold">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Связаться с нами</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Оставьте заявку и наш мастер свяжется с вами в течение 15 минут
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <MessageCircle className="h-6 w-6 text-success" />
                    <div>
                      <div className="font-semibold">WhatsApp / Telegram</div>
                      <div className="text-muted-foreground">Быстрый ответ в мессенджерах</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-semibold">Время работы</div>
                      <div className="text-muted-foreground">Ежедневно с 9:00 до 22:00</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Заказать звонок</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          placeholder="Ваше имя"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Телефон"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Опишите проблему"
                          value={formData.problem}
                          onChange={(e) => setFormData({...formData, problem: e.target.value})}
                          className="min-h-[100px]"
                        />
                      </div>
                      <Button type="submit" className="w-full shadow-button">
                        <Send className="h-4 w-4 mr-2" />
                        Отправить заявку
                      </Button>
                    </form>
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Laptop className="h-8 w-8" />
                <span className="text-xl font-bold">КомпьютерСервис</span>
              </div>
              <p className="text-primary-foreground/80">
                Профессиональный ремонт компьютеров и ноутбуков с выездом на дом в Москве.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div>Телефон: +7 (999) 123-45-67</div>
                <div>Email: info@computer-service.ru</div>
                <div>Время работы: 9:00 - 22:00</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-primary-foreground/80 text-sm">
                <div>Ремонт компьютеров</div>
                <div>Ремонт ноутбуков</div>
                <div>Удаление вирусов</div>
                <div>Настройка Wi-Fi</div>
                <div>Установка Windows</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 КомпьютерСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;