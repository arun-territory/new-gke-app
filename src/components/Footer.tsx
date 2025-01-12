import { 
    Youtube, 
    Twitter, 
    Instagram, 
    Linkedin, 
    Facebook,
    MessageCircle,
    PhoneCall,
    Mail
  } from 'lucide-react';
  
  const socialLinks = [
    { icon: Youtube, href: 'https://www.youtube.com/watch?v=Rl5M1CzgEH4&t=13s', label: 'YouTube' },
    { icon: Twitter, href: 'https://x.com/Arun65793277820?t=IijWlkABQE6r2S1QC-u06w&s=09', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/cloved_cd?utm_source=qr&igsh=dHJlbXhlbjg5bmx2', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];
  
  const navigationLinks = {
    'About': [
      { label: 'About Us', href: '#' },
      { label: 'Terms of Use', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Refund Policy', href: '#' }
    ],
    'ROADMAP': [
      { label: 'The Complete Roadmap', href: '#' },
      { label: 'Software Setup', href: '#' },
      { label: 'GitHub Actions', href: '#' },
      { label: 'Docker', href: '#' }
    ],
    'OFFERINGS': [
      { label: 'All Courses', href: '#' },
      { label: 'Industry Projects', href: '#' },
      { label: 'Youtube', href: '#' },
      { label: 'List of Blogs', href: '#' }
    ],
    'HELP': [
      { label: 'Drop a Query', href: '#' },
      { label: "FAQ's", href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Testimonials', href: '#' }
    ]
  };
  
  const contactButtons = [
    { 
      icon: MessageCircle, 
      label: 'Drop A Query',
      onClick: () => window.location.href = 'https://your-query-form.com'
    },
    { 
      icon: PhoneCall, 
      label: 'Request For Call Back',
      onClick: () => window.location.href = '+91 8317583352'
    },
    { 
      icon: Mail, 
      label: 'Email Us',
      onClick: () => window.location.href = 'mailto:arun.devcloud@gmail.com'
    }
  ];
  
  export function Footer() {
    return (
      <footer className="bg-[#151626] text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand and Social Section */}
            <div className="lg:col-span-1">
              {/* Logo Section */}
              <div className="mb-6">
                <a href="/" className="inline-block">
                  <div className="flex items-center space-x-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                      <span className="text-2xl font-bold text-white">GKE</span>
                    </div>
                    <span className="text-2xl font-bold text-white">cloud</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">
                    Transform your career with DevOps
                  </p>
                </a>
              </div>
  
              <h2 className="text-xl font-bold mb-4">Connect with us</h2>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a 
                    key={label}
                    href={href}
                    className="hover:text-blue-400 transition-colors"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
  
            {/* Navigation Links */}
            {Object.entries(navigationLinks).map(([title, links]) => (
              <div key={title}>
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <ul className="space-y-2">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a 
                        href={href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          {/* Newsletter Section */}
          <div className="mt-12 border-t border-gray-700 pt-8">
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold mb-2">Get our new articles, videos and live sessions info.</h2>
              <p className="text-gray-300 mb-4">Join 54,000+ fine folks. Stay as long as you'd like. Unsubscribe anytime.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="What's your e-mail?"
                  className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-900"
                />
                <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  Yes, Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Sticky Contact Buttons */}
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 py-3 px-4 flex justify-center gap-4 border-t border-gray-800">
          {contactButtons.map(({ icon: Icon, label, onClick }) => (
            <button
              key={label}
              onClick={onClick}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </button>
          ))}
        </div>
  
        {/* Copyright Section */}
        <div className="bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>Copyright 2025 | All Rights Reserved by gkecloud</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of service</a>
              <a href="#" className="hover:text-white">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;