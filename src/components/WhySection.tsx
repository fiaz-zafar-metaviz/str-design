import { Calendar, Home, Heart, Sparkles } from "lucide-react";

const features = [
  { icon: Calendar, title: "Wedding Week", desc: "Turn a 5-hour wedding into a 5-day celebration with your closest family and friends." },
  { icon: Home, title: "Luxury Accommodations", desc: "Stay in stunning mansions, beachfront estates, and mountain lodges that sleep your entire party." },
  { icon: Heart, title: "Zero Regrets", desc: "Spend quality time with every guest. No rushing, no stress — just memories." },
  { icon: Sparkles, title: "All-In-One Venue", desc: "Your ceremony, reception, and accommodations all in one breathtaking location." },
];

const WhySection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-primary/80 text-center mb-3 font-body">
          Why STR Wedding?
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
          Make Your Best Day <br />
          <span className="text-gold-gradient">Last a Lifetime</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto font-body leading-relaxed">
          The average wedding lasts just 5 hours. With over 100 guests, that's only 3 minutes per person. 
          We believe the most important day of your life deserves more. That's why we've curated the world's 
          finest short-term rental properties — so your wedding can be a week-long celebration, not a rushed afternoon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
