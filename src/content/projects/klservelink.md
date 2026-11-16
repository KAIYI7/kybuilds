---
title: KLServeLink
tagline: Full-stack service marketplace
date: Apr 2026
order: 3
stack: [Flutter, Dart, TypeScript, Firebase, Python, FastAPI, Google Cloud Run]
repo: https://github.com/KAIYI7/klservelink
summary: A two-sided service marketplace with server-authoritative booking, dynamic pricing and a batch analytics service.
cover:
  - /projects/klservelink/recommendations.jpg
  - /projects/klservelink/booking.jpg
  - /projects/klservelink/dynamic-pricing.jpg
coverAlt: Three KLServeLink phone screens showing recommended services, a successful booking request and the dynamic pricing editor.
coverLabel: Customer and provider screens
coverCaption: "Left to right: recommended services, a booking request sent to the provider, and the provider's dynamic pricing caps."
---

KLServeLink is a marketplace app connecting customers with service providers. Both roles use the same Flutter app.

## What I built

- **Server-authoritative booking and pricing.** Booking and dynamic pricing run in TypeScript Cloud Functions, not on the client. Firestore transactions and 5-minute slot locks mitigate overlapping bookings.
- **Batch analytics service.** A containerized Python/FastAPI service produces hybrid k-NN recommendations, Prophet-based demand forecasts and review sentiment analysis, and writes the results to Firestore.
- **Dual-role Flutter app.** The app integrates Firebase Authentication, real-time messaging, location-aware discovery with Google Maps, and analytics for providers.
