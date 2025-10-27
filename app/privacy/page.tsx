import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';

export default function PrivacyPage() {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-32 max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="space-y-2 mb-12 text-muted-foreground">
            <p><strong>Effective Date:</strong> {today}</p>
            <p><strong>Last Updated:</strong> {today}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              OTAI LLC ("we," "our," "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and protect your information when you visit otaisystems.com or engage with our services.
            </p>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect the following types of information from users who interact with our website or chatbot:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and business name.</li>
                <li><strong>Automatic Data:</strong> Browser type, device type, IP address, and usage data via cookies or analytics tools.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Respond to inquiries or bookings made through our website or chatbot.</li>
                <li>Deliver requested AI automation services and communicate with clients.</li>
                <li>Improve our website's functionality, performance, and user experience.</li>
                <li>Analyze aggregate website usage to optimize content and marketing.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell, rent, or trade your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">3. Data Sharing and Third Parties</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We only share your information when necessary to provide our services or comply with legal obligations. We may use trusted third-party tools such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Google Analytics</strong> for anonymous traffic and usage data.</li>
                <li><strong>Cal.com</strong> for scheduling and booking management.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                These services have their own privacy practices, and your use of them is subject to their policies.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">4. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to monitor website activity and improve your experience. You can disable cookies in your browser settings, though some features of the site may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use reasonable administrative and technical measures to protect your information from unauthorized access, loss, or misuse. However, no system is completely secure, and we cannot guarantee absolute protection.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access, update, or delete your information.</li>
                <li>Opt out of communications or analytics tracking.</li>
                <li>Request a copy of the personal data we hold about you.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, contact us at{' '}
                <a href="mailto:owner@otaisystems.com" className="text-primary hover:underline">
                  owner@otaisystems.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">7. International Users</h2>
              <p className="text-muted-foreground leading-relaxed">
                We operate in the United States but serve clients worldwide. By submitting information, you consent to the transfer and storage of your data in the U.S.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions or privacy requests, email{' '}
                <a href="mailto:owner@otaisystems.com" className="text-primary hover:underline">
                  owner@otaisystems.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
