"use client";

import HeroSection from "../_components/HeroSection/HeroSection";
import { MapPin, Phone, Mail } from "lucide-react";
import { sendMail } from "../actions/sendMail";
import { useActionState, useEffect } from "react";
import Swal from "sweetalert2";

const HERO_TITLE = "Let's Get In Touch";
const HERO_IMAGE_SRC = "/images/arenal-contact-bg.png";
const HERO_DESCRIPTION =
  "Every traveler is unique. Tell me what you’re looking for, and together we’ll create a tailor-made nature experience.";
const HERO_IMAGE_ALT = "Arenal volcano background";

interface FormState {
  success: boolean;
  error?: string;
}

const Contact = () => {
  const [state, formAction, isPending] = useActionState(
    async (state: FormState, formData: FormData) => {
      return await sendMail(formData);
    },
    {
      success: false,
      error: "",
    }
  );

  useEffect(() => {
    if (!isPending && state.success) {
      Swal.fire({
        icon: "success",
        title: "Message Sent",
        text: "Thank you for reaching out! I will get back to you shortly.",
      });
    }
    if (!isPending && state.error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while sending your message. Please try again later.",
      });
    }
  }, [state, isPending]);
  return (
    <main>
      <HeroSection
        title={HERO_TITLE}
        description={HERO_DESCRIPTION}
        imageSrc={HERO_IMAGE_SRC}
        imageAlt={HERO_IMAGE_ALT}
        heightStyles="h-100 xl:h-150"
      />
      <div className="w-full flex flex-col items-center justify-center py-10 px-4 relative finishGradientBackground">
        <div className="w-[80vw] flex rounded-lg border-primary p-6 max-w-2xl lg:max-w-4xl relative top-[-100px] z-1 bg-white shadow-lg">
          <section className="py-12 lg:pt-6 px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary">Contact Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                {/* Address */}
                <div className="flex flex-col items-center space-x-4">
                  <div className="mx-auto text-center bg-[var(--color-tasman)] p-3 rounded-xl mb-3">
                    <MapPin className="w-6 h-6 text-[var(--color-forestgreen)]" />
                  </div>
                  <div className="text-center text-primary">
                    <h3 className="font-semibold">Address</h3>
                    <p>La Fortuna, San Carlos, Alajuela, Costa Rica</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center space-x-4">
                  <div className="mx-auto bg-[var(--color-tasman)] p-3 rounded-xl mb-3">
                    <Phone className="w-6 h-6 text-[var(--color-forestgreen)]" />
                  </div>
                  <div className="text-center text-primary">
                    <h3 className="font-semibold">Phone Number</h3>
                    <p>+506 8743 4489</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center space-x-4">
                  <div className="mx-auto bg-[var(--color-tasman)] p-3 rounded-xl mb-3">
                    <Mail className="w-6 h-6 text-[var(--color-forestgreen)]" />
                  </div>
                  <div className="text-center text-primary">
                    <h3 className="font-semibold">Email</h3>
                    <p>
                      <a href="mailto:raulobregonbirdmancr@gmail.com">
                        raulobregonbirdmancr@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div>
                <h3 className="font-semibold text-center text-primary py-10">
                  Your tailor-made adventure starts here.
                </h3>

                <form className="space-y-4" action={formAction}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="name"
                      type="text"
                      placeholder="Name *"
                      required
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-tasman)]"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Email *"
                      required
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-tasman)]"
                    />
                  </div>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-tasman)]"
                  />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Comment"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-tasman)]"
                  />
                  <button
                    type="submit"
                    disabled={isPending}
                    className="bg-[var(--color-tasman)] text-primary font-semibold px-6 py-3 rounded-lg shadow transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;
