import React from 'react'
import InfoHeader from './infoHeader/InfoHeader'
import ResumeTitle from './ResumeTitle';
import ContactInfo from './ContactInfo';
import ProfSummary from './ProfSummary';
import Experience from './Experience';
import Certification from './Certification';
import Awards from './Awards';
import Projects from './Projects';
import Volunteering from './Volunteering';
import Publications from './Publications';
import Skills from './Skills';
import Interest from './Interest';
import Education from './Education';
import ResumeTemplateView from './resume-view/ResumeTemplateView';

function ResumeView() {
  return (
    <section className="mt-[76px]">
      <InfoHeader />
      <div className="flex items-center justify-center">
        {/* left */}
        <div className="left w-3/6  h-screen">
          <ContactInfo />
          <ResumeTitle />
          <ProfSummary />
          <Experience />
          <Education/>
          <Certification />
          <Awards />
          <Projects />
          <Volunteering />
          <Publications />
          <Skills />
          <Interest />
        </div>

        {/* right */}
        <div className="right w-3/6 h-screen ">
          <h2 className="border border-gray-300 text-lg p-[20px]">Preview</h2>
          <p className='leading-4 p-3'>
            Edit and select the information on the left to add content to your
            resume.
          </p>
          <hr />
          
          <div>

          <ResumeTemplateView/>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ResumeView