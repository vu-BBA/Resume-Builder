import { forwardRef } from 'react'
import { Mail, Phone, Globe } from 'lucide-react'

const CreativeTemplate = forwardRef(({ data }, ref) => {
  const {
    personalDetails = {},
    summary = '',
    experience = [],
    education = [],
    skills = [],
    profileImage = null,
    themeColor = '#ec4899',
    headingColor = '#0f172a',
    textColor = '#475569',
    fontSize = 16,
    fontFamily = "'Outfit', sans-serif"
  } = data

  const containerStyle = {
    minHeight: '297mm',
    fontFamily: fontFamily,
    fontSize: `${fontSize}px`,
    color: textColor
  }

  const gradients = [
    'from-pink-500 via-rose-500 to-red-500',
    'from-violet-500 via-purple-500 to-fuchsia-500',
    'from-cyan-500 via-blue-500 to-indigo-500',
    'from-amber-500 via-orange-500 to-red-500',
    'from-emerald-500 via-teal-500 to-cyan-500'
  ]

  const gradientClass = gradients[Math.abs(personalDetails.name?.length || 0) % gradients.length]

  return (
    <div
      ref={ref}
      id="resume-page"
      className="bg-white min-h-[297mm] w-full max-w-[210mm] mx-auto relative overflow-hidden transition-all duration-300"
      style={containerStyle}
    >
      <div className="flex">
        <div className="w-[40%] min-h-[297mm]" style={{ backgroundColor: headingColor }}>
          {profileImage ? (
            <div className="p-8 pb-0">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full aspect-square rounded-3xl object-cover shadow-2xl"
              />
            </div>
          ) : (
            <div className="p-8 pb-0">
              <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <span className="text-6xl font-bold text-slate-600">
                  {personalDetails.name?.charAt(0) || '?'}
                </span>
              </div>
            </div>
          )}

          <div className="p-8">
            <div className="mb-8">
              <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: themeColor }}></div>
              <h1 className="text-3xl font-black text-white mb-2 leading-tight">
                {personalDetails.name || 'Your Name'}
              </h1>
              <p className="text-lg font-medium" style={{ color: themeColor }}>
                {personalDetails.title || 'Job Title'}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {personalDetails.email && (
                <div className="flex items-center gap-3 text-white/80">
                  <Mail size={16} style={{ color: themeColor }} />
                  <span className="text-sm">{personalDetails.email}</span>
                </div>
              )}
              {personalDetails.phone && (
                <div className="flex items-center gap-3 text-white/80">
                  <Phone size={16} style={{ color: themeColor }} />
                  <span className="text-sm">{personalDetails.phone}</span>
                </div>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.filter(skill => skill).map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: `${themeColor}40` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Education</h3>
              <div className="space-y-4">
                {education.filter(edu => edu.university || edu.degree).map((edu, idx) => (
                  <div key={idx}>
                    <p className="font-bold text-white">{edu.degree}</p>
                    <p className="text-sm text-white/60">{edu.university}</p>
                    <p className="text-xs text-white/40">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[60%] p-10 bg-gradient-to-br from-white to-slate-50">
          {summary && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: themeColor }}>
                  <span className="text-white font-bold text-sm">01</span>
                </div>
                <h2 className="text-2xl font-bold" style={{ color: headingColor }}>Profile</h2>
              </div>
              <div className="ml-11 p-6 rounded-2xl bg-white shadow-lg">
                <p className="leading-relaxed" style={{ color: textColor }}>
                  {summary}
                </p>
              </div>
            </section>
          )}

          {experience.length > 0 && experience.some(exp => exp.company || exp.role) && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: themeColor }}>
                  <span className="text-white font-bold text-sm">02</span>
                </div>
                <h2 className="text-2xl font-bold" style={{ color: headingColor }}>Experience</h2>
              </div>
              <div className="ml-11 space-y-4">
                {experience.filter(exp => exp.company || exp.role).map((exp, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: themeColor }}></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold" style={{ color: headingColor }}>{exp.role}</h3>
                        <p className="font-semibold" style={{ color: themeColor }}>{exp.company}</p>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-sm leading-relaxed" style={{ color: textColor }}>{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
            <div className="w-full h-full rounded-full" style={{ backgroundColor: themeColor }}></div>
          </div>
        </div>
      </div>
    </div>
  )
})

CreativeTemplate.displayName = 'CreativeTemplate'
export default CreativeTemplate
