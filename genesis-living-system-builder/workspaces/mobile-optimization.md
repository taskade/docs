---
description: >-
  Use Taskade on iOS and Android with home-screen widgets, Quick Add, and voice input. Build Taskade Genesis apps that work well on phones.
---

# Mobile Living Experience

**Use the Taskade mobile apps on your phone or tablet. Build Taskade Genesis apps that work well on a desktop computer, a tablet, and a phone.**

{% hint style="success" %}
**Mobile-First Approach:** The Taskade mobile apps give you the core features of the web app on your phone or tablet. The apps include real-time collaboration and sync across devices. Some desktop features are not yet on mobile.
{% endhint %}

***

## Mobile App Ecosystem

### **Native Applications**

#### **iOS & Android Apps**

* **Core features** of the web app: workspaces, multiple project views, AI, and real-time collaboration (some desktop features are not yet on mobile)
* **Real-time sync** across devices (Taskade needs an internet connection. There is no offline editing mode.)
* **Push notifications** for real-time updates and alerts
* **Camera integration** to scan documents and upload photos
* **Home-screen widgets**: Quick Add, My Tasks, Recent, Starred, and Shortcuts for your AI agents
* **Date suggestions** in Quick Add when you type a date or time, such as "tomorrow 3pm"
* **Voice input** to create tasks without your hands
* **Collaboration** features for your team
* **Search** to find content quickly on mobile

#### **Progressive Web App (PWA)**

* **Install from the browser** - You do not need an app store
* **An experience like a native app** on any device
* **Automatic updates** - You do not download updates from an app store

### **Enhanced Breadcrumb Navigation**

Breadcrumb navigation shows where you are in your workspace. A breadcrumb is the path of folders and projects that lead to the page that you see. Tooltips give short hints.

**Navigation Improvements:**

* **Contextual Breadcrumbs** - A clear path that shows your current location
* **Interactive Tooltips** - Short hints when you hover over navigation elements
* **Deep Navigation Clarity** - A clear view of the levels in your workspace
* **Touch-Optimized Controls** - Larger controls that are easier to tap

### **Quick Add Widget: Instant Productivity**

The Quick Add widget stays on the home screen of your device. You can create a task from the widget. It is not necessary to open the main app.

#### **Widget Features**

* **Home screen access** - You can add tasks from the home screen of your device
* **Smart date suggestions** - If you type a date or time in plain words, Quick Add suggests a due date
* **Project selection** - Quick access to the projects that you use most
* **My Tasks, Recent, and Starred widgets** - These widgets show tasks assigned to you with a due date, recent items, and starred projects
* **Shortcuts widget** - This widget starts a chat with one of your custom AI agents in one tap
* **Internet required** - Quick Add cannot send a task while your phone is offline

#### **Setting Up Quick Add**

**iOS Setup:**

1. Long-press the home screen to start edit mode.
2. Tap the "+" button to add a widget.
3. Search for "Taskade". Then select the Quick Add widget.
4. Select the widget size and position.
5. Configure the default project and the other settings.

**Android Setup:**

1. Long-press the home screen.
2. Select "Widgets" in the menu.
3. Find the Taskade Quick Add widget. Then drag it to the home screen.
4. Change the size and position of the widget.
5. Tap the widget to configure the default settings.

#### **Smart Date Suggestions**

When you type a date or time in Quick Add, Taskade shows a **Date Suggestion**. Tap it to set the due date:

* **"Meeting tomorrow at 3pm"** → Suggests tomorrow, 3:00 PM
* **"Call client next Monday"** → Suggests next Monday
* **"Review report Friday"** → Suggests the coming Friday
* **"Launch May 1st 5 pm"** → Suggests May 1, 5:00 PM

### **Cross-Platform Synchronization**

```yaml
Real-time Sync Features:
  - Instant updates across all devices
  - Conflict-free collaborative editing
  - Cross-device cursor tracking and live collaboration
  - Background sync maintains data consistency
```

***

## Responsive Design Principles

### **Adaptive Interface Design**

#### **Screen Size Optimization**

```css
/* Mobile breakpoints automatically handled by Taskade */
Mobile (320-768px):
  - Single column layouts
  - Touch-friendly button sizes (44px minimum)
  - Simplified navigation patterns
  - Optimized text sizes (16px+ to prevent zoom)

Tablet (768-1024px):
  - Two-column layouts where appropriate
  - Expanded touch targets
  - Enhanced gesture support
  - Side panel navigation options

Desktop (1024px+):
  - Multi-column layouts
  - Keyboard shortcuts prominently displayed
  - Advanced features and dense information display
```

### **Touch-First Interaction Design**

#### **Gesture Support**

