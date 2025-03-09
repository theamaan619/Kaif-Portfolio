import React from "react";
import {
  Calculator,
  BarChart,
  Phone,
  Mail,
  Linkedin,
  Database,
  Home,
  FileText,
  Users,
} from "lucide-react";
import ServiceCard from "./components/ExpertiseCard.jsx";
import QualificationCard from "./components/QualificationCard";
import SkillCard from "./components/SkillCard";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Kaif Sankhala
              </h1>
              <h2 className="text-2xl md:text-3xl text-indigo-200 mb-6">
                Society Finance Management
              </h2>
              <p className="text-lg text-indigo-100 mb-8">
                Dedicated Society Administrator responsible for the complete
                oversight of society operations. With 2 years of hands-on
                experience, proficient in financial management, resident
                communication, and proactive problem-solving to maintain a
                well-managed community.
              </p>
              <button
                onClick={scrollToContact}
                className="bg-white text-indigo-800 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300"
              >
                Contact Me
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/KaifProfile.jpg"
                alt="Professional headshot"
                className="rounded-full w-64 h-64 object-cover object-top border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Calculator className="w-8 h-8" />}
              title="Tax Return Preparation"
              description="Comprehensive preparation of individual and business tax returns under CA supervision."
            />
            <ServiceCard
              icon={<Database className="w-8 h-8" />}
              title="Bookkeeping"
              description="Detailed bookkeeping services including accounts payable, receivable, and reconciliation."
            />
            <ServiceCard
              icon={<BarChart className="w-8 h-8" />}
              title="Financial Reporting"
              description="Preparation of financial statements and management reports."
            />
            <ServiceCard
              icon={<Home className="w-8 h-8" />}
              title="Society Operations Management"
              description="Efficient oversight of all daily society functions, including maintenance, security, and resident coordination."
            />
            <ServiceCard
              icon={<FileText className="w-8 h-8" />}
              title="Financial Record Keeping & Reporting"
              description="Accurate maintenance of financial records, budget management, and transparent reporting to society members."
            />
            <ServiceCard
              icon={<Users className="w-8 h-8" />}
              title="Resident Relations & Communication"
              description="Proactive communication with residents, addressing concerns, and fostering a positive community environment."
            />
            S
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Professional Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <SkillCard skill="Tax Preparation" level={90} />
            <SkillCard skill="Bookkeeping" level={95} />
            <SkillCard skill="Financial Reporting" level={85} />
            <SkillCard skill="QuickBooks" level={90} />
            <SkillCard skill="Excel Advanced" level={95} />
            <SkillCard skill="Regulatory Compliance" level={80} />
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Experience & Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <QualificationCard
              year="2022 -  present"
              title="Working as a Society Financial Management"
              organization="Mangesh Solutions Corporation"
              description="Working directly under CAs handling complex financial reporting and tax preparation for diverse clients."
            />
            <QualificationCard
              year="2024"
              title="Bachelor of Commerce"
              organization="Shekhawati University"
              description="Graduated with B.Com Degree"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
              <ContactInfo
                icon={<Phone className="w-6 h-6" />}
                text="+91 9549979680"
                type="phone"
                link="+91 9549979680"
              />
              <ContactInfo
                icon={<Mail className="w-6 h-6" />}
                text=": kaifsankhla072021@gmail.com"
                type="email"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
