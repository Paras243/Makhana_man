import ScrollSlideSection from "./ScrollSlideSection";

export default function StoryJourney() {
  return (
    <ScrollSlideSection
      left={
  <div className="max-w-2xl space-y-4">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
      Journey — From Seed to Superfood
    </h2>

    <p className="text-white/75 text-lg leading-relaxed">
      Every makhana you taste begins its life in serene water bodies 
      — untouched, quiet, and protected by nature. These aren’t ordinary 
      fields; they’re centuries-old ponds where farmers rise before sunrise 
      to collect the floating seeds with remarkable patience.
    </p>

    <p className="text-white/75 text-lg leading-relaxed">
      The journey from seed to superfood is a demanding one. The seeds are 
      sun-dried, roasted in blazing clay ovens, popped with precision, and 
      sorted by hand — each step guided by skill passed down through 
      generations. It's tradition, craftsmanship, and science working together.
    </p>

    <p className="text-white/80 text-lg leading-relaxed">
      What reaches your bowl is not just a snack. It’s the story of 
      hundreds of hands, months of nurturing, and a legacy of purity 
      transformed for today’s fast-paced world. This is how a humble 
      seed becomes a modern superfood — honest, wholesome, and made 
      for the ones who hustle.
    </p>
  </div>
}

      right={
        <div className="relative w-full max-w-xl rounded-3xl overflow-hidden aspect-video">
          <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-[#FF6B35] via-[#F7B801] to-[#06D6A0] animate-borderGlow">
            <div className="h-full w-full bg-[#0D0D11] rounded-3xl overflow-hidden">
              <video
                src="/videos/journey.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -bottom-6 left-0 right-0 mx-auto w-3/4 h-24 blur-3xl bg-[#F7B80133] opacity-50"></div>
        </div>
      }
    />
  );
}
