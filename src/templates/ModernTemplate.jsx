import { forwardRef } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const ModernTemplate = forwardRef(({ data }, ref) => {
  const {
    personalDetails = {},
    summary = '',
    experience = [],
    education = [],
    skills = [],
    profileImage = null,
    themeColor = '#6366f1',
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

  return (
    <div
      ref={ref}
      id="resume-page"
      className="bg-white min-h-[297mm] w-full max-w-[210mm] mx-auto relative overflow-hidden flex transition-all duration-300"
      style={containerStyle}
    >
      <div className="w-[35%] p-8 relative" style={{ backgroundColor: themeColor }}>
        <div className="absolute top-0 left-0 w-full h-40 -skew-y-6 translate-y-8 opacity-20" style={{ backgroundColor: headingColor }}></div>
        
        <div className="relative z-10">
          {profileImage ? (
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-36 h-36 rounded-full object-cover mx-auto mb-8 border-4 border-white/30 shadow-2xl"
            />
          ) : (
            <div className="w-36 h-36 rounded-full bg-white/20 mx-auto mb-8"></div>
          )}

          <h1 className="text-3xl font-bold text-center mb-2 text-white tracking-tight">
            {personalDetails.name || 'Your Name'}
          </h1>
          <p className="text-lg text-white/80 text-center mb-8 font-light">
            {personalDetails.title || 'Job Title'}
          </p>

          <div className="space-y-4 text-white/90">
            <div className="flex items-center gap-3">
              <Mail size={16} />
              <span className="text-sm truncate">{personalDetails.email || 'email@example.com'}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} />
              <span className="text-sm">{personalDetails.phone || '+1 234 567 890'}</span>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-4">Skills</h3>
            <div className="space-y-2">
              {skills.filter(skill => skill).map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span className="text-sm text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[65%] p-10 bg-white">
        {summary && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4" style={{ color: themeColor }}>
              About Me
            </h2>
            <p className="leading-relaxed" style={{ color: textColor }}>
              {summary}
            </p>
          </section>
        )}

        {experience.length > 0 && experience.some(exp => exp.company || exp.role) && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-6 pb-2 border-b-2" style={{ color: themeColor, borderColor: `${themeColor}30` }}>
              Experience
            </h2>
            <div className="space-y-6">
              {experience.filter(exp => exp.company || exp.role).map((exp, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full border-2" style={{ borderColor: themeColor, backgroundColor: 'white' }}></div>
                  <div className="absolute left-[5px] top-6 w-0.5 h-full -translate-x-1/2" style={{ backgroundColor: `${themeColor}30` }}></div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: headingColor }}>{exp.role}</h3>
                      <p className="font-semibold" style={{ color: themeColor }}>{exp.company}</p>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>
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

        {education.length > 0 && education.some(edu => edu.university || edu.degree) && (
          <section>
            <h2 className="text-xl font-bold mb-6 pb-2 border-b-2" style={{ color: themeColor, borderColor: `${themeColor}30` }}>
              Education
            </h2>
            <div className="space-y-4">
              {education.filter(edu => edu.university || edu.degree).map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold" style={{ color: headingColor }}>{edu.degree}</h3>
                    <p style={{ color: themeColor }}>{edu.university}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-400">{edu.year}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
})

ModernTemplate.displayName = 'ModernTemplate'
export default ModernTemplate
