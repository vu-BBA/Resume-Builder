import { Helmet } from 'react-helmet-async'
import ResumeBuilder from './ResumeBuilder'

function App() {
  return (
    <>
      <Helmet>
        <title>Free Professional Resume Builder | Create Your CV Online</title>
        <meta name="description" content="ATS-friendly templates and free PDF downloads. Create a professional resume in minutes." />
        <meta name="keywords" content="resume builder, CV maker, free resume, ATS friendly, PDF download, professional resume template" />
        <link rel="canonical" href="https://your-domain.com" />
      </Helmet>
      <ResumeBuilder />
    </>
  )
}

export default App