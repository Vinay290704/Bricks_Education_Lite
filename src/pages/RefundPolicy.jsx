import { Phone } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F8] py-16">
      <div className="bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bricks Education Adhyayan and Aryan Jakhar
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Understanding Bricks Education's Refund Terms
          </p>
        </div>
      </div> */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div className="bg-white rounded-lg shadow-md p-8 border border-[#EEEEEE]">
          <h2 className="text-3xl font-bold text-[#333333] mb-4">
            No Refund Policy
          </h2>
          <p className="text-lg text-[#555555] leading-relaxed">
            At Bricks, we are committed to providing high-quality robotics and
            programming education for children. Due to the nature of our
            hands-on learning programs and the resources allocated for each
            student, we maintain a strict no-refund policy.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 border border-[#EEEEEE] space-y-6">
          <h2 className="text-3xl font-bold text-[#333333] mb-4">
            Policy Details
          </h2>
          <div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              1. No Refunds Under Any Circumstances
            </h3>
            <p className="text-[#555555] leading-relaxed mb-3">
              All fees paid are non-refundable once enrollment is confirmed and
              robotics kit is distributed.
            </p>
            <p className="text-[#555555] leading-relaxed mb-2">
              This includes but is not limited to:
            </p>
            <ul className="list-disc list-inside text-[#555555] space-y-1 ml-4">
              <li>Course registration fees</li>
              <li>Tuition payments</li>
              <li>Material fees</li>
              <li>Workshop fees</li>
              <li>Summer camp fees</li>
              <li>Value of provided robotics kits</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              2. Enrollment Confirmation and Kit Distribution
            </h3>
            <p className="text-[#555555] leading-relaxed">
              Payment of fees constitutes enrollment confirmation. Once payment
              is processed and the robotics kit is provided to the student, the
              no-refund policy takes immediate effect. Students retain ownership
              of their robotics kit regardless of program completion.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              3. Circumstances Not Eligible for Refunds
            </h3>
            <p className="text-[#555555] leading-relaxed mb-2">
              The following situations do not qualify for refunds:
            </p>
            <ul className="list-disc list-inside text-[#555555] space-y-1 ml-4">
              <li>Student absence from classes</li>
              <li>
                Student withdrawal for any reason (robotics kit remains with
                student)
              </li>
              <li>Dissatisfaction with course content or teaching methods</li>
              <li>Family schedule changes or conflicts</li>
              <li>Medical issues or emergencies</li>
              <li>Weather-related cancellations beyond our control</li>
              <li>Technology equipment malfunctions</li>
              <li>Changes in student interest or motivation</li>
              <li>Loss or damage to provided robotics kit</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              4. Class Cancellations by Bricks
            </h3>
            <p className="text-[#555555] leading-relaxed mb-2">
              In the rare event that Bricks must cancel a course due to:
            </p>
            <ul className="list-disc list-inside text-[#555555] space-y-1 ml-4">
              <li>Insufficient enrollment</li>
              <li>Instructor unavailability</li>
              <li>Facility issues</li>
            </ul>
            <p className="text-[#555555] leading-relaxed mt-2">
              We will offer the following alternatives instead of refunds:
            </p>
            <ul className="list-disc list-inside text-[#555555] space-y-1 ml-4">
              <li>Transfer to another available course of equal value</li>
              <li>Credit toward future enrollment</li>
              <li>Rescheduling to a later session</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              5. Make-Up Classes
            </h3>
            <p className="text-[#555555] leading-relaxed">
              If a student misses classes, we may offer make-up sessions at our
              discretion, subject to: Instructor availability, Facility
              capacity, Advance notice from families.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              6. Course Changes
            </h3>
            <p className="text-[#555555] leading-relaxed mb-2">
              Students may request to transfer to a different course before the
              start date of their enrolled program, subject to:
            </p>
            <ul className="list-disc list-inside text-[#555555] space-y-1 ml-4">
              <li>Availability in the requested course</li>
              <li>
                No additional fees (if transferring to a course of equal or
                lesser value)
              </li>
              <li>
                Payment of difference (if transferring to a course of higher
                value)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              7. Understanding Our Policy
            </h3>
            <p className="text-[#555555] leading-relaxed mb-2">
              By enrolling in Bricks programs, families acknowledge and agree
              that:
            </p>
            <ul className="list-disc list-inside text-[#555555] space-y-1 ml-4">
              <li>They have read and understood this no-refund policy</li>
              <li>All sales are final</li>
              <li>No exceptions will be made to this policy</li>
              <li>
                Alternative arrangements (transfers, credits) are offered at
                Bricks' sole discretion
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              8. Course Information and Expectations
            </h3>
            <p className="text-[#555555] leading-relaxed mb-2">
              We encourage families to:
            </p>
            <ul className="list-disc list-inside text-[#555555] space-y-1 ml-4">
              <li>Thoroughly review course descriptions before enrollment</li>
              <li>Ask questions during the enrollment process</li>
              <li>Visit our facility to understand our learning environment</li>
              <li>Speak with our instructors about course expectations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              9. Payment Disputes
            </h3>
            <p className="text-[#555555] leading-relaxed mb-2">
              In case of payment disputes or billing errors:
            </p>
            <ul className="list-disc list-inside text-[#555555] space-y-1 ml-4">
              <li>
                Contact our office immediately at{" "}
                <a
                  href="tel:+919871672790"
                  className="text-[#FF5722] hover:underline"
                >
                  +91 98716 72790
                </a>{" "}
                or{" "}
                <a
                  href="mailto:support@bricks.org.in"
                  className="text-[#FF5722] hover:underline"
                >
                  support@bricks.org.in
                </a>
              </li>
              <li>We will investigate and resolve legitimate billing errors</li>
              <li>
                Correction of billing errors does not constitute a refund under
                this policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              10. Policy Modifications
            </h3>
            <p className="text-[#555555] leading-relaxed">
              Bricks reserves the right to modify this refund policy at any
              time. Changes will be posted on our website and communicated to
              current students and their families.
            </p>
          </div>
        </div>
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
                If you have questions about this refund policy or need
                clarification before enrolling, please contact us:
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
        <div className="text-center mt-8 pt-8 border-t border-[#EEEEEE]">
          <p className="text-base text-[#555555] font-semibold">
            By enrolling in Bricks programs, you acknowledge that you have read,
            understood, and agree to abide by this No Refund Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
