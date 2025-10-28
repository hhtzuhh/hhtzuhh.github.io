[Watch Demo](https://www.youtube.com/watch?v=riNAoCKVcgo)

# Simsiann: Shipaton 2025
[Download on App Store](https://apps.apple.com/us/app/maptive-simsiann/id6753078675)

[DevPost Link](https://devpost.com/software/maptive-simsiann)

## What Inspired Me

As someone who loves citywalking, I'm constantly fascinated by the untold stories hidden within urban landscapes. Walking through cities like New York as a foreigner, I often wonder about the experiences that happened in each corner, behind every building, at every intersection. What heartbreak occurred on that park bench? What moment of triumph happened in that coffee shop? What dreams were born on that street corner?

These stories - these Simsiann 心聲 (heart's voices) - are what truly build a city's character and make it come alive. Every place carries the emotional residue of human experiences, but most of these intimate moments remain invisible to passersby.

I wanted to create a platform where people could share their authentic emotions and experiences exactly where they happened, creating a living map of human stories. The goal was to let others experience these moments as if they were there themselves, discovering the emotional landscape that exists parallel to the physical one we see. 

![App Screenshot](/images/simsiann/mainapp.png "height:750")
![App Screenshot2](/images/simsiann/post_details.png "height:750")

## What it does

Simsiann (心聲) is a location-based storytelling platform that transforms personal experiences into visual narratives anchored to specific geographic locations. Here's how it works:

**Core Features:**
- **Location-Based Posting:** Users create stories at their current location or select specific coordinates on an interactive map
- **AI-Powered Visualization:** Each story is automatically paired with AI-generated artwork that visualizes the narrative content
- **Interactive Map Discovery:** Explore stories shared by others through an intuitive Apple Maps interface with location-based search
- **Authentic Storytelling:** Share genuine emotions, experiences, and reflections - your 心聲 (heart's voice) - tied to meaningful places



## What I Learned & How I built

This project marked my first venture into iOS development and my initial experience with backend-as-a-service platforms like Firebase. The learning curve was steep but incredibly rewarding.

**Technical Skills:**
- **iOS Development:** Mastered SwiftUI, Core Location, MapKit, and iOS app architecture patterns
- **Firebase Integration:** Learned Cloud Functions, Firestore, Authentication, and real-time data synchronization
- **Mobile Architecture:** Understanding state management, dependency injection, and proper iOS design patterns

**Product & Business Skills:**
- **App Store Publishing:** Navigated the complete App Store submission process, from provisioning profiles to app review
- **Compliance & Legal:** Discovered the critical importance of privacy policies, terms of service, content moderation, and App Store guidelines - aspects rarely covered in academic or personal projects
- **Revenue Integration:** Implemented RevenueCat for in-app purchases and subscription management
- **User Safety:** Built comprehensive content reporting, user blocking, and moderation systems

The most surprising learning was how much goes into making an app "production-ready" beyond just coding - the legal, compliance, and safety infrastructure that's essential for any consumer-facing app.

![App Screenshot3](/images/simsiann/storage.png "height:750")
![App Screenshot4](/images/simsiann/create.png "height:750")

## The Challenges

**Strategic Pivot:**
I originally envisioned a location-based music sharing service, but encountered significant API limitations from both Spotify and Apple Music that made the concept technically unfeasible. Rather than abandon the project, I pivoted to focus on the core value proposition - location-based storytelling - which led to the creation of Simsiann.

**Technical Optimization:**
GPS tracking and map rendering are notoriously resource-intensive operations that can quickly drain battery life. I spent considerable time optimizing location services, implementing smart GPS activation/deactivation based on app state, and fine-tuning map performance to ensure smooth user experience without compromising device performance.

**Firebase Learning Curve:**
As my first experience with Firebase, establishing an effective development workflow took significant iteration. I had to learn Cloud Functions deployment, Firestore security rules, proper error handling, and debugging techniques for serverless functions - all while building the app itself.

**Production Readiness:**
Moving from a working prototype to a production-ready app revealed countless edge cases: handling network failures, implementing proper loading states, ensuring data consistency, building content moderation systems, and creating comprehensive error handling throughout the entire user journey.


## What's next for maptive-simsiann
Due to the hackathon's time limit, much of Maptive-Simsiann's design needs improvement. My plan is to refine the design and integrate an AI music generation service in the future.