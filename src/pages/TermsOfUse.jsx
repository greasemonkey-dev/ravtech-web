import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfUsePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#D2EAFB' }}>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0373BA' }}>
            LEGAL
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Terms of Use and Privacy Policy
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Terms of Use */}
          <Card className="border-none shadow-xl bg-white mb-12">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
                Terms of Use – RavTech
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  By accessing or using this website, you ("User") acknowledge that you have read, 
                  understood, and agree to be bound by these Terms of Use.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">1. General</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms of Use apply to the website www.ravtech.co.il (the "Website"), including all 
                  pages, sections, and digital content (the "Content").
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Website is owned and operated by RavTech Ltd. ("the Company").
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  These Terms govern your access to and use of the Website and any information, materials, 
                  or services provided through it, via any device or platform.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">2. Website Content and Limitation of Liability</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Website and all Content are provided "as is", and your use of the Website is at your sole 
                  responsibility and risk.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  RavTech strives to ensure that the information presented is accurate and up to date; 
                  however, errors, omissions, or technical inaccuracies may occur. The Company shall not be 
                  liable for any direct or indirect damage arising from your use of or reliance upon any 
                  Content on the Website.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The information provided does not constitute professional advice, recommendation, or an offer.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  RavTech is not responsible for any damage to your device, data, or software resulting from 
                  the use of the Website, including malware or downloads.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">3. Intellectual Property</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All intellectual property rights related to the Website, its design, code, graphics, and 
                  Content are the exclusive property of RavTech or third parties who have authorised its use.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  No material from the Website may be copied, distributed, modified, transmitted, displayed, 
                  or sold without prior written consent from the Company.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Use of trademarks, logos, or brand elements without prior written consent is strictly prohibited.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">4. Permitted Use and Restrictions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">When using the Website, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Interfere with or disrupt the Website's normal operation.</li>
                  <li>Attempt to access information or systems not intended for you.</li>
                  <li>Modify, reproduce, or use Content for commercial purposes without permission.</li>
                  <li>Upload or transmit harmful code, viruses, or unauthorised materials.</li>
                  <li>Violate any applicable law or regulation.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You agree to indemnify RavTech for any damage, claim, or expense arising from your 
                  violation of these Terms of Use.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">5. Links to Third-Party Websites</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Website may include links to external websites or services not operated by RavTech 
                  ("Linked Sites").
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  These links are provided for convenience only. RavTech is not responsible for the content, 
                  reliability, or privacy practices of any Linked Sites. Access to such websites is at your own 
                  risk and subject to their terms and policies.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">6. Privacy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  RavTech values your privacy and data protection.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Company's Privacy Policy, available on the Website, forms an integral part of these 
                  Terms of Use.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  By using the Website, you consent to the collection and use of information in accordance 
                  with that policy.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">7. Modifications</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  RavTech may update or modify these Terms of Use or any part of the Website at any time 
                  without prior notice.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Continued use of the Website constitutes acceptance of such changes.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">8. Governing Law and Jurisdiction</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms of Use shall be governed by and construed in accordance with the laws of the 
                  State of Israel.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Exclusive jurisdiction for any dispute related to the Website or these Terms shall rest with 
                  the competent courts in Tel Aviv-Jaffa.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">9. Contact</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  For questions, feedback, or issues regarding the Website or these Terms of Use, please 
                  contact: <a href="mailto:info@ravtech.co.il" className="text-[#0373BA] hover:underline">info@ravtech.co.il</a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Policy */}
          <Card className="border-none shadow-xl bg-white">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
                Privacy Policy – RavTech
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  RavTech Ltd. ("RavTech", "we", "us", or "our") deeply respects your privacy and recognises 
                  the importance of protecting personal information collected about you when using our 
                  website and/or services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This Privacy Policy explains how information is collected, used, processed, and stored by 
                  RavTech, and applies to all data collected when you access or use www.ravtech.co.il or any 
                  of our related services.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">1. Providing Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When contacting us through the Website or other communication channels, you may be 
                  asked to provide personal details such as your full name, email address, and phone number 
                  — only to the extent required to contact you and respond to your enquiry.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Providing this information is entirely voluntary, but certain services may not be available 
                  without it.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">2. Use of Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The information you provide, or that is collected in accordance with this Policy, will be used 
                  solely in accordance with this Privacy Policy and applicable laws, for purposes such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Responding to your enquiries and providing requested services.</li>
                  <li>Improving our website and user experience.</li>
                  <li>Communicating important updates or information related to our services.</li>
                  <li>Sending, from time to time, professional or marketing information, subject to your consent.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may withdraw your consent to receive such information at any time by contacting us.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  RavTech will not share your personal details with advertisers. However, we may share 
                  aggregated, non-identifiable statistical data about website usage.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">3. Cookies and Tracking Technologies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our Website may use "cookies" and similar technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                  <li>Collect statistical data about website usage and performance.</li>
                  <li>Verify details and maintain security.</li>
                  <li>Customise your experience and adapt the Website to your preferences.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You can configure your browser to block or delete cookies; however, this may limit certain 
                  functions of the Website.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">4. Third-Party Services and Links</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Website may contain links to third-party websites or integrate third-party tools (such as 
                  analytics or advertising services).
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  These third parties may use cookies or other technologies according to their own privacy 
                  policies. RavTech is not responsible for the privacy practices or content of external sites.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">5. Information Security</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your information and 
                  prevent unauthorised access, use, or disclosure.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  While these measures reduce risks, no system is entirely secure, and RavTech cannot 
                  guarantee complete immunity from unauthorised access to stored data.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">6. Changes to This Policy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  RavTech may update or modify this Privacy Policy from time to time.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Any substantial changes will be posted on the Website homepage, along with the updated 
                  effective date.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Your continued use of the Website after such changes constitutes acceptance of the 
                  updated Privacy Policy.
                </p>

                <h3 className="text-2xl font-semibold text-black mt-8 mb-4">7. Contact</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  For any questions, requests, or concerns regarding this Privacy Policy, please contact us at:{" "}
                  <a href="mailto:info@ravtech.co.il" className="text-[#0373BA] hover:underline">info@ravtech.co.il</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}