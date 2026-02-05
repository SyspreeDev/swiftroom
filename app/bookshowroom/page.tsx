"use client";

import { useState } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactSection() {

  /* ---------------- STATE ---------------- */

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    role: "",
    products: [] as string[],
    projectType: "",
    buildStage: "",
    timeline: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const inputStyle =
    "w-full border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#008970] focus:border-[#008970]";


  /* ---------------- HANDLE CHANGE ---------------- */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const input = e.target as HTMLInputElement;

      // Terms checkbox
      if (name === "agree") {
        setForm({ ...form, agree: input.checked });
      }

      // Products checkbox
      else {
        const updated = input.checked
          ? [...form.products, value]
          : form.products.filter((p) => p !== value);

        setForm({ ...form, products: updated });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };


  /* ---------------- VALIDATION ---------------- */

  const validate = () => {
    const newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.phone.trim())
      newErrors.phone = "Phone number is required";
    else if (!/^[0-9+\s()-]{7,15}$/.test(form.phone))
      newErrors.phone = "Invalid phone number";

    if (!form.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email address";

    if (!form.location.trim())
      newErrors.location = "Site location is required";

    if (!form.role)
      newErrors.role = "Please select your role";

    if (form.products.length === 0)
      newErrors.products = "Select at least one product";

    if (!form.projectType)
      newErrors.projectType = "Select project type";

    if (!form.buildStage)
      newErrors.buildStage = "Select build stage";

    if (!form.timeline)
      newErrors.timeline = "Select timeline";

    if (!form.message.trim())
      newErrors.message = "Message is required";

    if (!form.agree)
      newErrors.agree = "You must accept terms";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setSuccess(false);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Reset form
      setForm({
        name: "",
        phone: "",
        email: "",
        location: "",
        role: "",
        products: [],
        projectType: "",
        buildStage: "",
        timeline: "",
        message: "",
        agree: false,
      });

    }, 1500);
  };


  /* ---------------- UI ---------------- */

  return (
<>
    {/* HEADER */}
          <Header />


    <section className="bg-[#F6FBFA] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">


          {/* LEFT FORM */}
          <div className="bg-white rounded-xl shadow-md p-8">

            <form onSubmit={handleSubmit} className="space-y-4">


              {/* Name */}
              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className={inputStyle}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name}
                  </p>
                )}
              </div>


              {/* Phone + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Number*"
                    className={inputStyle}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    className={inputStyle}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

              </div>


              {/* Location */}
              <div>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Site Location*"
                  className={inputStyle}
                />
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.location}
                  </p>
                )}
              </div>


              {/* Role */}
              <div>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  <option value="">Your Role (Client / Contractor)</option>
                  <option>Client</option>
                  <option>Contractor</option>
                  <option>Architect</option>
                  <option>Developer</option>
                </select>

                {errors.role && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.role}
                  </p>
                )}
              </div>


              {/* Products */}
              <div>

                <p className="text-xs font-medium text-gray-600 mb-2">
                  Products of Interest
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-600">

                  {[
                    "Windows",
                    "Doors",
                    "Bi Fold Doors",
                    "Sliding Doors",
                    "Glass Room",
                    "Sky Light",
                    "Conservatory",
                  ].map((item) => (
                    <label key={item} className="flex gap-2">

                      <input
                        type="checkbox"
                        value={item}
                        onChange={handleChange}
                      />

                      {item}

                    </label>
                  ))}

                </div>

                {errors.products && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.products}
                  </p>
                )}

              </div>


              {/* Selects */}
              {[
                ["projectType", "Project Type"],
                ["buildStage", "Build Stage"],
                ["timeline", "Timeline"],
              ].map(([name, label]) => (
                <div key={name}>

                  <select
                    name={name}
                    value={form[name as keyof typeof form] as string}
                    onChange={handleChange}
                    className={inputStyle}
                  >
                    <option value="">{label}</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Renovation</option>
                  </select>

                  {errors[name] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[name]}
                    </p>
                  )}

                </div>
              ))}


              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your Message"
                  className={inputStyle}
                />

                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message}
                  </p>
                )}
              </div>


              {/* Agree */}
              <div>

                <label className="flex gap-2 text-xs text-gray-600">

                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                  />

                  I agree to the Terms & Privacy Policy

                </label>

                {errors.agree && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.agree}
                  </p>
                )}

              </div>


              {/* Button */}
              <button
                disabled={loading}
                type="submit"
                className="w-full sm:w-[210px] bg-[#0B6F63] hover:bg-[#095b52] transition text-white px-6 py-3 rounded-[10px] text-sm font-medium shadow-md hover:shadow-lg mt-6"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>


              {/* Success */}
              {success && (
                <p className="text-green-600 text-sm mt-2">
                  ✅ Form submitted successfully!
                </p>
              )}

            </form>

          </div>


          {/* RIGHT SIDE */}
          <div>

            <h3 className="text-2xl md:text-3xl font-semibold text-[#008970] mb-6">
              Your Vision. Our Systems.
              <br />
              One Exceptional Space.
            </h3>

            <div className="text-sm text-gray-700 space-y-4 mb-6">

              <div>
                <p className="font-semibold mb-2">Showroom:</p>
                <p>
                  ET JAR - J Complex <br />
                  Block A, Warehouse 11-12 <br />
                  Jebel Ali, Ind Area 1
                </p>
              </div>

              <div>
                <p className="font-semibold mb-2">Factory:</p>
                <p>
                  Dubai Real Estate Centre Ind Park <br />
                  Unit 1-B, Jebel Ali Ind Area 1
                </p>
              </div>

              <p className="text-[#008970] font-medium">
                ✉ hello@swiftrooms.ae
              </p>

              <p className="text-[#008970] font-medium">
                📞 04 347 4240
              </p>

            </div>

            <div className="rounded-xl overflow-hidden shadow-md h-[280px]">

              <iframe
                src="https://www.google.com/maps?q=Jebel+Ali+Industrial+Area+1,+Dubai&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

    
          {/* FOOTER */}
          <Footer />
          </>
  );
}