* **Swipe actions** for quick navigation
* **Long press** for context menus and advanced options
* **Pull to refresh** for real-time content updates
* **Drag and drop** to organize tasks and projects

#### **Mobile-Optimized Controls**

```yaml
Touch Interface Elements:
  Buttons:
    - Minimum 44px touch targets
    - Clear visual feedback on tap
    - Appropriate spacing between interactive elements

  Forms:
    - Large, easy-to-tap input fields
    - Smart keyboard types (email, number, URL)
    - Auto-complete and smart suggestions
    - Clear error messaging and validation

  Navigation:
    - Bottom tab bars for thumb accessibility
    - Hamburger menus for secondary navigation
    - Breadcrumbs for deep navigation clarity
```

***

## Mobile-Optimized Genesis Apps

### **Creating Mobile-First Apps**

#### **Mobile-Optimized Prompts**

Tell Taskade Genesis in your prompt that the app is for phones. Describe the controls that you want. The example that follows shows a good prompt:

```
Good Mobile App Prompt:
"Create a restaurant feedback app that works perfectly on phones:
- Large, easy-to-tap star ratings
- Simple text input with auto-resize
- One-handed photo upload with camera integration
- Big submit button that's thumb-accessible
- Create a Thank you screen that fits phone screens
- Automatic keyboard optimization for each field type"
```

#### **Responsive Layout Strategies**

```yaml
Mobile Layout Best Practices:
  Form Design:
    - Single column layouts
    - Logical tab order for keyboard users
    - Minimal scrolling required
    - Clear progress indicators

  Content Display:
    - Card-based layouts for easy scanning
    - Generous white space for readability
    - Hierarchical typography with clear headings
    - Collapsible sections for complex content

  Navigation:
    - Bottom navigation for primary actions
    - Sticky headers with essential controls
    - Contextual action buttons
    - Clear back/forward navigation paths
```

### **Mobile Performance Optimization**

#### **Fast Loading & Smooth Interactions**

```javascript
// Mobile optimization techniques automatically applied:
{
  "mobileOptimizations": {
    "lazyLoading": {
      "images": "Load only when in viewport",
      "forms": "Progressive loading for multi-step forms",
      "content": "Prioritize above-the-fold content"
    },
    "caching": {
      "appShell": "Instant loading for repeat visits",
      "media": "Optimized image sizes for device resolution"
    },
    "networkAdaptation": {
      "slowConnections": "Reduce data usage and simplify interfaces",
      "progressiveDegradation": "Features degrade gracefully on slower devices"
    }
  }
}
```

#### **Battery & Data Conservation**

* **Efficient background sync** to use less battery
* **Compressed data transfer** for slower connections
* **Scheduled updates** when the network conditions are good
* **Less animation** on slower devices

***

## Project Views for Mobile

### **Mobile-Optimized View Types**

#### **Actionsheet View**

- A simple spreadsheet-style list (paid plans)
- Fewer columns than Table view, quick to scan on a phone
- Same project data as every other view
- Good for short client lists and task queues

#### **Responsive Board View**

- Horizontal scroll across the columns (swim lanes)
- Stacked cards on narrow screens
- Drag indicators that make touch actions clear
- Short card content that is easy to read
- Quick actions with a long press

#### **Calendar View Mobile Enhancements**

- Month, week, and day views for small screens
- Date selection that is easy to tap
- Quick event creation with default values
- Gestures to move between time periods
- Integration with the calendar apps on your device

### **View Switching on Mobile**

#### **Smart View Recommendations**

The example that follows shows the views that work best on each type of device. It is a guide, not an automatic setting.

```javascript
// Suggested views by device (a guide, not an automatic setting)
{
  "deviceOptimization": {
    "phone": {
      "recommended": ["List", "Calendar", "Actionsheet"],
      "avoid": ["Org Chart", "Gantt"],
      "reason": "Better for single-column, sequential interaction"
    },
    "tablet": {
      "recommended": ["Board", "Table", "Mind Map"],
      "reason": "Larger screen enables multi-column layouts"
    },
    "desktop": {
      "recommended": "All views fully supported",
      "reason": "Full screen real estate available"
    }
  }
}
```

***

## Mobile Workflows & Automations

#### **Time-Based Mobile Context**

```json
{
  "contextualAutomation": {
    "trigger": {
      "type": "schedule.time",
      "time": "09:00",
      "device": "mobile"
    },
    "actions": [
      {
        "type": "notification.morning_briefing",
        "content": "Today's priorities and calendar overview"
      },
      {
        "type": "project.prioritize",
        "criteria": "mobile_accessible_tasks"
      }
    ]
  }
}
```

### **Voice & Camera Integration**

#### **Voice-to-Text Capabilities**

