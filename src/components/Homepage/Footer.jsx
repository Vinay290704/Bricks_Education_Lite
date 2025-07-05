import React from 'react'

const Footer = () => {
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">BRICKS EDUCATION</h3>
            <p className="text-gray-300 italic">
              Learning by Doing, Leading by Thinking!
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <span className="font-semibold">Phone:</span>
              <br />
              <a
                href="tel:+919462311937"
                className="text-orange-400 hover:text-orange-300"
              >
                +91 94623 11937
              </a>
            </div>

            <div>
              <span className="font-semibold">Email:</span>
              <br />
              <a
                href="mailto:aryan@bricks.org.in"
                className="text-orange-400 hover:text-orange-300"
              >
                aryan@bricks.org.in
              </a>
            </div>
          </div>

          {/* Note Section */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-300">
              <strong>Note:</strong> Our team will capture key moments from the
              workshop through photos and videos. The school is welcome to use
              this content on their website, social media, or in promotional
              materials.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer