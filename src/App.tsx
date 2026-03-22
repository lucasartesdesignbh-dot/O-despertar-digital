/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Smartphone, 
  Brain, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Users, 
  Target, 
  Lock,
  ChevronDown,
  ChevronUp,
  Star,
  BookOpen,
  Moon,
  Wind,
  Play,
  AlertTriangle,
  Heart,
  Sparkles,
  Timer
} from "lucide-react";
import { useState, useEffect } from "react";

const CTAButton = ({ text, subtext, className = "" }: { text: string; subtext?: string; className?: string }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`w-full max-w-md bg-brand hover:bg-brand-dark text-black font-black py-5 px-8 rounded-2xl shadow-neon shadow-neon-hover transition-all flex flex-col items-center justify-center group cursor-pointer ${className}`}
  >
    <span className="text-xl md:text-2xl uppercase tracking-tight flex items-center gap-2 text-center">
      {text} <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
    </span>
    {subtext && <span className="text-xs font-bold opacity-70 mt-1 uppercase tracking-widest">{subtext}</span>}
  </motion.button>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold text-lg md:text-xl text-zinc-800 hover:text-brand-dark transition-colors"
      >
        {question}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-6 h-6 opacity-50" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-zinc-600 leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SectionTitle = ({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 ${light ? 'text-white' : 'text-zinc-900'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`text-xl font-medium ${light ? 'text-zinc-400' : 'text-zinc-500'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-20 h-1.5 bg-brand mx-auto mt-6 rounded-full"></div>
  </div>
);

