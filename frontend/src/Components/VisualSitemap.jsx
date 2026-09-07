import React from 'react';

// Custom structure configured for Malani Marbles
const sitemapData = [
  {
    title: 'The Company',
    links: [
      { name: 'About Malani', href: '#about' },
      { name: 'Global Sourcing', href: '#sourcing' },
      { name: 'Quality Assurance', href: '#quality' },
      { name: 'Featured Projects', href: '#projects' },
    ],
  },
  {
    title: 'Marble Collection',
    links: [
      { name: 'Popular Marble', href: '#popular' },
      { name: 'Italian Marble', href: '#italian' },
      { name: 'Imported Slabs', href: '#imported' },
      { name: 'Countertops', href: '#countertops' },
    ],
  },
  {
    title: 'Slimtech Tiles',
    links: [
      { name: 'Coloured & Textures', href: '#textures' },
      { name: 'Leather & Polished', href: '#finishes' },
      { name: 'Tiles by Application', href: '#applications' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Delhi Showroom', href: '#delhi' },
      { name: 'Kishangarh Office', href: '#kishangarh' },
      { name: 'Enquiry & Quotes', href: '#enquiry' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { name: 'Blogs & Guides', href: '#blog' },
      { name: 'Download Catalogue', href: '#catalogue' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'FAQs', href: '#faqs' },
    ],
  },
];

export default function VisualSitemap() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 flex flex-col items-center font-sans">
      
      <div className="border-[3px] border-sky-400 text-sky-600 text-2xl sm:text-3xl font-bold px-10 py-2 rounded-full bg-white mb-10 shadow-sm">
        Sitemap
      </div>

      <div className="w-full max-w-7xl overflow-x-auto pb-8">
        <div className="min-w-[900px] flex flex-col items-center">
          
          <div className="bg-pink-100 border-2 border-red-200 text-rose-900 text-lg font-bold px-10 py-3 rounded-full shadow-sm z-10">
            Home Page
          </div>

          <div className="w-[2px] h-10 bg-slate-800"></div>

          <div className="w-full flex justify-between relative">
            
            <div className="absolute top-0 left-[10%] right-[10%] h-[2px] bg-slate-800 z-0"></div>

            {sitemapData.map((category, colIdx) => (
              <div key={colIdx} className="flex-1 flex flex-col items-center px-2 relative">
                
                <div className="w-[2px] h-6 bg-slate-800 z-10"></div>

                <div className="w-full bg-indigo-100 text-indigo-950 font-bold text-center py-3 px-2 rounded-lg shadow-sm z-10 text-sm sm:text-base">
                  {category.title}
                </div>

                <div className="w-full flex flex-col items-center mt-3 relative">
                  
                  <div className="w-[2px] h-3 bg-slate-800 mb-1"></div>

                  {category.links.map((link, linkIdx) => (
                    <React.Fragment key={linkIdx}>
                      <a
                        href={link.href}
                        className="w-[92%] bg-sky-100 text-sky-800 text-xs sm:text-sm font-semibold py-2.5 px-3 rounded-full text-center transition-all duration-200 hover:bg-sky-200 hover:-translate-y-0.5 shadow-sm"
                      >
                        {link.name}
                      </a>

                      {linkIdx < category.links.length - 1 && (
                        <div className="w-[2px] h-3 bg-slate-800 my-0.5"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>

    </div>
  );
}