import ScrollSlideSection from "./ScrollSlideSection";

export default function StoryMission() {
  return (
    <ScrollSlideSection
      left={
  <div className="max-w-xl space-y-4">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
      Mission — Fueling Modern India
    </h2>

    <p className="text-white/75 text-lg leading-relaxed">
      India is changing — faster, louder, and more ambitious than ever. 
      From college libraries buzzing at 2 AM to metro rides packed with dreamers, 
      from fitness enthusiasts pushing their limits to office warriors powering 
      through deadlines — modern India runs on hustle.
    </p>

    <p className="text-white/75 text-lg leading-relaxed">
      The Makhana Man exists to fuel this new India with <span className="text-white font-semibold">clean energy</span>, 
      <span className="text-white font-semibold">guilt-free snacking</span>, and a <span className="text-white font-semibold">culture of mindful indulgence</span>. 
      No empty calories. No post-snack regret. Just pure, honest crunch that 
      keeps you going without slowing you down.
    </p>

    <p className="text-white/80 text-lg leading-relaxed">
      Our mission is simple yet powerful: to redefine snacking for the next 
      generation — a generation that works harder, thinks bigger, and demands 
      better. The Makhana Man fuels the nation’s dreams, one crunch at a time.
    </p>
  </div>
}

      right={
        <img
          src="public\makhana_man.png"
          className="w-full max-w-md"
        />
      }
    />
  );
}
