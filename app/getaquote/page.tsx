"use client";

import { useState } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function GetAQuotePage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    role: "",
    projectType: "",
    buildStage: "",
    timeline: "",
    message: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<any>({});

  // Handle Input
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validation
  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.location.trim()) newErrors.location = "Location is required";
    if (!form.role) newErrors.role = "Select role";
    if (!form.projectType) newErrors.projectType = "Select project type";
    if (!form.buildStage) newErrors.buildStage = "Select build stage";
    if (!form.timeline) newErrors.timeline = "Select timeline";
    if (!form.agree) newErrors.agree = "You must accept terms";

    return newErrors;
  };

  // Submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate API call
    await new Promise((r) => setTimeout(r, 2000));

    setLoading(false);
    setSuccess(true);

    // Reset form
    setForm({
      name: "",
      phone: "",
      email: "",
      location: "",
      role: "",
      projectType: "",
      buildStage: "",
      timeline: "",
      message: "",
      agree: false,
    });

    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <>

      {/* HEADER */}
      <Header />


      {/* MAIN SECTION */}
      <section
        className="relative bg-cover bg-center py-28"
        style={{
          backgroundImage: "url('/images/getaquote/background.png')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 gap-12 items-start">

  {/* PAGE TITLE + BREADCRUMB */}
  <div className="text-center text-white mb-10">

    <p className="text-white/70 text-sm mb-2">
      <a href="/" className="hover:text-white transition">
        Home
      </a>
      {" > "}
      <span className="text-white font-medium">
        Get a Quote Form
      </span>
    </p>

    <h1 className="text-3xl md:text-4xl font-bold">
      Get a Quote
    </h1>

  </div>


  {/* FORM */}
  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 max-w-xl w-full mx-auto">


              {success && (
                <div className="bg-green-500/20 border border-green-400 text-green-200 text-sm p-3 rounded mb-4 text-center">
                  ✅ Form submitted successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="form-input"
                />
                {errors.name && <p className="error">{errors.name}</p>}

                {/* Phone + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone*"
                      className="form-input"
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                  </div>

                  <div>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email*"
                      className="form-input"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>

                </div>

                {/* Location */}
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Site Location*"
                  className="form-input"
                />
                {errors.location && (
                  <p className="error">{errors.location}</p>
                )}

                {/* Role */}
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Your Role</option>
                  <option>Client</option>
                  <option>Contractor</option>
                  <option>Architect</option>
                  <option>Developer</option>
                </select>

                {errors.role && <p className="error">{errors.role}</p>}

                {/* Project Type */}
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Project Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                </select>

                {errors.projectType && (
                  <p className="error">{errors.projectType}</p>
                )}

                {/* Build Stage */}
                <select
                  name="buildStage"
                  value={form.buildStage}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Build Stage</option>
                  <option>Planning</option>
                  <option>Under Construction</option>
                  <option>Renovation</option>
                </select>

                {errors.buildStage && (
                  <p className="error">{errors.buildStage}</p>
                )}

                {/* Timeline */}
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Timeline</option>
                  <option>Immediately</option>
                  <option>1–3 Months</option>
                  <option>3–6 Months</option>
                </select>

                {errors.timeline && (
                  <p className="error">{errors.timeline}</p>
                )}

                {/* Message */}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="form-input"
                />

                {/* Terms */}
                <label className="flex items-center gap-2 text-xs text-white/80">

                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                  />

                  I agree to the Terms & Privacy Policy
                </label>

                {errors.agree && <p className="error">{errors.agree}</p>}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#00B295] to-[#008970] text-white px-6 py-3 rounded-md text-sm font-semibold hover:scale-105 transition transform shadow-lg disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>

              </form>
            </div>

          </div>

        </div>

        {/* Styles */}
        <style jsx>{`
  .form-input {
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    padding: 10px 14px;
    font-size: 14px;
    color: white;
    outline: none;
    backdrop-filter: blur(6px);
  }

  /* Placeholder */
  .form-input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  /* Focus */
  .form-input:focus {
    border-color: #00b295;
    box-shadow: 0 0 0 2px rgba(0, 178, 149, 0.4);
  }

  /* SELECT DROPDOWN FIX */
  select.form-input {
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
  }

  /* Dropdown Options */
  select.form-input option {
    background-color: #ffffff;
    color: #111827;
    padding: 10px;
  }

  /* Disabled Option */
  select.form-input option[value=""] {
    color: #9ca3af;
  }

  /* Error */
  .error {
    color: #fca5a5;
    font-size: 12px;
    margin-top: 2px;
  }
`}</style>


      </section>


      {/* FOOTER */}
      <Footer />

    </>
  );
}
