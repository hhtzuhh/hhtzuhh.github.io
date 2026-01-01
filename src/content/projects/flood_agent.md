[Watch Demo](https://youtu.be/aAE-llk9wU4)

[Github Link](https://github.com/tzuhan2424/flood_agent)

🌊 From Hackathon to Real-World Impact: Building an AI Flood Detection System

Last Friday, I participated in the ODSC NYC in-person hackathon and I'm excited to share that our team made it to the final ten!

Partnering with Rick, we built a multi-agent flood detection system that combines satellite imagery, AI water segmentation, and ground sensor data - all accessible through a conversational interface.
![Screenshot 1](/images/flood_agent/flood_arch.png)
![Screenshot 1](/images/flood_agent/s.png)

**What inspired me**: Growing up in Taiwan, I've witnessed the devastation floods cause in tropical regions. When I saw my friend's posts about the recent Sri Lanka floods, I knew AI could offer a better solution. This hackathon was the perfect opportunity to build it.

**What we built**:
- Multi-agent orchestration using Google ADK + Gemini 2.5 Flash API
- Custom MCP server with 8 specialized tools for:
  • Sentinel Hub API (satellite imagery)
  • Prithvi AI segmentation model (IBM/NASA water detection)
  • NOAA/USGS gauge network (8,500+ ground sensors)
- FastAPI backend with WebSocket for real-time agent activity streaming
- Web interface with auto-cycling imagery and time-series analysis

**Why it matters**: Instead of waiting for official reports, anyone can ask in natural language: "Did any flood events happen in NYC from November to December?" and get back satellite imagery, AI-detected water masks, gauge readings, and statistical analysis - all validated by ground truth sensor data.

**Current limitations & future vision**:
Sentinel-2 satellite data has a ~5-hour processing lag and requires manual queries from users. Our next goal is to transform this into an event-driven system that automatically monitors high-risk regions, detects flooding in near-real-time using AI segmentation, estimates damage zones, and sends proactive alerts to affected communities - shifting from reactive analysis to preventive warning. 

**Technical highlights**:
- ~45 seconds for single-date analysis
- Multi-date time series with confidence scoring
- Real-time agent reasoning visible in the UI
- Modular architecture: ADK agents orchestrate MCP tools that integrate external APIs

Huge thanks to ODSC for hosting this incredible event, and to Rick for being an amazing teammate. Building systems that combine agentic AI with real-world data APIs is exactly where I see the future of AI applications heading.

#ODSC #AI #FloodDetection #MultiAgentSystems #GoogleGemini #MCP #SatelliteImagery #DisasterResponse #Hackathon
