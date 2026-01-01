
[Watch Demo](https://youtu.be/l6fhvrg1ARc)

## Inspiration

One day, my best friend called me in a panic about planning her wedding. She was incredibly anxious about whether adding more flowers to the decoration would look good in the actual venue. She was trying to visualize it using Photoshop, crudely overlaying images of flowers onto venue photos - but it just wasn't giving her the confidence she needed to make decisions.

This conversation sparked an idea: what if there was a truly immersive way to experience venue design before committing to expensive decorations? What if you could walk through the actual venue in VR, scan real-world objects with your phone or headset, and place them exactly where you want them - all before spending a single dollar on rentals?

That's how **Venue Planner** was born - a revolutionary VR tool that transforms event planning from guesswork into an immersive, confident experience.
![Screenshot 1](/images/venueplanner/venue_arch.png)
![Screenshot 1](/images/venueplanner/object.png)

## What it does

**Venue Planner** is a comprehensive VR venue design application for Meta Quest that empowers event planners, venue managers, and anyone planning special occasions to visualize and design their perfect space. Here's what makes it special:
![Screenshot 1](/images/venueplanner/ve.JPG)
### 🏛️ **Immersive Venue Exploration**
- Load real-world venue scans (captured with tools like Polycam) directly into VR
- Walk through the venue using natural teleport locomotion
- Experience the actual space at 1:1 scale before your event
![Screenshot 1](/images/venueplanner/PCA.png)

### 📸 **AI-Powered Object Scanning**
- Use Quest's **Passthrough Camera Access** to photograph real-world items
- Select objects with multi-point precision
- Our backend pipeline automatically:
  - Segments the object using **Meta's Segment Anything Model (SAM)**
  - Generates a high-quality 3D mesh using **Tripo3D API**
  - Creates intelligent metadata using **Gemini** (name, category, style tags)
- All processed items are stored in **Firebase** with public URLs for instant access

### 🎨 **Intuitive Object Manipulation**
- Browse items from a Firebase-backed catalog with smart filters (category, source)
- Spawn furniture, decorations, and scanned objects into your venue
- Manipulate objects with controller-based beam tracking:
  - **Grab and move** objects naturally with controller grip
  - **Rotate** using thumbstick
  - **Adjust distance** along controller beam with X/Y buttons


### 🎯 **Real-World Applications**
- **Wedding Planning**: Visualize flower arrangements, seating layouts, archway placement
- **Corporate Events**: Design conference setups, trade show booths, networking spaces
- **Venue Marketing**: Help clients preview their event before booking
- **Interior Design**: Test furniture arrangements in actual spaces

## How we built it

**Venue Planner** is a sophisticated full-stack application combining cutting-edge VR, computer vision, and cloud technologies:

### Frontend (Meta Quest VR App)
- **Framework**: Meta Spatial SDK 0.9.0 with Kotlin
- **UI**: Jetpack Compose for spatial 2D panels
- **Architecture**: Entity Component System (ECS) pattern
- **Camera**: Passthrough Camera Access implementation
- **Storage**: Local caching of downloaded GLB meshes

### Backend Pipeline (Cloud Run + Flask)
**Orchestration Service**:
- Coordinates entire image → 3D mesh pipeline
- **SAM Segmentation**: Cloud Run service running Meta's Segment Anything Model
  - GPU-enabled for 0.5-1s inference
  - Accepts multiple point coordinates for better accuracy
- **Tripo3D Integration**: Converts segmented images to high-quality GLB meshes
  - 30-90 second processing time
  - Generates thumbnail previews automatically
- **LLM Metadata**: Analyzes images to generate semantic descriptions
  - Categories, style tags, descriptive names
- **Firebase Storage**: All assets stored with public URLs
  - Original photos, segmented PNGs, GLB meshes, thumbnails


### Key Technical Innovations

**1. Passthrough Camera + SAM for Real-World Object Capture**
Our most significant innovation: using Quest's Passthrough Camera Access (PCA) to bridge the physical and virtual worlds.

**The Workflow**:
1. **Capture**: User photographs real-world objects using Quest's passthrough camera
2. **Point Selection**: User taps multiple points on the object (multi-point improves accuracy)
3. **Segmentation**: SAM (Segment Anything Model) processes the image to isolate the object
   - Removes background noise and distractions
   - Creates clean, transparent PNG with just the target object
   - This noise reduction is critical for high-quality 3D mesh generation
4. **3D Generation**: Clean segmented image → Tripo3D → GLB mesh
5. **VR Integration**: Mesh spawns in VR scene, ready for placement

**Why This Matters**: Traditional 3D scanning requires specialized equipment (LiDAR, photogrammetry rigs). We enable anyone with a Quest headset to scan real objects using just the built-in camera + AI. SAM's segmentation dramatically improves mesh quality by eliminating background clutter.



## Challenges we ran into

**1. Jiggling Object Manipulation**: Objects snapped back when adjusting distance. After 7+ iterations, we solved it with distance-based beam tracking instead of direct position offsets, eliminating conflicts with the SDK's Grabbable system.

**2. Camera Preview in VR**: TextureView showed black screens in spatial panels. Switched to SurfaceView pattern which renders properly in VR.

**3. Quest Camera Limitations**: Passthrough cameras can't use multiple output surfaces simultaneously. Implemented session reconfiguration - dynamically switching between preview-only and capture modes with ~100ms pause.



## Accomplishments that we're proud of

1. **End-to-End AI Pipeline**: Successfully integrated Meta SAM, Tripo3D, and Claude AI into a seamless image → 3D mesh workflow. Users can photograph any object and have it appear in VR within 60-120 seconds.

2. **Elegant Controller Interaction**: Our distance-based beam tracking system feels natural and intuitive. Objects follow the controller's "pointing direction" perfectly, without any jittery behavior or snap-backs.

3. **Firebase Integration**: Implemented a sophisticated catalog system where all scanned items are automatically available across sessions. The filter system (source, category) makes browsing large catalogs effortless.

4. **Solving Real Problems**: This isn't a tech demo - it solves an actual problem my friend (and thousands of event planners) face. The ability to visualize venue designs before spending money is genuinely valuable.

5. **Clean Architecture**: Despite the tight deadline, we maintained clean code structure with proper separation of concerns (data models, repositories, UI components, systems). The codebase is maintainable and extensible.


## What we learned

1. **ECS Architecture**: Deepened understanding of Entity Component System patterns. Custom components like `RotatableObject` need careful design to work harmoniously with SDK's built-in systems.

2. **Quest Camera Limitations**: Learned about hardware constraints of passthrough cameras - can't use multiple output surfaces simultaneously. Session reconfiguration is the workaround.

3. **Vector Math for Manipulation**: Using dot products to project object positions onto controller beam vectors creates more intuitive manipulation than direct position offsets.

4. **AI Pipeline Orchestration**: Running LLM analysis in parallel with 3D generation significantly improves perceived performance. Users care about total time, not individual step times.

5. **Rapid Prototyping**: Built a complete backend pipeline, VR frontend, and AI integration in under 20 days. Key was focusing on MVP features first, then polishing.

6. **Problem-Solving Persistence**: The jiggling object issue took multiple attempts to solve. Documenting each failed approach helped identify the root cause eventually.

## What's next for Venue Planner

### Advanced Features
- **AI Agent Decorator**: Conversational AI that auto-decorates venues based on style preferences
  - "I want a rustic wedding" → AI selects and places appropriate items
  - Uses Claude's reasoning to understand venue geometry (floors, windows, doors)
  - Smart placement algorithms for optimal layouts

- **2D Realistic Rendering**: Generate photorealistic images for client presentations
  - Position virtual camera at any angle
  - Composite 3D objects with passthrough background
  - Optional AI enhancement with image generation models
  - Export to gallery for sharing

- **Multi-User Collaboration**: Multiple people design together in VR
  - Real-time synchronization via Firebase
  - See other users' avatars and cursor positions
  - Chat or voice communication

- **Budget Tracking**: Track costs of real furniture/decoration items
  - Link scanned items to vendor pricing
  - Running total of venue design cost
  - Budget optimization suggestions

- **Vendor Integration**: Direct links to furniture/decoration vendors
  - "Buy this item" button in catalog
  - Affiliate partnerships for monetization
  - Rental vs purchase comparisons

- **Advanced Venue Scanning**: Built-in venue scanning workflow
  - Guide users through optimal scanning patterns
  - Automatic mesh optimization and collision generation
  - Cloud processing for better quality

### Technical Improvements
- **Hand Tracking**: Add gesture-based manipulation for controller-free experience
- **Voice Commands**: "Add a chair here", "Show me flower arrangements"
- **AR Mode**: Use Quest's passthrough more extensively for real-world overlay
- **Performance Optimization**: LOD system for distant objects, mesh compression


