import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Shield,
  Users,
  CreditCard,
  AlertTriangle,
  Book,
  Scale,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const sections = [
    {
      id: "services",
      title: "About Our Services",
      icon: <Book className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-[#555555] leading-relaxed">
            Bricks provides robotics and programming education for children
            through hands-on learning experiences. Our services include:
          </p>
          <ul className="space-y-2 text-[#555555]">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>Robotics building workshops with provided kits</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>Programming and coding instruction</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>Technology problem-solving projects</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>Creative and technical skill development programs</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                Complete robotics kits included with bootcamp registration
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "enrollment",
      title: "Enrollment and Registration",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#333333] mb-2">
              1. Eligibility
            </h4>
            <p className="text-[#555555] leading-relaxed">
              Our programs are designed for children and young learners. Parents
              or legal guardians must complete enrollment for participants under
              18 years of age.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#333333] mb-2">
              2. Registration Requirements
            </h4>
            <ul className="space-y-2 text-[#555555]">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>
                  Complete and accurate registration information must be
                  provided
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>
                  Payment of applicable fees is required to secure enrollment
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>
                  Medical or special needs information should be disclosed
                  during registration
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#333333] mb-2">
              3. Class Capacity
            </h4>
            <p className="text-[#555555] leading-relaxed">
              Classes are subject to minimum and maximum enrollment limits. We
              reserve the right to cancel classes that do not meet minimum
              enrollment requirements.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "payment",
      title: "Payment Terms",
      icon: <CreditCard className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#333333] mb-2">
              1. Fees and Payment
            </h4>
            <ul className="space-y-2 text-[#555555]">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>
                  All fees must be paid in full before the start of classes
                  unless alternative arrangements are made
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>
                  Bootcamp registration fee includes a complete robotics kit for
                  each student
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>Late payment may result in suspension from classes</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#333333] mb-2">
              2. Kit Provision and Ownership
            </h4>
            <ul className="space-y-2 text-[#555555]">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>
                  Each enrolled student receives a robotics kit as part of their
                  bootcamp registration
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>
                  Kits become the property of the student upon full payment of
                  fees
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>
                  Students are responsible for bringing their assigned kit to
                  each class
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>
                  Lost or damaged kit components may require additional fees for
                  replacement
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#333333] mb-2">
              3. Fee Changes
            </h4>
            <p className="text-[#555555] leading-relaxed">
              We reserve the right to modify our fees with reasonable notice to
              enrolled students and their families.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "conduct",
      title: "Student Conduct and Safety",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#333333] mb-2">
              1. Behavior Expectations
            </h4>
            <p className="text-[#555555] mb-3">Students are expected to:</p>
            <ul className="space-y-2 text-[#555555]">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>Follow instructor guidance and safety protocols</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>
                  Treat equipment, materials, robotics kits, and facilities with
                  care
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>Show respect for instructors and fellow students</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>Maintain a positive learning environment</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>
                  Bring their assigned robotics kit to each class session
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#333333] mb-2">
              2. Safety Measures
            </h4>
            <ul className="space-y-2 text-[#555555]">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>
                  Students must follow all safety guidelines when handling
                  robotics kits and equipment
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>
                  Parents must inform us of any medical conditions or allergies
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>We maintain age-appropriate supervision ratios</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>
                  Proper care and handling of robotics kits is mandatory for
                  safety
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#333333] mb-2">
              3. Disciplinary Actions
            </h4>
            <p className="text-[#555555] leading-relaxed">
              Disruptive behavior may result in removal from class without
              refund. We will work with families to address behavioral concerns
              constructively.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "intellectual",
      title: "Intellectual Property",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#333333] mb-2">
              1. Course Materials
            </h4>
            <p className="text-[#555555] leading-relaxed">
              All course materials, curricula, and teaching methods are
              proprietary to Bricks and protected by intellectual property laws.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#333333] mb-2">
              2. Student Creations
            </h4>
            <p className="text-[#555555] leading-relaxed">
              While students retain ownership of their individual projects,
              Bricks may use photos and videos of student work for promotional
              purposes with appropriate consent.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-[#555555] leading-relaxed">
            Bricks' liability is limited to the amount of fees paid for
            services. We are not liable for indirect, incidental, or
            consequential damages. Parents acknowledge that robotics and
            technology activities involve inherent risks.
          </p>
        </div>
      ),
    },
    {
      id: "privacy",
      title: "Privacy and Data Protection",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-[#555555] leading-relaxed">
            We collect and use personal information in accordance with our
            Privacy Policy. Student information is kept confidential and used
            solely for educational and administrative purposes.
          </p>
        </div>
      ),
    },
    {
      id: "modifications",
      title: "Modifications to Terms",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-[#555555] leading-relaxed">
            We reserve the right to modify these Terms at any time. Changes will
            be communicated to enrolled families and posted on our website.
          </p>
        </div>
      ),
    },
    {
      id: "governing",
      title: "Governing Law",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-[#555555] leading-relaxed">
            These Terms are governed by the laws of [Your State/Country]. Any
            disputes will be resolved through [specify dispute resolution
            method].
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] py-15">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bricks Education Aryan Jakhar
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms And Condition
          </h1>
          {/*<p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get in Touch with Bricks Education Aryan Jakhar
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto mt-4">
            We'd love to hear from you! Whether you have questions about our
            robotics and programming courses or want to enroll your child, our
            team is here to help.
          </p>*/}
        </div>
      </div>
      {/*
      <div className="bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms and Conditions
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Please read these terms carefully before using our robotics
              education services
            </p>
          </div>
        </div>
      </div> */}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-[#EEEEEE]">
          <p className="text-lg text-[#555555] leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-[#FF5722]">Bricks</span>! These
            Terms and Conditions ("Terms") govern your use of our robotics and
            programming education services. By enrolling in our courses or using
            our services, you agree to these Terms.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-md border border-[#EEEEEE] overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF5722]/10 text-[#FF5722]">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333]">
                      {index + 1}. {section.title}
                    </h3>
                  </div>
                </div>
                <div className="text-[#FF5722]">
                  {expandedSections[section.id] ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </div>
              </button>

              {expandedSections[section.id] && (
                <div className="px-8 pb-6 border-t border-[#EEEEEE]">
                  <div className="pt-6">{section.content}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#FFAB91]/10 to-[#FF7043]/10 rounded-lg p-8 mt-12 border border-[#FFAB91]/20">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF5722] text-white flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#333333] mb-2">
                Contact Information
              </h3>
              <p className="text-[#555555] leading-relaxed">
                For questions about these Terms and Conditions, please contact
                us using the information provided on our{" "}
                <Link
                  to="/contact-us"
                  className="text-[#FF5722] hover:underline font-semibold"
                >
                  Contact Us
                </Link>{" "}
                page.
              </p>
              <li>Legal Name: Aryan Jakhar</li>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 pt-8 border-t border-[#EEEEEE]">
          <p className="text-sm text-[#555555]">
            Last updated: July 2025 • These terms are subject to change with
            notice
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