```yaml
Voice Features:
  Task Creation:
    - "Add task: Call client about project update"
    - "Create meeting: Team sync tomorrow 2 PM"
    - "Note: Great idea during lunch meeting"

  Dictation Support:
    - Long-form content creation
    - Meeting notes and summaries
    - Comment and feedback capture
```

***

## Mobile App Development Best Practices

### **Mobile-First Genesis Design**

#### **Design Principles**

```yaml
Mobile-First Checklist:
  User Interface:
    - Thumb-friendly navigation zones
    - High contrast for outdoor visibility
    - Larger text for readability
    - Simplified information architecture

  User Experience:
    - Single-purpose screens
    - Minimal cognitive load
    - Clear visual hierarchy
    - Obvious call-to-action buttons

  Performance:
    - Fast initial load (under 3 seconds)
    - Smooth 60fps animations
    - Efficient memory usage
    - Battery-conscious background processing
```

#### **Progressive Enhancement Strategy**

```javascript
// Feature detection and progressive enhancement
{
  "progressiveEnhancement": {
    "coreFeatures": {
      "available": "On all devices and connections",
      "includes": ["basic forms", "content viewing", "simple navigation"]
    },
    "enhancedFeatures": {
      "requiresCapabilities": ["faster processor", "good connection", "modern browser"],
      "includes": ["real-time collaboration", "advanced animations"]
    },
    "premiumFeatures": {
      "requiresOptimalConditions": ["latest devices", "high-speed connection"],
      "includes": ["video integration", "advanced AI features", "complex visualizations"]
    }
  }
}
```

### **Testing Across Devices**

#### **Device Testing Strategy**

```yaml
Testing Matrix:
  Devices:
    - iPhone SE (small screen baseline)
    - iPhone 14 Pro (current iOS standard)
    - Pixel 9 Pro (Android flagship)
    - iPad Air (tablet experience)
    - Various Android tablets

  Connection Types:
    - 5G (optimal experience)
    - 4G LTE (standard experience)
    - 3G (degraded but functional)

  Operating Systems:
    - iOS 15+ (minimum supported)
    - Android 10+ (minimum supported)
    - Various browsers and versions
```

***

## Mobile Analytics & Optimization

### **Mobile-Specific Metrics**

#### **Performance Tracking**

```javascript
{
  "mobileMetrics": {
    "performanceKPIs": {
      "loadTime": "< 3 seconds for initial render",
      "timeToInteractive": "< 5 seconds for full functionality",
      "frameRate": "60fps for smooth animations",
      "memoryUsage": "< 100MB for optimal performance"
    },
    "usageAnalytics": {
      "screenTime": "Average session duration by device type",
      "featureUsage": "Most/least used features on mobile",
      "dropOffPoints": "Where users abandon mobile workflows",
      "conversionRates": "Task completion rates mobile vs desktop"
    },
    "userExperience": {
      "touchAccuracy": "Success rate for touch interactions",
      "navigationEfficiency": "Steps to complete common tasks",
      "errorRates": "Frequency of user errors on mobile",
      "satisfactionScores": "User feedback on mobile experience"
    }
  }
}
```

### **Continuous Mobile Optimization**

#### **A/B Testing for Mobile**

```yaml
Mobile Optimization Tests:
  Interface Elements:
    - Button sizes (44px vs 48px vs 52px)
    - Navigation patterns (bottom tabs vs hamburger)
    - Color schemes (high contrast vs brand colors)

  Workflow Improvements:
    - Form length (single page vs multi-step)
    - Input methods (typing vs voice vs selection)
    - Confirmation patterns (immediate vs delayed feedback)

  Content Strategy:
    - Information density (minimal vs comprehensive)
    - Media usage (images vs icons vs text-only)
    - Messaging tone (casual vs professional)
```

***

## Technical Implementation

### **Mobile-Specific APIs**

#### **Device Capability Detection**

```javascript
// Automatic mobile optimization based on device capabilities
const deviceCapabilities = {
  screen: {
    size: window.innerWidth < 768 ? "mobile" : "desktop",
    density: window.devicePixelRatio,
    orientation: screen.orientation?.type,
  },
  performance: {
    connection: navigator.connection?.effectiveType,
    memory: navigator.deviceMemory,
    cores: navigator.hardwareConcurrency,
  },
  features: {
    touchSupport: "ontouchstart" in window,
    geolocation: "geolocation" in navigator,
    camera: "mediaDevices" in navigator,
    voiceRecognition: "webkitSpeechRecognition" in window,
  },
};
```

#### **Service Worker for Faster Repeat Loads**

```javascript
// Serve cached API responses for faster repeat loads (not an offline mode)
self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("/api/")) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
    );
  }
});
```

