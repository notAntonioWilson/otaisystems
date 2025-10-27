export default function TermsPage() {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-32 max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="space-y-2 mb-12 text-muted-foreground">
            <p><strong>Effective Date:</strong> {today}</p>
            <p><strong>Last Updated:</strong> {today}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to otaisystems.com, operated by OTAI LLC ("we," "our," "us"). By accessing or using our website and services, you agree to these Terms of Service ("Terms"). If you do not agree, please do not use our site.
            </p>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">1. Use of Our Website</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use our website and services for lawful purposes only. You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Copy, resell, or redistribute content from our site.</li>
                <li>Attempt to access systems or data not intended for you.</li>
                <li>Use any automated tools or bots to disrupt or overload the website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OTAI LLC provides AI automation consulting, system development, and related services. All projects, deliverables, or custom builds are subject to mutually agreed terms via separate proposals or contracts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We may update, suspend, or discontinue parts of the site or services at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">3. Bookings and Payments</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All bookings are handled through cal.com. By booking, you agree to provide accurate contact information and comply with any payment or cancellation terms outlined during the scheduling process.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We do not process direct payments through the website at this time.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All text, visuals, software, and intellectual property on this website are owned by OTAI LLC or licensed for use. You may not copy, distribute, or create derivative works without written consent.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OTAI LLC is not liable for any indirect, incidental, or consequential damages resulting from your use of the site or services. Our total liability for any claim shall not exceed the amount paid (if any) for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">6. Disclaimers</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We provide our site and content "as-is" without warranties of any kind.</li>
                <li>Results from AI automation vary by client use, configuration, and external factors.</li>
                <li>Nothing on this site constitutes legal, financial, or investment advice.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">7. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the State of Michigan, United States, without regard to conflict-of-law principles.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">8. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions or concerns about these Terms, contact:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Email:{' '}
                <a href="mailto:owner@otaisystems.com" className="text-primary hover:underline">
                  owner@otaisystems.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
  );
}