export default function App() {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand selection:text-black">
      
      {/* 1. HERO SECTION (High Contrast) */}
      <section className="bg-zinc-950 text-white pt-20 pb-32 px-6 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-brand/20"
          >
            <Sparkles className="w-4 h-4" /> Método Testado e Aprovado
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-8 uppercase italic"
          >
            Recupere o seu <span className="text-brand">Foco</span> e sua <span className="text-brand">Vida</span> em 21 dias.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto font-medium"
          >
            O guia definitivo para vencer o vício digital, reduzir a ansiedade e retomar o controle do seu tempo.
          </motion.p>

          <div className="flex flex-col items-center gap-6">
            <CTAButton text="QUERO ME LIBERTAR AGORA" subtext="Oferta por tempo limitado" />
            <div className="flex items-center gap-3 text-brand font-black text-sm uppercase tracking-widest">
              <Timer className="w-5 h-5 animate-pulse" />
              A oferta expira em: {formatTime(timeLeft)}
            </div>
          </div>

          {/* VSL Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 relative max-w-4xl mx-auto group cursor-pointer"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand/20 to-transparent blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative aspect-video bg-zinc-900 rounded-[32px] border border-white/10 overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/focus/1200/675?blur=2" 
                alt="Vídeo de Apresentação" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-brand rounded-full flex items-center justify-center shadow-neon group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-black fill-black ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest">
                Assista ao vídeo de apresentação
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. DORES (The Pain) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            title="O Problema Silencioso" 
            subtitle="Você sente que o seu celular está controlando você?"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: AlertTriangle, title: "Ansiedade Constante", desc: "A sensação de estar perdendo algo sempre que não está com o celular na mão." },
              { icon: Brain, title: "Foco Destruído", desc: "Dificuldade em ler um livro ou se concentrar em uma tarefa por mais de 10 minutos." },
              { icon: Moon, title: "Sono Prejudicado", desc: "Horas perdidas em 'scroll infinito' antes de dormir, resultando em cansaço crônico." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-brand/30 transition-colors group"
              >
                <item.icon className="w-12 h-12 text-zinc-300 group-hover:text-brand transition-colors mb-6" />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUÇÃO (The Solution) */}
      <section className="py-32 px-6 bg-zinc-950 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-none">
              O Despertar <span className="text-brand">Digital</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Não é sobre abandonar a tecnologia, é sobre retomar o comando. Nosso método foi desenhado para reprogramar sua relação com o digital em apenas 3 semanas.
            </p>
            <div className="space-y-6">
              {[
                "Protocolo de 21 dias passo a passo",
                "Técnicas de reprogramação dopaminérgica",
                "Estratégias para foco inabalável",
                "Resgate da sua vida analógica"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                  </div>
                  <span className="text-lg font-medium text-zinc-200">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <CTAButton text="QUERO O MÉTODO COMPLETO" className="max-w-sm" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full opacity-30 animate-pulse"></div>
            <img 
              src="https://picsum.photos/seed/freedom/800/1000" 
              alt="Liberdade Digital" 
              className="rounded-[40px] shadow-2xl relative z-10 border border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. O QUE VOCÊ VAI RECEBER */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            title="O Que Você Vai Receber" 
            subtitle="Tudo o que você precisa para a sua transformação digital."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Guia Despertar Digital", desc: "40 páginas com o protocolo completo de 21 dias passo a passo." },
              { icon: Target, title: "Teste de AutoAvaliação", desc: "Descubra exatamente onde o celular está roubando seu tempo e energia." },
              { icon: Zap, title: "Auditoria Digital", desc: "Um diagnóstico rápido em 4 passos para eliminar gatilhos de distração." },
              { icon: Clock, title: "Cronograma 21 Dias", desc: "Ações diárias específicas e simples que cabem na rotina de um adulto ocupado." },
              { icon: CheckCircle2, title: "Checklists Exclusivos", desc: "Acompanhe seu progresso diário e celebre cada pequena vitória." },
              { icon: Users, title: "Comunidade VIP", desc: "Acesso ao grupo de apoio para troca de experiências e suporte." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-6 p-8 rounded-3xl bg-zinc-50 border border-zinc-100 items-start hover:border-brand/30 transition-colors">
                <div className="bg-zinc-900 text-brand p-3 rounded-2xl">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase mb-2 leading-tight">{item.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BÔNUS (The Bonus - Enhanced) */}
      <section className="py-32 px-6 bg-zinc-50 relative overflow-hidden">
        {/* Subtle background pattern or glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/5 blur-[100px] rounded-full"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionTitle 
            title="Bônus Exclusivos" 
            subtitle="Aceleradores para o seu resultado ser ainda mais rápido e duradouro."
          />
          
          <div className="space-y-10">
            {[
              { 
                id: 1,
                title: "Guia Prático de Meditação para Iniciantes", 
                desc: "A ferramenta certa para acalmar a mente durante o processo de detox.",
                price: "R$ 47,90",
                img: "https://picsum.photos/seed/meditation-guide/800/600",
                icon: "🧘‍♂️"
              },
              { 
                id: 2,
                title: "Guia Despertar Digital - VERSÃO PARA IMPRESSÃO", 
                desc: "Todo o processo para você imprimir, marcar, seguir e rabiscar a vontade. Fica mais fácil para acompanhar o seu processo assim.",
                price: "R$ 47,90",
                img: "https://picsum.photos/seed/print-guide/800/600",
                icon: "🖨️"
              },
              { 
                id: 3,
                title: "Pôr do Sol Digital", 
                desc: "Protocolo para resgatar o sono. Um guia passo a passo para melhorar o seu sono.",
                price: "R$ 47,90",
                img: "https://picsum.photos/seed/sleep-guide/800/600",
                icon: "🌅"
              }
            ].map((bonus, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[40px] overflow-hidden border border-zinc-200 flex flex-col md:flex-row items-stretch shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 group"
              >
                <div className="p-10 md:p-16 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-zinc-950 text-brand rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                      {bonus.icon}
                    </div>
                    <span className="text-brand font-black uppercase tracking-[0.3em] text-sm">BÔNUS {bonus.id}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 leading-[1.1]">
                    {bonus.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-xl leading-relaxed mb-10 font-medium">
                    {bonus.desc}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-zinc-100">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">Valor Original</span>
                      <span className="text-red-500 line-through font-black text-2xl">DE {bonus.price}</span>
                    </div>
                    <div className="w-px h-10 bg-zinc-100 hidden sm:block"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-1">Oferta Especial</span>
                      <span className="text-emerald-500 font-black text-4xl flex items-center gap-2">
                        POR R$ 0 <span className="text-xs bg-emerald-500 text-white px-2 py-1 rounded-md animate-bounce">GRÁTIS</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-[45%] min-h-[300px] md:min-h-full relative overflow-hidden bg-zinc-100">
                  <img 
                    src={bonus.img} 
                    alt={bonus.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent md:from-white/40"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-zinc-950 text-brand font-black px-6 py-3 rounded-2xl shadow-2xl transform rotate-12 group-hover:rotate-0 transition-transform text-sm uppercase tracking-widest">
                    100% Grátis
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Value Highlight */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-10 bg-brand rounded-[32px] text-center shadow-neon"
          >
            <h4 className="text-black font-black text-2xl md:text-3xl uppercase tracking-tighter mb-2">
              SÓ OS BÔNUS JÁ VALEM R$ 143,70
            </h4>
            <p className="text-black/70 font-bold uppercase tracking-widest text-sm">
              E você vai levar todos eles de presente hoje.
            </p>
          </motion.div>

          <div className="mt-16 flex justify-center">
            <CTAButton text="QUERO GARANTIR MEUS BÔNUS" subtext="Disponível apenas para os próximos inscritos" />
          </div>
        </div>
      </section>

      {/* 6. CARD DE OFERTA (The Offer) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-950 text-white rounded-[48px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute top-0 left-0 w-full h-3 bg-brand"></div>
            
            <div className="relative z-10">
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-block bg-brand/10 text-brand px-6 py-2 rounded-full text-sm font-black uppercase tracking-[0.2em] mb-8 border border-brand/20"
              >
                Oferta de Lançamento • Acesso Imediato
              </motion.span>
              
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-10 leading-none">
                Tudo o que você <br /> vai <span className="text-brand">receber</span>:
              </h2>

              {/* The Value Stack */}
              <div className="max-w-2xl mx-auto mb-16 space-y-4 text-left">
                {[
                  { title: "Guia Despertar Digital (40 páginas)", desc: "Protocolo completo de 21 dias passo a passo.", price: "R$ 67,00" },
                  { title: "Teste de AutoAvaliação Digital", desc: "Descubra onde o celular rouba seu tempo.", price: "R$ 27,00" },
                  { title: "Auditoria Digital em 4 Passos", desc: "Elimine gatilhos de distração agora.", price: "R$ 37,00" },
                  { title: "Cronograma Dia a Dia (21 Dias)", desc: "Ações simples para adultos ocupados.", price: "R$ 27,00" },
                  { title: "Checklists Exclusivos de Progresso", desc: "Acompanhe e celebre suas vitórias.", price: "R$ 17,00" },
                  { title: "BÔNUS 1: Meditação para Iniciantes", desc: "Técnicas de 5 min para foco total.", price: "GRÁTIS", isBonus: true },
                  { title: "BÔNUS 2: Versão para Impressão", desc: "O plano na parede para sair do ecrã.", price: "GRÁTIS", isBonus: true },
                  { title: "BÔNUS 3: Protocolo Pôr do Sol Digital", desc: "Transforme suas noites e sua energia.", price: "GRÁTIS", isBonus: true },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center justify-between p-4 rounded-2xl border ${item.isBonus ? 'bg-brand/5 border-brand/20' : 'bg-white/5 border-white/10'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.isBonus ? 'bg-brand text-black' : 'bg-white/10 text-brand'}`}>
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className={`font-black uppercase text-sm ${item.isBonus ? 'text-brand' : 'text-white'}`}>{item.title}</h4>
                        <p className="text-xs text-zinc-500 font-medium">{item.desc}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-black ${item.isBonus ? 'text-brand' : 'text-zinc-500 line-through'}`}>
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col items-center mb-12 bg-white/5 p-6 md:p-12 rounded-[48px] border border-white/10 w-full">
                <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-8 text-center max-w-md px-4">
                  Você recebe o Guia Principal + 4 Ferramentas de Apoio + 3 Bônus Exclusivos por menos que o preço de um café.
                </p>
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-6">Valor Total do Pacote: <span className="line-through">R$ 243,70</span></p>
                
                <div className="flex flex-col items-center">
                  <span className="text-zinc-400 font-black uppercase tracking-[0.2em] text-sm md:text-xl mb-2">Por apenas</span>
                  <div className="flex items-start justify-center">
                    <span className="text-2xl md:text-4xl font-black text-white mt-4 md:mt-8 mr-2">R$</span>
                    <span className="text-7xl sm:text-8xl md:text-[160px] font-black text-brand leading-none tracking-tighter">9,90</span>
                  </div>
                </div>
                
                <div className="mt-8 bg-brand/10 px-6 py-2 rounded-full border border-brand/20">
                  <p className="text-[10px] md:text-xs font-black text-brand uppercase tracking-[0.2em] animate-pulse">
                    Pagamento Único • Acesso Vitalício
                  </p>
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <CTAButton text="QUERO MEU ACESSO AGORA" subtext="Garantia Incondicional de 7 dias" />
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand" /> Compra 100% Segura</span>
                <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-brand" /> Entrega Imediata por E-mail</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand" /> Satisfação Garantida</span>
              </div>
            </div>
            
            {/* Background Glows */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand/10 blur-[100px] rounded-full"></div>
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand/5 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 7. DEPOIMENTOS (Social Proof) */}
      <section className="py-32 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle 
            title="O Que Dizem Nossos Alunos" 
            subtitle="Mais de 2.357 vidas transformadas pelo Despertar Digital."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Carlos Mendes", role: "Empresário", text: "Minha produtividade dobrou em duas semanas. O guia é direto ao ponto e muito fácil de aplicar." },
              { name: "Juliana Rocha", role: "Designer", text: "Finalmente consegui ler um livro inteiro sem me distrair com o celular a cada 5 minutos. Libertador!" },
              { name: "Ricardo Silva", role: "Estudante", text: "O protocolo de sono mudou minha vida. Acordo descansado e pronto para o dia pela primeira vez em anos." }
            ].map((test, i) => (
              <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm border border-zinc-100 flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand text-brand" />)}
                </div>
                <p className="text-zinc-600 text-lg leading-relaxed mb-8 italic">"{test.text}"</p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center font-black text-zinc-400">
                    {test.name[0]}
                  </div>
                  <div>
                    <div className="font-black text-zinc-900 uppercase text-sm tracking-tight">{test.name}</div>
                    <div className="text-xs text-zinc-400 uppercase font-bold tracking-widest">{test.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GARANTIA (The Guarantee) */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-zinc-50 p-12 md:p-20 rounded-[48px] border-2 border-dashed border-zinc-200">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <div className="relative">
              <ShieldCheck className="w-32 h-32 text-brand" />
              <div className="absolute -top-2 -right-2 bg-zinc-950 text-white text-[10px] font-black p-3 rounded-full w-12 h-12 flex items-center justify-center border-4 border-white shadow-xl">7 DIAS</div>
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Risco Zero Para Você</h2>
          <p className="text-zinc-500 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Você tem 7 dias inteiros para testar o método. Se por qualquer motivo você não sentir que sua vida está mudando, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </p>
          <div className="inline-block bg-zinc-950 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.3em]">
            Sua Satisfação ou Seu Dinheiro de Volta
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-32 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="Dúvidas Frequentes" />
          <div className="space-y-2">
            <FAQItem 
              question="Como vou receber o produto?" 
              answer="O acesso é imediato. Assim que o pagamento for confirmado, você receberá um e-mail com os dados de acesso à nossa plataforma exclusiva com todo o conteúdo." 
            />
            <FAQItem 
              question="Por quanto tempo terei acesso?" 
              answer="O acesso é vitalício. Você pode ver e rever o conteúdo quantas vezes quiser, além de receber todas as atualizações futuras sem custo adicional." 
            />
            <FAQItem 
              question="O método funciona para quem trabalha com o celular?" 
              answer="Com certeza. O Despertar Digital não ensina a abandonar o celular, mas sim a usá-lo de forma produtiva e consciente, eliminando o uso passivo e viciante." 
            />
            <FAQItem 
              question="E se eu tiver dúvidas durante o processo?" 
              answer="Você terá acesso ao nosso suporte VIP e à nossa comunidade de alunos, onde poderá tirar todas as suas dúvidas diretamente com nossa equipe." 
            />
          </div>
        </div>
      </section>

      {/* 10. RODAPÉ (Footer) */}
      <footer className="bg-zinc-950 text-zinc-600 py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
              Despertar <span className="text-brand">Digital</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-[10px] leading-relaxed opacity-50">
            <p>© 2026 O Despertar Digital. Todos os direitos reservados.</p>
            <p>
              Este site não faz parte do Google ou do Facebook. Além disso, este site NÃO é endossado pelo Google ou Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc. GOOGLE é uma marca comercial da GOOGLE, Inc.
            </p>
            <p>
              Os resultados podem variar de pessoa para pessoa. O acompanhamento diário e a aplicação das técnicas são fundamentais para o sucesso do método.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
