// components/AboutSection.tsx
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-60 h-60 mx-auto rounded-full overflow-hidden mb-6 shadow-lg">
          <Image
            src="/images/profile-1.jpeg"
            alt="Naturalist Guide Portrait"
            width={240}
            height={240}
            className="object-cover"
          />
        </div>

        <h2 className="text-3xl font-semibold text-black mb-4">
          About Your Guide
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          With over a decade of experience exploring diverse ecosystems and
          guiding nature enthusiasts, our certified naturalist combines deep
          field knowledge with a passion for education. Specializing in
          birdwatching tours, he provides personalized, high-quality experiences
          that reveal the beauty of local wildlife and landscapes. Whether
          you&apos;re a seasoned birder or a curious explorer, you&apos;ll enjoy
          engaging, informative tours tailored to your interests.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
