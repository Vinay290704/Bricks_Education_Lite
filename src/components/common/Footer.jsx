const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm border-t border-orange-500/30 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-orange-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
              BRICKS EDUCATION
            </h3>
            <p className="text-gray-300 italic text-lg leading-relaxed font-medium">
              Learning by Doing, Leading by Thinking!
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="mb-6 p-4 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-orange-400/30 shadow-lg hover:shadow-xl hover:bg-gray-700/60 transition-all duration-300">
              <span className="font-semibold text-white block mb-2">
                Phone:
              </span>
              <a
                href="tel:+919871672790"
                className="text-orange-400 text-xl font-medium transition-all duration-300 hover:text-orange-300 hover:scale-105 inline-block"
              >
                +91 98716 72790
              </a>
            </div>

            <div className="p-4 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-orange-400/30 shadow-lg hover:shadow-xl hover:bg-gray-700/60 transition-all duration-300">
              <span className="font-semibold text-white block mb-2">
                Email:
              </span>
              <a
                href="mailto:support@bricks.org.in"
                className="text-orange-400 text-xl font-medium transition-all duration-300 hover:text-orange-300 hover:scale-105 inline-block"
              >
                support@bricks.org.in
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="p-4 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-orange-400/30 shadow-lg">
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong>Bricks </strong>
                is where kids learn robotics and programming in a fun, hands-on
                way. We teach students how to build robots, code programs, and
                solve real problems using technology. Our courses help young
                minds develop creativity, logical thinking, and technical skills
                that prepare them for the future. With expert teachers and
                exciting projects, we make learning about technology enjoyable
                and accessible for everyone.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-orange-400/30 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Bricks Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
