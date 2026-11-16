---
title: KaiPay
tagline: Event-driven simulated payment platform
date: Nov 2026
order: 1
stack: [Java, Spring Boot, PostgreSQL, Apache Kafka, Docker, React]
repo: https://github.com/KAIYI7/KaiPay
summary: A simulated payment platform built around a transactional outbox, crash-recoverable authorization and double-entry accounting.
cover: /projects/kaipay/dashboard.jpg
coverAlt: KaiPay merchant dashboard showing simulated balance, gross volume, fees, refunds and a list of recent payments with their statuses.
gallery:
  - src: /projects/kaipay/outbox-stream.jpg
    alt: Outbox stream view listing payment events with their type, status, retry count and publish time.
    caption: Outbox stream. Events written with each payment and published from PostgreSQL to Kafka.
  - src: /projects/kaipay/double-entry-ledger.jpg
    alt: Journal detail for a payment refund with three ledger lines whose debits and credits both total RM 40.00.
    caption: A refund journal. Debits and credits balance to the sen.
---

KaiPay is a simulated payment platform. It does not move real money. I built it to work through the problems that make payment backends hard: keeping the database and the message broker consistent, recovering from a crash mid-payment, and never refunding more than was captured.

## What I built

- **Transactional outbox.** Payment records and their event intents are written to PostgreSQL in one transaction. A publisher then sends the events to Apache Kafka with retries, giving at-least-once asynchronous delivery.
- **Crash-recoverable authorization.** Authorization moves through three committed database stages, and simulator outcomes are stored durably. Kafka retry topics and consumer deduplication let processing resume without repeating a decision that is already final.
- **Double-entry accounting.** Captures and refunds in MYR are recorded as journal entries in integer sen and validated to balance. Pessimistic row locking prevents over-refunding in the concurrent scenarios I tested.
