import ScrollSlideSection from "./ScrollSlideSection";

export default function StoryPersonality() {
  return (
    <ScrollSlideSection
      left={
        <img
          src="sup_makhana_png.png"
          className="w-full max-w-md"
        />
      }
      right={
  <div className="max-w-xl space-y-4">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
      Personality — The Makhana Man
    </h2>

    <p className="text-white/75 text-lg leading-relaxed">
      The Makhana Man is more than a mascot — he’s an energy. A vibe. 
      A spirit born from late-night grinds, gym battles, and caffeine-powered dreams. 
      He represents every hustler who chooses progress over excuses and purity over junk.
    </p>

    <p className="text-white/75 text-lg leading-relaxed">
      He’s playful yet disciplined, quirky yet reliable — a perfect blend of 
      fun and focus. Whether you're surviving an all-nighter, smashing your 
      workout, or binge-watching your comfort show, he’s right beside you 
      with crunch, confidence, and clean fuel.
    </p>

    <p className="text-white/80 text-lg leading-relaxed">
      The Makhana Man embodies the Gen-Z mindset: bold, authentic, health-smart, 
      and unapologetically themselves. He’s not here to impress — he's here to 
      inspire a culture of guilt-free snacking and limitless ambition.
    </p>
  </div>
}

    />
  );
}
