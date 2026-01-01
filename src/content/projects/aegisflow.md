[Watch Demo](https://youtu.be/mwfWQ4osCrU)

[Github Link](https://github.com/hhtzuhh/aegisflow)

## Inspiration

Modern microservices generate chaotic logs—different languages, frameworks, and formats. Traditional solutions like ELK require rigid schemas, creating operational overhead and causing pipelines to break when logs don't conform.

**The pain:** Security incidents buried in terabytes of messy logs, false positives overwhelming engineers, and fraud patterns going undetected.

**The insight:** What if AI could gracefully handle messy reality instead of demanding perfect structure? What if agents could both monitor in real-time AND investigate historical patterns on-demand?

AegisFlow uses intelligent agents as a safety net: when logs break expectations, AI steps in.

![Screenshot 1](/images/aegisflow/system-arch.jpg)


## What it does & How we built

AegisFlow is a **dual-mode multi-agent observability system** deployed entirely on Google Cloud. It operates in two complementary modes:

### Mode 1: Real-Time Event-Driven Detection (Background Workers)

Three specialized agents continuously process streaming logs via Cloud Pub/Sub:

**Agent 0 - Log Parser:**
- Ingests raw, unstructured logs from Bank of Anthos microservices (GKE)
- **Primary parser**: Fast keyword/regex extraction for well-formatted logs (zero LLM cost)
- **Fallback parser**: Gemini NLP when keyword parsing fails on malformed/unexpected formats
- This hybrid approach optimizes cost: only invoking LLM when necessary
- Publishes clean JSON events to downstream agents

**Agent 2 - Fraud Detector:**
- Analyzes structured events for suspicious patterns in real-time
- Detects: velocity attacks, brute force attempts, large-value transactions, self-payment fraud
- Assigns confidence scores (0-100) and severity levels (low/medium/high/critical)
- Sends Slack alerts for critical threats and logs all alerts to BigQuery

**Agent 3 - Health Monitor:**
- Monitors infrastructure health by detecting error spikes across services
- Correlates failures across multiple microservices to identify cascading issues
- Classifies incidents using SRE severity levels (P1/P2/P3/P4)
- Triggers Slack notifications for P1/P2 incidents affecting customer transactions
![Screenshot 1](/images/aegisflow/chat.png)
![Screenshot 1](/images/aegisflow/logs.png)
### Mode 2: Interactive Investigation (A2A Agent Network)

Three interactive agents allow security and SRE teams to investigate historical patterns:

**Orchestrator Agent:**
- Receives natural language queries from users (CLI/Web UI)
- Routes fraud-related questions to Fraud Investigator
- Routes infrastructure questions to System Investigator
- Returns comprehensive analysis combining multiple specialists

**Fraud Investigator Agent:**
- Queries BigQuery `alerts` table using natural language
- Analyzes historical fraud patterns, trends, and suspicious accounts
- Provides actionable insights: "Show me all velocity attacks in the last 24 hours"

**System Investigator Agent:**
- Queries BigQuery `incidents` table for infrastructure issues
- Identifies root causes, affected services, and incident trends
- Supports SRE workflows: "What P1 incidents happened today?"


**Key Innovation:** The same BigQuery tables feed both real-time detection (Agents 2/3 write) and historical investigation (A2A agents read), creating a closed-loop intelligence system.


## Challenges we ran into

### 1. Event-Driven Agent Architecture - A New Paradigm

The concept of **agents as background workers** processing Pub/Sub streams was entirely new territory. Traditional agent frameworks expect request-response patterns, but we needed agents to continuously consume events from message queues. Key challenges:

- **Session management**: How does an agent maintain context when processing thousands of independent events?
- **Backpressure handling**: What happens when Gemini API is slower than the Pub/Sub message rate?
- **Error recovery**: If an agent crashes mid-processing, how do we ensure no events are lost?

We solved this by using Cloud Run's **worker pool** pattern with manual acknowledgment, allowing agents to process events at their own pace while preserving message delivery guarantees.

### 2. Orchestrating 8 Google Cloud Services

Building a production pipeline across GKE, Cloud Logging, Log Router, Pub/Sub, Cloud Run (workers + services), BigQuery, and Cloud Build required careful orchestration.

**The hardest part:** IAM permissions. Cloud Run workers need Pub/Sub read + BigQuery write. A2A services need to invoke each other. All while following least-privilege principles. Getting this right took multiple iterations and debugging sessions.


### 3. Making LLMs Reliable in Production

Gemini occasionally skipped tool calls, generated malformed SQL, or forgot to send critical notifications—even with detailed prompts.

**Solution:** Explicit validation and fallbacks. If the agent doesn't call BigQuery's `execute_sql`, we fall back to direct insertion. If SQL fails due to escaping errors, we retry with corrected examples in the prompt. Production reliability requires defensive programming, even with AI.


## What we learned

💡 **Agents as infrastructure components** - Not just chatbots. Agents can be autonomous background workers processing event streams, making this a fundamentally new architectural pattern.

💡 **Serverless scales effortlessly** - Google Cloud's serverless stack (Cloud Run + Pub/Sub + BigQuery) handled everything with zero infrastructure management. Deployed 6 agents, auto-scaling included.

💡 **Specialist agents > Monoliths** - The A2A pattern (orchestrator + specialists) mirrors microservices architecture but for AI. Routing queries to focused experts works better than one "do everything" agent.

💡 **Cost-conscious AI** - Pre-filtering with rules before LLM invocation saved 95% of costs. Smart engineering beats brute-force AI.

## Accomplishments that we're proud of

✅ **6 agents in production** - Deployed 3 background workers + 3 interactive investigators working together seamlessly

✅ **Dual-mode architecture** - Real-time event detection AND on-demand historical investigation using the same data foundation

✅ **Closed-loop intelligence** - Background agents write to BigQuery, investigator agents read from it—creating a self-reinforcing system

✅ **Zero infrastructure management** - Entire system runs serverless, auto-scales from zero to thousands of requests

✅ **Production-grade reliability** - Hybrid parsing, fallback logic, and defensive programming ensure the system handles real-world chaos

## What's next for AegisFlow

🤖 **Auto-remediation agents** - Don't just alert, automatically fix issues (restart services, scale resources, block IPs)

📊 **ML-based anomaly detection** - Unsupervised learning to catch unknown attack patterns beyond rule-based detection

