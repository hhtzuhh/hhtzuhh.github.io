export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">SimSiann iOS App</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We collect information you provide when creating posts, your location data (with permission), device information, and usage analytics to improve our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Your information is used to provide our location-based storytelling service, generate AI images, enable social features, and improve the app experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We do not sell your personal information. We may share aggregated, non-personal data for analytics purposes. Your posts are visible to other users as part of the app's social features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Location Data</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Location data is used to enable location-based posting and discovery features. You can disable location services in your device settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. AI and Data Processing</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Your story content is processed by AI systems to generate images. This processing is done securely and your content is not used to train external AI models.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your information, including encryption and secure data storage through Firebase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Data Retention</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We retain your data as long as your account is active. You can delete your account and associated data at any time through the app settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You have the right to access, update, or delete your personal information. You can manage your account settings within the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Changes to Privacy Policy</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this privacy policy. We will notify users of significant changes through the app or email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              For privacy questions or requests, contact us at{' '}
              <a
                href="mailto:jaeger3435hh@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                jaeger3435hh@gmail.com
              </a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-6">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}