import React, { useState } from "react";
import {
  Shield,
  Book,
  Users,
  Lock,
  Mail,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Book className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-[#555555] leading-relaxed">
            Bricks Education collects various types of information to provide
            and improve our robotics and programming education services. This
            includes:
          </p>
          <ul className="space-y-2 text-[#555555]">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Personal Identification Information:</strong> Name,
                email address, phone number, physical address, date of birth
                (for age-appropriate program placement), and parent/guardian
                contact details. This is collected during registration and
                inquiry submissions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Technical Data:</strong> IP address, browser type,
                operating system, and usage patterns when you interact with our
                website. This helps us improve website functionality and user
                experience.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Educational Progress Data:</strong> Information related
                to student performance, project completion, and participation
                within our courses.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Communication Data:</strong> Records of correspondence,
                including emails and messages sent through our contact forms.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-[#555555] leading-relaxed">
            The information collected by Bricks Education is used for the
            following purposes:
          </p>
          <ul className="space-y-2 text-[#555555]">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>
                <strong>To Provide Services:</strong> To process registrations,
                enroll students in courses, deliver educational content, and
                manage program logistics.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Communication:</strong> To respond to inquiries, send
                important updates about courses, events, and policy changes, and
                provide customer support.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Improvement of Services:</strong> To analyze usage
                patterns, gather feedback, and enhance our curriculum, teaching
                methods, and website functionality.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Marketing and Promotions:</strong> With explicit
                consent, to inform you about new courses, special offers, or
                relevant educational content. You can opt-out at any time.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Legal Compliance:</strong> To comply with legal
                obligations, resolve disputes, and enforce our agreements.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-protection",
      title: "How We Protect Your Information",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-[#555555] leading-relaxed">
            Bricks Education is committed to protecting your personal
            information. We implement a variety of security measures to maintain
            the safety of your data:
          </p>
          <ul className="space-y-2 text-[#555555]">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Secure Data Storage:</strong> We store personal data on
                secure servers with restricted access.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Encryption:</strong> Data transmitted to and from our
                website is protected using SSL/TLS encryption.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Access Control:</strong> Access to personal data is
                limited to authorized personnel who require the information to
                perform their duties.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Regular Security Audits:</strong> We regularly review
                our security practices to ensure data integrity and prevent
                unauthorized access.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Third-Party Processors:</strong> While we use
                third-party services (e.g., payment processors, analytics
                tools), we ensure they adhere to strict data protection
                standards. We do not sell or rent your personal information to
                third parties.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "your-rights",
      title: "Your Data Protection Rights",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-[#555555] leading-relaxed">
            You have certain rights regarding your personal data held by Bricks
            Education :
          </p>
          <ul className="space-y-2 text-[#555555]">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Right to Access:</strong> You can request a copy of the
                personal data we hold about you.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Right to Rectification:</strong> You can request
                correction of inaccurate or incomplete data.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Right to Erasure:</strong> You can request deletion of
                your personal data, subject to legal obligations.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Right to Object:</strong> You can object to the
                processing of your personal data for certain purposes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                To exercise these rights, please contact us using the details
                below.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "policy-changes",
      title: "Changes to This Privacy Policy",
      icon: <Mail className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-[#555555] leading-relaxed">
            Bricks Education reserves the right to update or modify this Privacy
            Policy at any time. Any changes will be posted on this page with an
            updated "Effective Date." We encourage you to review this policy
            periodically for any changes.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8] py-16">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bricks Education Adhyayan and Aryan Jakhar
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
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
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your Privacy is Important to Bricks Education Aryan Jakhar
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm opacity-75">
            <span>Effective Date: July 2025</span>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-[#EEEEEE]">
          <p className="text-lg text-[#555555] leading-relaxed">
            This Privacy Policy describes how <strong>Bricks Education </strong>{" "}
            collects, uses, and protects the personal information you provide
            when using our website and services. By accessing or using our
            services, you agree to the terms of this Privacy Policy.
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

        {/* Contact Information Section */}
        <div className="bg-gradient-to-r from-[#FFAB91]/10 to-[#FF7043]/10 rounded-lg p-8 mt-12 border border-[#FFAB91]/20">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF5722] text-white flex-shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#333333] mb-2">
                Contact Us
              </h3>
              <p className="text-[#555555] leading-relaxed">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <ul className="mt-2 space-y-1 text-[#555555]">
                <li>Legal Name: Adhyayan and Aryan Jakhar</li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:support@bricks.org.in"
                    className="text-[#FF5722] hover:underline"
                  >
                    support@bricks.org.in
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:+919871672790"
                    className="text-[#FF5722] hover:underline"
                  >
                    +91 98716 72790
                  </a>
                </li>
                <li>
                  Address: Electronic City Phase 1 , Bengaluru , Karnataka
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