### **Mobile App Embedding**

#### **Responsive Iframe Integration**

```html
<!-- Responsive embedding for mobile-optimized apps -->
<div class="taskade-mobile-app">
  <iframe
    src="https://your-app.taskade.app"
    frameborder="0"
    style="width:100%;height:100vh;border:none;"
    allow="camera;microphone;geolocation"
    loading="lazy"
  >
  </iframe>
</div>

<style>
  .taskade-mobile-app {
    position: relative;
    width: 100%;
    max-width: 414px; /* iPhone Pro Max width */
    margin: 0 auto;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .taskade-mobile-app {
      max-width: 100%;
      border-radius: 0;
      box-shadow: none;
    }
  }
</style>
```

***

## Mobile Success Stories

### **Real-World Mobile Implementations**

#### **Field Service Management App**

```yaml
Use Case: Technician workflow management
Mobile Features:
  - Voice notes for hands-free reporting
  - Push notifications for urgent jobs

Results:
  - 45% faster job completion times
  - 60% reduction in paperwork
  - 90% technician adoption rate
  - 25% improvement in customer satisfaction
```

#### **Event Check-in System**

```yaml
Use Case: Conference registration and networking
Mobile Features:
  - Real-time capacity monitoring
  - Push notifications for session alerts

Results:
  - 50% increase in networking connections
  - Zero paper waste elimination
```

#### **Restaurant Ordering Platform**

```yaml
Use Case: Mobile-first food ordering
Mobile Features:
  - Touch-optimized menu navigation
  - Visual dish selection with photos
  - Apple Pay/Google Pay integration
  - Real-time order tracking

Results:
  - 120% increase in mobile orders
  - 35% higher average order value
  - 90% customer satisfaction score
  - 40% reduction in order errors
```

***

## **Advanced Mobile Features**

### **Mobile Widget Ecosystem**

| **Widget Type**           | **Function**                        | **Business Use Case**           |
| ------------------------- | ----------------------------------- | ------------------------------- |
| **Quick Add Widget**      | Add tasks with date suggestions     | Save ideas quickly              |
| **Shortcuts Widget**      | Start a chat with a custom AI agent | Get answers from the home screen |
| **My Tasks Widget**       | Tasks assigned to you with a due date | See the work for today quickly |
| **Recent Widget**         | Your recently opened items          | Return to your work             |
| **Starred Widget**        | Your starred projects               | One-tap access to key projects  |

### **Mobile Automation Triggers**

| **Trigger**       | **Mobile Advantage**  | **Example Use Case**             |
| ----------------- | --------------------- | -------------------------------- |
| **Time-Based**    | Background processing | Daily standup reminders          |
| **Photo Upload**  | Camera integration    | Sort expense receipts into categories automatically |

### **Connectivity and Sync**

Taskade is cloud-based and needs a live internet connection. There is no offline editing mode on mobile. Quick Add cannot send a task while your phone is offline.

* **Real-time sync** - Changes appear on every device and for every collaborator as you make them
* **After a dropped connection** - Reconnect, then make sure that your latest changes appear in the project. See [No Internet Connection](https://www.taskade.com/learn/account/offline)

### **Mobile Security & Privacy**

| **Security Feature**     | **Protection Level**  | **Business Benefit** |
| ------------------------ | --------------------- | -------------------- |
| **Encryption**           | TLS in transit, AES-256 at rest for backups and stored credentials | Protects data in transit and in storage |
| **Session control**      | Sign out a lost device in **Settings → Sessions** (**Revoke Access**) | Protect lost devices |

### **Mobile Performance Optimization**

**Battery Efficiency:**

* **Smart Background Processing** - Less battery use
* **Adaptive Refresh Rates** - Fewer unnecessary updates
* **Power-Aware Sync** - Less frequent sync when the battery is low
* **Dark Mode Optimization** - Less power use on OLED screens

**Memory Management:**

* **Intelligent Caching** - Taskade keeps frequently used data in memory
* **Progressive Loading** - Taskade loads content when you need it
* **Memory Cleanup** - Automatic release of unused memory (garbage collection)
* **Resource Optimization** - Efficient use of images and data

***

**📱 Build for mobile:** Start with a Taskade Genesis prompt that describes a phone layout. Then make sure that your app works well on each device.

_For more information about mobile-friendly workflows, read the_ [_Genesis Space Apps Guide_](../space-apps-guide/) _and_ [_Advanced Automation_](../automation/advanced-actions.md)_._

---

_Step-by-step guides on taskade.com/learn: [Guide to Taskade Mobile](https://www.taskade.com/learn/projects/mobile-guide), [Mobile Widgets](https://www.taskade.com/learn/projects/mobile-widgets)._
