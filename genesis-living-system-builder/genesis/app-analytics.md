# App Analytics

---

## Table of Contents

- [Overview](#overview)
- [Analytics Dashboard](#analytics-dashboard)
- [Metrics Breakdown](#metrics-breakdown)
- [Using Analytics to Improve Your App](#using-analytics-to-improve-your-app)
- [Troubleshooting](#troubleshooting)
- [What's Next](#whats-next)

---

## Overview

Every published Taskade Genesis app includes a **built-in analytics dashboard** powered by Tinybird. Track visitors, understand behavior, and optimize your apps — no third-party tools required.

> **Requirement:** Analytics only track **published** apps. Unpublished apps don't generate visitor data. See [Publish and Clone Your Apps](../community-and-sharing/publish-and-clone.md) to get your app live.

---

## Analytics Dashboard

Access analytics from your Genesis app's dashboard view. Data updates in real-time.

<!-- Screenshot: Full analytics dashboard overview -->

---

## Metrics Breakdown

### Summary Cards

| Metric | What It Measures | Why It Matters |
|---|---|---|
| **Total Visits** | Number of unique sessions | Overall app reach |
| **Pageviews** | Total pages viewed across all visits | Content engagement depth |
| **Bounce Rate** | % of visitors who leave after one page | UX quality indicator |
| **Session Duration** | Average time spent per visit | User engagement level |
| **Most Popular Browser** | Top browser used by visitors | Testing priority |
| **Visitors Online** | Real-time concurrent users | Live demand indicator |

### Time-Based Trends

| Feature | Detail |
|---|---|
| **Daily visitor trends** | Line chart showing visitors per day |
| **Pageview trends** | Line chart showing pageviews per day |
| **Date range selection** | Filter by custom date ranges (7 days, 30 days, custom) |
| **Comparison** | Compare current period to previous period |

<!-- Screenshot: Time-based trend charts -->

### Top Pages

| Column | What It Shows |
|---|---|
| **Page Path** | URL path within your app |
| **Visitors** | Unique visitors to that page |
| **Views** | Total views of that page |

> **Insight:** If a page has high views but low engagement (short time), consider improving its content or layout.

### Geographic Distribution

| Column | What It Shows |
|---|---|
| **Location** | Country / region of visitors |
| **Visitors** | Number of unique visitors from that location |

> **Insight:** If most visitors come from a specific region, consider localizing content or adjusting timezone-sensitive features.

### Traffic Sources

| Column | What It Shows |
|---|---|
| **Source** | Where traffic comes from (direct, social, referral, search) |
| **Visitors** | Unique visitors from that source |
| **Views** | Total pageviews from that source |

> **Insight:** High traffic from social means your sharing strategy is working. Low direct traffic means you need better link distribution.

### Device Analytics

| Column | What It Shows |
|---|---|
| **Device Type** | Desktop, mobile, tablet |
| **Visitors** | Unique visitors per device |

> **Insight:** If mobile visitors exceed desktop, prioritize mobile UX in your next iteration.

### Browser Analytics

| Column | What It Shows |
|---|---|
| **Browser** | Chrome, Safari, Firefox, Edge, etc. |
| **Visitors** | Unique visitors per browser |

> **Insight:** Test your app on the top 2-3 browsers in this list to ensure compatibility.

---

## Using Analytics to Improve Your App

| Signal | What It Means | Action to Take |
|---|---|---|
| **High bounce rate (>70%)** | Visitors leave quickly | Improve first impression — clearer headline, faster load, better CTA |
| **Low session duration (<30s)** | Users aren't engaging | Add more interactive content, simplify navigation |
| **Top page is NOT your main feature** | Users miss your core value | Reorganize navigation, add prominent links to key features |
| **Mobile > desktop visitors** | Mobile is your primary audience | Optimize mobile layout, larger tap targets, simpler forms |
| **One traffic source dominates** | Over-reliance on single channel | Diversify: share on multiple platforms, add SEO, use embed |
| **Geographic concentration** | Localized audience | Consider language options, timezone adjustments, local references |
| **Declining trend** | Losing engagement over time | Refresh content, add new features, re-promote on social |
| **Growing trend** | Momentum is building | Double down on what's working, add sharing prompts |

> **Iterate with data:** Use these insights to inform your next Genesis prompt. Example: "My analytics show 60% mobile users — optimize the layout for mobile with larger buttons and a single-column design."

---

## Troubleshooting

| Issue | Cause | Solution |
|---|---|---|
| No analytics data showing | App is not published | Publish your app first |
| Data seems delayed | Real-time updates may have brief lag | Wait a few minutes, refresh the dashboard |
| Visitor count seems low | App may be Private or Secret | Check visibility settings — Public apps get more traffic |
| Bounce rate is 100% | Single-page app or landing page | This is normal for single-page apps; focus on session duration instead |
| Geographic data missing | Privacy/VPN usage by visitors | Some visitor locations can't be determined — this is normal |

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Publish and Clone Your Apps](../community-and-sharing/publish-and-clone.md) | Sharing strategies to drive more traffic |
| [A Maker's Guide to AI Prompts](./prompt-guide.md) | Use analytics insights to write better iteration prompts |
| [Custom AI Agents](../ai-features/ai-agents-getting-started.md) | Add AI agents to increase engagement |
| [Automations](../automation/README.md) | Automate responses to visitor behavior |
